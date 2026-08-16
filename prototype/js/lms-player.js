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
      btn.appendChild(bi('span', null, s.h));
      btn.appendChild(el('span', 'pm', '+'));
      var body = el('div', 'acc-body');
      body.appendChild(bi('p', null, s.body));
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
      rbody.appendChild(bi('span', null, {
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

  function renderCheck(l, host) {
    if (!l.check) return;
    var box = el('div', 'lms-check');
    box.appendChild(bi('h3', null, { en: 'Knowledge check', id: 'Cek pemahaman' }));
    box.appendChild(bi('p', 'q', l.check.q));
    var verdict = el('div', 'verdict');
    l.check.options.forEach(function (opt, i) {
      var b = el('button', 'lms-opt');
      b.appendChild(bi('span', null, opt));
      b.addEventListener('click', function () {
        box.querySelectorAll('.lms-opt').forEach(function (x) { x.disabled = true; });
        if (i === l.check.correct) {
          b.classList.add('correct');
          verdict.className = 'verdict ok';
          verdict.innerHTML = l.check.why[lang()];
          verdict.setAttribute('data-en', l.check.why.en);
          verdict.setAttribute('data-id', l.check.why.id);
        } else {
          b.classList.add('wrong');
          box.querySelectorAll('.lms-opt')[l.check.correct].classList.add('correct');
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
    if (l.placeholder) innerEl.appendChild(phNotice());
    innerEl.appendChild(bi('p', 'lms-kicker', { en: 'Module ' + m.num + ' · ' + m.title.en, id: 'Modul ' + m.num + ' · ' + m.title.id }));
    innerEl.appendChild(bi('h2', 'lms-title', l.title));
    var meta = el('div', 'lms-meta');
    var kindLabel = { video: ['Video', 'Video'], reading: ['Reading', 'Bacaan'], interactive: ['Interactive', 'Interaktif'], slides: ['Slides', 'Slide'], visual: ['Visual', 'Visual'] }[l.kind];
    meta.appendChild(bi('span', 'lms-chip gold', { en: kindLabel[0], id: kindLabel[1] }));
    meta.appendChild(bi('span', 'lms-chip', l.dur));
    meta.appendChild(bi('span', 'lms-chip', isDone(l.n) ? { en: '✓ Completed', id: '✓ Selesai' } : { en: 'In progress', id: 'Sedang berjalan' }));
    innerEl.appendChild(meta);
    innerEl.appendChild(bi('p', 'lms-overview', l.overview));

    var obj = el('div', 'lms-panel');
    obj.appendChild(bi('h3', null, { en: 'What you will learn', id: 'Yang akan kamu pelajari' }));
    var ul = el('ul');
    l.objectives.forEach(function (o) { ul.appendChild(bi('li', null, o)); });
    obj.appendChild(ul);
    innerEl.appendChild(obj);

    if (l.kind === 'video') renderVideo(l, innerEl);
    if (l.kind === 'reading' || l.kind === 'interactive') renderSections(l, innerEl);
    if (l.kind === 'interactive') renderSteps(l, innerEl);
    if (l.kind === 'slides') renderDeck(l, innerEl);
    if (l.kind === 'visual') renderVisual(l, innerEl);
    renderCheck(l, innerEl);

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
