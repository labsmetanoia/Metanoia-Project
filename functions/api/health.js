/**
 * GET /api/health → { ok, service, db, mail, session, time }
 *
 * The browser probes this once per visit (js/mt-api.js). On GitHub Pages the
 * path answers with the 404 page, which is how the site knows that accounts
 * and server-side lead capture are not available on this host and shows its
 * honest states instead of pretending.
 */
import { json, configured, nowIso } from '../../server/lib/http.js';

export async function onRequestGet({ env }) {
  const c = configured(env);
  let db = false;
  if (env.DB) {
    try { await env.DB.prepare('SELECT 1').first(); db = true; } catch (e) { db = false; }
  }
  const ok = db && c.session;
  return json({ ok, service: 'metanoia-api', version: 1, db, mail: c.mail, session: c.session, admin: c.admin, time: nowIso() }, ok ? 200 : 503);
}
