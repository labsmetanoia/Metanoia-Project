#!/usr/bin/env node
/* The Route · Read-first decks → composed slide specs.
   Engine and authored form: scripts/decks/engine.js. The decks are authored
   whole in decks/m01..m09.txt (action title, emphasis, subtitle, items or two
   columns, key takeaway). Run:  node scripts/route-decks/compose.js  (idempotent) */
'use strict';
require('../decks/engine.js')({
  key: 'the-route',
  registry: 'prototype/data/lms/the-route.js',
  dir: __dirname,
  pool: 'scripts/decks/images.json',
  product: { en: 'The Route', id: 'The Route' },
  bg: { 1: 'm/02-prep.jpg', 2: 'bg/stage-execution.jpg', 3: 'pe/th-stakeholders.jpg', 4: 'bg/visibility.jpg', 5: 'm/03-climb.jpg', 6: 'bg/for-mentor.jpg', 7: 'm/06-horizon.jpg', 8: 'bg/negotiation.jpg', 9: 'm/05-summit.jpg' },
  /* when nothing in a slide's words matches a photo theme, the module's own mood board rotates */
  mood: {
    1: ['m/02-prep.jpg', 'bg/stage-exploration.jpg', 'bg/early-professional.jpg', 'bg/compass.jpg', 'pe/ed-writing.jpg', 'bg/journey-start.jpg', 'bg/ep-stage-architecture.jpg'],
    2: ['bg/stage-execution.jpg', 'pe/ed-conversations.jpg', 'bg/visibility.jpg', 'pe/ed-writing.jpg', 'bg/ep-stage-permission.jpg', 'pe/ed-lead.jpg', 'bg/mp-stage-impact.jpg'],
    3: ['pe/th-stakeholders.jpg', 'bg/negotiation.jpg', 'pe/ed-board.jpg', 'pe/ed-conversations.jpg', 'bg/rope-team.jpg', 'bg/visibility.jpg', 'bg/two-different-muscles.jpg'],
    4: ['bg/visibility.jpg', 'pe/ed-lead.jpg', 'pe/ps-positioning.jpg', 'pe/th-network.jpg', 'bg/alumni.jpg', 'pe/ed-startup.jpg', 'pe/the-inflection.jpg'],
    5: ['m/03-climb.jpg', 'bg/ep-stage-acceleration.jpg', 'bg/stage-execution.jpg', 'pe/ed-board.jpg', 'bg/mp-stage-impact.jpg', 'pe/ed-ladder.jpg', 'bg/fg-stage-ascent.jpg'],
    6: ['bg/for-mentor.jpg', 'pe/th-stakeholders.jpg', 'pe/ed-conversations.jpg', 'bg/alumni.jpg', 'bg/negotiation.jpg', 'bg/rope-team.jpg', 'm/04-basecamp.jpg'],
    7: ['m/06-horizon.jpg', 'bg/compass.jpg', 'bg/fg-sprint-direction.jpg', 'bg/ch1-realization.jpg', 'bg/fg-sprint-interview.jpg', 'bg/portal.jpg', 'bg/mp-stage-relaunch.jpg'],
    8: ['bg/negotiation.jpg', 'bg/mature-professional.jpg', 'pe/ed-writing.jpg', 'bg/stage-graduation.jpg', 'bg/ep-stage-architecture.jpg', 'bg/early-professional.jpg', 'bg/fg-sprint-offer.jpg'],
    9: ['m/05-summit.jpg', 'pe/ed-lead.jpg', 'bg/rope-team.jpg', 'pe/ed-board.jpg', 'bg/resilience.jpg', 'pe/th-stakeholders.jpg', 'bg/hero.jpg', 'bg/mp-stage-impact.jpg']
  }
});
