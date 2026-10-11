/**
 * MT_PROGRESS — cross-device progress for signed-in members.
 *
 * The products keep writing to the browser exactly as before (localStorage
 * keys below). When a server session exists, this module mirrors those keys
 * to /api/progress/browser on load and whenever the page is hidden, and on
 * sign-in merges the server copy back: per key, the newer write wins, using
 * the timestamps kept in `mt-progress-meta`. Guests and offline hosts are
 * untouched — nothing leaves the browser without an account.
 */
(function () {
  'use strict';
  if (window.MT_PROGRESS) return;
  var A = window.MT_API, AUTH = window.MT_AUTH;
  if (!A || !AUTH) return;
  var NS = 'browser';
  var PREFIXES = ['mt-lms-mods:', 'compass_', 'mt-lms-cc', 'mt-rope-cc', 'mt-range-guide', 'metanoia_onboarded', 'mt-audience', 'metanoia_consent'];
  var META = 'mt-progress-meta';
  var lastHash = '';

  function tracked(key) { for (var i = 0; i < PREFIXES.length; i++) if (key.indexOf(PREFIXES[i]) === 0) return true; return false; }
  function meta() { try { return JSON.parse(localStorage.getItem(META) || '{}') || {}; } catch (e) { return {}; } }
  function setMeta(m) { try { localStorage.setItem(META, JSON.stringify(m)); } catch (e) {} }
  function snapshot() {
    var keys = {}, m = meta(), changed = false;
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (!k || !tracked(k)) continue;
        var v = localStorage.getItem(k);
        keys[k] = v;
        if (!m[k] || m[k].v !== v) { m[k] = { v: v, t: Date.now() }; changed = true; }
      }
      /* the Career Map keeps its result in sessionStorage */
      var cm = sessionStorage.getItem('metanoia_progress');
      if (cm) { keys['session:metanoia_progress'] = cm; if (!m['session:metanoia_progress'] || m['session:metanoia_progress'].v !== cm) { m['session:metanoia_progress'] = { v: cm, t: Date.now() }; changed = true; } }
    } catch (e) {}
    if (changed) setMeta(m);
    var times = {}; for (var k2 in keys) times[k2] = (m[k2] || {}).t || 0;
    return { keys: keys, times: times };
  }
  function hashOf(s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return String(h); }

  function apply(remote) {
    if (!remote || !remote.keys) return;
    var m = meta(), rt = remote.times || {};
    for (var k in remote.keys) {
      var localT = (m[k] || {}).t || 0, remoteT = rt[k] || 0;
      var local = k.indexOf('session:') === 0 ? sessionStorage.getItem(k.slice(8)) : localStorage.getItem(k);
      if (local === null || remoteT > localT) {
        try {
          if (k.indexOf('session:') === 0) sessionStorage.setItem(k.slice(8), remote.keys[k]); else localStorage.setItem(k, remote.keys[k]);
          m[k] = { v: remote.keys[k], t: remoteT || Date.now() };
        } catch (e) {}
      }
    }
    setMeta(m);
  }

  function push(beacon) {
    if (!AUTH.user) return Promise.resolve(false);
    var snap = snapshot();
    var body = JSON.stringify({ data: snap, version: Date.now() });
    var h = hashOf(JSON.stringify(snap.keys));
    if (h === lastHash) return Promise.resolve(false);
    lastHash = h;
    if (beacon && navigator.sendBeacon) {
      /* sendBeacon cannot PUT; POST to the same route is accepted as an upsert */
      try { navigator.sendBeacon(A.base + '/progress/' + NS + '?via=beacon', new Blob([body], { type: 'application/json' })); return Promise.resolve(true); } catch (e) {}
    }
    return A.put('/progress/' + NS, JSON.parse(body)).then(function (r) { return r.ok; });
  }

  function sync() {
    return AUTH.ready.then(function (u) {
      if (!u) return false;
      return A.get('/progress/' + NS).then(function (r) {
        if (r.ok && r.data && r.data.data) apply(r.data.data);
        return push(false);
      });
    });
  }

  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') push(true); });
  window.addEventListener('pagehide', function () { push(true); });
  sync();

  window.MT_PROGRESS = { sync: sync, push: push, snapshot: snapshot };
})();
