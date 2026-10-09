/**
 * THE ROPE — INTERVIEWER VIDEO LAYER
 * -----------------------------------------------------------------
 * One tile, three ways to put a human interviewer in it, chosen at run time
 * in this order (data/rope/media.js declares what exists):
 *
 *   live   a streaming video avatar from a provider (HeyGen Interactive
 *          Avatar or compatible), proxied by functions/api/rope/avatar: the
 *          interviewer is real video that speaks each question with lips in
 *          sync. Needs the provider's credentials on the server, never here.
 *   clips  recorded footage of a real interviewer, one clip per line
 *          (greeting, each question, bridges, closing), played with its own
 *          audio and captions.
 *   voice  the still portrait with the browser's speech engine, live captions
 *          and a speaking indicator — the mode the prototype runs in until a
 *          provider or a recording session exists.
 *
 * No synthetic animation of photographs: a mode either plays real video or
 * shows a photograph as a photograph. The tile always says which.
 *
 *   var V = MT_ROPE_VIDEO.create({ host, persona, media, lang, captions, muted });
 *   V.ready.then(mode => …)               'live' | 'clips' | 'voice'
 *   V.say(text, { clip, rate, pitch })    resolves when the line is delivered
 *   V.listen(true|false)  V.ack()  V.replay()  V.stop()
 *   V.setCaptions(b)  V.setMuted(b)  V.destroy()
 */
(function () {
  'use strict';
  if (window.MT_ROPE_VIDEO) return;

  var LIVEKIT_CDN = 'https://cdn.jsdelivr.net/npm/livekit-client@2.5.7/dist/livekit-client.umd.js';   /* loaded only when a live provider is enabled */

  function el(tag, cls, html) { var n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; }
  function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function T(lang, en, id) { return lang === 'id' ? id : en; }

  /* ─── captions: the sentence, with the words already said marked as they come ─── */
  function Captions(box) {
    var spans = [], text = '';
    function set(t) {
      text = String(t || ''); spans = []; box.innerHTML = '';
      var re = /\S+/g, m, last = 0;
      while ((m = re.exec(text))) {
        if (m.index > last) box.appendChild(document.createTextNode(text.slice(last, m.index)));
        var s = el('span', 'w', esc(m[0])); s.dataset.i = m.index; box.appendChild(s); spans.push(s); last = m.index + m[0].length;
      }
      box.classList.add('on');
    }
    function at(charIndex) { spans.forEach(function (s) { s.classList.toggle('said', +s.dataset.i <= charIndex); }); }
    function done() { spans.forEach(function (s) { s.classList.add('said'); }); }
    function clear() { box.classList.remove('on'); }
    return { set: set, at: at, done: done, clear: clear, words: function () { return spans.map(function (s) { return +s.dataset.i; }); } };
  }

  /* an estimated word clock for sources that report no boundaries (clips, streams) */
  function wordClock(text, rate, onWord, onEnd) {
    var idx = [], re = /\S+/g, m; while ((m = re.exec(text))) idx.push([m.index, m[0].length]);
    var t = 140, timers = [];
    idx.forEach(function (w) { timers.push(setTimeout(function () { onWord(w[0]); }, t / (rate || 1))); t += w[1] * 62 + 105; });
    timers.push(setTimeout(onEnd, t / (rate || 1) + 250));
    return { cancel: function () { timers.forEach(clearTimeout); }, ms: t / (rate || 1) + 250 };
  }

  /* ─── voice provider: portrait + speech engine ─── */
  function voiceProvider(V, o) {
    var synth = window.speechSynthesis || null, keep = null, cur = null;
    function pickVoice(lang) {
      if (!synth) return null;
      var vs = synth.getVoices() || [], want = lang === 'id' ? /^id/i : /^en/i;
      var pool = vs.filter(function (v) { return want.test(v.lang); });
      if (!pool.length) return null;
      /* the more natural engines first; then any local voice; then whatever matches */
      var score = function (v) { return (/natural|neural|premium|enhanced|siri|google/i.test(v.name) ? 4 : 0) + (v.localService ? 1 : 0) + (/female|male/i.test(v.name) ? 0 : 0); };
      pool.sort(function (a, b) { return score(b) - score(a); });
      return pool[0];
    }
    return {
      mode: 'voice',
      say: function (text, opts) {
        opts = opts || {};
        return new Promise(function (resolve) {
          var finished = false, wc = null;
          function end() { if (finished) return; finished = true; if (keep) { clearInterval(keep); keep = null; } if (wc) wc.cancel(); V._talking(false); V.cc.done(); setTimeout(function () { V.cc.clear(); }, 1800); resolve(); }
          V.cc.set(text);
          if (V.muted || !synth || !window.SpeechSynthesisUtterance) {
            /* silent delivery: captions on an estimated clock, so the line still has a duration */
            V._talking(true);
            wc = wordClock(text, opts.rate || 1, function (i) { V.cc.at(i); }, end);
            cur = { cancel: end };
            return;
          }
          try {
            synth.cancel();
            var u = new SpeechSynthesisUtterance(text);
            u.lang = o.lang === 'id' ? 'id-ID' : 'en-US';
            var v = pickVoice(o.lang); if (v) u.voice = v;
            u.rate = opts.rate || 1; u.pitch = opts.pitch || 1;
            var boundaries = 0;
            u.onboundary = function (ev) { boundaries++; if (ev && typeof ev.charIndex === 'number') V.cc.at(ev.charIndex); V._pulse(); };
            u.onstart = function () {
              V._talking(true);
              /* engines that report no word boundaries get the estimated clock */
              setTimeout(function () { if (!finished && boundaries === 0) wc = wordClock(text, u.rate, function (i) { V.cc.at(i); V._pulse(); }, function () {}); }, 700);
              /* Chrome stops long utterances after ~15 s unless nudged */
              keep = setInterval(function () { try { if (synth.speaking && !synth.paused) { synth.pause(); synth.resume(); } } catch (e) {} }, 9000);
            };
            u.onend = u.onerror = end;
            cur = { cancel: function () { try { synth.cancel(); } catch (e) {} end(); } };
            synth.speak(u);
            /* belt and braces: some engines never fire onend */
            setTimeout(end, Math.min(2200 + text.length * 70 / (u.rate || 1), 40000));
          } catch (e) { end(); }
        });
      },
      stop: function () { if (cur) { cur.cancel(); cur = null; } },
      destroy: function () { this.stop(); }
    };
  }

  /* ─── clips provider: recorded footage of a real interviewer ─── */
  function clipsProvider(V, o, clips) {
    var vid = el('video', 'rv-video'); vid.playsInline = true; vid.preload = 'auto'; vid.setAttribute('aria-hidden', 'true');
    V.el.insertBefore(vid, V.el.querySelector('.rv-grade'));
    var voice = voiceProvider(V, o), cur = null;
    function src(c) { return Array.isArray(c.src) ? c.src : [c.src]; }
    return {
      mode: 'clips',
      say: function (text, opts) {
        opts = opts || {};
        var c = opts.clip && clips[opts.clip];
        if (!c) return voice.say(text, opts);                    /* no footage for this line: the voice reads it */
        return new Promise(function (resolve) {
          var finished = false, wc = null;
          function end() { if (finished) return; finished = true; if (wc) wc.cancel(); V._talking(false); V.el.classList.remove('rv-playing'); V.cc.done(); setTimeout(function () { V.cc.clear(); }, 1800); resolve(); }
          vid.innerHTML = ''; src(c).forEach(function (u) { var s = el('source'); s.src = u; s.type = /\.webm(\?|$)/.test(u) ? 'video/webm' : 'video/mp4'; vid.appendChild(s); });
          vid.muted = !!V.muted; vid.load();
          V.cc.set(c.text || text);
          vid.onplaying = function () { V._talking(true); V.el.classList.add('rv-playing'); wc = wordClock(c.text || text, 1, function (i) { V.cc.at(i); V._pulse(); }, function () {}); };
          vid.onended = end; vid.onerror = function () { end(); };
          cur = { cancel: function () { try { vid.pause(); } catch (e) {} end(); } };
          vid.play().catch(function () { /* autoplay refused: read it instead */ finished = true; voice.say(text, opts).then(resolve); });
        });
      },
      stop: function () { if (cur) { cur.cancel(); cur = null; } voice.stop(); },
      destroy: function () { this.stop(); try { vid.removeAttribute('src'); vid.load(); } catch (e) {} }
    };
  }

  /* ─── live provider: a streaming avatar behind the project's own endpoint ───
     Contract (see functions/api/rope/avatar):
       POST {endpoint}/session  {persona, lang}      → { session, url, token }   (a LiveKit room)
       POST {endpoint}/speak    {session, text}      → { ok }
       POST {endpoint}/stop     {session}            → { ok }
     The client never sees the provider's key. */
  function loadScript(u) { return new Promise(function (res, rej) { var s = el('script'); s.src = u; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
  function post(u, body) {
    var ctl = ('AbortController' in window) ? new AbortController() : null, tm = ctl && setTimeout(function () { ctl.abort(); }, 6000);
    return fetch(u, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body || {}), signal: ctl ? ctl.signal : undefined })
      .then(function (r) { if (tm) clearTimeout(tm); if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); });
  }
  function liveProvider(V, o, live) {
    var vid = el('video', 'rv-video'); vid.playsInline = true; vid.autoplay = true; vid.setAttribute('aria-hidden', 'true');
    var aud = el('audio'); aud.autoplay = true;
    V.el.insertBefore(vid, V.el.querySelector('.rv-grade'));
    var voice = voiceProvider(V, o), room = null, session = null, ctx = null, an = null, cur = null;
    function connect() {
      return post(live.endpoint + '/session', { persona: o.persona.id, lang: o.lang }).then(function (r) {
        if (!r || !r.url || !r.token) throw new Error('no session');
        session = r.session;
        return (window.LivekitClient ? Promise.resolve() : loadScript(live.livekit || LIVEKIT_CDN)).then(function () {
          var LK = window.LivekitClient; room = new LK.Room({ adaptiveStream: true });
          room.on(LK.RoomEvent.TrackSubscribed, function (track) {
            if (track.kind === 'video') { track.attach(vid); V.el.classList.add('rv-playing'); }
            if (track.kind === 'audio') { track.attach(aud); aud.muted = !!V.muted; meter(track); }
          });
          return room.connect(r.url, r.token);
        });
      });
    }
    /* the avatar's own audio level drives the speaking indicator and tells us when a line has ended */
    var level = 0;
    function meter(track) {
      try {
        var AC = window.AudioContext || window.webkitAudioContext; ctx = new AC();
        var ms = new MediaStream([track.mediaStreamTrack]); var src = ctx.createMediaStreamSource(ms); an = ctx.createAnalyser(); an.fftSize = 256; src.connect(an);
        var data = new Uint8Array(an.frequencyBinCount);
        (function loop() { if (!an) return; an.getByteFrequencyData(data); var s = 0; for (var i = 0; i < data.length; i++) s += data[i]; level = s / data.length / 255; requestAnimationFrame(loop); })();
      } catch (e) {}
    }
    return {
      mode: 'live',
      connect: connect,
      say: function (text, opts) {
        opts = opts || {};
        if (!session) return voice.say(text, opts);
        return new Promise(function (resolve) {
          var finished = false, wc = null, started = false, quiet = 0, poll = null;
          function end() { if (finished) return; finished = true; if (wc) wc.cancel(); if (poll) clearInterval(poll); V._talking(false); V.cc.done(); setTimeout(function () { V.cc.clear(); }, 1800); resolve(); }
          V.cc.set(text);
          post(live.endpoint + '/speak', { session: session, text: text }).then(function () {
            V._talking(true);
            wc = wordClock(text, 1, function (i) { V.cc.at(i); }, function () {});
            poll = setInterval(function () {
              if (level > 0.04) { started = true; quiet = 0; V._pulse(); } else if (started) { quiet += 120; if (quiet > 900) end(); }
            }, 120);
            setTimeout(end, Math.min(3000 + text.length * 80, 60000));
          }).catch(function () { finished = true; voice.say(text, opts).then(resolve); });
          cur = { cancel: end };
        });
      },
      stop: function () { if (cur) { cur.cancel(); cur = null; } voice.stop(); },
      destroy: function () { this.stop(); if (session) post(live.endpoint + '/stop', { session: session }).catch(function () {}); if (room) { try { room.disconnect(); } catch (e) {} } if (ctx) { try { ctx.close(); } catch (e) {} } an = null; }
    };
  }

  function create(o) {
    var lang = o.lang || 'en', media = o.media || {}, pm = (media.personas || {})[o.persona.id] || {};
    var tile = el('div', 'rv-tile idle');
    tile.setAttribute('role', 'img'); tile.setAttribute('aria-label', o.persona.name || 'Interviewer');
    var still = el('img', 'rv-still'); still.alt = ''; still.decoding = 'async'; still.src = pm.still || o.persona.still || ''; tile.appendChild(still);
    tile.appendChild(el('div', 'rv-grade'));
    var ring = el('div', 'rv-ring', '<i></i><i></i><i></i>'); tile.appendChild(ring);
    var cc = el('div', 'rv-cc'); cc.setAttribute('aria-live', 'polite'); tile.appendChild(cc);
    var modeChip = el('span', 'rv-mode'); tile.appendChild(modeChip);
    if (o.host) o.host.appendChild(tile);

    var V = { el: tile, cc: Captions(cc), muted: !!o.muted, captions: o.captions !== false, mode: null, last: null, _p: null };
    tile.classList.toggle('no-cc', !V.captions);
    var pulseT = 0;
    V._talking = function (on) { tile.classList.toggle('talking', !!on); if (on) tile.classList.remove('listening'); if (!on) ring.style.setProperty('--lv', '0'); };
    V._pulse = function () { pulseT = Date.now(); ring.style.setProperty('--lv', '1'); setTimeout(function () { if (Date.now() - pulseT >= 180) ring.style.setProperty('--lv', '.35'); }, 190); };
    V.listen = function (on) { if (tile.classList.contains('talking')) return; tile.classList.toggle('listening', !!on); };
    V.ack = function () { tile.classList.add('ack'); setTimeout(function () { tile.classList.remove('ack'); }, 900); };
    V.setCaptions = function (b) { V.captions = !!b; tile.classList.toggle('no-cc', !b); };
    V.setMuted = function (b) { V.muted = !!b; var v = tile.querySelector('video'); if (v) v.muted = V.muted; var a = tile.querySelector('audio'); if (a) a.muted = V.muted; if (V.muted && window.speechSynthesis) { try { window.speechSynthesis.cancel(); } catch (e) {} } };
    V.say = function (text, opts) { V.last = { text: text, opts: opts || {} }; return V._p ? V._p.say(text, opts) : Promise.resolve(); };
    V.replay = function () { return V.last ? V.say(V.last.text, V.last.opts) : Promise.resolve(); };
    V.stop = function () { if (V._p) V._p.stop(); V._talking(false); V.cc.clear(); };
    V.destroy = function () { if (V._p) V._p.destroy(); if (tile.parentNode) tile.parentNode.removeChild(tile); };

    function label(mode) {
      var t = mode === 'live' ? T(lang, 'AI interviewer · live video', 'Pewawancara AI · video langsung')
            : mode === 'clips' ? T(lang, 'AI interviewer · recorded video', 'Pewawancara AI · video rekaman')
            : T(lang, 'AI interviewer · photo + voice', 'Pewawancara AI · foto + suara');
      modeChip.textContent = t; tile.classList.add('rv-' + mode);
    }
    V.ready = new Promise(function (resolve) {
      var done = function (p) { V._p = p; V.mode = p.mode; label(p.mode); resolve(p.mode); };
      var live = media.live;
      if (live && live.enabled && live.endpoint && window.fetch) {
        var lp = liveProvider(V, o, live);
        lp.connect().then(function () { done(lp); }).catch(function () { try { lp.destroy(); } catch (e) {} fallback(); });
      } else fallback();
      function fallback() {
        if (pm.clips && Object.keys(pm.clips).length) done(clipsProvider(V, o, pm.clips));
        else done(voiceProvider(V, o));
      }
    });
    return V;
  }

  function describe(media, personaId, lang) {
    var pm = ((media || {}).personas || {})[personaId] || {};
    if (media && media.live && media.live.enabled) return T(lang, 'Live video interviewer', 'Pewawancara video langsung');
    if (pm.clips && Object.keys(pm.clips).length) return T(lang, 'Recorded video interviewer', 'Pewawancara video rekaman');
    return T(lang, 'Photo + voice interviewer', 'Pewawancara foto + suara');
  }

  var CSS = '' +
    '.rv-tile{position:relative;width:100%;aspect-ratio:16/9;background:#0C1626;overflow:hidden;border-radius:inherit}' +
    '.rv-tile .rv-still{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 38%;display:block;transform-origin:50% 45%;animation:rvDrift 28s ease-in-out infinite alternate}' +
    '@keyframes rvDrift{from{transform:scale(1.02) translateY(0)}to{transform:scale(1.06) translateY(-.6%)}}' +
    '@media(prefers-reduced-motion:reduce){.rv-tile .rv-still{animation:none}}' +
    '.rv-tile video.rv-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;opacity:0;transition:opacity .5s}' +
    '.rv-tile.rv-playing video.rv-video{opacity:1}' +
    '.rv-tile .rv-grade{position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,rgba(5,10,18,.18),transparent 30%,transparent 60%,rgba(4,8,16,.62)),radial-gradient(120% 90% at 50% 108%,rgba(201,168,76,.1),transparent 55%)}' +
    '.rv-tile .rv-ring{position:absolute;left:14px;bottom:14px;z-index:3;display:inline-flex;gap:3px;align-items:flex-end;height:18px;padding:0 2px;opacity:0;transition:opacity .25s;--lv:0}' +
    '.rv-tile.talking .rv-ring{opacity:1}' +
    '.rv-tile .rv-ring i{width:3px;border-radius:2px;background:#F0D878;height:4px;transition:height .12s}' +
    '.rv-tile.talking .rv-ring i{animation:rvEq .55s ease-in-out infinite alternate}' +
    '.rv-tile.talking .rv-ring i:nth-child(2){animation-delay:.14s}.rv-tile.talking .rv-ring i:nth-child(3){animation-delay:.28s}' +
    '@keyframes rvEq{from{height:4px}to{height:calc(8px + 10px * max(var(--lv),.45))}}' +
    '.rv-tile .rv-cc{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:30px 16px 12px 16px;color:rgba(245,239,230,.55);font-size:15px;font-weight:600;line-height:1.5;text-shadow:0 1px 8px rgba(0,0,0,.8);background:linear-gradient(180deg,transparent,rgba(4,8,16,.86) 55%);opacity:0;transform:translateY(6px);transition:opacity .35s,transform .35s}' +
    '.rv-tile .rv-cc.on{opacity:1;transform:none}' +
    '.rv-tile.no-cc .rv-cc{opacity:0}' +
    '.rv-tile .rv-cc .w{transition:color .12s}.rv-tile .rv-cc .w.said{color:#F5EFE6}' +
    '.rv-tile.talking .rv-cc{padding-left:44px}' +
    '.rv-tile .rv-mode{position:absolute;right:12px;top:12px;z-index:3;font-size:9.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:rgba(245,239,230,.88);background:rgba(5,10,18,.62);backdrop-filter:blur(8px);border:1px solid rgba(245,239,230,.26);border-radius:999px;padding:5px 10px;pointer-events:none}' +
    '.rv-tile.listening::after{content:"";position:absolute;inset:0;z-index:1;pointer-events:none;box-shadow:inset 0 0 0 2px rgba(240,216,120,.35);border-radius:inherit;animation:rvListen 2.4s ease-in-out infinite}' +
    '@keyframes rvListen{50%{box-shadow:inset 0 0 0 2px rgba(240,216,120,.08)}}' +
    '.rv-tile.ack .rv-still{animation:rvAck .9s ease-out 1}' +
    '@keyframes rvAck{30%{transform:scale(1.045) translateY(.5%)}}' +
    '@media(max-width:640px){.rv-tile .rv-cc{font-size:13px;padding:22px 12px 10px}.rv-tile.talking .rv-cc{padding-left:38px}.rv-tile .rv-mode{font-size:8.5px;padding:4px 8px;right:8px;top:8px}.rv-tile .rv-ring{left:10px;bottom:11px}}';
  function style() { if (document.getElementById('ropeVideoCss')) return; var s = el('style'); s.id = 'ropeVideoCss'; s.textContent = CSS; document.head.appendChild(s); }
  if (document.head) style(); else document.addEventListener('DOMContentLoaded', style);

  window.MT_ROPE_VIDEO = { create: create, describe: describe, version: 1 };
})();
