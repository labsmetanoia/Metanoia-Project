#!/usr/bin/env node
/* The Rope · Read-first decks → composed slide specs.
   Engine and authored form: scripts/decks/engine.js. Inputs in this folder:
   story/*.json (action titles, layouts), enrich/*.txt (emphasis, descriptions,
   labels, icons). Run:  node scripts/rope-decks/compose.js  (idempotent) */
'use strict';
require('../decks/engine.js')({
  key: 'the-rope',
  registry: 'prototype/data/lms/the-rope.js',
  dir: __dirname,
  pool: 'scripts/decks/images.json',
  bg: { 1: 'bg/fg-sprint-interview.jpg', 2: 'pe/ed-writing.jpg', 3: 'pe/ed-board.jpg', 4: 'bg/visibility.jpg', 5: 'pe/ed-people.jpg', 6: 'pe/ed-room.jpg', 7: 'bg/rope-team.jpg', 8: 'bg/mp-stage-impact.jpg', 9: 'bg/rope.jpg', 10: 'pe/ed-handshake.jpg', 11: 'bg/fg-sprint-arrival.jpg' },
  /* when nothing in an item's words matches a photo theme, the module's own mood board rotates */
  mood: {
    1: ['bg/stage-execution.jpg', 'bg/mp-stage-reckoning.jpg', 'bg/fg-sprint-interview.jpg', 'pe/ed-conversations.jpg', 'bg/ep-stage-permission.jpg', 'bg/visibility.jpg'],
    2: ['pe/ed-writing.jpg', 'bg/ep-stage-architecture.jpg', 'bg/early-professional.jpg', 'pe/ed-conversations.jpg', 'bg/fg-stage-ascent.jpg', 'm/04-basecamp.jpg', 'bg/portal.jpg'],
    3: ['bg/fg-sprint-positioning.jpg', 'bg/stage-exploration.jpg', 'bg/compass.jpg', 'pe/th-network.jpg', 'bg/ep-stage-architecture.jpg', 'pe/th-mapread.jpg'],
    4: ['bg/fg-sprint-interview.jpg', 'pe/ed-lead.jpg', 'bg/visibility.jpg', 'pe/ps-positioning.jpg', 'bg/fg-sprint-arrival.jpg', 'bg/resilience.jpg', 'pe/the-inflection.jpg'],
    5: ['bg/stage-execution.jpg', 'bg/negotiation.jpg', 'bg/mp-stage-reckoning.jpg', 'bg/early-professional.jpg', 'pe/ed-conversations.jpg', 'bg/fg-sprint-positioning.jpg', 'bg/two-different-muscles.jpg'],
    6: ['pe/ed-lead.jpg', 'pe/ed-board.jpg', 'bg/stage-exploration.jpg', 'bg/ep-stage-architecture.jpg', 'bg/visibility.jpg', 'pe/th-network.jpg'],
    7: ['pe/th-stakeholders.jpg', 'bg/visibility.jpg', 'bg/rope-team.jpg', 'pe/ed-conversations.jpg', 'bg/fg-stage-ascent.jpg', 'pe/ed-lead.jpg', 'bg/negotiation.jpg', 'm/04-basecamp.jpg', 'bg/alumni.jpg'],
    8: ['pe/ed-board.jpg', 'bg/stage-execution.jpg', 'bg/mature-professional.jpg', 'bg/journey-start.jpg', 'bg/fg-sprint-interview.jpg', 'bg/fg-sprint-offer.jpg', 'bg/mp-stage-impact.jpg'],
    9: ['bg/stage-exploration.jpg', 'pe/ps-positioning.jpg', 'pe/ed-conversations.jpg', 'bg/fg-stage-ascent.jpg', 'bg/two-different-muscles.jpg', 'pe/ed-writing.jpg', 'bg/resilience.jpg', 'pe/th-stakeholders.jpg', 'bg/hero.jpg'],
    10: ['bg/negotiation.jpg', 'bg/stage-graduation.jpg', 'bg/fg-sprint-offer.jpg', 'bg/early-professional.jpg', 'bg/ch1-realization.jpg', 'bg/compass.jpg', 'bg/fg-sprint-positioning.jpg', 'bg/mp-stage-relaunch.jpg'],
    11: ['bg/mp-stage-relaunch.jpg', 'bg/ep-stage-permission.jpg', 'bg/visibility.jpg', 'pe/ed-startup.jpg', 'pe/ed-writing.jpg', 'pe/th-stakeholders.jpg', 'bg/ep-stage-acceleration.jpg', 'bg/mp-stage-impact.jpg', 'pe/ed-ladder.jpg']
  }
});
