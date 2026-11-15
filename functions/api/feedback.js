/**
 * POST /api/feedback  { kind, message, rating?, contact?, page?, locale?, turnstile? }
 *
 * The "Feedback" button (js/mt-feedback.js). Anyone may send one; a signed-in member's
 * id is stored with it so the team can reply, a guest may leave an address in `contact`.
 * Stored in D1 (migration 0007) and read in the admin page; nothing is e-mailed, so it
 * costs no mail quota.
 *
 *   kind     bug | idea | content | praise | other
 *   rating   1 to 5, optional
 *   message  5 to 2,000 characters
 */
import { json, fail, readJson, sameOrigin, rateLimit, clientIp, clip, localeOf, isEmail, normEmail, newId, nowIso, verifyTurnstile } from '../../server/lib/http.js';
import { getUser } from '../../server/lib/auth.js';

const FEEDBACK_KINDS = ['bug', 'idea', 'content', 'praise', 'other'];

export async function onRequestPost({ request, env }) {
  if (!env.DB) return fail(503, 'feedback not configured');
  if (!sameOrigin(request)) return fail(403, 'origin');
  const ip = clientIp(request);
  if (!(await rateLimit(env, 'fb:' + ip, 10, 3600))) return fail(429, 'too many submissions');
  const body = (await readJson(request)) || {};
  if (body._gotcha) return json({ ok: true, id: 'ok' });   /* honeypot: swallow silently */
  const user = await getUser(request, env);
  /* a signed-in member has already passed the check at sign-in; guests go through Turnstile when it is configured */
  if (!user) { const ts = await verifyTurnstile(env, body.turnstile, ip); if (!ts.ok) return fail(400, 'verification failed', { field: 'turnstile' }); }
  const kind = FEEDBACK_KINDS.includes(body.kind) ? body.kind : null;
  if (!kind) return fail(400, 'choose what this is about', { field: 'kind' });
  const message = clip(body.message, 2000);
  if (message.length < 5) return fail(400, 'tell us a little more', { field: 'message' });
  let rating = null;
  if (body.rating !== undefined && body.rating !== null && body.rating !== '') {
    rating = Number(body.rating);
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) return fail(400, 'rating must be 1 to 5', { field: 'rating' });
  }
  let contact = null;
  if (!user && body.contact) { contact = normEmail(body.contact); if (!isEmail(contact)) return fail(400, 'valid e-mail required', { field: 'contact' }); }
  const id = newId(), now = nowIso();
  try {
    await env.DB.prepare('INSERT INTO feedback (id, user_id, kind, rating, message, contact, page, locale, user_agent, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
      .bind(id, user ? user.id : null, kind, rating, message, contact, clip(body.page, 300) || null, localeOf(body.locale), (request.headers.get('user-agent') || '').slice(0, 200), 'new', now, now).run();
  } catch (e) {
    return fail(503, 'feedback not configured');   /* before migration 0007 */
  }
  return json({ ok: true, id }, 201);
}
