/* Metanoia Labs: calendar and reminders (docs/14 "Reminders").
 *
 * One dialog with three ways to be reminded of the dates a member keeps in The Compass, none of them e-mail:
 *
 *   1. a calendar file (.ics) built in the browser from the dates on this device. Works without an account.
 *   2. a private calendar address the member's calendar app reads by itself (GET /api/calendar).
 *   3. a notification on this device on the mornings something is due (Web Push, /api/push), offered only
 *      where the browser supports it and the site has its push keys.
 *
 *   MT_REMIND.open({ apps, goals })        the dialog; without arguments the dates are read from this browser
 *   MT_REMIND.download({ apps, goals })    straight to the calendar file, e.g. for one application
 *
 * Loaded on demand by the pages that offer it. Follows the page language.
 */
(function () {
  'use strict';
  if (window.MT_REMIND) return;
  var isId = function () { return (document.documentElement.lang || 'en').toLowerCase().indexOf('id') === 0; };
  var T = function (en, id) { return isId() ? id : en; };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  var dayOf = function (d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); };
  var addDays = function (day, n) { var p = day.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2] + n); return dayOf(d); };
  var isDay = function (d) { return typeof d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d); };
  var arr = function (v) { try { v = typeof v === 'string' ? JSON.parse(v) : v; return Array.isArray(v) ? v : []; } catch (e) { return []; } };
  var txt = function (v) { return String(typeof v === 'string' ? v : (v && (v[isId() ? 'id' : 'en'] || v.en)) || '').replace(/\s+/g, ' ').trim(); };
  var clip = function (s, n) { return s.length > n ? s.slice(0, n - 1).replace(/\s+$/, '') + '\u2026' : s; };
  var ls = function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } };

  /* ── the dates: application deadlines, next steps, goal dates (the same rules as server/lib/reminders.js) ── */
  function items(data) {
    data = data || {};
    var apps = arr(data.apps === undefined ? ls('compass_applications') : data.apps), goals = arr(data.goals === undefined ? ls('compass_goals') : data.goals);
    var from = addDays(dayOf(new Date()), -30), out = [];
    var who = function (a) { return [txt(a.company), txt(a.role)].filter(Boolean).join(' \u00b7 ') || T('Application', 'Lamaran'); };
    apps.forEach(function (a) {
      if (!a || !a.id || (a.status !== 'active' && a.status !== 'offer')) return;
      if (isDay(a.deadline) && a.deadline >= from) out.push({ uid: 'app-' + a.id + '-deadline', date: a.deadline, summary: T('Deadline', 'Tenggat') + ': ' + who(a), description: T('From your application tracker in The Compass.', 'Dari pelacak lamaranmu di The Compass.') });
      if (isDay(a.nextActionDue) && a.nextActionDue >= from) out.push({ uid: 'app-' + a.id + '-next', date: a.nextActionDue, summary: clip((txt(a.nextAction) || T('Next step', 'Langkah berikutnya')) + ' (' + who(a) + ')', 160), description: T('From your application tracker in The Compass.', 'Dari pelacak lamaranmu di The Compass.') });
    });
    goals.forEach(function (g) {
      if (!g || !g.id || g.done || !isDay(g.due) || g.due < from) return;
      out.push({ uid: 'goal-' + g.id, date: g.due, summary: T('Goal due', 'Target jatuh tempo') + ': ' + clip(txt(g.title), 140), description: T('From your development plan in The Compass.', 'Dari rencana pengembanganmu di The Compass.') });
    });
    return out.sort(function (x, y) { return x.date < y.date ? -1 : x.date > y.date ? 1 : 0; });
  }

  /* ── iCalendar: all-day entries with an alert at 09:00 the day before ── */
  var icsText = function (s) { return String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n'); };
  function fold(line) {
    var out = [], cur = '', size = 0, enc = window.TextEncoder ? new TextEncoder() : null;
    Array.from(line).forEach(function (ch) {
      var n = enc ? enc.encode(ch).length : 1;
      if (size + n > (out.length ? 74 : 75)) { out.push(cur); cur = ''; size = 0; }
      cur += ch; size += n;
    });
    out.push(cur);
    return out.join('\r\n ');
  }
  function ics(list) {
    var stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z'), site = location.origin;
    var L = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Metanoia Labs//The Compass//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'X-WR-CALNAME:Metanoia Labs \u00b7 The Compass'];
    list.forEach(function (it) {
      L.push('BEGIN:VEVENT', 'UID:' + icsText(it.uid) + '@' + location.hostname, 'DTSTAMP:' + stamp, 'DTSTART;VALUE=DATE:' + it.date.replace(/-/g, ''), 'DTEND;VALUE=DATE:' + addDays(it.date, 1).replace(/-/g, ''),
        'SUMMARY:' + icsText(it.summary), 'DESCRIPTION:' + icsText(it.description || ''), 'URL:' + site + '/products/the-compass/', 'TRANSP:TRANSPARENT',
        'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:' + icsText(it.summary), 'TRIGGER:-PT15H', 'END:VALARM', 'END:VEVENT');
    });
    L.push('END:VCALENDAR');
    return L.map(fold).join('\r\n') + '\r\n';
  }
  function download(data, name) {
    var list = Array.isArray(data) ? data : items(data);
    if (!list.length) return 0;
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([ics(list)], { type: 'text/calendar;charset=utf-8' }));
    a.download = name || 'metanoia-compass.ics';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { try { URL.revokeObjectURL(a.href); } catch (e) {} }, 4000);
    return list.length;
  }

  /* ── server ── */
  function call(method, path, body) {
    var init = { method: method, credentials: 'same-origin', headers: { accept: 'application/json' } };
    if (body) { init.headers['content-type'] = 'application/json'; init.body = JSON.stringify(body); }
    return fetch(path, init).then(function (r) {
      if ((r.headers.get('content-type') || '').indexOf('application/json') < 0) return { status: r.status, ok: false, data: null };
      return r.json().then(function (j) { return { status: r.status, ok: r.ok && j && j.ok !== false, data: j }; });
    }).catch(function () { return { status: 0, ok: false, data: null }; });
  }

  /* ── push on this device ── */
  var pushOk = function () { return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window; };
  var isIos = function () { return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); };
  var standalone = function () { return navigator.standalone === true || (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches); };
  function reg() { return navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function () { return navigator.serviceWorker.ready; }); }
  function keyBytes(k) {
    var s = atob(k.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((k.length + 3) % 4)), out = new Uint8Array(s.length);
    for (var i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
    return out;
  }
  function current() { return pushOk() ? reg().then(function (r) { return r.pushManager.getSubscription(); }).catch(function () { return null; }) : Promise.resolve(null); }
  function subscribe(key) {
    return Notification.requestPermission().then(function (p) {
      if (p !== 'granted') throw new Error('denied');
      return reg();
    }).then(function (r) {
      var opts = { userVisibleOnly: true, applicationServerKey: keyBytes(key) };
      /* a subscription made with an older site key cannot be reused: drop it and subscribe again */
      return r.pushManager.subscribe(opts).catch(function () { return r.pushManager.getSubscription().then(function (old) { return old ? old.unsubscribe() : null; }).then(function () { return r.pushManager.subscribe(opts); }); });
    }).then(function (sub) {
      return call('POST', '/api/push/subscribe', { subscription: sub.toJSON(), lang: isId() ? 'id' : 'en' }).then(function (res) { if (!res.ok) throw new Error('server'); return sub; });
    });
  }
  function unsubscribe() {
    return current().then(function (sub) {
      if (!sub) return null;
      var ep = sub.endpoint;
      return sub.unsubscribe().then(function () { return call('POST', '/api/push/unsubscribe', { endpoint: ep }); });
    });
  }

  /* ── dialog ── */
  function css() {
    if (document.getElementById('mtrCss')) return;
    var s = document.createElement('style'); s.id = 'mtrCss';
    s.textContent =
      '.mtr-veil{position:fixed;inset:0;z-index:100060;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(3,6,12,.74)}' +
      '.mtr-card{box-sizing:border-box;width:100%;max-width:540px;max-height:calc(100vh - 32px);overflow:auto;padding:24px 24px 20px;border-radius:16px;border:1px solid rgba(201,168,76,.4);background:#0D1524;color:#F5EFE6;font:400 14.5px/1.6 Inter,-apple-system,"Segoe UI",Roboto,sans-serif;box-shadow:0 24px 70px rgba(0,0,0,.55)}' +
      '.mtr-card h2{margin:0 0 4px;font-weight:700;font-size:20px;line-height:1.3;font-family:inherit;color:#F5EFE6}.mtr-card h3{margin:0 0 4px;font-weight:700;font-size:15px;line-height:1.4;font-family:inherit;color:#E9D28A}' +
      '.mtr-card p{margin:0 0 10px;color:#C4CAD6}.mtr-sec{padding:16px 0 6px;border-top:1px solid rgba(245,239,230,.12);margin-top:14px}' +
      '.mtr-row{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 10px}' +
      '.mtr-b{min-height:44px;padding:0 16px;border-radius:10px;border:1px solid rgba(201,168,76,.55);background:none;color:#E9D28A;font-weight:600;font-size:14px;line-height:1;font-family:inherit;cursor:pointer;display:inline-flex;align-items:center;text-decoration:none}' +
      '.mtr-b.gold{background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);color:#10131B;border-color:transparent}.mtr-b[disabled]{opacity:.5;cursor:default}' +
      '.mtr-b:focus-visible,.mtr-x:focus-visible,.mtr-url:focus-visible{outline:2px solid #E9D28A;outline-offset:2px}' +
      '.mtr-url{box-sizing:border-box;width:100%;min-height:44px;margin:0 0 10px;padding:0 12px;border-radius:10px;border:1px solid rgba(245,239,230,.2);background:rgba(255,255,255,.05);color:#F5EFE6;font:13px/1 ui-monospace,Menlo,Consolas,monospace}' +
      '.mtr-note{font-size:12.5px;color:#9AA3B5}.mtr-msg{min-height:20px;font-size:13px;color:#E9D28A;margin:0}' +
      '.mtr-head{display:flex;align-items:flex-start;gap:12px;justify-content:space-between}' +
      '.mtr-x{flex:none;width:44px;height:44px;margin:-8px -8px 0 0;border-radius:50%;border:1px solid rgba(245,239,230,.25);background:none;color:#F5EFE6;font-weight:400;font-size:22px;line-height:1;font-family:inherit;cursor:pointer}';
    document.head.appendChild(s);
  }
  function open(data) {
    css();
    var old = document.querySelector('.mtr-veil'); if (old) old.remove();
    var list = items(data), last = document.activeElement;
    var veil = document.createElement('div'); veil.className = 'mtr-veil';
    veil.innerHTML = '<div class="mtr-card" role="dialog" aria-modal="true" aria-labelledby="mtrT">' +
      '<div class="mtr-head"><div><h2 id="mtrT">' + T('Calendar and reminders', 'Kalender dan pengingat') + '</h2>' +
      '<p>' + T('Three ways to keep your dates in front of you. None of them is e-mail.', 'Tiga cara agar tanggal pentingmu tetap terlihat. Tidak ada yang lewat e-mail.') + '</p></div>' +
      '<button type="button" class="mtr-x" aria-label="' + T('Close', 'Tutup') + '">\u00d7</button></div>' +
      '<div class="mtr-sec"><h3>' + T('Add to your calendar', 'Tambahkan ke kalendermu') + '</h3>' +
      '<p>' + T('Download your dates as a calendar file and open it. Your calendar app adds each deadline, next step and goal date, with an alert the morning before.', 'Unduh tanggal-tanggalmu sebagai berkas kalender, lalu buka. Aplikasi kalendermu menambahkan setiap tenggat, langkah berikutnya, dan tanggal target, lengkap dengan peringatan sehari sebelumnya di pagi hari.') + '</p>' +
      '<div class="mtr-row"><button type="button" class="mtr-b gold" id="mtrDl"' + (list.length ? '' : ' disabled') + '>' + (list.length ? T('Download calendar file', 'Unduh berkas kalender') + ' (' + list.length + ')' : T('No dates yet', 'Belum ada tanggal')) + '</button></div>' +
      (list.length ? '' : '<p class="mtr-note">' + T('Add a deadline or a next step to an application, or a date to a goal, and it appears here.', 'Tambahkan tenggat atau langkah berikutnya pada sebuah lamaran, atau tanggal pada sebuah target, dan ia akan muncul di sini.') + '</p>') + '</div>' +
      '<div class="mtr-sec" id="mtrFeed" hidden></div><div class="mtr-sec" id="mtrPush" hidden></div>' +
      '<p class="mtr-msg" id="mtrMsg" role="status" aria-live="polite"></p></div>';
    document.body.appendChild(veil);
    var $ = function (id) { return veil.querySelector('#' + id); }, say = function (en, id) { $('mtrMsg').textContent = T(en, id); };
    function close() { veil.remove(); document.removeEventListener('keydown', onKey); if (last && last.focus) { try { last.focus(); } catch (e) {} } }
    function onKey(e) { if (e.key === 'Escape') close(); }
    document.addEventListener('keydown', onKey);
    veil.addEventListener('click', function (e) { if (e.target === veil || e.target.closest('.mtr-x')) close(); });
    $('mtrDl').addEventListener('click', function () { if (download(list)) say('Saved. Open the file to add the dates to your calendar.', 'Tersimpan. Buka berkasnya untuk menambahkan tanggal ke kalendermu.'); });
    veil.querySelector('.mtr-x').focus();

    /* the synced address: members only */
    function drawFeed(st) {
      var box = $('mtrFeed'); box.hidden = false;
      var head = '<h3>' + T('Keep it in sync', 'Selalu sinkron') + '</h3>';
      if (!st.enabled) {
        box.innerHTML = head + '<p>' + T('Turn on a private calendar address. Your calendar app reads it a few times a day, so new and changed dates appear by themselves.', 'Aktifkan alamat kalender pribadi. Aplikasi kalendermu membacanya beberapa kali sehari, sehingga tanggal baru dan yang berubah muncul dengan sendirinya.') + '</p>' +
          '<div class="mtr-row"><button type="button" class="mtr-b" data-feed="on">' + T('Turn on my calendar address', 'Aktifkan alamat kalenderku') + '</button></div>';
        return;
      }
      box.innerHTML = head + '<p>' + T('Your private calendar address is on. Add it to your calendar app once.', 'Alamat kalender pribadimu aktif. Tambahkan sekali saja ke aplikasi kalendermu.') + '</p>' +
        '<input class="mtr-url" id="mtrUrl" readonly aria-label="' + T('Calendar address', 'Alamat kalender') + '" value="' + esc(st.url) + '">' +
        '<div class="mtr-row"><button type="button" class="mtr-b gold" data-feed="copy">' + T('Copy the address', 'Salin alamat') + '</button>' +
        '<a class="mtr-b" href="' + esc(st.url.replace(/^https?:/, 'webcal:')) + '">' + T('Open in my calendar app', 'Buka di aplikasi kalender') + '</a></div>' +
        '<p class="mtr-note">' + T('Google Calendar: Other calendars, then From URL. Apple Calendar: File, then New Calendar Subscription. Outlook: Add calendar, then Subscribe from web.', 'Google Calendar: Kalender lainnya, lalu Dari URL. Apple Calendar: File, lalu Langganan Kalender Baru. Outlook: Tambahkan kalender, lalu Berlangganan dari web.') + '</p>' +
        '<p class="mtr-note">' + T('Anyone who has this address can read these dates. If it went somewhere it should not, get a new address and the old one stops working.', 'Siapa pun yang memegang alamat ini bisa membaca tanggal-tanggal tersebut. Jika alamatnya tersebar ke tempat yang salah, buat alamat baru dan alamat lama langsung tidak berlaku.') + '</p>' +
        '<div class="mtr-row"><button type="button" class="mtr-b" data-feed="reset">' + T('Get a new address', 'Buat alamat baru') + '</button><button type="button" class="mtr-b" data-feed="off">' + T('Turn it off', 'Matikan') + '</button></div>';
    }
    $('mtrFeed').addEventListener('click', function (e) {
      var act = e.target.getAttribute && e.target.getAttribute('data-feed'); if (!act) return;
      if (act === 'copy') {
        var u = $('mtrUrl'), done = function () { say('Address copied.', 'Alamat disalin.'); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(u.value).then(done, function () { u.select(); });
        else { u.select(); try { document.execCommand('copy'); done(); } catch (err) {} }
        return;
      }
      e.target.disabled = true;
      call('POST', '/api/calendar/' + act).then(function (r) {
        if (!r.ok) { e.target.disabled = false; say('That did not work. Please try again.', 'Belum berhasil. Coba lagi.'); return; }
        drawFeed(r.data);
        say(act === 'off' ? 'Calendar address turned off.' : act === 'reset' ? 'New address ready. Replace the old one in your calendar app.' : 'Calendar address is on.',
          act === 'off' ? 'Alamat kalender dimatikan.' : act === 'reset' ? 'Alamat baru siap. Ganti alamat lama di aplikasi kalendermu.' : 'Alamat kalender aktif.');
      });
    });
    call('GET', '/api/calendar').then(function (r) { if (r.ok && !r.data.pending_migration && veil.isConnected) drawFeed(r.data); });

    /* reminders on this device: only where the site has push keys and the member is signed in */
    function drawPush(key, sub) {
      var box = $('mtrPush'); box.hidden = false;
      var head = '<h3>' + T('Reminders on this device', 'Pengingat di perangkat ini') + '</h3><p>' + T('One notification on the mornings something is due today or tomorrow: a deadline, a next step, a goal date or a habit you asked to be reminded of.', 'Satu notifikasi di pagi hari saat ada yang jatuh tempo hari ini atau besok: tenggat, langkah berikutnya, tanggal target, atau kebiasaan yang ingin kamu ingat.') + '</p>';
      if (!pushOk()) {
        box.innerHTML = head + '<p class="mtr-note">' + (isIos() && !standalone()
          ? T('On iPhone and iPad, add this site to your Home Screen first (Share, then Add to Home Screen). Then open it from there and turn reminders on.', 'Di iPhone dan iPad, tambahkan dulu situs ini ke Layar Utama (Bagikan, lalu Tambah ke Layar Utama). Setelah itu buka dari sana dan aktifkan pengingat.')
          : T('This browser cannot show notifications from websites.', 'Browser ini tidak bisa menampilkan notifikasi dari situs web.')) + '</p>';
        return;
      }
      if (Notification.permission === 'denied') { box.innerHTML = head + '<p class="mtr-note">' + T('Notifications are blocked for this site. Allow them in your browser settings, then come back here.', 'Notifikasi untuk situs ini diblokir. Izinkan di pengaturan browser, lalu kembali ke sini.') + '</p>'; return; }
      box.innerHTML = head + (sub
        ? '<p>' + T('Reminders are on for this device.', 'Pengingat aktif di perangkat ini.') + '</p><div class="mtr-row"><button type="button" class="mtr-b gold" data-push="test">' + T('Send me a test', 'Kirim uji coba') + '</button><button type="button" class="mtr-b" data-push="off">' + T('Turn them off', 'Matikan') + '</button></div>'
        : '<div class="mtr-row"><button type="button" class="mtr-b" data-push="on">' + T('Turn on reminders', 'Aktifkan pengingat') + '</button></div>');
      box.dataset.key = key;
    }
    $('mtrPush').addEventListener('click', function (e) {
      var act = e.target.getAttribute && e.target.getAttribute('data-push'); if (!act) return;
      var key = $('mtrPush').dataset.key; e.target.disabled = true;
      if (act === 'on') subscribe(key).then(function (sub) { drawPush(key, sub); say('Reminders are on. Send yourself a test to see one.', 'Pengingat aktif. Kirim uji coba untuk melihat contohnya.'); },
        function (err) { drawPush(key, null); if (String(err && err.message) === 'denied') say('Notifications were not allowed, so reminders stay off.', 'Notifikasi tidak diizinkan, jadi pengingat tetap mati.'); else say('Reminders could not be turned on here. Please try again.', 'Pengingat belum bisa diaktifkan di sini. Coba lagi.'); });
      else if (act === 'off') unsubscribe().then(function () { drawPush(key, null); say('Reminders are off for this device.', 'Pengingat dimatikan di perangkat ini.'); }, function () { e.target.disabled = false; });
      else call('POST', '/api/push/test').then(function (r) {
        e.target.disabled = false;
        if (r.ok && r.data.sent) say('Sent. It should appear in a moment.', 'Terkirim. Sebentar lagi akan muncul.');
        else if (r.status === 429) say('That is enough tests for now. Try again in an hour.', 'Uji coba sudah cukup untuk saat ini. Coba lagi satu jam lagi.');
        else say('The test could not be sent. Turn reminders off and on again.', 'Uji coba belum bisa dikirim. Matikan lalu aktifkan lagi pengingatnya.');
      });
    });
    call('GET', '/api/push').then(function (r) {
      if (!r.ok || !r.data.configured || !r.data.signed_in || !veil.isConnected) return;
      current().then(function (sub) { if (veil.isConnected) drawPush(r.data.key, sub); });
    });
  }

  window.MT_REMIND = { open: open, download: function (data, name) { return download(data, name); }, items: items, ics: ics };
})();
