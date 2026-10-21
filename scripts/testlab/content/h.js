'use strict';
/* Authoring helpers for registry content: bilingual pairs and block constructors that
   mirror the player's schemas (sections, diagram, compare, scenario, steps, mistakes,
   glossary, checks, tool, takeaways, resources, readFirst). */
const b = (en, id) => ({ en, id });
const sec = (icon, hEn, hId, bEn, bId) => ({ icon, h: b(hEn, hId), body: b(bEn, bId) });
const flow = (exEn, exId, tEn, tId, items) => ({ type: 'flow', exhibit: b(exEn, exId), title: b(tEn, tId), items: items.map(i => ({ icon: i[0], h: b(i[1], i[2]), sub: b(i[3], i[4]) })) });
const cmp = (tagEn, tagId, qEn, qId, wEn, wId, sEn, sId, whyEn, whyId) => ({ tag: b(tagEn, tagId), q: b(qEn, qId), weak: b(wEn, wId), strong: b(sEn, sId), why: b(whyEn, whyId) });
const scen = (icon, tEn, tId, paras) => ({ icon, title: b(tEn, tId), body: paras.map(p => b(p[0], p[1])) });
const step = (hEn, hId, bEn, bId, dEn, dId) => ({ h: b(hEn, hId), body: b(bEn, bId), debrief: b(dEn, dId) });
const mist = (items) => ({ items: items.map(i => ({ h: b(i[0], i[1]), fix: b(i[2], i[3]) })) });
const gl = (items) => items.map(i => ({ term: b(i[0], i[1]), def: b(i[2], i[3]) }));
const chk = (qEn, qId, opts, correct, whyEn, whyId) => ({ q: b(qEn, qId), options: opts.map(o => b(o[0], o[1])), correct, why: b(whyEn, whyId) });
const tool = (mode, tEn, tId, bEn, bId, cEn, cId) => ({ id: 'testlab', mode, title: b(tEn, tId), body: b(bEn, bId), cta: b(cEn || 'Open the Test Lab →', cId || 'Buka Test Lab →') });
const take = (items) => items.map(i => b(i[0], i[1]));
const res = (tEn, tId, lEn, lId, items) => ({ title: b(tEn, tId), lead: b(lEn, lId), items: items.map(i => ({ kind: 'guide', title: b(i[0], i[1]), desc: b(i[2], i[3]), body: i[4].map(p => b(p[0], p[1])) })) });
const rf = (tEn, tId, iEn, iId, slides) => ({ kicker: b('Read first · ' + slides.length + ' slides', 'Baca dulu · ' + slides.length + ' slide'), title: b(tEn, tId), intro: b(iEn, iId), slides: slides.map(s => ({ h: b(s[0], s[1]), points: s[2].map(p => b(p[0], p[1])) })) });
const lesson = (o) => Object.assign({ placeholder: false }, o);
const dur = (m, extra) => b(m + ' min' + (extra ? ' + ' + extra.en : ''), m + ' mnt' + (extra ? ' + ' + extra.id : ''));
const NOTICE = { en: 'Metanoia practice items. Not official items or leaks from any examination. Format, item counts, timing, scoring and thresholds change every cycle; the Lab shows its source and verified date next to every number. Always check the official announcement.', id: 'Soal latihan Metanoia. Bukan soal resmi atau bocoran ujian mana pun. Format, jumlah soal, waktu, skor dan ambang batas berubah tiap siklus; Lab menampilkan sumber dan tanggal verifikasi di samping setiap angka. Selalu cek pengumuman resmi.' };
module.exports = { b, sec, flow, cmp, scen, step, mist, gl, chk, tool, take, res, rf, lesson, dur, NOTICE };
