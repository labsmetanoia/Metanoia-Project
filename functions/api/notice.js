/**
 * The site-wide notice (server/lib/letters.js; docs/21 N-03).
 *
 *   GET /api/notice   → { ok, notice: null | { key, text: { en, id }, link: null | { href, en, id }, until } }
 *
 * Public and the same for every visitor, so browsers may keep the answer for five minutes. Nothing is
 * returned unless the owner switched the notice on in the admin page and its last day has not passed.
 */
import { json } from '../../server/lib/http.js';
import { publicNotice } from '../../server/lib/letters.js';

export async function onRequestGet({ env }) {
  const notice = env.DB ? await publicNotice(env).catch(() => null) : null;
  return json({ ok: true, notice }, 200, { 'cache-control': 'public, max-age=300' });
}
