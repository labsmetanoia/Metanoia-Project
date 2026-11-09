/**
 * Data-subject rights (Tier 1 stage 5): the full export, and deletion with a
 * confirmation window.
 *
 * Deletion: the member confirms (password, or the e-mailed link for a
 * passwordless account); the account is marked, every session is revoked and
 * sign-in is blocked; the scheduled Worker purges the rows at its next run at
 * least PURGE_AFTER_HOURS later and always within 24 hours, then sends one
 * final confirmation. The e-mail sent at the request carries a cancel link
 * valid until the purge. Events and assessments are pseudonymous (HMAC of the
 * user id) and become unlinkable once the user row is gone.
 */
import { nowIso, sha256, hmacHex } from './http.js';
import { mailDeleted } from './mail.js';

export const PURGE_AFTER_HOURS = 2;
export const PURGE_WITHIN_HOURS = 24;

const parse = (s, fallback) => { try { return JSON.parse(s); } catch (e) { return fallback; } };

export async function exportAccount(env, user) {
  const out = { ok: true, exported_at: nowIso(), format: 'metanoia-account-export/2' };
  out.user = { id: user.id, email: user.email, name: user.name, role: user.role, audience: user.audience || null, locale: user.locale, founding: !!user.founding,
    email_verified_at: user.email_verified_at || null, marketing_opt_in: !!user.marketing_opt_in, unsubscribed_at: user.unsubscribed_at || null,
    deletion_requested_at: user.deletion_requested_at || null, created_at: user.created_at, last_login_at: user.last_login_at || null, consent: parse(user.consent_json, {}) };
  const q = async (sql, args, map) => { try { const r = await env.DB.prepare(sql).bind(...args).all(); return (r.results || []).map(map); } catch (e) { return []; } };
  out.identities = await q('SELECT provider, email, created_at FROM identities WHERE user_id = ?', [user.id], r => ({ provider: r.provider, email: r.email, created_at: r.created_at }));
  out.entitlements = await q('SELECT product, plan, source, starts_at, ends_at, status, note, created_at FROM entitlements WHERE user_id = ? ORDER BY created_at', [user.id], r => ({ ...r }));
  out.sessions = await q('SELECT created_at, expires_at, user_agent FROM sessions WHERE user_id = ? ORDER BY created_at', [user.id], r => ({ created_at: r.created_at, expires_at: r.expires_at, user_agent: r.user_agent || null }));
  out.progress = await q('SELECT ns, data_json, version, updated_at FROM progress WHERE user_id = ?', [user.id], r => ({ ns: r.ns, data: parse(r.data_json, null), version: r.version, updated_at: r.updated_at }));
  out.leads = await q('SELECT id, kind, payload_json, consent_json, status, created_at, confirmed_at, unsubscribed_at FROM leads WHERE email = ?', [user.email],
    r => ({ id: r.id, kind: r.kind, payload: parse(r.payload_json, {}), consent: parse(r.consent_json, {}), status: r.status, created_at: r.created_at, confirmed_at: r.confirmed_at || null, unsubscribed_at: r.unsubscribed_at || null }));
  const toHash = await sha256(String(user.email).trim().toLowerCase());
  out.mail = await q('SELECT class, kind, day, status, created_at FROM mail_log WHERE to_hash = ? OR ref = ? ORDER BY created_at', [toHash, user.id], r => ({ class: r.class, kind: r.kind, day: r.day, status: r.status, created_at: r.created_at }));
  out.events = []; out.assessments = [];
  if (env.SUBJECT_KEY) {
    const subject = await hmacHex(env.SUBJECT_KEY, 'u:' + user.id);
    out.events = await q('SELECT name, props_json, page, ts FROM events WHERE subject_id = ? ORDER BY ts DESC LIMIT 5000', [subject], r => ({ name: r.name, props: parse(r.props_json, {}), page: r.page, ts: r.ts }));
    out.assessments = await q('SELECT kind, audience, target_fn, target_industry, scores_json, ts FROM assessments WHERE subject_id = ? ORDER BY ts DESC', [subject], r => ({ kind: r.kind, audience: r.audience, target_fn: r.target_fn, target_industry: r.target_industry, scores: parse(r.scores_json, null), ts: r.ts }));
  }
  return out;
}

/* marks the account, signs every device out; returns when the purge will have happened by */
export async function scheduleDeletion(env, userId) {
  const now = nowIso();
  await env.DB.batch([
    env.DB.prepare('UPDATE users SET deletion_requested_at = COALESCE(deletion_requested_at, ?), updated_at = ? WHERE id = ?').bind(now, now, userId),
    env.DB.prepare('DELETE FROM sessions WHERE user_id = ?').bind(userId)
  ]);
  return { requested_at: now, purge_by: new Date(Date.parse(now) + PURGE_WITHIN_HOURS * 3600000).toISOString() };
}

export async function cancelDeletion(env, userId) {
  const r = await env.DB.prepare('UPDATE users SET deletion_requested_at = NULL, updated_at = ? WHERE id = ? AND deletion_requested_at IS NOT NULL').bind(nowIso(), userId).run();
  return !!(r.meta && r.meta.changes);
}

/* every account whose request is old enough: one final mail, then every row that names it */
export async function purgeDeletions(env, { now = new Date(), dryRun = false } = {}) {
  const cutoff = new Date(now.getTime() - PURGE_AFTER_HOURS * 3600000).toISOString();
  const due = await env.DB.prepare('SELECT * FROM users WHERE deletion_requested_at IS NOT NULL AND deletion_requested_at <= ?').bind(cutoff).all();
  const out = { purged: 0, pending: 0, failed: 0 };
  const all = await env.DB.prepare('SELECT COUNT(*) AS n FROM users WHERE deletion_requested_at IS NOT NULL').first();
  out.pending = all ? all.n : 0;
  for (const u of due.results || []) {
    if (dryRun) { out.purged++; continue; }
    try {
      await mailDeleted(env, { to: u.email, name: u.name, locale: u.locale, ref: u.id });
      const toHash = await sha256(String(u.email).trim().toLowerCase());
      await env.DB.batch([
        env.DB.prepare('DELETE FROM leads WHERE email = ?').bind(u.email),
        env.DB.prepare('DELETE FROM tokens WHERE user_id = ? OR email = ?').bind(u.id, u.email),
        env.DB.prepare('DELETE FROM progress WHERE user_id = ?').bind(u.id),
        env.DB.prepare('DELETE FROM sessions WHERE user_id = ?').bind(u.id),
        env.DB.prepare('DELETE FROM identities WHERE user_id = ?').bind(u.id),
        env.DB.prepare('DELETE FROM entitlements WHERE user_id = ?').bind(u.id),
        env.DB.prepare('DELETE FROM mail_log WHERE to_hash = ? OR ref = ?').bind(toHash, u.id),
        env.DB.prepare('DELETE FROM users WHERE id = ?').bind(u.id)
      ]);
      out.purged++; out.pending--;
    } catch (e) {
      console.error('purge', u.id, String(e && e.message || e).slice(0, 200));
      out.failed++;
    }
  }
  return out;
}
