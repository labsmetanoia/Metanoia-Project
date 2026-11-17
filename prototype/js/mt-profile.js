/* Metanoia Labs: the Public profile tab in Settings (docs/14 "Readiness profile").
 *
 * A member switches one public page on or off, chooses what it shows, and gets its link to copy or
 * share. The choices are stored on the account (POST /api/profile); the page itself is /p/<slug>.
 * Fetched by settings.html when the tab is opened.
 *
 *   MT_PROFILE_SETTINGS.mount(element)
 */
(function () {
  'use strict';
  if (window.MT_PROFILE_SETTINGS) return;
  var isId = function () { return (document.documentElement.lang || 'en').toLowerCase().indexOf('id') === 0; };
  var T = function (en, id) { return isId() ? id : en; };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  function call(method, path, body) {
    var init = { method: method, credentials: 'same-origin', headers: { accept: 'application/json' } };
    if (body) { init.headers['content-type'] = 'application/json'; init.body = JSON.stringify(body); }
    return fetch(path, init).then(function (r) {
      if ((r.headers.get('content-type') || '').indexOf('application/json') < 0) return { status: r.status, ok: false, data: null };
      return r.json().then(function (j) { return { status: r.status, ok: r.ok && j && j.ok !== false, data: j }; });
    }).catch(function () { return { status: 0, ok: false, data: null }; });
  }

  function mount(box) {
    if (!box) return;
    var say = function (en, id) { var m = box.querySelector('#pp-msg'); if (m) m.textContent = T(en, id); };
    function draw(d) {
      var p = d.profile, a = d.available || {};
      var band = a.band ? esc(a.band.label) + ', ' + T('level ' + a.band.level + ' of 5', 'tingkat ' + a.band.level + ' dari 5') : T('Not on your account yet. Take the Career Map while signed in and it appears here.', 'Belum ada di akunmu. Kerjakan Career Map saat sudah masuk, lalu hasilnya muncul di sini.');
      var certs = a.certificates ? a.certificates + ' ' + T(a.certificates === 1 ? 'certificate' : 'certificates', 'sertifikat') : T('None yet. A certificate is issued when every core lesson of a course is finished.', 'Belum ada. Sertifikat terbit saat semua pelajaran inti sebuah kursus selesai.');
      var learn = (a.learning || []).length ? a.learning.map(function (x) { return esc(x.name) + ' ' + x.done + '/' + x.total; }).join(' · ') : T('No lesson completed yet.', 'Belum ada pelajaran yang selesai.');
      var row = function (id, on, title, detail) { return '<label class="check-row" style="align-items:flex-start"><input type="checkbox" id="' + id + '"' + (on ? ' checked' : '') + '> <span><b>' + title + '</b><br><span style="opacity:.8">' + detail + '</span></span></label>'; };
      box.innerHTML =
        (p.hidden_by_admin ? '<p class="note" style="color:#F87171">' + T('The team has taken this page down. Write to hello@metanoialabs.net if you think that is a mistake.', 'Tim kami menurunkan halaman ini. Tulis ke hello@metanoialabs.net jika menurutmu itu keliru.') + '</p>' : '') +
        row('pp-on', p.enabled, T('Make my profile public', 'Jadikan profilku publik'), T('Anyone with the link sees your name, ' + esc(a.name || '') + ', and the items ticked below. Nothing else.', 'Siapa pun yang memegang tautannya melihat namamu, ' + esc(a.name || '') + ', dan butir yang dicentang di bawah. Tidak ada yang lain.')) +
        '<p class="f-label" style="margin:1rem 0 .4rem">' + T('What it shows', 'Yang ditampilkan') + '</p>' +
        row('pp-band', p.show_band, T('Career Map band', 'Band Career Map'), band) +
        row('pp-certs', p.show_certificates, T('Certificates of completion', 'Sertifikat penyelesaian'), certs) +
        row('pp-learn', p.show_progress, T('Lessons completed', 'Pelajaran yang diselesaikan'), learn) +
        '<button type="button" class="btn btn-primary" id="pp-save" style="margin-top:.75rem">' + T('Save', 'Simpan') + '</button>' +
        (p.enabled && p.url && !p.hidden_by_admin
          ? '<p class="f-label" style="margin:1.25rem 0 .4rem">' + T('Your link', 'Tautanmu') + '</p>' +
            '<input type="text" class="f-input" id="pp-url" readonly value="' + esc(p.url) + '" style="width:100%">' +
            '<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.6rem"><button type="button" class="btn btn-primary" id="pp-copy">' + T('Copy the link', 'Salin tautan') + '</button>' +
            (navigator.share ? '<button type="button" class="btn btn-secondary" id="pp-share">' + T('Share', 'Bagikan') + '</button>' : '') +
            '<a class="btn btn-secondary" id="pp-open" href="' + esc(p.url.replace(/^https?:\/\/[^/]+/, '')) + '" target="_blank" rel="noopener">' + T('See the page', 'Lihat halamannya') + '</a>' +
            '<button type="button" class="btn btn-secondary" id="pp-reset">' + T('Get a new link', 'Buat tautan baru') + '</button></div>'
          : '') +
        '<p class="note" id="pp-msg" role="status" aria-live="polite" style="min-height:1.4em;margin-top:.75rem"></p>' +
        '<p class="note">' + T('The page is not listed anywhere and search engines are asked not to index it. Everything on it is read from your account, so it always shows what you have really done. Switch it off at any time and the link stops working.', 'Halaman ini tidak didaftarkan di mana pun dan mesin pencari diminta tidak mengindeksnya. Semua isinya dibaca dari akunmu, jadi selalu menampilkan apa yang benar-benar sudah kamu kerjakan. Matikan kapan saja dan tautannya langsung tidak berlaku.') + '</p>';
      var on = function (id, fn) { var el = box.querySelector('#' + id); if (el) el.addEventListener('click', fn); };
      on('pp-save', function () {
        var want = { enabled: box.querySelector('#pp-on').checked, show_band: box.querySelector('#pp-band').checked, show_certificates: box.querySelector('#pp-certs').checked, show_progress: box.querySelector('#pp-learn').checked };
        call('POST', '/api/profile', want).then(function (r) {
          if (!r.ok) return say('Could not save. Please try again.', 'Belum bisa menyimpan. Coba lagi.');
          draw(r.data);
          if (want.enabled) say('Saved. Your profile is public at the link above.', 'Tersimpan. Profilmu kini publik di tautan di atas.'); else say('Saved. Your profile is switched off.', 'Tersimpan. Profilmu dinonaktifkan.');
        });
      });
      on('pp-copy', function () {
        var u = box.querySelector('#pp-url'), done = function () { say('Link copied.', 'Tautan disalin.'); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(u.value).then(done, function () { u.select(); }); else { u.select(); try { document.execCommand('copy'); done(); } catch (e) {} }
      });
      on('pp-share', function () { navigator.share({ title: (a.name || '') + ' · Metanoia Labs', text: T('My readiness profile on Metanoia Labs', 'Profil kesiapanku di Metanoia Labs'), url: p.url }).catch(function () {}); });
      on('pp-reset', function () {
        if (!window.confirm(T('Get a new link? The current one stops working wherever you have shared it.', 'Buat tautan baru? Tautan yang sekarang tidak berlaku lagi di mana pun kamu pernah membagikannya.'))) return;
        call('POST', '/api/profile/reset').then(function (r) { if (r.ok) { draw(r.data); say('New link ready.', 'Tautan baru siap.'); } else say('Could not make a new link. Please try again.', 'Belum bisa membuat tautan baru. Coba lagi.'); });
      });
    }
    box.innerHTML = '<p class="note">' + T('Loading your profile settings…', 'Memuat pengaturan profilmu…') + '</p>';
    call('GET', '/api/profile').then(function (r) {
      if (r.ok && r.data.profile) return draw(r.data);
      box.innerHTML = '<p class="note">' + (r.status === 401 ? T('Sign in to set up a public profile.', 'Masuk dulu untuk membuat profil publik.') : T('The public profile is not available right now.', 'Profil publik belum tersedia saat ini.')) + '</p>';
    });
  }
  window.MT_PROFILE_SETTINGS = { mount: mount };
})();
