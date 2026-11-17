/* Metanoia Labs: two extras for the lesson products, loaded by js/lms-player.js only when one applies.
 *
 * 1. Sample lesson (a guest on /products/<product>/?sample=1). The player opens the first lesson and
 *    keeps the rest closed; this file adds the bar that says so and the prompt a closed lesson shows,
 *    both leading to a free account. Progress made in the sample stays in the browser and joins the
 *    account once it exists.
 * 2. Certificate of completion (a signed-in member with every core lesson done). A button asks
 *    /api/certificates for the certificate; the server checks the synced progress itself, then the
 *    member lands on /certificate?c=<id>, a page anyone with the link can verify.
 */
(function () {
  'use strict';
  if (window.MT_LMS_EXTRAS) return;
  var NAMES = { 'the-map': 'The Map', 'the-pack': 'The Pack', 'the-rope': 'The Rope', 'the-route': 'The Route' };
  var isId = function () { return (document.documentElement.lang || 'en').toLowerCase().indexOf('id') === 0; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var bi = function (tag, cls, en, id, attrs) { return '<' + tag + (cls ? ' class="' + cls + '"' : '') + (attrs || '') + ' data-en="' + esc(en) + '" data-id="' + esc(id) + '">' + esc(isId() ? id : en) + '</' + tag + '>'; };
  var state = {}, cssDone = false;

  function css() {
    if (cssDone) return; cssDone = true;
    var st = document.createElement('style');
    st.textContent =
      '.lmx-bar{position:fixed;left:50%;transform:translateX(-50%);top:66px;z-index:1300;display:flex;align-items:center;gap:14px;max-width:min(760px,calc(100vw - 24px));padding:10px 12px 10px 18px;border-radius:999px;border:1px solid rgba(201,168,76,.55);background:rgba(8,13,22,.96);color:#fff;font-size:13.5px;line-height:1.35;box-shadow:0 12px 34px rgba(0,0,0,.45)}' +
      '.lmx-bar b{color:#E9D28A;font-weight:700}' +
      '.lmx-btn{flex:none;display:inline-flex;align-items:center;min-height:40px;padding:0 16px;border-radius:999px;border:0;background:#C9A84C;color:#14100A;font:700 13px/1 inherit;text-decoration:none;cursor:pointer;white-space:nowrap}' +
      '.lmx-btn.ghost{background:transparent;color:#E9D28A;border:1px solid rgba(201,168,76,.5)}' +
      '.lmx-btn:focus-visible,.lmx-x:focus-visible{outline:2px solid #fff;outline-offset:2px}' +
      '.lmx-short{display:none}' +
      /* phones: one slim strip under the top bar, clear of the lesson controls at the bottom */
      '@media (max-width:768px){.lmx-bar{top:64px;bottom:auto;left:10px;right:10px;transform:none;max-width:none;border-radius:14px;gap:10px;padding:6px 6px 6px 12px;font-size:12.5px;justify-content:space-between}.lmx-long{display:none}.lmx-short{display:inline}.lmx-bar .lmx-btn{min-height:40px;padding:0 12px}}' +
      '.lmx-veil{position:fixed;inset:0;z-index:100060;display:none;align-items:center;justify-content:center;padding:16px;background:rgba(3,6,12,.74)}.lmx-veil.on{display:flex}' +
      '.lmx-card{width:100%;max-width:420px;border-radius:16px;border:1px solid rgba(201,168,76,.4);background:#0B111B;color:#fff;padding:24px;text-align:center;font-size:14.5px;line-height:1.5}' +
      '.lmx-card h2{margin:0 0 8px;font-size:21px;line-height:1.2;letter-spacing:0;text-transform:none}.lmx-card p{margin:0 0 18px;color:rgba(255,255,255,.76)}' +
      '.lmx-card .lmx-row{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}.lmx-card .lmx-btn{min-height:44px}' +
      '.lmx-x{display:block;margin:14px auto 0;background:none;border:0;color:rgba(255,255,255,.7);font:inherit;font-size:13px;cursor:pointer;min-height:24px;text-decoration:underline}' +
      '.lmx-cert{position:fixed;left:20px;bottom:20px;z-index:90;display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 18px;border-radius:999px;border:0;background:#C9A84C;color:#14100A;font:700 13.5px/1 inherit;cursor:pointer;box-shadow:0 10px 28px rgba(0,0,0,.4)}' +
      '.lmx-cert svg{width:18px;height:18px}.lmx-cert[disabled]{opacity:.7;cursor:default}' +
      '.lmx-note{position:fixed;left:20px;bottom:72px;z-index:90;max-width:300px;padding:10px 14px;border-radius:12px;background:rgba(8,13,22,.96);border:1px solid rgba(201,168,76,.45);color:#fff;font-size:13px;line-height:1.4}' +
      '@media (max-width:768px){.lmx-cert{left:12px;bottom:76px}.lmx-note{left:12px;bottom:128px}}' +
      '@media print{.lmx-bar,.lmx-cert,.lmx-note,.lmx-veil{display:none!important}}';
    document.head.appendChild(st);
  }

  var join = function () { return '/register?redirect=' + encodeURIComponent('/products/' + state.slug + '/'); };
  var signIn = function () { return '/login?redirect=' + encodeURIComponent('/products/' + state.slug + '/'); };

  /* ── sample lesson ── */
  function sampleBar() {
    if (document.querySelector('.lmx-bar')) return;
    css();
    var n = state.lessons, name = NAMES[state.slug] || '';
    var bar = document.createElement('div'); bar.className = 'lmx-bar'; bar.setAttribute('role', 'status');
    bar.innerHTML = '<span><b>' + bi('span', '', 'Sample lesson.', 'Pelajaran contoh.') + '</b> ' +
      bi('span', 'lmx-long', 'You are reading the first lesson of ' + name + '. A free account opens all ' + n + ' and keeps your progress.', 'Kamu sedang membaca pelajaran pertama ' + name + '. Dengan akun gratis, ke-' + n + ' pelajarannya terbuka dan progresmu tersimpan.') +
      bi('span', 'lmx-short', 'A free account opens all ' + n + '.', 'Akun gratis membuka ke-' + n + ' pelajaran.') + '</span>' +
      bi('a', 'lmx-btn', 'Create a free account', 'Buat akun gratis', ' href="' + join() + '"');
    document.body.appendChild(bar);
    /* remembered in this browser only, so the player can report a sample reader who comes back as a member */
    try { localStorage.setItem('mt-sample-seen', state.slug); } catch (e) {}
    /* straight into the lesson: that is what the visitor came for */
    if (!state.opened && window.MT_LMS_PLAYER && window.MT_LMS_PLAYER.open) { state.opened = true; setTimeout(function () { try { window.MT_LMS_PLAYER.open(state.first); } catch (e) {} }, 350); }
  }
  function prompt() {
    css();
    var v = document.querySelector('.lmx-veil');
    if (!v) {
      v = document.createElement('div'); v.className = 'lmx-veil';
      v.innerHTML = '<div class="lmx-card" role="dialog" aria-modal="true" aria-labelledby="lmxT">' +
        bi('h2', '', 'The rest opens with a free account', 'Sisanya terbuka dengan akun gratis', ' id="lmxT"') +
        bi('p', '', 'The sample is the first lesson. Create a free account to open every lesson, save your progress and pick up on any device.', 'Contohnya adalah pelajaran pertama. Buat akun gratis untuk membuka semua pelajaran, menyimpan progres, dan melanjutkan di perangkat mana pun.') +
        '<div class="lmx-row">' + bi('a', 'lmx-btn', 'Create a free account', 'Buat akun gratis', ' href="' + join() + '"') + bi('a', 'lmx-btn ghost', 'Sign in', 'Masuk', ' href="' + signIn() + '"') + '</div>' +
        bi('button', 'lmx-x', 'Keep reading the sample', 'Lanjut membaca contoh', ' type="button"') + '</div>';
      document.body.appendChild(v);
      v.addEventListener('click', function (e) { if (e.target === v || e.target.closest('.lmx-x')) v.classList.remove('on'); });
      v.addEventListener('keydown', function (e) { if (e.key === 'Escape') v.classList.remove('on'); });
    }
    v.classList.add('on');
    var first = v.querySelector('a'); if (first) first.focus();
  }

  /* ── certificate ── */
  function note(en, id) {
    var n = document.querySelector('.lmx-note'); if (!n) { n = document.createElement('div'); n.className = 'lmx-note'; n.setAttribute('role', 'status'); document.body.appendChild(n); }
    n.textContent = isId() ? id : en; clearTimeout(note.t); note.t = setTimeout(function () { if (n.parentNode) n.parentNode.removeChild(n); }, 7000);
  }
  function certButton() {
    if (document.querySelector('.lmx-cert')) return;
    css();
    var b = document.createElement('button'); b.type = 'button'; b.className = 'lmx-cert';
    b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="M9 14.5 7.5 22l4.5-2.5 4.5 2.5-1.5-7.5"/></svg>' + bi('span', '', 'Get your certificate', 'Ambil sertifikatmu');
    document.body.appendChild(b);
    b.addEventListener('click', function () {
      b.disabled = true;
      /* the server reads the synced progress, so send what this browser holds first */
      var up = window.MT_PROGRESS && window.MT_PROGRESS.push ? Promise.resolve(window.MT_PROGRESS.push()).catch(function () {}) : Promise.resolve();
      up.then(function () {
        return fetch('/api/certificates', { method: 'POST', credentials: 'same-origin', headers: { 'content-type': 'application/json', accept: 'application/json' }, body: JSON.stringify({ product: state.slug }) });
      }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { status: r.status, j: j }; }); }).then(function (r) {
        b.disabled = false;
        if (r.status === 201 && r.j.certificate) { location.href = '/certificate?c=' + encodeURIComponent(r.j.certificate.id); return; }
        if (r.status === 401) return note('Sign in again to get your certificate.', 'Masuk lagi untuk mengambil sertifikatmu.');
        if (r.status === 409) return note('Your progress is still reaching our server (' + r.j.done + ' of ' + r.j.total + ' lessons so far). Try again in a moment.', 'Progresmu masih dalam perjalanan ke server kami (baru ' + r.j.done + ' dari ' + r.j.total + ' pelajaran). Coba lagi sebentar lagi.');
        note('We could not issue the certificate just now. Please try again later.', 'Sertifikat belum bisa kami terbitkan saat ini. Coba lagi nanti.');
      }).catch(function () { b.disabled = false; note('We could not reach the server. Please try again.', 'Server belum bisa dijangkau. Coba lagi.'); });
    });
  }

  /* a click on any "create a free account" link of the sample bar or its dialog */
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('.lmx-bar a, .lmx-veil a');
    if (t && /\/register\?/.test(t.getAttribute('href') || '')) { try { window.MT_LMS_PLAYER.track('lms.sample.join_clicked'); if (window.MT && window.MT.flush) window.MT.flush(true); } catch (err) {} }
  }, true);

  window.MT_LMS_EXTRAS = {
    sync: function (o) { for (var k in o) state[k] = o[k]; if (o.sample) sampleBar(); else if (o.complete) certButton(); },
    prompt: prompt
  };
})();
