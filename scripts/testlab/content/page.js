#!/usr/bin/env node
/**
 * Test Lab · page wiring for prototype/products/the-pack/index.html
 * -----------------------------------------------------------------
 * Regenerates, from the registry (data/lms/the-pack.js), the host-page
 * surfaces that list Module 7 and Module 12 lessons so names, kinds and
 * durations never drift from the lessons themselves:
 *   · Module 7 accordion (eight lesson cards) and syllabus card metas
 *   · Module 12 syllabus card, accordion (nineteen lesson cards) and
 *     assignment card ("Also available", bonus: opens in any order)
 *   · Module 7 assignment card covers and title
 *   · course counts (lessons, also-available modules, hours)
 *   · the Screening Gym promo (Test Lab copy) and the script tags
 * Idempotent: refuses to run twice (looks for data-module="12").
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '../../..');
const PAGE = path.join(ROOT, 'prototype/products/the-pack/index.html');
global.window = {};
require(path.join(ROOT, 'prototype/data/lms/the-pack.js'));
const REG = window.MT_LMS['the-pack'];
let html = fs.readFileSync(PAGE, 'utf8');
if (/data-module="12"/.test(html)) { console.error('Module 12 already wired; refusing to run twice.'); process.exit(1); }

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escT = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const LOCK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="5.5" y="10" width="13" height="10" rx="2"/><path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10"/></svg>';
const KIND = { reading: ['Reading', 'Bacaan'], interactive: ['Interactive', 'Interaktif'], assignment: ['Case assignment', 'Tugas kasus'] };
const mins = d => parseInt(String(d.en).match(/\d+/)[0], 10);
const mod = n => REG.modules.find(m => m.num === n);
const M7 = mod(7), M12 = mod(12);
const sum = m => m.lessons.reduce((a, l) => a + mins(l.dur), 0);

function bi(attrs, en, id, tag, cls) {
  return `<${tag} class="${cls}"${attrs || ''} data-en="${esc(en)}" data-id="${esc(id)}">${escT(en)}</${tag}>`;
}
function lessonCard(l) {
  const k = KIND[l.kind] || KIND.reading;
  return `        <div class="lesson-card" data-status="locked">
          <div class="lesson-icon">${LOCK}</div>
          <div class="lesson-info">
            <span class="lesson-number">${l.n}</span>
            ${bi('', l.title.en, l.title.id, 'span', 'lesson-name')}
          </div>
          <div class="lesson-meta">
            ${bi('', k[0], k[1], 'span', 'lesson-type')}
            ${bi('', l.dur.en, l.dur.id, 'span', 'lesson-duration')}
          </div>
          <div class="lesson-action"><span class="lock-ic" aria-hidden="true">${LOCK}</span></div>
        </div>
`;
}
function accordion(m, opts) {
  const total = sum(m);
  const metaEn = `${m.lessons.length} lessons · ~${total} min`, metaId = `${m.lessons.length} pelajaran · ~${total} mnt`;
  const numEn = opts.also ? 'Also available' : `Module ${m.num}`, numId = opts.also ? 'Juga tersedia' : `Modul ${m.num}`;
  const introEn = `${m.outcome.en} <b>Dossier item:</b> ${m.dossier.en}`;
  const introId = `${m.outcome.id} <b>Butir Dossier:</b> ${m.dossier.id}`;
  return `    <div class="module-accordion" data-module="${m.num}" aria-expanded="false">
      <button class="module-header" aria-expanded="false" aria-controls="mbody-${m.num}">
        <div class="module-header-left">
          ${bi('', numEn, numId, 'span', 'module-number')}
          <span class="module-chevron" aria-hidden="true">▾</span>
          ${bi('', m.title.en, m.title.id, 'span', 'module-name')}
        </div>
        <div class="module-header-right">
          ${bi('', metaEn, metaId, 'span', 'module-meta')}
          <span class="module-status locked" data-en="Locked" data-id="Terkunci">Locked</span>
        </div>
      </button>
      <div class="module-body" id="mbody-${m.num}">
        <div class="module-intro"><p data-en="${esc(introEn)}" data-id="${esc(introId)}">${introEn}</p></div>
${m.lessons.map(lessonCard).join('')}      </div>
    </div>
`;
}

/* ── 1 · Module 7 accordion (replace) ─────────────────────────────── */
{
  const a = html.indexOf('<div class="module-accordion" data-module="7"');
  const b = html.indexOf('<div class="module-accordion" data-module="8"');
  if (a < 0 || b < 0) throw new Error('module 7/8 accordion not found');
  const lineStart = html.lastIndexOf('\n', a) + 1;
  const lineStartB = html.lastIndexOf('\n', b) + 1;
  html = html.slice(0, lineStart) + accordion(M7, {}) + html.slice(lineStartB);
}

/* ── 2 · Module 12 accordion (after Module 11) ────────────────────── */
{
  const a = html.indexOf('<div class="module-accordion" data-module="11"');
  const end = html.indexOf('\n    </section>', a);
  if (a < 0 || end < 0) throw new Error('module 11 accordion end not found');
  html = html.slice(0, end + 1) + accordion(M12, { also: true }) + html.slice(end + 1);
}

/* ── 3 · Syllabus cards: Module 7 metas and copy; Module 12 card ──── */
function rep(a, b, n) {
  const c = html.split(a).length - 1;
  if (c !== (n || 1)) throw new Error(`expected ${n || 1} match(es), found ${c}: ${a.slice(0, 80)}`);
  html = html.split(a).join(b);
}
rep('<span class="syl-meta" data-en="6 lessons" data-id="6 pelajaran">6 lessons</span>\n          <span class="syl-meta" data-en="~265 min" data-id="~265 mnt">~265 min</span>',
  `<span class="syl-meta" data-en="${M7.lessons.length} lessons" data-id="${M7.lessons.length} pelajaran">${M7.lessons.length} lessons</span>\n          <span class="syl-meta" data-en="~${sum(M7)} min" data-id="~${sum(M7)} mnt">~${sum(M7)} min</span>`);
{
  const descEn = 'Online tests are the gate between the paper and the people for almost every high-volume graduate programme. Scores respond strongly to familiarity, strategy and practice. Which makes this the most trainable gate in the funnel. Eight lessons map the test landscape, teach named procedures for numerical, verbal, series, abstract, figural and spatial items, cover personality, values, situational judgement and the classic psikotes (Kraepelin, Pauli, IST-type, CFIT-type, drawing tasks), and set a three-week plan with an error log. Every drill runs in the Test Lab on an original, labelled practice bank.';
  const descId = 'Tes daring adalah gerbang antara kertas dan manusia untuk hampir setiap program lulusan bervolume tinggi. Skor sangat responsif terhadap keakraban, strategi, dan latihan, yang menjadikannya gerbang paling bisa dilatih di corong. Delapan pelajaran memetakan lanskap tes, mengajarkan prosedur bernama untuk soal numerik, verbal, deret, abstrak, figural, dan spasial, membahas kepribadian, nilai, penilaian situasional, dan psikotes klasik (Kraepelin, Pauli, tipe IST, tipe CFIT, tugas menggambar), lalu menyusun rencana tiga minggu dengan catatan kesalahan. Setiap latihan berjalan di Test Lab dengan bank soal latihan orisinal yang berlabel.';
  const a = html.indexOf('<div class="syl-num" aria-hidden="true">07</div>');
  const p0 = html.indexOf('<p class="syl-desc"', a), p1 = html.indexOf('</p>', p0) + 4;
  html = html.slice(0, p0) + `<p class="syl-desc" data-en="${esc(descEn)}" data-id="${esc(descId)}">${escT(descEn)}</p>` + html.slice(p1);
}
{
  const a = html.indexOf('<div class="syl-num" aria-hidden="true">11</div>');
  const end = html.indexOf('\n    </div>\n    </section>', a);
  if (a < 0 || end < 0) throw new Error('syllabus card 11 end not found');
  const card = `    <div class="syl-card reveal">
      <div class="syl-num" aria-hidden="true">12</div>
      <div class="syl-body">
        <span class="gold-pill" data-en="Also available · open any track" data-id="Juga tersedia · buka jalur mana pun">Also available · open any track</span>
        ${bi('', M12.title.en, M12.title.id, 'h3', '')}
        <p class="syl-desc" data-en="${esc(M12.overview.en)}" data-id="${esc(M12.overview.id)}">${escT(M12.overview.en)}</p>
      <div class="syl-foot">
          <span class="syl-meta" data-en="${M12.lessons.length} lessons · 3 tracks" data-id="${M12.lessons.length} pelajaran · 3 jalur">${M12.lessons.length} lessons · 3 tracks</span>
          <span class="syl-meta" data-en="~${sum(M12)} min" data-id="~${sum(M12)} mnt">~${sum(M12)} min</span>
          <span class="module-status locked" data-en="Locked" data-id="Terkunci">Locked</span>
          <button class="btn-disabled" disabled data-en="Open from the Modules tab" data-id="Buka dari tab Modul">Open from the Modules tab</button>
        </div>
      </div>
    </div>
`;
  html = html.slice(0, end + 1) + card + html.slice(end + 1);
}
html = html.replace(/<h3 class=""/g, '<h3');

/* ── 4 · Counts ───────────────────────────────────────────────────── */
const core = REG.modules.filter(m => !m.appendix), coreLessons = core.reduce((a, m) => a + m.lessons.length, 0);
const also = REG.modules.filter(m => m.appendix).length;
const hours = Math.round(core.reduce((a, m) => a + sum(m), 0) / 60);
rep('data-en="9 modules · 48 lessons · Self-paced · Complete in sequence" data-id="9 modul · 48 pelajaran · Belajar mandiri · Diselesaikan secara berurutan">9 modules · 48 lessons · Self-paced · Complete in sequence',
  `data-en="9 modules · ${coreLessons} lessons · Self-paced · Complete in sequence" data-id="9 modul · ${coreLessons} pelajaran · Belajar mandiri · Diselesaikan secara berurutan">9 modules · ${coreLessons} lessons · Self-paced · Complete in sequence`);
rep('data-en="9 modules · 48 lessons · 2 also available · Complete in sequence" data-id="9 modul · 48 pelajaran · 2 juga tersedia · Diselesaikan secara berurutan">9 modules · 48 lessons · 2 also available · Complete in sequence',
  `data-en="9 modules · ${coreLessons} lessons · ${also} also available · Complete in sequence" data-id="9 modul · ${coreLessons} pelajaran · ${also} juga tersedia · Diselesaikan secara berurutan">9 modules · ${coreLessons} lessons · ${also} also available · Complete in sequence`);
rep('<span class="tb-stat"><b>48</b><span data-en="Lessons" data-id="Pelajaran">Lessons</span></span><span class="tb-stat"><b>~36</b>',
  `<span class="tb-stat"><b>${coreLessons}</b><span data-en="Lessons" data-id="Pelajaran">Lessons</span></span><span class="tb-stat"><b>~${hours}</b>`);
rep('<span class="tb-stat"><b>48</b><span data-en="Lessons" data-id="Pelajaran">Lessons</span></span>',
  `<span class="tb-stat"><b>${coreLessons}</b><span data-en="Lessons" data-id="Pelajaran">Lessons</span></span>`);

/* ── 5 · Assignment cards: Module 7 covers and title; Module 12 card ─ */
{
  const a = html.indexOf('<div class="assignment-card reveal" data-module="7"');
  const u0 = html.indexOf('<ul class="asg-covers">', a), u1 = html.indexOf('</ul>', u0) + 5;
  const covers = '<ul class="asg-covers">\n' + M7.lessons.map(l => `        <li><b>${l.n}</b>${bi('', l.title.en, l.title.id, 'span', '').replace(' class=""', '')}</li>`).join('\n') + '\n      </ul>';
  html = html.slice(0, u0) + covers + html.slice(u1);
  const tEn = 'Psychometric & Aptitude Tests: Landscape, Numerical, Verbal/Series/Abstract, Figural, Personality & SJT, Classic Psikotes, Strategy';
  const tId = 'Psikotes & Tes Bakat: Peta Tes, Numerik, Verbal/Deret/Abstrak, Figural, Kepribadian & SJT, Psikotes Klasik, Strategi';
  rep('data-en="Psychometric &amp; Aptitude Tests: Landscape, Numerical, Verbal/Series/Abstract, Personality &amp; SJT, Strategy" data-id="Psikotes &amp; Tes Bakat: Peta Tes, Numerik, Verbal/Deret/Abstrak, Kepribadian &amp; SJT, Strategi">Psychometric & Aptitude Tests: Landscape, Numerical, Verbal/Series/Abstract, Personality & SJT, Strategy',
    `data-en="${esc(tEn)}" data-id="${esc(tId)}">${tEn}`, 2);
  const dEn = 'Sixteen questions drawn from the eight lessons and Nadia’s Three Weeks: ability versus personality, norm groups, the wrong-base trap and notation, the force test, series families, the figural scan order and mirror versus rotation, forced-choice formats, the least effective SJT response, the Kraepelin rhythm, the scoring rule and the guessing rule, CAT pacing and the error log. Then a written reflection on the tag that appears most in your own log and what you will drill this week.';
  const dId = 'Enam belas pertanyaan dari delapan pelajaran dan Tiga Minggu Nadia: kemampuan versus kepribadian, kelompok norma, jebakan basis salah dan notasi, uji memaksa, keluarga deret, urutan pindai figural dan cermin versus rotasi, format pilihan-paksa, respons SJT paling tidak efektif, ritme Kraepelin, aturan penilaian dan aturan menebak, tempo CAT, dan catatan kesalahan. Lalu refleksi tertulis tentang tanda yang paling sering muncul di catatanmu sendiri dan apa yang akan kamu latih minggu ini.';
  const d0 = html.indexOf('<p class="assignment-desc"', a), d1 = html.indexOf('</p>', d0) + 4;
  html = html.slice(0, d0) + `<p class="assignment-desc" data-en="${esc(dEn)}" data-id="${esc(dId)}">${escT(dEn)}</p>` + html.slice(d1);
  {
    const c0 = html.indexOf('<div class="assignment-meta asg-chips"', a), c1 = html.indexOf('</div>', c0);
    const chips = html.slice(c0, c1).replace('<span data-en="12 questions" data-id="12 soal">12 questions</span>', '<span data-en="16 questions" data-id="16 soal">16 questions</span>').replace('<span data-en="≈ 14 min" data-id="≈ 14 mnt">≈ 14 min</span>', '<span data-en="≈ 18 min" data-id="≈ 18 mnt">≈ 18 min</span>');
    if (!/16 questions/.test(chips) || !/18 min/.test(chips)) throw new Error('module 7 chips not patched');
    html = html.slice(0, c0) + chips + html.slice(c1);
  }
}
{
  const a = html.indexOf('<div class="assignment-card reveal" data-module="9"');
  const f = html.indexOf('<div class="assignment-footer">', a);
  const end = html.indexOf('\n    </div>\n', f) + '\n    </div>\n'.length;
  const tracks = [
    ['A', 'Track A · TPA: verbal, numerical, logical, figural; the TPA-60 mock (12.1 to 12.6)', 'Jalur A · TPA: verbal, numerik, logika, figural; simulasi TPA-60 (12.1 sampai 12.6)'],
    ['B', 'Track B · BUMN: stages and the TKD, AKHLAK ranked scoring, English and learning agility; the BUMN-T1 mock (12.7 to 12.10)', 'Jalur B · BUMN: tahapan dan TKD, skor berjenjang AKHLAK, bahasa Inggris dan learning agility; simulasi BUMN-T1 (12.7 sampai 12.10)'],
    ['C', 'Track C · SKD CPNS: structure, scoring and thresholds, TWK I to III, TIU at CAT speed, TKP I and II; the SKD-110 simulation (12.11 to 12.18)', 'Jalur C · SKD CPNS: struktur, penilaian dan ambang batas, TWK I sampai III, TIU dengan kecepatan CAT, TKP I dan II; simulasi SKD-110 (12.11 sampai 12.18)'],
    ['12.19', 'Capstone: your ten-week test campaign, planned by cause from your own reports', 'Puncak: kampanye tes sepuluh minggumu, direncanakan berdasarkan penyebab dari laporanmu sendiri']
  ];
  const dEn = 'Thirty questions across the three tracks: the diagnostic and the weakness map; TPA sub-types and the TPA-60 report; BUMN stages, TKD families, AKHLAK ranked scoring and consistency; SKD structure, scoring, thresholds, the CAT, TWK pillars and Bahasa Indonesia, TIU pacing, TKP dimensions and the second-best habit. Then a written reflection on the track you sit next, your weakest sub-type and the cause behind it. Practice items are Metanoia’s own; none is an official examination question.';
  const dId = 'Tiga puluh pertanyaan lintas tiga jalur: diagnostik dan peta kelemahan; sub-tipe TPA dan laporan TPA-60; tahapan BUMN, keluarga TKD, skor berjenjang AKHLAK dan konsistensi; struktur SKD, penilaian, ambang batas, CAT, pilar TWK dan Bahasa Indonesia, tempo TIU, dimensi TKP dan kebiasaan terbaik kedua. Lalu refleksi tertulis tentang jalur yang akan kamu tempuh, sub-tipe terlemahmu, dan penyebab di baliknya. Soal latihan adalah milik Metanoia; tidak ada yang merupakan soal ujian resmi.';
  const card = `    <div class="assignment-card reveal" data-module="12" data-status="locked">
      <div class="assignment-header">
        <span class="gold-pill" data-en="Also available · Recruitment Test Lab" data-id="Juga tersedia · Recruitment Test Lab">Also available · Recruitment Test Lab</span>
        <span class="assignment-status locked" data-en="Locked: complete the Module 12 lessons first" data-id="Terkunci: selesaikan dulu pelajaran Modul 12">Locked: complete the Module 12 lessons first</span>
      </div>
      <h3 class="assignment-title" data-en="Recruitment Test Lab: TPA, BUMN &amp; SKD CPNS" data-id="Recruitment Test Lab: TPA, BUMN &amp; SKD CPNS">Recruitment Test Lab: TPA, BUMN &amp; SKD CPNS</h3>
      <span class="asg-brief-lbl" data-en="Assessment brief" data-id="Ringkasan asesmen">Assessment brief</span>
      <p class="assignment-desc" data-en="${esc(dEn)}" data-id="${esc(dId)}">${escT(dEn)}</p>
      <ul class="asg-covers">
${tracks.map(t => `        <li><b>${t[0]}</b><span data-en="${esc(t[1])}" data-id="${esc(t[2])}">${escT(t[1])}</span></li>`).join('\n')}
      </ul>
      <div class="assignment-meta asg-chips" data-asg-chips>
        <span data-en="30 questions" data-id="30 soal">30 questions</span>
        <span data-en="Written reflection" data-id="Refleksi tertulis">Written reflection</span>
        <span data-en="≈ 30 min" data-id="≈ 30 mnt">≈ 30 min</span>
        <span data-en="100 pts" data-id="100 poin">100 pts</span>
      </div>
      <div class="assignment-footer"><button class="btn-disabled" disabled data-en="Locked" data-id="Terkunci">Locked</button><button class="asg-link" data-goto-module="12" data-en="Review the lessons" data-id="Tinjau pelajarannya">Review the lessons</button></div>
    </div>
`;
  html = html.slice(0, end) + card + html.slice(end);
}

/* ── 6 · Promo copy and scripts ───────────────────────────────────── */
rep('data-en="Three stations in one workspace: timed aptitude drills &mdash; numerical, verbal, logical &mdash; scored transparently with worked explanations; an ATS readiness check that reads your CV against a real job description on your device; and an application pipeline tracker that turns your job search into a system." data-id="Tiga pos latihan dalam satu ruang kerja: latihan tes bakat berbatas waktu, numerik, verbal, logika, dinilai secara transparan dengan pembahasan; pemeriksaan kesiapan ATS yang membaca CV-mu terhadap deskripsi lowongan sungguhan, langsung di perangkatmu; dan pelacak alur lamaran yang mengubah pencarian kerjamu menjadi sebuah sistem.">Three stations in one workspace: timed aptitude drills &mdash; numerical, verbal, logical &mdash; scored transparently with worked explanations; an ATS readiness check that reads your CV against a real job description on your device; and an application pipeline tracker that turns your job search into a system.',
  'data-en="Three stations in one workspace: the Test Lab, an original tiered bank for TPA, BUMN (TKD, AKHLAK, English) and SKD CPNS (TWK, TIU, TKP) with drills, timed sets, section practice, full-length practice forms, a Kraepelin trainer and a weakness map; an ATS readiness check that reads your CV against a real job description on your device; and an application pipeline tracker that turns your job search into a system." data-id="Tiga pos latihan dalam satu ruang kerja: Test Lab, bank soal orisinal bertingkat untuk TPA, BUMN (TKD, AKHLAK, bahasa Inggris), dan SKD CPNS (TWK, TIU, TKP) dengan latihan, set berbatas waktu, latihan per bagian, formulir latihan lengkap, pelatih Kraepelin, dan peta kelemahan; pemeriksaan kesiapan ATS yang membaca CV-mu terhadap deskripsi lowongan sungguhan, langsung di perangkatmu; dan pelacak alur lamaran yang mengubah pencarian kerjamu menjadi sebuah sistem.">Three stations in one workspace: the Test Lab, an original tiered bank for TPA, BUMN (TKD, AKHLAK, English) and SKD CPNS (TWK, TIU, TKP) with drills, timed sets, section practice, full-length practice forms, a Kraepelin trainer and a weakness map; an ATS readiness check that reads your CV against a real job description on your device; and an application pipeline tracker that turns your job search into a system.');
rep('<span data-en="drill questions" data-id="soal latihan">drill questions</span>', '<span data-en="practice items" data-id="soal latihan">practice items</span>');
rep('<span data-en="timed sets" data-id="set berbatas waktu">timed sets</span>', '<span data-en="practice modes" data-id="mode latihan">practice modes</span>');
rep('data-en="Open the Screening Gym &rarr;" data-id="Buka Screening Gym →">Open the Screening Gym &rarr;', 'data-en="Open the Test Lab &rarr;" data-id="Buka Test Lab →">Open the Test Lab &rarr;');
rep('data-en="Question counts are computed live from the drill bank. Scoring is rule-based and explained per question; your CV text never leaves this browser." data-id="Jumlah soal dihitung langsung dari bank latihan. Penilaiannya berbasis aturan dan dijelaskan per soal; teks CV-mu tidak pernah keluar dari browser ini.">Question counts are computed live from the drill bank. Scoring is rule-based and explained per question; your CV text never leaves this browser.',
  'data-en="Item counts are computed live from the Lab bank. Every item is a Metanoia practice item, not an official or leaked examination question; scoring is rule-based and explained per item, and your CV text never leaves this browser." data-id="Jumlah soal dihitung langsung dari bank Lab. Setiap soal adalah soal latihan Metanoia, bukan soal resmi atau bocoran ujian mana pun; penilaiannya berbasis aturan dan dijelaskan per soal, dan teks CV-mu tidak pernah keluar dari browser ini.">Item counts are computed live from the Lab bank. Every item is a Metanoia practice item, not an official or leaked examination question; scoring is rule-based and explained per item, and your CV text never leaves this browser.');
rep('<script src="../../data/pack/aptitude.js"></script>\n', '<script src="../../data/pack/testlab.js"></script>\n');
rep('<script src="../../js/tool-shell.js"></script>\n<script src="js/pack-gym.js"></script>',
  '<script src="../../js/tool-shell.js"></script>\n<script src="js/pack-testlab-core.js"></script>\n<script src="js/pack-testlab.js"></script>\n<script src="js/pack-gym.js"></script>');

fs.writeFileSync(PAGE, html);
console.log(`wired: module 7 (${M7.lessons.length} lessons, ~${sum(M7)} min), module 12 (${M12.lessons.length} lessons, ~${sum(M12)} min), core lessons ${coreLessons}, also available ${also}, ~${hours} h`);
