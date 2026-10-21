'use strict';
/* Shared helpers for the Test Lab bank: a seeded RNG (the bank is identical on every build),
   Indonesian number formatting, option shuffling with a stable key, and the item constructor. */

function rng(seed) {
  let a = seed >>> 0;
  const r = function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  r.int = (lo, hi) => lo + Math.floor(r() * (hi - lo + 1));
  r.pick = (arr) => arr[Math.floor(r() * arr.length)];
  r.shuffle = (arr) => { const b = arr.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); const t = b[i]; b[i] = b[j]; b[j] = t; } return b; };
  return r;
}

/* Indonesian notation: thousands with a dot, decimals with a comma */
function fmt(n, dec) {
  if (dec == null) dec = Number.isInteger(n) ? 0 : 2;
  let s = Math.abs(n).toFixed(dec);
  let [i, f] = s.split('.');
  i = i.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  if (f) f = f.replace(/0+$/, '');
  return (n < 0 ? '-' : '') + i + (f ? ',' + f : '');
}
function pct(n, dec) { return fmt(n, dec == null ? 1 : dec) + '%'; }
function rp(n) { return 'Rp' + fmt(n, 0); }

/* distinct numeric options: the key plus the first distractors that differ from it and from each other */
function options(correct, distractors, n, r) {
  const seen = new Set([String(correct)]);
  const out = [correct];
  for (const d of distractors) { if (out.length >= n) break; const k = String(d); if (seen.has(k) || !isFinite(d)) continue; seen.add(k); out.push(d); }
  let bump = 1;
  while (out.length < n) { const d = correct + (out.length % 2 ? bump : -bump) * (Math.abs(correct) >= 100 ? 10 : 1); bump++; const k = String(d); if (!seen.has(k)) { seen.add(k); out.push(d); } }
  const order = r ? r.shuffle(out) : out;
  return { opts: order, ans: order.indexOf(correct) };
}

/* item constructor: fields the engine reads; the build adds id, bank, status and labels */
function item(o) {
  return {
    family: o.family, subtype: o.subtype, difficulty: o.d || 1, format: o.format || 'mcq5',
    set_id: o.set || null,
    stem: typeof o.stem === 'string' ? { id: o.stem } : o.stem,
    passage: o.passage || null,
    options: o.opts.map(x => (typeof x === 'object' && x !== null && !Array.isArray(x)) ? x : { id: String(x) }),
    answer: o.ans == null ? null : o.ans,
    weights: o.weights || null,
    explanation: o.x || {},
    skill_tags: o.skills || [], trap_tags: o.traps || [],
    time_target_s: o.t || 60,
    track_map: o.map || {},
    dimension: o.dim || null, role: o.role || null,
    assets: o.assets || null,
    generated: !!o.gen
  };
}

module.exports = { rng, fmt, pct, rp, options, item };
