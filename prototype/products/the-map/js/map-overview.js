/**
 * THE MAP — PRODUCT OVERVIEW
 * --------------------------
 * A five-slide, bilingual introduction to The Map, opened from the hero's
 * "Product overview" button. Built natively rather than as a document
 * viewer: each slide is a full-bleed scene from the product's own imagery
 * with the message set over it, and the deck ends on the same "Start
 * Module 1" action the hero offers — discovery flows straight into the
 * first lesson.
 *
 * Language: every string carries data-en / data-id, so the page's own
 * applyLang() sweep translates the deck the moment the visitor switches
 * language, whether the deck is open or not.
 *
 * Roadmap slide: generated at open time from the live lesson registry
 * (window.MT_LMS['the-map']), so module and lesson names can never drift
 * from what the syllabus actually teaches.
 *
 * Navigation: Back / Next buttons, dots, ← → keys, swipe, Esc to close.
 */
(function () {
  'use strict';

  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  /* bilingual span: markup lives in the attributes, the sweep fills the node */
  function bi(tag, cls, en, id) {
    var n = el(tag, cls);
    n.setAttribute('data-en', en);
    n.setAttribute('data-id', id);
    n.innerHTML = lang() === 'id' ? id : en;
    return n;
  }
  function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  /* ─── icons (inline, hand-drawn) ─── */
  var IC = {
    lamp: '<path d="M4 15h9.5c2.5 0 4.5-1.6 5-4l.5-2h-2.5l-1 1H8a4 4 0 0 0-4 4v1Z"/><path d="M13 10.5V8m-1.8 0h3.6M18.5 9 21 7"/>',
    flag: '<path d="M5 21V4m0 0h10l-2 3.5L15 11H5"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/><path d="m21 3-5.5 5.5"/>',
    puzzle: '<path d="M4 8h4a2 2 0 1 1 4 0h4v4a2 2 0 1 1 0 4v4h-4a2 2 0 1 1-4 0H4v-4a2 2 0 1 0 0-4V8Z"/>',
    people: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20a6 6 0 0 1 12 0M14 20a5 5 0 0 1 7-4.6"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/>',
    peak: '<path d="m3 20 6-10 4 6 2-3 6 7H3Z"/><path d="M13 4v4m-2-2h4"/>',
    lotus: '<path d="M12 20c-4 0-7-3-7-7 3 0 5 1.5 7 4 2-2.5 4-4 7-4 0 4-3 7-7 7Z"/><path d="M12 17c-1.5-3-1.5-7 0-11 1.5 4 1.5 8 0 11Z"/>',
    crown: '<path d="m4 8 4 4 4-6 4 6 4-4-2 11H6L4 8Z"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/><path d="M4 19a2 2 0 0 1 2-2h13"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6.5 6.5 0 0 0-4 11.6c.7.6 1 1.4 1 2.4h6c0-1 .3-1.8 1-2.4A6.5 6.5 0 0 0 12 3Z"/>',
    chat: '<path d="M4 5h16v11H9l-5 4V5Z"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8"/>',
    play: '<path d="M8 5v14l11-7L8 5Z"/>'
  };
  function ico(k, size) {
    return '<svg viewBox="0 0 24 24" width="' + (size || 22) + '" height="' + (size || 22) + '" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (IC[k] || IC.spark) + '</svg>';
  }

  var IMG = {
    title: '../../assets/bg/map-hero.jpg',
    story: '../../assets/bg/ch1-realization.jpg',
    mentor: '../../assets/mentoring-session.jpg',
    journey: '../../assets/bg/journey-bg.jpg',
    road: '../../assets/bg/journey-start.jpg'
  };

  /* ─── styles ─── */
  var css = '' +
  '#mapOverview{position:fixed;inset:0;z-index:1250;display:none;background:#050A12;color:#F0EDE8;overflow:hidden}' +
  '#mapOverview.open{display:flex;flex-direction:column}' +
  '#mapOverview *{box-sizing:border-box}' +
  '#mapOverview .mo-top{position:relative;z-index:3;display:flex;align-items:center;gap:14px;padding:12px 22px;' +
    'border-bottom:1px solid rgba(201,168,76,.22);background:rgba(5,10,18,.72);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}' +
  '#mapOverview .mo-kick{font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#C9A84C;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
  '#mapOverview .mo-count{margin-left:auto;font-size:12px;font-weight:700;letter-spacing:.14em;color:rgba(240,237,232,.62);font-variant-numeric:tabular-nums;white-space:nowrap}' +
  '#mapOverview .mo-x{width:38px;height:38px;flex:none;border-radius:999px;border:1px solid rgba(201,168,76,.35);background:none;color:#F0EDE8;font-size:15px;cursor:pointer}' +
  '#mapOverview .mo-x:hover,#mapOverview .mo-x:focus-visible{border-color:#C9A84C;outline:none}' +
  '#mapOverview .mo-stage{position:relative;flex:1;min-height:0;overflow:hidden}' +
  '#mapOverview .mo-slide{position:absolute;inset:0;display:none;overflow:hidden}' +
  '#mapOverview .mo-slide.on{display:block;animation:moIn .55s cubic-bezier(.22,1,.36,1)}' +
  '#mapOverview .mo-slide.back{animation-name:moInBack}' +
  '@keyframes moIn{from{opacity:0;transform:translateX(28px)}to{opacity:1;transform:none}}' +
  '@keyframes moInBack{from{opacity:0;transform:translateX(-28px)}to{opacity:1;transform:none}}' +
  '@media(prefers-reduced-motion:reduce){#mapOverview .mo-slide.on{animation:none}}' +
  '#mapOverview .mo-art{position:absolute;inset:0;background-size:cover;background-position:center;z-index:0}' +
  '#mapOverview .mo-art::after{content:"";position:absolute;inset:0;background:' +
    'linear-gradient(90deg,rgba(5,10,18,.94) 0%,rgba(5,10,18,.84) 34%,rgba(5,10,18,.38) 62%,rgba(5,10,18,.18) 100%),' +
    'linear-gradient(180deg,rgba(5,10,18,.22),rgba(5,10,18,0) 30%,rgba(5,10,18,.55) 100%)}' +
  '#mapOverview .mo-slide.heavy .mo-art::after{background:' +
    'linear-gradient(90deg,rgba(5,10,18,.96) 0%,rgba(5,10,18,.92) 44%,rgba(5,10,18,.6) 70%,rgba(5,10,18,.32) 100%),' +
    'linear-gradient(180deg,rgba(5,10,18,.2),rgba(5,10,18,.62) 100%)}' +
  '#mapOverview .mo-copy{position:relative;z-index:1;height:100%;overflow-y:auto;padding:clamp(28px,5vh,56px) clamp(22px,5vw,64px);max-width:min(100%,860px)}' +
  '#mapOverview .mo-slide.heavy .mo-copy{max-width:min(100%,980px)}' +
  '#mapOverview .mo-lamp{display:inline-flex;align-items:center;justify-content:center;width:52px;height:52px;border-radius:999px;border:1.5px solid rgba(201,168,76,.55);color:#F0D878;margin-bottom:18px;background:rgba(201,168,76,.08)}' +
  '#mapOverview .mo-eyebrow{font-size:11px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:#F0D878;margin:0 0 12px;text-shadow:0 1px 8px rgba(0,0,0,.5)}' +
  '#mapOverview h2{font-family:"Playfair Display",Georgia,serif;font-weight:700;font-size:clamp(28px,4.6vw,52px);line-height:1.08;letter-spacing:-.01em;margin:0 0 14px;text-shadow:0 2px 20px rgba(0,0,0,.55);text-wrap:balance;max-width:16ch}' +
  '#mapOverview h2 em{font-style:normal;color:#F0D878}' +
  '#mapOverview .mo-title h2{font-size:clamp(34px,6vw,68px);max-width:14ch}' +
  '#mapOverview .mo-lede{font-size:clamp(15px,1.7vw,18.5px);line-height:1.65;color:rgba(240,237,232,.86);margin:0 0 22px;max-width:52ch;text-shadow:0 1px 10px rgba(0,0,0,.5)}' +
  '#mapOverview .mo-lede b{color:#F0D878;font-weight:700}' +
  '#mapOverview .mo-by{font-size:13px;font-style:italic;color:rgba(240,237,232,.7);margin:0}' +
  '#mapOverview .mo-rule{width:64px;height:2px;background:linear-gradient(90deg,#C9A84C,#F0D878);margin:6px 0 22px;border-radius:2px}' +
  '#mapOverview .mo-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0 0 16px}' +
  '#mapOverview .mo-card{border:1px solid rgba(201,168,76,.32);border-radius:14px;padding:16px 16px 14px;background:rgba(8,14,26,.58);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}' +
  '#mapOverview .mo-card .ci{color:#F0D878;margin-bottom:8px}' +
  '#mapOverview .mo-card h3{font-family:"Playfair Display",Georgia,serif;font-size:15.5px;font-weight:700;line-height:1.25;margin:0 0 6px;color:#F5F2EA}' +
  '#mapOverview .mo-card h3 .kk{display:block;font-family:Inter,system-ui,sans-serif;font-size:10.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:rgba(240,237,232,.62);margin-bottom:3px}' +
  '#mapOverview .mo-card p{font-size:12.5px;line-height:1.6;color:rgba(240,237,232,.8);margin:0}' +
  '#mapOverview .mo-strip{display:flex;align-items:stretch;gap:14px;border:1px solid rgba(201,168,76,.32);border-radius:14px;padding:14px 18px;background:rgba(8,14,26,.58);flex-wrap:wrap}' +
  '#mapOverview .mo-quote{flex:0 0 220px;display:flex;gap:10px;align-items:flex-start;font-family:"Playfair Display",Georgia,serif;font-style:italic;font-size:17px;line-height:1.35;padding-right:14px;border-right:1px solid rgba(201,168,76,.28)}' +
  '#mapOverview .mo-quote b{display:block;font-style:italic;color:#F0D878}' +
  '#mapOverview .mo-quote .q{font-size:38px;line-height:.7;color:#C9A84C;font-style:normal;margin-top:6px}' +
  '#mapOverview .mo-pills{flex:1 1 320px;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;align-items:center}' +
  '#mapOverview .mo-pill{text-align:center;font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#F0D878;line-height:1.4}' +
  '#mapOverview .mo-pill .ci{display:block;color:#F0D878;margin:0 auto 6px}' +
  '#mapOverview .mo-bubbles{display:grid;gap:10px;margin:0 0 16px;max-width:520px}' +
  '#mapOverview .mo-bub{border:1px solid rgba(201,168,76,.4);border-radius:14px;padding:12px 15px;background:rgba(8,14,26,.6);backdrop-filter:blur(10px)}' +
  '#mapOverview .mo-bub.mentor{border-color:rgba(100,180,255,.45)}' +
  '#mapOverview .mo-bub b{display:block;font-size:10.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#F0D878;margin-bottom:4px}' +
  '#mapOverview .mo-bub p{font-family:"Playfair Display",Georgia,serif;font-size:15.5px;line-height:1.4;margin:0;color:#F5F2EA}' +
  '#mapOverview .mo-bub p em{font-style:normal;color:#F0D878}' +
  '#mapOverview .mo-key{display:grid;grid-template-columns:200px repeat(4,minmax(0,1fr));gap:14px;border:1px solid rgba(201,168,76,.32);border-radius:14px;padding:16px 18px;background:rgba(8,14,26,.6)}' +
  '#mapOverview .mo-key .km{border-right:1px solid rgba(201,168,76,.28);padding-right:14px}' +
  '#mapOverview .mo-key .km b{display:block;font-size:10.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#F0D878;margin-bottom:6px}' +
  '#mapOverview .mo-key .km p{font-family:"Playfair Display",Georgia,serif;font-size:19px;line-height:1.25;margin:0;color:#F5F2EA}' +
  '#mapOverview .mo-key .km p em{font-style:normal;color:#F0D878}' +
  '#mapOverview .mo-kp{text-align:left}' +
  '#mapOverview .mo-kp .ci{display:inline-flex;width:40px;height:40px;border-radius:999px;border:1.5px solid rgba(201,168,76,.55);align-items:center;justify-content:center;color:#F0D878;margin-bottom:8px}' +
  '#mapOverview .mo-kp h4{font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#F0D878;margin:0 0 5px}' +
  '#mapOverview .mo-kp p{font-size:12.5px;line-height:1.55;color:rgba(240,237,232,.8);margin:0}' +
  '#mapOverview .mo-steps{display:grid;gap:18px;max-width:460px;margin-top:8px}' +
  '#mapOverview .mo-step{display:grid;grid-template-columns:52px 1fr;gap:16px;align-items:start}' +
  '#mapOverview .mo-step .ci{width:52px;height:52px;border-radius:999px;border:1.5px solid rgba(201,168,76,.6);display:flex;align-items:center;justify-content:center;color:#F0D878;background:rgba(5,10,18,.5)}' +
  '#mapOverview .mo-step h4{font-size:14px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;margin:4px 0 4px;color:#F5F2EA;text-shadow:0 1px 8px rgba(0,0,0,.5)}' +
  '#mapOverview .mo-step p{font-size:14px;line-height:1.55;color:rgba(240,237,232,.85);margin:0;text-shadow:0 1px 8px rgba(0,0,0,.5)}' +
  '#mapOverview .mo-step p b{color:#F0D878;font-weight:700}' +
  '#mapOverview .mo-road{display:grid;grid-template-columns:minmax(220px,300px) 1fr;gap:26px;align-items:start}' +
  '#mapOverview .mo-road-q{font-family:"Playfair Display",Georgia,serif;font-style:italic;font-size:clamp(16px,1.7vw,19px);line-height:1.45;color:rgba(240,237,232,.9);margin:0;padding-left:16px;border-left:2px solid #C9A84C}' +
  '#mapOverview .mo-road-q b{font-style:italic;color:#F0D878}' +
  '#mapOverview .mo-mods{display:grid;gap:9px}' +
  '#mapOverview .mo-mod{display:grid;grid-template-columns:44px 1fr;gap:12px;align-items:start;border:1px solid rgba(201,168,76,.32);border-radius:12px;padding:10px 14px 10px 10px;background:rgba(8,14,26,.62)}' +
  '#mapOverview .mo-mod .n{width:44px;height:44px;border-radius:999px;background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);color:#10131B;font-weight:800;font-size:14px;display:flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums}' +
  '#mapOverview .mo-mod h4{font-size:14px;font-weight:700;margin:2px 0 4px;color:#F5F2EA;line-height:1.3}' +
  '#mapOverview .mo-mod p{font-size:12px;line-height:1.5;color:rgba(240,237,232,.72);margin:0}' +
  '#mapOverview .mo-mod p i{font-style:normal;color:#C9A84C;margin:0 5px}' +
  '#mapOverview .mo-foot{position:relative;z-index:3;display:flex;align-items:center;gap:14px;padding:12px 22px calc(12px + env(safe-area-inset-bottom,0px));' +
    'border-top:1px solid rgba(201,168,76,.22);background:rgba(5,10,18,.78);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}' +
  '#mapOverview .mo-btn{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:11px 20px;border-radius:999px;font-family:inherit;font-weight:800;font-size:13.5px;cursor:pointer;border:1px solid rgba(201,168,76,.45);background:none;color:#F0EDE8;transition:transform .15s,border-color .15s}' +
  '#mapOverview .mo-btn:hover{border-color:#C9A84C;transform:translateY(-1px)}' +
  '#mapOverview .mo-btn:disabled{opacity:.35;cursor:default;transform:none}' +
  '#mapOverview .mo-btn.gold{background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);color:#10131B;border-color:transparent;box-shadow:0 6px 22px rgba(201,168,76,.32)}' +
  '#mapOverview .mo-btn.gold.cta{animation:moBreath 3.2s ease-in-out infinite}' +
  '@keyframes moBreath{0%,100%{box-shadow:0 6px 22px rgba(201,168,76,.32)}50%{box-shadow:0 8px 34px rgba(201,168,76,.6)}}' +
  '@media(prefers-reduced-motion:reduce){#mapOverview .mo-btn.gold.cta{animation:none}}' +
  '#mapOverview .mo-btn:focus-visible{outline:2px solid #F0D878;outline-offset:3px}' +
  '#mapOverview .mo-dots{margin:0 auto;display:flex;gap:8px;align-items:center}' +
  '#mapOverview .mo-dot{width:9px;height:9px;border-radius:999px;border:0;padding:0;background:rgba(240,237,232,.28);cursor:pointer;transition:width .25s,background .25s}' +
  '#mapOverview .mo-dot.on{width:28px;background:linear-gradient(90deg,#C9A84C,#F0D878)}' +
  '#mapOverview .mo-dot:focus-visible{outline:2px solid #F0D878;outline-offset:3px}' +
  '#mapOverview .mo-hint{font-size:11px;color:rgba(240,237,232,.45);letter-spacing:.06em;white-space:nowrap}' +
  '@media(max-width:900px){' +
    '#mapOverview .mo-cards{grid-template-columns:1fr 1fr}' +
    '#mapOverview .mo-key{grid-template-columns:1fr 1fr}#mapOverview .mo-key .km{grid-column:1/-1;border-right:0;border-bottom:1px solid rgba(201,168,76,.28);padding:0 0 12px}' +
    '#mapOverview .mo-pills{grid-template-columns:1fr 1fr}' +
    '#mapOverview .mo-road{grid-template-columns:1fr}' +
  '}' +
  '@media(max-width:640px){' +
    '#mapOverview .mo-top{padding:10px 14px}' +
    '#mapOverview .mo-art{background-position:center 30%}' +
    '#mapOverview .mo-art::after,#mapOverview .mo-slide.heavy .mo-art::after{background:linear-gradient(180deg,rgba(5,10,18,.32) 0%,rgba(5,10,18,.78) 28%,rgba(5,10,18,.95) 48%,#050A12 100%)}' +
    '#mapOverview .mo-copy{padding:clamp(150px,34vh,220px) 18px 28px;max-width:100%}' +
    '#mapOverview .mo-lamp{margin-bottom:12px;width:44px;height:44px}' +
    '#mapOverview h2{max-width:none}' +
    '#mapOverview .mo-cards{grid-template-columns:1fr}' +
    '#mapOverview .mo-quote{flex:1 1 100%;border-right:0;border-bottom:1px solid rgba(201,168,76,.28);padding:0 0 12px}' +
    '#mapOverview .mo-key{grid-template-columns:1fr}' +
    '#mapOverview .mo-foot{padding:10px 14px calc(10px + env(safe-area-inset-bottom,0px));gap:10px}' +
    '#mapOverview .mo-btn{padding:11px 15px;font-size:13px}' +
    '#mapOverview .mo-hint{display:none}' +
  '}';

  /* ─── slides ─── */
  function slideTitle() {
    var s = el('section', 'mo-slide mo-title');
    s.appendChild(el('div', 'mo-art')).style.backgroundImage = 'url("' + IMG.title + '")';
    var c = el('div', 'mo-copy');
    c.appendChild(el('span', 'mo-lamp', ico('compass', 24)));
    c.appendChild(bi('p', 'mo-eyebrow', 'The Map · Product overview', 'The Map · Ringkasan produk'));
    c.appendChild(bi('h2', null,
      'Don’t just find the lamp — <em>you have to build it.</em>',
      'Jangan hanya menemukan lampunya — <em>kamu harus membangunnya.</em>'));
    c.appendChild(el('div', 'mo-rule'));
    c.appendChild(bi('p', 'mo-lede',
      'A structured self-discovery system that turns strengths, values and habits into a direction you chose on purpose — and the first pillar of the Metanoia climb.',
      'Sistem penemuan diri terstruktur yang mengubah kekuatan, nilai, dan kebiasaan menjadi arah yang kamu pilih dengan sengaja — pilar pertama pendakian Metanoia.'));
    c.appendChild(bi('p', 'mo-by', 'Created by the Metanoia Labs team', 'Dibuat oleh Tim Metanoia Labs'));
    s.appendChild(c);
    return s;
  }

  function card(icon, kick, title, body, kickId, titleId, bodyId) {
    var d = el('div', 'mo-card');
    d.appendChild(el('div', 'ci', ico(icon, 26)));
    var h = el('h3');
    h.appendChild(bi('span', 'kk', kick, kickId));
    h.appendChild(bi('span', null, title, titleId));
    d.appendChild(h);
    d.appendChild(bi('p', null, body, bodyId));
    return d;
  }

  function slideStory() {
    var s = el('section', 'mo-slide heavy');
    s.appendChild(el('div', 'mo-art')).style.backgroundImage = 'url("' + IMG.story + '")';
    var c = el('div', 'mo-copy');
    c.appendChild(bi('p', 'mo-eyebrow', 'The background story', 'Latar belakang'));
    c.appendChild(bi('h2', null, 'The story <em>behind The Map</em>', 'Kisah <em>di balik The Map</em>'));
    c.appendChild(bi('p', 'mo-lede',
      'Inspired by the old tale of the <b>three wishes</b>, this is about more than magic. It is about turning <b>hope and dreams</b> into <b>real, measurable impact.</b>',
      'Terinspirasi kisah lama tentang <b>tiga permintaan</b>, ini lebih dari sekadar keajaiban. Ini tentang mengubah <b>harapan dan mimpi</b> menjadi <b>dampak nyata yang terukur.</b>'));
    var g = el('div', 'mo-cards');
    g.appendChild(card('spark', 'Inspired by', 'Three wishes',
      'Just like the tale, we all carry wishes — big dreams that can change everything.',
      'Terinspirasi oleh', 'Tiga permintaan', 'Seperti dalam kisah itu, kita semua membawa harapan — mimpi besar yang bisa mengubah segalanya.'));
    g.appendChild(card('flag', 'Built to', 'Make it real',
      'We combine strategy, technology and craft to build tools that make those dreams real.',
      'Dibangun untuk', 'Mewujudkannya', 'Kami memadukan strategi, teknologi, dan kreativitas untuk membangun alat yang mewujudkan mimpi itu.'));
    g.appendChild(card('star', 'Created to', 'Create impact',
      'This is our wish: lasting impact — for people, for the businesses they build, and for the future.',
      'Diciptakan untuk', 'Memberikan dampak', 'Inilah harapan kami: dampak yang berkelanjutan — bagi manusia, bisnis yang mereka bangun, dan masa depan.'));
    c.appendChild(g);
    var strip = el('div', 'mo-strip');
    var q = el('div', 'mo-quote');
    q.appendChild(el('span', 'q', '“'));
    q.appendChild(bi('span', null, 'This is our story. <b>This is our wish.</b>', 'Ini adalah kisah kita. <b>Ini adalah harapan kita.</b>'));
    strip.appendChild(q);
    var pills = el('div', 'mo-pills');
    [['target', 'Turning insight into opportunity', 'Mengubah wawasan menjadi peluang'],
     ['puzzle', 'Building solutions that matter', 'Membangun solusi yang bermakna'],
     ['people', 'Empowering people and partners', 'Memberdayakan manusia dan mitra'],
     ['chart', 'Creating lasting impact together', 'Menciptakan dampak berkelanjutan bersama']].forEach(function (p) {
      var d = el('div', 'mo-pill');
      d.appendChild(el('span', 'ci', ico(p[0], 24)));
      d.appendChild(bi('span', null, p[1], p[2]));
      pills.appendChild(d);
    });
    strip.appendChild(pills);
    c.appendChild(strip);
    s.appendChild(c);
    return s;
  }

  function slideWithin() {
    var s = el('section', 'mo-slide heavy');
    s.appendChild(el('div', 'mo-art')).style.backgroundImage = 'url("' + IMG.mentor + '")';
    var c = el('div', 'mo-copy');
    c.appendChild(el('span', 'mo-lamp', ico('compass', 24)));
    c.appendChild(bi('h2', null,
      'True change begins <em>within ourselves,</em> not from the outside.',
      'Perubahan sejati <em>dimulai dari dalam diri,</em> bukan dari luar.'));
    var b = el('div', 'mo-bubbles');
    var b1 = el('div', 'mo-bub');
    b1.appendChild(bi('b', null, 'Learner', 'Pembelajar'));
    b1.appendChild(bi('p', null, 'How can I create a meaningful change in my life?', 'Bagaimana saya bisa menciptakan perubahan yang bermakna dalam hidup saya?'));
    var b2 = el('div', 'mo-bub mentor');
    b2.appendChild(bi('b', null, 'Mentor', 'Mentor'));
    b2.appendChild(bi('p', null,
      'Change is not about what happens around you, <em>but about who you choose to become within.</em>',
      'Perubahan bukan tentang apa yang terjadi di sekitarmu, <em>tetapi tentang siapa kamu memilih untuk menjadi dari dalam.</em>'));
    b.appendChild(b1); b.appendChild(b2);
    c.appendChild(b);
    var key = el('div', 'mo-key');
    var km = el('div', 'km');
    km.appendChild(bi('b', null, 'Key message', 'Pesan utama'));
    km.appendChild(bi('p', null, 'You hold the power to <em>change your life.</em>', 'Kamu memiliki kekuatan untuk <em>mengubah hidupmu.</em>'));
    key.appendChild(km);
    [['heart', 'Know yourself', 'Understand your values, strengths, and the potential within you.', 'Kenali diri sendiri', 'Pahami nilai, kekuatan, dan potensi yang ada dalam dirimu.'],
     ['peak', 'Dare to grow', 'Step out of your comfort zone and face challenges to become better.', 'Berani bertumbuh', 'Keluar dari zona nyaman dan hadapi tantangan untuk menjadi lebih baik.'],
     ['lotus', 'Transform from within', 'Mindset, beliefs, and habits are the keys to meaningful, lasting change.', 'Bertransformasi dari dalam', 'Pola pikir, keyakinan, dan kebiasaan adalah kunci perubahan yang bermakna dan berkelanjutan.'],
     ['crown', 'Become your best self', 'When you change within, your life and the world around you change too.', 'Jadi versi terbaik dirimu', 'Ketika kamu berubah dari dalam, hidupmu dan dunia di sekitarmu ikut berubah.']
    ].forEach(function (k) {
      var d = el('div', 'mo-kp');
      d.appendChild(el('span', 'ci', ico(k[0], 20)));
      d.appendChild(bi('h4', null, k[1], k[3]));
      d.appendChild(bi('p', null, k[2], k[4]));
      key.appendChild(d);
    });
    c.appendChild(key);
    s.appendChild(c);
    return s;
  }

  function slideJourney() {
    var s = el('section', 'mo-slide');
    var art = s.appendChild(el('div', 'mo-art'));
    art.style.backgroundImage = 'url("' + IMG.journey + '")';
    art.style.backgroundPosition = 'center 38%'; /* tall painting: keep the sunrise and the lit path in frame */
    var c = el('div', 'mo-copy');
    c.appendChild(bi('p', 'mo-eyebrow', 'The journey', 'Perjalanan'));
    c.appendChild(bi('h2', null,
      'The journey begins with <em>improving ourselves</em>',
      'Perjalanan dimulai dengan <em>memperbaiki diri sendiri</em>'));
    c.appendChild(el('div', 'mo-rule'));
    var st = el('div', 'mo-steps');
    [['flag', 'Small steps today', 'Every improvement you make today shapes a <b>better tomorrow.</b>', 'Langkah kecil hari ini', 'Setiap perbaikan kecil yang kamu lakukan hari ini membentuk <b>masa depan yang lebih baik.</b>'],
     ['compass', 'Embrace the journey', 'Growth is not a destination, it’s a <b>continuous adventure.</b>', 'Terima perjalanannya', 'Pertumbuhan bukanlah tujuan akhir, melainkan <b>petualangan yang berkelanjutan.</b>'],
     ['sun', 'Become your best self', 'Challenge yourself, learn, and evolve into the person you <b>aspire to be.</b>', 'Jadilah versi terbaik dirimu', 'Tantang diri sendiri, terus belajar, dan berkembang menjadi pribadi yang <b>kamu cita-citakan.</b>']
    ].forEach(function (k) {
      var d = el('div', 'mo-step');
      d.appendChild(el('span', 'ci', ico(k[0], 24)));
      var t = el('div');
      t.appendChild(bi('h4', null, k[1], k[3]));
      t.appendChild(bi('p', null, k[2], k[4]));
      d.appendChild(t);
      st.appendChild(d);
    });
    c.appendChild(st);
    s.appendChild(c);
    return s;
  }

  /* roadmap: read straight from the lesson registry, never from a copy */
  function slideRoadmap() {
    var s = el('section', 'mo-slide heavy');
    s.appendChild(el('div', 'mo-art')).style.backgroundImage = 'url("' + IMG.road + '")';
    var c = el('div', 'mo-copy');
    c.appendChild(bi('p', 'mo-eyebrow', 'Roadmap', 'Peta jalan'));
    c.appendChild(bi('h2', null, 'Our journey <em>to growth</em>', 'Perjalanan kita <em>menuju pertumbuhan</em>'));
    var road = el('div', 'mo-road');
    var left = el('div');
    left.appendChild(bi('p', 'mo-road-q',
      '“If you are able to be <b>better today</b> than you were yesterday, and to be <b>better tomorrow</b> than you are today, then <b>do so.</b>”',
      '“Jika kamu mampu menjadi <b>lebih baik hari ini</b> daripada kemarin, dan menjadi <b>lebih baik esok</b> daripada hari ini, maka <b>lakukanlah.</b>”'));
    road.appendChild(left);
    var mods = el('div', 'mo-mods');
    var REG = (window.MT_LMS || {})['the-map'];
    var list = REG && REG.modules ? REG.modules : [];
    list.forEach(function (m) {
      var d = el('div', 'mo-mod');
      d.appendChild(el('span', 'n', String(m.num).length < 2 ? '0' + m.num : String(m.num)));
      var t = el('div');
      /* registry titles are already HTML-safe (the player renders them with innerHTML) */
      t.appendChild(bi('h4', null, m.title.en, m.title.id));
      var pick = (m.lessons || []).slice(0, 3);
      t.appendChild(bi('p', null,
        pick.map(function (l) { return l.title.en; }).join('<i>·</i>'),
        pick.map(function (l) { return l.title.id; }).join('<i>·</i>')));
      d.appendChild(t);
      mods.appendChild(d);
    });
    if (!list.length) mods.appendChild(bi('p', 'mo-lede', 'Six modules, from self-awareness to career preparation.', 'Enam modul, dari kesadaran diri hingga persiapan karier.'));
    road.appendChild(mods);
    c.appendChild(road);
    s.appendChild(c);
    return s;
  }

  /* ─── shell ─── */
  var root = null, stage = null, dots = null, count = null, prevB = null, nextB = null, hint = null;
  var slides = [], i = 0, opener = null;

  function build() {
    if (root) return;
    var st = document.createElement('style');
    st.id = 'mapOverviewCss'; st.textContent = css;
    document.head.appendChild(st);

    root = el('div'); root.id = 'mapOverview';
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true');
    root.setAttribute('aria-label', 'The Map product overview');

    var top = el('div', 'mo-top');
    top.appendChild(bi('span', 'mo-kick', 'The Map · Product overview', 'The Map · Ringkasan produk'));
    count = el('span', 'mo-count');
    top.appendChild(count);
    var x = el('button', 'mo-x', '✕');
    x.setAttribute('aria-label', 'Close overview');
    x.addEventListener('click', close);
    top.appendChild(x);

    stage = el('div', 'mo-stage');
    slides = [slideTitle(), slideStory(), slideWithin(), slideJourney(), slideRoadmap()];
    slides.forEach(function (s) { stage.appendChild(s); });

    var foot = el('div', 'mo-foot');
    prevB = el('button', 'mo-btn');
    prevB.innerHTML = '<span aria-hidden="true">←</span> ';
    prevB.appendChild(bi('span', null, 'Back', 'Kembali'));
    prevB.addEventListener('click', function () { go(i - 1); });
    dots = el('div', 'mo-dots');
    dots.setAttribute('role', 'tablist');
    slides.forEach(function (_, k) {
      var d = el('button', 'mo-dot');
      d.setAttribute('role', 'tab');
      d.setAttribute('aria-label', 'Slide ' + (k + 1));
      d.addEventListener('click', function () { go(k); });
      dots.appendChild(d);
    });
    hint = bi('span', 'mo-hint', '← → keys · Esc to close', 'Tombol ← → · Esc untuk menutup');
    nextB = el('button', 'mo-btn gold');
    nextB.addEventListener('click', function () {
      if (i < slides.length - 1) go(i + 1);
      else startModule();
    });
    foot.appendChild(prevB); foot.appendChild(dots); foot.appendChild(hint); foot.appendChild(nextB);

    root.appendChild(top); root.appendChild(stage); root.appendChild(foot);
    document.body.appendChild(root);

    document.addEventListener('keydown', function (e) {
      if (!root.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') go(i + 1);
      else if (e.key === 'ArrowLeft') go(i - 1);
    });
    /* swipe */
    var sx = null, sy = null;
    stage.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      if (sx == null) return;
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 56 && Math.abs(dx) > Math.abs(dy) * 1.4) go(dx < 0 ? i + 1 : i - 1);
      sx = sy = null;
    }, { passive: true });
  }

  function labelNext() {
    var last = i === slides.length - 1;
    nextB.className = 'mo-btn gold' + (last ? ' cta' : '');
    nextB.innerHTML = '';
    nextB.appendChild(bi('span', null, last ? 'Start Module 1' : 'Next', last ? 'Mulai Modul 1' : 'Lanjut'));
    nextB.insertAdjacentHTML('beforeend', ' <span aria-hidden="true">→</span>');
  }

  function go(k, dir) {
    if (k < 0 || k > slides.length - 1) return;
    var back = k < i;
    i = k;
    slides.forEach(function (s, n) {
      s.classList.toggle('on', n === i);
      s.classList.toggle('back', n === i && back);
      if (n === i) { var cp = s.querySelector('.mo-copy'); if (cp) cp.scrollTop = 0; }
    });
    dots.querySelectorAll('.mo-dot').forEach(function (d, n) {
      d.classList.toggle('on', n === i);
      d.setAttribute('aria-selected', n === i ? 'true' : 'false');
    });
    count.textContent = (i + 1 < 10 ? '0' : '') + (i + 1) + ' / ' + (slides.length < 10 ? '0' : '') + slides.length;
    prevB.disabled = i === 0;
    labelNext();
  }

  function open(fromEl) {
    build();
    opener = fromEl || document.activeElement;
    root.classList.add('open');
    document.body.classList.add('lms-lock');
    go(0);
    if (typeof window.applyLang === 'function') { try { window.applyLang(); } catch (e) {} }
    var x = root.querySelector('.mo-x');
    if (x) x.focus();
  }
  function close() {
    if (!root) return;
    root.classList.remove('open');
    document.body.classList.remove('lms-lock');
    if (opener && opener.focus) { try { opener.focus(); } catch (e) {} }
  }
  /* the deck's last action is the hero's first action: same handler, same destination */
  function startModule() {
    close();
    var b = document.querySelector('.course-actions [data-goto-module="1"]') || document.querySelector('[data-goto-module="1"]');
    if (b) b.click();
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-map-overview]');
    if (!b) return;
    e.preventDefault();
    open(b);
  });

  window.MT_MAP_OVERVIEW = { open: open, close: close, go: go };
})();
