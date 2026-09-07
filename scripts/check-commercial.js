#!/usr/bin/env node
/**
 * Commercial-model drift gate.
 *
 * Every element marked data-commercial="<key>" must carry, as its static
 * data-en text, exactly the string that prototype/data/commercial.js defines
 * for that key (with {edition}/{product} filled from data-edition /
 * data-product). The page hydrates from the data file at runtime; this check
 * makes sure the HTML fallback never drifts from it — which is how /help,
 * /portal and /pricing came to describe three different commercial models.
 *
 * Also fails if any page still carries a retired commercial term.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'prototype');
global.window = {};
global.document = { readyState: 'complete', querySelectorAll: () => [], addEventListener: () => {} };
global.localStorage = { getItem: () => null };
require(path.join(ROOT, 'data', 'commercial.js'));
const C = window.MT_COMMERCIAL;

function unescape(s) {
  return s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', 'audit', 'range', 'mind-palace', 'og'].includes(e.name)) continue;
      walk(p, out);
    } else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const RETIRED = ['Premium Trail', 'Learning Access', 'Metanoia Premium', 'Upgrade to Premium'];
let fail = 0, checked = 0;
for (const f of walk(ROOT, [])) {
  const s = fs.readFileSync(f, 'utf8');
  const rel = path.relative(ROOT, f);
  for (const term of RETIRED) {
    if (s.includes(term)) { console.log(`RETIRED COMMERCIAL TERM "${term}" in ${rel}`); fail++; }
  }
  const re = /<[a-z][a-z0-9]*(?:\s+[^\s=>"']+(?:="[^"]*"|='[^']*')?)*\s*\/?>/g;
  let m;
  while ((m = re.exec(s))) {
    const tag = m[0];
    const km = tag.match(/\sdata-commercial="([^"]+)"/);
    if (!km) continue;
    const key = km[1];
    const ed = (tag.match(/data-edition="([^"]*)"/) || [])[1] || '';
    const prod = (tag.match(/data-product="([^"]*)"/) || [])[1] || '';
    const en = (tag.match(/data-en="([^"]*)"/) || [])[1];
    const expect = C.get(key, ed, prod);
    checked++;
    if (!expect) { console.log(`UNKNOWN COMMERCIAL KEY "${key}" in ${rel}`); fail++; continue; }
    if (en === undefined) { console.log(`MISSING data-en on data-commercial="${key}" in ${rel}`); fail++; continue; }
    if (unescape(en) !== expect.en) {
      console.log(`DRIFT in ${rel} [${key}]\n   html: ${unescape(en).slice(0, 120)}\n   data: ${expect.en.slice(0, 120)}`);
      fail++;
    }
  }
}
console.log(`   ${checked} commercial strings checked against data/commercial.js`);
if (fail) { console.log(`✗ commercial model check FAILED (${fail})`); process.exit(1); }
console.log('   clean');
