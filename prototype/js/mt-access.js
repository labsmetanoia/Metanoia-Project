/* Metanoia Labs: access codes (docs/21 N-02).
 *
 * A campus or employer gives its people one code. This file:
 *   - remembers a code that arrives in a link (/register?code=MTN-XXXX-XXXX, also /login) and says so on the page;
 *   - applies a remembered code as soon as the visitor is signed in, whichever way they signed in
 *     (password, e-mail link, Google, LinkedIn all land on a page that loads this file);
 *   - draws the "Access code" box in Settings (MT_ACCESS.mount).
 * The server decides everything: POST /api/access/redeem (functions/api/access).
 */
(function () {
  'use strict';
  if (window.MT_ACCESS) return;
  var KEY = 'mt-pending-code';
  var isId = function () { return (document.documentElement.lang || 'en').toLowerCase().indexOf('id') === 0; };
  var T = function (en, id) { return isId() ? id : en; };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var norm = function (s) { return String(s || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 20); };
  var show = function (c) { c = norm(c); return c.length === 11 ? c.slice(0, 3) + '-' + c.slice(3, 7) + '-' + c.slice(7) : c; };
  var pending = function () { try { return localStorage.getItem(KEY) || ''; } catch (e) { return ''; } };
  var setPending = function (c) { try { if (c) localStorage.setItem(KEY, c); else localStorage.removeItem(KEY); } catch (e) {} };
  var PRODUCTS = { all: ['every product', 'semua produk'], 'the-map': ['The Map', 'The Map'], 'the-pack': ['The Pack', 'The Pack'], 'the-rope': ['The Rope', 'The Rope'], 'the-route': ['The Route', 'The Route'], 'the-compass': ['The Compass', 'The Compass'] };

  function redeem(code) {
    return fetch('/api/access/redeem', { method: 'POST', credentials: 'same-origin', headers: { 'content-type': 'application/json', accept: 'application/json' }, body: JSON.stringify({ code: norm(code) }) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { status: r.status, j: j }; }); }, function () { return { status: 0, j: {} }; });
  }
  function message(r) {
    if ((r.status === 200 || r.status === 201) && r.j.batch) {
      var p = PRODUCTS[r.j.batch.product] || [r.j.batch.product, r.j.batch.product], until = r.j.batch.access_ends_at ? String(r.j.batch.access_ends_at).slice(0, 10) : '';
      return { ok: true, text: r.j.already ? T('This code is already on your account.', 'Kode ini sudah terpasang di akunmu.')
        : T('Code applied: ' + r.j.batch.label + '. It opens ' + p[0] + (until ? ' until ' + until : '') + '.', 'Kode terpasang: ' + r.j.batch.label + '. Kode ini membuka ' + p[1] + (until ? ' sampai ' + until : '') + '.') };
    }
    return { ok: false, text: r.status === 404 ? T('That code is not valid. Check it with whoever gave it to you.', 'Kode itu tidak berlaku. Periksa lagi dengan pihak yang memberikannya.')
      : r.status === 409 ? T('Every seat on that code has been taken.', 'Semua kursi pada kode itu sudah terisi.')
      : r.status === 410 ? T('That code can no longer be used.', 'Kode itu sudah tidak bisa dipakai.')
      : r.status === 429 ? T('Too many attempts. Try again in an hour.', 'Terlalu banyak percobaan. Coba lagi satu jam lagi.')
      : r.status === 401 ? T('Sign in first, then apply the code.', 'Masuk dulu, lalu pasang kodenya.')
      : r.status === 400 ? T('That does not look like a code.', 'Itu tampaknya bukan kode.')
      : T('We could not apply the code just now. Please try again.', 'Kode belum bisa dipasang saat ini. Coba lagi.') };
  }

  function banner(text, ok) {
    var b = document.createElement('div'); b.setAttribute('role', 'status');
    b.style.cssText = 'position:fixed;left:50%;transform:translateX(-50%);top:68px;z-index:1400;max-width:min(560px,calc(100vw - 24px));padding:12px 18px;border-radius:14px;font-size:14px;line-height:1.4;box-shadow:0 12px 34px rgba(0,0,0,.45);background:rgba(8,13,22,.97);color:#fff;border:1px solid ' + (ok ? 'rgba(76,195,138,.7)' : 'rgba(229,72,77,.7)');
    b.textContent = text; document.body.appendChild(b);
    setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 9000);
  }

  /* a code in the link: keep it, and tell the visitor on the sign-up and sign-in pages */
  var fromUrl = norm(new URLSearchParams(location.search).get('code'));
  if (fromUrl.length >= 8) setPending(fromUrl);
  function noteOnAuthPage() {
    var c = pending(), form = document.getElementById('regForm') || document.getElementById('signinView');
    if (!c || !form || document.getElementById('codeNote')) return;
    var n = document.createElement('p'); n.id = 'codeNote'; n.setAttribute('role', 'status');
    n.style.cssText = 'margin:0 0 14px;padding:10px 14px;border-radius:12px;border:1px solid rgba(201,168,76,.5);background:rgba(201,168,76,.08);font-size:13px;line-height:1.45';
    n.setAttribute('data-en', 'Access code ' + show(c) + ' will be applied to your account as soon as you are signed in.');
    n.setAttribute('data-id', 'Kode akses ' + show(c) + ' akan dipasang ke akunmu begitu kamu masuk.');
    n.textContent = T(n.getAttribute('data-en'), n.getAttribute('data-id'));
    form.parentNode.insertBefore(n, form);
  }

  /* signed in with a code waiting: apply it once and say what happened */
  function applyPending() {
    var c = pending(); if (!c) return;
    if (/\/(register|login)(\.html)?$/.test(location.pathname)) return;   /* those pages are on their way somewhere else */
    redeem(c).then(function (r) {
      if (r.status === 401 || r.status === 0 || r.status === 429 || r.status === 503) return;   /* keep it for the next signed-in page */
      setPending('');
      var m = message(r); banner(m.text, m.ok);
      if (m.ok && window.MT_AUTH && MT_AUTH.refresh) try { MT_AUTH.refresh(); } catch (e) {}
    });
  }

  /* Settings → Subscription */
  function mount(box) {
    if (!box || box.__mtAccess) return; box.__mtAccess = true;
    box.innerHTML = '<label class="f-label" for="code-in" data-en="Access code" data-id="Kode akses">' + esc(T('Access code', 'Kode akses')) + '</label>' +
      '<p class="note" style="margin:0 0 8px" data-en="If your campus or employer gave you a code, enter it here." data-id="Kalau kampus atau tempat kerjamu memberimu kode, masukkan di sini.">' + esc(T('If your campus or employer gave you a code, enter it here.', 'Kalau kampus atau tempat kerjamu memberimu kode, masukkan di sini.')) + '</p>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap"><input class="f-input" id="code-in" autocomplete="off" autocapitalize="characters" spellcheck="false" maxlength="24" placeholder="MTN-XXXX-XXXX" style="max-width:240px">' +
      '<button class="btn btn-primary" id="code-btn" type="button" data-en="Apply code" data-id="Pasang kode">' + esc(T('Apply code', 'Pasang kode')) + '</button></div>' +
      '<p class="note" id="code-msg" role="status" aria-live="polite" style="min-height:1.2em"></p><div id="code-list"></div>';
    var input = box.querySelector('#code-in'), btn = box.querySelector('#code-btn'), msg = box.querySelector('#code-msg');
    function list() {
      fetch('/api/access/codes', { credentials: 'same-origin', headers: { accept: 'application/json' } }).then(function (r) { return r.ok ? r.json() : { codes: [] }; }).then(function (j) {
        var cs = (j && j.codes) || [];
        box.querySelector('#code-list').innerHTML = cs.length ? '<ul style="margin:6px 0 0;padding-left:18px;font-size:13px">' + cs.map(function (c) { var p = PRODUCTS[c.product] || [c.product, c.product]; return '<li>' + esc(c.label) + (c.sponsor ? ' · ' + esc(c.sponsor) : '') + ' · ' + esc(T(p[0], p[1])) + (c.access_ends_at ? ' · ' + esc(T('until ', 'sampai ') + String(c.access_ends_at).slice(0, 10)) : '') + '</li>'; }).join('') + '</ul>' : '';
      }).catch(function () {});
    }
    function go() {
      var c = norm(input.value);
      if (c.length < 8) { msg.textContent = T('That does not look like a code.', 'Itu tampaknya bukan kode.'); input.focus(); return; }
      btn.disabled = true; msg.textContent = T('Checking…', 'Memeriksa…');
      redeem(c).then(function (r) { btn.disabled = false; var m = message(r); msg.textContent = m.text; if (m.ok) { input.value = ''; list(); } });
    }
    btn.addEventListener('click', go);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); go(); } });
    list();
  }

  window.MT_ACCESS = { redeem: redeem, mount: mount, pending: pending };
  function start() { noteOnAuthPage(); applyPending(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
