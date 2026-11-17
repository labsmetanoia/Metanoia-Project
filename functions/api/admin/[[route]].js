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
 *   GET   /api/admin/users.csv?q=&founding=1          the same as CSV
 *   GET   /api/admin/funnel?days=30                   visitors → assessment → result → account → verified → active → grant
 *   GET   /api/admin/entitlements?user=<id|email>     a member's grants and the access they resolve to
 *   POST  /api/admin/entitlements                     { user, product, plan, ends_at?, note? }   grant
 *   POST  /api/admin/entitlements/founding            { product?, plan?, ends_at?, note? }       one grant per founding member
 *   DELETE /api/admin/entitlements/:id                 revoke
 *   GET   /api/admin/leads.csv?kind=&status=&q=        the lead list as CSV
 *   GET   /api/admin/feedback?status=&kind=&q=&limit=  what members and visitors sent from the Feedback button
 *   PATCH /api/admin/feedback/:id  { status?, notes? }
 *   GET   /api/admin/audit?limit=                      the admin audit trail (who changed or exported what)
 *   GET   /api/admin/trends?days=30                    one number per day for accounts, active members, visitors, Career Map
 *                                                      completions, leads, feedback, script errors and certificates
 *   GET   /api/admin/errors?days=7                     script errors reported by browsers, grouped by message and page
 *   GET   /api/admin/digest?days=7                     the weekly owner summary as numbers and as the e-mail text (nothing is sent)
 *   POST  /api/admin/digest                            sends that summary to LEADS_NOTIFY_TO now
 *   GET   /api/admin/batches                           access-code batches with seats used
 *   POST  /api/admin/batches { label, sponsor?, product?, plan?, seats, redeem_by?, access_ends_at?, note? }
 *   PATCH /api/admin/batches/:id { seats?, redeem_by?, note?, revoked?, withdraw_access? }
 *   GET   /api/admin/batches/:id/report[.csv]          the sponsor's aggregate report (withheld below the minimum cohort)
 *   GET   /api/admin/coach?days=14                     the AI coach: whether members can use it, calls and Neurons per day
 *   POST  /api/admin/coach/trial { kind, question?, text, lang }   one review, to judge the quality (counts against the budget)
 *   POST  /api/admin/coach/mode  { mode: 'on' | 'off' }            opens the coach to members or closes it
 *   GET   /api/admin/content[.csv]?days=30             lessons: members who completed each one, where members stop, opens and quiz
 *                                                      answers in the window, sample-lesson funnel, certificates per product
 *   GET   /api/admin/reminders                         push keys set or not, devices and members with reminders on, calendar feeds
 *   POST  /api/admin/reminders/run                     today's reminders for a slice of devices now
 *   GET   /api/admin/notice                            the site-wide notice as stored, and whether it is showing now
 *   POST  /api/admin/notice { on, en, id, href?, link_en?, link_id?, until? }   sets it; `until` is the last day (Jakarta time)
 *   GET   /api/admin/letters                           letters with progress, who would receive one today, today's mail budget
 *   POST  /api/admin/letters { subject_en, subject_id, body_en, body_id, audience?, show_in_portal? }   a new draft
 *   PATCH /api/admin/letters/:id { … }                 edits a draft
 *   POST  /api/admin/letters/:id/test                  both language versions to LEADS_NOTIFY_TO (or the signed-in admin)
 *   POST  /api/admin/letters/:id/queue                 hands the letter to the Worker, which sends one batch a day
 *   POST  /api/admin/letters/:id/cancel                stops a letter; messages already sent stay sent
 *   POST  /api/admin/letters/run                       sends today's batch now instead of at the next morning run
 *
 * Every write and every export is recorded in admin_audit (migration 0007).
 */
import { json, fail, readJson, clip, nowIso, sameOrigin, rateLimit, clientIp, newId } from '../../../server/lib/http.js';
import { adminActor } from '../../../server/lib/auth.js';
import { buildDigest, digestText, sendOwnerDigest, scriptErrors } from '../../../server/lib/digest.js';
import { createBatch, listBatches, updateBatch, batchReport } from '../../../server/lib/access-codes.js';
import { cleanNotice, readNotice, saveNotice, noticeLive, createLetter, updateLetter, listLetters, audienceCounts, queueLetter, cancelLetter, testLetter, letterBudget, runLetters } from '../../../server/lib/letters.js';
import { CONTENT_PRODUCTS, loadManifest, contentReport, contentCsvRows } from '../../../server/lib/content.js';
import { pushConfigured } from '../../../server/lib/push.js';
import { runReminders, perRun } from '../../../server/lib/reminders.js';
import { coachConfigured, coachMode, setCoachMode, validate as coachValidate, review as coachReview, report as coachReport } from '../../../server/lib/coach.js';
import { PRODUCTS, PLANS, accessMode, betaEndsAt, listEntitlements, resolveAccess, grantEntitlement, revokeEntitlement, grantFounding } from '../../../server/lib/entitlements.js';

const STATUSES = ['new', 'reviewing', 'accepted', 'declined', 'contacted', 'archived', 'confirmed', 'unsubscribed'];
const KINDS = ['mentor', 'enterprise', 'newsletter', 'waitlist', 'results'];
const FB_STATUSES = ['new', 'reviewing', 'planned', 'done', 'declined'];
const FB_KINDS = ['bug', 'idea', 'content', 'praise', 'other'];

/* CSV cell: quoted when needed, and a leading = + - @ is neutralised so a spreadsheet never runs a member-typed formula */
const csvCell = v => { v = v == null ? '' : String(v); if (/^[=+\-@\t\r]/.test(v)) v = "'" + v; return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
const csvResponse = (name, cols, rows) => new Response(cols.join(',') + '\n' + rows.map(r => cols.map(c => csvCell(r[c])).join(',')).join('\n') + '\n',
  { headers: { 'content-type': 'text/csv; charset=utf-8', 'content-disposition': `attachment; filename="${name}"`, 'cache-control': 'no-store' } });

/* one row per admin action that changes or exports data; never blocks the action itself */
async function audit(env, actor, action, target, detail) {
  try {
    await env.DB.prepare('INSERT INTO admin_audit (id, ts, actor, action, target, detail_json) VALUES (?, ?, ?, ?, ?, ?)')
      .bind(newId(), nowIso(), String(actor).slice(0, 254), action, target ? String(target).slice(0, 254) : null, detail ? JSON.stringify(detail).slice(0, 2000) : null).run();
  } catch (e) { /* before migration 0007 */ }
}

/* resolves { actor } when the caller may proceed, or a Response to return */
async function guard(request, env, write) {
  if (!env.DB) return fail(503, 'database not configured');
  if (write && !sameOrigin(request)) return fail(403, 'origin');
  /* a bearer token is guessable only by trying: cap the tries per address */
  if (request.headers.get('authorization') && !(await rateLimit(env, 'adm:' + clientIp(request), 300, 900))) return fail(429, 'too many attempts');
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

  if (route === 'leads' || route === 'leads.csv') {
    const kind = url.searchParams.get('kind'), status = url.searchParams.get('status'), q = clip(url.searchParams.get('q') || '', 80);
    const limit = Math.min(500, Math.max(1, parseInt(url.searchParams.get('limit') || '200', 10) || 200));
    const where = [], args = [];
    if (KINDS.includes(kind)) { where.push('kind = ?'); args.push(kind); }
    if (STATUSES.includes(status)) { where.push('status = ?'); args.push(status); }
    if (q) { where.push('(email LIKE ? OR name LIKE ? OR payload_json LIKE ?)'); args.push(`%${q}%`, `%${q}%`, `%${q}%`); }
    const sql = 'SELECT * FROM leads' + (where.length ? ' WHERE ' + where.join(' AND ') : '') + ' ORDER BY created_at DESC LIMIT ?';
    const r = await env.DB.prepare(sql).bind(...args, route === 'leads.csv' ? 5000 : limit).all();
    if (route === 'leads.csv') {
      await audit(env, g.actor, 'leads.export', null, { kind: kind || 'all', status: status || 'all', q, rows: (r.results || []).length });
      const flat = (r.results || []).map(x => { const p = JSON.parse(x.payload_json || '{}'); return { id: x.id, kind: x.kind, email: x.email, name: x.name, status: x.status, locale: x.locale, source_page: x.source_page, created_at: x.created_at, confirmed_at: x.confirmed_at, company: p.company, role: p.role, detail: p.message || p.motivation || p.expertise || '', notes: x.notes }; });
      return csvResponse(`metanoia-leads${KINDS.includes(kind) ? '-' + kind : ''}.csv`, ['id', 'kind', 'email', 'name', 'status', 'locale', 'source_page', 'created_at', 'confirmed_at', 'company', 'role', 'detail', 'notes'], flat);
    }
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
    try { const pd = await env.DB.prepare('SELECT COUNT(*) AS n FROM users WHERE deletion_requested_at IS NOT NULL').first(); access.pending_deletions = pd ? pd.n : 0; } catch (e) { access.pending_deletions = null; }
    let feedbackNew = null;
    try { const fbn = await env.DB.prepare("SELECT COUNT(*) AS n FROM feedback WHERE status = 'new'").first(); feedbackNew = fbn ? fbn.n : 0; } catch (e) { /* before migration 0007 */ }
    return json({ ok: true, actor: g.actor, feedback_new: feedbackNew, leads: leads.results || [], users: users ? users.n : 0, events_30d: events.results || [], assessments: assessments ? assessments.n : 0, mail, access, time: nowIso() });
  }

  if (route === 'users' || route === 'users.csv') {
    const q = clip(url.searchParams.get('q') || '', 80), founding = url.searchParams.get('founding') === '1';
    const limit = Math.min(5000, Math.max(1, parseInt(url.searchParams.get('limit') || '200', 10) || 200));
    const where = [], args = [];
    if (q) { where.push('(email LIKE ? OR name LIKE ?)'); args.push('%' + q + '%', '%' + q + '%'); }
    if (founding) where.push('founding = 1');
    const r = await env.DB.prepare(`SELECT id, email, name, role, audience, locale, founding, email_verified_at, marketing_opt_in, created_at, last_login_at FROM users ${where.length ? 'WHERE ' + where.join(' AND ') : ''} ORDER BY created_at DESC LIMIT ?`).bind(...args, limit).all();
    const users = (r.results || []).map(userRow);
    if (route === 'users.csv') {
      await audit(env, g.actor, 'users.export', null, { q, founding, rows: users.length });
      return csvResponse(`metanoia-users${founding ? '-founding' : ''}.csv`, ['id', 'email', 'name', 'role', 'audience', 'locale', 'founding', 'email_verified', 'marketing_opt_in', 'created_at', 'last_login_at'], users);
    }
    return json({ ok: true, users });
  }

  if (route === 'funnel') {
    const days = Math.min(365, Math.max(1, parseInt(url.searchParams.get('days') || '30', 10) || 30));
    const since = new Date(Date.now() - days * 86400 * 1000).toISOString();
    const n = async (sql, ...args) => { try { const r = await env.DB.prepare(sql).bind(...args).first(); return r ? r.n : 0; } catch (e) { return null; } };
    const steps = [
      { key: 'visitors', label: 'Visitors (distinct subjects with a page view)', n: await n("SELECT COUNT(DISTINCT subject_id) AS n FROM events WHERE name = 'site.page.viewed' AND ts > ?", since) },
      { key: 'assessment_started', label: 'Career Map started', n: await n("SELECT COUNT(DISTINCT subject_id) AS n FROM events WHERE name = 'assessment.career_map.assessment_started' AND ts > ?", since) },
      { key: 'assessment_completed', label: 'Career Map completed', n: await n('SELECT COUNT(*) AS n FROM assessments WHERE ts > ?', since) },
      { key: 'results_emailed', label: 'Result sent by e-mail', n: await n("SELECT COUNT(*) AS n FROM leads WHERE kind = 'results' AND created_at > ?", since) },
      { key: 'accounts', label: 'Accounts created', n: await n('SELECT COUNT(*) AS n FROM users WHERE created_at > ?', since) },
      { key: 'verified', label: 'Accounts verified', n: await n('SELECT COUNT(*) AS n FROM users WHERE created_at > ? AND email_verified_at IS NOT NULL', since) },
      { key: 'active', label: 'Accounts with product activity', n: await n('SELECT COUNT(DISTINCT p.user_id) AS n FROM progress p JOIN users u ON u.id = p.user_id WHERE u.created_at > ? AND p.updated_at > ?', since, since) },
      { key: 'weekly_opt_in', label: 'Opted in to the weekly e-mail', n: await n('SELECT COUNT(*) AS n FROM users WHERE created_at > ? AND marketing_opt_in = 1', since) },
      { key: 'grants', label: 'Grants beyond the free tier', n: await n("SELECT COUNT(DISTINCT user_id) AS n FROM entitlements WHERE plan != 'free' AND status = 'active' AND created_at > ?", since) }
    ];
    const totals = {
      users: await n('SELECT COUNT(*) AS n FROM users'), verified: await n('SELECT COUNT(*) AS n FROM users WHERE email_verified_at IS NOT NULL'),
      founding: await n('SELECT COUNT(*) AS n FROM users WHERE founding = 1'), pending_deletion: await n('SELECT COUNT(*) AS n FROM users WHERE deletion_requested_at IS NOT NULL'),
      results: await n("SELECT COUNT(*) AS n FROM leads WHERE kind = 'results'"), assessments: await n('SELECT COUNT(*) AS n FROM assessments')
    };
    return json({ ok: true, days, since, steps, totals });
  }

  if (route === 'entitlements') {
    const u = await findUser(env, url.searchParams.get('user') || '');
    if (!u) return fail(404, 'no such member');
    const rows = await listEntitlements(env, u.id, { includeRevoked: true });
    return json({ ok: true, user: userRow(u), entitlements: rows.map(entRow), access: resolveAccess(env, u, rows) });
  }

  if (route === 'feedback') {
    const status = url.searchParams.get('status'), kind = url.searchParams.get('kind'), q = clip(url.searchParams.get('q') || '', 80);
    const limit = Math.min(500, Math.max(1, parseInt(url.searchParams.get('limit') || '200', 10) || 200));
    const where = [], args = [];
    if (FB_STATUSES.includes(status)) { where.push('f.status = ?'); args.push(status); }
    if (FB_KINDS.includes(kind)) { where.push('f.kind = ?'); args.push(kind); }
    if (q) { where.push('(f.message LIKE ? OR f.page LIKE ? OR u.email LIKE ? OR f.contact LIKE ?)'); args.push(`%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`); }
    try {
      const r = await env.DB.prepare(`SELECT f.*, u.email AS user_email, u.name AS user_name FROM feedback f LEFT JOIN users u ON u.id = f.user_id ${where.length ? 'WHERE ' + where.join(' AND ') : ''} ORDER BY f.created_at DESC LIMIT ?`).bind(...args, limit).all();
      const counts = await env.DB.prepare('SELECT status, COUNT(*) AS n FROM feedback GROUP BY status').all();
      const avg = await env.DB.prepare('SELECT AVG(rating) AS a, COUNT(rating) AS n FROM feedback WHERE rating IS NOT NULL').first();
      return json({ ok: true, feedback: (r.results || []).map(f => ({ id: f.id, kind: f.kind, rating: f.rating, message: f.message, page: f.page, locale: f.locale, device: f.user_agent, status: f.status, notes: f.notes,
        from: f.user_email || f.contact || null, name: f.user_name || null, member: !!f.user_id, created_at: f.created_at, updated_at: f.updated_at })),
        counts: counts.results || [], rating: { average: avg && avg.a != null ? Math.round(avg.a * 10) / 10 : null, count: avg ? avg.n : 0 } });
    } catch (e) { return json({ ok: true, feedback: [], counts: [], rating: { average: null, count: 0 }, pending_migration: true }); }
  }

  if (route === 'audit') {
    const limit = Math.min(500, Math.max(1, parseInt(url.searchParams.get('limit') || '100', 10) || 100));
    try {
      const r = await env.DB.prepare('SELECT * FROM admin_audit ORDER BY ts DESC LIMIT ?').bind(limit).all();
      return json({ ok: true, audit: (r.results || []).map(a => ({ id: a.id, ts: a.ts, actor: a.actor, action: a.action, target: a.target, detail: a.detail_json ? JSON.parse(a.detail_json) : null })) });
    } catch (e) { return json({ ok: true, audit: [], pending_migration: true }); }
  }

  if (route === 'batches') {
    try { return json({ ok: true, batches: await listBatches(env) }); } catch (e) { return json({ ok: true, batches: [], pending_migration: true }); }
  }
  const brm = /^batches\/([0-9a-f]{32})\/report(\.csv)?$/.exec(route);
  if (brm) {
    const rp = await batchReport(env, brm[1]).catch(() => null);
    if (!rp) return fail(404, 'no such batch');
    if (!brm[2]) return json({ ok: true, report: rp });
    await audit(env, g.actor, 'batch.report.export', brm[1], { label: rp.batch.label, withheld: rp.withheld });
    /* one row per figure: what a sponsor can be sent. No member appears in it. */
    const rows = [{ figure: 'Cohort', value: rp.batch.label }, { figure: 'Sponsor', value: rp.batch.sponsor || '' }, { figure: 'Seats', value: rp.batch.seats }, { figure: 'Seats used', value: rp.seats_used }];
    if (rp.withheld) rows.push({ figure: 'Note', value: rp.reason });
    else {
      rows.push({ figure: 'Verified accounts', value: rp.verified }, { figure: 'Active in the last 7 days', value: rp.active_last_7_days }, { figure: 'Active in the last 30 days', value: rp.active_last_30_days },
        { figure: 'Career Map completed', value: rp.career_map.completed }, { figure: 'Career Map average score', value: rp.career_map.average_total == null ? '' : rp.career_map.average_total });
      for (const slug of Object.keys(rp.products)) { const pr = rp.products[slug]; rows.push({ figure: slug + ': members who started', value: pr.started }, { figure: slug + ': average lessons completed', value: pr.average_lessons_completed == null ? '' : pr.average_lessons_completed }, { figure: slug + ': certificates', value: pr.certificates }); }
    }
    rows.push({ figure: 'Generated', value: rp.generated_at });
    return csvResponse('metanoia-cohort-report.csv', ['figure', 'value'], rows);
  }

  if (route === 'content' || route === 'content.csv') {
    const days = Math.min(90, Math.max(1, parseInt(url.searchParams.get('days') || '30', 10) || 30));
    const manifests = {};
    for (const slug of Object.keys(CONTENT_PRODUCTS)) manifests[slug] = await loadManifest(request, env, slug);
    const rp = await contentReport(env, { days, manifests });
    if (route === 'content') return json({ ok: true, ...rp });
    await audit(env, g.actor, 'content.export', null, { days });
    return csvResponse('metanoia-lessons.csv', ['product', 'lesson', 'title', 'members_started_product', 'members_completed_lesson', 'share_of_started', 'opened_in_window', 'completed_in_window', 'quiz_first_answers', 'quiz_wrong_first_try'], contentCsvRows(rp));
  }

  if (route === 'reminders') {
    const one = async q => { try { const r = await env.DB.prepare(q).first(); return r ? r.n : 0; } catch (e) { return null; } };
    const devices = await one('SELECT COUNT(*) AS n FROM push_subscriptions');
    return json({ ok: true, configured: pushConfigured(env), pending_migration: devices === null, devices: devices || 0, members: (await one('SELECT COUNT(DISTINCT user_id) AS n FROM push_subscriptions')) || 0,
      calendar_feeds: (await one('SELECT COUNT(*) AS n FROM calendar_feeds')) || 0, feeds_read_7d: (await one("SELECT COUNT(*) AS n FROM calendar_feeds WHERE last_read_at > datetime('now', '-7 days')")) || 0, per_run: perRun(env), mock: env.PUSH_MOCK === '1' });
  }
  if (route === 'notice') {
    const n = await readNotice(env);
    return json({ ok: true, notice: n, live: noticeLive(n) });
  }
  if (route === 'letters') {
    try {
      return json({ ok: true, letters: await listLetters(env), audience: await audienceCounts(env), budget: await letterBudget(env), mail: !!env.RESEND_API_KEY, test_to: env.LEADS_NOTIFY_TO ? true : false });
    } catch (e) { return json({ ok: true, letters: [], pending_migration: true }); }
  }

  if (route === 'coach') {
    const days = Math.min(60, Math.max(1, parseInt(url.searchParams.get('days') || '14', 10) || 14));
    return json({ ok: true, configured: coachConfigured(env), binding: !!env.AI, mock: env.COACH_MOCK === '1', mode: await coachMode(env), ...(await coachReport(env, days)) });
  }

  if (route === 'trends') {
    const days = Math.min(180, Math.max(7, parseInt(url.searchParams.get('days') || '30', 10) || 30));
    const start = new Date(Date.now() - (days - 1) * 86400 * 1000).toISOString().slice(0, 10);
    const axis = []; for (let i = 0; i < days; i++) axis.push(new Date(Date.parse(start + 'T00:00:00Z') + i * 86400 * 1000).toISOString().slice(0, 10));
    /* each query groups by the UTC day of its timestamp; a table that is not there yet (an unapplied migration) reads as zeros */
    const perDay = async (sql) => { const out = axis.map(() => 0); try { const r = await env.DB.prepare(sql).bind(start).all(); for (const x of r.results || []) { const i = axis.indexOf(x.d); if (i >= 0) out[i] = x.n; } } catch (e) { /* missing table */ } return out; };
    const series = {
      accounts: await perDay('SELECT substr(created_at, 1, 10) AS d, COUNT(*) AS n FROM users WHERE created_at >= ? GROUP BY d'),
      active: await perDay('SELECT substr(updated_at, 1, 10) AS d, COUNT(DISTINCT user_id) AS n FROM progress WHERE updated_at >= ? GROUP BY d'),
      visitors: await perDay("SELECT substr(ts, 1, 10) AS d, COUNT(DISTINCT subject_id) AS n FROM events WHERE name = 'site.page.viewed' AND ts >= ? GROUP BY d"),
      assessments: await perDay('SELECT substr(ts, 1, 10) AS d, COUNT(*) AS n FROM assessments WHERE ts >= ? GROUP BY d'),
      leads: await perDay("SELECT substr(created_at, 1, 10) AS d, COUNT(*) AS n FROM leads WHERE created_at >= ? AND kind IN ('mentor', 'enterprise', 'newsletter', 'waitlist') GROUP BY d"),
      feedback: await perDay('SELECT substr(created_at, 1, 10) AS d, COUNT(*) AS n FROM feedback WHERE created_at >= ? GROUP BY d'),
      errors: await perDay("SELECT substr(ts, 1, 10) AS d, COUNT(*) AS n FROM events WHERE name = 'site.script.error' AND ts >= ? GROUP BY d"),
      certificates: await perDay('SELECT substr(issued_at, 1, 10) AS d, COUNT(*) AS n FROM certificates WHERE issued_at >= ? GROUP BY d')
    };
    const totals = {}; for (const k in series) totals[k] = series[k].reduce((a, b) => a + b, 0);
    /* active and visitors are distinct per day, so their sum is person-days, not people */
    return json({ ok: true, days, axis, series, totals, note: 'UTC days; active and visitors count distinct people per day' });
  }

  if (route === 'errors') {
    const days = Math.min(90, Math.max(1, parseInt(url.searchParams.get('days') || '7', 10) || 7));
    return json({ ok: true, ...(await scriptErrors(env, { days, limit: 100 })) });
  }

  if (route === 'digest') {
    const days = Math.min(31, Math.max(1, parseInt(url.searchParams.get('days') || '7', 10) || 7));
    const d = await buildDigest(env, { days });
    return json({ ok: true, digest: d, text: digestText(d, env.SITE_URL || url.origin), to_configured: !!env.LEADS_NOTIFY_TO, mail_configured: !!env.RESEND_API_KEY });
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
  if (parts[0] === 'batches' && parts[1] && parts.length === 2) {
    const pb = (await readJson(request)) || {};
    const ur = await updateBatch(env, clip(parts[1], 64), pb).catch(() => ({ error: 'access codes not configured', status: 503 }));
    if (ur.error) return fail(ur.status || 400, ur.error, { field: ur.field });
    await audit(env, g.actor, 'batch.update', ur.batch.id, { label: ur.batch.label, seats: ur.batch.seats, revoked: ur.batch.revoked, withdrawn: ur.withdrawn });
    return json({ ok: true, batch: ur.batch, withdrawn: ur.withdrawn });
  }
  if (parts[0] === 'letters' && parts[1] && parts.length === 2) {
    const ul = await updateLetter(env, clip(parts[1], 64), (await readJson(request, 32 * 1024)) || {}).catch(() => ({ error: 'letters not available', status: 503 }));
    if (ul.error) return fail(ul.status || 400, ul.error, { field: ul.field });
    await audit(env, g.actor, 'letter.update', ul.letter.id, { subject: ul.letter.subject_en, audience: ul.letter.audience });
    return json({ ok: true, letter: ul.letter });
  }
  if (parts[0] === 'feedback' && parts[1]) {
    const fid = clip(parts[1], 64), fb = (await readJson(request)) || {};
    const curF = await env.DB.prepare('SELECT * FROM feedback WHERE id = ?').bind(fid).first().catch(() => null);
    if (!curF) return fail(404, 'no such feedback');
    const st = fb.status !== undefined ? (FB_STATUSES.includes(fb.status) ? fb.status : null) : curF.status;
    if (!st) return fail(400, 'bad status');
    const nt = fb.notes !== undefined ? clip(fb.notes, 4000) : curF.notes;
    await env.DB.prepare('UPDATE feedback SET status = ?, notes = ?, updated_at = ? WHERE id = ?').bind(st, nt, nowIso(), fid).run();
    await audit(env, g.actor, 'feedback.update', fid, { status: st });
    return json({ ok: true, feedback: { id: fid, status: st, notes: nt } });
  }
  if (parts[0] !== 'leads' || !parts[1]) return fail(404, 'unknown route');
  const id = clip(parts[1], 64);
  const body = (await readJson(request)) || {};
  const cur = await env.DB.prepare('SELECT * FROM leads WHERE id = ?').bind(id).first();
  if (!cur) return fail(404, 'no such lead');
  const status = body.status !== undefined ? (STATUSES.includes(body.status) ? body.status : null) : cur.status;
  if (!status) return fail(400, 'bad status');
  const notes = body.notes !== undefined ? clip(body.notes, 4000) : cur.notes;
  await env.DB.prepare('UPDATE leads SET status = ?, notes = ?, updated_at = ? WHERE id = ?').bind(status, notes, nowIso(), id).run();
  await audit(env, g.actor, 'lead.update', id, { kind: cur.kind, status });
  const r = await env.DB.prepare('SELECT * FROM leads WHERE id = ?').bind(id).first();
  return json({ ok: true, lead: row(r) });
}

export async function onRequestPost({ request, env, params }) {
  const g = await guard(request, env, true); if (g instanceof Response) return g;
  const parts = params.route || [];
  if (parts[0] === 'batches' && parts.length === 1) {
    const nb = (await readJson(request)) || {};
    const cr = await createBatch(env, { label: nb.label, sponsor: nb.sponsor, product: nb.product === undefined ? 'all' : String(nb.product), plan: nb.plan === undefined ? 'enterprise' : String(nb.plan), seats: nb.seats,
      redeemBy: nb.redeem_by || null, accessEndsAt: nb.access_ends_at || null, note: nb.note || null, createdBy: g.actor }).catch(() => ({ error: 'access codes not configured', status: 503 }));
    if (cr.error) return fail(cr.status || 400, cr.error, { field: cr.field });
    await audit(env, g.actor, 'batch.create', cr.batch.id, { label: cr.batch.label, seats: cr.batch.seats, product: cr.batch.product, plan: cr.batch.plan });
    return json({ ok: true, batch: cr.batch }, 201);
  }
  if (parts[0] === 'reminders' && parts[1] === 'run' && parts.length === 2) {
    /* a slice of today's reminders now, instead of at the Worker's next run */
    const rr = await runReminders(env).catch(e => ({ error: String(e && e.message || e).slice(0, 160) }));
    await audit(env, g.actor, 'reminders.run', null, { looked: rr.looked || 0, sent: rr.sent || 0, skipped: rr.skipped || null, error: rr.error || null });
    return json({ ok: true, run: rr });
  }
  if (parts[0] === 'notice' && parts.length === 1) {
    const cn = cleanNotice((await readJson(request)) || {});
    if (cn.error) return fail(400, cn.error, { field: cn.field });
    const saved = await saveNotice(env, cn.notice, g.actor).catch(() => null);
    if (!saved) return fail(503, 'settings not available');   /* before migration 0009 */
    await audit(env, g.actor, 'notice.set', null, { on: saved.on, until: saved.until, en: saved.en });
    return json({ ok: true, notice: saved, live: noticeLive(saved) });
  }
  if (parts[0] === 'letters') {
    const lid = parts[1] ? clip(parts[1], 64) : null, act = parts[2] || null;
    const site = (env.SITE_URL || new URL(request.url).origin).replace(/\/$/, '');
    try {
      if (!lid) {
        const cr = await createLetter(env, (await readJson(request, 32 * 1024)) || {}, g.actor);
        if (cr.error) return fail(400, cr.error, { field: cr.field });
        await audit(env, g.actor, 'letter.create', cr.letter.id, { subject: cr.letter.subject_en, audience: cr.letter.audience });
        return json({ ok: true, letter: cr.letter }, 201);
      }
      if (lid === 'run' && !act) {
        /* today's batch now instead of at the Worker's next morning run; the daily caps still hold */
        const rr = await runLetters(env, { site });
        await audit(env, g.actor, 'letter.run', rr.letter || null, { sent: rr.sent || 0, remaining: rr.remaining, skipped: rr.skipped || null, error: rr.error || null });
        return json({ ok: true, run: rr });
      }
      if (act === 'test') {
        const to = env.LEADS_NOTIFY_TO || (g.actor && g.actor.indexOf('@') > 0 ? g.actor : '');
        const tr = await testLetter(env, lid, to, site);
        if (tr.error) return fail(tr.status || 400, tr.error);
        await audit(env, g.actor, 'letter.test', lid, { sent: tr.sent });
        return json({ ok: true, sent: tr.sent, reason: tr.reason });
      }
      if (act === 'queue' || act === 'cancel') {
        const qr = act === 'queue' ? await queueLetter(env, lid) : await cancelLetter(env, lid);
        if (qr.error) return fail(qr.status || 400, qr.error);
        await audit(env, g.actor, 'letter.' + act, lid, { subject: qr.letter.subject_en, total: qr.letter.total, sent: qr.letter.sent });
        return json({ ok: true, letter: qr.letter, days: qr.days });
      }
    } catch (e) { return fail(503, 'letters not available'); }   /* before migration 0011 */
    return fail(404, 'not found');
  }
  if (parts[0] === 'coach' && parts[1] === 'mode' && parts.length === 2) {
    const mb = (await readJson(request)) || {};
    if (mb.mode !== 'on' && mb.mode !== 'off') return fail(400, 'mode must be on or off', { field: 'mode' });
    const mode = await setCoachMode(env, mb.mode, g.actor).catch(() => null);
    if (!mode) return fail(503, 'settings not available');   /* before migration 0009 */
    await audit(env, g.actor, 'coach.mode', null, { mode });
    return json({ ok: true, mode });
  }
  if (parts[0] === 'coach' && parts[1] === 'trial' && parts.length === 2) {
    if (!coachConfigured(env)) return fail(503, 'coach not available');
    const tb = (await readJson(request, 16 * 1024)) || {};
    const v = coachValidate(String(tb.kind || ''), tb.question, tb.text);
    if (v.error) return fail(400, v.error, { field: v.field, min: v.min, max: v.max });
    const r = await coachReview(env, { userId: null, kind: tb.kind, lang: tb.lang === 'id' ? 'id' : 'en', question: v.question, text: v.text });
    if (!r.ok) return fail(r.status, r.error, { scope: r.scope });
    return json({ ok: true, feedback: r.feedback, model: r.model });
  }
  if (parts[0] === 'digest' && parts.length === 1) {
    const r = await sendOwnerDigest(env, { force: true });
    await audit(env, g.actor, 'digest.send', null, { sent: r.sent, reason: r.reason || null });
    return r.sent ? json({ ok: true, sent: true }) : fail(503, r.reason || 'not sent');
  }
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
    await audit(env, g.actor, 'entitlement.grant_founding', null, { product, plan, ends_at: endsAt, granted: n });
    return json({ ok: true, granted: n });
  }
  if (parts.length > 1) return fail(404, 'unknown route');
  const plan = String(body.plan || '');
  if (!PLANS.includes(plan) || plan === 'free') return fail(400, 'unknown plan', { field: 'plan' });
  const u = await findUser(env, body.user || '');
  if (!u) return fail(404, 'no such member', { field: 'user' });
  const e = await grantEntitlement(env, { userId: u.id, product, plan, endsAt, source: 'admin:' + grantedBy, note: clip(body.note || '', 500) || null, grantedBy });
  await audit(env, g.actor, 'entitlement.grant', u.email, { product, plan, ends_at: endsAt, id: e.id });
  const rows = await listEntitlements(env, u.id, { includeRevoked: true });
  return json({ ok: true, entitlement: entRow(e), access: resolveAccess(env, u, rows) }, 201);
}

export async function onRequestDelete({ request, env, params }) {
  const g = await guard(request, env, true); if (g instanceof Response) return g;
  const parts = params.route || [];
  if (parts[0] !== 'entitlements' || !parts[1]) return fail(404, 'unknown route');
  const ok = await revokeEntitlement(env, clip(parts[1], 64));
  if (ok) await audit(env, g.actor, 'entitlement.revoke', clip(parts[1], 64), null);
  return ok ? json({ ok: true }) : fail(404, 'no active grant with that id');
}
