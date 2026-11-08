/**
 * MT_AUTH — account state for every page. Requires js/mt-api.js first.
 *
 * The server holds the account; the browser holds only an HttpOnly session
 * cookie it cannot read. For the pages that still gate on the old flags,
 * MT_AUTH mirrors a confirmed session into sessionStorage `metanoia_auth`
 * and a public profile (name, e-mail, role) into localStorage
 * `metanoia_session` — never a password, never a token.
 *
 * Products are for signed-in members only. The former "guest preview" (a
 * browser-only unlock while accounts were closed) is gone; its flags are
 * cleared on load so an old tab does not keep the products open.
 *
 * Legacy clean-up: the previous prototype stored passwords in localStorage
 * under `metanoia_user_<email>`. Those keys are deleted on first load.
 */
(function () {
  'use strict';
  if (window.MT_AUTH) return;
  var A = window.MT_API;
  var user = null, ready;

  function purgeLegacy() {
    try {
      var kill = [];
      for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k && k.indexOf('metanoia_user_') === 0) kill.push(k); }
      kill.forEach(function (k) { localStorage.removeItem(k); });
      var s = localStorage.getItem('metanoia_session');
      if (s) { var o = JSON.parse(s); if (o && o.provider === 'email' || o && o.provider === 'guest') { localStorage.removeItem('metanoia_session'); sessionStorage.removeItem('metanoia_auth'); sessionStorage.removeItem('metanoia_premium'); } }
      sessionStorage.removeItem('metanoia_guest');
    } catch (e) {}
  }

  function mirror(u) {
    try {
      if (u) {
        sessionStorage.setItem('metanoia_auth', 'true');
        sessionStorage.setItem('metanoia_premium', 'true');
        localStorage.setItem('metanoia_session', JSON.stringify({ name: u.name, email: u.email, role: u.role, audience: u.audience || null, provider: 'api', ts: Date.now() }));
        if (u.name) sessionStorage.setItem('metanoia_name', u.name);
      } else {
        sessionStorage.removeItem('metanoia_auth');
        sessionStorage.removeItem('metanoia_premium');
        localStorage.removeItem('metanoia_session');
      }
    } catch (e) {}
  }

  function refresh() {
    /* accounts closed (AUTH_ENABLED false and no ADMIN_EMAILS): /auth/* answers 404, so do not ask */
    return A.accounts().then(function (open) {
      if (!open) { user = null; mirror(null); return null; }
      return A.get('/auth/me').then(function (r) { user = r.ok && r.data && r.data.user ? r.data.user : null; mirror(user); return user; });
    });
  }

  purgeLegacy();
  ready = refresh();

  window.MT_AUTH = {
    ready: ready,
    refresh: refresh,
    get user() { return user; },
    available: function () { return A.available(); },
    /* true (open), 'invite' (invited addresses only) or false; the login and register pages gate on this */
    accountsOpen: function () { return A.accounts(); },
    register: function (data) {
      return A.post('/auth/register', data).then(function (r) { if (r.ok) { user = r.data.user; mirror(user); } return r; });
    },
    login: function (email, password) {
      return A.post('/auth/login', { email: email, password: password }).then(function (r) { if (r.ok) { user = r.data.user; mirror(user); } return r; });
    },
    logout: function () {
      return A.post('/auth/logout', {}).then(function (r) { user = null; mirror(null); return r; });
    },
    requestReset: function (email) { return A.post('/auth/request-reset', { email: email }); },
    reset: function (token, password) { return A.post('/auth/reset', { token: token, password: password }); },
    /* passwordless: one-time link by e-mail; consume signs in (and creates the account on first use) */
    magicRequest: function (data) { return A.post('/auth/magic/request', Object.assign({ locale: A.locale() }, data || {})); },
    magicConsume: function (token) {
      return A.post('/auth/magic/consume', { token: token, locale: A.locale() }).then(function (r) { if (r.ok) { user = r.data.user; mirror(user); } return r; });
    },
    /* signed-in devices (settings page) */
    sessions: function () { return A.get('/auth/sessions'); },
    revokeSession: function (id) { return A.del('/auth/sessions/' + encodeURIComponent(id)); }
  };
})();
