/**
 * Mail preferences reachable from a message itself.
 *
 *   GET  /api/mail/unsubscribe?k=user|lead&id=…&sig=…   one click from the footer link: stops lifecycle
 *                                                        mail for that account or Career Map result and
 *                                                        shows a short confirmation page
 *   POST /api/mail/unsubscribe?…                          the same, for mail clients that honour
 *                                                        List-Unsubscribe-Post (RFC 8058)
 *
 * The signature is an HMAC of the row id under SESSION_SECRET, so the link needs no stored
 * token and cannot be guessed. Service mail (sign-in links, results) is not affected.
 */
import { fail } from '../../../server/lib/http.js';
import { verifyUnsubscribe, unsubscribe } from '../../../server/lib/lifecycle.js';

const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function page(locale, ok, site) {
  const id = locale === 'id';
  const title = ok ? (id ? 'Kamu sudah berhenti berlangganan' : 'You are unsubscribed') : (id ? 'Tautan tidak dikenali' : 'Link not recognised');
  const body = ok
    ? (id ? 'Kami tidak akan lagi mengirim e-mail tindak lanjut atau ringkasan mingguan ke alamat ini. Pesan layanan, seperti tautan masuk dan hasil yang kamu minta, tetap dikirim.' : 'We will no longer send follow-ups or weekly summaries to this address. Service messages, such as sign-in links and results you ask for, still arrive.')
    : (id ? 'Tautan ini tidak valid atau sudah dipakai untuk catatan yang tidak ada lagi. Kamu bisa mengatur e-mail dari Pengaturan setelah masuk.' : 'This link is not valid, or the record it points to no longer exists. You can manage e-mail from Settings after signing in.');
  const html = `<!doctype html><html lang="${id ? 'id' : 'en'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${esc(title)} · Metanoia Labs</title>
<style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0B1120;color:#F5EFE6;font:16px/1.6 -apple-system,"Segoe UI",Roboto,sans-serif}main{max-width:460px;padding:40px 28px;border:1px solid rgba(201,168,76,.4);border-radius:18px;background:linear-gradient(180deg,rgba(15,21,35,.95),rgba(10,15,26,.98))}h1{font:600 26px/1.2 Georgia,"Times New Roman",serif;color:#F0D878;margin:0 0 14px}p{margin:0 0 18px;color:rgba(245,239,230,.82)}a{color:#E8C766}</style></head>
<body><main><h1>${esc(title)}</h1><p>${esc(body)}</p><p><a href="${esc(site)}/">Metanoia Labs</a> · <a href="${esc(site)}/settings">${id ? 'Pengaturan' : 'Settings'}</a></p></main></body></html>`;
  return new Response(html, { status: ok ? 200 : 404, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}

async function handle({ request, env, params }) {
  const route = (params.route || []).join('/');
  if (route !== 'unsubscribe') return fail(404, 'not found');
  if (!env.DB || !env.SESSION_SECRET) return fail(503, 'mail not configured');
  const url = new URL(request.url);
  const kind = url.searchParams.get('k') || '', id = (url.searchParams.get('id') || '').slice(0, 64), sig = url.searchParams.get('sig') || '';
  const site = (env.SITE_URL || url.origin).replace(/\/$/, '');
  if (!(await verifyUnsubscribe(env, kind, id, sig))) return page(localeFor(request), false, site);
  let locale = localeFor(request);
  try {
    const row = kind === 'user'
      ? await env.DB.prepare('SELECT locale FROM users WHERE id = ?').bind(id).first()
      : await env.DB.prepare("SELECT locale FROM leads WHERE id = ? AND kind = 'results'").bind(id).first();
    if (row && row.locale) locale = row.locale === 'id' ? 'id' : 'en';
    const ok = await unsubscribe(env, kind, id);
    if (request.method === 'POST') return new Response(ok ? 'unsubscribed' : 'not found', { status: ok ? 200 : 404, headers: { 'content-type': 'text/plain' } });
    return page(locale, ok || !!row, site);
  } catch (e) {
    return fail(500, 'could not update');
  }
}

function localeFor(request) {
  return /(^|,)\s*id\b/i.test(request.headers.get('accept-language') || '') ? 'id' : 'en';
}

export const onRequestGet = handle;
export const onRequestPost = handle;
