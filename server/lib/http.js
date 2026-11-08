/**
 * Shared helpers for the Pages Functions under functions/api.
 * Plain ES modules; no dependencies; WebCrypto only.
 */

export const nowIso = () => new Date().toISOString();

export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff', ...headers }
  });
}

export const fail = (status, error, extra = {}) => json({ ok: false, error, ...extra }, status);

export async function readJson(request, limit = 64 * 1024) {
  const ct = request.headers.get('content-type') || '';
  if (!/application\/json/i.test(ct)) return null;
  const text = await request.text();
  if (text.length > limit) return null;
  try { return JSON.parse(text); } catch (e) { return null; }
}

/* Same-origin guard for state-changing routes: the Origin header, when
   present, must match the request URL's origin. Browsers always send it on
   cross-site POSTs, so a mismatch is a CSRF attempt or a misconfiguration. */
export function sameOrigin(request) {
  const origin = request.headers.get('origin');
  if (!origin) return true;
  try { return new URL(request.url).origin === origin; } catch (e) { return false; }
}

export function parseCookies(request) {
  const out = {};
  const raw = request.headers.get('cookie') || '';
  raw.split(';').forEach(p => {
    const i = p.indexOf('=');
    if (i > 0) out[p.slice(0, i).trim()] = decodeURIComponent(p.slice(i + 1).trim());
  });
  return out;
}

export function cookie(name, value, { maxAge, path = '/', secure = true } = {}) {
  let s = `${name}=${encodeURIComponent(value)}; Path=${path}; HttpOnly; SameSite=Lax`;
  if (secure) s += '; Secure';
  if (typeof maxAge === 'number') s += `; Max-Age=${maxAge}`;
  return s;
}

export function clientIp(request) {
  return request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || '0.0.0.0';
}

export const isEmail = s => typeof s === 'string' && s.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
export const normEmail = s => String(s || '').trim().toLowerCase();
export const clip = (s, n) => (typeof s === 'string' ? s.trim().slice(0, n) : '');
export const localeOf = s => (s === 'id' ? 'id' : 'en');
export const AUDIENCES = ['student', 'fresh-graduate', 'early-professional', 'mature-professional'];

/* ── crypto ── */
const enc = new TextEncoder();

export function randomToken(bytes = 32) {
  const a = new Uint8Array(bytes); crypto.getRandomValues(a); return b64url(a);
}
export function b64url(bytes) {
  let s = ''; for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
export function fromB64url(s) {
  s = s.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '=';
  const bin = atob(s); const a = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) a[i] = bin.charCodeAt(i);
  return a;
}
export async function sha256(text) {
  const d = await crypto.subtle.digest('SHA-256', enc.encode(text));
  return Array.from(new Uint8Array(d)).map(b => b.toString(16).padStart(2, '0')).join('');
}
export const newId = () => crypto.randomUUID().replace(/-/g, '');

/* Cloudflare Workers cap WebCrypto PBKDF2 at 100,000 iterations (deriveBits
   throws above it), so this is the ceiling, not a choice. Stored hashes carry
   their own count, so verifyPassword keeps working if it is raised later. */
const PBKDF2_ITER = 100000;
export async function hashPassword(password, iterations = PBKDF2_ITER) {
  const salt = new Uint8Array(16); crypto.getRandomValues(salt);
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations }, key, 256);
  return `pbkdf2-sha256$${iterations}$${b64url(salt)}$${b64url(new Uint8Array(bits))}`;
}
export async function verifyPassword(password, stored) {
  const parts = String(stored || '').split('$');
  if (parts.length !== 4 || parts[0] !== 'pbkdf2-sha256') return false;
  const iterations = parseInt(parts[1], 10), salt = fromB64url(parts[2]), want = fromB64url(parts[3]);
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = new Uint8Array(await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations }, key, 256));
  return timingSafeEqual(bits, want);
}
export function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let r = 0; for (let i = 0; i < a.length; i++) r |= a[i] ^ b[i];
  return r === 0;
}
export async function hmacHex(secret, text) {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(text));
  return Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
}

/* ── fixed-window rate limiter on D1 ── */
export async function rateLimit(env, key, limit, windowSec) {
  if (!env.DB) return true;
  const now = Math.floor(Date.now() / 1000);
  const row = await env.DB.prepare('SELECT count, window_start FROM rate_limits WHERE key = ?').bind(key).first();
  if (!row || now - row.window_start >= windowSec) {
    await env.DB.prepare('INSERT OR REPLACE INTO rate_limits (key, count, window_start) VALUES (?, 1, ?)').bind(key, now).run();
    return true;
  }
  if (row.count >= limit) return false;
  await env.DB.prepare('UPDATE rate_limits SET count = count + 1 WHERE key = ?').bind(key).run();
  return true;
}

export const configured = env => ({
  db: !!env.DB,
  session: !!env.SESSION_SECRET,
  mail: !!env.RESEND_API_KEY,
  admin: !!env.ADMIN_TOKEN,
  subject: !!env.SUBJECT_KEY
});

/* ── redirects and beta ──
   safeNext: a same-site path for "return here after sign-in"; anything else becomes the fallback. */
export function safeNext(s, fallback = '/portal') {
  s = String(s || '');
  if (!s || s.length > 300 || s[0] !== '/' || s.startsWith('//') || s.startsWith('/\\') || s.includes('..') || /[\s<>"']/.test(s)) return fallback;
  return s;
}
/* accounts created before BETA_ENDS_AT (wrangler.toml) are founding members */
export function isFounding(env) {
  const d = env.BETA_ENDS_AT || '';
  return /^\d{4}-\d{2}-\d{2}$/.test(d) && Date.now() < Date.parse(d + 'T23:59:59Z');
}

/* ── Turnstile ──
   Verifies the token the page obtained from Cloudflare Turnstile (js/mt-turnstile.js).
   Without TURNSTILE_SECRET_KEY the check is skipped and reported as such, so the API
   keeps working on a host where the widget is not configured. */
export async function verifyTurnstile(env, token, ip) {
  if (!env.TURNSTILE_SECRET_KEY) return { ok: true, skipped: true };
  if (typeof token !== 'string' || token.length < 20 || token.length > 2048) return { ok: false, reason: 'missing' };
  try {
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: token, ...(ip && ip !== 'unknown' ? { remoteip: ip } : {}) })
    });
    const j = await r.json().catch(() => null);
    if (j && j.success) return { ok: true };
    return { ok: false, reason: (j && j['error-codes'] || ['unknown']).join(',') };
  } catch (e) {
    return { ok: false, reason: 'unreachable' };
  }
}

/* ── accounts switch ──
   'open'   AUTH_ENABLED=true (wrangler.toml): anyone can register and sign in.
   'invite' AUTH_ENABLED is not true but the ADMIN_EMAILS secret (dashboard,
            comma-separated) is set: only those addresses can register, they get
            the admin role, and existing users can still sign in. The public
            pages keep showing the guest preview.
   'closed' neither: /api/auth/* answers 404 and the site shows the waitlist. */
export function adminEmails(env) {
  return String(env.ADMIN_EMAILS || '').split(/[,\s;]+/).map(normEmail).filter(isEmail);
}
export function isAdminEmail(env, email) {
  return adminEmails(env).includes(normEmail(email));
}
export function accountsMode(env) {
  if (env.AUTH_ENABLED === 'true') return 'open';
  if (adminEmails(env).length) return 'invite';
  return 'closed';
}
