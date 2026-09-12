/**
 * METANOIA TOOL SHELL — builder for the product instruments' premium skin
 * ----------------------------------------------------------------------
 * Pairs with css/tool-shell.css. Instruments (map-audit.js, pack-gym.js,
 * route-plan.js) mount a shell and compose views from these primitives:
 *
 *   MT_SHELL.mount({ id, product, tool, scene, scenePos, side, tabs, onTab, onClose })
 *     → { root, body, tabsEl, setTabs(fn), open(), close(), isOpen() }
 *   MT_SHELL.stage(hero, main, opts)   two-column stage (hero aside + main)
 *   MT_SHELL.hero({...})               kicker, two-tone headline, sub, chip, tagline, art, quote
 *   MT_SHELL.art({...})                photograph with a drawn route and handwritten nodes
 *   MT_SHELL.item / scale / tri / tiles / tile / cta / btn / field / input / seg / drop /
 *   MT_SHELL.panel / side / stage-cards (funnel) / stats / bar / rowi / pill / check / note
 *   MT_SHELL.ico(name)                 inline SVG icons (stroke, 24 viewBox)
 *
 * Everything is presentational; the instruments own their data and text.
 */
(function () {
  'use strict';
  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function el(tag, cls, html) { var n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; }
  function txt(v) { return v == null ? '' : (typeof v === 'object' ? (v[lang()] || v.en || '') : String(v)); }
  function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  /* ─── icons ─── */
  var S = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">';
  var ICONS = {
    briefcase: S + '<rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18"/></svg>',
    chart: S + '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    people: S + '<circle cx="9" cy="8" r="3.2"/><path d="M2.5 19c.6-3.3 3.3-5 6.5-5s5.9 1.7 6.5 5"/><circle cx="17" cy="9" r="2.6"/><path d="M15.4 14.2c3 .2 5.3 1.7 6.1 4.8"/></svg>',
    diamond: S + '<path d="M7 3h10l4 6-9 12L3 9l4-6ZM3 9h18M9.5 9 12 21l2.5-12M7 3l2.5 6M17 3l-2.5 6"/></svg>',
    trophy: S + '<path d="M8 4h8v5a4 4 0 0 1-8 0V4ZM8 6H5a3 3 0 0 0 3 3M16 6h3a3 3 0 0 1-3 3M12 13v4M8.5 20h7M10 17h4"/></svg>',
    coins: S + '<ellipse cx="12" cy="6" rx="7" ry="2.6"/><path d="M5 6v4c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6M5 10v4c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-4M5 14v4c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-4"/></svg>',
    compass: S + '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 5.3-5.3 2.2 2.2-5.3 5.3-2.2Z"/></svg>',
    flag: S + '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg>',
    book: S + '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5ZM4 20.5A2.5 2.5 0 0 0 6.5 18H20"/></svg>',
    cube: S + '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3ZM4 7.5l8 4.5 8-4.5M12 12v9"/></svg>',
    target: S + '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>',
    bulb: S + '<path d="M9 18h6M10 21h4M8.5 14.5A5.5 5.5 0 1 1 15.5 14.5c-.7.6-1.5 1.5-1.5 2.5h-4c0-1-.8-1.9-1.5-2.5Z"/></svg>',
    lock: S + '<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8.5 10.5V7.5a3.5 3.5 0 0 1 7 0v3M12 15v2"/></svg>',
    upload: S + '<path d="M12 16V4M7 9l5-5 5 5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>',
    search: S + '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.3-4.3"/></svg>',
    doc: S + '<path d="M7 3h7l5 5v13H7V3ZM14 3v5h5M10 13h6M10 17h6"/></svg>',
    docSearch: S + '<path d="M7 3h7l5 5v5M7 3v18h6M14 3v5h5"/><circle cx="17" cy="17" r="3"/><path d="m19.3 19.3 2.2 2.2"/></svg>',
    sparkles: S + '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/><circle cx="12" cy="12" r="2.2"/></svg>',
    seed: S + '<path d="M12 21v-8M12 13c-4 0-7-3-7-7 4 0 7 3 7 7ZM12 13c4 0 7-3 7-7-4 0-7 3-7 7Z"/></svg>',
    scale: S + '<path d="M12 3v18M4 21h16M6 7h12M6 7l-3 6a3 3 0 0 0 6 0L6 7ZM18 7l-3 6a3 3 0 0 0 6 0l-3-6Z"/></svg>',
    shield: S + '<path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z"/><path d="m9.5 12 2 2 3.5-4"/></svg>',
    shieldTick: S + '<path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z"/></svg>',
    mountain: S + '<path d="m3 20 6-11 3.5 5.5L15 11l6 9H3ZM9 9l1.5-2.5L12 9"/></svg>',
    heart: S + '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/></svg>',
    star: S + '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3Z"/></svg>',
    calendar: S + '<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    check: S + '<path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
    checkCircle: S + '<circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.4 2.4 4.8-5.3"/></svg>',
    checkSq: S + '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="m8.5 12.5 2.4 2.4 4.8-5.3"/></svg>',
    clock: S + '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
    pen: S + '<path d="m4 20 4-1L19.5 7.5a2.1 2.1 0 0 0-3-3L5 16l-1 4ZM14.5 6.5l3 3"/></svg>',
    list: S + '<path d="M9 6h12M9 12h12M9 18h12M4 6h.01M4 12h.01M4 18h.01"/></svg>',
    layers: S + '<path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17l9 5 9-5"/></svg>',
    arrow: S + '<path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    arrowL: S + '<path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    x: S + '<path d="M6 6l12 12M18 6 6 18"/></svg>',
    info: S + '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
    handshake: S + '<path d="m3 9 4-3h4l3 2.5 3-2.5h4l-4 8-3 2.5-3 .5-4-4L3 9ZM11 6l-4 5 2.5 2.5L13 10"/></svg>',
    users: S + '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c.7-3.6 3.6-5.5 7-5.5s6.3 1.9 7 5.5"/></svg>',
    interview: S + '<path d="M4 5h11v8H8l-4 3V5ZM15 9h5v8h-3l-3 2.5V17"/></svg>',
    send: S + '<path d="m3 11 18-8-8 18-2-8-8-2Z"/></svg>',
    home: S + '<path d="m3 11 9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9Z"/></svg>',
    rocket: S + '<path d="M14 4c3 0 6 3 6 6-2 3-6 8-8 9l-3-3c1-2 6-6 5-12ZM9 16l-3 3M4 20l3-1M10 11l3 3"/></svg>',
    battery: S + '<rect x="3" y="7" width="15" height="10" rx="2"/><path d="M21 10v4M6 10v4M9.5 10v4M13 10v4"/></svg>',
    zap: S + '<path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z"/></svg>',
    map: S + '<path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6ZM9 4v14M15 6v14"/></svg>',
    laptop: S + '<rect x="4" y="5" width="16" height="10" rx="1.5"/><path d="M2 19h20M4 15h16"/></svg>',
    graduate: S + '<path d="m2 9 10-5 10 5-10 5L2 9ZM6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M22 9v6"/></svg>',
    refresh: S + '<path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z"/></svg>',
    stopwatch: S + '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 1.5M9 2h6M12 2v3"/></svg>',
    hourglass: S + '<path d="M6 3h12M6 21h12M8 3v3a4 4 0 0 0 2 3.4L12 11l2-1.6A4 4 0 0 0 16 6V3M8 21v-3a4 4 0 0 1 2-3.4L12 13l2 1.6a4 4 0 0 1 2 3.4v3"/></svg>',
    balance: S + '<path d="M12 3v18M5 21h14M3 9h18"/><path d="M6 9c0 3 6 3 6 0M12 9c0 3 6 3 6 0"/></svg>',
    tree: S + '<path d="M12 22v-6M8 16h8M12 3l5 6h-3l4 5H6l4-5H7l5-6Z"/></svg>',
    trendUp: S + '<path d="m3 17 6-6 4 4 8-8M15 7h6v6"/></svg>',
    globe: S + '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>',
    mic: S + '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/></svg>',
    money: S + '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M7 9h.01M17 15h.01"/></svg>',
    bell: S + '<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15L6 16ZM10 21h4"/></svg>',
    eye: S + '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
    puzzle: S + '<path d="M9 4h4a2 2 0 1 1 0 4h1a2 2 0 0 1 2 2v1a2 2 0 1 0 0 4v3a2 2 0 0 1-2 2h-3a2 2 0 1 0-4 0H5a2 2 0 0 1-2-2v-3a2 2 0 1 1 0-4V9a2 2 0 0 1 2-2h2a2 2 0 1 1 2-3Z"/></svg>',
    brain: S + '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h3V4H9ZM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h-3V4h3Z"/></svg>',
    cog: S + '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/></svg>',
    palette: S + '<path d="M12 3a9 9 0 0 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2-1.5h2a4 4 0 0 0 4-4c0-4.4-4-8-9-8Z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7.5" r="1"/><circle cx="14.5" cy="7.5" r="1"/></svg>',
    chevR: S + '<path d="m9 6 6 6-6 6"/></svg>',
    chevL: S + '<path d="m15 6-6 6 6 6"/></svg>',
    plus: S + '<path d="M12 5v14M5 12h14"/></svg>',
    filter: S + '<path d="M4 5h16l-6 8v6l-4-2v-4L4 5Z"/></svg>',
    link: S + '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
    edit: S + '<path d="M4 20h16M6 16l10-10 2 2L8 18l-3 1 1-3Z"/></svg>',
    smile: S + '<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5c1 1.3 2.2 2 3.5 2s2.5-.7 3.5-2M9 10h.01M15 10h.01"/></svg>'
  };
  function ico(name) { return ICONS[name] || ICONS.sparkles; }
  function svgEl(name, cls) { var w = el('span'); w.innerHTML = ico(name); var s = w.firstChild; if (cls) s.setAttribute('class', cls); return s; }

  /* ─── mount ─── */
  function mount(o) {
    var root = el('div', 'ts' + (o.side === 'left' ? ' ts-scene-left' : ''));
    root.id = o.id;
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-label', txt(o.tool));
    if (o.scene) { root.style.setProperty('--ts-scene', 'url("' + o.scene + '")'); if (o.scenePos) root.style.setProperty('--ts-scene-pos', o.scenePos); }
    root.appendChild(el('div', 'ts-scene'));
    root.appendChild(el('div', 'ts-glow'));
    var top = el('div', 'ts-top');
    var brand = el('div', 'ts-brand');
    function paintBrand() { brand.innerHTML = esc(txt(o.product)) + '<em>·</em><span class="tool">' + esc(txt(o.tool)) + '</span>'; }
    paintBrand();
    top.appendChild(brand);
    var tabsEl = el('div', 'ts-tabs'); tabsEl.setAttribute('role', 'tablist');
    top.appendChild(tabsEl);
    var x = el('button', 'ts-close', ico('x')); x.type = 'button';
    x.setAttribute('aria-label', 'Close');
    top.appendChild(x);
    var body = el('div', 'ts-body');
    root.appendChild(top); root.appendChild(body);
    document.body.appendChild(root);

    var api = {
      root: root, body: body, tabsEl: tabsEl,
      isOpen: function () { return root.classList.contains('open'); },
      open: function () { root.classList.add('open'); document.body.classList.add('lms-lock'); paintBrand(); },
      close: function () { root.classList.remove('open'); document.body.classList.remove('lms-lock'); },
      /* tabs: [{ key, label{en,id}, num?, done?, on?, disabled? }] */
      setTabs: function (tabs, onPick) {
        paintBrand();   /* the tool name follows the page language on every render */
        tabsEl.innerHTML = '';
        tabs.forEach(function (t) {
          var b = el('button', 'ts-tab' + (t.on ? ' on' : t.done ? ' done' : '')); b.type = 'button';
          b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', t.on ? 'true' : 'false');
          if (t.num != null) b.appendChild(el('i', null, t.done && !t.on ? '✓' : String(t.num)));
          b.appendChild(el('span', null, esc(txt(t.label))));
          if (t.disabled) b.disabled = true;
          b.addEventListener('click', function () { onPick(t.key); });
          tabsEl.appendChild(b);
        });
      },
      clear: function () { body.innerHTML = ''; body.scrollTop = 0; }
    };
    x.addEventListener('click', function () { o.onClose && o.onClose(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && api.isOpen()) o.onClose && o.onClose(); });
    return api;
  }

  /* ─── stage & hero ─── */
  function stage(hero, main, opts) {
    opts = opts || {};
    var s = el('div', 'ts-stage' + (opts.flip ? ' ts-flip' : '') + (!hero ? ' ts-wide' : ''));
    if (hero) s.appendChild(hero);
    s.appendChild(main);
    return s;
  }
  /* h: { kicker, title:[plain, gold] | 'string', sub, chip, tagline (array of lines), art, quote, sign (array), side:[nodes] } */
  function hero(h) {
    var a = el('aside', 'ts-hero');
    if (h.kicker) a.appendChild(el('div', 'ts-kick', esc(txt(h.kicker))));
    if (h.title) {
      var t = txt(h.title);
      var parts = Array.isArray(h.title) ? [txt(h.title[0]), txt(h.title[1])] : (h.title && h.title.en !== undefined && Array.isArray(h.title[lang()] || h.title.en) ? (h.title[lang()] || h.title.en) : [t, '']);
      a.appendChild(el('h1', 'ts-h', esc(parts[0]) + (parts[1] ? ' <span class="g">' + esc(parts[1]) + '</span>' : '')));
    }
    if (h.sub) a.appendChild(el('p', 'ts-sub', esc(txt(h.sub))));
    if (h.chip) { var c = el('div', 'ts-chip'); c.appendChild(svgEl(h.chipIcon || 'info')); c.appendChild(el('span', null, txt(h.chip))); a.appendChild(c); }
    if (h.hand) a.appendChild(el('div', 'ts-hand', esc(txt(h.hand)).replace(/\n/g, '<br>')));
    if (h.side) h.side.forEach(function (sc) { a.appendChild(side(sc)); });
    if (h.tagline) { a.appendChild(el('div', 'ts-rule')); a.appendChild(el('div', 'ts-tag', (Array.isArray(h.tagline) ? h.tagline : [h.tagline]).map(function (l) { return esc(txt(l)); }).join('<br>'))); }
    if (h.art) a.appendChild(art(h.art));
    if (h.quote) a.appendChild(el('blockquote', 'ts-quote', esc(txt(h.quote)) + '”'));
    if (h.sign) a.appendChild(el('div', 'ts-sign ts-tag', (Array.isArray(h.sign) ? h.sign : [h.sign]).map(function (l) { return esc(txt(l)); }).join('<br>')));
    return a;
  }
  /* art: { img, pos, nodes:[{x,y,label,big,caps,right,flag}], path:[[x,y],…] (percent), hand:{x,y,text} } */
  function art(o) {
    var w = el('div', 'ts-art');
    if (o.pos) w.style.setProperty('--ts-art-pos', o.pos);
    var img = document.createElement('img'); img.src = o.img; img.alt = ''; img.loading = 'lazy'; img.decoding = 'async';
    w.appendChild(img);
    var pts = o.path || (o.nodes || []).map(function (n) { return [n.x, n.y]; });
    if (pts.length > 1) {
      var d = 'M' + pts[0][0] + ' ' + pts[0][1];
      for (var i = 1; i < pts.length; i++) {
        var p0 = pts[i - 1], p1 = pts[i];
        var cx = (p0[0] + p1[0]) / 2, cy = p0[1] + (p1[1] - p0[1]) * 0.15;
        d += ' Q' + cx + ' ' + cy + ' ' + p1[0] + ' ' + p1[1];
      }
      var svg = '<svg class="ts-route" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="' + d + '"/><path class="dash" d="' + d + '"/></svg>';
      var s = el('span'); s.innerHTML = svg; w.appendChild(s.firstChild);
    }
    (o.nodes || []).forEach(function (n) {
      var nd = el('div', 'ts-node' + (n.big ? ' big' : '') + (n.caps ? ' caps' : '') + (n.right ? ' right' : ''));
      nd.style.left = n.x + '%'; nd.style.top = n.y + '%';
      if (n.flag) { nd.appendChild(svgEl('flag', 'ts-flag')); } else nd.appendChild(el('i'));
      if (n.label) nd.appendChild(el('span', null, esc(txt(n.label))));
      w.appendChild(nd);
    });
    if (o.hand) {
      var hd = el('div', 'ts-node'); hd.style.left = o.hand.x + '%'; hd.style.top = o.hand.y + '%';
      hd.innerHTML = '<span class="ts-hand">' + esc(txt(o.hand.text)).replace(/\n/g, '<br>') + '</span>';
      w.appendChild(hd);
    }
    return w;
  }
  /* side card: { icon, title, text | list:[…] } */
  function side(sc) {
    var d = el('div', 'ts-side');
    d.appendChild(svgEl(sc.icon || 'bulb'));
    var b = el('div');
    b.appendChild(el('b', null, esc(txt(sc.title))));
    if (sc.text) b.appendChild(el('p', null, esc(txt(sc.text))));
    if (sc.list) {
      var ul = el('ul');
      sc.list.forEach(function (li) { var l = el('li'); l.appendChild(svgEl('checkSq')); l.appendChild(el('span', null, esc(txt(li)))); ul.appendChild(l); });
      b.appendChild(ul);
    }
    d.appendChild(b);
    return d;
  }

  /* ─── content primitives ─── */
  function card(opts) {
    opts = opts || {};
    var c = el('div', 'ts-card' + (opts.cls ? ' ' + opts.cls : ''));
    if (opts.kick) c.appendChild(el('div', 'ts-kick', esc(txt(opts.kick))));
    if (opts.title) c.appendChild(el('h3', null, esc(txt(opts.title))));
    if (opts.text) c.appendChild(el('p', 'ts-p', txt(opts.text)));
    return c;
  }
  /* item: { num, icon, title, text, ctl (element), on, stack, noicon } */
  function item(o) {
    var it = el('div', 'ts-item' + (o.on ? ' on' : '') + (o.stack ? ' stack' : '') + (o.noicon ? ' noicon' : ''));
    it.appendChild(el('div', 'ts-num' + (o.done ? ' done' : ''), o.done ? '✓' : esc(String(o.num))));
    if (!o.noicon) { var ic = el('div', 'ts-ico'); ic.innerHTML = ico(o.icon || 'sparkles'); it.appendChild(ic); }
    var tx = el('div');
    if (o.title) tx.appendChild(el('h4', null, esc(txt(o.title))));
    if (o.text) tx.appendChild(el('p', null, txt(o.text)));
    if (o.text2) tx.appendChild(el('p', null, txt(o.text2)));
    it.appendChild(tx);
    if (o.ctl) { var ct = el('div', 'ts-ctl'); ct.appendChild(o.ctl); it.appendChild(ct); }
    return it;
  }
  /* scale: { n:5, value, onPick(k), lo, hi } */
  function scale(o) {
    var wrap = el('div', 'ts-scale-wrap');
    var sc = el('div', 'ts-scale');
    for (var k = 1; k <= (o.n || 5); k++) (function (k) {
      var b = el('button', o.value === k ? 'on' : '', String(k)); b.type = 'button';
      b.setAttribute('aria-pressed', o.value === k ? 'true' : 'false');
      b.addEventListener('click', function () { o.onPick(k); });
      sc.appendChild(b);
    })(k);
    wrap.appendChild(sc);
    if (o.lo || o.hi) wrap.appendChild(el('div', 'ts-scale-lbl', '<span>' + esc(txt(o.lo)) + '</span><span>' + esc(txt(o.hi)) + '</span>'));
    return wrap;
  }
  /* tri: { value, options:[[key,label,cls,icon]], onPick(key) } */
  function tri(o) {
    var t = el('div', 'ts-tri');
    o.options.forEach(function (op) {
      var b = el('button', o.value === op[0] ? op[2] : ''); b.type = 'button';
      if (op[3]) b.appendChild(svgEl(op[3]));
      b.appendChild(el('span', null, esc(txt(op[1]))));
      b.addEventListener('click', function () { o.onPick(op[0]); });
      t.appendChild(b);
    });
    return t;
  }
  /* tile: { icon, title, hint, on, ord, disabled, onPick } */
  function tile(o) {
    var b = el('button', 'ts-tile' + (o.on ? ' on' : '')); b.type = 'button';
    b.setAttribute('aria-pressed', o.on ? 'true' : 'false');
    b.appendChild(el('i', 'ord', o.ord != null ? String(o.ord) : ''));
    b.appendChild(svgEl(o.icon || 'sparkles'));
    var tx = el('div');
    tx.appendChild(el('b', null, esc(txt(o.title))));
    if (o.hint) tx.appendChild(el('span', null, esc(txt(o.hint))));
    b.appendChild(tx);
    if (o.disabled) b.disabled = true;
    b.addEventListener('click', function () { o.onPick && o.onPick(); });
    return b;
  }
  function btn(label, o) {
    o = o || {};
    var b = el('button', 'ts-btn' + (o.ghost ? ' ghost' : '') + (o.quiet ? ' quiet' : '') + (o.sm ? ' sm' : '')); b.type = 'button';
    if (o.iconL) b.appendChild(svgEl(o.iconL));
    b.appendChild(el('span', null, esc(txt(label))));
    if (o.icon) b.appendChild(svgEl(o.icon));
    if (o.disabled) b.disabled = true;
    if (o.onClick) b.addEventListener('click', o.onClick);
    return b;
  }
  /* cta: { icon, title, text, actions:[buttons], tag:[lines] } */
  function cta(o) {
    var c = el('div', 'ts-cta');
    var ic = el('div', 'ts-ico gold'); ic.innerHTML = ico(o.icon || 'chart'); c.appendChild(ic);
    var tx = el('div'); tx.appendChild(el('h4', null, esc(txt(o.title)))); if (o.text) tx.appendChild(el('p', null, txt(o.text))); c.appendChild(tx);
    var act = el('div', 'ts-cta-act');
    if (o.tag) act.appendChild(el('div', 'ts-tag', (Array.isArray(o.tag) ? o.tag : [o.tag]).map(function (l) { return esc(txt(l)); }).join('<br>')));
    (o.actions || []).forEach(function (b) { act.appendChild(b); });
    c.appendChild(act);
    return c;
  }
  /* field: { label, hint, input (element), icon } */
  function field(o) {
    var f = el('div', 'ts-field');
    if (o.label) { var l = el('label', null, esc(txt(o.label))); if (o.input && o.input.id) l.setAttribute('for', o.input.id); f.appendChild(l); }
    if (o.hint) f.appendChild(el('small', null, esc(txt(o.hint))));
    if (o.icon) { var w = el('div', 'ts-input'); w.appendChild(svgEl(o.icon)); w.appendChild(o.input); f.appendChild(w); }
    else f.appendChild(o.input);
    return f;
  }
  function input(type, o) {
    o = o || {};
    var i = document.createElement(type === 'textarea' ? 'textarea' : type === 'select' ? 'select' : 'input');
    if (type !== 'textarea' && type !== 'select') i.type = type;
    if (o.placeholder) i.placeholder = txt(o.placeholder);
    if (o.value != null) i.value = o.value;
    if (o.id) i.id = o.id;
    if (type === 'select' && o.options) o.options.forEach(function (op) { var x = document.createElement('option'); x.value = op[0]; x.textContent = txt(op[1]); i.appendChild(x); });
    if (o.value != null && type === 'select') i.value = o.value;
    return i;
  }
  /* seg: { options:[[key,label]], value, onPick } */
  function seg(o) {
    var s = el('div', 'ts-seg');
    o.options.forEach(function (op) {
      var b = el('button', o.value === op[0] ? 'on' : '', esc(txt(op[1]))); b.type = 'button';
      b.addEventListener('click', function () { o.onPick(op[0]); });
      s.appendChild(b);
    });
    return s;
  }
  /* drop: { accept, title, text, small, onFile(file) } */
  function drop(o) {
    var d = el('label', 'ts-drop');
    d.appendChild(svgEl('upload'));
    var tx = el('div'); tx.appendChild(el('b', null, esc(txt(o.title)))); if (o.text) tx.appendChild(el('span', null, esc(txt(o.text)))); if (o.small) tx.appendChild(el('small', null, esc(txt(o.small)))); d.appendChild(tx);
    var inp = document.createElement('input'); inp.type = 'file'; if (o.accept) inp.accept = o.accept; d.appendChild(inp);
    inp.addEventListener('change', function () { if (inp.files && inp.files[0]) o.onFile(inp.files[0]); });
    d.addEventListener('dragover', function (e) { e.preventDefault(); d.classList.add('over'); });
    d.addEventListener('dragleave', function () { d.classList.remove('over'); });
    d.addEventListener('drop', function (e) { e.preventDefault(); d.classList.remove('over'); var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]; if (f) o.onFile(f); });
    return d;
  }
  /* panel: { num, icon, title, sub } → { el, body } */
  function panel(o) {
    var p = el('div', 'ts-panel');
    var h = el('div', 'ts-panel-h');
    if (o.num != null) h.appendChild(el('div', 'ts-num gold', esc(String(o.num))));
    if (o.icon) h.appendChild(svgEl(o.icon, 'pi'));
    h.appendChild(el('h4', null, esc(txt(o.title))));
    if (o.sub) h.appendChild(el('small', null, esc(txt(o.sub))));
    p.appendChild(h);
    return p;
  }
  /* funnel stage card: { icon, title, n, pct, caption, cls } */
  function stageCard(o) {
    var s = el('div', 'ts-fstage' + (o.cls ? ' ' + o.cls : ''));
    var h = el('div', 'st-h'); var ic = el('span', 'ts-ico'); ic.innerHTML = ico(o.icon); h.appendChild(ic); h.appendChild(el('span', null, esc(txt(o.title)))); s.appendChild(h);
    s.appendChild(el('div', 'st-n', esc(String(o.n))));
    s.appendChild(bar(o.pct));
    if (o.caption) s.appendChild(el('div', 'st-c', esc(txt(o.caption))));
    return s;
  }
  function stats(list) {
    var g = el('div', 'ts-stats');
    list.forEach(function (x) { var s = el('div', 'ts-stat'); s.appendChild(el('b', null, esc(String(x[0])))); s.appendChild(el('span', null, esc(txt(x[1])))); g.appendChild(s); });
    return g;
  }
  function bar(pct, lg) { var b = el('div', 'ts-bar' + (lg ? ' lg' : '')); var i = el('i'); i.style.width = Math.max(0, Math.min(100, pct || 0)) + '%'; b.appendChild(i); return b; }
  function dim(label, v, max) {
    var d = el('div', 'ts-dim');
    d.appendChild(el('b', null, esc(txt(label)))); d.appendChild(el('span', 'v', esc(v)));
    d.appendChild(bar(max ? (parseFloat(v) / max * 100) : 0));
    return d;
  }
  /* rowi: { icon, title, sub, actions:[elements] } */
  function rowi(o) {
    var r = el('div', 'ts-rowi');
    var ic = el('div', 'ts-ico sm'); ic.innerHTML = ico(o.icon || 'doc'); r.appendChild(ic);
    var tx = el('div'); tx.appendChild(el('b', null, o.html ? o.title : esc(txt(o.title)))); if (o.sub) tx.appendChild(el('div', 'sm', o.subHtml ? o.sub : esc(txt(o.sub)))); r.appendChild(tx);
    var act = el('div', 'act'); (o.actions || []).forEach(function (a) { act.appendChild(a); }); r.appendChild(act);
    return r;
  }
  function xbtn(onClick, label) { var b = el('button', 'ts-x', ico('x')); b.type = 'button'; b.setAttribute('aria-label', label || 'Remove'); b.addEventListener('click', onClick); return b; }
  function pill(text, cls) { return el('span', 'ts-pill' + (cls ? ' ' + cls : ''), esc(txt(text))); }
  function check(ok, text) { var c = el('div', 'ts-check ' + (ok ? 'ok' : 'bad')); c.appendChild(svgEl(ok ? 'checkCircle' : 'x')); c.appendChild(el('span', null, text)); return c; }
  function note(html, icon) { var n = el('p', 'ts-note'); n.appendChild(svgEl(icon || 'bulb')); n.appendChild(el('span', null, html)); return n; }
  function hd(kick, title, count) {
    var h = el('div', 'ts-hd'); var l = el('div'); if (kick) l.appendChild(el('div', 'ts-kick', esc(txt(kick)))); l.appendChild(el('h3', null, esc(txt(title)))); h.appendChild(l);
    if (count) h.appendChild(el('div', 'ts-count', esc(txt(count)))); return h;
  }
  function priv(title, text) { var p = el('div', 'ts-priv'); p.appendChild(svgEl('lock')); var t = el('div'); t.appendChild(el('b', null, esc(txt(title)))); t.appendChild(el('span', null, esc(txt(text)))); p.appendChild(t); return p; }

  window.MT_SHELL = {
    mount: mount, stage: stage, hero: hero, art: art, side: side, card: card, item: item, scale: scale, tri: tri, tile: tile, btn: btn, cta: cta,
    field: field, input: input, seg: seg, drop: drop, panel: panel, stageCard: stageCard, stats: stats, bar: bar, dim: dim, rowi: rowi, xbtn: xbtn,
    pill: pill, check: check, note: note, hd: hd, priv: priv, ico: ico, svg: svgEl, el: el, txt: txt, esc: esc, lang: lang
  };
})();
