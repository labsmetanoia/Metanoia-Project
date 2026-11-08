/**
 * Career Map results by e-mail (Tier 0 item 0.4).
 *
 *   POST /api/results            { name?, email, linkedin?, weekly_email?, total, band, dims, profile, answers, locale?, source_page?, turnstile? }
 *                                → stores a lead of kind "results" with the scores and answers, e-mails the summary
 *                                  with a signed retrieval link, answers { ok, id, url, confirmation_email }
 *   GET  /api/results/:id?sig=   → { ok, result } for the signed link; the page rebuilds the full report from it.
 *                                  410 once the link is older than RESULT_DAYS. Never returns the e-mail address.
 *
 * The signature is an HMAC of the id under SESSION_SECRET, so no token row is needed
 * and the link cannot be guessed. Marketing consent (weekly e-mail) is recorded on the
 * lead; the newsletter itself still goes through its own double opt-in.
 */
import { json, fail, readJson, sameOrigin, rateLimit, clientIp, isEmail, normEmail, clip, localeOf, newId, nowIso,
  hmacHex, timingSafeEqual, verifyTurnstile } from '../../../server/lib/http.js';
import { mailResults } from '../../../server/lib/mail.js';

const CONSENT_VERSIONS = { terms_version: '1.0-draft', privacy_version: '1.0-draft' };
const RESULT_DAYS = 90;
const DIM_KEYS = ['ci', 'ps', 'ir', 'nc', 'cm'];
const DIM_NAMES = { ci: 'Career Intelligence', ps: 'Profile Strength', ir: 'Interview Readiness', nc: 'Network Capital', cm: 'Career Mindset' };
const BANDS = ['Summit Ready', 'High Camp', 'Mid-Mountain', 'First Ascent', 'Base Camp'];
const enc = new TextEncoder();

async function signature(env, id) {
  return (await hmacHex(env.SESSION_SECRET, 'results:' + id)).slice(0, 32);
}

function smallJson(value, max) {
  if (!value || typeof value !== 'object') return null;
  const s = JSON.stringify(value);
  return s.length <= max ? s : null;
}

export async function onRequestPost({ request, env }) {
  if (!env.DB || !env.SESSION_SECRET) return fail(503, 'results not configured');
  if (!sameOrigin(request)) return fail(403, 'origin');
  const ip = clientIp(request);
  if (!(await rateLimit(env, 'results:' + ip, 10, 3600))) return fail(429, 'too many submissions');
  const body = (await readJson(request, 64 * 1024)) || {};
  if (body._gotcha) return json({ ok: true, id: 'ok' });
  const ts = await verifyTurnstile(env, body.turnstile, ip);
  if (!ts.ok) return fail(400, 'verification failed', { field: 'turnstile' });

  const email = normEmail(body.email);
  if (!isEmail(email)) return fail(400, 'valid e-mail required', { field: 'email' });
  const name = clip(body.name, 80) || null;
  const linkedin = clip(body.linkedin, 200) || null;
  if (linkedin && !/^https?:\/\/([a-z0-9-]+\.)?linkedin\.com\//i.test(linkedin)) return fail(400, 'LinkedIn URL must be a linkedin.com link', { field: 'linkedin' });
  const total = Number(body.total);
  if (!Number.isInteger(total) || total < 0 || total > 100) return fail(400, 'total must be 0 to 100', { field: 'total' });
  const band = BANDS.includes(body.band) ? body.band : null;
  if (!band) return fail(400, 'unknown band', { field: 'band' });
  const dims = {};
  for (const k of DIM_KEYS) {
    const v = Number(body.dims && body.dims[k]);
    if (!Number.isInteger(v) || v < 0 || v > 15) return fail(400, 'dimension scores must be 0 to 15', { field: 'dims' });
    dims[k] = v;
  }
  const profile = smallJson(body.profile, 2000);
  const answers = smallJson(body.answers, 4000);
  if (!answers) return fail(400, 'answers required', { field: 'answers' });
  const locale = localeOf(body.locale);
  const source_page = clip(body.source_page, 300) || null;

  const id = newId();
  const now = nowIso();
  const payload = { name, linkedin, total, band, dims, profile: profile ? JSON.parse(profile) : null, answers: JSON.parse(answers) };
  const consent = { ...CONSENT_VERSIONS, marketing: body.weekly_email === true, consented_at: now, method: 'career-map-capture' };
  await env.DB.prepare('INSERT INTO leads (id, kind, email, name, payload_json, consent_json, status, locale, source_page, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(id, 'results', email, name, JSON.stringify(payload), JSON.stringify(consent), 'new', locale, source_page, now, now).run();

  const site = env.SITE_URL || new URL(request.url).origin;
  const url = `${site}/career-map-assessment?result=${id}&sig=${await signature(env, id)}`;
  const lines = DIM_KEYS.map(k => `${DIM_NAMES[k]}: ${dims[k]}/15`);
  const mail = await mailResults(env, { to: email, name, total, band, lines, url, days: RESULT_DAYS, locale });
  return json({ ok: true, id, url, confirmation_email: mail.sent }, 201);
}

export async function onRequestGet({ request, env, params }) {
  if (!env.DB || !env.SESSION_SECRET) return fail(503, 'results not configured');
  const id = clip((params.route || [])[0] || '', 64);
  const sig = new URL(request.url).searchParams.get('sig') || '';
  if (!id || sig.length !== 32) return fail(404, 'no such result');
  const want = await signature(env, id);
  if (!timingSafeEqual(enc.encode(sig), enc.encode(want))) return fail(404, 'no such result');
  const row = await env.DB.prepare("SELECT payload_json, locale, created_at FROM leads WHERE id = ? AND kind = 'results'").bind(id).first();
  if (!row) return fail(404, 'no such result');
  if (Date.now() - Date.parse(row.created_at) > RESULT_DAYS * 86400 * 1000) return fail(410, 'this link has expired');
  const p = JSON.parse(row.payload_json || '{}');
  return json({ ok: true, result: { id, name: p.name || null, total: p.total, band: p.band, dims: p.dims, profile: p.profile, answers: p.answers, locale: row.locale, created_at: row.created_at } });
}
