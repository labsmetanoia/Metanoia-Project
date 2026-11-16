/**
 * The AI coach for members (server/lib/coach.js; docs/21 N-01).
 *
 *   GET  /api/coach    → { ok, available, trial, remaining, per_member }   whether this visitor may use it now
 *   POST /api/coach    { kind: 'interview' | 'cv', question?, text, lang? }
 *                      → { ok, feedback, usage: { remaining, per_member } }
 *                      401 not signed in · 403 not open to members yet · 400 { field } · 429 { scope: member | site }
 *                      502 the model did not answer · 503 not configured
 *
 * Signed-in members only. Until the owner switches the coach on in the admin page, only admins get an
 * answer. The member's text goes to the model for this one request and is not stored.
 */
import { json, fail, readJson, sameOrigin, rateLimit } from '../../server/lib/http.js';
import { getUser } from '../../server/lib/auth.js';
import { coachConfigured, coachMode, usage, perMember, validate, review } from '../../server/lib/coach.js';

async function gate(request, env) {
  const user = await getUser(request, env);
  if (!user) return { user: null, open: false };
  const mode = coachConfigured(env) ? await coachMode(env) : 'off';
  return { user, mode, open: coachConfigured(env) && (mode === 'on' || user.role === 'admin') };
}

export async function onRequestGet({ request, env }) {
  if (!env.DB) return json({ ok: true, available: false });
  const g = await gate(request, env);
  if (!g.user || !g.open) return json({ ok: true, available: false, signed_in: !!g.user });
  const u = await usage(env, g.user.id);
  return json({ ok: true, available: !u.pending_migration && u.budget_left > 0, trial: g.mode !== 'on', remaining: u.remaining, per_member: perMember(env) });
}

export async function onRequestPost({ request, env }) {
  if (!env.DB) return fail(503, 'coach not available');
  if (!sameOrigin(request)) return fail(403, 'origin');
  const g = await gate(request, env);
  if (!g.user) return fail(401, 'not signed in');
  if (!coachConfigured(env)) return fail(503, 'coach not available');
  if (!g.open) return fail(403, 'the coach is not open to members yet');
  if (!(await rateLimit(env, 'coach:' + g.user.id, 20, 3600))) return fail(429, 'slow down', { scope: 'member' });
  const body = (await readJson(request, 16 * 1024)) || {};
  const v = validate(String(body.kind || ''), body.question, body.text);
  if (v.error) return fail(400, v.error, { field: v.field, min: v.min, max: v.max });
  const r = await review(env, { userId: g.user.id, kind: body.kind, lang: body.lang === 'id' ? 'id' : 'en', question: v.question, text: v.text });
  if (!r.ok) return fail(r.status, r.error, { scope: r.scope, limit: r.limit });
  return json({ ok: true, feedback: r.feedback, usage: r.usage });
}
