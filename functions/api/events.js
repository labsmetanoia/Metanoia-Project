/**
 * POST /api/events  { anon_id, audience?, locale?, events: [{ name, props?, ts?, page? }] }
 *
 * First-party product events (docs/13-event-dictionary.md). The subject is a
 * keyed hash of the user id (signed in) or of the browser's anonymous id, so
 * the events table never holds an e-mail or a user id. Career Map results
 * (`assessment.career_map.submitted`) are also written to `assessments`.
 */
import { json, fail, readJson, sameOrigin, rateLimit, clientIp, hmacHex, nowIso, AUDIENCES, newId } from '../../server/lib/http.js';
import { getUser } from '../../server/lib/auth.js';

const NAME = /^[a-z0-9_]+\.[a-z0-9_]+\.[a-z0-9_]+$/;
const MAX_BATCH = 50;

export async function onRequestPost({ request, env }) {
  if (!env.DB || !env.SUBJECT_KEY) return fail(503, 'events not configured');
  if (!sameOrigin(request)) return fail(403, 'origin');
  if (!(await rateLimit(env, 'ev:' + clientIp(request), 600, 600))) return fail(429, 'slow down');
  const body = await readJson(request, 128 * 1024);
  if (!body || !Array.isArray(body.events)) return fail(400, 'events array required');
  const user = await getUser(request, env);
  const anon = typeof body.anon_id === 'string' && /^[A-Za-z0-9_-]{16,64}$/.test(body.anon_id) ? body.anon_id : null;
  if (!user && !anon) return fail(400, 'anon_id required');
  const subject = await hmacHex(env.SUBJECT_KEY, user ? 'u:' + user.id : 'a:' + anon);
  const audience = AUDIENCES.includes(body.audience) ? body.audience : (user && user.audience) || null;
  const locale = body.locale === 'id' ? 'id' : 'en';
  const received = nowIso();
  const stmts = [];
  let accepted = 0;
  for (const e of body.events.slice(0, MAX_BATCH)) {
    if (!e || typeof e.name !== 'string' || !NAME.test(e.name)) continue;
    const props = e.props && typeof e.props === 'object' ? e.props : {};
    const propsJson = JSON.stringify(props).slice(0, 4000);
    const ts = typeof e.ts === 'string' && !isNaN(Date.parse(e.ts)) ? new Date(e.ts).toISOString() : received;
    const page = typeof e.page === 'string' ? e.page.slice(0, 300) : null;
    stmts.push(env.DB.prepare('INSERT INTO events (subject_id, name, props_json, audience, locale, page, ts, received_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
      .bind(subject, e.name, propsJson, audience, locale, page, ts, received));
    if (e.name === 'assessment.career_map.submitted' && props.scores) {
      stmts.push(env.DB.prepare('INSERT INTO assessments (id, subject_id, kind, audience, target_fn, target_industry, scores_json, ts) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
        .bind(newId(), subject, 'career-map', audience, typeof props.target_fn === 'string' ? props.target_fn.slice(0, 60) : null,
          typeof props.target_industry === 'string' ? props.target_industry.slice(0, 60) : null, JSON.stringify(props.scores).slice(0, 4000), ts));
    }
    accepted++;
  }
  if (stmts.length) await env.DB.batch(stmts);
  return json({ ok: true, accepted }, 202);
}
