/**
 * Certificates of completion (migration 0008).
 *
 *   POST /api/certificates   { product }   signed-in member. The server reads the member's synced lesson
 *                                           progress and the product's lesson manifest (built to
 *                                           /data/lms/<product>/manifest.json); when every core lesson is
 *                                           complete it issues the certificate, or returns the one already
 *                                           issued with the current display name. → { ok, certificate, url }
 *                                           409 { error: 'incomplete', done, total } otherwise.
 *   GET  /api/certificates                  the member's own certificates
 *   GET  /api/certificates/:id              public verification: { ok, certificate: { id, name, product,
 *                                           product_name, lessons, issued_at } }. Never the e-mail address.
 *                                           404 for an unknown or revoked id.
 *
 * The certificate records that the lessons were completed on this platform. It is not an
 * accredited qualification, and the page says so.
 */
import { json, fail, readJson, sameOrigin, rateLimit, clientIp, randomToken, nowIso } from '../../../server/lib/http.js';
import { getUser } from '../../../server/lib/auth.js';

const PRODUCTS = { 'the-map': 'The Map', 'the-pack': 'The Pack', 'the-rope': 'The Rope', 'the-route': 'The Route' };
const pub = c => ({ id: c.id, name: c.name, product: c.product, product_name: PRODUCTS[c.product] || c.product, lessons: c.lessons, issued_at: c.issued_at });

/* the core lessons of a product, from the manifest the build writes next to the lesson files */
async function manifest(request, env, product) {
  try {
    const url = new URL(`/data/lms/${product}/manifest.json`, request.url);
    const r = env.ASSETS ? await env.ASSETS.fetch(new Request(url)) : await fetch(url);
    if (!r.ok) return null;
    const m = await r.json();
    return Array.isArray(m.lessons) && m.lessons.length ? m.lessons.map(String) : null;
  } catch (e) { return null; }
}

/* lesson completion as the browser stores it ('mt-lms:<product>' = { "1.1": true, … }), mirrored to the
   `browser` progress namespace by js/mt-progress.js as a keyed document */
async function completed(env, userId, product) {
  const row = await env.DB.prepare("SELECT data_json FROM progress WHERE user_id = ? AND ns = 'browser'").bind(userId).first();
  if (!row) return {};
  try {
    const doc = JSON.parse(row.data_json);
    const raw = doc && doc.keys ? doc.keys['mt-lms:' + product] : null;
    const p = typeof raw === 'string' ? JSON.parse(raw) : raw;
    return p && typeof p === 'object' ? p : {};
  } catch (e) { return {}; }
}

export async function onRequestGet({ request, env, params }) {
  if (!env.DB) return fail(503, 'certificates not configured');
  const parts = params.route || [];
  if (!parts.length) {
    const user = await getUser(request, env);
    if (!user) return fail(401, 'not signed in');
    const r = await env.DB.prepare('SELECT * FROM certificates WHERE user_id = ? AND revoked_at IS NULL ORDER BY issued_at').bind(user.id).all().catch(() => ({ results: [] }));
    return json({ ok: true, certificates: (r.results || []).map(pub) });
  }
  const id = String(parts[0] || '');
  if (parts.length !== 1 || !/^[A-Za-z0-9_-]{12,32}$/.test(id)) return fail(404, 'no such certificate');
  if (!(await rateLimit(env, 'certv:' + clientIp(request), 120, 600))) return fail(429, 'slow down');
  const c = await env.DB.prepare('SELECT * FROM certificates WHERE id = ? AND revoked_at IS NULL').bind(id).first().catch(() => null);
  if (!c) return fail(404, 'no such certificate');
  return json({ ok: true, certificate: pub(c) }, 200, { 'cache-control': 'public, max-age=300' });
}

export async function onRequestPost({ request, env, params }) {
  if (!env.DB) return fail(503, 'certificates not configured');
  if ((params.route || []).length) return fail(404, 'unknown route');
  if (!sameOrigin(request)) return fail(403, 'origin');
  const user = await getUser(request, env);
  if (!user) return fail(401, 'not signed in');
  if (!(await rateLimit(env, 'cert:' + user.id, 30, 3600))) return fail(429, 'too many attempts');
  const body = (await readJson(request)) || {};
  const product = String(body.product || '');
  if (!PRODUCTS[product]) return fail(400, 'unknown product', { field: 'product' });
  const lessons = await manifest(request, env, product);
  if (!lessons) return fail(503, 'lesson list not available');
  const p = await completed(env, user.id, product);
  const done = lessons.filter(n => p[n]).length;
  if (done < lessons.length) return fail(409, 'incomplete', { done, total: lessons.length });
  const now = nowIso(), site = env.SITE_URL || new URL(request.url).origin;
  let c;
  try {
    c = await env.DB.prepare('SELECT * FROM certificates WHERE user_id = ? AND product = ?').bind(user.id, product).first();
    if (c && c.revoked_at) return fail(403, 'this certificate was withdrawn; write to hello@metanoialabs.net');
    if (c) {
      /* the same certificate, with the member's current display name */
      await env.DB.prepare('UPDATE certificates SET name = ?, lessons = ?, updated_at = ? WHERE id = ?').bind(user.name, lessons.length, now, c.id).run();
    } else {
      const id = randomToken(12);
      await env.DB.prepare('INSERT INTO certificates (id, user_id, product, name, lessons, issued_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)').bind(id, user.id, product, user.name, lessons.length, now, now).run();
    }
    c = await env.DB.prepare('SELECT * FROM certificates WHERE user_id = ? AND product = ?').bind(user.id, product).first();
  } catch (e) {
    return fail(503, 'certificates not configured');   /* before migration 0008 */
  }
  return json({ ok: true, certificate: pub(c), url: `${site}/certificate?c=${c.id}` }, 201);
}
