/**
 * Session handling shared by the API routes.
 * Cookie `mt_session` carries a random 256-bit token; only its SHA-256 is stored.
 */
import { parseCookies, sha256, randomToken, cookie, nowIso, timingSafeEqual, newId } from './http.js';
import { grantFree } from './entitlements.js';

export const COOKIE = 'mt_session';
export const SESSION_DAYS = 30;
const CONSENT_VERSIONS = { terms_version: '1.0-draft', privacy_version: '1.0-draft' };

/* "reza.f" → "Reza F"; the name a passwordless account starts with until the member edits it */
export function nameFromEmail(email) {
  const local = String(email || '').split('@')[0].replace(/[._+-]+/g, ' ').trim();
  if (!local) return 'Climber';
  return local.split(' ').filter(Boolean).map(w => w[0].toUpperCase() + w.slice(1)).join(' ').slice(0, 80);
}

/* Magic link and OAuth sign-ins: the account for an address, created on first use.
   `verified` marks the address confirmed (the provider or the link proved it); `admin`
   grants or keeps the admin role; `founding` flags accounts created before the beta end. */
export async function findOrCreateByEmail(env, { email, name, locale = 'en', method = 'magic-link', verified = true, admin = false, founding = false }) {
  const now = nowIso();
  let u = await env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(email).first();
  if (!u) {
    const id = newId();
    const consent = { ...CONSENT_VERSIONS, marketing: false, consented_at: now, method };
    await env.DB.prepare('INSERT INTO users (id, email, name, pw_hash, role, audience, locale, email_verified_at, consent_json, marketing_opt_in, founding, created_at, updated_at, last_login_at) VALUES (?, ?, ?, ?, ?, NULL, ?, ?, ?, 0, ?, ?, ?, ?)')
      .bind(id, email, (name && String(name).slice(0, 80)) || nameFromEmail(email), '', admin ? 'admin' : 'member', locale, verified ? now : null, JSON.stringify(consent), founding ? 1 : 0, now, now, now).run();
    await grantFree(env, id);
    u = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(id).first();
    return { user: u, created: true };
  }
  /* a deletion request blocks sign-in until the cancel link is used or the purge has run */
  if (u.deletion_requested_at) return { user: null, created: false, pending: true };
  const sets = ['last_login_at = ?'], args = [now];
  if (verified && !u.email_verified_at) { sets.push('email_verified_at = ?'); args.push(now); }
  if (admin && u.role !== 'admin') { sets.push('role = ?'); args.push('admin'); }
  args.push(u.id);
  await env.DB.prepare(`UPDATE users SET ${sets.join(', ')} WHERE id = ?`).bind(...args).run();
  u = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(u.id).first();
  return { user: u, created: false };
}

/* ── sessions list and revoke (settings page) ── */
export const sessionId = hash => String(hash).slice(0, 12);
export async function currentSessionHash(request) {
  const t = parseCookies(request)[COOKIE];
  return t && t.length >= 20 ? sha256(t) : null;
}
export function deviceOf(ua) {
  ua = String(ua || '');
  const os = /iPhone|iPad/.test(ua) ? 'iOS' : /Android/.test(ua) ? 'Android' : /Windows/.test(ua) ? 'Windows' : /Mac OS X/.test(ua) ? 'macOS' : /Linux/.test(ua) ? 'Linux' : 'Unknown device';
  const br = /Edg\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera' : /Firefox\//.test(ua) ? 'Firefox' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : 'Browser';
  return `${br} on ${os}`;
}
export async function listSessions(request, env, userId) {
  const cur = await currentSessionHash(request);
  const r = await env.DB.prepare('SELECT token_hash, created_at, expires_at, user_agent FROM sessions WHERE user_id = ? AND expires_at > ? ORDER BY created_at DESC').bind(userId, nowIso()).all();
  return (r.results || []).map(s => ({ id: sessionId(s.token_hash), created_at: s.created_at, expires_at: s.expires_at, device: deviceOf(s.user_agent), current: s.token_hash === cur }));
}
export async function revokeSession(env, userId, id) {
  if (!/^[0-9a-f]{12}$/.test(String(id || ''))) return false;
  const r = await env.DB.prepare('DELETE FROM sessions WHERE user_id = ? AND substr(token_hash, 1, 12) = ?').bind(userId, id).run();
  return !!(r && r.meta && r.meta.changes);
}

export function publicUser(u) {
  if (!u) return null;
  return { id: u.id, email: u.email, name: u.name, role: u.role, audience: u.audience || null, locale: u.locale || 'en',
    email_verified: !!u.email_verified_at, marketing_opt_in: !!u.marketing_opt_in, founding: !!u.founding, has_password: !!u.pw_hash, created_at: u.created_at };
}

export async function getUser(request, env) {
  if (!env.DB) return null;
  const token = parseCookies(request)[COOKIE];
  if (!token || token.length < 20) return null;
  const h = await sha256(token);
  const row = await env.DB.prepare(
    'SELECT u.* FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token_hash = ? AND s.expires_at > ? AND u.deletion_requested_at IS NULL'
  ).bind(h, nowIso()).first();
  return row || null;
}

export async function createSession(request, env, userId) {
  const token = randomToken(32);
  const h = await sha256(token);
  const now = new Date();
  const exp = new Date(now.getTime() + SESSION_DAYS * 86400 * 1000);
  const ua = (request.headers.get('user-agent') || '').slice(0, 200);
  const ip = request.headers.get('cf-connecting-ip') || '';
  const ipHash = ip ? (await sha256(ip + (env.SESSION_SECRET || ''))).slice(0, 32) : null;
  await env.DB.prepare('INSERT INTO sessions (token_hash, user_id, created_at, expires_at, user_agent, ip_hash) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(h, userId, now.toISOString(), exp.toISOString(), ua, ipHash).run();
  const secure = new URL(request.url).protocol === 'https:';
  return cookie(COOKIE, token, { maxAge: SESSION_DAYS * 86400, secure });
}

export async function destroySession(request, env) {
  const token = parseCookies(request)[COOKIE];
  if (token && env.DB) {
    const h = await sha256(token);
    await env.DB.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(h).run();
  }
  const secure = new URL(request.url).protocol === 'https:';
  return cookie(COOKIE, '', { maxAge: 0, secure });
}

/* Admin routes: `Authorization: Bearer <ADMIN_TOKEN>`; constant-time compare. */
/* Who is acting as admin: the ADMIN_TOKEN bearer ("token") or a signed-in
   account with the admin role (its e-mail). Null when neither. */
export async function adminActor(request, env) {
  if (isAdmin(request, env)) return 'token';
  const u = await getUser(request, env);
  return u && u.role === 'admin' ? u.email : null;
}

export function isAdmin(request, env) {
  if (!env.ADMIN_TOKEN) return false;
  const h = request.headers.get('authorization') || '';
  const m = h.match(/^Bearer\s+(.+)$/i);
  if (!m) return false;
  const enc = new TextEncoder();
  return timingSafeEqual(enc.encode(m[1].trim()), enc.encode(env.ADMIN_TOKEN));
}

/* one-time links (e-mail verification, reset, magic sign-in, deletion confirm and cancel) */
export async function issueToken(env, kind, { userId = null, email = null, hours }) {
  const raw = randomToken(32);
  const h = await sha256(raw);
  const exp = new Date(Date.now() + hours * 3600 * 1000).toISOString();
  await env.DB.prepare('INSERT INTO tokens (token_hash, kind, user_id, email, created_at, expires_at) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(h, kind, userId, email, nowIso(), exp).run();
  return raw;
}

export async function consumeToken(env, kind, raw) {
  if (!raw || raw.length < 20) return null;
  const h = await sha256(raw);
  const row = await env.DB.prepare('SELECT * FROM tokens WHERE token_hash = ? AND kind = ? AND used_at IS NULL AND expires_at > ?')
    .bind(h, kind, nowIso()).first();
  if (!row) return null;
  await env.DB.prepare('UPDATE tokens SET used_at = ? WHERE token_hash = ?').bind(nowIso(), h).run();
  return row;
}
