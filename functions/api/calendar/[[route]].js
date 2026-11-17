/**
 * Calendar feed of a member's dates in The Compass (server/lib/reminders.js; docs/21 N-05).
 *
 *   GET  /api/calendar            → { ok, enabled, url }            the member's feed, if it is on
 *   POST /api/calendar/on         → { ok, enabled: true, url }      switches the feed on
 *   POST /api/calendar/reset      → { ok, enabled: true, url }      a new address; the old one stops working
 *   POST /api/calendar/off        → { ok, enabled: false }          switches it off
 *   GET  /api/calendar/feed.ics?u=<member>&k=<signature>            the feed itself, for calendar apps
 *
 * The feed address is private: whoever holds it can read the dates, so it is long, signed, never listed
 * anywhere, and replaceable. It shows application deadlines, next steps and goal dates as all-day
 * entries, in the member's language. Notes, documents and scores are not in it.
 */
import { json, fail, sameOrigin, rateLimit, clientIp, nowIso } from '../../../server/lib/http.js';
import { getUser } from '../../../server/lib/auth.js';
import { feedUrl, verifyFeed, memberCompass, compassItems, buildIcs, dayIn } from '../../../server/lib/reminders.js';

const siteOf = (request, env) => (env.SITE_URL || new URL(request.url).origin).replace(/\/$/, '');
const plain = (status, text) => new Response(text, { status, headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' } });

export async function onRequestGet({ request, env, params }) {
  if (!env.DB || !env.SESSION_SECRET) return fail(503, 'calendar not configured');
  const route = (params.route || []).join('/');
  if (route === 'feed.ics') {
    if (!(await rateLimit(env, 'cal:' + clientIp(request), 120, 600))) return plain(429, 'slow down');
    const url = new URL(request.url), uid = (url.searchParams.get('u') || '').slice(0, 64), sig = url.searchParams.get('k') || '';
    let feed = null;
    try { feed = await verifyFeed(env, uid, sig); } catch (e) { return plain(503, 'calendar not available'); }   /* before migration 0012 */
    if (!feed) return plain(404, 'This calendar address is not valid. Open The Compass to get the current one.');
    const user = await env.DB.prepare('SELECT locale, deletion_requested_at FROM users WHERE id = ?').bind(uid).first();
    if (!user || user.deletion_requested_at) return plain(404, 'This calendar address is not valid.');
    const locale = user.locale === 'id' ? 'id' : 'en', now = new Date();
    const items = compassItems(await memberCompass(env, uid), locale, dayIn(now));
    await env.DB.prepare('UPDATE calendar_feeds SET last_read_at = ? WHERE user_id = ?').bind(nowIso(), uid).run().catch(() => {});
    return new Response(buildIcs(items, { locale, now, site: siteOf(request, env) }), { headers: { 'content-type': 'text/calendar; charset=utf-8', 'content-disposition': 'inline; filename="metanoia-compass.ics"', 'cache-control': 'private, no-store', 'x-robots-tag': 'noindex' } });
  }
  if (route) return fail(404, 'not found');
  const user = await getUser(request, env);
  if (!user) return fail(401, 'not signed in');
  try {
    const row = await env.DB.prepare('SELECT version FROM calendar_feeds WHERE user_id = ?').bind(user.id).first();
    return json({ ok: true, enabled: !!row, url: row ? await feedUrl(env, siteOf(request, env), user.id, row.version) : null });
  } catch (e) { return json({ ok: true, enabled: false, url: null, pending_migration: true }); }
}

export async function onRequestPost({ request, env, params }) {
  if (!env.DB || !env.SESSION_SECRET) return fail(503, 'calendar not configured');
  if (!sameOrigin(request)) return fail(403, 'origin');
  const route = (params.route || []).join('/');
  if (route !== 'on' && route !== 'reset' && route !== 'off') return fail(404, 'not found');
  const user = await getUser(request, env);
  if (!user) return fail(401, 'not signed in');
  if (!(await rateLimit(env, 'calset:' + user.id, 30, 3600))) return fail(429, 'slow down');
  try {
    if (route === 'off') {
      await env.DB.prepare('DELETE FROM calendar_feeds WHERE user_id = ?').bind(user.id).run();
      return json({ ok: true, enabled: false, url: null });
    }
    const now = nowIso();
    if (route === 'on') await env.DB.prepare('INSERT INTO calendar_feeds (user_id, version, created_at) VALUES (?, 1, ?) ON CONFLICT(user_id) DO NOTHING').bind(user.id, now).run();
    else await env.DB.prepare('INSERT INTO calendar_feeds (user_id, version, created_at) VALUES (?, 1, ?) ON CONFLICT(user_id) DO UPDATE SET version = version + 1').bind(user.id, now).run();
    const row = await env.DB.prepare('SELECT version FROM calendar_feeds WHERE user_id = ?').bind(user.id).first();
    return json({ ok: true, enabled: true, url: await feedUrl(env, siteOf(request, env), user.id, row.version) });
  } catch (e) { return fail(503, 'calendar not available'); }
}
