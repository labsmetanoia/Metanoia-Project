/**
 * THE PACK — THE SCREENING GYM
 * ----------------------------
 * Three stations in one workspace, matching the funnel stages the
 * course trains:
 *   drill   — timed/untimed aptitude sets from data/pack/aptitude.js,
 *             scored transparently with worked explanations per miss.
 *   ats     — CV vs job-description readiness check, computed entirely
 *             on-device (rule-based keyword coverage + section signals;
 *             the UI says exactly what it is and is not).
 *   tracker — application pipeline with stage funnel metrics.
 *
 * Honesty contract: no hidden scoring models, no fabricated percentages.
 * Drill scores calibrate against this bank only; the ATS check is a
 * transparent lint, not a prediction of any employer's system.
 * Storage: localStorage 'mt_pack_gym' (attempts), 'mt_pack_apps' (tracker).
 */
(function () {
  'use strict';
  var BANK = window.MT_PACK_APT;
  if (!BANK) return;

  var LSA = 'mt_pack_gym', LSP = 'mt_pack_apps';
  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function T(en, id) { return lang() === 'id' ? id : en; }
  function B(pair) { return pair ? (pair[lang()] || pair.en) : ''; }
  function load(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  var FAMS = {
    num: { label: { en: 'Numerical', id: 'Numerik' }, n: 10, mins: 10 },
    verb: { label: { en: 'Verbal', id: 'Verbal' }, n: 8, mins: 8 },
    log: { label: { en: 'Logical', id: 'Logis' }, n: 10, mins: 8 }
  };
  var STAGES = [
    ['applied', { en: 'Applied', id: 'Dilamar' }],
    ['screen', { en: 'Screen passed', id: 'Lolos saringan' }],
    ['test', { en: 'Test passed', id: 'Lolos tes' }],
    ['interview', { en: 'Interviewing', id: 'Wawancara' }],
    ['offer', { en: 'Offer', id: 'Tawaran' }],
    ['rejected', { en: 'Rejected', id: 'Ditolak' }]
  ];
  var TIERS = [
    ['reach', { en: 'Reach', id: 'Jangkauan' }],
    ['match', { en: 'Match', id: 'Sepadan' }],
    ['foundation', { en: 'Foundation', id: 'Fondasi' }]
  ];

  function bankStats() {
    var g = load(LSA) || { attempts: [] };
    return { questions: BANK.questions.length, sets: Object.keys(FAMS).length * 2, attempts: (g.attempts || []).length };
  }

  /* ─── styles ─── */
  var css = '' +
  '#packGym{position:fixed;inset:0;z-index:1250;display:none;background:var(--bg-base,#050A12);overflow:hidden}' +
  '#packGym.open{display:flex;flex-direction:column}' +
  '#packGym .pg-bg{position:absolute;inset:0;z-index:0;pointer-events:none;background:url("../../assets/bg/pack.jpg") center 34%/cover no-repeat;opacity:.16}' +
  '#packGym .pg-veil{position:absolute;inset:0;z-index:0;pointer-events:none;background:linear-gradient(180deg,rgba(5,10,18,.62),rgba(5,10,18,.9) 45%,rgba(5,10,18,.96))}' +
  ':root[data-theme="light"] #packGym .pg-bg{opacity:.1}' +
  ':root[data-theme="light"] #packGym .pg-veil{background:linear-gradient(180deg,rgba(238,241,246,.85),rgba(238,241,246,.96) 45%)}' +
  '#packGym .pg-top{position:relative;z-index:1;display:flex;align-items:center;gap:12px;padding:11px 22px;flex-wrap:wrap;border-bottom:1px solid var(--gold-border);background:var(--glass-bg);backdrop-filter:var(--glass-blur)}' +
  '#packGym .pg-top b{font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold)}' +
  '#packGym .pg-tabs{display:flex;gap:4px}' +
  '#packGym .pg-tab{border:1px solid transparent;background:none;color:var(--text-muted);border-radius:999px;padding:7px 15px;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;font-family:inherit}' +
  '#packGym .pg-tab.on{color:var(--gold-bright);border-color:var(--gold-border-hover);background:rgba(201,168,76,.1)}' +
  '#packGym .pg-close{margin-left:auto;width:36px;height:36px;border-radius:999px;border:1px solid var(--gold-border);background:none;color:var(--text);cursor:pointer;font-size:15px;flex:none}' +
  '#packGym .pg-close:hover{border-color:var(--gold)}' +
  '#packGym .pg-body{position:relative;z-index:1;flex:1;overflow-y:auto;padding:26px 22px 70px}' +
  '#packGym .pg-in{max-width:880px;margin:0 auto;animation:pgEnter .4s cubic-bezier(.22,1,.36,1)}' +
  '@keyframes pgEnter{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}' +
  '@media(prefers-reduced-motion:reduce){#packGym .pg-in{animation:none}}' +
  '#packGym .pg-card{border:1px solid var(--gold-border);border-radius:16px;background:var(--glass-bg);backdrop-filter:var(--glass-blur);padding:22px 24px;margin-bottom:14px}' +
  '#packGym .pg-kick{font-size:11px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:6px}' +
  '#packGym h2{font-size:1.35rem;margin:0 0 8px;color:var(--text)}' +
  '#packGym .pg-sub{font-size:13.5px;color:var(--text-sub);line-height:1.7;margin:0 0 12px}' +
  '#packGym .pg-note{font-size:12px;color:var(--text-faint);line-height:1.55;margin-top:10px}' +
  '#packGym .pg-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}' +
  '#packGym .pg-fam{border:1px solid var(--gold-border);border-radius:14px;padding:16px 18px;background:var(--bg-mid)}' +
  '#packGym .pg-fam b{display:block;font-size:15px;color:var(--text);margin-bottom:4px}' +
  '#packGym .pg-fam span{font-size:12px;color:var(--text-muted)}' +
  '#packGym .pg-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px;align-items:center}' +
  '#packGym .pg-btn{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;border-radius:999px;border:0;cursor:pointer;font-family:inherit;font-weight:800;font-size:13px;background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);color:#10131B}' +
  '#packGym .pg-btn.ghost{background:none;border:1px solid var(--gold-border);color:var(--gold)}' +
  '#packGym .pg-btn:disabled{opacity:.45;cursor:not-allowed}' +
  '#packGym .pg-meta{display:flex;gap:14px;flex-wrap:wrap;align-items:center;font-size:12.5px;color:var(--text-muted);margin-bottom:14px}' +
  '#packGym .pg-timer{font-variant-numeric:tabular-nums;font-weight:800;color:var(--gold-bright);font-size:14px}' +
  '#packGym .pg-timer.low{color:#EF6F5E}' +
  '#packGym .pg-q{font-size:15.5px;color:var(--text);line-height:1.7;margin:0 0 8px}' +
  '#packGym .pg-pass{font-size:13px;color:var(--text-sub);line-height:1.75;border-left:3px solid var(--gold-border);padding:4px 0 4px 14px;margin:0 0 14px;background:var(--bg-mid);border-radius:0 10px 10px 0;padding:12px 14px}' +
  '#packGym .pg-opt{display:block;width:100%;text-align:left;box-sizing:border-box;margin:8px 0;padding:12px 15px;border-radius:11px;border:1px solid var(--gold-border);background:var(--bg-mid);color:var(--text-sub);font-family:inherit;font-size:13.5px;line-height:1.5;cursor:pointer}' +
  '#packGym .pg-opt:hover{border-color:var(--gold-border-hover)}' +
  '#packGym .pg-opt.sel{border-color:var(--gold);color:var(--text);background:rgba(201,168,76,.1)}' +
  '#packGym .pg-opt.correct{border-color:rgba(74,222,128,.65);background:rgba(74,222,128,.1);color:var(--text)}' +
  '#packGym .pg-opt.wrong{border-color:rgba(239,111,94,.6);background:rgba(239,111,94,.08)}' +
  '#packGym .pg-expl{font-size:13px;color:var(--text-sub);line-height:1.7;border:1px solid rgba(74,222,128,.35);border-radius:11px;padding:12px 15px;margin-top:10px;background:rgba(74,222,128,.05)}' +
  '#packGym .pg-bar{height:7px;border-radius:999px;background:rgba(201,168,76,.14);overflow:hidden;margin:4px 0 14px}' +
  '#packGym .pg-bar i{display:block;height:100%;background:linear-gradient(90deg,#8B6914,#C9A84C,#F0D878)}' +
  '#packGym .pg-score{display:flex;gap:24px;flex-wrap:wrap;margin:6px 0 10px}' +
  '#packGym .pg-score b{display:block;font-size:1.5rem;color:var(--gold-bright)}' +
  '#packGym .pg-score span{font-size:12px;color:var(--text-muted)}' +
  '#packGym .pg-rev{border-top:1px solid rgba(201,168,76,.14);padding:12px 0}' +
  '#packGym .pg-rev .vq{font-size:13.5px;color:var(--text);margin:0 0 6px}' +
  '#packGym .pg-rev .va{font-size:12.5px;margin:2px 0}' +
  '#packGym .pg-rev .ok{color:#4ADE80}' +
  '#packGym .pg-rev .bad{color:#EF6F5E}' +
  '#packGym .pg-field{margin-bottom:12px}' +
  '#packGym .pg-field label{display:block;font-size:12px;font-weight:700;color:var(--text-muted);margin-bottom:6px}' +
  '#packGym textarea,#packGym input[type=text],#packGym select{width:100%;box-sizing:border-box;background:var(--bg-mid);border:1px solid var(--gold-border);border-radius:10px;color:var(--text);font-family:inherit;font-size:13px;line-height:1.6;padding:10px 12px}' +
  '#packGym textarea{min-height:130px;resize:vertical}' +
  '#packGym textarea:focus,#packGym input:focus,#packGym select:focus{outline:none;border-color:var(--gold)}' +
  '#packGym .pg-two{display:grid;grid-template-columns:1fr 1fr;gap:14px}' +
  '@media(max-width:700px){#packGym .pg-two{grid-template-columns:1fr}}' +
  '#packGym .pg-chip{display:inline-block;font-size:12px;border:1px solid var(--gold-border);border-radius:999px;padding:4px 11px;margin:3px 4px 3px 0;color:var(--text-sub)}' +
  '#packGym .pg-chip.hit{border-color:rgba(74,222,128,.5);color:#4ADE80}' +
  '#packGym .pg-chip.miss{border-color:rgba(239,111,94,.5);color:#EF6F5E}' +
  '#packGym .pg-app{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px 12px;align-items:center;padding:11px 0;border-bottom:1px solid rgba(201,168,76,.12)}' +
  '#packGym .pg-app b{font-size:13.5px;color:var(--text)}' +
  '#packGym .pg-app .sm{font-size:12px;color:var(--text-muted)}' +
  '#packGym .pg-app select{width:auto;font-size:12px;padding:6px 10px}' +
  '#packGym .pg-del{border:none;background:none;color:var(--text-faint);cursor:pointer;font-size:13px;padding:4px}' +
  '#packGym .pg-del:hover{color:#EF6F5E}';

  var root = null, body = null, tabsEl = null, tab = 'drill';
  var run = null; /* active drill run */

  function build() {
    if (root) return;
    var st = document.createElement('style');
    st.id = 'packGymCss'; st.textContent = css;
    document.head.appendChild(st);
    root = el('div'); root.id = 'packGym';
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-label', 'Screening Gym');
    root.appendChild(el('div', 'pg-bg'));
    root.appendChild(el('div', 'pg-veil'));
    var top = el('div', 'pg-top');
    top.appendChild(el('b', null, T('The Pack · Screening Gym', 'The Pack · Gym Penyaringan')));
    tabsEl = el('div', 'pg-tabs');
    [['drill', 'Drills', 'Latihan'], ['ats', 'ATS Check', 'Cek ATS'], ['tracker', 'Tracker', 'Pelacak']].forEach(function (t) {
      var b = el('button', 'pg-tab', T(t[1], t[2]));
      b.dataset.tab = t[0];
      b.addEventListener('click', function () { if (run && run.timer) return; tab = t[0]; render(); });
      tabsEl.appendChild(b);
    });
    top.appendChild(tabsEl);
    var x = el('button', 'pg-close', '✕');
    x.setAttribute('aria-label', 'Close');
    x.addEventListener('click', close);
    top.appendChild(x);
    body = el('div', 'pg-body');
    root.appendChild(top); root.appendChild(body);
    document.body.appendChild(root);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('open')) close();
    });
  }

  function card(w, kick, title, sub) {
    var c = el('div', 'pg-card');
    if (kick) c.appendChild(el('div', 'pg-kick', kick));
    if (title) c.appendChild(el('h2', null, title));
    if (sub) c.appendChild(el('p', 'pg-sub', sub));
    w.appendChild(c);
    return c;
  }

  /* ─── DRILLS ─── */
  function shuffled(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function drillHome(w) {
    var g = load(LSA) || { attempts: [] };
    var c = card(w, T('Station 1 · Aptitude drills', 'Stasiun 1 · Latihan bakat'),
      T('Accuracy first, then speed', 'Akurasi dulu, lalu kecepatan'),
      T('Untimed sets train technique with instant explanations; timed sets simulate exam pressure and score accuracy, completion and pace. Scores calibrate against this bank — they diagnose, they do not predict any employer’s cutoff.',
        'Set tanpa waktu melatih teknik dengan pembahasan instan; set berwaktu mensimulasikan tekanan ujian dan menskor akurasi, penyelesaian, dan tempo. Skor terkalibrasi terhadap bank ini — mendiagnosis, bukan meramalkan ambang pemberi kerja mana pun.'));
    var grid = el('div', 'pg-grid');
    Object.keys(FAMS).forEach(function (f) {
      var fam = FAMS[f];
      var qn = BANK.questions.filter(function (q) { return q.fam === f; }).length;
      var box = el('div', 'pg-fam');
      box.appendChild(el('b', null, B(fam.label)));
      box.appendChild(el('span', null, qn + ' ' + T('questions in bank', 'soal di bank') + ' · ' + fam.n + ' ' + T('per set', 'per set') + (fam.mins ? ' · ' + fam.mins + ' ' + T('min timed', 'mnt berwaktu') : '')));
      var row = el('div', 'pg-row');
      var u = el('button', 'pg-btn ghost', T('Untimed', 'Tanpa waktu'));
      u.addEventListener('click', function () { startDrill(f, false); });
      var t = el('button', 'pg-btn', T('Timed set →', 'Set berwaktu →'));
      t.addEventListener('click', function () { startDrill(f, true); });
      row.appendChild(u); row.appendChild(t);
      box.appendChild(row);
      grid.appendChild(box);
    });
    c.appendChild(grid);

    var at = (g.attempts || []).slice(-6).reverse();
    if (at.length) {
      var c2 = card(w, T('Recent attempts', 'Percobaan terakhir'), null, null);
      at.forEach(function (a) {
        var famL = FAMS[a.fam] ? B(FAMS[a.fam].label) : a.fam;
        c2.appendChild(el('p', 'pg-sub', famL + ' · ' + (a.timed ? T('timed', 'berwaktu') : T('untimed', 'tanpa waktu')) + ' — ' +
          a.score + '/' + a.total + ' (' + Math.round(a.score / a.total * 100) + '%) · ' +
          Math.round(a.secs / a.total) + T('s/question', ' dtk/soal') + ' · ' + new Date(a.date).toLocaleDateString()));
      });
      c2.appendChild(el('p', 'pg-note', T('Read the grid, not the number: high accuracy + low completion → train pacing; the reverse → return to untimed accuracy work.',
        'Baca kisinya, bukan angkanya: akurasi tinggi + penyelesaian rendah → latih tempo; kebalikannya → kembali ke kerja akurasi tanpa waktu.')));
    }
  }

  function startDrill(fam, timed) {
    var pool = shuffled(BANK.questions.filter(function (q) { return q.fam === fam; })).slice(0, FAMS[fam].n);
    run = {
      fam: fam, timed: timed, qs: pool, i: 0,
      answers: {}, order: {}, started: Date.now(),
      left: timed ? FAMS[fam].mins * 60 : null, timer: null
    };
    pool.forEach(function (q, idx) {
      var order = shuffled(q.opts.map(function (_, k) { return k; }));
      run.order[idx] = order;
    });
    if (timed) {
      run.timer = setInterval(function () {
        run.left--;
        var tn = body.querySelector('.pg-timer');
        if (tn) {
          tn.textContent = fmtClock(run.left);
          if (run.left <= 60) tn.classList.add('low');
        }
        if (run.left <= 0) finishDrill();
      }, 1000);
    }
    renderQuestion();
  }
  function fmtClock(s) {
    var m = Math.floor(s / 60), r = s % 60;
    return m + ':' + (r < 10 ? '0' : '') + r;
  }

  function renderQuestion() {
    body.innerHTML = '';
    body.scrollTop = 0;
    var w = el('div', 'pg-in');
    body.appendChild(w);
    var q = run.qs[run.i];
    var c = el('div', 'pg-card');
    var meta = el('div', 'pg-meta');
    meta.appendChild(el('span', null, B(FAMS[run.fam].label) + ' · ' + T('Question', 'Soal') + ' ' + (run.i + 1) + ' / ' + run.qs.length));
    if (run.timed) meta.appendChild(el('span', 'pg-timer' + (run.left <= 60 ? ' low' : ''), fmtClock(run.left)));
    else meta.appendChild(el('span', null, T('Untimed — explanations shown after each answer', 'Tanpa waktu — pembahasan tampil setelah tiap jawaban')));
    c.appendChild(meta);
    var bar = el('div', 'pg-bar');
    bar.appendChild(el('i')).style.width = (run.i / run.qs.length * 100) + '%';
    c.appendChild(bar);
    if (q.passage && BANK.passages[q.passage]) c.appendChild(el('div', 'pg-pass', esc(B(BANK.passages[q.passage]))));
    c.appendChild(el('p', 'pg-q', esc(B(q.q))));
    var order = run.order[run.i];
    var answered = run.answers[run.i] !== undefined;
    order.forEach(function (origIdx) {
      var b = el('button', 'pg-opt', esc(B(q.opts[origIdx])));
      if (answered) {
        b.disabled = true;
        if (origIdx === q.correct) b.classList.add('correct');
        else if (origIdx === run.answers[run.i]) b.classList.add('wrong');
      }
      b.addEventListener('click', function () {
        if (run.answers[run.i] !== undefined) return;
        run.answers[run.i] = origIdx;
        if (run.timed) next();
        else renderQuestion();
      });
      c.appendChild(b);
    });
    if (answered && !run.timed) {
      c.appendChild(el('div', 'pg-expl', '<b>' + (run.answers[run.i] === q.correct ? '✓ ' + T('Correct.', 'Benar.') : '✗ ' + T('Not quite.', 'Belum tepat.')) + '</b> ' + esc(B(q.expl))));
    }
    var row = el('div', 'pg-row');
    if (!run.timed || answered) {
      if (run.i < run.qs.length - 1 && answered) {
        var nx = el('button', 'pg-btn', T('Next →', 'Berikutnya →'));
        nx.addEventListener('click', next);
        row.appendChild(nx);
      } else if (answered) {
        var fin = el('button', 'pg-btn', T('Finish set →', 'Selesaikan set →'));
        fin.addEventListener('click', finishDrill);
        row.appendChild(fin);
      }
    }
    if (run.timed && !answered) {
      var sk = el('button', 'pg-btn ghost', T('Skip', 'Lewati'));
      sk.addEventListener('click', next);
      row.appendChild(sk);
    }
    var quit = el('button', 'pg-btn ghost', T('End set', 'Akhiri set'));
    quit.addEventListener('click', finishDrill);
    row.appendChild(quit);
    c.appendChild(row);
    w.appendChild(c);
  }
  function next() {
    if (run.i < run.qs.length - 1) { run.i++; renderQuestion(); }
    else finishDrill();
  }

  function finishDrill() {
    if (!run) return;
    if (run.timer) { clearInterval(run.timer); run.timer = null; }
    var secs = Math.round((Date.now() - run.started) / 1000);
    var score = 0, attempted = 0;
    run.qs.forEach(function (q, i) {
      if (run.answers[i] !== undefined) {
        attempted++;
        if (run.answers[i] === q.correct) score++;
      }
    });
    var g = load(LSA) || { attempts: [] };
    g.attempts = g.attempts || [];
    g.attempts.push({ fam: run.fam, timed: run.timed, score: score, total: run.qs.length, attempted: attempted, secs: secs, date: Date.now() });
    save(LSA, g);
    syncPromo();

    body.innerHTML = '';
    body.scrollTop = 0;
    var w = el('div', 'pg-in');
    body.appendChild(w);
    var acc = attempted ? Math.round(score / attempted * 100) : 0;
    var comp = Math.round(attempted / run.qs.length * 100);
    var c = card(w, T('Set complete', 'Set selesai'), B(FAMS[run.fam].label) + ' · ' + (run.timed ? T('timed', 'berwaktu') : T('untimed', 'tanpa waktu')), null);
    var sc = el('div', 'pg-score');
    [[score + '/' + run.qs.length, T('correct', 'benar')],
     [acc + '%', T('accuracy (of attempted)', 'akurasi (dari yang dicoba)')],
     [comp + '%', T('completion', 'penyelesaian')],
     [(attempted ? Math.round(secs / attempted) : 0) + 's', T('per question', 'per soal')]].forEach(function (x) {
      var sp = el('span');
      sp.appendChild(el('b', null, x[0]));
      sp.appendChild(el('span', null, x[1]));
      sc.appendChild(sp);
    });
    c.appendChild(sc);
    var verdict =
      acc >= 80 && comp >= 70 ? T('Strong grid position. Maintain twice weekly and move training hours to your funnel’s next leaking stage.', 'Posisi kisi kuat. Pertahankan dua kali seminggu dan pindahkan jam latihan ke tahap corong bocor berikutnya.')
      : acc >= 80 ? T('Careful but slow — your method is sound. Train timed pacing with the triage rule: no question gets double budget.', 'Teliti tapi lambat — metodemu benar. Latih tempo berwaktu dengan aturan triase: tak ada soal mendapat anggaran ganda.')
      : comp >= 70 ? T('Fast but loose — speed is laundering errors. Return to untimed sets until accuracy stabilises above 80%.', 'Cepat tapi longgar — kecepatan mencuci kesalahan. Kembali ke set tanpa waktu sampai akurasi stabil di atas 80%.')
      : T('Technique gap — revisit Lesson 3.3’s frameworks for this family, then drill untimed.', 'Celah teknik — kunjungi lagi kerangka Pelajaran 3.3 untuk keluarga ini, lalu latih tanpa waktu.');
    c.appendChild(el('p', 'pg-sub', verdict));
    c.appendChild(el('p', 'pg-note', T('Log every miss: question type, your wrong move, the principle, a one-line rule for next time.', 'Catat tiap kesalahan: jenis soal, langkah salahmu, prinsipnya, aturan satu baris untuk lain kali.')));

    var rev = card(w, T('Review — every question, every explanation', 'Tinjauan — tiap soal, tiap pembahasan'), null, null);
    run.qs.forEach(function (q, i) {
      var r = el('div', 'pg-rev');
      r.appendChild(el('p', 'vq', (i + 1) + '. ' + esc(B(q.q))));
      var ans = run.answers[i];
      if (ans === undefined) r.appendChild(el('p', 'va bad', '— ' + T('not attempted', 'tidak dicoba')));
      else if (ans === q.correct) r.appendChild(el('p', 'va ok', '✓ ' + esc(B(q.opts[ans]))));
      else {
        r.appendChild(el('p', 'va bad', '✗ ' + T('Your answer: ', 'Jawabanmu: ') + esc(B(q.opts[ans]))));
        r.appendChild(el('p', 'va ok', '✓ ' + T('Correct: ', 'Benar: ') + esc(B(q.opts[q.correct]))));
      }
      r.appendChild(el('p', 'va', esc(B(q.expl))));
      rev.appendChild(r);
    });
    var row = el('div', 'pg-row');
    var again = el('button', 'pg-btn', T('Another set →', 'Set lain →'));
    again.addEventListener('click', function () { run = null; render(); });
    row.appendChild(again);
    rev.appendChild(row);
    run = null;
  }

  /* ─── ATS CHECK ─── */
  var STOP = {};
  ('the a an and or of to in for with on at by from as is are was be this that it its your our their his her ' +
   'you we they i not no will can may all any each other more most such than then so if but do does did done ' +
   'have has had who whom whose which what when where how into over under out up down about after before between ' +
   'dan atau yang di ke dari untuk dengan pada oleh adalah akan bisa dapat tidak ini itu para kami kita mereka ' +
   'anda saya juga serta agar dalam atas bawah antara sebagai telah sudah belum harus lebih paling sangat ' +
   'ability experience experiences work working strong good excellent skills skill team candidates candidate role ' +
   'job description requirements responsibilities preferred required minimum years year required').split(/\s+/).forEach(function (s) { STOP[s] = 1; });

  function tokens(text) {
    return String(text).toLowerCase().replace(/[^a-z0-9+#./\s-]/g, ' ').split(/\s+/).filter(function (t) {
      return t.length > 2 && !STOP[t] && !/^\d+$/.test(t);
    });
  }
  function topTerms(jd) {
    var toks = tokens(jd), freq = {};
    toks.forEach(function (t) { freq[t] = (freq[t] || 0) + 1; });
    /* bigrams for phrases like "stakeholder management" */
    for (var i = 0; i < toks.length - 1; i++) {
      var bg = toks[i] + ' ' + toks[i + 1];
      freq[bg] = (freq[bg] || 0) + 1.2;
    }
    return Object.keys(freq)
      .filter(function (t) { return freq[t] >= (t.indexOf(' ') > -1 ? 2.4 : 2); })
      .sort(function (a, b) { return freq[b] - freq[a]; })
      .slice(0, 18);
  }

  function atsView(w) {
    var c = card(w, T('Station 2 · ATS readiness check', 'Stasiun 2 · Cek kesiapan ATS'),
      T('Your CV, read the way a machine reads it', 'CV-mu, dibaca seperti mesin membacanya'),
      T('Paste or upload your CV, paste a real job description, and get a transparent, rule-based read: keyword coverage, section signals, red flags. Everything runs on this device; nothing is uploaded anywhere.',
        'Tempel atau unggah CV-mu, tempel deskripsi kerja nyata, dan dapatkan pembacaan transparan berbasis aturan: cakupan kata kunci, sinyal bagian, tanda bahaya. Semua berjalan di perangkat ini; tak ada yang diunggah ke mana pun.'));
    var two = el('div', 'pg-two');
    var f1 = el('div', 'pg-field');
    f1.appendChild(el('label', null, T('Your CV text', 'Teks CV-mu')));
    var cvTa = document.createElement('textarea');
    cvTa.placeholder = T('Paste your CV text here, or upload a file below.', 'Tempel teks CV di sini, atau unggah berkas di bawah.');
    cvTa.value = atsState.cv || '';
    f1.appendChild(cvTa);
    if (window.MT_RANGE_DOC) {
      var up = document.createElement('input');
      up.type = 'file'; up.accept = window.MT_RANGE_DOC.ACCEPT;
      up.style.cssText = 'margin-top:8px;font-size:12px;color:var(--text-muted)';
      var st = el('p', 'pg-note', '');
      up.addEventListener('change', function () {
        var f = up.files && up.files[0];
        if (!f) return;
        st.textContent = T('Reading on-device…', 'Membaca di perangkat…');
        window.MT_RANGE_DOC.extract(f).then(function (doc) {
          cvTa.value = doc.text;
          atsState.cv = doc.text;
          st.textContent = '✓ ' + f.name + ' · ' + doc.text.length + T(' characters extracted', ' karakter terekstrak');
        }).catch(function (err) {
          st.textContent = window.MT_RANGE_DOC.message(err && err.message, lang() === 'id');
        });
      });
      f1.appendChild(up); f1.appendChild(st);
    }
    var f2 = el('div', 'pg-field');
    f2.appendChild(el('label', null, T('The job description', 'Deskripsi kerjanya')));
    var jdTa = document.createElement('textarea');
    jdTa.placeholder = T('Paste the full JD, including requirements.', 'Tempel JD lengkap, termasuk persyaratan.');
    jdTa.value = atsState.jd || '';
    f2.appendChild(jdTa);
    two.appendChild(f1); two.appendChild(f2);
    c.appendChild(two);
    var row = el('div', 'pg-row');
    var go = el('button', 'pg-btn', T('Run the check →', 'Jalankan pemeriksaan →'));
    go.addEventListener('click', function () {
      atsState.cv = cvTa.value; atsState.jd = jdTa.value;
      atsState.done = !!(cvTa.value.trim() && jdTa.value.trim());
      render();
    });
    row.appendChild(go);
    c.appendChild(row);

    if (atsState.done) {
      var cv = atsState.cv, jd = atsState.jd;
      var terms = topTerms(jd);
      var cvLow = cv.toLowerCase();
      var hits = [], misses = [];
      terms.forEach(function (t) { (cvLow.indexOf(t) > -1 ? hits : misses).push(t); });
      var cov = terms.length ? Math.round(hits.length / terms.length * 100) : 0;

      var r = card(w, T('Result — transparent and rule-based', 'Hasil — transparan dan berbasis aturan'),
        cov + '% ' + T('load-bearing term coverage', 'cakupan istilah penopang'), null);
      var bar = el('div', 'pg-bar');
      bar.appendChild(el('i')).style.width = cov + '%';
      r.appendChild(bar);
      var hd = el('div');
      hd.appendChild(el('p', 'pg-sub', '<b>' + T('Found in your CV:', 'Ditemukan di CV-mu:') + '</b>'));
      hits.forEach(function (t) { hd.appendChild(el('span', 'pg-chip hit', '✓ ' + esc(t))); });
      if (!hits.length) hd.appendChild(el('span', 'pg-chip', T('none', 'tidak ada')));
      hd.appendChild(el('p', 'pg-sub', '<b style="display:block;margin-top:10px">' + T('Missing:', 'Hilang:') + '</b>'));
      misses.forEach(function (t) { hd.appendChild(el('span', 'pg-chip miss', '✗ ' + esc(t))); });
      if (!misses.length) hd.appendChild(el('span', 'pg-chip', T('none — strong mirroring', 'tidak ada — pencerminan kuat')));
      r.appendChild(hd);

      /* section & hygiene signals */
      var sig = [];
      var hasEmail = /[\w.+-]+@[\w-]+\.[a-z]{2,}/i.test(cv);
      var hasPhone = /(\+62|08)\d{7,}/.test(cv.replace(/[\s.-]/g, ''));
      var hasNums = (cv.match(/\d+%|\bRp\s?\d|\d{2,}/g) || []).length >= 5;
      var hasEdu = /education|pendidikan|university|universitas|institut/i.test(cv);
      var hasExp = /experience|pengalaman|internship|magang|project|proyek/i.test(cv);
      var lenOK = cv.length > 900 && cv.length < 9000;
      sig.push([hasEmail, T('Contact email present in body text', 'Email kontak ada di teks badan')]);
      sig.push([hasPhone, T('Phone number detected', 'Nomor telepon terdeteksi')]);
      sig.push([hasEdu, T('Education section recognisable', 'Bagian pendidikan terkenali')]);
      sig.push([hasExp, T('Experience / projects section recognisable', 'Bagian pengalaman / proyek terkenali')]);
      sig.push([hasNums, T('Quantified evidence (numbers) present', 'Bukti terkuantifikasi (angka) ada')]);
      sig.push([lenOK, T('Length in the one-page text range', 'Panjang dalam rentang teks satu halaman')]);
      var sc = card(w, T('Section & hygiene signals', 'Sinyal bagian & higiene'), null, null);
      sig.forEach(function (s) {
        sc.appendChild(el('p', 'pg-sub', (s[0] ? '<span style="color:#4ADE80">✓</span> ' : '<span style="color:#EF6F5E">✗</span> ') + s[1]));
      });
      sc.appendChild(el('p', 'pg-note', T('What this check is: a transparent lint of keyword coverage and parse-friendly signals, computed on your device against this JD. What it is not: a prediction of any specific employer’s ATS configuration or cutoff. Add missing terms only where your true experience supports them — interviews probe every keyword you claim.',
        'Pemeriksaan ini adalah: lint transparan cakupan kata kunci dan sinyal ramah-parse, dihitung di perangkatmu terhadap JD ini. Yang bukan: prediksi konfigurasi atau ambang ATS pemberi kerja tertentu. Tambahkan istilah hilang hanya bila pengalaman sejatimu mendukungnya — wawancara menggali tiap kata kunci yang kamu klaim.')));
    }
  }
  var atsState = { cv: '', jd: '', done: false };

  /* ─── TRACKER ─── */
  function trackerView(w) {
    var apps = load(LSP) || [];
    var c = card(w, T('Station 3 · Application pipeline', 'Stasiun 3 · Pipeline lamaran'),
      T('Your funnel, measured', 'Corongmu, terukur'),
      T('Track every application and its stage. The metrics locate your leaking stage — and therefore your next training priority.',
        'Lacak tiap lamaran dan tahapnya. Metrik menunjukkan tahap bocormu — dan karenanya prioritas latihan berikutmu.'));

    /* add form */
    var two = el('div', 'pg-two');
    var f1 = el('div', 'pg-field');
    f1.appendChild(el('label', null, T('Company · Role', 'Perusahaan · Peran')));
    var inp = document.createElement('input'); inp.type = 'text';
    inp.placeholder = T('e.g. PT Aruna — Data Analyst', 'mis. PT Aruna — Data Analyst');
    f1.appendChild(inp);
    var f2 = el('div', 'pg-field');
    f2.appendChild(el('label', null, T('Tier', 'Tingkat')));
    var tier = document.createElement('select');
    TIERS.forEach(function (t) {
      var o = document.createElement('option'); o.value = t[0]; o.textContent = B(t[1]);
      tier.appendChild(o);
    });
    tier.value = 'match';
    f2.appendChild(tier);
    two.appendChild(f1); two.appendChild(f2);
    c.appendChild(two);
    var row = el('div', 'pg-row');
    var add = el('button', 'pg-btn', T('Add application →', 'Tambah lamaran →'));
    add.addEventListener('click', function () {
      if (!inp.value.trim()) { inp.focus(); return; }
      apps.push({ id: Date.now(), name: inp.value.trim(), tier: tier.value, stage: 'applied', date: Date.now() });
      save(LSP, apps);
      render();
    });
    row.appendChild(add);
    c.appendChild(row);

    /* metrics */
    if (apps.length) {
      var n = apps.length;
      var past = function (stages) { return apps.filter(function (a) { return stages.indexOf(a.stage) > -1; }).length; };
      var screened = past(['screen', 'test', 'interview', 'offer']);
      var tested = past(['test', 'interview', 'offer']);
      var interviewed = past(['interview', 'offer']);
      var offers = past(['offer']);
      var m = card(w, T('Funnel metrics', 'Metrik corong'), null, null);
      var sc = el('div', 'pg-score');
      [[n, T('applications', 'lamaran')],
       [Math.round(screened / n * 100) + '%', T('screen rate', 'lolos saringan')],
       [screened ? Math.round(tested / screened * 100) + '%' : '—', T('screen → test', 'saringan → tes')],
       [tested ? Math.round(interviewed / tested * 100) + '%' : '—', T('test → interview', 'tes → wawancara')],
       [offers, T('offers', 'tawaran')]].forEach(function (x) {
        var sp = el('span');
        sp.appendChild(el('b', null, String(x[0])));
        sp.appendChild(el('span', null, x[1]));
        sc.appendChild(sp);
      });
      m.appendChild(sc);
      m.appendChild(el('p', 'pg-note', n < 10
        ? T('Small numbers wobble — read trends after ten applications, not after two.', 'Angka kecil bergoyang — baca tren setelah sepuluh lamaran, bukan setelah dua.')
        : T('Deaths concentrated at one stage locate the leak: screening → Modules 2 & 6; tests → Module 3 drills; interviews → The Rope.',
            'Kematian terkonsentrasi di satu tahap menunjukkan kebocoran: saringan → Modul 2 & 6; tes → latihan Modul 3; wawancara → The Rope.')));
    }

    /* list */
    if (apps.length) {
      var lc = card(w, T('Applications', 'Lamaran'), null, null);
      apps.slice().reverse().forEach(function (a) {
        var r = el('div', 'pg-app');
        var left = el('div');
        left.appendChild(el('b', null, esc(a.name)));
        var tierL = TIERS.filter(function (t) { return t[0] === a.tier; })[0];
        left.appendChild(el('div', 'sm', (tierL ? B(tierL[1]) : a.tier) + ' · ' + new Date(a.date).toLocaleDateString()));
        var right = el('div', null);
        right.style.cssText = 'display:flex;gap:6px;align-items:center';
        var sel = document.createElement('select');
        STAGES.forEach(function (s) {
          var o = document.createElement('option'); o.value = s[0]; o.textContent = B(s[1]);
          sel.appendChild(o);
        });
        sel.value = a.stage;
        sel.addEventListener('change', function () {
          a.stage = sel.value;
          save(LSP, apps);
          render();
        });
        var del = el('button', 'pg-del', '✕');
        del.setAttribute('aria-label', 'Remove');
        del.addEventListener('click', function () {
          save(LSP, apps.filter(function (x) { return x.id !== a.id; }));
          render();
        });
        right.appendChild(sel); right.appendChild(del);
        r.appendChild(left); r.appendChild(right);
        lc.appendChild(r);
      });
      lc.appendChild(el('p', 'pg-note', T('Stored only in this browser. Follow-up rule: once, 7–10 days after silence, politely.',
        'Tersimpan hanya di peramban ini. Aturan tindak lanjut: sekali, 7–10 hari setelah hening, dengan sopan.')));
    }
  }

  /* ─── render / open / close ─── */
  function render() {
    tabsEl.querySelectorAll('.pg-tab').forEach(function (b) {
      b.classList.toggle('on', b.dataset.tab === tab);
    });
    if (run) { renderQuestion(); return; }
    body.innerHTML = '';
    body.scrollTop = 0;
    var w = el('div', 'pg-in');
    body.appendChild(w);
    if (tab === 'drill') drillHome(w);
    else if (tab === 'ats') atsView(w);
    else trackerView(w);
  }

  function open(mode) {
    build();
    if (mode === 'ats' || mode === 'tracker' || mode === 'drill') tab = mode;
    root.classList.add('open');
    document.body.classList.add('lms-lock');
    render();
  }
  function close() {
    if (run && run.timer) { clearInterval(run.timer); run.timer = null; }
    run = null;
    if (root) root.classList.remove('open');
    document.body.classList.remove('lms-lock');
    syncPromo();
  }

  function syncPromo() {
    var s = bankStats();
    document.querySelectorAll('[data-gym-stat]').forEach(function (n) {
      var k = n.getAttribute('data-gym-stat');
      if (s[k] != null) n.textContent = s[k];
    });
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-pack-gym]');
    if (!b) return;
    e.preventDefault();
    open(b.getAttribute('data-pack-gym'));
  });
  document.addEventListener('mt:launch-tool', function (e) {
    if (e.detail && e.detail.tool === 'gym') {
      var p = document.querySelector('.lmsp.open .lmsp-back');
      if (p) p.click();
      open(e.detail.mode);
    }
  });
  document.querySelectorAll('.ctl button, button[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      setTimeout(function () {
        syncPromo();
        if (root && root.classList.contains('open') && !run) render();
      }, 60);
    });
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', syncPromo);
  else syncPromo();

  window.MT_PACK_GYM = { open: open, stats: bankStats };
})();
