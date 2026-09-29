/**
 * THE COMPASS — MOTIVATION
 * ------------------------
 * A curated, expandable library for emotional and behavioural momentum:
 * quotes, short insights, career lessons, illustrative stories, short
 * films, slideshows, mindset guidance, perspectives and reflection prompts.
 *
 * Personalised: the member's situation is read from the Navigator's
 * signals and the Course Plotter (stage, phase, recent setbacks, interviews,
 * offers, habit adherence, momentum, time since last activity), and every
 * piece is ranked against it — with a line saying why it was chosen.
 *
 * Content rules: quotations are attributed to a named published work;
 * stories are fictional composites and labelled as such; films are the
 * platform's own subtitled lesson films (The Map) plus one composed reset
 * built from site footage — no external links. Reflection answers are saved
 * to the Discovery journal. Everything stays in this browser.
 */
(function () {
  'use strict';
  var SH = window.MT_SHELL;
  if (!SH) return;
  var el = SH.el, esc = SH.esc;
  var C = null;
  var DAY = 86400000;
  var K = { saved: 'compass_motivation_saved', seen: 'compass_motivation_seen', journal: 'compass_journal' };
  function lang() { return C.lang(); }
  function T(en, id) { return lang() === 'id' ? id : en; }
  function P(en, id) { return { en: en, id: id }; }
  function tx(p) { return p == null ? '' : typeof p === 'string' ? p : (p[lang()] || p.en || ''); }
  function today() { return new Date().toISOString().slice(0, 10); }
  function load(k, def) { try { var v = C.getLS(k, null); return v == null ? def : JSON.parse(v); } catch (e) { return def; } }
  function save(k, v) { C.setLS(k, JSON.stringify(v)); }
  function hash(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0) / 4294967295; }
  var IMG = '../../assets/';

  /* ─── situations (what the member is going through) ─── */
  var SIT = {
    start: { label: P('Getting started', 'Memulai'), icon: 'rocket' },
    waiting: { label: P('Waiting to hear back', 'Menunggu kabar'), icon: 'hourglass' },
    setback: { label: P('After a setback', 'Setelah kemunduran'), icon: 'refresh' },
    nerves: { label: P('Before an interview', 'Sebelum wawancara'), icon: 'interview' },
    decision: { label: P('Making a decision', 'Mengambil keputusan'), icon: 'scale' },
    slump: { label: P('Losing momentum', 'Kehilangan momentum'), icon: 'battery' },
    momentum: { label: P('On a roll', 'Sedang melaju'), icon: 'zap' },
    newrole: { label: P('New role', 'Peran baru'), icon: 'briefcase' },
    plateau: { label: P('Feeling stuck', 'Merasa macet'), icon: 'mountain' },
    comparison: { label: P('Comparing with others', 'Membandingkan diri'), icon: 'users' },
    growth: { label: P('Growing and leading', 'Bertumbuh dan memimpin'), icon: 'trendUp' }
  };
  var TYPES = [
    ['all', P('All', 'Semua')], ['quote', P('Quotes', 'Kutipan')], ['insight', P('Insights', 'Wawasan')], ['lesson', P('Career lessons', 'Pelajaran karier')],
    ['story', P('Stories', 'Kisah')], ['video', P('Short films', 'Film pendek')], ['deck', P('Slideshows', 'Salindia')], ['mindset', P('Mindset', 'Pola pikir')],
    ['perspective', P('Perspectives', 'Perspektif')], ['prompt', P('Reflection', 'Refleksi')]
  ];
  var TYPE_LABEL = {}; TYPES.forEach(function (t) { TYPE_LABEL[t[0]] = t[1]; });
  var TYPE_ICON = { quote: 'bulb', insight: 'sparkles', lesson: 'book', story: 'users', video: 'play', deck: 'layers', mindset: 'brain', perspective: 'eye', prompt: 'pen' };

  /* ═══ LIBRARY ═══ */
  var L = [];
  function add(o) { L.push(o); }

  /* quotes — attributed to a named published work */
  [
    ['q-clear', ['slump', 'start', 'growth'], P('You do not rise to the level of your goals. You fall to the level of your systems.', 'Kamu tidak naik ke tingkat tujuanmu. Kamu jatuh ke tingkat sistemmu. (terjemahan)'), 'James Clear', P('Atomic Habits (2018)', 'Atomic Habits (2018)')],
    ['q-durant', ['slump', 'momentum', 'growth'], P('We are what we repeatedly do. Excellence, then, is not an act, but a habit.', 'Kita adalah apa yang kita lakukan berulang-ulang. Maka keunggulan bukanlah tindakan, melainkan kebiasaan. (terjemahan)'), 'Will Durant', P('The Story of Philosophy (1926), summarising Aristotle', 'The Story of Philosophy (1926), merangkum Aristoteles')],
    ['q-frankl', ['setback', 'waiting', 'slump'], P('Everything can be taken from a man but one thing: the last of the human freedoms — to choose one’s attitude in any given set of circumstances, to choose one’s own way.', 'Segalanya bisa direnggut dari manusia kecuali satu: kebebasan manusia yang terakhir — memilih sikap dalam keadaan apa pun, memilih jalannya sendiri. (terjemahan)'), 'Viktor E. Frankl', P('Man’s Search for Meaning (1946)', 'Man’s Search for Meaning (1946)')],
    ['q-why', ['slump', 'setback', 'start'], P('He who has a why to live for can bear almost any how.', 'Ia yang punya alasan untuk hidup dapat menanggung hampir semua cara. (terjemahan)'), 'Friedrich Nietzsche', P('as quoted by Viktor E. Frankl in Man’s Search for Meaning', 'dikutip Viktor E. Frankl dalam Man’s Search for Meaning')],
    ['q-aurelius', ['setback', 'plateau', 'waiting'], P('The impediment to action advances action. What stands in the way becomes the way.', 'Rintangan bagi tindakan justru memajukan tindakan. Yang menghalangi jalan menjadi jalan itu sendiri. (terjemahan)'), 'Marcus Aurelius', P('Meditations, Book 5.20 (tr. Gregory Hays)', 'Meditations, Buku 5.20 (terj. Gregory Hays)')],
    ['q-seneca', ['slump', 'growth', 'start'], P('It is not that we have a short time to live, but that we waste a lot of it.', 'Bukan karena waktu hidup kita singkat, melainkan karena kita menyia-nyiakan banyak darinya. (terjemahan)'), 'Seneca', P('On the Shortness of Life', 'On the Shortness of Life')],
    ['q-laozi', ['start', 'slump'], P('A journey of a thousand miles begins with a single step.', 'Perjalanan seribu mil dimulai dengan satu langkah. (terjemahan)'), 'Laozi', P('Tao Te Ching, ch. 64 (common English rendering)', 'Tao Te Ching, bab 64 (terjemahan Inggris yang umum)')],
    ['q-beckett', ['setback', 'nerves'], P('Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.', 'Pernah mencoba. Pernah gagal. Tak apa. Coba lagi. Gagal lagi. Gagal dengan lebih baik. (terjemahan)'), 'Samuel Beckett', P('Worstward Ho (1983)', 'Worstward Ho (1983)')],
    ['q-duckworth', ['slump', 'waiting', 'plateau'], P('Enthusiasm is common. Endurance is rare.', 'Antusiasme itu umum. Daya tahan itu langka. (terjemahan)'), 'Angela Duckworth', P('Grit (2016)', 'Grit (2016)')],
    ['q-dweck', ['comparison', 'growth', 'setback'], P('Becoming is better than being.', 'Menjadi lebih baik daripada sekadar ada. (terjemahan)'), 'Carol S. Dweck', P('Mindset (2006)', 'Mindset (2006)')],
    ['q-martin', ['plateau', 'newrole', 'comparison'], P('Be so good they can’t ignore you.', 'Jadilah begitu bagus sampai mereka tak bisa mengabaikanmu. (terjemahan)'), 'Steve Martin', P('advice to performers; title of Cal Newport’s 2012 book', 'nasihat untuk para penampil; judul buku Cal Newport (2012)')],
    ['q-kihajar', ['growth', 'newrole'], P('Ing ngarsa sung tuladha, ing madya mangun karsa, tut wuri handayani. — In front, set the example; in the middle, build the will; from behind, give encouragement.', 'Ing ngarsa sung tuladha, ing madya mangun karsa, tut wuri handayani. — Di depan memberi teladan, di tengah membangun semangat, di belakang memberi dorongan.'), 'Ki Hajar Dewantara', P('the Taman Siswa principles of leadership', 'semboyan kepemimpinan Taman Siswa')],
    ['q-kartini', ['setback', 'waiting', 'slump'], P('Habis gelap terbitlah terang. — After darkness comes light.', 'Habis gelap terbitlah terang.'), 'R.A. Kartini', P('title given to the collected letters of R.A. Kartini', 'judul kumpulan surat R.A. Kartini')],
    ['q-pram', ['decision', 'growth', 'newrole'], P('Seorang terpelajar harus juga berlaku adil sudah sejak dalam pikiran, apalagi dalam perbuatan. — An educated person must be fair already in thought, let alone in deed.', 'Seorang terpelajar harus juga berlaku adil sudah sejak dalam pikiran, apalagi dalam perbuatan.'), 'Pramoedya Ananta Toer', P('Bumi Manusia (1980)', 'Bumi Manusia (1980)')],
    ['q-amabile', ['slump', 'momentum', 'plateau'], P('Of all the things that can boost emotions, motivation, and perceptions during a workday, the single most important is making progress in meaningful work.', 'Dari semua hal yang bisa mendongkrak emosi, motivasi, dan persepsi selama hari kerja, yang paling penting adalah membuat kemajuan dalam pekerjaan yang bermakna. (terjemahan)'), 'Teresa M. Amabile & Steven J. Kramer', P('“The Power of Small Wins”, Harvard Business Review (2011)', '“The Power of Small Wins”, Harvard Business Review (2011)')]
  ].forEach(function (q) { add({ id: q[0], type: 'quote', sit: q[1], text: q[2], who: q[3], src: q[4] }); });

  /* short insights — Metanoia editorial */
  [
    ['i-silence', ['waiting'], P('Silence is not a verdict', 'Hening bukan vonis'), P('Hiring usually moves slower than candidates expect. The gap between applying and hearing back is mostly about the queue on their side, not about you. Keep plotting routes while you wait.', 'Rekrutmen biasanya bergerak lebih lambat dari dugaan kandidat. Jeda antara melamar dan mendapat kabar lebih sering soal antrean di pihak mereka, bukan soal dirimu. Terus buat rute selagi menunggu.')],
    ['i-pattern', ['setback'], P('One no is a data point', 'Satu penolakan adalah satu titik data'), P('A rejection tells you about one fit at one moment. Three rejections at the same stage are a pattern — and patterns are fixable. That is what the debrief is for.', 'Penolakan bercerita tentang satu kecocokan pada satu momen. Tiga penolakan di tahap yang sama adalah pola — dan pola bisa diperbaiki. Untuk itulah debrief ada.')],
    ['i-excited', ['nerves'], P('Call it excitement', 'Sebut saja antusias'), P('Nerves and excitement feel almost identical in the body. In experiments, people who told themselves “I am excited” before a stressful performance did better than those who tried to calm down.', 'Gugup dan antusias terasa hampir sama di tubuh. Dalam eksperimen, orang yang berkata pada diri sendiri “aku bersemangat” sebelum tampil di bawah tekanan tampil lebih baik daripada yang berusaha menenangkan diri.'), P('Alison Wood Brooks, Journal of Experimental Psychology: General (2014)', 'Alison Wood Brooks, Journal of Experimental Psychology: General (2014)')],
    ['i-action', ['slump', 'start'], P('Action comes before motivation', 'Tindakan datang sebelum motivasi'), P('Waiting to feel ready rarely works. Shrink today’s task until it is too small to refuse — one paragraph, one lesson, one message — and let the feeling catch up.', 'Menunggu merasa siap jarang berhasil. Kecilkan tugas hari ini sampai terlalu kecil untuk ditolak — satu paragraf, satu pelajaran, satu pesan — dan biarkan perasaannya menyusul.')],
    ['i-rhythm', ['momentum'], P('Protect the rhythm, not the intensity', 'Jaga ritme, bukan intensitas'), P('When things are going well it is tempting to double the effort. The week you double it is often followed by the week you do nothing. Keep the pace you can repeat.', 'Saat semuanya lancar, godaannya adalah menggandakan usaha. Minggu kamu menggandakannya sering disusul minggu kamu tak melakukan apa-apa. Jaga laju yang bisa kamu ulang.')],
    ['i-offer', ['decision'], P('The best offer is not always the biggest number', 'Tawaran terbaik tak selalu angka terbesar'), P('Weigh what you will learn, who you will learn it from, and what your next move looks like from there. Pay matters — so does the slope of the road it puts you on.', 'Timbang apa yang akan kamu pelajari, dari siapa, dan seperti apa langkah berikutnya dari sana. Gaji penting — begitu pula kemiringan jalan tempat ia menempatkanmu.')],
    ['i-compare', ['comparison'], P('Compare with ninety days ago', 'Bandingkan dengan sembilan puluh hari lalu'), P('Other people’s timelines reach you as highlight reels. The only comparison with a fair start is you now against you three months ago.', 'Linimasa orang lain sampai kepadamu sebagai cuplikan terbaik. Satu-satunya perbandingan yang adil garis startnya adalah dirimu sekarang dengan dirimu tiga bulan lalu.')],
    ['i-plateau', ['plateau'], P('A plateau is where skill settles', 'Dataran adalah tempat keterampilan mengendap'), P('Flat stretches are often where skill consolidates before the next rise. The useful question is not “why am I stuck?” but “what would make my next level visible to the people who decide?”', 'Masa datar sering menjadi tempat keterampilan mengendap sebelum naik lagi. Pertanyaan yang berguna bukan “kenapa aku macet?” tetapi “apa yang membuat level berikutku terlihat oleh para pengambil keputusan?”')],
    ['i-measure', ['newrole'], P('Learn how success is measured here', 'Pelajari cara keberhasilan diukur di sini'), P('In a new role, the first job is to find out what your manager will actually judge you on. Ask in week one. Most people guess until their first review.', 'Di peran baru, tugas pertama adalah mencari tahu apa yang benar-benar akan dinilai manajermu. Tanyakan di minggu pertama. Kebanyakan orang menebak sampai tinjauan pertama.')],
    ['i-start', ['start'], P('You need a destination, not a perfect plan', 'Kamu butuh tujuan, bukan rencana sempurna'), P('A destination, a first step and a date to review are enough to begin. The plan improves once it meets reality.', 'Tujuan, satu langkah pertama, dan tanggal peninjauan sudah cukup untuk mulai. Rencana membaik setelah bertemu kenyataan.')],
    ['i-lead', ['growth'], P('Leadership starts before the title', 'Kepemimpinan dimulai sebelum jabatan'), P('Every time you make the people around you better at their work, you are practising the job you want next.', 'Setiap kali kamu membuat orang di sekitarmu lebih baik dalam pekerjaannya, kamu sedang melatih pekerjaan yang kamu inginkan berikutnya.')]
  ].forEach(function (x) { add({ id: x[0], type: 'insight', sit: x[1], title: x[2], body: x[3], src: x[4] }); });

  /* career lessons */
  [
    ['l-follow', ['waiting'], P('The follow-up rule', 'Aturan tindak lanjut'), P('Send one polite follow-up 7–10 days after silence: thank them, restate your interest in one line, and ask whether there is an update on timing. Then update the route either way. One follow-up reads as professional; three read as pressure.', 'Kirim satu tindak lanjut sopan 7–10 hari setelah hening: berterima kasih, tegaskan minatmu dalam satu kalimat, dan tanyakan kabar soal waktunya. Lalu perbarui rutenya apa pun hasilnya. Satu tindak lanjut terbaca profesional; tiga terbaca menekan.'), P('One message, then move on.', 'Satu pesan, lalu lanjut.'), { tab: 'course-plotter' }],
    ['l-debrief', ['setback', 'nerves'], P('Debrief beats regret', 'Debrief mengalahkan penyesalan'), P('Within a day of every interview write three lines: the question that surprised you, the answer you wish you had given, and one thing to change. Ten debriefs later you will have a personal interview manual no book can give you.', 'Dalam sehari setelah setiap wawancara, tulis tiga baris: pertanyaan yang mengejutkan, jawaban yang ingin kamu berikan, dan satu hal untuk diubah. Sepuluh debrief kemudian kamu punya manual wawancara pribadi yang tak bisa diberikan buku mana pun.'), P('Three lines, same day.', 'Tiga baris, hari yang sama.'), { tab: 'course-plotter' }],
    ['l-fewer', ['waiting', 'start', 'setback'], P('Fewer, better applications', 'Lebih sedikit, lebih baik'), P('A tailored application — CV keywords matched to the description, one line on why this company — outperforms five generic ones. Aim for a steady weekly number you can tailor properly.', 'Satu lamaran yang disesuaikan — kata kunci CV cocok dengan deskripsi, satu kalimat tentang mengapa perusahaan ini — mengalahkan lima lamaran umum. Bidik jumlah mingguan yang stabil dan bisa kamu sesuaikan dengan benar.'), P('Tailor, then send.', 'Sesuaikan, lalu kirim.'), { href: '/products/the-pack/?tool=gym&mode=ats' }],
    ['l-evidence', ['nerves', 'plateau', 'comparison'], P('Evidence over adjectives', 'Bukti di atas kata sifat'), P('“Hard-working” and “fast learner” are claims everyone makes. “Cut the weekly report from six hours to two” is evidence nobody else has. Replace every adjective in your CV and your answers with a number or an outcome.', '“Pekerja keras” dan “cepat belajar” adalah klaim semua orang. “Memangkas laporan mingguan dari enam jam jadi dua” adalah bukti yang tak dimiliki orang lain. Ganti setiap kata sifat di CV dan jawabanmu dengan angka atau hasil.'), P('Numbers travel further than praise.', 'Angka melaju lebih jauh daripada pujian.'), { href: '/products/the-route/?tool=plan&mode=wins' }],
    ['l-package', ['decision'], P('Negotiate the package, not the number', 'Negosiasikan paketnya, bukan angkanya'), P('If base pay is fixed, other terms often are not: start date, allowances, a first review date, training budget, the team you join. Thank them first, ask for time to review, and put what you agree in writing.', 'Jika gaji pokok tetap, syarat lain sering tidak: tanggal mulai, tunjangan, tanggal tinjauan pertama, anggaran pelatihan, tim yang kamu masuki. Berterima kasih dulu, minta waktu meninjau, dan tuliskan kesepakatannya.'), P('The Rope Module 10 walks through it.', 'The Rope Modul 10 membahasnya.'), { href: '/products/the-rope/?context=compass' }],
    ['l-manager', ['newrole', 'plateau'], P('Make your manager’s job easier', 'Permudah pekerjaan manajermu'), P('A five-line Friday note — done, next, blocked, a number, a question — saves your manager from chasing you and builds a written record of your work. Few people do it; the ones who do get noticed.', 'Catatan Jumat lima baris — selesai, berikutnya, terhambat, satu angka, satu pertanyaan — menyelamatkan manajermu dari mengejarmu dan membangun catatan tertulis kerjamu. Sedikit yang melakukannya; yang melakukannya jadi terlihat.'), P('Five lines, every Friday.', 'Lima baris, setiap Jumat.'), { tab: 'habits' }],
    ['l-energy', ['slump', 'momentum'], P('Energy is the resource under every other', 'Energi adalah sumber daya di bawah semuanya'), P('Put your hardest task where your energy peaks, protect the sleep window, and treat rest as part of the plan rather than a reward for finishing it. A tired week produces tired applications.', 'Taruh tugas tersulitmu saat energimu memuncak, jaga jendela tidur, dan perlakukan istirahat sebagai bagian rencana, bukan hadiah setelah selesai. Minggu yang lelah menghasilkan lamaran yang lelah.'), P('The Map Module 5 covers it.', 'The Map Modul 5 membahasnya.'), { href: '/products/the-map/?context=compass' }],
    ['l-feedback', ['growth', 'newrole', 'plateau'], P('Ask for feedback you can use', 'Minta umpan balik yang bisa dipakai'), P('“Any feedback?” gets “all good”. “What is one thing I could do differently in the next presentation?” gets something you can act on. Ask small, ask often, and say what you changed.', '“Ada masukan?” dijawab “semua baik”. “Satu hal apa yang bisa kulakukan berbeda di presentasi berikutnya?” memberi sesuatu yang bisa kamu jalankan. Tanya kecil, tanya sering, dan katakan apa yang kamu ubah.'), P('Specific questions get specific answers.', 'Pertanyaan spesifik mendapat jawaban spesifik.'), null]
  ].forEach(function (x) { add({ id: x[0], type: 'lesson', sit: x[1], title: x[2], body: x[3], take: x[4], go: x[5] }); });

  /* illustrative stories — fictional composites */
  [
    ['s-raka', ['setback', 'waiting'], ['fresh_graduate', 'student'], P('Raka’s thirty-one applications', 'Tiga puluh satu lamaran Raka'), P('Raka, a statistics graduate, sent thirty-one applications in two months. Twenty-four closed at CV screening. On the Sunday he finally debriefed them, the pattern was obvious: a two-column CV that screening software read badly, and none of the keywords from the job descriptions. He rebuilt it in one column, tailored it to eight roles instead of thirty, and within three weeks had three assessments and his first interview.', 'Raka, lulusan statistika, mengirim tiga puluh satu lamaran dalam dua bulan. Dua puluh empat ditutup di seleksi CV. Pada hari Minggu ketika ia akhirnya men-debrief semuanya, polanya jelas: CV dua kolom yang terbaca buruk oleh perangkat penyaring, dan tak satu pun kata kunci dari deskripsi lowongan. Ia membangunnya ulang dalam satu kolom, menyesuaikannya untuk delapan peran alih-alih tiga puluh, dan dalam tiga minggu mendapat tiga asesmen dan wawancara pertamanya.'), P('The count was never the problem. The pattern was.', 'Masalahnya bukan jumlah. Masalahnya pola.'), '../../assets/bg/stage-foundation.jpg'],
    ['s-sari', ['nerves', 'setback'], ['fresh_graduate', 'student'], P('Sari and the ninety seconds', 'Sari dan sembilan puluh detik'), P('Sari froze at “tell me about yourself” in her first HR interview and talked for four minutes without landing anywhere. That night she wrote a debrief, then a 90-second opening, and said it aloud every morning for a week. At her next interview the same question came first. She answered in eighty seconds and watched the interviewer start taking notes.', 'Sari membeku saat “ceritakan tentang dirimu” di wawancara HR pertamanya dan bicara empat menit tanpa arah. Malam itu ia menulis debrief, lalu pembukaan 90 detik, dan mengucapkannya keras-keras setiap pagi selama seminggu. Di wawancara berikutnya pertanyaan yang sama datang pertama. Ia menjawab dalam delapan puluh detik dan melihat pewawancara mulai mencatat.'), P('Rehearsed words free your attention for the conversation.', 'Kata-kata yang terlatih membebaskan perhatianmu untuk percakapan.'), '../../assets/bg/fg-sprint-interview.jpg'],
    ['s-bayu', ['plateau', 'comparison'], ['early_professional'], P('Bayu’s quiet quarter', 'Kuartal sunyi Bayu'), P('Two years into an analyst role, Bayu did good work that nobody above his manager saw. He started a monthly win log and a five-line Friday note. At mid-year review his manager read his own numbers back to him — and put his name forward to lead the next reporting project.', 'Dua tahun di peran analis, Bayu bekerja baik tetapi tak terlihat oleh siapa pun di atas manajernya. Ia mulai mencatat kemenangan bulanan dan catatan Jumat lima baris. Di tinjauan tengah tahun, manajernya membacakan kembali angka-angkanya sendiri — dan mengajukan namanya untuk memimpin proyek pelaporan berikutnya.'), P('Good work needs a paper trail to travel.', 'Kerja baik butuh jejak tertulis agar sampai ke mana-mana.'), '../../assets/bg/visibility.jpg'],
    ['s-wulan', ['start', 'decision', 'comparison'], ['experienced_professional', 'early_professional'], P('Wulan changes lanes', 'Wulan pindah jalur'), P('After six years as a teacher, Wulan wanted to move into learning and development in a bank. She listed what transferred — designing lessons, reading a room, measuring progress — held three short conversations with people already in the field, and built a two-page portfolio. The move she took was sideways in title and forward in direction.', 'Setelah enam tahun menjadi guru, Wulan ingin pindah ke bidang pembelajaran dan pengembangan di sebuah bank. Ia mendaftar apa yang bisa dibawa — merancang pelajaran, membaca suasana ruangan, mengukur kemajuan — melakukan tiga percakapan singkat dengan orang yang sudah di bidang itu, dan menyusun portofolio dua halaman. Langkah yang ia ambil menyamping secara jabatan, tetapi maju secara arah.'), P('A sideways step in the right direction is still progress.', 'Langkah menyamping ke arah yang benar tetaplah kemajuan.'), '../../assets/bg/journey-start.jpg'],
    ['s-intan', ['decision'], ['fresh_graduate', 'early_professional'], P('Intan’s two offers', 'Dua tawaran Intan'), P('Intan held two offers: one paid noticeably more; the other came with a manager known for developing people and a rotation across three teams. She wrote down what she wanted to be able to do in three years, scored both offers against it, and chose the second — then asked for, and got, a training budget written into the letter.', 'Intan memegang dua tawaran: satu bergaji jelas lebih tinggi; yang lain datang dengan manajer yang dikenal mengembangkan orang dan rotasi di tiga tim. Ia menuliskan apa yang ingin bisa ia lakukan dalam tiga tahun, menilai kedua tawaran terhadapnya, dan memilih yang kedua — lalu meminta, dan mendapatkan, anggaran pelatihan yang ditulis di suratnya.'), P('Decide against your destination, then negotiate.', 'Putuskan berdasarkan tujuanmu, lalu negosiasikan.'), '../../assets/bg/negotiation.jpg'],
    ['s-putra', ['slump', 'momentum'], ['any'], P('Putra starts again, smaller', 'Putra mulai lagi, lebih kecil'), P('After a month of missed habits and a plan he had stopped opening, Putra cut everything back to one habit — twenty minutes of a module each weekday morning — and a Sunday review. Three weeks later he had twelve lessons done, and added applications back in, one a day.', 'Setelah sebulan kebiasaan terlewat dan rencana yang tak lagi ia buka, Putra memangkas semuanya menjadi satu kebiasaan — dua puluh menit modul setiap pagi hari kerja — dan tinjauan hari Minggu. Tiga minggu kemudian dua belas pelajaran selesai, dan ia menambahkan lamaran lagi, satu per hari.'), P('When you fall behind, shrink the plan — don’t drop it.', 'Saat tertinggal, kecilkan rencananya — jangan tinggalkan.'), '../../assets/bg/resilience.jpg']
  ].forEach(function (x) { add({ id: x[0], type: 'story', sit: x[1], stg: x[2], title: x[3], body: x[4], take: x[5], img: x[6] }); });

  /* short films — the platform’s own subtitled lesson films, plus one composed reset */
  var F = IMG + 'lms/the-map/';
  [
    ['v-mindset1', ['growth', 'setback', 'comparison'], 'mindset-101-1', P('What mindsets are, and where your defaults come from', 'Apa itu mindset, dan dari mana mindset bawaanmu berasal'), '3:04', P('The Map · Lesson 1.3', 'The Map · Pelajaran 1.3')],
    ['v-mindset2', ['nerves', 'setback', 'slump'], 'mindset-101-2', P('Shifting a mindset: priming and the APR technique', 'Menggeser mindset: priming dan teknik APR'), '1:32', P('The Map · Lesson 1.3', 'The Map · Pelajaran 1.3')],
    ['v-adapt1', ['newrole', 'plateau', 'start'], 'adaptability-1', P('When the ground shifts: learning skills that travel', 'Saat pijakan bergeser: keterampilan yang bisa dibawa ke mana pun'), '1:33', P('The Map · Lesson 1.1', 'The Map · Pelajaran 1.1')],
    ['v-adapt2', ['newrole', 'nerves', 'slump'], 'adaptability-2', P('A problem with many moving pieces: asking for help early', 'Masalah dengan banyak bagian bergerak: minta bantuan sejak awal'), '0:57', P('The Map · Lesson 1.1', 'The Map · Pelajaran 1.1')],
    ['v-adapt3', ['newrole', 'growth'], 'adaptability-3', P('New role, new ground: feedback, connection and a clearer message', 'Peran baru, medan baru: umpan balik, koneksi, dan pesan yang lebih jelas'), '1:44', P('The Map · Lesson 1.1', 'The Map · Pelajaran 1.1')],
    ['v-intent', ['start', 'growth', 'slump'], 'learning-intention-1', P('Why set a learning intention at all?', 'Mengapa perlu menetapkan niat belajar?'), '2:19', P('The Map · Lesson 1.2', 'The Map · Pelajaran 1.2')],
    ['v-habits', ['slump', 'growth', 'momentum'], 'learning-habits', P('The power of learning habits', 'Kekuatan kebiasaan belajar'), '3:41', P('The Map · Lesson 2.2', 'The Map · Pelajaran 2.2')]
  ].forEach(function (x) {
    var base = F + x[2] + (x[2] === 'learning-habits' ? '' : '-brand');
    add({ id: x[0], type: 'video', sit: x[1], title: x[3], dur: x[4], src: base + '.mp4', poster: F + x[2] + '-poster.jpg', vtt: { en: F + x[2] + '-en.vtt', id: F + x[2] + '-id.vtt' }, from: x[5] });
  });
  add({ id: 'v-reset', type: 'video', sit: ['slump', 'setback', 'nerves', 'waiting'], title: P('The 60-second reset', 'Jeda ulang 60 detik'), dur: '1:00', src: IMG + '03-climb.mp4', poster: IMG + 'm/03-climb.jpg', reset: true, from: P('Metanoia · guided minute', 'Metanoia · satu menit terpandu'),
    lines: [P('Put the phone down. Sit back.', 'Letakkan ponselmu. Duduk bersandar.'), P('Breathe in for four… and out for six.', 'Tarik napas empat hitungan… hembuskan enam.'), P('Name what you feel — one word is enough.', 'Namai yang kamu rasakan — satu kata cukup.'), P('Now name one thing still in your control today.', 'Sekarang sebut satu hal yang masih dalam kendalimu hari ini.'), P('Make it small: twenty-five minutes or less.', 'Buat kecil: dua puluh lima menit atau kurang.'), P('One more slow breath.', 'Satu napas pelan lagi.'), P('Progress is not a mood. It is the next small step.', 'Kemajuan bukan suasana hati. Ia adalah langkah kecil berikutnya.'), P('Go and take it.', 'Pergilah dan lakukan.')] });

  /* slideshows */
  [
    ['d-reframe', ['setback'], P('The rejection reframe', 'Membingkai ulang penolakan'), [
      [P('A no is information', 'Penolakan adalah informasi'), P('It tells you about one fit, at one moment, in one process. It does not measure your worth.', 'Ia bercerita tentang satu kecocokan, pada satu momen, dalam satu proses. Ia tidak mengukur nilaimu.'), 'bg/resilience.jpg'],
      [P('Where did it stop?', 'Di mana berhentinya?'), P('CV screening → the document. Tests → practice. Interviews → stories and delivery. Final round → fit and competition.', 'Seleksi CV → dokumennya. Tes → latihan. Wawancara → cerita dan penyampaian. Babak final → kecocokan dan persaingan.'), 'bg/gauntlet/gate-01-submission.jpg'],
      [P('One change, not ten', 'Satu perubahan, bukan sepuluh'), P('Pick the single change that the pattern points to. Make it before the next application.', 'Pilih satu perubahan yang ditunjuk polanya. Lakukan sebelum lamaran berikutnya.'), 'bg/stage-execution.jpg'],
      [P('Keep the pipeline moving', 'Jaga alur tetap bergerak'), P('The best cure for one no is the next well-aimed yes-in-progress. Plot the next route this week.', 'Obat terbaik untuk satu penolakan adalah rute berikutnya yang terarah. Buat rute berikutnya minggu ini.'), 'm/03-climb.jpg'],
      [P('Write it down', 'Tuliskan'), P('Two lines in the debrief: where it stopped, what you will change. Future you will thank you.', 'Dua baris di debrief: di mana berhenti, apa yang akan kamu ubah. Dirimu di masa depan akan berterima kasih.'), 'bg/journey-start.jpg']
    ]],
    ['d-smallwins', ['slump', 'momentum', 'plateau'], P('Small wins, long arc', 'Kemenangan kecil, busur panjang'), [
      [P('Progress is fuel', 'Kemajuan adalah bahan bakar'), P('Research on daily work suggests that making progress on meaningful work is one of the strongest lifts to motivation.', 'Riset tentang kerja harian menunjukkan bahwa membuat kemajuan pada pekerjaan bermakna adalah salah satu pendongkrak motivasi terkuat.'), 'm/02-prep.jpg'],
      [P('Shrink the task', 'Kecilkan tugasnya'), P('Too big to start means too big. Cut it until it fits in twenty-five minutes.', 'Terlalu besar untuk dimulai berarti terlalu besar. Potong sampai muat dalam dua puluh lima menit.'), 'bg/stage-activation.jpg'],
      [P('Make it visible', 'Buat terlihat'), P('Tick the habit. Log the win. Seeing progress is part of feeling it.', 'Centang kebiasaannya. Catat kemenangannya. Melihat kemajuan adalah bagian dari merasakannya.'), 'bg/stage-foundation.jpg'],
      [P('Attach it to a routine', 'Tempelkan pada rutinitas'), P('After coffee, the module. After lunch, the application. Anchors beat willpower.', 'Setelah kopi, modul. Setelah makan siang, lamaran. Jangkar mengalahkan tekad.'), 'm/04-basecamp.jpg'],
      [P('Review on Sunday', 'Tinjau hari Minggu'), P('Fifteen minutes: what moved, what did not, three priorities for the week.', 'Lima belas menit: apa yang bergerak, apa yang tidak, tiga prioritas untuk minggu itu.'), 'm/05-summit.jpg']
    ]],
    ['d-room', ['nerves'], P('Walking into the room', 'Memasuki ruangan'), [
      [P('Nerves are energy', 'Gugup adalah energi'), P('Your body is getting ready. Call it excitement and point it at the conversation.', 'Tubuhmu sedang bersiap. Sebut itu antusias dan arahkan ke percakapan.'), 'bg/fg-sprint-interview.jpg'],
      [P('Five stories cover most questions', 'Lima cerita menjawab sebagian besar pertanyaan'), P('Prepare them in STAR form: situation, task, action, result — with a number.', 'Siapkan dalam bentuk STAR: situasi, tugas, tindakan, hasil — dengan angka.'), 'bg/rope-team.jpg'],
      [P('Open with ninety seconds', 'Buka dengan sembilan puluh detik'), P('Who you are, what you have done, why this role. Rehearsed aloud, not memorised word for word.', 'Siapa dirimu, apa yang sudah kamu lakukan, mengapa peran ini. Dilatih bersuara, bukan dihafal kata per kata.'), 'bg/fg-sprint-positioning.jpg'],
      [P('A pause is allowed', 'Jeda itu boleh'), P('“Let me think about that for a moment” is a strong sentence. Silence while you think reads as care.', '“Izinkan saya memikirkannya sejenak” adalah kalimat yang kuat. Diam saat berpikir terbaca sebagai kesungguhan.'), 'bg/two-different-muscles.jpg'],
      [P('Debrief the same day', 'Debrief di hari yang sama'), P('Three lines before you sleep. It turns every interview into practice for the next.', 'Tiga baris sebelum tidur. Ia mengubah setiap wawancara menjadi latihan untuk yang berikutnya.'), 'bg/journey-start.jpg']
    ]],
    ['d-ninety', ['newrole', 'decision'], P('Your first ninety days', 'Sembilan puluh hari pertamamu'), [
      [P('Learn the scoreboard', 'Pelajari papan skornya'), P('Ask your manager how success in this role is judged — in their words.', 'Tanya manajermu bagaimana keberhasilan di peran ini dinilai — dengan kata-kata mereka.'), 'bg/early-professional.jpg'],
      [P('Map the people', 'Petakan orang-orangnya'), P('Who do you depend on, who depends on you, who decides? Meet each of them early.', 'Kepada siapa kamu bergantung, siapa bergantung padamu, siapa yang memutuskan? Temui masing-masing sejak awal.'), 'bg/rope-team.jpg'],
      [P('Deliver one early win', 'Tunaikan satu kemenangan awal'), P('Small, visible, useful to your manager. Reliability first, brilliance later.', 'Kecil, terlihat, berguna bagi manajermu. Keandalan dulu, kecemerlangan kemudian.'), 'bg/stage-execution.jpg'],
      [P('Ask for feedback at day thirty', 'Minta umpan balik di hari ketiga puluh'), P('“What should I do more of, and less of?” Then show you acted on it.', '“Apa yang perlu kulakukan lebih banyak, dan lebih sedikit?” Lalu tunjukkan kamu menjalankannya.'), 'bg/visibility.jpg'],
      [P('Start the win log', 'Mulai catatan kemenangan'), P('Dated, with a number and a witness. Your first review will thank you.', 'Bertanggal, dengan angka dan saksi. Tinjauan pertamamu akan berterima kasih.'), 'm/05-summit.jpg']
    ]]
  ].forEach(function (x) { add({ id: x[0], type: 'deck', sit: x[1], title: x[2], slides: x[3].map(function (s) { return { h: s[0], p: s[1], img: IMG + s[2] }; }) }); });

  /* mindset guidance */
  [
    ['m-label', ['setback', 'nerves'], P('Label the feeling, then the next step', 'Namai perasaannya, lalu langkah berikutnya'), P('Say, or write, one word for what you feel — disappointed, anxious, flat. Then one sentence for the next step you control. Naming the feeling makes the step easier to see.', 'Ucapkan, atau tulis, satu kata untuk yang kamu rasakan — kecewa, cemas, hampa. Lalu satu kalimat untuk langkah berikutnya yang kamu kendalikan. Menamai perasaan membuat langkahnya lebih mudah terlihat.'), null],
    ['m-yet', ['setback', 'growth', 'comparison'], P('Add “yet”', 'Tambahkan “belum”'), P('“I can’t do case interviews” becomes “I can’t do case interviews yet.” One word turns a verdict into a plan — and points at what to practise.', '“Aku tidak bisa wawancara kasus” menjadi “Aku belum bisa wawancara kasus.” Satu kata mengubah vonis menjadi rencana — dan menunjuk apa yang perlu dilatih.'), P('After Carol S. Dweck, Mindset (2006)', 'Mengacu pada Carol S. Dweck, Mindset (2006)')],
    ['m-control', ['waiting', 'decision', 'setback'], P('Sort the controllables', 'Pilah yang bisa dikendalikan'), P('Draw two columns. In your control: the quality of each application, your preparation, your follow-up, your rest. Not in your control: their timeline, the other candidates, the budget. Spend today only on the first column.', 'Buat dua kolom. Dalam kendalimu: kualitas tiap lamaran, persiapanmu, tindak lanjutmu, istirahatmu. Di luar kendalimu: jadwal mereka, kandidat lain, anggarannya. Habiskan hari ini hanya untuk kolom pertama.'), null],
    ['m-two', ['slump', 'start'], P('The two-minute start', 'Mulai dua menit'), P('Commit only to the first two minutes: open the module, write the first line of the cover letter. Starting is the hard part; continuing is usually easier.', 'Berkomitmen hanya pada dua menit pertama: buka modulnya, tulis baris pertama surat lamaran. Memulai adalah bagian tersulit; melanjutkan biasanya lebih mudah.'), P('After the two-minute rule in James Clear, Atomic Habits (2018)', 'Mengacu pada aturan dua menit dalam James Clear, Atomic Habits (2018)')],
    ['m-ifthen', ['slump', 'momentum'], P('Plan for the bad day', 'Rencanakan hari yang buruk'), P('Write one if–then line: “If I miss my morning module, then I do ten minutes after lunch.” Plans that name the obstacle survive contact with it.', 'Tulis satu kalimat jika–maka: “Jika aku melewatkan modul pagi, maka aku mengerjakan sepuluh menit setelah makan siang.” Rencana yang menyebut rintangannya bertahan saat bertemu rintangan itu.'), P('Implementation intentions — Peter M. Gollwitzer, American Psychologist (1999)', 'Niat implementasi — Peter M. Gollwitzer, American Psychologist (1999)')],
    ['m-borrow', ['nerves', 'comparison'], P('Borrow confidence from your evidence', 'Pinjam kepercayaan diri dari buktimu'), P('Before an interview or a hard conversation, reread three wins you logged. Confidence built on evidence holds up better than confidence you try to summon.', 'Sebelum wawancara atau percakapan sulit, baca ulang tiga kemenangan yang kamu catat. Kepercayaan diri yang dibangun di atas bukti lebih kokoh daripada yang coba kamu panggil.'), null],
    ['m-rest', ['slump', 'momentum'], P('Rest is part of the plan', 'Istirahat adalah bagian rencana'), P('Schedule one evening a week with no career work at all. Recovery is where effort turns into capacity.', 'Jadwalkan satu malam seminggu tanpa pekerjaan karier sama sekali. Pemulihan adalah tempat usaha berubah menjadi kapasitas.'), null],
    ['m-values', ['decision'], P('Decide by values, then by numbers', 'Putuskan dengan nilai, lalu dengan angka'), P('List your top three values before you look at the offers again. Score each option against them first; compare the numbers second.', 'Tulis tiga nilai teratasmu sebelum melihat tawarannya lagi. Nilai setiap pilihan terhadapnya dulu; bandingkan angkanya kemudian.'), null]
  ].forEach(function (x) { add({ id: x[0], type: 'mindset', sit: x[1], title: x[2], body: x[3], src: x[4] }); });

  /* perspectives */
  [
    ['p-judge', ['setback', 'comparison'], P('The market is not a judge', 'Pasar bukan hakim'), P('A hiring decision reflects what one team needed on one day, and who else applied. It is a match result, not a verdict on you.', 'Keputusan rekrutmen mencerminkan apa yang dibutuhkan satu tim pada satu hari, dan siapa lagi yang melamar. Itu hasil pencocokan, bukan vonis atas dirimu.')],
    ['p-long', ['decision', 'start', 'comparison'], P('Careers are long', 'Karier itu panjang'), P('Most working lives run for decades. Your first role is a starting position, not a life sentence — choose it for what it teaches you.', 'Kebanyakan kehidupan kerja berlangsung puluhan tahun. Peran pertamamu adalah posisi awal, bukan hukuman seumur hidup — pilih karena apa yang diajarkannya.')],
    ['p-season', ['waiting'], P('Waiting is a season, not a state', 'Menunggu adalah musim, bukan keadaan'), P('Seasons end. Use this one to sharpen what the next season will test: stories, tests, the CV.', 'Musim berakhir. Pakai musim ini untuk mengasah apa yang akan diuji musim berikutnya: cerita, tes, CV.')],
    ['p-habits', ['growth', 'plateau'], P('Seniority is a set of habits', 'Senioritas adalah kumpulan kebiasaan'), P('What people call “senior” is mostly visible habits: closing loops, flagging risk early, making others better. You can start all three this week.', 'Yang disebut orang “senior” sebagian besar adalah kebiasaan yang terlihat: menuntaskan urusan, memberi tanda risiko sejak dini, membuat orang lain lebih baik. Ketiganya bisa kamu mulai minggu ini.')],
    ['p-busy', ['momentum', 'slump'], P('Busy is not the same as moving', 'Sibuk tidak sama dengan bergerak'), P('Ten small tasks can fill a day without moving the route an inch. Ask each morning: which one thing would make today count?', 'Sepuluh tugas kecil bisa memenuhi hari tanpa menggerakkan rute sedikit pun. Tanyakan setiap pagi: satu hal apa yang membuat hari ini berarti?')],
    ['p-watching', ['newrole', 'plateau'], P('Someone is already watching', 'Seseorang sudah memperhatikan'), P('Consistency gets noticed long before brilliance. The colleague who always does what they said is the one people ask for.', 'Konsistensi diperhatikan jauh sebelum kecemerlangan. Rekan yang selalu melakukan apa yang ia katakan adalah yang dicari orang.')]
  ].forEach(function (x) { add({ id: x[0], type: 'perspective', sit: x[1], title: x[2], body: x[3] }); });

  /* reflection prompts */
  [
    ['r-no', ['setback'], P('What did this “no” tell me that I can use on the next application?', 'Apa yang dikatakan “tidak” ini yang bisa kupakai di lamaran berikutnya?')],
    ['r-wait', ['waiting'], P('What is one thing in my control that I can improve while I wait?', 'Apa satu hal dalam kendaliku yang bisa kuperbaiki selagi menunggu?')],
    ['r-story', ['nerves'], P('Which story do I most want the interviewer to remember — and why that one?', 'Cerita mana yang paling ingin kuingat oleh pewawancara — dan mengapa yang itu?')],
    ['r-proud', ['decision'], P('Five years from now, which choice would I be proudest to explain?', 'Lima tahun lagi, pilihan mana yang paling bangga kujelaskan?')],
    ['r-small', ['slump'], P('What is the smallest version of my plan that I could keep this week?', 'Apa versi terkecil rencanaku yang bisa kujaga minggu ini?')],
    ['r-worked', ['momentum'], P('What made this week work — and how do I protect it next week?', 'Apa yang membuat minggu ini berhasil — dan bagaimana menjaganya minggu depan?')],
    ['r-seen', ['plateau'], P('Who needs to see my work who has not seen it yet?', 'Siapa yang perlu melihat kerjaku tetapi belum melihatnya?')],
    ['r-success', ['newrole'], P('What does success in this role look like — in my manager’s words?', 'Seperti apa keberhasilan di peran ini — menurut kata-kata manajerku?')],
    ['r-ninety', ['comparison'], P('What can I do today that I could not do ninety days ago?', 'Apa yang bisa kulakukan hari ini yang belum bisa kulakukan sembilan puluh hari lalu?')],
    ['r-why', ['start'], P('Why does my destination matter to me — in one sentence?', 'Mengapa tujuanku penting bagiku — dalam satu kalimat?')],
    ['r-helped', ['growth'], P('Whom have I helped get better at their work this month?', 'Siapa yang sudah kubantu menjadi lebih baik dalam pekerjaannya bulan ini?')]
  ].forEach(function (x) { add({ id: x[0], type: 'prompt', sit: x[1], text: x[2] }); });

  /* ═══ personalisation ═══ */
  function detect() {
    var sig = window.MT_COMPASS_NAV ? MT_COMPASS_NAV.signals() : { phase: 'prepare', status: 'on', trend: 'none', stage: '', hab7: { pct: null }, idle: null };
    var apps = C.getApplications();
    var recentRej = apps.filter(function (a) { return a.status === 'rejected' && (Date.now() - new Date(a.updatedAt || a.applicationDate).getTime()) <= 30 * DAY; }).length;
    var D = [];
    var addS = function (k, w, why) { if (!D.some(function (x) { return x.k === k; })) D.push({ k: k, w: w, why: why }); };
    if (sig.phase === 'decide') addS('decision', 3, P(sig.offers + (sig.offers === 1 ? ' offer is' : ' offers are') + ' waiting for your decision', sig.offers + ' tawaran menunggu keputusanmu'));
    if (sig.interviews) addS('nerves', 3, P(sig.interviews + (sig.interviews === 1 ? ' route is' : ' routes are') + ' at the interview stages', sig.interviews + ' rute di tahap wawancara'));
    if (sig.phase === 'assess') addS('nerves', 2, P('You have assessments coming up', 'Ada asesmen yang akan datang'));
    if (recentRej) addS('setback', 3, P(recentRej + (recentRej === 1 ? ' route' : ' routes') + ' closed in the last 30 days', recentRej + ' rute ditutup dalam 30 hari terakhir'));
    if (sig.status !== 'on' || sig.trend === 'down' || (sig.hab7 && sig.hab7.pct != null && sig.hab7.pct < 50) || (sig.idle != null && sig.idle >= 7)) addS('slump', 2, sig.trend === 'down' ? P('Your logged activity has slowed', 'Aktivitas yang kamu catat melambat') : sig.idle >= 7 ? P('No activity for ' + sig.idle + ' days', 'Tak ada aktivitas selama ' + sig.idle + ' hari') : P('The Navigator shows you drifting', 'Navigator menunjukkan kamu mulai bergeser'));
    if (sig.phase === 'apply') addS('waiting', 2, P('Your routes are in the application stages', 'Rute-rutemu ada di tahap lamaran'));
    if (sig.phase === 'prepare') addS('start', 2, P('You are in the preparation phase', 'Kamu di fase persiapan'));
    if (sig.trend === 'up' && sig.status === 'on') addS('momentum', 2, P('Your activity is rising', 'Aktivitasmu meningkat'));
    if (sig.phase === 'grow') { addS('plateau', 2, P('You are growing in role', 'Kamu sedang bertumbuh di peran')); addS('growth', 2, P('You are growing in role', 'Kamu sedang bertumbuh di peran')); }
    if (sig.objective === 'leadership') addS('growth', 3, P('Your objective is leadership', 'Tujuanmu adalah kepemimpinan'));
    if (sig.stage === 'early_professional' && sig.phase !== 'grow') addS('newrole', 1, P('You are early in your career', 'Kamu di awal karier'));
    if (sig.stage === 'student' || sig.stage === 'fresh_graduate' || !sig.stage) addS('comparison', 1, P('Common at this stage', 'Umum di tahap ini'));
    if (!D.length) addS('start', 1, P('A good place to begin', 'Tempat yang baik untuk mulai'));
    D.sort(function (a, b) { return b.w - a.w; });
    return { list: D, sig: sig };
  }
  function rank(det) {
    var seen = load(K.seen, {}), td = today(), st = det.sig.stage;
    return L.map(function (it) {
      var sc = 0, why = null;
      det.list.forEach(function (d) { var i = it.sit.indexOf(d.k); if (i > -1) { var v = d.w * (i === 0 ? 1.5 : 1); if (v > sc) why = d; sc += v; } });
      if (it.stg && st) sc += it.stg.indexOf(st) > -1 || it.stg.indexOf('any') > -1 ? 1.5 : -1;
      if (seen[it.id]) sc -= 1.2;
      sc += hash(it.id + td) * 1.4;
      return { it: it, sc: sc, why: why };
    }).sort(function (a, b) { return b.sc - a.sc; });
  }

  /* ═══ view ═══ */
  var state = { type: 'all', sit: null, shown: 12, saved: false, open: null, spark: 0 };
  function saved() { var s = load(K.saved, []); return Array.isArray(s) ? s : []; }
  function toggleSave(id) { var s = saved(), i = s.indexOf(id); if (i > -1) s.splice(i, 1); else s.push(id); save(K.saved, s); }
  function markSeen(id) { var s = load(K.seen, {}); if (!s[id]) { s[id] = today(); save(K.seen, s); } }
  function heart(id, host) {
    var on = saved().indexOf(id) > -1;
    var b = el('button', 'mv-heart' + (on ? ' on' : '')); b.type = 'button';
    b.setAttribute('aria-pressed', on ? 'true' : 'false'); b.setAttribute('aria-label', on ? T('Remove from saved', 'Hapus dari simpanan') : T('Save', 'Simpan'));
    b.innerHTML = SH.ico('heart');
    b.addEventListener('click', function (e) { e.stopPropagation(); toggleSave(id); b.classList.toggle('on'); b.setAttribute('aria-pressed', b.classList.contains('on') ? 'true' : 'false'); var c = host && host.querySelector('.mv-saved-n'); if (c) c.textContent = saved().length; });
    return b;
  }
  function whyLine(r) { return r.why ? el('div', 'mv-why', SH.ico(SIT[r.why.k].icon) + '<span>' + esc(T('For you: ', 'Untukmu: ')) + esc(tx(r.why.why)) + '</span>') : null; }

  function card(r, host) {
    var it = r.it;
    var c = el('article', 'glass-card mv-card mv-' + it.type); c.dataset.id = it.id;
    var top = el('div', 'mv-card-top');
    top.appendChild(el('span', 'mv-type', SH.ico(TYPE_ICON[it.type]) + esc(tx(TYPE_LABEL[it.type]))));
    top.appendChild(heart(it.id, host));
    c.appendChild(top);
    if (it.type === 'quote') {
      c.appendChild(el('blockquote', 'mv-quote', esc(tx(it.text))));
      c.appendChild(el('div', 'mv-cite', '— <b>' + esc(it.who) + '</b>, ' + esc(tx(it.src))));
    } else if (it.type === 'prompt') {
      c.appendChild(el('p', 'mv-prompt', esc(tx(it.text))));
      var box = el('div', 'mv-reflect');
      var ta = SH.input('textarea', { placeholder: { en: 'Two honest sentences are enough.', id: 'Dua kalimat jujur sudah cukup.' } }); ta.rows = 3;
      box.appendChild(ta);
      var ok = el('span', 'mv-ok');
      box.appendChild(el('div', 'mv-reflect-act'));
      box.lastChild.appendChild(SH.btn({ en: 'Save to my journal', id: 'Simpan ke jurnalku' }, { sm: true, iconL: 'pen', onClick: function () {
        if (!ta.value.trim()) { ta.focus(); return; }
        var j = load(K.journal, []); if (!Array.isArray(j)) j = [];
        j.push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), date: today(), prompt: it.text, text: ta.value.trim(), src: 'motivation' });
        save(K.journal, j); ta.value = ''; ok.textContent = T('Saved to Discovery → journal', 'Tersimpan di Penjelajahan → jurnal'); markSeen(it.id);
      } }));
      box.lastChild.appendChild(ok);
      c.appendChild(box);
    } else if (it.type === 'video') {
      var th = el('button', 'mv-thumb'); th.type = 'button';
      th.innerHTML = '<img src="' + it.poster + '" alt="" loading="lazy" decoding="async"><span class="mv-play">' + SH.ico('play') + '</span><span class="mv-dur">' + esc(it.dur) + '</span>';
      th.addEventListener('click', function () { markSeen(it.id); openVideo(it); });
      c.appendChild(th);
      c.appendChild(el('h4', null, esc(tx(it.title))));
      c.appendChild(el('div', 'mv-cite', esc(tx(it.from)) + (it.reset ? '' : ' · ' + esc(T('EN/ID subtitles', 'Subtitel EN/ID')))));
    } else if (it.type === 'deck') {
      var cv = el('button', 'mv-deck-cover'); cv.type = 'button';
      cv.style.backgroundImage = 'url(\'' + it.slides[0].img + '\')';
      cv.innerHTML = '<span class="mv-deck-veil"></span><span class="mv-deck-n">' + it.slides.length + ' ' + esc(T('slides', 'salindia')) + '</span><span class="mv-deck-h">' + esc(tx(it.title)) + '</span><span class="mv-play sm">' + SH.ico('play') + '</span>';
      cv.addEventListener('click', function () { markSeen(it.id); openDeck(it); });
      c.appendChild(cv);
    } else {
      if (it.type === 'story') { var im = el('div', 'mv-story-img'); im.style.backgroundImage = 'url(\'' + it.img + '\')'; c.appendChild(im); }
      c.appendChild(el('h4', null, esc(tx(it.title))));
      var body = el('div', 'mv-body');
      body.appendChild(el('p', null, esc(tx(it.body))));
      if (it.take) body.appendChild(el('p', 'mv-take', '<b>' + esc(T('Take-away: ', 'Pelajaran: ')) + '</b>' + esc(tx(it.take))));
      if (it.src) body.appendChild(el('div', 'mv-cite', esc(T('Source: ', 'Sumber: ')) + esc(tx(it.src))));
      if (it.type === 'story') body.appendChild(el('div', 'mv-cite', esc(T('Illustrative story — a fictional composite, not a real person.', 'Kisah ilustratif — gabungan fiktif, bukan orang sungguhan.'))));
      if (it.go) body.appendChild(SH.btn({ en: 'Put it into practice', id: 'Terapkan' }, { ghost: true, sm: true, icon: 'arrow', onClick: function () { if (it.go.href) location.href = it.go.href; else if (it.go.tab) C.activateTab(it.go.tab); } }));
      var long = it.type === 'story' || it.type === 'lesson';
      if (long) {
        body.classList.add('clamp');
        var more = el('button', 'mv-more', esc(T('Read more', 'Baca selengkapnya'))); more.type = 'button'; more.setAttribute('aria-expanded', 'false');
        more.addEventListener('click', function () { var o = body.classList.toggle('clamp'); more.textContent = o ? T('Read more', 'Baca selengkapnya') : T('Show less', 'Tampilkan lebih sedikit'); more.setAttribute('aria-expanded', o ? 'false' : 'true'); if (!o) markSeen(it.id); });
        c.appendChild(body); c.appendChild(more);
      } else c.appendChild(body);
    }
    var w = whyLine(r); if (w) c.appendChild(w);
    return c;
  }

  /* modal: video + deck */
  var modal = null, modalBody = null;
  function ensureModal() {
    if (modal) return;
    modal = el('div', 'mv-modal'); modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true');
    var inner = el('div', 'mv-modal-card');
    var x = el('button', 'mv-x', SH.ico('x')); x.type = 'button'; x.setAttribute('aria-label', 'Close'); x.addEventListener('click', closeModal);
    inner.appendChild(x);
    modalBody = el('div', 'mv-modal-body'); inner.appendChild(modalBody);
    modal.appendChild(inner);
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function (e) { if (!modal.classList.contains('show')) return; if (e.key === 'Escape') closeModal(); if (modal._key) modal._key(e); });
    document.body.appendChild(modal);
  }
  function closeModal() { if (!modal) return; modal.querySelectorAll('video').forEach(function (v) { try { v.pause(); } catch (e) {} }); if (modal._timer) clearInterval(modal._timer); modal._key = null; modal.classList.remove('show'); modalBody.innerHTML = ''; document.body.style.overflow = ''; if (modal._ret) try { modal._ret.focus(); } catch (e) {} }
  function openModal(label) { ensureModal(); modal._ret = document.activeElement; modal.setAttribute('aria-label', label); modal.classList.add('show'); document.body.style.overflow = 'hidden'; setTimeout(function () { var f = modal.querySelector('.mv-x'); if (f) f.focus(); }, 30); }
  function openVideo(it) {
    ensureModal(); modalBody.innerHTML = '';
    var wrap = el('div', 'mv-vwrap' + (it.reset ? ' reset' : ''));
    var v = document.createElement('video'); v.playsInline = true; v.preload = 'metadata'; v.poster = it.poster; v.src = it.src;
    if (it.reset) {
      v.muted = true; v.loop = true; v.autoplay = true;
      wrap.appendChild(v);
      var cap = el('div', 'mv-reset-cap'); wrap.appendChild(cap);
      var bar = el('div', 'mv-reset-bar', '<i></i>'); wrap.appendChild(bar);
      var k = 0, t0 = Date.now(), n = it.lines.length;
      var show = function () { cap.classList.remove('in'); setTimeout(function () { cap.textContent = tx(it.lines[k]); cap.classList.add('in'); }, 250); };
      show();
      modal._timer = setInterval(function () {
        var el2 = (Date.now() - t0) / 1000; bar.firstChild.style.width = Math.min(100, el2 / 60 * 100) + '%';
        var nk = Math.min(n - 1, Math.floor(el2 / (60 / n))); if (nk !== k) { k = nk; show(); }
        if (el2 >= 60) { clearInterval(modal._timer); }
      }, 200);
    } else {
      v.controls = true;
      ['en', 'id'].forEach(function (l) { var tr = document.createElement('track'); tr.kind = 'subtitles'; tr.srclang = l; tr.label = l === 'en' ? 'English' : 'Bahasa Indonesia'; tr.src = it.vtt[l]; if (l === lang()) tr.default = true; v.appendChild(tr); });
      wrap.appendChild(v);
    }
    modalBody.appendChild(wrap);
    modalBody.appendChild(el('div', 'mv-modal-meta', '<b>' + esc(tx(it.title)) + '</b><span>' + esc(tx(it.from)) + ' · ' + esc(it.dur) + '</span>'));
    openModal(tx(it.title));
    if (!it.reset) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
  }
  function openDeck(it) {
    ensureModal(); modalBody.innerHTML = '';
    var i = 0, n = it.slides.length;
    var stage = el('div', 'mv-deck');
    var slide = el('div', 'mv-slide'); stage.appendChild(slide);
    var nav = el('div', 'mv-deck-nav');
    var prev = el('button', 'mv-dn', SH.ico('chevL')); prev.type = 'button'; prev.setAttribute('aria-label', T('Previous slide', 'Salindia sebelumnya'));
    var next = el('button', 'mv-dn', SH.ico('chevR')); next.type = 'button'; next.setAttribute('aria-label', T('Next slide', 'Salindia berikutnya'));
    var dots = el('div', 'mv-dots');
    nav.appendChild(prev); nav.appendChild(dots); nav.appendChild(next);
    stage.appendChild(nav);
    function paint(dir) {
      var s = it.slides[i];
      slide.classList.remove('in'); slide.style.setProperty('--dir', dir || 0);
      requestAnimationFrame(function () {
        slide.style.backgroundImage = 'url(\'' + s.img + '\')';
        slide.innerHTML = '<span class="mv-slide-veil"></span><div class="mv-slide-tx"><span class="mv-slide-k">' + esc(tx(it.title)) + ' · ' + (i + 1) + '/' + n + '</span><h3>' + esc(tx(s.h)) + '</h3><p>' + esc(tx(s.p)) + '</p></div>';
        requestAnimationFrame(function () { slide.classList.add('in'); });
      });
      dots.innerHTML = ''; for (var k = 0; k < n; k++) (function (k) { var d = el('button', k === i ? 'on' : ''); d.type = 'button'; d.setAttribute('aria-label', (k + 1) + '/' + n); d.addEventListener('click', function () { var dd = k > i ? 1 : -1; i = k; paint(dd); }); dots.appendChild(d); })(k);
      prev.disabled = i === 0; next.disabled = i === n - 1;
    }
    prev.addEventListener('click', function () { if (i > 0) { i--; paint(-1); } });
    next.addEventListener('click', function () { if (i < n - 1) { i++; paint(1); } });
    var sx = null;
    slide.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    slide.addEventListener('touchend', function (e) { if (sx == null) return; var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) { if (dx < 0 && i < n - 1) { i++; paint(1); } else if (dx > 0 && i > 0) { i--; paint(-1); } } sx = null; });
    modalBody.appendChild(stage);
    modal._key = function (e) { if (e.key === 'ArrowRight' && i < n - 1) { i++; paint(1); } if (e.key === 'ArrowLeft' && i > 0) { i--; paint(-1); } };
    paint(0);
    openModal(tx(it.title));
  }

  function spark(R, host, det) {
    var picks = R.filter(function (r) { return r.it.type === 'quote' || r.it.type === 'insight' || r.it.type === 'perspective'; });
    var r = picks[state.spark % picks.length];
    var it = r.it;
    var c = el('div', 'glass-card mv-spark');
    c.appendChild(el('span', 'mv-spark-k', SH.ico('sparkles') + esc(T('Today’s spark', 'Percikan hari ini'))));
    if (it.type === 'quote') { c.appendChild(el('blockquote', 'mv-spark-q', esc(tx(it.text)))); c.appendChild(el('div', 'mv-cite', '— <b>' + esc(it.who) + '</b>, ' + esc(tx(it.src)))); }
    else { c.appendChild(el('h3', 'mv-spark-h', esc(tx(it.title)))); c.appendChild(el('p', 'mv-spark-p', esc(tx(it.body)))); }
    var w = whyLine(r); if (w) c.appendChild(w);
    var ar = el('div', 'mv-spark-act');
    ar.appendChild(heart(it.id, host));
    ar.appendChild(SH.btn({ en: 'Another', id: 'Yang lain' }, { ghost: true, sm: true, iconL: 'refresh', onClick: function () { markSeen(it.id); state.spark++; render(host); } }));
    var pr = R.filter(function (x) { return x.it.type === 'prompt'; })[0];
    if (pr) ar.appendChild(SH.btn({ en: 'Reflect on it', id: 'Renungkan' }, { quiet: true, sm: true, icon: 'arrow', onClick: function () { state.type = 'prompt'; state.sit = null; state.saved = false; render(host); var f = host.querySelector('.mv-feed'); if (f) f.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }));
    c.appendChild(ar);
    return c;
  }

  function render(host) {
    if (!C || !host) return;
    var det = detect(), R = rank(det);
    host.innerHTML = ''; host.classList.add('mv-page');
    /* hero */
    var h = el('div', 'tab-hero ts-tabhero');
    h.innerHTML = '<span class="th-img" style="background-image:url(\'../../assets/bg/resilience.jpg\');background-position:center 40%" aria-hidden="true"></span><span class="th-veil" aria-hidden="true"></span>';
    var inn = el('div', 'th-in');
    inn.appendChild(el('span', 'th-kick', esc(T('Momentum library', 'Pustaka momentum'))));
    inn.appendChild(el('h2', null, esc(T('Motivation for', 'Motivasi untuk')) + ' <span class="g">' + esc(T('where you are', 'posisimu kini')) + '</span>'));
    inn.appendChild(el('p', 'tab-sub', esc(T('Quotes, insights, lessons, stories, short films, slideshows and prompts — chosen for your stage, your progress and what you are facing this week.', 'Kutipan, wawasan, pelajaran, kisah, film pendek, salindia, dan pertanyaan refleksi — dipilih untuk tahapmu, kemajuanmu, dan yang sedang kamu hadapi minggu ini.'))));
    inn.appendChild(el('p', 'tab-stats', '<b>' + L.length + '</b> ' + esc(T('pieces', 'materi')) + ' · <b class="mv-saved-n">' + saved().length + '</b> ' + esc(T('saved', 'tersimpan'))));
    h.appendChild(inn); host.appendChild(h);
    /* spark */
    host.appendChild(spark(R, host, det));
    /* situation chips */
    host.appendChild(el('h3', 'sec-label', esc(T('Chosen for what you are facing', 'Dipilih untuk yang sedang kamu hadapi'))));
    var chips = el('div', 'mv-sits');
    var mk = function (k, label, icon, on, detected, why) {
      var b = el('button', 'mv-sit' + (on ? ' on' : '') + (detected ? ' det' : '')); b.type = 'button'; b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.innerHTML = SH.ico(icon) + '<span>' + esc(tx(label)) + '</span>' + (detected ? '<i title="' + esc(tx(why)) + '"></i>' : '');
      b.addEventListener('click', function () { state.sit = k; state.saved = false; state.shown = 12; render(host); });
      return b;
    };
    chips.appendChild(mk(null, P('For you', 'Untukmu'), 'sparkles', state.sit === null && !state.saved, false));
    det.list.forEach(function (d) { chips.appendChild(mk(d.k, SIT[d.k].label, SIT[d.k].icon, state.sit === d.k, true, d.why)); });
    Object.keys(SIT).filter(function (k) { return !det.list.some(function (d) { return d.k === k; }); }).forEach(function (k) { chips.appendChild(mk(k, SIT[k].label, SIT[k].icon, state.sit === k, false)); });
    var sv = el('button', 'mv-sit' + (state.saved ? ' on' : '')); sv.type = 'button';
    sv.innerHTML = SH.ico('heart') + '<span>' + esc(T('Saved', 'Tersimpan')) + ' (<span class="mv-saved-n">' + saved().length + '</span>)</span>';
    sv.addEventListener('click', function () { state.saved = true; state.sit = null; state.shown = 12; render(host); });
    chips.appendChild(sv);
    host.appendChild(chips);
    host.appendChild(el('p', 'mv-read', esc(T('Detected from your Compass: ', 'Terdeteksi dari Compass-mu: ')) + det.list.slice(0, 3).map(function (d) { return '<b>' + esc(tx(SIT[d.k].label)) + '</b> — ' + esc(tx(d.why)); }).join(' · ')));
    /* type filter */
    var seg = SH.seg({ options: TYPES, value: state.type, onPick: function (k) { state.type = k; state.shown = 12; render(host); } });
    seg.classList.add('mv-types');
    host.appendChild(seg);
    /* feed */
    var list = R.filter(function (r) {
      if (state.saved) return saved().indexOf(r.it.id) > -1;
      if (state.sit && r.it.sit.indexOf(state.sit) < 0) return false;
      return state.type === 'all' || r.it.type === state.type;
    });
    if (state.saved === false && state.type !== 'all' && state.sit === null) list = list; /* keep ranking */
    var feed = el('div', 'mv-feed');
    if (!list.length) feed.appendChild(el('div', 'glass-card nv-empty', esc(state.saved ? T('Nothing saved yet — tap the heart on anything worth keeping.', 'Belum ada yang tersimpan — ketuk hati pada apa pun yang layak disimpan.') : T('Nothing in this combination — try another filter.', 'Tak ada di kombinasi ini — coba filter lain.'))));
    list.slice(0, state.shown).forEach(function (r, i) { var c = card(r, host); c.style.setProperty('--i', i % 12); feed.appendChild(c); });
    host.appendChild(feed);
    if (list.length > state.shown) {
      var mb = SH.btn({ en: 'Show more (' + (list.length - state.shown) + ')', id: 'Tampilkan lagi (' + (list.length - state.shown) + ')' }, { ghost: true, iconL: 'plus', onClick: function () { state.shown += 12; render(host); } });
      var mw = el('div', 'mv-morewrap'); mw.appendChild(mb); host.appendChild(mw);
    }
    host.appendChild(SH.priv({ en: 'About this library', id: 'Tentang pustaka ini' }, { en: 'Quotations are attributed to the published work they come from. Stories are illustrative composites, not real people. Films are Metanoia lesson films with EN/ID subtitles. Your saves and reflections stay in this browser; reflections are added to your Discovery journal.', id: 'Kutipan dicantumkan bersama karya terbitan asalnya. Kisah adalah gabungan ilustratif, bukan orang sungguhan. Film adalah film pelajaran Metanoia dengan subtitel EN/ID. Simpanan dan refleksimu tetap di browser ini; refleksi ditambahkan ke jurnal Penjelajahanmu.' }));
  }

  function renderMini(slot) {
    if (!C || !slot) return;
    var det = detect(), R = rank(det);
    var r = R.filter(function (x) { return x.it.type === 'quote'; })[0];
    slot.innerHTML = '';
    if (!r) return;
    var c = el('button', 'glass-card mv-mini'); c.type = 'button';
    c.innerHTML = '<span class="mv-spark-k">' + SH.ico('sparkles') + esc(T('Today’s spark', 'Percikan hari ini')) + '</span><blockquote>' + esc(tx(r.it.text)) + '</blockquote><span class="mv-cite">— <b>' + esc(r.it.who) + '</b>, ' + esc(tx(r.it.src)) + '</span><span class="nv-mini-go">' + esc(T('More in Motivation', 'Lainnya di Motivasi')) + ' ' + SH.ico('arrow') + '</span>';
    c.addEventListener('click', function () { C.activateTab('motivation'); });
    slot.appendChild(c);
  }

  window.MT_COMPASS_MOTIVATION = {
    init: function (api) { C = api; },
    render: function (host) { state.shown = 12; render(host); },
    renderMini: renderMini,
    _library: function () { return L.map(function (x) { return { id: x.id, type: x.type }; }); },
    _detect: function () { return detect().list.map(function (d) { return d.k; }); }
  };
})();
