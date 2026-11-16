/* Metanoia Labs: the AI coach (beta).
 *
 * A capped review of ONE interview answer or ONE CV bullet by a language model, through /api/coach
 * (functions/api/coach.js). It sits next to the on-device rubric scores, it does not replace them.
 * The member's text is sent for that one review and is not stored on the server; the feedback is kept
 * in this browser (and synced with the member's progress) so the last review of a question can be read again.
 *
 *   MT_COACH.open({ kind: 'interview' | 'cv', question, text })   the dialog
 *   MT_COACH.attachDebrief(container, [{ q, a }], lang)            The Rope: a "review this answer" row per answer
 *   <button data-coach-open hidden>…</button>                      shown, and wired, only when the coach is available
 *
 * Nothing is drawn for a visitor who cannot use it: signed out, or before the owner has opened it to members.
 */
(function () {
  'use strict';
  if (window.MT_COACH) return;
  var isId = function () { return (document.documentElement.lang || 'en').toLowerCase().indexOf('id') === 0; };
  var T = function (en, id) { return isId() ? id : en; };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var bi = function (tag, cls, en, id, attrs) { return '<' + tag + (cls ? ' class="' + cls + '"' : '') + (attrs || '') + ' data-en="' + esc(en) + '" data-id="' + esc(id) + '">' + esc(T(en, id)) + '</' + tag + '>'; };
  var LS = 'mt_rope_coach', LIMITS = { interview: [40, 1800], cv: [10, 400] };
  var status = null, veil = null, kind = 'interview', lastFocus = null, onResult = null;

  var CSS = '' +
    '.mtc-veil{position:fixed;inset:0;z-index:100070;display:none;align-items:center;justify-content:center;padding:16px;background:rgba(3,6,12,.74)}.mtc-veil.on{display:flex}' +
    '.mtc{width:100%;max-width:560px;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px);overflow:auto;border-radius:16px;border:1px solid rgba(201,168,76,.4);background:#0B111B;color:#fff;padding:22px;font-size:14px;line-height:1.5;text-align:left}' +
    '[data-theme="light"] .mtc{background:#fff;color:#1B2434}' +
    '.mtc h2{margin:0;font-size:20px;line-height:1.2;letter-spacing:0;text-transform:none}.mtc-beta{display:inline-block;margin-left:8px;padding:2px 8px;border-radius:999px;background:rgba(201,168,76,.18);color:#E9D28A;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;vertical-align:middle}' +
    '[data-theme="light"] .mtc-beta{color:#7A5C12}' +
    '.mtc-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;margin-bottom:6px}' +
    '.mtc-x{flex:none;width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.22);background:transparent;color:inherit;font-size:18px;line-height:1;cursor:pointer}[data-theme="light"] .mtc-x{border-color:rgba(27,36,52,.25)}' +
    '.mtc p{margin:0 0 12px;color:rgba(255,255,255,.74)}[data-theme="light"] .mtc p{color:rgba(27,36,52,.74)}' +
    '.mtc-tabs{display:flex;gap:8px;margin:0 0 12px}.mtc-tabs button{min-height:36px;padding:0 14px;border-radius:999px;border:1px solid rgba(255,255,255,.24);background:transparent;color:inherit;font:inherit;font-size:13px;cursor:pointer}' +
    '[data-theme="light"] .mtc-tabs button{border-color:rgba(27,36,52,.28)}.mtc-tabs button[aria-selected="true"]{background:#C9A84C;border-color:#C9A84C;color:#14100A;font-weight:700}' +
    '.mtc label{display:block;font-weight:600;font-size:13px;margin:0 0 6px}' +
    '.mtc input[type=text],.mtc textarea{width:100%;box-sizing:border-box;border-radius:10px;border:1px solid rgba(255,255,255,.24);background:rgba(255,255,255,.04);color:inherit;font:inherit;padding:10px 12px;margin:0 0 10px}' +
    '[data-theme="light"] .mtc input[type=text],[data-theme="light"] .mtc textarea{border-color:rgba(27,36,52,.28);background:#fff}.mtc textarea{min-height:130px;resize:vertical;margin-bottom:4px}' +
    '.mtc-meta{display:flex;justify-content:space-between;gap:10px;font-size:12px;color:rgba(255,255,255,.64);margin:0 0 10px}[data-theme="light"] .mtc-meta{color:rgba(27,36,52,.66)}' +
    '.mtc-go{width:100%;min-height:44px;border:0;border-radius:999px;background:#C9A84C;color:#14100A;font:700 14px/1 inherit;cursor:pointer}.mtc-go[disabled]{opacity:.6;cursor:default}' +
    '.mtc-err{min-height:18px;margin:8px 0 0;color:#FF9B8A;font-size:13px}[data-theme="light"] .mtc-err{color:#B3261E}' +
    '.mtc-out{margin-top:14px;padding-top:14px;border-top:1px solid rgba(201,168,76,.3)}.mtc-out h3{margin:12px 0 4px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#C9A84C}.mtc-out h3:first-child{margin-top:0}' +
    '[data-theme="light"] .mtc-out h3{color:#7A5C12}.mtc-out ul{margin:0;padding-left:18px}.mtc-out li{margin:2px 0}' +
    '.mtc-chips{display:flex;flex-wrap:wrap;gap:6px}.mtc-chip{padding:3px 10px;border-radius:999px;font-size:12px;border:1px solid rgba(255,255,255,.22);color:rgba(255,255,255,.66)}.mtc-chip.yes{border-color:#4CC38A;color:#8FE3BD}' +
    '[data-theme="light"] .mtc-chip{border-color:rgba(27,36,52,.25);color:rgba(27,36,52,.66)}[data-theme="light"] .mtc-chip.yes{border-color:#1E8E5A;color:#1E7A4E}' +
    '.mtc-rw{margin:0;padding:10px 12px;border-radius:10px;background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.3)}' +
    '.mtc-fine{font-size:12px;color:rgba(255,255,255,.62);margin:12px 0 0}[data-theme="light"] .mtc-fine{color:rgba(27,36,52,.66)}' +
    '.mtc button:focus-visible,.mtc input:focus-visible,.mtc textarea:focus-visible,.mtc-row button:focus-visible{outline:2px solid #C9A84C;outline-offset:2px}' +
    '.mtc-sec{margin:26px 0 8px;padding:18px;border-radius:14px;border:1px solid rgba(201,168,76,.35);background:rgba(201,168,76,.05);text-align:left}' +
    '.mtc-sec h3{margin:0 0 4px;font-size:16px}.mtc-sec>p{margin:0 0 12px;font-size:13px;opacity:.8}' +
    '.mtc-row{display:flex;gap:12px;align-items:center;justify-content:space-between;padding:10px 0;border-top:1px solid rgba(255,255,255,.1)}.mtc-row span{font-size:13.5px;min-width:0}.mtc-row small{display:block;opacity:.65;font-size:12px}' +
    '.mtc-row button{flex:none;min-height:40px;padding:0 14px;border-radius:999px;border:1px solid rgba(201,168,76,.55);background:transparent;color:#E9D28A;font:600 13px/1 inherit;cursor:pointer}[data-theme="light"] .mtc-row button{color:#7A5C12}' +
    '@media print{.mtc-veil{display:none!important}}';
  function css() { if (document.getElementById('mtcCss')) return; var st = document.createElement('style'); st.id = 'mtcCss'; st.textContent = CSS; document.head.appendChild(st); }

  function getStatus(force) {
    if (status && !force) return Promise.resolve(status);
    return fetch('/api/coach', { credentials: 'same-origin', headers: { accept: 'application/json' } })
      .then(function (r) { return /json/.test(r.headers.get('content-type') || '') ? r.json() : { available: false }; })
      .then(function (j) { status = j || { available: false }; return status; }, function () { status = { available: false }; return status; });
  }

  var saved = function () { try { return JSON.parse(localStorage.getItem(LS) || '{}') || {}; } catch (e) { return {}; } };
  var keyOf = function (q) { var h = 0, s = String(q || ''); for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return 'q' + (h >>> 0).toString(36); };
  function remember(q, feedback) { try { var all = saved(); all[keyOf(q)] = { at: new Date().toISOString(), f: feedback }; var ks = Object.keys(all); if (ks.length > 60) ks.sort(function (a, b) { return all[a].at < all[b].at ? -1 : 1; }).slice(0, ks.length - 60).forEach(function (k) { delete all[k]; }); localStorage.setItem(LS, JSON.stringify(all)); } catch (e) {} }

  var NAMES = { situation: ['Situation', 'Situasi'], task: ['Task', 'Tugas'], action: ['Action', 'Aksi'], result: ['Result', 'Hasil'], action_verb: ['Starts with a verb', 'Diawali kata kerja'], specific: ['Specific', 'Spesifik'], measurable: ['Has a number', 'Ada angkanya'], concise: ['Concise', 'Ringkas'] };
  function feedbackHtml(f) {
    if (!f) return '';
    if (f.text) return '<p style="white-space:pre-wrap">' + esc(f.text) + '</p>';
    var flags = f.structure || f.checks, h = '';
    if (flags) h += '<h3>' + esc(f.structure ? T('Answer structure', 'Struktur jawaban') : T('Checks', 'Pemeriksaan')) + '</h3><div class="mtc-chips">' + Object.keys(flags).map(function (k) { var n = NAMES[k] || [k, k]; return '<span class="mtc-chip' + (flags[k] ? ' yes' : '') + '">' + (flags[k] ? '✓ ' : '○ ') + esc(T(n[0], n[1])) + '</span>'; }).join('') + '</div>';
    if (f.strengths && f.strengths.length) h += '<h3>' + esc(T('What works', 'Yang sudah bagus')) + '</h3><ul>' + f.strengths.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    if (f.improvements && f.improvements.length) h += '<h3>' + esc(T('What to change', 'Yang perlu diubah')) + '</h3><ul>' + f.improvements.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    if (f.rewrite) h += '<h3>' + esc(T('One way to say it', 'Salah satu cara menyampaikannya')) + '</h3><p class="mtc-rw">' + esc(f.rewrite) + '</p>';
    return h;
  }

  function build() {
    if (veil) return; css();
    veil = document.createElement('div'); veil.className = 'mtc-veil';
    veil.innerHTML = '<div class="mtc" role="dialog" aria-modal="true" aria-labelledby="mtcT">' +
      '<div class="mtc-head"><h2 id="mtcT">' + bi('span', '', 'AI coach', 'Pelatih AI') + '<span class="mtc-beta">beta</span></h2><button type="button" class="mtc-x" data-close aria-label="Close">×</button></div>' +
      bi('p', '', 'A second opinion on one answer or one CV bullet, written by an AI model. It works beside your rubric scores, not instead of them.', 'Pendapat kedua untuk satu jawaban atau satu butir CV, ditulis oleh model AI. Pelatih ini mendampingi skor rubrikmu, bukan menggantikannya.') +
      '<div class="mtc-tabs" role="tablist">' + bi('button', '', 'Interview answer', 'Jawaban wawancara', ' type="button" role="tab" data-kind="interview" aria-selected="true"') + bi('button', '', 'CV bullet', 'Butir CV', ' type="button" role="tab" data-kind="cv" aria-selected="false"') + '</div>' +
      '<form novalidate><div class="mtc-q">' + bi('label', '', 'The question', 'Pertanyaannya', ' for="mtcQ"') + '<input type="text" id="mtcQ" maxlength="300" autocomplete="off"></div>' +
      '<label for="mtcA" id="mtcAL"></label><textarea id="mtcA"></textarea>' +
      '<div class="mtc-meta"><span id="mtcCount"></span><span id="mtcLeft"></span></div>' +
      bi('button', 'mtc-go', 'Get feedback', 'Minta umpan balik', ' type="submit"') +
      '<div class="mtc-err" role="alert" aria-live="polite"></div></form>' +
      '<div class="mtc-out" hidden aria-live="polite"></div>' +
      bi('p', 'mtc-fine', 'AI-generated and sometimes wrong: check it against what really happened. Your text is sent to the model for this one review and is not stored on our servers.', 'Dibuat oleh AI dan kadang keliru: cocokkan dengan kejadian yang sebenarnya. Teksmu dikirim ke model hanya untuk ulasan ini dan tidak disimpan di server kami.') +
      '</div>';
    document.body.appendChild(veil);
    var form = veil.querySelector('form'), ta = veil.querySelector('#mtcA'), err = veil.querySelector('.mtc-err'), go = veil.querySelector('.mtc-go'), out = veil.querySelector('.mtc-out');
    veil.addEventListener('click', function (e) { if (e.target === veil || e.target.closest('[data-close]')) close(); var t = e.target.closest('[data-kind]'); if (t) setKind(t.getAttribute('data-kind')); });
    veil.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    ta.addEventListener('input', function () { err.textContent = ''; count(); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var text = ta.value.trim(), lim = LIMITS[kind], q = veil.querySelector('#mtcQ').value.trim();
      if (text.length < lim[0]) { err.textContent = kind === 'cv' ? T('Write the whole bullet first.', 'Tulis dulu butirnya secara lengkap.') : T('Write a fuller answer first: a few sentences at least.', 'Tulis dulu jawaban yang lebih lengkap: setidaknya beberapa kalimat.'); ta.focus(); return; }
      go.disabled = true; var label = go.textContent; go.textContent = T('Reading your text…', 'Membaca teksmu…'); err.textContent = '';
      fetch('/api/coach', { method: 'POST', credentials: 'same-origin', headers: { 'content-type': 'application/json', accept: 'application/json' }, body: JSON.stringify({ kind: kind, question: q, text: text, lang: isId() ? 'id' : 'en' }) })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { status: r.status, j: j }; }); })
        .then(function (r) {
          go.disabled = false; go.textContent = label;
          if (r.status === 200 && r.j.feedback) {
            out.innerHTML = feedbackHtml(r.j.feedback); out.hidden = false;
            if (status && r.j.usage) status.remaining = r.j.usage.remaining; left();
            if (kind === 'interview' && q) remember(q, r.j.feedback);
            if (onResult) try { onResult(q, r.j.feedback); } catch (e2) {}
            return;
          }
          err.textContent = r.status === 401 ? T('Sign in again to use the coach.', 'Masuk lagi untuk memakai pelatih.')
            : r.status === 429 && r.j.scope === 'member' ? T('You have used today\'s reviews. They come back tomorrow.', 'Jatah ulasanmu hari ini sudah habis. Besok tersedia lagi.')
            : r.status === 429 ? T('The coach has reached its limit for today. Your rubric scores still work; try again tomorrow.', 'Pelatih sudah mencapai batasnya hari ini. Skor rubrikmu tetap berjalan; coba lagi besok.')
            : r.status === 403 ? T('The coach is not open to members yet.', 'Pelatih belum dibuka untuk anggota.')
            : r.status === 400 ? T('That text is too short or too long for one review.', 'Teks itu terlalu pendek atau terlalu panjang untuk satu ulasan.')
            : T('The coach could not answer just now. Your rubric scores still work; try again later.', 'Pelatih belum bisa menjawab saat ini. Skor rubrikmu tetap berjalan; coba lagi nanti.');
        }, function () { go.disabled = false; go.textContent = label; err.textContent = T('We could not reach the server. Please try again.', 'Server belum bisa dijangkau. Coba lagi.'); });
    });
  }
  function count() { var ta = veil.querySelector('#mtcA'), lim = LIMITS[kind]; veil.querySelector('#mtcCount').textContent = ta.value.trim().length + ' / ' + lim[1]; ta.maxLength = lim[1]; }
  function left() { veil.querySelector('#mtcLeft').textContent = status && typeof status.remaining === 'number' ? T(status.remaining + ' of ' + status.per_member + ' reviews left today', 'Sisa ' + status.remaining + ' dari ' + status.per_member + ' ulasan hari ini') : ''; }
  function setKind(k) {
    kind = k === 'cv' ? 'cv' : 'interview';
    [].forEach.call(veil.querySelectorAll('[data-kind]'), function (b) { b.setAttribute('aria-selected', b.getAttribute('data-kind') === kind ? 'true' : 'false'); });
    veil.querySelector('.mtc-q').hidden = kind === 'cv';
    var l = veil.querySelector('#mtcAL'); l.setAttribute('data-en', kind === 'cv' ? 'Your CV bullet' : 'Your answer'); l.setAttribute('data-id', kind === 'cv' ? 'Butir CV-mu' : 'Jawabanmu'); l.textContent = T(l.getAttribute('data-en'), l.getAttribute('data-id'));
    veil.querySelector('.mtc-out').hidden = true; veil.querySelector('.mtc-err').textContent = ''; count();
  }

  function open(o) {
    o = o || {};
    return getStatus().then(function (st) {
      if (!st.available) return false;
      build(); lastFocus = document.activeElement; onResult = o.onResult || null;
      [].forEach.call(veil.querySelectorAll('[data-en]'), function (el) { if (!el.children.length) el.textContent = T(el.getAttribute('data-en'), el.getAttribute('data-id')); });
      veil.querySelector('#mtcQ').value = o.question || ''; veil.querySelector('#mtcA').value = o.text || '';
      setKind(o.kind || 'interview'); left();
      veil.classList.add('on');
      setTimeout(function () { (o.text ? veil.querySelector('.mtc-go') : (kind === 'cv' || o.question ? veil.querySelector('#mtcA') : veil.querySelector('#mtcQ'))).focus(); }, 30);
      return true;
    });
  }
  function close() { if (!veil) return; veil.classList.remove('on'); if (lastFocus && lastFocus.focus) try { lastFocus.focus(); } catch (e) {} }

  /* The Rope's report: one row per answered question, with the last review if there is one */
  function attachDebrief(container, answers, lang) {
    if (!container || !answers || !answers.length) return;
    getStatus().then(function (st) {
      if (!st.available || container.querySelector('.mtc-sec')) return;
      var usable = answers.filter(function (x) { return x && x.q && x.a && x.a.trim().length >= LIMITS.interview[0]; }).slice(0, 12);
      if (!usable.length) return;
      css();
      var sec = document.createElement('section'); sec.className = 'mtc-sec';
      sec.innerHTML = '<h3>' + bi('span', '', 'AI coach', 'Pelatih AI') + '<span class="mtc-beta">beta</span></h3>' +
        bi('p', '', 'Ask an AI model for a second opinion on any answer below. Your scores above come from the rubric on this device and do not change.', 'Minta pendapat kedua dari model AI untuk jawaban mana pun di bawah. Skor di atas berasal dari rubrik di perangkat ini dan tidak berubah.');
      var mem = saved();
      usable.forEach(function (x) {
        var row = document.createElement('div'); row.className = 'mtc-row';
        var prev = mem[keyOf(x.q)];
        row.innerHTML = '<span>' + esc(x.q.length > 110 ? x.q.slice(0, 108) + '…' : x.q) + '<small>' + (prev ? esc(T('Last review ', 'Ulasan terakhir ') + String(prev.at).slice(0, 10)) : '') + '</small></span>' + bi('button', '', 'Review this answer', 'Ulas jawaban ini', ' type="button"');
        row.querySelector('button').addEventListener('click', function () {
          open({ kind: 'interview', question: x.q, text: x.a.slice(0, LIMITS.interview[1]), onResult: function () { row.querySelector('small').textContent = T('Last review ', 'Ulasan terakhir ') + new Date().toISOString().slice(0, 10); } });
        });
        sec.appendChild(row);
      });
      container.appendChild(sec);
    });
  }

  /* any [data-coach-open] control appears only for a visitor who can use the coach */
  function wire() {
    var els = [].slice.call(document.querySelectorAll('[data-coach-open]'));
    if (!els.length) return;
    getStatus().then(function (st) { if (!st.available) return; els.forEach(function (el) { el.hidden = false; el.addEventListener('click', function (e) { e.preventDefault(); open({ kind: el.getAttribute('data-coach-open') || 'interview' }); }); }); });
  }

  window.MT_COACH = { open: open, close: close, attachDebrief: attachDebrief, status: getStatus };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire); else wire();
})();
