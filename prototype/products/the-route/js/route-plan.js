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
 */
(function () {
  'use strict';
  var LS = 'mt_route_plan';
  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function T(en, id) { return lang() === 'id' ? id : en; }
  function store() { try { return JSON.parse(localStorage.getItem(LS) || '{}'); } catch (e) { return {}; } }
  function save(s) { try { localStorage.setItem(LS, JSON.stringify(s)); } catch (e) {} }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  var DIMS = [
    ['arch', { en: 'Career architecture', id: 'Arsitektur karier' }, '1', [
      { en: 'I have a written destination, way-stations and asset gates — reviewed within the last year.', id: 'Aku punya tujuan tertulis, persinggahan, dan gerbang aset — ditinjau dalam setahun terakhir.' },
      { en: 'My current quarter has named asset targets derived from my next transition.', id: 'Kuartalku kini punya target aset bernama yang diturunkan dari transisi berikutku.' }]],
    ['delivery', { en: 'Delivery & performance', id: 'Penunaian & performa' }, '2', [
      { en: 'I know what my organisation and manager actually measure, and my effort follows it.', id: 'Aku tahu apa yang sungguh diukur organisasi dan manajerku, dan usahaku mengikutinya.' },
      { en: 'My workload is shaped deliberately — stated capacity, protected recovery floor.', id: 'Beban kerjaku dibentuk sengaja — kapasitas dinyatakan, lantai pemulihan dijaga.' }]],
    ['relate', { en: 'Managing relationships', id: 'Mengelola hubungan' }, '3', [
      { en: 'I run my one-on-ones with agendas, and adapt to my manager’s operating manual.', id: 'Aku menjalankan one-on-one dengan agenda, dan beradaptasi dengan manual operasi manajerku.' },
      { en: 'Peers would describe me as reliable: precise commitments, early flags, closed loops.', id: 'Rekan akan menggambarkanku andal: komitmen presisi, tanda dini, putaran tertutup.' }]],
    ['visible', { en: 'Visibility & brand', id: 'Visibilitas & merek' }, '4', [
      { en: 'My work produces artefacts and samples that reach the rooms I am not in.', id: 'Kerjaku menghasilkan artefak dan sampel yang mencapai ruangan yang tak kuhadiri.' },
      { en: 'I know the two or three words my name currently triggers — I have asked.', id: 'Aku tahu dua-tiga kata yang kini dipicu namaku — aku sudah bertanya.' }]],
    ['evidence', { en: 'Promotion evidence', id: 'Bukti promosi' }, '5', [
      { en: 'My win log is current: results with numbers and witnesses, logged weekly.', id: 'Catatan kemenanganku terkini: hasil berangka dan bersaksi, dicatat mingguan.' },
      { en: 'I know my level guide, my file calendar, and where my case is thin.', id: 'Aku tahu panduan levelku, kalender berkasku, dan di mana kasusku tipis.' }]],
    ['finance', { en: 'Financial foundation', id: 'Fondasi finansial' }, '8', [
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

  var css = '' +
  '#routePlan{position:fixed;inset:0;z-index:1250;display:none;background:var(--bg-base,#050A12);overflow:hidden}' +
  '#routePlan.open{display:flex;flex-direction:column}' +
  '#routePlan .rp-bg{position:absolute;inset:0;z-index:0;pointer-events:none;background:url("../../assets/bg/journey-bg.jpg") center 40%/cover no-repeat;opacity:.16}' +
  '#routePlan .rp-veil{position:absolute;inset:0;z-index:0;pointer-events:none;background:linear-gradient(180deg,rgba(5,10,18,.62),rgba(5,10,18,.9) 45%,rgba(5,10,18,.96))}' +
  ':root[data-theme="light"] #routePlan .rp-bg{opacity:.1}' +
  ':root[data-theme="light"] #routePlan .rp-veil{background:linear-gradient(180deg,rgba(238,241,246,.85),rgba(238,241,246,.96) 45%)}' +
  '#routePlan .rp-top{position:relative;z-index:1;display:flex;align-items:center;gap:12px;padding:11px 22px;flex-wrap:wrap;border-bottom:1px solid var(--gold-border);background:var(--glass-bg);backdrop-filter:var(--glass-blur)}' +
  '#routePlan .rp-top b{font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold)}' +
  '#routePlan .rp-tabs{display:flex;gap:4px}' +
  '#routePlan .rp-tab{border:1px solid transparent;background:none;color:var(--text-muted);border-radius:999px;padding:7px 15px;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;font-family:inherit}' +
  '#routePlan .rp-tab.on{color:var(--gold-bright);border-color:var(--gold-border-hover);background:rgba(201,168,76,.1)}' +
  '#routePlan .rp-close{margin-left:auto;width:36px;height:36px;border-radius:999px;border:1px solid var(--gold-border);background:none;color:var(--text);cursor:pointer;font-size:15px;flex:none}' +
  '#routePlan .rp-close:hover{border-color:var(--gold)}' +
  '#routePlan .rp-body{position:relative;z-index:1;flex:1;overflow-y:auto;padding:26px 22px 70px}' +
  '#routePlan .rp-in{max-width:860px;margin:0 auto;animation:rpEnter .4s cubic-bezier(.22,1,.36,1)}' +
  '@keyframes rpEnter{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}' +
  '@media(prefers-reduced-motion:reduce){#routePlan .rp-in{animation:none}}' +
  '#routePlan .rp-card{border:1px solid var(--gold-border);border-radius:16px;background:var(--glass-bg);backdrop-filter:var(--glass-blur);padding:22px 24px;margin-bottom:14px}' +
  '#routePlan .rp-kick{font-size:11px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:6px}' +
  '#routePlan h2{font-size:1.35rem;margin:0 0 8px;color:var(--text)}' +
  '#routePlan .rp-sub{font-size:13.5px;color:var(--text-sub);line-height:1.7;margin:0 0 12px}' +
  '#routePlan .rp-note{font-size:12px;color:var(--text-faint);line-height:1.55;margin-top:10px}' +
  '#routePlan .rp-dim{padding:14px 0;border-bottom:1px solid rgba(201,168,76,.12)}' +
  '#routePlan .rp-dim:last-child{border-bottom:none}' +
  '#routePlan .rp-dim h4{font-size:14px;color:var(--text);margin:0 0 4px}' +
  '#routePlan .rp-dim p{font-size:13px;color:var(--text-sub);margin:8px 0 6px;line-height:1.6}' +
  '#routePlan .rp-scale{display:flex;gap:5px}' +
  '#routePlan .rp-scale button{width:34px;height:34px;border-radius:9px;border:1px solid var(--gold-border);background:none;color:var(--text-muted);font-weight:800;font-size:13px;cursor:pointer;font-family:inherit}' +
  '#routePlan .rp-scale button.on{background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);color:#10131B;border-color:transparent}' +
  '#routePlan .rp-bar{height:8px;border-radius:999px;background:rgba(201,168,76,.14);overflow:hidden;margin-top:6px}' +
  '#routePlan .rp-bar i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#8B6914,#C9A84C,#F0D878)}' +
  '#routePlan .rp-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px;align-items:center}' +
  '#routePlan .rp-btn{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;border-radius:999px;border:0;cursor:pointer;font-family:inherit;font-weight:800;font-size:13px;background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);color:#10131B}' +
  '#routePlan .rp-btn.ghost{background:none;border:1px solid var(--gold-border);color:var(--gold)}' +
  '#routePlan .rp-field{margin-bottom:12px}' +
  '#routePlan .rp-field label{display:block;font-size:12px;font-weight:700;color:var(--text-muted);margin-bottom:6px}' +
  '#routePlan textarea,#routePlan input[type=text]{width:100%;box-sizing:border-box;background:var(--bg-mid);border:1px solid var(--gold-border);border-radius:10px;color:var(--text);font-family:inherit;font-size:13px;line-height:1.6;padding:10px 12px}' +
  '#routePlan textarea{min-height:84px;resize:vertical}' +
  '#routePlan textarea:focus,#routePlan input:focus{outline:none;border-color:var(--gold)}' +
  '#routePlan .rp-saved{font-size:12px;color:#4ADE80;opacity:0;transition:opacity .3s}' +
  '#routePlan .rp-saved.on{opacity:1}' +
  '#routePlan .rp-win{padding:12px 0;border-bottom:1px solid rgba(201,168,76,.12)}' +
  '#routePlan .rp-win:last-child{border-bottom:none}' +
  '#routePlan .rp-win b{font-size:13.5px;color:var(--text)}' +
  '#routePlan .rp-win .sm{font-size:12px;color:var(--text-muted);margin-top:3px;line-height:1.55}' +
  '#routePlan .rp-del{border:none;background:none;color:var(--text-faint);cursor:pointer;font-size:13px;float:right;padding:2px 6px}' +
  '#routePlan .rp-del:hover{color:#EF6F5E}' +
  '#routePlan .rp-tag{display:inline-block;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;border:1px solid var(--gold-border);border-radius:999px;padding:3px 10px;color:var(--gold);margin:2px 4px 2px 0}';

  var root = null, body = null, tabsEl = null, tab = 'readiness', saveTimer = null;

  function build() {
    if (root) return;
    var st = document.createElement('style');
    st.id = 'routePlanCss'; st.textContent = css;
    document.head.appendChild(st);
    root = el('div'); root.id = 'routePlan';
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-label', 'Route Planner');
    root.appendChild(el('div', 'rp-bg'));
    root.appendChild(el('div', 'rp-veil'));
    var top = el('div', 'rp-top');
    top.appendChild(el('b', null, T('The Route · Route Planner', 'The Route · Route Planner')));
    tabsEl = el('div', 'rp-tabs');
    [['readiness', 'Readiness', 'Kesiapan'], ['plan', '90-Day Plan', 'Rencana 90 Hari'], ['wins', 'Win Log', 'Catatan Kemenangan']].forEach(function (t) {
      var b = el('button', 'rp-tab', T(t[1], t[2]));
      b.dataset.tab = t[0];
      b.addEventListener('click', function () { tab = t[0]; render(); });
      tabsEl.appendChild(b);
    });
    top.appendChild(tabsEl);
    var x = el('button', 'rp-close', '✕');
    x.setAttribute('aria-label', 'Close');
    x.addEventListener('click', close);
    top.appendChild(x);
    body = el('div', 'rp-body');
    root.appendChild(top); root.appendChild(body);
    document.body.appendChild(root);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('open')) close();
    });
  }

  function card(w, kick, title, sub) {
    var c = el('div', 'rp-card');
    if (kick) c.appendChild(el('div', 'rp-kick', kick));
    if (title) c.appendChild(el('h2', null, title));
    if (sub) c.appendChild(el('p', 'rp-sub', sub));
    w.appendChild(c);
    return c;
  }

  /* ─── readiness diagnostic ─── */
  function readinessView(w) {
    var s = store();
    s.diag = s.diag || { scores: {} };
    var c = card(w, T('Instrument 1 · Readiness diagnostic', 'Instrumen 1 · Diagnostik kesiapan'),
      T('Six dimensions, honestly rated', 'Enam dimensi, dinilai jujur'),
      T('Rate each statement for the last quarter — 1 = rarely true, 5 = consistently true. The evidence rule from Lesson 1.4 applies: no evidence, lower number.',
        'Nilai tiap pernyataan untuk kuartal terakhir — 1 = jarang benar, 5 = konsisten benar. Aturan bukti Pelajaran 1.4 berlaku: tanpa bukti, angka lebih rendah.'));
    DIMS.forEach(function (d) {
      var box = el('div', 'rp-dim');
      box.appendChild(el('h4', null, T(d[1].en, d[1].id)));
      d[3].forEach(function (q, qi) {
        var key = d[0] + qi;
        box.appendChild(el('p', null, T(q.en, q.id)));
        var sc = el('div', 'rp-scale');
        for (var k = 1; k <= 5; k++) (function (k) {
          var b = el('button', s.diag.scores[key] === k ? 'on' : '', String(k));
          b.addEventListener('click', function () {
            var s2 = store(); s2.diag = s2.diag || { scores: {} };
            s2.diag.scores[key] = k; save(s2); render();
          });
          sc.appendChild(b);
        })(k);
        box.appendChild(sc);
      });
      c.appendChild(box);
    });

    var total = DIMS.length * 2;
    var answered = Object.keys(s.diag.scores || {}).length;
    if (answered === total) {
      /* results */
      var dims = DIMS.map(function (d) {
        var v = ((s.diag.scores[d[0] + '0'] || 0) + (s.diag.scores[d[0] + '1'] || 0)) / 2;
        return { id: d[0], label: d[1], mod: d[2], v: v };
      });
      var r = card(w, T('Your reading', 'Pembacaanmu'), null,
        T('Self-assessed, on this device. The bars mirror your ratings back — a map for the next 90 days, not a verdict, and not a promotion prediction.',
          'Dinilai sendiri, di perangkat ini. Batang-batang memantulkan penilaianmu — peta untuk 90 hari ke depan, bukan vonis, dan bukan ramalan promosi.'));
      dims.forEach(function (d) {
        r.appendChild(el('p', 'rp-sub', '<b>' + T(d.label.en, d.label.id) + '</b> — ' + d.v.toFixed(1) + '/5'));
        var bar = el('div', 'rp-bar');
        bar.appendChild(el('i')).style.width = (d.v / 5 * 100) + '%';
        r.appendChild(bar);
      });
      var weak = dims.slice().sort(function (a, b) { return a.v - b.v; })[0];
      var mn = MOD_NAME[weak.mod];
      r.appendChild(el('p', 'rp-note', '→ ' + T('Weakest dimension: ' + weak.label.en + '. Module ' + weak.mod + ' — ' + mn.en + ' — trains it directly; build your next 90-day plan around it.',
        'Dimensi terlemah: ' + weak.label.id + '. Modul ' + weak.mod + ' — ' + mn.id + ' — melatihnya langsung; susun rencana 90 harimu di sekitarnya.')));
      var row = el('div', 'rp-row');
      var snap = el('button', 'rp-btn', T('Save this reading →', 'Simpan pembacaan ini →'));
      snap.addEventListener('click', function () {
        var s2 = store();
        s2.diag.history = s2.diag.history || [];
        s2.diag.history.push({ date: Date.now(), dims: dims.map(function (d) { return { id: d.id, v: d.v }; }) });
        save(s2); render();
      });
      var toPlan = el('button', 'rp-btn ghost', T('Build the plan', 'Susun rencananya'));
      toPlan.addEventListener('click', function () { tab = 'plan'; render(); });
      row.appendChild(snap); row.appendChild(toPlan);
      r.appendChild(row);

      var hist = (s.diag.history || []);
      if (hist.length) {
        var h = card(w, T('History — your deltas', 'Riwayat — selisihmu'), null, null);
        hist.slice(-5).reverse().forEach(function (rec) {
          var avg = rec.dims.reduce(function (a, d) { return a + d.v; }, 0) / rec.dims.length;
          h.appendChild(el('p', 'rp-sub', new Date(rec.date).toLocaleDateString() + ' — ' + T('average', 'rata-rata') + ' ' + avg.toFixed(1) + '/5'));
        });
        h.appendChild(el('p', 'rp-note', T('Re-run quarterly. The delta between readings is what the course and your plans actually built.',
          'Jalankan ulang kuartalan. Selisih antar-pembacaan adalah yang sungguh dibangun kursus dan rencanamu.')));
      }
    } else {
      c.appendChild(el('p', 'rp-note', answered + ' / ' + total + ' ' + T('rated — complete all to see your reading.', 'ternilai — lengkapi semua untuk melihat pembacaanmu.')));
    }
  }

  /* ─── 90-day plan ─── */
  function planView(w) {
    var s = store();
    s.plan = s.plan || { goal: '', phases: ['', '', ''], started: null };
    var c = card(w, T('Instrument 2 · The 90-day plan', 'Instrumen 2 · Rencana 90 hari'),
      T('One goal, three deliberate phases', 'Satu tujuan, tiga fase yang disengaja'),
      T('From Lesson 1.3: milestones need artefacts, dates and witnesses. Everything autosaves to this browser as you type.',
        'Dari Pelajaran 1.3: tonggak butuh artefak, tanggal, dan saksi. Semua tersimpan otomatis di peramban ini saat kamu mengetik.'));
    var saved = el('span', 'rp-saved', '✓ ' + T('Saved', 'Tersimpan'));
    function autosave(fn) {
      if (saveTimer) clearTimeout(saveTimer);
      saveTimer = setTimeout(function () {
        fn();
        saved.classList.add('on');
        setTimeout(function () { saved.classList.remove('on'); }, 1200);
      }, 500);
    }
    var fg = el('div', 'rp-field');
    fg.appendChild(el('label', null, T('The goal — one verifiable outcome, 90 days out', 'Tujuan — satu hasil terverifikasi, 90 hari dari sekarang')));
    var goal = document.createElement('textarea');
    goal.value = s.plan.goal || '';
    goal.placeholder = T('e.g. Own the monthly reporting end-to-end, presented to the department head, with the runbook adopted by the team.',
                         'mis. Memiliki pelaporan bulanan ujung-ke-ujung, dipresentasikan ke kepala departemen, dengan runbook diadopsi tim.');
    goal.addEventListener('input', function () {
      autosave(function () { var s2 = store(); s2.plan = s2.plan || { phases: ['', '', ''] }; s2.plan.goal = goal.value; if (!s2.plan.started) s2.plan.started = Date.now(); save(s2); });
    });
    fg.appendChild(goal);
    c.appendChild(fg);
    PHASES.forEach(function (p, i) {
      var f = el('div', 'rp-field');
      f.appendChild(el('label', null, T(p.en, p.id)));
      var ta = document.createElement('textarea');
      ta.value = (s.plan.phases || ['', '', ''])[i] || '';
      ta.placeholder = [
        T('Learn the terrain, install the systems, first small deliverable…', 'Pelajari medan, pasang sistem, hasil kecil pertama…'),
        T('The visible delivery, the checkpoint conversations, the artefact…', 'Pengiriman terlihat, percakapan titik periksa, artefaknya…'),
        T('Finish, document, present — and book the review of this plan…', 'Tuntaskan, dokumentasikan, presentasikan — dan jadwalkan tinjauan rencana ini…')][i];
      ta.addEventListener('input', function () {
        autosave(function () { var s2 = store(); s2.plan = s2.plan || { phases: ['', '', ''] }; s2.plan.phases = s2.plan.phases || ['', '', '']; s2.plan.phases[i] = ta.value; save(s2); });
      });
      f.appendChild(ta);
      c.appendChild(f);
    });
    var row = el('div', 'rp-row');
    row.appendChild(saved);
    if (s.plan.started) {
      var days = Math.floor((Date.now() - s.plan.started) / 86400000);
      var phase = days < 30 ? 0 : days < 60 ? 1 : days < 90 ? 2 : 3;
      row.appendChild(el('span', 'rp-tag', phase > 2
        ? T('Day ' + days + ' — review time', 'Hari ' + days + ' — waktunya tinjauan')
        : T('Day ' + days + ' · ' + PHASES[phase].en.split('·')[1].trim(), 'Hari ' + days + ' · ' + PHASES[phase].id.split('·')[1].trim())));
      var reset = el('button', 'rp-btn ghost', T('Complete & start fresh', 'Selesaikan & mulai baru'));
      reset.addEventListener('click', function () {
        var s2 = store();
        s2.planArchive = s2.planArchive || [];
        s2.planArchive.push({ plan: s2.plan, closed: Date.now() });
        s2.plan = { goal: '', phases: ['', '', ''], started: null };
        save(s2); render();
      });
      row.appendChild(reset);
    }
    c.appendChild(row);
    if ((s.planArchive || []).length) {
      c.appendChild(el('p', 'rp-note', T((s.planArchive.length) + ' completed plan(s) archived in this browser.',
        s.planArchive.length + ' rencana selesai terarsip di peramban ini.')));
    }
  }

  /* ─── win log ─── */
  function winsView(w) {
    var s = store();
    s.wins = s.wins || [];
    var c = card(w, T('Instrument 3 · The win log', 'Instrumen 3 · Catatan kemenangan'),
      T('Evidence, captured while it is fresh', 'Bukti, ditangkap selagi segar'),
      T('The Friday habit from Lesson 1.1: what did this week add that you keep? One entry — what you delivered, its number, who can verify.',
        'Kebiasaan Jumat dari Pelajaran 1.1: apa yang ditambahkan minggu ini yang tetap kamu miliki? Satu entri — apa yang kamu tunaikan, angkanya, siapa yang bisa memverifikasi.'));
    var f1 = el('div', 'rp-field');
    f1.appendChild(el('label', null, T('The win', 'Kemenangannya')));
    var wt = document.createElement('input'); wt.type = 'text';
    wt.placeholder = T('e.g. Shipped the vendor-comparison analysis', 'mis. Merilis analisis perbandingan vendor');
    f1.appendChild(wt);
    var f2 = el('div', 'rp-field');
    f2.appendChild(el('label', null, T('Number & witness', 'Angka & saksi')));
    var wn = document.createElement('input'); wn.type = 'text';
    wn.placeholder = T('e.g. cited in the Q3 decision · Bu Rina can verify', 'mis. dikutip di keputusan Q3 · Bu Rina bisa memverifikasi');
    f2.appendChild(wn);
    c.appendChild(f1); c.appendChild(f2);
    var row = el('div', 'rp-row');
    var add = el('button', 'rp-btn', T('Log it →', 'Catat →'));
    add.addEventListener('click', function () {
      if (!wt.value.trim()) { wt.focus(); return; }
      var s2 = store(); s2.wins = s2.wins || [];
      s2.wins.push({ id: Date.now(), text: wt.value.trim(), meta: wn.value.trim(), date: Date.now() });
      save(s2); render();
    });
    row.appendChild(add);
    c.appendChild(row);

    if (s.wins.length) {
      var lc = card(w, s.wins.length + ' ' + T('entries — your promotion file in raw form', 'entri — berkas promosimu dalam bentuk mentah'), null, null);
      s.wins.slice().reverse().forEach(function (win) {
        var r = el('div', 'rp-win');
        var del = el('button', 'rp-del', '✕');
        del.setAttribute('aria-label', 'Remove');
        del.addEventListener('click', function () {
          var s2 = store();
          s2.wins = (s2.wins || []).filter(function (x) { return x.id !== win.id; });
          save(s2); render();
        });
        r.appendChild(del);
        r.appendChild(el('b', null, esc(win.text)));
        r.appendChild(el('div', 'sm', (win.meta ? esc(win.meta) + ' · ' : '') + new Date(win.date).toLocaleDateString()));
        lc.appendChild(r);
      });
      lc.appendChild(el('p', 'rp-note', T('Stored only in this browser. Twice a year, harvest into your CV and promotion one-pager (Lesson 5.2).',
        'Tersimpan hanya di peramban ini. Dua kali setahun, panen ke CV dan satu halaman promosimu (Pelajaran 5.2).')));
    }
  }

  function render() {
    tabsEl.querySelectorAll('.rp-tab').forEach(function (b) {
      b.classList.toggle('on', b.dataset.tab === tab);
    });
    body.innerHTML = '';
    body.scrollTop = 0;
    var w = el('div', 'rp-in');
    body.appendChild(w);
    if (tab === 'readiness') readinessView(w);
    else if (tab === 'plan') planView(w);
    else winsView(w);
  }

  function open(mode) {
    build();
    if (mode === 'readiness' || mode === 'plan' || mode === 'wins') tab = mode;
    root.classList.add('open');
    document.body.classList.add('lms-lock');
    render();
  }
  function close() {
    if (root) root.classList.remove('open');
    document.body.classList.remove('lms-lock');
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
        if (root && root.classList.contains('open')) render();
      }, 60);
    });
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', syncPromo);
  else syncPromo();

  window.MT_ROUTE_PLAN = { open: open, sync: syncPromo };
})();
