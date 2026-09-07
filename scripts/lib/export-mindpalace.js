#!/usr/bin/env node
/**
 * Export the Mind Palace content registry (prototype/data/mindpalace.js) as
 * JSON for the static site build. Usage: node scripts/lib/export-mindpalace.js
 */
'use strict';
const path = require('path');
global.window = {};
global.localStorage = { getItem() { return null; }, setItem() {} };
require(path.join(__dirname, '..', '..', 'prototype', 'data', 'mindpalace.js'));
const MP = window.MT_MP;
process.stdout.write(JSON.stringify({
  topics: MP.TOPICS, formats: MP.FORMATS, stages: MP.STAGES, needs: MP.NEEDS,
  articles: MP.ARTICLES, radar: MP.RADAR
}));
