/* Metanoia Labs: the Feedback button.
 *
 * One small launcher (bottom right) and one dialog: what is this about, an optional 1 to 5
 * rating, a message, and for guests an optional address to reply to. It posts to
 * /api/feedback (functions/api/feedback.js); the team reads it in the admin page.
 * Nothing is e-mailed and nothing is sent until the visitor presses Send.
 *
 *   <script src="/js/mt-feedback.js" defer></script>             launcher + dialog
 *   <script src="/js/mt-feedback.js" data-launcher="off" defer>   dialog only: open it with MT_FEEDBACK.open()
 *   <button type="button" data-feedback-open>Send feedback</button>   any element with this attribute opens it
 *
 * Bilingual through the page's own data-en / data-id switch; follows html[lang].
 */
(function () {
  'use strict';
  if (window.MT_FEEDBACK) return;
  var script = document.currentScript;
  var launcherOn = !(script && script.getAttribute('data-launcher') === 'off');
  var isId = function () { return (document.documentElement.lang || 'en').toLowerCase().indexOf('id') === 0; };
  var T = function (en, id) { return isId() ? id : en; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var bi = function (en, id) { return 'data-en="' + esc(en) + '" data-id="' + esc(id) + '"'; };
  var txt = function (en, id) { return '<span ' + bi(en, id) + '>' + esc(T(en, id)) + '</span>'; };

  var KINDS = [
    ['bug', 'Something is broken', 'Ada yang rusak'],
    ['idea', 'An idea', 'Ada usul'],
    ['content', 'About the content', 'Soal materi'],
    ['praise', 'Something I like', 'Yang saya suka'],
    ['other', 'Something else', 'Lainnya']
  ];

  var CSS = '' +
    '.mtfb-launch{position:fixed;right:20px;bottom:20px;z-index:90;display:inline-flex;align-items:center;gap:8px;min-height:40px;padding:0 16px;border-radius:999px;border:1px solid rgba(201,168,76,.45);background:rgba(10,16,26,.92);color:#E9D28A;font:600 13px/1 inherit;letter-spacing:.02em;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.35);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);transition:transform .15s ease,border-color .15s ease}' +
    '.mtfb-launch:hover{transform:translateY(-1px);border-color:rgba(201,168,76,.85)}' +
    '.mtfb-launch:focus-visible,.mtfb button:focus-visible,.mtfb textarea:focus-visible,.mtfb input:focus-visible{outline:2px solid #C9A84C;outline-offset:2px}' +
    '.mtfb-launch svg{width:16px;height:16px;flex:none}' +
    '[data-theme="light"] .mtfb-launch{background:rgba(255,255,255,.96);color:#7A5C12;border-color:rgba(122,92,18,.4);box-shadow:0 8px 24px rgba(27,36,52,.18)}' +
    '@media (max-width:768px){.mtfb-launch{right:12px;bottom:76px;min-height:44px;padding:0 14px}}' +
    '@media print{.mtfb-launch,.mtfb-veil{display:none!important}}' +
    '.mtfb-veil{position:fixed;inset:0;z-index:100050;display:none;align-items:center;justify-content:center;padding:16px;background:rgba(3,6,12,.72)}' +
    '.mtfb-veil.on{display:flex}' +
    '.mtfb{width:100%;max-width:460px;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px);overflow:auto;border-radius:16px;border:1px solid rgba(201,168,76,.35);background:#0B111B;color:#fff;padding:22px 22px 18px;box-shadow:0 24px 64px rgba(0,0,0,.5);font-size:14px;line-height:1.5}' +
    '[data-theme="light"] .mtfb{background:#fff;color:#1B2434;border-color:rgba(122,92,18,.3)}' +
    '.mtfb h2{margin:0 0 4px;font-size:20px;line-height:1.2;letter-spacing:0;text-transform:none}' +
    '.mtfb p{margin:0 0 14px;color:rgba(255,255,255,.72)}[data-theme="light"] .mtfb p{color:rgba(27,36,52,.72)}' +
    '.mtfb-head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}' +
    '.mtfb-x{flex:none;width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.2);background:transparent;color:inherit;font-size:18px;line-height:1;cursor:pointer}' +
    '[data-theme="light"] .mtfb-x{border-color:rgba(27,36,52,.25)}' +
    '.mtfb fieldset{border:0;padding:0;margin:0 0 14px;min-width:0}' +
    '.mtfb legend,.mtfb label.mtfb-l{display:block;padding:0;margin:0 0 6px;font-weight:600;font-size:13px}' +
    '.mtfb-kinds{display:flex;flex-wrap:wrap;gap:8px}' +
    '.mtfb-kinds label{position:relative;cursor:pointer}' +
    '.mtfb-kinds input{position:absolute;opacity:0;inset:0;width:100%;height:100%;margin:0;cursor:pointer}' +
    '.mtfb-kinds span{display:inline-flex;align-items:center;min-height:36px;padding:0 12px;border-radius:999px;border:1px solid rgba(255,255,255,.22);font-size:13px}' +
    '[data-theme="light"] .mtfb-kinds span{border-color:rgba(27,36,52,.28)}' +
    '.mtfb-kinds input:checked+span{background:#C9A84C;border-color:#C9A84C;color:#14100A;font-weight:600}' +
    '.mtfb-kinds input:focus-visible+span{outline:2px solid #C9A84C;outline-offset:2px}' +
    '.mtfb-stars{display:flex;gap:4px}' +
    '.mtfb-stars button{width:40px;height:40px;border:0;background:transparent;color:rgba(255,255,255,.35);font-size:26px;line-height:1;cursor:pointer;padding:0}' +
    '[data-theme="light"] .mtfb-stars button{color:rgba(27,36,52,.3)}' +
    '.mtfb-stars button.on{color:#C9A84C}' +
    '.mtfb textarea,.mtfb input[type=email]{width:100%;box-sizing:border-box;border-radius:10px;border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.04);color:inherit;font:inherit;padding:10px 12px}' +
    '[data-theme="light"] .mtfb textarea,[data-theme="light"] .mtfb input[type=email]{border-color:rgba(27,36,52,.28);background:#fff}' +
    '.mtfb textarea{min-height:110px;resize:vertical}' +
    '.mtfb-hint{font-size:12px;color:rgba(255,255,255,.62);margin:6px 0 0}[data-theme="light"] .mtfb-hint{color:rgba(27,36,52,.66)}' +
    '.mtfb-err{min-height:18px;margin:0 0 10px;color:#FF9B8A;font-size:13px}[data-theme="light"] .mtfb-err{color:#B3261E}' +
    '.mtfb-send{width:100%;min-height:44px;border:0;border-radius:999px;background:#C9A84C;color:#14100A;font:700 14px/1 inherit;cursor:pointer}' +
    '.mtfb-send[disabled]{opacity:.6;cursor:default}' +
    '.mtfb-hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}' +
    '.mtfb-done{text-align:center;padding:18px 0 8px}.mtfb-done .mtfb-tick{width:52px;height:52px;margin:0 auto 12px;border-radius:50%;background:rgba(201,168,76,.16);color:#C9A84C;font-size:26px;line-height:52px}';

  var veil = null, lastFocus = null, rating = 0;

  function build() {
    if (veil) return;
    var st = document.createElement('style'); st.id = 'mtfbCss'; st.textContent = CSS; document.head.appendChild(st);
    veil = document.createElement('div'); veil.className = 'mtfb-veil';
    var kinds = KINDS.map(function (k, i) {
      return '<label><input type="radio" name="mtfb-kind" value="' + k[0] + '"' + (i === 0 ? ' checked' : '') + '><span ' + bi(k[1], k[2]) + '>' + esc(T(k[1], k[2])) + '</span></label>';
    }).join('');
    var stars = [1, 2, 3, 4, 5].map(function (n) {
      return '<button type="button" data-star="' + n + '" aria-pressed="false" aria-label="' + n + ' / 5">★</button>';
    }).join('');
    veil.innerHTML =
      '<div class="mtfb" role="dialog" aria-modal="true" aria-labelledby="mtfbTitle">' +
        '<div class="mtfb-head"><div><h2 id="mtfbTitle" ' + bi('Tell us what you think', 'Sampaikan pendapatmu') + '>' + esc(T('Tell us what you think', 'Sampaikan pendapatmu')) + '</h2>' +
        '<p ' + bi('Metanoia Labs is in beta. What you tell us here goes straight to the team.', 'Metanoia Labs masih dalam masa beta. Masukanmu di sini langsung sampai ke tim.') + '>' + esc(T('Metanoia Labs is in beta. What you tell us here goes straight to the team.', 'Metanoia Labs masih dalam masa beta. Masukanmu di sini langsung sampai ke tim.')) + '</p></div>' +
        '<button type="button" class="mtfb-x" data-close aria-label="Close">×</button></div>' +
        '<form novalidate>' +
          '<fieldset><legend ' + bi('What is this about?', 'Ini tentang apa?') + '>' + esc(T('What is this about?', 'Ini tentang apa?')) + '</legend><div class="mtfb-kinds">' + kinds + '</div></fieldset>' +
          '<fieldset><legend ' + bi('How is your experience so far? (optional)', 'Bagaimana pengalamanmu sejauh ini? (opsional)') + '>' + esc(T('How is your experience so far? (optional)', 'Bagaimana pengalamanmu sejauh ini? (opsional)')) + '</legend><div class="mtfb-stars" role="group">' + stars + '</div></fieldset>' +
          '<label class="mtfb-l" for="mtfbMsg" ' + bi('Your message', 'Pesanmu') + '>' + esc(T('Your message', 'Pesanmu')) + '</label>' +
          '<textarea id="mtfbMsg" maxlength="2000" required data-ph-en="What happened, or what would make this better?" data-ph-id="Apa yang terjadi, atau apa yang bisa membuatnya lebih baik?" placeholder="' + esc(T('What happened, or what would make this better?', 'Apa yang terjadi, atau apa yang bisa membuatnya lebih baik?')) + '"></textarea>' +
          '<div class="mtfb-contact" hidden style="margin-top:12px"><label class="mtfb-l" for="mtfbContact" ' + bi('Your e-mail (optional, if you want a reply)', 'E-mail kamu (opsional, kalau ingin dibalas)') + '>' + esc(T('Your e-mail (optional, if you want a reply)', 'E-mail kamu (opsional, kalau ingin dibalas)')) + '</label>' +
          '<input type="email" id="mtfbContact" autocomplete="email" maxlength="254"></div>' +
          '<div class="mtfb-hp" aria-hidden="true"><label>Leave this empty <input type="text" name="_gotcha" tabindex="-1" autocomplete="off"></label></div>' +
          '<p class="mtfb-hint" ' + bi('We store your message with the page you sent it from. No tracking is added.', 'Kami menyimpan pesanmu bersama halaman tempat kamu mengirimnya. Tidak ada pelacakan tambahan.') + '>' + esc(T('We store your message with the page you sent it from. No tracking is added.', 'Kami menyimpan pesanmu bersama halaman tempat kamu mengirimnya. Tidak ada pelacakan tambahan.')) + '</p>' +
          '<div class="mtfb-err" role="alert" aria-live="polite"></div>' +
          '<button type="submit" class="mtfb-send" ' + bi('Send feedback', 'Kirim masukan') + '>' + esc(T('Send feedback', 'Kirim masukan')) + '</button>' +
        '</form>' +
        '<div class="mtfb-done" hidden><div class="mtfb-tick" aria-hidden="true">✓</div><h2 ' + bi('Thank you. We have it.', 'Terima kasih. Sudah kami terima.') + '>' + esc(T('Thank you. We have it.', 'Terima kasih. Sudah kami terima.')) + '</h2>' +
        '<p ' + bi('The team reads every message. If you left an address, we may write back.', 'Tim membaca setiap pesan. Kalau kamu mencantumkan alamat, kami mungkin akan membalas.') + '>' + esc(T('The team reads every message. If you left an address, we may write back.', 'Tim membaca setiap pesan. Kalau kamu mencantumkan alamat, kami mungkin akan membalas.')) + '</p>' +
        '<button type="button" class="mtfb-send" data-close ' + bi('Close', 'Tutup') + '>' + esc(T('Close', 'Tutup')) + '</button></div>' +
      '</div>';
    document.body.appendChild(veil);

    var form = veil.querySelector('form'), err = veil.querySelector('.mtfb-err'), send = form.querySelector('.mtfb-send');
    veil.addEventListener('click', function (e) { if (e.target === veil || e.target.closest('[data-close]')) close(); });
    veil.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { close(); return; }
      if (e.key !== 'Tab') return;
      var f = [].slice.call(veil.querySelectorAll('button,input:not([tabindex="-1"]),textarea')).filter(function (x) { return x.offsetParent !== null; });
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
    veil.querySelector('.mtfb-stars').addEventListener('click', function (e) {
      var b = e.target.closest('[data-star]'); if (!b) return;
      var n = +b.getAttribute('data-star'); rating = rating === n ? 0 : n;
      [].forEach.call(veil.querySelectorAll('[data-star]'), function (s) { var on = +s.getAttribute('data-star') <= rating; s.classList.toggle('on', on); s.setAttribute('aria-pressed', on ? 'true' : 'false'); });
    });
    form.addEventListener('input', function () { err.textContent = ''; });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('#mtfbMsg').value.trim(), contact = form.querySelector('#mtfbContact').value.trim();
      err.textContent = '';
      if (msg.length < 5) { err.textContent = T('Please tell us a little more.', 'Ceritakan sedikit lebih banyak.'); form.querySelector('#mtfbMsg').focus(); return; }
      if (contact && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contact)) { err.textContent = T('That e-mail address does not look right.', 'Alamat e-mail itu tampaknya belum benar.'); form.querySelector('#mtfbContact').focus(); return; }
      send.disabled = true; var label = send.textContent; send.textContent = T('Sending…', 'Mengirim…');
      var body = { kind: (form.querySelector('input[name="mtfb-kind"]:checked') || {}).value || 'other', message: msg, page: location.pathname + location.hash.slice(0, 80), locale: isId() ? 'id' : 'en', _gotcha: form.querySelector('input[name="_gotcha"]').value };
      if (rating) body.rating = rating;
      if (contact) body.contact = contact;
      var needsCheck = !veil.querySelector('.mtfb-contact').hidden && window.MT_TS && window.MT_TS.enabled;
      (needsCheck ? window.MT_TS.token(form) : Promise.resolve(null)).then(function (tk) {
        if (tk) body.turnstile = tk;
        return post(body);
      }).then(function (r) {
        send.disabled = false; send.textContent = label;
        if (r.ok) { form.hidden = true; veil.querySelector('.mtfb-done').hidden = false; veil.querySelector('.mtfb-done [data-close]').focus(); form.reset(); rating = 0; [].forEach.call(veil.querySelectorAll('[data-star]'), function (s) { s.classList.remove('on'); s.setAttribute('aria-pressed', 'false'); }); return; }
        err.textContent = r.status === 429 ? T('That is a lot of feedback in one hour. Please try again later.', 'Masukanmu sudah banyak dalam satu jam ini. Coba lagi nanti.')
          : r.status === 0 || r.status === 404 || r.status === 503 || r.offline ? T('We could not send it from here. Please write to hello@metanoialabs.net.', 'Kami belum bisa mengirimnya dari sini. Silakan tulis ke hello@metanoialabs.net.')
          : T('We could not send that. Please check the message and try again.', 'Pesan belum terkirim. Periksa lagi lalu coba sekali lagi.');
      });
    });
  }

  function post(body) {
    if (window.MT_API && window.MT_API.post) return window.MT_API.post('/feedback', body);
    return fetch('/api/feedback', { method: 'POST', credentials: 'same-origin', headers: { 'content-type': 'application/json', accept: 'application/json' }, body: JSON.stringify(body) })
      .then(function (r) { var ct = r.headers.get('content-type') || ''; if (ct.indexOf('application/json') < 0) return { status: r.status, ok: false, offline: true }; return r.json().then(function (j) { return { status: r.status, ok: r.ok && j && j.ok !== false, data: j }; }); })
      .catch(function () { return { status: 0, ok: false, offline: true }; });
  }

  function signedIn() {
    try { if (window.MT_AUTH && typeof window.MT_AUTH.user === 'function') return Promise.resolve(window.MT_AUTH.user()).then(function (u) { return !!u; }, function () { return false; }); } catch (e) {}
    return fetch('/api/auth/me', { credentials: 'same-origin', headers: { accept: 'application/json' } }).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) { return !!(j && j.user); }).catch(function () { return false; });
  }

  function open() {
    build();
    lastFocus = document.activeElement;
    veil.querySelector('form').hidden = false; veil.querySelector('.mtfb-done').hidden = true; veil.querySelector('.mtfb-err').textContent = '';
    /* keep the copy in step with the language chosen after the dialog was first built */
    [].forEach.call(veil.querySelectorAll('[data-en]'), function (el) { el.innerHTML = el.getAttribute(isId() ? 'data-id' : 'data-en'); });
    [].forEach.call(veil.querySelectorAll('[data-ph-en]'), function (el) { el.setAttribute('placeholder', el.getAttribute(isId() ? 'data-ph-id' : 'data-ph-en')); });
    veil.classList.add('on');
    signedIn().then(function (yes) { veil.querySelector('.mtfb-contact').hidden = yes; });
    setTimeout(function () { var m = veil.querySelector('#mtfbMsg'); if (m) m.focus(); }, 30);
  }
  function close() {
    if (!veil) return;
    veil.classList.remove('on');
    if (lastFocus && lastFocus.focus) try { lastFocus.focus(); } catch (e) {}
  }

  function mount() {
    document.addEventListener('click', function (e) { var t = e.target.closest && e.target.closest('[data-feedback-open]'); if (t) { e.preventDefault(); open(); } });
    if (!launcherOn) return;
    var st = document.createElement('style'); st.textContent = CSS.split('.mtfb-veil{')[0]; document.head.appendChild(st);
    var b = document.createElement('button'); b.type = 'button'; b.className = 'mtfb-launch'; b.setAttribute('data-feedback-open', '');
    b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/></svg>' + txt('Feedback', 'Masukan');
    document.body.appendChild(b);
  }

  window.MT_FEEDBACK = { open: open, close: close };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
