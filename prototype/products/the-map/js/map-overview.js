/**
 * THE MAP — PRODUCT OVERVIEW VIEWER
 * ---------------------------------
 * Presents the supplied product-overview document as a native slideshow.
 * The document itself is untouched: each slide is a faithful rendering of
 * a page of the original PDF (assets/docs/the-map-overview/<lang>/pNN.jpg,
 * produced by scripts/render-overview-pages.py), and the original file is
 * one tap away via "Open the PDF". Rendering pages as images is what lets
 * the deck work on mobile browsers, which cannot display PDFs inline.
 *
 * Language: the English or Bahasa Indonesia rendering is chosen from the
 * site's language setting and swapped live if the visitor changes language
 * while the viewer is open.
 *
 * Navigation: Back / Next, dots, ← → keys, swipe, Esc. Mobile: tap the
 * slide to zoom (pan by scrolling), fullscreen where the browser allows.
 */
(function () {
  'use strict';

  var PAGES = window.MT_MAP_OVERVIEW_PAGES || {};
  var PDF = { en: '../../assets/docs/the-map-overview-en.pdf', id: '../../assets/docs/the-map-overview-id.pdf' };

  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function T(en, id) { return lang() === 'id' ? id : en; }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function bi(tag, cls, en, id) {
    var n = el(tag, cls);
    n.setAttribute('data-en', en); n.setAttribute('data-id', id);
    n.textContent = T(en, id);
    return n;
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }

  var css = '' +
  '#mapOverview{position:fixed;inset:0;z-index:1250;display:none;background:#050A12;color:#F0EDE8}' +
  '#mapOverview.open{display:flex;flex-direction:column}' +
  '#mapOverview *{box-sizing:border-box}' +
  '#mapOverview .mo-top{display:flex;align-items:center;gap:10px;padding:10px 18px;' +
    'border-bottom:1px solid rgba(201,168,76,.22);background:rgba(5,10,18,.92)}' +
  '#mapOverview .mo-kick{font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#C9A84C;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}' +
  '#mapOverview .mo-count{margin-left:auto;font-size:12px;font-weight:700;letter-spacing:.14em;color:rgba(240,237,232,.62);font-variant-numeric:tabular-nums;white-space:nowrap}' +
  '#mapOverview .mo-ib{width:38px;height:38px;flex:none;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;border:1px solid rgba(201,168,76,.35);background:none;color:#F0EDE8;cursor:pointer;text-decoration:none}' +
  '#mapOverview .mo-ib:hover,#mapOverview .mo-ib:focus-visible{border-color:#C9A84C;outline:none}' +
  '#mapOverview .mo-ib svg{width:17px;height:17px}' +
  '#mapOverview .mo-stage{flex:1;min-height:0;position:relative;display:flex;align-items:center;justify-content:center;padding:18px;overflow:hidden;' +
    'background:radial-gradient(ellipse at 50% 40%,rgba(201,168,76,.10),transparent 60%),#050A12}' +
  '#mapOverview .mo-stage.zoom{display:block;overflow:auto;padding:0;-webkit-overflow-scrolling:touch}' +
  '#mapOverview .mo-frame{position:relative;max-width:100%;max-height:100%;aspect-ratio:16/9;border-radius:10px;overflow:hidden;' +
    'box-shadow:0 30px 80px rgba(0,0,0,.65),0 0 0 1px rgba(201,168,76,.28);background:#0a0f18}' +
  '#mapOverview .mo-stage.zoom .mo-frame{max-width:none;max-height:none;width:200%;border-radius:0;box-shadow:none;aspect-ratio:auto}' +
  '#mapOverview .mo-img{display:block;width:100%;height:100%;object-fit:contain;opacity:0;transition:opacity .35s ease}' +
  '#mapOverview .mo-img.on{opacity:1}' +
  '#mapOverview .mo-stage.zoom .mo-img{height:auto}' +
  '@media(prefers-reduced-motion:reduce){#mapOverview .mo-img{transition:none}}' +
  '#mapOverview .mo-tap{position:absolute;left:50%;bottom:10px;transform:translateX(-50%);font-size:11px;letter-spacing:.08em;text-transform:uppercase;' +
    'color:rgba(240,237,232,.85);background:rgba(5,10,18,.72);border:1px solid rgba(201,168,76,.35);border-radius:999px;padding:5px 11px;pointer-events:none;display:none}' +
  '#mapOverview .mo-foot{display:flex;align-items:center;gap:12px;padding:10px 18px calc(10px + env(safe-area-inset-bottom,0px));' +
    'border-top:1px solid rgba(201,168,76,.22);background:rgba(5,10,18,.92)}' +
  '#mapOverview .mo-btn{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:10px 18px;border-radius:999px;font-family:inherit;font-weight:800;font-size:13.5px;cursor:pointer;border:1px solid rgba(201,168,76,.45);background:none;color:#F0EDE8;white-space:nowrap}' +
  '#mapOverview .mo-btn:hover{border-color:#C9A84C}' +
  '#mapOverview .mo-btn:disabled{opacity:.35;cursor:default}' +
  '#mapOverview .mo-btn.gold{background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);color:#10131B;border-color:transparent;box-shadow:0 6px 22px rgba(201,168,76,.32)}' +
  '#mapOverview .mo-btn.gold.cta{animation:moBreath 3.2s ease-in-out infinite}' +
  '@keyframes moBreath{0%,100%{box-shadow:0 6px 22px rgba(201,168,76,.32)}50%{box-shadow:0 8px 34px rgba(201,168,76,.6)}}' +
  '@media(prefers-reduced-motion:reduce){#mapOverview .mo-btn.gold.cta{animation:none}}' +
  '#mapOverview .mo-btn:focus-visible,#mapOverview .mo-dot:focus-visible{outline:2px solid #F0D878;outline-offset:3px}' +
  '#mapOverview .mo-dots{margin:0 auto;display:flex;gap:8px;align-items:center}' +
  '#mapOverview .mo-dot{width:9px;height:9px;border-radius:999px;border:0;padding:0;background:rgba(240,237,232,.28);cursor:pointer;transition:width .25s,background .25s}' +
  '#mapOverview .mo-dot.on{width:28px;background:linear-gradient(90deg,#C9A84C,#F0D878)}' +
  '#mapOverview .mo-hint{font-size:11px;color:rgba(240,237,232,.45);letter-spacing:.06em;white-space:nowrap}' +
  '@media(max-width:640px){' +
    '#mapOverview .mo-top{padding:8px 12px;gap:8px}' +
    '#mapOverview .mo-count{margin-left:0}' +
    '#mapOverview .mo-stage{padding:10px}' +
    '#mapOverview .mo-frame{border-radius:8px}' +
    '#mapOverview .mo-tap{display:block}' +
    '#mapOverview .mo-stage.zoom .mo-tap{display:none}' +
    '#mapOverview .mo-foot{padding:8px 12px calc(8px + env(safe-area-inset-bottom,0px));gap:8px}' +
    '#mapOverview .mo-btn{padding:10px 14px;font-size:13px}' +
    '#mapOverview .mo-hint{display:none}' +
  '}';

  var ICON = {
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    full: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
    pdf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5M12 11v6m-3-3 3 3 3-3"/></svg>'
  };

  var root = null, stage = null, frame = null, imgs = [], count = null, dots = null, prevB = null, nextB = null, pdfLink = null, tap = null;
  var cur = 0, curLang = null, opener = null;

  function pages() { return PAGES[lang()] || PAGES.en || []; }

  function build() {
    if (root) return;
    var st = document.createElement('style');
    st.id = 'mapOverviewCss'; st.textContent = css;
    document.head.appendChild(st);

    root = el('div'); root.id = 'mapOverview';
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true');
    root.setAttribute('aria-label', 'The Map product overview');

    var top = el('div', 'mo-top');
    top.appendChild(bi('span', 'mo-kick', 'The Map · Product overview', 'The Map · Ringkasan produk'));
    count = el('span', 'mo-count');
    top.appendChild(count);
    var fs = el('button', 'mo-ib', ICON.full);
    fs.setAttribute('aria-label', 'Fullscreen'); fs.title = T('Fullscreen', 'Layar penuh');
    fs.addEventListener('click', function () {
      try {
        if (document.fullscreenElement) document.exitFullscreen();
        else if (root.requestFullscreen) root.requestFullscreen();
      } catch (e) {}
    });
    top.appendChild(fs);
    pdfLink = el('a', 'mo-ib', ICON.pdf);
    pdfLink.target = '_blank'; pdfLink.rel = 'noopener';
    pdfLink.setAttribute('aria-label', 'Open the original PDF'); pdfLink.title = T('Open the PDF', 'Buka PDF');
    top.appendChild(pdfLink);
    var x = el('button', 'mo-ib', ICON.x);
    x.setAttribute('aria-label', 'Close');
    x.addEventListener('click', close);
    top.appendChild(x);

    stage = el('div', 'mo-stage');
    frame = el('div', 'mo-frame');
    stage.appendChild(frame);
    tap = bi('span', 'mo-tap', 'Tap to zoom', 'Ketuk untuk perbesar');
    stage.appendChild(tap);
    frame.addEventListener('click', function () {
      if (window.innerWidth > 640) return;
      stage.classList.toggle('zoom');
    });

    var foot = el('div', 'mo-foot');
    prevB = el('button', 'mo-btn');
    prevB.innerHTML = '<span aria-hidden="true">←</span> ';
    prevB.appendChild(bi('span', null, 'Back', 'Kembali'));
    prevB.addEventListener('click', function () { go(cur - 1); });
    dots = el('div', 'mo-dots'); dots.setAttribute('role', 'tablist');
    nextB = el('button', 'mo-btn gold');
    nextB.addEventListener('click', function () {
      if (cur < pages().length - 1) go(cur + 1);
      else startModule();
    });
    foot.appendChild(prevB); foot.appendChild(dots);
    foot.appendChild(bi('span', 'mo-hint', '← → keys · Esc to close', 'Tombol ← → · Esc untuk menutup'));
    foot.appendChild(nextB);

    root.appendChild(top); root.appendChild(stage); root.appendChild(foot);
    document.body.appendChild(root);

    document.addEventListener('keydown', function (e) {
      if (!root.classList.contains('open')) return;
      if (e.key === 'Escape') { if (document.fullscreenElement) { try { document.exitFullscreen(); } catch (er) {} } close(); }
      else if (e.key === 'ArrowRight') go(cur + 1);
      else if (e.key === 'ArrowLeft') go(cur - 1);
    });
    var sx = null, sy = null;
    stage.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      if (sx == null || stage.classList.contains('zoom')) { sx = sy = null; return; }
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 56 && Math.abs(dx) > Math.abs(dy) * 1.4) go(dx < 0 ? cur + 1 : cur - 1);
      sx = sy = null;
    }, { passive: true });
    /* follow the site language toggle while open */
    document.querySelectorAll('.ctl button, button[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () { setTimeout(function () { if (root.classList.contains('open')) mount(); }, 60); });
    });
  }

  /* (re)build the slide images and dots for the current language */
  function mount() {
    var L = lang();
    if (curLang === L && imgs.length) { go(cur); return; }
    curLang = L;
    var P = pages();
    frame.querySelectorAll('.mo-img').forEach(function (n) { n.remove(); });
    imgs = P.map(function (p, i) {
      var im = document.createElement('img');
      im.className = 'mo-img';
      im.alt = T('Product overview, page ', 'Ringkasan produk, halaman ') + (i + 1);
      im.width = p.w; im.height = p.h;
      im.decoding = 'async';
      im.loading = 'eager';
      if (i > 0) im.style.display = 'none';
      frame.appendChild(im);
      return im;
    });
    dots.innerHTML = '';
    P.forEach(function (_, k) {
      var d = el('button', 'mo-dot');
      d.setAttribute('role', 'tab'); d.setAttribute('aria-label', 'Page ' + (k + 1));
      d.addEventListener('click', function () { go(k); });
      dots.appendChild(d);
    });
    pdfLink.href = PDF[L];
    pdfLink.title = T('Open the PDF', 'Buka PDF');
    go(Math.min(cur, P.length - 1));
  }

  function load(i) {
    var P = pages();
    if (i < 0 || i >= P.length || !imgs[i]) return;
    if (!imgs[i].getAttribute('src')) imgs[i].src = P[i].src;
  }

  function go(k) {
    var P = pages();
    if (!P.length) return;
    if (k < 0 || k > P.length - 1) return;
    cur = k;
    stage.classList.remove('zoom');
    stage.scrollTop = 0; stage.scrollLeft = 0;
    load(cur); load(cur + 1); load(cur - 1);
    imgs.forEach(function (im, n) {
      im.style.display = n === cur ? 'block' : 'none';
      im.classList.toggle('on', n === cur);
    });
    if (!imgs[cur].classList.contains('on')) imgs[cur].classList.add('on');
    dots.querySelectorAll('.mo-dot').forEach(function (d, n) {
      d.classList.toggle('on', n === cur);
      d.setAttribute('aria-selected', n === cur ? 'true' : 'false');
    });
    count.textContent = pad(cur + 1) + ' / ' + pad(P.length);
    prevB.disabled = cur === 0;
    var last = cur === P.length - 1;
    nextB.className = 'mo-btn gold' + (last ? ' cta' : '');
    nextB.innerHTML = '';
    nextB.appendChild(bi('span', null, last ? 'Start Module 1' : 'Next', last ? 'Mulai Modul 1' : 'Lanjut'));
    nextB.insertAdjacentHTML('beforeend', ' <span aria-hidden="true">→</span>');
  }

  function open(fromEl) {
    build();
    opener = fromEl || document.activeElement;
    root.classList.add('open');
    document.body.classList.add('lms-lock');
    cur = 0;
    mount();
    root.querySelector('.mo-ib[aria-label="Close"]').focus();
  }
  function close() {
    if (!root) return;
    root.classList.remove('open');
    document.body.classList.remove('lms-lock');
    if (opener && opener.focus) { try { opener.focus(); } catch (e) {} }
  }
  /* the deck's last action is the hero's first action */
  function startModule() {
    close();
    var b = document.querySelector('.course-actions [data-goto-module="1"]') || document.querySelector('[data-goto-module="1"]');
    if (b) b.click();
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-map-overview]');
    if (!b) return;
    e.preventDefault();
    open(b);
  });

  window.MT_MAP_OVERVIEW = { open: open, close: close, go: go };
})();
