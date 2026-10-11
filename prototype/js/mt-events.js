/**
 * MT.track(name, props) — first-party product events + optional GA4.
 *
 * Event names follow docs/13-event-dictionary.md: `area.object.action`
 * (lower-case, underscores). Events batch to /api/events when the API is
 * reachable (js/mt-api.js); otherwise they are dropped — never queued to a
 * third party by accident. GA4 loads only when data/analytics.js carries a
 * real Measurement ID and the visitor has not opted out.
 */
(function () {
  'use strict';
  if (window.MT && window.MT.track) return;
  var CFG = window.MT_ANALYTICS || {};
  var A = window.MT_API;
  var queue = [], timer = null, anon = null;

  function dnt() {
    try { if (navigator.doNotTrack === '1' || window.doNotTrack === '1') return true; } catch (e) {}
    try { return localStorage.getItem('mt-consent-analytics') === '0'; } catch (e) { return false; }
  }
  function anonId() {
    if (anon) return anon;
    try {
      anon = localStorage.getItem('mt-anon');
      if (!anon || !/^[A-Za-z0-9_-]{16,64}$/.test(anon)) {
        var a = new Uint8Array(18); (window.crypto || {}).getRandomValues ? crypto.getRandomValues(a) : a.forEach(function (_, i) { a[i] = Math.floor(Math.random() * 256); });
        anon = btoa(String.fromCharCode.apply(null, a)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
        localStorage.setItem('mt-anon', anon);
      }
    } catch (e) { anon = 'ephemeral_' + Math.random().toString(36).slice(2, 18); }
    return anon;
  }
  function audience() {
    try { return localStorage.getItem('mt-audience') || (JSON.parse(localStorage.getItem('metanoia_session') || 'null') || {}).audience || undefined; } catch (e) { return undefined; }
  }
  function page() { return location.pathname + location.hash.slice(0, 80); }

  /* GA4: real IDs only */
  var ga4 = typeof CFG.ga4 === 'string' && /^G-[A-Z0-9]{6,12}$/.test(CFG.ga4) ? CFG.ga4 : '';
  if (ga4 && !dnt() && !window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', ga4, { anonymize_ip: true });
    var s = document.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ga4; document.head.appendChild(s);
  }

  function flush(beacon) {
    if (!queue.length || !A) return;
    var batch = queue.splice(0, 50);
    var body = { anon_id: anonId(), audience: audience(), locale: A.locale(), events: batch };
    if (A.availableSync() === false) return;             /* known offline: drop quietly */
    if (beacon && navigator.sendBeacon) {
      try { navigator.sendBeacon(A.base + '/events', new Blob([JSON.stringify(body)], { type: 'application/json' })); return; } catch (e) {}
    }
    A.available().then(function (ok) { if (ok) A.post('/events', body, { keepalive: true }); });
  }
  function schedule() { if (!timer) timer = setTimeout(function () { timer = null; flush(false); }, 4000); }

  function track(name, props) {
    if (typeof name !== 'string') return;
    /* legacy snake_case names from the Career Map become `assessment.career_map.<action>` */
    if (name.indexOf('.') < 0) name = 'assessment.career_map.' + name.replace(/[^a-z0-9_]/gi, '_').toLowerCase();
    props = props && typeof props === 'object' ? props : {};
    if (window.gtag && ga4) { try { window.gtag('event', name.replace(/\./g, '_'), props); } catch (e) {} }
    if (dnt() || (CFG.firstParty === false)) return;
    queue.push({ name: name, props: props, ts: new Date().toISOString(), page: page() });
    if (queue.length >= 20) flush(false); else schedule();
    if (location.hostname === 'localhost' || location.protocol === 'file:') { try { console.log('[MT.track]', name, props); } catch (e) {} }
  }

  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') flush(true); });
  window.addEventListener('pagehide', function () { flush(true); });

  window.MT = window.MT || {};
  window.MT.track = track;
  window.MT.anonId = anonId;
  window.MT.flush = flush;
})();
