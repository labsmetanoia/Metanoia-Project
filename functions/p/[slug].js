/**
 * /p/<slug>: a member's public readiness profile (server/lib/profile.js; docs/21 N-06).
 *
 * The page itself is the static file profile.html. This Function puts the member's name into the title
 * and the link-preview tags, so a link pasted into WhatsApp or LinkedIn shows whose profile it is, and
 * hands the page its data so it draws without a second request. An address that is off or unknown gets
 * the same page with a 404 and its "not available" state. Never indexed.
 */
import { SLUG, manifestsFor, publicProfile } from '../../server/lib/profile.js';

const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
/* JSON inside a script element: nothing in it may close the element or start a comment */
const inline = o => JSON.stringify(o).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');

export async function onRequestGet({ request, env, params }) {
  const slug = String(params.slug || '');
  const shell = await env.ASSETS.fetch(new Request(new URL('/profile', request.url), { headers: { accept: 'text/html' } }));
  let html = await shell.text();
  let profile = null;
  if (env.DB && SLUG.test(slug)) { try { profile = await publicProfile(env, slug, await manifestsFor(request, env)); } catch (e) { profile = null; } }
  const site = (env.SITE_URL || new URL(request.url).origin).replace(/\/$/, '');
  const title = profile ? `${profile.name} · Readiness profile · Metanoia Labs` : 'Readiness profile · Metanoia Labs';
  const desc = profile ? `What ${profile.name} has completed on Metanoia Labs: Career Map band, certificates and lessons, read from the account.` : 'This profile is not available.';
  const head = `<title>${esc(title)}</title>\n<meta name="description" content="${esc(desc)}">\n<meta property="og:type" content="profile">\n<meta property="og:site_name" content="Metanoia Labs">\n<meta property="og:title" content="${esc(title)}">\n<meta property="og:description" content="${esc(desc)}">\n` +
    `<meta property="og:url" content="${esc(site + '/p/' + (profile ? slug : ''))}">\n<meta property="og:image" content="${esc(site)}/assets/bg/journey-start.jpg">\n<meta name="twitter:card" content="summary">\n` +
    `<script>window.MT_PROFILE=${inline({ slug: profile ? slug : null, profile })};</script>`;
  html = html.replace(/<title>[^<]*<\/title>\s*<meta name="description"[^>]*>/, head);
  const headers = new Headers(shell.headers);
  ['content-length', 'etag', 'last-modified', 'content-encoding'].forEach(h => headers.delete(h));
  headers.set('content-type', 'text/html; charset=utf-8');
  headers.set('cache-control', profile ? 'public, max-age=300' : 'no-store');
  headers.set('x-robots-tag', 'noindex, nofollow');
  return new Response(html, { status: profile ? 200 : 404, headers });
}
