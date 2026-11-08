/**
 * Sign in with Google or LinkedIn (OpenID Connect, authorization code flow).
 *
 * Both providers are free. Each needs an app the account owner creates:
 *   Google   console.cloud.google.com → APIs & Services → Credentials → OAuth client (Web)
 *   LinkedIn linkedin.com/developers → app → product "Sign In with LinkedIn using OpenID Connect"
 * Redirect URI for both: <SITE_URL>/api/auth/oauth/<provider>/callback
 * Client ids are public and live in wrangler.toml [vars]; the client secrets are Pages secrets.
 *
 * The flow keeps everything on the SITE_URL host so the short-lived state cookie set at
 * /start is sent back to /callback. The state cookie is signed with SESSION_SECRET and
 * carries the provider, the safe "next" path and a timestamp (10 minutes).
 */
import { randomToken, b64url, hmacHex, cookie, timingSafeEqual } from './http.js';

export const PROVIDERS = {
  google: {
    label: 'Google',
    auth: 'https://accounts.google.com/o/oauth2/v2/auth',
    token: 'https://oauth2.googleapis.com/token',
    userinfo: 'https://openidconnect.googleapis.com/v1/userinfo',
    scope: 'openid email profile',
    idKey: 'GOOGLE_CLIENT_ID', secretKey: 'GOOGLE_CLIENT_SECRET',
    extra: { access_type: 'online', prompt: 'select_account' }
  },
  linkedin: {
    label: 'LinkedIn',
    auth: 'https://www.linkedin.com/oauth/v2/authorization',
    token: 'https://www.linkedin.com/oauth/v2/accessToken',
    userinfo: 'https://api.linkedin.com/v2/userinfo',
    scope: 'openid profile email',
    idKey: 'LINKEDIN_CLIENT_ID', secretKey: 'LINKEDIN_CLIENT_SECRET',
    extra: {}
  }
};
export const STATE_COOKIE = 'mt_oauth';
const STATE_MAX_AGE = 600;
const enc = new TextEncoder();

export function oauthConfigured(env) {
  const out = {};
  for (const [k, p] of Object.entries(PROVIDERS)) out[k] = !!(env[p.idKey] && env[p.secretKey] && env.SESSION_SECRET);
  return out;
}
export const redirectUri = (site, provider) => `${site}/api/auth/oauth/${provider}/callback`;

function toB64url(str) { return b64url(enc.encode(str)); }
function fromB64url(s) {
  s = String(s || '').replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  try { return atob(s); } catch (e) { return ''; }
}
async function sign(env, payload) { return (await hmacHex(env.SESSION_SECRET, 'oauth:' + payload)).slice(0, 32); }

/* GET /api/auth/oauth/:provider/start → { url, cookie } */
export async function startUrl(env, provider, next, site, secure = true) {
  const p = PROVIDERS[provider];
  const state = randomToken(16);
  const payload = toB64url(JSON.stringify({ s: state, n: next, p: provider, t: Date.now() }));
  const c = cookie(STATE_COOKIE, payload + '.' + (await sign(env, payload)), { maxAge: STATE_MAX_AGE, path: '/api/auth/oauth', secure });
  const q = new URLSearchParams({ client_id: env[p.idKey], redirect_uri: redirectUri(site, provider), response_type: 'code', scope: p.scope, state, ...p.extra });
  return { url: `${p.auth}?${q}`, cookie: c };
}

/* reads and verifies the state cookie; returns { next } or throws Error('state') */
export async function readState(env, request, provider, state) {
  const raw = (request.headers.get('cookie') || '').split(';').map(s => s.trim()).find(s => s.startsWith(STATE_COOKIE + '='));
  if (!raw) throw new Error('state');
  const [payload, sig] = decodeURIComponent(raw.slice(STATE_COOKIE.length + 1)).split('.');
  if (!payload || !sig) throw new Error('state');
  const want = await sign(env, payload);
  if (!timingSafeEqual(enc.encode(sig), enc.encode(want))) throw new Error('state');
  let o = null;
  try { o = JSON.parse(fromB64url(payload)); } catch (e) { throw new Error('state'); }
  if (!o || o.p !== provider || !o.s || typeof state !== 'string' || !timingSafeEqual(enc.encode(o.s), enc.encode(state))) throw new Error('state');
  if (!o.t || Date.now() - o.t > STATE_MAX_AGE * 1000) throw new Error('expired');
  return { next: o.n || '/portal' };
}
export const clearStateCookie = secure => cookie(STATE_COOKIE, '', { maxAge: 0, path: '/api/auth/oauth', secure });

/* exchanges the code and fetches the profile: { subject, email, email_verified, name } or throws Error(code) */
export async function fetchProfile(env, provider, code, site) {
  const p = PROVIDERS[provider];
  const body = new URLSearchParams({ grant_type: 'authorization_code', code, client_id: env[p.idKey], client_secret: env[p.secretKey], redirect_uri: redirectUri(site, provider) });
  const tr = await fetch(p.token, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded', accept: 'application/json' }, body });
  const tj = await tr.json().catch(() => null);
  if (!tr.ok || !tj || !tj.access_token) throw new Error('token');
  const ur = await fetch(p.userinfo, { headers: { authorization: 'Bearer ' + tj.access_token, accept: 'application/json' } });
  const u = await ur.json().catch(() => null);
  if (!ur.ok || !u || !u.sub || !u.email) throw new Error('profile');
  const name = u.name || [u.given_name, u.family_name].filter(Boolean).join(' ') || '';
  return { subject: String(u.sub), email: String(u.email), email_verified: u.email_verified === true || u.email_verified === 'true', name: String(name).slice(0, 80) };
}
