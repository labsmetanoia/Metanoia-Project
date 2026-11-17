/**
 * Reminders on a member's device by Web Push (server/lib/push.js, server/lib/reminders.js; docs/21 N-05).
 *
 *   GET  /api/push                → { ok, configured, key, devices }   key is the public key a browser subscribes with
 *   POST /api/push/subscribe      { subscription: { endpoint, keys: { p256dh, auth } }, lang? } → { ok, devices }
 *   POST /api/push/unsubscribe    { endpoint } → { ok, devices }
 *   POST /api/push/test           → { ok, sent, failed }             one notification to each of the member's devices
 *
 * Signed-in members only, and only once the owner has set the push keys. The daily reminder itself is
 * sent by the Worker. A member has at most five devices; the oldest is dropped beyond that.
 */
import { json, fail, readJson, sameOrigin, rateLimit } from '../../../server/lib/http.js';
import { getUser } from '../../../server/lib/auth.js';
import { pushConfigured, pushPublicKey, cleanSubscription, sendPush } from '../../../server/lib/push.js';
import { saveSubscription } from '../../../server/lib/reminders.js';

const count = async (env, userId) => { try { const r = await env.DB.prepare('SELECT COUNT(*) AS n FROM push_subscriptions WHERE user_id = ?').bind(userId).first(); return r ? r.n : 0; } catch (e) { return 0; } };

export async function onRequestGet({ request, env, params }) {
  if ((params.route || []).length) return fail(404, 'not found');
  if (!env.DB || !pushConfigured(env)) return json({ ok: true, configured: false, key: null, devices: 0 });
  const user = await getUser(request, env);
  return json({ ok: true, configured: true, key: pushPublicKey(env), signed_in: !!user, devices: user ? await count(env, user.id) : 0 });
}

export async function onRequestPost({ request, env, params }) {
  if (!env.DB) return fail(503, 'reminders not available');
  if (!sameOrigin(request)) return fail(403, 'origin');
  const route = (params.route || []).join('/');
  if (route !== 'subscribe' && route !== 'unsubscribe' && route !== 'test') return fail(404, 'not found');
  const user = await getUser(request, env);
  if (!user) return fail(401, 'not signed in');
  if (!pushConfigured(env)) return fail(503, 'reminders not available');
  const body = (await readJson(request, 8 * 1024)) || {};
  try {
    if (route === 'subscribe') {
      if (!(await rateLimit(env, 'pushsub:' + user.id, 20, 3600))) return fail(429, 'slow down');
      const c = cleanSubscription(body.subscription);
      if (c.error) return fail(400, c.error, { field: c.field });
      await saveSubscription(env, user.id, c.sub, body.lang === 'id' ? 'id' : (body.lang === 'en' ? 'en' : user.locale));
      return json({ ok: true, devices: await count(env, user.id) }, 201);
    }
    if (route === 'unsubscribe') {
      if (typeof body.endpoint !== 'string') return fail(400, 'endpoint required', { field: 'endpoint' });
      await env.DB.prepare('DELETE FROM push_subscriptions WHERE user_id = ? AND endpoint = ?').bind(user.id, body.endpoint.slice(0, 1000)).run();
      return json({ ok: true, devices: await count(env, user.id) });
    }
    if (!(await rateLimit(env, 'pushtest:' + user.id, 5, 3600))) return fail(429, 'slow down');
    const subs = (await env.DB.prepare('SELECT id, endpoint, p256dh, auth, locale FROM push_subscriptions WHERE user_id = ? ORDER BY created_at DESC LIMIT 5').bind(user.id).all()).results || [];
    if (!subs.length) return fail(409, 'no device has reminders on');
    let sent = 0, failed = 0; const cache = {};
    for (const s of subs) {
      const id = s.locale === 'id';
      const r = await sendPush(env, s, { title: 'Metanoia Labs', body: id ? 'Pengingat aktif di perangkat ini.' : 'Reminders are on for this device.', url: '/products/the-compass/', tag: 'mt-test' }, { ttl: 600, cache });
      if (r.ok) sent++; else { failed++; if (r.gone) await env.DB.prepare('DELETE FROM push_subscriptions WHERE id = ?').bind(s.id).run(); }
    }
    return json({ ok: true, sent, failed });
  } catch (e) { return fail(503, 'reminders not available'); }   /* before migration 0012 */
}
