/**
 * METANOIA LMS — MODULE ASSESSMENTS (v2)
 * --------------------------------------
 * The assignment redesign: each module's assessment is primarily auto-graded
 * multiple choice (knowledge checks + scenario questions with worked
 * explanations), with a reflection exercise added only where the module's
 * learning objective demands personal application. Learning-science
 * choices, stated: immediate per-question feedback, mixed knowledge/
 * scenario items, unlimited retakes with reshuffled order, and honest
 * scoring — MCQ points are computed, reflections are never machine-graded.
 *
 * Data: data/assess/<slug>.js → window.MT_ASSESS['<slug>'] =
 *   { "1": { mcq:[{q,opts[],correct,expl,type}...], reflect:{prompt,min}? }, ... }
 * Host config: window.MT_ASSIGN_CFG = { slug, title:{en,id}, bg, bgPos }.
 * Storage: 'mt_assess:<slug>' = { "<mod>": {score,total,best,attempts,reflection,at} }.
 * Everything stays in this browser; nothing is uploaded.
 */
(function () {
  'use strict';
  var CFG = window.MT_ASSIGN_CFG;
  if (!CFG || !CFG.slug) return;
  var BANK = (window.MT_ASSESS || {})[CFG.slug];
  if (!BANK) return;
  var LS = 'mt_assess:' + CFG.slug;

  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function T(en, id) { return lang() === 'id' ? id : en; }
  function B(pair) { return pair ? (pair[lang()] || pair.en) : ''; }
  function store() { try { return JSON.parse(localStorage.getItem(LS) || '{}'); } catch (e) { return {}; } }
  function save(s) { try { localStorage.setItem(LS, JSON.stringify(s)); } catch (e) {} }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function shuffled(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t2 = a[i]; a[i] = a[j]; a[j] = t2; }
    return a;
  }
  function wordCount(t2) { return (String(t2).match(/\S+/g) || []).length; }

  var css = '' +
  '#mtAssign{position:fixed;inset:0;z-index:1250;display:none;background:var(--bg-base,#050A12);overflow:hidden}' +
  '#mtAssign.open{display:flex;flex-direction:column}' +
  '#mtAssign .ra-bg{position:absolute;inset:0;z-index:0;pointer-events:none;' +
    'background:url("' + (CFG.bg || '../../assets/bg/journey-bg.jpg') + '") ' + (CFG.bgPos || 'center 30%') + '/cover no-repeat;opacity:.16}' +
  '#mtAssign .ra-veil{position:absolute;inset:0;z-index:0;pointer-events:none;background:' +
    'linear-gradient(180deg,rgba(5,10,18,.62) 0%,rgba(5,10,18,.9) 45%,rgba(5,10,18,.96) 100%)}' +
  ':root[data-theme="light"] #mtAssign .ra-bg{opacity:.1}' +
  ':root[data-theme="light"] #mtAssign .ra-veil{background:linear-gradient(180deg,rgba(238,241,246,.85),rgba(238,241,246,.96) 45%)}' +
  '#mtAssign .ra-top{position:relative;z-index:1;display:flex;align-items:center;gap:14px;padding:11px 22px;flex-wrap:wrap;' +
    'border-bottom:1px solid var(--gold-border);background:var(--glass-bg);backdrop-filter:var(--glass-blur)}' +
  '#mtAssign .ra-top b{font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold)}' +
  '#mtAssign .ra-close{margin-left:auto;width:36px;height:36px;border-radius:999px;border:1px solid var(--gold-border);background:none;color:var(--text);cursor:pointer;font-size:15px;flex:none}' +
  '#mtAssign .ra-close:hover{border-color:var(--gold)}' +
  '#mtAssign .ra-body{position:relative;z-index:1;flex:1;overflow-y:auto;padding:26px 22px 70px}' +
  '#mtAssign .ra-in{max-width:780px;margin:0 auto;animation:mtaEnter .4s cubic-bezier(.22,1,.36,1)}' +
  '@keyframes mtaEnter{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}' +
  '@media(prefers-reduced-motion:reduce){#mtAssign .ra-in{animation:none}}' +
  '#mtAssign .ra-card{border:1px solid var(--gold-border);border-radius:16px;background:var(--glass-bg);backdrop-filter:var(--glass-blur);padding:22px 24px;margin-bottom:14px}' +
  '#mtAssign .ra-kick{font-size:11px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:6px}' +
  '#mtAssign h2{font-size:1.4rem;margin:0 0 8px;color:var(--text)}' +
  '#mtAssign .ra-sub{font-size:13.5px;color:var(--text-sub);line-height:1.7;margin:0 0 10px}' +
  '#mtAssign .ra-note{font-size:12px;color:var(--text-faint);line-height:1.55;margin-top:10px}' +
  '#mtAssign .ra-bar{height:7px;border-radius:999px;background:rgba(201,168,76,.14);overflow:hidden;margin:4px 0 16px}' +
  '#mtAssign .ra-bar i{display:block;height:100%;background:linear-gradient(90deg,#8B6914,#C9A84C,#F0D878);transition:width .3s}' +
  '#mtAssign .ra-q{font-size:15px;color:var(--text);line-height:1.65;margin:0 0 6px;font-weight:700}' +
  '#mtAssign .ra-qtype{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;' +
    'border:1px solid var(--gold-border);border-radius:999px;padding:3px 10px;color:var(--gold);margin:0 0 12px}' +
  '#mtAssign .ra-opt{display:block;width:100%;text-align:left;box-sizing:border-box;margin:8px 0;padding:12px 15px;border-radius:11px;' +
    'border:1px solid var(--gold-border);background:var(--bg-mid);color:var(--text-sub);font-family:inherit;font-size:13.5px;line-height:1.55;cursor:pointer}' +
  '#mtAssign .ra-opt:hover{border-color:var(--gold-border-hover)}' +
  '#mtAssign .ra-opt.correct{border-color:rgba(74,222,128,.65);background:rgba(74,222,128,.1);color:var(--text)}' +
  '#mtAssign .ra-opt.wrong{border-color:rgba(239,111,94,.6);background:rgba(239,111,94,.08)}' +
  '#mtAssign .ra-expl{font-size:13px;color:var(--text-sub);line-height:1.7;border:1px solid rgba(74,222,128,.35);border-radius:11px;' +
    'padding:12px 15px;margin-top:10px;background:rgba(74,222,128,.05)}' +
  '#mtAssign .ra-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px;align-items:center}' +
  '#mtAssign .ra-btn{display:inline-flex;align-items:center;gap:9px;padding:12px 22px;border-radius:999px;border:0;cursor:pointer;' +
    'font-family:inherit;font-weight:800;font-size:13.5px;background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);color:#10131B}' +
  '#mtAssign .ra-btn.ghost{background:none;border:1px solid var(--gold-border);color:var(--gold)}' +
  '#mtAssign .ra-btn:disabled{opacity:.45;cursor:not-allowed}' +
  '#mtAssign .ra-score{display:flex;gap:24px;flex-wrap:wrap;margin:8px 0 10px}' +
  '#mtAssign .ra-score b{display:block;font-size:1.6rem;color:var(--gold-bright)}' +
  '#mtAssign .ra-score span{font-size:12px;color:var(--text-muted)}' +
  '#mtAssign .ra-rev{border-top:1px solid rgba(201,168,76,.14);padding:12px 0}' +
  '#mtAssign .ra-rev .vq{font-size:13.5px;color:var(--text);margin:0 0 6px}' +
  '#mtAssign .ra-rev .va{font-size:12.5px;margin:2px 0;line-height:1.6}' +
  '#mtAssign .ra-rev .ok{color:#4ADE80}' +
  '#mtAssign .ra-rev .bad{color:#EF6F5E}' +
  '#mtAssign textarea{width:100%;box-sizing:border-box;min-height:170px;background:var(--bg-mid);border:1px solid var(--gold-border);' +
    'border-radius:12px;color:var(--text);font-family:inherit;font-size:13.5px;line-height:1.7;padding:13px;resize:vertical}' +
  '#mtAssign textarea:focus{outline:none;border-color:var(--gold)}' +
  '#mtAssign .ra-count{font-size:12px;color:var(--text-muted);margin-top:6px;font-variant-numeric:tabular-nums}' +
  '#mtAssign .ra-saved{font-size:12px;color:#4ADE80;opacity:0;transition:opacity .3s}' +
  '#mtAssign .ra-saved.on{opacity:1}';

  var root = null, body = null, run = null, saveTimer = null;

  function build() {
    if (root) return;
    var st = document.createElement('style');
    st.id = 'mtAssignCss'; st.textContent = css;
    document.head.appendChild(st);
    root = el('div'); root.id = 'mtAssign';
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-label', 'Module assessment');
    root.appendChild(el('div', 'ra-bg'));
    root.appendChild(el('div', 'ra-veil'));
    var top = el('div', 'ra-top');
    var ttl = CFG.title || { en: 'Assessment', id: 'Asesmen' };
    top.appendChild(el('b', null, T(ttl.en, ttl.id)));
    var x = el('button', 'ra-close', '✕');
    x.setAttribute('aria-label', 'Close');
    x.addEventListener('click', close);
    top.appendChild(x);
    body = el('div', 'ra-body');
    root.appendChild(top); root.appendChild(body);
    document.body.appendChild(root);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('open')) close();
    });
  }

  function card(w, kick, title, sub) {
    var c = el('div', 'ra-card');
    if (kick) c.appendChild(el('div', 'ra-kick', kick));
    if (title) c.appendChild(el('h2', null, title));
    if (sub) c.appendChild(el('p', 'ra-sub', sub));
    w.appendChild(c);
    return c;
  }
  function wrap() {
    body.innerHTML = '';
    body.scrollTop = 0;
    var w = el('div', 'ra-in');
    body.appendChild(w);
    return w;
  }

  /* ─── intro ─── */
  function renderIntro(data) {
    var w = wrap();
    var spec = BANK[data.id] || { mcq: [] };
    var rec = store()[data.id];
    var c = card(w, esc(data.pill), esc(data.title),
      T(spec.mcq.length + ' questions — knowledge checks and scenario judgments, graded instantly with explanations.' +
          (spec.reflect ? ' One short reflection closes the assessment; it is yours, not machine-graded.' : '') +
          ' Retake any time — the reshuffled retake is where the learning consolidates.',
        spec.mcq.length + ' soal — cek pengetahuan dan penilaian skenario, dinilai seketika dengan pembahasan.' +
          (spec.reflect ? ' Satu refleksi singkat menutup asesmen; itu milikmu, tidak dinilai mesin.' : '') +
          ' Ulangi kapan saja — pengulangan yang diacak ulang adalah tempat pembelajaran mengendap.'));
    if (rec && rec.best != null) {
      var sc = el('div', 'ra-score');
      [[rec.best + '%', T('best score', 'skor terbaik')],
       [String(rec.attempts || 1), T('attempts', 'percobaan')]].forEach(function (x2) {
        var sp = el('span');
        sp.appendChild(el('b', null, x2[0]));
        sp.appendChild(el('span', null, x2[1]));
        sc.appendChild(sp);
      });
      c.appendChild(sc);
    }
    var row = el('div', 'ra-row');
    var go = el('button', 'ra-btn', (rec ? T('Retake the assessment →', 'Ulangi asesmen →') : T('Start →', 'Mulai →')));
    go.addEventListener('click', function () { startQuiz(data); });
    row.appendChild(go);
    c.appendChild(row);
    c.appendChild(el('p', 'ra-note', T('Scores are computed on this device from your answers and stored only in this browser.',
      'Skor dihitung di perangkat ini dari jawabanmu dan tersimpan hanya di peramban ini.')));
  }

  /* ─── quiz ─── */
  function startQuiz(data) {
    var spec = BANK[data.id];
    run = { data: data, qs: shuffled(spec.mcq), i: 0, answers: [], order: {} };
    run.qs.forEach(function (q, i) { run.order[i] = shuffled(q.opts.map(function (_, k) { return k; })); });
    renderQ();
  }
  function renderQ() {
    var w = wrap();
    var q = run.qs[run.i];
    var c = el('div', 'ra-card');
    c.appendChild(el('div', 'ra-kick', esc(run.data.title) + ' · ' + T('Question', 'Soal') + ' ' + (run.i + 1) + ' / ' + run.qs.length));
    var bar = el('div', 'ra-bar');
    bar.appendChild(el('i')).style.width = (run.i / run.qs.length * 100) + '%';
    c.appendChild(bar);
    c.appendChild(el('span', 'ra-qtype', q.type === 'scen' ? T('Scenario', 'Skenario') : T('Knowledge check', 'Cek pengetahuan')));
    c.appendChild(el('p', 'ra-q', esc(B(q.q))));
    var answered = run.answers[run.i] !== undefined;
    run.order[run.i].forEach(function (orig) {
      var b = el('button', 'ra-opt', esc(B(q.opts[orig])));
      if (answered) {
        b.disabled = true;
        if (orig === q.correct) b.classList.add('correct');
        else if (orig === run.answers[run.i]) b.classList.add('wrong');
      }
      b.addEventListener('click', function () {
        if (run.answers[run.i] !== undefined) return;
        run.answers[run.i] = orig;
        renderQ();
      });
      c.appendChild(b);
    });
    if (answered) {
      c.appendChild(el('div', 'ra-expl', '<b>' + (run.answers[run.i] === q.correct ? '✓ ' + T('Correct.', 'Benar.') : '✗ ' + T('Not quite.', 'Belum tepat.')) + '</b> ' + esc(B(q.expl))));
      var row = el('div', 'ra-row');
      var next = el('button', 'ra-btn', run.i < run.qs.length - 1 ? T('Next question →', 'Soal berikutnya →') : T('Finish quiz →', 'Selesaikan kuis →'));
      next.addEventListener('click', function () {
        if (run.i < run.qs.length - 1) { run.i++; renderQ(); }
        else finishQuiz();
      });
      row.appendChild(next);
      c.appendChild(row);
    }
    w.appendChild(c);
  }
  function finishQuiz() {
    var score = 0;
    run.qs.forEach(function (q, i) { if (run.answers[i] === q.correct) score++; });
    var pct = Math.round(score / run.qs.length * 100);
    var s = store();
    var rec = s[run.data.id] || { attempts: 0 };
    rec.attempts = (rec.attempts || 0) + 1;
    rec.score = pct;
    rec.best = Math.max(rec.best || 0, pct);
    rec.at = Date.now();
    s[run.data.id] = rec;
    save(s);
    var spec = BANK[run.data.id];
    if (spec.reflect && !(rec.reflection || '').trim()) renderReflect();
    else renderResult(pct);
  }

  /* ─── reflection ─── */
  function renderReflect() {
    var w = wrap();
    var spec = BANK[run.data.id];
    var s = store();
    var rec = s[run.data.id] || {};
    var c = card(w, T('Reflection — the part that is yours', 'Refleksi — bagian yang menjadi milikmu'),
      esc(run.data.title), null);
    c.appendChild(el('p', 'ra-sub', esc(B(spec.reflect.prompt))));
    var ta = document.createElement('textarea');
    ta.value = rec.reflection || '';
    ta.placeholder = T('Write in your own words — this is application, not examination. Autosaves as you type.',
                       'Tulis dengan kata-katamu sendiri — ini penerapan, bukan ujian. Tersimpan otomatis saat mengetik.');
    c.appendChild(ta);
    var min = spec.reflect.min || 25;
    var count = el('div', 'ra-count', wordCount(ta.value) + ' ' + T('words (minimum ' + min + ')', 'kata (minimum ' + min + ')'));
    c.appendChild(count);
    var saved = el('span', 'ra-saved', '✓ ' + T('Saved', 'Tersimpan'));
    ta.addEventListener('input', function () {
      count.textContent = wordCount(ta.value) + ' ' + T('words (minimum ' + min + ')', 'kata (minimum ' + min + ')');
      if (saveTimer) clearTimeout(saveTimer);
      saveTimer = setTimeout(function () {
        var s2 = store();
        s2[run.data.id] = s2[run.data.id] || {};
        s2[run.data.id].reflection = ta.value;
        save(s2);
        saved.classList.add('on');
        setTimeout(function () { saved.classList.remove('on'); }, 1200);
      }, 500);
    });
    var row = el('div', 'ra-row');
    var done = el('button', 'ra-btn', T('Complete assessment →', 'Selesaikan asesmen →'));
    done.addEventListener('click', function () {
      if (wordCount(ta.value) < min) { count.textContent = wordCount(ta.value) + ' ' + T('words — the reflection needs at least ' + min + ' words of real thought.', 'kata — refleksi butuh minimal ' + min + ' kata pemikiran sungguhan.'); ta.focus(); return; }
      var s2 = store();
      s2[run.data.id].reflection = ta.value;
      save(s2);
      renderResult(store()[run.data.id].score);
    });
    row.appendChild(done);
    row.appendChild(saved);
    c.appendChild(row);
    c.appendChild(el('p', 'ra-note', T('No grader reads this in the prototype — the writing itself is the exercise, and it stays in this browser.',
      'Tak ada penilai yang membacanya di prototipe — menulisnya itulah latihannya, dan ia tinggal di peramban ini.')));
  }

  /* ─── result ─── */
  function renderResult(pct) {
    var w = wrap();
    var spec = BANK[run.data.id];
    var rec = store()[run.data.id] || {};
    var c = card(w, T('Assessment complete', 'Asesmen selesai'), esc(run.data.title), null);
    var sc = el('div', 'ra-score');
    [[pct + '%', T('this attempt', 'percobaan ini')],
     [(rec.best || pct) + '%', T('best score', 'skor terbaik')],
     [String(rec.attempts || 1), T('attempts', 'percobaan')]].forEach(function (x2) {
      var sp = el('span');
      sp.appendChild(el('b', null, x2[0]));
      sp.appendChild(el('span', null, x2[1]));
      sc.appendChild(sp);
    });
    c.appendChild(sc);
    c.appendChild(el('p', 'ra-sub', pct >= 80
      ? T('Strong. The module’s core ideas are holding — the review below shows the full reasoning per question.',
          'Kuat. Gagasan inti modul sudah melekat — tinjauan di bawah menunjukkan penalaran penuh per soal.')
      : pct >= 60
      ? T('Solid base with gaps — reread the explanations below, revisit the flagged lessons, then retake with a fresh shuffle.',
          'Dasar solid dengan celah — baca ulang pembahasan di bawah, kunjungi lagi pelajarannya, lalu ulangi dengan acakan baru.')
      : T('The module deserves another pass before the retake — the explanations below tell you exactly which ideas slipped.',
          'Modul ini layak dibaca sekali lagi sebelum pengulangan — pembahasan di bawah menunjukkan persis gagasan mana yang lolos.')));
    if (run.qs && run.answers.length) {
      var rev = card(w, T('Review — every question, every explanation', 'Tinjauan — tiap soal, tiap pembahasan'), null, null);
      run.qs.forEach(function (q, i) {
        var r = el('div', 'ra-rev');
        r.appendChild(el('p', 'vq', (i + 1) + '. ' + esc(B(q.q))));
        var a = run.answers[i];
        if (a === q.correct) r.appendChild(el('p', 'va ok', '✓ ' + esc(B(q.opts[a]))));
        else {
          r.appendChild(el('p', 'va bad', '✗ ' + T('Your answer: ', 'Jawabanmu: ') + esc(B(q.opts[a]))));
          r.appendChild(el('p', 'va ok', '✓ ' + T('Correct: ', 'Benar: ') + esc(B(q.opts[q.correct]))));
        }
        r.appendChild(el('p', 'va', esc(B(q.expl))));
        rev.appendChild(r);
      });
    }
    var row = el('div', 'ra-row');
    var again = el('button', 'ra-btn ghost', T('Retake (reshuffled)', 'Ulangi (diacak ulang)'));
    again.addEventListener('click', function () { startQuiz(run.data); });
    var doneB = el('button', 'ra-btn', T('Done →', 'Selesai →'));
    doneB.addEventListener('click', close);
    row.appendChild(doneB); row.appendChild(again);
    if (spec.reflect) {
      var er = el('button', 'ra-btn ghost', T('Edit reflection', 'Sunting refleksi'));
      er.addEventListener('click', renderReflect);
      row.appendChild(er);
    }
    w.appendChild(row);
  }

  /* ─── card data + open/close ─── */
  function cardData(cardEl) {
    var pick = function (sel) { var n = cardEl.querySelector(sel); return n ? n.textContent.trim() : ''; };
    return { id: cardEl.dataset.module, pill: pick('.gold-pill'), title: pick('.assignment-title') };
  }
  function open(cardEl) {
    build();
    root.classList.add('open');
    document.body.classList.add('lms-lock');
    run = null;
    renderIntro(cardData(cardEl));
  }
  function close() {
    if (root) root.classList.remove('open');
    document.body.classList.remove('lms-lock');
    run = null;
    syncCards();
  }

  /* ─── host page sync: cards, filters, grades tab ─── */
  function modsComplete() {
    try { return JSON.parse(localStorage.getItem('mt-lms-mods:' + CFG.slug) || '{}'); } catch (e) { return {}; }
  }
  function syncCards() {
    var s = store(), mods = modsComplete();
    document.querySelectorAll('.assignment-card').forEach(function (cardEl) {
      var id = cardEl.dataset.module;
      if (!BANK[id]) return;
      /* module completion unlocks its assessment */
      if (cardEl.dataset.status === 'locked' && mods[id]) cardEl.dataset.status = 'available';
      var rec = s[id];
      if (cardEl.dataset.status === 'locked') return;
      var status = rec && rec.best != null ? 'graded' : 'available';
      cardEl.dataset.status = status;
      var st = cardEl.querySelector('.assignment-status');
      if (st) {
        var map = status === 'graded'
          ? ['graded', 'Completed · ' + rec.best + '%', 'Selesai · ' + rec.best + '%']
          : ['available', 'Available', 'Tersedia'];
        st.className = 'assignment-status ' + map[0];
        st.dataset.en = map[1]; st.dataset.id = map[2];
        st.textContent = lang() === 'id' ? map[2] : map[1];
      }
      var btn = cardEl.querySelector('.assignment-footer button');
      if (btn && !btn.disabled) {
        var lbl = status === 'graded' ? ['Review / retake →', 'Tinjau / ulangi →'] : ['Start assessment →', 'Mulai asesmen →'];
        btn.dataset.en = lbl[0]; btn.dataset.id = lbl[1];
        btn.textContent = lang() === 'id' ? lbl[1] : lbl[0];
      }
    });
    var cards = document.querySelectorAll('.assignment-card');
    document.querySelectorAll('.filter-pill').forEach(function (p) {
      var f = p.dataset.filter; if (!f) return;
      p.dataset.count = f === 'all' ? cards.length
        : document.querySelectorAll('.assignment-card[data-status="' + f + '"]').length;
    });
    /* grades tab: real, computed numbers */
    var rows = document.querySelectorAll('.grade-row');
    var total = 0, done = 0, n = 0;
    rows.forEach(function (row, i) {
      var id = String(i + 1);
      if (!BANK[id]) return;
      n++;
      var rec = s[id];
      var stEl = row.querySelector('.grade-status');
      var grEl = row.querySelector('.gr-grade');
      if (rec && rec.best != null) {
        done++; total += rec.best;
        if (stEl) {
          stEl.className = 'grade-status graded';
          stEl.dataset.en = 'Completed'; stEl.dataset.id = 'Selesai';
          stEl.textContent = lang() === 'id' ? 'Selesai' : 'Completed';
        }
        if (grEl) grEl.textContent = rec.best;
      }
    });
    var ov = document.querySelector('.ov-score');
    if (ov && n) {
      ov.innerHTML = total + ' <span class="sl">/</span> <span class="den">' + (n * 100) + '</span>';
    }
    var ovBar = document.querySelector('.ov-bar i');
    if (ovBar && n) ovBar.style.setProperty('--grade-pct', Math.round(total / n) + '%');
    var ovNote = document.querySelector('.ov-note');
    if (ovNote && done) {
      ovNote.dataset.en = done + ' of ' + n + ' assessments completed — scores are your best MCQ results, computed on this device.';
      ovNote.dataset.id = done + ' dari ' + n + ' asesmen selesai — skor adalah hasil MCQ terbaikmu, dihitung di perangkat ini.';
      ovNote.textContent = ovNote.dataset[lang() === 'id' ? 'id' : 'en'];
    }
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.assignment-footer button');
    if (!btn || btn.disabled) return;
    var cardEl = btn.closest('.assignment-card');
    if (!cardEl || cardEl.dataset.status === 'locked') return;
    e.preventDefault();
    open(cardEl);
  });
  document.querySelectorAll('.ctl button, button[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setTimeout(syncCards, 60); });
  });

  syncCards();
  window.MT_ASSIGN = { open: function (id) {
    var cardEl = document.querySelector('.assignment-card[data-module="' + id + '"]');
    if (cardEl && cardEl.dataset.status !== 'locked') open(cardEl);
  }, sync: syncCards };
})();
