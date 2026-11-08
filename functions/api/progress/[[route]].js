/**
 * Cross-device progress for signed-in members.
 *
 *   GET /api/progress            → { ok, namespaces: { ns: { data, version, updated_at } } }
 *   GET /api/progress/:ns        → { ok, data, version, updated_at } | 404
 *   PUT /api/progress/:ns        { data, version }
 *
 * Keyed documents ({ keys, times, deleted }, the shape mt-progress.js sends
 * for the `browser` namespace) are merged per key with what is stored, the
 * newest write winning (server/lib/progress.js); the response carries the
 * merged document so the device can apply what the others wrote. Any other
 * shape keeps the simple rule: the newer version replaces the older one, and
 * a stale write gets the stored record back.
 */
import { json, fail, readJson, sameOrigin, nowIso } from '../../../server/lib/http.js';
import { getUser } from '../../../server/lib/auth.js';
import { isKeyed, mergeKeyed } from '../../../server/lib/progress.js';

const NS = /^[a-z0-9][a-z0-9-]{0,39}$/;
const MAX_BYTES = 768 * 1024;          // D1 rows carry up to 2 MB; the browser trims its snapshot to 700 KB

export async function onRequestGet({ request, env, params }) {
  if (!env.DB) return fail(503, 'progress not configured');
  const user = await getUser(request, env);
  if (!user) return fail(401, 'not signed in');
  const ns = (params.route || []).join('/');
  if (!ns) {
    const rows = await env.DB.prepare('SELECT ns, data_json, version, updated_at FROM progress WHERE user_id = ?').bind(user.id).all();
    const out = {};
    for (const r of rows.results || []) out[r.ns] = { data: JSON.parse(r.data_json), version: r.version, updated_at: r.updated_at };
    return json({ ok: true, namespaces: out });
  }
  if (!NS.test(ns)) return fail(400, 'bad namespace');
  const r = await env.DB.prepare('SELECT data_json, version, updated_at FROM progress WHERE user_id = ? AND ns = ?').bind(user.id, ns).first();
  if (!r) return fail(404, 'no data');
  return json({ ok: true, data: JSON.parse(r.data_json), version: r.version, updated_at: r.updated_at });
}

export async function onRequestPut({ request, env, params }) {
  if (!env.DB) return fail(503, 'progress not configured');
  if (!sameOrigin(request)) return fail(403, 'origin');
  const user = await getUser(request, env);
  if (!user) return fail(401, 'not signed in');
  const ns = (params.route || []).join('/');
  if (!NS.test(ns)) return fail(400, 'bad namespace');
  const body = await readJson(request, MAX_BYTES + 4096);
  if (!body || typeof body !== 'object' || !('data' in body)) return fail(400, 'data required');
  let version = Number.isFinite(body.version) ? Math.floor(body.version) : Date.now();
  let data = body.data;
  if (isKeyed(data)) data = { keys: data.keys, times: data.times || {}, deleted: data.deleted || {} };   // never store `skipped` or extras
  const cur = await env.DB.prepare('SELECT data_json, version, updated_at FROM progress WHERE user_id = ? AND ns = ?').bind(user.id, ns).first();
  let merged = false;
  if (cur) {
    let stored = null;
    try { stored = JSON.parse(cur.data_json); } catch (e) { stored = null; }
    if (isKeyed(stored) && isKeyed(data)) {
      data = mergeKeyed(stored, data);
      version = Math.max(version, cur.version || 0);
      merged = true;
    } else if (cur.version > version) {
      return json({ ok: true, stale: true, data: stored, version: cur.version, updated_at: cur.updated_at });
    }
  }
  const dataJson = JSON.stringify(data);
  if (dataJson.length > MAX_BYTES) return fail(413, 'too large');
  const now = nowIso();
  await env.DB.prepare('INSERT INTO progress (user_id, ns, data_json, version, updated_at) VALUES (?, ?, ?, ?, ?) ON CONFLICT(user_id, ns) DO UPDATE SET data_json = excluded.data_json, version = excluded.version, updated_at = excluded.updated_at')
    .bind(user.id, ns, dataJson, version, now).run();
  return merged ? json({ ok: true, merged: true, data, version, updated_at: now }) : json({ ok: true, version, updated_at: now });
}

/* navigator.sendBeacon can only POST; treat it as the same upsert */
export const onRequestPost = onRequestPut;
