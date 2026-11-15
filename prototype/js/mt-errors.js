/* Metanoia Labs: script errors from real browsers.
 *
 * Reports an uncaught error or an unhandled promise rejection to /api/events as
 * `site.script.error` (docs/13-event-dictionary.md), so a broken page shows up in the
 * admin page before a member has to report it. It sends the message, the script path,
 * the line and a short stack: no form content, no address, no cookie beyond the session.
 * At most five reports per page view, each message once. Nothing is sent when the visitor
 * declined analytics (mt-consent-analytics = 0) or on localhost file previews.
 */
(function () {
  'use strict';
  if (window.__mtErrors) return; window.__mtErrors = true;
  var sent = 0, seen = {};
  function report(msg, src, line, col, stack) {
    if (sent >= 5 || location.protocol === 'file:') return;
    try { if (localStorage.getItem('mt-consent-analytics') === '0') return; } catch (e) {}
    msg = String(msg || '').slice(0, 300);
    /* "Script error." is a cross-origin script the browser will not describe; extension noise is not ours */
    if (!msg || seen[msg] || /^Script error\.?$/i.test(msg) || /extension:\/\//.test(String(src) + String(stack))) return;
    seen[msg] = true; sent++;
    var anon = null;
    try { anon = localStorage.getItem('mt-anon'); } catch (e) {}
    if (!anon || !/^[A-Za-z0-9_-]{16,64}$/.test(anon)) anon = 'err_' + (Math.random().toString(36) + Math.random().toString(36)).replace(/[^a-z0-9]/g, '').slice(0, 20);
    var body = { anon_id: anon, locale: (document.documentElement.lang || 'en').slice(0, 2) === 'id' ? 'id' : 'en', events: [{
      name: 'site.script.error', page: location.pathname,
      props: { msg: msg, src: String(src || '').replace(location.origin, '').split('?')[0].slice(0, 200), line: line || 0, col: col || 0,
        stack: String(stack || '').replace(new RegExp(location.origin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), '').slice(0, 600), vw: window.innerWidth }
    }] };
    try {
      fetch('/api/events', { method: 'POST', keepalive: true, credentials: 'same-origin', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }).catch(function () {});
    } catch (e) {}
  }
  window.addEventListener('error', function (e) { if (e && e.message) report(e.message, e.filename, e.lineno, e.colno, e.error && e.error.stack); });
  window.addEventListener('unhandledrejection', function (e) { var r = e && e.reason; report(r && r.message ? r.message : r, '', 0, 0, r && r.stack); });
})();
