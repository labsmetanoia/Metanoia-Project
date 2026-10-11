/**
 * Nightly aggregation + retention Worker (cron). Pages Functions cannot run on
 * a schedule, so this small Worker shares the D1 database and does two things:
 *
 *  1. Rolls yesterday's `events` and `assessments` into `agg_daily`, writing a
 *     row only when the group holds at least K subjects (k-anonymity, K = 20).
 *     The Talent Readiness Report and Market Intelligence views read nothing
 *     but `agg_daily`, so no individual can appear in them by construction.
 *  2. Deletes raw events older than 13 months and expired sessions / tokens.
 *
 * Deploy:  cd workers/aggregate && npx wrangler deploy   (binding DB → the same
 * database as the Pages project; see wrangler.toml beside this file).
 */
const K = 20;
const RETENTION_DAYS = 13 * 31;

const day = d => d.toISOString().slice(0, 10);

async function aggregateDay(env, dayStr) {
  const from = dayStr + 'T00:00:00.000Z', to = dayStr + 'T23:59:59.999Z';
  const stmts = [];

  /* events: count per name × audience × locale (subjects counted, not rows) */
  const ev = await env.DB.prepare(
    "SELECT name, COALESCE(audience,'') AS audience, COALESCE(locale,'') AS locale, COUNT(*) AS rows, COUNT(DISTINCT subject_id) AS subjects " +
    'FROM events WHERE ts BETWEEN ? AND ? GROUP BY name, audience, locale'
  ).bind(from, to).all();
  for (const r of ev.results || []) {
    if (r.subjects < K) continue;
    stmts.push(env.DB.prepare('INSERT OR REPLACE INTO agg_daily (day, metric, audience, fn, industry, n, value_json) VALUES (?, ?, ?, ?, ?, ?, ?)')
      .bind(dayStr, 'events.' + r.name, r.audience, r.locale, '', r.subjects, JSON.stringify({ rows: r.rows, subjects: r.subjects })));
  }

  /* assessments: total-score histogram (deciles) per audience × target function */
  const as = await env.DB.prepare(
    "SELECT COALESCE(audience,'') AS audience, COALESCE(target_fn,'') AS fn, scores_json, subject_id FROM assessments WHERE ts BETWEEN ? AND ?"
  ).bind(from, to).all();
  const groups = {};
  for (const r of as.results || []) {
    const key = r.audience + '|' + r.fn;
    const g = groups[key] = groups[key] || { subjects: new Set(), hist: new Array(10).fill(0), sum: 0, n: 0 };
    let total = null;
    try { total = JSON.parse(r.scores_json).total; } catch (e) {}
    if (typeof total !== 'number') continue;
    g.subjects.add(r.subject_id);
    g.hist[Math.min(9, Math.max(0, Math.floor(total / 10)))]++;
    g.sum += total; g.n++;
  }
  for (const key in groups) {
    const g = groups[key];
    if (g.subjects.size < K) continue;
    const [audience, fn] = key.split('|');
    stmts.push(env.DB.prepare('INSERT OR REPLACE INTO agg_daily (day, metric, audience, fn, industry, n, value_json) VALUES (?, ?, ?, ?, ?, ?, ?)')
      .bind(dayStr, 'assessment.total.histogram', audience, fn, '', g.subjects.size, JSON.stringify({ histogram: g.hist, mean: Math.round((g.sum / g.n) * 10) / 10, n: g.n })));
  }
  if (stmts.length) await env.DB.batch(stmts);
  return stmts.length;
}

async function retention(env) {
  const cutoff = new Date(Date.now() - RETENTION_DAYS * 86400 * 1000).toISOString();
  const now = new Date().toISOString();
  await env.DB.batch([
    env.DB.prepare('DELETE FROM events WHERE ts < ?').bind(cutoff),
    env.DB.prepare('DELETE FROM sessions WHERE expires_at < ?').bind(now),
    env.DB.prepare('DELETE FROM tokens WHERE expires_at < ?').bind(now),
    env.DB.prepare('DELETE FROM rate_limits WHERE window_start < ?').bind(Math.floor(Date.now() / 1000) - 86400)
  ]);
}

export default {
  async scheduled(event, env, ctx) {
    const yesterday = new Date(Date.now() - 86400 * 1000);
    ctx.waitUntil((async () => {
      const n = await aggregateDay(env, day(yesterday));
      await retention(env);
      console.log('aggregate', day(yesterday), 'rows', n);
    })());
  },
  /* manual trigger for a given day, protected by the same admin token */
  async fetch(request, env) {
    const url = new URL(request.url);
    const auth = request.headers.get('authorization') || '';
    if (!env.ADMIN_TOKEN || auth !== 'Bearer ' + env.ADMIN_TOKEN) return new Response('unauthorized', { status: 401 });
    const d = url.searchParams.get('day') || day(new Date(Date.now() - 86400 * 1000));
    const n = await aggregateDay(env, d);
    if (url.searchParams.get('retention') === '1') await retention(env);
    return new Response(JSON.stringify({ ok: true, day: d, rows: n }), { headers: { 'content-type': 'application/json' } });
  }
};
