/* Metanoia Labs: install as an app.
 *
 * Registers the service worker (sw.js at the site root, the same one js/mob-footer.js registers on the
 * public pages) and, when the browser says the site can be installed, reveals every element marked
 * `data-install-app`. A click on one shows the browser's own install prompt. Nothing is shown where
 * installing is not possible (already installed, unsupported browser, private window).
 *
 *   <button type="button" data-install-app hidden data-en="Install app" data-id="Pasang aplikasi">Install app</button>
 */
(function () {
  'use strict';
  if (window.MT_INSTALL) return;
  var deferred = null;
  function targets() { return [].slice.call(document.querySelectorAll('[data-install-app]')); }
  function show(on) { targets().forEach(function (el) { el.hidden = !on; }); }
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferred = e; show(true); });
  window.addEventListener('appinstalled', function () { deferred = null; show(false); });
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-install-app]'); if (!t) return;
    e.preventDefault();
    if (!deferred) return;
    deferred.prompt();
    (deferred.userChoice || Promise.resolve()).then(function () { deferred = null; show(false); });
  });
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    var reg = function () { try { navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(function () {}); } catch (e) {} };
    if (document.readyState === 'complete') reg(); else window.addEventListener('load', reg);
  }
  window.MT_INSTALL = { available: function () { return !!deferred; } };
})();
