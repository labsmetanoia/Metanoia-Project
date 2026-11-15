/**
 * The owner's weekly digest (docs/20-platform-audit.md, R-01).
 *
 * One e-mail on Monday morning with the week's numbers, so the business can be read
 * without opening the admin page: accounts, activity, the Career Map funnel, leads,
 * feedback, script errors and the mail quota. Counts only: no member's name, address
 * or message leaves the database, except the first words of new feedback, which the
 * owner is the intended reader of.
 *
 *   buildDigest(env, { days })        → the numbers for the last `days` and the period before it
 *   digestText(d, site)               → the plain-text message
 *   sendOwnerDigest(env, { force })   → sends to LEADS_NOTIFY_TO once per ISO week (force skips the once-a-week guard)
 *   scriptErrors(env, { days, limit })→ grouped site.script.error events (also used by /api/admin/errors)
 *
 * Called by workers/aggregate (Monday 00:30 UTC, 07:30 WIB) and by /api/admin/digest.
 */
import { sendMail } from './mail.js';

const iso = d => d.toISOString();
const day = d => d.toISOString().slice(0, 10);

async function one(env, sql, ...args) {
  try { const r = await env.DB.prepare(sql).bind(...args).first(); return r && r.n != null ? r.n : 0; } catch (e) { return null; }
}
async function all(env, sql, ...args) {
  try { const r = await env.DB.prepare(sql).bind(...args).all(); return r.results || []; } catch (e) { return []; }
}

export async function scriptErrors(env, { days = 7, limit = 50 } = {}) {
  const since = iso(new Date(Date.now() - days * 86400 * 1000));
  const rows = await all(env,
    `SELECT json_extract(props_json, '$.msg') AS msg, json_extract(props_json, '$.src') AS src, json_extract(props_json, '$.line') AS line,
            page, COUNT(*) AS n, COUNT(DISTINCT subject_id) AS visitors, MAX(ts) AS last_seen, MIN(ts) AS first_seen
       FROM events WHERE name = 'site.script.error' AND ts > ?
      GROUP BY msg, page ORDER BY n DESC, last_seen DESC LIMIT ?`, since, limit);
  const total = await one(env, "SELECT COUNT(*) AS n FROM events WHERE name = 'site.script.error' AND ts > ?", since);
  const visitors = await one(env, "SELECT COUNT(DISTINCT subject_id) AS n FROM events WHERE name = 'site.script.error' AND ts > ?", since);
  return { days, since, total: total || 0, visitors: visitors || 0, groups: rows.map(r => ({ msg: r.msg || '', src: r.src || '', line: r.line || 0, page: r.page || '', n: r.n, visitors: r.visitors, first_seen: r.first_seen, last_seen: r.last_seen })) };
}

export async function buildDigest(env, { days = 7 } = {}) {
  const now = new Date(), since = iso(new Date(now.getTime() - days * 86400 * 1000)), prev = iso(new Date(now.getTime() - 2 * days * 86400 * 1000));
  const pair = async (sql) => ({ now: await one(env, sql, since, iso(now)), before: await one(env, sql, prev, since) });
  const accounts = await pair('SELECT COUNT(*) AS n FROM users WHERE created_at > ? AND created_at <= ?');
  const verified = await pair('SELECT COUNT(*) AS n FROM users WHERE created_at > ? AND created_at <= ? AND email_verified_at IS NOT NULL');
  const active = await pair('SELECT COUNT(DISTINCT user_id) AS n FROM progress WHERE updated_at > ? AND updated_at <= ?');
  const visitors = await pair("SELECT COUNT(DISTINCT subject_id) AS n FROM events WHERE name = 'site.page.viewed' AND ts > ? AND ts <= ?");
  const assessments = await pair('SELECT COUNT(*) AS n FROM assessments WHERE ts > ? AND ts <= ?');
  const results = await pair("SELECT COUNT(*) AS n FROM leads WHERE kind = 'results' AND created_at > ? AND created_at <= ?");
  const leadRows = await all(env, "SELECT kind, COUNT(*) AS n FROM leads WHERE created_at > ? AND kind != 'results' GROUP BY kind", since);
  const leads = {}; for (const r of leadRows) leads[r.kind] = r.n;
  const unreviewed = await one(env, "SELECT COUNT(*) AS n FROM leads WHERE status = 'new' AND kind IN ('mentor', 'enterprise')");
  const fbNew = await one(env, 'SELECT COUNT(*) AS n FROM feedback WHERE created_at > ?', since);
  const fbOpen = await one(env, "SELECT COUNT(*) AS n FROM feedback WHERE status = 'new'");
  let rating = { average: null, count: 0 };
  try { const a = await env.DB.prepare('SELECT AVG(rating) AS a, COUNT(rating) AS n FROM feedback WHERE rating IS NOT NULL AND created_at > ?').bind(since).first(); if (a && a.n) rating = { average: Math.round(a.a * 10) / 10, count: a.n }; } catch (e) { /* before migration 0007 */ }
  const fbLatest = (await all(env, 'SELECT kind, rating, message, page FROM feedback WHERE created_at > ? ORDER BY created_at DESC LIMIT 5', since))
    .map(f => ({ kind: f.kind, rating: f.rating, page: f.page || '', message: String(f.message || '').replace(/\s+/g, ' ').slice(0, 140) }));
  const errors = await scriptErrors(env, { days, limit: 5 });
  const month = day(now).slice(0, 7) + '-01';
  const mailMonth = await one(env, "SELECT COUNT(*) AS n FROM mail_log WHERE day >= ? AND status = 'sent'", month);
  const mailFailed = await one(env, "SELECT COUNT(*) AS n FROM mail_log WHERE created_at > ? AND status = 'failed'", since);
  const totals = {
    users: await one(env, 'SELECT COUNT(*) AS n FROM users'),
    founding: await one(env, 'SELECT COUNT(*) AS n FROM users WHERE founding = 1'),
    weekly_opt_in: await one(env, 'SELECT COUNT(*) AS n FROM users WHERE marketing_opt_in = 1'),
    pending_deletions: await one(env, 'SELECT COUNT(*) AS n FROM users WHERE deletion_requested_at IS NOT NULL')
  };
  return { days, since, until: iso(now), accounts, verified, active, visitors, assessments, results, leads, unreviewed_leads: unreviewed,
    feedback: { new: fbNew, open: fbOpen, rating, latest: fbLatest }, errors: { total: errors.total, visitors: errors.visitors, top: errors.groups },
    mail: { sent_this_month: mailMonth, failed_this_week: mailFailed, monthly_free_allowance: 3000 }, totals,
    access_mode: env.ACCESS_MODE || 'beta', beta_ends_at: env.BETA_ENDS_AT || null };
}

const num = v => (v == null ? 'n/a' : String(v));
const trend = p => { if (!p || p.now == null) return 'n/a'; if (p.before == null) return String(p.now); const d = p.now - p.before; return `${p.now} (${d === 0 ? 'same as' : (d > 0 ? '+' + d : String(d)) + ' vs'} the week before)`; };

export function digestText(d, site = '') {
  const L = [];
  L.push(`Metanoia Labs: the last ${d.days} days`);
  L.push(`${d.since.slice(0, 10)} to ${d.until.slice(0, 10)}`);
  L.push('');
  L.push('PEOPLE');
  L.push(`  Visitors:                 ${trend(d.visitors)}`);
  L.push(`  New accounts:             ${trend(d.accounts)}`);
  L.push(`  Of those, verified:       ${trend(d.verified)}`);
  L.push(`  Members active in a product: ${trend(d.active)}`);
  L.push(`  All accounts: ${num(d.totals.users)} · founding: ${num(d.totals.founding)} · weekly e-mail opt-in: ${num(d.totals.weekly_opt_in)}`);
  L.push('');
  L.push('CAREER MAP');
  L.push(`  Completed:                ${trend(d.assessments)}`);
  L.push(`  Results sent by e-mail:   ${trend(d.results)}`);
  L.push('');
  L.push('LEADS');
  const kinds = Object.keys(d.leads);
  L.push(kinds.length ? '  New this week: ' + kinds.map(k => `${k} ${d.leads[k]}`).join(' · ') : '  No new leads this week.');
  L.push(`  Mentor and enterprise leads waiting for review: ${num(d.unreviewed_leads)}`);
  L.push('');
  L.push('FEEDBACK');
  L.push(`  New this week: ${num(d.feedback.new)} · not yet triaged: ${num(d.feedback.open)}` + (d.feedback.rating.count ? ` · average rating ${d.feedback.rating.average} of 5 from ${d.feedback.rating.count}` : ''));
  for (const f of d.feedback.latest) L.push(`  - [${f.kind}${f.rating ? ' ' + f.rating + '/5' : ''}] ${f.message}${f.page ? ' (' + f.page + ')' : ''}`);
  L.push('');
  L.push('RELIABILITY');
  L.push(d.errors.total ? `  Script errors reported by browsers: ${d.errors.total}, seen by ${d.errors.visitors} visitors` : '  No script errors were reported by browsers.');
  for (const e of d.errors.top) L.push(`  - ${e.n}× ${e.msg.slice(0, 110)} (${e.page})`);
  L.push(`  E-mail sent this month: ${num(d.mail.sent_this_month)} of ${d.mail.monthly_free_allowance} free · failed this week: ${num(d.mail.failed_this_week)}`);
  if (d.totals.pending_deletions) L.push(`  Account deletions pending: ${d.totals.pending_deletions}`);
  L.push('');
  L.push(`Access mode: ${d.access_mode}` + (d.beta_ends_at ? ` · beta ends ${d.beta_ends_at}` : ''));
  L.push(`Admin page: ${site}/admin/`);
  L.push('');
  L.push('This summary is sent on Mondays to the address in LEADS_NOTIFY_TO. It holds counts and the first words of new feedback: no names and no addresses.');
  return L.join('\n');
}

/* Monday of the ISO week `d` falls in, as YYYY-MM-DD (UTC) */
function weekStart(d) { const x = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())); x.setUTCDate(x.getUTCDate() - ((x.getUTCDay() + 6) % 7)); return day(x); }

export async function sendOwnerDigest(env, { force = false, days = 7 } = {}) {
  const to = env.LEADS_NOTIFY_TO;
  if (!env.DB) return { sent: false, reason: 'database not configured' };
  if (!to) return { sent: false, reason: 'LEADS_NOTIFY_TO unset' };
  if (!env.RESEND_API_KEY) return { sent: false, reason: 'mail not configured' };
  if (!force) {
    const already = await one(env, "SELECT COUNT(*) AS n FROM mail_log WHERE kind = 'owner-digest' AND status = 'sent' AND day >= ?", weekStart(new Date()));
    if (already) return { sent: false, reason: 'already sent this week' };
  }
  const d = await buildDigest(env, { days });
  const r = await sendMail(env, { to, cls: 'internal', kind: 'owner-digest', subject: `[Metanoia] Weekly summary: ${num(d.accounts.now)} new accounts, ${num(d.feedback.new)} feedback, ${num(d.errors.total)} script errors`, text: digestText(d, env.SITE_URL || '') });
  return { ...r, to_set: true };
}
