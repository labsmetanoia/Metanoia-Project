/**
 * GET /api/health → { ok, service, db, mail, session, admin, accounts, time }
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

export async function onRequestGet({ env }) {
  const c = configured(env);
  let db = false;
  if (env.DB) {
    try { await env.DB.prepare('SELECT 1').first(); db = true; } catch (e) { db = false; }
  }
  const ok = db && c.session;
  const mode = accountsMode(env);
  const accounts = !ok ? false : mode === 'open' ? true : mode === 'invite' ? 'invite' : false;
  return json({ ok, service: 'metanoia-api', version: 1, db, mail: c.mail, session: c.session, admin: c.admin, accounts, time: nowIso() }, ok ? 200 : 503);
}
