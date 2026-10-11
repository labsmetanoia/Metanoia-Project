/**
 * MT_API — the one place the browser talks to /api.
 *
 * `MT_API.available()` resolves true only when /api/health answers JSON with
 * ok:true. On GitHub Pages the path returns the 404 page, so every feature
 * that needs a server shows its honest "not available on this site yet"
 * state instead of pretending. The probe result is cached for ten minutes in
 * sessionStorage so the question is asked once per visit, not once per page.
 */
(function () {
  'use strict';
  if (window.MT_API) return;
  var BASE = '/api';
  var CACHE_KEY = 'mt-api-health';
  var TTL = 10 * 60 * 1000;
  var probe = null;

  function cached() {
    try {
      var raw = sessionStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      var v = JSON.parse(raw);
      if (!v || Date.now() - v.at > TTL) return null;
      return v;
    } catch (e) { return null; }
  }
  function remember(ok, info) {
    try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), ok: ok, info: info || null })); } catch (e) {}
  }

  function health() {
    var c = cached();
    if (c) return Promise.resolve(c);
    if (probe) return probe;
    probe = fetch(BASE + '/health', { headers: { accept: 'application/json' }, credentials: 'same-origin', cache: 'no-store' })
      .then(function (r) {
        var ct = r.headers.get('content-type') || '';
        if (ct.indexOf('application/json') < 0) throw new Error('no api');
        return r.json();
      })
      .then(function (j) { var ok = !!(j && j.ok); remember(ok, j); return { ok: ok, info: j }; })
      .catch(function () { remember(false, null); return { ok: false, info: null }; })
      .then(function (v) { probe = null; return v; });
    return probe;
  }

  /* JSON request helper: resolves { status, ok, data }. Never throws on HTTP errors. */
  function request(method, path, body, opts) {
    opts = opts || {};
    var init = { method: method, credentials: 'same-origin', headers: { accept: 'application/json' } };
    if (body !== undefined) { init.headers['content-type'] = 'application/json'; init.body = JSON.stringify(body); }
    if (opts.headers) for (var k in opts.headers) init.headers[k] = opts.headers[k];
    if (opts.keepalive) init.keepalive = true;
    return fetch(BASE + path, init).then(function (r) {
      var ct = r.headers.get('content-type') || '';
      if (ct.indexOf('application/json') < 0) return { status: r.status, ok: false, data: null, offline: true };
      return r.json().then(function (j) { return { status: r.status, ok: r.ok && j && j.ok !== false, data: j }; });
    }).catch(function () { return { status: 0, ok: false, data: null, offline: true }; });
  }

  window.MT_API = {
    base: BASE,
    health: health,
    available: function () { return health().then(function (h) { return h.ok; }); },
    availableSync: function () { var c = cached(); return c ? !!c.ok : null; },
    get: function (p, o) { return request('GET', p, undefined, o); },
    post: function (p, b, o) { return request('POST', p, b, o); },
    put: function (p, b, o) { return request('PUT', p, b, o); },
    patch: function (p, b, o) { return request('PATCH', p, b, o); },
    locale: function () { try { return (localStorage.getItem('mtLang') || localStorage.getItem('mt-lang') || document.documentElement.lang || 'en').indexOf('id') === 0 ? 'id' : 'en'; } catch (e) { return 'en'; } }
  };
  /* warm the cache early so submit handlers can read availableSync() */
  health();
})();
