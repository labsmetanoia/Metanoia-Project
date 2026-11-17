/**
 * Letters a member can read again in the portal (server/lib/letters.js; docs/21 N-03).
 *
 *   GET /api/letters   → { ok, signed_in, letters: [{ id, date, title: { en, id }, body: { en, id } }] }
 *
 * Only letters that have started going out, newest first. Drafts and cancelled letters never appear.
 * A guest gets an empty list, not an error: the portal's demo view asks too.
 */
import { json } from '../../server/lib/http.js';
import { getUser } from '../../server/lib/auth.js';
import { portalLetters } from '../../server/lib/letters.js';

export async function onRequestGet({ request, env }) {
  if (!env.DB) return json({ ok: true, letters: [] });
  const user = await getUser(request, env);
  if (!user) return json({ ok: true, signed_in: false, letters: [] });
  return json({ ok: true, signed_in: true, letters: await portalLetters(env) });
}
