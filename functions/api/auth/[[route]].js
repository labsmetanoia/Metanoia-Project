/**
 * Accounts. All state lives in D1; passwords are PBKDF2-SHA-256 hashes; the
 * session is an HttpOnly cookie. Nothing secret is ever returned to the page.
 *
 *   POST /api/auth/register        { name, email, password, audience?, locale?, marketing? }
 *   POST /api/auth/login           { email, password }
 *   POST /api/auth/logout
 *   GET  /api/auth/me
 *   POST /api/auth/request-reset   { email }            (always 200)
 *   POST /api/auth/reset           { token, password }
 *   GET  /api/auth/verify?token=   → 302 /login?verified=1
 *   POST /api/auth/resend-verify
 *   POST /api/auth/magic/request   { email, next?, locale?, turnstile? }   one-time sign-in link by e-mail (always 200)
 *   POST /api/auth/magic/consume   { token }                               signs in, creating the account on first use
 *   GET  /api/auth/sessions        signed-in devices;  DELETE /api/auth/sessions/:id  revokes one
 *   GET  /api/auth/oauth/:provider/start?next=   → 302 to Google / LinkedIn
 *   GET  /api/auth/oauth/:provider/callback      → 302 to next (session cookie set) or /login?oauth=<reason>
 */
import { json, fail, readJson, sameOrigin, rateLimit, clientIp, isEmail, normEmail, clip, localeOf, AUDIENCES,
  hashPassword, verifyPassword, randomToken, sha256, newId, nowIso, configured, accountsMode, isAdminEmail, verifyTurnstile,
  safeNext, isFounding } from '../../../server/lib/http.js';
import { getUser, createSession, destroySession, publicUser, findOrCreateByEmail, listSessions, revokeSession } from '../../../server/lib/auth.js';
import { mailVerify, mailReset, mailMagic } from '../../../server/lib/mail.js';
import { PROVIDERS, oauthConfigured, startUrl, readState, clearStateCookie, fetchProfile } from '../../../server/lib/oauth.js';

const MAGIC_MINUTES = 15;

const CONSENT_VERSIONS = { terms_version: '1.0-draft', privacy_version: '1.0-draft' };
const PW_MIN = 8, PW_MAX = 200;

function ready(env) {
  const c = configured(env);
  return c.db && c.session;
}

async function issueToken(env, kind, { userId = null, email = null, hours }) {
  const raw = randomToken(32);
  const h = await sha256(raw);
  const exp = new Date(Date.now() + hours * 3600 * 1000).toISOString();
  await env.DB.prepare('INSERT INTO tokens (token_hash, kind, user_id, email, created_at, expires_at) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(h, kind, userId, email, nowIso(), exp).run();
  return raw;
}

async function consumeToken(env, kind, raw) {
  if (!raw || raw.length < 20) return null;
  const h = await sha256(raw);
  const row = await env.DB.prepare('SELECT * FROM tokens WHERE token_hash = ? AND kind = ? AND used_at IS NULL AND expires_at > ?')
    .bind(h, kind, nowIso()).first();
  if (!row) return null;
  await env.DB.prepare('UPDATE tokens SET used_at = ? WHERE token_hash = ?').bind(nowIso(), h).run();
  return row;
}

export async function onRequestGet({ request, env, params }) {
  const mode = accountsMode(env);
  if (mode === 'closed') return fail(404, 'accounts not open');   /* Tier 0: waitlist only; AUTH_ENABLED=true or ADMIN_EMAILS opens this (http.js accountsMode) */
  const route = (params.route || []).join('/');
  if (!ready(env)) return fail(503, 'accounts not configured');
  if (route === 'me') {
    const u = await getUser(request, env);
    if (!u) return fail(401, 'not signed in');
    return json({ ok: true, user: publicUser(u) });
  }
  if (route === 'sessions') {
    const u = await getUser(request, env);
    if (!u) return fail(401, 'not signed in');
    return json({ ok: true, sessions: await listSessions(request, env, u.id) });
  }
  if (route.startsWith('oauth/')) {
    const [, provider, action] = route.split('/');
    if (!PROVIDERS[provider] || !['start', 'callback'].includes(action)) return fail(404, 'unknown route');
    const here = new URL(request.url);
    const site = env.SITE_URL || here.origin;
    const secure = here.protocol === 'https:';
    /* the state cookie is set on the SITE_URL host, so the whole flow runs there (www → apex) */
    if (here.origin !== new URL(site).origin) return Response.redirect(site + here.pathname + here.search, 302);
    const back = reason => Response.redirect(`${site}/login?oauth=${reason}`, 302);
    if (!oauthConfigured(env)[provider]) return back('unavailable');
    if (action === 'start') {
      const next = safeNext(here.searchParams.get('next'), '/portal');
      const { url, cookie: c } = await startUrl(env, provider, next, site, secure);
      return new Response(null, { status: 302, headers: { location: url, 'set-cookie': c } });
    }
    /* callback */
    if (here.searchParams.get('error')) return back('denied');
    let next = '/portal', profile;
    try {
      next = (await readState(env, request, provider, here.searchParams.get('state') || '')).next;
      profile = await fetchProfile(env, provider, here.searchParams.get('code') || '', site);
    } catch (e) {
      return back(String(e && e.message || 'error').replace(/[^a-z]/g, '') || 'error');
    }
    if (!profile.email_verified) return back('unverified');
    const email = normEmail(profile.email);
    if (!isEmail(email)) return back('profile');
    const admin = isAdminEmail(env, email);
    if (mode === 'invite' && !admin) return back('invite');
    const { user } = await findOrCreateByEmail(env, { email, name: profile.name, locale: 'en', method: 'oauth-' + provider, verified: true, admin, founding: isFounding(env) });
    await env.DB.prepare('INSERT OR IGNORE INTO identities (provider, subject, user_id, email, created_at) VALUES (?, ?, ?, ?, ?)').bind(provider, profile.subject, user.id, email, nowIso()).run();
    const headers = new Headers({ location: site + next });
    headers.append('set-cookie', await createSession(request, env, user.id));
    headers.append('set-cookie', clearStateCookie(secure));
    return new Response(null, { status: 302, headers });
  }
  if (route === 'verify') {
    const token = new URL(request.url).searchParams.get('token') || '';
    const row = await consumeToken(env, 'verify', token);
    const site = env.SITE_URL || new URL(request.url).origin;
    if (!row || !row.user_id) return Response.redirect(site + '/login?verified=0', 302);
    await env.DB.prepare('UPDATE users SET email_verified_at = ?, updated_at = ? WHERE id = ?').bind(nowIso(), nowIso(), row.user_id).run();
    return Response.redirect(site + '/login?verified=1', 302);
  }
  return fail(404, 'unknown route');
}

export async function onRequestPost({ request, env, params }) {
  const mode = accountsMode(env);
  if (mode === 'closed') return fail(404, 'accounts not open');   /* Tier 0: waitlist only; AUTH_ENABLED=true or ADMIN_EMAILS opens this (http.js accountsMode) */
  const route = (params.route || []).join('/');
  if (!ready(env)) return fail(503, 'accounts not configured');
  if (!sameOrigin(request)) return fail(403, 'origin');
  const ip = clientIp(request);
  const body = (await readJson(request)) || {};
  const site = env.SITE_URL || new URL(request.url).origin;

  if (route === 'register') {
    if (!(await rateLimit(env, 'reg:' + ip, 10, 3600))) return fail(429, 'too many attempts');
    const ts = await verifyTurnstile(env, body.turnstile, ip);
    if (!ts.ok) return fail(400, 'verification failed', { field: 'turnstile' });
    const name = clip(body.name, 80), email = normEmail(body.email), password = String(body.password || '');
    if (!name) return fail(400, 'name required', { field: 'name' });
    if (!isEmail(email)) return fail(400, 'valid e-mail required', { field: 'email' });
    if (password.length < PW_MIN || password.length > PW_MAX) return fail(400, `password must be ${PW_MIN}-${PW_MAX} characters`, { field: 'password' });
    if (body.terms !== true) return fail(400, 'terms must be accepted', { field: 'terms' });
    const admin = isAdminEmail(env, email);
    /* invite mode: only the ADMIN_EMAILS addresses may register; everyone else sees the waitlist */
    if (mode === 'invite' && !admin) return fail(403, 'invitation required', { field: 'email' });
    const exists = await env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(email).first();
    if (exists) return fail(409, 'account exists', { field: 'email' });
    const audience = AUDIENCES.includes(body.audience) ? body.audience : null;
    const locale = localeOf(body.locale);
    const marketing = body.marketing === true;
    const consent = { ...CONSENT_VERSIONS, marketing, consented_at: nowIso(), method: 'register-form' };
    const id = newId();
    const now = nowIso();
    await env.DB.prepare('INSERT INTO users (id, email, name, pw_hash, role, audience, locale, consent_json, marketing_opt_in, founding, created_at, updated_at, last_login_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
      .bind(id, email, name, await hashPassword(password), admin ? 'admin' : 'member', audience, locale, JSON.stringify(consent), marketing ? 1 : 0, isFounding(env) ? 1 : 0, now, now, now).run();
    const setCookie = await createSession(request, env, id);
    let verification = { sent: false, reason: 'mail not configured' };
    if (env.RESEND_API_KEY) {
      const raw = await issueToken(env, 'verify', { userId: id, hours: 24 });
      verification = await mailVerify(env, { to: email, name, url: `${site}/api/auth/verify?token=${raw}`, locale });
    }
    const u = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(id).first();
    return json({ ok: true, user: publicUser(u), verification_email: verification.sent }, 201, { 'set-cookie': setCookie });
  }

  if (route === 'login') {
    const email = normEmail(body.email), password = String(body.password || '');
    if (!isEmail(email) || !password) return fail(400, 'e-mail and password required');
    const okIp = await rateLimit(env, 'login:ip:' + ip, 30, 900);
    const okEmail = await rateLimit(env, 'login:em:' + email, 10, 900);
    if (!okIp || !okEmail) return fail(429, 'too many attempts; try again in fifteen minutes');
    const u = await env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(email).first();
    const good = u ? await verifyPassword(password, u.pw_hash) : await verifyPassword(password, 'pbkdf2-sha256$100000$AAAAAAAAAAAAAAAAAAAAAA$AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    if (!u || !good) return fail(401, 'wrong e-mail or password');
    /* an address added to ADMIN_EMAILS after it registered is promoted on its next sign-in */
    if (u.role !== 'admin' && isAdminEmail(env, email)) {
      await env.DB.prepare('UPDATE users SET role = ?, updated_at = ?, last_login_at = ? WHERE id = ?').bind('admin', nowIso(), nowIso(), u.id).run();
      u.role = 'admin';
    } else {
      await env.DB.prepare('UPDATE users SET last_login_at = ? WHERE id = ?').bind(nowIso(), u.id).run();
    }
    const setCookie = await createSession(request, env, u.id);
    return json({ ok: true, user: publicUser(u) }, 200, { 'set-cookie': setCookie });
  }

  if (route === 'logout') {
    const clear = await destroySession(request, env);
    return json({ ok: true }, 200, { 'set-cookie': clear });
  }

  if (route === 'magic/request') {
    /* always 200 with no hint whether the address has an account; throttles stay silent too */
    const email = normEmail(body.email);
    if (!isEmail(email)) return fail(400, 'valid e-mail required', { field: 'email' });
    const ts = await verifyTurnstile(env, body.turnstile, ip);
    if (!ts.ok) return fail(400, 'verification failed', { field: 'turnstile' });
    if (!env.RESEND_API_KEY) return json({ ok: true, sent: false, mail_configured: false });
    const okEmail = await rateLimit(env, 'magic:em:' + email, 3, 900);
    const okIp = await rateLimit(env, 'magic:ip:' + ip, 10, 3600);
    if (!okEmail || !okIp) return json({ ok: true, sent: false, mail_configured: true });
    if (mode === 'invite' && !isAdminEmail(env, email)) return json({ ok: true, sent: false, mail_configured: true });
    const next = safeNext(body.next, '/portal');
    const raw = await issueToken(env, 'magic', { email, hours: MAGIC_MINUTES / 60 });
    const url = `${site}/login?magic=${raw}&next=${encodeURIComponent(next)}`;
    const r = await mailMagic(env, { to: email, url, minutes: MAGIC_MINUTES, locale: localeOf(body.locale) });
    return json({ ok: true, sent: r.sent, mail_configured: true });
  }

  if (route === 'magic/consume') {
    const row = await consumeToken(env, 'magic', String(body.token || ''));
    if (!row || !row.email) return fail(400, 'link invalid or expired', { field: 'token' });
    const email = normEmail(row.email);
    const admin = isAdminEmail(env, email);
    if (mode === 'invite' && !admin) return fail(403, 'invitation required', { field: 'email' });
    const { user, created } = await findOrCreateByEmail(env, { email, locale: localeOf(body.locale), method: 'magic-link', verified: true, admin, founding: isFounding(env) });
    const setCookie = await createSession(request, env, user.id);
    return json({ ok: true, user: publicUser(user), created }, 200, { 'set-cookie': setCookie });
  }

  if (route === 'request-reset') {
    const email = normEmail(body.email);
    if (!isEmail(email)) return fail(400, 'valid e-mail required');
    if (!(await rateLimit(env, 'reset:' + ip, 10, 3600))) return fail(429, 'too many attempts');
    const u = await env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(email).first();
    let sent = false;
    if (u && env.RESEND_API_KEY) {
      const raw = await issueToken(env, 'reset', { userId: u.id, hours: 1 });
      sent = (await mailReset(env, { to: email, name: u.name, url: `${site}/login?reset=${raw}`, locale: u.locale })).sent;
    }
    /* Always 200: never reveal whether an address has an account. */
    return json({ ok: true, mail_configured: !!env.RESEND_API_KEY, sent: u ? sent : false });
  }

  if (route === 'reset') {
    const password = String(body.password || '');
    if (password.length < PW_MIN || password.length > PW_MAX) return fail(400, `password must be ${PW_MIN}-${PW_MAX} characters`);
    const row = await consumeToken(env, 'reset', String(body.token || ''));
    if (!row || !row.user_id) return fail(400, 'link invalid or expired');
    await env.DB.prepare('UPDATE users SET pw_hash = ?, updated_at = ? WHERE id = ?').bind(await hashPassword(password), nowIso(), row.user_id).run();
    await env.DB.prepare('DELETE FROM sessions WHERE user_id = ?').bind(row.user_id).run();
    return json({ ok: true });
  }

  if (route === 'resend-verify') {
    const u = await getUser(request, env);
    if (!u) return fail(401, 'not signed in');
    if (u.email_verified_at) return json({ ok: true, already: true });
    if (!env.RESEND_API_KEY) return json({ ok: false, error: 'mail not configured' }, 503);
    if (!(await rateLimit(env, 'verify:' + u.id, 3, 3600))) return fail(429, 'too many attempts');
    const raw = await issueToken(env, 'verify', { userId: u.id, hours: 24 });
    const r = await mailVerify(env, { to: u.email, name: u.name, url: `${site}/api/auth/verify?token=${raw}`, locale: u.locale });
    return json({ ok: r.sent, sent: r.sent });
  }

  return fail(404, 'unknown route');
}

export async function onRequestDelete({ request, env, params }) {
  if (accountsMode(env) === 'closed') return fail(404, 'accounts not open');
  if (!ready(env)) return fail(503, 'accounts not configured');
  if (!sameOrigin(request)) return fail(403, 'origin');
  const parts = params.route || [];
  if (parts[0] !== 'sessions' || !parts[1]) return fail(404, 'unknown route');
  const u = await getUser(request, env);
  if (!u) return fail(401, 'not signed in');
  const gone = await revokeSession(env, u.id, clip(parts[1], 12));
  return gone ? json({ ok: true }) : fail(404, 'no such session');
}
