/**
 * Cross-device progress for signed-in members.
 *
 *   GET /api/progress            → { ok, namespaces: { ns: { data, version, updated_at } } }
 *   GET /api/progress/:ns        → { ok, data, version, updated_at } | 404
 *   PUT /api/progress/:ns        { data, version }   newer version wins; returns the stored record
 */
import { json, fail, readJson, sameOrigin, nowIso } from '../../../server/lib/http.js';
import { getUser } from '../../../server/lib/auth.js';

const NS = /^[a-z0-9][a-z0-9-]{0,39}$/;
const MAX_BYTES = 256 * 1024;

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
  const body = await readJson(request, MAX_BYTES);
  if (!body || typeof body !== 'object' || !('data' in body)) return fail(400, 'data required');
  const version = Number.isFinite(body.version) ? Math.floor(body.version) : Date.now();
  const dataJson = JSON.stringify(body.data);
  if (dataJson.length > MAX_BYTES) return fail(413, 'too large');
  const cur = await env.DB.prepare('SELECT version FROM progress WHERE user_id = ? AND ns = ?').bind(user.id, ns).first();
  if (cur && cur.version > version) {
    const r = await env.DB.prepare('SELECT data_json, version, updated_at FROM progress WHERE user_id = ? AND ns = ?').bind(user.id, ns).first();
    return json({ ok: true, stale: true, data: JSON.parse(r.data_json), version: r.version, updated_at: r.updated_at });
  }
  const now = nowIso();
  await env.DB.prepare('INSERT INTO progress (user_id, ns, data_json, version, updated_at) VALUES (?, ?, ?, ?, ?) ON CONFLICT(user_id, ns) DO UPDATE SET data_json = excluded.data_json, version = excluded.version, updated_at = excluded.updated_at')
    .bind(user.id, ns, dataJson, version, now).run();
  return json({ ok: true, version, updated_at: now });
}

/* navigator.sendBeacon can only POST; treat it as the same upsert */
export const onRequestPost = onRequestPut;
