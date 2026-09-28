/**
 * THE ROUTE — FIELDWORK (per-module practice instruments)
 * -------------------------------------------------------
 * Three instruments that turn the mid-course modules into practice:
 *   coach — scenario decision drills: authored workplace situations for
 *           Modules 1, 2, 3, 6 and 9 (more as modules are rebuilt); each choice returns feedback written
 *           against that module's frameworks.
 *   promo — the promotion case builder (Module 5): assembles a one-page
 *           case from your win log and your own claims, and lints it
 *           for numbers, witnesses and scope language.
 *   money — Module 8's instruments: savings runway and compound-growth
 *           arithmetic, computed openly with the formula on screen.
 *
 * Honesty contract: scenarios are authored and scripted — they train
 * judgment patterns, not verdicts about you. The money instruments do
 * plain arithmetic on your inputs with stated assumptions; they are
 * illustrations, not financial advice or return promises. Everything
 * stays in this browser (localStorage 'mt_route_field'; the promo
 * builder also reads your win log from 'mt_route_plan').
 */
(function () {
  'use strict';
  var LS = 'mt_route_field';
  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function T(en, id) { return lang() === 'id' ? id : en; }
  function B(p) { return p ? (p[lang()] || p.en) : ''; }
  function store() { try { return JSON.parse(localStorage.getItem(LS) || '{}'); } catch (e) { return {}; } }
  function save(s) { try { localStorage.setItem(LS, JSON.stringify(s)); } catch (e) {} }
  function plan() { try { return JSON.parse(localStorage.getItem('mt_route_plan') || '{}'); } catch (e) { return {}; } }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function fmtRp(n) { return 'Rp ' + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, lang() === 'id' ? '.' : ','); }

  /* ─── scenario sets ─── */
  var SETS = [
    { id: 'crossroads', mod: '1', title: { en: 'The first crossroads', id: 'Persimpangan pertama' },
      brief: { en: 'Your first year after probation: a favour that tests a red line, an offer that arrives mid-plan, and a decision gate after a quiet quarter. Three moments, one architecture.', id: 'Tahun pertamamu setelah masa percobaan: bantuan yang menguji garis merah, tawaran yang datang di tengah rencana, dan gerbang keputusan setelah kuartal yang sepi. Tiga momen, satu arsitektur.' },
      rounds: [
        { say: { en: 'Friday, 16.40. A senior colleague from another unit asks you to raise a customer’s income figure “a little” so a loan file makes this month’s target. The updated payslip “will come later”.', id: 'Jumat, 16.40. Rekan senior dari unit lain memintamu menaikkan angka penghasilan nasabah “sedikit” agar berkas kredit mengejar target bulan ini. Slip gaji terbarunya “menyusul”.' },
          moves: [
            { best: true, t: { en: '“I can’t change the figure without the document — if the new slip can be sent now, I’ll process it today.”', id: '“Saya tidak bisa mengubah angkanya tanpa dokumen — kalau slip terbarunya bisa dikirim sekarang, saya proses hari ini.”' },
              fb: { en: 'A clear no, one reason, and the legitimate route — the red-line sentence from Lesson 1.3. It ends the negotiation politely and keeps the work moving.', id: 'Tidak yang jelas, satu alasan, dan jalur yang sah — kalimat garis merah dari Pelajaran 1.3. Ia mengakhiri negosiasi dengan sopan dan menjaga pekerjaan tetap berjalan.' } },
            { t: { en: 'Do it this once — the customer is good and the colleague is senior.', id: 'Lakukan sekali ini — nasabahnya bagus dan rekannya senior.' },
              fb: { en: 'This is exactly the test red lines exist for: small, urgent, from someone senior. “Once” becomes the precedent, and your name is on the entry.', id: 'Inilah ujian yang menjadi alasan garis merah ada: kecil, mendesak, dari seseorang yang senior. “Sekali” menjadi preseden, dan namamu ada di entrinya.' } },
            { t: { en: 'Explain at length why falsifying data is against banking regulation.', id: 'Jelaskan panjang lebar mengapa memalsukan data melanggar regulasi perbankan.' },
              fb: { en: 'Right in substance, costly in form: a lecture to a senior invites argument and resentment. The short sentence with an offer does the same work.', id: 'Benar secara isi, mahal secara bentuk: ceramah kepada senior mengundang perdebatan dan sakit hati. Kalimat singkat dengan tawaran melakukan kerja yang sama.' } }
          ] },
        { say: { en: 'Month seven. A recruiter offers a role at a fintech paying 30% more. Your architecture’s next gate is credit analysis, which this role would not build. They want an answer by tomorrow.', id: 'Bulan ketujuh. Seorang rekruter menawarkan peran di fintech dengan bayaran 30% lebih. Gerbang berikutnya di arsitekturmu adalah analisis kredit, yang tidak dibangun peran ini. Mereka ingin jawaban besok.' },
          moves: [
            { best: true, t: { en: 'Thank them, ask for a week, and run a written mini-gate: yield, distance to the gate, what the offer builds, reversibility, your bond.', id: 'Berterima kasih, minta waktu seminggu, dan jalankan gerbang mini tertulis: hasil, jarak ke gerbang, apa yang dibangun tawaran, kemampuan dibalik, ikatan dinasmu.' },
              fb: { en: 'An offer above your threshold is a tripwire, not a decision. Most genuine offers can wait a week; one that cannot is telling you something.', id: 'Tawaran di atas ambangmu adalah pemicu, bukan keputusan. Kebanyakan tawaran sungguhan bisa menunggu seminggu; yang tidak bisa sedang memberitahumu sesuatu.' } },
            { t: { en: 'Accept tonight — 30% is too good to lose.', id: 'Terima malam ini — 30% terlalu bagus untuk dilewatkan.' },
              fb: { en: 'The raise may be right, but deciding in a day skips the gate it should have triggered — including the bond you would repay and the gate this role does not build.', id: 'Kenaikannya mungkin tepat, tetapi memutuskan dalam sehari melewatkan gerbang yang seharusnya dipicunya — termasuk ikatan dinas yang harus kamu bayar dan gerbang yang tak dibangun peran ini.' } },
            { t: { en: 'Decline immediately — you have a plan.', id: 'Tolak segera — kamu punya rencana.' },
              fb: { en: 'Loyal to the plan, but a plan is revised by evidence; the offer is market data your gate review should see. Declining unread wastes the information.', id: 'Setia pada rencana, tetapi rencana direvisi oleh bukti; tawaran ini data pasar yang harus dilihat tinjauan gerbangmu. Menolak tanpa membacanya membuang informasi.' } }
          ] },
        { say: { en: 'Your annual gate arrives after a quiet quarter: three empty Fridays, yield audit 4 of 10, the next gate still a year away. Your manager is supportive but busy.', id: 'Gerbang tahunanmu tiba setelah kuartal yang sepi: tiga Jumat kosong, audit hasil 4 dari 10, gerbang berikutnya masih setahun lagi. Manajermu mendukung tetapi sibuk.' },
          moves: [
            { best: true, t: { en: '“Stay and shape”: pick the lowest yield signal, propose one concrete change to your manager this week, and set a tripwire for the next quarter.', id: '“Bertahan dan membentuk”: pilih sinyal hasil terendah, usulkan satu perubahan konkret ke manajermu minggu ini, dan pasang pemicu untuk kuartal berikutnya.' },
              fb: { en: 'A score of 4 means the role can be engineered. Raising yield from inside is Lesson 1.1’s first move — and a skill worth showing before any exit.', id: 'Nilai 4 berarti peran bisa direkayasa. Menaikkan hasil dari dalam adalah langkah pertama Pelajaran 1.1 — dan keterampilan yang layak ditunjukkan sebelum keluar.' } },
            { t: { en: 'Start applying elsewhere — the quarter proved the role is a dead end.', id: 'Mulai melamar di tempat lain — kuartal ini membuktikan perannya jalan buntu.' },
              fb: { en: 'One quiet quarter at 4 of 10 is a signal to engineer, not a verdict to leave. “Move out” fits two low-yield periods with no internal path.', id: 'Satu kuartal sepi di 4 dari 10 adalah sinyal untuk merekayasa, bukan putusan untuk keluar. “Pindah keluar” cocok untuk dua periode berhasil rendah tanpa jalur internal.' } },
            { t: { en: 'Skip the gate this year — things are busy and nothing is really wrong.', id: 'Lewati gerbang tahun ini — sedang sibuk dan tak ada yang benar-benar salah.' },
              fb: { en: 'Skipping the gate is the only failure the architecture recognises; it hands the decision to status-quo bias.', id: 'Melewatkan gerbang adalah satu-satunya kegagalan yang diakui arsitektur; ia menyerahkan keputusan kepada bias status quo.' } }
          ] } ] },
    { id: 'up', mod: '3', title: { en: 'Managing up — the difficult week', id: 'Managing up — pekan yang sulit' },
      brief: { en: 'Your manager is overloaded, your project is slipping, and your next one-on-one is tomorrow. Three moments, one relationship.', id: 'Manajermu kelebihan beban, proyekmu tergelincir, dan one-on-one berikutnya besok. Tiga momen, satu hubungan.' },
      rounds: [
        { say: { en: 'Your deadline will slip by four days. Your manager does not know yet. It is Tuesday; the deliverable is due Friday.', id: 'Tenggatmu akan mundur empat hari. Manajermu belum tahu. Ini Selasa; hasil kerja jatuh tempo Jumat.' },
          moves: [
            { best: true, t: { en: 'Flag it today: the slip, the cause, your recovery plan, and what you need.', id: 'Sampaikan hari ini: kemunduran, sebab, rencana pemulihanmu, dan yang kamu butuhkan.' },
              fb: { en: 'Early flags with a plan attached are how trust survives bad news. Lesson 3.1: managers can absorb slips; they cannot absorb surprises.', id: 'Tanda dini dengan rencana terlampir adalah cara kepercayaan bertahan dari kabar buruk. Pelajaran 3.1: manajer bisa menyerap kemunduran; mereka tak bisa menyerap kejutan.' } },
            { t: { en: 'Work nights to try to close the gap quietly first.', id: 'Lembur diam-diam dulu untuk mencoba menutup celah.' },
              fb: { en: 'A coin-flip: if you fail, the surprise lands Friday — the worst possible day. Heroics are not a communication strategy.', id: 'Lempar koin: kalau gagal, kejutan mendarat Jumat — hari terburuk. Kepahlawanan bukan strategi komunikasi.' } },
            { t: { en: 'Mention it casually in tomorrow’s one-on-one among other updates.', id: 'Sebut sambil lalu di one-on-one besok di antara pembaruan lain.' },
              fb: { en: 'Burying a slip in a status list transfers your anxiety to their inbox. Material news gets its own sentence, its own channel, today.', id: 'Mengubur kemunduran dalam daftar status memindahkan cemasmu ke kotak masuk mereka. Kabar penting dapat kalimatnya sendiri, salurannya sendiri, hari ini.' } }
          ] },
        { say: { en: 'In the one-on-one, your manager is distracted and checking messages. You have three items; the first is the slipped deadline.', id: 'Di one-on-one, manajermu terdistraksi dan mengecek pesan. Kamu punya tiga agenda; yang pertama tenggat yang mundur.' },
          moves: [
            { best: true, t: { en: '“I have three items; the first needs a decision from you. Two minutes?” — then lead with the decision needed.', id: '“Aku punya tiga agenda; yang pertama butuh keputusanmu. Dua menit?” — lalu mulai dari keputusan yang dibutuhkan.' },
              fb: { en: 'You priced the meeting in their currency: decisions, not narration. Lesson 3.1’s agenda rule — headline first, decision explicit.', id: 'Kamu menghargai rapat dalam mata uang mereka: keputusan, bukan narasi. Aturan agenda Pelajaran 3.1 — inti dulu, keputusan eksplisit.' } },
            { t: { en: 'Walk through the project history so the slip has full context.', id: 'Uraikan riwayat proyek agar kemunduran punya konteks penuh.' },
              fb: { en: 'Context before headline loses a distracted listener in ninety seconds. They needed the ask; they got a chronicle.', id: 'Konteks sebelum inti kehilangan pendengar terdistraksi dalam sembilan puluh detik. Mereka butuh permintaan; mereka dapat kronik.' } },
            { t: { en: 'Reschedule — this deserves their full attention.', id: 'Jadwalkan ulang — ini layak dapat perhatian penuh mereka.' },
              fb: { en: 'Sometimes right, but a time-boxed decision request works even with divided attention — and your deadline is Friday. Delay compounds the first mistake.', id: 'Kadang benar, tapi permintaan keputusan berbatas waktu berhasil bahkan dengan perhatian terbelah — dan tenggatmu Jumat. Menunda melipatgandakan kesalahan pertama.' } }
          ] },
        { say: { en: 'Your manager approves the recovery plan, then adds a new request that would sink it. Saying yes is easy; delivering is not.', id: 'Manajermu menyetujui rencana pemulihan, lalu menambah permintaan baru yang akan menenggelamkannya. Bilang ya itu mudah; menunaikannya tidak.' },
          moves: [
            { best: true, t: { en: '“Happy to — which of the two should come first? With current capacity I can’t land both by Friday.”', id: '“Siap — mana dari keduanya yang harus lebih dulu? Dengan kapasitas sekarang aku tak bisa mendaratkan keduanya sebelum Jumat.”' },
              fb: { en: 'A prioritisation question, not a refusal: it keeps the decision (and the trade-off) with the person who owns it. This is the capacity language of Lesson 2.4 applied upward.', id: 'Pertanyaan prioritas, bukan penolakan: keputusan (dan trade-off-nya) tetap pada pemiliknya. Ini bahasa kapasitas Pelajaran 2.4 diterapkan ke atas.' } },
            { t: { en: 'Say yes — you’ll find a way.', id: 'Bilang ya — nanti dicari jalannya.' },
              fb: { en: 'An unpriced yes converts today’s goodwill into Friday’s broken promise. You just re-created round one.', id: 'Ya tanpa harga mengubah niat baik hari ini menjadi janji patah hari Jumat. Kamu baru saja mengulang ronde satu.' } },
            { t: { en: 'Explain you are overloaded and the request is unreasonable.', id: 'Jelaskan kamu kelebihan beban dan permintaannya tak masuk akal.' },
              fb: { en: 'True, perhaps — but framed as a complaint it makes your capacity their problem to argue with, instead of a constraint to plan around.', id: 'Mungkin benar — tapi dibingkai keluhan, kapasitasmu jadi bahan debat mereka, bukan batasan untuk direncanakan.' } }
          ] } ] },
    { id: 'down', mod: '3', title: { en: 'Leading before the title', id: 'Memimpin sebelum punya jabatan' },
      brief: { en: 'An intern has been assigned to you for three months. You have no title and a full desk.', id: 'Seorang anak magang ditugaskan kepadamu selama tiga bulan. Kamu tak punya jabatan dan mejamu penuh.' },
      rounds: [
        { say: { en: 'Monday, 08.30. The intern arrives. You have two memos due Wednesday.', id: 'Senin, 08.30. Anak magang datang. Kamu punya dua memo jatuh tempo Rabu.' },
          moves: [
            { best: true, t: { en: 'Fifteen minutes: one real task on five closed files, “tanya saya kapan saja”, a check-in at 16.30 — then back to your memos.', id: 'Lima belas menit: satu tugas nyata di lima berkas selesai, “tanya saya kapan saja”, cek pukul 16.30 — lalu kembali ke memomu.' },
              fb: { en: 'Lesson 3.4’s first week in miniature: real work, a person to ask with explicit permission, a check-in. Fifteen minutes now saves days of confusion later.', id: 'Minggu pertama Pelajaran 3.4 dalam bentuk kecil: pekerjaan nyata, orang untuk bertanya dengan izin eksplisit, waktu cek. Lima belas menit sekarang menghemat berhari-hari kebingungan nanti.' } },
            { t: { en: 'Give them the policy manual to read until Wednesday, when you will have time.', id: 'Beri buku kebijakan untuk dibaca sampai Rabu, saat kamu punya waktu.' },
              fb: { en: 'Three days of reading teaches them that they are in the way. Busywork is the most common first-week mistake, and the hardest to undo.', id: 'Tiga hari membaca mengajari mereka bahwa mereka menghalangi. Kerja sibuk adalah kesalahan minggu pertama yang paling umum, dan paling sulit dibatalkan.' } },
            { t: { en: 'Hand them one of your live memos to draft so you can finish faster.', id: 'Serahkan salah satu memo berjalanmu untuk dirancang agar kamu cepat selesai.' },
              fb: { en: 'Real work, but at the wrong rung: a live credit memo on day one is level 5 for someone at level 1. Start with bounded, low-risk work and move up.', id: 'Pekerjaan nyata, tetapi di anak tangga yang salah: memo kredit berjalan di hari pertama adalah level 5 untuk orang di level 1. Mulai dengan pekerjaan terbatas berisiko rendah lalu naik.' } }
          ] },
        { say: { en: 'Thursday. Three of the five files they marked “lengkap” have an expired ID copy.', id: 'Kamis. Tiga dari lima berkas yang ditandai “lengkap” ternyata fotokopi KTP-nya kedaluwarsa.' },
          moves: [
            { best: true, t: { en: 'Privately: the three files, the impact at committee, check the next file together, and ask what in the checklist was unclear.', id: 'Secara pribadi: tiga berkas itu, dampaknya di komite, cek berkas berikutnya bersama, dan tanyakan bagian mana di daftar periksa yang tidak jelas.' },
              fb: { en: 'Private, specific, one thing, shown not told — and a question that may reveal the checklist is the problem. They leave knowing how to fix it and that asking is safe.', id: 'Pribadi, spesifik, satu hal, ditunjukkan bukan hanya dikatakan — dan pertanyaan yang mungkin mengungkap daftar periksanyalah masalahnya. Mereka pergi dengan tahu cara memperbaikinya dan bahwa bertanya itu aman.' } },
            { t: { en: 'Fix the three files yourself tonight and say nothing.', id: 'Perbaiki ketiga berkas sendiri malam ini dan diam saja.' },
              fb: { en: 'Kind in intention, costly in effect: they will make the same mistake next week, and you will redo it again. Silence is not kindness to a learner.', id: 'Baik niatnya, mahal akibatnya: mereka akan membuat kesalahan yang sama minggu depan, dan kamu akan mengerjakan ulang lagi. Diam bukan kebaikan bagi orang yang sedang belajar.' } },
            { t: { en: 'Mention it in the team meeting as an example of what to avoid.', id: 'Sebutkan di rapat tim sebagai contoh yang harus dihindari.' },
              fb: { en: 'Public correction of a junior teaches the whole team that mistakes are dangerous to admit. Feedback down is always private.', id: 'Koreksi publik terhadap junior mengajari seluruh tim bahwa mengakui kesalahan itu berbahaya. Umpan balik ke bawah selalu pribadi.' } }
          ] },
        { say: { en: 'A file the intern checked reaches committee with the wrong certificate. Your manager is copied on a sharp note.', id: 'Berkas yang diperiksa anak magang sampai ke komite dengan sertifikat yang salah. Manajermu ditembuskan catatan tajam.' },
          moves: [
            { best: true, t: { en: '“Pak, berkas itu saya yang awasi. Saya perbaiki hari ini dan tambahkan pencocokan sertifikat ke daftar periksa.” Then coach the intern privately.', id: '“Pak, berkas itu saya yang awasi. Saya perbaiki hari ini dan tambahkan pencocokan sertifikat ke daftar periksa.” Lalu bimbing anak magangnya secara pribadi.' },
              fb: { en: 'Blame up, credit down: you answer for the supervision, report the same day, fix the process. Managers read this as readiness to lead.', id: 'Kesalahan ke atas, pujian ke bawah: kamu mempertanggungjawabkan pengawasannya, melapor di hari yang sama, memperbaiki prosesnya. Manajer membacanya sebagai kesiapan memimpin.' } },
            { t: { en: '“Itu yang cek anak magang, Pak.”', id: '“Itu yang cek anak magang, Pak.”' },
              fb: { en: 'Technically true and professionally costly: you supervised the work, so the supervision is what you answer for. Passing blame down reads as not ready to lead.', id: 'Secara teknis benar dan secara profesional mahal: kamu mengawasi pekerjaannya, jadi pengawasannya yang kamu pertanggungjawabkan. Melempar kesalahan ke bawah terbaca belum siap memimpin.' } },
            { t: { en: 'Fix the file quietly and hope the note is forgotten.', id: 'Perbaiki berkas diam-diam dan berharap catatannya dilupakan.' },
              fb: { en: 'The note was copied to your manager; silence now looks like hiding. Same day, four parts, with the process fix — Lesson 3.1.', id: 'Catatannya ditembuskan ke manajermu; diam sekarang terlihat seperti menyembunyikan. Hari yang sama, empat bagian, dengan perbaikan proses — Pelajaran 3.1.' } }
          ] } ] },
    { id: 'feedback', mod: '2', title: { en: 'The feedback you did not want', id: 'Umpan balik yang tak kamu inginkan' },
      brief: { en: 'A peer review lands: “strong output, but hard to collaborate with.” It stings, it is vague, and your review cycle closes this month.', id: 'Tinjauan rekan mendarat: “output kuat, tapi sulit diajak kolaborasi.” Perih, samar, dan siklus reviumu tutup bulan ini.' },
      rounds: [
        { say: { en: 'Your first reaction, an hour after reading it.', id: 'Reaksi pertamamu, sejam setelah membacanya.' },
          moves: [
            { best: true, t: { en: 'Write down the sting, then draft one question that would make the feedback specific and testable.', id: 'Tulis perihnya, lalu susun satu pertanyaan yang membuat umpan balik itu spesifik dan teruji.' },
              fb: { en: 'Lesson 2.3’s sequence: feel it privately, then convert vague signal into a checkable claim. “Hard to collaborate with” is data about someone’s experience — go find the behaviour.', id: 'Urutan Pelajaran 2.3: rasakan secara pribadi, lalu ubah sinyal samar jadi klaim teruji. “Sulit diajak kolaborasi” adalah data pengalaman seseorang — temukan perilakunya.' } },
            { t: { en: 'List the collaborations that went well as counter-evidence.', id: 'Daftar kolaborasi yang berjalan baik sebagai bukti tandingan.' },
              fb: { en: 'You are building a defence case against information. The reviewer described their experience; disproving it to yourself changes nothing they will write next year.', id: 'Kamu menyusun pembelaan terhadap informasi. Peninjau menggambarkan pengalaman mereka; membantahnya untuk dirimu tak mengubah apa pun yang mereka tulis tahun depan.' } },
            { t: { en: 'Ask around to figure out who wrote it.', id: 'Tanya-tanya untuk mencari tahu siapa penulisnya.' },
              fb: { en: 'Unmasking the reviewer poisons the channel — next cycle nobody writes anything true. The identity is the least useful fact in the review.', id: 'Membongkar peninjau meracuni saluran — siklus berikutnya tak ada yang menulis jujur. Identitas adalah fakta paling tak berguna dalam tinjauan itu.' } }
          ] },
        { say: { en: 'You decide to ask your manager about it in your next one-on-one.', id: 'Kamu memutuskan menanyakannya ke manajermu di one-on-one berikutnya.' },
          moves: [
            { best: true, t: { en: '“Where have you seen me make collaboration harder than it needed to be? One example would help me.”', id: '“Di mana kamu melihatku membuat kolaborasi lebih sulit dari seharusnya? Satu contoh akan membantuku.”' },
              fb: { en: 'A behavioural question with a low defensive wall: you assumed the feedback is partly true and asked for the scene, not the verdict. Managers answer this one honestly.', id: 'Pertanyaan perilaku dengan tembok defensif rendah: kamu mengandaikan umpan balik itu sebagian benar dan meminta adegannya, bukan vonisnya. Manajer menjawab jujur untuk yang satu ini.' } },
            { t: { en: '“Do you think I’m hard to collaborate with?”', id: '“Menurutmu aku sulit diajak kolaborasi?”' },
              fb: { en: 'A yes/no verdict question invites a soft lie. You will hear “no, you’re fine” and learn nothing.', id: 'Pertanyaan vonis ya/tidak mengundang dusta halus. Kamu akan dengar “tidak, kamu baik saja” dan tak belajar apa pun.' } },
            { t: { en: 'Ask them to disregard the comment given your delivery record.', id: 'Minta mereka mengabaikan komentar itu mengingat rekam penunaianmu.' },
              fb: { en: 'You just demonstrated the feedback. Asking to suppress signal because output is strong is what “hard to collaborate with” looks like from the inside.', id: 'Kamu baru saja memperagakan umpan baliknya. Meminta sinyal ditekan karena output kuat adalah wujud “sulit diajak kolaborasi” dari dalam.' } }
          ] },
        { say: { en: 'The example arrives: in cross-team threads you close discussions fast, and quieter teammates stop contributing. What do you change?', id: 'Contohnya tiba: di utas lintas tim kamu menutup diskusi terlalu cepat, dan rekan yang lebih pendiam berhenti berkontribusi. Apa yang kamu ubah?' },
          moves: [
            { best: true, t: { en: 'Pick one observable habit — wait for two replies before concluding — and tell one teammate you are working on it.', id: 'Pilih satu kebiasaan teramati — tunggu dua balasan sebelum menyimpulkan — dan beri tahu satu rekan bahwa kamu sedang melatihnya.' },
              fb: { en: 'Small, checkable, and witnessed: the shape of change that actually shows up in next year’s review. Announcing it recruits an accountability partner for free.', id: 'Kecil, teruji, dan bersaksi: bentuk perubahan yang benar-benar muncul di reviu tahun depan. Mengumumkannya merekrut mitra akuntabilitas gratis.' } },
            { t: { en: 'Resolve to be more careful in general.', id: 'Bertekad lebih hati-hati secara umum.' },
              fb: { en: 'General resolutions dissolve by Thursday. Feedback converts to change only through a named, observable behaviour.', id: 'Tekad umum larut sebelum Kamis. Umpan balik menjadi perubahan hanya lewat perilaku bernama dan teramati.' } },
            { t: { en: 'Write a long message to the team explaining your communication style.', id: 'Tulis pesan panjang ke tim menjelaskan gaya komunikasimu.' },
              fb: { en: 'A style memo asks the team to adapt to you — the exact opposite of the signal. The burden of change sits with the person who received the feedback.', id: 'Memo gaya meminta tim beradaptasi kepadamu — kebalikan persis dari sinyalnya. Beban perubahan ada pada penerima umpan balik.' } }
          ] } ] },
    { id: 'overload', mod: '2', title: { en: 'The week that does not fit', id: 'Minggu yang tak muat' },
      brief: { en: 'Month-end in a credit unit, two colleagues on leave, and three memos already promised for Thursday.', id: 'Akhir bulan di unit kredit, dua rekan cuti, dan tiga memo sudah dijanjikan untuk Kamis.' },
      rounds: [
        { say: { en: 'Wednesday, 15.00. Your manager asks for an urgent memo by Thursday noon. Thursday is already full.', id: 'Rabu, 15.00. Manajermu meminta memo mendesak paling lambat Kamis siang. Kamis sudah penuh.' },
          moves: [
            { best: true, t: { en: '“Bisa, Pak. Supaya ini selesai Kamis siang, memo Toko Ananda saya geser ke Jumat pagi — atau Bapak lebih pilih yang ini Jumat?”', id: '“Bisa, Pak. Supaya ini selesai Kamis siang, memo Toko Ananda saya geser ke Jumat pagi — atau Bapak lebih pilih yang ini Jumat?”' },
              fb: { en: 'The trade-off from Lesson 2.4: willing, specific about what moves, and the owner of the priorities chooses with full information. Thirty seconds that protect quality and sleep.', id: 'Pertukaran dari Pelajaran 2.4: bersedia, spesifik soal apa yang bergeser, dan pemilik prioritas memilih dengan informasi lengkap. Tiga puluh detik yang melindungi kualitas dan tidur.' } },
            { t: { en: '“Siap, Pak.” — and plan to finish all three tonight.', id: '“Siap, Pak.” — dan berencana menyelesaikan ketiganya malam ini.' },
              fb: { en: 'The silent yes. It looks committed and usually produces the outcome that hurts most in credit work: an error in a memo written at 01.00. Your manager would rather have been asked.', id: 'Ya yang diam. Tampak berkomitmen dan biasanya menghasilkan akibat yang paling menyakitkan di pekerjaan kredit: kesalahan di memo yang ditulis pukul 01.00. Manajermu lebih suka ditanya.' } },
            { t: { en: '“Maaf, Pak, saya sudah penuh sampai Jumat.”', id: '“Maaf, Pak, saya sudah penuh sampai Jumat.”' },
              fb: { en: 'True, but it leaves your manager to solve the problem blind. Offer the choice instead of the refusal — the information is the same, the effect is opposite.', id: 'Benar, tetapi membiarkan manajermu memecahkan masalah tanpa melihat. Tawarkan pilihan, bukan penolakan — informasinya sama, efeknya berlawanan.' } }
          ] },
        { say: { en: '22.10. A message from your manager: “Nad, angka NPL cabang Kudus bulan lalu berapa ya?”', id: '22.10. Pesan dari manajermu: “Nad, angka NPL cabang Kudus bulan lalu berapa ya?”' },
          moves: [
            { best: true, t: { en: 'Reply briefly in the morning with the number — and at your next one-on-one ask once whether night messages need a night answer.', id: 'Balas singkat di pagi hari dengan angkanya — dan di one-on-one berikutnya tanyakan sekali apakah pesan malam perlu dijawab malam itu.' },
              fb: { en: 'Most night messages are sent when the sender remembers, not when they need the answer. Asking once turns a guess into an agreed rule — and most managers say the morning is fine.', id: 'Sebagian besar pesan malam dikirim saat pengirim teringat, bukan saat ia butuh jawabannya. Bertanya sekali mengubah tebakan menjadi aturan yang disepakati — dan kebanyakan manajer bilang pagi cukup.' } },
            { t: { en: 'Open the laptop, pull the report and answer within ten minutes.', id: 'Buka laptop, tarik laporannya, dan jawab dalam sepuluh menit.' },
              fb: { en: 'Occasionally fine, but done every time it teaches everyone that your evenings are open — and your evening boundary disappears without anyone deciding it should.', id: 'Sesekali tak masalah, tetapi jika dilakukan setiap kali ia mengajari semua orang bahwa malammu terbuka — dan batas malammu hilang tanpa ada yang memutuskannya.' } },
            { t: { en: 'Leave it unread until Monday.', id: 'Biarkan belum dibaca sampai Senin.' },
              fb: { en: 'A boundary without an agreement can read as unresponsive. Reply in working hours, and agree the rule explicitly.', id: 'Batas tanpa kesepakatan bisa terbaca tidak responsif. Balas di jam kerja, dan sepakati aturannya secara eksplisit.' } }
          ] },
        { say: { en: 'Third week of the long month-end: Sunday dread, you snapped at a colleague, and you missed an obvious collateral mismatch.', id: 'Minggu ketiga akhir bulan yang panjang: cemas Minggu malam, kamu membentak rekan, dan melewatkan ketidakcocokan agunan yang jelas.' },
          moves: [
            { best: true, t: { en: 'Name it, bring your committed list with estimates to your manager on Monday, and ask what can move; restore your off-switch.', id: 'Namai, bawa daftar komitmen dengan perkiraan ke manajermu hari Senin, dan tanyakan apa yang bisa bergeser; pulihkan sakelarmu.' },
              fb: { en: 'Three early signs across exhaustion, cynicism and efficacy. Name it, change one input, tell one person — with a list, the conversation is about load, not about you.', id: 'Tiga tanda awal di kelelahan, sinisme, dan efektivitas. Namai, ubah satu masukan, ceritakan ke satu orang — dengan daftar, percakapannya tentang beban, bukan tentang dirimu.' } },
            { t: { en: 'Push through — it will end soon and complaining looks weak.', id: 'Paksakan — sebentar lagi selesai dan mengeluh tampak lemah.' },
              fb: { en: 'The mistake already happened; the next one is more likely. Asking early is a professional skill, and a named load problem with a proposal is not a complaint.', id: 'Kesalahannya sudah terjadi; yang berikutnya lebih mungkin. Bertanya lebih awal adalah keterampilan profesional, dan masalah beban yang dinamai dengan usulan bukanlah keluhan.' } },
            { t: { en: 'Start applying for other jobs this weekend.', id: 'Mulai melamar pekerjaan lain akhir pekan ini.' },
              fb: { en: 'A bad month is a tripwire input, not a gate verdict. Fix the load first; if the pattern repeats, take it to your next decision gate with the evidence.', id: 'Bulan yang buruk adalah masukan pemicu, bukan putusan gerbang. Perbaiki bebannya dulu; jika polanya berulang, bawa ke gerbang keputusan berikutnya dengan buktinya.' } }
          ] } ] },
    { id: 'sponsor', mod: '6', title: { en: 'Earning the sponsor', id: 'Mendapatkan sponsor' },
      brief: { en: 'A senior director praised your work once and knows your name. A stretch project is being staffed next month. Sponsorship is earned in exactly these windows.', id: 'Seorang direktur senior pernah memuji kerjamu dan tahu namamu. Proyek menantang akan diisi bulan depan. Sponsorship diperoleh persis di jendela seperti ini.' },
      rounds: [
        { say: { en: 'Your opening move with the director.', id: 'Langkah pembukamu dengan sang direktur.' },
          moves: [
            { best: true, t: { en: 'Send a two-line note: the result you shipped since you last spoke, with its number — no ask attached.', id: 'Kirim catatan dua baris: hasil yang kamu tunaikan sejak terakhir bicara, dengan angkanya — tanpa permintaan.' },
              fb: { en: 'Sponsors spend reputation, so they invest in evidence. A no-ask proof note keeps you visible as an asset, not a supplicant — Lesson 6.3’s deposit before the withdrawal.', id: 'Sponsor membelanjakan reputasi, jadi mereka berinvestasi pada bukti. Catatan bukti tanpa permintaan menjagamu terlihat sebagai aset, bukan pemohon — setoran sebelum penarikan ala Pelajaran 6.3.' } },
            { t: { en: 'Ask them to be your mentor.', id: 'Minta mereka menjadi mentormu.' },
              fb: { en: 'Wrong instrument: mentors advise you, sponsors risk their name on you (Lesson 6.1). A mentorship ask converts a potential sponsor into an occasional adviser.', id: 'Instrumen salah: mentor menasihatimu, sponsor mempertaruhkan nama untukmu (Pelajaran 6.1). Permintaan mentorship mengubah calon sponsor jadi penasihat sesekali.' } },
            { t: { en: 'Ask directly to be put on the stretch project.', id: 'Minta langsung ditempatkan di proyek menantang itu.' },
              fb: { en: 'The ask before the evidence forces a judgment call on thin data. If they hesitate, you have spent the relationship’s one awkward moment on the wrong week.', id: 'Permintaan sebelum bukti memaksa penilaian di atas data tipis. Kalau mereka ragu, kamu telah menghabiskan satu momen canggung hubungan itu di pekan yang salah.' } }
          ] },
        { say: { en: 'The director replies: “Impressive. What are you aiming for?”', id: 'Direktur membalas: “Mengesankan. Kamu mengincar apa?”' },
          moves: [
            { best: true, t: { en: 'Name the project and the specific capability you would bring — one sentence each.', id: 'Sebut proyeknya dan kapabilitas spesifik yang kamu bawa — masing-masing satu kalimat.' },
              fb: { en: 'The window opened and you walked through it with a concrete, riskable claim. Sponsors need to know exactly what to say in the staffing room — you just wrote their line for them.', id: 'Jendela terbuka dan kamu melewatinya dengan klaim konkret yang layak dipertaruhkan. Sponsor perlu tahu persis apa yang diucapkan di ruang penempatan — kamu baru saja menuliskan kalimat mereka.' } },
            { t: { en: 'Stay modest: “just trying to do good work.”', id: 'Tetap rendah hati: “hanya berusaha bekerja baik.”' },
              fb: { en: 'Modesty at the ask moment reads as absence of direction. They asked because they were ready to help; vagueness closes the window politely.', id: 'Rendah hati di momen permintaan terbaca sebagai ketiadaan arah. Mereka bertanya karena siap membantu; kesamaran menutup jendela dengan sopan.' } },
            { t: { en: 'List three or four things you might want next.', id: 'Daftar tiga-empat hal yang mungkin kamu mau berikutnya.' },
              fb: { en: 'A menu delegates your career decision to someone with ninety seconds of attention. One target, one capability — sponsorable requests are singular.', id: 'Sebuah menu mendelegasikan keputusan kariermu ke orang dengan sembilan puluh detik perhatian. Satu target, satu kapabilitas — permintaan yang bisa disponsori itu tunggal.' } }
          ] },
        { say: { en: 'You get the project — through their word, you learn later. The first month goes well. What closes the loop?', id: 'Kamu mendapat proyeknya — lewat kata mereka, kamu tahu belakangan. Bulan pertama berjalan baik. Apa yang menutup putaran?' },
          moves: [
            { best: true, t: { en: 'A short note with the first measurable result: their risk, repaid with evidence they can quote onward.', id: 'Catatan singkat dengan hasil terukur pertama: risiko mereka, dibayar dengan bukti yang bisa mereka kutip ke atas.' },
              fb: { en: 'Sponsorship is a loop, not a favour: they spent reputation, the result restores it with interest, and the next door opens without your asking. This is Lesson 6.3’s full cycle.', id: 'Sponsorship adalah putaran, bukan bantuan: mereka membelanjakan reputasi, hasil mengembalikannya berbunga, dan pintu berikutnya terbuka tanpa kamu minta. Ini siklus penuh Pelajaran 6.3.' } },
            { t: { en: 'A thank-you note for the opportunity.', id: 'Ucapan terima kasih atas kesempatannya.' },
              fb: { en: 'Kind, and incomplete — gratitude without a result gives them nothing to defend their bet with. Thank them with evidence.', id: 'Baik, dan tak lengkap — terima kasih tanpa hasil tak memberi mereka apa pun untuk membela taruhannya. Berterimakasihlah dengan bukti.' } },
            { t: { en: 'Nothing yet — better to report when the whole project lands.', id: 'Belum apa-apa — lebih baik lapor saat seluruh proyek rampung.' },
              fb: { en: 'Six silent months is long enough for a sponsor to wonder if the bet was good. Early proof protects them in every hallway conversation between now and the end.', id: 'Enam bulan hening cukup lama bagi sponsor untuk meragukan taruhannya. Bukti dini melindungi mereka di tiap obrolan lorong dari sekarang sampai akhir.' } }
          ] } ] },
    { id: 'presence', mod: '9', title: { en: 'The executive summary', id: 'Ringkasan eksekutif' },
      brief: { en: 'You have eight minutes on a leadership call to present a problem in your area and get a decision. Presence is structure under pressure.', id: 'Kamu punya delapan menit di rapat pimpinan untuk memaparkan masalah di areamu dan mendapat keputusan. Presence adalah struktur di bawah tekanan.' },
      rounds: [
        { say: { en: 'How do you open?', id: 'Bagaimana kamu membuka?' },
          moves: [
            { best: true, t: { en: '“We need a decision on X today. Two options; I recommend B. Here is why in three points.”', id: '“Kita butuh keputusan tentang X hari ini. Dua opsi; rekomendasiku B. Ini alasannya dalam tiga poin.”' },
              fb: { en: 'Answer first, reasoning second — the executive structure from Lesson 9.1. The room now listens to evaluate, not to decode where you are going.', id: 'Jawaban dulu, penalaran kedua — struktur eksekutif Pelajaran 9.1. Ruangan kini mendengar untuk menilai, bukan menerka arahmu.' } },
            { t: { en: 'Open with background so everyone shares context.', id: 'Buka dengan latar agar semua berbagi konteks.' },
              fb: { en: 'Background-first burns your best minutes on what the room half-knows. In executive settings, context is served on request, not by default.', id: 'Latar-dulu membakar menit terbaikmu untuk hal yang separuh diketahui ruangan. Di forum eksekutif, konteks disajikan saat diminta, bukan bawaan.' } },
            { t: { en: 'Walk through your analysis chronologically to show the work.', id: 'Uraikan analisismu kronologis untuk menunjukkan kerjanya.' },
              fb: { en: 'The journey proves diligence to you and costs attention from them. Show the destination; keep the journey in your appendix.', id: 'Perjalanan membuktikan ketekunan bagimu dan menguras perhatian mereka. Tunjukkan tujuannya; simpan perjalanannya di lampiran.' } }
          ] },
        { say: { en: 'Three minutes in, a VP interrupts: “Why not just do C?” — an option you evaluated and rejected.', id: 'Menit ketiga, seorang VP menyela: “Kenapa tidak C saja?” — opsi yang sudah kamu nilai dan tolak.' },
          moves: [
            { best: true, t: { en: '“We tested C: it fails on cost — the numbers are on the appendix slide. Happy to go deeper after the decision.”', id: '“Kami menguji C: gagal di biaya — angkanya ada di slide lampiran. Siap mendalami setelah keputusan.”' },
              fb: { en: 'Answered, evidenced, and returned to the thread in fifteen seconds. Interruptions are presence exams: the score is composure times brevity.', id: 'Terjawab, berbukti, dan kembali ke alur dalam lima belas detik. Selaan adalah ujian presence: skornya ketenangan kali keringkasan.' } },
            { t: { en: 'Take the question fully now — a VP asked.', id: 'Layani pertanyaannya tuntas sekarang — yang bertanya VP.' },
              fb: { en: 'Five minutes of C is five minutes not deciding X. Rank does not reorder your agenda; the decision does.', id: 'Lima menit soal C adalah lima menit tidak memutuskan X. Pangkat tidak menyusun ulang agendamu; keputusanlah yang menyusunnya.' } },
            { t: { en: '“Let me finish the deck first, then questions.”', id: '“Izinkan saya selesaikan dek dulu, baru pertanyaan.”' },
              fb: { en: 'Deferring a senior stakeholder’s direct question reads as fragility, not focus. Answer in one breath, then reclaim the thread — the skill is the pivot, not the shield.', id: 'Menunda pertanyaan langsung pemangku senior terbaca sebagai kerapuhan, bukan fokus. Jawab dalam satu tarikan napas, lalu rebut kembali alurnya — keahliannya adalah pivot, bukan perisai.' } }
          ] },
        { say: { en: 'The decision lands your way. A teammate who fed you the key analysis is not on the call. The chair says “great work.”', id: 'Keputusan jatuh sesuai rekomendasimu. Rekan yang menyuplai analisis kunci tidak ikut rapat. Ketua bilang “kerja bagus.”' },
          moves: [
            { best: true, t: { en: '“Thank you — the cost model that settled it is Dewi’s work.” Then send Dewi the outcome and the quote.', id: '“Terima kasih — model biaya yang menuntaskannya adalah karya Dewi.” Lalu kirimi Dewi hasil dan kutipannya.' },
              fb: { en: 'Credit passed upward in the room and confirmed in writing: the multiplier habit of Lesson 9.2, and the reputation of Lesson 9.3 — people fight to work with the person who does this.', id: 'Kredit diteruskan di ruangan dan ditegaskan tertulis: kebiasaan pengganda Pelajaran 9.2, dan reputasi Pelajaran 9.3 — orang berebut bekerja dengan orang yang melakukan ini.' } },
            { t: { en: 'Accept the praise; mention Dewi in your next team meeting.', id: 'Terima pujiannya; sebut Dewi di rapat tim berikutnya.' },
              fb: { en: 'Credit delivered where the decision-makers cannot hear it compounds at a lower rate. The room that praised you is the room that needed the correction.', id: 'Kredit yang disampaikan di tempat pengambil keputusan tak mendengarnya berbunga lebih rendah. Ruangan yang memujimu adalah ruangan yang butuh koreksinya.' } },
            { t: { en: 'Accept it — you presented, you carried the risk.', id: 'Terima saja — kamu yang presentasi, kamu yang memikul risikonya.' },
              fb: { en: 'True this quarter, expensive this career: analysts stop giving their best work to presenters who absorb the credit. Leadership is measured by what your name does for other people’s work.', id: 'Benar kuartal ini, mahal untuk karier: analis berhenti memberi karya terbaik ke presenter yang menyerap kredit. Kepemimpinan diukur dari apa yang dilakukan namamu untuk karya orang lain.' } }
          ] } ] }
  ];

  /* ─── styles (shares the visual language of the planner) ─── */
  var css = '' +
  '#routeField{position:fixed;inset:0;z-index:1250;display:none;background:var(--bg-base,#050A12);overflow:hidden}' +
  '#routeField.open{display:flex;flex-direction:column}' +
  '#routeField .rf-bg{position:absolute;inset:0;z-index:0;pointer-events:none;background:url("../../assets/bg/stage-execution.jpg") center 35%/cover no-repeat;opacity:.15}' +
  '#routeField .rf-veil{position:absolute;inset:0;z-index:0;pointer-events:none;background:linear-gradient(180deg,rgba(5,10,18,.64),rgba(5,10,18,.92) 45%,rgba(5,10,18,.97))}' +
  ':root[data-theme="light"] #routeField .rf-bg{opacity:.09}' +
  ':root[data-theme="light"] #routeField .rf-veil{background:linear-gradient(180deg,rgba(238,241,246,.86),rgba(238,241,246,.97) 45%)}' +
  '#routeField .rf-top{position:relative;z-index:1;display:flex;align-items:center;gap:12px;padding:11px 22px;flex-wrap:wrap;border-bottom:1px solid var(--gold-border);background:var(--glass-bg);backdrop-filter:var(--glass-blur)}' +
  '#routeField .rf-top b{font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold)}' +
  '#routeField .rf-tabs{display:flex;gap:4px;flex-wrap:wrap}' +
  '#routeField .rf-tab{border:1px solid transparent;background:none;color:var(--text-muted);border-radius:999px;padding:7px 14px;font-size:12px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;cursor:pointer;font-family:inherit}' +
  '#routeField .rf-tab.on{color:var(--gold-bright);border-color:var(--gold-border-hover);background:rgba(201,168,76,.1)}' +
  '#routeField .rf-close{margin-left:auto;width:36px;height:36px;border-radius:999px;border:1px solid var(--gold-border);background:none;color:var(--text);cursor:pointer;font-size:15px;flex:none}' +
  '#routeField .rf-close:hover{border-color:var(--gold)}' +
  '#routeField .rf-body{position:relative;z-index:1;flex:1;overflow-y:auto;padding:26px 22px 70px}' +
  '#routeField .rf-in{max-width:900px;margin:0 auto;animation:rfEnter .4s cubic-bezier(.22,1,.36,1)}' +
  '@keyframes rfEnter{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}' +
  '@media(prefers-reduced-motion:reduce){#routeField .rf-in{animation:none}}' +
  '#routeField .rf-card{border:1px solid var(--gold-border);border-radius:16px;background:var(--glass-bg);backdrop-filter:var(--glass-blur);padding:22px 24px;margin-bottom:14px}' +
  '#routeField .rf-kick{font-size:11px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:6px}' +
  '#routeField h2{font-size:1.35rem;margin:0 0 8px;color:var(--text)}' +
  '#routeField .rf-sub{font-size:13.5px;color:var(--text-sub);line-height:1.7;margin:0 0 12px}' +
  '#routeField .rf-note{font-size:12px;color:var(--text-faint);line-height:1.55;margin-top:10px}' +
  '#routeField .rf-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px}' +
  '#routeField .rf-set{border:1px solid var(--gold-border);border-radius:14px;padding:16px 18px;background:var(--bg-mid);cursor:pointer;transition:border-color .2s}' +
  '#routeField .rf-set:hover{border-color:var(--gold-border-hover)}' +
  '#routeField .rf-set b{display:block;font-size:15px;color:var(--text);margin-bottom:4px}' +
  '#routeField .rf-set span{font-size:12.5px;color:var(--text-muted);line-height:1.55;display:block}' +
  '#routeField .rf-set em{display:inline-block;font-style:normal;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:6px}' +
  '#routeField .rf-say{border:1px solid var(--gold-border);border-radius:12px;background:var(--bg-mid);padding:14px 16px;margin:10px 0;font-size:13.5px;color:var(--text);line-height:1.65}' +
  '#routeField .rf-move{display:block;width:100%;text-align:left;box-sizing:border-box;margin:8px 0;padding:12px 15px;border-radius:11px;border:1px solid var(--gold-border);background:var(--bg-mid);color:var(--text-sub);font-family:inherit;font-size:13.5px;line-height:1.55;cursor:pointer}' +
  '#routeField .rf-move:hover{border-color:var(--gold-border-hover)}' +
  '#routeField .rf-move:disabled{cursor:default;opacity:.85}' +
  '#routeField .rf-move.pick{border-color:var(--gold);background:rgba(201,168,76,.1);color:var(--text)}' +
  '#routeField .rf-fb{font-size:13px;color:var(--text-sub);line-height:1.7;border:1px solid rgba(201,168,76,.4);border-radius:11px;padding:12px 15px;margin-top:10px;background:rgba(201,168,76,.06)}' +
  '#routeField .rf-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px;align-items:center}' +
  '#routeField .rf-btn{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;border-radius:999px;border:0;cursor:pointer;font-family:inherit;font-weight:800;font-size:13px;background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);color:#10131B}' +
  '#routeField .rf-btn.ghost{background:none;border:1px solid var(--gold-border);color:var(--gold)}' +
  '#routeField .rf-bar{height:7px;border-radius:999px;background:rgba(201,168,76,.14);overflow:hidden;margin:4px 0 14px}' +
  '#routeField .rf-bar i{display:block;height:100%;background:linear-gradient(90deg,#8B6914,#C9A84C,#F0D878)}' +
  '#routeField .rf-field{margin-bottom:12px}' +
  '#routeField .rf-field label{display:block;font-size:12px;font-weight:700;color:var(--text-muted);margin-bottom:6px}' +
  '#routeField textarea,#routeField input[type=text],#routeField input[type=number]{width:100%;box-sizing:border-box;background:var(--bg-mid);border:1px solid var(--gold-border);border-radius:10px;color:var(--text);font-family:inherit;font-size:13px;line-height:1.6;padding:10px 12px}' +
  '#routeField textarea{min-height:96px;resize:vertical}' +
  '#routeField textarea:focus,#routeField input:focus{outline:none;border-color:var(--gold)}' +
  '#routeField .rf-two{display:grid;grid-template-columns:1fr 1fr;gap:14px}' +
  '@media(max-width:700px){#routeField .rf-two{grid-template-columns:1fr}}' +
  '#routeField .rf-prev{border:1px solid var(--gold-border);border-radius:12px;background:var(--bg-mid);padding:18px 20px;font-size:13px;line-height:1.7;color:var(--text-sub);white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}' +
  '#routeField .rf-check{font-size:13px;color:var(--text-sub);line-height:1.65;margin:6px 0}' +
  '#routeField .rf-check .ok{color:#4ADE80;font-weight:700}' +
  '#routeField .rf-check .bad{color:#EF6F5E;font-weight:700}' +
  '#routeField .rf-score{display:flex;gap:24px;flex-wrap:wrap;margin:6px 0 10px}' +
  '#routeField .rf-score b{display:block;font-size:1.5rem;color:var(--gold-bright)}' +
  '#routeField .rf-score span{font-size:12px;color:var(--text-muted)}';

  var root = null, body = null, tabsEl = null, tab = 'coach';
  var run = null; /* {set, i, picks[]} */

  function build() {
    if (root) return;
    var st = document.createElement('style');
    st.id = 'routeFieldCss'; st.textContent = css;
    document.head.appendChild(st);
    root = el('div'); root.id = 'routeField';
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-label', 'Fieldwork');
    root.appendChild(el('div', 'rf-bg'));
    root.appendChild(el('div', 'rf-veil'));
    var top = el('div', 'rf-top');
    top.appendChild(el('b', null, T('The Route · Fieldwork', 'The Route · Kerja Lapangan')));
    tabsEl = el('div', 'rf-tabs');
    [['coach', 'Scenario Coach', 'Pelatih Skenario'], ['promo', 'Promotion Case', 'Kasus Promosi'], ['money', 'Money Instruments', 'Instrumen Uang']].forEach(function (t) {
      var b = el('button', 'rf-tab', T(t[1], t[2]));
      b.dataset.tab = t[0];
      b.addEventListener('click', function () { tab = t[0]; run = null; render(); });
      tabsEl.appendChild(b);
    });
    top.appendChild(tabsEl);
    var x = el('button', 'rf-close', '✕');
    x.setAttribute('aria-label', 'Close');
    x.addEventListener('click', close);
    top.appendChild(x);
    body = el('div', 'rf-body');
    root.appendChild(top); root.appendChild(body);
    document.body.appendChild(root);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('open')) close();
    });
  }

  function card(w, kick, title, sub) {
    var c = el('div', 'rf-card');
    if (kick) c.appendChild(el('div', 'rf-kick', kick));
    if (title) c.appendChild(el('h2', null, title));
    if (sub) c.appendChild(el('p', 'rf-sub', sub));
    w.appendChild(c);
    return c;
  }
  function check(host, ok, txt) {
    host.appendChild(el('p', 'rf-check', (ok ? '<span class="ok">✓</span> ' : '<span class="bad">✗</span> ') + txt));
  }
  function field(host, labelTxt, kind, val, ph) {
    var f = el('div', 'rf-field');
    f.appendChild(el('label', null, labelTxt));
    var inp = document.createElement(kind === 'textarea' ? 'textarea' : 'input');
    if (kind !== 'textarea') inp.type = kind;
    inp.value = val != null ? val : '';
    if (ph) inp.placeholder = ph;
    f.appendChild(inp);
    host.appendChild(f);
    return inp;
  }

  /* ─── COACH ─── */
  function coachHome(w) {
    var s = store();
    var c = card(w, T('Instrument 1 · Scenario coach', 'Instrumen 1 · Pelatih skenario'),
      T('Judgment, drilled', 'Penilaian, dilatih'),
      T('Authored workplace situations, three decision points each. Every choice returns feedback written against the module frameworks — the drill trains pattern recognition before the real conversation happens to you.',
        'Situasi kerja yang ditulis khusus, tiga titik keputusan masing-masing. Tiap pilihan mengembalikan umpan balik yang ditulis terhadap kerangka modul — latihan ini melatih pengenalan pola sebelum percakapan nyata menimpamu.'));
    var grid = el('div', 'rf-grid');
    SETS.forEach(function (st) {
      var done = ((s.coach || {})[st.id] || {}).best;
      var box = el('div', 'rf-set');
      box.setAttribute('role', 'button'); box.tabIndex = 0;
      box.appendChild(el('em', null, T('Module', 'Modul') + ' ' + st.mod + (done != null ? ' · ' + done + '/' + st.rounds.length : '')));
      box.appendChild(el('b', null, esc(B(st.title))));
      box.appendChild(el('span', null, esc(B(st.brief))));
      function go() { run = { set: st, i: 0, picks: [] }; render(); }
      box.addEventListener('click', go);
      box.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
      grid.appendChild(box);
    });
    c.appendChild(grid);
    c.appendChild(el('p', 'rf-note', T('Scripted scenarios with authored feedback — they teach the moves; your real organisation will improvise. Results stay in this browser.',
      'Skenario terskrip dengan umpan balik yang ditulis — mereka mengajarkan langkah; organisasi nyatamu akan berimprovisasi. Hasil tinggal di peramban ini.')));
  }

  function coachRound(w) {
    var st = run.set, R = st.rounds[run.i];
    var c = card(w, esc(B(st.title)) + ' · ' + T('Decision', 'Keputusan') + ' ' + (run.i + 1) + ' / ' + st.rounds.length, null, null);
    var bar = el('div', 'rf-bar');
    bar.appendChild(el('i')).style.width = (run.i / st.rounds.length * 100) + '%';
    c.insertBefore(bar, c.firstChild.nextSibling);
    c.appendChild(el('div', 'rf-say', esc(B(R.say))));
    var picked = run.picks[run.i];
    /* show the moves in a stable, per-round rotated order so the strongest is not always first */
    var seed = 0, n = R.moves.length;
    for (var ci = 0; ci < st.id.length; ci++) seed += st.id.charCodeAt(ci);
    var rot = (seed + run.i * 2 + 1) % n;
    var order = R.moves.map(function (m, k) { return k; });
    order = order.slice(rot).concat(order.slice(0, rot));
    order.forEach(function (k) {
      var mv = R.moves[k];
      var b = el('button', 'rf-move', esc(B(mv.t)));
      if (picked !== undefined) {
        b.disabled = true;
        if (k === picked) b.classList.add('pick');
      }
      b.addEventListener('click', function () {
        if (run.picks[run.i] !== undefined) return;
        run.picks[run.i] = k;
        render();
      });
      c.appendChild(b);
    });
    if (picked !== undefined) {
      c.appendChild(el('div', 'rf-fb', esc(B(R.moves[picked].fb))));
      var row = el('div', 'rf-row');
      var nx = el('button', 'rf-btn', run.i < st.rounds.length - 1 ? T('Next decision →', 'Keputusan berikutnya →') : T('Debrief →', 'Debrief →'));
      nx.addEventListener('click', function () {
        if (run.i < st.rounds.length - 1) { run.i++; render(); }
        else coachDebrief(w);
      });
      row.appendChild(nx);
      c.appendChild(row);
    }
  }

  function coachDebrief() {
    var st = run.set;
    var best = run.picks.filter(function (k, i) { return st.rounds[i].moves[k].best; }).length;
    var s = store();
    s.coach = s.coach || {};
    s.coach[st.id] = { best: best, at: Date.now() };
    save(s);
    body.innerHTML = '';
    body.scrollTop = 0;
    var w = el('div', 'rf-in');
    body.appendChild(w);
    var c = card(w, T('Debrief', 'Debrief'), best + ' / ' + st.rounds.length + ' ' + T('strongest moves chosen', 'langkah terkuat terpilih'), null);
    var bar = el('div', 'rf-bar');
    bar.appendChild(el('i')).style.width = (best / st.rounds.length * 100) + '%';
    c.appendChild(bar);
    st.rounds.forEach(function (R, i) {
      var mine = R.moves[run.picks[i]];
      var strongest = R.moves.filter(function (m) { return m.best; })[0];
      check(c, !!mine.best, '<b>' + (i + 1) + '.</b> ' + (mine.best
        ? esc(B(mine.t))
        : esc(B(mine.t)) + ' — <i>' + T('strongest was:', 'terkuat adalah:') + '</i> ' + esc(B(strongest.t))));
    });
    c.appendChild(el('p', 'rf-sub', T('Module ' + st.mod + ' holds the frameworks behind every strongest move. Reread it, then rerun the drill choosing differently — the wrong paths teach as much as the right one.',
      'Modul ' + st.mod + ' memegang kerangka di balik tiap langkah terkuat. Baca ulang, lalu jalankan lagi dengan pilihan berbeda — jalur yang salah mengajar sebanyak yang benar.')));
    var row = el('div', 'rf-row');
    var again = el('button', 'rf-btn', T('Run it again →', 'Jalankan lagi →'));
    again.addEventListener('click', function () { run = { set: st, i: 0, picks: [] }; render(); });
    var back = el('button', 'rf-btn ghost', T('All scenarios', 'Semua skenario'));
    back.addEventListener('click', function () { run = null; render(); });
    row.appendChild(again); row.appendChild(back);
    c.appendChild(row);
  }

  /* ─── PROMO ─── */
  function promoView(w) {
    var s = store(); s.promo = s.promo || {};
    var P = s.promo;
    var wins = (plan().wins || []);
    var c = card(w, T('Instrument 2 · Promotion case builder', 'Instrumen 2 · Perakit kasus promosi'),
      T('Your file, in one page', 'Berkasmu, dalam satu halaman'),
      T('Module 5’s artefact: a one-page case your manager could forward upward. It assembles from your win log and three claims — then lints for the evidence standards the module teaches.',
        'Artefak Modul 5: kasus satu halaman yang bisa diteruskan manajermu ke atas. Dirakit dari catatan kemenanganmu dan tiga klaim — lalu diperiksa terhadap standar bukti yang diajarkan modul.'));
    c.appendChild(el('p', 'rf-sub', wins.length
      ? '<b>' + wins.length + '</b> ' + T('win-log entries found in your Route Planner — the strongest three will be quoted below.', 'entri catatan kemenangan ditemukan di Route Planner-mu — tiga terkuat akan dikutip di bawah.')
      : T('Your win log is empty. The builder works best fed by it — open the Route Planner’s Win Log tab and add results with numbers and witnesses first.', 'Catatan kemenanganmu kosong. Perakit bekerja terbaik jika disuplai darinya — buka tab Win Log di Route Planner dan tambah hasil berangka dan bersaksi dulu.')));
    var role = field(c, T('Target level or role', 'Level atau peran target'), 'text', P.role, T('e.g. Senior Analyst', 'mis. Senior Analyst'));
    var scope = field(c, T('Claim 1 — scope: what you now own beyond your level', 'Klaim 1 — cakupan: apa yang kini kamu miliki melampaui levelmu'), 'textarea', P.scope, '');
    var impact = field(c, T('Claim 2 — impact: the measurable difference (numbers)', 'Klaim 2 — dampak: perbedaan terukur (angka)'), 'textarea', P.impact, '');
    var behave = field(c, T('Claim 3 — behaviours: the next-level behaviours you already show', 'Klaim 3 — perilaku: perilaku level berikut yang sudah kamu tunjukkan'), 'textarea', P.behave, '');
    var row = el('div', 'rf-row');
    var go = el('button', 'rf-btn', T('Assemble the case →', 'Rakit kasusnya →'));
    go.addEventListener('click', function () {
      P.role = role.value; P.scope = scope.value; P.impact = impact.value; P.behave = behave.value; P.done = true;
      save(s); render();
    });
    row.appendChild(go);
    c.appendChild(row);

    if (!P.done || !(P.scope || P.impact)) return;
    var strongest = wins.slice().sort(function (a, b) {
      return (/\d/.test(b.text) - /\d/.test(a.text)) || ((b.meta || '').length - (a.meta || '').length);
    }).slice(0, 3);
    var text = T('PROMOTION CASE — ', 'KASUS PROMOSI — ') + (P.role || '—') + '\n\n' +
      T('SCOPE', 'CAKUPAN') + '\n' + (P.scope || '').trim() + '\n\n' +
      T('IMPACT', 'DAMPAK') + '\n' + (P.impact || '').trim() + '\n\n' +
      T('EVIDENCE FROM THE WIN LOG', 'BUKTI DARI CATATAN KEMENANGAN') + '\n' +
      (strongest.length ? strongest.map(function (x) { return '· ' + x.text + (x.meta ? ' (' + x.meta + ')' : ''); }).join('\n') : T('(win log empty)', '(catatan kosong)')) + '\n\n' +
      T('NEXT-LEVEL BEHAVIOURS', 'PERILAKU LEVEL BERIKUT') + '\n' + (P.behave || '').trim();
    var pv = card(w, T('The one-pager', 'Satu halamannya'), null, null);
    pv.appendChild(el('div', 'rf-prev', esc(text)));
    var row2 = el('div', 'rf-row');
    var cp = el('button', 'rf-btn ghost', T('Copy as plain text', 'Salin sebagai teks polos'));
    cp.addEventListener('click', function () {
      try { navigator.clipboard.writeText(text); cp.textContent = '✓ ' + T('Copied', 'Tersalin'); } catch (e) {}
      setTimeout(function () { cp.textContent = T('Copy as plain text', 'Salin sebagai teks polos'); }, 1600);
    });
    row2.appendChild(cp);
    pv.appendChild(row2);
    var lint = card(w, T('Case check — Module 5’s evidence standards', 'Pemeriksaan kasus — standar bukti Modul 5'), null, null);
    check(lint, /\d/.test(P.impact), T('Impact claim carries at least one number', 'Klaim dampak memuat minimal satu angka'));
    check(lint, strongest.length >= 3, T('Three win-log entries quoted as evidence', 'Tiga entri catatan kemenangan dikutip sebagai bukti'));
    check(lint, strongest.filter(function (x) { return (x.meta || '').trim(); }).length >= 2, T('Most quoted wins name a witness or artefact', 'Sebagian besar kemenangan terkutip menyebut saksi atau artefak'));
    check(lint, (P.scope || '').length > 40 && (P.behave || '').length > 40, T('Scope and behaviour claims are substantive, not slogans', 'Klaim cakupan dan perilaku substantif, bukan slogan'));
    lint.appendChild(el('p', 'rf-note', T('The case argues from your own records — no scores, no predictions. Timing and framing for the conversation itself live in Lessons 5.3 and 5.4.',
      'Kasus ini berargumen dari catatanmu sendiri — tanpa skor, tanpa prediksi. Waktu dan pembingkaian percakapannya ada di Pelajaran 5.3 dan 5.4.')));
  }

  /* ─── MONEY ─── */
  function moneyView(w) {
    var s = store(); s.money = s.money || {};
    var M = s.money;
    var c = card(w, T('Instrument 3 · Money instruments', 'Instrumen 3 · Instrumen uang'),
      T('Module 8’s arithmetic, on your numbers', 'Aritmetika Modul 8, dengan angkamu'),
      T('Two open calculations: your emergency runway, and the compound-growth arithmetic from Lesson 8.3 applied to your own monthly amount. Formulas shown; assumptions yours.',
        'Dua perhitungan terbuka: landasan pacu daruratmu, dan aritmetika bunga majemuk Pelajaran 8.3 pada jumlah bulananmu sendiri. Rumus ditampilkan; asumsi milikmu.'));
    var two = el('div', 'rf-two');
    var left = el('div'), right = el('div');
    var inc = field(left, T('Monthly take-home (Rp)', 'Gaji bersih bulanan (Rp)'), 'number', M.inc, '6000000');
    var exp = field(left, T('Essential monthly expenses (Rp)', 'Pengeluaran esensial bulanan (Rp)'), 'number', M.exp, '4000000');
    var saved = field(left, T('Currently saved (Rp)', 'Tabungan saat ini (Rp)'), 'number', M.saved, '0');
    var invest = field(right, T('Monthly amount you could invest (Rp)', 'Jumlah bulanan yang bisa kamu investasikan (Rp)'), 'number', M.invest, '500000');
    var rate = field(right, T('Assumed annual return % (your assumption, not a promise)', 'Asumsi imbal hasil tahunan % (asumsimu, bukan janji)'), 'number', M.rate, '6');
    var years = field(right, T('Years', 'Tahun'), 'number', M.years, '10');
    two.appendChild(left); two.appendChild(right);
    c.appendChild(two);
    var row = el('div', 'rf-row');
    var go = el('button', 'rf-btn', T('Run the arithmetic →', 'Jalankan aritmetikanya →'));
    go.addEventListener('click', function () {
      M.inc = inc.value; M.exp = exp.value; M.saved = saved.value;
      M.invest = invest.value; M.rate = rate.value; M.years = years.value; M.done = true;
      save(s); render();
    });
    row.appendChild(go);
    c.appendChild(row);

    if (!M.done) return;
    var vInc = +M.inc || 0, vExp = +M.exp || 0, vSaved = +M.saved || 0;
    var vInv = +M.invest || 0, vRate = (+M.rate || 0) / 100, vYears = +M.years || 0;
    if (vExp > 0) {
      var runway = vSaved / vExp;
      var margin = vInc - vExp;
      var target = 6 * vExp;
      var monthsTo = margin > 0 ? Math.max(0, Math.ceil((target - vSaved) / margin)) : null;
      var r = card(w, T('Runway', 'Landasan pacu'), (Math.floor(runway * 10) / 10) + ' ' + T('months covered today', 'bulan tertutup hari ini'), null);
      var sc = el('div', 'rf-score');
      [[fmtRp(margin), T('monthly margin (income − essentials)', 'margin bulanan (pendapatan − esensial)')],
       [fmtRp(target), T('six-month runway target', 'target landasan enam bulan')],
       [monthsTo == null ? '—' : monthsTo + ' ' + T('months', 'bulan'), T('to target at full margin', 'menuju target dengan margin penuh')]].forEach(function (x) {
        var sp = el('span');
        sp.appendChild(el('b', null, x[0]));
        sp.appendChild(el('span', null, x[1]));
        sc.appendChild(sp);
      });
      r.appendChild(sc);
      r.appendChild(el('p', 'rf-note', T('Arithmetic: runway = saved ÷ essential expenses; months to target = (target − saved) ÷ monthly margin. Lesson 8.2’s automation rule decides how much of the margin actually moves.',
        'Aritmetika: landasan = tabungan ÷ pengeluaran esensial; bulan ke target = (target − tabungan) ÷ margin bulanan. Aturan otomatisasi Pelajaran 8.2 menentukan berapa margin yang benar-benar berpindah.')));
    }
    if (vInv > 0 && vYears > 0) {
      var mRate = vRate / 12, n = vYears * 12;
      var fv = mRate > 0 ? vInv * ((Math.pow(1 + mRate, n) - 1) / mRate) : vInv * n;
      var contributed = vInv * n;
      var g = card(w, T('Compound growth — illustrative arithmetic', 'Pertumbuhan majemuk — aritmetika ilustratif'), fmtRp(fv), null);
      var sc2 = el('div', 'rf-score');
      [[fmtRp(contributed), T('you contribute', 'kamu setorkan')],
       [fmtRp(fv - contributed), T('growth at your assumed rate', 'pertumbuhan pada asumsi imbalmu')],
       [vYears + ' ' + T('years', 'tahun'), T('horizon', 'horizon')]].forEach(function (x) {
        var sp = el('span');
        sp.appendChild(el('b', null, x[0]));
        sp.appendChild(el('span', null, x[1]));
        sc2.appendChild(sp);
      });
      g.appendChild(sc2);
      g.appendChild(el('p', 'rf-note', T('Formula: FV = m × ((1 + r/12)^(12y) − 1) ÷ (r/12), on your inputs. Real returns vary and can be negative — this illustrates the arithmetic of consistency from Lesson 8.3, and is not financial advice.',
        'Rumus: FV = m × ((1 + r/12)^(12y) − 1) ÷ (r/12), pada masukanmu. Imbal nyata bervariasi dan bisa negatif — ini mengilustrasikan aritmetika konsistensi Pelajaran 8.3, bukan nasihat keuangan.')));
    }
  }

  /* ─── render / open / close ─── */
  function render() {
    tabsEl.querySelectorAll('.rf-tab').forEach(function (b) {
      b.classList.toggle('on', b.dataset.tab === tab);
    });
    body.innerHTML = '';
    body.scrollTop = 0;
    var w = el('div', 'rf-in');
    body.appendChild(w);
    if (tab === 'coach') { if (run) coachRound(w); else coachHome(w); }
    else if (tab === 'promo') promoView(w);
    else moneyView(w);
  }

  function open(mode) {
    build();
    run = null;
    if (mode === 'coach' || mode === 'promo' || mode === 'money') tab = mode;
    if (mode && mode.indexOf('coach:') === 0) {
      tab = 'coach';
      var id = mode.split(':')[1];
      var st = SETS.filter(function (x) { return x.id === id; })[0];
      if (st) run = { set: st, i: 0, picks: [] };
    }
    root.classList.add('open');
    document.body.classList.add('lms-lock');
    render();
  }
  function close() {
    run = null;
    if (root) root.classList.remove('open');
    document.body.classList.remove('lms-lock');
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-route-field]');
    if (!b) return;
    e.preventDefault();
    open(b.getAttribute('data-route-field'));
  });
  document.addEventListener('mt:launch-tool', function (e) {
    if (e.detail && e.detail.tool === 'field') {
      var p = document.querySelector('.lmsp.open .lmsp-back');
      if (p) p.click();
      open(e.detail.mode);
    }
  });
  document.querySelectorAll('.ctl button, button[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      setTimeout(function () {
        if (root && root.classList.contains('open') && !run) render();
      }, 60);
    });
  });

  window.MT_ROUTE_FIELD = { open: open };

  /* deep link from The Compass · Resources: ?tool=field[&mode=…] opens the instrument on load */
  (function () {
    try {
      var q = new URLSearchParams(location.search);
      if (q.get('tool') !== 'field') return;
      var go = function () { setTimeout(function () { open(q.get('mode') || undefined); }, 60); };
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
    } catch (e) {}
  })();
})();
