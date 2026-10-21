/**
 * THE PACK — TEST LAB · CORE
 * --------------------------
 * Data, storage, sampling, scoring, the weakness map, the recommendation rule and the
 * figural renderer. The UI lives in pack-testlab.js. Everything runs on the device; the
 * bank is window.MT_TESTLAB (built by scripts/testlab/build.js) and nothing leaves the
 * browser. Honesty contract: every item is a labelled Metanoia practice item; every count,
 * time, score rule and threshold is read from the versioned config and shown with its source.
 */
(function () {
  'use strict';
  var TL = window.MT_TESTLAB;
  if (!TL || !TL.items) return;
  var CFG = TL.config, ITEMS = TL.items;

  /* ─── storage ─── */
  var KEYS = { attempts: 'tl_attempts', mocks: 'tl_mocks', errorlog: 'tl_errorlog', plan: 'tl_plan', kraepelin: 'tl_kraepelin', mirror: 'tl_mirror', weakness: 'tl_weakness', sets: 'tl_sets' };
  function load(k, d) { try { var v = JSON.parse(localStorage.getItem(KEYS[k] || k) || 'null'); return v == null ? d : v; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(KEYS[k] || k, JSON.stringify(v)); } catch (e) {} }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

  /* one-time: the Screening Gym's attempts (mt_pack_gym) are kept as legacy rows */
  (function migrateGym() {
    try {
      if (localStorage.getItem('tl_migrated_gym')) return;
      var g = JSON.parse(localStorage.getItem('mt_pack_gym') || 'null');
      var at = load('attempts', []);
      var FAM = { num: 'numerik', verb: 'verbal', log: 'penalaran' };
      ((g && g.attempts) || []).forEach(function (a) { at.push({ id: uid(), legacy: true, mode: a.timed ? 'timed' : 'drill', label: 'Screening Gym · ' + (FAM[a.fam] || a.fam), family: FAM[a.fam] || a.fam, ts: a.date, score: a.score, total: a.total, attempted: a.attempted, secs: a.secs, items: [] }); });
      save('attempts', at);
      localStorage.setItem('tl_migrated_gym', '1');
    } catch (e) {}
  })();

  /* ─── helpers ─── */
  function shuffle(arr) { var a = arr.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  var byId = {}; ITEMS.forEach(function (it) { byId[it.id] = it; });
  function pool(f) { return ITEMS.filter(function (it) { return (!f.bank || it.bank === f.bank) && (!f.family || (Array.isArray(f.family) ? f.family.indexOf(it.family) >= 0 : it.family === f.family)) && (!f.subtype || (Array.isArray(f.subtype) ? f.subtype.indexOf(it.subtype) >= 0 : it.subtype === f.subtype)) && (!f.dim || it.dimension === f.dim) && (!f.d || it.difficulty === f.d); }); }
  /* balanced sample: round-robin over tiers so a set is not all easy */
  function sample(items, n) {
    var tiers = [1, 2, 3].map(function (d) { return shuffle(items.filter(function (it) { return it.difficulty === d; })); });
    var out = [], seen = {};
    for (var k = 0; out.length < n && (tiers[0].length || tiers[1].length || tiers[2].length); k++) { var t = tiers[k % 3]; if (t.length) { var it = t.pop(); if (!seen[it.id]) { seen[it.id] = 1; out.push(it); } } }
    return shuffle(out);
  }
  function take(spec) { var out = []; spec.forEach(function (s) { out = out.concat(sample(pool(s), s.n)); }); return out; }

  /* ─── families and labels ─── */
  var FAMILY = {
    verbal: { en: 'Verbal', id: 'Verbal', icon: 'book' }, numerik: { en: 'Numerical', id: 'Numerik', icon: 'chart' }, penalaran: { en: 'Reasoning', id: 'Penalaran', icon: 'puzzle' }, figural: { en: 'Figural', id: 'Figural', icon: 'eye' },
    twk: { en: 'TWK · National insight', id: 'TWK · Wawasan kebangsaan', icon: 'flag' }, tkp: { en: 'TKP · Personal characteristics', id: 'TKP · Karakteristik pribadi', icon: 'heart' },
    akhlak: { en: 'AKHLAK', id: 'AKHLAK', icon: 'star' }, english: { en: 'English', id: 'Bahasa Inggris', icon: 'globe' }
  };
  var SUB = {
    sinonim: 'Sinonim', antonim: 'Antonim', analogi: 'Analogi', wacana: 'Wacana', aritmetika: 'Aritmetika', deret_angka: 'Deret angka', deret_huruf: 'Deret huruf', perbandingan_kuantitatif: 'P vs Q', cerita: 'Soal cerita', tabel_grafik: 'Tabel dan grafik',
    silogisme: 'Silogisme', kondisional: 'Kondisional', ingkaran: 'Ingkaran', analitik: 'Analitis', deret_gambar: 'Deret gambar', analogi_gambar: 'Analogi gambar', beda_gambar: 'Beda gambar', matriks: 'Matriks', spasial: 'Spasial',
    pancasila: 'Pancasila', uud: 'UUD 1945', nkri: 'NKRI', bti: 'Bhinneka Tunggal Ika', nasionalisme: 'Nasionalisme', integritas: 'Integritas', bela_negara: 'Bela negara', anti_radikalisme: 'Anti-radikalisme', bahasa: 'Bahasa Indonesia',
    pelayanan_publik: 'Pelayanan publik', jejaring_kerja: 'Jejaring kerja', sosial_budaya: 'Sosial budaya', tik: 'TIK', profesionalisme: 'Profesionalisme',
    amanah: 'Amanah', kompeten: 'Kompeten', harmonis: 'Harmonis', loyal: 'Loyal', adaptif: 'Adaptif', kolaboratif: 'Kolaboratif', structure: 'Structure', reading_main_idea: 'Reading · main idea', reading_referent: 'Reading · referent', reading_inference: 'Reading · inference'
  };
  var SUBS = {}; ITEMS.forEach(function (it) { (SUBS[it.family] = SUBS[it.family] || {})[it.subtype] = (SUBS[it.family][it.subtype] || 0) + 1; });

  /* ─── set builders ─── */
  var MIXED4 = ['verbal', 'numerik', 'penalaran', 'figural'];
  function tiu(n) { /* TIU draw by the config blueprint, scaled to n */
    var bp = CFG.skd.blueprint.tiu, tot = 0; Object.keys(bp).forEach(function (k) { tot += bp[k]; });
    var spec = [], map = { analogi: { family: 'verbal', subtype: 'analogi' }, silogisme: { family: 'penalaran', subtype: ['silogisme', 'kondisional', 'ingkaran'] }, analitis: { family: 'penalaran', subtype: 'analitik' }, berhitung: { family: 'numerik', subtype: 'aritmetika' }, deret: { family: 'numerik', subtype: ['deret_angka', 'deret_huruf'] }, perbandingan: { family: 'numerik', subtype: 'perbandingan_kuantitatif' }, cerita: { family: 'numerik', subtype: ['cerita', 'tabel_grafik'] }, figural: { family: 'figural' } };
    Object.keys(bp).forEach(function (k) { var s = Object.assign({}, map[k]); s.n = Math.max(1, Math.round(bp[k] * n / tot)); s.tiu = k; spec.push(s); });
    var out = take(spec).map(function (it) { return it; });
    return out.slice(0, n);
  }
  function twk(n) { var bp = CFG.skd.blueprint.twk, tot = 0; Object.keys(bp).forEach(function (k) { tot += bp[k]; }); var spec = Object.keys(bp).map(function (k) { return { family: 'twk', subtype: k, n: Math.max(1, Math.round(bp[k] * n / tot)) }; }); return take(spec).slice(0, n); }
  function tkp(n) { var bp = CFG.skd.blueprint.tkp, tot = 0; Object.keys(bp).forEach(function (k) { tot += bp[k]; }); var spec = Object.keys(bp).map(function (k) { return { family: 'tkp', subtype: k, n: Math.max(1, Math.round(bp[k] * n / tot)) }; }); return take(spec).slice(0, n); }
  function tpaVerbal(n) { return take([{ family: 'verbal', subtype: 'sinonim', n: Math.round(n * .3) }, { family: 'verbal', subtype: 'antonim', n: Math.round(n * .3) }, { family: 'verbal', subtype: 'analogi', n: Math.round(n * .3) }, { family: 'verbal', subtype: 'wacana', n: Math.max(1, Math.round(n * .1)) }]).slice(0, n); }
  function tpaNum(n) { return take([{ family: 'numerik', subtype: 'aritmetika', n: Math.round(n * .3) }, { family: 'numerik', subtype: 'deret_angka', n: Math.round(n * .25) }, { family: 'numerik', subtype: 'deret_huruf', n: Math.max(1, Math.round(n * .1)) }, { family: 'numerik', subtype: 'perbandingan_kuantitatif', n: Math.round(n * .2) }, { family: 'numerik', subtype: ['cerita', 'tabel_grafik'], n: Math.max(1, Math.round(n * .15)) }]).slice(0, n); }
  function tpaReason(n) { return take([{ family: 'penalaran', subtype: 'silogisme', n: Math.round(n * .35) }, { family: 'penalaran', subtype: ['kondisional', 'ingkaran'], n: Math.round(n * .3) }, { family: 'penalaran', subtype: 'analitik', n: Math.max(1, Math.round(n * .35)) }]).slice(0, n); }
  function figSet(n) { return sample(pool({ family: 'figural' }), n); }
  function mixed(nPerFam) { return [].concat(tpaVerbal(nPerFam), tpaNum(nPerFam), tpaReason(nPerFam), figSet(nPerFam)); }

  /* the presets the lessons launch: mode:arg */
  function buildSet(preset) {
    var p = String(preset || 'home').split(':'), mode = p[0], arg = p[1] || '';
    var T = function (en, id) { return { en: en, id: id }; };
    if (mode === 'diagnostic') return { mode: 'diagnostic', label: T('Mixed diagnostic · 40 items', 'Diagnostik campuran · 40 soal'), items: mixed(10), timed: null, feedback: 'end', sections: null };
    if (mode === 'drill') {
      var parts = arg.split('/'), fam = parts[0], sub = parts[1];
      var groups = { 'twk-pilar': { family: 'twk', subtype: ['pancasila', 'uud', 'nkri', 'bti'] }, 'twk-sikap': { family: 'twk', subtype: ['nasionalisme', 'integritas', 'bela_negara', 'anti_radikalisme'] }, 'twk-bahasa': { family: 'twk', subtype: 'bahasa' } };
      var f = groups[fam] || { family: fam, subtype: sub || null };
      return { mode: 'drill', label: T('Drill · ' + (SUB[sub] || (FAMILY[f.family] ? FAMILY[f.family].en : fam)), 'Latihan · ' + (SUB[sub] || (FAMILY[f.family] ? FAMILY[f.family].id : fam))), filter: f, items: ladderPool(f), timed: null, feedback: 'instant', adaptive: true, sections: null };
    }
    if (mode === 'timed') {
      if (arg === 'figural') return { mode: 'timed', label: T('Figural timed set · 12', 'Set figural berbatas waktu · 12'), items: figSet(12), timed: 12 * 40, feedback: 'end', sections: null };
      if (arg === 'tkd40') return { mode: 'timed', label: T('TKD timed set · 40 in 30 min', 'Set TKD berbatas waktu · 40 dalam 30 mnt'), items: [].concat(tpaVerbal(10), tpaNum(10), tpaReason(10), figSet(10)), timed: 30 * 60, feedback: 'end', sections: secs4(10) };
      if (arg === 'english20') return { mode: 'timed', label: T('English set · 20 in 20 min', 'Set bahasa Inggris · 20 dalam 20 mnt'), items: sample(pool({ family: 'english' }), 20), timed: 20 * 60, feedback: 'end', sections: null };
      var famT = { verbal: tpaVerbal, numerik: tpaNum, penalaran: tpaReason, figural: fig }[arg];
      if (famT) { var nn = arg === 'penalaran' ? 12 : 20; return { mode: 'timed', label: T(FAMILY[arg].en + ' timed set · ' + nn, 'Set ' + FAMILY[arg].id + ' berbatas waktu · ' + nn), items: famT(nn), timed: nn * (arg === 'verbal' ? 30 : arg === 'figural' ? 40 : arg === 'penalaran' ? 60 : 45), feedback: 'end', sections: null }; }
    }
    if (mode === 'section') {
      if (arg === 'twk') return { mode: 'section', label: T('TWK section · 30 items', 'Bagian TWK · 30 soal'), items: twk(30), timed: 20 * 60, feedback: 'end', sections: [{ key: 'twk', n: 30 }], skd: true };
      if (arg === 'tiu') return { mode: 'section', label: T('TIU section · 35 items', 'Bagian TIU · 35 soal'), items: tiu(35), timed: 42 * 60, feedback: 'end', sections: [{ key: 'tiu', n: 35 }], skd: true };
      if (arg === 'tkp') return { mode: 'section', label: T('TKP section · 45 items', 'Bagian TKP · 45 soal'), items: tkp(45), timed: 35 * 60, feedback: 'end', sections: [{ key: 'tkp', n: 45 }], skd: true, ritual: true };
    }
    if (mode === 'mock') {
      if (arg === 'tpa60') return { mode: 'mock', label: T('TPA-60 mock · 45 min', 'Simulasi TPA-60 · 45 mnt'), items: [].concat(tpaVerbal(20), tpaNum(20), tpaReason(12), figSet(8)), timed: 45 * 60, feedback: 'end', sections: [{ key: 'verbal', n: 20 }, { key: 'numerik', n: 20 }, { key: 'penalaran', n: 12 }, { key: 'figural', n: 8 }], notice: 'tpa' };
      if (arg === 'bumn-t1') return { mode: 'mock', label: T('BUMN-T1 mock · TKD then AKHLAK', 'Simulasi BUMN-T1 · TKD lalu AKHLAK'), items: [].concat(tpaVerbal(15), tpaNum(15), tpaReason(15), figSet(15), sample(pool({ family: 'akhlak' }), 30)), timed: 45 * 60, timed2: 25 * 60, feedback: 'end', sections: [{ key: 'verbal', n: 15 }, { key: 'numerik', n: 15 }, { key: 'penalaran', n: 15 }, { key: 'figural', n: 15 }, { key: 'akhlak', n: 30, part: 2 }], notice: 'bumn', twoPart: 60 };
    }
    if (mode === 'cat') {
      var walk = arg === 'walkthrough';
      return { mode: 'cat', label: walk ? T('SKD-110 walkthrough (no timer)', 'Telusur SKD-110 (tanpa pengatur waktu)') : T('SKD-110 simulation · 100 min', 'Simulasi SKD-110 · 100 mnt'), items: [].concat(twk(30), tiu(35), tkp(45)), timed: walk ? null : CFG.skd.minutes * 60, feedback: 'end', sections: [{ key: 'twk', n: 30 }, { key: 'tiu', n: 35 }, { key: 'tkp', n: 45 }], skd: true, notice: 'skd', ritual: true, walkthrough: walk };
    }
    if (mode === 'akhlak-45') return { mode: 'drill', label: T('AKHLAK · 4 or 5?', 'AKHLAK · 4 atau 5?'), items: sample(pool({ family: 'akhlak' }), 20), timed: null, feedback: 'instant', topTwo: true, sections: null };
    if (mode === 'tkp-45') return { mode: 'drill', label: T('TKP · 4 or 5?', 'TKP · 4 atau 5?'), items: sample(pool({ family: 'tkp' }), 20), timed: null, feedback: 'instant', topTwo: true, sections: null };
    if (mode === 'focus') { var ids = focusIds(); return { mode: 'drill', label: T('Focus loop · your misses', 'Putaran fokus · kesalahanmu'), items: shuffle(ids.map(function (i) { return byId[i]; }).filter(Boolean)).slice(0, 20), timed: null, feedback: 'instant', sections: null, focus: true }; }
    return null;
  }
  function secs4(n) { return [{ key: 'verbal', n: n }, { key: 'numerik', n: n }, { key: 'penalaran', n: n }, { key: 'figural', n: n }]; }
  /* drill ladder: start at tier 1 (or the tier the map suggests), rise after two right, fall after two wrong */
  function ladderPool(f) { var p = pool(f); return shuffle(p); }
  function nextTier(cur, streak) { if (streak >= 2) return Math.min(3, cur + 1); if (streak <= -2) return Math.max(1, cur - 1); return cur; }

  /* ─── scoring ─── */
  function pointsFor(it, ans, skd) {
    if (ans == null) return { pts: 0, ok: null, w: null };
    if (it.format === 'ranked5') { var w = it.weights[ans]; return { pts: w, ok: w === 5, w: w }; }
    var ok = ans === it.answer; return { pts: ok ? (skd ? CFG.skd.sections.twk.points : 1) : 0, ok: ok, w: null };
  }
  function section(it) { return it.family === 'twk' ? 'twk' : it.family === 'tkp' ? 'tkp' : it.family === 'akhlak' ? 'akhlak' : it.family === 'english' ? 'english' : (it.bank === 'tpa' && it.track_map && it.track_map.tiu !== undefined ? it.family : it.family); }
  /* report for a finished run */
  function report(run) {
    var r = { id: run.id, preset: run.preset, mode: run.mode, label: run.label, ts: Date.now(), secs: run.secs, n: run.items.length, attempted: 0, correct: 0, blanks: 0, flagged: 0, pts: 0, byFamily: {}, bySub: {}, byDim: {}, items: [], second: 0, ranked: 0, last10: null, rushed: 0, over: 0, sections: {} };
    var skd = !!run.skd;
    run.items.forEach(function (it, i) {
      var ans = run.answers[i], sc = pointsFor(it, ans, skd), t = run.times[i] || 0;
      var row = { id: it.id, family: it.family, subtype: it.subtype, dim: it.dimension, ans: ans, ok: sc.ok, w: sc.w, pts: sc.pts, t: t, flag: !!run.flags[i], over: t > it.time_target_s * CFG.pacing.skip_at_multiple, rushed: ans != null && t < 10, sec: sectionOf(run, i) };
      r.items.push(row);
      if (ans == null) r.blanks++; else r.attempted++;
      if (sc.ok) r.correct++;
      if (row.flag) r.flagged++; if (row.over) r.over++; if (row.rushed) r.rushed++;
      r.pts += sc.pts;
      if (it.format === 'ranked5' && ans != null) { r.ranked++; if (sc.w === 4) r.second++; }
      var fb = r.byFamily[it.family] = r.byFamily[it.family] || { n: 0, ok: 0, blank: 0, pts: 0, max: 0, times: [] };
      fb.n++; if (sc.ok) fb.ok++; if (ans == null) fb.blank++; fb.pts += sc.pts; fb.max += it.format === 'ranked5' ? 5 : (skd && (it.family === 'twk' || it.family === 'tiu' || it.bank === 'tpa') ? 5 : 1); if (t) fb.times.push(t);
      var sb = r.bySub[it.family + '/' + it.subtype] = r.bySub[it.family + '/' + it.subtype] || { family: it.family, subtype: it.subtype, n: 0, ok: 0, blank: 0, times: [], target: it.time_target_s };
      sb.n++; if (sc.ok) sb.ok++; if (ans == null) sb.blank++; if (t) sb.times.push(t);
      if (it.dimension && it.format === 'ranked5') { var db = r.byDim[it.dimension] = r.byDim[it.dimension] || { n: 0, sum: 0 }; db.n++; db.sum += sc.pts; }
      var sk = row.sec; if (sk) { var ss = r.sections[sk] = r.sections[sk] || { n: 0, ok: 0, blank: 0, pts: 0, rushed: 0, last: [] }; ss.n++; if (sc.ok) ss.ok++; if (ans == null) ss.blank++; ss.pts += sc.pts; if (row.rushed) ss.rushed++; }
    });
    r.accuracy = r.attempted ? Math.round(r.correct / r.attempted * 100) : 0;
    r.completion = Math.round(r.attempted / r.n * 100);
    r.secondShare = r.ranked ? Math.round(r.second / r.ranked * 100) : null;
    /* SKD scoring and thresholds */
    if (skd && r.sections.twk !== undefined || (skd && r.sections.tiu) || (skd && r.sections.tkp)) {
      var S = r.sections, pts = {};
      if (S.twk) pts.twk = S.twk.ok * CFG.skd.sections.twk.points;
      if (S.tiu) pts.tiu = S.tiu.ok * CFG.skd.sections.tiu.points;
      if (S.tkp) pts.tkp = S.tkp.pts;
      r.skd = { pts: pts, total: (pts.twk || 0) + (pts.tiu || 0) + (pts.tkp || 0), estimate: (pts.twk || 0) + (pts.tiu || 0) + (pts.tkp || 0) + Math.round(((S.twk ? S.twk.blank : 0) + (S.tiu ? S.tiu.blank : 0)) * CFG.skd.sections.twk.points * 0.25) };
      /* last ten of TKP */
      if (S.tkp) { var tk = r.items.filter(function (x) { return x.sec === 'tkp'; }); var last = tk.slice(-10); r.last10 = last.length ? Math.round(last.reduce(function (s, x) { return s + x.pts; }, 0) / last.length * 100) / 100 : null; r.tkpMean = Math.round(tk.reduce(function (s, x) { return s + x.pts; }, 0) / tk.length * 100) / 100; }
    } else if (run.mode === 'mock' || run.mode === 'timed' || run.mode === 'diagnostic') {
      r.estimate = r.correct + Math.round(r.blanks * 0.25 * 10) / 10;
    }
    r.cause = causeSplit(r);
    return r;
  }
  function sectionOf(run, i) {
    if (!run.sections) return run.items[i].family;
    var acc = 0; for (var k = 0; k < run.sections.length; k++) { acc += run.sections[k].n; if (i < acc) return run.sections[k].key; }
    return run.items[i].family;
  }
  /* knowledge / pace / judgement per section */
  function causeSplit(r) {
    var out = {};
    Object.keys(r.sections).forEach(function (k) {
      var rows = r.items.filter(function (x) { return x.sec === k; });
      var rushed = rows.filter(function (x) { return x.rushed; }).length, over = rows.filter(function (x) { return x.over; }).length, blank = rows.filter(function (x) { return x.ans == null; }).length;
      var wrongCalm = rows.filter(function (x) { return x.ok === false && !x.rushed; }).length;
      var ranked = rows.filter(function (x) { return x.w != null; });
      if (ranked.length) { var sec = ranked.filter(function (x) { return x.w === 4; }).length, low = ranked.filter(function (x) { return x.w <= 2; }).length; out[k] = low / ranked.length > .15 ? 'judgement-trap' : sec / ranked.length > .3 ? 'judgement-second' : rushed > rows.length * .15 ? 'pace' : 'ok'; }
      else out[k] = (rushed + blank) > rows.length * .15 ? 'pace' : wrongCalm > rows.length * .3 ? 'knowledge' : over > rows.length * .25 ? 'pace' : 'ok';
    });
    return out;
  }

  /* ─── weakness map ─── */
  function weakness() {
    var at = load('attempts', []), m = {};
    at.forEach(function (a) {
      (a.items || []).forEach(function (row) {
        var it = byId[row.id]; if (!it) return;
        var k = it.family + '/' + it.subtype, e = m[k] = m[k] || { family: it.family, subtype: it.subtype, n: 0, ok: 0, times: [], target: it.time_target_s, last: 0 };
        if (row.ans == null) return;
        e.n++; if (row.ok) e.ok++; if (row.t) e.times.push(row.t); e.last = Math.max(e.last, a.ts || 0);
      });
    });
    Object.keys(m).forEach(function (k) { var e = m[k]; e.acc = e.n ? Math.round(e.ok / e.n * 100) : null; e.median = median(e.times); e.slow = e.median != null && e.median > e.target * CFG.pacing.skip_at_multiple; e.band = e.n < 3 ? 'none' : e.acc < CFG.weakness_bands.red ? 'red' : e.acc < CFG.weakness_bands.amber ? 'amber' : 'green'; });
    save('weakness', m);
    return m;
  }
  function median(a) { if (!a.length) return null; var s = a.slice().sort(function (x, y) { return x - y; }); var h = Math.floor(s.length / 2); return s.length % 2 ? s[h] : Math.round((s[h - 1] + s[h]) / 2); }
  function focusIds() {
    var log = load('errorlog', []), need = {};
    log.forEach(function (e) { if (!e.cleared) need[e.id] = (need[e.id] || 0) + 1; });
    return Object.keys(need);
  }
  /* an item is cleared from the focus loop after two correct answers */
  function focusMark(id, ok) {
    var log = load('errorlog', []);
    log.forEach(function (e) { if (e.id === id && !e.cleared) { if (ok) { e.right = (e.right || 0) + 1; if (e.right >= 2) e.cleared = true; } else e.right = 0; } });
    save('errorlog', log);
  }

  /* ─── recommendation rule ─── */
  function nextSet() {
    var m = weakness(), keys = Object.keys(m);
    var T = function (en, id) { return { en: en, id: id }; };
    if (!keys.length) return { preset: 'diagnostic:mixed40', reason: T('No attempts yet: the diagnostic draws the map everything else reads.', 'Belum ada percobaan: diagnostik menggambar peta yang dibaca semua hal lain.') };
    var reds = keys.filter(function (k) { return m[k].band === 'red' && m[k].n >= 5; }).sort(function (a, b) { return m[a].acc - m[b].acc; });
    if (reds.length) { var e = m[reds[0]]; return { preset: 'drill:' + e.family + '/' + e.subtype, reason: T('Red: ' + e.acc + '% on ' + e.n + ' ' + (SUB[e.subtype] || e.subtype) + ' items; drill it untimed with the explanations.', 'Merah: ' + e.acc + '% pada ' + e.n + ' soal ' + (SUB[e.subtype] || e.subtype) + '; latih tanpa batas waktu dengan pembahasan.') }; }
    var ambers = keys.filter(function (k) { return m[k].band === 'amber'; });
    var slow = keys.filter(function (k) { return m[k].slow; }).sort(function (a, b) { return (m[b].median / m[b].target) - (m[a].median / m[a].target); });
    if (slow.length) { var s = m[slow[0]]; var fam = MIXED4.indexOf(s.family) >= 0 ? s.family : null; return { preset: fam ? 'timed:' + fam : 'section:' + (s.family === 'twk' ? 'twk' : s.family === 'tkp' ? 'tkp' : 'tiu'), reason: T('Pace: median ' + s.median + ' s against a ' + s.target + ' s target on ' + (SUB[s.subtype] || s.subtype) + '; a timed set with the skip rule.', 'Tempo: median ' + s.median + ' dtk terhadap target ' + s.target + ' dtk pada ' + (SUB[s.subtype] || s.subtype) + '; set berbatas waktu dengan aturan melewati.') }; }
    if (ambers.length) { var a = m[ambers[0]]; return { preset: 'drill:' + a.family + '/' + a.subtype, reason: T('Amber: ' + a.acc + '% on ' + (SUB[a.subtype] || a.subtype) + '; the focus loop and a drill lift it to green.', 'Kuning: ' + a.acc + '% pada ' + (SUB[a.subtype] || a.subtype) + '; putaran fokus dan latihan mengangkatnya ke hijau.') }; }
    var greensFam = {}; keys.forEach(function (k) { if (m[k].band === 'green') greensFam[m[k].family] = (greensFam[m[k].family] || 0) + 1; });
    var gf = Object.keys(greensFam);
    if (gf.indexOf('twk') >= 0 && gf.indexOf('tkp') >= 0 && gf.length >= 4) return { preset: 'cat:skd110', reason: T('TWK, TIU families and TKP all green: time for the full SKD-110 simulation.', 'TWK, keluarga TIU, dan TKP semuanya hijau: saatnya simulasi SKD-110 penuh.') };
    if (gf.length >= 3 && MIXED4.every(function (f) { return gf.indexOf(f) >= 0; })) return { preset: 'mock:tpa60', reason: T('All four core families green: sit the TPA-60 mock under real conditions.', 'Keempat keluarga inti hijau: kerjakan simulasi TPA-60 dalam kondisi nyata.') };
    if (gf.length) return { preset: 'section:' + (gf[0] === 'twk' ? 'twk' : gf[0] === 'tkp' ? 'tkp' : 'tiu'), reason: T('Green in ' + (FAMILY[gf[0]] ? FAMILY[gf[0]].en : gf[0]) + ': a whole section at test length keeps it warm.', 'Hijau di ' + (FAMILY[gf[0]] ? FAMILY[gf[0]].id : gf[0]) + ': satu bagian utuh sepanjang tes menjaganya hangat.') };
    return { preset: 'diagnostic:mixed40', reason: T('Too few attempts per sub-type to read; repeat the diagnostic.', 'Terlalu sedikit percobaan per sub-tipe untuk dibaca; ulangi diagnostik.') };
  }

  /* ─── figural renderer (same rules as scripts/testlab/gen/figural.js) ─── */
  var GLYPH = {
    flag: '<path d="M30 15v70M30 20h40l-12 14 12 14H30"/><circle cx="30" cy="85" r="6" fill="currentColor"/>',
    ell: '<path d="M28 18h18v40h26v24H28z" stroke-linejoin="round"/><circle cx="64" cy="26" r="5" fill="currentColor"/>',
    key: '<circle cx="34" cy="36" r="14"/><path d="M44 46l30 30M66 68l8-8M58 60l6-6"/><circle cx="34" cy="36" r="4" fill="currentColor"/>',
    arrowdot: '<path d="M22 60L52 30l10 10-30 30zM52 30l16-4-4 16"/><circle cx="76" cy="78" r="6" fill="currentColor"/>',
    tri: '<path d="M50 18L84 80H16z"/>', sq: '<rect x="22" y="22" width="56" height="56"/>', pent: '<path d="M50 16l34 25-13 40H29L16 41z"/>', hex: '<path d="M50 16l30 17v34L50 84 20 67V33z"/>'
  };
  function fig(f, size) {
    size = size || 84;
    var fill = f.fill === 'full' ? 'fill="currentColor"' : f.fill === 'dots' ? 'fill="url(#tlDots)"' : f.fill === 'cross' ? 'fill="url(#tlCross)"' : 'fill="none"';
    var tr = '';
    if (f.mir) tr += 'translate(100 0) scale(-1 1) ';
    if (f.rot) tr += 'rotate(' + f.rot + ' 50 50) ';
    if (f.scale && f.scale !== 1) tr += 'translate(50 50) scale(' + f.scale + ') translate(-50 -50) ';
    var dots = ''; for (var i = 0; i < (f.n || 0); i++) dots += '<circle cx="' + (14 + i * 12) + '" cy="90" r="4" fill="currentColor" stroke="none"/>';
    return '<svg class="tl-fig" viewBox="0 0 100 100" width="' + size + '" height="' + size + '" aria-hidden="true"><defs><pattern id="tlDots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="4.5" cy="4.5" r="1.8" fill="currentColor"/></pattern><pattern id="tlCross" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M5 0v10M0 5h10" stroke="currentColor" stroke-width="1.4"/></pattern></defs><rect x="2" y="2" width="96" height="96" rx="8" fill="none" stroke="currentColor" stroke-opacity=".25"/><g stroke="currentColor" stroke-width="4" stroke-linecap="round" ' + fill + ' transform="' + tr.trim() + '">' + (GLYPH[f.g] || '') + '</g>' + dots + '</svg>';
  }
  function net(cells, labels) {
    var s = 24, out = cells.map(function (c, i) { return '<rect x="' + (c[0] * s + 2) + '" y="' + (c[1] * s + 2) + '" width="' + (s - 4) + '" height="' + (s - 4) + '" fill="none" stroke="currentColor" stroke-width="2"/><text x="' + (c[0] * s + s / 2) + '" y="' + (c[1] * s + s / 2 + 5) + '" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">' + labels[i] + '</text>'; }).join('');
    return '<svg class="tl-fig" viewBox="0 0 96 96" width="120" height="120" aria-hidden="true">' + out + '</svg>';
  }
  function assetHtml(a) {
    if (!a) return '';
    if (a.kind === 'frames') return '<div class="tl-frames">' + a.figs.map(function (f) { return fig(f, 84); }).join('') + '<div class="tl-q">?</div></div>';
    if (a.kind === 'analogy') return '<div class="tl-frames tl-ana">' + fig(a.figs[0], 84) + '<span class="tl-colon">:</span>' + fig(a.figs[1], 84) + '<span class="tl-colon">::</span>' + fig(a.figs[2], 84) + '<span class="tl-colon">:</span><div class="tl-q">?</div></div>';
    if (a.kind === 'grid3') return '<div class="tl-grid3">' + a.figs.map(function (f) { return fig(f, 68); }).join('') + '<div class="tl-q">?</div></div>';
    if (a.kind === 'single') return '<div class="tl-frames">' + fig(a.figs[0], 96) + '</div>';
    if (a.kind === 'net') return '<div class="tl-frames">' + net(a.net, a.labels) + '</div>';
    return '';
  }

  window.MT_TESTLAB_CORE = {
    CFG: CFG, ITEMS: ITEMS, byId: byId, FAMILY: FAMILY, SUB: SUB, SUBS: SUBS, MIXED4: MIXED4,
    load: load, save: save, uid: uid, shuffle: shuffle, pool: pool, sample: sample,
    buildSet: buildSet, nextTier: nextTier, pointsFor: pointsFor, report: report, sectionOf: sectionOf,
    weakness: weakness, nextSet: nextSet, focusIds: focusIds, focusMark: focusMark, median: median,
    fig: fig, net: net, assetHtml: assetHtml
  };
})();
