#!/usr/bin/env node
/* Test Lab bank build. Assembles the hand-authored banks (scripts/testlab/bank) and the
   seeded generators (scripts/testlab/gen) into:
     prototype/data/pack/testlab/config.json            versioned format configuration
     prototype/data/pack/testlab/index.json             counts per bank / family / subtype / tier
     prototype/data/pack/testlab/{bank}/{family}/{subtype}.json   the items
     prototype/data/pack/testlab.js                     one bundle the Pack page loads (window.MT_TESTLAB)
   Validation fails the build on any schema error, duplicate id or stem, option-count mismatch,
   out-of-range key, bad weight set, or an em dash in user-facing text. Run: node scripts/testlab/build.js */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const OUT = path.join(ROOT, 'prototype', 'data', 'pack', 'testlab');
const config = require('./config');
const { rng } = require('./gen/util');
const N = require('./gen/numerik'), P = require('./gen/penalaran'), F = require('./gen/figural');
const BANKS = ['verbal', 'twk', 'tkp', 'akhlak', 'english', 'cerita', 'analitik'].map(b => require('./bank/' + b));

let items = [];
/* generated families (seeds fixed so the bank is identical on every build) */
/* generators are over-sampled, then exact repeats (same stem) are dropped and each
   subtype is trimmed to its target so tiers stay balanced */
/* identity of an item for duplicate checks: the stem, its passage, and (figural) the figure specs */
function stemKey(it) { return it.stem.id + '|' + (it.passage ? (it.passage.id || it.passage.en) : '') + '|' + JSON.stringify((it.assets || []).map(a => a.figs || a.net)) + '|' + JSON.stringify(it.options.map(o => o.fig || null)); }
function gen(fn, seed, target) {
  const raw = fn(seed, Math.ceil(target * 1.8)), seen = new Set(), out = [];
  raw.forEach((it) => { const k = stemKey(it); if (seen.has(k)) return; seen.add(k); out.push(it); });
  return out.slice(0, target);
}
items = items.concat(
  gen(N.deretAngka, 101, 66), gen(N.deretHuruf, 102, 35), gen(N.aritmetika, 103, 60), gen(N.pq, 104, 40),
  gen(P.silogisme, 201, 40), gen(P.kondisional, 202, 30), gen(P.ingkaran, 203, 25),
  gen(F.serial, 301, 30), gen(F.analogi, 302, 30), gen(F.beda, 303, 20), gen(F.matriks, 304, 15), gen(F.spasial, 305, 24)
);
BANKS.forEach(b => { items = items.concat(b.items); });

/* bank assignment and track maps */
function bankOf(it) {
  if (it.family === 'twk' || it.family === 'tkp') return 'skd';
  if (it.family === 'akhlak' || it.family === 'english') return 'bumn';
  return 'tpa';
}
const r = rng(7);
const counters = {}, ids = new Set(), stems = new Set();
const errors = [];
const LABEL = config.practice_label;
items = items.map((it) => {
  const bank = bankOf(it);
  const key = bank + '-' + it.family + '-' + it.subtype;
  counters[key] = (counters[key] || 0) + 1;
  it.id = key + '-' + String(counters[key]).padStart(4, '0');
  it.bank = bank;
  /* hand-authored MCQ items are written key-first; shuffle deterministically and move the key */
  if (!it.generated && it.format !== 'ranked5' && it.format !== 'pq_compare') {
    const order = r.shuffle(it.options.map((_, i) => i));
    it.options = order.map(i => it.options[i]);
    it.answer = order.indexOf(it.answer);
  }
  if (it.format === 'ranked5') {
    const order = r.shuffle([0, 1, 2, 3, 4]);
    const opts = order.map(i => it.options[i]), w = order.map(i => it.weights[i]);
    it.options = opts; it.weights = w; it.answer = w.indexOf(5);
  }
  it.label = LABEL;
  it.status = it.generated ? 'generated' : 'published';
  it.review_by = 'Metanoia content team';
  it.sources_consulted = ['Format and taxonomy patterns only (public descriptions of the test families); no reference-file items, passages, options or explanations reproduced.'];
  if (it.family === 'tkp') it.key_notice = config.tkp_disclaimer;
  if (it.family === 'akhlak') it.key_notice = config.bumn.akhlak_disclaimer;
  if (it.format === 'ranked5') it.review_panel = config.review_panel;
  return it;
});

/* validation */
function walk(v, path, fn) { if (typeof v === 'string') fn(v, path); else if (Array.isArray(v)) v.forEach((x, i) => walk(x, path + '[' + i + ']', fn)); else if (v && typeof v === 'object') Object.keys(v).forEach(k => walk(v[k], path + '.' + k, fn)); }
items.forEach((it) => {
  const e = (m) => errors.push(it.id + ': ' + m);
  if (ids.has(it.id)) e('duplicate id'); ids.add(it.id);
  const sk = stemKey(it);
  if (stems.has(sk)) e('duplicate stem'); stems.add(sk);
  if (!it.stem || !it.stem.id) e('missing stem.id');
  if (![1, 2, 3].includes(it.difficulty)) e('bad difficulty');
  const want = { mcq5: 5, mcq4: 4, pq_compare: 4, ranked5: 5, tfm: 3 }[it.format];
  if (!want) e('unknown format ' + it.format);
  else if (it.options.length !== want) e('option count ' + it.options.length + ' for ' + it.format);
  if (it.format === 'ranked5') { const w = it.weights.slice().sort().join(''); if (w !== '12345') e('weights not a permutation of 1..5'); if (it.weights[it.answer] !== 5) e('answer is not the 5-point option'); }
  else if (!(it.answer >= 0 && it.answer < it.options.length)) e('answer out of range');
  it.options.forEach((o, i) => { if (!o.id && !o.fig) e('empty option ' + i); });
  const seen = new Set(); it.options.forEach((o) => { const k = o.fig ? JSON.stringify(o.fig) : o.id; if (seen.has(k)) e('duplicate option ' + k); seen.add(k); });
  if (!it.explanation || !it.explanation.pola || !it.explanation.langkah) e('explanation needs pola and langkah');
  if (!(it.time_target_s > 0)) e('time target');
  walk(it, '', (s, p) => { if (s.indexOf('—') >= 0) e('em dash at ' + p); });
  if (it.family === 'figural' && !it.assets && it.subtype !== 'beda_gambar') e('figural item without assets');
});
if (errors.length) { console.error(errors.slice(0, 40).join('\n')); console.error(errors.length + ' validation errors'); process.exit(1); }

/* index */
const index = { version: config.version, verified_on: config.verified_on, total: items.length, banks: {} };
items.forEach((it) => {
  const b = index.banks[it.bank] = index.banks[it.bank] || { total: 0, families: {} };
  b.total++;
  const f = b.families[it.family] = b.families[it.family] || { total: 0, subtypes: {} };
  f.total++;
  const s = f.subtypes[it.subtype] = f.subtypes[it.subtype] || { total: 0, t1: 0, t2: 0, t3: 0, generated: 0, file: it.bank + '/' + it.family + '/' + it.subtype + '.json' };
  s.total++; s['t' + it.difficulty]++; if (it.generated) s.generated++;
});

/* write the JSON tree (clean first) */
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'config.json'), JSON.stringify(config, null, 1));
fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify(index, null, 1));
const byFile = {};
items.forEach((it) => { const f = it.bank + '/' + it.family + '/' + it.subtype + '.json'; (byFile[f] = byFile[f] || []).push(it); });
Object.keys(byFile).forEach((f) => { const p = path.join(OUT, f); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, JSON.stringify(byFile[f])); });
fs.writeFileSync(path.join(OUT, 'README.md'), '# Test Lab item bank (built)\n\nGenerated by `node scripts/testlab/build.js` from `scripts/testlab/bank` (hand-authored) and `scripts/testlab/gen` (seeded generators). Do not edit by hand; edit the sources and rebuild.\n\nAll items are Metanoia practice items (`label`). Figural items carry parameter specs (`assets[].figs`, `options[].fig`) that the Lab renders to SVG on the client.\n');

/* page bundle */
const akhlak = require('./bank/akhlak');
const slim = items.map((it) => { const o = Object.assign({}, it); delete o.label; delete o.sources_consulted; delete o.review_by; delete o.key_notice; delete o.review_panel; delete o.generated; if (!o.weights) delete o.weights; if (!o.set_id) delete o.set_id; if (!o.passage) delete o.passage; if (!o.assets) delete o.assets; if (!o.dimension) delete o.dimension; if (!o.role) delete o.role; return o; });
const bundle = { version: config.version, config, index, items: slim, mirror: akhlak.MIRROR, built: new Date().toISOString().slice(0, 10) };
const js = '/* THE PACK · TEST LAB BANK (built by scripts/testlab/build.js; do not edit)\n   ' + items.length + ' Metanoia practice items. Every item carries the practice label; TKP and AKHLAK\n   rankings are Metanoia reasoning keys. Config values carry their source and verified date. */\nwindow.MT_TESTLAB = ' + JSON.stringify(bundle) + ';\n';
fs.writeFileSync(path.join(ROOT, 'prototype', 'data', 'pack', 'testlab.js'), js);

const summary = {};
items.forEach((it) => { summary[it.bank + '/' + it.family] = (summary[it.bank + '/' + it.family] || 0) + 1; });
console.log('testlab build: ' + items.length + ' items', JSON.stringify(summary), 'bundle ' + Math.round(js.length / 1024) + ' KB');
