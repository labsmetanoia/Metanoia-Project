/**
 * Entitlements (Tier 1 stage 4): what a member may use, resolved from the
 * `entitlements` rows plus the access mode.
 *
 *   ACCESS_MODE = "beta"          every signed-in member may use every product. This is the
 *                                 beta promise and stays in force past BETA_ENDS_AT until the
 *                                 variable is flipped, so nothing changes on that date by itself.
 *   ACCESS_MODE = "entitlements"  a product opens only with an active row for it (or for "all"):
 *                                 admin grants, enterprise seats, later paid passes.
 *
 * Rows are written in both modes (the free tier at registration, every grant), so flipping the
 * mode later changes nothing retroactively. `GET /api/auth/me` returns the resolved access and
 * js/mt-auth.js mirrors it for the product gates.
 */
import { newId, nowIso } from './http.js';

export const PRODUCTS = ['the-map', 'the-pack', 'the-rope', 'the-route', 'the-compass'];
export const PLANS = ['free', 'beta', 'founding', 'member', 'enterprise'];
const RANK = { free: 0, beta: 1, founding: 2, member: 3, enterprise: 4 };

export function accessMode(env) { return env && env.ACCESS_MODE === 'entitlements' ? 'entitlements' : 'beta'; }
export function betaEndsAt(env) { const d = (env && env.BETA_ENDS_AT) || ''; return /^\d{4}-\d{2}-\d{2}$/.test(d) ? d : null; }
export function betaActive(env, now = Date.now()) { const d = betaEndsAt(env); return !!d && now < Date.parse(d + 'T23:59:59Z'); }

export async function listEntitlements(env, userId, { includeRevoked = false } = {}) {
  const r = includeRevoked
    ? await env.DB.prepare('SELECT * FROM entitlements WHERE user_id = ? ORDER BY created_at').bind(userId).all()
    : await env.DB.prepare("SELECT * FROM entitlements WHERE user_id = ? AND status = 'active' ORDER BY created_at").bind(userId).all();
  return r.results || [];
}

/* pure: rows + mode → { mode, beta_ends_at, beta_active, founding, plan, all, products: { slug: { plan, ends_at, source } }, grants } */
export function resolveAccess(env, user, rows, now = Date.now()) {
  const mode = accessMode(env), beta = betaEndsAt(env), active = betaActive(env, now);
  const products = {}, grants = [];
  let plan = 'free';
  for (const r of rows || []) {
    if (!r || r.status !== 'active' || !RANK.hasOwnProperty(r.plan)) continue;
    if (r.ends_at && Date.parse(r.ends_at) <= now) continue;
    if (r.starts_at && Date.parse(r.starts_at) > now) continue;
    grants.push({ id: r.id, product: r.product, plan: r.plan, source: r.source, starts_at: r.starts_at, ends_at: r.ends_at || null, note: r.note || null });
    if (RANK[r.plan] > RANK[plan]) plan = r.plan;
    if (r.plan === 'free') continue;
    const targets = r.product === 'all' ? PRODUCTS : PRODUCTS.includes(r.product) ? [r.product] : [];
    for (const p of targets) {
      const cur = products[p];
      const longer = !r.ends_at || (cur && cur.ends_at && r.ends_at > cur.ends_at);
      if (!cur || RANK[r.plan] > RANK[cur.plan] || (RANK[r.plan] === RANK[cur.plan] && longer)) products[p] = { plan: r.plan, ends_at: r.ends_at || null, source: r.source };
    }
  }
  if (mode === 'beta') {
    for (const p of PRODUCTS) if (!products[p]) products[p] = { plan: 'beta', ends_at: active ? beta + 'T23:59:59Z' : null, source: 'beta' };
    if (RANK.beta > RANK[plan]) plan = 'beta';
  }
  return { mode, beta_ends_at: beta, beta_active: active, founding: !!(user && user.founding), plan, all: PRODUCTS.every(p => products[p]), products, grants };
}

export async function accessFor(env, user) {
  let rows = [];
  try { rows = await listEntitlements(env, user.id); } catch (e) { /* before migration 0005 */ }
  return resolveAccess(env, user, rows);
}

const validDate = s => typeof s === 'string' && !Number.isNaN(Date.parse(s));

export async function grantEntitlement(env, { userId, product = 'all', plan, endsAt = null, startsAt = null, source, note = null, grantedBy = null }) {
  if (!userId) throw new Error('user required');
  if (product !== 'all' && !PRODUCTS.includes(product)) throw new Error('unknown product');
  if (!PLANS.includes(plan)) throw new Error('unknown plan');
  if (endsAt !== null && !validDate(endsAt)) throw new Error('bad end date');
  if (startsAt !== null && !validDate(startsAt)) throw new Error('bad start date');
  const now = nowIso();
  const row = { id: newId(), user_id: userId, product, plan, source: String(source || 'admin').slice(0, 80), starts_at: startsAt ? new Date(startsAt).toISOString() : now,
    ends_at: endsAt ? new Date(endsAt).toISOString() : null, status: 'active', note: note ? String(note).slice(0, 500) : null, granted_by: grantedBy ? String(grantedBy).slice(0, 120) : null, created_at: now, updated_at: now };
  await env.DB.prepare('INSERT INTO entitlements (id, user_id, product, plan, source, starts_at, ends_at, status, note, granted_by, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(row.id, row.user_id, row.product, row.plan, row.source, row.starts_at, row.ends_at, row.status, row.note, row.granted_by, row.created_at, row.updated_at).run();
  return row;
}

/* the free tier, once per account, at registration; never throws (the table arrives with migration 0005) */
export async function grantFree(env, userId) {
  try {
    const has = await env.DB.prepare("SELECT 1 AS x FROM entitlements WHERE user_id = ? AND plan = 'free' LIMIT 1").bind(userId).first();
    if (has) return null;
    return await grantEntitlement(env, { userId, product: 'all', plan: 'free', source: 'registration' });
  } catch (e) {
    console.error('grantFree', String(e && e.message || e).slice(0, 200));
    return null;
  }
}

export async function revokeEntitlement(env, id) {
  const r = await env.DB.prepare("UPDATE entitlements SET status = 'revoked', updated_at = ? WHERE id = ? AND status = 'active'").bind(nowIso(), id).run();
  return !!(r.meta && r.meta.changes);
}

/* founding members (accounts created before the beta end): one grant each, skipping anyone who already holds the same plan for the same product */
export async function grantFounding(env, { product = 'all', plan = 'founding', endsAt = null, note = null, grantedBy = null }) {
  if (product !== 'all' && !PRODUCTS.includes(product)) throw new Error('unknown product');
  if (!PLANS.includes(plan)) throw new Error('unknown plan');
  const now = nowIso();
  const rows = await env.DB.prepare(
    "SELECT u.id FROM users u WHERE u.founding = 1 AND NOT EXISTS (SELECT 1 FROM entitlements e WHERE e.user_id = u.id AND e.status = 'active' AND e.plan = ? AND e.product = ? AND (e.ends_at IS NULL OR e.ends_at > ?))"
  ).bind(plan, product, now).all();
  let n = 0;
  for (const u of rows.results || []) {
    await grantEntitlement(env, { userId: u.id, product, plan, endsAt, source: 'founding', note, grantedBy });
    n++;
  }
  return n;
}
