/**
 * The shareable readiness profile (server/lib/profile.js; docs/21 N-06).
 *
 *   GET  /api/profile            → { ok, profile: { enabled, slug, url, show_band, show_certificates, show_progress, hidden_by_admin },
 *                                    available: { name, band, certificates, learning } }      the member's own settings
 *   POST /api/profile            { enabled?, show_band?, show_certificates?, show_progress? } → the same shape
 *   POST /api/profile/reset      → the same shape, with a new address; the old one stops working
 *   GET  /api/profile/<slug>     → { ok, profile: { name, since, band, certificates, learning } }   public; 404 when off
 *
 * The public answer holds only what the member ticked. It is the same for every visitor, so it may be
 * cached for five minutes.
 */
import { json, fail, readJson, sameOrigin, rateLimit, clientIp } from '../../../server/lib/http.js';
import { getUser } from '../../../server/lib/auth.js';
import { SLUG, manifestsFor, memberProfile, saveProfile, resetSlug, publicProfile } from '../../../server/lib/profile.js';

const siteOf = (request, env) => (env.SITE_URL || new URL(request.url).origin).replace(/\/$/, '');

export async function onRequestGet({ request, env, params }) {
  if (!env.DB) return fail(503, 'profiles not configured');
  const parts = params.route || [];
  if (parts.length === 1) {
    if (!SLUG.test(parts[0])) return fail(404, 'no such profile');
    if (!(await rateLimit(env, 'prof:' + clientIp(request), 240, 600))) return fail(429, 'slow down');
    const p = await publicProfile(env, parts[0], await manifestsFor(request, env)).catch(() => null);
    if (!p) return fail(404, 'no such profile');
    return json({ ok: true, profile: p }, 200, { 'cache-control': 'public, max-age=300', 'x-robots-tag': 'noindex' });
  }
  if (parts.length) return fail(404, 'not found');
  const user = await getUser(request, env);
  if (!user) return fail(401, 'not signed in');
  try { return json({ ok: true, ...(await memberProfile(env, user, await manifestsFor(request, env), siteOf(request, env))) }); }
  catch (e) { return json({ ok: true, pending_migration: true, profile: null, available: null }); }
}

export async function onRequestPost({ request, env, params }) {
  if (!env.DB) return fail(503, 'profiles not configured');
  if (!sameOrigin(request)) return fail(403, 'origin');
  const route = (params.route || []).join('/');
  if (route !== '' && route !== 'reset') return fail(404, 'not found');
  const user = await getUser(request, env);
  if (!user) return fail(401, 'not signed in');
  if (!(await rateLimit(env, 'profset:' + user.id, 40, 3600))) return fail(429, 'slow down');
  try {
    if (route === 'reset') await resetSlug(env, user);
    else await saveProfile(env, user, (await readJson(request, 4 * 1024)) || {});
    return json({ ok: true, ...(await memberProfile(env, user, await manifestsFor(request, env), siteOf(request, env))) });
  } catch (e) { return fail(503, 'profiles not available'); }   /* before migration 0013 */
}
