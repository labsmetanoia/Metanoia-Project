/**
 * Reminders without e-mail (docs/21 N-05, docs/14 "Reminders"): the dates a member keeps in The Compass,
 * read on the server for two uses.
 *
 *   calendar feed   a private .ics address the member's calendar app reads (functions/api/calendar)
 *   daily reminder  one push notification in the morning when something is due (workers/aggregate)
 *
 * The dates live in the member's browser and are mirrored to the account by js/mt-progress.js
 * ('compass_applications', 'compass_goals', 'compass_habits' in the `browser` progress namespace).
 * The database extracts those three values; the rest of the member's document is never loaded.
 * Dates are plain calendar days, and "today" is counted in Jakarta time (UTC+7).
 */
import { hmacHex, timingSafeEqual, newId, nowIso } from './http.js';
import { sendPush, pushConfigured } from './push.js';

const te = new TextEncoder();
const isDay = d => typeof d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d);
export const dayIn = (now = new Date(), offsetMinutes = 420) => new Date(now.getTime() + offsetMinutes * 60000).toISOString().slice(0, 10);
export const addDays = (day, n) => new Date(Date.parse(day + 'T00:00:00Z') + n * 86400000).toISOString().slice(0, 10);
const list = raw => { try { const v = typeof raw === 'string' ? JSON.parse(raw) : raw; return Array.isArray(v) ? v : []; } catch (e) { return []; } };
const txt = (v, loc) => String(typeof v === 'string' ? v : (v && (v[loc] || v.en)) || '').replace(/\s+/g, ' ').trim();
const clipTo = (s, n) => (s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s);
const live = a => a && (a.status === 'active' || a.status === 'offer');
const who = a => [txt(a.company), txt(a.role)].filter(Boolean).join(' · ') || 'Application';

const T = {
  en: { deadline: 'Deadline', next: 'Next step', goal: 'Goal due', cal: 'Metanoia Labs · The Compass', from: 'From your application tracker in The Compass.', fromGoal: 'From your development plan in The Compass.',
    title: 'Today in The Compass', today: 'Today', tomorrow: 'Tomorrow', habits: 'Habits today', more: n => `and ${n} more` },
  id: { deadline: 'Tenggat', next: 'Langkah berikutnya', goal: 'Target jatuh tempo', cal: 'Metanoia Labs · The Compass', from: 'Dari pelacak lamaranmu di The Compass.', fromGoal: 'Dari rencana pengembanganmu di The Compass.',
    title: 'Hari ini di The Compass', today: 'Hari ini', tomorrow: 'Besok', habits: 'Kebiasaan hari ini', more: n => `dan ${n} lainnya` }
};
const t = loc => T[loc === 'id' ? 'id' : 'en'];

/* every dated thing worth a calendar entry: application deadlines, next steps, goal dates */
export function compassItems(data, locale, today) {
  const L = t(locale), out = [], from = addDays(today, -30);
  for (const a of list(data.apps)) {
    if (!live(a) || !a.id) continue;
    if (isDay(a.deadline) && a.deadline >= from) out.push({ uid: 'app-' + a.id + '-deadline', date: a.deadline, summary: L.deadline + ': ' + who(a), description: L.from });
    if (isDay(a.nextActionDue) && a.nextActionDue >= from) out.push({ uid: 'app-' + a.id + '-next', date: a.nextActionDue, summary: clipTo((txt(a.nextAction) || L.next) + ' (' + who(a) + ')', 160), description: L.from });
  }
  for (const g of list(data.goals)) {
    if (!g || !g.id || g.done || !isDay(g.due) || g.due < from) continue;
    out.push({ uid: 'goal-' + g.id, date: g.due, summary: L.goal + ': ' + clipTo(txt(g.title, locale), 140), description: L.fromGoal });
  }
  return out.sort((x, y) => (x.date < y.date ? -1 : x.date > y.date ? 1 : 0)).slice(0, 300);
}

/* what the morning reminder says; empty when nothing is due today or tomorrow */
export function todayLines(data, locale, today) {
  const L = t(locale), tomorrow = addDays(today, 1), lines = [];
  const when = d => (d === today ? L.today : L.tomorrow);
  for (const a of list(data.apps)) {
    if (!live(a)) continue;
    if (a.deadline === today || a.deadline === tomorrow) lines.push({ d: a.deadline, s: `${when(a.deadline)}: ${L.deadline.toLowerCase()} ${who(a)}` });
    if (a.nextActionDue === today || a.nextActionDue === tomorrow) lines.push({ d: a.nextActionDue, s: `${when(a.nextActionDue)}: ${clipTo(txt(a.nextAction) || L.next, 70)} (${txt(a.company) || who(a)})` });
  }
  for (const g of list(data.goals)) if (g && !g.done && (g.due === today || g.due === tomorrow)) lines.push({ d: g.due, s: `${when(g.due)}: ${L.goal.toLowerCase()} ${clipTo(txt(g.title, locale), 70)}` });
  lines.sort((x, y) => (x.d < y.d ? -1 : x.d > y.d ? 1 : 0));
  /* habits the member asked to be reminded of, scheduled for this weekday and not ticked yet */
  const weekday = new Date(today + 'T00:00:00Z').getUTCDay();
  const habits = list(data.habits).filter(h => h && h.remind && Array.isArray(h.days) && h.days.indexOf(weekday) > -1 && !(h.log && h.log[today])).map(h => clipTo(txt(h.name, locale), 40)).filter(Boolean);
  const out = lines.map(x => x.s);
  if (habits.length) out.push(`${L.habits}: ${habits.slice(0, 3).join(', ')}${habits.length > 3 ? ' ' + L.more(habits.length - 3) : ''}`);
  return out;
}
export function reminderMessage(data, locale, today) {
  const lines = todayLines(data, locale, today);
  if (!lines.length) return null;
  const L = t(locale), shown = lines.slice(0, 3);
  if (lines.length > 3) shown.push(L.more(lines.length - 3));
  return { title: L.title, body: shown.join('\n'), url: '/products/the-compass/', tag: 'compass-' + today };
}

/* ── iCalendar (RFC 5545): all-day events, a reminder at 09:00 the day before ── */
const icsText = s => String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');
function fold(line) {
  /* lines are at most 75 octets; continuation lines start with a space */
  const out = []; let cur = '', size = 0;
  for (const ch of line) {
    const n = te.encode(ch).length;
    if (size + n > (out.length ? 74 : 75)) { out.push(cur); cur = ''; size = 0; }
    cur += ch; size += n;
  }
  out.push(cur);
  return out.join('\r\n ');
}
export function buildIcs(items, { name, locale, now = new Date(), site = 'https://metanoialabs.net' } = {}) {
  const stamp = now.toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z'), host = (() => { try { return new URL(site).hostname; } catch (e) { return 'metanoialabs.net'; } })();
  const L = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Metanoia Labs//The Compass//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'X-WR-CALNAME:' + icsText(name || t(locale).cal), 'REFRESH-INTERVAL;VALUE=DURATION:PT6H', 'X-PUBLISHED-TTL:PT6H'];
  for (const it of items) {
    if (!isDay(it.date)) continue;
    L.push('BEGIN:VEVENT', 'UID:' + icsText(it.uid) + '@' + host, 'DTSTAMP:' + stamp, 'DTSTART;VALUE=DATE:' + it.date.replace(/-/g, ''), 'DTEND;VALUE=DATE:' + addDays(it.date, 1).replace(/-/g, ''),
      'SUMMARY:' + icsText(it.summary), 'DESCRIPTION:' + icsText(it.description || ''), 'URL:' + site + '/products/the-compass/', 'TRANSP:TRANSPARENT',
      'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:' + icsText(it.summary), 'TRIGGER:-PT15H', 'END:VALARM', 'END:VEVENT');
  }
  L.push('END:VCALENDAR');
  return L.map(fold).join('\r\n') + '\r\n';
}

/* ── the member's three Compass values, extracted by the database ── */
const PICK = k => `CASE WHEN json_valid(p.data_json) THEN json_extract(p.data_json, '$.keys.${k}') END`;
export async function memberCompass(env, userId) {
  const r = await env.DB.prepare(`SELECT ${PICK('compass_applications')} AS apps, ${PICK('compass_goals')} AS goals, ${PICK('compass_habits')} AS habits FROM progress p WHERE p.user_id = ? AND p.ns = 'browser'`).bind(userId).first();
  return r || { apps: null, goals: null, habits: null };
}

/* ── calendar feed address: a signature over the member and the feed version, nothing stored ── */
export async function feedSignature(env, userId, version) {
  return (await hmacHex(env.SESSION_SECRET, 'cal:' + userId + ':' + version)).slice(0, 40);
}
export async function feedUrl(env, site, userId, version) {
  return `${site}/api/calendar/feed.ics?u=${encodeURIComponent(userId)}&k=${await feedSignature(env, userId, version)}`;
}
export async function verifyFeed(env, userId, sig) {
  if (!env.SESSION_SECRET || !userId || typeof sig !== 'string' || sig.length !== 40) return null;
  const row = await env.DB.prepare('SELECT version FROM calendar_feeds WHERE user_id = ?').bind(userId).first();
  if (!row) return null;
  const want = await feedSignature(env, userId, row.version);
  return timingSafeEqual(te.encode(sig), te.encode(want)) ? row : null;
}

/* ── push subscriptions ── */
export const MAX_DEVICES = 5;
export async function saveSubscription(env, userId, sub, locale) {
  const now = nowIso();
  /* the same browser subscribing again, or under another account on a shared device, replaces the row */
  await env.DB.prepare('DELETE FROM push_subscriptions WHERE endpoint = ?').bind(sub.endpoint).run();
  await env.DB.prepare('INSERT INTO push_subscriptions (id, user_id, endpoint, p256dh, auth, locale, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)').bind(newId(), userId, sub.endpoint, sub.p256dh, sub.auth, locale === 'id' ? 'id' : 'en', now).run();
  await env.DB.prepare('DELETE FROM push_subscriptions WHERE user_id = ?1 AND id NOT IN (SELECT id FROM push_subscriptions WHERE user_id = ?1 ORDER BY created_at DESC LIMIT ?2)').bind(userId, MAX_DEVICES).run();
}
export const PUSH_PER_RUN = 30;      // each notification is one outbound request and a little CPU; the free plan allows 50 requests a run
export const perRun = env => { const n = parseInt(env.PUSH_PER_RUN || '', 10); return n > 0 ? Math.min(n, 45) : PUSH_PER_RUN; };

/**
 * The daily reminder. Looks at subscriptions not yet handled today, a slice per run, and sends one
 * notification where something is due today or tomorrow. A device with nothing due is only marked.
 */
export async function runReminders(env, { now = new Date(), limit, dryRun = false } = {}) {
  if (!env.DB) return { error: 'not configured' };
  if (!pushConfigured(env)) return { skipped: 'push keys not set' };
  const today = dayIn(now), n = limit || perRun(env);
  const rows = (await env.DB.prepare(
    `SELECT s.id, s.user_id, s.endpoint, s.p256dh, s.auth, s.locale, s.fails, ${PICK('compass_applications')} AS apps, ${PICK('compass_goals')} AS goals, ${PICK('compass_habits')} AS habits ` +
    "FROM push_subscriptions s LEFT JOIN progress p ON p.user_id = s.user_id AND p.ns = 'browser' WHERE s.reminded_day IS NULL OR s.reminded_day < ? ORDER BY s.reminded_day LIMIT ?").bind(today, n).all()).results || [];
  const out = { day: today, looked: rows.length, sent: 0, quiet: 0, failed: 0, removed: 0 };
  if (dryRun) { out.would_send = rows.filter(r => reminderMessage(r, r.locale, today)).length; return out; }
  const stmts = [], cache = {}, at = nowIso();
  for (const r of rows) {
    const msg = reminderMessage(r, r.locale, today);
    if (!msg) { out.quiet++; stmts.push(env.DB.prepare('UPDATE push_subscriptions SET reminded_day = ? WHERE id = ?').bind(today, r.id)); continue; }
    const res = await sendPush(env, r, msg, { cache });
    if (res.ok) { out.sent++; stmts.push(env.DB.prepare('UPDATE push_subscriptions SET reminded_day = ?, last_ok_at = ?, fails = 0 WHERE id = ?').bind(today, at, r.id)); }
    else if (res.gone || r.fails >= 4) { out.removed++; stmts.push(env.DB.prepare('DELETE FROM push_subscriptions WHERE id = ?').bind(r.id)); }
    else { out.failed++; stmts.push(env.DB.prepare('UPDATE push_subscriptions SET reminded_day = ?, fails = fails + 1 WHERE id = ?').bind(today, r.id)); }
  }
  if (stmts.length) await env.DB.batch(stmts);
  return out;
}
