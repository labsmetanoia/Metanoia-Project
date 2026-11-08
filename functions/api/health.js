/**
 * GET /api/health → { ok, service, db, mail, session, admin, accounts, time }
 *
 * The browser probes this once per visit (js/mt-api.js). On GitHub Pages the
 * path answers with the 404 page, which is how the site knows that accounts
 * and server-side lead capture are not available on this host and shows its
 * honest states instead of pretending.
 *
 * `accounts` is the AUTH_ENABLED switch (wrangler.toml). While it is false the
 * API is live for leads and events but register/login answer 404, and the
 * login and register pages offer the guest preview instead of a form that
 * cannot succeed.
 */
import { json, configured, nowIso } from '../../server/lib/http.js';

export async function onRequestGet({ env }) {
  const c = configured(env);
  let db = false;
  if (env.DB) {
    try { await env.DB.prepare('SELECT 1').first(); db = true; } catch (e) { db = false; }
  }
  const ok = db && c.session;
  const accounts = ok && env.AUTH_ENABLED === 'true';
  return json({ ok, service: 'metanoia-api', version: 1, db, mail: c.mail, session: c.session, admin: c.admin, accounts, time: nowIso() }, ok ? 200 : 503);
}
