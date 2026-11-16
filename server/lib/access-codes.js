/**
 * Access codes for sponsors and campuses (docs/21 N-02; migration 0010).
 *
 * A sponsor buys seats for a cohort and is invoiced outside the platform. The owner creates a batch in
 * the admin page and hands the sponsor one code. Each member who redeems it gets an entitlement
 * (source `code:<batch id>`) until the batch's access end date. The sponsor's report is aggregate
 * only and is withheld while fewer than COHORT_MIN members have redeemed, so no one can be singled out.
 *
 *   createBatch · listBatches · updateBatch          admin
 *   redeem(env, user, code)                          member
 *   batchReport(env, batchId)                        admin, aggregate
 */
import { newId, nowIso, hmacHex } from './http.js';
import { PRODUCTS, grantEntitlement, revokeEntitlement } from './entitlements.js';

export const CODE_PLANS = ['enterprise', 'member'];
export const cohortMin = env => { const n = parseInt(env.COHORT_MIN, 10); return Number.isFinite(n) && n >= 2 ? n : 5; };

/* no 0/O, 1/I/L: a code is read aloud and typed by hand */
const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
function newCode() {
  const a = new Uint8Array(8); crypto.getRandomValues(a);
  const s = Array.from(a).map(b => ALPHABET[b % ALPHABET.length]).join('');
  return 'MTN-' + s.slice(0, 4) + '-' + s.slice(4);
}
export const normCode = s => String(s || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
const fmt = c => { const n = normCode(c); return n.length === 11 ? n.slice(0, 3) + '-' + n.slice(3, 7) + '-' + n.slice(7) : String(c); };
const isDate = s => typeof s === 'string' && !Number.isNaN(Date.parse(s));

const row = (b, used) => ({ id: b.id, code: fmt(b.code), label: b.label, sponsor: b.sponsor || null, product: b.product, plan: b.plan, seats: b.seats, seats_used: used || 0,
  redeem_by: b.redeem_by || null, access_ends_at: b.access_ends_at || null, note: b.note || null, created_by: b.created_by || null, created_at: b.created_at, revoked: !!b.revoked_at });

export async function createBatch(env, { label, sponsor, product = 'all', plan = 'enterprise', seats, redeemBy = null, accessEndsAt = null, note = null, createdBy = null }) {
  label = String(label || '').trim().slice(0, 120);
  if (!label) return { error: 'label required', field: 'label' };
  if (product !== 'all' && !PRODUCTS.includes(product)) return { error: 'unknown product', field: 'product' };
  if (!CODE_PLANS.includes(plan)) return { error: 'unknown plan', field: 'plan' };
  seats = parseInt(seats, 10);
  if (!Number.isInteger(seats) || seats < 1 || seats > 5000) return { error: 'seats must be 1 to 5000', field: 'seats' };
  if (redeemBy && !isDate(redeemBy)) return { error: 'bad date', field: 'redeem_by' };
  if (accessEndsAt && !isDate(accessEndsAt)) return { error: 'bad date', field: 'access_ends_at' };
  const id = newId(), now = nowIso();
  for (let attempt = 0; attempt < 4; attempt++) {
    const code = normCode(newCode());
    try {
      await env.DB.prepare('INSERT INTO access_batches (id, code, label, sponsor, product, plan, seats, redeem_by, access_ends_at, note, created_by, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
        .bind(id, code, label, String(sponsor || '').trim().slice(0, 120) || null, product, plan, seats, redeemBy ? new Date(redeemBy).toISOString() : null, accessEndsAt ? new Date(accessEndsAt).toISOString() : null, note ? String(note).slice(0, 500) : null, createdBy, now).run();
      const b = await env.DB.prepare('SELECT * FROM access_batches WHERE id = ?').bind(id).first();
      return { batch: row(b, 0) };
    } catch (e) { if (!/UNIQUE/i.test(String(e && e.message))) throw e; }
  }
  return { error: 'could not create a code' };
}

export async function listBatches(env) {
  const r = await env.DB.prepare('SELECT b.*, (SELECT COUNT(*) FROM access_redemptions x WHERE x.batch_id = b.id) AS used FROM access_batches b ORDER BY b.created_at DESC LIMIT 500').all();
  return (r.results || []).map(b => row(b, b.used));
}

/* seats, dates, note; revoke or restore; withdraw also revokes the access the batch gave */
export async function updateBatch(env, id, patch) {
  const b = await env.DB.prepare('SELECT * FROM access_batches WHERE id = ?').bind(id).first();
  if (!b) return { error: 'no such batch', status: 404 };
  const sets = [], args = [];
  if (patch.seats !== undefined) { const n = parseInt(patch.seats, 10); if (!Number.isInteger(n) || n < 1 || n > 5000) return { error: 'seats must be 1 to 5000', field: 'seats' }; sets.push('seats = ?'); args.push(n); }
  if (patch.redeem_by !== undefined) { if (patch.redeem_by && !isDate(patch.redeem_by)) return { error: 'bad date', field: 'redeem_by' }; sets.push('redeem_by = ?'); args.push(patch.redeem_by ? new Date(patch.redeem_by).toISOString() : null); }
  if (patch.note !== undefined) { sets.push('note = ?'); args.push(String(patch.note || '').slice(0, 500) || null); }
  if (patch.revoked !== undefined) { sets.push('revoked_at = ?'); args.push(patch.revoked ? nowIso() : null); }
  if (sets.length) await env.DB.prepare(`UPDATE access_batches SET ${sets.join(', ')} WHERE id = ?`).bind(...args, id).run();
  let withdrawn = 0;
  if (patch.withdraw_access === true) {
    const rs = await env.DB.prepare('SELECT entitlement_id FROM access_redemptions WHERE batch_id = ? AND entitlement_id IS NOT NULL').bind(id).all();
    for (const x of rs.results || []) if (await revokeEntitlement(env, x.entitlement_id)) withdrawn++;
  }
  const nb = await env.DB.prepare('SELECT b.*, (SELECT COUNT(*) FROM access_redemptions x WHERE x.batch_id = b.id) AS used FROM access_batches b WHERE b.id = ?').bind(id).first();
  return { batch: row(nb, nb.used), withdrawn };
}

/* → { ok, already, batch: { label, sponsor, product, plan, access_ends_at } } | { ok: false, status, error } */
export async function redeem(env, user, code) {
  const c = normCode(code);
  if (c.length < 8 || c.length > 20) return { ok: false, status: 400, error: 'that does not look like a code', field: 'code' };
  const b = await env.DB.prepare('SELECT * FROM access_batches WHERE code = ?').bind(c).first();
  /* one answer for unknown and withdrawn codes, so a code cannot be probed */
  if (!b || b.revoked_at) return { ok: false, status: 404, error: 'this code is not valid', field: 'code' };
  const pub = { label: b.label, sponsor: b.sponsor || null, product: b.product, plan: b.plan, access_ends_at: b.access_ends_at || null };
  const mine = await env.DB.prepare('SELECT id FROM access_redemptions WHERE batch_id = ? AND user_id = ?').bind(b.id, user.id).first();
  if (mine) return { ok: true, already: true, batch: pub };
  if (b.redeem_by && Date.now() > Date.parse(b.redeem_by)) return { ok: false, status: 410, error: 'this code can no longer be used', field: 'code' };
  if (b.access_ends_at && Date.now() > Date.parse(b.access_ends_at)) return { ok: false, status: 410, error: 'this code can no longer be used', field: 'code' };
  const used = await env.DB.prepare('SELECT COUNT(*) AS n FROM access_redemptions WHERE batch_id = ?').bind(b.id).first();
  if ((used ? used.n : 0) >= b.seats) return { ok: false, status: 409, error: 'every seat on this code has been taken', field: 'code' };
  const rid = newId();
  try {
    await env.DB.prepare('INSERT INTO access_redemptions (id, batch_id, user_id, redeemed_at) VALUES (?, ?, ?, ?)').bind(rid, b.id, user.id, nowIso()).run();
  } catch (e) { return { ok: true, already: true, batch: pub }; }   /* two taps at once: the first one won */
  /* the count is read before the insert, so two members racing for the last seat could both get in: check again and give the seat back */
  const after = await env.DB.prepare('SELECT COUNT(*) AS n FROM access_redemptions WHERE batch_id = ? AND redeemed_at <= (SELECT redeemed_at FROM access_redemptions WHERE id = ?)').bind(b.id, rid).first();
  if ((after ? after.n : 0) > b.seats) { await env.DB.prepare('DELETE FROM access_redemptions WHERE id = ?').bind(rid).run(); return { ok: false, status: 409, error: 'every seat on this code has been taken', field: 'code' }; }
  const e = await grantEntitlement(env, { userId: user.id, product: b.product, plan: b.plan, endsAt: b.access_ends_at || null, source: 'code:' + b.id, note: b.label, grantedBy: 'code' });
  await env.DB.prepare('UPDATE access_redemptions SET entitlement_id = ? WHERE id = ?').bind(e.id, rid).run();
  return { ok: true, already: false, batch: pub };
}

export async function myRedemptions(env, userId) {
  const r = await env.DB.prepare('SELECT b.label, b.sponsor, b.product, b.plan, b.access_ends_at, b.revoked_at, x.redeemed_at FROM access_redemptions x JOIN access_batches b ON b.id = x.batch_id WHERE x.user_id = ? ORDER BY x.redeemed_at DESC').bind(userId).all();
  return (r.results || []).map(x => ({ label: x.label, sponsor: x.sponsor || null, product: x.product, plan: x.plan, access_ends_at: x.access_ends_at || null, redeemed_at: x.redeemed_at }));
}

/* The sponsor's view of a cohort: counts and averages, never a person. Withheld below the minimum cohort size. */
export async function batchReport(env, id) {
  const b = await env.DB.prepare('SELECT * FROM access_batches WHERE id = ?').bind(id).first();
  if (!b) return null;
  const members = (await env.DB.prepare('SELECT u.id, u.email_verified_at, x.redeemed_at FROM access_redemptions x JOIN users u ON u.id = x.user_id WHERE x.batch_id = ?').bind(id).all()).results || [];
  const min = cohortMin(env), n = members.length;
  const head = { batch: { label: b.label, sponsor: b.sponsor || null, product: b.product, seats: b.seats, redeem_by: b.redeem_by || null, access_ends_at: b.access_ends_at || null }, seats_used: n, minimum_cohort: min, generated_at: nowIso() };
  if (n < min) return { ...head, withheld: true, reason: `aggregate figures are shown once ${min} members have joined` };
  const ids = members.map(m => m.id), week = new Date(Date.now() - 7 * 86400000).toISOString(), month = new Date(Date.now() - 30 * 86400000).toISOString();
  let active7 = 0, active30 = 0; const lessons = { 'the-map': [], 'the-pack': [], 'the-rope': [], 'the-route': [] };
  /* D1 limits bound parameters per statement, so members are read in slices */
  for (let i = 0; i < ids.length; i += 50) {
    const slice = ids.slice(i, i + 50), q = slice.map(() => '?').join(',');
    const pr = (await env.DB.prepare(`SELECT user_id, ns, data_json, updated_at FROM progress WHERE user_id IN (${q})`).bind(...slice).all()).results || [];
    const seen7 = new Set(), seen30 = new Set();
    for (const p of pr) {
      if (p.updated_at > week) seen7.add(p.user_id);
      if (p.updated_at > month) seen30.add(p.user_id);
      if (p.ns !== 'browser') continue;
      try {
        const keys = (JSON.parse(p.data_json) || {}).keys || {};
        for (const slug of Object.keys(lessons)) { const raw = keys['mt-lms:' + slug]; if (!raw) continue; const d = typeof raw === 'string' ? JSON.parse(raw) : raw; const c = Object.values(d || {}).filter(Boolean).length; if (c) lessons[slug].push(c); }
      } catch (e) { /* an unreadable document counts as no lessons */ }
    }
    active7 += seen7.size; active30 += seen30.size;
  }
  let certificates = {};
  for (let i = 0; i < ids.length; i += 50) {
    const slice = ids.slice(i, i + 50), q = slice.map(() => '?').join(',');
    try { for (const c of (await env.DB.prepare(`SELECT product, COUNT(*) AS n FROM certificates WHERE revoked_at IS NULL AND user_id IN (${q}) GROUP BY product`).bind(...slice).all()).results || []) certificates[c.product] = (certificates[c.product] || 0) + c.n; } catch (e) { /* before migration 0008 */ }
  }
  /* Career Map results are stored under a keyed hash of the member id, never the id itself */
  let cm = { completed: 0, average_total: null };
  if (env.SUBJECT_KEY) {
    const totals = [];
    for (const uid of ids) {
      const subject = await hmacHex(env.SUBJECT_KEY, 'u:' + uid);
      const a = await env.DB.prepare('SELECT scores_json FROM assessments WHERE subject_id = ? ORDER BY ts DESC LIMIT 1').bind(subject).first().catch(() => null);
      if (!a) continue; cm.completed++;
      try { const s = JSON.parse(a.scores_json); const t = typeof s.total === 'number' ? s.total : null; if (t != null) totals.push(t); } catch (e) { /* no total */ }
    }
    if (totals.length >= min) cm.average_total = Math.round(totals.reduce((x, y) => x + y, 0) / totals.length);
  }
  const products = {};
  for (const slug of Object.keys(lessons)) {
    const l = lessons[slug];
    products[slug] = { started: l.length, average_lessons_completed: l.length >= min ? Math.round(l.reduce((x, y) => x + y, 0) / l.length * 10) / 10 : null, certificates: certificates[slug] || 0 };
  }
  return { ...head, withheld: false, verified: members.filter(m => m.email_verified_at).length, active_last_7_days: active7, active_last_30_days: active30, career_map: cm, products };
}
