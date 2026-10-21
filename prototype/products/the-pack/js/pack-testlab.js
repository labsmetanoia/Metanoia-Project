/**
 * THE PACK — TEST LAB · UI
 * ------------------------
 * Replaces the Screening Gym's Drills station. Modes: diagnostic, drill (instant structured
 * feedback, adaptive tier), timed set (skip prompt at 1.5× target), section practice, mock,
 * CAT simulation (grid, doubt flag, global timer, auto-submit, thresholds), Kraepelin-style
 * simulator, focus loop, consistency mirror, plan tracker, error log, weakness map and the
 * recommendation rule. Rendered inside the Gym shell (js/tool-shell.js); keyboard 1 to 5 or
 * A to E, Enter, F flag, arrows. Storage: tl_* keys, on this device only.
 */
(function () {
  'use strict';
  var C = window.MT_TESTLAB_CORE, SH = window.MT_SHELL;
  if (!C || !SH) return;
  var CFG = C.CFG, el = SH.el, esc = SH.esc;
  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function T(en, id) { return lang() === 'id' ? id : en; }
  function B(p) { return p ? (typeof p === 'string' ? p : (p[lang()] || p.en || p.id || '')) : ''; }
  function fmtClock(s) { s = Math.max(0, s | 0); var m = Math.floor(s / 60), r = s % 60; return m + ':' + (r < 10 ? '0' : '') + r; }
  var LABEL = { en: CFG.practice_label.en, id: CFG.practice_label.id };

  var host = null, shellRef = null, state = { screen: 'home', preset: null };
  var run = null;   /* active run */

  /* ─── public surface ─── */
  function view(shell) {
    shellRef = shell;
    host = el('div', 'tl');
    paint();
    return host;
  }
  function busy() { return !!(run && run.timer); }
  function paint() { if (!host) return; host.innerHTML = ''; var s = state.screen; if (run && (s === 'run')) return paintRun(); if (s === 'report') return paintReport(state.report); if (s === 'kraepelin') return paintKraepelin(); if (s === 'mirror') return paintMirror(); if (s === 'plan') return paintPlan(); if (s === 'errorlog') return paintErrorLog(); if (s === 'drillpick') return paintDrillPick(); if (s === 'config') return paintConfig(); return paintHome(); }
  function go(screen, extra) { state.screen = screen; Object.assign(state, extra || {}); paint(); try { shellRef && (shellRef.body.scrollTop = 0); } catch (e) {} try { window.MT_PACK_GYM && window.MT_PACK_GYM.tabs && window.MT_PACK_GYM.tabs(); } catch (e2) {} }
  function start(preset) {
    if (run) { stopTimer(); run = null; }
    var set = C.buildSet(preset);
    if (!set || !set.items || !set.items.length) { go('home'); return; }
    run = { id: C.uid(), preset: preset, mode: set.mode, label: set.label, items: set.items, answers: {}, flags: {}, times: {}, i: 0, started: Date.now(), itemStart: Date.now(), timed: set.timed, left: set.timed, timer: null, feedback: set.feedback, adaptive: !!set.adaptive, tier: 1, streak: 0, filter: set.filter, sections: set.sections, skd: !!set.skd, notice: set.notice, ritual: !!set.ritual, walkthrough: !!set.walkthrough, twoPart: set.twoPart || null, timed2: set.timed2 || null, part: 1, topTwo: !!set.topTwo, focus: !!set.focus, shown: {}, revealed: {} };
    if (run.adaptive) { run.order = adaptiveOrder(run); run.items = run.order.slice(0, 20); }
    if (run.timed) startTimer();
    go('run');
  }
  function adaptiveOrder(r) {
    /* adaptive drill: serve by tier, rising after two right, falling after two wrong */
    var byTier = { 1: [], 2: [], 3: [] }; r.items.forEach(function (it) { byTier[it.difficulty].push(it); });
    r.byTier = byTier; var first = byTier[1].length ? byTier[1] : byTier[2].length ? byTier[2] : byTier[3];
    var start = first.shift(); return start ? [start] : [];
  }
  function nextAdaptive(r) { var t = r.tier, tries = 0; while (tries < 3) { var b = r.byTier[t]; if (b && b.length) return b.shift(); t = t === 3 ? 2 : t + 1; tries++; } return null; }
  function startTimer() {
    run.timer = setInterval(function () {
      if (!run) return;
      run.left--;
      var tn = host && host.querySelector('.tl-timer');
      if (tn) { tn.querySelector('b').textContent = fmtClock(run.left); if (run.left <= 60) tn.classList.add('low'); }
      if (run.left <= 0) { if (run.twoPart && run.part === 1) { partTwo(); } else finish(true); }
    }, 1000);
  }
  function stopTimer() { if (run && run.timer) { clearInterval(run.timer); run.timer = null; } }
  function partTwo() { stopTimer(); run.part = 2; run.left = run.timed2; run.i = run.twoPart; run.itemStart = Date.now(); run.breakUntil = Date.now() + 3 * 60 * 1000; go('run'); }
  function abort() { stopTimer(); run = null; go('home'); }
  function launch(mode) {
    state.pending = mode;
    if (window.MT_PACK_GYM) window.MT_PACK_GYM.open('drill');
  }
  function preset(mode) {
    mode = mode || 'home';
    if (mode === 'home') return go('home');
    if (mode === 'kraepelin' || mode === 'mirror' || mode === 'plan' || mode === 'errorlog' || mode === 'config') return go(mode);
    if (mode === 'drill' || mode === 'drill:') return go('drillpick');
    start(mode);
  }
  function stats() { var at = C.load('attempts', []); return { questions: C.ITEMS.length, sets: 12, attempts: at.length }; }

  /* ─── home ─── */
  function paintHome() {
    var map = C.weakness(), rec = C.nextSet();
    var hero = SH.hero({
      kicker: { en: 'Station 1 · Test Lab', id: 'Pos 1 · Test Lab' },
      title: { en: ['Diagnose, drill,', 'then simulate'], id: ['Diagnosis, latih,', 'lalu simulasi'] },
      sub: { en: 'Original practice items for TPA, BUMN and SKD CPNS, with structured feedback, an error log, a weakness map and a recommendation that shows its reason.', id: 'Soal latihan asli untuk TPA, BUMN, dan SKD CPNS, dengan umpan balik terstruktur, catatan kesalahan, peta kelemahan, dan rekomendasi yang menampilkan alasannya.' },
      chip: LABEL, chipIcon: 'shieldTick',
      side: [{ icon: 'compass', title: { en: 'Next, with its reason', id: 'Berikutnya, dengan alasannya' }, text: rec.reason }],
      tagline: [{ en: 'Practice sharpens', id: 'Latihan mengasah' }, { en: 'potential.', id: 'potensi.' }]
    });
    var main = el('div', 'ts-main');
    /* recommendation */
    main.appendChild(SH.cta({ icon: 'compass', title: { en: 'Recommended next set', id: 'Set berikutnya yang disarankan' }, text: rec.reason, actions: [SH.btn(presetLabel(rec.preset), { icon: 'arrow', onClick: function () { preset(rec.preset); } })] }));
    /* weakness map */
    var wm = SH.card({ kick: { en: 'Weakness map', id: 'Peta kelemahan' }, title: { en: 'Accuracy and pace per sub-type', id: 'Ketepatan dan tempo per sub-tipe' } });
    var fams = Object.keys(C.SUBS);
    var grid = el('div', 'tl-map');
    fams.forEach(function (f) {
      var box = el('div', 'tl-map-fam');
      box.appendChild(el('b', null, esc(B(C.FAMILY[f]) || f)));
      var row = el('div', 'tl-map-row');
      Object.keys(C.SUBS[f]).forEach(function (s) {
        var e = map[f + '/' + s], band = e ? e.band : 'none';
        var chip = el('button', 'tl-chip ' + band); chip.type = 'button';
        chip.innerHTML = '<span>' + esc(C.SUB[s] || s) + '</span><i>' + (e && e.acc != null && e.n >= 3 ? e.acc + '%' : (e && e.n ? e.n + '/3' : '·')) + (e && e.slow ? ' ⏱' : '') + '</i>';
        chip.title = T('Drill this sub-type', 'Latih sub-tipe ini');
        chip.addEventListener('click', function () { start('drill:' + f + '/' + s); });
        row.appendChild(chip);
      });
      box.appendChild(row); grid.appendChild(box);
    });
    wm.appendChild(grid);
    wm.appendChild(SH.note(esc(T('Red under 50%, amber to 75%, green above; ⏱ marks a median time over 1.5× target. Needs three attempts per sub-type to colour. Scores diagnose against this bank; they predict no employer’s or institution’s cut.', 'Merah di bawah 50%, kuning sampai 75%, hijau di atas; ⏱ menandai waktu median lebih dari 1,5× target. Perlu tiga percobaan per sub-tipe untuk berwarna. Skor mendiagnosis terhadap bank ini; tidak meramalkan ambang perusahaan atau lembaga mana pun.')), 'chart'));
    main.appendChild(wm);
    /* modes */
    var md = SH.card({ kick: { en: 'Modes', id: 'Mode' }, title: { en: 'Diagnose, drill, time, section, mock', id: 'Diagnosis, latih, waktu, bagian, simulasi' } });
    var tiles = el('div', 'ts-tiles');
    [['target', { en: 'Mixed diagnostic · 40', id: 'Diagnostik campuran · 40' }, { en: 'Untimed; draws the map', id: 'Tanpa batas waktu; menggambar peta' }, 'diagnostic:mixed40'],
     ['pen', { en: 'Drill a sub-type', id: 'Latih satu sub-tipe' }, { en: 'Instant feedback, tier rises', id: 'Umpan balik seketika, tingkat naik' }, 'drillpick'],
     ['refresh', { en: 'Focus loop', id: 'Putaran fokus' }, { en: 'Your misses until right twice', id: 'Kesalahanmu sampai benar dua kali' }, 'focus'],
     ['stopwatch', { en: 'Timed sets', id: 'Set berbatas waktu' }, { en: 'Verbal · numerical · reasoning · figural', id: 'Verbal · numerik · penalaran · figural' }, 'timedpick'],
     ['list', { en: 'Section practice', id: 'Latihan bagian' }, { en: 'TWK 30 · TIU 35 · TKP 45', id: 'TWK 30 · TIU 35 · TKP 45' }, 'sectionpick'],
     ['checkSq', { en: 'Mocks', id: 'Simulasi' }, { en: 'TPA-60 · BUMN-T1 · TKD-40 · English', id: 'TPA-60 · BUMN-T1 · TKD-40 · Bahasa Inggris' }, 'mockpick'],
     ['laptop', { en: 'SKD-110 CAT simulation', id: 'Simulasi CAT SKD-110' }, { en: '110 items · 100 min · thresholds', id: '110 soal · 100 mnt · ambang' }, 'catpick'],
     ['zap', { en: 'Kraepelin-style simulator', id: 'Simulator gaya Kraepelin' }, { en: 'Rhythm, work curve', id: 'Ritme, kurva kerja' }, 'kraepelin'],
     ['balance', { en: 'Consistency mirror', id: 'Cermin konsistensi' }, { en: 'Six value pairs', id: 'Enam pasangan nilai' }, 'mirror'],
     ['calendar', { en: 'Plan tracker', id: 'Pelacak rencana' }, { en: 'Sessions and adherence', id: 'Sesi dan kepatuhan' }, 'plan'],
     ['x', { en: 'Error log', id: 'Catatan kesalahan' }, { en: 'Traps and learner tags', id: 'Jebakan dan tanda pelajar' }, 'errorlog'],
     ['doc', { en: 'Config and sources', id: 'Konfigurasi dan sumber' }, { en: 'Counts, thresholds, verified date', id: 'Jumlah, ambang, tanggal verifikasi' }, 'config']
    ].forEach(function (t) { tiles.appendChild(SH.tile({ icon: t[0], title: t[1], hint: t[2], onPick: function () { pick(t[3]); } })); });
    md.appendChild(tiles);
    main.appendChild(md);
    /* recent */
    var at = C.load('attempts', []).slice(-6).reverse();
    if (at.length) {
      var rc = SH.card(); rc.appendChild(SH.hd({ en: 'Recent', id: 'Terakhir' }, { en: 'Read the grid, not the number', id: 'Baca kisinya, bukan angkanya' }, C.load('attempts', []).length + ' ' + T('sets', 'set')));
      var rows = el('div', 'ts-rows');
      at.forEach(function (a) {
        var pct = a.total ? Math.round(a.score / a.total * 100) : 0;
        var acts = [SH.pill(pct + '%', pct >= 75 ? 'ok' : pct < 50 ? 'bad' : '')];
        if (a.report) acts.unshift(SH.btn({ en: 'Report', id: 'Laporan' }, { ghost: true, sm: true, onClick: function () { go('report', { report: a.report }); } }));
        rows.appendChild(SH.rowi({ icon: a.legacy ? 'hourglass' : a.mode === 'cat' ? 'laptop' : a.mode === 'mock' ? 'checkSq' : a.timed ? 'stopwatch' : 'pen', title: B(a.label) || a.mode, sub: (a.score != null ? a.score + '/' + a.total + ' · ' : '') + new Date(a.ts).toLocaleDateString(), actions: acts }));
      });
      rc.appendChild(rows); main.appendChild(rc);
    }
    main.appendChild(SH.note(esc(T('Everything is stored only in this browser. Items are in Bahasa Indonesia or English as the real tests are; explanations in Bahasa Indonesia.', 'Semua tersimpan hanya di peramban ini. Soal dalam Bahasa Indonesia atau Inggris sebagaimana tes sungguhan; pembahasan dalam Bahasa Indonesia.')), 'lock'));
    host.appendChild(SH.stage(hero, main));
  }
  function presetLabel(p) {
    var m = String(p).split(':')[0];
    return { diagnostic: { en: 'Sit the diagnostic →', id: 'Kerjakan diagnostik →' }, drill: { en: 'Open the drill →', id: 'Buka latihan →' }, timed: { en: 'Start the timed set →', id: 'Mulai set berbatas waktu →' }, section: { en: 'Start the section →', id: 'Mulai bagian →' }, mock: { en: 'Start the mock →', id: 'Mulai simulasi →' }, cat: { en: 'Start the simulation →', id: 'Mulai simulasi →' } }[m] || { en: 'Open →', id: 'Buka →' };
  }
  function pick(k) {
    if (k === 'drillpick') return go('drillpick', { pickMode: 'drill' });
    if (k === 'timedpick') return go('drillpick', { pickMode: 'timed' });
    if (k === 'sectionpick') return go('drillpick', { pickMode: 'section' });
    if (k === 'mockpick') return go('drillpick', { pickMode: 'mock' });
    if (k === 'catpick') return go('drillpick', { pickMode: 'cat' });
    if (k === 'focus') { if (!C.focusIds().length) { alert(T('No misses in the focus loop yet.', 'Belum ada kesalahan di putaran fokus.')); return; } return start('focus'); }
    preset(k);
  }

  /* ─── pickers ─── */
  function paintDrillPick() {
    var m = state.pickMode || 'drill', map = C.weakness();
    var main = el('div', 'ts-main'); main.style.cssText = 'max-width:980px;margin:0 auto;width:100%';
    var back = SH.btn({ en: 'Back to the Lab', id: 'Kembali ke Lab' }, { quiet: true, iconL: 'arrowL', onClick: function () { go('home'); } });
    main.appendChild(back);
    if (m === 'drill') {
      Object.keys(C.SUBS).forEach(function (f) {
        var c = SH.card({ kick: B(C.FAMILY[f]) || f, title: { en: 'Choose a sub-type', id: 'Pilih sub-tipe' } });
        var row = el('div', 'tl-map-row');
        Object.keys(C.SUBS[f]).forEach(function (s) { var e = map[f + '/' + s]; var b = el('button', 'tl-chip ' + (e ? e.band : 'none')); b.type = 'button'; b.innerHTML = '<span>' + esc(C.SUB[s] || s) + '</span><i>' + C.SUBS[f][s] + '</i>'; b.addEventListener('click', function () { start('drill:' + f + '/' + s); }); row.appendChild(b); });
        c.appendChild(row);
        if (f === 'tkp' || f === 'akhlak') { var r2 = el('div', 'ts-row'); r2.appendChild(SH.btn({ en: '“4 or 5?” drill', id: 'Latihan “4 atau 5?”' }, { ghost: true, sm: true, onClick: function () { start(f + '-45'); } })); c.appendChild(r2); }
        main.appendChild(c);
      });
    } else {
      var list = { timed: [['timed:verbal', { en: 'Verbal · 20 items', id: 'Verbal · 20 soal' }], ['timed:numerik', { en: 'Numerical · 20 items', id: 'Numerik · 20 soal' }], ['timed:penalaran', { en: 'Reasoning · 12 items', id: 'Penalaran · 12 soal' }], ['timed:figural', { en: 'Figural · 12 items', id: 'Figural · 12 soal' }], ['timed:tkd40', { en: 'TKD timed set · 40 in 30 min', id: 'Set TKD · 40 dalam 30 mnt' }], ['timed:english20', { en: 'English · 20 in 20 min', id: 'Bahasa Inggris · 20 dalam 20 mnt' }]],
        section: [['section:twk', { en: 'TWK · 30 items · 20 min', id: 'TWK · 30 soal · 20 mnt' }], ['section:tiu', { en: 'TIU · 35 items · 42 min', id: 'TIU · 35 soal · 42 mnt' }], ['section:tkp', { en: 'TKP · 45 items · 35 min', id: 'TKP · 45 soal · 35 mnt' }]],
        mock: [['mock:tpa60', { en: 'TPA-60 · 60 items · 45 min', id: 'TPA-60 · 60 soal · 45 mnt' }], ['mock:bumn-t1', { en: 'BUMN-T1 · TKD 60 then AKHLAK 30', id: 'BUMN-T1 · TKD 60 lalu AKHLAK 30' }], ['timed:tkd40', { en: 'TKD-40 timed set', id: 'Set TKD-40 berbatas waktu' }], ['timed:english20', { en: 'English 20', id: 'Bahasa Inggris 20' }]],
        cat: [['cat:skd110', { en: 'SKD-110 · 100 min · auto-submit', id: 'SKD-110 · 100 mnt · kirim otomatis' }], ['cat:walkthrough', { en: 'Walkthrough · no timer', id: 'Telusur · tanpa pengatur waktu' }]] }[m];
      var c = SH.card({ kick: { en: 'Choose', id: 'Pilih' }, title: m === 'cat' ? { en: 'A Metanoia practice form in an SKD-like format', id: 'Formulir latihan Metanoia dalam format mirip SKD' } : { en: 'Metanoia practice forms', id: 'Formulir latihan Metanoia' } });
      var tiles = el('div', 'ts-tiles');
      list.forEach(function (x) { tiles.appendChild(SH.tile({ icon: m === 'cat' ? 'laptop' : m === 'mock' ? 'checkSq' : 'stopwatch', title: x[1], onPick: function () { start(x[0]); } })); });
      c.appendChild(tiles);
      if (m === 'cat' || m === 'mock') c.appendChild(SH.note(esc(B(m === 'cat' ? CFG.skd.mock_notice : CFG.bumn.mock_notice)) + ' ' + esc(B(CFG.format_notice)), 'shieldTick'));
      main.appendChild(c);
    }
    host.appendChild(SH.stage(null, main));
  }

  /* ─── run ─── */
  function cur() { return run.items[run.i]; }
  function tick() { var now = Date.now(); run.times[run.i] = (run.times[run.i] || 0) + Math.round((now - run.itemStart) / 1000); run.itemStart = now; }
  function sectionLabel(k) { return { twk: 'TWK', tiu: 'TIU', tkp: 'TKP', verbal: B(C.FAMILY.verbal), numerik: B(C.FAMILY.numerik), penalaran: B(C.FAMILY.penalaran), figural: B(C.FAMILY.figural), akhlak: 'AKHLAK', english: 'English' }[k] || k; }
  function paintRun() {
    var it = cur(); if (!it) { finish(false); return; }
    var main = el('div', 'ts-main tl-run'); main.style.cssText = 'max-width:1100px;margin:0 auto;width:100%';
    if (run.breakUntil && Date.now() < run.breakUntil) { paintBreak(main); host.appendChild(SH.stage(null, main)); return; }
    var c = SH.card();
    var meta = el('div', 'ts-hd'), left = el('div');
    var sec = C.sectionOf(run, run.i);
    left.appendChild(el('div', 'ts-kick', esc(B(run.label)) + (run.sections ? ' · ' + esc(sectionLabel(sec)) : '') + ' · ' + esc(T('Item', 'Soal')) + ' ' + (run.i + 1) + ' / ' + (run.adaptive ? Math.max(20, run.items.length) : run.items.length)));
    left.appendChild(el('h3', null, esc(run.feedback === 'instant' ? T('Explanation after each answer', 'Pembahasan setelah tiap jawaban') : run.walkthrough ? T('Walkthrough: learn the grid, the flag and the submit flow', 'Telusur: pelajari kisi, tanda, dan alur kirim') : T('Answer everything; flag doubts; return with spare time', 'Jawab semuanya; tandai keraguan; kembali dengan waktu cadangan'))));
    meta.appendChild(left);
    if (run.timed) { var tm = el('div', 'ts-timer tl-timer' + (run.left <= 60 ? ' low' : '')); tm.appendChild(SH.svg('stopwatch')); tm.appendChild(el('b', null, fmtClock(run.left))); meta.appendChild(tm); }
    c.appendChild(meta);
    c.appendChild(SH.bar(run.i / (run.adaptive ? Math.max(20, run.items.length) : run.items.length) * 100));
    /* grid for forms */
    if (run.sections || run.mode === 'cat' || run.mode === 'mock' || run.mode === 'section' || run.mode === 'timed') c.appendChild(gridEl());
    /* label */
    c.appendChild(el('div', 'tl-label', esc(B(LABEL)) + (it.format === 'ranked5' ? ' · ' + esc(T('Every option scores 1 to 5.', 'Setiap opsi bernilai 1 sampai 5.')) : '')));
    if (run.ritual && sec === 'tkp' && !run.ritualShown) { run.ritualShown = true; c.appendChild(SH.note('<b>' + esc(T('Judgement mode.', 'Mode pertimbangan.')) + '</b> ' + esc(T('Thirty seconds: breathe, say the six dimensions, say the ladder (fixes, helps, defers, avoids, harms), then name this item’s dimension before reading the options.', 'Tiga puluh detik: bernapas, sebutkan enam dimensi, sebutkan tangga (membereskan, membantu, menyerahkan, menghindar, merugikan), lalu sebutkan dimensi soal ini sebelum membaca opsi.')), 'heart')); }
    /* passage and stem */
    if (it.passage) c.appendChild(el('div', 'ts-pass', esc(B(it.passage))));
    if (it.assets) { var as = el('div', 'tl-assets'); as.innerHTML = it.assets.map(C.assetHtml).join(''); c.appendChild(as); }
    c.appendChild(el('p', 'ts-q', esc(B(it.stem))));
    var answered = run.answers[run.i] !== undefined, revealed = run.feedback === 'instant' && answered;
    var opts = it.options.map(function (o, k) { return { o: o, k: k }; });
    if (run.topTwo && it.weights) { var top = opts.filter(function (x) { return it.weights[x.k] >= 4; }); opts = top; }
    opts.forEach(function (x) {
      var o = x.o, k = x.k;
      var b = el('button', 'ts-opt tl-opt'); b.type = 'button';
      b.appendChild(el('i', null, String.fromCharCode(65 + k)));
      var span = el('span');
      if (o.fig) { span.innerHTML = C.fig(o.fig, 72); span.className = 'tl-optfig'; } else span.textContent = B(o);
      b.appendChild(span);
      if (run.answers[run.i] === k) b.classList.add('sel');
      if (revealed) {
        b.disabled = true;
        if (it.format === 'ranked5') { var w = it.weights[k]; b.appendChild(el('em', 'tl-w', String(w))); if (w === 5) b.classList.add('correct'); else if (run.answers[run.i] === k) b.classList.add(w <= 2 ? 'wrong' : 'sel'); }
        else { if (k === it.answer) b.classList.add('correct'); else if (run.answers[run.i] === k) b.classList.add('wrong'); }
      }
      b.addEventListener('click', function () { choose(k); });
      c.appendChild(b);
    });
    if (revealed) c.appendChild(explain(it, run.answers[run.i], run.times[run.i]));
    /* controls */
    var row = el('div', 'ts-row'); row.style.marginTop = '16px';
    if (run.feedback === 'instant') {
      if (answered) row.appendChild(SH.btn(run.i < run.items.length - 1 || (run.adaptive && hasMoreAdaptive()) ? { en: 'Next', id: 'Berikutnya' } : { en: 'Finish', id: 'Selesai' }, { icon: 'arrow', onClick: next }));
    } else {
      row.appendChild(SH.btn({ en: 'Previous', id: 'Sebelumnya' }, { ghost: true, sm: true, iconL: 'arrowL', disabled: run.i === 0 || (run.part === 2 && run.i === run.twoPart), onClick: prev }));
      var fb = SH.btn(run.flags[run.i] ? { en: 'Flagged · Ragu-ragu', id: 'Ditandai · Ragu-ragu' } : { en: 'Flag · Ragu-ragu', id: 'Tandai · Ragu-ragu' }, { ghost: true, sm: true, iconL: 'flag', onClick: toggleFlag }); if (run.flags[run.i]) fb.classList.add('tl-flagged'); row.appendChild(fb);
      row.appendChild(SH.btn(run.i < run.items.length - 1 && !(run.twoPart && run.part === 1 && run.i === run.twoPart - 1) ? { en: 'Next', id: 'Berikutnya' } : { en: 'Review and submit', id: 'Tinjau dan kirim' }, { sm: true, icon: 'arrow', onClick: next }));
      if (run.twoPart && run.part === 1) row.appendChild(SH.btn({ en: 'Submit part 1 (TKD)', id: 'Kirim bagian 1 (TKD)' }, { quiet: true, onClick: function () { if (confirm(T('Submit the TKD part and take the three-minute break?', 'Kirim bagian TKD dan ambil jeda tiga menit?'))) partTwo(); } }));
      else row.appendChild(SH.btn({ en: 'Submit', id: 'Kirim' }, { quiet: true, onClick: function () { confirmSubmit(); } }));
    }
    row.appendChild(SH.btn({ en: 'Abandon', id: 'Batalkan' }, { quiet: true, onClick: function () { if (confirm(T('Abandon this set? Nothing will be saved.', 'Batalkan set ini? Tidak ada yang disimpan.'))) abort(); } }));
    c.appendChild(row);
    if (it.format === 'ranked5') c.appendChild(SH.note(esc(B(it.family === 'tkp' ? CFG.tkp_disclaimer : CFG.bumn.akhlak_disclaimer)) + ' ' + esc(B(CFG.review_panel)), 'scale'));
    c.appendChild(SH.note(esc(T('Keys: 1 to 5 or A to E choose · Enter next · F flag · ← → move', 'Tombol: 1 sampai 5 atau A sampai E memilih · Enter berikutnya · F tandai · ← → pindah')), 'info'));
    main.appendChild(c);
    host.appendChild(SH.stage(null, main));
    var first = host.querySelector('.tl-opt'); if (first && !revealed) first.focus();
  }
  function paintBreak(main) {
    var c = SH.card({ kick: { en: 'Break · 3 minutes', id: 'Jeda · 3 menit' }, title: { en: 'Switch modes: water, the ladder, the six values', id: 'Ganti mode: air, tangga, enam nilai' }, cls: 'gold' });
    var left = Math.ceil((run.breakUntil - Date.now()) / 1000);
    c.appendChild(SH.stats([[fmtClock(left), { en: 'until part 2 · AKHLAK', id: 'sampai bagian 2 · AKHLAK' }]]));
    c.appendChild(SH.note(esc(T('Fixes, helps, defers, avoids, harms. Amanah, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif.', 'Membereskan, membantu, menyerahkan, menghindar, merugikan. Amanah, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif.')), 'heart'));
    c.appendChild(SH.btn({ en: 'Start part 2 now', id: 'Mulai bagian 2 sekarang' }, { icon: 'arrow', onClick: function () { run.breakUntil = 0; run.itemStart = Date.now(); startTimer(); paint(); } }));
    main.appendChild(c);
    setTimeout(function () { if (run && run.breakUntil && Date.now() >= run.breakUntil) { run.breakUntil = 0; run.itemStart = Date.now(); startTimer(); paint(); } else if (run && run.breakUntil) paint(); }, 1000);
  }
  function gridEl() {
    var g = el('div', 'tl-grid');
    var lo = run.part === 2 ? run.twoPart : 0, hi = run.twoPart && run.part === 1 ? run.twoPart : run.items.length;
    for (var k = lo; k < hi; k++) (function (k) {
      var b = el('button', 'tl-cell' + (k === run.i ? ' cur' : '') + (run.flags[k] ? ' flag' : run.answers[k] !== undefined ? ' done' : '')); b.type = 'button'; b.textContent = String(k + 1);
      b.title = sectionLabel(C.sectionOf(run, k));
      b.addEventListener('click', function () { tick(); run.i = k; paint(); });
      g.appendChild(b);
    })(k);
    var leg = el('div', 'tl-legend'); leg.innerHTML = '<span class="done">' + esc(T('answered', 'terjawab')) + '</span><span class="flag">' + esc(T('flagged', 'ditandai')) + '</span><span>' + esc(T('unanswered', 'belum terjawab')) + '</span>';
    var w = el('div'); w.appendChild(g); w.appendChild(leg); return w;
  }
  function hasMoreAdaptive() { return run.adaptive && (run.byTier[1].length || run.byTier[2].length || run.byTier[3].length) && run.items.length < 20; }
  function choose(k) {
    if (run.feedback === 'instant' && run.answers[run.i] !== undefined) return;
    run.answers[run.i] = k;
    if (run.feedback === 'instant') { tick(); var it = cur(); var sc = C.pointsFor(it, k); logMiss(it, sc, run.times[run.i]); if (run.focus) C.focusMark(it.id, !!sc.ok); if (run.adaptive) { run.streak = sc.ok ? Math.max(1, run.streak + 1) : Math.min(-1, run.streak - 1); var nt = C.nextTier(run.tier, run.streak); if (nt !== run.tier) { run.tier = nt; run.streak = 0; } } paint(); }
    else { paint(); }
  }
  function logMiss(it, sc, t) {
    if (sc.ok) return;
    var log = C.load('errorlog', []);
    log.push({ id: it.id, ts: Date.now(), family: it.family, subtype: it.subtype, traps: it.trap_tags || [], learner: null, t: t || 0, w: sc.w });
    if (log.length > 400) log = log.slice(-400);
    C.save('errorlog', log);
  }
  function next() {
    tick();
    if (run.feedback === 'instant') {
      if (run.adaptive) { if (run.i === run.items.length - 1) { var n = hasMoreAdaptive() ? nextAdaptive(run) : null; if (n) run.items.push(n); else { finish(false); return; } } }
      else if (run.i >= run.items.length - 1) { finish(false); return; }
      run.i++; run.itemStart = Date.now(); paint(); return;
    }
    var hi = run.twoPart && run.part === 1 ? run.twoPart : run.items.length;
    if (run.i < hi - 1) { run.i++; run.itemStart = Date.now(); paint(); } else confirmSubmit();
  }
  function prev() { tick(); var lo = run.part === 2 ? run.twoPart : 0; if (run.i > lo) { run.i--; run.itemStart = Date.now(); paint(); } }
  function toggleFlag() { run.flags[run.i] = !run.flags[run.i]; paint(); }
  function confirmSubmit() {
    var hi = run.twoPart && run.part === 1 ? run.twoPart : run.items.length, lo = run.part === 2 ? run.twoPart : 0;
    var blanks = 0, flags = 0; for (var k = lo; k < hi; k++) { if (run.answers[k] === undefined) blanks++; if (run.flags[k]) flags++; }
    var msg = T('Submit? ', 'Kirim? ') + blanks + T(' unanswered, ', ' belum terjawab, ') + flags + T(' flagged. Blanks score zero.', ' ditandai. Kosong bernilai nol.');
    if (confirm(msg)) { if (run.twoPart && run.part === 1) partTwo(); else finish(false); }
  }
  function finish(auto) {
    tick(); stopTimer();
    run.secs = Math.round((Date.now() - run.started) / 1000);
    var rep = C.report(run);
    rep.auto = !!auto; rep.walkthrough = run.walkthrough;
    /* error log for end-feedback runs */
    if (run.feedback !== 'instant') run.items.forEach(function (it, i) { if (run.answers[i] !== undefined) { var sc = C.pointsFor(it, run.answers[i]); logMiss(it, sc, run.times[i]); } });
    if (!run.walkthrough) {
      var at = C.load('attempts', []);
      at.push({ id: run.id, mode: run.mode, preset: run.preset, label: run.label, ts: rep.ts, score: run.mode === 'cat' && rep.skd ? rep.skd.total : rep.correct + (rep.ranked ? Math.round(rep.pts - rep.correct) : 0), total: run.mode === 'cat' && rep.skd ? CFG.skd.max_total : (rep.ranked ? rep.n * 5 - (rep.n - rep.ranked) * 4 : rep.n), secs: rep.secs, timed: !!run.timed, items: rep.items.map(function (r) { return { id: r.id, ans: r.ans, ok: r.ok, t: r.t, w: r.w }; }), report: rep });
      if (at.length > 60) at = at.slice(-60);
      C.save('attempts', at);
      if (run.mode === 'cat' || run.mode === 'mock') { var mk = C.load('mocks', []); mk.push({ id: run.id, preset: run.preset, ts: rep.ts, report: rep }); C.save('mocks', mk.slice(-20)); }
      C.weakness();
    }
    rep.runItems = run.items.map(function (it) { return it.id; });
    run = null;
    syncPromo();
    go('report', { report: rep });
  }

  /* ─── explanation ─── */
  function explain(it, ans, t) {
    var x = it.explanation || {}, box = el('div', 'ts-expl' + (it.format === 'ranked5' ? (it.weights[ans] >= 4 ? '' : ' bad') : (ans === it.answer ? '' : ' bad')));
    var key = it.format === 'ranked5' ? T('Key: option ', 'Kunci: opsi ') + String.fromCharCode(65 + it.weights.indexOf(5)) + ' (5) · ' + T('your pick scored ', 'pilihanmu bernilai ') + it.weights[ans] : T('Key: ', 'Kunci: ') + String.fromCharCode(65 + it.answer) + (ans === it.answer ? ' ✓' : ' · ' + T('you chose ', 'kamu memilih ') + String.fromCharCode(65 + ans));
    var rows = [[T('Pattern or rule', 'Pola atau aturan'), x.pola], [T('Steps', 'Langkah'), x.langkah], [T('Trap', 'Jebakan'), x.jebakan], [T('Shortcut', 'Cara cepat'), x.cepat], [T('Alternative', 'Alternatif'), x.alt], ['Tag', x.tag]].filter(function (r) { return r[1]; });
    box.innerHTML = '<b>' + esc(key) + '</b>' + rows.map(function (r) { return '<div class="tl-xrow"><span>' + esc(r[0]) + '</span>' + esc(r[1]) + '</div>'; }).join('') + (x.verify ? '<div class="tl-xrow tl-verify"><span>Verify</span>' + esc(x.verify) + '</div>' : '') + (t ? '<div class="tl-xrow"><span>' + esc(T('Time', 'Waktu')) + '</span>' + t + ' s · ' + esc(T('target', 'target')) + ' ' + it.time_target_s + ' s' + (t > it.time_target_s * CFG.pacing.skip_at_multiple ? ' · <b>' + esc(T('over time', 'melewati waktu')) + '</b>' : '') + '</div>' : '');
    if (it.format === 'ranked5') { var lad = el('div', 'tl-ladder'); var order = it.options.map(function (o, k) { return k; }).sort(function (a, b) { return it.weights[b] - it.weights[a]; }); lad.innerHTML = order.map(function (k) { return '<div class="tl-lrow"><i>' + it.weights[k] + '</i><em>' + String.fromCharCode(65 + k) + '</em><span>' + esc(B(it.options[k])) + '</span></div>'; }).join(''); box.appendChild(lad); box.appendChild(el('div', 'tl-xrow tl-verify', '<span>' + esc(T('Notice', 'Catatan')) + '</span>' + esc(B(it.family === 'tkp' ? CFG.tkp_disclaimer : CFG.bumn.akhlak_disclaimer)) + ' ' + esc(B(CFG.review_panel)))); }
    /* learner tags */
    var ok = it.format === 'ranked5' ? it.weights[ans] === 5 : ans === it.answer;
    if (!ok) {
      var tg = el('div', 'tl-tags'); tg.appendChild(el('span', 'ts-kick', esc(T('Why did you miss it?', 'Mengapa salah?'))));
      [['knew', { en: 'I knew this', id: 'Saya tahu ini' }], ['gap', { en: 'Did not understand', id: 'Belum paham' }], ['time', { en: 'Ran out of time', id: 'Kehabisan waktu' }]].forEach(function (tt) {
        var b = el('button', 'ts-pill' + (learnerTag(it.id) === tt[0] ? ' ok' : ' mute')); b.type = 'button'; b.textContent = B(tt[1]);
        b.addEventListener('click', function () { setLearner(it.id, tt[0]); tg.querySelectorAll('.ts-pill').forEach(function (p) { p.className = 'ts-pill mute'; }); b.className = 'ts-pill ok'; });
        tg.appendChild(b);
      });
      box.appendChild(tg);
    }
    return box;
  }
  function learnerTag(id) { var log = C.load('errorlog', []); for (var i = log.length - 1; i >= 0; i--) if (log[i].id === id) return log[i].learner; return null; }
  function setLearner(id, tag) { var log = C.load('errorlog', []); for (var i = log.length - 1; i >= 0; i--) if (log[i].id === id) { log[i].learner = tag; break; } C.save('errorlog', log); }

  /* ─── report ─── */
  function paintReport(r) {
    var main = el('div', 'ts-main'); main.style.cssText = 'max-width:1100px;margin:0 auto;width:100%';
    var c = SH.card({ kick: r.walkthrough ? { en: 'Walkthrough complete', id: 'Telusur selesai' } : { en: 'Report', id: 'Laporan' }, title: B(r.label), cls: 'gold' });
    c.appendChild(el('div', 'tl-label', esc(T('A Metanoia practice form scored against the Lab’s config; not a prediction of any real score, rank or cut-off.', 'Formulir latihan Metanoia yang dinilai terhadap konfigurasi Lab; bukan ramalan skor, peringkat, atau ambang sungguhan mana pun.'))));
    /* SKD threshold line */
    if (r.skd) {
      var sel = C.load('tl_formation', 'umum');
      var th = CFG.skd.thresholds;
      var fsel = SH.input('select', { options: Object.keys(th).map(function (k) { return [k, k.replace(/_/g, ' ')]; }), value: sel });
      fsel.addEventListener('change', function () { C.save('tl_formation', fsel.value); paint(); });
      c.appendChild(SH.field({ label: { en: 'Formation type', id: 'Jenis formasi' }, input: fsel }));
      var t = th[sel], pass = {};
      var line = el('div', 'tl-thr');
      ['twk', 'tiu', 'tkp'].forEach(function (k) {
        if (r.skd.pts[k] == null) return;
        var bar = t[k] != null ? t[k] : (k === 'tiu' && t.tiu != null ? t.tiu : null);
        pass[k] = bar == null ? null : r.skd.pts[k] >= bar;
        line.appendChild(el('div', 'tl-thr-row ' + (pass[k] === false ? 'bad' : pass[k] ? 'ok' : ''), '<b>' + k.toUpperCase() + '</b><span>' + r.skd.pts[k] + ' / ' + CFG.skd.sections[k].max + '</span><em>' + (bar != null ? esc(T('threshold ', 'ambang ')) + bar + (pass[k] ? ' ✓' : ' ✗') : '') + '</em>'));
      });
      var totalBar = t.total, totOk = totalBar != null ? r.skd.total >= totalBar : null;
      line.appendChild(el('div', 'tl-thr-row ' + (totOk === false ? 'bad' : totOk ? 'ok' : ''), '<b>Total</b><span>' + r.skd.total + ' / ' + CFG.skd.max_total + '</span><em>' + (totalBar != null ? esc(T('threshold ', 'ambang ')) + totalBar + (totOk ? ' ✓' : ' ✗') : '') + '</em>'));
      c.appendChild(line);
      var allPass = Object.keys(pass).every(function (k) { return pass[k] !== false; }) && totOk !== false && Object.keys(r.skd.pts).length === 3;
      c.appendChild(SH.note('<b>' + esc(Object.keys(r.skd.pts).length === 3 ? (allPass ? T('All configured thresholds met in this practice form.', 'Semua ambang konfigurasi terpenuhi di formulir latihan ini.') : T('At least one section is below its configured threshold.', 'Setidaknya satu bagian di bawah ambang konfigurasinya.')) : T('Section practice: compare the section with its threshold.', 'Latihan bagian: bandingkan bagian dengan ambangnya.')) + '</b> ' + esc(T('Estimate if no blanks: ', 'Estimasi jika tanpa kosong: ')) + r.skd.estimate + '. ' + esc(T('Source: ', 'Sumber: ')) + esc(CFG.skd.source) + ' · ' + esc(T('verified ', 'diverifikasi ')) + CFG.verified_on + '. ' + esc(B(CFG.format_notice)), 'flag'));
    }
    var statsList = [[r.correct + '/' + r.n, { en: 'correct', id: 'benar' }], [r.accuracy + '%', { en: 'accuracy of attempted', id: 'ketepatan dari yang dikerjakan' }], [r.completion + '%', { en: 'completion', id: 'penyelesaian' }], [r.attempted ? Math.round(r.secs / r.attempted) + 's' : '0s', { en: 'per item', id: 'per soal' }]];
    if (r.secondShare != null) statsList.push([r.secondShare + '%', { en: 'second-best share', id: 'porsi terbaik kedua' }]);
    if (r.estimate != null && !r.skd) statsList.push([r.estimate, { en: 'estimate if no blanks', id: 'estimasi jika tanpa kosong' }]);
    if (r.last10 != null) statsList.push([r.last10, { en: 'TKP items 36 to 45 mean', id: 'rata-rata TKP soal 36 sampai 45' }]);
    c.appendChild(SH.stats(statsList));
    main.appendChild(c);
    /* cause split */
    var causes = Object.keys(r.cause || {});
    if (causes.length && (r.mode === 'cat' || r.mode === 'mock' || r.mode === 'section' || r.mode === 'timed')) {
      var cs = SH.card({ kick: { en: 'Cause split', id: 'Pemisahan sebab' }, title: { en: 'Knowledge, pace or judgement, per section', id: 'Pengetahuan, tempo, atau pertimbangan, per bagian' } });
      var W = { ok: { en: 'holding', id: 'bertahan' }, knowledge: { en: 'knowledge: calm misses; lesson sections and untimed drills', id: 'pengetahuan: salah dengan tenang; bagian pelajaran dan latihan tanpa batas waktu' }, pace: { en: 'pace: rushed, over-time or blank items; checkpoints and the skip rule', id: 'tempo: soal terburu-buru, melewati waktu, atau kosong; titik periksa dan aturan melewati' }, 'judgement-second': { en: 'judgement: second-best habit; the “4 or 5?” drill', id: 'pertimbangan: kebiasaan terbaik kedua; latihan “4 atau 5?”' }, 'judgement-trap': { en: 'judgement: a trap is firing; the lowest dimension untimed with the ladder', id: 'pertimbangan: satu jebakan bekerja; dimensi terendah tanpa batas waktu dengan tangga' } };
      causes.forEach(function (k) { var s = r.sections[k]; cs.appendChild(SH.dim(sectionLabel(k) + ' · ' + B(W[r.cause[k]] || W.ok), s.ok + '/' + s.n + (s.blank ? ' · ' + s.blank + ' ' + T('blank', 'kosong') : '') + (s.rushed ? ' · ' + s.rushed + ' ' + T('rushed', 'terburu-buru') : ''), s.n)); });
      main.appendChild(cs);
    }
    /* grids */
    var gr = SH.card({ kick: { en: 'Grid', id: 'Kisi' }, title: { en: 'By family and sub-type', id: 'Per keluarga dan sub-tipe' } });
    Object.keys(r.byFamily).forEach(function (f) { var fb = r.byFamily[f]; var med = C.median(fb.times); gr.appendChild(SH.dim(B(C.FAMILY[f]) || f, fb.ok + '/' + fb.n + (fb.blank ? ' · ' + fb.blank + ' ' + T('blank', 'kosong') : '') + (med ? ' · ' + T('median ', 'median ') + med + ' s' : ''), fb.n)); });
    var subs = el('div', 'tl-map-row');
    Object.keys(r.bySub).forEach(function (k) { var s = r.bySub[k], acc = s.n ? Math.round(s.ok / s.n * 100) : 0, band = s.n < 2 ? 'none' : acc < 50 ? 'red' : acc < 75 ? 'amber' : 'green'; var chip = el('button', 'tl-chip ' + band); chip.type = 'button'; chip.innerHTML = '<span>' + esc(C.SUB[s.subtype] || s.subtype) + '</span><i>' + s.ok + '/' + s.n + (C.median(s.times) > s.target * CFG.pacing.skip_at_multiple ? ' ⏱' : '') + '</i>'; chip.addEventListener('click', function () { start('drill:' + s.family + '/' + s.subtype); }); subs.appendChild(chip); });
    gr.appendChild(subs);
    if (Object.keys(r.byDim).length) { var dp = el('div'); dp.style.marginTop = '12px'; dp.appendChild(el('div', 'ts-kick', esc(T('Dimension profile (mean out of 5)', 'Profil dimensi (rata-rata dari 5)')))); Object.keys(r.byDim).forEach(function (d) { var x = r.byDim[d]; dp.appendChild(SH.dim(C.SUB[d] || d, (Math.round(x.sum / x.n * 100) / 100).toFixed(2), 5)); }); gr.appendChild(dp); }
    main.appendChild(gr);
    /* recommendation */
    var rec = C.nextSet();
    main.appendChild(SH.cta({ icon: 'compass', title: { en: 'Next', id: 'Berikutnya' }, text: rec.reason, actions: [SH.btn(presetLabel(rec.preset), { icon: 'arrow', onClick: function () { preset(rec.preset); } }), SH.btn({ en: 'Redo misses', id: 'Ulangi yang salah' }, { ghost: true, onClick: function () { var ids = r.items.filter(function (x) { return x.ok === false || x.ans == null; }).map(function (x) { return x.id; }); if (!ids.length) return; run = null; var set = { items: C.shuffle(ids.map(function (i) { return C.byId[i]; })) }; startCustom(set, { en: 'Redo misses', id: 'Ulangi yang salah' }); } })] }));
    /* item review */
    var rv = SH.card({ kick: { en: 'Review', id: 'Tinjauan' }, title: { en: 'Every item, every explanation', id: 'Setiap soal, setiap pembahasan' } });
    r.items.forEach(function (row, i) {
      var it = C.byId[row.id]; if (!it) return;
      var li = el('div', 'ts-li'); li.appendChild(el('span', 'ts-num' + (row.ok ? ' done' : ''), row.ok ? '✓' : String(i + 1)));
      var tx = el('div'); tx.style.minWidth = '0';
      tx.appendChild(el('div', null, '<b>' + esc(B(it.stem)) + '</b> <span class="ts-count">' + esc(C.SUB[it.subtype] || it.subtype) + (row.flag ? ' · ' + esc(T('flagged', 'ditandai')) : '') + '</span>'));
      if (it.assets) { var as = el('div', 'tl-assets sm'); as.innerHTML = it.assets.map(C.assetHtml).join(''); tx.appendChild(as); }
      if (row.ans == null) tx.appendChild(SH.check(false, esc(T('not answered (0)', 'tidak dijawab (0)'))));
      else tx.appendChild(SH.check(!!row.ok, esc(T('Your answer: ', 'Jawabanmu: ')) + String.fromCharCode(65 + row.ans) + (it.options[row.ans].fig ? '' : ' · ' + B(it.options[row.ans])) + (row.w != null ? ' (' + row.w + ')' : '')));
      var det = el('details'); var sm = el('summary', null, esc(T('Explanation', 'Pembahasan'))); det.appendChild(sm); det.appendChild(explain(it, row.ans == null ? (it.format === 'ranked5' ? it.weights.indexOf(1) : (it.answer + 1) % it.options.length) : row.ans, row.t)); tx.appendChild(det);
      li.appendChild(tx); rv.appendChild(li);
    });
    main.appendChild(rv);
    main.appendChild(SH.btn({ en: 'Back to the Lab', id: 'Kembali ke Lab' }, { ghost: true, iconL: 'arrowL', onClick: function () { go('home'); } }));
    host.appendChild(SH.stage(null, main));
  }
  function startCustom(set, label) {
    run = { id: C.uid(), preset: 'custom', mode: 'drill', label: label, items: set.items, answers: {}, flags: {}, times: {}, i: 0, started: Date.now(), itemStart: Date.now(), timed: null, left: null, timer: null, feedback: 'instant', adaptive: false, sections: null, shown: {}, revealed: {} };
    go('run');
  }

  /* ─── Kraepelin-style simulator ─── */
  var K = null;
  function paintKraepelin() {
    var main = el('div', 'ts-main'); main.style.cssText = 'max-width:980px;margin:0 auto;width:100%';
    if (!K || K.phase === 'setup') {
      var c = SH.card({ kick: { en: 'Kraepelin-style simulator', id: 'Simulator gaya Kraepelin' }, title: { en: 'Random digits, your intervals, a work curve', id: 'Angka acak, interval pilihanmu, kurva kerja' } });
      c.appendChild(el('p', 'ts-p', esc(T('Add each pair of adjacent digits from the bottom of the column upward and type only the last digit of the sum. Never go back; never skip a pair. The report shows output per interval, consistency and slope. Metanoia’s own generic simulator, not a reproduction of any published test form.', 'Jumlahkan tiap pasangan angka berdekatan dari bawah kolom ke atas dan ketik hanya angka terakhir dari jumlahnya. Jangan pernah kembali; jangan pernah melewati pasangan. Laporan menunjukkan hasil per interval, konsistensi, dan kemiringan. Simulator generik milik Metanoia sendiri, bukan reproduksi formulir tes terbitan mana pun.'))));
      var iv = SH.input('number', { value: CFG.kraepelin.interval_s, id: 'tlKiv' }), nI = SH.input('number', { value: CFG.kraepelin.intervals, id: 'tlKn' });
      var two = el('div', 'ts-two'); two.appendChild(SH.field({ label: { en: 'Seconds per interval', id: 'Detik per interval' }, input: iv })); two.appendChild(SH.field({ label: { en: 'Number of intervals', id: 'Jumlah interval' }, input: nI })); c.appendChild(two);
      c.appendChild(SH.btn({ en: 'Start', id: 'Mulai' }, { icon: 'arrow', onClick: function () { startK(Math.max(10, +iv.value || 30), Math.max(2, Math.min(60, +nI.value || 20))); } }));
      var runs = C.load('kraepelin', []).slice(-5).reverse();
      if (runs.length) { var rc = SH.card({ kick: { en: 'Previous runs', id: 'Jalan sebelumnya' }, title: { en: 'Find the pace you can hold', id: 'Temukan tempo yang bisa dipertahankan' } }); runs.forEach(function (r) { rc.appendChild(SH.rowi({ icon: 'zap', title: r.total + ' ' + T('sums', 'jumlah') + ' · ' + r.errors + ' ' + T('errors', 'kesalahan'), sub: T('consistency ', 'konsistensi ') + r.consistency + ' · ' + T('slope ', 'kemiringan ') + r.slope + ' · ' + new Date(r.ts).toLocaleDateString(), actions: [] })); }); main.appendChild(c); main.appendChild(rc); }
      else main.appendChild(c);
      main.appendChild(SH.btn({ en: 'Back to the Lab', id: 'Kembali ke Lab' }, { quiet: true, iconL: 'arrowL', onClick: function () { K = null; go('home'); } }));
      host.appendChild(SH.stage(null, main)); return;
    }
    if (K.phase === 'run') {
      var c2 = SH.card({ kick: { en: 'Interval ', id: 'Interval ' }, title: (K.iv + 1) + ' / ' + K.nI, cls: 'gold' });
      var tm = el('div', 'ts-timer tl-timer'); tm.appendChild(SH.svg('stopwatch')); tm.appendChild(el('b', null, fmtClock(K.left))); c2.appendChild(tm);
      var col = el('div', 'tl-kcol');
      var d = K.digits, p = K.pos;
      for (var k = Math.min(d.length - 1, p + 4); k >= Math.max(0, p - 2); k--) { var cell = el('div', 'tl-kcell' + (k === p + 1 ? ' a' : k === p ? ' b' : '')); cell.textContent = d[k]; col.appendChild(cell); }
      c2.appendChild(col);
      c2.appendChild(el('p', 'ts-p', esc(T('Sum of the two highlighted digits, last digit only. Type 0 to 9.', 'Jumlah dua angka yang disorot, angka terakhir saja. Ketik 0 sampai 9.'))));
      var inp = SH.input('text', { placeholder: '0-9', id: 'tlKin' }); inp.inputMode = 'numeric'; inp.maxLength = 1; inp.autocomplete = 'off';
      inp.addEventListener('input', function () { var v = inp.value.replace(/\D/g, ''); inp.value = ''; if (v.length) kAnswer(+v[0]); });
      c2.appendChild(inp);
      var pad = el('div', 'tl-kpad'); for (var n = 0; n <= 9; n++) (function (n) { var b = el('button', 'ts-btn ghost sm', String(n)); b.type = 'button'; b.addEventListener('click', function () { kAnswer(n); }); pad.appendChild(b); })(n); c2.appendChild(pad);
      c2.appendChild(SH.stats([[K.done, { en: 'sums this interval', id: 'jumlah interval ini' }], [K.errs, { en: 'errors', id: 'kesalahan' }]]));
      c2.appendChild(SH.btn({ en: 'Stop', id: 'Berhenti' }, { quiet: true, onClick: function () { endK(); } }));
      main.appendChild(c2); host.appendChild(SH.stage(null, main));
      var f = host.querySelector('#tlKin'); if (f) f.focus();
      return;
    }
    /* report */
    var r = K.report;
    var c3 = SH.card({ kick: { en: 'Work curve', id: 'Kurva kerja' }, title: r.total + ' ' + T('sums · ', 'jumlah · ') + r.errors + ' ' + T('errors', 'kesalahan'), cls: 'gold' });
    var bars = el('div', 'tl-kbars'); var mx = Math.max.apply(null, r.perInterval.concat([1]));
    r.perInterval.forEach(function (v, i) { var b = el('div', 'tl-kbar'); b.style.height = Math.round(v / mx * 100) + '%'; b.title = T('Interval ', 'Interval ') + (i + 1) + ': ' + v; bars.appendChild(b); });
    c3.appendChild(bars);
    c3.appendChild(SH.stats([[r.mean, { en: 'mean per interval', id: 'rata-rata per interval' }], [r.consistency, { en: 'consistency (spread ÷ mean)', id: 'konsistensi (rentang ÷ rata-rata)' }], [r.slope, { en: 'slope per interval', id: 'kemiringan per interval' }], [r.errors, { en: 'errors', id: 'kesalahan' }]]));
    c3.appendChild(SH.note('<b>' + esc(T('Reading', 'Pembacaan')) + '</b> ' + esc(r.consistency > 0.35 ? T('Erratic: the spread between your best and worst intervals is wide. Start the next run at 85% of your best interval and hold it.', 'Tidak menentu: rentang antara interval terbaik dan terburukmu lebar. Mulai jalan berikutnya pada 85% interval terbaikmu dan pertahankan.') : r.slope < -0.3 ? T('Collapsing: output falls as the run goes on. Start slower; the curve is scored, not the first column.', 'Runtuh: hasil turun seiring jalan. Mulai lebih lambat; kurvanya yang dinilai, bukan kolom pertama.') : T('Steady. Record this pace as your rhythm in the Dossier.', 'Stabil. Catat tempo ini sebagai ritmemu di Dossier.')), 'target'));
    c3.appendChild(SH.btn({ en: 'Run again', id: 'Jalankan lagi' }, { icon: 'refresh', onClick: function () { K = { phase: 'setup' }; paint(); } }));
    main.appendChild(c3);
    main.appendChild(SH.btn({ en: 'Back to the Lab', id: 'Kembali ke Lab' }, { quiet: true, iconL: 'arrowL', onClick: function () { K = null; go('home'); } }));
    host.appendChild(SH.stage(null, main));
  }
  function startK(ivS, nI) {
    var digits = []; for (var i = 0; i < nI * 80; i++) digits.push(Math.floor(Math.random() * 10));
    K = { phase: 'run', ivS: ivS, nI: nI, iv: 0, left: ivS, digits: digits, pos: 0, done: 0, errs: 0, perInterval: [], errsPer: [], timer: null };
    K.timer = setInterval(function () { K.left--; var tn = host && host.querySelector('.tl-timer b'); if (tn) tn.textContent = fmtClock(K.left); if (K.left <= 0) { K.perInterval.push(K.done); K.errsPer.push(K.errs); K.done = 0; K.errs = 0; K.iv++; if (K.iv >= K.nI) { endK(); return; } K.left = K.ivS; paint(); } }, 1000);
    paint();
  }
  function kAnswer(n) { if (!K || K.phase !== 'run') return; var d = K.digits, p = K.pos; if (p + 1 >= d.length) { endK(); return; } var ok = ((d[p] + d[p + 1]) % 10) === n; K.done++; if (!ok) K.errs++; K.pos++; var col = host.querySelector('.tl-kcol'); if (col) { var fresh = el('div', 'tl-kcol'); var dd = K.digits, pp = K.pos; for (var k = Math.min(dd.length - 1, pp + 4); k >= Math.max(0, pp - 2); k--) { var cell = el('div', 'tl-kcell' + (k === pp + 1 ? ' a' : k === pp ? ' b' : '')); cell.textContent = dd[k]; fresh.appendChild(cell); } col.replaceWith(fresh); } var st = host.querySelectorAll('.ts-stat b'); if (st[0]) st[0].textContent = K.done; if (st[1]) st[1].textContent = K.errs; }
  function endK() {
    if (!K) return; if (K.timer) clearInterval(K.timer); K.timer = null;
    if (K.done || !K.perInterval.length) { K.perInterval.push(K.done); K.errsPer.push(K.errs); }
    var per = K.perInterval, n = per.length, total = per.reduce(function (s, v) { return s + v; }, 0), errors = K.errsPer.reduce(function (s, v) { return s + v; }, 0);
    var mean = n ? total / n : 0, mx = Math.max.apply(null, per), mn = Math.min.apply(null, per);
    var sx = 0, sy = 0, sxy = 0, sxx = 0; per.forEach(function (v, i) { sx += i; sy += v; sxy += i * v; sxx += i * i; });
    var slope = n > 1 ? (n * sxy - sx * sy) / (n * sxx - sx * sx) : 0;
    K.report = { ts: Date.now(), total: total, errors: errors, perInterval: per, mean: Math.round(mean * 10) / 10, consistency: mean ? Math.round((mx - mn) / mean * 100) / 100 : 0, slope: Math.round(slope * 100) / 100 };
    var runs = C.load('kraepelin', []); runs.push(K.report); C.save('kraepelin', runs.slice(-30));
    K.phase = 'report'; paint();
  }

  /* ─── consistency mirror ─── */
  function paintMirror() {
    var main = el('div', 'ts-main'); main.style.cssText = 'max-width:980px;margin:0 auto;width:100%';
    var saved = C.load('mirror', {});
    var pairs = window.MT_TESTLAB.mirror || [];
    var c = SH.card({ kick: { en: 'Consistency mirror', id: 'Cermin konsistensi' }, title: { en: 'Twelve statements, two framings each', id: 'Dua belas pernyataan, dua bingkai masing-masing' } });
    c.appendChild(el('p', 'ts-p', esc(T('Rate each statement 1 (not like me) to 5 (very like me). The mirror then shows where your answers to a pair disagree. Nothing leaves this device.', 'Nilai tiap pernyataan 1 (tidak seperti saya) sampai 5 (sangat seperti saya). Cermin lalu menunjukkan di mana jawabanmu untuk satu pasangan tidak sepakat. Tidak ada yang keluar dari perangkat ini.'))));
    var order = state.mirrorOrder || (state.mirrorOrder = C.shuffle(pairs.map(function (p, i) { return { i: i, k: 'a' }; }).concat(pairs.map(function (p, i) { return { i: i, k: 'b' }; }))));
    order.forEach(function (o, n) {
      var p = pairs[o.i], key = o.i + o.k;
      c.appendChild(SH.item({ num: n + 1, noicon: true, text: esc(p[o.k]), ctl: SH.scale({ n: 5, value: saved[key], onPick: function (v) { saved[key] = v; C.save('mirror', saved); paint(); } }) }));
    });
    var done = pairs.every(function (p, i) { return saved[i + 'a'] && saved[i + 'b']; });
    if (done) {
      var res = SH.card({ kick: { en: 'Mirror', id: 'Cermin' }, title: { en: 'Where the two framings disagree', id: 'Di mana dua bingkai tidak sepakat' } });
      var dis = 0;
      pairs.forEach(function (p, i) { var a = saved[i + 'a'], b = 6 - saved[i + 'b'], gap = Math.abs(a - b); if (gap >= 2) dis++; res.appendChild(SH.check(gap < 2, esc(C.SUB[p.v] || p.v) + ': ' + esc(gap < 2 ? T('consistent', 'konsisten') : T('disagreement (gap ' + gap + '): decide what you actually do, then answer both the same way', 'tidak sepakat (selisih ' + gap + '): putuskan apa yang benar-benar kamu lakukan, lalu jawab keduanya dengan cara yang sama')))); });
      res.appendChild(SH.note(esc(dis ? T(dis + ' disagreement(s). Rerun after deciding; two clean runs is the goal.', dis + ' ketidaksepakatan. Jalankan ulang setelah memutuskan; dua jalan bersih adalah tujuannya.') : T('No disagreements. Record the six sentences in the Dossier.', 'Tanpa ketidaksepakatan. Catat enam kalimatnya di Dossier.')), 'target'));
      res.appendChild(SH.btn({ en: 'Reset and rerun', id: 'Atur ulang dan jalankan lagi' }, { ghost: true, sm: true, onClick: function () { C.save('mirror', {}); state.mirrorOrder = null; paint(); } }));
      main.appendChild(c); main.appendChild(res);
    } else main.appendChild(c);
    main.appendChild(SH.btn({ en: 'Back to the Lab', id: 'Kembali ke Lab' }, { quiet: true, iconL: 'arrowL', onClick: function () { go('home'); } }));
    host.appendChild(SH.stage(null, main));
  }

  /* ─── plan tracker ─── */
  function paintPlan() {
    var main = el('div', 'ts-main'); main.style.cssText = 'max-width:980px;margin:0 auto;width:100%';
    var plan = C.load('plan', { sessions: [] });
    var c = SH.card({ kick: { en: 'Plan tracker', id: 'Pelacak rencana' }, title: { en: 'Sessions, presets, adherence', id: 'Sesi, preset, kepatuhan' } });
    var dIn = SH.input('date', { id: 'tlPd' }), lIn = SH.input('text', { placeholder: { en: 'e.g. Week 1 · syllogism untimed', id: 'mis. Minggu 1 · silogisme tanpa batas waktu' } });
    var pIn = SH.input('select', { options: [['', { en: '(no preset)', id: '(tanpa preset)' }], ['diagnostic:mixed40', 'Diagnostic'], ['drill:numerik', 'Drill · numerik'], ['drill:verbal', 'Drill · verbal'], ['drill:penalaran', 'Drill · penalaran'], ['drill:figural', 'Drill · figural'], ['drill:twk', 'Drill · TWK'], ['drill:tkp', 'Drill · TKP'], ['drill:akhlak', 'Drill · AKHLAK'], ['focus', 'Focus loop'], ['timed:numerik', 'Timed · numerik'], ['timed:figural', 'Timed · figural'], ['timed:tkd40', 'TKD-40'], ['timed:english20', 'English 20'], ['section:twk', 'Section · TWK'], ['section:tiu', 'Section · TIU'], ['section:tkp', 'Section · TKP'], ['mock:tpa60', 'TPA-60'], ['mock:bumn-t1', 'BUMN-T1'], ['cat:skd110', 'SKD-110'], ['kraepelin', 'Kraepelin'], ['mirror', 'Mirror']] });
    var three = el('div', 'ts-three'); three.appendChild(SH.field({ label: { en: 'Date', id: 'Tanggal' }, input: dIn })); three.appendChild(SH.field({ label: { en: 'Session', id: 'Sesi' }, input: lIn })); three.appendChild(SH.field({ label: { en: 'Lab preset', id: 'Preset Lab' }, input: pIn })); c.appendChild(three);
    c.appendChild(SH.btn({ en: 'Add session', id: 'Tambah sesi' }, { icon: 'plus', sm: true, onClick: function () { if (!lIn.value.trim()) { lIn.focus(); return; } plan.sessions.push({ id: C.uid(), d: dIn.value, label: lIn.value.trim(), preset: pIn.value, done: false }); C.save('plan', plan); paint(); } }));
    main.appendChild(c);
    if (plan.sessions.length) {
      var done = plan.sessions.filter(function (s) { return s.done; }).length;
      var lc = SH.card(); lc.appendChild(SH.hd({ en: 'Adherence', id: 'Kepatuhan' }, Math.round(done / plan.sessions.length * 100) + '% · ' + done + '/' + plan.sessions.length, ''));
      var rows = el('div', 'ts-rows');
      plan.sessions.slice().sort(function (a, b) { return (a.d || '') < (b.d || '') ? -1 : 1; }).forEach(function (s) {
        var acts = [];
        var cb = SH.btn(s.done ? { en: 'Done', id: 'Selesai' } : { en: 'Mark done', id: 'Tandai selesai' }, { ghost: !s.done, sm: true, iconL: 'check', onClick: function () { s.done = !s.done; C.save('plan', plan); paint(); } }); acts.push(cb);
        if (s.preset) acts.push(SH.btn({ en: 'Open', id: 'Buka' }, { sm: true, icon: 'arrow', onClick: function () { s.done = true; C.save('plan', plan); preset(s.preset); } }));
        acts.push(SH.xbtn(function () { plan.sessions = plan.sessions.filter(function (x) { return x.id !== s.id; }); C.save('plan', plan); paint(); }));
        rows.appendChild(SH.rowi({ icon: s.done ? 'checkCircle' : 'calendar', title: s.label, sub: (s.d || T('no date', 'tanpa tanggal')) + (s.preset ? ' · ' + s.preset : ''), actions: acts }));
      });
      lc.appendChild(rows); lc.appendChild(SH.note(esc(T('Adherence is printed next to your next mock report; the two numbers explain each other.', 'Kepatuhan dicetak di samping laporan simulasi berikutnya; kedua angka saling menjelaskan.')), 'calendar'));
      main.appendChild(lc);
    }
    main.appendChild(SH.btn({ en: 'Back to the Lab', id: 'Kembali ke Lab' }, { quiet: true, iconL: 'arrowL', onClick: function () { go('home'); } }));
    host.appendChild(SH.stage(null, main));
  }

  /* ─── error log ─── */
  function paintErrorLog() {
    var main = el('div', 'ts-main'); main.style.cssText = 'max-width:980px;margin:0 auto;width:100%';
    var log = C.load('errorlog', []);
    var c = SH.card({ kick: { en: 'Error log', id: 'Catatan kesalahan' }, title: log.length + ' ' + T('misses on this device', 'kesalahan di perangkat ini') });
    var traps = {}, learner = { knew: 0, gap: 0, time: 0, untagged: 0 }, subs = {};
    log.forEach(function (e) { (e.traps || []).forEach(function (t) { traps[t] = (traps[t] || 0) + 1; }); learner[e.learner || 'untagged']++; subs[e.family + '/' + e.subtype] = (subs[e.family + '/' + e.subtype] || 0) + 1; });
    c.appendChild(SH.stats([[learner.knew, { en: 'I knew this', id: 'Saya tahu ini' }], [learner.gap, { en: 'did not understand', id: 'belum paham' }], [learner.time, { en: 'ran out of time', id: 'kehabisan waktu' }], [learner.untagged, { en: 'untagged', id: 'tanpa tanda' }]]));
    var tk = el('div', 'ts-tags'); Object.keys(traps).sort(function (a, b) { return traps[b] - traps[a]; }).slice(0, 14).forEach(function (t) { tk.appendChild(SH.pill(t.replace(/_/g, ' ') + ' · ' + traps[t], 'bad')); }); c.appendChild(el('div', 'ts-kick', esc(T('Trap tags', 'Tanda jebakan')))); c.appendChild(tk);
    var sk = el('div', 'tl-map-row'); Object.keys(subs).sort(function (a, b) { return subs[b] - subs[a]; }).slice(0, 16).forEach(function (k) { var parts = k.split('/'); var b = el('button', 'tl-chip red'); b.type = 'button'; b.innerHTML = '<span>' + esc(C.SUB[parts[1]] || parts[1]) + '</span><i>' + subs[k] + '</i>'; b.addEventListener('click', function () { start('drill:' + k); }); sk.appendChild(b); }); var kk = el('div', 'ts-kick', esc(T('By sub-type', 'Per sub-tipe'))); kk.style.marginTop = '12px'; c.appendChild(kk); c.appendChild(sk);
    var row = el('div', 'ts-row'); row.appendChild(SH.btn({ en: 'Focus loop · ' + C.focusIds().length, id: 'Putaran fokus · ' + C.focusIds().length }, { icon: 'refresh', disabled: !C.focusIds().length, onClick: function () { start('focus'); } })); row.appendChild(SH.btn({ en: 'Clear log', id: 'Hapus catatan' }, { quiet: true, onClick: function () { if (confirm(T('Clear the error log on this device?', 'Hapus catatan kesalahan di perangkat ini?'))) { C.save('errorlog', []); paint(); } } })); c.appendChild(row);
    main.appendChild(c);
    main.appendChild(SH.btn({ en: 'Back to the Lab', id: 'Kembali ke Lab' }, { quiet: true, iconL: 'arrowL', onClick: function () { go('home'); } }));
    host.appendChild(SH.stage(null, main));
  }

  /* ─── config panel ─── */
  function paintConfig() {
    var main = el('div', 'ts-main'); main.style.cssText = 'max-width:980px;margin:0 auto;width:100%';
    var c = SH.card({ kick: { en: 'Config · version ' + CFG.version, id: 'Konfigurasi · versi ' + CFG.version }, title: { en: 'Every number the Lab shows, with its source', id: 'Setiap angka yang ditampilkan Lab, beserta sumbernya' } });
    c.appendChild(SH.note('<b>' + esc(T('Verified on ', 'Diverifikasi pada ')) + CFG.verified_on + '</b> · ' + esc(CFG.verified_by) + '. ' + esc(B(CFG.format_notice)), 'shieldTick'));
    var s = CFG.skd;
    var pre = el('div', 'tl-cfg');
    pre.innerHTML = '<h4>' + esc(s.name) + '</h4><div class="tl-xrow"><span>' + esc(T('Items · time', 'Soal · waktu')) + '</span>' + s.items + ' · ' + s.minutes + ' ' + esc(T('minutes; TWK ', 'menit; TWK ')) + s.sections.twk.items + ', TIU ' + s.sections.tiu.items + ', TKP ' + s.sections.tkp.items + '</div><div class="tl-xrow"><span>' + esc(T('Scoring', 'Penilaian')) + '</span>' + esc(s.scoring.twk_tiu) + '; TKP: ' + esc(s.scoring.tkp) + '; ' + esc(T('max ', 'maks ')) + s.max_total + '</div><div class="tl-xrow"><span>' + esc(T('Thresholds', 'Ambang')) + '</span>' + Object.keys(s.thresholds).map(function (k) { var t = s.thresholds[k]; return k.replace(/_/g, ' ') + ': ' + Object.keys(t).map(function (x) { return x.toUpperCase() + ' ' + t[x]; }).join(', '); }).join(' · ') + '</div><div class="tl-xrow"><span>SKD : SKB</span>' + s.weights.skd + ' : ' + s.weights.skb + ' · ' + esc(T('invite multiple ', 'pengali undangan ')) + s.invite_multiple + ' · ' + esc(T('tie-break ', 'penentu ')) + s.tiebreak.join(', ').toUpperCase() + '</div><div class="tl-xrow"><span>' + esc(T('Source', 'Sumber')) + '</span>' + esc(s.source) + '</div><div class="tl-xrow tl-verify"><span>Verify</span>' + esc(s.verify) + '</div>';
    var bm = CFG.bumn;
    pre.innerHTML += '<h4>' + esc(bm.name) + '</h4><div class="tl-xrow"><span>' + esc(T('Stages', 'Tahapan')) + '</span>' + esc(bm.stages.join(' → ')) + '</div><div class="tl-xrow"><span>TKD · AKHLAK · English</span>' + bm.tkd.items + ' / ' + bm.tkd.minutes + ' min · ' + bm.akhlak.items + ' / ' + bm.akhlak.minutes + ' min · ' + bm.english.items + ' / ' + bm.english.minutes + ' min (' + esc(T('Metanoia practice format', 'format latihan Metanoia')) + ')</div><div class="tl-xrow"><span>' + esc(T('Source', 'Sumber')) + '</span>' + esc(bm.source) + '</div><div class="tl-xrow tl-verify"><span>Verify</span>' + esc(bm.verify) + '</div>';
    var tp = CFG.tpa;
    pre.innerHTML += '<h4>' + esc(tp.name) + '</h4><div class="tl-xrow"><span>' + esc(T('Items · time', 'Soal · waktu')) + '</span>' + tp.items + ' · ' + tp.minutes + ' min · ' + Object.keys(tp.families).map(function (k) { return k + ' ' + tp.families[k]; }).join(', ') + '</div><div class="tl-xrow tl-verify"><span>Verify</span>' + esc(tp.verify) + '</div>';
    pre.innerHTML += '<h4>' + esc(T('Bank', 'Bank soal')) + '</h4><div class="tl-xrow"><span>' + esc(T('Items', 'Soal')) + '</span>' + C.ITEMS.length + ' ' + esc(T('original Metanoia practice items; built ', 'soal latihan asli Metanoia; dibangun ')) + window.MT_TESTLAB.built + '</div><div class="tl-xrow"><span>' + esc(T('Ranked keys', 'Kunci berjenjang')) + '</span>' + esc(B(CFG.tkp_disclaimer)) + ' ' + esc(B(CFG.review_panel)) + '</div><div class="tl-xrow"><span>' + esc(T('Psikotes', 'Psikotes')) + '</span>' + esc(B(CFG.psikotes_notice)) + '</div>';
    c.appendChild(pre);
    main.appendChild(c);
    main.appendChild(SH.btn({ en: 'Back to the Lab', id: 'Kembali ke Lab' }, { quiet: true, iconL: 'arrowL', onClick: function () { go('home'); } }));
    host.appendChild(SH.stage(null, main));
  }

  /* ─── keyboard ─── */
  document.addEventListener('keydown', function (e) {
    if (!run || state.screen !== 'run' || !host || !document.body.contains(host)) return;
    var tag = (e.target && e.target.tagName || '').toLowerCase(); if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    var k = e.key;
    if (/^[1-5]$/.test(k)) { var idx = +k - 1; if (idx < cur().options.length) { choose(idx); e.preventDefault(); } return; }
    if (/^[a-eA-E]$/.test(k) && k.toLowerCase() !== 'f') { var j = k.toUpperCase().charCodeAt(0) - 65; if (j < cur().options.length) { choose(j); e.preventDefault(); } return; }
    if (k === 'f' || k === 'F') { if (run.feedback !== 'instant') { toggleFlag(); e.preventDefault(); } return; }
    if (k === 'Enter' || k === 'ArrowRight') { if (run.feedback !== 'instant' || run.answers[run.i] !== undefined) { next(); e.preventDefault(); } return; }
    if (k === 'ArrowLeft') { if (run.feedback !== 'instant') { prev(); e.preventDefault(); } }
  });

  /* ─── promo counters and launches ─── */
  function syncPromo() { var s = stats(); document.querySelectorAll('[data-gym-stat]').forEach(function (n) { var k = n.getAttribute('data-gym-stat'); if (s[k] != null) n.textContent = s[k]; }); }
  document.addEventListener('mt:launch-tool', function (e) {
    if (e.detail && e.detail.tool === 'testlab') { var p = document.querySelector('.lmsp.open .lmsp-back'); if (p) p.click(); launch(e.detail.mode || 'home'); }
  });
  (function () { try { var q = new URLSearchParams(location.search); if (q.get('tool') === 'testlab') { var go2 = function () { setTimeout(function () { launch(q.get('mode') || 'home'); }, 80); }; if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go2); else go2(); } } catch (e) {} })();

  window.MT_TESTLAB_UI = { view: view, busy: busy, preset: preset, launch: launch, stats: stats, syncPromo: syncPromo, onOpen: function () { if (state.pending) { var m = state.pending; state.pending = null; preset(m); } else if (!run) go('home'); }, onClose: function () { if (run) { stopTimer(); run = null; } if (K && K.timer) { clearInterval(K.timer); K = null; } state.screen = 'home'; } };
})();
