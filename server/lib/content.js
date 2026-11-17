/**
 * Lesson and funnel analytics for the owner (docs/21 N-04, docs/14 "Lesson and funnel analytics").
 *
 * Two sources, both without names or addresses in the result:
 *
 *   progress   the lesson completion every member's browser mirrors to the account ('mt-lms:<product>' in the
 *              `browser` namespace). It is a state, so it covers every member from their first lesson, including
 *              the time before this report existed. The database counts it; no member's document is read
 *              into the Function.
 *   events     what the lesson player reports from now on (docs/13): lesson opened, lesson completed, quiz
 *              answered, and the sample-lesson steps. Pseudonymous, kept 13 months, counted for a window of days.
 *
 * The report is counts per lesson. It is for the admin page only; the k-anonymous daily rows the Worker
 * writes to agg_daily (workers/aggregate) are what anything outward-facing may use.
 */
export const CONTENT_PRODUCTS = { 'the-map': 'The Map', 'the-pack': 'The Pack', 'the-rope': 'The Rope', 'the-route': 'The Route' };
export const MIN_ANSWERS = 5;      // a quiz question is ranked only once this many members have answered it

/* the core lessons in order and their titles, from the manifest the build writes next to the lesson files */
export async function loadManifest(request, env, product) {
  try {
    const url = new URL(`/data/lms/${product}/manifest.json`, request.url);
    const r = env.ASSETS ? await env.ASSETS.fetch(new Request(url)) : await fetch(url);
    if (!r.ok) return null;
    const m = await r.json();
    if (!Array.isArray(m.lessons) || !m.lessons.length) return null;
    return { lessons: m.lessons.map(String), titles: m.titles && typeof m.titles === 'object' ? m.titles : {} };
  } catch (e) { return null; }
}

const rows = async q => { try { return (await q.all()).results || []; } catch (e) { return null; } };
/* one member's lesson record as rows: json_each over the stored object; anything unreadable counts as empty */
const LESSONS_OF = "(SELECT user_id, json_extract(data_json, ?1) AS doc FROM progress WHERE ns = 'browser' AND json_valid(data_json)) t, json_each(CASE WHEN json_valid(t.doc) THEN t.doc ELSE '{}' END) je";

export async function contentReport(env, { days = 30, manifests = {}, now = new Date() } = {}) {
  days = Math.min(90, Math.max(1, days | 0 || 30));
  const since = new Date(now.getTime() - days * 86400000).toISOString();
  const out = { days, since, generated_at: now.toISOString(), min_answers: MIN_ANSWERS, products: [], hardest: [], tracking_since: null };

  /* events in the window */
  const lessonEv = await rows(env.DB.prepare(
    "SELECT name, json_extract(props_json, '$.pillar') AS pillar, json_extract(props_json, '$.lesson') AS lesson, COUNT(DISTINCT subject_id) AS subjects " +
    "FROM events WHERE name IN ('lms.lesson.opened', 'lms.lesson.completed') AND ts >= ? GROUP BY 1, 2, 3").bind(since)) || [];
  /* a member's first answer to a question is the one that says how hard it is */
  const quizEv = await rows(env.DB.prepare(
    "SELECT pillar, lesson, q, COUNT(*) AS answers, SUM(CASE WHEN correct = 1 THEN 0 ELSE 1 END) AS wrong FROM (" +
    "SELECT json_extract(props_json, '$.pillar') AS pillar, json_extract(props_json, '$.lesson') AS lesson, json_extract(props_json, '$.q') AS q, json_extract(props_json, '$.correct') AS correct, " +
    "ROW_NUMBER() OVER (PARTITION BY subject_id, json_extract(props_json, '$.pillar'), json_extract(props_json, '$.lesson'), json_extract(props_json, '$.q') ORDER BY id) AS rn " +
    "FROM events WHERE name = 'lms.check.answered' AND ts >= ?) WHERE rn = 1 GROUP BY 1, 2, 3").bind(since)) || [];
  const sampleEv = await rows(env.DB.prepare(
    "SELECT json_extract(props_json, '$.pillar') AS pillar, " +
    "COUNT(DISTINCT CASE WHEN name = 'lms.lesson.opened' AND json_extract(props_json, '$.sample') = 1 THEN subject_id END) AS visitors, " +
    "COUNT(DISTINCT CASE WHEN name = 'lms.sample.join_clicked' THEN subject_id END) AS joins, " +
    "COUNT(DISTINCT CASE WHEN name = 'lms.sample.converted' THEN subject_id END) AS converted " +
    "FROM events WHERE name IN ('lms.lesson.opened', 'lms.sample.join_clicked', 'lms.sample.converted') AND ts >= ? GROUP BY 1").bind(since)) || [];
  try { const f = await env.DB.prepare("SELECT MIN(ts) AS t FROM events WHERE name = 'lms.lesson.opened'").first(); out.tracking_since = (f && f.t) || null; } catch (e) {}
  const certs = {};
  for (const c of (await rows(env.DB.prepare('SELECT product, COUNT(*) AS n FROM certificates WHERE revoked_at IS NULL GROUP BY product'))) || []) certs[c.product] = c.n;

  for (const slug of Object.keys(CONTENT_PRODUCTS)) {
    const mf = manifests[slug];
    const p = { slug, name: CONTENT_PRODUCTS[slug], core: mf ? mf.lessons.length : 0, started: 0, finished: 0, certificates: certs[slug] || 0, lessons: [], drop: null, sample: { visitors: 0, joins: 0, converted: 0 } };
    out.products.push(p);
    const s = sampleEv.find(x => x.pillar === slug);
    if (s) p.sample = { visitors: s.visitors || 0, joins: s.joins || 0, converted: s.converted || 0 };
    if (!mf) { p.unavailable = 'the lesson list could not be read'; continue; }
    const path = '$.keys."mt-lms:' + slug + '"';
    const done = {};
    for (const r of (await rows(env.DB.prepare(`SELECT je.key AS lesson, COUNT(*) AS n FROM ${LESSONS_OF} WHERE je.type = 'true' GROUP BY je.key`).bind(path))) || []) done[r.lesson] = r.n;
    /* how many core lessons each member has finished, as a histogram: started is one or more, finished is all */
    const hist = await rows(env.DB.prepare(`SELECT c, COUNT(*) AS members FROM (SELECT t.user_id, COUNT(*) AS c FROM ${LESSONS_OF} WHERE je.type = 'true' AND je.key IN (SELECT value FROM json_each(?2)) GROUP BY t.user_id) GROUP BY c`)
      .bind(path, JSON.stringify(mf.lessons))) || [];
    for (const h of hist) { p.started += h.members; if (h.c >= mf.lessons.length) p.finished += h.members; }
    const ev = (name, n) => { const e = lessonEv.find(x => x.name === name && x.pillar === slug && String(x.lesson) === n); return e ? e.subjects : 0; };
    p.lessons = mf.lessons.map(n => {
      const qs = quizEv.filter(x => x.pillar === slug && String(x.lesson) === n);
      return { n, title: mf.titles[n] || '', completed: done[n] || 0, opened_window: ev('lms.lesson.opened', n), completed_window: ev('lms.lesson.completed', n),
        quiz_answers: qs.reduce((a, x) => a + x.answers, 0), quiz_wrong: qs.reduce((a, x) => a + x.wrong, 0) };
    });
    /* the step where the most members are lost: finished one lesson and not the next */
    for (let i = 1; i < p.lessons.length; i++) {
      const lost = p.lessons[i - 1].completed - p.lessons[i].completed;
      if (lost > 0 && (!p.drop || lost > p.drop.lost)) p.drop = { after: p.lessons[i - 1].n, next: p.lessons[i].n, next_title: p.lessons[i].title, lost, of: p.lessons[i - 1].completed };
    }
    for (const x of quizEv.filter(x => x.pillar === slug && x.answers >= MIN_ANSWERS)) {
      out.hardest.push({ product: slug, product_name: p.name, lesson: String(x.lesson), title: mf.titles[String(x.lesson)] || '', q: x.q, answers: x.answers, wrong: x.wrong, wrong_rate: Math.round((x.wrong / x.answers) * 100) });
    }
  }
  out.hardest.sort((a, b) => b.wrong_rate - a.wrong_rate || b.answers - a.answers);
  out.hardest = out.hardest.slice(0, 12);
  return out;
}

/* one row per lesson, for a spreadsheet */
export function contentCsvRows(report) {
  const out = [];
  for (const p of report.products) for (const l of p.lessons) {
    out.push({ product: p.name, lesson: l.n, title: l.title, members_started_product: p.started, members_completed_lesson: l.completed,
      share_of_started: p.started ? Math.round((l.completed / p.started) * 100) + '%' : '', opened_in_window: l.opened_window, completed_in_window: l.completed_window,
      quiz_first_answers: l.quiz_answers, quiz_wrong_first_try: l.quiz_wrong });
  }
  return out;
}
