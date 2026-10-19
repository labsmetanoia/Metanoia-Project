#!/usr/bin/env node
/* The Pack · Read-first decks → composed slide specs (Lessons 1.2 to 9.5; 1.1 shows the
   supplied image decks). Engine and authored form: scripts/decks/engine.js. The decks are
   authored whole in decks/m01..m09.txt. Run:  node scripts/pack-decks/compose.js  (idempotent) */
'use strict';
require('../decks/engine.js')({
  key: 'the-pack',
  registry: 'prototype/data/lms/the-pack.js',
  dir: __dirname,
  pool: 'scripts/decks/images.json',
  product: { en: 'The Pack', id: 'The Pack' },
  bg: { 1: 'bg/gauntlet/gate-01-submission.jpg', 2: 'bg/alumni.jpg', 3: 'pe/ed-writing.jpg', 4: 'bg/gauntlet/gate-02-screening.jpg', 5: 'bg/early-professional.jpg', 6: 'pe/ed-writing.jpg', 7: 'bg/gauntlet/gate-03-assessment.jpg', 8: 'pe/ps-positioning.jpg', 9: 'bg/gauntlet/gate-05-hr-interview.jpg', 10: 'bg/rope-team.jpg', 11: 'pe/ed-board.jpg' },
  mood: {
    1: ['bg/fg-stage-ascent.jpg', 'bg/compass.jpg', 'pe/ed-writing.jpg', 'bg/stage-exploration.jpg', 'bg/journey-start.jpg', 'bg/fg-sprint-direction.jpg', 'bg/portal.jpg'],
    2: ['bg/alumni.jpg', 'pe/ed-conversations.jpg', 'bg/fg-sprint-positioning.jpg', 'pe/th-stakeholders.jpg', 'bg/visibility.jpg', 'pe/th-network.jpg', 'bg/negotiation.jpg'],
    3: ['pe/ed-writing.jpg', 'bg/stage-exploration.jpg', 'bg/pack.jpg', 'bg/early-professional.jpg', 'bg/ep-stage-architecture.jpg', 'bg/fg-sprint-positioning.jpg', 'pe/strategic-target-list.jpg'],
    4: ['bg/stage-exploration.jpg', 'pe/ed-writing.jpg', 'bg/ep-stage-permission.jpg', 'bg/pack.jpg', 'bg/compass.jpg', 'bg/fg-sprint-interview.jpg', 'pe/ps-positioning.jpg'],
    5: ['bg/early-professional.jpg', 'pe/ps-positioning.jpg', 'bg/visibility.jpg', 'pe/the-inflection.jpg', 'bg/alumni.jpg', 'pe/ed-conversations.jpg', 'bg/mature-professional.jpg'],
    6: ['pe/ed-writing.jpg', 'bg/stage-exploration.jpg', 'bg/early-professional.jpg', 'bg/fg-sprint-positioning.jpg', 'bg/pack.jpg', 'bg/ep-stage-architecture.jpg'],
    7: ['bg/stage-exploration.jpg', 'pe/ed-writing.jpg', 'bg/ep-stage-architecture.jpg', 'bg/two-different-muscles.jpg', 'bg/resilience.jpg', 'bg/fg-stage-ascent.jpg', 'bg/mp-stage-reckoning.jpg'],
    8: ['pe/ps-positioning.jpg', 'bg/stage-exploration.jpg', 'pe/ed-writing.jpg', 'bg/visibility.jpg', 'pe/th-network.jpg', 'bg/ep-stage-permission.jpg'],
    9: ['bg/fg-sprint-interview.jpg', 'bg/stage-execution.jpg', 'pe/ed-conversations.jpg', 'bg/negotiation.jpg', 'bg/fg-sprint-offer.jpg', 'bg/mp-stage-reckoning.jpg', 'bg/fg-sprint-arrival.jpg'],
    10: ['bg/rope-team.jpg'], 11: ['pe/ed-board.jpg']
  }
});
