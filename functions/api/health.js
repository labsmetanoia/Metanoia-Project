/**
 * GET /api/health → { ok, service, db, mail, session, admin, accounts, magic, oauth, beta_ends_at, access_mode, time }
 *
 * The browser probes this once per visit (js/mt-api.js). On GitHub Pages the
 * path answers with the 404 page, which is how the site knows that accounts
 * and server-side lead capture are not available on this host and shows its
 * honest states instead of pretending.
 *
 * `accounts` is the accounts switch (http.js accountsMode): true when open to
 * everyone, "invite" when only the ADMIN_EMAILS addresses may register (the
 * public pages keep the guest preview, the form stays usable for invitees),
 * false when register/login answer 404 and the pages offer the guest preview.
 */
import { json, configured, nowIso, accountsMode } from '../../server/lib/http.js';
import { oauthConfigured } from '../../server/lib/oauth.js';
import { accessMode } from '../../server/lib/entitlements.js';

export async function onRequestGet({ env }) {
  const c = configured(env);
  let db = false;
  if (env.DB) {
    try { await env.DB.prepare('SELECT 1').first(); db = true; } catch (e) { db = false; }
  }
  const ok = db && c.session;
  const mode = accountsMode(env);
  const accounts = !ok ? false : mode === 'open' ? true : mode === 'invite' ? 'invite' : false;
  const beta_ends_at = /^\d{4}-\d{2}-\d{2}$/.test(env.BETA_ENDS_AT || '') ? env.BETA_ENDS_AT : null;
  /* magic: one-time sign-in links need mail; oauth: which providers have a client id and secret */
  return json({ ok, service: 'metanoia-api', version: 1, db, mail: c.mail, session: c.session, admin: c.admin, accounts, magic: ok && c.mail, oauth: oauthConfigured(env), beta_ends_at, access_mode: accessMode(env), time: nowIso() }, ok ? 200 : 503);
}
