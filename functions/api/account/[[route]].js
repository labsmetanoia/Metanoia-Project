/**
 * Data-subject rights without a database console.
 *
 *   GET  /api/account/export            → everything held about the signed-in member (JSON)
 *   POST /api/account/delete { password } → removes the account, sessions, progress and leads with that e-mail
 *   POST /api/account/update { name?, audience?, locale?, marketing? }
 */
import { json, fail, readJson, sameOrigin, clip, localeOf, AUDIENCES, verifyPassword, nowIso, hmacHex } from '../../../server/lib/http.js';
import { getUser, destroySession, publicUser } from '../../../server/lib/auth.js';

export async function onRequestGet({ request, env, params }) {
  if (!env.DB) return fail(503, 'accounts not configured');
  const route = (params.route || []).join('/');
  const user = await getUser(request, env);
  if (!user) return fail(401, 'not signed in');
  if (route !== 'export') return fail(404, 'unknown route');
  const progress = await env.DB.prepare('SELECT ns, data_json, version, updated_at FROM progress WHERE user_id = ?').bind(user.id).all();
  const leads = await env.DB.prepare('SELECT id, kind, payload_json, consent_json, status, created_at, confirmed_at FROM leads WHERE email = ?').bind(user.email).all();
  let events = [];
  if (env.SUBJECT_KEY) {
    const subject = await hmacHex(env.SUBJECT_KEY, 'u:' + user.id);
    const ev = await env.DB.prepare('SELECT name, props_json, page, ts FROM events WHERE subject_id = ? ORDER BY ts DESC LIMIT 5000').bind(subject).all();
    events = (ev.results || []).map(r => ({ name: r.name, props: JSON.parse(r.props_json || '{}'), page: r.page, ts: r.ts }));
  }
  return json({
    ok: true, exported_at: nowIso(),
    user: { ...publicUser(user), consent: JSON.parse(user.consent_json || '{}') },
    progress: (progress.results || []).map(r => ({ ns: r.ns, data: JSON.parse(r.data_json), version: r.version, updated_at: r.updated_at })),
    leads: (leads.results || []).map(r => ({ id: r.id, kind: r.kind, payload: JSON.parse(r.payload_json), consent: JSON.parse(r.consent_json), status: r.status, created_at: r.created_at, confirmed_at: r.confirmed_at })),
    events
  }, 200, { 'content-disposition': 'attachment; filename="metanoia-export.json"' });
}

export async function onRequestPost({ request, env, params }) {
  if (!env.DB) return fail(503, 'accounts not configured');
  if (!sameOrigin(request)) return fail(403, 'origin');
  const route = (params.route || []).join('/');
  const user = await getUser(request, env);
  if (!user) return fail(401, 'not signed in');
  const body = (await readJson(request)) || {};

  if (route === 'delete') {
    if (!(await verifyPassword(String(body.password || ''), user.pw_hash))) return fail(401, 'wrong password');
    await env.DB.batch([
      env.DB.prepare('DELETE FROM leads WHERE email = ?').bind(user.email),
      env.DB.prepare('DELETE FROM tokens WHERE user_id = ? OR email = ?').bind(user.id, user.email),
      env.DB.prepare('DELETE FROM progress WHERE user_id = ?').bind(user.id),
      env.DB.prepare('DELETE FROM sessions WHERE user_id = ?').bind(user.id),
      env.DB.prepare('DELETE FROM users WHERE id = ?').bind(user.id)
    ]);
    /* events are pseudonymous; the subject key makes them unlinkable once the user row is gone */
    const clear = await destroySession(request, env);
    return json({ ok: true, deleted: true }, 200, { 'set-cookie': clear });
  }

  if (route === 'update') {
    const name = body.name !== undefined ? clip(body.name, 80) : user.name;
    if (!name) return fail(400, 'name required');
    const audience = body.audience !== undefined ? (AUDIENCES.includes(body.audience) ? body.audience : null) : user.audience;
    const locale = body.locale !== undefined ? localeOf(body.locale) : user.locale;
    const marketing = body.marketing !== undefined ? (body.marketing === true ? 1 : 0) : user.marketing_opt_in;
    await env.DB.prepare('UPDATE users SET name = ?, audience = ?, locale = ?, marketing_opt_in = ?, updated_at = ? WHERE id = ?')
      .bind(name, audience, locale, marketing, nowIso(), user.id).run();
    const u = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(user.id).first();
    return json({ ok: true, user: publicUser(u) });
  }

  return fail(404, 'unknown route');
}
