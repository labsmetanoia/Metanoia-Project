/**
 * THE ROUTE — ROUTE PLANNER (on-device career instruments)
 * --------------------------------------------------------
 * Three instruments matching the course's operating systems:
 *   readiness — self-rated diagnostic across the six dimensions the
 *               modules train, with module recommendations and history.
 *   plan      — a 90-day plan builder: one goal, three 30-day phases,
 *               autosaved, reviewed at the end.
 *   wins      — the win log: dated entries with numbers and witnesses,
 *               the raw material of reviews, promotion files and CVs.
 *
 * Honesty contract: everything is self-assessed and computed on this
 * device. The diagnostic mirrors the user's own ratings back with
 * module recommendations — it does not predict or promise promotion.
 * Storage: localStorage 'mt_route_plan'.
 * Skin: js/tool-shell.js + css/tool-shell.css (shared with the other instruments).
 */
(function () {
  'use strict';
  var LS = 'mt_route_plan';
  var SH = window.MT_SHELL;
  if (!SH) return;
  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function T(en, id) { return lang() === 'id' ? id : en; }
  function store() { try { return JSON.parse(localStorage.getItem(LS) || '{}'); } catch (e) { return {}; } }
  function save(s) { try { localStorage.setItem(LS, JSON.stringify(s)); } catch (e) {} }
  var el = SH.el, esc = SH.esc;

  var DIMS = [
    ['arch', { en: 'Career architecture', id: 'Arsitektur karier' }, '1', 'briefcase', [
      { en: 'I have a written destination, way-stations and asset gates — reviewed within the last year.', id: 'Aku punya tujuan tertulis, persinggahan, dan gerbang aset — ditinjau dalam setahun terakhir.' },
      { en: 'My current quarter has named asset targets derived from my next transition.', id: 'Kuartalku kini punya target aset bernama yang diturunkan dari transisi berikutku.' }]],
    ['delivery', { en: 'Delivery & performance', id: 'Penunaian & performa' }, '2', 'chart', [
      { en: 'I know what my organisation and manager actually measure, and my effort follows it.', id: 'Aku tahu apa yang sungguh diukur organisasi dan manajerku, dan usahaku mengikutinya.' },
      { en: 'My workload is shaped deliberately — stated capacity, protected recovery floor.', id: 'Beban kerjaku dibentuk sengaja — kapasitas dinyatakan, lantai pemulihan dijaga.' }]],
    ['relate', { en: 'Managing relationships', id: 'Mengelola hubungan' }, '3', 'people', [
      { en: 'I run my one-on-ones with agendas, and adapt to my manager’s operating manual.', id: 'Aku menjalankan one-on-one dengan agenda, dan beradaptasi dengan manual operasi manajerku.' },
      { en: 'Peers would describe me as reliable: precise commitments, early flags, closed loops.', id: 'Rekan akan menyebutku andal: komitmen presisi, peringatan dini, lingkaran tertutup.' }]],
    ['visibility', { en: 'Visibility & brand', id: 'Visibilitas & merek' }, '4', 'diamond', [
      { en: 'My work produces artefacts and samples that reach the rooms I am not in.', id: 'Kerjaku menghasilkan artefak dan sampel yang sampai ke ruangan yang tak kuhadiri.' },
      { en: 'I know the two or three words my name currently triggers — I have asked.', id: 'Aku tahu dua-tiga kata yang kini dipicu namaku — aku sudah bertanya.' }]],
    ['evidence', { en: 'Promotion evidence', id: 'Bukti promosi' }, '5', 'trophy', [
      { en: 'My win log is current: results with numbers and witnesses, logged weekly.', id: 'Catatan kemenanganku terkini: hasil berangka dan bersaksi, dicatat mingguan.' },
      { en: 'I know my level guide, my file calendar, and where my case is thin.', id: 'Aku tahu panduan levelku, kalender berkasku, dan di mana kasusku tipis.' }]],
    ['finance', { en: 'Financial foundation', id: 'Fondasi finansial' }, '8', 'coins', [
      { en: 'Saving is automated, and my emergency runway is building or built.', id: 'Menabung sudah otomatis, dan landasan pacu daruratku sedang atau sudah terbangun.' },
      { en: 'I know my total compensation stack and its market benchmark.', id: 'Aku tahu tumpukan kompensasi totalku dan pembanding pasarnya.' }]]
  ];
  var MOD_NAME = {
    '1': { en: 'Career Architecture', id: 'Arsitektur Karier' },
    '2': { en: 'The Performance Game', id: 'Permainan Performa' },
    '3': { en: 'Managing Up, Across, and Down', id: 'Managing Up, Across, dan Down' },
    '4': { en: 'Building Professional Visibility', id: 'Membangun Visibilitas Profesional' },
    '5': { en: 'The Promotion Game', id: 'Permainan Promosi' },
    '8': { en: 'Early Career Financial Intelligence', id: 'Kecerdasan Keuangan Awal Karier' }
  };
  var PHASES = [
    { en: 'Days 1–30 · Foundations', id: 'Hari 1–30 · Fondasi' },
    { en: 'Days 31–60 · Momentum', id: 'Hari 31–60 · Momentum' },
    { en: 'Days 61–90 · Consolidation', id: 'Hari 61–90 · Konsolidasi' }
  ];
  var PHASE_ICON = ['seed', 'rocket', 'flag'];
  var TABS = [
    ['readiness', { en: 'Readiness', id: 'Kesiapan' }],
    ['plan', { en: '90-Day Plan', id: 'Rencana 90 Hari' }],
    ['wins', { en: 'Win Log', id: 'Catatan Kemenangan' }]
  ];

  var shell = null, tab = 'readiness', saveTimer = null;

  function build() {
    if (shell) return;
    shell = SH.mount({
      id: 'routePlan', product: 'The Route', tool: 'Route Planner',
      scene: '../../assets/bg/journey-start.jpg', scenePos: '70% 40%', side: 'left',
      onClose: close
    });
  }
  function paintTabs() {
    shell.setTabs(TABS.map(function (t) { return { key: t[0], label: t[1], on: tab === t[0] }; }), function (k) { tab = k; render(); });
  }

  /* ─── readiness diagnostic ─── */
  function readinessView() {
    var s = store();
    s.diag = s.diag || { scores: {} };
    var total = DIMS.length * 2;
    var answered = Object.keys(s.diag.scores || {}).filter(function (k) { return s.diag.scores[k]; }).length;

    var hero = SH.hero({
      kicker: { en: 'Instrument 1 · Readiness diagnostic', id: 'Instrumen 1 · Diagnostik kesiapan' },
      title: { en: ['Six dimensions,', 'honestly rated'], id: ['Enam dimensi,', 'dinilai jujur'] },
      sub: { en: 'Rate each statement for the last quarter — 1 = rarely true, 5 = consistently true.', id: 'Nilai tiap pernyataan untuk kuartal terakhir — 1 = jarang benar, 5 = konsisten benar.' },
      chip: { en: 'The evidence rule from Lesson 1.4 applies: no evidence, lower number.', id: 'Aturan bukti Pelajaran 1.4 berlaku: tanpa bukti, angka lebih rendah.' },
      tagline: [{ en: 'Greater awareness', id: 'Kesadaran yang lebih besar' }, { en: 'creates a clearer route.', id: 'menciptakan rute yang lebih jelas.' }],
      art: { img: '../../assets/bg/journey-start.jpg', pos: '60% 45%', nodes: [
        { x: 18, y: 78, big: true, label: { en: 'Assess today', id: 'Nilai hari ini' } },
        { x: 50, y: 56, label: { en: 'Plan tomorrow', id: 'Rencanakan esok' } },
        { x: 72, y: 28, label: { en: 'A stronger you', id: 'Dirimu yang lebih kuat' } }] },
      quote: { en: 'Clarity today builds momentum tomorrow.', id: 'Kejernihan hari ini membangun momentum esok.' },
      sign: [{ en: 'Same effort.', id: 'Usaha yang sama.' }, { en: 'A brighter tomorrow.', id: 'Esok yang lebih cerah.' }]
    });

    var main = el('div', 'ts-main');
    DIMS.forEach(function (d, di) {
      var it = el('div', 'ts-item stack' + (d[4].every(function (_, qi) { return s.diag.scores[d[0] + qi]; }) ? ' on' : ''));
      it.appendChild(el('div', 'ts-num', String(di + 1)));
      var ic = el('div', 'ts-ico'); ic.innerHTML = SH.ico(d[3]); it.appendChild(ic);
      var tx = el('div');
      tx.appendChild(el('h4', null, esc(T(d[1].en, d[1].id))));
      it.appendChild(tx);
      var ctl = el('div', 'ts-ctl'); ctl.style.cssText = 'gap:14px;align-items:stretch';
      d[4].forEach(function (q, qi) {
        var key = d[0] + qi;
        var row = el('div'); row.style.cssText = 'display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px 20px;align-items:center';
        row.appendChild(el('p', null, esc(T(q.en, q.id))));
        row.appendChild(SH.scale({ value: s.diag.scores[key], lo: { en: 'Rarely true', id: 'Jarang benar' }, hi: { en: 'Consistently true', id: 'Konsisten benar' },
          onPick: function (k) { var s2 = store(); s2.diag = s2.diag || { scores: {} }; s2.diag.scores[key] = k; save(s2); render(); } }));
        row.className = 'rp-q';
        ctl.appendChild(row);
      });
      it.appendChild(ctl);
      main.appendChild(it);
    });

    if (answered === total) {
      var dims = DIMS.map(function (d) {
        var v = ((s.diag.scores[d[0] + '0'] || 0) + (s.diag.scores[d[0] + '1'] || 0)) / 2;
        return { id: d[0], label: d[1], mod: d[2], v: v };
      });
      var r = SH.card({ kick: { en: 'Your reading', id: 'Pembacaanmu' }, title: { en: 'Where the route is strong, and where it thins', id: 'Di mana rute kuat, dan di mana menipis' },
        text: T('Self-assessed, on this device. The bars mirror your ratings back — a map for the next 90 days, not a verdict, and not a promotion prediction.',
          'Dinilai sendiri, di perangkat ini. Batang-batang memantulkan penilaianmu — peta untuk 90 hari ke depan, bukan vonis, dan bukan ramalan promosi.') });
      dims.forEach(function (d) { r.appendChild(SH.dim(d.label, d.v.toFixed(1) + ' / 5', 5)); });
      var weak = dims.slice().sort(function (a, b) { return a.v - b.v; })[0];
      var mn = MOD_NAME[weak.mod];
      r.appendChild(SH.note('<b>' + esc(T('Weakest dimension: ', 'Dimensi terlemah: ')) + esc(T(weak.label.en, weak.label.id)) + '.</b> ' +
        esc(T('Module ' + weak.mod + ' — ' + mn.en + ' — trains it directly; build your next 90-day plan around it.', 'Modul ' + weak.mod + ' — ' + mn.id + ' — melatihnya langsung; susun rencana 90 harimu di sekitarnya.')), 'target'));
      var row = el('div', 'ts-row');
      row.appendChild(SH.btn({ en: 'Save this reading', id: 'Simpan pembacaan ini' }, { icon: 'check', onClick: function () {
        var s2 = store(); s2.diag.history = s2.diag.history || [];
        s2.diag.history.push({ date: Date.now(), dims: dims.map(function (d) { return { id: d.id, v: d.v }; }) });
        save(s2); render();
      } }));
      row.appendChild(SH.btn({ en: 'Build the plan', id: 'Susun rencananya' }, { ghost: true, icon: 'arrow', onClick: function () { tab = 'plan'; render(); } }));
      r.appendChild(row);
      main.appendChild(r);

      var hist = (s.diag.history || []);
      if (hist.length) {
        var h = SH.card({ kick: { en: 'History — your deltas', id: 'Riwayat — selisihmu' }, title: { en: 'Readings over time', id: 'Pembacaan dari waktu ke waktu' } });
        var rows = el('div', 'ts-rows');
        hist.slice(-5).reverse().forEach(function (rec) {
          var avg = rec.dims.reduce(function (a, d) { return a + d.v; }, 0) / rec.dims.length;
          rows.appendChild(SH.rowi({ icon: 'calendar', title: new Date(rec.date).toLocaleDateString(), sub: T('average', 'rata-rata') + ' ' + avg.toFixed(1) + ' / 5', actions: [SH.pill(avg.toFixed(1) + ' / 5')] }));
        });
        h.appendChild(rows);
        h.appendChild(SH.note(esc(T('Re-run quarterly. The delta between readings is what the course and your plans actually built.', 'Jalankan ulang kuartalan. Selisih antar-pembacaan adalah yang sungguh dibangun kursus dan rencanamu.'))));
        main.appendChild(h);
      }
    }

    var complete = answered === total;
    main.appendChild(SH.cta({
      icon: 'chart',
      title: { en: 'Your input powers your next step', id: 'Masukanmu menggerakkan langkah berikutmu' },
      text: complete
        ? { en: 'These insights will help us tailor your 90-day plan and prioritize the right training for your growth.', id: 'Wawasan ini membantu menyusun rencana 90 harimu dan memprioritaskan latihan yang tepat untuk pertumbuhanmu.' }
        : T(answered + ' of ' + total + ' statements rated — complete all six dimensions to see your reading.', answered + ' dari ' + total + ' pernyataan ternilai — lengkapi keenam dimensi untuk melihat pembacaanmu.'),
      actions: [SH.btn({ en: 'Save & continue', id: 'Simpan & lanjutkan' }, { icon: 'arrow', onClick: function () {
        if (!complete) { var first = main.querySelector('.ts-item:not(.on)'); if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
        var s2 = store(); s2.diag.history = s2.diag.history || [];
        var last = s2.diag.history[s2.diag.history.length - 1];
        if (!last || Date.now() - last.date > 3600000) s2.diag.history.push({ date: Date.now(), dims: DIMS.map(function (d) { return { id: d[0], v: ((s2.diag.scores[d[0] + '0'] || 0) + (s2.diag.scores[d[0] + '1'] || 0)) / 2 }; }) });
        save(s2); tab = 'plan'; render();
      } })]
    }));
    return SH.stage(hero, main);
  }

  /* ─── 90-day plan ─── */
  function planView() {
    var s = store();
    s.plan = s.plan || { goal: '', phases: ['', '', ''], started: null };
    var days = s.plan.started ? Math.floor((Date.now() - s.plan.started) / 86400000) : null;
    var phaseNow = days == null ? -1 : days < 30 ? 0 : days < 60 ? 1 : days < 90 ? 2 : 3;

    var hero = SH.hero({
      kicker: { en: 'Instrument 2 · The 90-day plan', id: 'Instrumen 2 · Rencana 90 hari' },
      title: { en: ['One goal,', 'three deliberate phases'], id: ['Satu tujuan,', 'tiga fase yang disengaja'] },
      sub: { en: 'From Lesson 1.3: milestones need artefacts, dates and witnesses. Everything autosaves to this browser as you type.', id: 'Dari Pelajaran 1.3: tonggak butuh artefak, tanggal, dan saksi. Semua tersimpan otomatis di peramban ini saat kamu mengetik.' },
      chip: days == null ? { en: 'The clock starts the moment you write the goal.', id: 'Jam mulai berjalan saat kamu menulis tujuannya.' }
        : (phaseNow > 2 ? T('Day ' + days + ' — review time. Close the plan and start the next one.', 'Hari ' + days + ' — waktunya tinjauan. Tutup rencana ini dan mulai yang berikutnya.')
          : T('Day ' + days + ' of 90 · ' + PHASES[phaseNow].en.split('·')[1].trim(), 'Hari ' + days + ' dari 90 · ' + PHASES[phaseNow].id.split('·')[1].trim())),
      chipIcon: 'calendar',
      tagline: [{ en: 'Milestones with artefacts,', id: 'Tonggak dengan artefak,' }, { en: 'dates and witnesses.', id: 'tanggal, dan saksi.' }],
      art: { img: '../../assets/bg/hero.jpg', pos: '50% 60%', nodes: [
        { x: 16, y: 80, caps: true, label: { en: 'Day 1', id: 'Hari 1' }, big: true },
        { x: 44, y: 60, caps: true, label: { en: 'Day 30', id: 'Hari 30' } },
        { x: 64, y: 40, caps: true, label: { en: 'Day 60', id: 'Hari 60' } },
        { x: 82, y: 18, caps: true, flag: true, label: { en: 'Day 90', id: 'Hari 90' } }] },
      quote: { en: 'A plan is a promise with a calendar.', id: 'Rencana adalah janji yang punya kalender.' },
      sign: [{ en: 'Same effort.', id: 'Usaha yang sama.' }, { en: 'A brighter tomorrow.', id: 'Esok yang lebih cerah.' }]
    });

    var main = el('div', 'ts-main');
    var saved = el('span', 'ts-saved'); saved.appendChild(SH.svg('checkCircle')); saved.appendChild(el('span', null, esc(T('Saved', 'Tersimpan'))));
    function autosave(fn) {
      if (saveTimer) clearTimeout(saveTimer);
      saveTimer = setTimeout(function () { fn(); saved.classList.add('on'); setTimeout(function () { saved.classList.remove('on'); }, 1200); }, 500);
    }
    var gc = SH.card({ kick: { en: 'The goal', id: 'Tujuan' }, title: { en: 'One verifiable outcome, 90 days out', id: 'Satu hasil terverifikasi, 90 hari dari sekarang' } });
    var goal = SH.input('textarea', { value: s.plan.goal || '', placeholder: { en: 'e.g. Own the monthly reporting end-to-end, presented to the department head, with the runbook adopted by the team.', id: 'mis. Memiliki pelaporan bulanan ujung-ke-ujung, dipresentasikan ke kepala departemen, dengan runbook diadopsi tim.' } });
    goal.addEventListener('input', function () {
      autosave(function () { var s2 = store(); s2.plan = s2.plan || { phases: ['', '', ''] }; s2.plan.goal = goal.value; if (!s2.plan.started && goal.value.trim()) s2.plan.started = Date.now(); save(s2); });
    });
    gc.appendChild(SH.field({ input: goal, icon: null }));
    var grow = el('div', 'ts-row'); grow.appendChild(saved); gc.appendChild(grow);
    main.appendChild(gc);

    PHASES.forEach(function (p, i) {
      var ta = SH.input('textarea', { value: (s.plan.phases || ['', '', ''])[i] || '', placeholder: [
        { en: 'Learn the terrain, install the systems, first small deliverable…', id: 'Pelajari medan, pasang sistem, hasil kecil pertama…' },
        { en: 'The visible delivery, the checkpoint conversations, the artefact…', id: 'Pengiriman terlihat, percakapan titik periksa, artefaknya…' },
        { en: 'Finish, document, present — and book the review of this plan…', id: 'Tuntaskan, dokumentasikan, presentasikan — dan jadwalkan tinjauan rencana ini…' }][i] });
      ta.style.minHeight = '96px';
      ta.addEventListener('input', function () {
        autosave(function () { var s2 = store(); s2.plan = s2.plan || { phases: ['', '', ''] }; s2.plan.phases = s2.plan.phases || ['', '', '']; s2.plan.phases[i] = ta.value; save(s2); });
      });
      var it = SH.item({ num: i + 1, icon: PHASE_ICON[i], title: p, on: phaseNow === i, stack: true,
        text: phaseNow === i ? '<span class="ts-pill">' + esc(T('You are here', 'Kamu di sini')) + '</span>' : (phaseNow > i ? '<span class="ts-pill ok">' + esc(T('Behind you', 'Sudah dilalui')) + '</span>' : ''), ctl: ta });
      main.appendChild(it);
    });

    var acts = [];
    if (s.plan.started) {
      acts.push(SH.btn({ en: 'Complete & start fresh', id: 'Selesaikan & mulai baru' }, { ghost: true, icon: 'refresh', onClick: function () {
        var s2 = store(); s2.planArchive = s2.planArchive || [];
        s2.planArchive.push({ plan: s2.plan, closed: Date.now() });
        s2.plan = { goal: '', phases: ['', '', ''], started: null };
        save(s2); render();
      } }));
    }
    acts.push(SH.btn({ en: 'Log a win', id: 'Catat kemenangan' }, { icon: 'arrow', onClick: function () { tab = 'wins'; render(); } }));
    main.appendChild(SH.cta({ icon: 'calendar',
      title: days == null ? { en: 'Write the goal to start the clock', id: 'Tulis tujuannya untuk memulai jam' } : T('Day ' + days + ' of 90', 'Hari ' + days + ' dari 90'),
      text: (s.planArchive || []).length
        ? T(s.planArchive.length + ' completed plan(s) archived in this browser. Each finished plan is a chapter of evidence for your win log.', s.planArchive.length + ' rencana selesai terarsip di peramban ini. Setiap rencana yang tuntas adalah satu bab bukti untuk catatan kemenanganmu.')
        : { en: 'Every artefact this plan produces belongs in the win log — with its number and its witness.', id: 'Setiap artefak yang dihasilkan rencana ini masuk ke catatan kemenangan — dengan angka dan saksinya.' },
      actions: acts }));
    return SH.stage(hero, main);
  }

  /* ─── win log ─── */
  function winsView() {
    var s = store();
    s.wins = s.wins || [];
    var month = s.wins.filter(function (w) { return Date.now() - w.date < 30 * 86400000; }).length;
    var withNum = s.wins.filter(function (w) { return /\d/.test(w.meta || ''); }).length;

    var hero = SH.hero({
      kicker: { en: 'Instrument 3 · The win log', id: 'Instrumen 3 · Catatan kemenangan' },
      title: { en: ['Evidence, captured', 'while it is fresh'], id: ['Bukti, ditangkap', 'selagi segar'] },
      sub: { en: 'The Friday habit from Lesson 1.1: what did this week add that you keep? One entry — what you delivered, its number, who can verify.', id: 'Kebiasaan Jumat dari Pelajaran 1.1: apa yang ditambahkan minggu ini yang tetap kamu miliki? Satu entri — apa yang kamu tunaikan, angkanya, siapa yang bisa memverifikasi.' },
      chip: { en: 'Twice a year, harvest into your CV and promotion one-pager (Lesson 5.2).', id: 'Dua kali setahun, panen ke CV dan satu halaman promosimu (Pelajaran 5.2).' },
      chipIcon: 'trophy',
      tagline: [{ en: 'Numbers and witnesses', id: 'Angka dan saksi' }, { en: 'turn work into a case.', id: 'mengubah kerja menjadi kasus.' }],
      art: { img: '../../assets/bg/portal.jpg', pos: '50% 40%', nodes: [
        { x: 24, y: 76, big: true, label: { en: 'This week', id: 'Minggu ini' } },
        { x: 56, y: 50, label: { en: 'The review', id: 'Tinjauan' } },
        { x: 78, y: 22, flag: true, caps: true, label: { en: 'Promotion file', id: 'Berkas promosi' } }] },
      quote: { en: 'What gets logged gets argued for.', id: 'Yang tercatat, bisa diperjuangkan.' },
      sign: [{ en: 'Same effort.', id: 'Usaha yang sama.' }, { en: 'A brighter tomorrow.', id: 'Esok yang lebih cerah.' }]
    });

    var main = el('div', 'ts-main');
    if (s.wins.length) main.appendChild(SH.stats([[s.wins.length, { en: 'entries logged', id: 'entri tercatat' }], [month, { en: 'in the last 30 days', id: 'dalam 30 hari terakhir' }], [withNum, { en: 'carry a number', id: 'membawa angka' }]]));

    var c = SH.card({ kick: { en: 'New entry', id: 'Entri baru' }, title: { en: 'What did this week add that you keep?', id: 'Apa yang ditambahkan minggu ini yang tetap kamu miliki?' } });
    var wt = SH.input('text', { placeholder: { en: 'e.g. Shipped the vendor-comparison analysis', id: 'mis. Merilis analisis perbandingan vendor' } });
    var wn = SH.input('text', { placeholder: { en: 'e.g. cited in the Q3 decision · Bu Rina can verify', id: 'mis. dikutip di keputusan Q3 · Bu Rina bisa memverifikasi' } });
    var two = el('div', 'ts-two wide');
    two.appendChild(SH.field({ label: { en: 'The win', id: 'Kemenangannya' }, input: wt, icon: 'trophy' }));
    two.appendChild(SH.field({ label: { en: 'Number & witness', id: 'Angka & saksi' }, input: wn, icon: 'users' }));
    c.appendChild(two);
    var row = el('div', 'ts-row');
    function add() {
      if (!wt.value.trim()) { wt.focus(); return; }
      var s2 = store(); s2.wins = s2.wins || [];
      s2.wins.push({ id: Date.now(), text: wt.value.trim(), meta: wn.value.trim(), date: Date.now() });
      save(s2); render();
    }
    wn.addEventListener('keydown', function (e) { if (e.key === 'Enter') add(); });
    row.appendChild(SH.btn({ en: 'Log it', id: 'Catat' }, { icon: 'arrow', onClick: add }));
    c.appendChild(row);
    main.appendChild(c);

    if (s.wins.length) {
      var lc = SH.card();
      lc.appendChild(SH.hd({ en: 'Your promotion file in raw form', id: 'Berkas promosimu dalam bentuk mentah' }, { en: 'Logged wins', id: 'Kemenangan tercatat' }, s.wins.length + ' ' + T('entries', 'entri')));
      var rows = el('div', 'ts-rows');
      s.wins.slice().reverse().forEach(function (win) {
        rows.appendChild(SH.rowi({ icon: 'trophy', title: win.text, sub: (win.meta ? win.meta + ' · ' : '') + new Date(win.date).toLocaleDateString(),
          actions: [SH.xbtn(function () { var s2 = store(); s2.wins = (s2.wins || []).filter(function (x) { return x.id !== win.id; }); save(s2); render(); })] }));
      });
      lc.appendChild(rows);
      lc.appendChild(SH.note(esc(T('Stored only in this browser. Entries without a number are claims; add the metric while you still remember it.', 'Tersimpan hanya di peramban ini. Entri tanpa angka hanyalah klaim; tambahkan metriknya selagi kamu masih ingat.')), 'lock'));
      main.appendChild(lc);
    }
    main.appendChild(SH.cta({ icon: 'doc',
      title: { en: 'Harvest, then argue', id: 'Panen, lalu perjuangkan' },
      text: { en: 'The promotion case builder in Fieldwork assembles a one-page case from this log — numbers, witnesses and scope language included.', id: 'Penyusun kasus promosi di Fieldwork merangkai kasus satu halaman dari catatan ini — lengkap dengan angka, saksi, dan bahasa cakupan.' },
      actions: [SH.btn({ en: 'Back to readiness', id: 'Kembali ke kesiapan' }, { ghost: true, iconL: 'arrowL', onClick: function () { tab = 'readiness'; render(); } })] }));
    return SH.stage(hero, main);
  }

  function render() {
    paintTabs();
    shell.clear();
    shell.body.appendChild(tab === 'readiness' ? readinessView() : tab === 'plan' ? planView() : winsView());
  }

  function open(mode) {
    build();
    if (mode === 'readiness' || mode === 'plan' || mode === 'wins') tab = mode;
    shell.open();
    render();
  }
  function close() {
    if (shell) shell.close();
    syncPromo();
  }

  function syncPromo() {
    var n = document.querySelector('[data-plan-status]');
    if (!n) return;
    var s = store();
    var parts = [];
    var scored = Object.keys((s.diag || {}).scores || {}).length;
    if (scored === DIMS.length * 2) parts.push(T('diagnostic complete', 'diagnostik lengkap'));
    if (s.plan && s.plan.started) parts.push(T('plan running — day ', 'rencana berjalan — hari ') + Math.floor((Date.now() - s.plan.started) / 86400000));
    if ((s.wins || []).length) parts.push((s.wins.length) + T(' wins logged', ' kemenangan tercatat'));
    n.textContent = parts.length
      ? T('Your planner so far: ', 'Planner-mu sejauh ini: ') + parts.join(' · ')
      : T('Nothing logged yet — the first diagnostic takes about ten minutes.', 'Belum ada yang tercatat — diagnostik pertama sekitar sepuluh menit.');
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-route-plan]');
    if (!b) return;
    e.preventDefault();
    open(b.getAttribute('data-route-plan'));
  });
  document.addEventListener('mt:launch-tool', function (e) {
    if (e.detail && e.detail.tool === 'plan') {
      var p = document.querySelector('.lmsp.open .lmsp-back');
      if (p) p.click();
      open(e.detail.mode);
    }
  });
  document.querySelectorAll('.ctl button, button[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      setTimeout(function () {
        syncPromo();
        if (shell && shell.isOpen()) render();
      }, 60);
    });
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', syncPromo);
  else syncPromo();

  window.MT_ROUTE_PLAN = { open: open, sync: syncPromo };
})();
