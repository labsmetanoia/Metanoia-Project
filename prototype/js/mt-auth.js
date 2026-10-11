/**
 * MT_AUTH — account state for every page. Requires js/mt-api.js first.
 *
 * The server holds the account; the browser holds only an HttpOnly session
 * cookie it cannot read. For the pages that still gate on the old flags,
 * MT_AUTH mirrors a confirmed session into sessionStorage `metanoia_auth`
 * and a public profile (name, e-mail, role) into localStorage
 * `metanoia_session` — never a password, never a token.
 *
 * Guest preview: when accounts are not available on this host, a visitor can
 * continue as a guest. That sets `metanoia_guest` and the same gate flags, so
 * the products open with their progress kept in this browser only. It is
 * labelled as such everywhere; it is not an account.
 *
 * Legacy clean-up: the previous prototype stored passwords in localStorage
 * under `metanoia_user_<email>`. Those keys are deleted on first load.
 */
(function () {
  'use strict';
  if (window.MT_AUTH) return;
  var A = window.MT_API;
  var user = null, guest = false, ready;

  function purgeLegacy() {
    try {
      var kill = [];
      for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k && k.indexOf('metanoia_user_') === 0) kill.push(k); }
      kill.forEach(function (k) { localStorage.removeItem(k); });
      var s = localStorage.getItem('metanoia_session');
      if (s) { var o = JSON.parse(s); if (o && o.provider === 'email') { localStorage.removeItem('metanoia_session'); sessionStorage.removeItem('metanoia_auth'); sessionStorage.removeItem('metanoia_premium'); } }
    } catch (e) {}
  }

  function mirror(u) {
    try {
      if (u) {
        sessionStorage.setItem('metanoia_auth', 'true');
        sessionStorage.setItem('metanoia_premium', 'true');
        sessionStorage.removeItem('metanoia_guest');
        localStorage.setItem('metanoia_session', JSON.stringify({ name: u.name, email: u.email, role: u.role, audience: u.audience || null, provider: 'api', ts: Date.now() }));
        if (u.name) sessionStorage.setItem('metanoia_name', u.name);
      } else if (!guest) {
        sessionStorage.removeItem('metanoia_auth');
        sessionStorage.removeItem('metanoia_premium');
        localStorage.removeItem('metanoia_session');
      }
    } catch (e) {}
  }

  function refresh() {
    return A.available().then(function (ok) {
      if (!ok) { user = null; return null; }
      return A.get('/auth/me').then(function (r) { user = r.ok && r.data && r.data.user ? r.data.user : null; mirror(user); return user; });
    });
  }

  purgeLegacy();
  try { guest = sessionStorage.getItem('metanoia_guest') === 'true'; } catch (e) {}
  ready = refresh();

  window.MT_AUTH = {
    ready: ready,
    refresh: refresh,
    get user() { return user; },
    get isGuest() { return guest && !user; },
    available: function () { return A.available(); },
    register: function (data) {
      return A.post('/auth/register', data).then(function (r) { if (r.ok) { user = r.data.user; guest = false; mirror(user); } return r; });
    },
    login: function (email, password) {
      return A.post('/auth/login', { email: email, password: password }).then(function (r) { if (r.ok) { user = r.data.user; guest = false; mirror(user); } return r; });
    },
    logout: function () {
      return A.post('/auth/logout', {}).then(function (r) { user = null; guest = false; mirror(null); try { sessionStorage.removeItem('metanoia_guest'); } catch (e) {} return r; });
    },
    requestReset: function (email) { return A.post('/auth/request-reset', { email: email }); },
    reset: function (token, password) { return A.post('/auth/reset', { token: token, password: password }); },
    /* guest preview: the honest alternative when accounts are not open on this host */
    guest: function (name) {
      guest = true; user = null;
      try {
        sessionStorage.setItem('metanoia_guest', 'true');
        sessionStorage.setItem('metanoia_auth', 'true');
        sessionStorage.setItem('metanoia_premium', 'true');
        localStorage.setItem('metanoia_session', JSON.stringify({ name: name || 'Guest', email: '', role: 'guest', provider: 'guest', ts: Date.now() }));
      } catch (e) {}
    },
    endGuest: function () {
      guest = false;
      try { sessionStorage.removeItem('metanoia_guest'); sessionStorage.removeItem('metanoia_auth'); sessionStorage.removeItem('metanoia_premium'); localStorage.removeItem('metanoia_session'); } catch (e) {}
    }
  };
})();
