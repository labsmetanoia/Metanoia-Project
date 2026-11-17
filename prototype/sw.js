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

/* Reminders (docs/14 "Reminders"): a member who turned them on gets one notification on the mornings
   something is due. The message arrives encrypted for this browser; it carries a title, a few lines
   and the page to open. Nothing is shown unless the member allowed notifications for this site. */
self.addEventListener('push', event => {
  let m = {};
  try { m = event.data ? event.data.json() : {}; } catch (e) { m = {}; }
  const title = typeof m.title === 'string' && m.title ? m.title.slice(0, 80) : 'Metanoia Labs';
  event.waitUntil(self.registration.showNotification(title, {
    body: typeof m.body === 'string' ? m.body.slice(0, 400) : '',
    tag: typeof m.tag === 'string' ? m.tag.slice(0, 60) : 'mt',
    icon: '/assets/favicon-192.png', badge: '/assets/favicon-192.png',
    data: { url: typeof m.url === 'string' && m.url.charAt(0) === '/' && m.url.charAt(1) !== '/' ? m.url : '/portal' }
  }));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = new URL((event.notification.data && event.notification.data.url) || '/portal', self.location.origin).href;
  event.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) { if (c.url.split('#')[0] === url && 'focus' in c) return c.focus(); }
    return self.clients.openWindow(url);
  }));
});
