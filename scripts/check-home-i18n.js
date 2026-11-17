#!/usr/bin/env node
/* The home page keeps its two languages in one dictionary inside prototype/index.html (I18N.en, I18N.id).
   This check fails when a language is incomplete, because the page then shows a blank paragraph or falls
   back to English without anyone noticing:
     • both languages hold the same keys, and no value is empty;
     • every key the markup asks for (data-i18n, data-i18n-ph) exists;
     • a string keeps its emphasis: the same number of <em> in both languages;
     • a phone variant (key@m) exists in both languages or in neither.
   Run by scripts/integrity-check.sh. */
const fs = require('fs'), path = require('path');
const file = path.join(__dirname, '..', 'prototype', 'index.html');
const html = fs.readFileSync(file, 'utf8');
const start = html.indexOf('const I18N = {');
if (start < 0) { console.log('   ✗ I18N not found in prototype/index.html'); process.exit(1); }
/* the object literal, by matching braces outside strings */
let i = html.indexOf('{', start), depth = 0, q = null, k = i;
for (;; k++) {
  const c = html[k];
  if (q) { if (c === '\\') { k++; continue; } if (c === q) q = null; }
  else if (c === '"' || c === "'" || c === '`') q = c;
  else if (c === '{') depth++;
  else if (c === '}' && --depth === 0) break;
}
let I18N;
try { I18N = Function('"use strict"; return (' + html.slice(i, k + 1) + ');')(); } catch (e) { console.log('   ✗ I18N does not parse: ' + e.message); process.exit(1); }
const en = I18N.en || {}, id = I18N.id || {}, bad = [];
for (const key of Object.keys(en)) if (!(key in id)) bad.push('missing in id: ' + key);
for (const key of Object.keys(id)) if (!(key in en)) bad.push('missing in en: ' + key);
for (const [lang, d] of [['en', en], ['id', id]]) for (const key of Object.keys(d)) if (typeof d[key] !== 'string' || !d[key].trim()) bad.push('empty in ' + lang + ': ' + key);
const count = (s, re) => (String(s).match(re) || []).length;
for (const key of Object.keys(en)) if (key in id && count(en[key], /<em>/g) !== count(id[key], /<em>/g)) bad.push('emphasis differs: ' + key);
const used = new Set();
for (const m of html.slice(0, start).matchAll(/data-i18n(?:-ph)?="([^"${}]+)"/g)) used.add(m[1]);
for (const key of used) if (!(key in en) || !(key in id)) bad.push('used in the page but not in the dictionary: ' + key);
if (bad.length) { bad.slice(0, 20).forEach(b => console.log('   ' + b)); console.log('   ✗ the home page dictionary is incomplete (' + bad.length + ')'); process.exit(1); }
console.log('   clean: ' + Object.keys(en).length + ' keys in both languages, ' + used.size + ' used by the page');
