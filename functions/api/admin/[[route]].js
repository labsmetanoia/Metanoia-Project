/**
 * Internal review API. Every route requires `Authorization: Bearer <ADMIN_TOKEN>`.
 * Rendered by prototype/admin/index.html (noindex, not in the route manifest).
 *
 *   GET   /api/admin/leads?kind=&status=&q=&limit=   list
 *   PATCH /api/admin/leads/:id   { status?, notes? }
 *   GET   /api/admin/stats                           counts per kind × status, users, events (last 30 days)
 *   GET   /api/admin/aggregates?metric=&days=        rows from agg_daily (never individual data)
 */
import { json, fail, readJson, clip, nowIso } from '../../../server/lib/http.js';
import { isAdmin } from '../../../server/lib/auth.js';

const STATUSES = ['new', 'reviewing', 'accepted', 'declined', 'contacted', 'archived', 'confirmed', 'unsubscribed'];
const KINDS = ['mentor', 'enterprise', 'newsletter'];

const guard = (request, env) => {
  if (!env.ADMIN_TOKEN) return fail(503, 'admin not configured');
  if (!env.DB) return fail(503, 'database not configured');
  if (!isAdmin(request, env)) return fail(401, 'admin token required');
  return null;
};

const row = r => ({ id: r.id, kind: r.kind, email: r.email, name: r.name, payload: JSON.parse(r.payload_json || '{}'), consent: JSON.parse(r.consent_json || '{}'),
  status: r.status, notes: r.notes, locale: r.locale, source_page: r.source_page, created_at: r.created_at, updated_at: r.updated_at, confirmed_at: r.confirmed_at });

export async function onRequestGet({ request, env, params }) {
  const g = guard(request, env); if (g) return g;
  const route = (params.route || []).join('/');
  const url = new URL(request.url);

  if (route === 'leads') {
    const kind = url.searchParams.get('kind'), status = url.searchParams.get('status'), q = clip(url.searchParams.get('q') || '', 80);
    const limit = Math.min(500, Math.max(1, parseInt(url.searchParams.get('limit') || '200', 10) || 200));
    const where = [], args = [];
    if (KINDS.includes(kind)) { where.push('kind = ?'); args.push(kind); }
    if (STATUSES.includes(status)) { where.push('status = ?'); args.push(status); }
    if (q) { where.push('(email LIKE ? OR name LIKE ? OR payload_json LIKE ?)'); args.push(`%${q}%`, `%${q}%`, `%${q}%`); }
    const sql = 'SELECT * FROM leads' + (where.length ? ' WHERE ' + where.join(' AND ') : '') + ' ORDER BY created_at DESC LIMIT ?';
    const r = await env.DB.prepare(sql).bind(...args, limit).all();
    return json({ ok: true, leads: (r.results || []).map(row) });
  }

  if (route === 'stats') {
    const leads = await env.DB.prepare('SELECT kind, status, COUNT(*) AS n FROM leads GROUP BY kind, status').all();
    const users = await env.DB.prepare('SELECT COUNT(*) AS n FROM users').first();
    const since = new Date(Date.now() - 30 * 86400 * 1000).toISOString();
    const events = await env.DB.prepare('SELECT name, COUNT(*) AS n FROM events WHERE ts > ? GROUP BY name ORDER BY n DESC LIMIT 50').bind(since).all();
    const assessments = await env.DB.prepare('SELECT COUNT(*) AS n FROM assessments').first();
    return json({ ok: true, leads: leads.results || [], users: users ? users.n : 0, events_30d: events.results || [], assessments: assessments ? assessments.n : 0, time: nowIso() });
  }

  if (route === 'aggregates') {
    const metric = clip(url.searchParams.get('metric') || '', 80);
    const days = Math.min(400, Math.max(1, parseInt(url.searchParams.get('days') || '90', 10) || 90));
    const since = new Date(Date.now() - days * 86400 * 1000).toISOString().slice(0, 10);
    const r = metric
      ? await env.DB.prepare('SELECT * FROM agg_daily WHERE metric = ? AND day >= ? ORDER BY day').bind(metric, since).all()
      : await env.DB.prepare('SELECT * FROM agg_daily WHERE day >= ? ORDER BY day, metric').bind(since).all();
    return json({ ok: true, rows: (r.results || []).map(x => ({ ...x, value: JSON.parse(x.value_json), value_json: undefined })) });
  }

  return fail(404, 'unknown route');
}

export async function onRequestPatch({ request, env, params }) {
  const g = guard(request, env); if (g) return g;
  const parts = params.route || [];
  if (parts[0] !== 'leads' || !parts[1]) return fail(404, 'unknown route');
  const id = clip(parts[1], 64);
  const body = (await readJson(request)) || {};
  const cur = await env.DB.prepare('SELECT * FROM leads WHERE id = ?').bind(id).first();
  if (!cur) return fail(404, 'no such lead');
  const status = body.status !== undefined ? (STATUSES.includes(body.status) ? body.status : null) : cur.status;
  if (!status) return fail(400, 'bad status');
  const notes = body.notes !== undefined ? clip(body.notes, 4000) : cur.notes;
  await env.DB.prepare('UPDATE leads SET status = ?, notes = ?, updated_at = ? WHERE id = ?').bind(status, notes, nowIso(), id).run();
  const r = await env.DB.prepare('SELECT * FROM leads WHERE id = ?').bind(id).first();
  return json({ ok: true, lead: row(r) });
}
