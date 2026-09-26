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
    var p = progress();
    REG.modules.forEach(function (m) {
      var allDone = m.lessons.every(function (l) { return p[l.n]; });
      var h = el('div', 'lr-mod' + (allDone ? ' done' : ''));
      h.appendChild(bi('span', 'lr-mod-num', { en: 'Module ' + m.num, id: 'Modul ' + m.num }));
      var row = el('span', 'lr-mod-t');
      row.appendChild(bi('span', null, m.title));
      if (allDone) row.appendChild(el('i', 'lr-mod-check', '✓'));
      h.appendChild(row);
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
    /* progress ring card */
    var modsDone = REG.modules.filter(function (m) { return m.lessons.every(function (l) { return p[l.n]; }); }).length;
    var pct = Math.round(doneCount() / FLAT.length * 100);
    var card = el('div', 'lr-prog');
    var C = 2 * Math.PI * 21;
    card.innerHTML =
      '<svg viewBox="0 0 50 50" aria-hidden="true">' +
        '<circle cx="25" cy="25" r="21" fill="none" stroke="rgba(201,168,76,.18)" stroke-width="5"/>' +
        '<circle cx="25" cy="25" r="21" fill="none" stroke="url(#lrGrad)" stroke-width="5" stroke-linecap="round" ' +
          'stroke-dasharray="' + (C * pct / 100).toFixed(1) + ' ' + C.toFixed(1) + '" transform="rotate(-90 25 25)"/>' +
        '<defs><linearGradient id="lrGrad" x1="0" y1="1" x2="1" y2="0">' +
          '<stop offset="0%" stop-color="#8B6914"/><stop offset="100%" stop-color="#F0D878"/></linearGradient></defs>' +
        '<text x="25" y="29" text-anchor="middle">' + pct + '%</text>' +
      '</svg>';
    var pt = el('div', 'lr-prog-t');
    pt.appendChild(bi('b', null, { en: 'Your progress', id: 'Kemajuanmu' }));
    pt.appendChild(bi('span', null, { en: modsDone + ' of ' + REG.modules.length + ' modules completed', id: modsDone + ' dari ' + REG.modules.length + ' modul selesai' }));
    card.appendChild(pt);
    railEl.appendChild(card);
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

  /* ─── intro video playlist: an integrated, fully custom player ───
     Declared per lesson as l.videos = [{ src, poster, dur, title:{en,id},
     captions:{en,id} }]. Rendered before the learning material. Subtitles
     are parsed from the VTT files and drawn by the player itself so they
     look identical on every device (native cue rendering is off). */
  function fmtTime(s) {
    s = Math.max(0, Math.floor(s || 0));
    return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2);
  }
  function parseVtt(text) {
    var cues = [], blocks = text.replace(/\r/g, '').split(/\n\n+/);
    blocks.forEach(function (b) {
      var lines = b.split('\n').filter(function (x) { return x.trim(); });
      if (!lines.length) return;
      var ti = lines.findIndex(function (x) { return x.indexOf('-->') !== -1; });
      if (ti === -1) return;
      var mm = lines[ti].match(/([\d:.]+)\s*-->\s*([\d:.]+)/);
      if (!mm) return;
      var toS = function (t) {
        var p = t.split(':').map(parseFloat);
        return p.length === 3 ? p[0] * 3600 + p[1] * 60 + p[2] : p[0] * 60 + p[1];
      };
      cues.push({ start: toS(mm[1]), end: toS(mm[2]), text: lines.slice(ti + 1).join('\n') });
    });
    return cues;
  }
  var ICO = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4.5" height="14" rx="1.2"/><rect x="13.5" y="5" width="4.5" height="14" rx="1.2"/></svg>',
    back10: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.5 3.5v4.2h4.2"/><text x="12" y="15.2" font-size="7.2" font-weight="800" text-anchor="middle" fill="currentColor" stroke="none" font-family="inherit">10</text></svg>',
    fwd10: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 3.5v4.2h-4.2"/><text x="12" y="15.2" font-size="7.2" font-weight="800" text-anchor="middle" fill="currentColor" stroke="none" font-family="inherit">10</text></svg>',
    cc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10.5 10.2a2.2 2.2 0 1 0 0 3.6M17 10.2a2.2 2.2 0 1 0 0 3.6"/></svg>',
    full: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
    unfull: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>',
    vol: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5Z" fill="currentColor"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',
    mute: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5Z" fill="currentColor"/><path d="m16 9.5 5 5M21 9.5l-5 5"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.6v12.8a1 1 0 0 0 1.53.85l9.9-6.4a1 1 0 0 0 0-1.7l-9.9-6.4A1 1 0 0 0 6 5.6Z"/><rect x="18" y="5" width="2.4" height="14" rx="1"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
    prev: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 5.6v12.8a1 1 0 0 1-1.53.85l-9.9-6.4a1 1 0 0 1 0-1.7l9.9-6.4A1 1 0 0 1 18 5.6Z"/><rect x="3.6" y="5" width="2.4" height="14" rx="1"/></svg>',
    chevL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 6-6 6 6 6"/></svg>',
    chevR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>',
    text: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14"/></svg>',
    chevD: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>'
  };

  function renderIntroVideos(l, host, opts) {
    opts = opts || {};
    /* A lesson's films: the legacy `videos` list (with videosPlacement /
       videosKicker / videosIntro / videosOutro beside it), or one of its
       `videoBlocks` — { key, videos, placement, kicker, intro, outro } —
       passed in as opts.block, so a lesson can run deck → films → deck →
       films with a full player and its own progress for each block. */
    var blk = opts.block || null;
    var list = blk ? blk.videos : l.videos;
    if (!list || !list.length) return;
    var idx = 0, cues = [], cueLang = lang(), ccOn = true, raf = 0, hideT = 0, upT = 0;
    var vk = 'mt-lms-vid:' + slug + ':' + l.n + (blk && blk.key ? ':' + blk.key : '');
    var seen = {};
    try { seen = JSON.parse(localStorage.getItem(vk) || '{}'); } catch (e) {}

    /* videos lead the lesson by default; a lesson may instead place them after
       its slide material (videosPlacement: 'after-material'), where they
       reinforce the slides before the knowledge check */
    var after = /^after-material/.test((blk ? blk.placement : l.videosPlacement) || '');
    var nextIsDeck = opts.next === 'material';   /* another slide deck follows the videos */
    var wrap = el('div', 'lms-vp');
    var lead = el('div', 'lms-vp-lead');
    lead.appendChild(bi('span', 'lms-kicker', (blk ? blk.kicker : l.videosKicker) || (after
      ? { en: 'Watch next · ' + list.length + (list.length === 1 ? ' short video' : ' short videos'), id: 'Tonton berikutnya · ' + list.length + ' video singkat' }
      : { en: 'Watch first · ' + list.length + (list.length === 1 ? ' short video' : ' short videos'), id: 'Tonton dulu · ' + list.length + ' video singkat' })));
    lead.appendChild(bi('p', 'lms-vp-intro', (blk ? blk.intro : l.videosIntro) || {
      en: 'These videos set the scene for the lesson. Watch them in order, then continue to the material below.',
      id: 'Video-video ini membuka konteks pelajaran. Tonton berurutan, lalu lanjutkan ke materi di bawah.'
    }));
    wrap.appendChild(lead);

    var stage = el('div', 'lms-vs');
    stage.setAttribute('tabindex', '0');
    stage.setAttribute('role', 'region');
    stage.setAttribute('aria-label', 'Video player');
    var v = document.createElement('video');
    v.preload = 'metadata'; v.playsInline = true; v.setAttribute('playsinline', ''); v.setAttribute('webkit-playsinline', '');
    stage.appendChild(v);
    var cap = el('div', 'lms-vcap'); cap.setAttribute('aria-live', 'off'); stage.appendChild(cap);
    var big = el('button', 'lms-vbig', ICO.play); big.setAttribute('aria-label', 'Play'); stage.appendChild(big);
    var spin = el('div', 'lms-vspin'); stage.appendChild(spin);
    var upnext = el('div', 'lms-vup'); stage.appendChild(upnext);
    var top = el('div', 'lms-vtop');
    var tl = el('div', 'lms-vtitle');
    top.appendChild(tl);
    stage.appendChild(top);

    var ctl = el('div', 'lms-vctl');
    var seek = el('div', 'lms-vseek');
    seek.setAttribute('role', 'slider'); seek.setAttribute('aria-label', 'Seek'); seek.setAttribute('tabindex', '0');
    seek.setAttribute('aria-valuemin', '0'); seek.setAttribute('aria-valuemax', '100'); seek.setAttribute('aria-valuenow', '0');
    var buf = el('i', 'vs-buf'), fill = el('i', 'vs-fill'), knob = el('i', 'vs-knob'), tip = el('span', 'vs-tip', '0:00');
    seek.appendChild(buf); seek.appendChild(fill); seek.appendChild(knob); seek.appendChild(tip);
    ctl.appendChild(seek);
    var row = el('div', 'lms-vrow');
    var bPlay = el('button', 'vb', ICO.play); bPlay.setAttribute('aria-label', 'Play');
    var bBack = el('button', 'vb', ICO.back10); bBack.setAttribute('aria-label', 'Back 10 seconds');
    var bFwd = el('button', 'vb', ICO.fwd10); bFwd.setAttribute('aria-label', 'Forward 10 seconds');
    var time = el('span', 'lms-vtime', '<b>0:00</b> / 0:00');
    var bMute = el('button', 'vb vb-mute', ICO.vol); bMute.setAttribute('aria-label', 'Mute');
    var ccBox = el('div', 'lms-vcc');
    var bCC = el('button', 'vb vb-cc on', ICO.cc + '<span>CC</span>'); bCC.setAttribute('aria-label', 'Subtitles');
    var ccMenu = el('div', 'lms-vcc-menu');
    [['en', 'English'], ['id', 'Bahasa Indonesia'], ['off', null]].forEach(function (o) {
      var b = el('button');
      if (o[0] === 'off') { b.setAttribute('data-en', 'Off'); b.setAttribute('data-id', 'Nonaktif'); b.textContent = lang() === 'id' ? 'Nonaktif' : 'Off'; }
      else b.textContent = o[1];
      b.setAttribute('data-cc', o[0]);
      b.addEventListener('click', function (e) { e.stopPropagation(); setCC(o[0]); ccBox.classList.remove('open'); });
      ccMenu.appendChild(b);
    });
    ccBox.appendChild(bCC); ccBox.appendChild(ccMenu);
    var bNext = el('button', 'vb vb-next', ICO.next); bNext.setAttribute('aria-label', 'Next video');
    var bFull = el('button', 'vb', ICO.full); bFull.setAttribute('aria-label', 'Fullscreen');
    row.appendChild(bPlay); row.appendChild(bBack); row.appendChild(bFwd); row.appendChild(time);
    var sp = el('span', 'lms-vsp'); row.appendChild(sp);
    row.appendChild(bMute); row.appendChild(ccBox); row.appendChild(bNext); row.appendChild(bFull);
    ctl.appendChild(row);
    stage.appendChild(ctl);
    wrap.appendChild(stage);

    /* playlist strip */
    var strip = el('div', 'lms-vlist');
    list.forEach(function (it, k) {
      var b = el('button', 'lms-vitem');
      b.setAttribute('type', 'button');
      var th = el('span', 'vi-th');
      var im = document.createElement('img'); im.src = it.poster; im.alt = ''; im.loading = 'lazy'; im.decoding = 'async';
      th.appendChild(im);
      th.appendChild(el('i', 'vi-num', String(k + 1)));
      th.appendChild(el('i', 'vi-done', ICO.check));
      b.appendChild(th);
      var tx = el('span', 'vi-tx');
      tx.appendChild(bi('b', null, it.title));
      tx.appendChild(el('span', null, (it.dur ? it.dur + ' · ' : '') + '<span data-en="Video ' + (k + 1) + '" data-id="Video ' + (k + 1) + '">Video ' + (k + 1) + '</span>'));
      b.appendChild(tx);
      b.addEventListener('click', function () { load(k, true); });
      strip.appendChild(b);
    });
    wrap.appendChild(strip);

    /* closing takeaways for the video block (declared per lesson) */
    var outroDef = blk ? blk.outro : l.videosOutro;
    if (outroDef) {
      var outro = el('div', 'lms-panel lms-vp-outro');
      outro.appendChild(el('span', 'lh-badge', iconSvg('flag', 17)));
      outro.appendChild(bi('h3', null, outroDef.title));
      (outroDef.body || []).forEach(function (p) { outro.appendChild(bi('p', null, p)); });
      wrap.appendChild(outro);
    }
    host.appendChild(wrap);

    /* ── behaviour ── */
    function setCC(mode) {
      ccOn = mode !== 'off';
      if (ccOn) cueLang = mode;
      bCC.classList.toggle('on', ccOn);
      ccMenu.querySelectorAll('button').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-cc') === (ccOn ? cueLang : 'off')); });
      loadCues();
      try { localStorage.setItem('mt-lms-cc', ccOn ? cueLang : 'off'); } catch (e) {}
    }
    function loadCues() {
      cues = []; cap.textContent = ''; cap.classList.remove('show');
      var it = list[idx];
      if (!ccOn || !it.captions || !it.captions[cueLang]) return;
      var want = it.captions[cueLang];
      fetch(want).then(function (r) { return r.ok ? r.text() : ''; }).then(function (t) {
        if (list[idx] !== it || !ccOn || it.captions[cueLang] !== want) return;
        cues = parseVtt(t); drawCue();
      }).catch(function () {});
    }
    var lastCue = null;
    function drawCue() {
      var t = v.currentTime, c = null;
      for (var i = 0; i < cues.length; i++) if (t >= cues[i].start && t < cues[i].end) { c = cues[i]; break; }
      if (c === lastCue) return;
      lastCue = c;
      if (c) {
        /* authored line breaks are kept on wide stages; narrow stages let the
           browser wrap so a two-line cue never stacks into four */
        var narrow = stage.clientWidth < 560;
        cap.innerHTML = c.text.replace(/</g, '&lt;').replace(/\n/g, narrow ? ' ' : '<br>');
        cap.classList.add('show');
      }
      else { cap.classList.remove('show'); }
    }
    function tick() {
      var d = v.duration || 0, t = v.currentTime || 0, p = d ? t / d * 100 : 0;
      fill.style.width = p + '%'; knob.style.left = p + '%';
      seek.setAttribute('aria-valuenow', String(Math.round(p)));
      time.innerHTML = '<b>' + fmtTime(t) + '</b> / ' + fmtTime(d);
      try { if (v.buffered.length) buf.style.width = (v.buffered.end(v.buffered.length - 1) / d * 100) + '%'; } catch (e) {}
      drawCue();
      if (!v.paused && !v.ended) raf = requestAnimationFrame(tick);
    }
    function setPlaying(on) {
      stage.classList.toggle('playing', on);
      bPlay.innerHTML = on ? ICO.pause : ICO.play;
      bPlay.setAttribute('aria-label', on ? 'Pause' : 'Play');
      big.setAttribute('aria-label', on ? 'Pause' : 'Play');
      if (on) { cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); armHide(); }
      else { cancelAnimationFrame(raf); tick(); showCtl(); }
    }
    function showCtl() { stage.classList.remove('idle'); }
    function armHide() {
      clearTimeout(hideT);
      hideT = setTimeout(function () { if (!v.paused && !ccBox.classList.contains('open')) stage.classList.add('idle'); }, 2600);
    }
    function toggle() { if (v.paused || v.ended) v.play().catch(function () {}); else v.pause(); }
    function markSeen(k) {
      seen[k] = true;
      try { localStorage.setItem(vk, JSON.stringify(seen)); } catch (e) {}
      paintList();
    }
    function paintList() {
      strip.querySelectorAll('.lms-vitem').forEach(function (b, k) {
        b.classList.toggle('on', k === idx);
        b.classList.toggle('done', !!seen[k]);
      });
    }
    function load(k, autoplay) {
      clearTimeout(upT); upnext.classList.remove('show'); upnext.innerHTML = '';
      idx = Math.max(0, Math.min(list.length - 1, k));
      var it = list[idx];
      v.pause();
      v.poster = it.poster || ''; v.src = it.src; v.load();
      lastCue = null; fill.style.width = '0%'; knob.style.left = '0%'; buf.style.width = '0%';
      tl.innerHTML = '<i>' + (idx + 1) + '/' + list.length + '</i> ' + (it.title[lang()] || it.title.en);
      tl.setAttribute('data-en', '<i>' + (idx + 1) + '/' + list.length + '</i> ' + it.title.en);
      tl.setAttribute('data-id', '<i>' + (idx + 1) + '/' + list.length + '</i> ' + it.title.id);
      bNext.disabled = idx === list.length - 1;
      paintList(); loadCues(); setPlaying(false);
      time.innerHTML = '<b>0:00</b> / ' + (it.dur || '0:00');
      if (autoplay) v.play().catch(function () {});
    }

    /* events */
    v.addEventListener('play', function () { setPlaying(true); });
    v.addEventListener('pause', function () { setPlaying(false); });
    v.addEventListener('waiting', function () { stage.classList.add('buffering'); });
    v.addEventListener('playing', function () { stage.classList.remove('buffering'); });
    v.addEventListener('canplay', function () { stage.classList.remove('buffering'); });
    v.addEventListener('loadedmetadata', tick);
    v.addEventListener('progress', function () { if (v.paused) tick(); });
    v.addEventListener('ended', function () {
      markSeen(idx); setPlaying(false); stage.classList.remove('idle');
      if (idx < list.length - 1) {
        var n = list[idx + 1];
        upnext.innerHTML = '<span class="vu-k" data-en="Up next" data-id="Selanjutnya">' + (lang() === 'id' ? 'Selanjutnya' : 'Up next') + '</span>' +
          '<b>' + (n.title[lang()] || n.title.en) + '</b>' +
          '<button class="vu-go" type="button">' + ICO.play + '<span data-en="Play now" data-id="Putar sekarang">' + (lang() === 'id' ? 'Putar sekarang' : 'Play now') + '</span></button>' +
          '<button class="vu-x" type="button" data-en="Stay here" data-id="Tetap di sini">' + (lang() === 'id' ? 'Tetap di sini' : 'Stay here') + '</button>' +
          '<i class="vu-bar"></i>';
        upnext.classList.add('show');
        upnext.querySelector('.vu-go').addEventListener('click', function () { load(idx + 1, true); });
        upnext.querySelector('.vu-x').addEventListener('click', function () { clearTimeout(upT); upnext.classList.remove('show'); });
        upT = setTimeout(function () { if (upnext.classList.contains('show')) load(idx + 1, true); }, 6000);
      } else {
        var nextIsLesson = opts.next === 'lesson';   /* the reading sections follow the videos */
        var nextIsFilm = opts.next === 'film';       /* a YouTube lesson film follows the videos */
        var nextEn = nextIsFilm ? 'Continue to the film below' : nextIsDeck ? 'Continue to the next slides below' : nextIsLesson ? 'Continue with the lesson below' : after ? 'Continue to the knowledge check below' : 'Continue to the lesson material below';
        var nextId = nextIsFilm ? 'Lanjutkan ke film di bawah' : nextIsDeck ? 'Lanjutkan ke slide berikutnya di bawah' : nextIsLesson ? 'Lanjutkan pelajaran di bawah' : after ? 'Lanjutkan ke cek pemahaman di bawah' : 'Lanjutkan ke materi pelajaran di bawah';
        var goEn = nextIsFilm ? 'Watch the film' : nextIsDeck ? 'Go to the slides' : nextIsLesson ? 'Continue the lesson' : after ? 'Go to the check' : 'Go to material';
        var goId = nextIsFilm ? 'Tonton filmnya' : nextIsDeck ? 'Ke slide' : nextIsLesson ? 'Lanjutkan pelajaran' : after ? 'Ke cek pemahaman' : 'Ke materi';
        var doneEn = list.length === 1 ? 'Video watched' : 'All videos watched', doneId = list.length === 1 ? 'Video selesai' : 'Semua video selesai';
        upnext.innerHTML = '<span class="vu-k" data-en="' + doneEn + '" data-id="' + doneId + '">' + (lang() === 'id' ? doneId : doneEn) + '</span>' +
          '<b data-en="' + nextEn + '" data-id="' + nextId + '">' + (lang() === 'id' ? nextId : nextEn) + '</b>' +
          '<button class="vu-go" type="button">' + ICO.check + '<span data-en="' + goEn + '" data-id="' + goId + '">' + (lang() === 'id' ? goId : goEn) + '</span></button>';
        upnext.classList.add('show');
        upnext.querySelector('.vu-go').addEventListener('click', function () {
          upnext.classList.remove('show');
          var nx = wrap.nextElementSibling; if (nx) nx.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    });
    bPlay.addEventListener('click', toggle);
    big.addEventListener('click', toggle);
    v.addEventListener('click', function () { if (stage.classList.contains('idle')) { showCtl(); armHide(); } else toggle(); });
    bBack.addEventListener('click', function () { v.currentTime = Math.max(0, v.currentTime - 10); tick(); });
    bFwd.addEventListener('click', function () { v.currentTime = Math.min(v.duration || 0, v.currentTime + 10); tick(); });
    bMute.addEventListener('click', function () { v.muted = !v.muted; bMute.innerHTML = v.muted ? ICO.mute : ICO.vol; bMute.classList.toggle('on', v.muted); });
    bCC.addEventListener('click', function (e) { e.stopPropagation(); ccBox.classList.toggle('open'); showCtl(); });
    stage.addEventListener('click', function (e) { if (!ccBox.contains(e.target)) ccBox.classList.remove('open'); });
    bNext.addEventListener('click', function () { if (idx < list.length - 1) load(idx + 1, true); });
    bFull.addEventListener('click', function () {
      var fs = document.fullscreenElement || document.webkitFullscreenElement;
      if (fs) { (document.exitFullscreen || document.webkitExitFullscreen).call(document); return; }
      if (stage.requestFullscreen) stage.requestFullscreen().catch(function () {});
      else if (stage.webkitRequestFullscreen) stage.webkitRequestFullscreen();
      else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen();   /* iOS: native fullscreen fallback */
    });
    function onFs() {
      var on = !!(document.fullscreenElement || document.webkitFullscreenElement);
      stage.classList.toggle('fs', on); bFull.innerHTML = on ? ICO.unfull : ICO.full;
    }
    document.addEventListener('fullscreenchange', onFs);
    document.addEventListener('webkitfullscreenchange', onFs);
    ['mousemove', 'touchstart', 'keydown'].forEach(function (ev) { stage.addEventListener(ev, function () { showCtl(); armHide(); }, { passive: true }); });
    stage.addEventListener('mouseleave', function () { if (!v.paused) armHide(); });

    /* seek: pointer + keyboard */
    var scrubbing = false;
    function seekAt(clientX, commit) {
      var r = seek.getBoundingClientRect();
      var p = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
      tip.textContent = fmtTime(p * (v.duration || 0)); tip.style.left = (p * 100) + '%';
      if (commit) { v.currentTime = p * (v.duration || 0); tick(); }
    }
    seek.addEventListener('pointerdown', function (e) { scrubbing = true; seek.setPointerCapture(e.pointerId); seek.classList.add('drag'); seekAt(e.clientX, true); });
    seek.addEventListener('pointermove', function (e) { seekAt(e.clientX, scrubbing); });
    seek.addEventListener('pointerup', function (e) { scrubbing = false; seek.classList.remove('drag'); seekAt(e.clientX, true); });
    seek.addEventListener('pointercancel', function () { scrubbing = false; seek.classList.remove('drag'); });
    seek.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { v.currentTime = Math.max(0, v.currentTime - 5); tick(); e.preventDefault(); }
      if (e.key === 'ArrowRight') { v.currentTime = Math.min(v.duration || 0, v.currentTime + 5); tick(); e.preventDefault(); }
    });
    stage.addEventListener('keydown', function (e) {
      if (e.target !== stage) return;
      if (e.key === ' ' || e.key === 'k') { toggle(); e.preventDefault(); }
      else if (e.key === 'ArrowLeft' || e.key === 'j') { v.currentTime = Math.max(0, v.currentTime - 10); tick(); e.preventDefault(); }
      else if (e.key === 'ArrowRight' || e.key === 'l') { v.currentTime = Math.min(v.duration || 0, v.currentTime + 10); tick(); e.preventDefault(); }
      else if (e.key === 'c') { setCC(ccOn ? 'off' : lang()); }
      else if (e.key === 'f') { bFull.click(); }
      else if (e.key === 'm') { bMute.click(); }
    });

    /* initial state: subtitle language follows the page language unless the
       member chose otherwise earlier */
    var pref = null;
    try { pref = localStorage.getItem('mt-lms-cc'); } catch (e) {}
    if (pref === 'off') ccOn = false; else if (pref === 'en' || pref === 'id') cueLang = pref;
    var first = 0; while (first < list.length - 1 && seen[first]) first++;
    load(first, false);
    setCC(ccOn ? cueLang : 'off');
    return wrap;
  }

  /* ── Slide material: a PowerPoint-style player for a bilingual deck of
     slide images, in the same skin as the video player above. The deck is
     declared per lesson as `material` — `base` names the image set and the
     player derives every file from it: base + lang + '-NN' (+ '-960' /
     '-320') + '.jpg'. The language follows the site switcher live: the host
     sets <html lang>, and the player swaps the whole image set. ── */
  function renderMaterial(l, host, m, which) {
    m = m || l.material;
    if (!m || !m.slides || !m.slides.length) return;
    var list = m.slides, N = list.length, idx = 0, playing = false, playT = 0, hideT = 0, curLang = lang();
    var HOLD = 9000;                                   /* autoplay dwell per slide */
    var sk = 'mt-lms-slides:' + slug + ':' + l.n + (which ? ':' + which : '');   /* one key per deck in the lesson */
    var seen = {};
    try { seen = JSON.parse(localStorage.getItem(sk) || '{}'); } catch (e) {}
    function pad(k) { return (k < 9 ? '0' : '') + (k + 1); }
    function src(k, w, L) { return m.base + (L || lang()) + '-' + pad(k) + (w === 1600 ? '' : '-' + w) + '.jpg'; }
    function T(pair) { return pair ? (pair[lang()] || pair.en) : ''; }

    var wrap = el('div', 'lms-vp lms-sp');
    var lead = el('div', 'lms-vp-lead');
    lead.appendChild(bi('span', 'lms-kicker', m.kicker || { en: 'Read next · ' + N + ' slides', id: 'Baca berikutnya · ' + N + ' slide' }));
    if (m.title) lead.appendChild(bi('h3', 'lms-sp-title', m.title));
    if (m.intro) lead.appendChild(bi('p', 'lms-vp-intro', m.intro));
    wrap.appendChild(lead);

    /* stage */
    var stage = el('div', 'lms-vs lms-ss');
    stage.setAttribute('tabindex', '0');
    stage.setAttribute('role', 'region');
    stage.setAttribute('aria-label', 'Slide player');
    stage.style.setProperty('--seg', (100 / N) + '%');
    /* The slide sits in its own frame between the title bar and the control
       bar, so nothing ever covers the slide's words — unlike the video
       player, whose chrome overlays the picture and rests when idle. */
    var top = el('div', 'lms-vtop');
    var tl = el('div', 'lms-vtitle');
    top.appendChild(tl);
    /* zoom cluster: lives in the title bar, so it never covers the slide and
       stays put in fullscreen — where small slide type is hardest to read */
    var zoomBox = el('div', 'ss-zoom');
    var bZout = el('button', 'ss-zb', ICO.minus); bZout.type = 'button';
    var zPct = el('button', 'ss-zpct', '100%'); zPct.type = 'button';
    var bZin = el('button', 'ss-zb', ICO.plus); bZin.type = 'button';
    zoomBox.appendChild(bZout); zoomBox.appendChild(zPct); zoomBox.appendChild(bZin);
    top.appendChild(zoomBox);
    stage.appendChild(top);
    var frame = el('div', 'ss-frame');
    var img = document.createElement('img');
    img.className = 'ss-img'; img.decoding = 'async'; img.alt = '';
    img.sizes = '(max-width: 720px) 100vw, 900px';
    img.draggable = false;
    frame.appendChild(img);
    var zl = el('button', 'ss-zone ss-zone-l', '<span class="ss-arrow">' + ICO.chevL + '</span>'); zl.type = 'button';
    var zr = el('button', 'ss-zone ss-zone-r', '<span class="ss-arrow">' + ICO.chevR + '</span>'); zr.type = 'button';
    frame.appendChild(zl); frame.appendChild(zr);
    var spin = el('div', 'lms-vspin'); frame.appendChild(spin);
    var upnext = el('div', 'lms-vup'); frame.appendChild(upnext);
    /* the slide's words, readable inside fullscreen when the text panel is open */
    var fsNotes = el('div', 'ss-fsnotes'); fsNotes.hidden = true;
    var fT = el('b'), fP = el('p'); fsNotes.appendChild(fT); fsNotes.appendChild(fP);
    frame.appendChild(fsNotes);
    stage.appendChild(frame);

    var ctl = el('div', 'lms-vctl');
    var seek = el('div', 'lms-vseek ss-seek');
    seek.setAttribute('role', 'slider'); seek.setAttribute('tabindex', '0');
    seek.setAttribute('aria-valuemin', '1'); seek.setAttribute('aria-valuemax', String(N)); seek.setAttribute('aria-valuenow', '1');
    var fill = el('i', 'vs-fill'), knob = el('i', 'vs-knob'), tip = el('span', 'vs-tip', '1');
    seek.appendChild(fill); seek.appendChild(knob); seek.appendChild(tip);
    ctl.appendChild(seek);
    var row = el('div', 'lms-vrow');
    var bPrev = el('button', 'vb', ICO.prev);
    var bPlay = el('button', 'vb', ICO.play);
    var bNext = el('button', 'vb vb-next', ICO.next);
    var count = el('span', 'lms-vtime', '<b>1</b> / ' + N);
    var bText = el('button', 'vb vb-cc vb-text', ICO.text + '<span></span>');
    var bFull = el('button', 'vb', ICO.full);
    row.appendChild(bPrev); row.appendChild(bPlay); row.appendChild(bNext); row.appendChild(count);
    row.appendChild(el('span', 'lms-vsp'));
    row.appendChild(bText); row.appendChild(bFull);
    ctl.appendChild(row);
    stage.appendChild(ctl);
    wrap.appendChild(stage);

    /* slide text (the deck's words, for reading, search and screen readers):
       a collapsible panel, folded by default so the slide itself has the
       room, opened from its own header or the TEXT button in the control bar */
    var notes = el('div', 'lms-panel lms-ss-notes');
    var nH = el('h3', 'ss-notes-h3');
    var nTg = el('button', 'ss-notes-tg'); nTg.type = 'button';
    nTg.setAttribute('aria-expanded', 'false');
    var nId = 'ssn-' + slug + '-' + String(l.n).replace(/\W/g, '') + (which || 0);
    nTg.setAttribute('aria-controls', nId);
    nTg.innerHTML = '<span class="ss-notes-h">' + ICO.text + '<span data-en="Slide text" data-id="Teks slide">Slide text</span></span>' +
      '<span class="ss-notes-sub"></span><span class="ss-notes-chev">' + ICO.chevD + '</span>';
    nH.appendChild(nTg);
    var nBody = el('div', 'ss-notes-body'); nBody.id = nId; nBody.hidden = true;
    var nT = el('b'), nP = el('p');
    nBody.appendChild(nT); nBody.appendChild(nP);
    notes.appendChild(nH); notes.appendChild(nBody);
    wrap.appendChild(notes);
    var nSub = nTg.querySelector('.ss-notes-sub');

    /* thumbnail strip */
    var strip = el('div', 'lms-vlist lms-slist');
    strip.style.setProperty('--n', String(N >= 3 && N <= 8 ? N : 6));   /* thumbnails in one row for three to eight slides */
    var thumbs = [];
    list.forEach(function (it, k) {
      var b = el('button', 'lms-vitem'); b.type = 'button';
      var th = el('span', 'vi-th');
      var im = document.createElement('img'); im.alt = ''; im.loading = 'lazy'; im.decoding = 'async';
      th.appendChild(im); thumbs.push(im);
      th.appendChild(el('i', 'vi-num', String(k + 1)));
      th.appendChild(el('i', 'vi-done', ICO.check));
      b.appendChild(th);
      var tx = el('span', 'vi-tx');
      tx.appendChild(bi('b', null, it.title));
      tx.appendChild(el('span', null, '<span data-en="Slide ' + (k + 1) + '" data-id="Slide ' + (k + 1) + '">Slide ' + (k + 1) + '</span>'));
      b.appendChild(tx);
      b.addEventListener('click', function () { show(k); });
      strip.appendChild(b);
    });
    if (N === 1) strip.hidden = true;   /* a single-slide deck has nothing to pick from */
    wrap.appendChild(strip);
    host.appendChild(wrap);

    /* ── labels that follow the language ── */
    function labels() {
      var L = lang() === 'id';
      zl.setAttribute('aria-label', L ? 'Slide sebelumnya' : 'Previous slide');
      zr.setAttribute('aria-label', L ? 'Slide berikutnya' : 'Next slide');
      bPrev.setAttribute('aria-label', L ? 'Slide sebelumnya' : 'Previous slide');
      bNext.setAttribute('aria-label', L ? 'Slide berikutnya' : 'Next slide');
      bPlay.setAttribute('aria-label', playing ? (L ? 'Jeda' : 'Pause') : (L ? 'Putar otomatis' : 'Play slideshow'));
      bText.setAttribute('aria-label', L ? 'Teks slide' : 'Slide text');
      bText.querySelector('span').textContent = L ? 'TEKS' : 'TEXT';
      bFull.setAttribute('aria-label', L ? 'Layar penuh' : 'Fullscreen');
      seek.setAttribute('aria-label', L ? 'Pilih slide' : 'Choose slide');
      bZin.setAttribute('aria-label', L ? 'Perbesar' : 'Zoom in');
      bZout.setAttribute('aria-label', L ? 'Perkecil' : 'Zoom out');
      zPct.setAttribute('aria-label', L ? 'Tingkat zoom — ketuk untuk mengatur ulang' : 'Zoom level — tap to reset');
      zPct.title = L ? 'Atur ulang zoom' : 'Reset zoom';
      nTg.querySelector('.ss-notes-h span').textContent = L ? 'Teks slide' : 'Slide text';
      nTg.setAttribute('aria-label', (L ? 'Teks slide' : 'Slide text') + ' — ' + (nBody.hidden ? (L ? 'perluas' : 'expand') : (L ? 'ciutkan' : 'collapse')));
    }

    /* ── zoom: buttons, pinch, ctrl+wheel and keys; drag or swipe to pan ── */
    var Z = 1, ZMIN = 1, ZMAX = 4, tx = 0, ty = 0;
    function clampPan() {
      var w = frame.clientWidth, h = frame.clientHeight;
      var mx = (Z - 1) * w / 2, my = (Z - 1) * h / 2;
      tx = Math.max(-mx, Math.min(mx, tx)); ty = Math.max(-my, Math.min(my, ty));
    }
    function applyZoom() {
      clampPan();
      img.style.transform = Z === 1 ? '' : 'translate(' + tx.toFixed(1) + 'px,' + ty.toFixed(1) + 'px) scale(' + Z.toFixed(3) + ')';
      stage.classList.toggle('zoomed', Z > 1);
      zPct.textContent = Math.round(Z * 100) + '%';
      bZin.disabled = Z >= ZMAX - 1e-6; bZout.disabled = Z <= ZMIN + 1e-6;
    }
    /* zoom about a screen point, so what sits under the cursor or between the fingers stays put */
    function zoomTo(z, cx, cy) {
      z = Math.max(ZMIN, Math.min(ZMAX, z));
      var r = frame.getBoundingClientRect();
      var px = (cx == null ? r.width / 2 : cx - r.left) - r.width / 2, py = (cy == null ? r.height / 2 : cy - r.top) - r.height / 2;
      var ix = (px - tx) / Z, iy = (py - ty) / Z;   /* slide-space point under the cursor */
      Z = z; tx = px - ix * Z; ty = py - iy * Z;
      if (Z === 1) { tx = 0; ty = 0; }
      applyZoom();
    }
    function zoomStep(dir, cx, cy) { zoomTo(Z * (dir > 0 ? 1.25 : 1 / 1.25), cx, cy); if (Math.abs(Z - 1) < .06) zoomTo(1); }
    bZin.addEventListener('click', function () { zoomStep(1); });
    bZout.addEventListener('click', function () { zoomStep(-1); });
    zPct.addEventListener('click', function () { zoomTo(Z === 1 ? 2 : 1); });
    frame.addEventListener('wheel', function (e) {
      if (e.ctrlKey || e.metaKey) { e.preventDefault(); zoomTo(Z * (e.deltaY < 0 ? 1.12 : 1 / 1.12), e.clientX, e.clientY); }
      else if (Z > 1) { e.preventDefault(); tx -= e.deltaX; ty -= e.deltaY; applyZoom(); }
    }, { passive: false });
    /* mouse drag pans a zoomed slide */
    var drag = null, lastTouch = 0;
    frame.addEventListener('mousedown', function (e) {
      if (Z === 1 || e.button !== 0 || Date.now() - lastTouch < 600) return;
      drag = { x: e.clientX, y: e.clientY, tx: tx, ty: ty }; stage.classList.add('panning'); e.preventDefault();
    });
    window.addEventListener('mousemove', function (e) { if (!drag) return; tx = drag.tx + e.clientX - drag.x; ty = drag.ty + e.clientY - drag.y; applyZoom(); });
    window.addEventListener('mouseup', function () { if (drag) { drag = null; stage.classList.remove('panning'); } });
    /* touch: two fingers pinch, one finger pans when zoomed (and swipes between slides when not) */
    var pinch = null, pan = null;
    function dist(t) { var dx = t[0].clientX - t[1].clientX, dy = t[0].clientY - t[1].clientY; return Math.hypot(dx, dy); }
    function mid(t) { return { x: (t[0].clientX + t[1].clientX) / 2, y: (t[0].clientY + t[1].clientY) / 2 }; }
    frame.addEventListener('touchstart', function (e) {
      if (e.touches.length === 2) { var m0 = mid(e.touches); pinch = { d: dist(e.touches), z: Z, x: m0.x, y: m0.y }; pan = null; e.preventDefault(); }
      else if (e.touches.length === 1 && Z > 1) { pan = { x: e.touches[0].clientX, y: e.touches[0].clientY, tx: tx, ty: ty }; }
    }, { passive: false });
    frame.addEventListener('touchmove', function (e) {
      if (pinch && e.touches.length === 2) {
        var m1 = mid(e.touches);
        zoomTo(pinch.z * dist(e.touches) / pinch.d, m1.x, m1.y);
        tx += m1.x - pinch.x; ty += m1.y - pinch.y; pinch.x = m1.x; pinch.y = m1.y; applyZoom();
        e.preventDefault();
      } else if (pan && e.touches.length === 1 && Z > 1) {
        tx = pan.tx + e.touches[0].clientX - pan.x; ty = pan.ty + e.touches[0].clientY - pan.y; applyZoom(); e.preventDefault();
      }
    }, { passive: false });
    frame.addEventListener('touchend', function (e) {
      lastTouch = Date.now();
      if (e.touches.length < 2) { if (pinch && Math.abs(Z - 1) < .06) zoomTo(1); pinch = null; }
      if (e.touches.length === 0) pan = null;
    }, { passive: true });
    if ('ResizeObserver' in window) new ResizeObserver(function () { if (Z > 1) applyZoom(); }).observe(frame);

    /* ── painting ── */
    function markSeen(k) { seen[k] = true; try { localStorage.setItem(sk, JSON.stringify(seen)); } catch (e) {} }
    function paintList() {
      strip.querySelectorAll('.lms-vitem').forEach(function (b, k) {
        b.classList.toggle('on', k === idx);
        b.classList.toggle('done', !!seen[k]);
        b.setAttribute('aria-current', k === idx ? 'true' : 'false');
      });
      thumbs.forEach(function (im, k) { var s = src(k, 320); if (im.getAttribute('src') !== s) im.src = s; });
    }
    function preload(k) { if (k >= 0 && k < N) { var p = new Image(); p.src = src(k, 1600); } }
    function show(k) {
      idx = Math.max(0, Math.min(N - 1, k));
      var it = list[idx];
      clearTimeout(upT); upnext.classList.remove('show'); upnext.innerHTML = '';
      stage.classList.add('loading');
      var want = src(idx, 1600);
      img.onload = function () { if (img.getAttribute('src') === want) stage.classList.remove('loading'); };
      img.onerror = function () { stage.classList.remove('loading'); };
      img.srcset = src(idx, 960) + ' 960w, ' + want + ' 1600w';
      img.src = want;
      img.alt = T(it.title);
      tl.innerHTML = '<i>' + (idx + 1) + '/' + N + '</i> ' + T(it.title);
      tl.setAttribute('data-en', '<i>' + (idx + 1) + '/' + N + '</i> ' + it.title.en);
      tl.setAttribute('data-id', '<i>' + (idx + 1) + '/' + N + '</i> ' + it.title.id);
      count.innerHTML = '<b>' + (idx + 1) + '</b> / ' + N;
      fill.style.width = ((idx + 1) / N * 100) + '%'; knob.style.left = ((idx + 1) / N * 100) + '%';
      seek.setAttribute('aria-valuenow', String(idx + 1));
      bPrev.disabled = zl.disabled = idx === 0;
      bNext.disabled = zr.disabled = idx === N - 1;
      nT.innerHTML = T(it.title); nT.setAttribute('data-en', it.title.en); nT.setAttribute('data-id', it.title.id);
      nP.innerHTML = T(it.text); nP.setAttribute('data-en', it.text.en); nP.setAttribute('data-id', it.text.id);
      fT.innerHTML = nT.innerHTML; fP.innerHTML = nP.innerHTML;
      var subEn = 'Slide ' + (idx + 1) + ' · ' + it.title.en, subId = 'Slide ' + (idx + 1) + ' · ' + it.title.id;
      nSub.textContent = lang() === 'id' ? subId : subEn; nSub.setAttribute('data-en', subEn); nSub.setAttribute('data-id', subId);
      markSeen(idx); paintList(); preload(idx + 1);
      /* the host re-renders the lesson on a language switch: keep the place */
      try { sessionStorage.setItem(sk + ':pos', String(idx)); } catch (e) {}
      if (playing) {
        clearTimeout(playT);
        if (idx < N - 1) playT = setTimeout(function () { show(idx + 1); }, HOLD);
        else { setPlaying(false); finished(); }
      }
    }
    var upT = 0;
    function finished() {
      var L = lang() === 'id';
      /* the hand-off names what actually follows the deck: a film, another deck, or the lesson material */
      var nx0 = wrap.nextElementSibling, deck = !!(nx0 && nx0.classList.contains('lms-sp'));
      var film = !!(nx0 && (nx0.classList.contains('lms-ytp') || (nx0.classList.contains('lms-vp') && !deck)));   /* a YouTube film or the lesson's own video player */
      var nextEn = film ? 'Continue to the film below' : deck ? 'Continue to the next slides below' : 'Continue to the lesson material below';
      var nextId = film ? 'Lanjutkan ke film di bawah' : deck ? 'Lanjutkan ke slide berikutnya di bawah' : 'Lanjutkan ke materi pelajaran di bawah';
      var goEn = film ? 'Watch the film' : deck ? 'Go to the slides' : 'Go to material', goId = film ? 'Tonton filmnya' : deck ? 'Ke slide' : 'Ke materi';
      upnext.innerHTML = '<span class="vu-k" data-en="All slides read" data-id="Semua slide selesai">' + (L ? 'Semua slide selesai' : 'All slides read') + '</span>' +
        '<b data-en="' + nextEn + '" data-id="' + nextId + '">' + (L ? nextId : nextEn) + '</b>' +
        '<button class="vu-go" type="button">' + (film ? ICO.play : ICO.check) + '<span data-en="' + goEn + '" data-id="' + goId + '">' + (L ? goId : goEn) + '</span></button>' +
        '<button class="vu-x" type="button" data-en="Stay here" data-id="Tetap di sini">' + (L ? 'Tetap di sini' : 'Stay here') + '</button>';
      upnext.classList.add('show');
      upnext.querySelector('.vu-go').addEventListener('click', function () {
        upnext.classList.remove('show');
        var nx = wrap.nextElementSibling; if (nx) nx.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      upnext.querySelector('.vu-x').addEventListener('click', function () { upnext.classList.remove('show'); });
    }
    /* like a presentation viewer, the chrome rests after a moment so the
       whole slide is readable; any pointer, touch or key brings it back */
    function showCtl() { stage.classList.remove('idle'); }
    function armHide() {
      clearTimeout(hideT);
      hideT = setTimeout(function () {
        if (upnext.classList.contains('show') || stage.contains(document.activeElement) && document.activeElement !== stage) return;
        stage.classList.add('idle');
      }, 2600);
    }
    function setPlaying(on) {
      playing = on;
      stage.classList.toggle('playing', on);
      bPlay.innerHTML = on ? ICO.pause : ICO.play;
      clearTimeout(playT);
      if (on) {
        if (idx === N - 1) show(0); else playT = setTimeout(function () { show(idx + 1); }, HOLD);
        armHide();
      } else showCtl();
      labels();
    }
    function setText(on, reveal) {
      nBody.hidden = !on; fsNotes.hidden = !on;
      notes.classList.toggle('open', on);
      stage.classList.toggle('textopen', on);
      nTg.setAttribute('aria-expanded', on ? 'true' : 'false');
      bText.classList.toggle('on', on);
      labels();
      /* the choice survives the re-render of a language switch, but each visit starts folded */
      try { sessionStorage.setItem(sk + ':text', on ? '1' : '0'); } catch (e) {}
      if (on && reveal && !isFs()) notes.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    function isFs() { return (document.fullscreenElement || document.webkitFullscreenElement) === stage || stage.classList.contains('fsx'); }

    /* ── events ── */
    zl.addEventListener('click', function () { show(idx - 1); });
    zr.addEventListener('click', function () { show(idx + 1); });
    bPrev.addEventListener('click', function () { show(idx - 1); });
    bNext.addEventListener('click', function () { show(idx + 1); });
    bPlay.addEventListener('click', function () { setPlaying(!playing); });
    bText.addEventListener('click', function () { setText(nBody.hidden, true); });
    nTg.addEventListener('click', function () { setText(nBody.hidden); });
    /* fullscreen — or, where the browser cannot fullscreen an element (iPhone
       Safari), a fixed overlay that fills the screen the same way */
    function setFsx(on) {
      stage.classList.toggle('fsx', on);
      document.body.classList.toggle('lms-fsx', on);
      onFs();
      if (on) stage.focus();
    }
    bFull.addEventListener('click', function () {
      if (stage.classList.contains('fsx')) { setFsx(false); return; }
      var fs = document.fullscreenElement || document.webkitFullscreenElement;
      if (fs) { (document.exitFullscreen || document.webkitExitFullscreen).call(document); return; }
      if (stage.requestFullscreen) stage.requestFullscreen().catch(function () { setFsx(true); });
      else if (stage.webkitRequestFullscreen) stage.webkitRequestFullscreen();
      else setFsx(true);
    });
    function onFs() {
      var on = isFs();
      stage.classList.toggle('fs', on); bFull.innerHTML = on ? ICO.unfull : ICO.full;
      bFull.setAttribute('aria-label', on ? (lang() === 'id' ? 'Keluar dari layar penuh' : 'Exit fullscreen') : (lang() === 'id' ? 'Layar penuh' : 'Fullscreen'));
      if (Z > 1) applyZoom();
    }
    document.addEventListener('fullscreenchange', onFs);
    document.addEventListener('webkitfullscreenchange', onFs);
    /* Escape leaves the overlay first — captured, so the lesson player's own Escape (close) does not fire too */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && stage.classList.contains('fsx')) { setFsx(false); e.stopImmediatePropagation(); e.preventDefault(); }
    }, true);
    ['mousemove', 'touchstart', 'keydown', 'focusin'].forEach(function (ev) { stage.addEventListener(ev, function () { showCtl(); armHide(); }, { passive: true }); });
    stage.addEventListener('mouseleave', armHide);
    function seekAt(clientX, commit) {
      var r = seek.getBoundingClientRect();
      var k = Math.min(N - 1, Math.floor(Math.max(0, Math.min(.999, (clientX - r.left) / r.width)) * N));
      tip.textContent = String(k + 1); tip.style.left = ((k + .5) / N * 100) + '%';
      if (commit) show(k);
    }
    seek.addEventListener('pointerdown', function (e) { seekAt(e.clientX, true); });
    seek.addEventListener('pointermove', function (e) { seekAt(e.clientX, false); });
    seek.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { show(idx - 1); e.preventDefault(); }
      if (e.key === 'ArrowRight') { show(idx + 1); e.preventDefault(); }
    });
    stage.addEventListener('keydown', function (e) {
      if (e.target !== stage) return;
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') { show(idx - 1); e.preventDefault(); }
      else if (e.key === 'ArrowRight' || e.key === 'PageDown') { show(idx + 1); e.preventDefault(); }
      else if (e.key === 'Home') { show(0); e.preventDefault(); }
      else if (e.key === 'End') { show(N - 1); e.preventDefault(); }
      else if (e.key === ' ' || e.key === 'k') { setPlaying(!playing); e.preventDefault(); }
      else if (e.key === 't') { setText(nBody.hidden, true); }
      else if (e.key === 'f') { bFull.click(); }
      else if (e.key === '+' || e.key === '=') { zoomStep(1); e.preventDefault(); }
      else if (e.key === '-' || e.key === '_') { zoomStep(-1); e.preventDefault(); }
      else if (e.key === '0') { zoomTo(1); e.preventDefault(); }
    });
    /* swipe between slides — only at 100 %, where a drag is not a pan */
    var x0 = null;
    stage.addEventListener('touchstart', function (e) { x0 = (e.touches.length === 1 && Z === 1) ? e.touches[0].clientX : null; }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      if (x0 === null || Z > 1 || pinch) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (dx > 40) show(idx - 1);
      if (dx < -40) show(idx + 1);
      x0 = null;
    }, { passive: true });

    /* language switch: the host page sets <html lang>; swap the image set */
    if ('MutationObserver' in window) {
      new MutationObserver(function () {
        if (lang() !== curLang) { curLang = lang(); labels(); show(idx); }
      }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    }

    /* initial state: the slide text starts folded; an open panel survives the language re-render */
    var tp = null;
    try { tp = sessionStorage.getItem(sk + ':text'); } catch (e) {}
    setText(tp === '1');
    applyZoom();
    labels();
    var first = 0; while (first < N - 1 && seen[first]) first++;
    try { var pos = sessionStorage.getItem(sk + ':pos'); if (pos !== null && +pos >= 0 && +pos < N) first = +pos; } catch (e) {}
    show(first);
    armHide();
    return wrap;
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
      if (s.img) {
        var sim = document.createElement('img');
        sim.src = s.img; sim.alt = ''; sim.loading = 'lazy'; sim.decoding = 'async';
        sim.className = 'acc-img';
        if (s.imgPos) sim.style.objectPosition = s.imgPos;
        body.appendChild(sim);
      }
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
    briefcase: '<rect x="3" y="7.5" width="18" height="12.5" rx="2"/><path d="M9 7.5V5.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5.5v2"/><path d="M3 12.5h18"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 5.3-5.3 2.2 2.2-5.3Z"/>',
    users: '<circle cx="9" cy="8.5" r="3.2"/><path d="M3.5 19.5a5.5 5.5 0 0 1 11 0"/><path d="M16 5.6a3.2 3.2 0 0 1 0 5.8"/><path d="M17 14.3a5.5 5.5 0 0 1 3.5 5.2"/>',
    chart: '<path d="M4 20h16"/><path d="M7 16v-5M12 16V7M17 16v-3"/>',
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

  /* glossary: [{term, def}] — besides the inline tooltips (glossify), a
     compact "Key terms" panel before the knowledge check, so every lesson's
     vocabulary is visible even where a term never appears verbatim. */
  function renderGlossary(l, host) {
    if (!l.glossary || !l.glossary.length) return;
    var box = el('div', 'lms-panel lms-glossary');
    box.appendChild(bi('h3', null, { en: 'Key terms', id: 'Istilah kunci' }));
    var dl = el('dl');
    l.glossary.forEach(function (g) {
      dl.appendChild(bi('dt', null, g.term));
      dl.appendChild(bi('dd', null, g.def));
    });
    box.appendChild(dl);
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
      if (d.type === 'bars') {
        /* stat bar: {h, v: 0–100, label: shown value, sub} */
        var lbl = el('b');
        lbl.appendChild(bi('span', null, it.h));
        lbl.appendChild(el('em', null, it.label || (it.v + '%')));
        node.appendChild(lbl);
        var bar = el('div', 'ld-bar');
        var fill = el('i');
        bar.appendChild(fill);
        node.appendChild(bar);
        setTimeout(function () { fill.style.width = Math.max(0, Math.min(100, it.v || 0)) + '%'; }, 60);
      } else {
        if (d.type === 'timeline') node.appendChild(el('span', 'ld-med', iconSvg(it.icon || ['flag', 'target', 'gear', 'book', 'eye'][i % 5], 20)));
        node.appendChild(el('span', 'ld-num', String(i + 1).padStart(2, '0')));
        node.appendChild(bi('b', null, it.h));
      }
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
      /* the lesson is passed along so a tool can bring the member back here */
      document.dispatchEvent(new CustomEvent('mt:launch-tool', { detail: { tool: t.id, mode: t.mode || 'home', lesson: l.n } }));
    });
    box.appendChild(b);
    host.appendChild(box);
  }

  /* ── Module 6 blocks: external simulation directory + the simulation log ──
     forage: { lead:{en,id}, picks:[{ id, fit:{en,id} }], directory?:true }
       Cards come from data/lms/forage.js (window.MT_LMS_FORAGE). A pick names
       a programme by id and says why it fits this track; `directory` renders
       the whole catalogue with track / function filters and search. Every
       card links to the public catalogue and offers a copyable search term —
       deep links are only used when the data carries a confirmed `url`.
     simlog: { track:'accounting' } | { full:true }
       The three-question debrief (energy · competence trajectory · curiosity,
       1–5) saved per track in localStorage; `full` shows the ranked log for
       every track plus external simulations the member ran on their own. */
  var SIMLOG_KEY = 'mt-lms-simlog:' + slug;
  function simlogRead() { try { return JSON.parse(localStorage.getItem(SIMLOG_KEY) || '{}') || {}; } catch (e) { return {}; } }
  function simlogWrite(d) { try { localStorage.setItem(SIMLOG_KEY, JSON.stringify(d)); } catch (e) {} }
  var SIMLOG_Q = [
    { k: 'e', h: { en: 'Energy', id: 'Energi' }, sub: { en: 'Did the time pass quickly (5) or crawl (1)?', id: 'Apakah waktunya terasa cepat berlalu (5) atau merangkak (1)?' } },
    { k: 'c', h: { en: 'Competence trajectory', id: 'Arah kompetensi' }, sub: { en: 'Did you improve within the session, and want to?', id: 'Apakah kamu membaik selama sesi, dan ingin membaik?' } },
    { k: 'k', h: { en: 'Curiosity', id: 'Rasa ingin tahu' }, sub: { en: 'Would you do a harder version of a task tomorrow?', id: 'Maukah kamu mengerjakan versi lebih sulit dari tugasnya besok?' } }
  ];
  function forageData() { return window.MT_LMS_FORAGE || null; }
  function forageSearchTerm(it) { return it.company + ' ' + it.title; }
  function forageCard(it, fit, F) {
    var card = el('article', 'lms-fg-card');
    var head = el('div', 'fg-head');
    head.appendChild(el('span', 'fg-co', it.company));
    head.appendChild(bi('span', 'fg-fn', F.functions[it.fn] || { en: it.fn, id: it.fn }));
    card.appendChild(head);
    card.appendChild(el('h4', 'fg-title', it.title));
    card.appendChild(bi('p', 'fg-what', it.what));
    if (fit) {
      var f = el('p', 'fg-fit');
      f.appendChild(bi('b', null, { en: 'Why it fits this track', id: 'Mengapa cocok untuk jalur ini' }));
      f.appendChild(bi('span', null, fit));
      card.appendChild(f);
    }
    var tr = el('div', 'fg-tracks');
    (it.tracks || []).forEach(function (t) {
      var tk = F.tracks[t]; if (!tk) return;
      var b = bi('button', 'fg-track', { en: tk.n + ' · ' + tk.label.en, id: tk.n + ' · ' + tk.label.id });
      b.type = 'button';
      b.addEventListener('click', function () { if (window.MT_LMS_PLAYER && window.MT_LMS_PLAYER.open) window.MT_LMS_PLAYER.open(tk.n); });
      tr.appendChild(b);
    });
    card.appendChild(tr);
    var act = el('div', 'fg-act');
    var a = el('a', 'lms-complete fg-go');
    a.href = it.url || F.catalogue; a.target = '_blank'; a.rel = 'noopener';
    a.appendChild(bi('span', null, it.url ? { en: 'Open on The Forage ↗', id: 'Buka di The Forage ↗' } : { en: 'Find on The Forage ↗', id: 'Cari di The Forage ↗' }));
    act.appendChild(a);
    var cp = el('button', 'fg-copy'); cp.type = 'button';
    var term = forageSearchTerm(it);
    cp.appendChild(bi('span', null, { en: 'Copy search term', id: 'Salin kata kunci' }));
    cp.title = term;
    cp.addEventListener('click', function () {
      var done = function () { cp.classList.add('ok'); cp.querySelector('span').textContent = lang() === 'id' ? 'Tersalin: “' + term + '”' : 'Copied: “' + term + '”'; setTimeout(function () { cp.classList.remove('ok'); cp.querySelector('span').textContent = lang() === 'id' ? 'Salin kata kunci' : 'Copy search term'; }, 2600); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(term).then(done, done); else done();
    });
    act.appendChild(cp);
    card.appendChild(act);
    return card;
  }
  function renderForage(l, host) {
    var fg = l.forage, F = forageData();
    if (!fg || !F) return;
    var box = el('div', 'lms-panel lms-forage' + (fg.directory ? ' lms-fg-dir' : ''));
    box.appendChild(bi('h3', null, fg.directory ? { en: 'Simulation directory · The Forage', id: 'Direktori simulasi · The Forage' } : { en: 'Go further · Simulations on The Forage', id: 'Lebih jauh · Simulasi di The Forage' }));
    box.appendChild(bi('p', 'fg-lead', fg.lead || {
      en: 'Employer-designed simulations on The Forage are free, self-paced and end with a certificate of completion. Run one after this track: it is the same work, set by the company itself.',
      id: 'Simulasi rancangan perusahaan di The Forage gratis, bisa dikerjakan dengan tempo sendiri, dan diakhiri sertifikat penyelesaian. Kerjakan satu setelah jalur ini: pekerjaannya sama, ditetapkan langsung oleh perusahaannya.'
    }));
    var grid = el('div', 'fg-grid');
    if (fg.directory) {
      var bar = el('div', 'fg-bar');
      var q = el('input', 'fg-q'); q.type = 'search'; q.setAttribute('aria-label', 'Search programmes');
      q.placeholder = lang() === 'id' ? 'Cari perusahaan atau program…' : 'Search company or programme…';
      var selT = el('select', 'fg-sel'); selT.setAttribute('aria-label', 'Track');
      var oT = el('option'); oT.value = ''; oT.textContent = lang() === 'id' ? 'Semua jalur' : 'All tracks'; selT.appendChild(oT);
      Object.keys(F.tracks).forEach(function (k) { var o = el('option'); o.value = k; o.textContent = F.tracks[k].n + ' · ' + F.tracks[k].label[lang()]; selT.appendChild(o); });
      var selF = el('select', 'fg-sel'); selF.setAttribute('aria-label', 'Function');
      var oF = el('option'); oF.value = ''; oF.textContent = lang() === 'id' ? 'Semua fungsi' : 'All functions'; selF.appendChild(oF);
      Object.keys(F.functions).forEach(function (k) { var o = el('option'); o.value = k; o.textContent = F.functions[k][lang()]; selF.appendChild(o); });
      var count = el('span', 'fg-count');
      bar.appendChild(q); bar.appendChild(selT); bar.appendChild(selF); bar.appendChild(count);
      box.appendChild(bar);
      var draw = function () {
        grid.innerHTML = '';
        var qq = q.value.trim().toLowerCase(), t = selT.value, f = selF.value, n = 0;
        F.items.forEach(function (it) {
          if (t && (it.tracks || []).indexOf(t) < 0) return;
          if (f && it.fn !== f) return;
          if (qq && (it.company + ' ' + it.title + ' ' + (it.skills || []).join(' ')).toLowerCase().indexOf(qq) < 0) return;
          grid.appendChild(forageCard(it, null, F)); n++;
        });
        count.textContent = lang() === 'id' ? n + ' program' : n + (n === 1 ? ' programme' : ' programmes');
        if (!n) grid.appendChild(bi('p', 'fg-empty', { en: 'No programme matches — clear a filter, or search the catalogue directly.', id: 'Tidak ada program yang cocok — hapus filter, atau cari langsung di katalog.' }));
      };
      q.addEventListener('input', draw); selT.addEventListener('change', draw); selF.addEventListener('change', draw);
      if (fg.track) selT.value = fg.track;
      draw();
    } else {
      (fg.picks || []).forEach(function (p) {
        var it = null; F.items.forEach(function (x) { if (x.id === p.id) it = x; });
        if (it) grid.appendChild(forageCard(it, p.fit, F));
      });
    }
    box.appendChild(grid);
    var note = el('p', 'fg-note');
    note.appendChild(bi('span', null, {
      en: 'Programme titles as listed on The Forage catalogue; titles and availability change, so the button opens the catalogue and the search term finds the current listing. Completing a simulation is not an application — but employers can see completions when you apply to them.',
      id: 'Judul program sebagaimana tercantum di katalog The Forage; judul dan ketersediaannya berubah, sehingga tombolnya membuka katalog dan kata kuncinya menemukan daftar terkini. Menyelesaikan simulasi bukan berarti melamar — tetapi perusahaan dapat melihat penyelesaianmu saat kamu melamar ke mereka.'
    }));
    box.appendChild(note);
    host.appendChild(box);
  }

  function simlogScale(row, val, onPick) {
    var sc = el('div', 'sl-scale');
    for (var v = 1; v <= 5; v++) (function (v) {
      var b = el('button', 'sl-dot' + (val === v ? ' on' : ''), String(v)); b.type = 'button';
      b.setAttribute('aria-label', row.h.en + ' ' + v);
      b.addEventListener('click', function () { sc.querySelectorAll('.sl-dot').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); onPick(v); });
      sc.appendChild(b);
    })(v);
    return sc;
  }
  function simlogForm(entry, onSave, opts) {
    opts = opts || {};
    var cur = { e: entry.e || 0, c: entry.c || 0, k: entry.k || 0, note: entry.note || '' };
    var form = el('div', 'sl-form');
    SIMLOG_Q.forEach(function (row) {
      var r = el('div', 'sl-row');
      var lab = el('div', 'sl-lab'); lab.appendChild(bi('b', null, row.h)); lab.appendChild(bi('span', null, row.sub));
      r.appendChild(lab);
      r.appendChild(simlogScale(row, cur[row.k], function (v) { cur[row.k] = v; }));
      form.appendChild(r);
    });
    var ta = el('textarea', 'sl-note'); ta.rows = 2; ta.value = cur.note;
    ta.placeholder = lang() === 'id' ? 'Tugas mana yang menarikmu masuk, dan mana yang mendorongmu menjauh? Satu-dua kalimat.' : 'Which task pulled you in, and which pushed you away? One or two sentences.';
    form.appendChild(ta);
    var foot = el('div', 'sl-foot');
    var save = bi('button', 'lms-complete', opts.saveLabel || { en: 'Save debrief', id: 'Simpan tinjauan' }); save.type = 'button';
    var msg = el('span', 'sl-msg');
    save.addEventListener('click', function () {
      if (!(cur.e && cur.c && cur.k)) { msg.textContent = lang() === 'id' ? 'Beri nilai ketiga pertanyaan dulu.' : 'Rate all three questions first.'; msg.className = 'sl-msg warn'; return; }
      cur.note = ta.value.trim(); cur.ts = Date.now();
      onSave(cur);
      msg.textContent = lang() === 'id' ? 'Tersimpan di perangkat ini.' : 'Saved on this device.'; msg.className = 'sl-msg ok';
    });
    foot.appendChild(save); foot.appendChild(msg);
    form.appendChild(foot);
    return form;
  }
  function renderSimLog(l, host) {
    var s = l.simlog, F = forageData();
    if (!s) return;
    var box = el('div', 'lms-panel lms-simlog');
    var d = simlogRead(); d.tracks = d.tracks || {}; d.external = d.external || [];
    if (s.track) {
      var tk = F && F.tracks[s.track];
      box.appendChild(bi('h3', null, { en: 'Log this track · the three-question debrief', id: 'Catat jalur ini · tinjauan tiga pertanyaan' }));
      box.appendChild(bi('p', 'sl-lead', {
        en: 'Before the impression fades: rate the track, add a line, save. The full log in lesson 6.13 ranks every track you have run and turns the top two into direction hypotheses.',
        id: 'Sebelum kesannya memudar: nilai jalur ini, tambahkan satu baris, simpan. Catatan lengkap di pelajaran 6.13 mengurutkan setiap jalur yang sudah kamu jalani dan menjadikan dua teratas sebagai hipotesis arah.'
      }));
      var entry = d.tracks[s.track] || {};
      box.appendChild(simlogForm(entry, function (cur) { var dd = simlogRead(); dd.tracks = dd.tracks || {}; dd.tracks[s.track] = cur; simlogWrite(dd); }));
      if (tk) { var jump = bi('button', 'sl-link', { en: 'Open the full simulation log (6.13) →', id: 'Buka catatan simulasi lengkap (6.13) →' }); jump.type = 'button'; jump.addEventListener('click', function () { if (window.MT_LMS_PLAYER) window.MT_LMS_PLAYER.open('6.13'); }); box.appendChild(jump); }
      host.appendChild(box);
      return;
    }
    /* full log */
    box.appendChild(bi('h3', null, { en: 'Your simulation log', id: 'Catatan simulasimu' }));
    box.appendChild(bi('p', 'sl-lead', {
      en: 'Every track you debriefed, ranked by energy + competence trajectory + curiosity. The top two are your direction hypotheses — take them into The Range next. Add any simulation you ran outside The Map (The Forage or an employer’s own) so it counts too.',
      id: 'Setiap jalur yang sudah kamu tinjau, diurutkan berdasarkan energi + arah kompetensi + rasa ingin tahu. Dua teratas adalah hipotesis arahmu — bawa ke The Range berikutnya. Tambahkan simulasi yang kamu jalani di luar The Map (The Forage atau milik perusahaan) supaya ikut dihitung.'
    }));
    var tbl = el('div', 'sl-table');
    var summary = el('div', 'sl-summary');
    var extList = el('div', 'sl-ext');
    function drawAll() {
      var dd = simlogRead(); dd.tracks = dd.tracks || {}; dd.external = dd.external || [];
      var rows = [];
      if (F) Object.keys(F.tracks).forEach(function (k) { var e = dd.tracks[k]; rows.push({ key: k, label: F.tracks[k].label, n: F.tracks[k].n, e: e, ext: false }); });
      dd.external.forEach(function (x, i) { rows.push({ key: 'x' + i, label: { en: x.name, id: x.name }, n: x.company || '', e: x, ext: true, idx: i }); });
      var score = function (r) { return r.e && r.e.e ? r.e.e + r.e.c + r.e.k : -1; };
      rows.sort(function (a, b) { return score(b) - score(a); });
      tbl.innerHTML = '';
      var hdr = el('div', 'sl-tr sl-th');
      hdr.appendChild(bi('span', null, { en: 'Track / simulation', id: 'Jalur / simulasi' }));
      hdr.appendChild(el('span', null, 'E')); hdr.appendChild(el('span', null, 'C')); hdr.appendChild(el('span', null, 'K'));
      hdr.appendChild(bi('span', null, { en: 'Total', id: 'Total' }));
      tbl.appendChild(hdr);
      var ranked = rows.filter(function (r) { return score(r) > 0; });
      rows.forEach(function (r, i) {
        var tr = el('div', 'sl-tr' + (score(r) > 0 && ranked.indexOf(r) < 2 ? ' top' : '') + (score(r) < 0 ? ' empty' : ''));
        var name = el('span', 'sl-name');
        if (!r.ext) { var b = el('button', 'sl-open', r.n + ' · ' + r.label[lang()]); b.type = 'button'; b.addEventListener('click', function () { if (window.MT_LMS_PLAYER) window.MT_LMS_PLAYER.open(r.n); }); name.appendChild(b); }
        else { name.appendChild(el('span', 'sl-extname', r.label.en + (r.n ? ' · ' + r.n : ''))); var rm = el('button', 'sl-rm', '×'); rm.type = 'button'; rm.title = 'Remove'; rm.addEventListener('click', function () { var d2 = simlogRead(); d2.external.splice(r.idx, 1); simlogWrite(d2); drawAll(); }); name.appendChild(rm); }
        if (r.e && r.e.note) { var nt = el('span', 'sl-tnote', r.e.note); name.appendChild(nt); }
        tr.appendChild(name);
        ['e', 'c', 'k'].forEach(function (k) { tr.appendChild(el('span', 'sl-v', r.e && r.e[k] ? String(r.e[k]) : '–')); });
        tr.appendChild(el('span', 'sl-v sl-tot', score(r) > 0 ? String(score(r)) + '/15' : (lang() === 'id' ? 'belum' : 'not yet')));
        tbl.appendChild(tr);
      });
      summary.innerHTML = '';
      if (ranked.length >= 2) {
        var p = el('p', 'sl-hyp');
        p.appendChild(bi('b', null, { en: 'Direction hypotheses: ', id: 'Hipotesis arah: ' }));
        p.appendChild(el('span', null, ranked.slice(0, 2).map(function (r) { return r.label[lang()]; }).join(' · ')));
        summary.appendChild(p);
        var low = ranked.filter(function (r) { return r.e.c >= 4 && r.e.e <= 2; });
        if (low.length) { var w = el('p', 'sl-warn'); w.appendChild(bi('span', null, { en: '⚠ High competence, low energy — the classic trap from lesson 6.1: ', id: '⚠ Kompetensi tinggi, energi rendah — jebakan klasik dari pelajaran 6.1: ' })); w.appendChild(el('span', null, low.map(function (r) { return r.label[lang()]; }).join(', '))); summary.appendChild(w); }
      } else {
        summary.appendChild(bi('p', 'sl-hyp muted', { en: 'Debrief at least two tracks and the ranking appears here.', id: 'Tinjau setidaknya dua jalur, dan peringkatnya muncul di sini.' }));
      }
      extList.innerHTML = '';
    }
    box.appendChild(tbl); box.appendChild(summary);
    /* external simulation entry */
    var addBox = el('details', 'sl-add');
    var sm = bi('summary', null, { en: '+ Add a simulation you ran elsewhere', id: '+ Tambahkan simulasi yang kamu jalani di tempat lain' });
    addBox.appendChild(sm);
    var nameIn = el('input', 'sl-in'); nameIn.placeholder = lang() === 'id' ? 'Nama program (mis. Investment Banking)' : 'Programme name (e.g. Investment Banking)';
    var coIn = el('input', 'sl-in'); coIn.placeholder = lang() === 'id' ? 'Perusahaan' : 'Company';
    var inRow = el('div', 'sl-inrow'); inRow.appendChild(nameIn); inRow.appendChild(coIn); addBox.appendChild(inRow);
    addBox.appendChild(simlogForm({}, function (cur) {
      if (!nameIn.value.trim()) { nameIn.focus(); return; }
      var d2 = simlogRead(); d2.external = d2.external || [];
      d2.external.push({ name: nameIn.value.trim(), company: coIn.value.trim(), e: cur.e, c: cur.c, k: cur.k, note: cur.note, ts: cur.ts });
      simlogWrite(d2); nameIn.value = ''; coIn.value = ''; addBox.open = false; drawAll();
    }, { saveLabel: { en: 'Add to log', id: 'Tambahkan ke catatan' } }));
    box.appendChild(addBox); box.appendChild(extList);
    /* export */
    var foot = el('div', 'sl-foot');
    var cp = bi('button', 'lms-complete', { en: 'Copy summary for your audit', id: 'Salin ringkasan untuk auditmu' }); cp.type = 'button';
    var msg = el('span', 'sl-msg');
    cp.addEventListener('click', function () {
      var dd = simlogRead(); dd.tracks = dd.tracks || {}; dd.external = dd.external || [];
      var lines = [lang() === 'id' ? 'Catatan simulasi (E energi · C arah kompetensi · K rasa ingin tahu, 1–5)' : 'Simulation log (E energy · C competence trajectory · K curiosity, 1–5)'];
      if (F) Object.keys(F.tracks).forEach(function (k) { var e = dd.tracks[k]; if (e && e.e) lines.push(F.tracks[k].n + ' ' + F.tracks[k].label[lang()] + ': E' + e.e + ' C' + e.c + ' K' + e.k + ' = ' + (e.e + e.c + e.k) + '/15' + (e.note ? ' — ' + e.note : '')); });
      dd.external.forEach(function (x) { lines.push((x.company ? x.company + ' · ' : '') + x.name + ': E' + x.e + ' C' + x.c + ' K' + x.k + ' = ' + (x.e + x.c + x.k) + '/15' + (x.note ? ' — ' + x.note : '')); });
      var txt = lines.join('\n');
      var done = function () { msg.textContent = lang() === 'id' ? 'Tersalin.' : 'Copied.'; msg.className = 'sl-msg ok'; };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, done); else done();
    });
    foot.appendChild(cp); foot.appendChild(msg); box.appendChild(foot);
    drawAll();
    host.appendChild(box);
  }

  /* ── YouTube lesson film: the YouTube IFrame API wrapped in the same player
     skin as the lesson videos. A poster facade means nothing from YouTube
     loads until the member presses play; the embed runs with its own
     controls off and every control here drives the API. Subtitles come from
     the video's YouTube caption tracks, in the languages it actually has. ── */
  var ytApi = null;
  function loadYouTubeApi() {
    if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
    if (ytApi) return ytApi;
    ytApi = new Promise(function (res, rej) {
      var prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () { if (prev) { try { prev(); } catch (e) {} } res(window.YT); };
      var s = document.createElement('script');
      s.src = 'https://www.youtube.com/iframe_api'; s.async = true;
      s.onerror = function () { ytApi = null; rej(new Error('YouTube API unavailable')); };
      document.head.appendChild(s);
      setTimeout(function () { if (!(window.YT && window.YT.Player)) { ytApi = null; rej(new Error('YouTube API timeout')); } }, 12000);
    });
    return ytApi;
  }
  function renderYouTube(l, host, opts) {
    opts = opts || {};
    var blk = opts.block || l.youtube;
    if (!blk) return;
    /* A block plays one video (`id`) or several (`videos: [{ id, title?,
       captions?, dur? }]`) under one lead-in, each with its own full player;
       a video inherits the block's captions and title unless it sets its own. */
    var vids = (Array.isArray(blk.videos) && blk.videos.length ? blk.videos : [blk]).map(function (v) {
      var o = {}, k;
      for (k in blk) if (k !== 'videos') o[k] = blk[k];
      for (k in v) o[k] = v[k];
      return o;
    }).filter(function (v) { return v.id; });
    if (!vids.length) return;
    var wrap = el('div', 'lms-vp lms-ytp');
    var lead = el('div', 'lms-vp-lead');
    lead.appendChild(bi('span', 'lms-kicker', blk.kicker || { en: 'Watch · Lesson film', id: 'Tonton · Film pelajaran' }));
    if (blk.title) lead.appendChild(bi('h3', 'lms-sp-title', blk.title));
    if (blk.intro) lead.appendChild(bi('p', 'lms-vp-intro', blk.intro));
    wrap.appendChild(lead);
    var stages = [];
    vids.forEach(function (y, j) { stages.push(ytStage(y, j)); });
    host.appendChild(wrap);
    return wrap;

    function ytStage(y, j) {
    var last = j === vids.length - 1;
    var nextIs = last ? (opts.next || 'check') : 'film';   /* what follows: 'check' (default), 'lesson', 'material' or 'film' */
    function nextEl() { return last ? wrap.nextElementSibling : stages[j + 1]; }
    var P = null, ready = false, playing = false, ccOn = true, ccLang = lang(), tracks = null, ticker = 0, hideT = 0, pending = [];
    if (vids.length > 1) wrap.appendChild(bi('p', 'lms-kicker yt-n', { en: 'Video ' + (j + 1) + ' of ' + vids.length, id: 'Video ' + (j + 1) + ' dari ' + vids.length }));

    var stage = el('div', 'lms-vs lms-yt');
    stage.setAttribute('tabindex', '0'); stage.setAttribute('role', 'region'); stage.setAttribute('aria-label', 'Video player');
    var hostEl = el('div', 'yt-host'); var mount = el('div'); hostEl.appendChild(mount); stage.appendChild(hostEl);
    /* poster facade: YouTube's own thumbnail, with the product still as a fallback */
    var facade = el('div', 'yt-facade');
    var poster = document.createElement('img'); poster.alt = ''; poster.decoding = 'async'; poster.loading = 'lazy';
    var candidates = ['https://i.ytimg.com/vi/' + y.id + '/maxresdefault.jpg', 'https://i.ytimg.com/vi/' + y.id + '/hqdefault.jpg', REG.media.poster];
    var ci = 0; poster.src = candidates[0];
    poster.onload = function () { if (poster.naturalWidth <= 120 && ci < candidates.length - 1) { poster.src = candidates[++ci]; } };   /* YouTube's grey 120×90 placeholder */
    poster.onerror = function () { if (ci < candidates.length - 1) poster.src = candidates[++ci]; };
    facade.appendChild(poster); stage.appendChild(facade);
    var big = el('button', 'lms-vbig', ICO.play); big.setAttribute('aria-label', 'Play'); stage.appendChild(big);
    var spin = el('div', 'lms-vspin'); stage.appendChild(spin);
    var cap = el('div', 'lms-vcap'); cap.setAttribute('aria-live', 'off'); stage.appendChild(cap);   /* subtitles drawn by the player */
    var upnext = el('div', 'lms-vup'); stage.appendChild(upnext);
    var top = el('div', 'lms-vtop'); var tl = bi('div', 'lms-vtitle', y.title || { en: 'Lesson film', id: 'Film pelajaran' }); top.appendChild(tl); stage.appendChild(top);

    var ctl = el('div', 'lms-vctl');
    var seek = el('div', 'lms-vseek'); seek.setAttribute('role', 'slider'); seek.setAttribute('aria-label', 'Seek'); seek.setAttribute('tabindex', '0');
    seek.setAttribute('aria-valuemin', '0'); seek.setAttribute('aria-valuemax', '100'); seek.setAttribute('aria-valuenow', '0');
    var buf = el('i', 'vs-buf'), fill = el('i', 'vs-fill'), knob = el('i', 'vs-knob'), tip = el('span', 'vs-tip', '0:00');
    seek.appendChild(buf); seek.appendChild(fill); seek.appendChild(knob); seek.appendChild(tip); ctl.appendChild(seek);
    var row = el('div', 'lms-vrow');
    var bPlay = el('button', 'vb', ICO.play); bPlay.setAttribute('aria-label', 'Play');
    var bBack = el('button', 'vb', ICO.back10); bBack.setAttribute('aria-label', 'Back 10 seconds');
    var bFwd = el('button', 'vb', ICO.fwd10); bFwd.setAttribute('aria-label', 'Forward 10 seconds');
    var time = el('span', 'lms-vtime', '<b>0:00</b> / ' + (y.dur || '0:00'));
    var bMute = el('button', 'vb vb-mute', ICO.vol); bMute.setAttribute('aria-label', 'Mute');
    var ccBox = el('div', 'lms-vcc');
    var bCC = el('button', 'vb vb-cc on', ICO.cc + '<span>CC</span>'); bCC.setAttribute('aria-label', 'Subtitles');
    var ccMenu = el('div', 'lms-vcc-menu');
    [['en', 'English'], ['id', 'Bahasa Indonesia'], ['off', null]].forEach(function (o) {
      var b = el('button');
      if (o[0] === 'off') { b.setAttribute('data-en', 'Off'); b.setAttribute('data-id', 'Nonaktif'); b.textContent = lang() === 'id' ? 'Nonaktif' : 'Off'; }
      else b.textContent = o[1];
      b.setAttribute('data-cc', o[0]);
      b.addEventListener('click', function (e) { e.stopPropagation(); setCC(o[0], true); ccBox.classList.remove('open'); });
      ccMenu.appendChild(b);
    });
    ccBox.appendChild(bCC); ccBox.appendChild(ccMenu);
    var bFull = el('button', 'vb', ICO.full); bFull.setAttribute('aria-label', 'Fullscreen');
    if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled)) bFull.hidden = true;   /* iPhone: no element fullscreen */
    row.appendChild(bPlay); row.appendChild(bBack); row.appendChild(bFwd); row.appendChild(time);
    row.appendChild(el('span', 'lms-vsp')); row.appendChild(bMute); row.appendChild(ccBox); row.appendChild(bFull);
    ctl.appendChild(row); stage.appendChild(ctl);
    wrap.appendChild(stage);
    /* attribution: the film is streamed from YouTube and can be watched there */
    var ext = el('p', 'yt-ext');
    var L0 = lang() === 'id';
    ext.innerHTML = '<span class="yt-src"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-4.8 31 31 0 0 0-.4-4.8ZM9.8 15.1V8.9l5.9 3.1-5.9 3.1Z"/></svg>' +
      '<span data-en="Video content sourced from YouTube. It streams here inside the lesson and can also be watched directly on YouTube." data-id="Konten video bersumber dari YouTube. Diputar di sini di dalam pelajaran dan juga bisa ditonton langsung di YouTube.">' +
      (L0 ? 'Konten video bersumber dari YouTube. Diputar di sini di dalam pelajaran dan juga bisa ditonton langsung di YouTube.' : 'Video content sourced from YouTube. It streams here inside the lesson and can also be watched directly on YouTube.') + '</span></span>' +
      '<a href="https://www.youtube.com/watch?v=' + y.id + '" target="_blank" rel="noopener"><span data-en="Watch on YouTube" data-id="Tonton di YouTube">' + (L0 ? 'Tonton di YouTube' : 'Watch on YouTube') + '</span> ↗</a>';
    wrap.appendChild(ext);

    /* ── behaviour ── */
    function cur() { try { return P.getCurrentTime() || 0; } catch (e) { return 0; } }
    function dur() { try { return P.getDuration() || 0; } catch (e) { return 0; } }
    function tick() {
      if (!P || !ready) return;
      var d = dur(), t = cur(), p = d ? t / d * 100 : 0;
      fill.style.width = p + '%'; knob.style.left = p + '%';
      seek.setAttribute('aria-valuenow', String(Math.round(p)));
      time.innerHTML = '<b>' + fmtTime(t) + '</b> / ' + fmtTime(d);
      try { buf.style.width = (P.getVideoLoadedFraction() * 100) + '%'; } catch (e) {}
      drawCue(t);
    }
    /* ── subtitles ──
       Three sources, in order of preference for the chosen language:
       1. the lesson's own VTT (y.captions[lang]) drawn by the player — the
          same look as the lesson videos, and independent of YouTube;
       2. a caption track the YouTube video itself has in that language;
       3. YouTube's automatic translation of any track the video has.
       The CC menu marks a language only when none of the three exist. */
    var cues = [], lastCue = null, ownLang = null;
    function drawCue(t) {
      if (!ownLang) return;
      var c = null;
      for (var i = 0; i < cues.length; i++) if (t >= cues[i].start && t < cues[i].end) { c = cues[i]; break; }
      if (c === lastCue) return;
      lastCue = c;
      if (c) { cap.innerHTML = c.text.replace(/</g, '&lt;').replace(/\n/g, stage.clientWidth < 560 ? ' ' : '<br>'); cap.classList.add('show'); }
      else cap.classList.remove('show');
    }
    function loadCues() {
      cues = []; lastCue = null; cap.textContent = ''; cap.classList.remove('show');
      var own = ccOn && y.captions && y.captions[ccLang];
      ownLang = own ? ccLang : null;
      if (!own) return;
      var want = y.captions[ccLang];
      fetch(want).then(function (r) { return r.ok ? r.text() : ''; }).then(function (t) {
        if (!ccOn || y.captions[ccLang] !== want) return;
        cues = parseVtt(t); if (P && ready) drawCue(cur());
      }).catch(function () {});
    }
    function hasOwn(code) { return !!(y.captions && y.captions[code]); }
    function ytNative(code) { return !!(tracks && tracks.some(function (t) { return (t.languageCode || '').split('-')[0] === code; })); }
    function ytTranslatable(code) {
      return !!(tracks && tracks.length && translations && translations.some(function (t) { return (t.languageCode || '').split('-')[0] === code; }));
    }
    function setPlaying(on) {
      playing = on;
      stage.classList.toggle('playing', on); stage.classList.toggle('paused', !on && !!P);
      bPlay.innerHTML = on ? ICO.pause : ICO.play; bPlay.setAttribute('aria-label', on ? 'Pause' : 'Play'); big.setAttribute('aria-label', on ? 'Pause' : 'Play');
      clearInterval(ticker);
      if (on) { ticker = setInterval(tick, 250); armHide(); } else { tick(); showCtl(); }
    }
    function showCtl() { stage.classList.remove('idle'); }
    function armHide() { clearTimeout(hideT); hideT = setTimeout(function () { if (playing && !ccBox.classList.contains('open')) stage.classList.add('idle'); }, 2600); }
    function fail() {
      stage.classList.add('error'); stage.classList.remove('started');
      var e = el('div', 'yt-err');
      e.appendChild(bi('b', null, { en: 'This video could not be loaded here.', id: 'Video ini tidak bisa dimuat di sini.' }));
      e.innerHTML += '<a href="https://www.youtube.com/watch?v=' + y.id + '" target="_blank" rel="noopener"><span data-en="Watch it on YouTube" data-id="Tonton di YouTube">' + (lang() === 'id' ? 'Tonton di YouTube' : 'Watch it on YouTube') + '</span> ↗</a>';
      stage.appendChild(e);
    }
    var translations = null;
    function readTracks() {
      try { tracks = P.getOption('captions', 'tracklist') || []; } catch (e) { tracks = null; }
      try { translations = P.getOption('captions', 'translationLanguages') || []; } catch (e) { translations = null; }
      applyCC();
    }
    function paintCC() {
      bCC.classList.toggle('on', ccOn);
      ccMenu.querySelectorAll('button').forEach(function (b) {
        var code = b.getAttribute('data-cc');
        b.classList.toggle('on', code === (ccOn ? ccLang : 'off'));
        if (code !== 'off' && tracks !== null) b.classList.toggle('na', !(hasOwn(code) || ytNative(code) || ytTranslatable(code)));
      });
    }
    function applyCC() {
      loadCues();
      if (!P || !ready) { paintCC(); return; }
      try {
        if (!ccOn || ownLang) P.unloadModule('captions');           /* off, or drawn by the player */
        else {
          P.loadModule('captions');
          if (!tracks || ytNative(ccLang) || !ytTranslatable(ccLang)) P.setOption('captions', 'track', { languageCode: ccLang });
          else {
            /* no track in this language: translate the video's own track */
            var base = tracks[0].languageCode;
            P.setOption('captions', 'track', { languageCode: base, translationLanguage: { languageCode: ccLang } });
            P.setOption('captions', 'translationLanguage', { languageCode: ccLang });
          }
        }
      } catch (e) {}
      paintCC();
    }
    function setCC(mode, remember) {
      ccOn = mode !== 'off'; if (ccOn) ccLang = mode;
      applyCC();
      if (remember) {
        try { localStorage.setItem('mt-lms-cc', ccOn ? ccLang : 'off'); } catch (e) {}
        pref = ccOn ? ccLang : 'off';
        document.dispatchEvent(new CustomEvent('mt:lms-cc', { detail: { mode: pref, from: stage } }));   /* the other players follow */
      }
    }
    document.addEventListener('mt:lms-cc', function (e) {
      if (!e.detail || e.detail.from === stage || !document.contains(stage)) return;
      pref = e.detail.mode; ccOn = pref !== 'off'; if (ccOn) ccLang = pref; applyCC();
    });
    /* one film at a time: starting this one pauses any other YouTube player in the lesson */
    document.addEventListener('mt:lms-play', function (e) { if (e.detail !== stage && playing && P && ready) { try { P.pauseVideo(); } catch (x) {} } });
    function finished() {
      var L = lang() === 'id';
      var HANDOFF = {
        material: ['Continue to the next slides below', 'Lanjutkan ke slide berikutnya di bawah', 'Go to the slides', 'Ke slide'],
        lesson: ['Continue with the lesson below', 'Lanjutkan pelajaran di bawah', 'Continue the lesson', 'Lanjutkan pelajaran'],
        film: ['Continue to the next film below', 'Lanjutkan ke film berikutnya di bawah', 'Go to the next film', 'Ke film berikutnya'],
        check: ['Continue to the knowledge check below', 'Lanjutkan ke cek pemahaman di bawah', 'Go to the check', 'Ke cek pemahaman']
      };
      var T = HANDOFF[nextIs] || HANDOFF.check;
      var nextEn = T[0], nextId = T[1], goEn = T[2], goId = T[3];
      upnext.innerHTML = '<span class="vu-k" data-en="Film watched" data-id="Film selesai">' + (L ? 'Film selesai' : 'Film watched') + '</span>' +
        '<b data-en="' + nextEn + '" data-id="' + nextId + '">' + (L ? nextId : nextEn) + '</b>' +
        '<button class="vu-go" type="button">' + ICO.check + '<span data-en="' + goEn + '" data-id="' + goId + '">' + (L ? goId : goEn) + '</span></button>' +
        '<button class="vu-x" type="button" data-en="Stay here" data-id="Tetap di sini">' + (L ? 'Tetap di sini' : 'Stay here') + '</button>';
      upnext.classList.add('show');
      upnext.querySelector('.vu-go').addEventListener('click', function () { upnext.classList.remove('show'); var nx = nextEl(); if (nx) nx.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
      upnext.querySelector('.vu-x').addEventListener('click', function () { upnext.classList.remove('show'); });
    }
    function ensure(cb) {
      if (P && ready) return cb();
      if (P) { pending.push(cb); return; }
      pending.push(cb);
      stage.classList.add('started');
      loadYouTubeApi().then(function (YT) {
        P = new YT.Player(mount, {
          host: 'https://www.youtube-nocookie.com', videoId: y.id, width: '100%', height: '100%',
          playerVars: { autoplay: 1, controls: 0, rel: 0, modestbranding: 1, playsinline: 1, iv_load_policy: 3, cc_load_policy: ccOn ? 1 : 0, cc_lang_pref: ccLang, hl: lang(), origin: location.origin, enablejsapi: 1 },
          events: {
            onReady: function () {
              ready = true; stage.classList.add('loaded');
              try { var vd = P.getVideoData && P.getVideoData(); if (vd && vd.title) { tl.textContent = vd.title; tl.removeAttribute('data-en'); tl.removeAttribute('data-id'); } } catch (e) {}
              applyCC(); tick();
              var q = pending; pending = []; q.forEach(function (fn) { fn(); });
            },
            onStateChange: function (e) {
              var S = YT.PlayerState;
              if (e.data === S.PLAYING) { setPlaying(true); stage.classList.remove('buffering'); upnext.classList.remove('show'); document.dispatchEvent(new CustomEvent('mt:lms-play', { detail: stage })); }
              else if (e.data === S.BUFFERING) stage.classList.add('buffering');
              else if (e.data === S.PAUSED) setPlaying(false);
              else if (e.data === S.ENDED) { setPlaying(false); stage.classList.remove('idle'); finished(); }
            },
            onApiChange: readTracks,
            onError: fail
          }
        });
      }).catch(fail);
    }
    function toggle() { ensure(function () { if (playing) P.pauseVideo(); else P.playVideo(); }); }
    big.addEventListener('click', toggle);
    facade.addEventListener('click', toggle);
    bPlay.addEventListener('click', toggle);
    bBack.addEventListener('click', function () { if (P && ready) { P.seekTo(Math.max(0, cur() - 10), true); tick(); } });
    bFwd.addEventListener('click', function () { if (P && ready) { P.seekTo(Math.min(dur(), cur() + 10), true); tick(); } });
    bMute.addEventListener('click', function () {
      if (!(P && ready)) return;
      var m = P.isMuted(); if (m) P.unMute(); else P.mute();
      bMute.innerHTML = m ? ICO.vol : ICO.mute; bMute.classList.toggle('on', !m);
    });
    bCC.addEventListener('click', function (e) { e.stopPropagation(); ccBox.classList.toggle('open'); showCtl(); });
    stage.addEventListener('click', function (e) { if (!ccBox.contains(e.target)) ccBox.classList.remove('open'); });
    bFull.addEventListener('click', function () {
      var fs = document.fullscreenElement || document.webkitFullscreenElement;
      if (fs) { (document.exitFullscreen || document.webkitExitFullscreen).call(document); return; }
      if (stage.requestFullscreen) stage.requestFullscreen().catch(function () {});
      else if (stage.webkitRequestFullscreen) stage.webkitRequestFullscreen();
    });
    function onFs() { var on = (document.fullscreenElement || document.webkitFullscreenElement) === stage; stage.classList.toggle('fs', on); bFull.innerHTML = on ? ICO.unfull : ICO.full; }
    document.addEventListener('fullscreenchange', onFs); document.addEventListener('webkitfullscreenchange', onFs);
    ['mousemove', 'touchstart', 'keydown'].forEach(function (ev) { stage.addEventListener(ev, function () { showCtl(); armHide(); }, { passive: true }); });
    stage.addEventListener('mouseleave', function () { if (playing) armHide(); });
    var scrubbing = false;
    function seekAt(clientX, commit) {
      var r = seek.getBoundingClientRect(), p = Math.max(0, Math.min(1, (clientX - r.left) / r.width)), d = dur();
      tip.textContent = fmtTime(p * d); tip.style.left = (p * 100) + '%';
      if (commit && P && ready) { P.seekTo(p * d, true); tick(); }
    }
    seek.addEventListener('pointerdown', function (e) { scrubbing = true; seek.setPointerCapture(e.pointerId); seek.classList.add('drag'); seekAt(e.clientX, true); });
    seek.addEventListener('pointermove', function (e) { seekAt(e.clientX, scrubbing); });
    seek.addEventListener('pointerup', function (e) { scrubbing = false; seek.classList.remove('drag'); seekAt(e.clientX, true); });
    seek.addEventListener('pointercancel', function () { scrubbing = false; seek.classList.remove('drag'); });
    seek.addEventListener('keydown', function (e) {
      if (!(P && ready)) return;
      if (e.key === 'ArrowLeft') { P.seekTo(Math.max(0, cur() - 5), true); tick(); e.preventDefault(); }
      if (e.key === 'ArrowRight') { P.seekTo(Math.min(dur(), cur() + 5), true); tick(); e.preventDefault(); }
    });
    stage.addEventListener('keydown', function (e) {
      if (e.target !== stage) return;
      if (e.key === ' ' || e.key === 'k') { toggle(); e.preventDefault(); }
      else if (e.key === 'ArrowLeft' || e.key === 'j') { bBack.click(); e.preventDefault(); }
      else if (e.key === 'ArrowRight' || e.key === 'l') { bFwd.click(); e.preventDefault(); }
      else if (e.key === 'c') { setCC(ccOn ? 'off' : lang(), true); }
      else if (e.key === 'f') { bFull.click(); }
      else if (e.key === 'm') { bMute.click(); }
    });
    /* subtitle language follows the page language unless the member chose otherwise */
    var pref = null; try { pref = localStorage.getItem('mt-lms-cc'); } catch (e) {}
    if (pref === 'off') ccOn = false; else if (pref === 'en' || pref === 'id') ccLang = pref;
    if ('MutationObserver' in window) new MutationObserver(function () { if (!pref) { ccLang = lang(); applyCC(); } }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    paintCC();
    return stage;
    }
  }

  /* ── Enrichment blocks (The Pack, The Rope, The Route) ──
     insights: { title?, lead?, items:[{h, body, tag?}] }
       "Field insights" — numbered practitioner insights in the Career-System
       idiom, rendered after the reading sections.
     resources: { title?, lead?, items:[{kind, title, desc, body:[pair,…]}] }
       "Resource kit" — copyable templates, scripts, prompts and worksheets,
       and checklists whose ticks persist per member (localStorage
       mt-lms-kit:<slug>). Nothing leaves the device.
     journey: { before:{label,desc}, now:{label,desc}, next:{label,desc,href?,tool?,mode?} }
       "Where this sits in your journey" — the step before, this module, and
       the next move, which may link to another product or launch a tool. */
  /* ── Case assignment (`caseStudy{}`): an interactive consulting-style case
     rendered as brief → three steps → review & submit. The registry owns every
     word (brief, guidance, prompts, rubric keywords); the player owns the
     mechanics: a stepper, a SMART checklist, a visual issue-tree builder, a
     2×2 impact/feasibility matrix, a rule-based framework check, autosaved
     drafts and a locked submission. Storage: 'mt-lms-case:<slug>:<lesson>' =
     { a:{q1..q8}, step, submitted:{at,id} } — on this device only. ── */
  function caseKey(l) { return 'mt-lms-case:' + slug + ':' + l.n; }
  function caseRead(l) { try { return JSON.parse(localStorage.getItem(caseKey(l)) || '{}') || {}; } catch (e) { return {}; } }
  function caseWrite(l, d) { try { localStorage.setItem(caseKey(l), JSON.stringify(d)); } catch (e) {} }
  function caseSubmitted(l) { var d = caseRead(l); return !!(d && d.submitted); }
  function words(t) { return (String(t || '').match(/\S+/g) || []).length; }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  var CASE_ICO = {
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><circle cx="17" cy="9.5" r="2.4"/><path d="M15.5 14.2a4.5 4.5 0 0 1 5 4.3"/></svg>',
    car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13.5 5.8 8.3A2 2 0 0 1 7.7 7h8.6a2 2 0 0 1 1.9 1.3L20 13.5"/><rect x="3" y="13.5" width="18" height="5.5" rx="1.5"/><circle cx="7.5" cy="16.3" r="1.1" fill="currentColor" stroke="none"/><circle cx="16.5" cy="16.3" r="1.1" fill="currentColor" stroke="none"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v5l3.2 1.9"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.8"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/></svg>',
    bus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="5" y="4" width="14" height="14" rx="2.5"/><path d="M5 11h14M8 18v2M16 18v2"/><circle cx="8.5" cy="14.5" r=".9" fill="currentColor" stroke="none"/><circle cx="15.5" cy="14.5" r=".9" fill="currentColor" stroke="none"/></svg>',
    metro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 17.5V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v9.5"/><path d="M6 12.5h12M6 17.5h12M8 20l-1.5 2M16 20l1.5 2"/></svg>',
    rail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 18.5h16M6 18.5V9l6-4 6 4v9.5"/><path d="M9.5 18.5v-4h5v4"/></svg>',
    taxi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 7V5h5v2"/><path d="M4 13.5 5.8 8.3A2 2 0 0 1 7.7 7h8.6a2 2 0 0 1 1.9 1.3L20 13.5"/><rect x="3" y="13.5" width="18" height="5.5" rx="1.5"/><circle cx="7.5" cy="16.3" r="1.1" fill="currentColor" stroke="none"/><circle cx="16.5" cy="16.3" r="1.1" fill="currentColor" stroke="none"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4h11l-1.5 4L16 12H5"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5.5" y="10" width="13" height="10" rx="2"/><path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17 10 11l4 4 6-7"/><path d="M15 8h5v5"/></svg>',
    down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7l6 6 4-4 6 7"/><path d="M15 16h5v-5"/></svg>'
  };

  /* Rule-based framework check. Reads the answers against the SMART / MECE /
     prioritisation rules with keyword lists from the registry; it flags
     signals, never grades. Returns [{group, ok, text:{en,id}}]. */
  function caseReview(cs, a) {
    var R = cs.review || {}, out = [];
    function has(t, list) { t = (t || '').toLowerCase(); return (list || []).some(function (w) { return t.indexOf(String(w).toLowerCase()) !== -1; }); }
    function add(g, ok, en, id) { out.push({ group: g, ok: ok, text: { en: en, id: id } }); }
    var q1 = a.q1 || '', ls = cs.steps[0], stem = ls.questions[0].stem;
    var full = (stem[lang()] || stem.en) + ' ' + q1;
    add('smart', words(q1) >= (ls.questions[0].min || 10), words(q1) >= (ls.questions[0].min || 10) ? 'Statement has enough substance (' + words(q1) + ' words after the stem).' : 'Statement is very short (' + words(q1) + ' words) — say what changes, for whom, by how much and by when.',
      words(q1) >= (ls.questions[0].min || 10) ? 'Pernyataan cukup berisi (' + words(q1) + ' kata setelah pembuka).' : 'Pernyataan sangat pendek (' + words(q1) + ' kata) — sebutkan apa yang berubah, untuk siapa, seberapa besar, dan kapan.');
    add('smart', has(full, R.measure), has(full, R.measure) ? 'Measurable: a target figure is in the statement.' : 'No target figure found — the Mayor gave one (60 → 30 minutes).', has(full, R.measure) ? 'Terukur: angka target ada dalam pernyataan.' : 'Tidak ada angka target — Wali Kota memberikannya (60 → 30 menit).');
    add('smart', has(full, R.time), has(full, R.time) ? 'Time-bound: a horizon is stated.' : 'No horizon found — the brief says five years.', has(full, R.time) ? 'Terikat waktu: jangka waktu disebutkan.' : 'Tidak ada jangka waktu — arahannya menyebut lima tahun.');
    add('smart', has(full, R.action), has(full, R.action) ? 'Action-oriented: the statement uses a verb the city can act on.' : 'No action verb found — “reduce”, “bring down”, “shorten”…', has(full, R.action) ? 'Berorientasi tindakan: ada kata kerja yang bisa ditindaklanjuti kota.' : 'Tidak ada kata kerja tindakan — “menurunkan”, “memangkas”, “mempersingkat”…');
    add('smart', has(full, R.stakeholder), has(full, R.stakeholder) ? 'Specific: the people affected are named.' : 'Who is affected? Name the residents, commuters or businesses.', has(full, R.stakeholder) ? 'Spesifik: orang yang terdampak disebutkan.' : 'Siapa yang terdampak? Sebutkan warga, komuter, atau dunia usaha.');
    if (has(full, R.solution)) add('smart', false, 'The statement presupposes a solution (“by building…”). Keep the question open; solutions come after the analysis.', 'Pernyataan sudah mengandaikan solusi (“dengan membangun…”). Biarkan pertanyaannya terbuka; solusi datang setelah analisis.');
    /* tree */
    var st = cs.steps[1], issues = st.issues.map(function (q) { return a[q.id] || {}; });
    var filled = issues.every(function (x) { return words(x.issue) >= 3 && (x.subs || []).every(function (s) { return words(s) >= 2; }); });
    add('tree', filled, filled ? 'Three issues and six sub-issues are written out.' : 'The tree is incomplete — every issue needs two sub-issues.', filled ? 'Tiga isu dan enam sub-isu sudah tertulis.' : 'Pohonnya belum lengkap — setiap isu butuh dua sub-isu.');
    var STOP = /^(the|a|an|and|or|of|to|in|for|on|with|by|we|can|how|our|its|is|are|be|that|this|more|less|dan|atau|yang|di|ke|untuk|dengan|kita|dapat|bagaimana|bisa|agar|lebih|dari|pada|ini|itu)$/;
    function bag(t) { var o = {}; (String(t || '').toLowerCase().match(/[a-zÀ-ɏ]{3,}/g) || []).forEach(function (w) { if (!STOP.test(w)) o[w] = 1; }); return Object.keys(o); }
    var pairs = [], L = ['A', 'B', 'C'];
    for (var i = 0; i < 3; i++) for (var j = i + 1; j < 3; j++) {
      /* two views: the issue questions alone (a near-duplicate question is an
         overlap even with different sub-issues) and the whole branches */
      var jacOf = function (ta, tb) { var a = bag(ta), b = bag(tb); if (!a.length || !b.length) return 0; var inter = a.filter(function (w) { return b.indexOf(w) !== -1; }).length; return inter / (a.length + b.length - inter); };
      var jI = jacOf(issues[i].issue, issues[j].issue), jB = jacOf(issues[i].issue + ' ' + (issues[i].subs || []).join(' '), issues[j].issue + ' ' + (issues[j].subs || []).join(' '));
      var jac = Math.max(jI >= 0.5 ? jI : 0, jB >= 0.34 ? jB : 0);
      if (jac) pairs.push(L[i] + '–' + L[j] + ' (' + Math.round(jac * 100) + '%)');
    }
    add('tree', !pairs.length, pairs.length ? 'Issues ' + pairs.join(', ') + ' share much of their wording — check they are not the same question twice.' : 'No two issues share most of their wording.', pairs.length ? 'Isu ' + pairs.join(', ') + ' berbagi banyak kata yang sama — pastikan bukan pertanyaan yang sama dua kali.' : 'Tidak ada dua isu yang berbagi sebagian besar kata.');
    var allText = issues.map(function (x) { return x.issue + ' ' + (x.subs || []).join(' '); }).join(' ');
    var missing = (R.dimensions || []).filter(function (d) { return !has(allText, d.words); });
    if (filled) add('tree', missing.length <= 2, missing.length ? 'Dimensions the tree does not mention: ' + missing.map(function (d) { return d.name.en; }).join(' · ') + '. A gap, or a deliberate scope?' : 'The tree touches every dimension in the case brief.',
      missing.length ? 'Dimensi yang tidak disebut pohon: ' + missing.map(function (d) { return d.name.id; }).join(' · ') + '. Celah, atau ruang lingkup yang disengaja?' : 'Pohon menyentuh setiap dimensi dalam arahan kasus.');
    var m = a.q6 || {};
    add('tree', !!(m.overlap && m.gap), m.overlap && m.gap ? 'MECE check answered for overlaps and gaps.' : 'The MECE check is not answered yet.', m.overlap && m.gap ? 'Uji MECE dijawab untuk tumpang tindih dan celah.' : 'Uji MECE belum dijawab.');
    /* prioritisation */
    var q7 = a.q7 || {}, place = q7.place || {}, ids = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    var placed = ids.filter(function (k) { return place[k]; }).length, hh = ids.filter(function (k) { return place[k] === 'hh'; });
    add('prio', placed === 6, placed === 6 ? 'All six sub-issues are placed on the matrix.' : placed + ' of 6 sub-issues placed.', placed === 6 ? 'Keenam sub-isu sudah ditempatkan di matriks.' : placed + ' dari 6 sub-isu ditempatkan.');
    add('prio', hh.length === 2, hh.length === 2 ? 'Exactly two sub-issues in the high-impact, high-feasibility quadrant: ' + hh.join(' and ') + '.' : (hh.length > 2 ? hh.length + ' sub-issues sit top-right — that is a list, not a priority.' : 'Fewer than two sub-issues sit top-right.'),
      hh.length === 2 ? 'Tepat dua sub-isu di kuadran dampak tinggi–kelayakan tinggi: ' + hh.join(' dan ') + '.' : (hh.length > 2 ? hh.length + ' sub-isu berada di kanan atas — itu daftar, bukan prioritas.' : 'Kurang dari dua sub-isu di kanan atas.'));
    if (hh.length === 2 && hh[0][0] === hh[1][0]) add('prio', true, 'Both picks come from Issue ' + hh[0][0] + ' — fine if that branch really dominates; say so in the rationale.', 'Kedua pilihan berasal dari Isu ' + hh[0][0] + ' — tidak apa-apa jika cabang itu memang dominan; sebutkan di alasanmu.');
    var q8 = a.q8 || {}, rmin = st && cs.steps[2].review.min || 25;
    add('prio', words(q8.note) >= rmin, words(q8.note) >= rmin ? 'The case for the two picks is written (' + words(q8.note) + ' words).' : 'The rationale is short (' + words(q8.note) + ' words; ' + rmin + ' asked) — argue impact and feasibility for each pick.',
      words(q8.note) >= rmin ? 'Alasan dua pilihan sudah ditulis (' + words(q8.note) + ' kata).' : 'Alasannya pendek (' + words(q8.note) + ' kata; diminta ' + rmin + ') — bahas dampak dan kelayakan tiap pilihan.');
    var both = /impact|dampak/i.test(q8.note || '') && /feasib|layak|realistis|bisa dilakukan/i.test(q8.note || '');
    if (words(q8.note) >= 10) add('prio', both, both ? 'The rationale speaks to both axes, impact and feasibility.' : 'The rationale should name both axes: how much it moves the commute, and whether the city can act.', both ? 'Alasan menyentuh kedua sumbu, dampak dan kelayakan.' : 'Alasan harus menyebut kedua sumbu: seberapa besar menggerakkan waktu tempuh, dan apakah kota bisa bertindak.');
    add('prio', !!q8.confirm, q8.confirm ? 'Prioritisation reconsidered and confirmed.' : 'The prioritisation quality check is not confirmed yet.', q8.confirm ? 'Prioritisasi dipertimbangkan ulang dan dikonfirmasi.' : 'Uji mutu prioritisasi belum dikonfirmasi.');
    return out;
  }

  function renderCase(l, host) {
    var cs = l.caseStudy;
    if (!cs || !cs.steps) return;
    var T = function (pair) { return pair ? (pair[lang()] || pair.en) : ''; };
    var D = caseRead(l); D.a = D.a || {}; var A = D.a;
    var locked = !!D.submitted;
    var saveT = 0, savedAt = el('span', 'cs-saved');
    function persist(now) {
      clearTimeout(saveT);
      var run = function () { caseWrite(l, D); savedAt.textContent = lang() === 'id' ? 'Tersimpan di perangkat ini' : 'Saved on this device'; savedAt.classList.add('on'); };
      if (now) run(); else saveT = setTimeout(run, 350);
    }
    /* completeness per question id */
    var S1 = cs.steps[0], S2 = cs.steps[1], S3 = cs.steps[2];
    var Q1 = S1.questions[0], Q2 = S1.questions[1];
    function subIds() { return S2.issues.map(function (q) { return [q.letter + '1', q.letter + '2']; }).reduce(function (a, b) { return a.concat(b); }, []); }
    var done = {
      q1: function () { return words(A.q1) >= (Q1.min || 10); },
      q2: function () { var s = A.q2 || {}; return Q2.items.every(function (it) { return s[it.k] === true; }); },
      q3: function () { return issueDone(0); }, q4: function () { return issueDone(1); }, q5: function () { return issueDone(2); },
      q6: function () { var m = A.q6 || {}; return !!(m.overlap && m.gap); },
      q7: function () { var p = (A.q7 || {}).place || {}; var ids = subIds(); return ids.every(function (k) { return p[k]; }) && ids.filter(function (k) { return p[k] === 'hh'; }).length === 2; },
      q8: function () { var r = A.q8 || {}; return !!r.confirm && words(r.note) >= (S3.review.min || 25); }
    };
    function issueDone(i) { var x = A[S2.issues[i].id] || {}; return words(x.issue) >= 3 && (x.subs || []).length === 2 && x.subs.every(function (s) { return words(s) >= 2; }); }
    var QIDS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'];
    function stepDone(i) { return i === 0 ? done.q1() && done.q2() : i === 1 ? done.q3() && done.q4() && done.q5() && done.q6() : i === 2 ? done.q7() && done.q8() : locked; }
    function stepAllowed(i) { for (var k = 0; k < i && k < 3; k++) if (!stepDone(k)) return false; return true; }
    function answered() { return QIDS.filter(function (q) { return done[q](); }).length; }

    var box = el('section', 'lms-case' + (locked ? ' locked' : ''));
    box.id = 'lmsCase';
    /* ── header ── */
    var hd = el('div', 'cs-head');
    hd.appendChild(bi('span', 'lms-kicker', cs.kicker));
    hd.appendChild(bi('h3', 'cs-title', cs.title));
    hd.appendChild(bi('p', 'cs-lead', cs.lead));
    if (cs.practice) {
      var pr = el('div', 'cs-practice');
      cs.practice.forEach(function (p, i) { var c = el('div', 'cs-pr'); c.appendChild(el('b', null, String(i + 1))); c.appendChild(bi('span', null, p)); pr.appendChild(c); });
      hd.appendChild(pr);
    }
    if (cs.goal) { var g = el('div', 'cs-goal'); g.appendChild(el('span', 'cs-goal-ic', CASE_ICO.target)); var gt = el('div'); gt.appendChild(bi('b', null, { en: 'Goal', id: 'Tujuan' })); gt.appendChild(bi('p', null, cs.goal)); g.appendChild(gt); hd.appendChild(g); }
    box.appendChild(hd);

    /* ── the brief: folder tabs ── */
    var B = cs.brief || {};
    var brief = el('div', 'cs-brief');
    var tabs = el('div', 'cs-tabs'); tabs.setAttribute('role', 'tablist');
    var panes = el('div', 'cs-panes');
    var TABS = [];
    if (B.email) TABS.push({ id: 'brief', label: { en: 'The brief', id: 'Arahan' }, build: buildEmail });
    if (B.facts) TABS.push({ id: 'context', label: { en: 'City context', id: 'Konteks kota' }, build: buildFacts });
    if (B.chart) TABS.push({ id: 'data', label: { en: 'The data', id: 'Datanya' }, build: buildChart });
    if (B.modes) TABS.push({ id: 'modes', label: { en: 'Modes of transport', id: 'Moda transportasi' }, build: buildModes });
    TABS.forEach(function (t, i) {
      var b = bi('button', 'cs-tab' + (i === 0 ? ' on' : ''), t.label); b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      var pane = el('div', 'cs-pane' + (i === 0 ? ' on' : '')); pane.setAttribute('role', 'tabpanel'); t.build(pane);
      b.addEventListener('click', function () {
        tabs.querySelectorAll('.cs-tab').forEach(function (x) { x.classList.remove('on'); x.setAttribute('aria-selected', 'false'); });
        panes.querySelectorAll('.cs-pane').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on'); b.setAttribute('aria-selected', 'true'); pane.classList.add('on');
      });
      tabs.appendChild(b); panes.appendChild(pane);
    });
    brief.appendChild(tabs); brief.appendChild(panes);
    box.appendChild(brief);

    function buildEmail(pane) {
      var E = B.email;
      if (B.quote) { var q = el('blockquote', 'cs-quote'); q.appendChild(el('span', 'cs-qmark', '“')); var qi = el('div'); qi.appendChild(bi('p', null, B.quote.text)); qi.appendChild(bi('cite', null, B.quote.who)); q.appendChild(qi); pane.appendChild(q); }
      var m = el('div', 'cs-mail');
      var mh = el('div', 'cs-mail-h');
      mh.appendChild(el('span', 'cs-avatar', 'MH'));
      var who = el('div', 'cs-mail-who'); who.appendChild(bi('b', null, E.from)); who.appendChild(bi('span', null, E.to)); mh.appendChild(who);
      mh.appendChild(bi('span', 'cs-mail-date', E.date));
      m.appendChild(mh);
      if (E.subject) m.appendChild(bi('div', 'cs-mail-subj', E.subject));
      var body = el('div', 'cs-mail-b');
      (E.paragraphs || []).forEach(function (p) { body.appendChild(bi('p', null, p)); });
      if (E.asks) { var ol = el('ol', 'cs-asks'); E.asks.forEach(function (p, i) { var li = el('li'); li.appendChild(el('b', 'cs-ask-n', String(i + 1))); li.appendChild(bi('span', null, p)); ol.appendChild(li); }); body.appendChild(ol); }
      (E.closing || []).forEach(function (p) { body.appendChild(bi('p', null, p)); });
      m.appendChild(body); pane.appendChild(m);
    }
    function buildFacts(pane) {
      var g = el('div', 'cs-facts');
      B.facts.forEach(function (f) { var c = el('div', 'cs-fact' + (f.hot ? ' hot' : '')); c.appendChild(el('span', 'cs-fact-ic', CASE_ICO[f.icon] || CASE_ICO.target)); var t = el('div'); t.appendChild(bi('b', null, f.k)); t.appendChild(bi('span', null, f.v)); c.appendChild(t); g.appendChild(c); });
      pane.appendChild(g);
      var task = el('div', 'cs-task'); task.appendChild(bi('h4', null, { en: 'Your task', id: 'Tugasmu' }));
      var ol = el('ol'); cs.steps.forEach(function (s, i) { var li = el('li'); li.appendChild(el('b', null, String(i + 1))); li.appendChild(bi('span', null, s.title)); ol.appendChild(li); }); task.appendChild(ol); pane.appendChild(task);
    }
    function buildChart(pane) {
      var C = B.chart, n = C.years.length;
      var wrap = el('div', 'cs-chart');
      var hh = el('div', 'cs-chart-h'); hh.appendChild(bi('b', null, C.title)); hh.appendChild(bi('span', null, C.unit)); wrap.appendChild(hh);
      /* 100 % stacked bars, one per year; series order fixed; 2 px surface gaps; direct labels on every segment (three series, six numbers) */
      var W = 520, H = 250, padL = 34, padB = 28, padT = 10, bw = 78, gap = (W - padL - n * bw) / (n + 1), plotH = H - padT - padB;
      var svg = '<svg class="cs-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(T(C.title)) + '">';
      [0, 25, 50, 75, 100].forEach(function (v) { var y = padT + plotH * (1 - v / 100); svg += '<line class="cs-grid" x1="' + padL + '" x2="' + W + '" y1="' + y.toFixed(1) + '" y2="' + y.toFixed(1) + '"/><text class="cs-tick" x="' + (padL - 6) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="end">' + v + '</text>'; });
      C.years.forEach(function (yr, yi) {
        var x = padL + gap + yi * (bw + gap), acc = 0;
        C.series.forEach(function (s, si) {
          var v = s.vals[yi], h = plotH * v / 100, y = padT + plotH * (1 - (acc + v) / 100);
          var inner = Math.max(0, h - 2);
          svg += '<g class="cs-seg" data-year="' + yr + '" data-series="' + si + '" tabindex="0"><title>' + esc(yr + ' · ' + T(s.label) + ': ' + v + '%') + '</title>' +
            '<rect class="cs-bar s' + (si + 1) + '" x="' + x + '" y="' + (y + 1).toFixed(1) + '" width="' + bw + '" height="' + inner.toFixed(1) + '" rx="' + (si === C.series.length - 1 ? 4 : 0) + '"/>' +
            '<text class="cs-val" x="' + (x + bw / 2) + '" y="' + (y + h / 2 + 4).toFixed(1) + '" text-anchor="middle">' + v + '%</text></g>';
          acc += v;
        });
        svg += '<text class="cs-year" x="' + (x + bw / 2) + '" y="' + (H - 8) + '" text-anchor="middle">' + yr + '</text>';
      });
      svg += '</svg>';
      var plot = el('div', 'cs-plot', svg);
      var leg = el('ul', 'cs-legend');
      C.series.forEach(function (s, si) { var li = el('li'); li.appendChild(el('i', 's' + (si + 1))); var t = el('span'); t.appendChild(bi('b', null, s.label)); if (s.sub) t.appendChild(bi('small', null, s.sub)); li.appendChild(t); leg.appendChild(li); });
      var row = el('div', 'cs-chart-row'); row.appendChild(plot); row.appendChild(leg); wrap.appendChild(row);
      /* table view of the same numbers */
      var det = el('details', 'cs-table'); det.appendChild(bi('summary', null, { en: 'Show as a table', id: 'Tampilkan sebagai tabel' }));
      var tb = '<table><thead><tr><th></th>' + C.years.map(function (y) { return '<th>' + y + '</th>'; }).join('') + '</tr></thead><tbody>' + C.series.map(function (s) { return '<tr><th>' + esc(T(s.label)) + '</th>' + s.vals.map(function (v) { return '<td>' + v + '%</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
      det.appendChild(el('div', null, tb)); wrap.appendChild(det);
      pane.appendChild(wrap);
      if (C.takeaways) {
        var tk = el('div', 'cs-tk'); tk.appendChild(bi('h4', null, { en: 'Key takeaways', id: 'Poin-poin penting' }));
        C.takeaways.forEach(function (t, i) { var c = el('div', 'cs-tk-i'); c.appendChild(el('span', 'cs-tk-ic ' + (t.dir || ''), CASE_ICO[t.dir] || '')); var tx = el('div'); tx.appendChild(bi('b', null, t.h)); tx.appendChild(bi('p', null, t.p)); c.appendChild(tx); tk.appendChild(c); });
        pane.appendChild(tk);
      }
      if (C.note) { var nt = el('p', 'cs-note'); nt.appendChild(bi('span', null, C.note)); pane.appendChild(nt); }
    }
    function buildModes(pane) {
      var M = B.modes;
      pane.appendChild(bi('p', 'cs-modes-intro', M.intro));
      var grid = el('div', 'cs-modes');
      M.cols.forEach(function (c) {
        var card = el('div', 'cs-mode ' + (c.tone || ''));
        var h = el('div', 'cs-mode-h'); h.appendChild(el('span', 'cs-mode-ic', CASE_ICO[c.icon] || '')); h.appendChild(bi('b', null, c.name)); card.appendChild(h);
        var dl = el('dl');
        M.rows.forEach(function (r, i) { dl.appendChild(bi('dt', null, r)); dl.appendChild(bi('dd', null, c.cells[i])); });
        card.appendChild(dl); grid.appendChild(card);
      });
      pane.appendChild(grid);
    }

    /* ── stepper ── */
    var STEPS = cs.steps.map(function (s) { return { title: s.title, short: s.short }; }).concat([{ title: cs.submit.title, short: cs.submit.short }]);
    var cur = Math.max(0, Math.min(STEPS.length - 1, locked ? STEPS.length - 1 : (D.step || 0)));
    var stepper = el('ol', 'cs-steps'); stepper.setAttribute('aria-label', 'Case steps');
    var prog = el('div', 'cs-prog'); var progBar = el('div', 'cs-prog-bar'); var progFill = el('i'); progBar.appendChild(progFill); var progTx = el('span', 'cs-prog-tx');
    prog.appendChild(progBar); prog.appendChild(progTx); prog.appendChild(savedAt);
    var body = el('div', 'cs-body');
    box.appendChild(stepper); box.appendChild(prog); box.appendChild(body);

    function drawStepper() {
      stepper.innerHTML = '';
      STEPS.forEach(function (s, i) {
        var ok = i < 3 ? stepDone(i) : locked;
        var li = el('li', 'cs-step' + (i === cur ? ' on' : '') + (ok ? ' done' : '') + (stepAllowed(i) ? '' : ' locked'));
        var b = el('button'); b.type = 'button'; b.disabled = !stepAllowed(i);
        b.innerHTML = '<span class="cs-step-n">' + (ok ? CASE_ICO.check : (i + 1)) + '</span>';
        b.appendChild(bi('span', 'cs-step-t', s.short || s.title));
        b.addEventListener('click', function () { go(i); });
        li.appendChild(b); stepper.appendChild(li);
      });
      var n = answered();
      progFill.style.width = (n / 8 * 100) + '%';
      progTx.textContent = (lang() === 'id' ? n + ' dari 8 pertanyaan terjawab' : n + ' of 8 questions answered');
    }
    function go(i) {
      if (!stepAllowed(i)) return;
      cur = i; D.step = i; persist(true); drawStepper(); drawBody();
      var top = box.querySelector('.cs-steps'); if (top) top.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /* field helpers */
    function field(v, opts) {
      var ta = el('textarea', 'cs-ta'); ta.rows = opts.rows || 2; ta.value = v || ''; ta.placeholder = opts.ph || ''; ta.disabled = locked;
      if (opts.label) ta.setAttribute('aria-label', opts.label);
      ta.addEventListener('input', function () { opts.on(ta.value); persist(); });
      return ta;
    }
    function qhead(label, title, help, okFn) {
      var h = el('div', 'cs-qh');
      var tag = el('span', 'cs-qtag', label);
      var t = el('div'); t.appendChild(bi('h4', null, title)); if (help) t.appendChild(bi('p', 'cs-qhelp', help));
      var st = el('span', 'cs-qstate');
      h.appendChild(tag); h.appendChild(t); h.appendChild(st);
      h._sync = function () { var ok = okFn(); st.className = 'cs-qstate' + (ok ? ' ok' : ''); st.innerHTML = ok ? CASE_ICO.check + '<span>' + (lang() === 'id' ? 'Lengkap' : 'Complete') + '</span>' : '<span>' + (lang() === 'id' ? 'Belum' : 'Open') + '</span>'; };
      h._sync();
      return h;
    }
    function guide(step) { var g = el('div', 'cs-guide'); g.appendChild(el('span', 'cs-guide-ic', CASE_ICO.flag)); g.appendChild(bi('p', null, step.guide)); return g; }
    function nav(i) {
      var f = el('div', 'cs-nav');
      if (i > 0) { var back = bi('button', 'lms-nav-btn', { en: '← Previous step', id: '← Langkah sebelumnya' }); back.type = 'button'; back.addEventListener('click', function () { go(i - 1); }); f.appendChild(back); }
      var msg = el('span', 'cs-nav-msg');
      var next = bi('button', 'lms-complete cs-next', i < 2 ? { en: 'Next step →', id: 'Langkah berikutnya →' } : { en: 'Review & submit →', id: 'Tinjau & kumpulkan →' }); next.type = 'button';
      next.addEventListener('click', function () {
        if (!stepDone(i)) { msg.textContent = lang() === 'id' ? 'Lengkapi setiap pertanyaan di langkah ini dulu.' : 'Complete every question in this step first.'; msg.classList.add('warn'); var open = body.querySelector('.cs-qstate:not(.ok)'); if (open) open.closest('.cs-q').scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
        go(i + 1);
      });
      f.appendChild(msg); f.appendChild(next);
      f._sync = function () { next.classList.toggle('ready', stepDone(i)); if (stepDone(i)) { msg.textContent = ''; msg.classList.remove('warn'); } };
      f._sync();
      return f;
    }
    var syncers = [];
    function syncAll() { syncers.forEach(function (fn) { fn(); }); drawStepper(); }

    /* ── step 1: define ── */
    function drawDefine(h) {
      h.appendChild(guide(S1));
      /* Q1 */
      var q = el('div', 'cs-q');
      var qh = qhead('Q1', Q1.title, Q1.help, done.q1); q.appendChild(qh); syncers.push(qh._sync);
      var stem = el('div', 'cs-stem'); stem.appendChild(bi('span', 'cs-stem-t', Q1.stem)); stem.appendChild(el('span', 'cs-stem-e', '…'));
      var ta = field(A.q1, { rows: 3, ph: T(Q1.placeholder), label: 'Q1', on: function (v) { A.q1 = v; wc._sync(); syncAll(); } });
      var wc = el('div', 'cs-wc'); wc._sync = function () { var n = words(A.q1); wc.textContent = (lang() === 'id' ? n + ' kata' : n + ' words') + (n < (Q1.min || 10) ? ' · ' + (lang() === 'id' ? 'minimal ' + (Q1.min || 10) : 'at least ' + (Q1.min || 10)) : ''); wc.classList.toggle('ok', n >= (Q1.min || 10)); }; wc._sync();
      var live = el('div', 'cs-live'); live._sync = function () { live.innerHTML = '<b>' + esc(T(Q1.stem)) + '</b> ' + esc(A.q1 || '…'); }; live._sync(); syncers.push(live._sync);
      var wrapF = el('div', 'cs-field'); wrapF.appendChild(stem); wrapF.appendChild(ta); wrapF.appendChild(wc);
      q.appendChild(wrapF); q.appendChild(live);
      if (Q1.example) { var ex = el('details', 'cs-example'); ex.appendChild(bi('summary', null, Q1.example.label)); ex.appendChild(bi('p', null, Q1.example.text)); q.appendChild(ex); }
      h.appendChild(q);
      /* Q2 */
      var q2 = el('div', 'cs-q');
      var q2h = qhead('Q2', Q2.title, Q2.help, done.q2); q2.appendChild(q2h); syncers.push(q2h._sync);
      A.q2 = A.q2 || {};
      var list = el('div', 'cs-smart');
      Q2.items.forEach(function (it) {
        var row = el('div', 'cs-smart-r' + (A.q2[it.k] === true ? ' yes' : A.q2[it.k] === false ? ' no' : ''));
        row.appendChild(el('span', 'cs-smart-k', it.k));
        var tx = el('div', 'cs-smart-t'); tx.appendChild(bi('b', null, it.name)); tx.appendChild(bi('span', null, it.ask)); var hint = bi('small', null, it.hint); tx.appendChild(hint); row.appendChild(tx);
        var seg = el('div', 'cs-seg');
        var by = bi('button', 'cs-seg-b' + (A.q2[it.k] === true ? ' on' : ''), { en: 'Yes', id: 'Ya' }); by.type = 'button'; by.disabled = locked;
        var bn = bi('button', 'cs-seg-b no' + (A.q2[it.k] === false ? ' on' : ''), { en: 'Not yet', id: 'Belum' }); bn.type = 'button'; bn.disabled = locked;
        function set(v) { A.q2[it.k] = v; by.classList.toggle('on', v === true); bn.classList.toggle('on', v === false); row.className = 'cs-smart-r' + (v ? ' yes' : ' no'); persist(); nudge._sync(); syncAll(); }
        by.addEventListener('click', function () { set(true); }); bn.addEventListener('click', function () { set(false); });
        seg.appendChild(by); seg.appendChild(bn); row.appendChild(seg); list.appendChild(row);
      });
      q2.appendChild(list);
      var nudge = el('div', 'cs-nudge'); nudge._sync = function () { var s = A.q2 || {}; var no = Q2.items.filter(function (it) { return s[it.k] === false; }); var un = Q2.items.filter(function (it) { return s[it.k] !== true && s[it.k] !== false; }); nudge.className = 'cs-nudge' + (no.length ? ' warn' : (un.length ? '' : ' ok')); nudge.innerHTML = no.length ? (lang() === 'id' ? 'Belum SMART pada <b>' + no.map(function (i) { return i.k; }).join(', ') + '</b> — kembali ke Q1, perbaiki kalimatnya, lalu centang lagi.' : 'Not yet SMART on <b>' + no.map(function (i) { return i.k; }).join(', ') + '</b> — go back to Q1, refine the wording, then tick again.') : (un.length ? (lang() === 'id' ? 'Nilai kelima kriteria.' : 'Rate all five criteria.') : (lang() === 'id' ? 'Kelima kriteria tercentang — pernyataanmu siap dipecah.' : 'All five ticked — your statement is ready to break down.')); }; nudge._sync();
      q2.appendChild(nudge);
      /* signals from the rule check, statement only */
      var sig = el('div', 'cs-signals'); sig._sync = function () { var r = caseReview(cs, A).filter(function (x) { return x.group === 'smart'; }); sig.innerHTML = '<b>' + (lang() === 'id' ? 'Sinyal dari kata-katamu (berbasis aturan)' : 'Signals from your wording (rule-based)') + '</b>' + r.map(function (x) { return '<span class="' + (x.ok ? 'ok' : 'warn') + '">' + esc(T(x.text)) + '</span>'; }).join(''); }; sig._sync(); syncers.push(sig._sync);
      q2.appendChild(sig);
      if (Q2.reflect) { var rf = el('div', 'cs-field'); rf.appendChild(bi('label', 'cs-lab', Q2.reflect)); rf.appendChild(field(A.q2.note, { rows: 2, on: function (v) { A.q2.note = v; } })); q2.appendChild(rf); }
      h.appendChild(q2);
      h.appendChild(nav(0)); syncers.push(h.lastChild._sync);
    }

    /* ── step 2: issue tree ── */
    function drawTree(h) {
      h.appendChild(guide(S2));
      var tree = el('div', 'cs-tree');
      var rootN = el('div', 'cs-root'); rootN._sync = function () { rootN.innerHTML = '<span class="cs-root-k">' + (lang() === 'id' ? 'Pernyataan masalah' : 'Problem statement') + '</span><b>' + esc(T(Q1.stem)) + ' ' + esc(A.q1 || '') + '</b>'; }; rootN._sync(); syncers.push(rootN._sync);
      tree.appendChild(rootN);
      var branches = el('div', 'cs-branches');
      S2.issues.forEach(function (iq, ii) {
        var qid = iq.id; A[qid] = A[qid] || { issue: '', subs: ['', ''] }; if (!A[qid].subs || A[qid].subs.length !== 2) A[qid].subs = [(A[qid].subs || [])[0] || '', (A[qid].subs || [])[1] || ''];
        var br = el('div', 'cs-branch');
        var qh = qhead('Q' + (3 + ii), iq.title, null, function () { return issueDone(ii); }); br.appendChild(qh); syncers.push(qh._sync);
        var node = el('div', 'cs-node cs-node-i');
        node.appendChild(el('span', 'cs-node-l', iq.letter));
        var stem = el('div', 'cs-stem'); stem.appendChild(bi('span', 'cs-stem-t', S2.stem)); stem.appendChild(el('span', 'cs-stem-e', '…'));
        var f = el('div', 'cs-field'); f.appendChild(stem); f.appendChild(field(A[qid].issue, { rows: 2, ph: T(iq.placeholder), label: iq.letter, on: function (v) { A[qid].issue = v; syncAll(); } })); node.appendChild(f);
        br.appendChild(node);
        var subs = el('div', 'cs-subs');
        [0, 1].forEach(function (si) {
          var sn = el('div', 'cs-node cs-node-s'); sn.appendChild(el('span', 'cs-node-l', iq.letter + (si + 1)));
          var sf = el('div', 'cs-field'); sf.appendChild(bi('label', 'cs-lab', { en: T(S2.subLabel) + ' ' + iq.letter + (si + 1), id: T(S2.subLabel) + ' ' + iq.letter + (si + 1) }));
          sf.appendChild(field(A[qid].subs[si], { rows: 2, ph: T(S2.subPlaceholder), label: iq.letter + (si + 1), on: function (v) { A[qid].subs[si] = v; syncAll(); } }));
          sn.appendChild(sf); subs.appendChild(sn);
        });
        br.appendChild(subs); branches.appendChild(br);
      });
      tree.appendChild(branches); h.appendChild(tree);
      /* Q6 MECE */
      var M = S2.mece; A.q6 = A.q6 || {};
      var q6 = el('div', 'cs-q');
      var q6h = qhead('Q6', M.title, M.help, done.q6); q6.appendChild(q6h); syncers.push(q6h._sync);
      var sig = el('div', 'cs-signals'); sig._sync = function () { var r = caseReview(cs, A).filter(function (x) { return x.group === 'tree'; }).slice(0, 3); sig.innerHTML = '<b>' + (lang() === 'id' ? 'Sinyal dari pohonmu (berbasis aturan)' : 'Signals from your tree (rule-based)') + '</b>' + r.map(function (x) { return '<span class="' + (x.ok ? 'ok' : 'warn') + '">' + esc(T(x.text)) + '</span>'; }).join(''); }; sig._sync(); syncers.push(sig._sync);
      q6.appendChild(sig);
      [['overlap', M.overlap], ['gap', M.gap]].forEach(function (pair) {
        var k = pair[0], spec = pair[1];
        var row = el('div', 'cs-mece'); row.appendChild(bi('b', null, spec.ask));
        var opts = el('div', 'cs-radio');
        [['yes', spec.yes], ['fixed', spec.fixed]].forEach(function (o) {
          var b = bi('button', 'cs-radio-b' + (A.q6[k] === o[0] ? ' on' : ''), o[1]); b.type = 'button'; b.disabled = locked;
          b.addEventListener('click', function () { A.q6[k] = o[0]; opts.querySelectorAll('.cs-radio-b').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); persist(); syncAll(); });
          opts.appendChild(b);
        });
        row.appendChild(opts);
        row.appendChild(field(A.q6[k + 'Note'], { rows: 1, ph: T(spec.note), on: function (v) { A.q6[k + 'Note'] = v; } }));
        q6.appendChild(row);
      });
      h.appendChild(q6);
      h.appendChild(nav(1)); syncers.push(h.lastChild._sync);
    }

    /* ── step 3: prioritise ── */
    function drawPrio(h) {
      h.appendChild(guide(S3));
      var MX = S3.matrix; A.q7 = A.q7 || { place: {} }; A.q7.place = A.q7.place || {};
      var q7 = el('div', 'cs-q');
      var q7h = qhead('Q7', MX.title, MX.help, done.q7); q7.appendChild(q7h); syncers.push(q7h._sync);
      q7.appendChild(bi('p', 'cs-ask', MX.ask));
      var ids = subIds();
      function subText(k) { var iq = S2.issues[['A', 'B', 'C'].indexOf(k[0])]; var x = A[iq.id] || {}; return (x.subs || [])[+k[1] - 1] || ''; }
      var selected = null;
      var tray = el('div', 'cs-tray'); var trayH = bi('div', 'cs-tray-h', { en: 'Sub-issues to place — tap one, then tap a quadrant', id: 'Sub-isu yang harus ditempatkan — ketuk satu, lalu ketuk kuadran' });
      var trayList = el('div', 'cs-tray-l');
      var grid = el('div', 'cs-matrix');
      var Q = ['hl', 'hh', 'll', 'lh'];   /* row-major: top-left, top-right, bottom-left, bottom-right */
      var cells = {};
      Q.forEach(function (qk) {
        var c = el('div', 'cs-quad q-' + qk); c.setAttribute('role', 'button'); c.setAttribute('tabindex', '0');
        var ch = el('div', 'cs-quad-h'); ch.appendChild(bi('b', null, MX.quadrants[qk])); if (MX.quadNotes) ch.appendChild(bi('span', null, MX.quadNotes[qk])); c.appendChild(ch);
        var cl = el('div', 'cs-quad-l'); c.appendChild(cl); cells[qk] = cl;
        function drop() { if (locked || !selected) return; A.q7.place[selected] = qk; selected = null; persist(); redraw(); syncAll(); }
        c.addEventListener('click', drop); c.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); drop(); } });
        grid.appendChild(c);
      });
      var yAx = el('div', 'cs-ax-y'); yAx.innerHTML = '<span>' + esc(T(MX.axes.y)) + '</span><i>' + esc(T(MX.axes.hi)) + ' ↑</i><i>' + esc(T(MX.axes.lo)) + ' ↓</i>';
      var xAx = el('div', 'cs-ax-x'); xAx.innerHTML = '<i>← ' + esc(T(MX.axes.lo)) + '</i><span>' + esc(T(MX.axes.x)) + '</span><i>' + esc(T(MX.axes.hi)) + ' →</i>';
      var mwrap = el('div', 'cs-mwrap'); mwrap.appendChild(yAx); var mcol = el('div'); mcol.appendChild(grid); mcol.appendChild(xAx); mwrap.appendChild(mcol);
      function chip(k, inQuad) {
        var c = el('button', 'cs-chip' + (selected === k ? ' sel' : '') + (A.q7.place[k] === 'hh' ? ' top' : '')); c.type = 'button'; c.disabled = locked;
        c.innerHTML = '<b>' + k + '</b><span>' + esc(subText(k) || (lang() === 'id' ? '(kosong)' : '(empty)')) + '</span>';
        c.title = subText(k);
        c.addEventListener('click', function (e) { e.stopPropagation(); if (locked) return; selected = selected === k ? null : k; redraw(); });
        var sel = el('select', 'cs-chip-sel'); sel.disabled = locked; sel.setAttribute('aria-label', k);
        sel.innerHTML = '<option value="">' + (lang() === 'id' ? 'Tempatkan…' : 'Place…') + '</option>' + Q.map(function (qk) { return '<option value="' + qk + '"' + (A.q7.place[k] === qk ? ' selected' : '') + '>' + esc(T(MX.quadrants[qk])) + '</option>'; }).join('');
        sel.addEventListener('click', function (e) { e.stopPropagation(); });
        sel.addEventListener('change', function () { if (sel.value) A.q7.place[k] = sel.value; else delete A.q7.place[k]; selected = null; persist(); redraw(); syncAll(); });
        var w = el('div', 'cs-chipw'); w.appendChild(c); w.appendChild(sel); return w;
      }
      function redraw() {
        trayList.innerHTML = ''; Q.forEach(function (qk) { cells[qk].innerHTML = ''; });
        var left = 0;
        ids.forEach(function (k) { var p = A.q7.place[k]; if (p && cells[p]) cells[p].appendChild(chip(k, true)); else { trayList.appendChild(chip(k, false)); left++; } });
        tray.classList.toggle('empty', !left);
        grid.classList.toggle('picking', !!selected);
        var hh = ids.filter(function (k) { return A.q7.place[k] === 'hh'; });
        verdict.className = 'cs-nudge' + (hh.length === 2 && !left ? ' ok' : (hh.length > 2 ? ' warn' : ''));
        verdict.innerHTML = left ? (lang() === 'id' ? left + ' sub-isu belum ditempatkan.' : left + ' sub-issue' + (left > 1 ? 's' : '') + ' still to place.') : hh.length === 2 ? (lang() === 'id' ? 'Dua pilihanmu: <b>' + hh.join('</b> dan <b>') + '</b>.' : 'Your two picks: <b>' + hh.join('</b> and <b>') + '</b>.') : hh.length > 2 ? (lang() === 'id' ? hh.length + ' di kanan atas — pilih dua saja; pindahkan sisanya.' : hh.length + ' top-right — choose two; move the others.') : (lang() === 'id' ? 'Kurang dari dua di kanan atas — mana yang benar-benar berdampak sekaligus layak?' : 'Fewer than two top-right — which are genuinely both impactful and feasible?');
        picksNote._sync();
      }
      var verdict = el('div', 'cs-nudge');
      tray.appendChild(trayH); tray.appendChild(trayList);
      q7.appendChild(tray); q7.appendChild(mwrap); q7.appendChild(verdict);
      h.appendChild(q7);
      /* Q8 */
      var RV = S3.review; A.q8 = A.q8 || {};
      var q8 = el('div', 'cs-q');
      var q8h = qhead('Q8', RV.title, RV.help, done.q8); q8.appendChild(q8h); syncers.push(q8h._sync);
      q8.appendChild(bi('p', 'cs-ask', RV.ask));
      var picksNote = el('div', 'cs-picks'); picksNote._sync = function () { var hh = ids.filter(function (k) { return A.q7.place[k] === 'hh'; }); picksNote.innerHTML = hh.length ? hh.map(function (k) { return '<span><b>' + k + '</b> ' + esc(subText(k)) + '</span>'; }).join('') : '<span class="muted">' + (lang() === 'id' ? 'Belum ada pilihan di kuadran kanan atas.' : 'No picks in the top-right quadrant yet.') + '</span>'; };
      q8.appendChild(picksNote);
      var opts = el('div', 'cs-radio');
      [['confirm', RV.confirm], ['changed', RV.changed]].forEach(function (o) {
        var b = bi('button', 'cs-radio-b' + (A.q8.mode === o[0] ? ' on' : ''), o[1]); b.type = 'button'; b.disabled = locked;
        b.addEventListener('click', function () { A.q8.mode = o[0]; A.q8.confirm = true; opts.querySelectorAll('.cs-radio-b').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); persist(); syncAll(); });
        opts.appendChild(b);
      });
      q8.appendChild(opts);
      var rf = el('div', 'cs-field'); rf.appendChild(bi('label', 'cs-lab', RV.rationale));
      var rta = field(A.q8.note, { rows: 4, ph: T(RV.placeholder), on: function (v) { A.q8.note = v; rwc._sync(); syncAll(); } });
      var rwc = el('div', 'cs-wc'); rwc._sync = function () { var n = words(A.q8.note), m = RV.min || 25; rwc.textContent = (lang() === 'id' ? n + ' kata' : n + ' words') + (n < m ? ' · ' + (lang() === 'id' ? 'minimal ' + m : 'at least ' + m) : ''); rwc.classList.toggle('ok', n >= m); }; rwc._sync();
      rf.appendChild(rta); rf.appendChild(rwc); q8.appendChild(rf);
      h.appendChild(q8);
      h.appendChild(nav(2)); syncers.push(h.lastChild._sync);
      redraw();
    }

    /* ── step 4: review & submit ── */
    function summaryText() {
      var L = lang() === 'id';
      var lines = [T(cs.title) + ' — ' + (L ? 'Tugas kasus' : 'Case assignment') + ' 3.4', ''];
      lines.push('Q1 ' + T(Q1.stem) + ' ' + (A.q1 || ''));
      lines.push('Q2 SMART: ' + Q2.items.map(function (it) { return it.k + (A.q2 && A.q2[it.k] ? '✓' : '·'); }).join(' ') + (A.q2 && A.q2.note ? ' — ' + A.q2.note : ''));
      S2.issues.forEach(function (iq, i) { var x = A[iq.id] || {}; lines.push('Q' + (3 + i) + ' ' + iq.letter + ': ' + T(S2.stem) + ' ' + (x.issue || '')); (x.subs || []).forEach(function (s, k) { lines.push('   ' + iq.letter + (k + 1) + ': ' + s); }); });
      var m = A.q6 || {}; lines.push('Q6 MECE — ' + (L ? 'tumpang tindih' : 'overlaps') + ': ' + (m.overlap || '–') + (m.overlapNote ? ' (' + m.overlapNote + ')' : '') + '; ' + (L ? 'celah' : 'gaps') + ': ' + (m.gap || '–') + (m.gapNote ? ' (' + m.gapNote + ')' : ''));
      var p = (A.q7 || {}).place || {}; lines.push('Q7 ' + subIds().map(function (k) { return k + '→' + (p[k] ? T(S3.matrix.quadrants[p[k]]) : '–'); }).join('; '));
      var hh = subIds().filter(function (k) { return p[k] === 'hh'; }); lines.push('   ' + (L ? 'Pilihan' : 'Picks') + ': ' + hh.join(', '));
      lines.push('Q8 ' + ((A.q8 || {}).mode === 'changed' ? (L ? 'diubah lalu dikonfirmasi' : 'changed, then confirmed') : (A.q8 || {}).confirm ? (L ? 'dikonfirmasi' : 'confirmed') : '–') + ' — ' + ((A.q8 || {}).note || ''));
      if (D.submitted) lines.push('', (L ? 'Dikumpulkan ' : 'Submitted ') + new Date(D.submitted.at).toLocaleString() + ' · ' + D.submitted.id);
      return lines.join('\n');
    }
    function drawSubmit(h) {
      var SB = cs.submit;
      if (locked) {
        var ok = el('div', 'cs-done');
        ok.appendChild(el('span', 'cs-done-ic', CASE_ICO.check));
        var t = el('div'); t.appendChild(bi('h4', null, SB.doneTitle)); t.appendChild(bi('p', null, SB.doneBody));
        t.appendChild(el('p', 'cs-done-meta', (lang() === 'id' ? 'Dikumpulkan ' : 'Submitted ') + new Date(D.submitted.at).toLocaleString() + ' · ' + esc(D.submitted.id)));
        ok.appendChild(t); h.appendChild(ok);
      } else h.appendChild(bi('p', 'cs-lead', SB.lead));
      /* answers */
      var rev = el('div', 'cs-review');
      function item(label, title, stepIdx, html, okv) {
        var r = el('div', 'cs-rv' + (okv ? ' ok' : ''));
        var hh = el('div', 'cs-rv-h'); hh.appendChild(el('span', 'cs-qtag', label)); hh.appendChild(bi('b', null, title));
        var st = el('span', 'cs-qstate' + (okv ? ' ok' : '')); st.innerHTML = okv ? CASE_ICO.check + '<span>' + (lang() === 'id' ? 'Lengkap' : 'Complete') + '</span>' : '<span>' + (lang() === 'id' ? 'Belum' : 'Open') + '</span>'; hh.appendChild(st);
        if (!locked) { var ed = bi('button', 'cs-edit', { en: 'Edit', id: 'Edit' }); ed.type = 'button'; ed.addEventListener('click', function () { go(stepIdx); }); hh.appendChild(ed); }
        r.appendChild(hh); r.appendChild(el('div', 'cs-rv-b', html)); rev.appendChild(r);
      }
      item('Q1', Q1.title, 0, '<p><b>' + esc(T(Q1.stem)) + '</b> ' + esc(A.q1 || '—') + '</p>', done.q1());
      item('Q2', Q2.title, 0, '<p class="cs-rv-smart">' + Q2.items.map(function (it) { var v = A.q2 && A.q2[it.k]; return '<span class="' + (v === true ? 'yes' : v === false ? 'no' : '') + '">' + it.k + ' ' + esc(T(it.name)) + '</span>'; }).join('') + '</p>' + (A.q2 && A.q2.note ? '<p>' + esc(A.q2.note) + '</p>' : ''), done.q2());
      S2.issues.forEach(function (iq, i) { var x = A[iq.id] || {}; item('Q' + (3 + i), iq.title, 1, '<p><b>' + esc(T(S2.stem)) + '</b> ' + esc(x.issue || '—') + '</p><ul>' + (x.subs || ['', '']).map(function (s, k) { return '<li><b>' + iq.letter + (k + 1) + '</b> ' + esc(s || '—') + '</li>'; }).join('') + '</ul>', issueDone(i)); });
      var m = A.q6 || {}; item('Q6', S2.mece.title, 1, '<p><b>' + esc(T({ en: 'Overlaps', id: 'Tumpang tindih' })) + ':</b> ' + esc(m.overlap === 'yes' ? T(S2.mece.overlap.yes) : m.overlap === 'fixed' ? T(S2.mece.overlap.fixed) : '—') + (m.overlapNote ? ' · ' + esc(m.overlapNote) : '') + '</p><p><b>' + esc(T({ en: 'Gaps', id: 'Celah' })) + ':</b> ' + esc(m.gap === 'yes' ? T(S2.mece.gap.yes) : m.gap === 'fixed' ? T(S2.mece.gap.fixed) : '—') + (m.gapNote ? ' · ' + esc(m.gapNote) : '') + '</p>', done.q6());
      var p = (A.q7 || {}).place || {}; var hh = subIds().filter(function (k) { return p[k] === 'hh'; });
      item('Q7', S3.matrix.title, 2, '<p class="cs-rv-picks">' + (hh.length ? hh.map(function (k) { var iq = S2.issues[['A', 'B', 'C'].indexOf(k[0])]; return '<span><b>' + k + '</b> ' + esc(((A[iq.id] || {}).subs || [])[+k[1] - 1] || '') + '</span>'; }).join('') : '—') + '</p><p class="cs-rv-place">' + subIds().map(function (k) { return '<span>' + k + ' → ' + esc(p[k] ? T(S3.matrix.quadrants[p[k]]) : '—') + '</span>'; }).join('') + '</p>', done.q7());
      item('Q8', S3.review.title, 2, '<p>' + esc((A.q8 || {}).mode === 'changed' ? T(S3.review.changed) : (A.q8 || {}).confirm ? T(S3.review.confirm) : '—') + '</p><p>' + esc((A.q8 || {}).note || '—') + '</p>', done.q8());
      h.appendChild(rev);
      /* framework check */
      var fc = el('div', 'cs-fcheck');
      fc.appendChild(bi('h4', null, { en: 'Framework check · rule-based, not a grade', id: 'Pengecekan kerangka · berbasis aturan, bukan nilai' }));
      var res = caseReview(cs, A), groups = [['smart', { en: 'SMART problem statement', id: 'Pernyataan masalah SMART' }], ['tree', { en: 'Issue structuring & MECE', id: 'Struktur isu & MECE' }], ['prio', { en: 'Prioritisation', id: 'Prioritisasi' }]];
      var cols = el('div', 'cs-fc-grid');
      groups.forEach(function (gp) { var c = el('div', 'cs-fc'); c.appendChild(bi('b', null, gp[1])); var ul = el('ul'); res.filter(function (x) { return x.group === gp[0]; }).forEach(function (x) { var li = el('li', x.ok ? 'ok' : 'warn'); li.innerHTML = '<i>' + (x.ok ? CASE_ICO.check : '!') + '</i><span>' + esc(T(x.text)) + '</span>'; ul.appendChild(li); }); c.appendChild(ul); cols.appendChild(c); });
      fc.appendChild(cols); h.appendChild(fc);
      /* actions */
      var act = el('div', 'cs-submit');
      if (!locked) {
        var all = QIDS.every(function (q) { return done[q](); });
        var msg = el('p', 'cs-submit-msg' + (all ? ' ok' : '')); msg.innerHTML = all ? (lang() === 'id' ? 'Delapan dari delapan pertanyaan lengkap. Tinjau sekali lagi, lalu kumpulkan.' : 'Eight of eight questions complete. Read it once more, then submit.') : (lang() === 'id' ? answered() + ' dari 8 lengkap — buka pertanyaan yang masih terbuka lewat tombol Edit.' : answered() + ' of 8 complete — open the questions still marked Open with Edit.');
        act.appendChild(msg);
        var sb = bi('button', 'lms-complete cs-submit-b', SB.button); sb.type = 'button'; sb.disabled = !all;
        var conf = el('div', 'cs-confirm'); conf.hidden = true;
        conf.appendChild(bi('b', null, SB.confirmTitle)); conf.appendChild(bi('p', null, SB.confirmBody));
        var cy = bi('button', 'lms-complete', SB.confirmYes); cy.type = 'button'; var cn = bi('button', 'lms-nav-btn', SB.confirmNo); cn.type = 'button';
        var cb = el('div', 'cs-confirm-b'); cb.appendChild(cn); cb.appendChild(cy); conf.appendChild(cb);
        sb.addEventListener('click', function () { conf.hidden = false; sb.hidden = true; conf.scrollIntoView({ behavior: 'smooth', block: 'center' }); });
        cn.addEventListener('click', function () { conf.hidden = true; sb.hidden = false; });
        cy.addEventListener('click', function () {
          D.submitted = { at: Date.now(), id: 'HC-' + Date.now().toString(36).toUpperCase().slice(-6) };
          D.step = 3; caseWrite(l, D); locked = true; box.classList.add('locked');
          drawStepper(); drawBody(); refreshComplete();
          box.querySelector('.cs-done').scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
        act.appendChild(sb); act.appendChild(conf);
      }
      var row = el('div', 'cs-submit-row');
      var cp = bi('button', 'lms-nav-btn', SB.copy); cp.type = 'button'; var cpm = el('span', 'cs-nav-msg');
      cp.addEventListener('click', function () { var t = summaryText(); var ok2 = function () { cpm.textContent = T(SB.copied); }; if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(ok2, ok2); else ok2(); });
      row.appendChild(cp); row.appendChild(cpm); act.appendChild(row);
      act.appendChild(bi('p', 'cs-local', SB.local));
      var rs = el('details', 'cs-reset'); rs.appendChild(bi('summary', null, SB.reset)); var rsb = el('div'); rsb.appendChild(bi('p', null, SB.resetConfirm));
      var rby = bi('button', 'lms-nav-btn danger', { en: 'Yes, clear everything', id: 'Ya, hapus semuanya' }); rby.type = 'button';
      rby.addEventListener('click', function () { try { localStorage.removeItem(caseKey(l)); } catch (e) {} var p2 = progress(); if (p2[l.n]) { delete p2[l.n]; saveProgress(p2); } openLesson(current); });
      rsb.appendChild(rby); rs.appendChild(rsb); act.appendChild(rs);
      h.appendChild(act);
    }

    function drawBody() {
      syncers = []; body.innerHTML = '';
      var pane = el('div', 'cs-pane-s');
      var hd2 = el('div', 'cs-step-h'); hd2.appendChild(el('span', 'cs-step-k', (lang() === 'id' ? 'Langkah ' : 'Step ') + (cur + 1) + ' / ' + STEPS.length)); hd2.appendChild(bi('h3', null, STEPS[cur].title)); pane.appendChild(hd2);
      if (cur === 0) drawDefine(pane); else if (cur === 1) drawTree(pane); else if (cur === 2) drawPrio(pane); else drawSubmit(pane);
      body.appendChild(pane);
      if (locked) body.querySelectorAll('textarea,select,button.cs-seg-b,button.cs-radio-b,button.cs-chip').forEach(function (n) { n.disabled = true; });
    }
    drawStepper(); drawBody();
    host.appendChild(box);
  }

  function renderInsights(l, host) {
    var ins = l.insights;
    if (!ins || !ins.items || !ins.items.length) return;
    var box = el('div', 'lms-insights');
    var hd = el('div', 'li-head');
    hd.appendChild(bi('h3', null, ins.title || { en: 'Field insights', id: 'Wawasan lapangan' }));
    if (ins.lead) hd.appendChild(bi('p', 'li-lead', ins.lead));
    box.appendChild(hd);
    var grid = el('div', 'li-grid');
    ins.items.forEach(function (it, k) {
      var c = el('article', 'li-card');
      var num = (k < 9 ? '0' : '') + (k + 1);
      c.appendChild(bi('span', 'li-kicker', { en: (it.tag && it.tag.en) || ('Insight ' + num), id: (it.tag && it.tag.id) || ('Wawasan ' + num) }));
      c.appendChild(bi('h4', null, it.h));
      c.appendChild(bi('p', null, glossify(it.body, l.glossary)));
      grid.appendChild(c);
    });
    box.appendChild(grid);
    host.appendChild(box);
  }

  var KIT_KEY = 'mt-lms-kit:' + slug;
  function kitRead() { try { return JSON.parse(localStorage.getItem(KIT_KEY) || '{}') || {}; } catch (e) { return {}; } }
  function kitWrite(d) { try { localStorage.setItem(KIT_KEY, JSON.stringify(d)); } catch (e) {} }
  var KIT_KIND = {
    template: { en: 'Template', id: 'Templat' }, checklist: { en: 'Checklist', id: 'Daftar periksa' }, script: { en: 'Script', id: 'Naskah' },
    prompt: { en: 'AI prompt', id: 'Prompt AI' }, worksheet: { en: 'Worksheet', id: 'Lembar kerja' }, guide: { en: 'Quick guide', id: 'Panduan singkat' }
  };
  function plain(html) { var d = document.createElement('div'); d.innerHTML = html; return d.textContent; }
  function kitText(it) {
    var lg = lang();
    var lines = [plain(it.title[lg] || it.title.en), ''];
    (it.body || []).forEach(function (p) { var t = plain(p[lg] || p.en); lines.push(it.kind === 'checklist' ? '[ ] ' + t : t); });
    return lines.join('\n');
  }
  function renderResources(l, host) {
    var kit = l.resources;
    if (!kit || !kit.items || !kit.items.length) return;
    var box = el('div', 'lms-kit');
    var hd = el('div', 'lk-head');
    hd.appendChild(el('span', 'lk-ico', iconSvg('briefcase', 20)));
    var ht = el('div');
    ht.appendChild(bi('h3', null, kit.title || { en: 'Resource kit', id: 'Perangkat sumber daya' }));
    ht.appendChild(bi('p', 'lk-lead', kit.lead || { en: 'Working documents for this lesson — copy them, tick them off, or save them as text. Everything stays on your device.', id: 'Dokumen kerja untuk pelajaran ini — salin, centang, atau simpan sebagai teks. Semuanya tetap di perangkatmu.' }));
    hd.appendChild(ht);
    box.appendChild(hd);
    var st = kitRead();
    kit.items.forEach(function (it, k) {
      var card = el('article', 'lk-item');
      card.setAttribute('data-kind', it.kind || 'template');
      var top = el('button', 'lk-top'); top.type = 'button'; top.setAttribute('aria-expanded', 'false');
      var meta = el('div', 'lk-meta');
      meta.appendChild(bi('span', 'lk-kind', KIT_KIND[it.kind] || KIT_KIND.template));
      if (it.kind === 'checklist') {
        var done = 0; (it.body || []).forEach(function (_, j) { if (st[l.n + ':' + k + ':' + j]) done++; });
        var prog = bi('span', 'lk-prog', { en: done + '/' + it.body.length + ' done', id: done + '/' + it.body.length + ' selesai' });
        meta.appendChild(prog);
      }
      var tt = el('div', 'lk-title');
      tt.appendChild(bi('b', null, it.title));
      if (it.desc) tt.appendChild(bi('span', null, it.desc));
      top.appendChild(meta); top.appendChild(tt);
      top.appendChild(el('span', 'lk-chev', '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>'));
      card.appendChild(top);
      var body = el('div', 'lk-body');
      if (it.kind === 'checklist') {
        var ul = el('ul', 'lk-check');
        (it.body || []).forEach(function (p, j) {
          var key = l.n + ':' + k + ':' + j;
          var li = el('li'); var lab = el('label');
          var cb = document.createElement('input'); cb.type = 'checkbox'; cb.checked = !!st[key];
          if (cb.checked) li.classList.add('on');
          cb.addEventListener('change', function () {
            var d = kitRead(); if (cb.checked) d[key] = 1; else delete d[key]; kitWrite(d);
            li.classList.toggle('on', cb.checked);
            var n = 0; (it.body || []).forEach(function (_, jj) { if (d[l.n + ':' + k + ':' + jj]) n++; });
            var pr = card.querySelector('.lk-prog'); if (pr) { pr.setAttribute('data-en', n + '/' + it.body.length + ' done'); pr.setAttribute('data-id', n + '/' + it.body.length + ' selesai'); pr.textContent = lang() === 'id' ? n + '/' + it.body.length + ' selesai' : n + '/' + it.body.length + ' done'; }
          });
          lab.appendChild(cb); lab.appendChild(bi('span', null, p));
          li.appendChild(lab); ul.appendChild(li);
        });
        body.appendChild(ul);
      } else {
        var pre = el('div', 'lk-lines');
        (it.body || []).forEach(function (p) { pre.appendChild(bi('p', p.en === '' ? 'lk-gap' : null, p)); });
        body.appendChild(pre);
      }
      var act = el('div', 'lk-act');
      var cp = el('button', 'lk-btn'); cp.type = 'button';
      cp.appendChild(bi('span', null, { en: 'Copy text', id: 'Salin teks' }));
      cp.addEventListener('click', function () {
        var t = kitText(it);
        var done = function () { cp.classList.add('ok'); cp.querySelector('span').textContent = lang() === 'id' ? 'Tersalin ✓' : 'Copied ✓'; setTimeout(function () { cp.classList.remove('ok'); cp.querySelector('span').textContent = lang() === 'id' ? 'Salin teks' : 'Copy text'; }, 2400); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, done); else done();
      });
      var dl = el('button', 'lk-btn'); dl.type = 'button';
      dl.appendChild(bi('span', null, { en: 'Save as .txt', id: 'Simpan .txt' }));
      dl.addEventListener('click', function () {
        var blob = new Blob([kitText(it)], { type: 'text/plain;charset=utf-8' });
        var a = document.createElement('a'); a.href = URL.createObjectURL(blob);
        a.download = (slug + '-' + l.n + '-' + plain(it.title.en).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.txt');
        document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 800);
      });
      act.appendChild(cp); act.appendChild(dl);
      body.appendChild(act);
      card.appendChild(body);
      top.addEventListener('click', function () { var open = card.classList.toggle('open'); top.setAttribute('aria-expanded', open ? 'true' : 'false'); });
      box.appendChild(card);
    });
    host.appendChild(box);
  }

  function renderJourney(l, host) {
    var j = l.journey;
    if (!j || !j.now) return;
    var box = el('div', 'lms-journey');
    box.appendChild(bi('h3', null, j.title || { en: 'Where this sits in your journey', id: 'Posisi pelajaran ini dalam perjalananmu' }));
    var strip = el('div', 'lj-strip');
    [['before', j.before, { en: 'Before this', id: 'Sebelum ini' }], ['now', j.now, { en: 'This module', id: 'Modul ini' }], ['next', j.next, { en: 'Next move', id: 'Langkah berikutnya' }]].forEach(function (row) {
      var st = row[1]; if (!st) return;
      var c = el('div', 'lj-step lj-' + row[0]);
      c.appendChild(bi('span', 'lj-kicker', row[2]));
      c.appendChild(bi('b', null, st.label));
      if (st.desc) c.appendChild(bi('p', null, st.desc));
      if (row[0] === 'next') {
        if (st.tool) {
          var b = bi('button', 'lms-complete lj-go', st.cta || { en: 'Open the tool →', id: 'Buka alatnya →' });
          b.addEventListener('click', function () { document.dispatchEvent(new CustomEvent('mt:launch-tool', { detail: { tool: st.tool, mode: st.mode || 'home', lesson: l.n } })); });
          c.appendChild(b);
        } else if (st.href) {
          var a = bi('a', 'lms-complete lj-go', st.cta || { en: 'Go there →', id: 'Ke sana →' });
          a.href = st.href;
          c.appendChild(a);
        } else if (st.lesson) {
          var b2 = bi('button', 'lms-complete lj-go', st.cta || { en: 'Continue →', id: 'Lanjut →' });
          b2.addEventListener('click', function () { var idx = -1; FLAT.forEach(function (x, i) { if (x.l.n === st.lesson) idx = i; }); if (idx >= 0 && canAccess(idx)) openLesson(idx); });
          c.appendChild(b2);
        }
      }
      strip.appendChild(c);
    });
    box.appendChild(strip);
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
      REG.product[lang()] + ' — ' + (lang() === 'id' ? 'Modul ' : 'Module ') + m.num;
    root.querySelector('.lc-les').textContent = l.n + ' · ' + l.title[lang()].replace(/&amp;/g, '&');
    root.querySelector('.lmsp-count').textContent =
      (lang() === 'id' ? 'Pelajaran ' : 'Lesson ') + (i + 1) + ' / ' + FLAT.length;
    root.querySelector('.lmsp-bar').style.width = (doneCount() / FLAT.length * 100) + '%';

    innerEl.innerHTML = '';
    innerEl.classList.remove('lms-enter');
    void innerEl.offsetWidth;
    innerEl.classList.add('lms-enter');
    if (l.placeholder) innerEl.appendChild(phNotice());

    /* ─── lesson header: editorial left column + hero image card ───
       hero source chain: lesson.hero → module.hero → registry media.poster.
       With a hero, objectives live on the image card; without, they render
       as the classic panel — fully backward compatible. */
    var hero = l.hero || m.hero || (REG.media && REG.media.poster);
    var head = el('div', 'lms-head' + (hero ? ' has-hero' : ''));
    var hl = el('div', 'lms-head-l');
    hl.appendChild(bi('span', 'lms-modchip', { en: 'Module ' + m.num, id: 'Modul ' + m.num }));
    hl.appendChild(bi('h2', 'lms-title', l.title));
    var meta = el('div', 'lms-meta');
    var kindLabel = { video: ['Video', 'Video'], reading: ['Reading', 'Bacaan'], interactive: ['Interactive', 'Interaktif'], slides: ['Slides', 'Slide'], visual: ['Visual', 'Visual'], assignment: ['Case assignment', 'Tugas kasus'] }[l.kind];
    meta.appendChild(bi('span', 'lms-chip gold', { en: '📖 ' + kindLabel[0], id: '📖 ' + kindLabel[1] }));
    meta.appendChild(bi('span', 'lms-chip', l.dur));
    var nVid = (l.videos ? l.videos.length : 0) + (l.videoBlocks || []).reduce(function (a, b) { return a + (b && b.videos ? b.videos.length : 0); }, 0);
    if (nVid) meta.appendChild(bi('span', 'lms-chip gold', { en: '🎬 ' + nVid + (nVid === 1 ? ' video' : ' videos'), id: '🎬 ' + nVid + ' video' }));
    meta.appendChild(bi('span', 'lms-chip' + (isDone(l.n) ? ' ok' : ''), isDone(l.n) ? { en: '✓ Completed', id: '✓ Selesai' } : { en: 'In progress', id: 'Sedang berjalan' }));
    hl.appendChild(meta);
    if (l.quote) {
      var qt = el('div', 'lms-quote');
      qt.appendChild(el('span', 'lq-mark', '“'));
      qt.appendChild(bi('p', null, l.quote));
      qt.appendChild(el('span', 'lq-spark', '✦'));
      hl.appendChild(qt);
    }
    hl.appendChild(bi('p', 'lms-overview', glossify(l.overview, l.glossary)));
    head.appendChild(hl);

    function objList() {
      var ul = el('ul');
      l.objectives.forEach(function (o) { ul.appendChild(bi('li', null, o)); });
      return ul;
    }
    if (hero) {
      var hr = el('div', 'lms-head-r');
      var hcard = el('div', 'lms-hero');
      var him = document.createElement('img');
      him.src = hero; him.alt = ''; him.loading = 'lazy'; him.decoding = 'async';
      if (l.heroPos || m.heroPos) him.style.objectPosition = l.heroPos || m.heroPos;
      hcard.appendChild(him);
      hcard.appendChild(el('div', 'lh-grade'));
      var obj0 = el('div', 'lms-panel lms-obj');
      obj0.appendChild(el('span', 'lh-badge', iconSvg(l.heroIcon || 'book', 17)));
      obj0.appendChild(bi('h3', null, { en: 'What you will learn', id: 'Yang akan kamu pelajari' }));
      obj0.appendChild(objList());
      hcard.appendChild(obj0);
      hr.appendChild(hcard);
      head.appendChild(hr);
      innerEl.appendChild(head);
    } else {
      innerEl.appendChild(head);
      var obj = el('div', 'lms-panel lms-obj');
      obj.appendChild(bi('h3', null, { en: 'What you will learn', id: 'Yang akan kamu pelajari' }));
      obj.appendChild(objList());
      innerEl.appendChild(obj);
    }

    /* Slide decks (`material`: one block or an array) and the intro videos.
       Videos lead by default; `videosPlacement: 'after-material'` puts them
       after the last deck, `'after-material:N'` after the Nth deck, so a
       lesson can run deck → videos → deck before its reading sections. */
    var decks = Array.isArray(l.material) ? l.material : (l.material ? [l.material] : []);
    /* Lesson films: the legacy `videos` list plus any `videoBlocks`, each
       placed by its own 'after-material[:N]' (or leading the lesson). */
    var vblocks = [];
    if (l.videos && l.videos.length) vblocks.push({ legacy: true, videos: l.videos, placement: l.videosPlacement });
    (l.videoBlocks || []).forEach(function (b, i) { if (b && b.videos && b.videos.length) vblocks.push({ key: b.key || ('b' + (i + 1)), videos: b.videos, placement: b.placement, kicker: b.kicker, intro: b.intro, outro: b.outro }); });
    var vidsAfter = {}, vidsLead = [];
    vblocks.forEach(function (b) {
      var vpm = /^after-material(?::(\d+))?$/.exec(b.placement || '');
      var n = vpm && decks.length ? Math.min(decks.length, vpm[1] ? +vpm[1] : decks.length) : 0;
      if (n) (vidsAfter[n] = vidsAfter[n] || []).push(b); else vidsLead.push(b);
    });
    /* YouTube films (`youtube`: one block or an array) likewise sit before
       the knowledge check by default; a block's `placement: 'after-material[:N]'`
       (or the lesson-level `youtubePlacement` for a single block) plays it
       straight after a deck, so a lesson can run deck → film → deck → film. */
    var films = Array.isArray(l.youtube) ? l.youtube : (l.youtube ? [l.youtube] : []);
    var filmsAfter = {};   /* deck index (1-based) → films placed after it */
    var filmsLate = [];    /* films before the knowledge check */
    films.forEach(function (y) {
      var ypm = /^after-material(?::(\d+))?$/.exec(y.placement || l.youtubePlacement || '');
      var n = ypm && decks.length ? Math.min(decks.length, ypm[1] ? +ypm[1] : decks.length) : 0;
      if (n) (filmsAfter[n] = filmsAfter[n] || []).push(y); else filmsLate.push(y);
    });
    vidsLead.forEach(function (b) { renderIntroVideos(l, innerEl, b.legacy ? {} : { block: b }); });
    decks.forEach(function (m, k) {
      renderMaterial(l, innerEl, m, k);
      var vb = vidsAfter[k + 1] || [];
      vb.forEach(function (b, j) {
        renderIntroVideos(l, innerEl, { block: b.legacy ? null : b, next: j + 1 < vb.length || (filmsAfter[k + 1] || []).length ? 'film' : k + 1 < decks.length ? 'material' : (l.sections && l.sections.length ? 'lesson' : 'check') });
      });
      (filmsAfter[k + 1] || []).forEach(function (y, j, arr) {
        renderYouTube(l, innerEl, { block: y, next: j + 1 < arr.length ? 'film' : k + 1 < decks.length ? 'material' : 'lesson' });
      });
    });
    renderScenario(l, innerEl);
    if (l.caseStudy) renderCase(l, innerEl);   /* the interactive case assignment, after its brief deck */
    /* A slides or visual lesson that also carries reading `sections` leads
       with its deck/hotspot piece, then the exhibit and the sections — the
       same deck → exhibit → sections progression as The Map benchmark. */
    var lateSections = (l.kind === 'slides' || l.kind === 'visual') && l.sections && l.sections.length;
    if (!lateSections) renderDiagram(l, innerEl);
    if (l.kind === 'video') renderVideo(l, innerEl);
    if (l.kind === 'reading' || l.kind === 'interactive') renderSections(l, innerEl);
    if (l.forage && l.forage.directory) renderForage(l, innerEl);   /* the directory lesson leads with the catalogue */
    if (l.kind === 'interactive') { if (l.simlog && l.simlog.early) renderSimLog(l, innerEl); renderSteps(l, innerEl); }
    if (l.kind === 'slides' && l.slides) renderDeck(l, innerEl);   /* a slides lesson may instead carry `material` (designed deck) */
    if (l.kind === 'visual') renderVisual(l, innerEl);
    if (lateSections) { renderDiagram(l, innerEl); renderSections(l, innerEl); }
    renderInsights(l, innerEl);
    renderCompare(l, innerEl);
    renderMistakes(l, innerEl);
    renderGlossary(l, innerEl);
    if (!(l.forage && l.forage.directory)) renderForage(l, innerEl);
    if (!(l.simlog && l.simlog.early)) renderSimLog(l, innerEl);
    renderListen(l, innerEl);
    if (l.tool) renderTool(l, innerEl);
    renderResources(l, innerEl);
    filmsLate.forEach(function (y, j) { renderYouTube(l, innerEl, { block: y, next: j + 1 < filmsLate.length ? 'film' : 'check' }); });   /* YouTube lesson films in the player skin */
    renderCheck(l, innerEl);
    renderTryIt(l, innerEl);

    if (l.takeaways) {
      var tk = el('div', 'lms-panel lms-takeaways');
      tk.appendChild(bi('h3', null, { en: 'Key takeaways', id: 'Poin penting' }));
      if (l.takeawaysLead) tk.appendChild(bi('p', 'lms-tk-lead', l.takeawaysLead));   /* an optional sentence that frames the list */
      var tul = el('ul');
      l.takeaways.forEach(function (t) { tul.appendChild(bi('li', null, t)); });
      tk.appendChild(tul);
      innerEl.appendChild(tk);
    }
    renderJourney(l, innerEl);

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
    var btn = root.querySelector('.lmsp-foot .lms-complete');
    btn.disabled = false;
    if (isDone(l.n)) {
      btn.className = 'lms-complete done';
      btn.innerHTML = '✓ <span data-en="Completed" data-id="Selesai">' + (lang() === 'id' ? 'Selesai' : 'Completed') + '</span>';
    } else if (l.caseStudy && !caseSubmitted(l)) {
      /* a case assignment completes only once its answers are submitted */
      btn.className = 'lms-complete gated'; btn.disabled = true;
      btn.innerHTML = '<span data-en="Submit the case to complete" data-id="Kumpulkan kasus untuk menyelesaikan">' + (lang() === 'id' ? 'Kumpulkan kasus untuk menyelesaikan' : 'Submit the case to complete') + '</span>';
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
  var KIND_LABEL = {
    video: { en: 'Video', id: 'Video' },
    reading: { en: 'Reading', id: 'Bacaan' },
    interactive: { en: 'Interactive', id: 'Interaktif' },
    slides: { en: 'Slides', id: 'Salindia' },
    visual: { en: 'Visual', id: 'Visual' },
    assignment: { en: 'Case assignment', id: 'Tugas kasus' }
  };
  /* open the Modules tab on the host page with one module's accordion expanded */
  function gotoModule(num) {
    var tab = document.querySelector('[data-tab="modules"]');
    if (tab) tab.click();
    var acc = document.querySelector('.module-accordion[data-module="' + num + '"]');
    if (!acc) return;
    var h = acc.querySelector('.module-header');
    if (h && acc.getAttribute('aria-expanded') !== 'true') h.click();
    setTimeout(function () { acc.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 120);
  }
  function syncHostPage() {
    var p = progress();
    document.querySelectorAll('.lesson-card').forEach(function (card) {
      var numEl = card.querySelector('.lesson-number');
      if (!numEl) return;
      var n = numEl.textContent.trim();
      var i = flatIndex(n);
      if (i === -1) return;
      /* registry is the source of truth for type + duration labels */
      var lreg = FLAT[i].l;
      var tp = card.querySelector('.lesson-type');
      var kl = KIND_LABEL[lreg.kind];
      if (tp && kl) {
        tp.setAttribute('data-en', kl.en); tp.setAttribute('data-id', kl.id);
        tp.textContent = kl[lang()];
      }
      var du = card.querySelector('.lesson-duration');
      if (du && lreg.dur) {
        du.setAttribute('data-en', lreg.dur.en); du.setAttribute('data-id', lreg.dur.id);
        du.textContent = lreg.dur[lang()];
      }
      if (p[n]) {
        card.dataset.status = 'completed';
        var ic = card.querySelector('.lesson-icon');
        if (ic) ic.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.4 2.4 4.8-5.3"/></svg>';
        /* a completed lesson stays open for review: the lock that the page
           ships for later modules gives way to a Review button */
        var ract = card.querySelector('.lesson-action');
        if (ract) {
          var rb = ract.querySelector('.btn-start');
          if (!rb) { ract.innerHTML = '<button class="btn-start btn-review" data-lesson="' + n + '"></button>'; rb = ract.querySelector('.btn-start'); }
          rb.classList.add('btn-review');
          rb.setAttribute('data-lesson', n);
          rb.setAttribute('data-en', 'Review'); rb.setAttribute('data-id', 'Tinjau ulang');
          rb.textContent = lang() === 'id' ? 'Tinjau ulang' : 'Review';
        }
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
      /* the syllabus card for the module follows the same state: a completed
         module reads Completed with a "Review Module" call to action, an
         unlocked one Available with "Start Module" */
      var syl = null;
      document.querySelectorAll('.syl-card').forEach(function (c) {
        var sn = c.querySelector('.syl-num');
        if (sn && parseInt(sn.textContent, 10) === +m.num) syl = c;
      });
      if (syl) {
        var ss = syl.querySelector('.module-status'), cta = syl.querySelector('.syl-foot button');
        var L = lang() === 'id';
        function setCta(en, id) {
          if (!cta) return;
          cta.disabled = false; cta.className = 'btn-gold syl-cta';
          cta.setAttribute('data-en', en); cta.setAttribute('data-id', id); cta.textContent = L ? id : en;
          if (!cta.hasAttribute('data-goto-module')) {   /* the page wires its own buttons; wire the ones we unlock */
            cta.setAttribute('data-goto-module', String(m.num));
            cta.addEventListener('click', function () { gotoModule(m.num); });
          }
        }
        if (allDone) {
          if (ss) { ss.className = 'module-status completed'; ss.setAttribute('data-en', 'Completed'); ss.setAttribute('data-id', 'Selesai'); ss.textContent = L ? 'Selesai' : 'Completed'; }
          setCta('Review Module →', 'Tinjau Modul →');
        } else if (anyAccess && ss && ss.classList.contains('locked')) {
          ss.className = 'module-status available'; ss.setAttribute('data-en', 'Available'); ss.setAttribute('data-id', 'Tersedia'); ss.textContent = L ? 'Tersedia' : 'Available';
          setCta('Start Module →', 'Mulai Modul →');
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
    applyPageLang();   /* chrome strings (Back, Previous, Next) follow the page language on open, not only on switch */
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
  root.querySelector('.lmsp-foot .lms-complete').addEventListener('click', function () {
    var l = FLAT[current].l;
    if (isDone(l.n)) return;
    if (l.caseStudy && !caseSubmitted(l)) { var cse = root.querySelector('#lmsCase'); if (cse) cse.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
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
