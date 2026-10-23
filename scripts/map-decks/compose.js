#!/usr/bin/env node
/* The Map · Read-first decks → composed slide specs (Module 5 · 5.2, 5.4, 5.6; the other lessons carry films and
   supplied slide decks). Engine and authored form: scripts/decks/engine.js. The decks are authored whole in
   decks/m05.txt; node scripts/map-decks/expand.js first writes the slide skeletons into the registry.
   Run:  node scripts/map-decks/compose.js  (idempotent) */
'use strict';
require('../decks/engine.js')({
  key: 'the-map',
  registry: 'prototype/data/lms/the-map.js',
  dir: __dirname,
  pool: 'scripts/decks/images.json',
  product: { en: 'The Map', id: 'The Map' },
  bg: { 1: 'bg/map.jpg', 2: 'bg/compass.jpg', 3: 'bg/stage-exploration.jpg', 4: 'pe/ed-lead.jpg', 5: 'bg/alumni.jpg', 6: 'pe/ed-board.jpg' },
  mood: {
    1: ['bg/map.jpg', 'bg/journey-start.jpg', 'pe/th-mapread.jpg'],
    2: ['bg/compass.jpg', 'pe/ed-writing.jpg'],
    3: ['bg/stage-exploration.jpg', 'pe/ed-writing.jpg'],
    4: ['pe/ed-lead.jpg', 'pe/ed-conversations.jpg'],
    5: ['bg/two-different-muscles.jpg', 'bg/alumni.jpg', 'pe/ed-conversations.jpg', 'bg/map.jpg', 'pe/th-stakeholders.jpg', 'bg/visibility.jpg', 'bg/stage-exploration.jpg', 'pe/ed-writing.jpg', 'bg/mp-stage-reckoning.jpg'],
    6: ['pe/ed-board.jpg', 'bg/stage-exploration.jpg']
  }
});
