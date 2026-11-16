/**
 * Access codes for members (server/lib/access-codes.js; docs/21 N-02).
 *
 *   POST /api/access/redeem   { code }   → { ok, already, batch: { label, sponsor, product, plan, access_ends_at }, access }
 *                                         400 not a code · 404 not valid · 409 no seats left · 410 past its last day
 *   GET  /api/access/codes               → the codes this member has redeemed
 *
 * Signed-in members only. Attempts are limited per member and per address, so a code cannot be guessed.
 */
import { json, fail, readJson, sameOrigin, rateLimit, clientIp } from '../../../server/lib/http.js';
import { getUser } from '../../../server/lib/auth.js';
import { accessFor } from '../../../server/lib/entitlements.js';
import { redeem, myRedemptions } from '../../../server/lib/access-codes.js';

export async function onRequestGet({ request, env, params }) {
  if (!env.DB) return fail(503, 'access codes not configured');
  if ((params.route || []).join('/') !== 'codes') return fail(404, 'unknown route');
  const user = await getUser(request, env);
  if (!user) return fail(401, 'not signed in');
  try { return json({ ok: true, codes: await myRedemptions(env, user.id) }); } catch (e) { return json({ ok: true, codes: [], pending_migration: true }); }
}

export async function onRequestPost({ request, env, params }) {
  if (!env.DB) return fail(503, 'access codes not configured');
  if ((params.route || []).join('/') !== 'redeem') return fail(404, 'unknown route');
  if (!sameOrigin(request)) return fail(403, 'origin');
  const user = await getUser(request, env);
  if (!user) return fail(401, 'not signed in');
  const okUser = await rateLimit(env, 'code:u:' + user.id, 10, 3600);
  const okIp = await rateLimit(env, 'code:ip:' + clientIp(request), 30, 3600);
  if (!okUser || !okIp) return fail(429, 'too many attempts; try again in an hour');
  const body = (await readJson(request)) || {};
  let r;
  try { r = await redeem(env, user, body.code); } catch (e) { return fail(503, 'access codes not configured'); }   /* before migration 0010 */
  if (!r.ok) return fail(r.status, r.error, { field: r.field });
  return json({ ok: true, already: r.already, batch: r.batch, access: await accessFor(env, user) }, r.already ? 200 : 201);
}
