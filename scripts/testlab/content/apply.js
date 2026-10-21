#!/usr/bin/env node
/* Applies the Module 7 enhancement and the new Module 12 to the Pack registry
   (prototype/data/lms/the-pack.js). Idempotent: it detects an already-applied registry by the
   presence of Module 12 and the 7.4 figural lesson and refuses to apply twice.
   Run: node scripts/testlab/content/apply.js [--dry] */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..', '..');
const P = path.join(ROOT, 'prototype', 'data', 'lms', 'the-pack.js');
const DRY = process.argv.includes('--dry');
let src = fs.readFileSync(P, 'utf8');
const MARK = "window.MT_LMS['the-pack'] = ";
const head = src.slice(0, src.indexOf(MARK) + MARK.length);
global.window = {}; global.localStorage = { getItem() { return null; }, setItem() {} }; global.document = {};
require(P);
const REG = window.MT_LMS['the-pack'];
const M7 = require('./m07'), A = require('./m12a'), B = require('./m12b'), C1 = require('./m12c1'), C2 = require('./m12c2'), C3 = require('./m12c3'), D = require('./m12d');

const m7 = REG.modules.find(m => m.num === 7);
if (REG.modules.some(m => m.num === 12) || m7.lessons.some(l => l.n === '7.4' && /Figural/.test(l.title.en))) { console.error('already applied'); process.exit(2); }

/* 1 · renumber Module 7 (7.4→7.5, 7.5→7.7, 7.6→7.8) and remap references in text */
const MAP = M7.RENUMBER;
const RE = /\b7\.([456])\b/g;
let remapped = 0;
function remapText(s) { return s.replace(RE, (m) => { remapped++; return MAP[m] || m; }); }
function walk(v) {
  if (typeof v === 'string') return remapText(v);
  if (Array.isArray(v)) return v.map(walk);
  if (v && typeof v === 'object') { const o = {}; Object.keys(v).forEach(k => { o[k] = walk(v[k]); }); return o; }
  return v;
}
/* all existing modules: Module 7's own content and cross-references elsewhere; every match is listed for review */
const CTX = [];
function remapAll(v, where) {
  if (typeof v === 'string') return v.replace(RE, (m, d, off) => { CTX.push(where + ' · ' + v.slice(Math.max(0, off - 30), off + 12).replace(/\n/g, ' ')); remapped++; return MAP[m] || m; });
  if (Array.isArray(v)) return v.map(x => remapAll(x, where));
  if (v && typeof v === 'object') { const o = {}; Object.keys(v).forEach(k => { o[k] = remapAll(v[k], where); }); return o; }
  return v;
}
REG.modules.forEach((m) => {
  if (m.num !== 7) return;   /* no other module refers to Lessons 7.4 to 7.6 (checked: the only match elsewhere is a numeric “+7.5 points”) */
  m.lessons = m.lessons.map(l => { const nl = remapAll(l, 'M' + m.num + ' ' + l.n); nl.n = MAP[l.n] || l.n; return nl; });
  if (m.num === 7) { m.overview = remapAll(m.overview, 'M7'); m.outcome = remapAll(m.outcome, 'M7'); m.dossier = remapAll(m.dossier, 'M7'); }
});
CTX.filter(c => !/^M7 /.test(c)).forEach(c => console.log('  cross-ref:', c));
console.log('references remapped:', remapped);

/* 2 · insert the new lessons */
const L = m7.lessons;
const at = (n) => L.findIndex(l => l.n === n);
L.splice(at('7.5'), 0, M7.L74);           /* 7.4 before the renumbered 7.5 */
L.splice(at('7.7'), 0, M7.L76);           /* 7.6 before the renumbered 7.7 */
if (L.map(l => l.n).join(',') !== '7.1,7.2,7.3,7.4,7.5,7.6,7.7,7.8') throw new Error('bad order ' + L.map(l => l.n).join(','));

/* 3 · patches to existing lessons */
Object.keys(M7.PATCH).forEach((n) => {
  const p = M7.PATCH[n], l = L[at(n)];
  if (p.sections) l.sections = (l.sections || []).concat(p.sections);
  if (p.compare) l.compare = (l.compare || []).concat(p.compare);
  if (p.steps) l.steps = (l.steps || []).concat(p.steps);
  if (p.tool) l.tool = p.tool;
  if (p.caseStep) { const cs = l.caseStudy; cs.steps.push(p.caseStep); cs.practice.push(p.caseStep.title); if (p.caseModel) cs.model.body = cs.model.body.concat(p.caseModel); if (cs.rubric) cs.rubric.push({ h: M7.PATCH['7.8'].caseStep.title, w: '10%' }); }
  if (p.journeyNext && l.journey) { l.journey.next = p.journeyNext; }
});
/* durations grow with the additions */
const bump = { '7.1': '40', '7.2': '55', '7.3': '70', '7.5': '45', '7.7': '50' };
Object.keys(bump).forEach((n) => { const l = L[at(n)]; l.dur = { en: bump[n] + ' min', id: bump[n] + ' mnt' }; });
m7.overview = M7.MODULE.overview; m7.outcome = M7.MODULE.outcome; m7.dossier = M7.MODULE.dossier;

/* 4 · Module 12 */
const m12 = Object.assign({}, D.MODULE, { lessons: [].concat(A.lessons, B.lessons, C1.lessons, C2.lessons, C3.lessons, D.lessons) });
const want = []; for (let i = 1; i <= 19; i++) want.push('12.' + i);
if (m12.lessons.map(l => l.n).join(',') !== want.join(',')) throw new Error('module 12 order ' + m12.lessons.map(l => l.n).join(','));
REG.modules.push(m12);

/* 5 · sanity: required blocks and no em dashes */
const errs = [];
const need = ['overview', 'objectives', 'readFirst', 'sections', 'diagram', 'compare', 'scenario', 'steps', 'mistakes', 'glossary', 'checks', 'tool', 'takeaways', 'resources'];
m12.lessons.forEach((l) => {
  if (l.caseStudy) return;
  need.forEach(k => { if (!l[k]) errs.push(l.n + ' missing ' + k); });
  if (l.sections && (l.sections.length < 4 || l.sections.length > 7)) errs.push(l.n + ' sections ' + l.sections.length);
  if (l.checks && l.checks.length !== 3) errs.push(l.n + ' checks ' + l.checks.length);
  if (l.objectives && l.objectives.length !== 4) errs.push(l.n + ' objectives ' + l.objectives.length);
});
[M7.L74, M7.L76].forEach((l) => need.forEach(k => { if (!l[k]) errs.push(l.n + ' missing ' + k); }));
const dash = (v, p) => { if (typeof v === 'string') { if (v.indexOf('—') >= 0) errs.push('em dash at ' + p); } else if (Array.isArray(v)) v.forEach((x, i) => dash(x, p + '[' + i + ']')); else if (v && typeof v === 'object') Object.keys(v).forEach(k => dash(v[k], p + '.' + k)); };
dash(m12, 'm12'); dash(m7, 'm7');
if (errs.length) { console.error(errs.join('\n')); process.exit(1); }

const total = REG.modules.reduce((s, m) => s + m.lessons.length, 0);
console.log('module 7 lessons:', L.map(l => l.n).join(' '), '| module 12 lessons:', m12.lessons.length, '| total lessons:', total);
if (DRY) process.exit(0);
fs.writeFileSync(P, head + JSON.stringify(REG, null, 1) + ';\n');
console.log('written', P);
