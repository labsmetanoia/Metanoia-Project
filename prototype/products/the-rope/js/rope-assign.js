/**
 * THE ROPE — PRACTICE ASSIGNMENTS (client-side workspace)
 * -------------------------------------------------------
 * Open → Start → Work (autosaved) → Submit → Self-review → Reviewed.
 *
 * Honesty contract: this prototype has no grader on the other side.
 * Submissions are stored locally in this browser, and "review" is a
 * guided self-review against the assignment's rubric — the UI says so
 * plainly. Statuses, filters and counters stay in sync everywhere.
 */
(function () {
  'use strict';
  var LS = 'mt_rope_assign';

  function lang() {
    try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; }
  }
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

  /* generic rubric applied to every assignment's self-review */
  var RUBRIC = [
    { en: 'I followed the stated format and covered every part of the brief', id: 'Saya mengikuti format yang diminta dan mencakup semua bagian brief' },
    { en: 'My work uses concrete, real examples — not generic statements', id: 'Karyaku memakai contoh konkret dan nyata — bukan pernyataan generik' },
    { en: 'At least one number, name or artefact anchors each claim', id: 'Minimal satu angka, nama, atau artefak menjangkar tiap klaim' },
    { en: 'I stayed within the requested length and structure', id: 'Saya tetap dalam panjang dan struktur yang diminta' },
    { en: 'I would be comfortable showing this to a mentor', id: 'Saya nyaman menunjukkan ini kepada seorang mentor' }
  ];

  var css = '' +
  '#ropeAssign{position:fixed;inset:0;z-index:1250;display:none;background:var(--bg-base,#050A12);overflow:hidden}' +
  '#ropeAssign.open{display:flex;flex-direction:column}' +
  '#ropeAssign .ra-bg{position:absolute;inset:0;z-index:0;pointer-events:none;' +
    'background:url("../../assets/bg/rope.jpg") center 30%/cover no-repeat;opacity:.16}' +
  '#ropeAssign .ra-veil{position:absolute;inset:0;z-index:0;pointer-events:none;background:' +
    'linear-gradient(180deg,rgba(5,10,18,.62) 0%,rgba(5,10,18,.9) 45%,rgba(5,10,18,.96) 100%)}' +
  ':root[data-theme="light"] #ropeAssign .ra-bg{opacity:.1}' +
  ':root[data-theme="light"] #ropeAssign .ra-veil{background:linear-gradient(180deg,rgba(238,241,246,.85),rgba(238,241,246,.96) 45%)}' +
  '.ra-top{position:relative;z-index:1;display:flex;align-items:center;gap:14px;padding:11px 22px;flex-wrap:wrap;' +
    'border-bottom:1px solid var(--gold-border);background:var(--glass-bg);backdrop-filter:var(--glass-blur)}' +
  '.ra-top b{font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold)}' +
  '.ra-steps{display:flex;gap:4px;align-items:center;flex-wrap:wrap}' +
  '.ra-step{display:inline-flex;align-items:center;gap:7px;border-radius:999px;padding:6px 12px;font-size:11px;font-weight:800;' +
    'letter-spacing:.1em;text-transform:uppercase;color:var(--text-faint);border:1px solid transparent}' +
  '.ra-step i{font-style:normal;width:16px;height:16px;border-radius:50%;border:1.5px solid currentColor;' +
    'display:inline-flex;align-items:center;justify-content:center;font-size:9px}' +
  '.ra-step.done{color:var(--text-muted)}' +
  '.ra-step.done i{background:rgba(74,222,128,.15);border-color:rgba(74,222,128,.6);color:#4ADE80}' +
  '.ra-step.now{color:var(--gold-bright);border-color:var(--gold-border-hover);background:rgba(201,168,76,.1)}' +
  '.ra-sep{color:var(--text-faint);font-size:11px}' +
  '.ra-close{margin-left:auto;width:36px;height:36px;border-radius:999px;border:1px solid var(--gold-border);background:none;color:var(--text);cursor:pointer;font-size:15px;flex:none}' +
  '.ra-close:hover{border-color:var(--gold)}' +
  '.ra-body{position:relative;z-index:1;flex:1;overflow-y:auto;padding:26px 22px 60px}' +
  '.ra-in{max-width:860px;margin:0 auto;animation:raEnter .4s cubic-bezier(.22,1,.36,1)}' +
  '@keyframes raEnter{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}' +
  '@media(prefers-reduced-motion:reduce){.ra-in{animation:none}}' +
  '.ra-card{border:1px solid var(--gold-border);border-radius:16px;background:var(--glass-bg);backdrop-filter:var(--glass-blur);padding:22px 24px;margin-bottom:14px}' +
  '.ra-kick{font-size:11px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:6px}' +
  '.ra-card h2{font-size:1.4rem;margin:0 0 8px;color:var(--text)}' +
  '.ra-brief{font-size:14px;color:var(--text-sub);line-height:1.75}' +
  '.ra-meta{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}' +
  '.ra-meta span{font-size:12px;border:1px solid var(--gold-border);border-radius:999px;padding:5px 12px;color:var(--text-muted)}' +
  '.ra-ta{width:100%;box-sizing:border-box;min-height:280px;background:var(--bg-mid);border:1px solid var(--gold-border);' +
    'border-radius:12px;color:var(--text);font-family:inherit;font-size:14px;line-height:1.7;padding:14px;resize:vertical}' +
  '.ra-ta:focus{outline:none;border-color:var(--gold)}' +
  '.ra-ta[readonly]{opacity:.85}' +
  '.ra-note{font-size:12px;color:var(--text-faint);margin-top:8px;line-height:1.55}' +
  '.ra-count{font-size:12px;color:var(--text-muted);margin-top:6px;font-variant-numeric:tabular-nums}' +
  '.ra-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px;align-items:center}' +
  '.ra-btn{display:inline-flex;align-items:center;gap:9px;padding:12px 22px;border-radius:999px;border:0;cursor:pointer;' +
    'font-family:inherit;font-weight:800;font-size:13.5px;background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);color:#10131B}' +
  '.ra-btn.ghost{background:none;border:1px solid var(--gold-border);color:var(--gold)}' +
  '.ra-btn:hover{transform:translateY(-1px)}' +
  '.ra-btn:disabled{opacity:.45;cursor:not-allowed;transform:none}' +
  '.ra-saved{font-size:12px;color:#4ADE80;opacity:0;transition:opacity .3s}' +
  '.ra-saved.on{opacity:1}' +
  '.ra-rubric label{display:flex;gap:10px;align-items:flex-start;font-size:13.5px;color:var(--text-sub);padding:7px 0;cursor:pointer;line-height:1.5}' +
  '.ra-rubric input{accent-color:#C9A84C;width:16px;height:16px;flex:none;margin-top:2px}' +
  '.ra-badge{display:inline-flex;align-items:center;gap:7px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;' +
    'border-radius:999px;padding:6px 13px}' +
  '.ra-badge.sub{color:#7EB3F5;border:1px solid rgba(126,179,245,.4);background:rgba(126,179,245,.08)}' +
  '.ra-badge.rev{color:#4ADE80;border:1px solid rgba(74,222,128,.4);background:rgba(74,222,128,.08)}';

  var root = null, body = null, stepsEl = null, currentId = null, saveTimer = null;

  function build() {
    if (root) return;
    var st = document.createElement('style');
    st.id = 'ropeAssignCss'; st.textContent = css;
    document.head.appendChild(st);
    root = el('div'); root.id = 'ropeAssign';
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-label', 'Assignment workspace');
    root.appendChild(el('div', 'ra-bg'));
    root.appendChild(el('div', 'ra-veil'));
    var top = el('div', 'ra-top');
    top.appendChild(el('b', null, T('The Rope · Assignment', 'The Rope · Tugas')));
    stepsEl = el('div', 'ra-steps');
    top.appendChild(stepsEl);
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

  function renderSteps(stage) {
    var STAGES = [
      ['work', { en: 'Work', id: 'Kerjakan' }],
      ['submit', { en: 'Submit', id: 'Kirim' }],
      ['review', { en: 'Self-review', id: 'Tinjau mandiri' }]
    ];
    stepsEl.innerHTML = '';
    var idx = STAGES.map(function (s) { return s[0]; }).indexOf(stage);
    STAGES.forEach(function (s, i) {
      if (i > 0) stepsEl.appendChild(el('span', 'ra-sep', '→'));
      var cls = i === idx ? ' now' : i < idx ? ' done' : '';
      var b = el('span', 'ra-step' + cls);
      b.appendChild(el('i', null, i < idx ? '✓' : String(i + 1)));
      b.appendChild(el('span', null, s[1][lang()]));
      stepsEl.appendChild(b);
    });
  }

  function cardData(card) {
    var pick = function (sel) { var n = card.querySelector(sel); return n ? n.textContent.trim() : ''; };
    return {
      id: card.dataset.module,
      pill: pick('.gold-pill'),
      title: pick('.assignment-title'),
      brief: pick('.assignment-desc'),
      meta: [].slice.call(card.querySelectorAll('.assignment-meta span')).map(function (n) { return n.textContent.trim(); })
    };
  }

  function open(card) {
    build();
    currentId = card.dataset.module;
    root.classList.add('open');
    document.body.classList.add('lms-lock');
    render(cardData(card));
  }
  function close() {
    if (root) root.classList.remove('open');
    document.body.classList.remove('lms-lock');
    currentId = null;
    syncCards();
  }

  function wordCount(t) { return (String(t).match(/\S+/g) || []).length; }

  function render(data) {
    var s = store();
    var rec = s[data.id] || { status: 'draft', text: '' };
    var stage = rec.status === 'submitted' ? 'review' : rec.status === 'reviewed' ? 'review' : rec.text ? 'work' : 'work';
    renderSteps(rec.status === 'draft' ? (rec.text ? 'work' : 'work') : stage);
    body.innerHTML = '';
    body.scrollTop = 0;
    var w = el('div', 'ra-in');
    body.appendChild(w);

    var head = el('div', 'ra-card');
    head.appendChild(el('div', 'ra-kick', esc(data.pill)));
    head.appendChild(el('h2', null, esc(data.title)));
    if (rec.status === 'submitted') head.appendChild(el('span', 'ra-badge sub', T('Submitted · stored in this browser', 'Dikirim · tersimpan di peramban ini')));
    if (rec.status === 'reviewed') head.appendChild(el('span', 'ra-badge rev', T('Self-review complete', 'Tinjauan mandiri selesai')));
    var brief = el('div', 'ra-card');
    brief.appendChild(el('div', 'ra-kick', T('Assignment brief', 'Brief tugas')));
    brief.appendChild(el('p', 'ra-brief', esc(data.brief)));
    var meta = el('div', 'ra-meta');
    data.meta.forEach(function (m) { meta.appendChild(el('span', null, esc(m))); });
    brief.appendChild(meta);
    w.appendChild(head); w.appendChild(brief);

    var work = el('div', 'ra-card');
    work.appendChild(el('div', 'ra-kick', rec.status === 'draft' ? T('Your work', 'Karyamu') : T('Your submission', 'Kirimanmu')));
    var ta = document.createElement('textarea');
    ta.className = 'ra-ta';
    ta.value = rec.text || '';
    ta.placeholder = T('Work here. Everything you type autosaves to this browser — leave and come back any time. For recordings, use the simulator and summarise your self-evaluation here.',
                       'Kerjakan di sini. Semua yang kamu ketik tersimpan otomatis di peramban ini — tinggalkan dan kembali kapan saja. Untuk rekaman, gunakan simulator dan rangkum evaluasi dirimu di sini.');
    if (rec.status !== 'draft') ta.setAttribute('readonly', 'readonly');
    work.appendChild(ta);
    var count = el('div', 'ra-count', wordCount(ta.value) + ' ' + T('words', 'kata'));
    work.appendChild(count);
    var saved = el('span', 'ra-saved', '✓ ' + T('Saved', 'Tersimpan'));
    var row = el('div', 'ra-row');

    if (rec.status === 'draft') {
      ta.addEventListener('input', function () {
        count.textContent = wordCount(ta.value) + ' ' + T('words', 'kata');
        if (saveTimer) clearTimeout(saveTimer);
        saveTimer = setTimeout(function () {
          var s2 = store();
          s2[data.id] = { status: 'draft', text: ta.value, savedAt: Date.now() };
          save(s2);
          saved.classList.add('on');
          setTimeout(function () { saved.classList.remove('on'); }, 1200);
        }, 500);
      });
      var submit = el('button', 'ra-btn', T('Submit assignment →', 'Kirim tugas →'));
      submit.addEventListener('click', function () {
        if (wordCount(ta.value) < 30) {
          count.textContent = wordCount(ta.value) + ' ' + T('words — a submission needs at least 30 words of real work.', 'kata — kiriman butuh minimal 30 kata kerja nyata.');
          ta.focus();
          return;
        }
        var s2 = store();
        s2[data.id] = { status: 'submitted', text: ta.value, submittedAt: Date.now() };
        save(s2);
        render(data);
      });
      row.appendChild(submit);
      row.appendChild(saved);
      work.appendChild(row);
      work.appendChild(el('p', 'ra-note', T('This prototype stores your work locally in this browser — nothing is uploaded. Submitting locks the text and opens the self-review rubric.',
                                            'Prototipe ini menyimpan karyamu secara lokal di peramban — tidak ada yang diunggah. Mengirim akan mengunci teks dan membuka rubrik tinjauan mandiri.')));
    } else {
      var reopen = el('button', 'ra-btn ghost', T('Reopen as draft', 'Buka lagi sebagai draf'));
      reopen.addEventListener('click', function () {
        var s2 = store();
        s2[data.id] = { status: 'draft', text: rec.text, savedAt: Date.now() };
        save(s2);
        render(data);
      });
      row.appendChild(reopen);
      work.appendChild(row);
    }
    w.appendChild(work);

    /* self-review rubric after submit */
    if (rec.status === 'submitted' || rec.status === 'reviewed') {
      var rub = el('div', 'ra-card ra-rubric');
      rub.appendChild(el('div', 'ra-kick', T('Self-review — the honest rubric', 'Tinjauan mandiri — rubrik yang jujur')));
      rub.appendChild(el('p', 'ra-note', T('No grader sits behind this prototype, so the review is yours — which is also the skill: professionals review their own work before anyone else sees it. Tick only what is true.',
                                           'Tidak ada penilai di balik prototipe ini, maka tinjauannya milikmu — dan itulah keterampilannya: profesional meninjau karyanya sendiri sebelum orang lain melihatnya. Centang hanya yang benar.')));
      var boxes = [];
      RUBRIC.forEach(function (r, i) {
        var lb = el('label');
        var cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.checked = !!(rec.review && rec.review[i]);
        if (rec.status === 'reviewed') cb.disabled = true;
        boxes.push(cb);
        lb.appendChild(cb);
        lb.appendChild(el('span', null, r[lang()]));
        rub.appendChild(lb);
      });
      if (rec.status === 'submitted') {
        var done = el('button', 'ra-btn', T('Complete self-review →', 'Selesaikan tinjauan mandiri →'));
        done.addEventListener('click', function () {
          var s2 = store();
          s2[data.id] = { status: 'reviewed', text: rec.text, submittedAt: rec.submittedAt, reviewedAt: Date.now(),
            review: boxes.map(function (b) { return b.checked; }) };
          save(s2);
          render(data);
        });
        var rr = el('div', 'ra-row'); rr.appendChild(done);
        rub.appendChild(rr);
      } else {
        var n = (rec.review || []).filter(Boolean).length;
        rub.appendChild(el('p', 'ra-note', '✓ ' + T('Self-review: ' + n + ' of ' + RUBRIC.length + ' criteria met. Unmet criteria are your revision list — reopen as draft to strengthen the work.',
                                                     'Tinjauan mandiri: ' + n + ' dari ' + RUBRIC.length + ' kriteria terpenuhi. Kriteria yang belum adalah daftar revisimu — buka lagi sebagai draf untuk memperkuatnya.')));
      }
      w.appendChild(rub);
    }
  }

  /* ─── sync the tab cards, filter counts and banner with stored state ─── */
  function syncCards() {
    var s = store();
    document.querySelectorAll('.assignment-card').forEach(function (card) {
      var rec = s[card.dataset.module];
      if (!rec) return;
      if (card.dataset.status === 'locked') return; /* locks win until the module completes */
      var status = rec.status === 'reviewed' ? 'graded' : rec.status === 'submitted' ? 'submitted' : 'available';
      card.dataset.status = status;
      var st = card.querySelector('.assignment-status');
      if (st) {
        var map = {
          available: ['available', rec.text ? 'Draft in progress' : 'Available', rec.text ? 'Draf berjalan' : 'Tersedia'],
          submitted: ['submitted', 'Submitted', 'Dikirim'],
          graded: ['graded', 'Self-reviewed', 'Ditinjau mandiri']
        }[status];
        st.className = 'assignment-status ' + map[0];
        st.dataset.en = map[1]; st.dataset.id = map[2];
        st.textContent = lang() === 'id' ? map[2] : map[1];
      }
      var btn = card.querySelector('.assignment-footer button');
      if (btn && !btn.disabled) {
        var lbl = status === 'available'
          ? (rec.text ? ['Continue draft →', 'Lanjutkan draf →'] : ['Start Assignment →', 'Mulai Tugas →'])
          : ['Review submission →', 'Tinjau kiriman →'];
        btn.dataset.en = lbl[0]; btn.dataset.id = lbl[1];
        btn.textContent = lang() === 'id' ? lbl[1] : lbl[0];
      }
    });
    /* filter pill counts */
    var cards = document.querySelectorAll('.assignment-card');
    document.querySelectorAll('.filter-pill').forEach(function (p) {
      var f = p.dataset.filter; if (!f) return;
      p.dataset.count = f === 'all' ? cards.length
        : document.querySelectorAll('.assignment-card[data-status="' + f + '"]').length;
    });
  }

  /* delegated launch: any non-disabled assignment footer button opens the workspace */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.assignment-footer button');
    if (!btn || btn.disabled) return;
    var card = btn.closest('.assignment-card');
    if (!card || card.dataset.status === 'locked') return;
    e.preventDefault();
    open(card);
  });

  /* re-render workspace strings when the host language flips */
  document.querySelectorAll('.ctl button, button[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setTimeout(syncCards, 60); });
  });

  syncCards();
  window.MT_ROPE_ASSIGN = { open: function (id) {
    var card = document.querySelector('.assignment-card[data-module="' + id + '"]');
    if (card && card.dataset.status !== 'locked') open(card);
  }, sync: syncCards };
})();
