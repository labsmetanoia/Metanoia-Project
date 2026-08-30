/**
 * METANOIA LMS PLAYER — presentation layer
 * ----------------------------------------
 * Renders lessons declared in the content registries (data/lms/<slug>.js,
 * exposed as window.MT_LMS). The player owns UI, navigation, progress and
 * completion; the registries own every word of content. Replacing
 * placeholder material never requires touching this file.
 *
 * Progress model: localStorage 'mt-lms:<slug>' = { "1.1": true, ... }.
 * Sequential unlock: a lesson is accessible when every earlier lesson is
 * complete (demo mode unlocks everything, matching the host page).
 *
 * Access note: the host product pages gate on the session's auth flag
 * before this script runs. That gate — like all of this prototype — is
 * client-side and is NOT a security layer; see data/lms/README.md for the
 * production access-control plan.
 */
(function () {
  'use strict';

  var slug = (location.pathname.match(/products\/([a-z-]+)\//) || [])[1];
  if (!slug || !window.MT_LMS || !window.MT_LMS[slug]) return;
  var REG = window.MT_LMS[slug];
  var DEMO = new URLSearchParams(location.search).get('demo') === 'true';
  var KEY = 'mt-lms:' + slug;

  /* flat lesson list for prev/next across module boundaries */
  var FLAT = [];
  REG.modules.forEach(function (m) {
    m.lessons.forEach(function (l) { FLAT.push({ m: m, l: l }); });
  });

  function lang() {
    try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; }
  }
  function progress() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; }
  }
  function saveProgress(p) {
    try {
      localStorage.setItem(KEY, JSON.stringify(p));
      /* per-module completion summary, consumed by The Compass dashboard */
      var mods = {};
      REG.modules.forEach(function (m) {
        if (m.lessons.every(function (l) { return p[l.n]; })) mods[m.num] = true;
      });
      localStorage.setItem('mt-lms-mods:' + slug, JSON.stringify(mods));
    } catch (e) {}
  }
  function isDone(n) { return !!progress()[n]; }
  function flatIndex(n) {
    for (var i = 0; i < FLAT.length; i++) if (FLAT[i].l.n === n) return i;
    return -1;
  }
  function canAccess(i) {
    if (DEMO) return true;
    for (var k = 0; k < i; k++) if (!isDone(FLAT[k].l.n)) return false;
    return true;
  }
  function doneCount() {
    var p = progress(), c = 0;
    FLAT.forEach(function (x) { if (p[x.l.n]) c++; });
    return c;
  }

  /* bilingual text node: rendered in the current language, and carrying
     data-en/data-id so the host page's language switcher re-translates it */
  function bi(tag, cls, pair) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    if (pair) {
      el.setAttribute('data-en', pair.en);
      el.setAttribute('data-id', pair.id);
      el.innerHTML = pair[lang()];
    }
    return el;
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  /* ─── shell ─── */
  var root = el('div', 'lmsp');
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.innerHTML =
    '<div class="lmsp-top">' +
      '<button class="lmsp-railtoggle" aria-label="Course outline">' +
        '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg></button>' +
      '<button class="lmsp-back"><span aria-hidden="true">←</span> <span data-en="Back to Modules" data-id="Kembali ke Modul">Back to Modules</span></button>' +
      '<div class="lmsp-crumb"><div class="lc-prod"></div><div class="lc-les"></div></div>' +
      '<div class="lmsp-ctl">' +
        '<span class="lct-lang" role="group" aria-label="Language">' +
          '<button data-lms-lang="en">EN</button>' +
          '<button data-lms-lang="id">ID</button>' +
        '</span>' +
        '<button class="lct-theme" aria-label="Toggle theme">' +
          '<svg class="ic-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z"/></svg>' +
          '<svg class="ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7"/></svg>' +
        '</button>' +
      '</div>' +
      '<span class="lmsp-count"></span>' +
      '<div class="lmsp-bar"></div>' +
    '</div>' +
    '<div class="lmsp-main">' +
      '<nav class="lmsp-rail" aria-label="Course outline"></nav>' +
      '<div class="lmsp-content"><div class="lmsp-inner"></div></div>' +
    '</div>' +
    '<div class="lmsp-foot">' +
      '<button class="lms-nav-btn lms-prev"><span aria-hidden="true">←</span> <span data-en="Previous" data-id="Sebelumnya">Previous</span></button>' +
      '<button class="lms-nav-btn lms-next"><span data-en="Next" data-id="Berikutnya">Next</span> <span aria-hidden="true">→</span></button>' +
      '<button class="lms-complete"></button>' +
    '</div>';
  document.body.appendChild(root);

  var railEl = root.querySelector('.lmsp-rail');
  var innerEl = root.querySelector('.lmsp-inner');
  var contentEl = root.querySelector('.lmsp-content');
  var current = null;       /* flat index */
  var deckIndex = 0;        /* slide cursor for slide lessons */

  function applyPageLang() {
    /* let the host page's own switcher translate our data-en/data-id nodes */
    root.querySelectorAll('[data-en]').forEach(function (n) {
      n.innerHTML = n.getAttribute(lang() === 'id' ? 'data-id' : 'data-en');
    });
  }

  /* ─── outline rail ─── */
  function renderRail() {
    railEl.innerHTML = '';
    REG.modules.forEach(function (m) {
      var h = bi('h4', null, { en: 'Module ' + m.num + ' · ' + m.title.en, id: 'Modul ' + m.num + ' · ' + m.title.id });
      railEl.appendChild(h);
      m.lessons.forEach(function (l) {
        var i = flatIndex(l.n);
        var b = el('button', 'lr-item' + (isDone(l.n) ? ' done' : '') + (canAccess(i) ? '' : ' locked') + (current === i ? ' active' : ''));
        b.appendChild(el('span', 'lr-dot', isDone(l.n) ? '✓' : ''));
        b.appendChild(el('span', 'lr-num', l.n));
        b.appendChild(bi('span', null, l.title));
        b.addEventListener('click', function () { if (canAccess(i)) openLesson(i); });
        railEl.appendChild(b);
      });
    });
  }

  /* ─── content kinds ─── */
  function phNotice() {
    var d = el('div', 'lms-ph',
      '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round"><path d="M12 9v4M12 16.5v.5M10.3 3.8 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z"/></svg>');
    d.appendChild(bi('div', null, {
      en: '<b>Placeholder Learning Material</b> — this module structure is final, but the material below is placeholder content. Final educational content will be added in the next content-development phase.',
      id: '<b>Materi Pembelajaran Placeholder</b> — struktur modul ini final, tetapi materi di bawah adalah konten placeholder. Konten edukasi final akan ditambahkan pada fase pengembangan konten berikutnya.'
    }));
    return d;
  }

  function renderVideo(l, host) {
    var wrap = el('div', 'lms-video');
    var v = document.createElement('video');
    v.controls = true; v.preload = 'none'; v.playsInline = true;
    v.poster = REG.media.poster;
    v.src = REG.media.video;
    ['en', 'id'].forEach(function (lg) {
      var t = document.createElement('track');
      t.kind = 'subtitles'; t.srclang = lg;
      t.label = lg === 'en' ? 'English' : 'Bahasa Indonesia';
      t.src = REG.media.captions[lg];
      if (lg === lang()) t.default = true;
      v.appendChild(t);
    });
    wrap.appendChild(v);
    var langBar = el('div', 'lms-vc-lang');
    ['en', 'id'].forEach(function (lg) {
      var b = el('button', lg === lang() ? 'on' : '', lg === 'en' ? 'EN CC' : 'ID CC');
      b.addEventListener('click', function () {
        for (var i = 0; i < v.textTracks.length; i++) {
          v.textTracks[i].mode = (v.textTracks[i].language === lg) ? 'showing' : 'disabled';
        }
        langBar.querySelectorAll('button').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
      });
      langBar.appendChild(b);
    });
    wrap.appendChild(langBar);
    host.appendChild(wrap);
    if (l.videoNotes) {
      var p = el('div', 'lms-panel');
      p.appendChild(bi('h3', null, { en: 'While you watch', id: 'Saat menonton' }));
      var ul = el('ul');
      l.videoNotes.forEach(function (n) { ul.appendChild(bi('li', null, n)); });
      p.appendChild(ul);
      host.appendChild(p);
    }
  }

  function renderSections(l, host) {
    (l.sections || []).forEach(function (s, i) {
      var acc = el('div', 'lms-acc' + (i === 0 ? ' open' : ''));
      var btn = el('button');
      var head = el('span', 'acc-h');
      if (s.icon) head.appendChild(el('span', 'acc-ico', iconSvg(s.icon, 15)));
      head.appendChild(bi('span', null, s.h));
      btn.appendChild(head);
      btn.appendChild(el('span', 'pm', '+'));
      var body = el('div', 'acc-body');
      body.appendChild(bi('p', null, glossify(s.body, l.glossary)));
      btn.addEventListener('click', function () { acc.classList.toggle('open'); });
      acc.appendChild(btn); acc.appendChild(body);
      host.appendChild(acc);
    });
  }

  function renderSteps(l, host) {
    if (!l.steps) return;
    var box = el('div', 'lms-steps');
    l.steps.forEach(function (s) {
      var st = el('div', 'lms-step');
      st.appendChild(bi('h4', null, s.h));
      st.appendChild(bi('p', null, s.body));
      var rb = bi('button', 'reveal-btn', { en: 'Reveal debrief →', id: 'Buka pembahasan →' });
      var rbody = el('div', 'reveal-body');
      rbody.appendChild(bi('span', null, s.debrief || {
        en: 'Debrief — in the final content this step opens a guided scenario with model answers and coach commentary.',
        id: 'Pembahasan — pada konten final, langkah ini membuka skenario terpandu dengan contoh jawaban dan komentar mentor.'
      }));
      rb.addEventListener('click', function () { st.classList.add('revealed'); });
      st.appendChild(rb); st.appendChild(rbody);
      box.appendChild(st);
    });
    host.appendChild(box);
  }

  function renderDeck(l, host) {
    deckIndex = 0;
    var deck = el('div', 'lms-deck');
    deck.tabIndex = 0;
    var nav = el('div', 'lms-deck-nav');
    var prev = el('button', 'dn-btn', '←');
    var next = el('button', 'dn-btn', '→');
    var count = el('span', 'dn-count');
    var track = el('div', 'dn-track'); var fill = el('div', 'dn-fill');
    track.appendChild(fill);
    nav.appendChild(prev); nav.appendChild(count); nav.appendChild(track); nav.appendChild(next);

    function show(i) {
      deckIndex = Math.max(0, Math.min(l.slides.length - 1, i));
      deck.innerHTML = '';
      var s = l.slides[deckIndex];
      var sl = el('div', 'lms-slide');
      sl.appendChild(bi('div', 'sl-kicker', { en: 'Slide ' + (deckIndex + 1) + ' of ' + l.slides.length, id: 'Slide ' + (deckIndex + 1) + ' dari ' + l.slides.length }));
      sl.appendChild(bi('h3', null, s.h));
      var ul = el('ul');
      s.points.forEach(function (pt) { ul.appendChild(bi('li', null, pt)); });
      sl.appendChild(ul);
      deck.appendChild(sl);
      count.textContent = (deckIndex + 1) + ' / ' + l.slides.length;
      fill.style.width = ((deckIndex + 1) / l.slides.length * 100) + '%';
      prev.disabled = deckIndex === 0;
      next.disabled = deckIndex === l.slides.length - 1;
    }
    prev.addEventListener('click', function () { show(deckIndex - 1); });
    next.addEventListener('click', function () { show(deckIndex + 1); });
    deck.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { show(deckIndex - 1); e.preventDefault(); }
      if (e.key === 'ArrowRight') { show(deckIndex + 1); e.preventDefault(); }
    });
    var x0 = null;
    deck.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    deck.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (dx > 40) show(deckIndex - 1);
      if (dx < -40) show(deckIndex + 1);
      x0 = null;
    }, { passive: true });

    host.appendChild(deck);
    host.appendChild(nav);
    host.appendChild(bi('p', 'lms-deck-hint', {
      en: 'Tip: use ← → arrow keys or swipe to move between slides.',
      id: 'Tips: gunakan tombol panah ← → atau geser untuk berpindah slide.'
    }));
    show(0);
    deck.focus({ preventScroll: true });
  }

  function renderVisual(l, host) {
    var fig = el('div', 'lms-fig');
    var img = document.createElement('img');
    img.src = REG.media.visual;
    img.alt = '';
    img.loading = 'lazy';
    fig.appendChild(img);
    var panel = null, seen = {};
    var prog = bi('p', 'lms-hs-progress', { en: 'Explore all 4 points on the diagram.', id: 'Jelajahi 4 titik pada diagram.' });
    function updateProg() {
      var c = Object.keys(seen).length;
      prog.setAttribute('data-en', 'Explored ' + c + ' of ' + l.hotspots.length + ' points.');
      prog.setAttribute('data-id', 'Menjelajahi ' + c + ' dari ' + l.hotspots.length + ' titik.');
      prog.innerHTML = prog.getAttribute(lang() === 'id' ? 'data-id' : 'data-en');
    }
    l.hotspots.forEach(function (h, i) {
      var b = el('button', 'lms-hs', '+');
      b.style.left = h.x + '%';
      b.style.top = h.y + '%';
      b.setAttribute('aria-label', h.h[lang()]);
      b.addEventListener('click', function () {
        seen[i] = 1; b.classList.add('seen'); updateProg();
        if (panel) panel.remove();
        panel = el('div', 'lms-hs-panel');
        panel.appendChild(bi('h4', null, h.h));
        panel.appendChild(bi('p', null, h.body));
        fig.after(panel);
      });
      fig.appendChild(b);
    });
    host.appendChild(fig);
    host.appendChild(prog);
  }

  /* ─── rich blocks: show → explain → practice ───
     All of these render only when the registry declares them, so every
     product stays backward compatible. */

  /* small icon set for scenario cards and section headers */
  var ICONS = {
    eye: '<circle cx="12" cy="12" r="3.2"/><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/>',
    book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17.5H6.5A2.5 2.5 0 0 0 4 22Z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    chat: '<path d="M20 12a8 8 0 1 0-3.1 6.3L21 20l-1.3-3.6A7.9 7.9 0 0 0 20 12Z"/>',
    flag: '<path d="M5 21V4"/><path d="M5 5h11l-2.2 3.2L16 11.5H5"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.2 5.2l1.7 1.7M17.1 17.1l1.7 1.7M18.8 5.2l-1.7 1.7M6.9 17.1l-1.7 1.7"/>'
  };
  function iconSvg(name, size) {
    return '<svg viewBox="0 0 24 24" width="' + (size || 18) + '" height="' + (size || 18) + '" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || ICONS.book) + '</svg>';
  }

  /* inline glossary: wrap the first occurrence of each term in a body pair
     with a tooltip span, per language, so the host language switch keeps
     working through the data-en/data-id swap. */
  function glossify(pair, glossary) {
    if (!glossary || !glossary.length || !pair) return pair;
    var out = { en: pair.en, id: pair.id };
    ['en', 'id'].forEach(function (lg) {
      glossary.forEach(function (g) {
        var term = g.term[lg], def = g.def[lg];
        if (!term || !def || !out[lg]) return;
        var re = new RegExp('(^|[^\\w>])(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?![\\w<])', 'i');
        if (out[lg].indexOf('lms-term') !== -1 && out[lg].toLowerCase().indexOf(term.toLowerCase()) === -1) return;
        out[lg] = out[lg].replace(re, function (m, pre, hit) {
          return pre + '<span class="lms-term" tabindex="0" data-tip="' + def.replace(/"/g, '&quot;') + '">' + hit + '</span>';
        });
      });
    });
    return out;
  }

  /* scenario: {icon, title, img, name, body:[pair,...]} — an "In Focus"
     narrative card in the benchmark style: icon divider, image, story. */
  function renderScenario(l, host) {
    var sc = l.scenario;
    if (!sc) return;
    var wrap = el('div', 'lms-scenario');
    var div = el('div', 'lms-secdiv');
    div.appendChild(el('span', 'sd-line'));
    div.appendChild(el('span', 'sd-ico', iconSvg(sc.icon || 'eye', 20)));
    div.appendChild(el('span', 'sd-line'));
    wrap.appendChild(div);
    if (sc.title) wrap.appendChild(bi('h3', 'sc-title', sc.title));
    var row = el('div', 'sc-row');
    if (sc.img) {
      var im = document.createElement('img');
      im.src = sc.img; im.alt = ''; im.loading = 'lazy'; im.decoding = 'async';
      im.className = 'sc-img';
      row.appendChild(im);
    }
    var txt = el('div', 'sc-body');
    (sc.body || []).forEach(function (p) { txt.appendChild(bi('p', null, glossify(p, l.glossary))); });
    row.appendChild(txt);
    wrap.appendChild(row);
    host.appendChild(wrap);
  }

  /* mistakes: {items:[{h,fix}]} — common mistakes and how to avoid them */
  function renderMistakes(l, host) {
    if (!l.mistakes || !l.mistakes.items) return;
    var box = el('div', 'lms-mistakes');
    box.appendChild(bi('h3', null, l.mistakes.title || { en: 'Common mistakes — and the fix', id: 'Kesalahan umum — dan perbaikannya' }));
    l.mistakes.items.forEach(function (it) {
      var r = el('div', 'mk-row');
      var m = el('div', 'mk-m');
      m.appendChild(el('span', 'mk-x', '✗'));
      m.appendChild(bi('span', null, it.h));
      var f = el('div', 'mk-f');
      f.appendChild(el('span', 'mk-a', '→'));
      f.appendChild(bi('span', null, it.fix));
      r.appendChild(m); r.appendChild(f);
      box.appendChild(r);
    });
    host.appendChild(box);
  }

  /* diagram: {type:'flow'|'quad'|'ring'|'timeline'|'ladder', title, items:[{h,sub}], note} */
  function renderDiagram(l, host) {
    var d = l.diagram;
    if (!d || !d.items || !d.items.length) return;
    var box = el('div', 'lms-diagram t-' + (d.type || 'flow'));
    if (d.exhibit) box.appendChild(bi('p', 'ld-exhibit', d.exhibit));
    if (d.title) box.appendChild(bi('h3', 'ld-title', d.title));
    var stage = el('div', 'ld-stage');
    d.items.forEach(function (it, i) {
      if ((d.type === 'flow' || !d.type) && i > 0) stage.appendChild(el('span', 'ld-arrow', '→'));
      var node = el('div', 'ld-node');
      node.appendChild(el('span', 'ld-num', String(i + 1).padStart(2, '0')));
      node.appendChild(bi('b', null, it.h));
      if (it.sub) node.appendChild(bi('span', 'ld-sub', it.sub));
      stage.appendChild(node);
    });
    box.appendChild(stage);
    if (d.note) box.appendChild(bi('p', 'ld-note', d.note));
    if (d.longdesc) {
      var acc = el('div', 'ld-long');
      var btn = bi('button', 'ld-long-btn', { en: 'Long description', id: 'Deskripsi panjang' });
      btn.innerHTML += ' <span aria-hidden="true">▾</span>';
      var bodyEl = el('div', 'ld-long-body');
      bodyEl.appendChild(bi('p', null, d.longdesc));
      btn.setAttribute('aria-expanded', 'false');
      btn.addEventListener('click', function () {
        var open = acc.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      acc.appendChild(btn); acc.appendChild(bodyEl);
      box.appendChild(acc);
    }
    host.appendChild(box);
  }

  /* compare: [{tag,q,weak,strong,why}] — weak vs strong sample answers */
  function renderCompare(l, host) {
    if (!l.compare || !l.compare.length) return;
    l.compare.forEach(function (c) {
      var box = el('div', 'lms-compare');
      box.appendChild(bi('h3', null, c.tag || { en: 'Sample answers — weak vs strong', id: 'Contoh jawaban — lemah vs kuat' }));
      if (c.q) box.appendChild(bi('p', 'lc-q', c.q));
      var grid = el('div', 'lc-grid');
      var wk = el('div', 'lc-card lc-weak');
      wk.appendChild(bi('span', 'lc-lbl', { en: '✗ Weak', id: '✗ Lemah' }));
      wk.appendChild(bi('p', null, c.weak));
      var st = el('div', 'lc-card lc-strong');
      st.appendChild(bi('span', 'lc-lbl', { en: '✓ Strong', id: '✓ Kuat' }));
      st.appendChild(bi('p', null, c.strong));
      grid.appendChild(wk); grid.appendChild(st);
      box.appendChild(grid);
      if (c.why) {
        var why = el('div', 'lc-why');
        why.appendChild(bi('b', null, { en: 'Why it works', id: 'Mengapa berhasil' }));
        why.appendChild(bi('span', null, c.why));
        box.appendChild(why);
      }
      host.appendChild(box);
    });
  }

  /* listen: [{label, text}] — model answers spoken aloud on-device */
  function renderListen(l, host) {
    if (!l.listen || !l.listen.length || !window.speechSynthesis) return;
    var box = el('div', 'lms-listen');
    box.appendChild(bi('h3', null, { en: '🔊 Hear it spoken', id: '🔊 Dengarkan diucapkan' }));
    box.appendChild(bi('p', 'll-note', {
      en: 'Model answers read aloud by your browser — listen for pacing and landing, then say your own version.',
      id: 'Contoh jawaban dibacakan perambanmu — simak tempo dan pendaratannya, lalu ucapkan versimu sendiri.'
    }));
    l.listen.forEach(function (item) {
      var row = el('div', 'll-row');
      var btn = el('button', 'll-btn', '▶');
      btn.setAttribute('aria-label', 'Play');
      var lbl = bi('span', 'll-lbl', item.label);
      btn.addEventListener('click', function () {
        var ss = window.speechSynthesis;
        if (btn.classList.contains('on')) { ss.cancel(); btn.classList.remove('on'); btn.textContent = '▶'; return; }
        box.querySelectorAll('.ll-btn.on').forEach(function (b) { b.classList.remove('on'); b.textContent = '▶'; });
        ss.cancel();
        var u = new SpeechSynthesisUtterance(item.text[lang()] || item.text.en);
        u.lang = lang() === 'id' ? 'id-ID' : 'en-US';
        u.rate = 0.98;
        u.onend = u.onerror = function () { btn.classList.remove('on'); btn.textContent = '▶'; };
        btn.classList.add('on'); btn.textContent = '⏸';
        ss.speak(u);
      });
      row.appendChild(btn); row.appendChild(lbl);
      box.appendChild(row);
    });
    host.appendChild(box);
  }

  /* tryit: {qid, label, desc} — drill this exact question in the simulator */
  function renderTryIt(l, host) {
    var t = l.tryit;
    if (!t) return;
    var box = el('div', 'lms-tryit');
    var txt = el('div');
    txt.appendChild(bi('b', null, t.label || { en: 'Practice this now', id: 'Latih ini sekarang' }));
    if (t.desc) txt.appendChild(bi('span', null, t.desc));
    var b = bi('button', 'lms-complete', { en: 'Drill it in the simulator →', id: 'Latih di simulator →' });
    b.addEventListener('click', function () {
      document.dispatchEvent(new CustomEvent('mt:launch-tool', { detail: { tool: 'simulator', mode: 'drill', qid: t.qid } }));
    });
    box.appendChild(txt); box.appendChild(b);
    host.appendChild(box);
  }

  /* Registry-declared tool launcher: a lesson may carry
     tool:{id:'simulator', mode:'setup', title:{en,id}, body:{en,id}, cta:{en,id}}.
     The player only renders the panel and dispatches an event — the tool
     itself (e.g. products/the-rope/js/rope-sim.js) listens on the host page. */
  function renderTool(l, host) {
    var t = l.tool;
    if (!t || !t.id) return;
    var box = el('div', 'lms-panel lms-tool');
    box.style.borderColor = 'rgba(201,168,76,.45)';
    if (t.title) box.appendChild(bi('h3', null, t.title));
    if (t.body) box.appendChild(bi('p', null, t.body));
    var b = bi('button', 'lms-complete', t.cta || { en: 'Launch →', id: 'Luncurkan →' });
    b.style.marginTop = '12px';
    b.addEventListener('click', function () {
      document.dispatchEvent(new CustomEvent('mt:launch-tool', { detail: { tool: t.id, mode: t.mode || 'home' } }));
    });
    box.appendChild(b);
    host.appendChild(box);
  }

  function renderOneCheck(check, host) {
    var box = el('div', 'lms-check');
    box.appendChild(bi('h3', null, { en: 'Knowledge check', id: 'Cek pemahaman' }));
    box.appendChild(bi('p', 'q', check.q));
    var verdict = el('div', 'verdict');
    check.options.forEach(function (opt, i) {
      var b = el('button', 'lms-opt');
      b.appendChild(bi('span', null, opt));
      b.addEventListener('click', function () {
        box.querySelectorAll('.lms-opt').forEach(function (x) { x.disabled = true; });
        if (i === check.correct) {
          b.classList.add('correct');
          verdict.className = 'verdict ok';
          verdict.innerHTML = check.why[lang()];
          verdict.setAttribute('data-en', check.why.en);
          verdict.setAttribute('data-id', check.why.id);
        } else {
          b.classList.add('wrong');
          box.querySelectorAll('.lms-opt')[check.correct].classList.add('correct');
          verdict.className = 'verdict no';
          verdict.setAttribute('data-en', 'Not quite — review the material above and look at the highlighted answer.');
          verdict.setAttribute('data-id', 'Belum tepat — tinjau kembali materi di atas dan lihat jawaban yang ditandai.');
          verdict.innerHTML = verdict.getAttribute(lang() === 'id' ? 'data-id' : 'data-en');
        }
      });
      box.appendChild(b);
    });
    box.appendChild(verdict);
    host.appendChild(box);
  }
  function renderCheck(l, host) {
    if (l.check) renderOneCheck(l.check, host);
    (l.checks || []).forEach(function (c) { renderOneCheck(c, host); });
  }

  /* ─── lesson render ─── */
  function openLesson(i) {
    current = i;
    var x = FLAT[i], m = x.m, l = x.l;
    root.querySelector('.lc-prod').textContent =
      REG.product[lang()] + ' · ' + REG.codename + ' — ' + (lang() === 'id' ? 'Modul ' : 'Module ') + m.num;
    root.querySelector('.lc-les').textContent = l.n + ' · ' + l.title[lang()];
    root.querySelector('.lmsp-count').textContent =
      (lang() === 'id' ? 'Pelajaran ' : 'Lesson ') + (i + 1) + ' / ' + FLAT.length;
    root.querySelector('.lmsp-bar').style.width = (doneCount() / FLAT.length * 100) + '%';

    innerEl.innerHTML = '';
    innerEl.classList.remove('lms-enter');
    void innerEl.offsetWidth;
    innerEl.classList.add('lms-enter');
    if (l.placeholder) innerEl.appendChild(phNotice());
    innerEl.appendChild(bi('p', 'lms-kicker', { en: 'Module ' + m.num + ' · ' + m.title.en, id: 'Modul ' + m.num + ' · ' + m.title.id }));
    innerEl.appendChild(bi('h2', 'lms-title', l.title));
    var meta = el('div', 'lms-meta');
    var kindLabel = { video: ['Video', 'Video'], reading: ['Reading', 'Bacaan'], interactive: ['Interactive', 'Interaktif'], slides: ['Slides', 'Slide'], visual: ['Visual', 'Visual'] }[l.kind];
    meta.appendChild(bi('span', 'lms-chip gold', { en: kindLabel[0], id: kindLabel[1] }));
    meta.appendChild(bi('span', 'lms-chip', l.dur));
    meta.appendChild(bi('span', 'lms-chip', isDone(l.n) ? { en: '✓ Completed', id: '✓ Selesai' } : { en: 'In progress', id: 'Sedang berjalan' }));
    innerEl.appendChild(meta);
    innerEl.appendChild(bi('p', 'lms-overview', glossify(l.overview, l.glossary)));

    var obj = el('div', 'lms-panel');
    obj.appendChild(bi('h3', null, { en: 'What you will learn', id: 'Yang akan kamu pelajari' }));
    var ul = el('ul');
    l.objectives.forEach(function (o) { ul.appendChild(bi('li', null, o)); });
    obj.appendChild(ul);
    innerEl.appendChild(obj);

    renderScenario(l, innerEl);
    renderDiagram(l, innerEl);
    if (l.kind === 'video') renderVideo(l, innerEl);
    if (l.kind === 'reading' || l.kind === 'interactive') renderSections(l, innerEl);
    if (l.kind === 'interactive') renderSteps(l, innerEl);
    if (l.kind === 'slides') renderDeck(l, innerEl);
    if (l.kind === 'visual') renderVisual(l, innerEl);
    renderCompare(l, innerEl);
    renderMistakes(l, innerEl);
    renderListen(l, innerEl);
    if (l.tool) renderTool(l, innerEl);
    renderCheck(l, innerEl);
    renderTryIt(l, innerEl);

    if (l.takeaways) {
      var tk = el('div', 'lms-panel');
      tk.appendChild(bi('h3', null, { en: 'Key takeaways', id: 'Poin penting' }));
      var tul = el('ul');
      l.takeaways.forEach(function (t) { tul.appendChild(bi('li', null, t)); });
      tk.appendChild(tul);
      innerEl.appendChild(tk);
    }

    var prev = root.querySelector('.lms-prev');
    var next = root.querySelector('.lms-next');
    prev.disabled = i === 0;
    next.disabled = i === FLAT.length - 1 || !canAccess(i + 1);
    refreshComplete();
    renderRail();
    syncCtl();
    railEl.classList.remove('open');
    contentEl.scrollTop = 0;
  }

  function refreshComplete() {
    var l = FLAT[current].l;
    var btn = root.querySelector('.lms-complete');
    if (isDone(l.n)) {
      btn.className = 'lms-complete done';
      btn.innerHTML = '✓ <span data-en="Completed" data-id="Selesai">' + (lang() === 'id' ? 'Selesai' : 'Completed') + '</span>';
    } else {
      btn.className = 'lms-complete';
      var last = current === FLAT.length - 1;
      btn.innerHTML = '<span data-en="' + (last ? 'Mark complete' : 'Mark complete & continue') + '" data-id="' +
        (last ? 'Tandai selesai' : 'Tandai selesai & lanjut') + '">' +
        (lang() === 'id' ? (last ? 'Tandai selesai' : 'Tandai selesai & lanjut') : (last ? 'Mark complete' : 'Mark complete & continue')) +
        '</span> <span aria-hidden="true">→</span>';
    }
  }

  /* ─── host page sync: lesson cards, module statuses, progress bars ─── */
  function syncHostPage() {
    var p = progress();
    document.querySelectorAll('.lesson-card').forEach(function (card) {
      var numEl = card.querySelector('.lesson-number');
      if (!numEl) return;
      var n = numEl.textContent.trim();
      var i = flatIndex(n);
      if (i === -1) return;
      if (p[n]) {
        card.dataset.status = 'completed';
        var ic = card.querySelector('.lesson-icon');
        if (ic) ic.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.4 2.4 4.8-5.3"/></svg>';
      } else if (canAccess(i) && card.dataset.status === 'locked') {
        card.dataset.status = 'available';
        var act = card.querySelector('.lesson-action');
        if (act && !act.querySelector('.btn-start')) {
          act.innerHTML = '<button class="btn-start" data-lesson="' + n + '" data-en="Start" data-id="Mulai">' + (lang() === 'id' ? 'Mulai' : 'Start') + '</button>';
        }
        var lic = card.querySelector('.lesson-icon');
        if (lic) lic.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M10 8.5v7l6-3.5Z" fill="currentColor" stroke="none"/></svg>';
      }
    });
    /* module accordions */
    REG.modules.forEach(function (m) {
      var acc = document.querySelector('.module-accordion[data-module="' + m.num + '"]');
      if (!acc) return;
      var st = acc.querySelector('.module-status');
      var allDone = m.lessons.every(function (l) { return p[l.n]; });
      var anyAccess = m.lessons.some(function (l) { return canAccess(flatIndex(l.n)); });
      if (st) {
        if (allDone) {
          st.className = 'module-status completed';
          st.setAttribute('data-en', 'Completed'); st.setAttribute('data-id', 'Selesai');
          st.textContent = lang() === 'id' ? 'Selesai' : 'Completed';
        } else if (anyAccess && st.classList.contains('locked')) {
          st.className = 'module-status available';
          st.setAttribute('data-en', 'Available'); st.setAttribute('data-id', 'Tersedia');
          st.textContent = lang() === 'id' ? 'Tersedia' : 'Available';
        }
      }
    });
    /* progress percentages: any element carrying data-lms-progress plus the
       common inline progress bars on the home tab and sidebar */
    var pct = Math.round(doneCount() / FLAT.length * 100);
    document.querySelectorAll('[data-lms-progress]').forEach(function (n) { n.textContent = pct + '%'; });
    document.querySelectorAll('[data-lms-progress-bar]').forEach(function (n) { n.style.width = pct + '%'; });
    /* sidebar course progress */
    var bar = document.querySelector('.sb-progress .pbar i');
    if (bar) bar.style.setProperty('--p', pct + '%');
    var spv = document.querySelector('.sb-progress .spv');
    if (spv) spv.textContent = pct + '%';
    var modsDone = REG.modules.filter(function (m) { return m.lessons.every(function (l) { return p[l.n]; }); }).length;
    var spm = document.querySelector('.sb-progress .spm');
    if (spm) {
      spm.setAttribute('data-en', modsDone + ' of ' + REG.modules.length + ' modules complete');
      spm.setAttribute('data-id', modsDone + ' dari ' + REG.modules.length + ' modul selesai');
      spm.textContent = spm.getAttribute(lang() === 'id' ? 'data-id' : 'data-en');
    }
    /* course hero progress */
    var hf = document.querySelector('.course-progress-bar .progress-fill');
    if (hf) hf.style.setProperty('--progress', pct + '%');
    var hl = document.querySelector('.progress-label');
    if (hl && pct > 0) {
      hl.setAttribute('data-en', pct + '% complete — ' + doneCount() + ' of ' + FLAT.length + ' lessons finished');
      hl.setAttribute('data-id', pct + '% selesai — ' + doneCount() + ' dari ' + FLAT.length + ' pelajaran tuntas');
      hl.textContent = hl.getAttribute(lang() === 'id' ? 'data-id' : 'data-en');
    }
  }

  /* ─── open/close ─── */
  function open(i) {
    root.classList.add('open');
    document.body.classList.add('lms-lock');
    openLesson(i);
  }
  function close() {
    root.classList.remove('open');
    document.body.classList.remove('lms-lock');
    var v = root.querySelector('video');
    if (v) v.pause();
    syncHostPage();
  }

  root.querySelector('.lmsp-back').addEventListener('click', close);
  root.querySelector('.lmsp-railtoggle').addEventListener('click', function () {
    railEl.classList.toggle('open');
  });
  root.querySelector('.lms-prev').addEventListener('click', function () {
    if (current > 0) openLesson(current - 1);
  });
  root.querySelector('.lms-next').addEventListener('click', function () {
    if (current < FLAT.length - 1 && canAccess(current + 1)) openLesson(current + 1);
  });
  root.querySelector('.lms-complete').addEventListener('click', function () {
    var l = FLAT[current].l;
    if (isDone(l.n)) return;
    var p = progress(); p[l.n] = true; saveProgress(p);
    if (current < FLAT.length - 1) openLesson(current + 1);
    else { refreshComplete(); renderRail(); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && root.classList.contains('open')) close();
  });

  /* delegated launch: every Start button on the host page opens the player */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.btn-start');
    if (!btn) return;
    var card = btn.closest('.lesson-card');
    var n = btn.dataset.lesson || (card && card.querySelector('.lesson-number') && card.querySelector('.lesson-number').textContent.trim());
    if (!n) return;
    var i = flatIndex(n);
    if (i !== -1 && canAccess(i)) { e.preventDefault(); open(i); }
  });

  /* re-translate the player when the host page switches language */
  document.querySelectorAll('.ctl button, button[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      setTimeout(function () {
        applyPageLang();
        if (root.classList.contains('open') && current !== null) openLesson(current);
        else syncHostPage();
      }, 50);
    });
  });

  /* ─── in-player theme + language controls ───
     Theme uses the site-wide mt-theme key and data-theme attribute; language
     delegates to the host page's own switcher when present so every surface
     (page + player) stays in sync. */
  function syncCtl() {
    var cur = lang();
    root.querySelectorAll('[data-lms-lang]').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-lms-lang') === cur);
    });
  }
  root.querySelector('.lct-theme').addEventListener('click', function () {
    var next = (document.documentElement.dataset.theme === 'light') ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('mt-theme', next); } catch (e) {}
  });
  root.querySelectorAll('[data-lms-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      var lg = b.getAttribute('data-lms-lang');
      try { localStorage.setItem('mtLang', lg); } catch (e) {}
      var hostBtn = document.querySelector('.ctl button[data-lang="' + lg + '"], button[data-lang="' + lg + '"]');
      if (hostBtn) hostBtn.click();
      syncCtl();
      if (root.classList.contains('open') && current !== null) openLesson(current);
    });
  });
  syncCtl();

  /* expose a tiny API for the host page (e.g. resume buttons) */
  window.MT_LMS_PLAYER = {
    open: function (n) { var i = flatIndex(n); if (i !== -1 && canAccess(i)) open(i); },
    resume: function () {
      for (var i = 0; i < FLAT.length; i++) if (!isDone(FLAT[i].l.n)) { if (canAccess(i)) open(i); return; }
      open(FLAT.length - 1);
    },
    progressPct: function () { return Math.round(doneCount() / FLAT.length * 100); }
  };

  syncHostPage();
})();
