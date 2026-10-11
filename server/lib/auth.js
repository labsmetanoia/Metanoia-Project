/**
 * Session handling shared by the API routes.
 * Cookie `mt_session` carries a random 256-bit token; only its SHA-256 is stored.
 */
import { parseCookies, sha256, randomToken, cookie, nowIso, timingSafeEqual } from './http.js';

export const COOKIE = 'mt_session';
export const SESSION_DAYS = 30;

export function publicUser(u) {
  if (!u) return null;
  return { id: u.id, email: u.email, name: u.name, role: u.role, audience: u.audience || null, locale: u.locale || 'en',
    email_verified: !!u.email_verified_at, marketing_opt_in: !!u.marketing_opt_in, created_at: u.created_at };
}

export async function getUser(request, env) {
  if (!env.DB) return null;
  const token = parseCookies(request)[COOKIE];
  if (!token || token.length < 20) return null;
  const h = await sha256(token);
  const row = await env.DB.prepare(
    'SELECT u.* FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token_hash = ? AND s.expires_at > ?'
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
export function isAdmin(request, env) {
  if (!env.ADMIN_TOKEN) return false;
  const h = request.headers.get('authorization') || '';
  const m = h.match(/^Bearer\s+(.+)$/i);
  if (!m) return false;
  const enc = new TextEncoder();
  return timingSafeEqual(enc.encode(m[1].trim()), enc.encode(env.ADMIN_TOKEN));
}
