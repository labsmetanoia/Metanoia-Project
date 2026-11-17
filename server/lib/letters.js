/**
 * Letters and the site-wide notice (docs/21 N-03, docs/14 "Letters and announcements").
 *
 * Notice   one short bilingual line with an optional link and an optional last day, kept as a single
 *          row in site_settings. Public pages read it through GET /api/notice and js/mt-notice.js
 *          draws it. No mail is involved.
 *
 * Letters  written in both languages in the admin page. A letter is a draft until the owner queues it.
 *          The Worker's morning run (workers/aggregate, 00:30 UTC) then sends one batch a day until
 *          everyone has it. Recipients are members who opted in to updates and confirmed newsletter
 *          subscribers, one message per address, in the reader's language, each with a one-click
 *          unsubscribe link. Letters share the lifecycle mail caps (server/lib/lifecycle.js), so the
 *          free mail plan's 100 a day is never exceeded and sign-in mail always has room.
 *
 * A day's batch is one call to the provider (sendMailBatch) and one database batch, so the size of
 * the list does not push the Worker over the free plan's per-run limits.
 */
import { clip, newId, nowIso, isEmail, normEmail, sha256 } from './http.js';
import { sendMail, sendMailBatch } from './mail.js';
import { lifecycleBudget, unsubscribeUrl } from './lifecycle.js';

/* ── notice ── */
const NOTICE_KEY = 'notice';
const okHref = h => typeof h === 'string' && h.length <= 300 && (/^\/(?!\/)[^\s"'<>]*$/.test(h) || /^https:\/\/[^\s"'<>]+$/.test(h));
const okDay = d => typeof d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d) && !isNaN(Date.parse(d + 'T00:00:00Z'));
/* the notice stays up through its last day in Jakarta (UTC+7) */
const endOf = day => Date.parse(day + 'T23:59:59+07:00');

export function cleanNotice(input) {
  const b = input || {};
  const n = { on: b.on === true, en: clip(b.en, 220), id: clip(b.id, 220), href: clip(b.href, 300), link_en: clip(b.link_en, 40), link_id: clip(b.link_id, 40), until: b.until ? String(b.until).slice(0, 10) : null };
  if (n.on && !n.en) return { error: 'English text required', field: 'en' };
  if (n.on && !n.id) return { error: 'Indonesian text required', field: 'id' };
  if (n.href && !okHref(n.href)) return { error: 'the link must start with / or https://', field: 'href' };
  if (n.href && (!n.link_en || !n.link_id)) return { error: 'the link needs a label in both languages', field: 'link_en' };
  if (n.until && !okDay(n.until)) return { error: 'last day must be a date', field: 'until' };
  if (!n.href) { n.link_en = ''; n.link_id = ''; }
  return { notice: n };
}
export async function readNotice(env) {
  try {
    const r = await env.DB.prepare('SELECT value, updated_at, updated_by FROM site_settings WHERE key = ?').bind(NOTICE_KEY).first();
    if (!r) return null;
    return { ...JSON.parse(r.value), updated_at: r.updated_at, updated_by: r.updated_by };
  } catch (e) { return null; }
}
export async function saveNotice(env, notice, by) {
  /* the key changes only when the words or the link change, so a visitor who closed the notice
     sees it again for new content and not when it is merely switched off and on */
  const key = (await sha256([notice.en, notice.id, notice.href, notice.link_en, notice.link_id].join('\n'))).slice(0, 12);
  const value = JSON.stringify({ ...notice, key });
  await env.DB.prepare('INSERT INTO site_settings (key, value, updated_at, updated_by) VALUES (?, ?, ?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at, updated_by = excluded.updated_by')
    .bind(NOTICE_KEY, value, nowIso(), by || null).run();
  return { ...notice, key };
}
export const noticeLive = (n, now = Date.now()) => !!(n && n.on && n.en && n.id && (!n.until || now <= endOf(n.until)));
/* what a public page may see: nothing unless the notice is on and inside its dates */
export async function publicNotice(env, now = Date.now()) {
  const n = await readNotice(env);
  if (!noticeLive(n, now)) return null;
  return { key: n.key, text: { en: n.en, id: n.id }, link: n.href ? { href: n.href, en: n.link_en, id: n.link_id } : null, until: n.until || null };
}

/* ── letters ── */
export const LETTER_DAILY_CAP = 45;          // of the 60 lifecycle messages a day; the rest stays free for time-bound follow-ups
const AUDIENCES = ['all', 'members', 'subscribers'];
export const letterCap = env => { const n = parseInt(env.LETTER_DAILY_CAP || '', 10); return n > 0 ? Math.min(n, 90) : LETTER_DAILY_CAP; };
const dayOf = d => d.toISOString().slice(0, 10);

function cleanLetter(input, base) {
  const b = input || {}, cur = base || {};
  const pick = (k, n) => (b[k] === undefined ? (cur[k] || '') : String(b[k] == null ? '' : b[k]).replace(/\r\n/g, '\n').trim().slice(0, n));
  const l = { subject_en: pick('subject_en', 140).replace(/\n/g, ' '), subject_id: pick('subject_id', 140).replace(/\n/g, ' '), body_en: pick('body_en', 6000), body_id: pick('body_id', 6000),
    audience: b.audience === undefined ? (cur.audience || 'all') : String(b.audience), show_in_portal: b.show_in_portal === undefined ? (cur.show_in_portal === undefined ? 1 : cur.show_in_portal) : (b.show_in_portal ? 1 : 0) };
  for (const k of ['subject_en', 'subject_id', 'body_en', 'body_id']) if (!l[k]) return { error: 'both languages need a subject and a text', field: k };
  if (!AUDIENCES.includes(l.audience)) return { error: 'unknown audience', field: 'audience' };
  return { letter: l };
}
const shape = (r, counts) => ({ id: r.id, subject_en: r.subject_en, subject_id: r.subject_id, body_en: r.body_en, body_id: r.body_id, audience: r.audience, status: r.status, show_in_portal: !!r.show_in_portal,
  total: r.total, sent: (counts && counts.sent) || 0, failed: (counts && counts.failed) || 0, created_by: r.created_by, created_at: r.created_at, updated_at: r.updated_at, queued_at: r.queued_at, finished_at: r.finished_at });

export async function getLetter(env, id) {
  const r = await env.DB.prepare('SELECT * FROM letters WHERE id = ?').bind(id).first();
  if (!r) return null;
  const c = await env.DB.prepare("SELECT SUM(status = 'sent') AS sent, SUM(status = 'failed') AS failed FROM letter_sends WHERE letter_id = ?").bind(id).first();
  return shape(r, c);
}
export async function createLetter(env, input, by) {
  const c = cleanLetter(input); if (c.error) return c;
  const id = newId(), now = nowIso(), l = c.letter;
  await env.DB.prepare('INSERT INTO letters (id, subject_en, subject_id, body_en, body_id, audience, status, show_in_portal, created_by, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(id, l.subject_en, l.subject_id, l.body_en, l.body_id, l.audience, 'draft', l.show_in_portal, by || null, now, now).run();
  return { letter: await getLetter(env, id) };
}
export async function updateLetter(env, id, input) {
  const cur = await env.DB.prepare('SELECT * FROM letters WHERE id = ?').bind(id).first();
  if (!cur) return { error: 'no such letter', status: 404 };
  if (cur.status !== 'draft') return { error: 'only a draft can be edited', status: 409 };
  const c = cleanLetter(input, cur); if (c.error) return c;
  const l = c.letter;
  await env.DB.prepare('UPDATE letters SET subject_en = ?, subject_id = ?, body_en = ?, body_id = ?, audience = ?, show_in_portal = ?, updated_at = ? WHERE id = ?')
    .bind(l.subject_en, l.subject_id, l.body_en, l.body_id, l.audience, l.show_in_portal, nowIso(), id).run();
  return { letter: await getLetter(env, id) };
}
export async function listLetters(env, limit = 30) {
  const r = await env.DB.prepare('SELECT * FROM letters ORDER BY created_at DESC LIMIT ?').bind(limit).all();
  const c = await env.DB.prepare("SELECT letter_id, SUM(status = 'sent') AS sent, SUM(status = 'failed') AS failed FROM letter_sends GROUP BY letter_id").all();
  const by = {}; for (const x of c.results || []) by[x.letter_id] = x;
  return (r.results || []).map(x => shape(x, by[x.id]));
}

/* who a letter goes to: one entry per address. A member who switched updates off in Settings, or used
   an unsubscribe link, gets nothing even if the same address is on the newsletter list. A member who
   never chose either way still gets letters they subscribed to on the public pages. */
export async function recipients(env, audience) {
  const out = [], seen = new Set();
  const users = await env.DB.prepare('SELECT id, email, locale, marketing_opt_in, unsubscribed_at, email_verified_at, deletion_requested_at FROM users').all();
  for (const u of users.results || []) {
    const email = normEmail(u.email); if (!email) continue;
    if (u.unsubscribed_at || u.deletion_requested_at) { seen.add(email); continue; }
    if (audience === 'subscribers' || !u.marketing_opt_in || !u.email_verified_at || !isEmail(email)) continue;
    seen.add(email);
    out.push({ rcpt: 'u:' + u.id, kind: 'user', id: u.id, email, locale: u.locale === 'id' ? 'id' : 'en' });
  }
  if (audience !== 'members') {
    const leads = await env.DB.prepare("SELECT id, email, locale FROM leads WHERE kind = 'newsletter' AND status = 'confirmed' AND unsubscribed_at IS NULL ORDER BY created_at").all();
    for (const l of leads.results || []) {
      const email = normEmail(l.email);
      if (!email || seen.has(email) || !isEmail(email)) continue;
      seen.add(email);
      out.push({ rcpt: 'l:' + l.id, kind: 'lead', id: l.id, email, locale: l.locale === 'id' ? 'id' : 'en' });
    }
  }
  return out;
}
export async function audienceCounts(env) {
  const [all, members, subscribers] = [await recipients(env, 'all'), await recipients(env, 'members'), await recipients(env, 'subscribers')];
  return { all: all.length, members: members.length, subscribers: subscribers.length };
}

export async function queueLetter(env, id) {
  const cur = await env.DB.prepare('SELECT * FROM letters WHERE id = ?').bind(id).first();
  if (!cur) return { error: 'no such letter', status: 404 };
  if (cur.status !== 'draft') return { error: 'this letter is already ' + cur.status, status: 409 };
  const busy = await env.DB.prepare("SELECT id FROM letters WHERE status IN ('queued', 'sending') LIMIT 1").first();
  if (busy) return { error: 'another letter is still being sent; cancel it or wait until it has finished', status: 409 };
  const total = (await recipients(env, cur.audience)).length;
  if (!total) return { error: 'nobody would receive this letter yet', status: 409 };
  const now = nowIso();
  await env.DB.prepare("UPDATE letters SET status = 'queued', total = ?, queued_at = ?, updated_at = ? WHERE id = ?").bind(total, now, now, id).run();
  return { letter: await getLetter(env, id), days: Math.ceil(total / letterCap(env)) };
}
export async function cancelLetter(env, id) {
  const cur = await env.DB.prepare('SELECT status FROM letters WHERE id = ?').bind(id).first();
  if (!cur) return { error: 'no such letter', status: 404 };
  if (cur.status === 'sent' || cur.status === 'cancelled') return { error: 'this letter is already ' + cur.status, status: 409 };
  const now = nowIso();
  await env.DB.prepare("UPDATE letters SET status = 'cancelled', finished_at = ?, updated_at = ? WHERE id = ?").bind(now, now, id).run();
  return { letter: await getLetter(env, id) };
}

/* ── rendering ── */
const escHtml = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const FOOT = {
  en: { why: 'You are receiving this letter because you asked for updates from Metanoia Labs.', unsub: 'Unsubscribe with one click', test: 'This is a test. The link below is a sample and does nothing.' },
  id: { why: 'Kamu menerima surat ini karena meminta kabar dari Metanoia Labs.', unsub: 'Berhenti berlangganan dengan satu klik', test: 'Ini uji coba. Tautan di bawah hanya contoh dan tidak melakukan apa pun.' }
};
export function renderLetter(letter, locale, unsubUrl) {
  const id = locale === 'id', f = FOOT[id ? 'id' : 'en'];
  const subject = id ? letter.subject_id : letter.subject_en, body = id ? letter.body_id : letter.body_en;
  const text = `${body}\n\n--\n${f.why}\n${f.unsub}: ${unsubUrl}\n\nMetanoia Labs`;
  const paras = body.split(/\n{2,}/).map(p => '<p style="margin:0 0 16px">' + escHtml(p).replace(/https:\/\/[^\s<]+[^\s<.,;:!?)]/g, u => `<a href="${u}" style="color:#8A6A14">${u}</a>`).replace(/\n/g, '<br>') + '</p>').join('');
  const html = `<div style="max-width:560px;margin:0 auto;padding:8px 4px;font:16px/1.6 -apple-system,'Segoe UI',Roboto,sans-serif;color:#1B2430">` +
    `<p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#8A6A14">Metanoia Labs</p>` +
    `<h1 style="margin:0 0 20px;font-size:22px;line-height:1.3;color:#0B1120">${escHtml(subject)}</h1>${paras}` +
    `<hr style="border:0;border-top:1px solid #E3DED3;margin:26px 0 12px"><p style="margin:0;font-size:12px;line-height:1.5;color:#6B7280">${escHtml(f.why)}<br><a href="${escHtml(unsubUrl)}" style="color:#6B7280">${escHtml(f.unsub)}</a></p></div>`;
  return { subject, text, html };
}
const unsubHeaders = url => ({ 'List-Unsubscribe': `<${url}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' });

/* both language versions to one address, so the owner reads exactly what readers will get */
export async function testLetter(env, id, to, site) {
  const l = await env.DB.prepare('SELECT * FROM letters WHERE id = ?').bind(id).first();
  if (!l) return { error: 'no such letter', status: 404 };
  if (!isEmail(normEmail(to))) return { error: 'no address to send the test to', status: 400 };
  const sample = `${site}/api/mail/unsubscribe?k=user&id=test&sig=test`;
  const out = [];
  for (const loc of ['en', 'id']) {
    const m = renderLetter(l, loc, sample);
    out.push(await sendMail(env, { to: normEmail(to), cls: 'internal', kind: 'letter-test', ref: id, subject: `[Test ${loc.toUpperCase()}] ${m.subject}`, text: `${FOOT[loc].test}\n\n${m.text}`, html: m.html }));
  }
  return { sent: out.filter(r => r.sent).length, reason: (out.find(r => !r.sent) || {}).reason || null };
}

/* how many letter messages may still go out today */
export async function letterBudget(env, now = new Date()) {
  const b = await lifecycleBudget(env, now);
  const r = await env.DB.prepare("SELECT COUNT(*) AS n FROM mail_log WHERE class = 'lifecycle' AND kind = 'letter' AND status = 'sent' AND day = ?").bind(dayOf(now)).first();
  const today = r ? r.n : 0, cap = letterCap(env);
  return { cap, sent_today: today, left: Math.max(0, Math.min(b.left, cap - today)), lifecycle_left: b.left };
}

/**
 * One batch of the letter that is queued or under way. Called once a day by the Worker and on demand
 * from the admin page; the caps hold either way because they are counted from mail_log.
 */
export async function runLetters(env, { now = new Date(), site, dryRun = false } = {}) {
  if (!env.DB || !env.SESSION_SECRET) return { error: 'not configured' };
  site = (site || env.SITE_URL || 'https://metanoialabs.net').replace(/\/$/, '');
  const l = await env.DB.prepare("SELECT * FROM letters WHERE status IN ('queued', 'sending') ORDER BY queued_at LIMIT 1").first();
  if (!l) return { idle: true };
  const all = await recipients(env, l.audience);
  const done = new Set(((await env.DB.prepare('SELECT rcpt FROM letter_sends WHERE letter_id = ?').bind(l.id).all()).results || []).map(r => r.rcpt));
  const pending = all.filter(r => !done.has(r.rcpt));
  const out = { letter: l.id, sent: 0, failed: 0, remaining: pending.length, finished: false };
  const finish = async () => { const t = nowIso(); await env.DB.prepare("UPDATE letters SET status = 'sent', finished_at = ?, updated_at = ? WHERE id = ?").bind(t, t, l.id).run(); out.finished = true; };
  if (!pending.length) { if (!dryRun) await finish(); return out; }
  const budget = await letterBudget(env, now);
  out.budget = budget;
  if (budget.left <= 0) return { ...out, skipped: 'budget' };
  const batch = pending.slice(0, budget.left);
  if (dryRun) return { ...out, would_send: batch.length };

  const messages = [];
  for (const r of batch) {
    const unsub = await unsubscribeUrl(env, site, r.kind, r.id);
    messages.push({ to: r.email, headers: unsubHeaders(unsub), ...renderLetter(l, r.locale, unsub) });
  }
  const marks = [];   // [rcpt, status]
  const res = await sendMailBatch(env, messages, { cls: 'lifecycle', kind: 'letter', ref: l.id });
  if (res.sent === messages.length) batch.forEach(r => marks.push([r.rcpt, 'sent']));
  else if (/^provider 4(00|22)$/.test(res.reason || '')) {
    /* the provider refused the batch because of one message. Send a few singly to find it:
       an address it refuses is marked failed and skipped from then on. */
    for (let i = 0; i < Math.min(15, batch.length); i++) {
      const one = await sendMail(env, { to: messages[i].to, cls: 'lifecycle', kind: 'letter', ref: l.id, subject: messages[i].subject, text: messages[i].text, html: messages[i].html, headers: messages[i].headers });
      if (one.sent) marks.push([batch[i].rcpt, 'sent']);
      else if (/^provider 4(00|22)$/.test(one.reason || '')) marks.push([batch[i].rcpt, 'failed']);
      else break;
    }
  } else return { ...out, error: res.reason || 'not sent' };

  if (marks.length) {
    const t = nowIso(), stmt = env.DB.prepare('INSERT OR IGNORE INTO letter_sends (letter_id, rcpt, status, created_at) VALUES (?, ?, ?, ?)');
    await env.DB.batch(marks.map(m => stmt.bind(l.id, m[0], m[1], t)));
  }
  out.sent = marks.filter(m => m[1] === 'sent').length;
  out.failed = marks.length - out.sent;
  out.remaining = pending.length - marks.length;
  if (res.mock) out.mock = true;
  if (out.remaining <= 0) await finish();
  else if (l.status === 'queued') await env.DB.prepare("UPDATE letters SET status = 'sending', updated_at = ? WHERE id = ?").bind(nowIso(), l.id).run();
  return out;
}

/* what the portal's Updates panel shows: letters that have started going out */
export async function portalLetters(env, limit = 8) {
  try {
    const r = await env.DB.prepare("SELECT id, subject_en, subject_id, body_en, body_id, queued_at FROM letters WHERE show_in_portal = 1 AND status IN ('sending', 'sent') ORDER BY queued_at DESC LIMIT ?").bind(limit).all();
    return (r.results || []).map(x => ({ id: x.id, date: (x.queued_at || '').slice(0, 10), title: { en: x.subject_en, id: x.subject_id }, body: { en: x.body_en, id: x.body_id } }));
  } catch (e) { return []; }
}
