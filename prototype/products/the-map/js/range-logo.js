/**
 * THE RANGE — company logo resolver
 * ---------------------------------
 * Company marks are third-party trademarks, shown nominatively next to the
 * company they identify. We never store them; we resolve them at render time.
 *
 * Design rules this file exists to enforce:
 *  1. NO single point of failure. A logo source can be retired without notice
 *     (this replaced a hard dependency on one host that was shut down, which
 *     silently degraded every tile on the page). Sources are a chain: each is
 *     tried in order, the first that returns a usable image wins.
 *  2. Failure must be invisible. When no source resolves, the tile renders a
 *     designed monogram — a deliberate part of the visual system, not a
 *     broken-image state. Identical geometry, so layout never shifts.
 *  3. Locally hosted assets always win. Drop a file in assets/logos/ and add
 *     one line to OVERRIDES; no other code changes.
 *  4. One attempt per domain per session. The outcome is cached, so a dead
 *     source costs one request, not one per card per navigation.
 */
window.MT_LOGO = (function () {
  'use strict';

  /* Locally hosted marks, keyed by brand domain — the only source that cannot
     fail. scripts/fetch-logos.py vendors marks into assets/logos/ and writes
     data/range/logo-overrides.js, which populates this map when present. */
  var OVERRIDES = (window.MT_LOGO_OVERRIDES || {});

  /* Sources, in order of preference. Ordering rationale, learned the hard way:
       1–2. The company's OWN domain. First-party, high resolution
            (apple-touch-icon is typically 180px), and — decisively — not an
            endpoint that privacy extensions and content blockers filter.
            Third-party favicon APIs are a common blocklist entry, which is
            why a chain made only of them renders monograms for a large share
            of real users while looking perfectly healthy in a clean browser.
       3–4. Third-party APIs, as a safety net for sites that expose no icon at
            a predictable path. These may be blocked; by then we have already
            tried the sources that usually are not. */
  var SOURCES = [
    function (d) { return 'https://' + d + '/apple-touch-icon.png'; },
    function (d) { return 'https://' + d + '/apple-touch-icon-precomposed.png'; },
    /* /favicon.ico is worth trying but is handled oddly by some browsers,
       which route it through their own favicon machinery rather than the
       normal image path — hence it sits after the touch icons. */
    function (d) { return 'https://' + d + '/favicon.ico'; },
    function (d) { return 'https://icons.duckduckgo.com/ip3/' + d + '.ico'; },
    function (d) { return 'https://www.google.com/s2/favicons?domain=' + d + '&sz=128'; }
  ];

  /* Vendored marks are read at lookup time, not captured at load time, so the
     generated overrides file may load before or after this one. */
  function override(d) { return (window.MT_LOGO_OVERRIDES || OVERRIDES)[d] || OVERRIDES[d]; }

  /* Bumped whenever the chain changes: a stored "no mark here" verdict was
     reached with an older chain and must not outlive it. */
  var CKEY = 'mt-logo3:';
  function cacheGet(d) { try { return sessionStorage.getItem(CKEY + d); } catch (e) { return null; } }
  function cacheSet(d, v) { try { sessionStorage.setItem(CKEY + d, v); } catch (e) {} }

  /* Brand domain for a logo lookup. Company links point at the page a reader
     should open — often a careers or jobs subdomain — but logo services are
     keyed on the brand's root domain, so `careers.shopee.co.id` resolves to
     nothing. Strip the subdomain for lookup only; the link is untouched.
     Multi-part public suffixes (co.id, com.au, co.uk…) keep three labels. */
  var SUFFIX2 = /\.(co|com|net|org|gov|ac|edu|or|go)\.[a-z]{2}$/;
  function brandDomain(raw) {
    var d = String(raw || '').replace(/^https?:\/\//, '').replace(/\/.*$/, '').replace(/:\d+$/, '').toLowerCase();
    if (!d) return '';
    var keep = SUFFIX2.test(d) ? 3 : 2;
    var parts = d.split('.');
    return parts.length > keep ? parts.slice(parts.length - keep).join('.') : d;
  }

  function monogram(name) {
    var parts = String(name || '').replace(/\(.*?\)/g, ' ').replace(/[^A-Za-z0-9&\s]/g, ' ')
      .trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return '—';
    var a = parts[0][0];
    var b = parts[1] && /^[A-Za-z]/.test(parts[1]) ? parts[1][0] : (parts[0][1] || '');
    return (a + b).toUpperCase();
  }

  /* Deterministic tint so monogram tiles read as a family, not a repetition.
     Stays inside the product's gold band — hue 36–52, never a random colour. */
  function tint(name) {
    var h = 0, s = String(name || '');
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 997;
    return 36 + (h % 17);
  }

  /**
   * Markup for a logo tile. Renders the fallback state inline so the tile is
   * correct before any network call resolves; wire() then upgrades it.
   * @param {{name:string, domain?:string}} c company
   * @param {string} [size] '' | 'sm' | 'lg'
   */
  function tile(c, size) {
    var d = brandDomain(c && c.domain);
    var mg = monogram(c && c.name);
    return '<span class="logow' + (size ? ' ' + size : '') + ' x" data-logo="' + d +
      '" style="--lg-h:' + tint(c && c.name) + '">' +
      '<img alt="" width="128" height="128" decoding="async" referrerpolicy="no-referrer">' +
      '<span class="mg">' + mg + '</span></span>';
  }

  /**
   * Advance one tile through the source chain.
   *
   * Probing happens on a detached Image, never on the tile's own <img>. That
   * is deliberate: the tile starts in the fallback state, whose <img> is
   * display:none, and a not-rendered image never completes a deferred load —
   * so driving the chain through the visible element would stall forever and
   * silently leave every tile on the monogram. The detached probe also means
   * the visible element only ever receives a URL already known to be good, so
   * a failed source can never paint a broken-image glyph.
   */
  function load(el) {
    var d = el.getAttribute('data-logo');
    var img = el.querySelector('img');
    if (!d || !img || el.dataset.logoDone) return;
    el.dataset.logoDone = '1';

    var cached = cacheGet(d);
    if (cached === 'x') return;                       /* known to have no mark */

    /* Already resolved this session: assign the known-good URL straight to the
       visible element. No probe request — the browser cache serves it — and an
       error handler still returns the tile to its fallback if that changes. */
    if (cached != null && (override(d) || SOURCES[+cached])) {
      img.onerror = function () { el.classList.add('x'); };
      img.src = override(d) || SOURCES[+cached](d);
      el.classList.remove('x');
      return;
    }

    var chain = [], offset = 0, ov = override(d);
    if (ov) { chain.push(ov); offset = 1; }
    SOURCES.forEach(function (fn) { chain.push(fn(d)); });

    var i = 0;
    function next() {
      if (i >= chain.length) { cacheSet(d, 'x'); return; }
      var url = chain[i++];
      var probe = new Image();
      probe.referrerPolicy = 'no-referrer';
      probe.onerror = next;
      probe.onload = function () {
        /* Reject only what is genuinely unusable: 1×1 trackers and empty
           responses. A 16px favicon is not beautiful, but it is the company's
           real mark, and rejecting it (as an earlier 24px floor did) pushed
           perfectly good tiles back to the monogram. Small marks are rendered
           at their natural size rather than upscaled — see .logow img CSS. */
        if (probe.naturalWidth < 12 || probe.naturalHeight < 12) { next(); return; }
        img.src = url;
        el.classList.remove('x');
        cacheSet(d, ov && i === 1 ? '0' : String(Math.max(0, i - 1 - offset)));
      };
      probe.src = url;
    }
    next();
  }

  /* Resolve tiles as they approach the viewport — 675 companies must not mean
     675 requests on first paint. */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { load(en.target); io.unobserve(en.target); }
    });
  }, { rootMargin: '300px' }) : null;

  function wire(root) {
    var els = (root || document).querySelectorAll('.logow[data-logo]:not([data-logo-seen])');
    [].forEach.call(els, function (el) {
      el.setAttribute('data-logo-seen', '1');
      if (io) io.observe(el); else load(el);
    });
  }

  /* Self-wiring. Views re-render outside the router too — Explore repaints on
     every filter change and on "show more" — and a tile that is never wired
     silently keeps its monogram. Watching the document means every tile is
     picked up however it got there, so this cannot regress again. */
  if ('MutationObserver' in window) {
    new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++) {
        if (muts[i].addedNodes.length) { wire(document); return; }
      }
    }).observe(document.documentElement, { childList: true, subtree: true });
  }

  return { tile: tile, wire: wire, load: load, monogram: monogram,
    brandDomain: brandDomain, OVERRIDES: OVERRIDES, SOURCES: SOURCES };
})();
