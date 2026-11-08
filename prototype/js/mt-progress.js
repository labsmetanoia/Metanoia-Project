/**
 * MT_PROGRESS — cross-device progress for signed-in members.
 *
 * The products keep writing to the browser exactly as before (the storage
 * keys listed in PREFIXES). This module:
 *
 *   • stamps every tracked write with the moment it happened (Storage.setItem
 *     is wrapped), keeps a tombstone when a key is removed, and pushes the
 *     snapshot to /api/progress/browser a few seconds after the last write,
 *     when the page is hidden, and when it is closed;
 *   • on load, and whenever the tab comes back after a minute away, pulls the
 *     account copy and applies whatever is newer, key by key (the server
 *     merges the same way, so two devices never overwrite each other);
 *   • on a device that sees new progress right after load, reloads the page
 *     once so the product renders with it; later changes raise the
 *     `mt:progress` event instead.
 *
 * Guests and hosts without the API are untouched: nothing leaves the browser
 * without an account. Device preferences (theme, language, cookie choices,
 * the sign-in itself) are not synced.
 */
(function () {
  'use strict';
  if (window.MT_PROGRESS) return;
  var A = window.MT_API, AUTH = window.MT_AUTH;
  if (!A || !AUTH) return;
  var NS = 'browser';
  var PREFIXES = [
    'mt-lms',                 /* lesson progress, plans, kits, case files, slide and video positions, completion certificates */
    'mt_assess:',             /* Test Lab assessments */
    'mt_map_audit', 'mt-range-', 'mt_range_route', 'mt-lookout-identity',   /* The Map */
    'mt_pack_',               /* The Pack: gym, applications, studio */
    'mt_route_',              /* The Route: field work, plan */
    'mt_rope_', 'mt-rope-',   /* The Rope: simulations, configuration, guide */
    'compass_',               /* The Compass */
    'metanoia_onboarded', 'mt-audience', 'metanoia_consent', 'tl_migrated_gym'
  ];
  var META = 'mt-progress-meta', LAST = 'mt-progress-last', RELOADED = 'mt-progress-reloaded';
  var KEY_CAP = 64 * 1024, TOTAL_CAP = 700 * 1024, DEBOUNCE_MS = 4000, PULL_EVERY_MS = 60000, RELOAD_WINDOW_MS = 6000;
  var M = null, applying = false, timer = null, lastHash = '', lastPull = 0, state = { sync: 0, push: 0, skipped: [], error: '', pending: false };

  function tracked(key) { if (!key) return false; for (var i = 0; i < PREFIXES.length; i++) if (key.indexOf(PREFIXES[i]) === 0) return true; return false; }
  function hashOf(s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return String(h); }
  function meta() { if (M) return M; try { M = JSON.parse(localStorage.getItem(META) || '{}') || {}; } catch (e) { M = {}; } return M; }
  function saveMeta() { try { localStorage.setItem(META, JSON.stringify(meta())); } catch (e) {} }
  function loadState() { try { var s = JSON.parse(localStorage.getItem(LAST) || '{}') || {}; state.sync = s.sync || 0; state.push = s.push || 0; } catch (e) {} }
  function saveState() { try { localStorage.setItem(LAST, JSON.stringify({ sync: state.sync, push: state.push })); } catch (e) {} }
  function emit(type, detail) {
    try { window.dispatchEvent(new CustomEvent('mt:progress', { detail: Object.assign({ type: type }, detail || {}) })); } catch (e) {}
  }

  /* ── write-time stamps: wrap Storage so every tracked write carries its moment ── */
  function touch(k, v) {
    var m = meta(), h = hashOf(v), e = m[k];
    if (e && e.h === h && !e.d) return;
    m[k] = { h: h, t: Date.now() };
    saveMeta(); schedule();
  }
  function tomb(k) {
    var m = meta();
    if (m[k] && m[k].d) return;
    m[k] = { d: Date.now() };
    saveMeta(); schedule();
  }
  try {
    var proto = Storage.prototype, origSet = proto.setItem, origRemove = proto.removeItem;
    proto.setItem = function (k, v) {
      origSet.apply(this, arguments);
      if (!applying && this === window.localStorage && tracked(k)) touch(String(k), String(v));
    };
    proto.removeItem = function (k) {
      origRemove.apply(this, arguments);
      if (!applying && this === window.localStorage && tracked(k)) tomb(String(k));
    };
    window.addEventListener('storage', function (e) { if (e.key === META) M = null; });
  } catch (e) {}

  /* ── snapshot: tracked keys, their write times, tombstones; oversize keys stay on the device ── */
  function snapshot() {
    var keys = {}, sizes = {}, skipped = [], m = meta(), changed = false, now = Date.now();
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (!k || !tracked(k)) continue;
        var v = localStorage.getItem(k);
        if (v === null) continue;
        if (v.length > KEY_CAP) { skipped.push(k); continue; }
        keys[k] = v; sizes[k] = v.length;
        var h = hashOf(v), e = m[k];
        if (!e || e.d || (e.h !== h && e.v !== v)) { m[k] = { h: h, t: now }; changed = true; }
        else if (e.v !== undefined) { m[k] = { h: h, t: e.t || now }; changed = true; }   /* older meta kept the whole value */
      }
      /* the Career Map keeps its result in sessionStorage */
      var cm = sessionStorage.getItem('metanoia_progress');
      if (cm && cm.length <= KEY_CAP) {
        keys['session:metanoia_progress'] = cm; sizes['session:metanoia_progress'] = cm.length;
        var hc = hashOf(cm), ec = m['session:metanoia_progress'];
        if (!ec || ec.d || (ec.h !== hc && ec.v !== cm)) { m['session:metanoia_progress'] = { h: hc, t: now }; changed = true; }
      }
    } catch (e) {}
    /* keys that were tracked before and are gone now were removed by the product: keep a tombstone */
    var deleted = {};
    for (var mk in m) {
      if (!m.hasOwnProperty(mk)) continue;
      if (m[mk].d) { deleted[mk] = m[mk].d; continue; }
      if (!(mk in keys) && skipped.indexOf(mk) < 0) { m[mk] = { d: now }; deleted[mk] = now; changed = true; }
    }
    /* stay under the document cap: the largest keys stay on the device first */
    var total = 0; for (var sk in sizes) total += sizes[sk];
    if (total > TOTAL_CAP) {
      Object.keys(sizes).sort(function (a, b) { return sizes[b] - sizes[a]; }).some(function (big) {
        delete keys[big]; skipped.push(big); total -= sizes[big]; return total <= TOTAL_CAP;
      });
    }
    if (changed) saveMeta();
    var times = {}; for (var k2 in keys) times[k2] = (m[k2] || {}).t || now;
    state.skipped = skipped;
    return { keys: keys, times: times, deleted: deleted, skipped: skipped };
  }

  /* ── apply the account copy: newer wins per key; returns the keys that changed here ── */
  function apply(remote) {
    if (!remote || !remote.keys) return [];
    var m = meta(), rt = remote.times || {}, rd = remote.deleted || {}, changed = [];
    applying = true;
    try {
      for (var dk in rd) {
        if (!rd.hasOwnProperty(dk)) continue;
        var dT = rd[dk] || 0, le = m[dk] || {}, lT = le.d || le.t || 0;
        var exists = dk.indexOf('session:') === 0 ? sessionStorage.getItem(dk.slice(8)) !== null : localStorage.getItem(dk) !== null;
        if (dT > lT && (exists || !le.d)) {
          try { if (dk.indexOf('session:') === 0) sessionStorage.removeItem(dk.slice(8)); else localStorage.removeItem(dk); } catch (e) {}
          m[dk] = { d: dT }; if (exists) changed.push(dk);
        }
      }
      for (var k in remote.keys) {
        if (!remote.keys.hasOwnProperty(k)) continue;
        var v = remote.keys[k], t = rt[k] || 0;
        if (rd[k] && rd[k] > t) continue;
        var e = m[k] || {}, localT = e.d || e.t || 0;
        var local = k.indexOf('session:') === 0 ? sessionStorage.getItem(k.slice(8)) : localStorage.getItem(k);
        var take = local === null ? !(e.d && e.d > t) : t > localT;
        if (!take || local === v) { if (local === v && !e.t) m[k] = { h: hashOf(v), t: t }; continue; }
        try {
          if (k.indexOf('session:') === 0) sessionStorage.setItem(k.slice(8), v); else localStorage.setItem(k, v);
          m[k] = { h: hashOf(v), t: t || Date.now() };
          changed.push(k);
        } catch (e2) {}
      }
    } finally { applying = false; }
    saveMeta();
    return changed;
  }

  /* ── push: the snapshot goes up; the merged document comes back and is applied ── */
  function push(beacon, force) {
    if (!AUTH.user) return Promise.resolve(false);
    if (timer) { clearTimeout(timer); timer = null; }
    var snap = snapshot();
    var h = hashOf(JSON.stringify(snap.keys) + JSON.stringify(snap.deleted));
    if (h === lastHash && !force) { state.pending = false; return Promise.resolve(false); }
    var body = JSON.stringify({ data: snap, version: Date.now() });
    if (beacon && navigator.sendBeacon) {
      /* sendBeacon cannot PUT; POST to the same route is accepted as an upsert */
      try { if (navigator.sendBeacon(A.base + '/progress/' + NS + '?via=beacon', new Blob([body], { type: 'application/json' }))) { lastHash = h; state.pending = false; return Promise.resolve(true); } } catch (e) {}
    }
    return A.put('/progress/' + NS, JSON.parse(body)).then(function (r) {
      if (!r.ok) { state.error = r.offline ? 'offline' : ('http ' + r.status); emit('error', { error: state.error }); return false; }
      lastHash = h; state.error = ''; state.push = Date.now(); state.pending = false; saveState();
      var changed = r.data && r.data.data ? apply(r.data.data) : [];
      emit('pushed', { changed: changed });
      if (changed.length) emit('applied', { keys: changed });
      return true;
    });
  }
  function schedule() {
    if (!AUTH.user) return;
    state.pending = true;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () { timer = null; push(false); }, DEBOUNCE_MS);
  }

  /* ── sync: pull the account copy, apply, push what this device has ── */
  function sync(opts) {
    opts = opts || {};
    return AUTH.ready.then(function (u) {
      if (!u) return false;
      lastPull = Date.now();
      return A.get('/progress/' + NS).then(function (r) {
        if (!r.ok && r.status !== 404) { state.error = r.offline ? 'offline' : ('http ' + r.status); emit('error', { error: state.error }); return false; }
        var changed = r.ok && r.data && r.data.data ? apply(r.data.data) : [];
        state.error = ''; state.sync = Date.now(); saveState();
        return push(false, true).then(function () {
          emit('synced', { changed: changed });
          if (changed.length) {
            var fresh = opts.initial && (window.performance ? performance.now() : Infinity) < RELOAD_WINDOW_MS;
            var already = false;
            try { already = sessionStorage.getItem(RELOADED) === location.pathname; } catch (e) {}
            if (fresh && !already && !document.querySelector('input:focus, textarea:focus')) {
              try { sessionStorage.setItem(RELOADED, location.pathname); } catch (e) {}
              location.reload();
              return true;
            }
            emit('applied', { keys: changed });
          }
          return true;
        });
      });
    });
  }

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') push(true);
    else if (AUTH.user && Date.now() - lastPull > PULL_EVERY_MS) sync();
  });
  window.addEventListener('pagehide', function () { push(true); });
  loadState();
  var ready = sync({ initial: true });

  window.MT_PROGRESS = {
    ready: ready,
    sync: function () { return sync(); },
    push: function () { return push(false, true); },
    snapshot: snapshot,
    status: function () {
      var n = 0; try { for (var i = 0; i < localStorage.length; i++) if (tracked(localStorage.key(i))) n++; } catch (e) {}
      return { signedIn: !!AUTH.user, lastSync: state.sync, lastPush: state.push, tracked: n, skipped: state.skipped.slice(), pending: state.pending, error: state.error };
    }
  };
})();
