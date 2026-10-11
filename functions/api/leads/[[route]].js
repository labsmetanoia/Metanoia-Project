/**
 * Lead capture. Every submission is validated, stored with its consent record,
 * acknowledged by e-mail when a provider is configured, and announced to the
 * team. The page shows success only after this returns 2xx with the stored id.
 *
 *   POST /api/leads/mentor       mentor application
 *   POST /api/leads/enterprise   discovery-call inquiry
 *   POST /api/leads/newsletter   newsletter sign-up (double opt-in when mail exists)
 *   GET  /api/leads/newsletter/confirm?token=   → 302 /?subscribed=1
 */
import { json, fail, readJson, sameOrigin, rateLimit, clientIp, isEmail, normEmail, clip, localeOf, newId, nowIso,
  randomToken, sha256 } from '../../../server/lib/http.js';
import { mailMentorReceived, mailEnterpriseReceived, mailNewsletterConfirm, mailLeadNotify } from '../../../server/lib/mail.js';

const CONSENT_VERSIONS = { terms_version: '1.0-draft', privacy_version: '1.0-draft' };

function consentOf(body, method) {
  return { ...CONSENT_VERSIONS, marketing: body.marketing === true, consented_at: nowIso(), method };
}

async function store(env, kind, { email, name, payload, consent, locale, source_page }) {
  const id = newId();
  const now = nowIso();
  await env.DB.prepare('INSERT INTO leads (id, kind, email, name, payload_json, consent_json, status, locale, source_page, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(id, kind, email, name || null, JSON.stringify(payload), JSON.stringify(consent), 'new', locale, source_page || null, now, now).run();
  return id;
}

export async function onRequestGet({ request, env, params }) {
  const route = (params.route || []).join('/');
  if (!env.DB) return fail(503, 'leads not configured');
  if (route === 'newsletter/confirm') {
    const raw = new URL(request.url).searchParams.get('token') || '';
    const site = env.SITE_URL || new URL(request.url).origin;
    if (raw.length < 20) return Response.redirect(site + '/?subscribed=0', 302);
    const h = await sha256(raw);
    const row = await env.DB.prepare('SELECT * FROM tokens WHERE token_hash = ? AND kind = ? AND used_at IS NULL AND expires_at > ?').bind(h, 'newsletter', nowIso()).first();
    if (!row) return Response.redirect(site + '/?subscribed=0', 302);
    await env.DB.prepare('UPDATE tokens SET used_at = ? WHERE token_hash = ?').bind(nowIso(), h).run();
    await env.DB.prepare("UPDATE leads SET status = 'confirmed', confirmed_at = ?, updated_at = ? WHERE id = ?").bind(nowIso(), nowIso(), row.lead_id).run();
    return Response.redirect(site + '/?subscribed=1', 302);
  }
  return fail(404, 'unknown route');
}

export async function onRequestPost({ request, env, params }) {
  const route = (params.route || []).join('/');
  if (!env.DB) return fail(503, 'leads not configured');
  if (!sameOrigin(request)) return fail(403, 'origin');
  const ip = clientIp(request);
  if (!(await rateLimit(env, 'lead:' + ip, 20, 3600))) return fail(429, 'too many submissions');
  const body = (await readJson(request)) || {};
  if (body._gotcha) return json({ ok: true, id: 'ok' });            /* honeypot: swallow silently */
  const email = normEmail(body.email);
  if (!isEmail(email)) return fail(400, 'valid e-mail required', { field: 'email' });
  const locale = localeOf(body.locale);
  const source_page = clip(body.source_page, 300);

  if (route === 'mentor') {
    const name = clip(body.name, 80);
    const p = {
      name, linkedin: clip(body.linkedin, 200), expertise: clip(body.expertise, 200), years: clip(body.years, 10),
      role: clip(body.role, 120), company: clip(body.company, 120), languages: clip(body.languages, 120),
      availability: clip(body.availability, 60), motivation: clip(body.motivation, 2000), audience: clip(body.audience, 60)
    };
    if (!name) return fail(400, 'name required', { field: 'name' });
    if (!p.expertise) return fail(400, 'expertise required', { field: 'expertise' });
    if (!/^\d{1,2}$/.test(p.years)) return fail(400, 'years of experience required', { field: 'years' });
    if (p.linkedin && !/^https?:\/\/([a-z0-9-]+\.)?linkedin\.com\//i.test(p.linkedin)) return fail(400, 'LinkedIn URL must be a linkedin.com link', { field: 'linkedin' });
    if (body.terms !== true) return fail(400, 'terms must be accepted', { field: 'terms' });
    const id = await store(env, 'mentor', { email, name, payload: p, consent: consentOf(body, 'mentor-application'), locale, source_page });
    const ack = await mailMentorReceived(env, { to: email, name, id, locale });
    await mailLeadNotify(env, { id, kind: 'mentor', email, name, payload: p, source_page });
    return json({ ok: true, id, confirmation_email: ack.sent }, 201);
  }

  if (route === 'enterprise') {
    const name = clip(body.name, 80), company = clip(body.company, 120);
    if (!name) return fail(400, 'name required', { field: 'name' });
    if (!company) return fail(400, 'company required', { field: 'company' });
    const p = { name, company, role: clip(body.role, 120), cohort_size: clip(body.cohort_size, 40), interest: clip(body.interest, 80), message: clip(body.message, 3000), language: locale };
    const id = await store(env, 'enterprise', { email, name, payload: p, consent: consentOf(body, 'enterprise-form'), locale, source_page });
    const ack = await mailEnterpriseReceived(env, { to: email, name, id, locale });
    await mailLeadNotify(env, { id, kind: 'enterprise', email, name, payload: p, source_page });
    return json({ ok: true, id, confirmation_email: ack.sent }, 201);
  }

  if (route === 'newsletter') {
    if (body.consent !== true) return fail(400, 'consent required', { field: 'consent' });
    const dup = await env.DB.prepare("SELECT id, status FROM leads WHERE kind = 'newsletter' AND email = ? ORDER BY created_at DESC LIMIT 1").bind(email).first();
    if (dup && dup.status === 'confirmed') return json({ ok: true, id: dup.id, already: true, confirmation_email: false });
    const consent = { ...CONSENT_VERSIONS, marketing: true, consented_at: nowIso(), method: 'newsletter-form' };
    const id = dup ? dup.id : await store(env, 'newsletter', { email, name: null, payload: { email }, consent, locale, source_page });
    let sent = false;
    if (env.RESEND_API_KEY) {
      const raw = randomToken(32);
      await env.DB.prepare('INSERT INTO tokens (token_hash, kind, email, lead_id, created_at, expires_at) VALUES (?, ?, ?, ?, ?, ?)')
        .bind(await sha256(raw), 'newsletter', email, id, nowIso(), new Date(Date.now() + 72 * 3600 * 1000).toISOString()).run();
      const site = env.SITE_URL || new URL(request.url).origin;
      sent = (await mailNewsletterConfirm(env, { to: email, url: `${site}/api/leads/newsletter/confirm?token=${raw}`, locale })).sent;
    }
    return json({ ok: true, id, confirmation_email: sent, double_opt_in: !!env.RESEND_API_KEY }, 201);
  }

  return fail(404, 'unknown route');
}
