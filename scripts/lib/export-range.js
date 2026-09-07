#!/usr/bin/env node
/**
 * Export The Range's company graph as plain JSON for the static site build.
 *
 * The browser data files (prototype/data/range/*.js) attach themselves to
 * `window`; this script evaluates them under a stub window and prints one JSON
 * document to stdout: companies, opportunities, industries, function roles,
 * typical hiring processes, stage names, stage→module mapping, sourced
 * programmes and the per-function editorial profiles from range-app.js.
 *
 * Usage: node scripts/lib/export-range.js > range.json
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..', '..', 'prototype');
global.window = {};
global.localStorage = { getItem() { return null; }, setItem() {} };
for (const f of ['graph.js', 'fit.js', 'companies-db.js', 'opportunities.js']) {
  require(path.join(ROOT, 'data', 'range', f));
}
const G = window.MT_RANGE_GRAPH, O = window.MT_RANGE_OPPS, DB = window.MT_RANGE_DB;

/* FN_META lives inside the app closure; lift the literal out of the source. */
const src = fs.readFileSync(path.join(ROOT, 'products', 'the-map', 'js', 'range-app.js'), 'utf8');
const start = src.indexOf('  var FN_META = {');
if (start < 0) throw new Error('FN_META not found in range-app.js');
const end = src.indexOf('\n  };', start);
const literal = src.slice(start + '  var FN_META = '.length, end + '\n  }'.length);
const FN_META = vm.runInNewContext('(function(){ var P = function (en, idn) { return { en: en, id: idn }; }; return ' + literal + '; })()');
if (!FN_META.engineering || !FN_META.trainee) throw new Error('FN_META extraction incomplete');

const companies = O.companies();
const opps = O.opps();
const byCompany = {};
for (const o of opps) (byCompany[o.company] = byCompany[o.company] || []).push(o);

const out = {
  generated_from: 'prototype/data/range/*.js',
  industries: G.industries.map(i => ({ id: i.id, name: i.name, desc: i.desc || null })),
  fn_roles: O.FN_ROLES,
  fn_meta: FN_META,
  typical: O.TYPICAL,
  stage_names: O.STAGE_NAMES,
  stage_types: G.stageTypes,
  programmes: G.programmes || [],
  sourced_companies: G.companies,
  country_names: DB.CC,
  companies: companies.map(c => ({
    id: c.id, name: c.name, industry_id: c.industry_id, geo: c.geo, country: c.country,
    desc: c.desc, website: c.website, domain: c.domain, fns: c.fns, proc: c.proc, bumn: !!c.bumn,
    source_type: c.source_type || null, last_reviewed: c.last_reviewed || null,
    roles: (byCompany[c.id] || []).map(o => ({ id: o.id, fn: o.fn, dir: o.dir, role: o.role, prog: o.prog || null, proc: o.proc, hours: o.hours || null }))
  }))
};
process.stdout.write(JSON.stringify(out));
