/**
 * COMMERCIAL MODEL — SINGLE SOURCE OF TRUTH FOR PRICING COPY
 * ----------------------------------------------------------
 * /pricing is canonical. Every other page that describes what is free, what
 * an edition membership includes, or what anything costs must render the
 * strings below rather than carry its own wording — that is how three pages
 * came to describe three different commercial models.
 *
 * How pages consume it:
 *   1. Add  <script src="/data/commercial.js" defer></script>
 *   2. Mark an element  data-commercial="free-answer"  (or another key) and
 *      keep the current text inside it as the static fallback.
 *   On load this file writes the canonical EN/ID text into every marked
 *   element (data-en / data-id and the visible text for the current language).
 *   scripts/check-commercial.js fails the build when a marked element's
 *   static text drifts from this file.
 *
 * Editions: student · fresh-graduate · early-professional · mature-professional
 * Beta rule: every edition and every pillar is Rp 0 during beta.
 */
(function () {
  'use strict';

  var EDITIONS = {
    'student':             { en: 'Student',             id: 'Mahasiswa' },
    'fresh-graduate':      { en: 'Fresh Graduate',      id: 'Fresh Graduate' },
    'early-professional':  { en: 'Early Professional',  id: 'Profesional Muda' },
    'mature-professional': { en: 'Mature Professional', id: 'Profesional Berpengalaman' }
  };

  var STRINGS = {
    /* The one answer to "Is Metanoia Labs free to use?" — identical on /help and the portal. */
    'free-answer': {
      en: 'Basecamp is free, always — the full Career Map assessment, your readiness score across five dimensions, the complete Gauntlet guide, your 90-day route outline, and community access. Everything beyond that is currently Rp 0 during beta. See the full breakdown, including what\'s live today and what isn\'t, on our <a href="/pricing">pricing page</a>.',
      id: 'Basecamp gratis, selamanya — asesmen Career Map lengkap, skor kesiapanmu di lima dimensi, panduan Gauntlet lengkap, kerangka rute 90 harimu, dan akses komunitas. Semua di luar itu saat ini Rp 0 selama beta. Lihat rincian lengkapnya, termasuk apa yang sudah tersedia hari ini dan apa yang belum, di <a href="/pricing">halaman harga</a> kami.'
    },
    'free-tier-name': { en: 'Basecamp', id: 'Basecamp' },
    'free-tier-line': { en: 'Basecamp (free)', id: 'Basecamp (gratis)' },
    'beta-rule': { en: 'Everything beyond Basecamp is Rp 0 during beta.', id: 'Semua di luar Basecamp Rp 0 selama beta.' },
    /* Product-page gate: what a member is looking at when a pillar asks them to sign in. */
    'gate-title':  { en: '{product} is part of every edition membership', id: '{product} termasuk dalam setiap keanggotaan edisi' },
    'gate-cta':    { en: 'Included in the {edition} membership — Rp 0 during beta. See pricing →', id: 'Termasuk dalam keanggotaan {edition} — Rp 0 selama beta. Lihat harga →' },
    /* Audience pages: the line under each product card. */
    'included':    { en: 'Included in the {edition} membership', id: 'Termasuk dalam keanggotaan {edition}' },
    'included-beta': { en: 'Included in the {edition} membership — Rp 0 during beta', id: 'Termasuk dalam keanggotaan {edition} — Rp 0 selama beta' }
  };

  function fill(tpl, ed, product) {
    var e = EDITIONS[ed] || { en: ed || 'edition', id: ed || 'edisi' };
    return {
      en: tpl.en.replace('{edition}', e.en).replace('{product}', product || ''),
      id: tpl.id.replace('{edition}', e.id).replace('{product}', product || '')
    };
  }

  function get(key, edition, product) {
    var s = STRINGS[key];
    if (!s) return null;
    return fill(s, edition, product);
  }

  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }

  function hydrate(root) {
    var nodes = (root || document).querySelectorAll('[data-commercial]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var v = get(el.getAttribute('data-commercial'), el.getAttribute('data-edition') || '', el.getAttribute('data-product') || '');
      if (!v) continue;
      el.setAttribute('data-en', v.en);
      el.setAttribute('data-id', v.id);
      el.innerHTML = lang() === 'id' ? v.id : v.en;
    }
  }

  window.MT_COMMERCIAL = { EDITIONS: EDITIONS, STRINGS: STRINGS, get: get, hydrate: hydrate };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { hydrate(); });
  else hydrate();
})();
