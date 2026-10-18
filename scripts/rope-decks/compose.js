#!/usr/bin/env node
/* The Rope · Read-first decks → composed slide specs.

   Writes a `compose` block into every Read-first deck of prototype/data/lms/the-rope.js:
   module photo, lesson, storyline (cover), and per slide an action title with
   one emphasised phrase, a body framework (list · pillars · grid · flow ·
   compare · bars · statement), items with a distinct icon, a photo and a
   one-line description, the "so what" line, sources, and the closing synthesis.

   Inputs (all in this folder)
     story/*.json    authored action titles per slide: { "1.1": { s: [ { t:{en,id}, lay?, lbl?, items?, src?, take?, cap? } ] } }
     enrich/*.json   authored depth per slide: { "1.3#0": { em:{en,id}, d:[{en,id}|null…], l:[…], i:[icon…], img, imgs:[…] } }
     images.json     the photo pool with themes
   Text stays the registry's own words in both languages; the generator only
   arranges them. Run:  node scripts/rope-decks/compose.js  (idempotent) */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const P = path.join(ROOT, 'prototype', 'data', 'lms', 'the-rope.js');
let src = fs.readFileSync(P, 'utf8');

/* strip any compose block written by an earlier run */
(function strip() {
  const key = '"readFirst": {\n      "compose": ';
  let i;
  while ((i = src.indexOf(key)) >= 0) {
    let j = i + key.length, depth = 0, inStr = false, esc = false;
    for (; j < src.length; j++) {
      const ch = src[j];
      if (inStr) { if (esc) esc = false; else if (ch === '\\') esc = true; else if (ch === '"') inStr = false; continue; }
      if (ch === '"') inStr = true; else if (ch === '{') depth++; else if (ch === '}') { depth--; if (depth === 0) { j++; break; } }
    }
    if (src[j] === ',') j++;
    src = src.slice(0, i) + '"readFirst": {' + src.slice(j);
  }
})();
global.window = {}; global.localStorage = { getItem() { return null; }, setItem() {} }; global.document = {};
require(P);
const C = window.MT_LMS['the-rope'];

const loadDir = (d) => { const o = {}; const D = path.join(__dirname, d); if (fs.existsSync(D)) fs.readdirSync(D).filter(f => /\.json$/.test(f)).sort().forEach(f => Object.assign(o, JSON.parse(fs.readFileSync(path.join(D, f), 'utf8')))); return o; };
const STORY = loadDir('story');
/* enrich/*.txt: the same depth in a compact authored form
     @1.3#0
     em: en || id              phrase of the title to set in gold (both languages)
     d0: en || id              one-line description under item 0's title
     l0: en || id              short label over item 0's sentence
     take: en || id            subtitle override
     i: bulb,doc,-             icon per item ('-' keeps the automatic choice)
     img: pe/x.jpg             slide photo (list/statement/bars)
     imgs: a.jpg,-,b.jpg       photo per item (grid/pillars/compare)
     lay: grid                 layout override */
const loadTxt = (d) => {
  const o = {}; const D = path.join(__dirname, d); if (!fs.existsSync(D)) return o;
  const pair = (v) => { const [en, id] = v.split('||').map(x => x.trim()); return { en, id: id || en }; };
  fs.readdirSync(D).filter(f => /\.txt$/.test(f)).sort().forEach(f => {
    let cur = null;
    fs.readFileSync(path.join(D, f), 'utf8').split(/\r?\n/).forEach((line, ln) => {
      const t = line.trim(); if (!t || t[0] === '#') return;
      if (t[0] === '@') { cur = o[t.slice(1).trim()] = o[t.slice(1).trim()] || {}; return; }
      const m = /^([a-z]+)(\d*)\s*:\s*(.*)$/.exec(t); if (!m || !cur) throw new Error(f + ':' + (ln + 1) + ' bad line: ' + t);
      const [, key, n, val] = m;
      if (key === 'd' || key === 'l') { (cur[key] = cur[key] || [])[+n] = pair(val); }
      else if (key === 'em' || key === 'take') cur[key] = pair(val);
      else if (key === 'i' || key === 'imgs') cur[key] = val.split(',').map(x => x.trim()).map(x => x === '-' ? null : x);
      else if (key === 'img' || key === 'lay') cur[key] = val;
      else throw new Error(f + ':' + (ln + 1) + ' unknown key ' + key);
    });
  });
  return o;
};
const ENRICH = Object.assign(loadDir('enrich'), loadTxt('enrich'));
const POOL = JSON.parse(fs.readFileSync(path.join(__dirname, 'images.json'), 'utf8')).pool;
POOL.forEach(x => { if (!fs.existsSync(path.join(ROOT, 'prototype', 'assets', x.f))) throw new Error('missing image ' + x.f); });

const BG = { 1: 'bg/fg-sprint-interview.jpg', 2: 'pe/ed-writing.jpg', 3: 'pe/ed-board.jpg', 4: 'bg/visibility.jpg', 5: 'pe/ed-people.jpg', 6: 'pe/ed-room.jpg', 7: 'bg/rope-team.jpg', 8: 'bg/mp-stage-impact.jpg', 9: 'bg/rope.jpg', 10: 'pe/ed-handshake.jpg', 11: 'bg/fg-sprint-arrival.jpg' };
/* when nothing in an item's words matches a photo theme, the module's own mood board rotates */
const MOOD = {
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
};

/* icons: first matching rule wins; a slide never shows the same icon twice */
const ICON_RULES = [
  [/\b(never|don[’']t|do not|not to do|avoid|illegal|inappropriate|myth|lie|lying|bluff|fake|invent|ultimatum)/i, 'x'],
  [/\b(red flag|warning|danger|risk|fear|afraid|disqualif|threat)/i, 'warn'],
  [/\b(integrity|protect|safe|honest|truth|trust|gratifikasi|law|legal)/i, 'shield'],
  [/\b(salary|pay|gaji|money|gross|net|bonus|rupiah|rp\b|allowance|take-home|thr|tunjangan|compensation|deduction|pph)/i, 'coin'],
  [/\b(contract|pkwt|bond|ikatan|clause|sign|terms|offer letter|written)/i, 'clipboard'],
  [/\b(question|ask|why us|why you|tell me|\?)/i, 'question'],
  [/\b(stress|pressure|nerve|anxiety|calm|breath|composure|pause|silence)/i, 'brain'],
  [/\b(technical|tool|system|stack|method|process improvement|spreadsheet|sql|code|engineering)/i, 'gear'],
  [/\b(research|read the|decode|scan|search|site|website|news|report|linkedin|source|annual)/i, 'search'],
  [/\b(motivat|drive|why here|goal|ambition|trajectory|direction|arc)/i, 'compass'],
  [/\b(self-assess|strength|weakness|self|own(ing|ed)?\b|ownership|reflect)/i, 'person'],
  [/\b(case|analy|structure|framework|hypothes|tree|profit|revenue|market|estimat|number|percent|break-even|margin)/i, 'calc'],
  [/\b(evidence|proof|story|stories|example|star\b|log|record|document|cv|letter|transcript|exhibit|notes?|card|kit)/i, 'doc'],
  [/\b(minute|second|day\b|days|week|hour|month|deadline|timeline|calendar|probation|90|timer|early|late)/i, 'clock'],
  [/\b(panel|group|team|peer|partner|interviewer|manager|hr\b|mentor|people|senior|chair|assessor|colleague|user|observer|psychologist|staff)/i, 'users'],
  [/\b(score|scored|anchor|rating|scoresheet|debrief|scorecard|measure|signal|trend|weight|proportion|tally|baseline|dimension)/i, 'chart'],
  [/\b(decide|decision|choose|target|priority|prioritis|matrix|predict|map\b|precision|walk-away|criteria)/i, 'target'],
  [/\b(voice|speak|say|opening|answer|talk|phrase|present|pitch|open|articulate|register|words a minute|filler)/i, 'mic'],
  [/\b(practice|practise|rehearse|repeat|loop|iterate|again|spaced|redo|retry|simulat)/i, 'refresh'],
  [/\b(notice|observe|watch|eyes|look|eye contact|camera|video|lens|visible)/i, 'eye'],
  [/\b(write|note|plan|draft|prepare|template|one page|page|summary|summar)/i, 'pen'],
  [/\b(step|stage|sequence|order|track|ladder|first|then|next|climb|level|realism)/i, 'steps'],
  [/\b(value|good|best|win|potential|belief|culture|norm|distinctive|differentiator)/i, 'star'],
  [/\b(learn|lesson|study|thesis|degree|gpa|major|graduat|university|campus)/i, 'cap'],
  [/\b(close|finish|end\b|after|follow-up|thank|accept|decline)/i, 'flag'],
  [/\b(balance|trade-off|versus|vs\.?|compare|both|either)/i, 'scale'],
  [/\b(chat|conversation|probe|follow|whatsapp|email|message|feedback)/i, 'chat'],
  [/\b(date|schedule|quarter|friday|monday|start date|arrive)/i, 'calendar'],
  [/\b(placement|location|city|island|regional|office|branch|site\b)/i, 'pin'],
  [/\b(relationship|network|connect|sponsor|handshake|agreement|negotiat)/i, 'handshake'],
  [/\b(build|grow|progress|improve|develop|advance|deliver|result|output|achieve)/i, 'rocket'],
  [/\b(list|type|types|famil|seven|five|four|three|six|ten|component|part|item|format)/i, 'list'],
  [/\b(brief|role|task|assign|job|work|lane|responsib)/i, 'briefcase'],
  [/\b(bank|enterprise|company|organisation|startup|sme|firm|business|corporate|bumn)/i, 'building'],
  [/\b(global|international|abroad|world|multinational)/i, 'globe'],
  [/\b(check|verify|confirm|consisten|tick|match)/i, 'check']
];
const FALLBACK = ['bulb', 'doc', 'target', 'chart', 'users', 'star', 'layers', 'bolt', 'grid', 'puzzle', 'key', 'link'];
function iconsFor(texts, overrides) {
  const used = new Set(), out = [];
  texts.forEach((t, i) => {
    if (overrides && overrides[i]) { out.push(overrides[i]); used.add(overrides[i]); return; }
    let pick = null;
    for (const [re, ic] of ICON_RULES) { if (re.test(t) && !used.has(ic)) { pick = ic; break; } }
    if (!pick) pick = FALLBACK.find(ic => !used.has(ic)) || 'bulb';
    used.add(pick); out.push(pick);
  });
  return out;
}

/* photos: score an item's words against the pool, never twice in a slide, spread across the deck */
const tok = s => ' ' + String(s || '').toLowerCase().replace(/[^a-z0-9+\- ]/g, ' ').replace(/\s+/g, ' ') + ' ';
function pickImage(text, ctx, used, deckUsed, mod) {
  const words = tok(text), cwords = tok(ctx);
  let best = null, bestS = 0;
  POOL.forEach(p => {
    if (used.has(p.f)) return;
    let s = 0;
    p.t.forEach(t => { const k = ' ' + t + ' '; if (words.indexOf(k) >= 0) s += t.indexOf(' ') > 0 ? 3 : 2; else if (cwords.indexOf(k) >= 0) s += .5; });
    s -= .7 * (deckUsed[p.f] || 0);
    if (s > bestS) { bestS = s; best = p.f; }
  });
  if (!best || bestS < 1.5) {
    const mood = MOOD[mod] || MOOD[1];
    best = mood.find(f => !used.has(f) && !(deckUsed[f] > 0)) || mood.find(f => !used.has(f)) || mood[0];
  }
  used.add(best); deckUsed[best] = (deckUsed[best] || 0) + 1;
  return '../../assets/' + best;
}

const SRC_RE = /^(Adapted from|A synthesis of|The current Rope|Diadaptasi dari|Sintesis dari|Gagasan)/;
function isSource(p) { return SRC_RE.test(p.en) && p.en.length < 170; }
function enumOf(t) {
  const m = /^(.*?[.!])(\s+[A-Z“"].*)?$/.exec(t.trim());
  const first = (m ? m[1] : t).trim().replace(/[.!]$/, ''), rest = m && m[2] ? m[2].trim() : '';
  if (/ · /.test(first)) {
    const parts = first.split(/ · /).map(s => s.trim()).filter(Boolean);
    if (parts.length >= 3 && parts.length <= 10 && parts.every(s => s.length >= 1 && s.length <= (parts.length <= 4 ? 130 : 90))) return { kind: 'enum', parts, rest };
  }
  if (/→/.test(first) && !/[;]/.test(first)) {
    const parts = first.split(/\s*→\s*/).map(s => s.trim()).filter(Boolean);
    if (parts.length >= 3 && parts.length <= 7 && parts.every(s => s.length >= 2 && s.length <= 70)) return { kind: 'flow', parts, rest };
  }
  return null;
}
function enumPair(p) {
  const en = enumOf(p.en), id = enumOf(p.id || p.en);
  if (en && id && en.kind === id.kind && en.parts.length === id.parts.length) return { kind: en.kind, items: en.parts.map((e, i) => ({ en: e, id: id.parts[i] })), cap: en.rest ? { en: en.rest, id: id.rest || en.rest } : null };
  return null;
}
function barsOf(p) {
  const parts = p.en.replace(/[.!]$/, '').split(/ · /);
  if (parts.length < 3 || !parts.every(s => /^[A-Za-z+ ]{1,14}\s\d{1,3}$/.test(s.trim()))) return null;
  const idp = (p.id || p.en).replace(/[.!]$/, '').split(/ · /);
  return parts.map((s, i) => { const m = /^(.*)\s(\d+)$/.exec(s.trim()); return { en: m[1], id: (idp[i] || s).replace(/\s\d+$/, ''), v: +m[2], u: '%' }; });
}
function parts(t) {
  const q = t.split(/(?<=\?)\s+/).map(s => s.trim()).filter(Boolean);
  if (q.length >= 2 && q.length <= 4 && q.every(s => s.length >= 12 && s.length <= 160)) return q;
  const sc = t.split(/;\s+/).map(s => s.trim()).filter(Boolean);
  if (sc.length >= 2 && sc.length <= 4 && sc.every(s => s.length >= 10 && s.length <= 190)) return sc;
  const se = t.split(/(?<=[.!])\s+(?=[A-Z“"‘])/).map(s => s.trim()).filter(Boolean);
  if (se.length >= 2 && se.length <= 4 && se.every(s => s.length >= 20 && s.length <= 190) && t.length > 120) return se;
  return [t];
}
function splitPair(p) {
  const en = parts(p.en), id = parts(p.id || p.en);
  if (en.length > 1 && id.length === en.length) return en.map((e, i) => ({ en: e, id: id[i] }));
  return [{ en: p.en, id: p.id || p.en }];
}
const pair = p => ({ en: p.en, id: p.id || p.en });
/* a title's emphasised phrase when none is authored: the clause after the first break, if it is a phrase and not a sentence */
function autoEm(t) {
  const m = /^(.{12,}?)[,;:]\s+(.{8,}?)$/.exec(t.en);
  if (!m) return null;
  const en = m[2], id = (/^(.{12,}?)[,;:]\s+(.{8,}?)$/.exec(t.id || '') || [])[2];
  const w = en.split(/\s+/).length;
  if (w < 3 || w > 9 || /[.?!]/.test(en.slice(0, -1))) return null;
  return { en, id: id && id.split(/\s+/).length <= 12 ? id : undefined };
}

let decks = 0, slides = 0, layouts = {}, titled = 0, described = 0, labelled = 0, emd = 0;
function spec(sl, st, en, ctx) {
  st = st || {}; en = en || {};
  let pts = (sl.points || []).slice();
  let srcP = null;
  const si = pts.findIndex(isSource); if (si >= 0) { srcP = pair(pts[si]); pts.splice(si, 1); }
  const CIT = /\s\(([A-Z][\w’']+(?:[;,]\s*[A-Z][\w’']+){0,3})\)/;
  pts = pts.map(p => { const m = CIT.exec(p.en); if (!m) return p; if (!srcP) srcP = { en: m[1], id: m[1] }; return { en: p.en.replace(CIT, ''), id: (p.id || p.en).replace(CIT, '') }; });
  let out = { kind: 'body' };
  if (st.t) { out.t = st.t; titled++; }
  if (srcP) out.src = { en: srcP.en.replace(/[.]$/, ''), id: srcP.id.replace(/[.]$/, '') };
  if (st.src) out.src = st.src;
  let items = [], take = null, lead = null, cap = null, layout = null;
  const head = sl.h ? sl.h.en : '';
  const hs = sl.h && /→/.test(sl.h.en) ? { en: sl.h.en.split(/\s*→\s*/), id: (sl.h.id || sl.h.en).split(/\s*→\s*/) } : null;
  const bars = pts[0] ? barsOf(pts[0]) : null;
  if (bars) { layout = 'bars'; items = bars; take = pts[1] ? pair(pts[1]) : null; }
  else if (hs && hs.en.length >= 2 && hs.en.length <= 5 && hs.id.length === hs.en.length && pts.length) {
    const pe = pts[0].en.replace(/[.!]$/, '').split(/ · /), pi = (pts[0].id || pts[0].en).replace(/[.!]$/, '').split(/ · /);
    if (pe.length === hs.en.length && pi.length === pe.length) { layout = 'flow'; items = pe.map((e, i) => ({ l: { en: hs.en[i].trim(), id: hs.id[i].trim() }, en: e.trim(), id: pi[i].trim() })); take = pts[1] ? pair(pts[1]) : null; }
  }
  if (!layout) {
    let d = pts.length ? enumPair(pts[0]) : null;
    if (!d && pts.length === 2) { d = enumPair(pts[1]); if (d) lead = pair(pts[0]); }
    if (d) {
      items = d.items; cap = d.cap; take = lead ? null : pts[1] ? pair(pts[1]) : null;
      const longest = Math.max.apply(null, items.map(x => Math.max(x.en.length, x.id.length)));
      layout = d.kind === 'flow' ? 'flow' : longest <= 30 ? 'grid' : items.length <= 4 ? 'pillars' : 'grid';
    } else if (pts.length === 2) {
      const a = splitPair(pts[0]);
      if (a.length >= 2) { items = a; take = pair(pts[1]); layout = 'list'; }
      else { const b = splitPair(pts[1]); if (b.length >= 2 && b.length <= 4) { items = b; lead = a[0]; layout = 'list'; } else { items = [a[0]]; take = pair(pts[1]); layout = 'statement'; } }
    } else if (pts.length === 1) { items = splitPair(pts[0]); layout = items.length >= 2 ? 'list' : 'statement'; }
    else { pts.forEach(p => { items = items.concat(splitPair(p)); }); layout = 'list'; }
  }
  items = items.slice(0, 10);
  if (st.lay) layout = st.lay;
  if (st.items) items = st.items;
  if (st.lbl) items = items.map((x, i) => st.lbl[i] ? Object.assign({}, x, { l: st.lbl[i] }) : x);
  if (st.take) take = st.take;
  if (en.take) take = en.take;
  if (st.cap) cap = st.cap;
  if (en.lay) layout = en.lay;
  if (layout === 'compare' && items.length !== 2) layout = 'list';
  /* authored depth: labels (short headline over a sentence) and descriptions (one line under a short title) */
  if (en.l) items = items.map((x, i) => en.l[i] && !x.l ? Object.assign({}, x, { l: en.l[i] }) : x);
  if (en.d) items = items.map((x, i) => en.d[i] ? Object.assign({}, x, { d: en.d[i] }) : x);
  items.forEach(x => { if (x.l) labelled++; if (x.d) described++; });
  /* strip trailing full stops from short card titles */
  items = items.map(x => (!x.l && x.en.length <= 40) ? Object.assign({}, x, { en: x.en.replace(/[.]$/, ''), id: (x.id || x.en).replace(/[.]$/, '') }) : x);
  const icons = iconsFor(items.map(x => (x.l ? x.l.en + ' ' : '') + x.en + ' ' + (x.d ? x.d.en : '')), en.i);
  items = items.map((x, i) => Object.assign({ icon: icons[i] }, x));
  /* photos */
  const title = (out.t || sl.h || { en: '' }).en;
  if (layout === 'grid' || layout === 'pillars' || layout === 'compare') {
    const used = new Set();
    items = items.map((x, i) => Object.assign({}, x, { img: en.imgs && en.imgs[i] ? '../../assets/' + en.imgs[i] : pickImage((x.l ? x.l.en + ' ' : '') + x.en + ' ' + (x.d ? x.d.en : ''), title + ' ' + head, used, ctx.deckUsed, ctx.mod) }));
  } else {
    out.img = en.img ? '../../assets/' + en.img : pickImage(title + ' ' + head + ' ' + items.map(x => x.en).join(' '), '', new Set(), ctx.deckUsed, ctx.mod);
  }
  layouts[layout] = (layouts[layout] || 0) + 1;
  out.layout = layout; out.items = items;
  if (take) out.take = take; if (lead) out.lead = lead; if (cap) out.cap = cap;
  if (layout === 'statement') out.medal = icons[0];
  const em = en.em || (out.t ? autoEm(out.t) : null);
  if (em && em.en && (out.t || sl.h) && (out.t || sl.h).en.indexOf(em.en) >= 0) { out.em = { en: em.en, id: em.id && (out.t || sl.h).id && (out.t || sl.h).id.indexOf(em.id) >= 0 ? em.id : undefined }; if (!out.em.id) delete out.em.id; emd++; }
  return out;
}

C.modules.forEach((m, mi) => {
  m.lessons.forEach((l) => {
    const rf = l.readFirst; if (!rf || !rf.slides) return;
    const st = STORY[l.n] || { s: [] };
    const ctx = { deckUsed: {}, mod: mi + 1 };
    const specs = rf.slides.map((sl, k) => { slides++; return spec(sl, st.s[k], ENRICH[l.n + '#' + k], ctx); });
    const story = rf.slides.map((sl, k) => specs[k].t || sl.h);
    const takes = rf.slides.map((sl, k) => ({ h: sl.h, p: specs[k].take || specs[k].t || pair(sl.points[0]) }));
    const compose = {
      bg: '../../assets/' + BG[mi + 1],
      module: { en: 'Module ' + (mi + 1) + ' · ' + m.title.en, id: 'Modul ' + (mi + 1) + ' · ' + (m.title.id || m.title.en) },
      lesson: { n: l.n, title: { en: l.title.en, id: l.title.id || l.title.en } },
      story, takes, slides: specs
    };
    const anchorTitle = JSON.stringify(rf.title.en);
    const i0 = src.indexOf('"readFirst": {', src.indexOf('"n": ' + JSON.stringify(l.n)) >= 0 ? src.indexOf('"n": ' + JSON.stringify(l.n)) : 0);
    if (i0 < 0) throw new Error('no readFirst for ' + l.n);
    const seg = src.slice(i0, i0 + 6000);
    if (seg.indexOf(anchorTitle) < 0) throw new Error('anchor mismatch at ' + l.n);
    if (/^"readFirst": \{\s*"compose"/.test(seg)) throw new Error('already composed ' + l.n);
    const ins = '"readFirst": {\n      "compose": ' + JSON.stringify(compose, null, 1).replace(/\n/g, '\n      ') + ',';
    src = src.slice(0, i0) + ins + src.slice(i0 + '"readFirst": {'.length);
    decks++;
  });
});
fs.writeFileSync(P, src);
console.log('decks', decks, 'slides', slides, 'titled', titled, 'emphasised', emd, 'described', described, 'labelled', labelled, 'layouts', JSON.stringify(layouts));
