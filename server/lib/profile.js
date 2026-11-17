/**
 * The shareable readiness profile (docs/21 N-06, docs/14 "Readiness profile").
 *
 * A member can switch on one public page, /p/<slug>, that shows what they have done on the platform:
 * their name, their Career Map band, their certificates and the lessons they have completed. It is off
 * by default, every item is the member's choice, and the address can be replaced or switched off.
 *
 * Everything on the page is read from the account at the moment it is asked for, so it cannot be edited
 * into something the member did not do. Nothing else about the member is exposed: no address, no scores
 * beyond the band, no application data.
 */
import { hmacHex, randomToken, nowIso } from './http.js';
import { CONTENT_PRODUCTS, loadManifest } from './content.js';

export const SLUG = /^[A-Za-z0-9_-]{12,20}$/;
const newSlug = () => randomToken(10);                       // 14 characters, about 80 bits

/* the Career Map bands, as the assessment page names them */
export function bandOf(total) {
  if (typeof total !== 'number' || !isFinite(total)) return null;
  if (total >= 90) return { label: 'Summit Ready', level: 5 };
  if (total >= 75) return { label: 'High Camp', level: 4 };
  if (total >= 60) return { label: 'Mid-Mountain', level: 3 };
  if (total >= 40) return { label: 'First Ascent', level: 2 };
  return { label: 'Base Camp', level: 1 };
}

/* ── what the account holds that could be shown ── */
async function latestBand(env, userId) {
  if (!env.SUBJECT_KEY) return null;
  try {
    const subject = await hmacHex(env.SUBJECT_KEY, 'u:' + userId);
    const r = await env.DB.prepare("SELECT scores_json, ts FROM assessments WHERE subject_id = ? AND kind = 'career-map' ORDER BY ts DESC LIMIT 1").bind(subject).first();
    if (!r) return null;
    const b = bandOf(JSON.parse(r.scores_json).total);
    return b ? { ...b, date: String(r.ts).slice(0, 10) } : null;
  } catch (e) { return null; }
}
async function certificates(env, userId) {
  try {
    const r = await env.DB.prepare('SELECT id, product, lessons, issued_at FROM certificates WHERE user_id = ? AND revoked_at IS NULL ORDER BY issued_at').bind(userId).all();
    return (r.results || []).map(c => ({ id: c.id, product: c.product, product_name: CONTENT_PRODUCTS[c.product] || c.product, lessons: c.lessons, issued_at: String(c.issued_at).slice(0, 10) }));
  } catch (e) { return []; }
}
/* core lessons completed per product; the database hands over the four small lesson records only */
async function learning(env, userId, manifests) {
  const slugs = Object.keys(CONTENT_PRODUCTS);
  try {
    const cols = slugs.map((s, i) => `CASE WHEN json_valid(data_json) THEN json_extract(data_json, '$.keys."mt-lms:${s}"') END AS p${i}`).join(', ');
    const r = await env.DB.prepare(`SELECT ${cols} FROM progress WHERE user_id = ? AND ns = 'browser'`).bind(userId).first();
    if (!r) return [];
    const out = [];
    slugs.forEach((s, i) => {
      const mf = manifests[s]; if (!mf) return;
      let doc = {}; try { doc = typeof r['p' + i] === 'string' ? JSON.parse(r['p' + i]) : (r['p' + i] || {}); } catch (e) { doc = {}; }
      const done = mf.lessons.filter(n => doc && doc[n]).length;
      if (done) out.push({ product: s, name: CONTENT_PRODUCTS[s], done, total: mf.lessons.length });
    });
    return out;
  } catch (e) { return []; }
}
export async function manifestsFor(request, env) {
  const out = {};
  for (const s of Object.keys(CONTENT_PRODUCTS)) out[s] = await loadManifest(request, env, s);
  return out;
}

const row = r => ({ enabled: !!r.enabled, slug: r.slug, show_band: !!r.show_band, show_certificates: !!r.show_certificates, show_progress: !!r.show_progress, hidden_by_admin: !!r.hidden_by_admin, updated_at: r.updated_at });
export const profileUrl = (site, slug) => `${site}/p/${slug}`;

/* the member's own view: their choices, and what each choice would show today */
export async function memberProfile(env, user, manifests, site) {
  const r = await env.DB.prepare('SELECT * FROM profiles WHERE user_id = ?').bind(user.id).first();
  const p = r ? row(r) : { enabled: false, slug: null, show_band: true, show_certificates: true, show_progress: true, hidden_by_admin: false, updated_at: null };
  return { profile: { ...p, url: p.slug ? profileUrl(site, p.slug) : null },
    available: { name: user.name || '', band: await latestBand(env, user.id), certificates: (await certificates(env, user.id)).length, learning: await learning(env, user.id, manifests) } };
}
export async function saveProfile(env, user, input) {
  const b = input || {}, now = nowIso();
  const cur = await env.DB.prepare('SELECT * FROM profiles WHERE user_id = ?').bind(user.id).first();
  const pick = (k, def) => (typeof b[k] === 'boolean' ? (b[k] ? 1 : 0) : def);
  if (!cur) {
    await env.DB.prepare('INSERT INTO profiles (user_id, slug, enabled, show_band, show_certificates, show_progress, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
      .bind(user.id, newSlug(), pick('enabled', 0), pick('show_band', 1), pick('show_certificates', 1), pick('show_progress', 1), now, now).run();
  } else {
    await env.DB.prepare('UPDATE profiles SET enabled = ?, show_band = ?, show_certificates = ?, show_progress = ?, updated_at = ? WHERE user_id = ?')
      .bind(pick('enabled', cur.enabled), pick('show_band', cur.show_band), pick('show_certificates', cur.show_certificates), pick('show_progress', cur.show_progress), now, user.id).run();
  }
}
/* a new address: the old one stops working at once */
export async function resetSlug(env, user) {
  const now = nowIso();
  await env.DB.prepare('INSERT INTO profiles (user_id, slug, enabled, created_at, updated_at) VALUES (?, ?, 0, ?, ?) ON CONFLICT(user_id) DO UPDATE SET slug = excluded.slug, updated_at = excluded.updated_at').bind(user.id, newSlug(), now, now).run();
}

/* what anyone with the address sees; null when the page is off, hidden, or the account is leaving */
export async function publicProfile(env, slug, manifests) {
  if (!SLUG.test(String(slug || ''))) return null;
  const r = await env.DB.prepare('SELECT p.*, u.name, u.created_at AS joined, u.deletion_requested_at FROM profiles p JOIN users u ON u.id = p.user_id WHERE p.slug = ?').bind(slug).first();
  if (!r || !r.enabled || r.hidden_by_admin || r.deletion_requested_at) return null;
  const out = { name: String(r.name || '').trim().slice(0, 80) || 'Metanoia Labs member', since: String(r.joined || '').slice(0, 7), band: null, certificates: [], learning: [], updated_at: r.updated_at };
  if (r.show_band) out.band = await latestBand(env, r.user_id);
  if (r.show_certificates) out.certificates = await certificates(env, r.user_id);
  if (r.show_progress) out.learning = await learning(env, r.user_id, manifests);
  return out;
}

/* ── for the team: which pages are public, and taking one down ── */
export async function listProfiles(env, limit = 100) {
  const r = await env.DB.prepare('SELECT p.slug, p.enabled, p.hidden_by_admin, p.updated_at, u.name FROM profiles p JOIN users u ON u.id = p.user_id WHERE p.enabled = 1 OR p.hidden_by_admin = 1 ORDER BY p.updated_at DESC LIMIT ?').bind(limit).all();
  return (r.results || []).map(x => ({ slug: x.slug, name: x.name || '', enabled: !!x.enabled, hidden: !!x.hidden_by_admin, updated_at: x.updated_at }));
}
export async function hideProfile(env, slug, hidden) {
  const r = await env.DB.prepare('UPDATE profiles SET hidden_by_admin = ?, updated_at = ? WHERE slug = ?').bind(hidden ? 1 : 0, nowIso(), slug).run();
  return !!(r.meta && r.meta.changes);
}
