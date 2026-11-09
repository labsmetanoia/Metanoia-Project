/**
 * Internal review API. Every route requires either a signed-in account with
 * the admin role (session cookie; see ADMIN_EMAILS in server/lib/http.js) or
 * `Authorization: Bearer <ADMIN_TOKEN>`. Writes also require a same-origin
 * request, so a cookie alone cannot be driven from another site.
 * Rendered by prototype/admin/index.html (noindex, not in the route manifest).
 *
 *   GET   /api/admin/leads?kind=&status=&q=&limit=   list
 *   PATCH /api/admin/leads/:id   { status?, notes? }
 *   GET   /api/admin/stats                           counts per kind × status, users, events (last 30 days)
 *   GET   /api/admin/aggregates?metric=&days=        rows from agg_daily (never individual data)
 *   GET   /api/admin/users?q=&founding=1&limit=       members (founding=1: the founding list)
 *   GET   /api/admin/entitlements?user=<id|email>     a member's grants and the access they resolve to
 *   POST  /api/admin/entitlements                     { user, product, plan, ends_at?, note? }   grant
 *   POST  /api/admin/entitlements/founding            { product?, plan?, ends_at?, note? }       one grant per founding member
 *   DELETE /api/admin/entitlements/:id                 revoke
 */
import { json, fail, readJson, clip, nowIso, sameOrigin } from '../../../server/lib/http.js';
import { adminActor } from '../../../server/lib/auth.js';
import { PRODUCTS, PLANS, accessMode, betaEndsAt, listEntitlements, resolveAccess, grantEntitlement, revokeEntitlement, grantFounding } from '../../../server/lib/entitlements.js';

const STATUSES = ['new', 'reviewing', 'accepted', 'declined', 'contacted', 'archived', 'confirmed', 'unsubscribed'];
const KINDS = ['mentor', 'enterprise', 'newsletter', 'waitlist', 'results'];

/* resolves { actor } when the caller may proceed, or a Response to return */
async function guard(request, env, write) {
  if (!env.DB) return fail(503, 'database not configured');
  if (write && !sameOrigin(request)) return fail(403, 'origin');
  const actor = await adminActor(request, env);
  if (!actor) return fail(401, 'admin sign-in or token required');
  return { actor };
}

const userRow = u => ({ id: u.id, email: u.email, name: u.name, role: u.role, audience: u.audience || null, locale: u.locale, founding: !!u.founding, email_verified: !!u.email_verified_at,
  marketing_opt_in: !!u.marketing_opt_in, created_at: u.created_at, last_login_at: u.last_login_at || null });
const entRow = e => ({ id: e.id, product: e.product, plan: e.plan, source: e.source, starts_at: e.starts_at, ends_at: e.ends_at || null, status: e.status, note: e.note || null, granted_by: e.granted_by || null, created_at: e.created_at });
async function findUser(env, ref) {
  ref = clip(ref, 254).toLowerCase();
  if (!ref) return null;
  return ref.includes('@')
    ? await env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(ref).first()
    : await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(ref).first();
}

const row = r => ({ id: r.id, kind: r.kind, email: r.email, name: r.name, payload: JSON.parse(r.payload_json || '{}'), consent: JSON.parse(r.consent_json || '{}'),
  status: r.status, notes: r.notes, locale: r.locale, source_page: r.source_page, created_at: r.created_at, updated_at: r.updated_at, confirmed_at: r.confirmed_at });

export async function onRequestGet({ request, env, params }) {
  const g = await guard(request, env, false); if (g instanceof Response) return g;
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
    /* mail quota: Resend free tier is 100 a day and 3,000 a month; lifecycle is capped below that in server/lib/lifecycle.js */
    const today = nowIso().slice(0, 10), month = today.slice(0, 7);
    let mail = { today: [], month: [] };
    try {
      const mt = await env.DB.prepare('SELECT class, status, COUNT(*) AS n FROM mail_log WHERE day = ? GROUP BY class, status').bind(today).all();
      const mm = await env.DB.prepare('SELECT class, status, COUNT(*) AS n FROM mail_log WHERE day >= ? GROUP BY class, status').bind(month + '-01').all();
      mail = { today: mt.results || [], month: mm.results || [] };
    } catch (e) { /* before migration 0004 */ }
    let access = { mode: accessMode(env), beta_ends_at: betaEndsAt(env), founding_members: 0, active_grants: 0 };
    try {
      const f = await env.DB.prepare('SELECT COUNT(*) AS n FROM users WHERE founding = 1').first();
      const a = await env.DB.prepare("SELECT COUNT(*) AS n FROM entitlements WHERE status = 'active' AND plan != 'free' AND (ends_at IS NULL OR ends_at > ?)").bind(nowIso()).first();
      access.founding_members = f ? f.n : 0; access.active_grants = a ? a.n : 0;
    } catch (e) { /* before migration 0005 */ }
    return json({ ok: true, actor: g.actor, leads: leads.results || [], users: users ? users.n : 0, events_30d: events.results || [], assessments: assessments ? assessments.n : 0, mail, access, time: nowIso() });
  }

  if (route === 'users') {
    const q = clip(url.searchParams.get('q') || '', 80), founding = url.searchParams.get('founding') === '1';
    const limit = Math.min(5000, Math.max(1, parseInt(url.searchParams.get('limit') || '200', 10) || 200));
    const where = [], args = [];
    if (q) { where.push('(email LIKE ? OR name LIKE ?)'); args.push('%' + q + '%', '%' + q + '%'); }
    if (founding) where.push('founding = 1');
    const r = await env.DB.prepare(`SELECT id, email, name, role, audience, locale, founding, email_verified_at, marketing_opt_in, created_at, last_login_at FROM users ${where.length ? 'WHERE ' + where.join(' AND ') : ''} ORDER BY created_at DESC LIMIT ?`).bind(...args, limit).all();
    return json({ ok: true, users: (r.results || []).map(userRow) });
  }

  if (route === 'entitlements') {
    const u = await findUser(env, url.searchParams.get('user') || '');
    if (!u) return fail(404, 'no such member');
    const rows = await listEntitlements(env, u.id, { includeRevoked: true });
    return json({ ok: true, user: userRow(u), entitlements: rows.map(entRow), access: resolveAccess(env, u, rows) });
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
  const g = await guard(request, env, true); if (g instanceof Response) return g;
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

export async function onRequestPost({ request, env, params }) {
  const g = await guard(request, env, true); if (g instanceof Response) return g;
  const parts = params.route || [];
  if (parts[0] !== 'entitlements') return fail(404, 'unknown route');
  const body = (await readJson(request)) || {};
  const product = body.product === undefined ? 'all' : String(body.product);
  const endsAt = body.ends_at ? String(body.ends_at) : null;
  if (product !== 'all' && !PRODUCTS.includes(product)) return fail(400, 'unknown product', { field: 'product' });
  if (endsAt && Number.isNaN(Date.parse(endsAt))) return fail(400, 'bad end date', { field: 'ends_at' });
  const grantedBy = g.actor === 'token' ? 'token' : g.actor;
  if (parts[1] === 'founding') {
    const plan = body.plan === undefined ? 'founding' : String(body.plan);
    if (!PLANS.includes(plan) || plan === 'free') return fail(400, 'unknown plan', { field: 'plan' });
    const n = await grantFounding(env, { product, plan, endsAt, note: clip(body.note || '', 500) || null, grantedBy });
    return json({ ok: true, granted: n });
  }
  if (parts.length > 1) return fail(404, 'unknown route');
  const plan = String(body.plan || '');
  if (!PLANS.includes(plan) || plan === 'free') return fail(400, 'unknown plan', { field: 'plan' });
  const u = await findUser(env, body.user || '');
  if (!u) return fail(404, 'no such member', { field: 'user' });
  const e = await grantEntitlement(env, { userId: u.id, product, plan, endsAt, source: 'admin:' + grantedBy, note: clip(body.note || '', 500) || null, grantedBy });
  const rows = await listEntitlements(env, u.id, { includeRevoked: true });
  return json({ ok: true, entitlement: entRow(e), access: resolveAccess(env, u, rows) }, 201);
}

export async function onRequestDelete({ request, env, params }) {
  const g = await guard(request, env, true); if (g instanceof Response) return g;
  const parts = params.route || [];
  if (parts[0] !== 'entitlements' || !parts[1]) return fail(404, 'unknown route');
  const ok = await revokeEntitlement(env, clip(parts[1], 64));
  return ok ? json({ ok: true }) : fail(404, 'no active grant with that id');
}
