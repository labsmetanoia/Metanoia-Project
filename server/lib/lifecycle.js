/**
 * Lifecycle mail (Tier 1 stage 3): result → weakest dimension → weekly nudge.
 *
 * Two quota classes share one Resend account (free tier: 100 messages a day,
 * 3,000 a month). Transactional mail (sign-in links, verification, results)
 * is never held back. Lifecycle mail is capped so it can never starve it:
 * LIFECYCLE_DAILY_CAP a day and LIFECYCLE_MONTHLY_CAP a month, counted from
 * mail_log. Every lifecycle message is sent once per (kind, ref), only to
 * addresses that opted in to marketing and have not unsubscribed, and
 * carries a one-click unsubscribe link and the List-Unsubscribe headers.
 *
 * The cron Worker (workers/aggregate) calls runLifecycle once a day; the
 * Pages route /api/mail/unsubscribe handles the links.
 */
import { hmacHex, timingSafeEqual, sha256, newId, nowIso } from './http.js';
import { mailWeakest, mailWeekly } from './mail.js';

export const LIFECYCLE_DAILY_CAP = 60;
export const LIFECYCLE_MONTHLY_CAP = 2400;
export const WEAKEST_AFTER_HOURS = 48;       // the follow-up goes out two to five days after the result
export const WEAKEST_UNTIL_HOURS = 120;
export const WEEKLY_EVERY_DAYS = 7;
export const RESULT_DAYS = 90;

export const DIMS = {
  ci: { en: 'Career Intelligence', id: 'Kecerdasan Karier', product: 'The Map', path: '/products/the-map/' },
  ps: { en: 'Profile Strength', id: 'Kekuatan Profil', product: 'The Pack', path: '/products/the-pack/' },
  ir: { en: 'Interview Readiness', id: 'Kesiapan Wawancara', product: 'The Rope', path: '/products/the-rope/' },
  nc: { en: 'Network Capital', id: 'Modal Jaringan', product: 'The Route', path: '/products/the-route/' },
  cm: { en: 'Career Mindset', id: 'Pola Pikir Karier', product: 'The Compass', path: '/products/the-compass/' }
};
const PRODUCTS = { 'the-map': 'The Map', 'the-pack': 'The Pack', 'the-route': 'The Route', 'the-compass': 'The Compass', 'the-rope': 'The Rope' };
const enc = new TextEncoder();

/* the lowest dimension score; ties go to the earlier dimension in the report order */
export function weakest(dims) {
  if (!dims || typeof dims !== 'object') return null;
  let best = null;
  for (const k of Object.keys(DIMS)) {
    if (dims[k] === undefined || dims[k] === null) continue;
    const v = Number(dims[k]);
    if (!Number.isFinite(v)) continue;
    if (!best || v < best.score) best = { key: k, score: v };
  }
  return best;
}

export async function resultsSignature(env, id) {
  return (await hmacHex(env.SESSION_SECRET, 'results:' + id)).slice(0, 32);
}

/* one-click unsubscribe: kind is 'user' or 'lead', id the row id; the link needs no token row */
export async function unsubscribeSignature(env, kind, id) {
  return (await hmacHex(env.SESSION_SECRET, 'unsub:' + kind + ':' + id)).slice(0, 32);
}
export async function unsubscribeUrl(env, site, kind, id) {
  return `${site}/api/mail/unsubscribe?k=${kind}&id=${encodeURIComponent(id)}&sig=${await unsubscribeSignature(env, kind, id)}`;
}
export async function verifyUnsubscribe(env, kind, id, sig) {
  if (!env.SESSION_SECRET || (kind !== 'user' && kind !== 'lead') || !id || typeof sig !== 'string' || sig.length !== 32) return false;
  const want = await unsubscribeSignature(env, kind, id);
  return timingSafeEqual(enc.encode(sig), enc.encode(want));
}

const dayOf = d => d.toISOString().slice(0, 10);
const monthOf = d => d.toISOString().slice(0, 7);

/* how many lifecycle messages may still go out today and this month */
export async function lifecycleBudget(env, now = new Date()) {
  const day = dayOf(now), month = monthOf(now);
  const today = await env.DB.prepare("SELECT COUNT(*) AS n FROM mail_log WHERE class = 'lifecycle' AND status = 'sent' AND day = ?").bind(day).first();
  const thisMonth = await env.DB.prepare("SELECT COUNT(*) AS n FROM mail_log WHERE class = 'lifecycle' AND status = 'sent' AND day >= ? AND day <= ?").bind(month + '-01', month + '-31').first();
  const sentToday = today ? today.n : 0, sentMonth = thisMonth ? thisMonth.n : 0;
  return { sentToday, sentMonth, left: Math.max(0, Math.min(LIFECYCLE_DAILY_CAP - sentToday, LIFECYCLE_MONTHLY_CAP - sentMonth)) };
}

export async function alreadySent(env, kind, ref) {
  const r = await env.DB.prepare("SELECT 1 AS x FROM mail_log WHERE kind = ? AND ref = ? AND status = 'sent' LIMIT 1").bind(kind, ref).first();
  return !!r;
}

function consentMarketing(consentJson) {
  try { return JSON.parse(consentJson || '{}').marketing === true; } catch (e) { return false; }
}

/* products a member has touched, from the mirrored browser keys, plus the moment of the last write */
export function activityOf(progressDoc) {
  const out = { products: [], lastAt: 0 };
  if (!progressDoc || !progressDoc.keys) return out;
  const seen = new Set();
  for (const k of Object.keys(progressDoc.keys)) {
    const t = Number((progressDoc.times || {})[k]) || 0;
    if (t > out.lastAt) out.lastAt = t;
    let slug = null;
    const m = /^mt-lms[^:]*:([a-z-]+)/.exec(k) || /^mt_assess:([a-z-]+)/.exec(k);
    if (m && PRODUCTS[m[1]]) slug = m[1];
    else if (/^mt_map_|^mt-range-|^mt-lookout/.test(k)) slug = 'the-map';
    else if (/^mt_pack_/.test(k)) slug = 'the-pack';
    else if (/^mt_route_/.test(k)) slug = 'the-route';
    else if (/^mt_rope_|^mt-rope-/.test(k)) slug = 'the-rope';
    else if (/^compass_/.test(k)) slug = 'the-compass';
    if (slug && !seen.has(slug)) { seen.add(slug); out.products.push(PRODUCTS[slug]); }
  }
  return out;
}

/**
 * One daily run. Returns counts for the log. `site` is the public origin for links.
 * Weakest-dimension follow-ups go first (they are time-bound), weekly nudges take what budget is left.
 */
export async function runLifecycle(env, { now = new Date(), site, dryRun = false } = {}) {
  const out = { budget: null, weakest: 0, weekly: 0, skipped: { consent: 0, sent: 0, budget: 0, failed: 0 } };
  if (!env.DB || !env.SESSION_SECRET) return { ...out, error: 'not configured' };
  site = (site || env.SITE_URL || 'https://metanoialabs.net').replace(/\/$/, '');
  const budget = await lifecycleBudget(env, now);
  out.budget = budget;
  let left = budget.left;

  /* 1. weakest dimension: results captured two to five days ago, marketing consent, not unsubscribed, not yet sent */
  const from = new Date(now.getTime() - WEAKEST_UNTIL_HOURS * 3600000).toISOString();
  const to = new Date(now.getTime() - WEAKEST_AFTER_HOURS * 3600000).toISOString();
  const leads = await env.DB.prepare("SELECT id, email, name, payload_json, consent_json, locale, created_at FROM leads WHERE kind = 'results' AND unsubscribed_at IS NULL AND created_at >= ? AND created_at <= ? ORDER BY created_at").bind(from, to).all();
  for (const l of leads.results || []) {
    if (!consentMarketing(l.consent_json)) { out.skipped.consent++; continue; }
    if (await alreadySent(env, 'weakest', l.id)) { out.skipped.sent++; continue; }
    if (left <= 0) { out.skipped.budget++; continue; }
    let p = {}; try { p = JSON.parse(l.payload_json || '{}'); } catch (e) {}
    const w = weakest(p.dims);
    if (!w) { out.skipped.failed++; continue; }
    const locale = l.locale === 'id' ? 'id' : 'en';
    const d = DIMS[w.key];
    const resultUrl = `${site}/career-map-assessment?result=${l.id}&sig=${await resultsSignature(env, l.id)}`;
    const unsubscribe = await unsubscribeUrl(env, site, 'lead', l.id);
    if (dryRun) { out.weakest++; left--; continue; }
    const r = await mailWeakest(env, { to: l.email, name: l.name, dim: d[locale], score: w.score, product: d.product, productUrl: site + d.path, resultUrl, total: p.total, band: p.band, unsubscribe, locale, ref: l.id });
    if (r.sent) { out.weakest++; left--; } else out.skipped.failed++;
  }

  /* 2. weekly nudge: verified members who opted in, a week after joining and at most once a week since */
  const joinedBefore = new Date(now.getTime() - WEEKLY_EVERY_DAYS * 86400000).toISOString();
  const users = await env.DB.prepare("SELECT id, email, name, locale, created_at FROM users WHERE marketing_opt_in = 1 AND unsubscribed_at IS NULL AND email_verified_at IS NOT NULL AND created_at <= ? ORDER BY created_at").bind(joinedBefore).all();
  const since = new Date(now.getTime() - (WEEKLY_EVERY_DAYS * 86400000 - 12 * 3600000)).toISOString();   // half a day of slack so the cron's drift never skips a week
  for (const u of users.results || []) {
    const recent = await env.DB.prepare("SELECT 1 AS x FROM mail_log WHERE kind = 'weekly' AND ref = ? AND status = 'sent' AND created_at > ? LIMIT 1").bind(u.id, since).first();
    if (recent) { out.skipped.sent++; continue; }
    if (left <= 0) { out.skipped.budget++; continue; }
    const locale = u.locale === 'id' ? 'id' : 'en';
    const prog = await env.DB.prepare("SELECT data_json FROM progress WHERE user_id = ? AND ns = 'browser'").bind(u.id).first();
    let doc = null; try { doc = prog ? JSON.parse(prog.data_json) : null; } catch (e) {}
    const act = activityOf(doc);
    const res = await env.DB.prepare("SELECT payload_json FROM leads WHERE kind = 'results' AND email = ? ORDER BY created_at DESC LIMIT 1").bind(u.email).first();
    let focus = null;
    if (res) { try { const w = weakest(JSON.parse(res.payload_json || '{}').dims); if (w) focus = { name: DIMS[w.key][locale], score: w.score, product: DIMS[w.key].product, url: site + DIMS[w.key].path }; } catch (e) {} }
    const unsubscribe = await unsubscribeUrl(env, site, 'user', u.id);
    if (dryRun) { out.weekly++; left--; continue; }
    const r = await mailWeekly(env, { to: u.email, name: u.name, products: act.products, lastAt: act.lastAt, focus, portalUrl: site + '/portal', assessmentUrl: site + '/career-map-assessment', unsubscribe, locale, ref: u.id });
    if (r.sent) { out.weekly++; left--; } else out.skipped.failed++;
  }
  out.left = left;
  return out;
}

/* one unsubscribe, for the Pages route */
export async function unsubscribe(env, kind, id) {
  const now = nowIso();
  if (kind === 'user') {
    const r = await env.DB.prepare('UPDATE users SET marketing_opt_in = 0, unsubscribed_at = COALESCE(unsubscribed_at, ?), updated_at = ? WHERE id = ?').bind(now, now, id).run();
    return !!(r.meta && r.meta.changes);
  }
  const r = await env.DB.prepare("UPDATE leads SET unsubscribed_at = COALESCE(unsubscribed_at, ?), updated_at = ? WHERE id = ? AND kind = 'results'").bind(now, now, id).run();
  return !!(r.meta && r.meta.changes);
}

export { sha256, newId };
