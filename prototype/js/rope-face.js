/* ═══ The Rope · interviewer face rig ═══
   A real-time performance of the interviewer's own photograph. The portrait is
   a texture on a 468-point face mesh (MediaPipe topology, data/rope/facemesh.js;
   points measured once per persona by scripts/build-interviewer-rigs.py). Every
   frame the mesh is deformed — jaw and lips from the visemes of the spoken
   question, eyelids for blinks, brows, a three-axis head pose with breathing,
   nods while the candidate speaks, and gaze — and drawn with WebGL as a
   piecewise-affine warp of the real pixels. The mouth interior (teeth, cavity,
   tongue) is shaded where the lips part. The canvas is piped through
   captureStream() into a <video>, so the interviewer really is delivered as a
   video stream, and the same engine renders the pre-rendered loops in
   assets/rope/interviewers/ (used as posters and as the no-WebGL fallback).

   Honesty: a photograph animated in-repo with a synthetic voice; the stage
   labels it as a simulation. Nothing is uploaded; nothing runs off-device.

   API  window.MT_FACE_RIG.create({ portrait, rig, host, gaze0 }) → rig
        rig.ready (Promise) · rig.canvas · rig.video (captureStream, if available)
        rig.lips → { start(text, rate), boundary(ev), stop() }   (speech hooks)
        rig.setMood('idle' | 'listening' | 'talking' | 'ack') · rig.pulseListen() · rig.nod()
        rig.renderAt(ms) (deterministic frame for offline capture) · rig.destroy() */
(function () {
  'use strict';
  var MESH = window.MT_FACE_MESH;
  if (!MESH) return;

  /* ─── visemes: jaw opening, lip rounding, lip widening per letter ─── */
  var VIS = { a: [0.78, 0.00, 0.10], e: [0.50, 0.00, 0.55], i: [0.34, 0.00, 0.75], o: [0.52, 0.85, 0.00], u: [0.32, 1.00, 0.00], w: [0.28, 0.80, 0.00], y: [0.28, 0.10, 0.45],
    m: [0.02, 0.15, 0.00], b: [0.02, 0.15, 0.00], p: [0.02, 0.15, 0.00], f: [0.14, 0.05, 0.20], v: [0.14, 0.05, 0.20], l: [0.30, 0.00, 0.15], r: [0.26, 0.30, 0.00], s: [0.18, 0.00, 0.40], z: [0.18, 0.00, 0.40],
    t: [0.22, 0.00, 0.15], d: [0.22, 0.00, 0.15], n: [0.22, 0.00, 0.15], k: [0.28, 0.00, 0.05], g: [0.28, 0.00, 0.05], c: [0.22, 0.00, 0.15], h: [0.34, 0.00, 0.05], j: [0.24, 0.10, 0.10], q: [0.28, 0.30, 0.00], x: [0.20, 0.00, 0.20] };
  function lipEngine() {
    var seq = [], active = false, text = '', rate = 1, synthetic = null, boundaries = 0, startAt = 0, lastWordAt = 0;
    var jaw = 0, round = 0, wide = 0;
    function msPerChar() { return 62 / rate; }
    function schedule(word, from) {
      var out = [], t = from, chars = word.toLowerCase().replace(/[^a-zÀ-ɏ']/g, '');
      if (!chars) { out.push({ t: from, v: [0.05, 0, 0] }); return out; }
      for (var i = 0; i < chars.length; i++) {
        var v = VIS[chars[i]] || (/[aeiou]/.test(chars[i]) ? VIS.a : VIS.t);
        var dur = msPerChar() * (/[aeiou]/.test(chars[i]) ? 1.35 : 0.85);
        out.push({ t: t, v: [v[0] * (0.88 + Math.random() * 0.24), v[1], v[2]] }); t += dur;
      }
      out.push({ t: t, v: [0.06, 0.05, 0.05] });
      return out;
    }
    function start(txt, r) {
      text = String(txt || ''); rate = r || 1; active = true; boundaries = 0; startAt = now(); seq = []; lastWordAt = startAt;
      synthetic = setTimeout(function () {
        if (!active || boundaries) return;
        var t = now() + 80;
        text.split(/\s+/).forEach(function (w) { seq = seq.concat(schedule(w, t)); t += (w.replace(/[^a-zÀ-ɏ']/gi, '').length || 1) * msPerChar() * 1.05 + 90; });
      }, 650);
    }
    function boundary(ev) {
      if (!active) return; boundaries++;
      var idx = ev && typeof ev.charIndex === 'number' ? ev.charIndex : 0;
      var m = /^\S+/.exec(text.slice(idx)); if (!m) return;
      seq = schedule(m[0], now()); lastWordAt = now();
    }
    function stop() { active = false; seq = []; if (synthetic) { clearTimeout(synthetic); synthetic = null; } }
    var clock = null;
    function now() { return clock != null ? clock : performance.now(); }
    function step(t) {
      clock = t;
      var target = null;
      for (var i = seq.length - 1; i >= 0; i--) if (seq[i].t <= t) { target = seq[i].v; break; }
      if (!active) target = null;
      if (target && seq.length && t > seq[seq.length - 1].t + 260) target = null;
      var tj = target ? target[0] : 0, tr = target ? target[1] : 0, tw = target ? target[2] : 0;
      jaw += (tj - jaw) * (tj > jaw ? 0.45 : 0.30);
      round += (tr - round) * 0.24;
      wide += (tw - wide) * 0.24;
      clock = null;
      return { jaw: jaw, round: round, wide: wide, active: active, sinceWord: t - lastWordAt };
    }
    return { start: start, boundary: boundary, stop: stop, step: step, isActive: function () { return active; }, drive: start, offline: function (t) { clock = t; } };
  }

  /* ─── geometry helpers ─── */
  function sub(a, b) { return [a[0] - b[0], a[1] - b[1]]; }
  function len(a) { return Math.sqrt(a[0] * a[0] + a[1] * a[1]); }
  function norm(a) { var l = len(a) || 1; return [a[0] / l, a[1] / l]; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function smooth(x) { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); }
  function rayToRect(c, d, W, H) {
    var best = Infinity;
    if (d[0] > 1e-6) best = Math.min(best, (W - c[0]) / d[0]); if (d[0] < -1e-6) best = Math.min(best, (0 - c[0]) / d[0]);
    if (d[1] > 1e-6) best = Math.min(best, (H - c[1]) / d[1]); if (d[1] < -1e-6) best = Math.min(best, (0 - c[1]) / d[1]);
    return [c[0] + d[0] * best, c[1] + d[1] * best];
  }
  function ang(c, p) { return Math.atan2(p[1] - c[1], p[0] - c[0]); }
  /* triangulate the band between two rings sorted by angle around c */
  function zip(inner, outer, c, pos, out) {
    var ia = inner.map(function (i) { return { i: i, a: ang(c, pos[i]) }; }).sort(function (p, q) { return p.a - q.a; });
    var oa = outer.map(function (i) { return { i: i, a: ang(c, pos[i]) }; }).sort(function (p, q) { return p.a - q.a; });
    var i = 0, j = 0, n = ia.length, m = oa.length, steps = n + m;
    /* start both at the smallest angle; advance whichever next angle is smaller */
    for (var k = 0; k < steps; k++) {
      var na = ia[(i + 1) % n].a + (i + 1 >= n ? Math.PI * 2 : 0), ma = oa[(j + 1) % m].a + (j + 1 >= m ? Math.PI * 2 : 0);
      if ((i < n && na <= ma) || j >= m) { out.push(ia[i % n].i, oa[j % m].i, ia[(i + 1) % n].i); i++; }
      else { out.push(ia[i % n].i, oa[j % m].i, oa[(j + 1) % m].i); j++; }
    }
  }

  var VS = 'attribute vec2 a_pos;attribute vec2 a_uv;attribute vec2 a_m;uniform vec2 u_size;uniform vec2 u_uvOff;varying vec2 v_uv;varying vec2 v_m;' +
    'void main(){v_uv=a_uv+u_uvOff;v_m=a_m;vec2 p=a_pos/u_size*2.0-1.0;gl_Position=vec4(p.x,-p.y,0.0,1.0);}';
  var FS = 'precision mediump float;uniform sampler2D u_tex;varying vec2 v_uv;void main(){gl_FragColor=texture2D(u_tex,v_uv);}';
  var FS_MOUTH = 'precision mediump float;uniform float u_open;uniform vec3 u_lip;varying vec2 v_m;' +
    'void main(){float v=v_m.y;float u=v_m.x;float side=1.0-smoothstep(0.40,0.95,abs(u));' +
    'float tf=mix(0.46,0.24,u_open);' +                                       /* teeth take less of the opening as it widens */
    'float teeth=smoothstep(0.03,0.09,v)*(1.0-smoothstep(tf-0.05,tf+0.04,v))*side;' +
    'float gaps=0.93+0.07*cos(u*15.0);' +
    'vec3 tooth=vec3(0.84,0.78,0.71)*gaps*(1.0-0.45*abs(u)*abs(u))*(1.0-0.30*smoothstep(0.0,tf,v))*(0.86+0.14*smoothstep(0.0,0.12,v));' +
    'vec3 cav=mix(vec3(0.17,0.05,0.05),vec3(0.07,0.02,0.02),smoothstep(0.0,1.0,v));' +
    'float tongue=smoothstep(0.62,0.95,v)*(1.0-smoothstep(0.35,0.75,abs(u)))*smoothstep(0.25,0.6,u_open);' +
    'cav=mix(cav,vec3(0.50,0.20,0.20),tongue*0.75);' +
    'vec3 col=mix(cav,tooth,teeth);' +
    'float lipEdge=smoothstep(0.0,0.05,v)*(1.0-smoothstep(0.93,1.0,v));' +   /* lips shadow the cavity at both edges */
    'col=mix(u_lip*0.55,col,lipEdge);' +
    'gl_FragColor=vec4(col,1.0);}';

  function compile(gl, type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; }
  function program(gl, vs, fs) { var p = gl.createProgram(); gl.attachShader(p, compile(gl, gl.VERTEX_SHADER, vs)); gl.attachShader(p, compile(gl, gl.FRAGMENT_SHADER, fs)); gl.linkProgram(p); if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p)); return p; }

  /* eye contours: outer corner, lower lid (outer → inner), inner corner, upper lid (outer → inner) */
  var EYES = [
    { c0: 33, lower: [7, 163, 144, 145, 153, 154, 155], c1: 133, upper: [246, 161, 160, 159, 158, 157, 173] },
    { c0: 263, lower: [249, 390, 373, 374, 380, 381, 382], c1: 362, upper: [466, 388, 387, 386, 385, 384, 398] }
  ];
  function supported() {
    try { var c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; }
  }

  function create(opts) {
    var host = opts.host, W = 1280, H = 720;
    var canvas = document.createElement('canvas'); canvas.className = 'stage-rig'; canvas.width = W; canvas.height = H; canvas.setAttribute('aria-hidden', 'true');
    var gl = canvas.getContext('webgl2', { antialias: true, alpha: false, premultipliedAlpha: false, preserveDrawingBuffer: !!opts.offline }) || canvas.getContext('webgl', { antialias: true, alpha: false, preserveDrawingBuffer: !!opts.offline });
    if (!gl) throw new Error('webgl');
    var video = null, stream = null;
    if (!opts.offline) {
      try { if (canvas.captureStream) { stream = canvas.captureStream(30); video = document.createElement('video'); video.className = 'stage-clip stage-render'; video.muted = true; video.playsInline = true; video.autoplay = true; video.setAttribute('aria-hidden', 'true'); video.srcObject = stream; video.play().catch(function () {}); } } catch (e) { video = null; }
    }
    if (host) { host.appendChild(canvas); if (video) host.appendChild(video); else canvas.classList.add('stage-rig-visible'); }
    var lips = lipEngine();
    var R = { canvas: canvas, video: video, lips: lips, mood: 'idle', destroyed: false };
    var base = null, cur = null, uv = null, mouthUV = null, nFace = 468, nAll = 0, idx = { main: [], mouth: [], eye: [] }, wt = null, face = null, AX = null, texture = null;
    var prog, progM, bufPos, bufUV, bufM, ibMain, ibMouth, ibEye;
    var mouth = { center: null, w: 1, corners: null };
    var listenPulse = 0, nodAmp = 0, nodT = 0, blinkAt = 0, blink = 0, blinkDur = 170, gaze = [0, 0], gazeT = [0, 0], gazeNext = 0, browPulse = 0, ackT = -1, emph = 0, emphRoll = 0, lastBoundary = 0, talkWas = false, t0 = null, lastListen = 0;
    var gaze0 = opts.gaze0 || [0, 0];

    function build(rig) {
      W = rig.w; H = rig.h; canvas.width = W; canvas.height = H;
      var pts = rig.pts;
      nFace = 468;
      var fx = rig.face.cx, fy = rig.face.cy, fh = rig.face.h, fw = rig.face.w;
      var C = [fx, fy];
      /* face axes from forehead → chin */
      var down = norm(sub(pts[152], pts[10])), right = [-down[1], down[0]];
      if (right[0] < 0) right = [-right[0], -right[1]];
      AX = { down: down, right: right, C: C, fh: fh, fw: fw };
      var oval = MESH.oval;
      /* rings: hull (follows the head softly, includes the hair) and outer (fixed, on the frame edge) */
      var hull = [], outer = [];
      oval.forEach(function (i) {
        var d = sub(pts[i], C), up = -(d[0] * down[0] + d[1] * down[1]) / (fh * 0.5);
        var k = 1.55 + 0.9 * clamp(up, 0, 1.4);
        var hp = [C[0] + d[0] * k, C[1] + d[1] * k];
        hp = [clamp(hp[0], 6, W - 6), clamp(hp[1], 6, H - 6)];
        hull.push(hp);
        outer.push(rayToRect(C, norm(d), W, H));
      });
      var corners = [[0, 0], [W, 0], [W, H], [0, H]];
      var all = [];
      for (var i = 0; i < nFace; i++) all.push([pts[i][0], pts[i][1], pts[i][2]]);
      var hullIdx = hull.map(function (p) { all.push([p[0], p[1], 0]); return all.length - 1; });
      var outerIdx = outer.map(function (p) { all.push([p[0], p[1], 0]); return all.length - 1; });
      corners.forEach(function (p) { all.push([p[0], p[1], 0]); outerIdx.push(all.length - 1); });
      nAll = all.length;
      base = new Float32Array(nAll * 3); cur = new Float32Array(nAll * 2); uv = new Float32Array(nAll * 2); mouthUV = new Float32Array(nAll * 2);
      for (i = 0; i < nAll; i++) { base[i * 3] = all[i][0]; base[i * 3 + 1] = all[i][1]; base[i * 3 + 2] = all[i][2]; uv[i * 2] = all[i][0] / W; uv[i * 2 + 1] = all[i][1] / H; }
      /* index sets */
      var inUp = {}, inLow = {}, inner = {};
      MESH.innerUp.forEach(function (i) { inUp[i] = 1; inner[i] = 1; }); MESH.innerLow.forEach(function (i) { inLow[i] = 1; inner[i] = 1; });
      var main = [], mo = [], ey = [];
      MESH.tris.forEach(function (t) {
        if (inner[t[0]] && inner[t[1]] && inner[t[2]]) return;   /* never drawn textured: the cavity shader owns the opening */
        main.push(t[0], t[1], t[2]);
      });
      /* the tessellation leaves the eyes and the mouth interior open; close them as strips */
      var U = MESH.innerUp, Lw = MESH.innerLow;
      for (i = 0; i + 1 < U.length; i++) { mo.push(U[i], U[i + 1], Lw[i + 1], U[i], Lw[i + 1], Lw[i]); }
      EYES.forEach(function (E) {
        ey.push(E.c0, E.lower[0], E.upper[0]);
        for (var j = 0; j + 1 < E.lower.length; j++) { ey.push(E.lower[j], E.lower[j + 1], E.upper[j + 1], E.lower[j], E.upper[j + 1], E.upper[j]); }
        ey.push(E.lower[E.lower.length - 1], E.c1, E.upper[E.upper.length - 1]);
      });
      main = main.concat(ey);
      var pos2 = all.map(function (p) { return [p[0], p[1]]; });
      zip(oval, hullIdx, C, pos2, main);
      zip(hullIdx, outerIdx, C, pos2, main);
      idx = { main: new Uint16Array(main), mouth: new Uint16Array(mo), eye: new Uint16Array(ey) };
      /* mouth geometry and per-vertex weights */
      var mc = [(pts[13][0] + pts[14][0]) / 2, (pts[13][1] + pts[14][1]) / 2];
      var mw = len(sub(pts[61], pts[291]));
      mouth = { center: mc, w: mw, corners: [pts[61], pts[291]] };
      var chinV = (pts[152][0] - mc[0]) * down[0] + (pts[152][1] - mc[1]) * down[1];
      var outerUp = {}; MESH.outerUp.forEach(function (i) { outerUp[i] = 1; });
      var lipSet = {}; MESH.lips.forEach(function (i) { lipSet[i] = 1; });
      var browSet = {}; MESH.lbrow.concat(MESH.rbrow).forEach(function (i) { browSet[i] = 1; });
      wt = { jaw: new Float32Array(nAll), roundv: new Float32Array(nAll), wideX: new Float32Array(nAll), wideY: new Float32Array(nAll), brow: new Float32Array(nAll), pose: new Float32Array(nAll), lid: [new Float32Array(nAll), new Float32Array(nAll)], lidPair: [[], []], eyes: [] };
      for (i = 0; i < nAll; i++) {
        var p = [all[i][0], all[i][1]], d = sub(p, mc), u = d[0] * right[0] + d[1] * right[1], v = d[0] * down[0] + d[1] * down[1];
        var isFace = i < nFace, isHull = i >= nFace && i < nFace + hull.length;
        wt.pose[i] = isFace ? 1 : isHull ? 0.42 : 0;
        /* jaw: below the lip seam, full at the chin, less toward the cheeks */
        var lateral = clamp(1 - Math.max(0, Math.abs(u) - mw * 0.55) / (fw * 0.45), 0.22, 1);
        if (isFace || isHull) {
          /* the lips part as a lens — most in the middle, not at the corners — and the chin below follows the jaw as a whole */
          var lens = Math.sqrt(clamp(1 - Math.pow(Math.abs(u) / (mw * 0.56), 2), 0, 1));
          if (v > 0) {
            var vr = clamp(v / chinV, 0, 1.15), chinMix = smooth(v / (chinV * 0.55));
            wt.jaw[i] = Math.pow(clamp(vr, 0, 1), 0.75) * lateral * (lens * (1 - chinMix) + chinMix) * (isHull ? 0.14 : 1);
          }
          else if (outerUp[i]) wt.jaw[i] = -0.06 * lens;
          if (inLow[i]) wt.jaw[i] = 1.08 * lens;
          if (i === 78 || i === 308) wt.jaw[i] = 0.08;
        }
        if (isFace) {
          var dm = len(d);
          wt.roundv[i] = lipSet[i] ? 1 : clamp(1 - dm / (mw * 1.25), 0, 1) * clamp(1 - dm / (mw * 1.25), 0, 1);
          /* widening: the corners move outward and up, the cheeks lift a little */
          var dc = Math.min(len(sub(p, pts[61])), len(sub(p, pts[291])));
          var wc = clamp(1 - dc / (mw * 0.6), 0, 1);
          wt.wideX[i] = wc * (u < 0 ? -1 : 1);
          wt.wideY[i] = -wc * 0.45 - (v < 0 && Math.abs(u) < mw * 1.1 && Math.abs(u) > mw * 0.35 && v > -mw * 1.2 ? 0.18 * clamp(1 + v / (mw * 1.2), 0, 1) : 0);
          /* brows and the forehead above them */
          var vb = -(v) - fh * 0.26;    /* height above the eye line, roughly */
          wt.brow[i] = browSet[i] ? 1 : (vb > 0 && vb < fh * 0.32 ? 0.55 * (1 - vb / (fh * 0.32)) : 0);
        }
      }
      /* eyelids: upper lid points close onto their lower partners; the lid skin above follows */
      EYES.forEach(function (E, e) {
        var ring = [E.c0].concat(E.lower, [E.c1], E.upper), pairs = [];
        for (var j = 0; j < E.lower.length; j++) { pairs.push([E.upper[j], E.lower[j]]); }
        var xs = ring.map(function (i) { return pts[i][0]; }), ys = ring.map(function (i) { return pts[i][1]; });
        var ex0 = Math.min.apply(null, xs), ex1 = Math.max.apply(null, xs), ey0 = Math.min.apply(null, ys), ey1 = Math.max.apply(null, ys), eh = Math.max(ey1 - ey0, 4), ew = ex1 - ex0;
        wt.lidPair[e] = pairs;
        wt.eyes.push({ ring: ring, cx: (ex0 + ex1) / 2, cy: (ey0 + ey1) / 2, w: ew, h: eh });
        var ringSet = {}; ring.forEach(function (i) { ringSet[i] = 1; });
        for (var i = 0; i < nFace; i++) {
          if (ringSet[i] || browSet[i]) continue;
          var px = pts[i][0], py = pts[i][1];
          if (px < ex0 - ew * 0.2 || px > ex1 + ew * 0.2) continue;
          var above = ey0 - py;
          if (above > 0 && above < eh * 1.1) wt.lid[e][i] = 0.6 * (1 - above / (eh * 1.1)) * eh;
        }
      });
      face = rig.face;
      /* GL buffers */
      prog = program(gl, VS, FS); progM = program(gl, VS, FS_MOUTH);
      bufPos = gl.createBuffer(); bufUV = gl.createBuffer(); bufM = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, bufUV); gl.bufferData(gl.ARRAY_BUFFER, uv, gl.STATIC_DRAW);
      /* mouth-space coordinates for the cavity shader: u across the mouth (−1..1), v 0 at the upper inner lip, 1 at the lower */
      MESH.innerUp.forEach(function (i, k) { mouthUV[i * 2] = (k / (MESH.innerUp.length - 1)) * 2 - 1; mouthUV[i * 2 + 1] = 0; });
      MESH.innerLow.forEach(function (i, k) { mouthUV[i * 2] = (k / (MESH.innerLow.length - 1)) * 2 - 1; mouthUV[i * 2 + 1] = 1; });
      mouthUV[78 * 2 + 1] = 0.5; mouthUV[308 * 2 + 1] = 0.5;
      gl.bindBuffer(gl.ARRAY_BUFFER, bufM); gl.bufferData(gl.ARRAY_BUFFER, mouthUV, gl.STATIC_DRAW);
      ibMain = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibMain); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idx.main, gl.STATIC_DRAW);
      ibMouth = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibMouth); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idx.mouth, gl.STATIC_DRAW);
      ibEye = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibEye); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idx.eye, gl.STATIC_DRAW);
      gl.disable(gl.DEPTH_TEST); gl.disable(gl.CULL_FACE);
    }
    function setTexture(img) {
      texture = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      /* the lip tone, sampled once from the lower lip, shades the cavity edges */
      var lip = [0.55, 0.3, 0.3];
      try { var c2 = document.createElement('canvas'); c2.width = 4; c2.height = 4; var x = c2.getContext('2d'); var p = base ? [base[17 * 3], base[17 * 3 + 1]] : null; if (p) { x.drawImage(img, p[0] - 4, p[1] - 4, 8, 8, 0, 0, 4, 4); var d = x.getImageData(0, 0, 4, 4).data; lip = [d[0] / 255, d[1] / 255, d[2] / 255]; } } catch (e) {}
      R.lipTone = lip;
    }

    /* ─── behaviour ─── */
    var rnd = function (a, b) { return a + Math.random() * (b - a); };
    function pose(t, talking, listening, sw) {
      /* periodic sway (10 s period, so pre-rendered loops close seamlessly) */
      var k = Math.PI * 2 / 10;
      var yaw = 2.6 * Math.sin(k * t) + 1.1 * Math.sin(2 * k * t + 1.0);
      var pitch = 1.2 * Math.sin(k * t + 2.0) + 0.7 * Math.sin(4 * k * t);
      var roll = 0.7 * Math.sin(k * t + 0.5);
      var breathe = Math.sin(k * 2 * t) * 0.0045 * AX.fh;
      if (listening) { yaw *= 0.5; pitch += nodAmp * Math.sin(nodT * Math.PI * 2 * 1.15) * 2.6; }
      if (talking) { yaw *= 0.7; pitch += emph * 1.6; roll += emphRoll; }
      return { yaw: yaw, pitch: pitch, roll: roll, ty: breathe, sway: sw };
    }
    function animate(t, dt, nowAbs) {
      var talking = R.mood === 'talking', listening = R.mood === 'listening';
      var L = lips.step(nowAbs);   /* the speech engine schedules visemes on the absolute clock */
      /* blinks */
      if (!blinkAt) blinkAt = t + rnd(1500, 4000);
      if (t >= blinkAt && blink <= 0) { blink = 0.0001; blinkDur = rnd(150, 200); blinkAt = t + rnd(2400, 6200) + (Math.random() < 0.15 ? -2000 : 0); }
      var blinkV = 0;
      if (blink > 0) { blink += dt / blinkDur; if (blink >= 1) blink = 0; else blinkV = Math.sin(blink * Math.PI); }
      /* gaze: mostly on the camera, with short glances aside while thinking or listening */
      if (t >= gazeNext) {
        var aside = Math.random() < (listening ? 0.22 : talking ? 0.25 : 0.35);
        gazeT = aside ? [rnd(-1, 1) * 0.7, rnd(-0.3, 0.45)] : [rnd(-0.12, 0.12), rnd(-0.08, 0.1)];
        gazeNext = t + (aside ? rnd(500, 1300) : rnd(1600, 4200));
      }
      gaze[0] += (gazeT[0] - gaze[0]) * Math.min(1, dt / 160); gaze[1] += (gazeT[1] - gaze[1]) * Math.min(1, dt / 160);
      /* listening nods */
      if (listening) { listenPulse = Math.max(0, listenPulse - dt / 900); if (t - lastListen < 900) listenPulse = Math.min(1, listenPulse + dt / 260); }
      else listenPulse = Math.max(0, listenPulse - dt / 400);
      nodAmp += (listenPulse - nodAmp) * Math.min(1, dt / 300); nodT += dt / 1000;
      /* speaking emphasis on word onsets, brows on a question */
      if (talking) {
        if (L.sinceWord < 60 && t - lastBoundary > 420) { lastBoundary = t; if (Math.random() < 0.3) emph = rnd(0.5, 1); if (Math.random() < 0.2) emphRoll = rnd(-0.9, 0.9); if (Math.random() < 0.12) browPulse = 1; }
      }
      emph *= Math.pow(0.001, dt / 900); emphRoll *= Math.pow(0.001, dt / 1200); browPulse *= Math.pow(0.001, dt / 700);
      if (talking && !talkWas) { browPulse = Math.max(browPulse, 0.6); }
      talkWas = talking;
      var ackNod = 0;
      if (ackT >= 0) { ackT += dt; var ph = ackT / 650; ackNod = ph < 1 ? Math.sin(ph * Math.PI * 2) * (1 - ph) * 2.8 : 0; if (ph >= 1) ackT = -1; }
      var baseWide = listening ? 0.16 : talking ? 0.06 : 0.10;
      return { jaw: L.jaw, round: L.round, wide: baseWide + L.wide * 0.8 + (ackT >= 0 ? 0.12 : 0), blink: blinkV, brow: browPulse * 0.9 + (listening ? 0.12 : 0), gaze: [gaze[0] + gaze0[0], gaze[1] + gaze0[1]], pose: pose(t / 1000, talking, listening), ackNod: ackNod };
    }

    /* ─── deformation ─── */
    function deform(A) {
      var down = AX.down, right = AX.right, mw = mouth.w, fh = AX.fh;
      var drop = A.jaw * mw * 0.5, roundK = A.round * 0.30, wideK = A.wide * mw * 0.16, browUp = A.brow * fh * 0.028;
      var P = A.pose, cy = Math.cos(P.yaw * Math.PI / 180), sy = Math.sin(P.yaw * Math.PI / 180), cp = Math.cos((P.pitch + A.ackNod) * Math.PI / 180), sp = Math.sin((P.pitch + A.ackNod) * Math.PI / 180), cr = Math.cos(P.roll * Math.PI / 180), sr = Math.sin(P.roll * Math.PI / 180);
      var piv = [AX.C[0] + down[0] * fh * 0.3, AX.C[1] + down[1] * fh * 0.3];
      var mc = mouth.center;
      for (var i = 0; i < nAll; i++) {
        var x = base[i * 3], y = base[i * 3 + 1], z = base[i * 3 + 2];
        if (i < nFace) {
          /* expressions in rest space */
          var j = wt.jaw[i] * drop; x += down[0] * j; y += down[1] * j;
          if (wt.roundv[i]) { var r = wt.roundv[i] * roundK; var u = (x - mc[0]) * right[0] + (y - mc[1]) * right[1]; x -= right[0] * u * r; y -= right[1] * u * r; }
          if (wt.wideX[i]) { x += right[0] * wt.wideX[i] * wideK + down[0] * wt.wideY[i] * wideK; y += right[1] * wt.wideX[i] * wideK + down[1] * wt.wideY[i] * wideK; }
          if (wt.brow[i]) { x -= down[0] * wt.brow[i] * browUp; y -= down[1] * wt.brow[i] * browUp; }
          if (A.blink > 0.001) {
            for (var e = 0; e < 2; e++) { if (wt.lid[e][i]) { var s = wt.lid[e][i] * A.blink; x += down[0] * s; y += down[1] * s; } }
          }
        }
        cur[i * 2] = x; cur[i * 2 + 1] = y;
        /* keep z for the pose pass */
        if (i < nFace) { tmpZ[i] = z; }
      }
      if (A.blink > 0.001) {
        for (var e2 = 0; e2 < 2; e2++) {
          wt.lidPair[e2].forEach(function (pr) {
            var up = pr[0], lo = pr[1];
            var ux = cur[up * 2], uy = cur[up * 2 + 1], lx = cur[lo * 2], ly = cur[lo * 2 + 1];
            cur[up * 2] = ux + (lx - ux) * A.blink * 0.94; cur[up * 2 + 1] = uy + (ly - uy) * A.blink * 0.94;
            cur[lo * 2] = lx + (ux - lx) * A.blink * 0.08; cur[lo * 2 + 1] = ly + (uy - ly) * A.blink * 0.08;
          });
        }
      }
      /* head pose: a small 3-axis rotation about the upper neck, then breathing */
      for (i = 0; i < nAll; i++) {
        var w = wt.pose[i]; if (!w) continue;
        var px = cur[i * 2] - piv[0], py = cur[i * 2 + 1] - piv[1], pz = i < nFace ? tmpZ[i] : 0;
        /* yaw about the vertical axis, pitch about the horizontal, roll in the plane */
        var x1 = px * cy + pz * sy, z1 = -px * sy + pz * cy;
        var y1 = py * cp - z1 * sp;
        var x2 = x1 * cr - y1 * sr, y2 = x1 * sr + y1 * cr;
        var nx = piv[0] + x2, ny = piv[1] + y2 + P.ty;
        cur[i * 2] += (nx - cur[i * 2]) * w; cur[i * 2 + 1] += (ny - cur[i * 2 + 1]) * w;
      }
    }
    var tmpZ = new Float32Array(468);

    function draw(A) {
      gl.viewport(0, 0, W, H);
      gl.clearColor(0.03, 0.06, 0.1, 1); gl.clear(gl.COLOR_BUFFER_BIT);
      gl.bindBuffer(gl.ARRAY_BUFFER, bufPos); gl.bufferData(gl.ARRAY_BUFFER, cur, gl.DYNAMIC_DRAW);
      function bind(p) {
        gl.useProgram(p);
        var aPos = gl.getAttribLocation(p, 'a_pos'); gl.bindBuffer(gl.ARRAY_BUFFER, bufPos); gl.enableVertexAttribArray(aPos); gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
        var aUV = gl.getAttribLocation(p, 'a_uv'); if (aUV >= 0) { gl.bindBuffer(gl.ARRAY_BUFFER, bufUV); gl.enableVertexAttribArray(aUV); gl.vertexAttribPointer(aUV, 2, gl.FLOAT, false, 0, 0); }
        var aM = gl.getAttribLocation(p, 'a_m'); if (aM >= 0) { gl.bindBuffer(gl.ARRAY_BUFFER, bufM); gl.enableVertexAttribArray(aM); gl.vertexAttribPointer(aM, 2, gl.FLOAT, false, 0, 0); }
        gl.uniform2f(gl.getUniformLocation(p, 'u_size'), W, H);
        gl.uniform2f(gl.getUniformLocation(p, 'u_uvOff'), 0, 0);
      }
      bind(prog);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, texture); gl.uniform1i(gl.getUniformLocation(prog, 'u_tex'), 0);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibMain); gl.drawElements(gl.TRIANGLES, idx.main.length, gl.UNSIGNED_SHORT, 0);
      /* the mouth interior appears as the lips part */
      if (A.jaw > 0.03) {
        bind(progM);
        gl.uniform1f(gl.getUniformLocation(progM, 'u_open'), clamp(A.jaw, 0, 1));
        var lt = R.lipTone || [0.5, 0.3, 0.3]; gl.uniform3f(gl.getUniformLocation(progM, 'u_lip'), lt[0], lt[1], lt[2]);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibMouth); gl.drawElements(gl.TRIANGLES, idx.mouth.length, gl.UNSIGNED_SHORT, 0);
      }
      /* gaze: the eye interiors are redrawn with their texture shifted */
      if (A.blink < 0.85 && (Math.abs(A.gaze[0]) > 0.01 || Math.abs(A.gaze[1]) > 0.01)) {
        bind(prog);
        var eyeW = wt.eyes[0].w;
        gl.uniform2f(gl.getUniformLocation(prog, 'u_uvOff'), A.gaze[0] * eyeW * 0.16 / W, A.gaze[1] * eyeW * 0.10 / H);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibEye); gl.drawElements(gl.TRIANGLES, idx.eye.length, gl.UNSIGNED_SHORT, 0);
      }
    }

    var raf = 0, lastT = 0;
    function frame(now) {
      if (R.destroyed) return;
      raf = requestAnimationFrame(frame);
      if (!texture || !base) return;
      if (opts.moodFrom) { var cl = opts.moodFrom.classList; R.mood = cl.contains('talking') ? 'talking' : cl.contains('listening') ? 'listening' : 'idle'; }
      if (opts.isListening && opts.isListening()) lastListen = now - (t0 == null ? now : t0);
      if (document.hidden) return;
      renderAt(now);
    }
    function renderAt(now) {
      if (t0 == null) t0 = now;
      var dt = lastT ? Math.min(100, now - lastT) : 16; lastT = now;
      lips.offline(now);
      var A = animate(now - t0, dt, now);
      lips.offline(null);
      deform(A); draw(A);
      R.last = A;
    }

    R.ready = Promise.all([
      typeof opts.rig === 'string' ? fetch(opts.rig).then(function (r) { return r.json(); }) : Promise.resolve(opts.rig),
      new Promise(function (res, rej) { var im = new Image(); im.decoding = 'async'; im.onload = function () { res(im); }; im.onerror = rej; im.src = opts.portrait; })
    ]).then(function (r) { build(r[0]); setTexture(r[1]); R.rig = r[0]; if (!opts.offline) raf = requestAnimationFrame(frame); return R; });

    R.setMood = function (m) { if (m === 'ack') { ackT = 0; return; } R.mood = m; };
    R.pulseListen = function (t) { lastListen = (t != null ? t : performance.now()) - (t0 || 0); };
    R.nod = function () { ackT = 0; };
    R.renderAt = function (ms) { lips.offline(ms); renderAt(ms); lips.offline(null); };
    R.destroy = function () { R.destroyed = true; cancelAnimationFrame(raf); lips.stop(); try { if (stream) stream.getTracks().forEach(function (tr) { tr.stop(); }); } catch (e) {} try { if (video) { video.pause(); video.srcObject = null; } } catch (e) {} try { gl.getExtension('WEBGL_lose_context') && gl.getExtension('WEBGL_lose_context').loseContext(); } catch (e) {} if (canvas.parentNode) canvas.parentNode.removeChild(canvas); if (video && video.parentNode) video.parentNode.removeChild(video); };
    return R;
  }
  /* listening pulses arrive as absolute performance.now() stamps; convert inside */
  window.MT_FACE_RIG = { create: create, supported: supported };
})();
