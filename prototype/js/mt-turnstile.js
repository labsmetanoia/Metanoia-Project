/**
 * MT_TS.token(form) — a Cloudflare Turnstile token for one form submission.
 *
 * Reads data/security.js (window.MT_TURNSTILE.siteKey). The Turnstile script
 * is fetched the first time a token is asked for, never on page load, and the
 * widget is rendered once per form in "execute" mode (invisible: nothing is
 * shown unless Cloudflare decides to challenge). Each call runs one challenge
 * and resolves with the token, or null when the key is not configured, the
 * script could not load, or the challenge failed or timed out. The server
 * decides what null means: with TURNSTILE_SECRET_KEY set it rejects, without
 * it the check is skipped.
 */
(function () {
  'use strict';
  if (window.MT_TS) return;
  var CFG = window.MT_TURNSTILE || {};
  var KEY = typeof CFG.siteKey === 'string' && /^0x[A-Za-z0-9_-]{10,}$/.test(CFG.siteKey) ? CFG.siteKey : '';
  var SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
  var loading = null;
  var widgets = typeof WeakMap === 'function' ? new WeakMap() : null;

  function load() {
    if (window.turnstile) return Promise.resolve(true);
    if (loading) return loading;
    loading = new Promise(function (resolve) {
      var s = document.createElement('script');
      s.src = SRC; s.async = true; s.defer = true;
      s.onload = function () { resolve(!!window.turnstile); };
      s.onerror = function () { resolve(false); };
      document.head.appendChild(s);
      setTimeout(function () { resolve(!!window.turnstile); }, 8000);
    });
    return loading;
  }

  function token(form) {
    if (!KEY || !form || !widgets) return Promise.resolve(null);
    return load().then(function (ok) {
      if (!ok || !window.turnstile) return null;
      return new Promise(function (resolve) {
        var done = false;
        function finish(t) { if (done) return; done = true; clearTimeout(timer); resolve(t || null); }
        var timer = setTimeout(function () { finish(null); }, 12000);
        var w = widgets.get(form);
        if (!w) {
          var el = document.createElement('div');
          el.className = 'mt-turnstile';
          form.appendChild(el);
          w = { el: el, cb: null };
          try {
            w.id = window.turnstile.render(el, {
              sitekey: KEY,
              execution: 'execute',
              appearance: 'execute',
              callback: function (t) { if (w.cb) w.cb(t); },
              'error-callback': function () { if (w.cb) w.cb(null); return true; },
              'timeout-callback': function () { if (w.cb) w.cb(null); },
              'expired-callback': function () {}
            });
          } catch (e) { return finish(null); }
          widgets.set(form, w);
        } else {
          try { window.turnstile.reset(w.id); } catch (e) {}
        }
        w.cb = function (t) { w.cb = null; finish(t); };
        try { window.turnstile.execute(w.id); } catch (e) { finish(null); }
      });
    });
  }

  window.MT_TS = { enabled: !!KEY, token: token, preload: load };
})();
