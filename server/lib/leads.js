/**
 * Lead pipeline (docs/21-opportunity-assessment.md, N-11). The team's side of the leads table:
 *
 *   - stages for a sale (new, contacted, meeting, proposal, won, lost) beside the review stages
 *     mentor applications already had;
 *   - a follow-up day, an owner, a value in rupiah and the time of the last contact per lead;
 *   - leads the team types in itself, for organisations it approached first;
 *   - reply templates in English and Bahasa Indonesia, kept in site_settings. The admin page fills
 *     a template and hands it to the team member's own mail program; nothing is sent from here,
 *     so replies cost no mail allowance and arrive from a person;
 *   - an account for an accepted mentor: the existing account gets the mentor role, or a new one
 *     is opened and the mentor receives one message with a link to choose a password.
 *
 * Needs migration 0014. Every function fails soft before it: callers turn the error into a 503.
 */
import { clip, nowIso, newId, isEmail, normEmail, localeOf } from './http.js';
import { issueToken } from './auth.js';
import { grantFree } from './entitlements.js';
import { mailMentorInvite } from './mail.js';

export const LEAD_KINDS = ['mentor', 'enterprise', 'newsletter', 'waitlist', 'results'];
export const LEAD_STATUSES = ['new', 'reviewing', 'accepted', 'declined', 'contacted', 'meeting', 'proposal', 'won', 'lost', 'archived', 'confirmed', 'unsubscribed'];
/* a follow-up day stops counting once the lead is in one of these */
export const CLOSED_STATUSES = ['won', 'lost', 'declined', 'archived', 'unsubscribed'];
export const SALES_STAGES = ['new', 'contacted', 'meeting', 'proposal', 'won', 'lost'];
export const ORG_TYPES = ['campus', 'employer', 'sponsor', 'student_org', 'other'];
const PIPELINE_KINDS = ['mentor', 'enterprise'];
const MAX_VALUE = 100000000000;                 /* Rp 100 billion: a typing mistake, not a deal */
const CONSENT_VERSIONS = { terms_version: '1.0-draft', privacy_version: '1.0-draft' };

const okDay = d => typeof d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d) && !isNaN(Date.parse(d + 'T00:00:00Z'));
/* "today" for a follow-up is the calendar day in Jakarta (UTC+7) */
export const jakartaDay = (offsetDays = 0, now = Date.now()) => new Date(now + 7 * 3600 * 1000 + offsetDays * 86400 * 1000).toISOString().slice(0, 10);
const closedSql = CLOSED_STATUSES.map(s => `'${s}'`).join(', ');

export const leadRow = r => ({ id: r.id, kind: r.kind, email: r.email, name: r.name, payload: JSON.parse(r.payload_json || '{}'), consent: JSON.parse(r.consent_json || '{}'),
  status: r.status, notes: r.notes, locale: r.locale, source_page: r.source_page, created_at: r.created_at, updated_at: r.updated_at, confirmed_at: r.confirmed_at,
  follow_up_on: r.follow_up_on || null, owner: r.owner || null, value_idr: r.value_idr == null ? null : r.value_idr, last_contact_at: r.last_contact_at || null, user_id: r.user_id || null });

function cleanValue(v) {
  if (v === null || v === '' || v === undefined) return { value: null };
  const n = typeof v === 'number' ? v : Number(String(v).replace(/[.,\s]/g, ''));
  if (!Number.isFinite(n) || n < 0 || n > MAX_VALUE || Math.floor(n) !== n) return { error: 'value must be a whole number of rupiah', field: 'value_idr' };
  return { value: n };
}

/* What a PATCH may change, checked against the stored row. Returns { sets, args, pipeline } or { error }.
   `pipeline` is true when a column from migration 0014 is touched. */
export function cleanLeadPatch(body, cur) {
  const b = body || {}, sets = [], args = [];
  let pipeline = false, status = cur.status;
  if (b.status !== undefined) {
    if (!LEAD_STATUSES.includes(b.status)) return { error: 'bad status', field: 'status' };
    status = b.status;
  }
  if (b.contacted === true) {
    pipeline = true;
    sets.push('last_contact_at = ?'); args.push(nowIso());
    /* the first contact moves a new lead on; a later stage is left alone */
    if (b.status === undefined && cur.status === 'new') status = 'contacted';
    /* and puts the next look a week out, unless a day in the future is already set or sent */
    if (b.follow_up_on === undefined && !(cur.follow_up_on && cur.follow_up_on > jakartaDay())) { sets.push('follow_up_on = ?'); args.push(jakartaDay(7)); }
  }
  if (status !== cur.status) { sets.push('status = ?'); args.push(status); }
  if (b.notes !== undefined) { sets.push('notes = ?'); args.push(clip(String(b.notes == null ? '' : b.notes), 4000)); }
  if (b.follow_up_on !== undefined) {
    pipeline = true;
    const d = b.follow_up_on === null || b.follow_up_on === '' ? null : String(b.follow_up_on).slice(0, 10);
    if (d && !okDay(d)) return { error: 'follow-up must be a date', field: 'follow_up_on' };
    sets.push('follow_up_on = ?'); args.push(d);
  }
  if (b.owner !== undefined) { pipeline = true; sets.push('owner = ?'); args.push(clip(String(b.owner == null ? '' : b.owner), 80) || null); }
  if (b.value_idr !== undefined) {
    pipeline = true;
    const v = cleanValue(b.value_idr); if (v.error) return v;
    sets.push('value_idr = ?'); args.push(v.value);
  }
  /* the address and name of a lead the team typed in can be corrected; a submitted form is a record and stays as sent */
  if (cur.source_page === 'admin') {
    if (b.email !== undefined) {
      const e = normEmail(b.email);
      if (e && !isEmail(e)) return { error: 'valid e-mail required', field: 'email' };
      sets.push('email = ?'); args.push(e);
    }
    if (b.name !== undefined) { sets.push('name = ?'); args.push(clip(String(b.name == null ? '' : b.name), 80) || null); }
  }
  return { sets, args, pipeline, status };
}

/* A lead the team adds itself: an organisation it approached, or a mentor met in person. */
export async function createManualLead(env, body, actor) {
  const b = body || {};
  const kind = b.kind === 'mentor' ? 'mentor' : 'enterprise';
  const name = clip(b.name, 80), company = clip(b.company, 120);
  if (!name && !company) return { error: 'a name or an organisation is required', field: 'name' };
  const email = normEmail(b.email);
  if (email && !isEmail(email)) return { error: 'valid e-mail required', field: 'email' };
  const v = cleanValue(b.value_idr); if (v.error) return v;
  const follow = b.follow_up_on ? String(b.follow_up_on).slice(0, 10) : null;
  if (follow && !okDay(follow)) return { error: 'follow-up must be a date', field: 'follow_up_on' };
  const locale = localeOf(b.locale);
  const payload = kind === 'mentor'
    ? { name, company, role: clip(b.role, 120), expertise: clip(b.expertise, 200), message: clip(b.message, 3000), added_by: actor }
    : { name, company, role: clip(b.role, 120), org_type: ORG_TYPES.includes(b.org_type) ? b.org_type : 'other', cohort_size: clip(b.cohort_size, 40), message: clip(b.message, 3000), language: locale, added_by: actor };
  /* nobody consented to anything here: the record says so, and such a lead never receives a letter */
  const consent = { ...CONSENT_VERSIONS, marketing: false, consented_at: nowIso(), method: 'admin-entry' };
  const id = newId(), now = nowIso();
  await env.DB.prepare('INSERT INTO leads (id, kind, email, name, payload_json, consent_json, status, notes, locale, source_page, created_at, updated_at, follow_up_on, owner, value_idr) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(id, kind, email, name || null, JSON.stringify(payload), JSON.stringify(consent), 'new', clip(b.notes, 4000) || null, locale, 'admin', now, now, follow, clip(b.owner, 80) || null, v.value).run();
  const r = await env.DB.prepare('SELECT * FROM leads WHERE id = ?').bind(id).first();
  return { lead: leadRow(r) };
}

/* Counts for the pipeline panel, the stats row and the weekly summary. */
export async function pipelineSummary(env) {
  const today = jakartaDay(), week = jakartaDay(7);
  const open = `follow_up_on IS NOT NULL AND kind IN ('mentor', 'enterprise') AND status NOT IN (${closedSql})`;
  const n = async (sql, ...args) => { const r = await env.DB.prepare(sql).bind(...args).first(); return r ? (r.n || 0) : 0; };
  const overdue = await n(`SELECT COUNT(*) AS n FROM leads WHERE ${open} AND follow_up_on < ?`, today);
  const dueToday = await n(`SELECT COUNT(*) AS n FROM leads WHERE ${open} AND follow_up_on = ?`, today);
  const dueWeek = await n(`SELECT COUNT(*) AS n FROM leads WHERE ${open} AND follow_up_on > ? AND follow_up_on <= ?`, today, week);
  const rows = (await env.DB.prepare("SELECT status, COUNT(*) AS n, COALESCE(SUM(value_idr), 0) AS v FROM leads WHERE kind = 'enterprise' GROUP BY status").all()).results || [];
  const by = {}; for (const r of rows) by[r.status] = r;
  const stages = SALES_STAGES.map(s => ({ status: s, n: by[s] ? by[s].n : 0, value_idr: by[s] ? by[s].v : 0 }));
  const openStages = stages.filter(s => s.status !== 'won' && s.status !== 'lost');
  return { today, overdue, due_today: dueToday, due_week: dueWeek, stages,
    open: openStages.reduce((a, s) => a + s.n, 0), open_value_idr: openStages.reduce((a, s) => a + s.value_idr, 0),
    won: by.won ? by.won.n : 0, won_value_idr: by.won ? by.won.v : 0 };
}

/* ── reply templates ── */
const TEMPLATES_KEY = 'lead_templates';
const KEY_RE = /^[a-z0-9][a-z0-9_-]{1,39}$/;
/* Placeholders the admin page fills: {name} {company} {sender} {site}. Square brackets mark what the sender types. */
export const DEFAULT_TEMPLATES = [
  { key: 'first-reply', label: 'First reply to an organisation', kind: 'enterprise',
    subject_en: 'Metanoia Labs for {company}',
    body_en: 'Hello {name},\n\nThank you for your interest in Metanoia Labs for {company}.\n\nIn short: each participant gets a seat on the platform for one semester. They start with the Career Map, a 15-minute readiness check, and then follow courses on self-knowledge, applications, interviews and the first years at work. At the end you receive a cohort report with progress and readiness for the group as a whole. Individual results stay private.\n\nCould we speak for 20 minutes this week or next? Send me two times that suit you and I will confirm one.\n\nBest regards,\n{sender}\n{site}',
    subject_id: 'Metanoia Labs untuk {company}',
    body_id: 'Yth. Bapak/Ibu {name},\n\nTerima kasih atas minat Bapak/Ibu terhadap Metanoia Labs untuk {company}.\n\nSingkatnya: setiap peserta mendapat satu kursi di platform selama satu semester. Peserta memulai dengan Career Map, yaitu cek kesiapan karier selama 15 menit, lalu mengikuti kelas tentang pengenalan diri, lamaran kerja, wawancara, dan tahun-tahun pertama bekerja. Di akhir program, Bapak/Ibu menerima laporan kohort berisi kemajuan dan kesiapan kelompok secara keseluruhan. Hasil tiap peserta tetap bersifat pribadi.\n\nApakah kita bisa berbincang 20 menit pada minggu ini atau minggu depan? Mohon kirimkan dua pilihan waktu, nanti saya konfirmasi salah satunya.\n\nSalam hormat,\n{sender}\n{site}' },
  { key: 'pilot-proposal', label: 'Pilot proposal', kind: 'enterprise',
    subject_en: 'A pilot for {company}: proposal',
    body_en: 'Hello {name},\n\nThank you for the conversation. Here is the pilot we discussed for {company}.\n\nParticipants: [number] seats\nPeriod: one semester, starting [date]\nIncluded: full access to all four courses, the Career Map, the practice tools and the cohort report at the end\nPrice: Rp [price] per seat, Rp [total] in total, by invoice\n\nHow it starts: I send you one access code. Participants enter it when they register, and they are in.\n\nIf this works for you, reply to this message and I will send the invoice and the code.\n\nBest regards,\n{sender}\n{site}',
    subject_id: 'Proposal program percontohan untuk {company}',
    body_id: 'Yth. Bapak/Ibu {name},\n\nTerima kasih atas waktu dan perbincangannya. Berikut program percontohan yang kita bahas untuk {company}.\n\nPeserta: [jumlah] kursi\nPeriode: satu semester, mulai [tanggal]\nYang didapat: akses penuh ke empat kelas, Career Map, alat latihan, dan laporan kohort di akhir program\nBiaya: Rp [harga] per kursi, total Rp [total], dibayar melalui invoice\n\nCara memulainya: saya mengirimkan satu kode akses. Peserta memasukkan kode itu saat mendaftar dan langsung bisa belajar.\n\nJika Bapak/Ibu setuju, cukup balas pesan ini. Saya akan mengirimkan invoice beserta kodenya.\n\nSalam hormat,\n{sender}\n{site}' },
  { key: 'follow-up', label: 'Follow-up, no reply yet', kind: 'enterprise',
    subject_en: 'Following up: Metanoia Labs for {company}',
    body_en: 'Hello {name},\n\nI am following up on my last message about Metanoia Labs for {company}. I know calendars fill quickly.\n\nIf the timing is wrong, tell me when to come back and I will. If someone else is the right person to speak to, I would be grateful for an introduction.\n\nBest regards,\n{sender}\n{site}',
    subject_id: 'Menindaklanjuti: Metanoia Labs untuk {company}',
    body_id: 'Yth. Bapak/Ibu {name},\n\nSaya ingin menindaklanjuti pesan saya sebelumnya tentang Metanoia Labs untuk {company}. Saya paham jadwal Bapak/Ibu padat.\n\nJika waktunya belum tepat, mohon kabari kapan sebaiknya saya menghubungi kembali. Jika ada rekan yang lebih tepat untuk membahas hal ini, saya akan sangat berterima kasih bila diperkenalkan.\n\nSalam hormat,\n{sender}\n{site}' },
  { key: 'mentor-accepted', label: 'Mentor accepted', kind: 'mentor',
    subject_en: 'Welcome as a Metanoia Labs mentor',
    body_en: 'Hello {name},\n\nThank you for applying to mentor with Metanoia Labs. We have read your application and would be glad to have you.\n\nThe next step is a short call to agree on your availability and the kind of member you would like to guide. Send me two times that suit you and I will confirm one.\n\nBest regards,\n{sender}\n{site}',
    subject_id: 'Selamat bergabung sebagai mentor Metanoia Labs',
    body_id: 'Halo {name},\n\nTerima kasih sudah mendaftar sebagai mentor Metanoia Labs. Kami sudah membaca lamaranmu dan senang sekali jika kamu bergabung.\n\nLangkah berikutnya adalah obrolan singkat untuk menyepakati waktu luangmu dan anggota seperti apa yang ingin kamu dampingi. Kirimkan dua pilihan waktu, nanti saya konfirmasi salah satunya.\n\nSalam hangat,\n{sender}\n{site}' },
  { key: 'mentor-not-now', label: 'Mentor, not this time', kind: 'mentor',
    subject_en: 'Your mentor application to Metanoia Labs',
    body_en: 'Hello {name},\n\nThank you for applying to mentor with Metanoia Labs, and for the time you put into the application.\n\nWe are not able to offer you a place in this intake. The reason is the number of places, not the quality of your experience. With your permission we will keep your application and write to you when the next intake opens.\n\nBest regards,\n{sender}\n{site}',
    subject_id: 'Lamaran mentormu di Metanoia Labs',
    body_id: 'Halo {name},\n\nTerima kasih sudah mendaftar sebagai mentor Metanoia Labs dan meluangkan waktu untuk mengisi lamaran.\n\nUntuk periode ini kami belum bisa menawarkan tempat. Penyebabnya jumlah tempat yang terbatas, bukan kualitas pengalamanmu. Jika kamu berkenan, kami akan menyimpan lamaranmu dan menghubungimu saat periode berikutnya dibuka.\n\nSalam hangat,\n{sender}\n{site}' }
];

export function cleanTemplates(list) {
  if (!Array.isArray(list) || !list.length) return { error: 'at least one template is required', field: 'templates' };
  if (list.length > 12) return { error: 'twelve templates at most', field: 'templates' };
  const out = [], seen = {};
  for (const x of list) {
    const t = x || {};
    const key = clip(String(t.key || ''), 40).toLowerCase();
    if (!KEY_RE.test(key) || seen[key]) return { error: 'each template needs its own short key (letters, digits, hyphens)', field: 'key' };
    seen[key] = 1;
    const o = { key, label: clip(t.label, 60), kind: t.kind === 'mentor' ? 'mentor' : 'enterprise',
      subject_en: clip(t.subject_en, 140), body_en: clip(t.body_en, 3000), subject_id: clip(t.subject_id, 140), body_id: clip(t.body_id, 3000) };
    if (!o.label) return { error: 'each template needs a name', field: 'label' };
    if (!o.subject_en || !o.body_en) return { error: 'each template needs an English subject and text', field: 'body_en' };
    out.push(o);
  }
  return { templates: out };
}

export async function readTemplates(env) {
  try {
    const r = await env.DB.prepare('SELECT value, updated_at, updated_by FROM site_settings WHERE key = ?').bind(TEMPLATES_KEY).first();
    if (r) { const c = cleanTemplates(JSON.parse(r.value)); if (c.templates) return { templates: c.templates, custom: true, updated_at: r.updated_at, updated_by: r.updated_by }; }
  } catch (e) { /* before migration 0009, or a stored value that no longer parses: the built-in set */ }
  return { templates: DEFAULT_TEMPLATES, custom: false };
}

export async function saveTemplates(env, list, actor) {
  const c = cleanTemplates(list); if (c.error) return c;
  await env.DB.prepare('INSERT INTO site_settings (key, value, updated_at, updated_by) VALUES (?, ?, ?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at, updated_by = excluded.updated_by')
    .bind(TEMPLATES_KEY, JSON.stringify(c.templates), nowIso(), String(actor).slice(0, 254)).run();
  return { templates: c.templates, custom: true };
}

export async function resetTemplates(env) {
  await env.DB.prepare('DELETE FROM site_settings WHERE key = ?').bind(TEMPLATES_KEY).run();
  return { templates: DEFAULT_TEMPLATES, custom: false };
}

/* ── an accepted mentor application becomes an account with the mentor role ── */
export async function convertMentor(env, leadId, { site }) {
  const lead = await env.DB.prepare('SELECT * FROM leads WHERE id = ?').bind(leadId).first();
  if (!lead) return { error: 'no such lead', status: 404 };
  if (lead.kind !== 'mentor') return { error: 'only a mentor application can become a mentor account', status: 400 };
  if (lead.status !== 'accepted') return { error: 'accept the application first', status: 409, field: 'status' };
  if (!isEmail(lead.email)) return { error: 'the application has no e-mail address', status: 400, field: 'email' };
  const now = nowIso();
  let u = await env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(lead.email).first();
  let created = false, invited = false, reason = null;
  if (u) {
    if (u.deletion_requested_at) return { error: 'this account is waiting to be deleted', status: 409 };
    /* an admin stays an admin */
    if (u.role === 'member') await env.DB.prepare('UPDATE users SET role = ?, updated_at = ? WHERE id = ?').bind('mentor', now, u.id).run();
  } else {
    const id = newId(), locale = localeOf(lead.locale);
    const applied = JSON.parse(lead.consent_json || '{}');
    /* the terms were accepted on the application form; the account records that, and no marketing consent */
    const consent = { terms_version: applied.terms_version || CONSENT_VERSIONS.terms_version, privacy_version: applied.privacy_version || CONSENT_VERSIONS.privacy_version,
      marketing: false, consented_at: applied.consented_at || now, method: 'mentor-application' };
    /* no password and an unproven address: the link in the invitation sets the first and proves the second */
    await env.DB.prepare('INSERT INTO users (id, email, name, pw_hash, role, audience, locale, email_verified_at, consent_json, marketing_opt_in, founding, created_at, updated_at) VALUES (?, ?, ?, ?, ?, NULL, ?, NULL, ?, 0, 0, ?, ?)')
      .bind(id, lead.email, clip(lead.name || '', 80) || 'Mentor', '', 'mentor', locale, JSON.stringify(consent), now, now).run();
    await grantFree(env, id);
    u = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(id).first();
    created = true;
    const raw = await issueToken(env, 'reset', { userId: id, hours: 168 });
    const m = await mailMentorInvite(env, { to: lead.email, name: u.name, url: `${site}/login?reset=${raw}`, locale, ref: lead.id });
    invited = !!m.sent; reason = m.sent ? null : (m.reason || 'not sent');
  }
  await env.DB.prepare('UPDATE leads SET user_id = ?, updated_at = ? WHERE id = ?').bind(u.id, now, lead.id).run();
  const fresh = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(u.id).first();
  const r = await env.DB.prepare('SELECT * FROM leads WHERE id = ?').bind(lead.id).first();
  return { lead: leadRow(r), user: { id: fresh.id, email: fresh.email, name: fresh.name, role: fresh.role }, created, invited, reason };
}
