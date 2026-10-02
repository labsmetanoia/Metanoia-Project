/* Chapter I as a horizontal journey — see css/market-deck.css.
   Markup: .hz-deck > .hz-head (rail, counter, prev/next) + .hz-viewport > .hz-track > .hz-slide*
   Each slide carries data-hz (id) and data-en / data-id labels on its .hz-label span.
   API: window.MT_HZ.show(slideOrId, opts) — used by the persona layer's deep links. */
(function () {
  'use strict';
  var deck = document.querySelector('.hz-deck');
  if (!deck) return;
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var viewport = deck.querySelector('.hz-viewport'), track = deck.querySelector('.hz-track');
  var slides = [].slice.call(track.querySelectorAll(':scope > .hz-slide'));
  var steps = [].slice.call(deck.querySelectorAll('.hz-step'));
  var fill = deck.querySelector('.hz-fill'), count = deck.querySelector('.hz-count b'), total = deck.querySelector('.hz-count');
  var prev = deck.querySelector('.hz-prev'), next = deck.querySelector('.hz-next');
  var cur = 0, ro = null;
  function lang() { try { var l = localStorage.getItem('mtLang') || localStorage.getItem('mt-lang'); return l === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function labelOf(i) { var s = slides[i].querySelector('.hz-label'); return s ? (s.getAttribute('data-' + lang()) || s.textContent) : ''; }
  function fit() {
    var s = slides[cur]; if (!s) return;
    viewport.style.height = s.offsetHeight + 'px';
  }
  function reveal(s) { s.querySelectorAll('.reveal').forEach(function (r) { r.classList.add('revealed'); }); }
  function show(i, opts) {
    opts = opts || {};
    i = Math.max(0, Math.min(slides.length - 1, i));
    cur = i;
    slides.forEach(function (s, j) {
      s.classList.toggle('on', j === i);
      if (j === i) { s.removeAttribute('inert'); s.removeAttribute('aria-hidden'); } else { s.setAttribute('inert', ''); s.setAttribute('aria-hidden', 'true'); }
    });
    track.style.transform = 'translateX(' + (-i * 100) + '%)';
    steps.forEach(function (b, j) { b.classList.toggle('on', j === i); b.classList.toggle('done', j < i); b.setAttribute('aria-selected', j === i ? 'true' : 'false'); });
    if (fill) fill.style.width = (slides.length > 1 ? (i / (slides.length - 1)) * 84 : 0) + '%';
    if (count) count.textContent = i + 1;
    if (prev) prev.disabled = i === 0;
    if (next) next.disabled = i === slides.length - 1;
    reveal(slides[i]);
    /* next cues */
    slides.forEach(function (s, j) {
      var go = s.querySelector('.hz-go'); if (!go) return;
      var lab = go.querySelector('span'); var nxt = j + 1 < slides.length ? labelOf(j + 1) : null;
      if (nxt) { lab.textContent = (lang() === 'id' ? 'Berikutnya: ' : 'Next: ') + nxt; go.classList.remove('end'); }
      else { lab.textContent = lang() === 'id' ? 'Kembali ke awal bab' : 'Back to the start of the chapter'; go.classList.add('end'); }
    });
    if (ro) { ro.disconnect(); ro.observe(slides[i]); } else fit();
    if (opts.scroll !== false) {
      var top = deck.getBoundingClientRect().top + window.scrollY - 92;
      if (Math.abs(window.scrollY - top) > 40) window.scrollTo({ top: top, behavior: reduced ? 'auto' : 'smooth' });
    }
    if (opts.focus) deck.focus({ preventScroll: true });
  }
  if ('ResizeObserver' in window) { ro = new ResizeObserver(fit); }
  addEventListener('resize', fit);
  addEventListener('load', fit);
  if (total) total.insertAdjacentHTML('beforeend', '/' + slides.length);
  steps.forEach(function (b, i) { b.addEventListener('click', function () { show(i, { focus: true }); }); });
  if (prev) prev.addEventListener('click', function () { show(cur - 1, { focus: true }); });
  if (next) next.addEventListener('click', function () { show(cur + 1, { focus: true }); });
  slides.forEach(function (s, j) { var go = s.querySelector('.hz-go'); if (go) go.addEventListener('click', function () { show(j + 1 < slides.length ? j + 1 : 0, { focus: true }); }); });
  deck.tabIndex = -1;
  deck.addEventListener('keydown', function (e) {
    if (e.target.closest('input,textarea,select')) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); show(cur + 1, { focus: true }); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(cur - 1, { focus: true }); }
  });
  var sx = null, sy = null;
  viewport.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  viewport.addEventListener('touchend', function (e) {
    if (sx == null) return; var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; sx = null;
    if (Math.abs(dx) > 56 && Math.abs(dx) > Math.abs(dy) * 1.4) show(cur + (dx < 0 ? 1 : -1), {});
  });
  /* language toggle re-labels the cues */
  document.querySelectorAll('.ctl button,[data-lang]').forEach(function (b) { b.addEventListener('click', function () { setTimeout(function () { show(cur, { scroll: false }); }, 80); }); });
  window.MT_HZ = {
    show: function (ref, opts) {
      var i = typeof ref === 'number' ? ref : slides.indexOf(ref.closest ? ref.closest('.hz-slide') : null);
      if (i < 0) { i = slides.findIndex(function (s) { return s.getAttribute('data-hz') === ref; }); }
      if (i >= 0) show(i, opts || {});
      return i >= 0;
    },
    index: function () { return cur; }
  };
  /* deep link: #market-<slide> */
  var m = (location.hash || '').match(/^#market-([a-z-]+)$/);
  var startAt = 0;
  if (m) { var k = slides.findIndex(function (s) { return s.getAttribute('data-hz') === m[1]; }); if (k >= 0) startAt = k; }
  show(startAt, { scroll: !!m });
  setTimeout(fit, 400); setTimeout(fit, 1500);
})();
