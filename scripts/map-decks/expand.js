#!/usr/bin/env node
/**
 * The Map · Module 5 · Read-first decks 5.2, 5.4, 5.6: slide skeletons.
 * Rewrites each deck's `slides` (heading + two points per slide, EN/ID) and its
 * kicker count in the registry so the composed deck (scripts/map-decks/compose.js
 * + decks/m05.txt) has one slide per idea in the lesson, in the lesson's own
 * words. The points are also the text fallback and the notes under each slide.
 * Idempotent: re-running writes the same skeletons.
 */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '../..');
const P = path.join(ROOT, 'prototype/data/lms/the-map.js');
const MARK = "window.MT_LMS['the-map'] = ";
const src = fs.readFileSync(P, 'utf8');
if (src.indexOf('"compose":') >= 0) { console.error('registry already carries compose blocks; run expand before compose (or strip first).'); process.exit(1); }
const head = src.slice(0, src.indexOf(MARK) + MARK.length);
global.window = {}; require(P);
const REG = window.MT_LMS['the-map'];
const T = (en, id) => ({ en, id });
const S = (h, p1, p2) => ({ h, points: [p1, p2] });

const DECKS = {
  '5.2': [
    S(T('Two problems, not one', 'Dua masalah, bukan satu'),
      T('The thing that stresses you is the <b>stressor</b>. What it does to your body is the <b>stress</b>.', 'Hal yang membuatmu stres adalah <b>pemicu stres</b>. Apa yang dilakukannya pada tubuhmu adalah <b>respons stres</b>.'),
      T('Solving one does not solve the other. You can submit at 16:00 and still be wired at midnight.', 'Menyelesaikan yang satu tidak menyelesaikan yang lain. Kamu bisa mengumpulkan pukul 16.00 dan masih tegang tengah malam.')),
    S(T('The body needs a finish line', 'Tubuh butuh garis akhir'),
      T('The stress response evolved to end in action and safety: threat, activation, action, safety.', 'Respons stres berevolusi untuk berakhir dalam tindakan dan rasa aman: ancaman, aktivasi, tindakan, aman.'),
      T('A deadline email gives your body neither action nor safety. So the activation lingers and piles up.', 'Email tenggat tidak memberi tubuhmu tindakan maupun rasa aman. Maka aktivasinya bertahan dan menumpuk.')),
    S(T('Seven ways to let the body finish', 'Tujuh cara membiarkan tubuh menuntaskan'),
      T('Movement, breathing, positive social contact, laughter, affection, a good cry, creative expression. The first two have the strongest evidence.', 'Gerak, pernapasan, kontak sosial positif, tawa, kasih sayang, menangis lepas, ekspresi kreatif. Dua yang pertama punya bukti terkuat.'),
      T('Plan each one in three sizes, two, ten and thirty minutes, because the version you will actually use on a bad day is the one that counts.', 'Rencanakan masing-masing dalam tiga ukuran, dua, sepuluh, dan tiga puluh menit, karena versi yang benar-benar kamu pakai di hari buruk adalah yang dihitung.')),
    S(T('Control decides the tool', 'Kendali menentukan alatnya'),
      T('Controllable stressors call for planful problem-solving: analyse, plan, act, and build cycle-completion into the plan itself.', 'Pemicu stres yang bisa dikendalikan menuntut pemecahan masalah terencana: analisis, rencanakan, bertindak, dan masukkan penuntasan siklus ke dalam rencananya.'),
      T('Uncontrollable ones call for positive reappraisal. When progress is real but slow, redefine what counts as winning this week.', 'Yang tidak bisa dikendalikan menuntut penilaian ulang positif. Saat kemajuan nyata tapi lambat, definisikan ulang apa yang dihitung sebagai menang minggu ini.')),
    S(T('From feeling to action, in six steps', 'Dari rasa ke tindakan, dalam enam langkah'),
      T('Notice, make room, get curious, let the body finish, choose toward a value, reconnect and rest.', 'Sadari, beri ruang, penasaran, biarkan tubuh menuntaskan, pilih ke arah nilai, terhubung kembali dan istirahat.'),
      T('One line of practice per step: “Tight chest, anxious, 7.” is step one, done.', 'Satu baris latihan per langkah: “Dada sesak, cemas, 7.” adalah langkah satu, selesai.')),
    S(T('Values are directions; goals are destinations', 'Nilai adalah arah; tujuan adalah destinasi'),
      T('A goal can be reached and finished. A value is a direction you keep travelling.', 'Tujuan bisa dicapai dan selesai. Nilai adalah arah yang terus kamu tempuh.'),
      T('You can always take a step toward a value, even on a bad day.', 'Kamu selalu bisa melangkah ke arah sebuah nilai, bahkan di hari yang buruk.')),
    S(T('Attention is trainable: 3R', 'Perhatian bisa dilatih: 3R'),
      T('Register which colour you are in, release with one breath and feet on the floor, refocus back to the task. About ten seconds.', 'Sadari (register) kamu di warna apa, lepaskan (release) dengan satu napas dan kaki menapak lantai, fokus ulang (refocus) ke tugas. Sekitar sepuluh detik.'),
      T('Thoughts are events, not instructions.', 'Pikiran adalah peristiwa, bukan perintah.')),
    S(T('Rest has types, and sleep is not negotiable', 'Istirahat punya jenis, dan tidur tidak bisa ditawar'),
      T('Sleep, mind-wandering time, active rest and the people in your bubble. The strong evidence is for sleep itself.', 'Tidur, waktu pikiran mengembara, istirahat aktif, dan orang-orang di gelembungmu. Bukti yang kuat adalah untuk tidur itu sendiri.'),
      T('Guilt about resting is a slow leak that lowers the value of the rest you do take. Knowing when to get help is part of the skill.', 'Rasa bersalah karena istirahat adalah kebocoran lambat yang menurunkan nilai istirahat yang kamu ambil. Tahu kapan mencari bantuan adalah bagian dari keterampilannya.'))
  ],
  '5.4': [
    S(T('Listening is catching, not waiting', 'Mendengar itu menangkap, bukan menunggu'),
      T('Hearing is seeing the words. Listening is reading them: the mind works to rebuild what the speaker means.', 'Mendengar bunyi itu seperti melihat kata. Menyimak itu membacanya: pikiran bekerja membangun ulang maksud pembicara.'),
      T('The catcher works as hard as the pitcher. Different skill, same effort.', 'Penangkap bola bekerja sekeras pelempar. Keterampilan berbeda, usaha sama.')),
    S(T('Know the room before you enter', 'Kenali ruangannya sebelum masuk'),
      T('Social, personal, understanding or decision: four kinds of conversation, four kinds of success.', 'Sosial, personal, pemahaman, atau keputusan: empat jenis percakapan, empat jenis keberhasilan.'),
      T('Most painful talks are type mismatches: one person wants to be heard, the other wants to decide.', 'Kebanyakan percakapan yang menyakitkan adalah salah jenis: yang satu ingin didengar, yang lain ingin memutuskan.')),
    S(T('Understand, then judge', 'Pahami, baru nilai'),
      T('Don’t agree or disagree until you can restate their view, and their reasons, in a way they accept.', 'Jangan setuju atau tidak setuju sebelum kamu bisa mengulang pandangan mereka, beserta alasannya, dengan cara yang mereka terima.'),
      T('“Saya cek dulu ya: maksudnya ___, karena ___, betul?”', '“Saya cek dulu ya: maksudnya ___, karena ___, betul?”')),
    S(T('The Disagreement Ladder', 'Tangga Perbedaan Pendapat'),
      T('Is it arguable, facts, understand, real or apparent, which level, which ground, close. Climb in order; don’t skip rungs.', 'Bisa diperdebatkan, fakta, pahami, nyata atau semu, tingkat mana, dasar mana, tutup. Naiki berurutan; jangan melewati anak tangga.'),
      T('Look facts up. Share tastes. Argue only what reasons can settle.', 'Cari faktanya. Bagikan selera. Perdebatkan hanya yang bisa diselesaikan alasan.')),
    S(T('Disagreeing upward: jujur dengan santun', 'Berbeda pendapat ke atas: jujur dengan santun'),
      T('Shared goal, restate, offer your ground as information, propose rather than oppose, leave room for the decision.', 'Tujuan bersama, ulangi, tawarkan dasarmu sebagai informasi, usulkan alih-alih menentang, beri ruang bagi keputusan.'),
      T('“Iya” may mean “I heard you”, not “I agree”. Civil, but not too polite.', '“Iya” bisa berarti “saya dengar”, bukan “saya setuju”. Sopan, tapi tidak terlalu sungkan.')),
    S(T('Silence is not agreement', 'Diam bukan berarti setuju'),
      T('Open with the question, round-robin juniors first, understand before you challenge, look facts up, settled is settled, close with the record.', 'Buka dengan pertanyaannya, giliran bicara junior dulu, pahami sebelum menantang, cari faktanya, yang diputuskan selesai, tutup dengan catatan.'),
      T('Groups over-discuss what everyone knows and miss what only one person knows. Record the decision and the dissent.', 'Kelompok terlalu banyak membahas yang sudah diketahui semua orang dan melewatkan yang hanya diketahui satu orang. Catat keputusan dan ketidaksetujuannya.')),
    S(T('When it gets heated', 'Saat memanas'),
      T('Warning signs: a raised voice, the same point repeated louder, sarcasm, mocking, baiting, over-certainty, attacking the person.', 'Tanda peringatan: suara meninggi, poin yang sama diulang lebih keras, sarkasme, ejekan, pancingan, terlalu yakin, menyerang orangnya.'),
      T('You are heating up: pause. They are heating up: acknowledge the feeling first. It has become personal: repair the relationship, then return to the decision.', 'Kamu memanas: jeda. Mereka memanas: akui perasaannya dulu. Sudah jadi personal: perbaiki relasinya, lalu kembali ke keputusannya.'))
  ],
  '5.6': [
    S(T('What it is: five ideas', 'Apa itu: lima gagasan'),
      T('A broad field with machine learning as one part; large language models predict the next piece of text; they hallucinate; bias comes in through data, raters and builders; what you type may be stored.', 'Bidang luas dengan machine learning sebagai salah satu bagian; model bahasa besar memprediksi potongan teks berikutnya; mereka berhalusinasi; bias masuk lewat data, penilai, dan pembangun; yang kamu ketik bisa disimpan.'),
      T('It is not a database of facts.', 'Ia bukan basis data fakta.')),
    S(T('Why it’s confidently wrong sometimes', 'Mengapa kadang salah dengan percaya diri'),
      T('It generates plausible text and does not check it against reality unless connected to sources, and even then it can err.', 'Ia menghasilkan teks yang masuk akal dan tidak mengeceknya terhadap kenyataan kecuali terhubung ke sumber, dan bahkan saat itu pun bisa keliru.'),
      T('Plausible isn’t the same as true. Invented citations are the classic failure.', 'Masuk akal tidak sama dengan benar. Kutipan yang dikarang adalah kegagalan klasiknya.')),
    S(T('Tasks, not titles', 'Tugas, bukan jabatan'),
      T('Jobs are bundles of tasks. AI shifts some of them, unevenly, and only occasionally whole jobs.', 'Pekerjaan adalah kumpulan tugas. AI menggeser sebagian, tidak merata, dan hanya sesekali seluruh pekerjaan.'),
      T('Map your target job’s tasks, then invest in judgement and checking.', 'Petakan tugas pekerjaan targetmu, lalu investasikan pada penilaian dan pengecekan.')),
    S(T('A jagged frontier', 'Batas bergerigi'),
      T('Brilliant at one task, quietly wrong at a similar-looking one, and the boundary moves as models improve.', 'Hebat pada satu tugas, diam-diam salah pada tugas yang tampak serupa, dan batasnya bergerak seiring model membaik.'),
      T('You only find the line by testing on work you can judge. Re-test every quarter.', 'Kamu hanya menemukan garisnya dengan menguji pada pekerjaan yang bisa kamu nilai. Uji ulang tiap kuartal.')),
    S(T('Three gates before four rules', 'Tiga gerbang sebelum empat aturan'),
      T('Allowed? Safe to share? Can I check it? If any gate is closed, stop.', 'Diizinkan? Aman dibagikan? Bisa kucek? Jika satu gerbang tertutup, berhenti.'),
      T('Then: invite AI to the table, be the human in the loop, give it a role and context, assume today’s AI is the worst you’ll use.', 'Lalu: undang AI ke meja, jadilah manusia dalam kendali, beri peran dan konteks, anggap AI hari ini yang terburuk yang akan kamu pakai.')),
    S(T('Centaur or cyborg', 'Centaur atau cyborg'),
      T('Centaur: a clear division, you design and judge, AI formats and drafts. Cyborg: continuous weaving, AI suggests, you choose and rewrite, AI critiques, you revise.', 'Centaur: pembagian yang jelas, kamu merancang dan menilai, AI memformat dan membuat draf. Cyborg: jalinan terus-menerus, AI menyarankan, kamu memilih dan menulis ulang, AI mengkritik, kamu merevisi.'),
      T('Start as a centaur on tasks you dislike but can easily check, then experiment.', 'Mulailah sebagai centaur pada tugas yang tidak kamu sukai tetapi mudah dicek, lalu bereksperimen.')),
    S(T('CEK-5: verify anything that matters', 'CEK-5: verifikasi apa pun yang penting'),
      T('Claims, evidence, kesesuaian (fit), bias and blind spots, own it. Run it before submitting, sending or deciding with any AI output.', 'Claims (klaim), evidence (bukti), kesesuaian, bias dan titik buta, own it (miliki). Jalankan sebelum mengumpulkan, mengirim, atau memutuskan dengan keluaran AI apa pun.'),
      T('Whatever you submit or send is yours. The tool is not a co-author you can blame.', 'Apa pun yang kamu kumpulkan atau kirim adalah milikmu. Alat itu bukan rekan penulis yang bisa disalahkan.')),
    S(T('Prompting is clear thinking', 'Prompting adalah berpikir jernih'),
      T('A good request names seven things: goal, role, context, audience, constraints, output format, examples or steps.', 'Permintaan yang baik menyebut tujuh hal: tujuan, peran, konteks, audiens, batasan, format keluaran, contoh atau langkah.'),
      T('Prompting tricks date quickly. Clear thinking about the task does not.', 'Trik prompting cepat usang. Berpikir jernih tentang tugas tidak.')),
    S(T('Responsible use: integrity first', 'Penggunaan bertanggung jawab: integritas dulu'),
      T('Your institution’s and lecturer’s rules decide what’s allowed; if unclear, ask in writing. Keep your version history, notes and drafts as process evidence.', 'Aturan institusi dan dosenmu menentukan apa yang diizinkan; jika tidak jelas, tanyakan secara tertulis. Simpan riwayat versi, catatan, dan drafmu sebagai bukti proses.'),
      T('AI detectors are unreliable and wrongly flag non-native English writers more often. Never use “humaniser” tools to disguise AI text.', 'Detektor AI tidak andal dan lebih sering salah menandai penulis non-penutur asli bahasa Inggris. Jangan pernah memakai alat “humaniser” untuk menyamarkan teks AI.'))
  ]
};

const m5 = REG.modules.find(m => m.num === 5);
Object.keys(DECKS).forEach(n => {
  const l = m5.lessons.find(x => x.n === n); if (!l || !l.readFirst) throw new Error('no readFirst for ' + n);
  const rf = l.readFirst;
  rf.slides = DECKS[n];
  rf.kicker = { en: 'Read first · ' + rf.slides.length + ' slides', id: 'Baca dulu · ' + rf.slides.length + ' slide' };
  console.log(n, rf.slides.length, 'slides');
});
fs.writeFileSync(P, head + JSON.stringify(REG, null, 1) + ';\n');
console.log('written', P);
