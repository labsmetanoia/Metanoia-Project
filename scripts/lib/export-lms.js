#!/usr/bin/env node
/**
 * Export every LMS lesson (The Map, The Pack, The Rope, The Route) as plain
 * JSON for the site search index: product, module, lesson number, bilingual
 * titles and a keyword snippet from the lesson's own overview and objectives.
 *
 * Usage: node scripts/lib/export-lms.js > lessons.json
 */
'use strict';
const path = require('path');
const ROOT = path.join(__dirname, '..', '..', 'prototype');
global.window = {};
global.localStorage = { getItem() { return null; }, setItem() {} };
global.document = {};

const PRODUCTS = [['the-map', 'The Map'], ['the-pack', 'The Pack'], ['the-rope', 'The Rope'], ['the-route', 'The Route']];
const txt = (v, L) => (v == null ? '' : typeof v === 'object' ? (v[L] || v.en || '') : String(v));
const out = [];
for (const [slug, name] of PRODUCTS) {
  require(path.join(ROOT, 'data', 'lms', slug + '.js'));
  const C = window.MT_LMS[slug];
  if (!C || !C.modules) continue;
  C.modules.forEach((m, mi) => {
    (m.lessons || []).forEach((l) => {
      if (!l || !l.n || !l.title) return;
      const kw = [txt(l.overview, 'en'), txt(l.overview, 'id'),
        ...(Array.isArray(l.objectives) ? l.objectives.map(o => txt(o, 'en') + ' ' + txt(o, 'id')) : [])]
        .join(' ').toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim().slice(0, 260);
      out.push({
        p: slug, product: name, n: String(l.n), m: mi + 1, bonus: !!m.bonus,
        module: { en: txt(m.title, 'en'), id: txt(m.title, 'id') || txt(m.title, 'en') },
        title: { en: txt(l.title, 'en'), id: txt(l.title, 'id') || txt(l.title, 'en') },
        kind: l.kind || '', kw
      });
    });
  });
}
process.stdout.write(JSON.stringify(out));
