/* See It Work — folder tabs for the Career Portal preview.
   Switching tabs replays the scorecard animation; the page's reveal observer
   (adds .revealed) starts the first one. Keyboard: arrows move between tabs. */
(function () {
  'use strict';
  document.querySelectorAll('.siw-portal').forEach(function (portal) {
    var tabs = [].slice.call(portal.querySelectorAll('.siw-tab'));
    var panels = [].slice.call(portal.querySelectorAll('.siw-panel'));
    function go(i, focus) {
      tabs.forEach(function (t, j) { t.classList.toggle('act', j === i); t.setAttribute('aria-selected', j === i ? 'true' : 'false'); t.tabIndex = j === i ? 0 : -1; });
      panels.forEach(function (p, j) {
        p.classList.remove('go');
        p.classList.toggle('act', j === i);
        if (j === i) requestAnimationFrame(function () { requestAnimationFrame(function () { p.classList.add('go'); }); });
      });
      if (focus) tabs[i].focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { go(i, false); });
      t.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') go((i + 1) % tabs.length, true); if (e.key === 'ArrowLeft') go((i - 1 + tabs.length) % tabs.length, true); });
    });
    /* first run when the portal scrolls into view */
    var started = false;
    function start() {
      if (started) return; started = true;
      /* reveal the portal and its siblings ourselves — the page observer may
         skip elements injected after it ran, and the ring/bars key off .go */
      var sec = portal.closest('section') || portal.parentNode;
      sec.querySelectorAll('.siw-path,.siw-portal,.siw-trust,.siw-cta,.how-head').forEach(function (el) { el.classList.add('revealed'); });
      var i = tabs.findIndex(function (t) { return t.classList.contains('act'); });
      go(i < 0 ? 0 : i, false);
    }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { start(); io.disconnect(); } }); }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
      io.observe(portal);
    } else start();
  });
})();
