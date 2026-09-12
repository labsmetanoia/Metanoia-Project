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
    text: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>'
  };

  function renderIntroVideos(l, host, opts) {
    if (!l.videos || !l.videos.length) return;
    opts = opts || {};
    var list = l.videos, idx = 0, cues = [], cueLang = lang(), ccOn = true, raf = 0, hideT = 0, upT = 0;
    var vk = 'mt-lms-vid:' + slug + ':' + l.n;
    var seen = {};
    try { seen = JSON.parse(localStorage.getItem(vk) || '{}'); } catch (e) {}

    /* videos lead the lesson by default; a lesson may instead place them after
       its slide material (videosPlacement: 'after-material'), where they
       reinforce the slides before the knowledge check */
    var after = /^after-material/.test(l.videosPlacement || '');
    var nextIsDeck = opts.next === 'material';   /* another slide deck follows the videos */
    var wrap = el('div', 'lms-vp');
    var lead = el('div', 'lms-vp-lead');
    lead.appendChild(bi('span', 'lms-kicker', l.videosKicker || (after
      ? { en: 'Watch next · ' + list.length + ' short videos', id: 'Tonton berikutnya · ' + list.length + ' video singkat' }
      : { en: 'Watch first · ' + list.length + ' short videos', id: 'Tonton dulu · ' + list.length + ' video singkat' })));
    lead.appendChild(bi('p', 'lms-vp-intro', l.videosIntro || {
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
    if (l.videosOutro) {
      var outro = el('div', 'lms-panel lms-vp-outro');
      outro.appendChild(el('span', 'lh-badge', iconSvg('flag', 17)));
      outro.appendChild(bi('h3', null, l.videosOutro.title));
      (l.videosOutro.body || []).forEach(function (p) { outro.appendChild(bi('p', null, p)); });
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
        var nextEn = nextIsDeck ? 'Continue to the next slides below' : after ? 'Continue to the knowledge check below' : 'Continue to the lesson material below';
        var nextId = nextIsDeck ? 'Lanjutkan ke slide berikutnya di bawah' : after ? 'Lanjutkan ke cek pemahaman di bawah' : 'Lanjutkan ke materi pelajaran di bawah';
        var goEn = nextIsDeck ? 'Go to the slides' : after ? 'Go to the check' : 'Go to material';
        var goId = nextIsDeck ? 'Ke slide' : after ? 'Ke cek pemahaman' : 'Ke materi';
        upnext.innerHTML = '<span class="vu-k" data-en="All videos watched" data-id="Semua video selesai">' + (lang() === 'id' ? 'Semua video selesai' : 'All videos watched') + '</span>' +
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
    var img = document.createElement('img');
    img.className = 'ss-img'; img.decoding = 'async'; img.alt = '';
    img.sizes = '(max-width: 720px) 100vw, 900px';
    stage.appendChild(img);
    var zl = el('button', 'ss-zone ss-zone-l', '<span class="ss-arrow">' + ICO.chevL + '</span>'); zl.type = 'button';
    var zr = el('button', 'ss-zone ss-zone-r', '<span class="ss-arrow">' + ICO.chevR + '</span>'); zr.type = 'button';
    stage.appendChild(zl); stage.appendChild(zr);
    var spin = el('div', 'lms-vspin'); stage.appendChild(spin);
    var upnext = el('div', 'lms-vup'); stage.appendChild(upnext);
    var top = el('div', 'lms-vtop');
    var tl = el('div', 'lms-vtitle');
    top.appendChild(tl); stage.appendChild(top);

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

    /* slide text (the deck's words, for reading, search and screen readers) */
    var notes = el('div', 'lms-panel lms-ss-notes');
    notes.hidden = true;
    var nH = bi('h3', null, { en: 'Slide text', id: 'Teks slide' });
    var nT = el('b'), nP = el('p');
    notes.appendChild(nH); notes.appendChild(nT); notes.appendChild(nP);
    wrap.appendChild(notes);

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
    }

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
      /* the hand-off names what actually follows the deck: a film, or the lesson material */
      var nx0 = wrap.nextElementSibling, film = !!(nx0 && nx0.classList.contains('lms-ytp'));
      var nextEn = film ? 'Continue to the film below' : 'Continue to the lesson material below', nextId = film ? 'Lanjutkan ke film di bawah' : 'Lanjutkan ke materi pelajaran di bawah';
      var goEn = film ? 'Watch the film' : 'Go to material', goId = film ? 'Tonton filmnya' : 'Ke materi';
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
    function setText(on) {
      notes.hidden = !on;
      bText.classList.toggle('on', on);
      try { localStorage.setItem('mt-lms-sstext', on ? '1' : '0'); } catch (e) {}
    }

    /* ── events ── */
    zl.addEventListener('click', function () { show(idx - 1); });
    zr.addEventListener('click', function () { show(idx + 1); });
    bPrev.addEventListener('click', function () { show(idx - 1); });
    bNext.addEventListener('click', function () { show(idx + 1); });
    bPlay.addEventListener('click', function () { setPlaying(!playing); });
    bText.addEventListener('click', function () { setText(notes.hidden); });
    bFull.addEventListener('click', function () {
      var fs = document.fullscreenElement || document.webkitFullscreenElement;
      if (fs) { (document.exitFullscreen || document.webkitExitFullscreen).call(document); return; }
      if (stage.requestFullscreen) stage.requestFullscreen().catch(function () {});
      else if (stage.webkitRequestFullscreen) stage.webkitRequestFullscreen();
    });
    function onFs() {
      var on = (document.fullscreenElement || document.webkitFullscreenElement) === stage;
      stage.classList.toggle('fs', on); bFull.innerHTML = on ? ICO.unfull : ICO.full;
    }
    document.addEventListener('fullscreenchange', onFs);
    document.addEventListener('webkitfullscreenchange', onFs);
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
      else if (e.key === 't') { setText(notes.hidden); }
      else if (e.key === 'f') { bFull.click(); }
    });
    var x0 = null;
    stage.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      if (x0 === null) return;
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

    /* initial state: the slide text panel remembers the member's choice */
    var tp = null;
    try { tp = localStorage.getItem('mt-lms-sstext'); } catch (e) {}
    setText(tp === '1');
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
    var y = opts.block || l.youtube;
    if (!y || !y.id) return;
    var nextIs = opts.next || 'check';   /* what follows the film: 'check' (default), 'lesson', 'material' or 'film' */
    var P = null, ready = false, playing = false, ccOn = true, ccLang = lang(), tracks = null, ticker = 0, hideT = 0, pending = [];
    var wrap = el('div', 'lms-vp lms-ytp');
    var lead = el('div', 'lms-vp-lead');
    lead.appendChild(bi('span', 'lms-kicker', y.kicker || { en: 'Watch · Lesson film', id: 'Tonton · Film pelajaran' }));
    if (y.title) lead.appendChild(bi('h3', 'lms-sp-title', y.title));
    if (y.intro) lead.appendChild(bi('p', 'lms-vp-intro', y.intro));
    wrap.appendChild(lead);

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
    var ext = el('p', 'yt-ext');
    ext.innerHTML = '<a href="https://www.youtube.com/watch?v=' + y.id + '" target="_blank" rel="noopener"><span data-en="Watch on YouTube" data-id="Tonton di YouTube">' + (lang() === 'id' ? 'Tonton di YouTube' : 'Watch on YouTube') + '</span> ↗</a>';
    wrap.appendChild(ext);
    host.appendChild(wrap);

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
      if (remember) { try { localStorage.setItem('mt-lms-cc', ccOn ? ccLang : 'off'); } catch (e) {} }
    }
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
      upnext.querySelector('.vu-go').addEventListener('click', function () { upnext.classList.remove('show'); var nx = wrap.nextElementSibling; if (nx) nx.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
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
              if (e.data === S.PLAYING) { setPlaying(true); stage.classList.remove('buffering'); upnext.classList.remove('show'); }
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
    return wrap;
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
    var kindLabel = { video: ['Video', 'Video'], reading: ['Reading', 'Bacaan'], interactive: ['Interactive', 'Interaktif'], slides: ['Slides', 'Slide'], visual: ['Visual', 'Visual'] }[l.kind];
    meta.appendChild(bi('span', 'lms-chip gold', { en: '📖 ' + kindLabel[0], id: '📖 ' + kindLabel[1] }));
    meta.appendChild(bi('span', 'lms-chip', l.dur));
    if (l.videos && l.videos.length) meta.appendChild(bi('span', 'lms-chip gold', { en: '🎬 ' + l.videos.length + ' videos', id: '🎬 ' + l.videos.length + ' video' }));
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
    var vpm = /^after-material(?::(\d+))?$/.exec(l.videosPlacement || '');
    var afterN = vpm ? Math.min(decks.length, vpm[1] ? +vpm[1] : decks.length) : 0;
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
    if (!afterN) renderIntroVideos(l, innerEl);
    decks.forEach(function (m, k) {
      renderMaterial(l, innerEl, m, k);
      if (afterN === k + 1) renderIntroVideos(l, innerEl, { next: k + 1 < decks.length ? 'material' : 'check' });
      (filmsAfter[k + 1] || []).forEach(function (y, j, arr) {
        renderYouTube(l, innerEl, { block: y, next: j + 1 < arr.length ? 'film' : k + 1 < decks.length ? 'material' : 'lesson' });
      });
    });
    renderScenario(l, innerEl);
    renderDiagram(l, innerEl);
    if (l.kind === 'video') renderVideo(l, innerEl);
    if (l.kind === 'reading' || l.kind === 'interactive') renderSections(l, innerEl);
    if (l.kind === 'interactive') renderSteps(l, innerEl);
    if (l.kind === 'slides' && l.slides) renderDeck(l, innerEl);   /* a slides lesson may instead carry `material` (designed deck) */
    if (l.kind === 'visual') renderVisual(l, innerEl);
    renderCompare(l, innerEl);
    renderMistakes(l, innerEl);
    renderListen(l, innerEl);
    if (l.tool) renderTool(l, innerEl);
    filmsLate.forEach(function (y, j) { renderYouTube(l, innerEl, { block: y, next: j + 1 < filmsLate.length ? 'film' : 'check' }); });   /* YouTube lesson films in the player skin */
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
    var btn = root.querySelector('.lmsp-foot .lms-complete');
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
  var KIND_LABEL = {
    video: { en: 'Video', id: 'Video' },
    reading: { en: 'Reading', id: 'Bacaan' },
    interactive: { en: 'Interactive', id: 'Interaktif' },
    slides: { en: 'Slides', id: 'Salindia' },
    visual: { en: 'Visual', id: 'Visual' }
  };
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
