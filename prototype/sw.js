/* Metanoia Labs service worker.
   Repeat visits load fonts, images, versioned scripts and styles and lesson files from the device.
   Rules, in order:
     • never touches /api/, this file, or anything that is not a GET on this origin;
     • HTML, feeds and the sitemap are never cached here (the network decides what a page is);
     • a file with a build stamp (?v=…) or under /assets/ never changes under its name, so it is
       served from the cache first and fetched once;
     • every other script, style or JSON file is network-first, with the cached copy only as the
       offline fallback, so a new deploy is never masked by yesterday's copy;
     • films are left to the browser.
   Bump VERSION to drop every cached file on the next visit. */
const VERSION = 'mt-sw-v1';
const STATIC = /\.(?:woff2|woff|webp|avif|jpg|jpeg|png|svg|gif|ico|css|js|json|vtt)$/i;

self.addEventListener('install', () => { self.skipWaiting(); });
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (e) { return; }
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/') || url.pathname === '/sw.js') return;
  if (!STATIC.test(url.pathname)) return;
  const immutable = url.searchParams.has('v') || url.pathname.startsWith('/assets/');
  event.respondWith(handle(req, immutable));
});

async function handle(req, immutable) {
  const cache = await caches.open(VERSION);
  if (immutable) {
    const hit = await cache.match(req);
    if (hit) return hit;
    const res = await fetch(req);
    if (res.ok && res.type === 'basic') cache.put(req, res.clone()).catch(() => {});
    return res;
  }
  try {
    const res = await fetch(req);
    if (res.ok && res.type === 'basic') cache.put(req, res.clone()).catch(() => {});
    return res;
  } catch (e) {
    const hit = await cache.match(req);
    if (hit) return hit;
    throw e;
  }
}
