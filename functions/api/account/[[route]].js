/**
 * Data-subject rights without a database console.
 *
 *   GET  /api/account/export                    → everything held about the signed-in member (JSON; server/lib/account.js)
 *   POST /api/account/delete { password }       → password accounts: deletion confirmed; every device signed out, the
 *                                                 account purged by the Worker within 24 hours, an e-mail with a cancel link
 *   POST /api/account/delete {}                 → passwordless accounts (magic link, Google, LinkedIn): an e-mail with a
 *                                                 confirmation link; nothing changes until it is clicked
 *   GET  /api/account/delete/confirm?token=     → the link above: confirms, then redirects to /login?deletion=scheduled
 *   GET  /api/account/delete/cancel?token=      → the cancel link: clears the request, redirects to /login?deletion=cancelled
 *   POST /api/account/update { name?, audience?, locale?, marketing? }
 *   POST /api/account/password { current, password } → new hash, every other session signed out, this one renewed
 */
import { json, fail, readJson, sameOrigin, clip, localeOf, AUDIENCES, verifyPassword, hashPassword, rateLimit, clientIp, nowIso } from '../../../server/lib/http.js';
import { getUser, createSession, destroySession, publicUser, issueToken, consumeToken } from '../../../server/lib/auth.js';
import { exportAccount, scheduleDeletion, cancelDeletion, PURGE_WITHIN_HOURS } from '../../../server/lib/account.js';
import { mailDeleteConfirm, mailDeleteScheduled } from '../../../server/lib/mail.js';

const PW_MIN = 8, PW_MAX = 200;
const siteOf = (env, request) => (env.SITE_URL || new URL(request.url).origin).replace(/\/$/, '');

/* confirms a deletion: marks, signs out everywhere, mails the cancel link */
async function confirmDeletion(env, request, user) {
  const site = siteOf(env, request);
  const when = await scheduleDeletion(env, user.id);
  const raw = await issueToken(env, 'undelete', { userId: user.id, hours: PURGE_WITHIN_HOURS + 24 });
  await mailDeleteScheduled(env, { to: user.email, name: user.name, hours: PURGE_WITHIN_HOURS, cancelUrl: `${site}/api/account/delete/cancel?token=${raw}`, locale: user.locale, ref: user.id });
  return when;
}

export async function onRequestGet({ request, env, params }) {
  if (!env.DB) return fail(503, 'accounts not configured');
  const route = (params.route || []).join('/');
  const site = siteOf(env, request);

  if (route === 'delete/confirm' || route === 'delete/cancel') {
    const token = new URL(request.url).searchParams.get('token') || '';
    const kind = route === 'delete/confirm' ? 'delete' : 'undelete';
    const row = await consumeToken(env, kind, token);
    if (!row || !row.user_id) return Response.redirect(`${site}/login?deletion=invalid`, 302);
    const user = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(row.user_id).first();
    if (!user) return Response.redirect(`${site}/login?deletion=invalid`, 302);
    if (kind === 'delete') {
      if (!user.deletion_requested_at) await confirmDeletion(env, request, user);
      return Response.redirect(`${site}/login?deletion=scheduled`, 302);
    }
    await cancelDeletion(env, user.id);
    return Response.redirect(`${site}/login?deletion=cancelled`, 302);
  }

  const user = await getUser(request, env);
  if (!user) return fail(401, 'not signed in');
  if (route !== 'export') return fail(404, 'unknown route');
  return json(await exportAccount(env, user), 200, { 'content-disposition': 'attachment; filename="metanoia-export.json"' });
}

export async function onRequestPost({ request, env, params }) {
  if (!env.DB) return fail(503, 'accounts not configured');
  if (!sameOrigin(request)) return fail(403, 'origin');
  const route = (params.route || []).join('/');
  const user = await getUser(request, env);
  if (!user) return fail(401, 'not signed in');
  const body = (await readJson(request)) || {};

  if (route === 'delete') {
    if (!(await rateLimit(env, 'del:' + user.id, 5, 3600))) return fail(429, 'too many attempts');
    if (user.pw_hash) {
      if (!(await verifyPassword(String(body.password || ''), user.pw_hash))) return fail(401, 'wrong password');
      const when = await confirmDeletion(env, request, user);
      const clear = await destroySession(request, env);
      return json({ ok: true, scheduled: true, purge_by: when.purge_by }, 200, { 'set-cookie': clear });
    }
    /* no password to prove it is you: the address confirms */
    const raw = await issueToken(env, 'delete', { userId: user.id, hours: 1 });
    const mail = await mailDeleteConfirm(env, { to: user.email, name: user.name, url: `${siteOf(env, request)}/api/account/delete/confirm?token=${raw}`, locale: user.locale, ref: user.id });
    if (!mail.sent) return fail(503, 'could not send the confirmation e-mail');
    return json({ ok: true, scheduled: false, confirmation_email: true });
  }

  if (route === 'password') {
    if (!(await rateLimit(env, 'pw:' + user.id + ':' + clientIp(request), 10, 900))) return fail(429, 'too many attempts');
    const current = String(body.current || ''), password = String(body.password || '');
    if (!(await verifyPassword(current, user.pw_hash))) return fail(401, 'wrong password', { field: 'current' });
    if (password.length < PW_MIN || password.length > PW_MAX) return fail(400, `password must be ${PW_MIN}-${PW_MAX} characters`, { field: 'password' });
    if (password === current) return fail(400, 'choose a different password', { field: 'password' });
    await env.DB.batch([
      env.DB.prepare('UPDATE users SET pw_hash = ?, updated_at = ? WHERE id = ?').bind(await hashPassword(password), nowIso(), user.id),
      env.DB.prepare('DELETE FROM sessions WHERE user_id = ?').bind(user.id),
      env.DB.prepare("DELETE FROM tokens WHERE user_id = ? AND kind = 'reset'").bind(user.id)
    ]);
    /* every other browser is signed out; this one gets a fresh session so the change is seamless */
    const setCookie = await createSession(request, env, user.id);
    return json({ ok: true, changed: true }, 200, { 'set-cookie': setCookie });
  }

  if (route === 'update') {
    const name = body.name !== undefined ? clip(body.name, 80) : user.name;
    if (!name) return fail(400, 'name required');
    const audience = body.audience !== undefined ? (AUDIENCES.includes(body.audience) ? body.audience : null) : user.audience;
    const locale = body.locale !== undefined ? localeOf(body.locale) : user.locale;
    const marketing = body.marketing !== undefined ? (body.marketing === true ? 1 : 0) : user.marketing_opt_in;
    /* opting back in clears the unsubscribe; opting out records one, so the lifecycle Worker treats both paths alike */
    await env.DB.prepare('UPDATE users SET name = ?, audience = ?, locale = ?, marketing_opt_in = ?, unsubscribed_at = CASE WHEN ? = 1 THEN NULL ELSE COALESCE(unsubscribed_at, ?) END, updated_at = ? WHERE id = ?')
      .bind(name, audience, locale, marketing, marketing, nowIso(), nowIso(), user.id).run();
    const u = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(user.id).first();
    return json({ ok: true, user: publicUser(u) });
  }

  return fail(404, 'unknown route');
}
