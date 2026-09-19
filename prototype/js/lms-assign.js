/**
 * METANOIA LMS — MODULE ASSESSMENTS (v3)
 * --------------------------------------
 * Each module's assessment is auto-graded multiple choice (knowledge checks
 * + scenario judgments with worked explanations), followed by a written
 * reflection where the module's learning objective demands application.
 * Learning-science choices, stated: immediate per-question feedback with a
 * pointer back to the lesson, mixed knowledge/scenario items, unlimited
 * retakes with reshuffled order, and honest scoring — MCQ points are
 * computed, reflections are never machine-graded.
 *
 * Data: data/assess/<slug>.js → window.MT_ASSESS['<slug>'] =
 *   { "1": { minutes?, blueprint?:[{lesson,h,sub}], mcq:[{q,opts[],correct,expl,type,lesson?}...],
 *            reflect?:{prompt,guide?,min} }, ... }
 * Host config: window.MT_ASSIGN_CFG = { slug, title:{en,id}, bg, bgPos }.
 * Storage: 'mt_assess:<slug>' = { "<mod>": {score,total,best,attempts,reflection,at} }.
 * Everything stays in this browser; nothing is uploaded.
 */
(function () {
  'use strict';
  var CFG = window.MT_ASSIGN_CFG;
  if (!CFG || !CFG.slug) return;
  var BANK = (window.MT_ASSESS || {})[CFG.slug];
  if (!BANK) return;
  var LS = 'mt_assess:' + CFG.slug;

  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function T(en, id) { return lang() === 'id' ? id : en; }
  function B(pair) { return pair ? (pair[lang()] || pair.en) : ''; }
  function store() { try { return JSON.parse(localStorage.getItem(LS) || '{}'); } catch (e) { return {}; } }
  function save(s) { try { localStorage.setItem(LS, JSON.stringify(s)); } catch (e) {} }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function shuffled(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t2 = a[i]; a[i] = a[j]; a[j] = t2; }
    return a;
  }
  function wordCount(t2) { return (String(t2).match(/\S+/g) || []).length; }
  /* lesson lookup from the product registry, when it is on the page */
  function lessonOf(n) {
    var reg = (window.MT_LMS || {})[CFG.slug];
    if (!reg || !n) return null;
    for (var i = 0; i < reg.modules.length; i++) {
      var ls = reg.modules[i].lessons;
      for (var k = 0; k < ls.length; k++) if (String(ls[k].n) === String(n)) return ls[k];
    }
    return null;
  }
  function lessonLabel(n) {
    var l = lessonOf(n);
    return l ? n + ' · ' + B(l.title) : (T('Lesson', 'Pelajaran') + ' ' + n);
  }
  function estMinutes(spec) {
    if (spec.minutes) return spec.minutes;
    return Math.max(4, Math.round(spec.mcq.length * 1.2 + (spec.reflect ? 4 : 0)));
  }
  var ICO = {
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5Z"/><path d="M4 19.5V4.5"/></svg>',
    pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1Z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    q: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M9 9a3 3 0 1 1 4.5 2.6c-.9.5-1.5 1.2-1.5 2.2"/><circle cx="12" cy="17.5" r=".8" fill="currentColor"/><circle cx="12" cy="12" r="9.5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };

  var css = '' +
  '#mtAssign{position:fixed;inset:0;z-index:1250;display:none;background:var(--bg-base,#050A12);overflow:hidden;color:var(--text,#fff)}' +
  '#mtAssign.open{display:flex;flex-direction:column}' +
  '#mtAssign .ra-bg{position:absolute;inset:-4%;z-index:0;pointer-events:none;' +
    'background:url("' + (CFG.bg || '../../assets/bg/journey-bg.jpg') + '") ' + (CFG.bgPos || 'center 30%') + '/cover no-repeat;opacity:.22;' +
    'animation:raPan 60s ease-in-out infinite alternate}' +
  '@keyframes raPan{from{transform:scale(1)}to{transform:scale(1.06)}}' +
  '#mtAssign .ra-veil{position:absolute;inset:0;z-index:0;pointer-events:none;background:' +
    'radial-gradient(60% 50% at 50% 0%,rgba(201,168,76,.10),transparent 70%),' +
    'linear-gradient(180deg,rgba(5,10,18,.55) 0%,rgba(5,10,18,.9) 40%,rgba(5,10,18,.97) 100%)}' +
  ':root[data-theme="light"] #mtAssign .ra-bg{opacity:.14}' +
  ':root[data-theme="light"] #mtAssign .ra-veil{background:radial-gradient(60% 50% at 50% 0%,rgba(154,123,36,.12),transparent 70%),' +
    'linear-gradient(180deg,rgba(238,241,246,.78),rgba(238,241,246,.97) 40%)}' +
  '#mtAssign .ra-top{position:relative;z-index:1;display:flex;align-items:center;gap:14px;padding:10px 22px;' +
    'border-bottom:1px solid var(--gold-border,rgba(180,140,60,.16));background:var(--glass-bg,rgba(8,14,26,.7));backdrop-filter:var(--glass-blur,blur(20px))}' +
  '#mtAssign .ra-top b{font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold,#C9A84C);white-space:nowrap}' +
  '#mtAssign .ra-top .ra-mod{font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--text-muted,rgba(255,255,255,.55));' +
    'border:1px solid var(--gold-border,rgba(180,140,60,.16));border-radius:999px;padding:4px 11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:46vw}' +
  '#mtAssign .ra-top .ra-prog{margin-left:auto;font-size:12px;font-weight:700;color:var(--text-muted,rgba(255,255,255,.55));font-variant-numeric:tabular-nums;white-space:nowrap}' +
  '#mtAssign .ra-close{width:36px;height:36px;border-radius:999px;border:1px solid var(--gold-border,rgba(180,140,60,.16));background:none;color:var(--text,#fff);cursor:pointer;font-size:15px;flex:none;transition:border-color .2s,transform .2s}' +
  '#mtAssign .ra-close:hover{border-color:var(--gold,#C9A84C);transform:rotate(90deg)}' +
  '#mtAssign .ra-body{position:relative;z-index:1;flex:1;overflow-y:auto;padding:28px 22px 80px}' +
  '#mtAssign .ra-in{max-width:820px;margin:0 auto;animation:mtaEnter .45s cubic-bezier(.22,1,.36,1)}' +
  '@keyframes mtaEnter{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}' +
  '@media(prefers-reduced-motion:reduce){#mtAssign .ra-in,#mtAssign .ra-bg{animation:none}}' +
  '#mtAssign .ra-card{border:1px solid var(--gold-border,rgba(180,140,60,.16));border-radius:18px;background:var(--glass-bg,rgba(8,14,26,.7));backdrop-filter:var(--glass-blur,blur(20px));' +
    'padding:24px 26px;margin-bottom:14px;box-shadow:0 18px 44px rgba(0,0,0,.28)}' +
  ':root[data-theme="light"] #mtAssign .ra-card{box-shadow:0 14px 34px rgba(27,36,52,.12)}' +
  '#mtAssign .ra-kick{display:inline-flex;align-items:center;gap:9px;font-size:10.5px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--gold-bright,#F0D878);margin-bottom:8px}' +
  '#mtAssign .ra-kick::before{content:"";width:22px;height:1px;background:linear-gradient(90deg,var(--gold,#C9A84C),transparent)}' +
  '#mtAssign h2{font-family:var(--serif,Georgia,serif);font-weight:600;font-size:clamp(1.35rem,2.4vw,1.75rem);line-height:1.25;margin:0 0 8px;color:var(--text,#fff)}' +
  '#mtAssign .ra-sub{font-size:13.5px;color:var(--text-sub,rgba(255,255,255,.82));line-height:1.7;margin:0 0 10px}' +
  '#mtAssign .ra-note{font-size:12px;color:var(--text-faint,rgba(255,255,255,.3));line-height:1.55;margin-top:12px}' +
  /* intro */
  '#mtAssign .ra-hero{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:26px;align-items:start}' +
  '#mtAssign .ra-facts{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0 18px}' +
  '#mtAssign .ra-fact{display:inline-flex;align-items:center;gap:7px;font-size:12px;font-weight:700;color:var(--text-sub,rgba(255,255,255,.82));' +
    'border:1px solid var(--gold-border,rgba(180,140,60,.16));border-radius:999px;padding:6px 13px;background:rgba(201,168,76,.05)}' +
  '#mtAssign .ra-fact svg{width:14px;height:14px;color:var(--gold,#C9A84C)}' +
  '#mtAssign .ra-cover{border:1px solid var(--gold-border,rgba(180,140,60,.16));border-radius:14px;padding:16px 18px;background:rgba(201,168,76,.04)}' +
  '#mtAssign .ra-cover h4{font-size:10.5px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--gold,#C9A84C);margin:0 0 10px}' +
  '#mtAssign .ra-cover ul{list-style:none;margin:0;padding:0;display:grid;gap:9px}' +
  '#mtAssign .ra-cover li{display:flex;gap:10px;align-items:flex-start;font-size:12.5px;line-height:1.5;color:var(--text-sub,rgba(255,255,255,.82))}' +
  '#mtAssign .ra-cover b.n{flex:none;font-size:10.5px;font-weight:800;letter-spacing:.06em;color:var(--gold,#C9A84C);border:1px solid rgba(201,168,76,.4);border-radius:6px;padding:2px 7px;margin-top:1px;font-variant-numeric:tabular-nums}' +
  '#mtAssign .ra-cover li span b{display:block;color:var(--text,#fff);font-weight:700;margin-bottom:1px}' +
  '#mtAssign .ra-best{display:flex;align-items:center;gap:14px;margin:6px 0 14px;padding:12px 14px;border-radius:12px;border:1px solid rgba(201,168,76,.3);background:rgba(201,168,76,.07)}' +
  '#mtAssign .ra-best b{font-family:var(--serif,Georgia,serif);font-size:1.6rem;color:var(--gold-bright,#F0D878);line-height:1}' +
  '#mtAssign .ra-best span{font-size:12px;color:var(--text-muted,rgba(255,255,255,.55));line-height:1.5}' +
  /* quiz */
  '#mtAssign .ra-steps{display:flex;gap:5px;margin:2px 0 10px;flex-wrap:wrap}' +
  '#mtAssign .ra-steps i{flex:1 1 10px;min-width:8px;height:4px;border-radius:999px;background:rgba(201,168,76,.16);transition:background .3s}' +
  '#mtAssign .ra-steps i.done{background:var(--gold,#C9A84C)}' +
  '#mtAssign .ra-steps i.cur{background:linear-gradient(90deg,var(--gold,#C9A84C),var(--gold-bright,#F0D878));box-shadow:0 0 0 2px rgba(201,168,76,.2)}' +
  '#mtAssign .ra-bar{height:7px;border-radius:999px;background:rgba(201,168,76,.14);overflow:hidden;margin:4px 0 16px}' +
  '#mtAssign .ra-bar i{display:block;height:100%;background:linear-gradient(90deg,#8B6914,#C9A84C,#F0D878);transition:width .3s}' +
  '#mtAssign .ra-tags{display:flex;gap:8px;flex-wrap:wrap;margin:4px 0 14px}' +
  '#mtAssign .ra-qtype{display:inline-flex;align-items:center;gap:6px;font-size:10.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;' +
    'border:1px solid rgba(201,168,76,.45);border-radius:999px;padding:4px 11px;color:var(--gold,#C9A84C);background:rgba(201,168,76,.08)}' +
  '#mtAssign .ra-lesson{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:700;letter-spacing:.02em;' +
    'border:1px solid var(--gold-border,rgba(180,140,60,.16));border-radius:999px;padding:4px 11px;color:var(--text-muted,rgba(255,255,255,.55))}' +
  '#mtAssign .ra-lesson svg{width:13px;height:13px}' +
  '#mtAssign .ra-q{font-family:var(--serif,Georgia,serif);font-size:clamp(1.05rem,1.8vw,1.28rem);color:var(--text,#fff);line-height:1.5;margin:0 0 16px;font-weight:600}' +
  '#mtAssign .ra-opt{display:flex;align-items:flex-start;gap:14px;width:100%;text-align:left;box-sizing:border-box;margin:9px 0;padding:13px 16px;border-radius:13px;' +
    'border:1px solid var(--gold-border,rgba(180,140,60,.16));background:var(--bg-mid,#0A1420);color:var(--text-sub,rgba(255,255,255,.82));font-family:inherit;font-size:13.5px;line-height:1.55;cursor:pointer;' +
    'transition:border-color .2s,transform .2s,background .2s}' +
  '#mtAssign .ra-opt:hover:not(:disabled){border-color:var(--gold-border-hover,rgba(201,168,76,.38));transform:translateX(3px)}' +
  '#mtAssign .ra-opt:focus-visible{outline:2px solid var(--gold,#C9A84C);outline-offset:2px}' +
  '#mtAssign .ra-opt .ra-letter{flex:none;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;' +
    'border:1px solid rgba(201,168,76,.4);color:var(--gold,#C9A84C);background:rgba(201,168,76,.06);margin-top:-2px}' +
  '#mtAssign .ra-opt:disabled{cursor:default;opacity:.72}' +
  '#mtAssign .ra-opt.correct{border-color:rgba(74,222,128,.65);background:rgba(74,222,128,.1);color:var(--text,#fff);opacity:1}' +
  '#mtAssign .ra-opt.correct .ra-letter{background:#4ADE80;border-color:#4ADE80;color:#052312}' +
  '#mtAssign .ra-opt.wrong{border-color:rgba(239,111,94,.6);background:rgba(239,111,94,.08);opacity:1}' +
  '#mtAssign .ra-opt.wrong .ra-letter{background:#EF6F5E;border-color:#EF6F5E;color:#2a0b07}' +
  '#mtAssign .ra-expl{display:flex;gap:12px;align-items:flex-start;font-size:13.5px;color:var(--text-sub,rgba(255,255,255,.82));line-height:1.7;border:1px solid rgba(74,222,128,.35);border-radius:13px;' +
    'padding:14px 16px;margin-top:12px;background:rgba(74,222,128,.06);animation:mtaEnter .35s cubic-bezier(.22,1,.36,1)}' +
  '#mtAssign .ra-expl.bad{border-color:rgba(239,111,94,.4);background:rgba(239,111,94,.06)}' +
  '#mtAssign .ra-expl .ra-mark{flex:none;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#4ADE80;color:#052312}' +
  '#mtAssign .ra-expl.bad .ra-mark{background:#EF6F5E;color:#2a0b07}' +
  '#mtAssign .ra-expl .ra-mark svg{width:14px;height:14px}' +
  '#mtAssign .ra-expl b{color:var(--text,#fff)}' +
  '#mtAssign .ra-revisit{display:inline-flex;align-items:center;gap:6px;margin-top:8px;background:none;border:0;padding:0;color:var(--gold,#C9A84C);font-family:inherit;font-size:12.5px;font-weight:700;cursor:pointer;text-decoration:underline;text-decoration-color:rgba(201,168,76,.4);text-underline-offset:4px}' +
  '#mtAssign .ra-revisit svg{width:13px;height:13px}' +
  '#mtAssign .ra-hint{font-size:11.5px;color:var(--text-faint,rgba(255,255,255,.3));margin-top:14px}' +
  '#mtAssign .ra-hint kbd{font-family:inherit;border:1px solid var(--gold-border,rgba(180,140,60,.16));border-radius:5px;padding:1px 6px;font-size:10.5px;color:var(--text-muted,rgba(255,255,255,.55))}' +
  '#mtAssign .ra-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px;align-items:center}' +
  '#mtAssign .ra-btn{display:inline-flex;align-items:center;gap:9px;padding:12px 22px;border-radius:999px;border:0;cursor:pointer;' +
    'font-family:inherit;font-weight:800;font-size:13.5px;background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);color:#10131B;box-shadow:0 4px 18px rgba(201,168,76,.3);transition:transform .2s,box-shadow .2s}' +
  '#mtAssign .ra-btn:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 8px 24px rgba(201,168,76,.42)}' +
  '#mtAssign .ra-btn svg{width:15px;height:15px}' +
  '#mtAssign .ra-btn.ghost{background:none;border:1px solid rgba(201,168,76,.45);color:var(--gold,#C9A84C);box-shadow:none}' +
  '#mtAssign .ra-btn:disabled{opacity:.45;cursor:not-allowed}' +
  /* reflection */
  '#mtAssign .ra-guide{margin:0 0 14px;padding:14px 16px;border:1px dashed rgba(201,168,76,.3);border-radius:12px;background:rgba(201,168,76,.04)}' +
  '#mtAssign .ra-guide ul{list-style:none;margin:0;padding:0;display:grid;gap:7px}' +
  '#mtAssign .ra-guide li{display:flex;gap:9px;align-items:flex-start;font-size:12.5px;line-height:1.5;color:var(--text-sub,rgba(255,255,255,.82))}' +
  '#mtAssign .ra-guide li::before{content:"";flex:none;width:7px;height:7px;border-radius:50%;background:var(--gold,#C9A84C);margin-top:6px}' +
  '#mtAssign .ra-guide-h{font-size:10.5px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--gold,#C9A84C);margin:0 0 8px}' +
  '#mtAssign textarea{width:100%;box-sizing:border-box;min-height:220px;background:var(--bg-mid,#0A1420);border:1px solid var(--gold-border,rgba(180,140,60,.16));' +
    'border-radius:14px;color:var(--text,#fff);font-family:inherit;font-size:14px;line-height:1.75;padding:15px 16px;resize:vertical;transition:border-color .2s,box-shadow .2s}' +
  '#mtAssign textarea:focus{outline:none;border-color:var(--gold,#C9A84C);box-shadow:0 0 0 3px rgba(201,168,76,.15)}' +
  '#mtAssign .ra-wrow{display:flex;align-items:center;gap:12px;margin-top:8px}' +
  '#mtAssign .ra-wbar{flex:1;height:5px;border-radius:999px;background:rgba(201,168,76,.14);overflow:hidden}' +
  '#mtAssign .ra-wbar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#8B6914,#C9A84C,#F0D878);transition:width .25s}' +
  '#mtAssign .ra-count{font-size:12px;color:var(--text-muted,rgba(255,255,255,.55));font-variant-numeric:tabular-nums;white-space:nowrap}' +
  '#mtAssign .ra-count.warn{color:#EF9A8A}' +
  '#mtAssign .ra-saved{font-size:12px;color:#4ADE80;opacity:0;transition:opacity .3s}' +
  '#mtAssign .ra-saved.on{opacity:1}' +
  /* result */
  '#mtAssign .ra-res{display:grid;grid-template-columns:150px minmax(0,1fr);gap:24px;align-items:center}' +
  '#mtAssign .ra-ring{position:relative;width:150px;height:150px}' +
  '#mtAssign .ra-ring svg{width:150px;height:150px;transform:rotate(-90deg)}' +
  '#mtAssign .ra-ring circle{fill:none;stroke-width:9;stroke-linecap:round}' +
  '#mtAssign .ra-ring .track{stroke:rgba(201,168,76,.16)}' +
  '#mtAssign .ra-ring .val{stroke:url(#raGrad);stroke-dasharray:408;stroke-dashoffset:408;transition:stroke-dashoffset 1s cubic-bezier(.22,1,.36,1)}' +
  '#mtAssign .ra-ring .pct{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}' +
  '#mtAssign .ra-ring .pct b{font-family:var(--serif,Georgia,serif);font-size:2.1rem;line-height:1;color:var(--gold-bright,#F0D878)}' +
  '#mtAssign .ra-ring .pct span{font-size:10.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--text-muted,rgba(255,255,255,.55));margin-top:4px}' +
  '#mtAssign .ra-score{display:flex;gap:22px;flex-wrap:wrap;margin:10px 0 12px}' +
  '#mtAssign .ra-score b{display:block;font-family:var(--serif,Georgia,serif);font-size:1.5rem;color:var(--text,#fff);line-height:1.1}' +
  '#mtAssign .ra-score span{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--text-muted,rgba(255,255,255,.55))}' +
  '#mtAssign .ra-byl{display:grid;gap:9px;margin-top:6px}' +
  '#mtAssign .ra-byl-row{display:grid;grid-template-columns:minmax(0,1fr) 120px 44px;gap:12px;align-items:center;font-size:12.5px;color:var(--text-sub,rgba(255,255,255,.82))}' +
  '#mtAssign .ra-byl-row b{font-size:10.5px;font-weight:800;color:var(--gold,#C9A84C);margin-right:8px}' +
  '#mtAssign .ra-byl-bar{height:6px;border-radius:999px;background:rgba(201,168,76,.14);overflow:hidden}' +
  '#mtAssign .ra-byl-bar i{display:block;height:100%;background:linear-gradient(90deg,#8B6914,#C9A84C,#F0D878)}' +
  '#mtAssign .ra-byl-row em{font-style:normal;font-variant-numeric:tabular-nums;color:var(--text-muted,rgba(255,255,255,.55));text-align:right}' +
  '#mtAssign .ra-rev{border-top:1px solid rgba(201,168,76,.14);padding:12px 0}' +
  '#mtAssign .ra-rev summary{cursor:pointer;list-style:none;display:flex;gap:10px;align-items:flex-start;font-size:13.5px;color:var(--text,#fff);font-weight:600;line-height:1.5}' +
  '#mtAssign .ra-rev summary::-webkit-details-marker{display:none}' +
  '#mtAssign .ra-rev summary .ra-dot{flex:none;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-top:1px}' +
  '#mtAssign .ra-rev summary .ra-dot svg{width:12px;height:12px}' +
  '#mtAssign .ra-rev.ok summary .ra-dot{background:rgba(74,222,128,.18);color:#4ADE80}' +
  '#mtAssign .ra-rev.bad summary .ra-dot{background:rgba(239,111,94,.18);color:#EF6F5E}' +
  '#mtAssign .ra-rev .va{font-size:12.5px;margin:6px 0 0 32px;line-height:1.6;color:var(--text-sub,rgba(255,255,255,.82))}' +
  '#mtAssign .ra-rev .ok{color:#4ADE80}' +
  '#mtAssign .ra-rev .bad{color:#EF6F5E}' +
  '#mtAssign .ra-rev .ra-revisit{margin-left:32px}' +
  ':root[data-theme="light"] #mtAssign .ra-opt.correct{background:rgba(22,163,74,.1)}' +
  ':root[data-theme="light"] #mtAssign .ra-rev .ok,:root[data-theme="light"] #mtAssign .ra-saved{color:#15803D}' +
  ':root[data-theme="light"] #mtAssign .ra-rev .bad{color:#C2410C}' +
  '@media(max-width:700px){#mtAssign .ra-hero,#mtAssign .ra-res{grid-template-columns:1fr}#mtAssign .ra-body{padding:18px 14px 90px}' +
    '#mtAssign .ra-card{padding:18px 16px;border-radius:15px}#mtAssign .ra-top{padding:10px 14px;gap:10px}#mtAssign .ra-top .ra-mod{display:none}#mtAssign .ra-kick .ra-kt{display:none}' +
    '#mtAssign .ra-ring{margin:0 auto}#mtAssign .ra-byl-row{grid-template-columns:minmax(0,1fr) 80px 40px}#mtAssign .ra-btn{width:100%;justify-content:center}}';

  var root = null, body = null, top = null, run = null, saveTimer = null, current = null;

  function build() {
    if (root) return;
    var st = document.createElement('style');
    st.id = 'mtAssignCss'; st.textContent = css;
    document.head.appendChild(st);
    root = el('div'); root.id = 'mtAssign';
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-label', 'Module assessment');
    root.appendChild(el('div', 'ra-bg'));
    root.appendChild(el('div', 'ra-veil'));
    top = el('div', 'ra-top');
    body = el('div', 'ra-body');
    root.appendChild(top); root.appendChild(body);
    document.body.appendChild(root);
    document.addEventListener('keydown', function (e) {
      if (!root.classList.contains('open')) return;
      if (e.key === 'Escape') { close(); return; }
      if (e.target && /^(TEXTAREA|INPUT)$/.test(e.target.tagName)) return;
      /* keyboard answering: 1–4 pick, Enter / → continue */
      if (run && run.qs && run.i < run.qs.length && body.querySelector('.ra-opt')) {
        var k = parseInt(e.key, 10);
        if (k >= 1 && k <= 4 && run.answers[run.i] === undefined) {
          var opts = body.querySelectorAll('.ra-opt');
          if (opts[k - 1]) { opts[k - 1].click(); e.preventDefault(); }
        } else if ((e.key === 'Enter' || e.key === 'ArrowRight') && run.answers[run.i] !== undefined) {
          var nb = body.querySelector('.ra-row .ra-btn'); if (nb) { nb.click(); e.preventDefault(); }
        }
      }
    });
  }
  function setTop(data, progress) {
    top.innerHTML = '';
    var ttl = CFG.title || { en: 'Assessment', id: 'Asesmen' };
    top.appendChild(el('b', null, T(ttl.en, ttl.id)));
    if (data && data.pill) top.appendChild(el('span', 'ra-mod', esc(data.pill)));
    top.appendChild(el('span', 'ra-prog', progress || ''));
    var x = el('button', 'ra-close', '✕');
    x.setAttribute('aria-label', T('Close', 'Tutup'));
    x.addEventListener('click', close);
    top.appendChild(x);
  }
  function card(w, kick, title, sub) {
    var c = el('div', 'ra-card');
    if (kick) c.appendChild(el('div', 'ra-kick', kick));
    if (title) c.appendChild(el('h2', null, title));
    if (sub) c.appendChild(el('p', 'ra-sub', sub));
    w.appendChild(c);
    return c;
  }
  function wrap() {
    body.innerHTML = '';
    body.scrollTop = 0;
    var w = el('div', 'ra-in');
    body.appendChild(w);
    return w;
  }
  function btn(label, cls, arrow) {
    var b = el('button', 'ra-btn' + (cls ? ' ' + cls : ''), esc(label) + (arrow ? ICO.arrow : ''));
    return b;
  }
  function revisitBtn(n) {
    if (!n || !(window.MT_LMS_PLAYER && window.MT_LMS_PLAYER.open)) return null;
    var b = el('button', 'ra-revisit', ICO.book + ' ' + esc(T('Revisit', 'Tinjau ulang') + ' ' + lessonLabel(n)));
    b.addEventListener('click', function () { close(); window.MT_LMS_PLAYER.open(String(n)); });
    return b;
  }

  /* ─── intro ─── */
  function renderIntro(data) {
    current = data;
    var spec = BANK[data.id] || { mcq: [] };
    var rec = store()[data.id];
    setTop(data, spec.mcq.length + ' ' + T('questions', 'soal'));
    var w = wrap();
    var c = el('div', 'ra-card');
    var hero = el('div', 'ra-hero');
    var left = el('div');
    left.appendChild(el('div', 'ra-kick', esc(data.pill)));
    left.appendChild(el('h2', null, esc(data.title)));
    var nK = spec.mcq.filter(function (q) { return q.type !== 'scen'; }).length, nS = spec.mcq.length - nK;
    left.appendChild(el('p', 'ra-sub', T(
      nK + ' knowledge checks and ' + nS + ' scenario judgments, graded instantly with a worked explanation and a pointer back to the lesson.' +
        (spec.reflect ? ' A short written reflection closes the assessment — it is yours, not machine-graded.' : '') +
        ' Retake any time: the reshuffled retake is where the learning consolidates.',
      nK + ' cek pengetahuan dan ' + nS + ' penilaian skenario, dinilai seketika dengan pembahasan dan penunjuk kembali ke pelajarannya.' +
        (spec.reflect ? ' Satu refleksi tertulis singkat menutup asesmen — itu milikmu, tidak dinilai mesin.' : '') +
        ' Ulangi kapan saja: pengulangan yang diacak ulang adalah tempat pembelajaran mengendap.')));
    var facts = el('div', 'ra-facts');
    [[ICO.q, spec.mcq.length + ' ' + T('questions', 'soal')],
     [ICO.clock, '≈ ' + estMinutes(spec) + ' ' + T('min', 'mnt')],
     spec.reflect ? [ICO.pen, T('Written reflection', 'Refleksi tertulis')] : null,
     [ICO.check, '100 ' + T('pts', 'poin')]].forEach(function (f) {
      if (f) facts.appendChild(el('span', 'ra-fact', f[0] + '<span>' + esc(f[1]) + '</span>'));
    });
    left.appendChild(facts);
    if (rec && rec.best != null) {
      var bst = el('div', 'ra-best');
      bst.appendChild(el('b', null, rec.best + '%'));
      bst.appendChild(el('span', null, esc(T('best score · ' + (rec.attempts || 1) + ' attempt' + ((rec.attempts || 1) > 1 ? 's' : '') + (rec.reflection ? ' · reflection saved' : ''),
                                              'skor terbaik · ' + (rec.attempts || 1) + ' percobaan' + (rec.reflection ? ' · refleksi tersimpan' : '')))));
      left.appendChild(bst);
    }
    var row = el('div', 'ra-row');
    var go = btn(rec ? T('Retake the assessment', 'Ulangi asesmen') : T('Start the assessment', 'Mulai asesmen'), null, true);
    go.addEventListener('click', function () { startQuiz(data); });
    row.appendChild(go);
    if (rec && rec.best != null) {
      var rv = btn(T('Review last attempt', 'Tinjau percobaan terakhir'), 'ghost');
      rv.addEventListener('click', function () { run = { data: data, qs: [], answers: [] }; renderResult(rec.score != null ? rec.score : rec.best); });
      row.appendChild(rv);
    }
    left.appendChild(row);
    left.appendChild(el('p', 'ra-note', T('Scores are computed on this device from your answers and stored only in this browser.',
      'Skor dihitung di perangkat ini dari jawabanmu dan tersimpan hanya di peramban ini.')));
    hero.appendChild(left);
    var right = el('div', 'ra-cover');
    right.appendChild(el('h4', null, T('What this assessment covers', 'Yang dicakup asesmen ini')));
    var ul = el('ul');
    var bp = spec.blueprint;
    if (!bp || !bp.length) {
      /* derive from the lessons the questions are tagged with, else from the registry module */
      var seen = {}, list = [];
      spec.mcq.forEach(function (q) { if (q.lesson && !seen[q.lesson]) { seen[q.lesson] = 1; list.push(q.lesson); } });
      if (!list.length) {
        var reg = (window.MT_LMS || {})[CFG.slug], mod = reg && reg.modules[parseInt(data.id, 10) - 1];
        if (mod) list = mod.lessons.map(function (l) { return l.n; });
      }
      bp = list.map(function (n) { var l = lessonOf(n); return { lesson: n, h: l ? l.title : { en: n, id: n }, sub: l && l.overview ? l.overview : null }; });
    }
    bp.forEach(function (it) {
      var li = el('li');
      li.appendChild(el('b', 'n', esc(it.lesson)));
      var sp = el('span');
      sp.appendChild(el('b', null, esc(B(it.h))));
      if (it.sub) sp.appendChild(document.createTextNode(String(B(it.sub)).replace(/<[^>]+>/g, '').slice(0, 160)));
      li.appendChild(sp);
      ul.appendChild(li);
    });
    right.appendChild(ul);
    hero.appendChild(right);
    c.appendChild(hero);
    w.appendChild(c);
  }

  /* ─── quiz ─── */
  function startQuiz(data) {
    var spec = BANK[data.id];
    run = { data: data, qs: shuffled(spec.mcq), i: 0, answers: [], order: {} };
    run.qs.forEach(function (q, i) { run.order[i] = shuffled(q.opts.map(function (_, k) { return k; })); });
    renderQ();
  }
  function renderQ() {
    var q = run.qs[run.i];
    setTop(run.data, T('Question', 'Soal') + ' ' + (run.i + 1) + ' / ' + run.qs.length);
    var w = wrap();
    var c = el('div', 'ra-card');
    var steps = el('div', 'ra-steps');
    run.qs.forEach(function (_, k) {
      var i = el('i');
      if (k < run.i || run.answers[k] !== undefined) i.className = 'done';
      if (k === run.i) i.className = 'cur';
      steps.appendChild(i);
    });
    c.appendChild(steps);
    c.appendChild(el('div', 'ra-kick', '<span class="ra-kt">' + esc(run.data.title) + ' · </span>' + T('Question', 'Soal') + ' ' + (run.i + 1) + ' ' + T('of', 'dari') + ' ' + run.qs.length));
    var tags = el('div', 'ra-tags');
    tags.appendChild(el('span', 'ra-qtype', q.type === 'scen' ? T('Scenario', 'Skenario') : T('Knowledge check', 'Cek pengetahuan')));
    if (q.lesson) tags.appendChild(el('span', 'ra-lesson', ICO.book + esc(lessonLabel(q.lesson))));
    c.appendChild(tags);
    c.appendChild(el('p', 'ra-q', esc(B(q.q))));
    var answered = run.answers[run.i] !== undefined;
    var letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    run.order[run.i].forEach(function (orig, k) {
      var b = el('button', 'ra-opt', '<span class="ra-letter">' + letters[k] + '</span><span>' + esc(B(q.opts[orig])) + '</span>');
      b.setAttribute('aria-label', letters[k] + '. ' + B(q.opts[orig]));
      if (answered) {
        b.disabled = true;
        if (orig === q.correct) b.classList.add('correct');
        else if (orig === run.answers[run.i]) b.classList.add('wrong');
      }
      b.addEventListener('click', function () {
        if (run.answers[run.i] !== undefined) return;
        run.answers[run.i] = orig;
        renderQ();
        var ex = body.querySelector('.ra-expl'); if (ex) ex.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      });
      c.appendChild(b);
    });
    if (answered) {
      var okk = run.answers[run.i] === q.correct;
      var ex = el('div', 'ra-expl' + (okk ? '' : ' bad'));
      ex.appendChild(el('span', 'ra-mark', okk ? ICO.check : ICO.x));
      var tx = el('div');
      tx.innerHTML = '<b>' + (okk ? T('Correct.', 'Benar.') : T('Not quite.', 'Belum tepat.')) + '</b> ' + esc(B(q.expl));
      var rb = revisitBtn(q.lesson); if (rb) { tx.appendChild(el('br')); tx.appendChild(rb); }
      ex.appendChild(tx);
      c.appendChild(ex);
      var row = el('div', 'ra-row');
      var next = btn(run.i < run.qs.length - 1 ? T('Next question', 'Soal berikutnya') : (BANK[run.data.id].reflect ? T('Finish and reflect', 'Selesai dan refleksi') : T('See my result', 'Lihat hasilku')), null, true);
      next.addEventListener('click', function () {
        if (run.i < run.qs.length - 1) { run.i++; renderQ(); }
        else finishQuiz();
      });
      row.appendChild(next);
      c.appendChild(row);
      c.appendChild(el('p', 'ra-hint', T('<kbd>Enter</kbd> continues', '<kbd>Enter</kbd> untuk lanjut')));
    } else {
      c.appendChild(el('p', 'ra-hint', T('Press <kbd>1</kbd>–<kbd>' + Math.min(4, q.opts.length) + '</kbd> to answer', 'Tekan <kbd>1</kbd>–<kbd>' + Math.min(4, q.opts.length) + '</kbd> untuk menjawab')));
    }
    w.appendChild(c);
  }
  function finishQuiz() {
    var score = 0;
    run.qs.forEach(function (q, i) { if (run.answers[i] === q.correct) score++; });
    var pct = Math.round(score / run.qs.length * 100);
    var s = store();
    var rec = s[run.data.id] || { attempts: 0 };
    rec.attempts = (rec.attempts || 0) + 1;
    rec.score = pct;
    rec.total = run.qs.length;
    rec.best = Math.max(rec.best || 0, pct);
    rec.at = Date.now();
    s[run.data.id] = rec;
    save(s);
    var spec = BANK[run.data.id];
    if (spec.reflect && !(rec.reflection || '').trim()) renderReflect();
    else renderResult(pct);
  }

  /* ─── reflection ─── */
  function renderReflect() {
    var spec = BANK[run.data.id];
    var s = store();
    var rec = s[run.data.id] || {};
    setTop(run.data, T('Reflection', 'Refleksi'));
    var w = wrap();
    var c = card(w, T('Reflection — the part that is yours', 'Refleksi — bagian yang menjadi milikmu'), esc(run.data.title), null);
    c.appendChild(el('p', 'ra-sub', esc(B(spec.reflect.prompt))));
    if (spec.reflect.guide && spec.reflect.guide.length) {
      var g = el('div', 'ra-guide');
      g.appendChild(el('div', 'ra-guide-h', T('What a strong entry includes', 'Yang dimuat catatan yang kuat')));
      var gl = el('ul');
      spec.reflect.guide.forEach(function (x) { gl.appendChild(el('li', null, esc(B(x)))); });
      g.appendChild(gl);
      c.appendChild(g);
    }
    var ta = document.createElement('textarea');
    ta.value = rec.reflection || '';
    ta.placeholder = T('Write in your own words — this is application, not examination. Autosaves as you type.',
                       'Tulis dengan kata-katamu sendiri — ini penerapan, bukan ujian. Tersimpan otomatis saat mengetik.');
    c.appendChild(ta);
    var min = spec.reflect.min || 25;
    var wrow = el('div', 'ra-wrow');
    var wbar = el('div', 'ra-wbar'); var wfill = el('i'); wbar.appendChild(wfill);
    var count = el('div', 'ra-count');
    var saved = el('span', 'ra-saved', '✓ ' + T('Saved', 'Tersimpan'));
    wrow.appendChild(wbar); wrow.appendChild(count); wrow.appendChild(saved);
    c.appendChild(wrow);
    function upd() {
      var n = wordCount(ta.value);
      wfill.style.width = Math.min(100, n / min * 100) + '%';
      count.textContent = n + ' / ' + min + ' ' + T('words', 'kata');
      count.classList.toggle('warn', false);
    }
    upd();
    ta.addEventListener('input', function () {
      upd();
      if (saveTimer) clearTimeout(saveTimer);
      saveTimer = setTimeout(function () {
        var s2 = store();
        s2[run.data.id] = s2[run.data.id] || {};
        s2[run.data.id].reflection = ta.value;
        save(s2);
        saved.classList.add('on');
        setTimeout(function () { saved.classList.remove('on'); }, 1200);
      }, 500);
    });
    var row = el('div', 'ra-row');
    var done = btn(T('Complete the assessment', 'Selesaikan asesmen'), null, true);
    done.addEventListener('click', function () {
      var n = wordCount(ta.value);
      if (n < min) {
        count.textContent = n + ' / ' + min + ' ' + T('words — the reflection needs at least ' + min + ' words of real thought.', 'kata — refleksi butuh minimal ' + min + ' kata pemikiran sungguhan.');
        count.classList.add('warn'); ta.focus(); return;
      }
      var s2 = store();
      s2[run.data.id] = s2[run.data.id] || {};
      s2[run.data.id].reflection = ta.value;
      save(s2);
      renderResult(store()[run.data.id].score);
    });
    row.appendChild(done);
    c.appendChild(row);
    c.appendChild(el('p', 'ra-note', T('No grader reads this in the prototype — the writing itself is the exercise, and it stays in this browser.',
      'Tak ada penilai yang membacanya di prototipe — menulisnya itulah latihannya, dan ia tinggal di peramban ini.')));
    setTimeout(function () { ta.focus(); }, 60);
  }

  /* ─── result ─── */
  function renderResult(pct) {
    var spec = BANK[run.data.id];
    var rec = store()[run.data.id] || {};
    pct = pct == null ? (rec.best || 0) : pct;
    setTop(run.data, T('Result', 'Hasil'));
    var w = wrap();
    var c = el('div', 'ra-card');
    var res = el('div', 'ra-res');
    var ring = el('div', 'ra-ring');
    ring.innerHTML = '<svg viewBox="0 0 150 150" aria-hidden="true"><defs><linearGradient id="raGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8B6914"/><stop offset=".5" stop-color="#C9A84C"/><stop offset="1" stop-color="#F0D878"/></linearGradient></defs>' +
      '<circle class="track" cx="75" cy="75" r="65"/><circle class="val" cx="75" cy="75" r="65"/></svg>' +
      '<div class="pct"><b>' + pct + '%</b><span>' + T('this attempt', 'percobaan ini') + '</span></div>';
    res.appendChild(ring);
    var right = el('div');
    right.appendChild(el('div', 'ra-kick', T('Assessment complete', 'Asesmen selesai')));
    right.appendChild(el('h2', null, esc(run.data.title)));
    var sc = el('div', 'ra-score');
    [[(rec.best != null ? rec.best : pct) + '%', T('best score', 'skor terbaik')],
     [String(rec.attempts || 1), T('attempts', 'percobaan')],
     [Math.round((rec.best != null ? rec.best : pct)), T('of 100 pts', 'dari 100 poin')]].forEach(function (x2) {
      var sp = el('span');
      sp.appendChild(el('b', null, x2[0]));
      sp.appendChild(el('span', null, x2[1]));
      sc.appendChild(sp);
    });
    right.appendChild(sc);
    right.appendChild(el('p', 'ra-sub', pct >= 80
      ? T('Strong. The module’s core ideas are holding — the review below shows the full reasoning per question.',
          'Kuat. Gagasan inti modul sudah melekat — tinjauan di bawah menunjukkan penalaran penuh per soal.')
      : pct >= 60
      ? T('Solid base with gaps — reread the explanations below, revisit the flagged lessons, then retake with a fresh shuffle.',
          'Dasar solid dengan celah — baca ulang pembahasan di bawah, kunjungi lagi pelajarannya, lalu ulangi dengan acakan baru.')
      : T('The module deserves another pass before the retake — the explanations below tell you exactly which ideas slipped.',
          'Modul ini layak dibaca sekali lagi sebelum pengulangan — pembahasan di bawah menunjukkan persis gagasan mana yang lolos.')));
    res.appendChild(right);
    c.appendChild(res);
    w.appendChild(c);
    requestAnimationFrame(function () { setTimeout(function () { var v = ring.querySelector('.val'); if (v) v.style.strokeDashoffset = String(408 - 408 * pct / 100); }, 40); });

    if (run.qs && run.answers.length) {
      /* by lesson */
      var byl = {}, order = [];
      run.qs.forEach(function (q, i) {
        var k = q.lesson || '—';
        if (!byl[k]) { byl[k] = { n: 0, ok: 0 }; order.push(k); }
        byl[k].n++; if (run.answers[i] === q.correct) byl[k].ok++;
      });
      if (order.length > 1) {
        var bc = card(w, T('By lesson', 'Per pelajaran'), null, null);
        var grid = el('div', 'ra-byl');
        order.sort().forEach(function (k) {
          var r = el('div', 'ra-byl-row');
          var l = lessonOf(k);
          r.appendChild(el('span', null, '<b>' + esc(k) + '</b>' + esc(l ? B(l.title) : '')));
          var bar = el('div', 'ra-byl-bar'); bar.appendChild(el('i')).style.width = (byl[k].ok / byl[k].n * 100) + '%';
          r.appendChild(bar);
          r.appendChild(el('em', null, byl[k].ok + '/' + byl[k].n));
          grid.appendChild(r);
        });
        bc.appendChild(grid);
      }
      var rev = card(w, T('Review — every question, every explanation', 'Tinjauan — tiap soal, tiap pembahasan'), null, null);
      run.qs.forEach(function (q, i) {
        var a = run.answers[i], okk = a === q.correct;
        var d = document.createElement('details'); d.className = 'ra-rev ' + (okk ? 'ok' : 'bad');
        if (!okk) d.open = true;
        var sm = el('summary', null, '<span class="ra-dot">' + (okk ? ICO.check : ICO.x) + '</span><span>' + (i + 1) + '. ' + esc(B(q.q)) + '</span>');
        d.appendChild(sm);
        if (okk) d.appendChild(el('p', 'va ok', '✓ ' + esc(B(q.opts[a]))));
        else {
          d.appendChild(el('p', 'va bad', '✗ ' + T('Your answer: ', 'Jawabanmu: ') + esc(B(q.opts[a]))));
          d.appendChild(el('p', 'va ok', '✓ ' + T('Correct: ', 'Benar: ') + esc(B(q.opts[q.correct]))));
        }
        d.appendChild(el('p', 'va', esc(B(q.expl))));
        var rb = revisitBtn(q.lesson); if (rb) d.appendChild(rb);
        rev.appendChild(d);
      });
    }
    var row = el('div', 'ra-row');
    var doneB = btn(T('Done', 'Selesai'), null, true);
    doneB.addEventListener('click', close);
    var again = btn(T('Retake (reshuffled)', 'Ulangi (diacak ulang)'), 'ghost');
    again.addEventListener('click', function () { startQuiz(run.data); });
    row.appendChild(doneB); row.appendChild(again);
    if (spec.reflect) {
      var er = btn(rec.reflection ? T('Edit reflection', 'Sunting refleksi') : T('Write the reflection', 'Tulis refleksi'), 'ghost');
      er.addEventListener('click', renderReflect);
      row.appendChild(er);
    }
    w.appendChild(row);
  }

  /* ─── card data + open/close ─── */
  function cardData(cardEl) {
    var pick = function (sel) { var n = cardEl.querySelector(sel); return n ? n.textContent.trim() : ''; };
    return { id: cardEl.dataset.module, pill: pick('.gold-pill'), title: pick('.assignment-title') };
  }
  function open(cardEl) {
    build();
    root.classList.add('open');
    document.body.classList.add('lms-lock');
    run = null;
    renderIntro(cardData(cardEl));
  }
  function close() {
    if (root) root.classList.remove('open');
    document.body.classList.remove('lms-lock');
    run = null;
    syncCards();
  }

  /* ─── host page sync: cards, filters, grades tab ─── */
  function modsComplete() {
    try { return JSON.parse(localStorage.getItem('mt-lms-mods:' + CFG.slug) || '{}'); } catch (e) { return {}; }
  }
  function fillChips(cardEl, id) {
    var spec = BANK[id]; if (!spec) return;
    var box = cardEl.querySelector('[data-asg-chips]'); if (!box) return;
    box.innerHTML = '';
    [[spec.mcq.length + ' questions', spec.mcq.length + ' soal'],
     spec.reflect ? ['Written reflection', 'Refleksi tertulis'] : null,
     ['≈ ' + estMinutes(spec) + ' min', '≈ ' + estMinutes(spec) + ' mnt'],
     ['100 pts', '100 poin']].forEach(function (x) {
      if (!x) return;
      var sp = el('span', null, esc(lang() === 'id' ? x[1] : x[0]));
      sp.dataset.en = x[0]; sp.dataset.id = x[1];
      box.appendChild(sp);
    });
    /* a "covers" list for cards that do not ship one: the module's lessons, from the registry */
    if (!cardEl.querySelector('.asg-covers')) {
      var reg = (window.MT_LMS || {})[CFG.slug], mod = reg && reg.modules[parseInt(id, 10) - 1];
      if (mod && mod.lessons && mod.lessons.length) {
        var ul = el('ul', 'asg-covers');
        mod.lessons.slice(0, 7).forEach(function (l) {
          var li = el('li');
          li.appendChild(el('b', null, esc(l.n)));
          var sp = el('span', null, esc(B(l.title))); sp.dataset.en = l.title.en; sp.dataset.id = l.title.id || l.title.en;
          li.appendChild(sp); ul.appendChild(li);
        });
        var desc = cardEl.querySelector('.assignment-desc');
        if (desc) desc.insertAdjacentElement('afterend', ul); else box.insertAdjacentElement('beforebegin', ul);
      }
    }
  }
  function syncCards() {
    var s = store(), mods = modsComplete();
    var totalQ = 0;
    Object.keys(BANK).forEach(function (k) { totalQ += (BANK[k].mcq || []).length; });
    document.querySelectorAll('[data-asg-total-q]').forEach(function (n) { n.textContent = String(totalQ); });
    document.querySelectorAll('.assignment-card').forEach(function (cardEl) {
      var id = cardEl.dataset.module;
      if (!BANK[id]) return;
      fillChips(cardEl, id);
      /* module completion unlocks its assessment */
      if (cardEl.dataset.status === 'locked' && mods[id]) cardEl.dataset.status = 'available';
      var rec = s[id];
      if (cardEl.dataset.status === 'locked') return;
      var status = rec && rec.best != null ? 'graded' : 'available';
      cardEl.dataset.status = status;
      var st = cardEl.querySelector('.assignment-status');
      if (st) {
        var map = status === 'graded'
          ? ['graded', 'Completed · best ' + rec.best + '%', 'Selesai · terbaik ' + rec.best + '%']
          : ['available', 'Available', 'Tersedia'];
        st.className = 'assignment-status ' + map[0];
        st.dataset.en = map[1]; st.dataset.id = map[2];
        st.textContent = lang() === 'id' ? map[2] : map[1];
      }
      var b = cardEl.querySelector('.assignment-footer button');
      if (b && b.disabled) { b.disabled = false; b.className = 'btn-gold'; }
      if (b && !b.disabled) {
        var lbl = status === 'graded' ? ['Review or retake →', 'Tinjau atau ulangi →'] : ['Start assessment →', 'Mulai asesmen →'];
        b.dataset.en = lbl[0]; b.dataset.id = lbl[1];
        b.textContent = lang() === 'id' ? lbl[1] : lbl[0];
      }
    });
    var cards = document.querySelectorAll('.assignment-card');
    document.querySelectorAll('.filter-pill').forEach(function (p) {
      var f = p.dataset.filter; if (!f) return;
      p.dataset.count = f === 'all' ? cards.length
        : document.querySelectorAll('.assignment-card[data-status="' + f + '"]').length;
    });
    /* grades tab: real, computed numbers */
    var rows = document.querySelectorAll('.grade-row');
    var total = 0, done = 0, n = 0;
    rows.forEach(function (row, i) {
      var id = String(i + 1);
      if (!BANK[id]) return;
      n++;
      var rec = s[id];
      var stEl = row.querySelector('.grade-status');
      var grEl = row.querySelector('.gr-grade');
      if (rec && rec.best != null) {
        done++; total += rec.best;
        if (stEl) {
          stEl.className = 'grade-status graded';
          stEl.dataset.en = 'Completed'; stEl.dataset.id = 'Selesai';
          stEl.textContent = lang() === 'id' ? 'Selesai' : 'Completed';
        }
        if (grEl) grEl.textContent = rec.best;
      }
    });
    var ov = document.querySelector('.ov-score');
    if (ov && n) {
      ov.innerHTML = total + ' <span class="sl">/</span> <span class="den">' + (n * 100) + '</span>';
    }
    var ovBar = document.querySelector('.ov-bar i');
    if (ovBar && n) ovBar.style.setProperty('--grade-pct', Math.round(total / n) + '%');
    var ovNote = document.querySelector('.ov-note');
    if (ovNote && done) {
      ovNote.dataset.en = done + ' of ' + n + ' assessments completed — scores are your best results, computed on this device.';
      ovNote.dataset.id = done + ' dari ' + n + ' asesmen selesai — skor adalah hasil terbaikmu, dihitung di perangkat ini.';
      ovNote.textContent = ovNote.dataset[lang() === 'id' ? 'id' : 'en'];
    }
    var gt = document.querySelector('.grade-total .gr-grade');
    if (gt && n) gt.textContent = String(total);
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('.assignment-footer button');
    if (!b || b.disabled || b.classList.contains('asg-link')) return;
    var cardEl = b.closest('.assignment-card');
    if (!cardEl || cardEl.dataset.status === 'locked') return;
    e.preventDefault();
    open(cardEl);
  });
  document.querySelectorAll('.ctl button, button[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setTimeout(function () { syncCards(); if (root && root.classList.contains('open') && current && !run) renderIntro(current); }, 60); });
  });

  syncCards();
  window.MT_ASSIGN = { open: function (id) {
    var cardEl = document.querySelector('.assignment-card[data-module="' + id + '"]');
    if (cardEl && cardEl.dataset.status !== 'locked') open(cardEl);
  }, sync: syncCards };
})();
