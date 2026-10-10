/**
 * THE ROPE — INTERVIEW SPECIALIST · PATHS, EXHIBITS AND CASES
 * -----------------------------------------------------------
 * Content layer for the Interview Specialist (js/rope-sim.js).
 *
 * A path is one interview format a candidate can practise end to end: its
 * sections, the questions inside them, and the rubric dimensions its report
 * scores. Questions are either references into the question bank
 * (MT_ROPE_QBANK, by id) or written here for the path.
 *
 * Integrity rules (same contract as the question bank):
 *  - Every client, company and figure in the cases and exhibits is
 *    FICTIONAL and labelled so in the UI. The arithmetic is internally
 *    consistent so numeric answers can be checked exactly.
 *  - Paths simulate common interview FORMATS. They are independent practice
 *    and are not affiliated with, or endorsed by, any employer, firm,
 *    university or scholarship body.
 *  - Scores are a transparent rubric computed in the browser. `look` lists
 *    are the elements a strong answer usually covers; they are shown to the
 *    candidate, never hidden.
 *
 * Shape:
 *  cats[]      — {id, name, icon}
 *  styles[]    — interviewer styles {id, name, desc, probes, coach, mode}
 *  durations[] — {id, mins, name}
 *  levels[]    — difficulty {id, name, desc}
 *  paths[]     — {id, cat, kind, title, short, about, img, pos, persona, aud[],
 *                 dims[], sections[{id, name, take:[quick,standard,full], qs[]}],
 *                 tips[], cases[] (case paths)}
 *  question    — bank ref {ref, dim} or inline {id, dim, type, sig, d, q, tests,
 *                 coach, look[{n, re}], num{v, tol, unit}, exhibit, solution}
 *  exhibits{}  — {title, kind:'table'|'bars', head[], rows[][], cats[], series[], unit, note}
 *  cases{}     — {name, client, brief, facts[{n, re, fact, key}], steps[], plan{quick,standard,full}}
 */
(function () {
  'use strict';
  function P(en, id) { return { en: en, id: id }; }
  function lk(en, id, re) { return { n: P(en, id), re: re }; }

  /* reusable look-fors */
  var LK = {
    answerFirst: lk('Answer first, then the reasons', 'Jawaban dulu, lalu alasannya', 'recommend|my answer|i would|i suggest|in short|rekomendasi|saran saya|jawaban saya|singkatnya|saya akan'),
    risks: lk('A risk or what could go wrong', 'Risiko atau yang bisa salah', 'risk|downside|could go wrong|watch out|mitigat|risiko|bahaya|antisipasi|mitigasi'),
    nextSteps: lk('Concrete next steps', 'Langkah berikutnya yang konkret', 'next step|pilot|test|first week|first month|timeline|langkah berikut|uji coba|minggu pertama|bulan pertama|jadwal'),
    numbers: lk('Numbers that size the point', 'Angka yang mengukur poinnya', '\\d'),
    metric: lk('A success metric', 'Metrik keberhasilan', 'metric|kpi|measure|conversion|retention|rate|nps|metrik|ukur|konversi|retensi|tingkat')
  };

  window.MT_ROPE_PATHS = {
    meta: { version: 1, updated: '2026-10' },

    cats: [
      { id: 'all', name: P('All interviews', 'Semua wawancara'), icon: 'grid' },
      { id: 'consulting', name: P('Consulting', 'Konsultan'), icon: 'briefcase' },
      { id: 'tech', name: P('Software & Tech', 'Software & Teknologi'), icon: 'code' },
      { id: 'product', name: P('Product & Data', 'Produk & Data'), icon: 'cube' },
      { id: 'finance', name: P('Finance & Banking', 'Keuangan & Perbankan'), icon: 'bank' },
      { id: 'marketing', name: P('Marketing', 'Pemasaran'), icon: 'spark' },
      { id: 'graduate', name: P('Graduate & HR', 'Lulusan & HR'), icon: 'cap' },
      { id: 'public', name: P('Scholarship & Public', 'Beasiswa & Publik'), icon: 'globe' },
      { id: 'leadership', name: P('Leadership & MBA', 'Kepemimpinan & MBA'), icon: 'crown' }
    ],

    styles: [
      { id: 'supportive', name: P('Supportive coach', 'Pelatih suportif'),
        desc: P('Coaching notes before each answer, one gentle follow-up. Best for a first run.', 'Catatan arahan sebelum tiap jawaban, satu pertanyaan lanjutan ringan. Terbaik untuk percobaan pertama.'),
        probes: 1, coach: true, mode: 'practice' },
      { id: 'neutral', name: P('Neutral professional', 'Profesional netral'),
        desc: P('No coaching until the report, up to two follow-ups. Closest to a typical real interview.', 'Tanpa arahan sampai laporan, hingga dua pertanyaan lanjutan. Paling mendekati wawancara sungguhan.'),
        probes: 2, coach: false, mode: 'live' },
      { id: 'challenging', name: P('Challenging partner', 'Mitra penantang'),
        desc: P('Three follow-ups that dig until the story cracks, plus pushback on your conclusions.', 'Tiga pertanyaan lanjutan yang menggali sampai kisahnya retak, plus sanggahan atas kesimpulanmu.'),
        probes: 3, coach: false, mode: 'live', pushback: true }
    ],

    durations: [
      { id: 'quick', mins: 10, name: P('Quick', 'Singkat') },
      { id: 'standard', mins: 20, name: P('Standard', 'Standar') },
      { id: 'full', mins: 35, name: P('Full', 'Penuh') }
    ],

    levels: [
      { id: 1, name: P('Foundational', 'Dasar'), desc: P('Clear, common questions; generous time.', 'Pertanyaan umum yang jelas; waktu longgar.') },
      { id: 2, name: P('Standard', 'Standar'), desc: P('The questions most real rounds ask.', 'Pertanyaan yang paling sering muncul di babak nyata.') },
      { id: 3, name: P('Demanding', 'Menuntut'), desc: P('Harder questions and tighter answer times.', 'Pertanyaan lebih sulit dan waktu jawab lebih ketat.') }
    ],

    /* ═════════════════════════════ PATHS ═════════════════════════════ */
    paths: [

      /* ── Management consulting · fit ── */
      { id: 'consulting-fit', cat: 'consulting', kind: 'fit', persona: 'manager',
        personaTitle: P('Engagement manager · fit round', 'Engagement manager · babak fit'),
        title: P('Management Consulting · Fit Interview', 'Konsultan Manajemen · Wawancara Fit'),
        short: P('An MBB-style behavioural round: leadership, impact, conflict, failure and executive presence.', 'Babak perilaku gaya MBB: kepemimpinan, dampak, konflik, kegagalan, dan executive presence.'),
        about: P('Top strategy firms spend the first part of every interview on “fit”: a few stories, each pushed hard with follow-ups until it is clear what you personally did. This path runs that round — a CV walk-through, three to five deep-dive stories, a pressure scenario with a client, and your questions at the end.', 'Firma strategi papan atas menghabiskan bagian awal setiap wawancara untuk “fit”: beberapa kisah, masing-masing digali dengan pertanyaan lanjutan sampai jelas apa yang kamu lakukan secara pribadi. Jalur ini menjalankan babak itu — penjelasan CV, tiga sampai lima kisah mendalam, skenario tekanan dengan klien, dan pertanyaanmu di akhir.'),
        img: 'assets/pe/ed-people.jpg', pos: '50% 35%', aud: ['student', 'graduate', 'early'],
        dims: [
          { id: 'leadership', name: P('Leadership', 'Kepemimpinan'), desc: P('Taking charge of people and outcomes without waiting to be asked.', 'Mengambil alih orang dan hasil tanpa menunggu diminta.') },
          { id: 'impact', name: P('Personal impact', 'Dampak pribadi'), desc: P('A measured result you can show was yours.', 'Hasil terukur yang terbukti milikmu.') },
          { id: 'teamwork', name: P('Conflict & influence', 'Konflik & pengaruh'), desc: P('Moving people who disagree, without authority.', 'Menggerakkan orang yang tidak setuju, tanpa wewenang.') },
          { id: 'resilience', name: P('Failure & learning', 'Kegagalan & pembelajaran'), desc: P('Owning what went wrong and what changed after.', 'Mengakui yang salah dan apa yang berubah sesudahnya.') },
          { id: 'motivation', name: P('Motivation & fit', 'Motivasi & kecocokan'), desc: P('A believable reason for consulting and this firm.', 'Alasan yang meyakinkan untuk konsultan dan firma ini.') },
          { id: 'presence', name: P('Executive presence', 'Executive presence'), desc: P('Calm, concise, structured delivery under pressure.', 'Penyampaian tenang, ringkas, terstruktur di bawah tekanan.') }
        ],
        sections: [
          { id: 'open', name: P('Opening', 'Pembuka'), take: [1, 1, 2], qs: [
            { id: 'cf_cv', dim: 'motivation', type: 'motivational', sig: ['structure'], d: 1,
              q: P('Walk me through your CV in two minutes — and tell me why consulting.', 'Jelaskan CV-mu dalam dua menit — dan katakan mengapa konsultan.'),
              tests: P('Can you tell a coherent story that ends in this room?', 'Bisakah kamu menyusun kisah yang runtut dan berakhir di ruangan ini?'),
              coach: P('Three chapters, each with one proof point, ending on why consulting is the logical next step. Not a list of jobs.', 'Tiga bab, masing-masing dengan satu bukti, berakhir pada mengapa konsultan adalah langkah logis berikutnya. Bukan daftar pekerjaan.'),
              look: [lk('A clear thread through your choices', 'Benang merah dari pilihan-pilihanmu', 'because|so i|which led|that is why|karena|sehingga|itulah sebabnya|yang membawa'), lk('One proof point per chapter', 'Satu bukti per bab', '\\d'), lk('Why consulting, specifically', 'Mengapa konsultan, secara spesifik', 'consult|problem|client|variety|learn|konsultan|masalah|klien|variasi|belajar')] },
            { id: 'cf_why_firm', dim: 'motivation', type: 'motivational', sig: ['research'], d: 2,
              q: P('Why {company|our firm} rather than the other firms you are speaking to?', 'Mengapa {company|firma kami} dan bukan firma lain yang sedang kamu lamar?'),
              tests: P('Research and a personal reason that survives a follow-up.', 'Riset dan alasan pribadi yang bertahan dari pertanyaan lanjutan.'),
              coach: P('One fact you learned from a real person or source, and why it matters to you. Never “prestige”.', 'Satu fakta yang kamu pelajari dari orang atau sumber nyata, dan mengapa itu penting bagimu. Jangan pernah “prestise”.') }
          ] },
          { id: 'stories', name: P('Experience deep-dive', 'Pendalaman pengalaman'), take: [2, 3, 4], qs: [
            { id: 'cf_lead', dim: 'leadership', type: 'behavioural', sig: ['star', 'metric'], d: 2,
              q: P('Tell me about a time you led a team through something difficult. What did you personally do?', 'Ceritakan saat kamu memimpin tim melewati sesuatu yang sulit. Apa yang kamu lakukan secara pribadi?'),
              tests: P('Leadership shown through your own actions, not your title.', 'Kepemimpinan yang terlihat dari tindakanmu sendiri, bukan jabatanmu.'),
              coach: P('Name the moment it got hard and the decision you made. Interviewers will ask “why that?” — have the reason ready.', 'Sebutkan momen saat keadaan menjadi sulit dan keputusan yang kamu ambil. Pewawancara akan bertanya “mengapa itu?” — siapkan alasannya.') },
            { id: 'cf_impact', dim: 'impact', type: 'behavioural', sig: ['star', 'metric'], d: 2,
              q: P('Describe the achievement where your personal impact was greatest. How do you know it was you?', 'Ceritakan pencapaian saat dampak pribadimu paling besar. Bagaimana kamu tahu itu karena kamu?'),
              tests: P('A measured result and the counterfactual: what would have happened without you.', 'Hasil terukur dan kontrafaktualnya: apa yang terjadi tanpa kamu.'),
              coach: P('Give the before and after in numbers, then one sentence on what would not have happened without you.', 'Berikan kondisi sebelum dan sesudah dalam angka, lalu satu kalimat tentang apa yang tak akan terjadi tanpamu.') },
            { id: 'cf_influence', dim: 'teamwork', type: 'behavioural', sig: ['star'], d: 2,
              q: P('Tell me about a time you had to change the mind of someone more senior who disagreed with you.', 'Ceritakan saat kamu harus mengubah pikiran orang yang lebih senior yang tidak setuju denganmu.'),
              tests: P('Influence without authority: evidence, empathy, timing.', 'Pengaruh tanpa wewenang: bukti, empati, waktu yang tepat.'),
              coach: P('Show that you understood their objection first, then the evidence you brought and how it ended — even if it ended in a compromise.', 'Tunjukkan bahwa kamu memahami keberatan mereka lebih dulu, lalu bukti yang kamu bawa dan bagaimana akhirnya — sekalipun berakhir kompromi.') },
            { id: 'cf_fail', dim: 'resilience', type: 'behavioural', sig: ['star', 'honesty'], d: 2,
              q: P('Tell me about a time you failed. What exactly went wrong, and what do you do differently now?', 'Ceritakan saat kamu gagal. Apa tepatnya yang salah, dan apa yang kamu lakukan berbeda sekarang?'),
              tests: P('Ownership and a changed behaviour you can prove.', 'Kepemilikan dan perubahan perilaku yang bisa kamu buktikan.'),
              coach: P('A real failure with a cost. One sentence of cause that points at you, then the habit you built and where you have used it since.', 'Kegagalan nyata yang ada harganya. Satu kalimat penyebab yang menunjuk dirimu, lalu kebiasaan yang kamu bangun dan di mana kamu sudah memakainya.') },
            { id: 'cf_team', dim: 'teamwork', type: 'behavioural', sig: ['star'], d: 2,
              q: P('Tell me about a time someone in your team was not pulling their weight. What did you do?', 'Ceritakan saat seseorang di timmu tidak menjalankan bagiannya. Apa yang kamu lakukan?'),
              tests: P('Handling friction directly and fairly.', 'Menangani gesekan secara langsung dan adil.'),
              coach: P('Start with what you assumed and what you found when you asked. Avoid stories where you simply did their work.', 'Mulai dari apa yang kamu kira dan apa yang kamu temukan saat bertanya. Hindari kisah ketika kamu sekadar mengerjakan bagiannya.') },
            { ref: 'bh20', dim: 'leadership' }
          ] },
          { id: 'pressure', name: P('Client pressure', 'Tekanan klien'), take: [0, 1, 1], qs: [
            { id: 'cf_presence', dim: 'presence', type: 'situational', sig: ['structure'], d: 3,
              q: P('Our client’s CFO thinks your recommendation is naive and says so in front of the team. You have two minutes with them. Go.', 'CFO klien kami menganggap rekomendasimu naif dan mengatakannya di depan tim. Kamu punya dua menit dengannya. Mulai.'),
              tests: P('Composure, acknowledging the concern, and a structured reply.', 'Ketenangan, mengakui kekhawatirannya, dan jawaban yang terstruktur.'),
              coach: P('Acknowledge, ask what specifically worries them, answer with one fact, propose a next step. Do not defend for the sake of it.', 'Akui, tanyakan apa yang spesifik membuatnya khawatir, jawab dengan satu fakta, usulkan langkah berikutnya. Jangan membela diri demi membela.'),
              look: [lk('Acknowledge the concern', 'Akui kekhawatirannya', 'understand|fair point|you are right|appreciate|saya paham|masuk akal|anda benar|saya menghargai'), lk('Ask what exactly worries them', 'Tanyakan apa tepatnya yang dikhawatirkan', '\\?|which part|what specifically|bagian mana|apa tepatnya'), lk('Answer with evidence', 'Jawab dengan bukti', 'data|evidence|number|analysis|\\d|data|bukti|angka|analisis'), LK.nextSteps] }
          ] },
          { id: 'close', name: P('Your questions', 'Pertanyaanmu'), take: [1, 1, 1], qs: [{ ref: 'close_any_questions', dim: 'presence' }] }
        ],
        tips: [
          P('Prepare four stories that each prove two dimensions; you will be asked for more detail than you expect.', 'Siapkan empat kisah yang masing-masing membuktikan dua dimensi; kamu akan diminta detail lebih banyak dari dugaanmu.'),
          P('Use “I”, give numbers, and stop after the result. Silence after a good answer is fine.', 'Gunakan “saya”, beri angka, dan berhenti setelah hasil. Hening setelah jawaban yang baik itu wajar.'),
          P('Practise on the challenging style once: the third follow-up is where most stories break.', 'Berlatihlah sekali dengan gaya penantang: pertanyaan lanjutan ketiga adalah titik kebanyakan kisah retak.')
        ] },

      /* ── Management consulting · case ── */
      { id: 'consulting-case', cat: 'consulting', kind: 'case', persona: 'exec',
        personaTitle: P('Case interviewer · partner style', 'Pewawancara kasus · gaya partner'),
        title: P('Management Consulting · Case Interview', 'Konsultan Manajemen · Wawancara Kasus'),
        short: P('A rigorous MBB-style case: clarify, structure, read exhibits, do the maths, recommend.', 'Kasus gaya MBB yang ketat: klarifikasi, strukturkan, baca eksibit, hitung, rekomendasikan.'),
        about: P('An interviewer-led case with a fictional client. You clarify the objective (the interviewer answers what you ask), build a structure, read one or two exhibits, calculate, brainstorm and close with a recommendation. Each run draws one of several cases, so you can practise repeatedly. Numeric answers are checked exactly; the report shows the worked solution.', 'Kasus yang dipimpin pewawancara dengan klien fiktif. Kamu mengklarifikasi tujuan (pewawancara menjawab yang kamu tanyakan), menyusun struktur, membaca satu atau dua eksibit, menghitung, bertukar ide, dan menutup dengan rekomendasi. Setiap sesi mengambil satu dari beberapa kasus, jadi kamu bisa berlatih berulang kali. Jawaban angka diperiksa persis; laporan menampilkan penyelesaiannya.'),
        img: 'assets/pe/th-commercial.jpg', pos: '50% 40%', aud: ['student', 'graduate', 'early'],
        cases: ['profit', 'entry', 'ops'],
        dims: [
          { id: 'framing', name: P('Problem framing', 'Pembingkaian masalah'), desc: P('Clarifying the objective and a structure that covers the problem.', 'Mengklarifikasi tujuan dan struktur yang mencakup masalahnya.') },
          { id: 'quant', name: P('Quantitative accuracy', 'Ketepatan kuantitatif'), desc: P('Correct numbers from the exhibit and the maths.', 'Angka yang benar dari eksibit dan perhitungan.') },
          { id: 'insight', name: P('Exhibit insight', 'Wawasan eksibit'), desc: P('Saying what the data means, not just what it says.', 'Mengatakan arti data, bukan sekadar isinya.') },
          { id: 'creativity', name: P('Creativity', 'Kreativitas'), desc: P('A wide, organised set of ideas.', 'Kumpulan ide yang luas dan tertata.') },
          { id: 'synthesis', name: P('Synthesis & recommendation', 'Sintesis & rekomendasi'), desc: P('Answer first, backed by the numbers, with risks and next steps.', 'Jawaban dulu, didukung angka, dengan risiko dan langkah berikutnya.') },
          { id: 'presence', name: P('Communication', 'Komunikasi'), desc: P('Clear, concise, signposted delivery.', 'Penyampaian jelas, ringkas, dengan penanda alur.') }
        ],
        tips: [
          P('Write your structure before you speak. Two to four branches, each one you could actually test with data.', 'Tulis strukturmu sebelum bicara. Dua sampai empat cabang, masing-masing bisa diuji dengan data.'),
          P('On every exhibit: read the title and units first, then say the one thing that surprises you.', 'Di setiap eksibit: baca judul dan satuannya dulu, lalu sebutkan satu hal yang mengejutkanmu.'),
          P('Close like a partner: the answer, three reasons with numbers, one risk, one next step.', 'Tutup seperti partner: jawabannya, tiga alasan dengan angka, satu risiko, satu langkah berikutnya.')
        ] },

      /* ── Software engineer · behavioural ── */
      { id: 'swe-behavioural', cat: 'tech', kind: 'behavioural', persona: 'manager',
        personaTitle: P('Engineering manager · behavioural round', 'Engineering manager · babak perilaku'),
        title: P('Software Engineer · Behavioural & Collaboration', 'Software Engineer · Perilaku & Kolaborasi'),
        short: P('Ownership, debugging under pressure, code-review conflict and learning fast — the round most engineers under-prepare.', 'Kepemilikan, debugging di bawah tekanan, konflik code review, dan belajar cepat — babak yang paling sering kurang disiapkan engineer.'),
        about: P('Big-tech and start-up loops include at least one behavioural round run by an engineering manager. They test whether you own problems end to end, how you debug, how you disagree in review, and how you explain technical work to people outside engineering.', 'Proses rekrutmen big tech dan start-up menyertakan minimal satu babak perilaku yang dipimpin engineering manager. Mereka menguji apakah kamu memiliki masalah dari ujung ke ujung, cara kamu debugging, cara kamu berbeda pendapat saat review, dan cara kamu menjelaskan pekerjaan teknis kepada orang di luar engineering.'),
        img: 'assets/bg/gauntlet/new-gate-02-screening-sm.jpg', pos: '50% 40%', aud: ['student', 'graduate', 'early'],
        dims: [
          { id: 'ownership', name: P('Ownership', 'Kepemilikan'), desc: P('Driving work to done, including the unglamorous parts.', 'Mendorong pekerjaan sampai selesai, termasuk bagian yang tidak menarik.') },
          { id: 'problem', name: P('Problem-solving', 'Pemecahan masalah'), desc: P('A method: reproduce, isolate, verify.', 'Metode: reproduksi, isolasi, verifikasi.') },
          { id: 'collab', name: P('Collaboration', 'Kolaborasi'), desc: P('Disagreeing well and making others better.', 'Berbeda pendapat dengan baik dan membuat orang lain lebih baik.') },
          { id: 'learning', name: P('Learning speed', 'Kecepatan belajar'), desc: P('Getting productive in unfamiliar territory.', 'Cepat produktif di wilayah yang belum dikenal.') },
          { id: 'presence', name: P('Communication', 'Komunikasi'), desc: P('Explaining technical work to anyone.', 'Menjelaskan pekerjaan teknis kepada siapa pun.') }
        ],
        sections: [
          { id: 'open', name: P('Opening', 'Pembuka'), take: [1, 1, 1], qs: [{ ref: 'hr01', dim: 'presence' }] },
          { id: 'eng', name: P('Engineering stories', 'Kisah engineering'), take: [2, 3, 5], qs: [
            { id: 'se_project', dim: 'ownership', type: 'behavioural', sig: ['star', 'metric'], d: 2,
              q: P('Tell me about the most technically challenging project you have worked on. What part was yours?', 'Ceritakan proyek paling menantang secara teknis yang pernah kamu kerjakan. Bagian mana yang milikmu?'),
              tests: P('Depth of your own contribution, not the team’s.', 'Kedalaman kontribusimu sendiri, bukan tim.'),
              coach: P('Name the hardest technical decision you personally made and the alternative you rejected.', 'Sebutkan keputusan teknis tersulit yang kamu ambil sendiri dan alternatif yang kamu tolak.') },
            { id: 'se_incident', dim: 'problem', type: 'behavioural', sig: ['star', 'metric'], d: 2,
              q: P('Tell me about a bug or production incident you were involved in. How did you find the cause?', 'Ceritakan bug atau insiden produksi yang pernah kamu tangani. Bagaimana kamu menemukan penyebabnya?'),
              tests: P('A debugging method under pressure.', 'Metode debugging di bawah tekanan.'),
              coach: P('Walk through reproduce → isolate → fix → prevent. The “prevent” step is what separates seniors.', 'Jelaskan reproduksi → isolasi → perbaikan → pencegahan. Langkah “pencegahan” itulah pembeda engineer senior.'),
              look: [lk('Reproduce it', 'Mereproduksinya', 'reproduc|replicat|log|reproduksi|replikasi'), lk('Isolate the cause', 'Mengisolasi penyebab', 'isolat|narrow|bisect|root cause|isolasi|mempersempit|akar masalah'), lk('Fix and verify', 'Perbaiki dan verifikasi', 'fix|patch|verify|test|perbaik|verifikasi|uji'), lk('Prevent it happening again', 'Cegah terulang', 'prevent|monitor|alert|test case|post-?mortem|cegah|pantau|peringatan')] },
            { id: 'se_review', dim: 'collab', type: 'behavioural', sig: ['star'], d: 2,
              q: P('Describe a code review where you strongly disagreed with the reviewer, or they with you. How was it resolved?', 'Ceritakan code review ketika kamu sangat tidak setuju dengan reviewer, atau sebaliknya. Bagaimana penyelesaiannya?'),
              tests: P('Separating ego from the code; resolving with evidence.', 'Memisahkan ego dari kode; menyelesaikan dengan bukti.'),
              coach: P('Show you considered that they might be right, and what evidence (benchmark, test, doc) settled it.', 'Tunjukkan kamu mempertimbangkan bahwa mereka mungkin benar, dan bukti apa (benchmark, tes, dokumen) yang menyelesaikannya.') },
            { ref: 'tc05', dim: 'problem' },
            { ref: 'beh_learning_new_tool', dim: 'learning' },
            { ref: 'tc03', dim: 'learning' },
            { ref: 'bh08', dim: 'ownership' }
          ] },
          { id: 'comm', name: P('Explaining', 'Menjelaskan'), take: [0, 1, 1], qs: [{ ref: 'tc01', dim: 'presence' }] },
          { id: 'close', name: P('Your questions', 'Pertanyaanmu'), take: [1, 1, 1], qs: [{ ref: 'close_any_questions', dim: 'presence' }] }
        ],
        tips: [
          P('Have one incident story and one disagreement story ready; they come up in almost every loop.', 'Siapkan satu kisah insiden dan satu kisah perbedaan pendapat; keduanya muncul hampir di setiap proses.'),
          P('Numbers count here too: latency, error rate, hours saved, users affected.', 'Angka juga penting di sini: latensi, tingkat error, jam yang dihemat, pengguna terdampak.')
        ] },

      /* ── Software engineer · system design ── */
      { id: 'swe-design', cat: 'tech', kind: 'technical', persona: 'manager',
        personaTitle: P('Senior engineer · design round', 'Senior engineer · babak desain'),
        title: P('Software Engineer · System Design (spoken)', 'Software Engineer · Desain Sistem (lisan)'),
        short: P('Talk through a design: requirements, architecture, scaling, a capacity estimate and trade-offs.', 'Jelaskan desain secara lisan: kebutuhan, arsitektur, skala, estimasi kapasitas, dan trade-off.'),
        about: P('A spoken design round, as it happens on a call without a whiteboard tool. You design a URL shortener step by step — requirements, components, scaling to peak traffic, a storage estimate you calculate, and the trade-offs you would revisit. Each answer is checked against the elements a strong design usually covers.', 'Babak desain lisan, seperti di panggilan tanpa papan tulis. Kamu merancang penyingkat URL langkah demi langkah — kebutuhan, komponen, skala saat trafik puncak, estimasi penyimpanan yang kamu hitung, dan trade-off yang akan kamu tinjau ulang. Setiap jawaban dicek terhadap elemen yang biasanya dicakup desain yang kuat.'),
        img: 'assets/pe/ed-requirements.jpg', pos: '55% 40%', aud: ['graduate', 'early', 'mature'],
        dims: [
          { id: 'requirements', name: P('Requirements', 'Kebutuhan'), desc: P('Scoping before designing.', 'Menentukan cakupan sebelum merancang.') },
          { id: 'architecture', name: P('Architecture', 'Arsitektur'), desc: P('Sensible components and data flow.', 'Komponen dan alur data yang masuk akal.') },
          { id: 'scale', name: P('Scale & estimation', 'Skala & estimasi'), desc: P('Capacity maths and scaling choices.', 'Perhitungan kapasitas dan pilihan penskalaan.') },
          { id: 'tradeoffs', name: P('Trade-offs', 'Trade-off'), desc: P('Naming what you gave up, and why.', 'Menyebut apa yang dikorbankan, dan mengapa.') },
          { id: 'presence', name: P('Communication', 'Komunikasi'), desc: P('Driving the conversation clearly.', 'Memimpin percakapan dengan jelas.') }
        ],
        sections: [
          { id: 'design', name: P('Design: a URL shortener', 'Desain: penyingkat URL'), take: [3, 5, 5], qs: [
            { id: 'sd_reqs', dim: 'requirements', type: 'technical', sig: ['structure'], d: 2,
              q: P('Let’s design a URL shortener. Before any boxes: which requirements would you confirm with me?', 'Mari merancang penyingkat URL. Sebelum menggambar apa pun: kebutuhan apa yang akan kamu konfirmasi dengan saya?'),
              tests: P('Scoping: functional, non-functional and scale.', 'Penentuan cakupan: fungsional, non-fungsional, dan skala.'),
              coach: P('Split functional (shorten, redirect, custom alias, expiry) from non-functional (latency, availability), then ask for numbers.', 'Pisahkan fungsional (singkatkan, alihkan, alias khusus, kedaluwarsa) dari non-fungsional (latensi, ketersediaan), lalu minta angkanya.'),
              look: [lk('Core functions: shorten and redirect', 'Fungsi inti: menyingkat dan mengalihkan', 'shorten|redirect|singkat|alih'), lk('Extras: custom alias, expiry, analytics', 'Tambahan: alias khusus, kedaluwarsa, analitik', 'alias|custom|expir|analytic|click|kustom|kedaluwarsa|analitik|klik'), lk('Non-functional: latency, availability', 'Non-fungsional: latensi, ketersediaan', 'latenc|availab|uptime|fast|reliab|latensi|ketersediaan|cepat|andal'), lk('Scale: reads and writes per second', 'Skala: baca dan tulis per detik', 'per second|traffic|read|write|qps|rps|per detik|trafik|baca|tulis'), lk('Read-heavy ratio', 'Rasio dominan baca', 'read.?heavy|ratio|100:1|10:1|rasio')] },
            { id: 'sd_arch', dim: 'architecture', type: 'technical', sig: ['structure'], d: 2,
              q: P('Sketch the high-level architecture out loud. Which components, and how does a redirect request flow through them?', 'Gambarkan arsitektur tingkat tinggi secara lisan. Komponen apa saja, dan bagaimana permintaan redirect mengalir melewatinya?'),
              tests: P('Coherent components and a request path.', 'Komponen yang koheren dan jalur permintaan.'),
              coach: P('Follow one request: client → load balancer → service → cache → database, then how a key is generated.', 'Ikuti satu permintaan: klien → load balancer → layanan → cache → basis data, lalu cara kunci dibuat.'),
              look: [lk('API / application service', 'API / layanan aplikasi', 'api|service|server|endpoint|layanan'), lk('Database or key-value store', 'Basis data atau key-value store', 'database|db|sql|nosql|key.?value|dynamo|cassandra|redis|postgres|mysql|basis data'), lk('Key generation (hash, base62, counter)', 'Pembuatan kunci (hash, base62, counter)', 'hash|base ?62|counter|id generat|unique|snowflake|kunci unik'), lk('Cache for hot links', 'Cache untuk tautan populer', 'cache|redis|memcach'), lk('Load balancer', 'Load balancer', 'load.?balanc')] },
            { id: 'sd_scale', dim: 'scale', type: 'technical', sig: ['structure'], d: 3,
              q: P('Traffic grows to 50,000 redirects per second at peak. What breaks first, and what do you change?', 'Trafik naik menjadi 50.000 redirect per detik saat puncak. Apa yang rusak lebih dulu, dan apa yang kamu ubah?'),
              tests: P('Identifying the bottleneck and scaling it.', 'Mengenali titik sempit dan menskalakannya.'),
              coach: P('Say what fails first (usually database reads), then the fix in order of cost: cache, replicas, partitioning, edge.', 'Sebutkan yang gagal lebih dulu (biasanya pembacaan basis data), lalu perbaikannya berurutan dari yang termurah: cache, replika, partisi, edge.'),
              look: [lk('Name the bottleneck', 'Sebutkan titik sempitnya', 'bottleneck|first to break|database read|hot|titik sempit|pertama rusak'), lk('Caching', 'Caching', 'cache'), lk('Read replicas / horizontal scaling', 'Replika baca / penskalaan horizontal', 'replica|horizontal|more servers|scale out|replika|tambah server'), lk('Sharding / partitioning', 'Sharding / partisi', 'shard|partition|partisi'), lk('CDN / edge, rate limiting, monitoring', 'CDN / edge, pembatasan laju, pemantauan', 'cdn|edge|rate.?limit|monitor|pantau')] },
            { id: 'sd_storage', dim: 'scale', type: 'technical', sig: ['metric'], d: 2,
              q: P('Each stored link takes about 500 bytes. We expect 100 million new links a year and keep them for five years. How much storage is that, in gigabytes?', 'Setiap tautan yang disimpan memakan sekitar 500 byte. Kami memperkirakan 100 juta tautan baru per tahun dan menyimpannya lima tahun. Berapa penyimpanannya, dalam gigabyte?'),
              tests: P('Back-of-the-envelope estimation, said out loud.', 'Estimasi kasar, diucapkan dengan lantang.'),
              coach: P('Write the chain: links × years × bytes, then convert. Say the units at every step.', 'Tulis rantainya: tautan × tahun × byte, lalu konversi. Sebutkan satuan di setiap langkah.'),
              num: { v: 250, tol: 5, unit: 'GB' },
              solution: P('100 million × 5 years = 500 million links. 500 million × 500 bytes = 250 billion bytes ≈ 250 GB (before replication and indexes).', '100 juta × 5 tahun = 500 juta tautan. 500 juta × 500 byte = 250 miliar byte ≈ 250 GB (sebelum replikasi dan indeks).') },
            { id: 'sd_trade', dim: 'tradeoffs', type: 'technical', sig: ['structure'], d: 3,
              q: P('Which trade-offs did you make in this design, and which one would you revisit first?', 'Trade-off apa saja yang kamu buat dalam desain ini, dan mana yang akan kamu tinjau ulang lebih dulu?'),
              tests: P('Self-critique: naming costs, not just benefits.', 'Kritik diri: menyebut biaya, bukan hanya manfaat.'),
              coach: P('Two trade-offs with what you gave up, then the one you would change if requirements shifted.', 'Dua trade-off beserta yang dikorbankan, lalu satu yang akan kamu ubah bila kebutuhan bergeser.'),
              look: [lk('Consistency vs availability', 'Konsistensi vs ketersediaan', 'consisten|availab|cap |eventual|konsisten|ketersediaan'), lk('SQL vs NoSQL choice', 'Pilihan SQL vs NoSQL', 'sql|nosql|relational|relasional'), lk('Collision handling for keys', 'Penanganan tabrakan kunci', 'collision|duplicate|tabrakan|duplikat'), lk('Cost', 'Biaya', 'cost|expensive|biaya|mahal'), lk('What you would revisit', 'Yang akan ditinjau ulang', 'revisit|change|if .* grew|would switch|tinjau ulang|ubah|ganti')] }
          ] },
          { id: 'second', name: P('Second design', 'Desain kedua'), take: [0, 0, 1], qs: [
            { id: 'sd_notify', dim: 'architecture', type: 'technical', sig: ['structure'], d: 3,
              q: P('New problem, two minutes: design the notification system for a ride-hailing app — push, SMS and email.', 'Masalah baru, dua menit: rancang sistem notifikasi untuk aplikasi ojek daring — push, SMS, dan email.'),
              tests: P('Applying the same discipline quickly.', 'Menerapkan disiplin yang sama dengan cepat.'),
              coach: P('Requirements in one breath, then a queue, workers per channel, retries and user preferences.', 'Kebutuhan dalam satu tarikan napas, lalu antrean, pekerja per kanal, percobaan ulang, dan preferensi pengguna.'),
              look: [lk('Channels and priorities', 'Kanal dan prioritas', 'push|sms|email|priority|prioritas'), lk('Message queue', 'Antrean pesan', 'queue|kafka|pub.?sub|rabbit|antrean'), lk('Retries and idempotency', 'Percobaan ulang dan idempotensi', 'retry|idempot|dedup|ulang'), lk('User preferences / opt-out', 'Preferensi pengguna / berhenti langganan', 'preference|opt.?out|setting|preferensi|pengaturan'), lk('Rate limiting', 'Pembatasan laju', 'rate.?limit|throttl|batas')] }
          ] }
        ],
        tips: [
          P('Drive the conversation: state your plan for the next five minutes before you start.', 'Pimpin percakapan: nyatakan rencanamu untuk lima menit ke depan sebelum mulai.'),
          P('Always do one capacity estimate out loud; interviewers look for the habit, not the exact number.', 'Selalu lakukan satu estimasi kapasitas dengan lantang; pewawancara mencari kebiasaannya, bukan angka persisnya.')
        ] },

      /* ── Product management ── */
      { id: 'product-pm', cat: 'product', kind: 'technical', persona: 'manager',
        personaTitle: P('Product lead · product sense round', 'Product lead · babak product sense'),
        title: P('Product Management · Product Sense & Execution', 'Product Management · Product Sense & Eksekusi'),
        short: P('Design for a user, investigate a metric drop, choose a north-star metric and prioritise under pressure.', 'Merancang untuk pengguna, menyelidiki penurunan metrik, memilih north-star metric, dan memprioritaskan di bawah tekanan.'),
        about: P('A PM loop compressed into one session: a product you love, a design question for an digital wallet, a metric-drop investigation, metrics and guardrails, a prioritisation call, and a stakeholder story. Each answer is checked against what product interviewers listen for.', 'Proses rekrutmen PM yang dipadatkan dalam satu sesi: produk yang kamu sukai, pertanyaan desain untuk dompet digital Indonesia, investigasi penurunan metrik, metrik dan guardrail, keputusan prioritas, dan kisah pemangku kepentingan. Setiap jawaban dicek terhadap hal yang didengarkan pewawancara produk.'),
        img: 'assets/pe/ed-startup.jpg', pos: '50% 35%', aud: ['graduate', 'early'],
        dims: [
          { id: 'sense', name: P('Product sense', 'Product sense'), desc: P('Users, problems, and solutions that fit them.', 'Pengguna, masalah, dan solusi yang cocok.') },
          { id: 'analytics', name: P('Metrics & analytics', 'Metrik & analitik'), desc: P('Measuring the right thing and investigating changes.', 'Mengukur hal yang tepat dan menyelidiki perubahan.') },
          { id: 'priorit', name: P('Prioritisation', 'Prioritisasi'), desc: P('Choosing with a rationale others can follow.', 'Memilih dengan alasan yang bisa diikuti orang lain.') },
          { id: 'execution', name: P('Execution & stakeholders', 'Eksekusi & pemangku kepentingan'), desc: P('Shipping with engineers, design and business.', 'Merilis bersama engineer, desain, dan bisnis.') },
          { id: 'presence', name: P('Communication', 'Komunikasi'), desc: P('Structured and concise.', 'Terstruktur dan ringkas.') }
        ],
        sections: [
          { id: 'sense', name: P('Product sense', 'Product sense'), take: [1, 2, 2], qs: [
            { id: 'pm_love', dim: 'sense', type: 'technical', sig: ['structure'], d: 1,
              q: P('Tell me about a product you love. Who is it for, and what one thing would you change?', 'Ceritakan produk yang kamu sukai. Untuk siapa produk itu, dan satu hal apa yang akan kamu ubah?'),
              tests: P('User empathy and a concrete improvement with a metric.', 'Empati pengguna dan perbaikan konkret dengan metrik.'),
              coach: P('User → problem it solves → why it works → one change → how you would know it worked.', 'Pengguna → masalah yang diselesaikan → mengapa berhasil → satu perubahan → cara tahu perubahan itu berhasil.'),
              look: [lk('The user or segment', 'Pengguna atau segmennya', 'user|customer|people who|segment|pengguna|pelanggan|orang yang|segmen'), lk('The problem it solves', 'Masalah yang diselesaikan', 'problem|pain|need|struggle|masalah|kebutuhan|kesulitan'), lk('Why it works', 'Mengapa berhasil', 'because|works|design|karena|berhasil|desain'), lk('One concrete change', 'Satu perubahan konkret', 'change|add|improve|would|ubah|tambah|perbaiki'), LK.metric] },
            { id: 'pm_design', dim: 'sense', type: 'technical', sig: ['structure'], d: 2,
              q: P('Design a feature that helps first-time users of a digital wallet complete their first top-up.', 'Rancang fitur yang membantu pengguna baru dompet digital menyelesaikan isi saldo pertamanya.'),
              tests: P('Structured product design for an local context.', 'Desain produk terstruktur untuk konteks lokal.'),
              coach: P('Pick a segment (e.g. users without a bank account), list their pain points, generate options, prioritise one, define success.', 'Pilih satu segmen (misalnya pengguna tanpa rekening bank), daftar kesulitan mereka, buat opsi, prioritaskan satu, tentukan ukuran keberhasilan.'),
              look: [lk('A chosen segment', 'Segmen yang dipilih', 'segment|first.?time|unbanked|students|warung|segmen|pemula|tanpa rekening|mahasiswa'), lk('Their pain points', 'Kesulitan mereka', 'pain|friction|confus|trust|fee|kesulitan|bingung|percaya|biaya'), lk('Several solution options', 'Beberapa opsi solusi', 'option|idea|could|alternatively|opsi|ide|bisa|alternatif'), lk('A prioritised choice', 'Pilihan yang diprioritaskan', 'prioriti|choose|focus|start with|prioritas|pilih|fokus|mulai dari'), LK.metric] }
          ] },
          { id: 'metrics', name: P('Metrics', 'Metrik'), take: [1, 1, 2], qs: [
            { id: 'pm_drop', dim: 'analytics', type: 'case', sig: ['structure'], d: 2,
              q: P('Daily active users of our food-delivery app dropped 8% last week. Walk me through how you investigate.', 'Pengguna aktif harian aplikasi pesan-antar makanan kami turun 8% minggu lalu. Jelaskan cara kamu menyelidikinya.'),
              tests: P('A disciplined diagnosis instead of guessing.', 'Diagnosis yang disiplin, bukan menebak.'),
              coach: P('Check the data is real, then internal vs external causes, then segment by platform, region and new vs returning users.', 'Pastikan datanya benar, lalu penyebab internal vs eksternal, lalu segmentasi per platform, wilayah, dan pengguna baru vs lama.'),
              look: [lk('Verify the data / tracking', 'Verifikasi data / pelacakan', 'tracking|data issue|logging|bug|verify|pelacakan|masalah data|verifikasi'), lk('External factors', 'Faktor eksternal', 'holiday|competitor|season|weather|outage|libur|pesaing|musim|cuaca|gangguan'), lk('Segment the drop', 'Segmentasi penurunannya', 'segment|platform|android|ios|region|city|new|returning|segmen|wilayah|kota|baru|lama'), lk('Look at the funnel', 'Lihat corongnya', 'funnel|step|conversion|checkout|corong|tahap|konversi'), lk('A hypothesis to test', 'Hipotesis untuk diuji', 'hypothes|test|likely|hipotesis|uji|kemungkinan')] },
            { id: 'pm_north', dim: 'analytics', type: 'technical', sig: ['structure'], d: 2,
              q: P('What should the north-star metric of an online learning platform be, and which guardrail metrics would you watch?', 'Apa north-star metric yang tepat untuk platform belajar daring, dan metrik guardrail apa yang akan kamu pantau?'),
              tests: P('Choosing a metric that reflects user value, with guardrails.', 'Memilih metrik yang mencerminkan nilai bagi pengguna, dengan guardrail.'),
              coach: P('One metric that captures learning value (not sign-ups), why, and two guardrails that catch gaming it.', 'Satu metrik yang menangkap nilai belajar (bukan pendaftaran), alasannya, dan dua guardrail yang mencegah manipulasi.'),
              look: [lk('A north-star tied to value', 'North-star yang terkait nilai', 'complet|learn|weekly active learn|lesson|outcome|selesai|belajar|pelajaran|hasil'), lk('Why that metric', 'Mengapa metrik itu', 'because|reflects|captures|karena|mencerminkan|menangkap'), lk('Guardrail metrics', 'Metrik guardrail', 'guardrail|churn|refund|satisfaction|nps|quality|kepuasan|kualitas'), lk('Avoid vanity metrics', 'Hindari metrik kesombongan', 'vanity|sign.?up|download|install|pendaftaran|unduhan')] }
          ] },
          { id: 'exec', name: P('Execution', 'Eksekusi'), take: [1, 2, 2], qs: [
            { id: 'pm_prior', dim: 'priorit', type: 'situational', sig: ['structure'], d: 2,
              q: P('Sales, customer support and the CEO each want a different feature this sprint. You have capacity for one. How do you decide, and how do you tell the other two?', 'Sales, layanan pelanggan, dan CEO masing-masing menginginkan fitur berbeda di sprint ini. Kapasitasmu hanya satu. Bagaimana kamu memutuskan, dan bagaimana kamu memberi tahu dua lainnya?'),
              tests: P('A transparent prioritisation and a respectful “no”.', 'Prioritisasi yang transparan dan “tidak” yang sopan.'),
              coach: P('Use impact × confidence ÷ effort tied to the company goal, then explain the no with the data and a date.', 'Gunakan dampak × keyakinan ÷ usaha yang terkait tujuan perusahaan, lalu jelaskan penolakan dengan data dan tanggal.'),
              look: [lk('Impact on a goal', 'Dampak pada tujuan', 'impact|goal|revenue|retention|okr|dampak|tujuan|pendapatan|retensi'), lk('Effort / cost', 'Usaha / biaya', 'effort|cost|time|engineering|usaha|biaya|waktu'), lk('Data or evidence', 'Data atau bukti', 'data|evidence|users|tickets|bukti|pengguna|tiket'), lk('Communicating the no', 'Menyampaikan penolakan', 'explain|communicat|tell|roadmap|later|jelaskan|sampaikan|beri tahu|nanti')] },
            { id: 'pm_stake', dim: 'execution', type: 'behavioural', sig: ['star', 'metric'], d: 2,
              q: P('Tell me about shipping something with engineers and designers when you disagreed about the scope.', 'Ceritakan saat merilis sesuatu bersama engineer dan desainer ketika kalian berbeda pendapat soal cakupan.'),
              tests: P('Scope negotiation and shipping.', 'Negosiasi cakupan dan perilisan.'),
              coach: P('What each side wanted, the trade-off you proposed, what shipped and what the numbers did after.', 'Apa yang diinginkan tiap pihak, trade-off yang kamu usulkan, apa yang dirilis, dan bagaimana angkanya setelah itu.') },
            { ref: 'bh10', dim: 'analytics' }
          ] },
          { id: 'close', name: P('Your questions', 'Pertanyaanmu'), take: [1, 1, 1], qs: [{ ref: 'close_any_questions', dim: 'presence' }] }
        ],
        tips: [
          P('Every product answer ends in a metric. Say how you would know you were right.', 'Setiap jawaban produk berakhir pada metrik. Katakan bagaimana kamu tahu bahwa kamu benar.'),
          P('Pick one segment and go deep; breadth without a choice reads as indecision.', 'Pilih satu segmen dan dalami; keluasan tanpa pilihan terbaca sebagai ragu-ragu.')
        ] },

      /* ── Data & analytics ── */
      { id: 'data-analyst', cat: 'product', kind: 'technical', persona: 'manager',
        personaTitle: P('Analytics lead · analytical round', 'Analytics lead · babak analitis'),
        title: P('Data & Analytics · Analytical Interview', 'Data & Analitik · Wawancara Analitis'),
        short: P('An end-to-end analysis story, causation, an A/B test exhibit to calculate and judge, and a churn diagnosis.', 'Kisah analisis menyeluruh, kausalitas, eksibit uji A/B untuk dihitung dan dinilai, serta diagnosis churn.'),
        about: P('For data analyst, business analyst and data science internships. You explain an analysis you did, reason about causation, calculate the uplift from an A/B test exhibit, decide whether to ship, and diagnose a churn increase.', 'Untuk magang data analyst, business analyst, dan data science. Kamu menjelaskan analisis yang pernah kamu lakukan, menalar kausalitas, menghitung uplift dari eksibit uji A/B, memutuskan apakah dirilis, dan mendiagnosis kenaikan churn.'),
        img: 'assets/pe/ed-cycles.jpg', pos: '50% 50%', aud: ['student', 'graduate', 'early'],
        dims: [
          { id: 'rigour', name: P('Analytical rigour', 'Ketelitian analitis'), desc: P('A method you can defend.', 'Metode yang bisa dipertahankan.') },
          { id: 'stats', name: P('Statistics & experiments', 'Statistik & eksperimen'), desc: P('Correct maths and sound inference.', 'Perhitungan benar dan inferensi yang sehat.') },
          { id: 'business', name: P('Business sense', 'Pemahaman bisnis'), desc: P('Turning numbers into a decision.', 'Mengubah angka menjadi keputusan.') },
          { id: 'presence', name: P('Communication', 'Komunikasi'), desc: P('Explaining analysis to non-analysts.', 'Menjelaskan analisis kepada non-analis.') }
        ],
        sections: [
          { id: 'story', name: P('Your analysis', 'Analisismu'), take: [1, 1, 2], qs: [
            { id: 'da_e2e', dim: 'rigour', type: 'behavioural', sig: ['star', 'metric'], d: 2,
              q: P('Walk me through an analysis you did end to end: the question, the data, the method, and the decision it changed.', 'Jelaskan analisis yang pernah kamu lakukan dari awal sampai akhir: pertanyaannya, datanya, metodenya, dan keputusan yang diubahnya.'),
              tests: P('Question-first analysis with a real decision at the end.', 'Analisis yang berangkat dari pertanyaan, dengan keputusan nyata di akhir.'),
              coach: P('Start from the business question, not the tool. End with what someone did differently because of your work.', 'Mulai dari pertanyaan bisnis, bukan alatnya. Akhiri dengan apa yang dilakukan orang secara berbeda karena pekerjaanmu.'),
              look: [lk('The business question', 'Pertanyaan bisnisnya', 'question|wanted to know|problem|pertanyaan|ingin tahu|masalah'), lk('The data and its quality', 'Data dan kualitasnya', 'data|dataset|rows|clean|missing|baris|bersih|hilang'), lk('The method', 'Metodenya', 'regression|segment|cohort|sql|python|excel|pivot|test|regresi|kohort|uji'), lk('The decision it changed', 'Keputusan yang diubahnya', 'decision|changed|recommend|launched|stopped|keputusan|mengubah|merekomendasikan|menghentikan')] },
            { id: 'da_causal', dim: 'stats', type: 'technical', sig: ['structure'], d: 2,
              q: P('Explain the difference between correlation and causation, with an example from your work or studies.', 'Jelaskan perbedaan korelasi dan kausalitas, dengan contoh dari pekerjaan atau studimu.'),
              tests: P('Inference discipline.', 'Disiplin inferensi.'),
              coach: P('Definitions in one sentence each, a confounder in your example, and how you would test causation.', 'Definisi masing-masing satu kalimat, satu variabel pengganggu dalam contohmu, dan cara menguji kausalitas.'),
              look: [lk('Correlation defined', 'Definisi korelasi', 'move together|associat|relationship|bergerak bersama|hubungan|asosiasi'), lk('Causation defined', 'Definisi kausalitas', 'cause|causes|because of|menyebabkan|sebab'), lk('A confounding factor', 'Faktor pengganggu', 'confound|third variable|lurking|hidden|pengganggu|variabel ketiga|tersembunyi'), lk('How to test it (experiment)', 'Cara mengujinya (eksperimen)', 'experiment|a/b|randomi|control group|eksperimen|acak|kelompok kontrol')] }
          ] },
          { id: 'abtest', name: P('Exhibit: an A/B test', 'Eksibit: uji A/B'), take: [1, 2, 2], qs: [
            { id: 'da_uplift', dim: 'stats', type: 'case', sig: ['metric'], d: 2, exhibit: 'abtest',
              q: P('Look at the exhibit. What is the relative uplift in conversion of variant B over variant A, in percent?', 'Lihat eksibitnya. Berapa kenaikan relatif konversi varian B dibanding varian A, dalam persen?'),
              tests: P('Reading an exhibit and computing relative change.', 'Membaca eksibit dan menghitung perubahan relatif.'),
              coach: P('Conversion rate for each variant first, then (B − A) ÷ A. Relative, not percentage points.', 'Hitung tingkat konversi tiap varian dulu, lalu (B − A) ÷ A. Relatif, bukan poin persentase.'),
              num: { v: 15, tol: 0.5, unit: '%' },
              solution: P('A converts 400 ÷ 10,000 = 4.0%; B converts 460 ÷ 10,000 = 4.6%. Relative uplift = (4.6 − 4.0) ÷ 4.0 = 15% (0.6 percentage points).', 'A berkonversi 400 ÷ 10.000 = 4,0%; B 460 ÷ 10.000 = 4,6%. Kenaikan relatif = (4,6 − 4,0) ÷ 4,0 = 15% (0,6 poin persentase).') },
            { id: 'da_ship', dim: 'business', type: 'case', sig: ['structure'], d: 3, exhibit: 'abtest',
              q: P('Would you ship variant B? What else would you need to know before deciding?', 'Apakah kamu akan merilis varian B? Apa lagi yang perlu kamu ketahui sebelum memutuskan?'),
              tests: P('Statistical caution and business judgement together.', 'Kehati-hatian statistik sekaligus penilaian bisnis.'),
              coach: P('Significance and sample size, test duration, guardrail metrics like order value, and segments — then a clear call.', 'Signifikansi dan ukuran sampel, durasi uji, metrik guardrail seperti nilai pesanan, dan segmen — lalu keputusan yang jelas.'),
              look: [lk('Statistical significance / confidence', 'Signifikansi statistik / kepercayaan', 'significan|p.?value|confidence|interval|signifikan|kepercayaan'), lk('Sample size and duration', 'Ukuran sampel dan durasi', 'sample|duration|week|novelty|sampel|durasi|minggu'), lk('Guardrail metrics', 'Metrik guardrail', 'guardrail|order value|revenue|refund|aov|nilai pesanan|pendapatan'), lk('Segment differences', 'Perbedaan antarsegmen', 'segment|mobile|new user|segmen|pengguna baru'), LK.answerFirst] }
          ] },
          { id: 'churn', name: P('Diagnosis', 'Diagnosis'), take: [1, 1, 1], qs: [
            { id: 'da_churn', dim: 'rigour', type: 'case', sig: ['structure'], d: 2,
              q: P('Our monthly subscriber churn rose from 3% to 5% in one quarter. How would you find out why?', 'Churn pelanggan bulanan kami naik dari 3% menjadi 5% dalam satu kuartal. Bagaimana kamu mencari tahu penyebabnya?'),
              tests: P('Structured diagnosis with cohorts.', 'Diagnosis terstruktur dengan kohort.'),
              coach: P('Define churn exactly, then cohorts by sign-up month, plan, channel and usage before churn.', 'Definisikan churn secara tepat, lalu kohort berdasarkan bulan daftar, paket, kanal, dan pemakaian sebelum churn.'),
              look: [lk('Define the metric', 'Definisikan metriknya', 'defin|how we measure|definisi|cara mengukur'), lk('Cohort analysis', 'Analisis kohort', 'cohort|sign.?up month|kohort|bulan daftar'), lk('Segments: plan, channel, region', 'Segmen: paket, kanal, wilayah', 'plan|channel|region|price|paket|kanal|wilayah|harga'), lk('Usage before churn', 'Pemakaian sebelum churn', 'usage|engagement|active|login|pemakaian|keterlibatan|aktif'), lk('Talk to users', 'Bicara dengan pengguna', 'survey|interview|exit|feedback|survei|wawancara|umpan balik')] }
          ] },
          { id: 'close', name: P('Explain it simply', 'Jelaskan dengan sederhana'), take: [0, 1, 1], qs: [{ ref: 'tc01', dim: 'presence' }] }
        ],
        tips: [
          P('Say the units out loud on every number; most exhibit errors are unit errors.', 'Sebutkan satuan di setiap angka; sebagian besar kesalahan eksibit adalah kesalahan satuan.'),
          P('Relative change and percentage points are different answers — say which one you are giving.', 'Perubahan relatif dan poin persentase adalah jawaban berbeda — sebutkan yang mana yang kamu berikan.')
        ] },

      /* ── Investment banking & corporate finance ── */
      { id: 'finance-ib', cat: 'finance', kind: 'technical', persona: 'exec',
        personaTitle: P('Vice president · technical & fit', 'Vice president · teknis & fit'),
        title: P('Investment Banking & Corporate Finance', 'Investment Banking & Corporate Finance'),
        short: P('Why banking, the three statements, a DCF, a valuation you calculate, and a stock pitch.', 'Mengapa perbankan investasi, tiga laporan keuangan, DCF, valuasi yang kamu hitung, dan stock pitch.'),
        about: P('A first-round mix of fit and technicals for investment banking, corporate finance and equity research internships. Technical answers are checked for the steps interviewers expect; the valuation question has an exact answer.', 'Campuran fit dan teknis babak pertama untuk magang investment banking, corporate finance, dan equity research. Jawaban teknis dicek terhadap langkah yang diharapkan pewawancara; pertanyaan valuasi memiliki jawaban pasti.'),
        img: 'assets/bg/negotiation.jpg', pos: '50% 35%', aud: ['student', 'graduate'],
        dims: [
          { id: 'technical', name: P('Technical knowledge', 'Pengetahuan teknis'), desc: P('Accounting and valuation fundamentals.', 'Dasar akuntansi dan valuasi.') },
          { id: 'commercial', name: P('Commercial judgement', 'Penilaian komersial'), desc: P('Seeing the business behind the numbers.', 'Melihat bisnis di balik angka.') },
          { id: 'motivation', name: P('Motivation & resilience', 'Motivasi & ketahanan'), desc: P('A credible why and evidence of stamina.', 'Alasan yang kredibel dan bukti daya tahan.') },
          { id: 'presence', name: P('Communication', 'Komunikasi'), desc: P('Crisp, confident delivery.', 'Penyampaian tajam dan percaya diri.') }
        ],
        sections: [
          { id: 'fit', name: P('Fit', 'Fit'), take: [1, 1, 2], qs: [
            { id: 'ib_why', dim: 'motivation', type: 'motivational', sig: ['research'], d: 2,
              q: P('Why investment banking — and why now?', 'Mengapa investment banking — dan mengapa sekarang?'),
              tests: P('A realistic understanding of the work and a personal reason.', 'Pemahaman realistis tentang pekerjaannya dan alasan pribadi.'),
              coach: P('Name what the job actually is (transactions, modelling, long hours), the experience that drew you, and what you want to learn.', 'Sebutkan isi pekerjaannya yang sebenarnya (transaksi, pemodelan, jam panjang), pengalaman yang menarikmu, dan yang ingin kamu pelajari.') },
            { ref: 'bh04', dim: 'motivation' }
          ] },
          { id: 'tech', name: P('Technicals', 'Teknis'), take: [2, 3, 4], qs: [
            { id: 'ib_3st', dim: 'technical', type: 'technical', sig: ['structure'], d: 2,
              q: P('Walk me through the three financial statements and how they link.', 'Jelaskan tiga laporan keuangan dan bagaimana ketiganya saling terhubung.'),
              tests: P('The classic first technical.', 'Pertanyaan teknis pertama yang klasik.'),
              coach: P('Income statement → net income flows to cash flow and retained earnings; non-cash items adjust; ending cash lands on the balance sheet.', 'Laba rugi → laba bersih mengalir ke arus kas dan laba ditahan; item non-kas disesuaikan; kas akhir masuk ke neraca.'),
              look: [lk('Income statement', 'Laporan laba rugi', 'income statement|p&l|profit and loss|laba rugi'), lk('Balance sheet', 'Neraca', 'balance sheet|neraca'), lk('Cash flow statement', 'Laporan arus kas', 'cash flow|arus kas'), lk('Net income links to cash flow and equity', 'Laba bersih terhubung ke arus kas dan ekuitas', 'net income|retained earnings|laba bersih|laba ditahan'), lk('Non-cash items like depreciation', 'Item non-kas seperti depresiasi', 'depreciation|amorti|non.?cash|depresiasi|penyusutan|non.?kas')] },
            { id: 'ib_dcf', dim: 'technical', type: 'technical', sig: ['structure'], d: 3,
              q: P('Walk me through a discounted cash flow valuation.', 'Jelaskan valuasi discounted cash flow.'),
              tests: P('Valuation logic in order.', 'Logika valuasi yang berurutan.'),
              coach: P('Forecast unlevered free cash flow, discount at WACC, add a terminal value, get enterprise value, bridge to equity value.', 'Proyeksikan arus kas bebas, diskonto dengan WACC, tambahkan nilai terminal, dapatkan enterprise value, jembatani ke nilai ekuitas.'),
              look: [lk('Forecast free cash flow', 'Proyeksi arus kas bebas', 'free cash flow|fcf|forecast|arus kas bebas|proyeksi'), lk('Discount rate / WACC', 'Tingkat diskonto / WACC', 'wacc|discount rate|cost of capital|tingkat diskonto|biaya modal'), lk('Terminal value', 'Nilai terminal', 'terminal|perpetuity|exit multiple|gordon'), lk('Enterprise value to equity value', 'Enterprise value ke nilai ekuitas', 'enterprise value|equity value|net debt|nilai ekuitas|utang bersih'), lk('Sensitivities', 'Sensitivitas', 'sensitiv|assumption|asumsi')] },
            { id: 'ib_ev', dim: 'technical', type: 'case', sig: ['metric'], d: 2, exhibit: 'comps',
              q: P('Using the exhibit: what is the implied equity value of the target, in Rp billion?', 'Menggunakan eksibit: berapa nilai ekuitas tersirat perusahaan target, dalam miliar Rp?'),
              tests: P('Multiples valuation and the equity bridge.', 'Valuasi kelipatan dan jembatan ekuitas.'),
              coach: P('EBITDA × median multiple = enterprise value; subtract net debt for equity value.', 'EBITDA × kelipatan median = enterprise value; kurangi utang bersih untuk nilai ekuitas.'),
              num: { v: 1400, tol: 10, unit: 'Rp bn' },
              solution: P('Median EV/EBITDA of the three peers is 8.0x. Enterprise value = 250 × 8.0 = Rp 2,000 bn. Equity value = 2,000 − 600 net debt = Rp 1,400 bn.', 'Median EV/EBITDA tiga pembanding adalah 8,0x. Enterprise value = 250 × 8,0 = Rp 2.000 miliar. Nilai ekuitas = 2.000 − 600 utang bersih = Rp 1.400 miliar.') },
            { ref: 'tech_fin_cash', dim: 'technical' },
            { id: 'ib_pitch', dim: 'commercial', type: 'technical', sig: ['structure'], d: 3,
              q: P('Pitch me a company you follow. What is the investment case, and what is the main risk?', 'Presentasikan satu perusahaan yang kamu ikuti. Apa alasan investasinya, dan apa risiko utamanya?'),
              tests: P('Commercial thinking and conviction.', 'Pemikiran komersial dan keyakinan.'),
              coach: P('Business model in one line, two drivers of the thesis, valuation view, one risk and what would change your mind.', 'Model bisnis dalam satu kalimat, dua pendorong tesis, pandangan valuasi, satu risiko, dan apa yang akan mengubah pikiranmu.'),
              look: [lk('Business model', 'Model bisnis', 'business model|makes money|revenue from|model bisnis|menghasilkan uang|pendapatan dari'), lk('Thesis drivers', 'Pendorong tesis', 'driver|growth|margin|market share|thesis|pendorong|pertumbuhan|marjin|pangsa'), lk('Valuation view', 'Pandangan valuasi', 'valuation|multiple|p/e|ev/ebitda|cheap|undervalued|valuasi|kelipatan|murah'), LK.risks, lk('What would change your mind', 'Apa yang akan mengubah pikiranmu', 'change my mind|would be wrong|catalyst|mengubah pikiran|salah jika|katalis')] }
          ] },
          { id: 'close', name: P('Close', 'Penutup'), take: [1, 1, 1], qs: [{ ref: 'close_any_questions', dim: 'presence' }] }
        ],
        tips: [
          P('Technicals reward order more than vocabulary: say the steps in sequence, then stop.', 'Pertanyaan teknis menghargai urutan lebih dari kosakata: sebutkan langkahnya berurutan, lalu berhenti.'),
          P('For the stock pitch, one risk said plainly is worth more than five drivers.', 'Untuk stock pitch, satu risiko yang disebut lugas lebih berharga dari lima pendorong.')
        ] },

      /* ── Bank officer development programme ── */
      { id: 'bank-odp', cat: 'finance', kind: 'behavioural', persona: 'hr',
        personaTitle: P('HR & branch leadership panel', 'Panel HR & pimpinan cabang'),
        title: P('Bank Officer Development Programme', 'Officer Development Program Bank'),
        short: P('The national bank graduate-programme interview: motivation, integrity, customers, placement anywhere.', 'Wawancara program lulusan bank nasional: motivasi, integritas, nasabah, penempatan di mana saja.'),
        about: P('Bank officer and management-trainee programmes test the same things in almost every panel: why banking and why a programme, integrity with money and rules, serving customers well, and genuine willingness to be placed anywhere. This path draws on the Rope’s graduate-programme question bank.', 'Program officer dan management trainee bank di Indonesia menguji hal yang sama di hampir setiap panel: mengapa perbankan dan mengapa program, integritas terhadap uang dan aturan, melayani nasabah dengan baik, serta kesediaan sungguh-sungguh untuk ditempatkan di mana saja. Jalur ini memakai bank pertanyaan program lulusan The Rope.'),
        img: 'assets/pe/th-interview.jpg', pos: '50% 35%', aud: ['student', 'graduate'],
        dims: [
          { id: 'motivation', name: P('Motivation & fit', 'Motivasi & kecocokan'), desc: P('Why banking, why this programme.', 'Mengapa perbankan, mengapa program ini.') },
          { id: 'integrity', name: P('Integrity', 'Integritas'), desc: P('Doing right with money, rules and information.', 'Berbuat benar terhadap uang, aturan, dan informasi.') },
          { id: 'customer', name: P('Customer orientation', 'Orientasi nasabah'), desc: P('Calm, helpful service under pressure.', 'Layanan tenang dan membantu di bawah tekanan.') },
          { id: 'adapt', name: P('Adaptability', 'Kemampuan beradaptasi'), desc: P('Placement, change and learning fast.', 'Penempatan, perubahan, dan belajar cepat.') },
          { id: 'presence', name: P('Communication', 'Komunikasi'), desc: P('Clear, direct, polite.', 'Jelas, lugas, sopan.') }
        ],
        sections: [
          { id: 'open', name: P('Opening', 'Pembuka'), take: [1, 2, 2], qs: [{ ref: 'hr01', dim: 'presence' }, { ref: 'mot_why_programme', dim: 'motivation' }, { ref: 'mot_how_we_make_money', dim: 'motivation' }] },
          { id: 'integrity', name: P('Integrity', 'Integritas'), take: [1, 2, 3], qs: [{ ref: 'sit_cash_difference', dim: 'integrity' }, { ref: 'beh_trusted_money', dim: 'integrity' }, { ref: 'sit_vendor_gift', dim: 'integrity' }, { ref: 'sit_sop_conflict', dim: 'integrity' }] },
          { id: 'customer', name: P('Customers', 'Nasabah'), take: [1, 1, 1], qs: [{ ref: 'beh_frustrated_customer', dim: 'customer' }, { ref: 'sit_public_complaint', dim: 'customer' }] },
          { id: 'adapt', name: P('Placement & growth', 'Penempatan & pertumbuhan'), take: [0, 1, 2], qs: [{ ref: 'elig_placement', dim: 'adapt' }, { ref: 'sit_far_placement', dim: 'adapt' }, { ref: 'val_grown_by_end', dim: 'adapt' }] },
          { id: 'close', name: P('Close', 'Penutup'), take: [1, 1, 1], qs: [{ ref: 'close_any_questions', dim: 'presence' }] }
        ],
        tips: [
          P('Answer eligibility questions in the first word: “Bersedia.” Then one sentence of reason.', 'Jawab pertanyaan kelayakan di kata pertama: “Bersedia.” Lalu satu kalimat alasan.'),
          P('On integrity scenarios, name the rule, the person you tell, and the time you tell them.', 'Pada skenario integritas, sebutkan aturannya, orang yang kamu beri tahu, dan kapan kamu memberitahunya.')
        ] },

      /* ── Marketing ── */
      { id: 'marketing-brand', cat: 'marketing', kind: 'technical', persona: 'manager',
        personaTitle: P('Brand manager · marketing round', 'Brand manager · babak pemasaran'),
        title: P('Marketing & Brand · Campaign Interview', 'Pemasaran & Brand · Wawancara Kampanye'),
        short: P('A campaign you ran, judging results, a Gen Z plan on a budget, acquisition cost from an exhibit, a PR crisis.', 'Kampanye yang pernah kamu jalankan, menilai hasil, rencana Gen Z dengan anggaran, biaya akuisisi dari eksibit, krisis PR.'),
        about: P('For brand, digital marketing and growth roles. You tell a campaign story with numbers, judge whether a campaign worked, plan a launch for a fictional snack brand, calculate customer acquisition cost from an exhibit, and handle a social-media complaint.', 'Untuk peran brand, pemasaran digital, dan growth. Kamu menceritakan kisah kampanye dengan angka, menilai keberhasilan kampanye, merencanakan peluncuran untuk merek camilan fiktif, menghitung biaya akuisisi pelanggan dari eksibit, dan menangani keluhan di media sosial.'),
        img: 'assets/pe/th-stakeholders.jpg', pos: '50% 35%', aud: ['student', 'graduate', 'early'],
        dims: [
          { id: 'insight', name: P('Customer insight', 'Wawasan konsumen'), desc: P('Knowing who and why.', 'Mengetahui siapa dan mengapa.') },
          { id: 'creative', name: P('Creativity & planning', 'Kreativitas & perencanaan'), desc: P('Ideas organised into a plan.', 'Ide yang tersusun menjadi rencana.') },
          { id: 'metrics', name: P('Measurement', 'Pengukuran'), desc: P('Knowing what worked, in numbers.', 'Mengetahui yang berhasil, dalam angka.') },
          { id: 'presence', name: P('Communication', 'Komunikasi'), desc: P('Persuasive and clear.', 'Persuasif dan jelas.') }
        ],
        sections: [
          { id: 'story', name: P('Your work', 'Pekerjaanmu'), take: [1, 2, 2], qs: [
            { id: 'mk_campaign', dim: 'insight', type: 'behavioural', sig: ['star', 'metric'], d: 2,
              q: P('Tell me about a campaign or piece of content you planned or ran: the audience, the message, the result.', 'Ceritakan kampanye atau konten yang pernah kamu rencanakan atau jalankan: audiensnya, pesannya, hasilnya.'),
              tests: P('Audience-first thinking and measured results.', 'Berpikir dari audiens dan hasil terukur.'),
              coach: P('Who it was for and the insight about them, the message, the channel, then the numbers — reach is not a result.', 'Untuk siapa dan wawasan tentang mereka, pesannya, kanalnya, lalu angkanya — jangkauan bukanlah hasil.') },
            { ref: 'tech_mkt_campaign', dim: 'metrics' }
          ] },
          { id: 'plan', name: P('Plan', 'Rencana'), take: [1, 1, 2], qs: [
            { id: 'mk_genz', dim: 'creative', type: 'case', sig: ['structure'], d: 2,
              q: P('A local snack brand wants to win Gen Z in Surabaya with Rp 500 million over three months. Outline your plan.', 'Sebuah merek camilan lokal ingin memenangkan Gen Z di Surabaya dengan Rp 500 juta selama tiga bulan. Uraikan rencanamu.'),
              tests: P('A plan with a target, a message, channels, a budget split and KPIs.', 'Rencana dengan target, pesan, kanal, pembagian anggaran, dan KPI.'),
              coach: P('Insight about the audience → one message → two or three channels with a budget split → how you will measure it.', 'Wawasan tentang audiens → satu pesan → dua atau tiga kanal dengan pembagian anggaran → cara mengukurnya.'),
              look: [lk('Audience insight', 'Wawasan audiens', 'gen z|students|insight|they|habit|mahasiswa|wawasan|mereka|kebiasaan'), lk('One clear message / positioning', 'Satu pesan / positioning yang jelas', 'message|positioning|tagline|story|pesan|positioning|cerita'), lk('Channels', 'Kanal', 'tiktok|instagram|creator|influencer|campus|retail|minimarket|kampus|kreator'), lk('Budget split', 'Pembagian anggaran', 'budget|split|%|rp|million|juta|anggaran|alokasi'), LK.metric] },
            { id: 'mk_cac', dim: 'metrics', type: 'case', sig: ['metric'], d: 2, exhibit: 'campaign',
              q: P('From the exhibit: what was the customer acquisition cost of the paid social campaign, in rupiah per new customer?', 'Dari eksibit: berapa biaya akuisisi pelanggan kampanye media sosial berbayar, dalam rupiah per pelanggan baru?'),
              tests: P('Unit economics from an exhibit.', 'Ekonomi unit dari eksibit.'),
              coach: P('Spend ÷ new customers for that channel only.', 'Belanja ÷ pelanggan baru untuk kanal itu saja.'),
              num: { v: 50000, tol: 500, unit: 'Rp' },
              solution: P('Paid social: Rp 200 million ÷ 4,000 new customers = Rp 50,000 per customer — below the Rp 80,000 first-year margin, so each customer pays back.', 'Media sosial berbayar: Rp 200 juta ÷ 4.000 pelanggan baru = Rp 50.000 per pelanggan — di bawah marjin tahun pertama Rp 80.000, jadi setiap pelanggan balik modal.') }
          ] },
          { id: 'crisis', name: P('Crisis', 'Krisis'), take: [0, 1, 1], qs: [{ ref: 'sit_public_complaint', dim: 'insight' }] },
          { id: 'close', name: P('Close', 'Penutup'), take: [1, 1, 1], qs: [{ ref: 'close_any_questions', dim: 'presence' }] }
        ],
        tips: [
          P('Separate outputs (views, likes) from outcomes (sales, sign-ups). Interviewers do.', 'Pisahkan output (tayangan, suka) dari outcome (penjualan, pendaftaran). Pewawancara melakukannya.')
        ] },

      /* ── Management trainee / graduate programme ── */
      { id: 'graduate-mt', cat: 'graduate', kind: 'behavioural', persona: 'hr',
        personaTitle: P('Talent acquisition · competency interview', 'Talent acquisition · wawancara kompetensi'),
        title: P('Management Trainee · Competency Interview', 'Management Trainee · Wawancara Kompetensi'),
        short: P('The graduate-programme competency round: drive, teamwork, problem-solving, adaptability, motivation.', 'Babak kompetensi program lulusan: dorongan, kerja sama tim, pemecahan masalah, adaptasi, motivasi.'),
        about: P('The structured competency interview used by most management-trainee and graduate programmes in Indonesia. Each question targets one competency; follow-ups test whether the story is yours.', 'Wawancara kompetensi terstruktur yang dipakai sebagian besar program management trainee dan lulusan di Indonesia. Setiap pertanyaan menyasar satu kompetensi; pertanyaan lanjutan menguji apakah kisahnya benar milikmu.'),
        img: 'assets/pe/ed-ladder.jpg', pos: '50% 40%', aud: ['student', 'graduate'],
        dims: [
          { id: 'drive', name: P('Drive & achievement', 'Dorongan & prestasi'), desc: P('Setting and hitting hard goals.', 'Menetapkan dan mencapai target sulit.') },
          { id: 'teamwork', name: P('Teamwork', 'Kerja sama tim'), desc: P('Making a group work.', 'Membuat kelompok berjalan.') },
          { id: 'problem', name: P('Problem-solving', 'Pemecahan masalah'), desc: P('Finding the cause and fixing it.', 'Menemukan penyebab dan memperbaikinya.') },
          { id: 'adapt', name: P('Adaptability', 'Kemampuan beradaptasi'), desc: P('Handling change and new places.', 'Menghadapi perubahan dan tempat baru.') },
          { id: 'motivation', name: P('Motivation', 'Motivasi'), desc: P('Why this programme.', 'Mengapa program ini.') },
          { id: 'presence', name: P('Communication', 'Komunikasi'), desc: P('Clear and concise.', 'Jelas dan ringkas.') }
        ],
        sections: [
          { id: 'open', name: P('Opening', 'Pembuka'), take: [1, 2, 2], qs: [{ ref: 'hr01', dim: 'presence' }, { ref: 'mot_why_programme', dim: 'motivation' }] },
          { id: 'comp', name: P('Competencies', 'Kompetensi'), take: [2, 3, 5], qs: [{ ref: 'bh21', dim: 'drive' }, { ref: 'beh_member_no_contribution', dim: 'teamwork' }, { ref: 'beh_problem_solving', dim: 'problem' }, { ref: 'beh_plan_fell_apart', dim: 'adapt' }, { ref: 'sit_far_placement', dim: 'adapt' }, { ref: 'beh_goal_missed', dim: 'drive' }] },
          { id: 'hard', name: P('Hard question', 'Pertanyaan sulit'), take: [0, 0, 1], qs: [{ ref: 'dc06', dim: 'motivation' }, { ref: 'diff_ipk_threshold', dim: 'motivation' }] },
          { id: 'close', name: P('Close', 'Penutup'), take: [1, 1, 1], qs: [{ ref: 'close_any_questions', dim: 'presence' }] }
        ],
        tips: [
          P('Build five stories from campus, internships and organisations; each should prove two competencies.', 'Bangun lima kisah dari kampus, magang, dan organisasi; masing-masing membuktikan dua kompetensi.')
        ] },

      /* ── HR phone screen ── */
      { id: 'hr-screen', cat: 'graduate', kind: 'screen', persona: 'hr', format: 'phone',
        personaTitle: P('Recruiter · phone screen', 'Rekruter · seleksi telepon'),
        title: P('HR Phone Screen · 15 Minutes', 'Seleksi Telepon HR · 15 Menit'),
        short: P('The short recruiter call that decides whether you get a real interview: clarity, motivation, logistics.', 'Panggilan singkat rekruter yang menentukan apakah kamu dapat wawancara sungguhan: kejelasan, motivasi, logistik.'),
        about: P('Recruiters screen dozens of candidates a day by phone or WhatsApp call. They want a crisp introduction, a believable reason for the role, and straight answers on salary, start date and other processes. Answer by voice if you can.', 'Rekruter menyaring puluhan kandidat per hari lewat telepon atau panggilan WhatsApp. Mereka ingin perkenalan yang tajam, alasan yang meyakinkan untuk peran itu, dan jawaban lugas soal gaji, tanggal mulai, dan proses lain. Jawab dengan suara bila bisa.'),
        img: 'assets/bg/gauntlet/new-gate-06-final-interview-sm.jpg', pos: '50% 35%', aud: ['student', 'graduate', 'early', 'mature'],
        dims: [
          { id: 'clarity', name: P('Clarity of pitch', 'Kejelasan pitch'), desc: P('Who you are in ninety seconds.', 'Siapa kamu dalam sembilan puluh detik.') },
          { id: 'motivation', name: P('Motivation', 'Motivasi'), desc: P('Why this role and company.', 'Mengapa peran dan perusahaan ini.') },
          { id: 'logistics', name: P('Straight answers', 'Jawaban lugas'), desc: P('Salary, start date, other processes.', 'Gaji, tanggal mulai, proses lain.') },
          { id: 'presence', name: P('Phone presence', 'Kehadiran di telepon'), desc: P('Pace, energy, no fillers.', 'Tempo, energi, tanpa kata pengisi.') }
        ],
        sections: [
          { id: 'pitch', name: P('Pitch', 'Pitch'), take: [1, 1, 1], qs: [{ ref: 'hr01', dim: 'clarity' }] },
          { id: 'why', name: P('Motivation', 'Motivasi'), take: [1, 2, 2], qs: [{ ref: 'hr04', dim: 'motivation' }, { ref: 'hr11', dim: 'motivation' }, { ref: 'hr05', dim: 'motivation' }] },
          { id: 'logistics', name: P('Logistics', 'Logistik'), take: [1, 2, 3], qs: [{ ref: 'elig_salary_gross', dim: 'logistics' }, { ref: 'elig_start_date', dim: 'logistics' }, { ref: 'elig_other_processes', dim: 'logistics' }] },
          { id: 'close', name: P('Close', 'Penutup'), take: [1, 1, 1], qs: [{ ref: 'close_any_questions', dim: 'presence' }] }
        ],
        tips: [
          P('Stand up, smile and keep notes in front of you — on a phone screen, nobody can see them.', 'Berdiri, tersenyum, dan taruh catatan di depanmu — di seleksi telepon, tak ada yang bisa melihatnya.'),
          P('Know your salary range and whether it is gross before the call.', 'Ketahui rentang gajimu dan apakah itu gross sebelum panggilan.')
        ] },

      /* ── Scholarship panel ── */
      { id: 'scholarship-panel', cat: 'public', kind: 'panel', persona: 'exec',
        personaTitle: P('Scholarship panel · academic & psychologist', 'Panel beasiswa · akademisi & psikolog'),
        title: P('Indonesia · Scholarship Panel · Master’s Abroad', 'Indonesia · Panel Beasiswa · S2 Luar Negeri'),   /* intentionally local: modelled on Indonesia’s national scholarship panels */
        short: P('The national scholarship panel: study plan, contribution to Indonesia, leadership and commitment to return.', 'Panel beasiswa nasional: rencana studi, kontribusi untuk Indonesia, kepemimpinan, dan komitmen kembali.'),
        about: P('Modelled on the panel format used by national scholarship programmes such as LPDP: a short introduction, then your study plan, the problem in Indonesia it addresses, your track record of contribution, resilience abroad and your commitment to return and serve. Independent practice — not affiliated with any scholarship body.', 'Mengikuti format panel yang dipakai program beasiswa nasional seperti LPDP: perkenalan singkat, lalu rencana studimu, masalah di Indonesia yang dijawabnya, rekam jejak kontribusimu, ketahanan di luar negeri, dan komitmenmu untuk kembali dan mengabdi. Latihan mandiri — tidak berafiliasi dengan lembaga beasiswa mana pun.'),
        img: 'assets/pe/ed-abroad-map.jpg', pos: '50% 50%', aud: ['student', 'graduate', 'early'],
        dims: [
          { id: 'plan', name: P('Study plan', 'Rencana studi'), desc: P('A specific programme for a specific reason.', 'Program spesifik untuk alasan spesifik.') },
          { id: 'contribution', name: P('Contribution to Indonesia', 'Kontribusi untuk Indonesia'), desc: P('A concrete plan to give back.', 'Rencana konkret untuk berkontribusi kembali.') },
          { id: 'leadership', name: P('Track record', 'Rekam jejak'), desc: P('What you have already started or led.', 'Apa yang sudah kamu mulai atau pimpin.') },
          { id: 'commitment', name: P('Commitment & resilience', 'Komitmen & ketahanan'), desc: P('Coping abroad and returning to serve.', 'Bertahan di luar negeri dan kembali mengabdi.') },
          { id: 'presence', name: P('Communication', 'Komunikasi'), desc: P('Sincere, structured, concise.', 'Tulus, terstruktur, ringkas.') }
        ],
        sections: [
          { id: 'intro', name: P('Introduction', 'Perkenalan'), take: [1, 1, 1], qs: [
            { id: 'sp_intro', dim: 'presence', type: 'motivational', sig: ['structure'], d: 1,
              q: P('Please introduce yourself and tell us why you are applying for this scholarship.', 'Silakan perkenalkan diri dan ceritakan mengapa Anda mendaftar beasiswa ini.'),
              tests: P('A sincere, structured opening that sets up your story.', 'Pembuka yang tulus dan terstruktur yang menyiapkan kisahmu.'),
              coach: P('Who you are in one line, the problem you care about, and how this degree is the next step. Under two minutes.', 'Siapa kamu dalam satu kalimat, masalah yang kamu pedulikan, dan bagaimana gelar ini menjadi langkah berikutnya. Di bawah dua menit.') }
          ] },
          { id: 'plan', name: P('Study plan', 'Rencana studi'), take: [1, 2, 2], qs: [
            { id: 'sp_why_prog', dim: 'plan', type: 'motivational', sig: ['research'], d: 2,
              q: P('Why this programme and this university? Why not study in Indonesia?', 'Mengapa program dan universitas ini? Mengapa tidak kuliah di Indonesia?'),
              tests: P('Specific research and a reason only abroad provides.', 'Riset spesifik dan alasan yang hanya bisa didapat di luar negeri.'),
              coach: P('Name courses, a lab or a professor, and what you cannot get at home — without criticising Indonesian universities.', 'Sebutkan mata kuliah, laboratorium, atau profesor, dan apa yang tidak bisa didapat di dalam negeri — tanpa mengkritik universitas Indonesia.'),
              look: [lk('Specific courses, lab or faculty', 'Mata kuliah, lab, atau dosen spesifik', 'course|module|lab|professor|supervisor|faculty|mata kuliah|laboratorium|profesor|pembimbing'), lk('Fit with your goal', 'Kecocokan dengan tujuanmu', 'goal|plan|want to|career|tujuan|rencana|ingin|karier'), lk('Why abroad, respectfully', 'Mengapa luar negeri, dengan hormat', 'abroad|international|exposure|network|luar negeri|internasional|jejaring|wawasan')] },
            { id: 'sp_research', dim: 'plan', type: 'technical', sig: ['structure'], d: 2,
              q: P('What will you focus on in your studies, and which problem in Indonesia does it address?', 'Apa fokus studi Anda, dan masalah apa di Indonesia yang dijawabnya?'),
              tests: P('A real problem, evidence for it, and who benefits.', 'Masalah nyata, bukti tentangnya, dan siapa yang diuntungkan.'),
              coach: P('Name the problem with one number, the gap your study fills, and who benefits.', 'Sebutkan masalahnya dengan satu angka, celah yang diisi studimu, dan siapa yang diuntungkan.'),
              look: [lk('A specific problem in Indonesia', 'Masalah spesifik di Indonesia', 'indonesia|province|region|village|city|provinsi|daerah|desa|kota'), LK.numbers, lk('Your focus or method', 'Fokus atau metodemu', 'research|focus|method|study|thesis|riset|fokus|metode|studi|tesis'), lk('Who benefits', 'Siapa yang diuntungkan', 'benefit|farmers|students|patients|community|small business|umkm|petani|siswa|pasien|masyarakat|komunitas')] }
          ] },
          { id: 'record', name: P('Contribution', 'Kontribusi'), take: [1, 1, 2], qs: [
            { id: 'sp_contrib_past', dim: 'leadership', type: 'behavioural', sig: ['star', 'metric'], d: 2,
              q: P('Tell us about your contribution to society so far — something you started or led.', 'Ceritakan kontribusi Anda bagi masyarakat sejauh ini — sesuatu yang Anda mulai atau pimpin.'),
              tests: P('Evidence that your plan is not just words.', 'Bukti bahwa rencanamu bukan sekadar kata-kata.'),
              coach: P('One initiative, your role, the people it reached in numbers, and what you learned.', 'Satu inisiatif, peranmu, orang yang dijangkau dalam angka, dan apa yang kamu pelajari.') },
            { id: 'sp_contrib_future', dim: 'contribution', type: 'technical', sig: ['structure'], d: 2,
              q: P('How exactly will you contribute to Indonesia after you graduate? Be specific about the first five years.', 'Bagaimana tepatnya Anda akan berkontribusi untuk Indonesia setelah lulus? Jelaskan spesifik untuk lima tahun pertama.'),
              tests: P('A concrete, believable plan rather than a slogan.', 'Rencana konkret dan meyakinkan, bukan slogan.'),
              coach: P('Where you will work, what you will build, a milestone for year one and year five, and how you will measure it.', 'Di mana kamu akan bekerja, apa yang akan kamu bangun, tonggak di tahun pertama dan kelima, dan cara mengukurnya.'),
              look: [lk('Where you will work', 'Di mana kamu akan bekerja', 'ministry|university|company|government|ngo|start|kementerian|universitas|perusahaan|pemerintah|lembaga'), lk('What you will build or change', 'Apa yang akan kamu bangun atau ubah', 'build|develop|launch|policy|program|bangun|kembangkan|luncurkan|kebijakan|program'), lk('Milestones by year', 'Tonggak per tahun', 'year|tahun|first|second|five|pertama|kedua|lima'), LK.metric] }
          ] },
          { id: 'commit', name: P('Commitment', 'Komitmen'), take: [0, 1, 2], qs: [
            { id: 'sp_struggle', dim: 'commitment', type: 'situational', sig: ['structure'], d: 2,
              q: P('What will you do if you struggle academically or find it hard to adapt abroad?', 'Apa yang akan Anda lakukan jika kesulitan akademik atau sulit beradaptasi di luar negeri?'),
              tests: P('Realistic coping strategies and support.', 'Strategi bertahan yang realistis dan dukungan.'),
              coach: P('Acknowledge it will happen, name the support you will use, and a time you coped with something similar.', 'Akui bahwa itu akan terjadi, sebutkan dukungan yang akan kamu pakai, dan saat kamu pernah menghadapi hal serupa.') },
            { id: 'sp_return', dim: 'commitment', type: 'motivational', sig: ['honesty'], d: 2,
              q: P('This scholarship asks you to return and serve in Indonesia. How do you see that commitment?', 'Beasiswa ini meminta Anda kembali dan mengabdi di Indonesia. Bagaimana Anda memandang komitmen itu?'),
              tests: P('Sincerity — panels hear rehearsed answers every day.', 'Ketulusan — panel mendengar jawaban hafalan setiap hari.'),
              coach: P('Say yes plainly, then why it fits your own plan — not because it is required.', 'Katakan ya dengan lugas, lalu mengapa itu sejalan dengan rencanamu sendiri — bukan karena diwajibkan.') }
          ] },
          { id: 'close', name: P('Close', 'Penutup'), take: [1, 1, 1], qs: [{ ref: 'cl01', dim: 'presence' }] }
        ],
        tips: [
          P('Panels test consistency: what you say must match your essay and CV. Re-read both before practising.', 'Panel menguji konsistensi: ucapanmu harus sesuai dengan esai dan CV-mu. Baca ulang keduanya sebelum berlatih.'),
          P('Practise answering in both Indonesian and English; many panels switch language mid-interview.', 'Berlatihlah menjawab dalam bahasa Indonesia dan Inggris; banyak panel berganti bahasa di tengah wawancara.')
        ] },

      /* ── State-owned enterprise ── */
      { id: 'soe-values', cat: 'public', kind: 'behavioural', persona: 'manager',
        personaTitle: P('User interviewer · values round', 'Pewawancara user · babak nilai'),
        title: P('Indonesia · State-Owned Enterprise (BUMN) · Values Interview', 'Indonesia · BUMN · Wawancara Nilai (AKHLAK)'),   /* intentionally local: the AKHLAK values of Indonesian state enterprises */
        short: P('Built around AKHLAK, the six core values of Indonesian state-owned enterprises, plus placement and motivation.', 'Dibangun di atas AKHLAK, enam nilai inti BUMN, ditambah penempatan dan motivasi.'),
        about: P('Indonesian state-owned enterprises share six core values — Amanah, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif (AKHLAK) — and user interviews probe them with behavioural questions. This path pairs those values with motivation and placement questions. Independent practice, not affiliated with any company.', 'BUMN di Indonesia memiliki enam nilai inti bersama — Amanah, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif (AKHLAK) — dan wawancara user menggalinya dengan pertanyaan perilaku. Jalur ini memadukan nilai-nilai itu dengan pertanyaan motivasi dan penempatan. Latihan mandiri, tidak berafiliasi dengan perusahaan mana pun.'),
        img: 'assets/bg/visibility.jpg', pos: '50% 30%', aud: ['student', 'graduate', 'early'],
        dims: [
          { id: 'values', name: P('Values in action', 'Nilai dalam tindakan'), desc: P('AKHLAK shown through real behaviour.', 'AKHLAK yang terlihat dari perilaku nyata.') },
          { id: 'integrity', name: P('Integrity (Amanah)', 'Integritas (Amanah)'), desc: P('Keeping trust when it costs something.', 'Menjaga amanah meski ada harganya.') },
          { id: 'adapt', name: P('Adaptability', 'Adaptif'), desc: P('Change, placement and learning.', 'Perubahan, penempatan, dan belajar.') },
          { id: 'motivation', name: P('Motivation', 'Motivasi'), desc: P('Why public service through business.', 'Mengapa melayani publik lewat bisnis.') },
          { id: 'presence', name: P('Communication', 'Komunikasi'), desc: P('Clear, respectful, direct.', 'Jelas, hormat, lugas.') }
        ],
        sections: [
          { id: 'open', name: P('Opening', 'Pembuka'), take: [1, 2, 2], qs: [
            { ref: 'hr01', dim: 'presence' },
            { id: 'soe_why', dim: 'motivation', type: 'motivational', sig: ['research'], d: 2,
              q: P('Why do you want to build a career in a state-owned enterprise rather than the private sector?', 'Mengapa Anda ingin berkarier di BUMN dan bukan di sektor swasta?'),
              tests: P('A reason beyond job security.', 'Alasan di luar rasa aman pekerjaan.'),
              coach: P('Connect the company’s role in the economy to something you care about and can do. Avoid “stability” as the main reason.', 'Hubungkan peran perusahaan dalam perekonomian dengan hal yang kamu pedulikan dan mampu kamu kerjakan. Hindari “stabilitas” sebagai alasan utama.') }
          ] },
          { id: 'values', name: P('AKHLAK values', 'Nilai AKHLAK'), take: [2, 3, 4], qs: [
            { id: 'soe_amanah', dim: 'integrity', type: 'behavioural', sig: ['star', 'honesty'], d: 2,
              q: P('Tell us about a time you were trusted with something important and kept that trust when it was hard. (Amanah)', 'Ceritakan saat Anda dipercaya memegang sesuatu yang penting dan menjaga kepercayaan itu saat sulit. (Amanah)'),
              tests: P('Trustworthiness under temptation or pressure.', 'Dapat dipercaya di bawah godaan atau tekanan.'),
              coach: P('What made it hard, what you did, who you told, and what it cost you.', 'Apa yang membuatnya sulit, apa yang kamu lakukan, siapa yang kamu beri tahu, dan apa harganya bagimu.') },
            { id: 'soe_kolab', dim: 'values', type: 'behavioural', sig: ['star', 'metric'], d: 2,
              q: P('Tell us about a time you collaborated across teams or organisations to deliver something. (Kolaboratif)', 'Ceritakan saat Anda berkolaborasi lintas tim atau organisasi untuk menghasilkan sesuatu. (Kolaboratif)'),
              tests: P('Building results with people you do not manage.', 'Membangun hasil bersama orang yang tidak kamu pimpin.'),
              coach: P('Different goals of each party, how you aligned them, and the shared result.', 'Tujuan berbeda tiap pihak, cara kamu menyelaraskannya, dan hasil bersamanya.') },
            { id: 'soe_adaptif', dim: 'adapt', type: 'behavioural', sig: ['star'], d: 2,
              q: P('Describe a time you had to adapt quickly to a big change. (Adaptif)', 'Ceritakan saat Anda harus cepat beradaptasi dengan perubahan besar. (Adaptif)'),
              tests: P('Speed and attitude in change.', 'Kecepatan dan sikap dalam perubahan.'),
              coach: P('What changed, what you stopped doing, what you learned fast, and the result.', 'Apa yang berubah, apa yang berhenti kamu lakukan, apa yang cepat kamu pelajari, dan hasilnya.') },
            { ref: 'sit_vendor_gift', dim: 'integrity' },
            { id: 'soe_hardest', dim: 'values', type: 'self_assessment', sig: ['honesty'], d: 3,
              q: P('Which of the six AKHLAK values is hardest for you, and what do you do about it?', 'Dari enam nilai AKHLAK, mana yang paling sulit bagi Anda, dan apa yang Anda lakukan terhadapnya?'),
              tests: P('Self-awareness without a disguised strength.', 'Kesadaran diri tanpa kekuatan yang disamarkan.'),
              coach: P('Pick one honestly, show a moment it showed, and the habit you use now.', 'Pilih satu dengan jujur, tunjukkan momen ia muncul, dan kebiasaan yang kamu pakai sekarang.') }
          ] },
          { id: 'placement', name: P('Placement', 'Penempatan'), take: [0, 1, 1], qs: [{ ref: 'elig_placement', dim: 'adapt' }] },
          { id: 'close', name: P('Close', 'Penutup'), take: [1, 1, 1], qs: [{ ref: 'close_any_questions', dim: 'presence' }] }
        ],
        tips: [
          P('Know the six AKHLAK values and have one real story for at least three of them.', 'Hafalkan enam nilai AKHLAK dan siapkan satu kisah nyata untuk minimal tiga di antaranya.')
        ] },

      /* ── MBA & master’s admissions ── */
      { id: 'mba-admissions', cat: 'leadership', kind: 'behavioural', persona: 'exec',
        personaTitle: P('Admissions interviewer · alumni style', 'Pewawancara admisi · gaya alumni'),
        title: P('MBA & Master’s Admissions Interview', 'Wawancara Admisi MBA & S2'),
        short: P('Why an MBA and why now, your goals, why this school, leadership and self-awareness.', 'Mengapa MBA dan mengapa sekarang, tujuanmu, mengapa sekolah ini, kepemimpinan, dan kesadaran diri.'),
        about: P('Business-school and master’s admissions interviews are conversational but structured. They test whether your goals are clear and credible, why this programme fits them, and whether you will lead and contribute in class.', 'Wawancara admisi sekolah bisnis dan S2 terasa santai namun terstruktur. Mereka menguji apakah tujuanmu jelas dan kredibel, mengapa program ini cocok, dan apakah kamu akan memimpin serta berkontribusi di kelas.'),
        img: 'assets/pe/ps-acceleration.jpg', pos: '50% 30%', aud: ['early', 'mature'],
        dims: [
          { id: 'goals', name: P('Goals clarity', 'Kejelasan tujuan'), desc: P('Specific, credible short- and long-term goals.', 'Tujuan jangka pendek dan panjang yang spesifik dan kredibel.') },
          { id: 'leadership', name: P('Leadership', 'Kepemimpinan'), desc: P('Leading people and outcomes.', 'Memimpin orang dan hasil.') },
          { id: 'self', name: P('Self-awareness', 'Kesadaran diri'), desc: P('Honest about failures and gaps.', 'Jujur tentang kegagalan dan kekurangan.') },
          { id: 'fit', name: P('School fit & contribution', 'Kecocokan & kontribusi'), desc: P('Why here, and what you give.', 'Mengapa di sini, dan apa yang kamu berikan.') },
          { id: 'presence', name: P('Communication', 'Komunikasi'), desc: P('Engaging and concise.', 'Menarik dan ringkas.') }
        ],
        sections: [
          { id: 'open', name: P('Your story', 'Kisahmu'), take: [1, 1, 1], qs: [{ ref: 'hr02', dim: 'presence' }] },
          { id: 'goals', name: P('Goals', 'Tujuan'), take: [1, 2, 3], qs: [
            { id: 'mba_whynow', dim: 'goals', type: 'motivational', sig: ['structure'], d: 2,
              q: P('Why an MBA, and why now?', 'Mengapa MBA, dan mengapa sekarang?'),
              tests: P('A gap only this degree fills, and the right timing.', 'Celah yang hanya bisa diisi gelar ini, dan waktu yang tepat.'),
              coach: P('Where you are, where you want to be, the gap between them, and why the next two years are the moment.', 'Di mana kamu sekarang, ke mana kamu ingin, celah di antaranya, dan mengapa dua tahun ke depan adalah saatnya.'),
              look: [lk('Where you are now', 'Posisimu sekarang', 'currently|now|today|my role|saat ini|sekarang|peran saya'), lk('The goal', 'Tujuannya', 'goal|want to|aim|become|tujuan|ingin|menjadi'), lk('The gap the degree fills', 'Celah yang diisi gelarnya', 'gap|need|lack|skills|network|celah|butuh|kurang|keterampilan|jejaring'), lk('Why now', 'Mengapa sekarang', 'now|timing|moment|years of experience|sekarang|waktu|momen|tahun pengalaman')] },
            { id: 'mba_goals', dim: 'goals', type: 'motivational', sig: ['structure'], d: 2,
              q: P('What are your short-term and long-term goals after the programme?', 'Apa tujuan jangka pendek dan jangka panjangmu setelah program?'),
              tests: P('Specificity and a plan B.', 'Kespesifikan dan rencana cadangan.'),
              coach: P('Short term: a role, an industry, a type of company. Long term: the impact. One line on plan B.', 'Jangka pendek: peran, industri, jenis perusahaan. Jangka panjang: dampaknya. Satu kalimat tentang rencana cadangan.'),
              look: [lk('Specific short-term role', 'Peran jangka pendek yang spesifik', 'role|position|consult|manager|associate|peran|posisi|manajer'), lk('Industry and company type', 'Industri dan jenis perusahaan', 'industry|sector|company|firm|industri|sektor|perusahaan'), lk('Long-term impact', 'Dampak jangka panjang', 'long.?term|impact|build|lead|jangka panjang|dampak|membangun|memimpin'), lk('Plan B', 'Rencana cadangan', 'plan b|alternative|if not|otherwise|rencana cadangan|alternatif|jika tidak')] },
            { id: 'mba_school', dim: 'fit', type: 'motivational', sig: ['research'], d: 2,
              q: P('Why {company|our school}? And what will you contribute to your classmates?', 'Mengapa {company|sekolah kami}? Dan apa yang akan kamu berikan untuk teman sekelasmu?'),
              tests: P('Research and a contribution only you bring.', 'Riset dan kontribusi yang hanya kamu bawa.'),
              coach: P('Two specific reasons (a course, a club, a conversation with a student) and one experience your classmates will learn from.', 'Dua alasan spesifik (mata kuliah, klub, percakapan dengan mahasiswa) dan satu pengalaman yang bisa dipelajari teman sekelasmu.') }
          ] },
          { id: 'lead', name: P('Leadership', 'Kepemimpinan'), take: [1, 1, 2], qs: [{ ref: 'bh01', dim: 'leadership' }, { ref: 'ld07', dim: 'leadership' }] },
          { id: 'self', name: P('Self-awareness', 'Kesadaran diri'), take: [0, 1, 2], qs: [{ ref: 'bh03', dim: 'self' }, { ref: 'cl04', dim: 'self' }] },
          { id: 'close', name: P('Close', 'Penutup'), take: [1, 1, 1], qs: [{ ref: 'hr16', dim: 'presence' }] }
        ],
        tips: [
          P('Your goals must match your essays word for word in substance; interviewers often have them open.', 'Tujuanmu harus sama substansinya dengan esaimu; pewawancara sering membukanya saat wawancara.')
        ] },

      /* ── Senior leadership final round ── */
      { id: 'senior-final', cat: 'leadership', kind: 'behavioural', persona: 'exec',
        personaTitle: P('Executive panel · final round', 'Panel eksekutif · babak final'),
        title: P('Senior Leader · Final Round', 'Pemimpin Senior · Babak Final'),
        short: P('For experienced professionals: strategy, people decisions, change, hard calls and executive presence.', 'Untuk profesional berpengalaman: strategi, keputusan tentang orang, perubahan, keputusan sulit, dan executive presence.'),
        about: P('The final round for head-of, director and general-manager roles. Executives test whether you think in years, build teams, carry unpopular decisions, deliver results that show on a P&L, and know your own blind spots.', 'Babak final untuk peran head-of, direktur, dan general manager. Para eksekutif menguji apakah kamu berpikir dalam hitungan tahun, membangun tim, memikul keputusan yang tidak populer, menghasilkan dampak yang terlihat di laporan laba rugi, dan mengenali titik butamu.'),
        img: 'assets/pe/ps-positioning.jpg', pos: '50% 30%', aud: ['mature'],
        dims: [
          { id: 'strategy', name: P('Strategic thinking', 'Pemikiran strategis'), desc: P('Diagnosis, priorities, sequence.', 'Diagnosis, prioritas, urutan.') },
          { id: 'people', name: P('People leadership', 'Kepemimpinan orang'), desc: P('Building, fixing and developing teams.', 'Membangun, memperbaiki, dan mengembangkan tim.') },
          { id: 'decisions', name: P('Decision-making', 'Pengambilan keputusan'), desc: P('Hard calls with incomplete data.', 'Keputusan sulit dengan data tak lengkap.') },
          { id: 'results', name: P('Results', 'Hasil'), desc: P('Impact you can quantify.', 'Dampak yang bisa diukur.') },
          { id: 'presence', name: P('Executive presence', 'Executive presence'), desc: P('Concise, calm, credible.', 'Ringkas, tenang, kredibel.') }
        ],
        sections: [
          { id: 'open', name: P('Opening', 'Pembuka'), take: [1, 1, 1], qs: [
            { id: 'sr_built', dim: 'presence', type: 'motivational', sig: ['structure'], d: 2,
              q: P('In two minutes: what have you built over your career, and what do you want to build next?', 'Dalam dua menit: apa yang sudah kamu bangun sepanjang kariermu, dan apa yang ingin kamu bangun berikutnya?'),
              tests: P('A narrative of compounding impact.', 'Narasi dampak yang terus bertumbuh.'),
              coach: P('Three chapters with one quantified result each, ending on what this role lets you build.', 'Tiga bab dengan satu hasil terukur masing-masing, berakhir pada apa yang bisa kamu bangun lewat peran ini.') }
          ] },
          { id: 'strategy', name: P('Strategy', 'Strategi'), take: [1, 1, 1], qs: [
            { id: 'sr_100', dim: 'strategy', type: 'situational', sig: ['structure'], d: 3,
              q: P('Our market is moving from offline to digital faster than our organisation is. What would your first 100 days look like?', 'Pasar kami bergeser dari luring ke digital lebih cepat daripada organisasi kami. Seperti apa 100 hari pertamamu?'),
              tests: P('Diagnosis before prescription, and sequencing.', 'Diagnosis sebelum resep, dan pengurutan.'),
              coach: P('Listen and diagnose first, pick two or three priorities, a quick win, the team you need and how you will measure progress.', 'Dengar dan diagnosis dulu, pilih dua atau tiga prioritas, satu kemenangan cepat, tim yang kamu butuhkan, dan cara mengukur kemajuan.'),
              look: [lk('Listen and diagnose first', 'Dengar dan diagnosis dulu', 'listen|diagnos|understand|assess|dengar|diagnosis|memahami|menilai'), lk('Two or three priorities', 'Dua atau tiga prioritas', 'priorit|focus|two|three|prioritas|fokus|dua|tiga'), lk('A quick win', 'Kemenangan cepat', 'quick win|early win|first 30|kemenangan cepat|hasil awal'), lk('The team and capabilities', 'Tim dan kapabilitas', 'team|hire|capabilit|talent|tim|rekrut|kapabilitas|talenta'), LK.metric] }
          ] },
          { id: 'people', name: P('People & decisions', 'Orang & keputusan'), take: [1, 3, 4], qs: [{ ref: 'ld02', dim: 'people' }, { ref: 'ld05', dim: 'people' }, { ref: 'ld08', dim: 'decisions' }, { ref: 'ld04', dim: 'people' }, { ref: 'bh16', dim: 'decisions' }] },
          { id: 'results', name: P('Results', 'Hasil'), take: [1, 1, 1], qs: [
            { id: 'sr_pnl', dim: 'results', type: 'behavioural', sig: ['star', 'metric'], d: 3,
              q: P('Tell me about a result you delivered that moved a line on the P&L. Quantify it.', 'Ceritakan hasil yang kamu capai yang menggerakkan satu baris di laporan laba rugi. Ukur dengan angka.'),
              tests: P('Commercial impact, owned.', 'Dampak komersial, dimiliki sendiri.'),
              coach: P('The line, the before and after, the decision that caused it, and what others contributed.', 'Barisnya, kondisi sebelum dan sesudah, keputusan yang menyebabkannya, dan kontribusi orang lain.') }
          ] },
          { id: 'self', name: P('Blind spots', 'Titik buta'), take: [0, 1, 1], qs: [
            { id: 'sr_weak', dim: 'presence', type: 'self_assessment', sig: ['honesty'], d: 3,
              q: P('What would your board, your peers and your team each say is your biggest weakness?', 'Menurut dewan, rekan setingkat, dan timmu, apa kelemahan terbesarmu menurut masing-masing?'),
              tests: P('Self-awareness from three angles.', 'Kesadaran diri dari tiga sudut.'),
              coach: P('Three honest answers that differ, and the system you use for the one that matters most in this role.', 'Tiga jawaban jujur yang berbeda, dan sistem yang kamu pakai untuk yang paling penting di peran ini.') }
          ] },
          { id: 'close', name: P('Close', 'Penutup'), take: [1, 1, 1], qs: [{ ref: 'cl05', dim: 'presence' }] }
        ],
        tips: [
          P('Lead with the outcome in every answer; executives interrupt long set-ups.', 'Awali setiap jawaban dengan hasilnya; eksekutif memotong pengantar yang panjang.')
        ] }
    ],

    /* ═════════════════════════════ EXHIBITS ═════════════════════════════
       Every exhibit is fictional and labelled so in the UI. */
    exhibits: {
      abtest: { title: P('Checkout redesign · A/B test, 14 days', 'Desain ulang checkout · uji A/B, 14 hari'), kind: 'table',
        head: [P('Variant', 'Varian'), P('Visitors', 'Pengunjung'), P('Orders', 'Pesanan'), P('Avg. order value', 'Rata-rata nilai pesanan')],
        rows: [[P('A · current', 'A · saat ini'), '10,000', '400', 'Rp 82,000'], [P('B · new', 'B · baru'), '10,000', '460', 'Rp 79,500']],
        note: P('Visitors were split at random. Fictional data.', 'Pengunjung dibagi secara acak. Data fiktif.') },
      comps: { title: P('Target company and listed peers (FY2025)', 'Perusahaan target dan pembanding tercatat (TA2025)'), kind: 'table',
        head: [P('Company', 'Perusahaan'), P('EBITDA (Rp bn)', 'EBITDA (Rp miliar)'), P('EV / EBITDA', 'EV / EBITDA'), P('Net debt (Rp bn)', 'Utang bersih (Rp miliar)')],
        rows: [[P('Target', 'Target'), '250', '—', '600'], [P('Peer 1', 'Pembanding 1'), '410', '7.0x', '—'], [P('Peer 2', 'Pembanding 2'), '180', '8.0x', '—'], [P('Peer 3', 'Pembanding 3'), '920', '9.5x', '—']],
        note: P('Use the median peer multiple. Fictional companies.', 'Gunakan kelipatan median pembanding. Perusahaan fiktif.') },
      campaign: { title: P('Launch campaign results by channel, 8 weeks', 'Hasil kampanye peluncuran per kanal, 8 minggu'), kind: 'table',
        head: [P('Channel', 'Kanal'), P('Spend (Rp m)', 'Belanja (Rp juta)'), P('New customers', 'Pelanggan baru'), P('First-year margin / customer', 'Marjin tahun pertama / pelanggan')],
        rows: [[P('Paid social', 'Media sosial berbayar'), '200', '4,000', 'Rp 80,000'], [P('Campus events', 'Acara kampus'), '120', '1,500', 'Rp 80,000'], [P('Minimarket sampling', 'Sampling di minimarket'), '180', '1,200', 'Rp 80,000']],
        note: P('Fictional brand and data.', 'Merek dan data fiktif.') },

      /* case: profitability */
      profit1: { title: P('Arunika Coffee · P&L summary (Rp billion)', 'Arunika Coffee · ringkasan laba rugi (Rp miliar)'), kind: 'table',
        head: [P('Line', 'Pos'), P('2023', '2023'), P('2025', '2025')],
        rows: [[P('Revenue', 'Pendapatan'), '400', '480'], [P('· of which dine-in', '· dari makan di tempat'), '320', '280'], [P('· of which delivery apps', '· dari aplikasi pesan-antar'), '80', '200'],
          [P('Cost of goods (beans, milk, cups)', 'HPP (kopi, susu, gelas)'), '140', '168'], [P('Delivery-app commission', 'Komisi aplikasi pesan-antar'), '16', '50'], [P('Rent', 'Sewa'), '80', '92'], [P('Staff', 'Karyawan'), '64', '74'], [P('Marketing & promotions', 'Pemasaran & promosi'), '40', '60'],
          [P('Operating profit', 'Laba operasional'), '60', '36']],
        note: P('Fictional client. 120 outlets in Java in both years.', 'Klien fiktif. 120 gerai di Jawa pada kedua tahun.') },
      profit2: { title: P('Contribution per cup by channel, 2025 (Rp)', 'Kontribusi per gelas menurut kanal, 2025 (Rp)'), kind: 'bars', unit: 'Rp',
        cats: [P('Dine-in', 'Makan di tempat'), P('Delivery app', 'Aplikasi pesan-antar')],
        series: [{ name: P('Contribution per cup', 'Kontribusi per gelas'), values: [14000, 5500] }],
        note: P('After cost of goods, commission and promotion discounts. Fictional data.', 'Setelah HPP, komisi, dan diskon promosi. Data fiktif.') },

      /* case: market entry / sizing */
      entry1: { title: P('City facts for a battery-swap network (2028 forecast)', 'Fakta kota untuk jaringan tukar baterai (proyeksi 2028)'), kind: 'table',
        head: [P('Item', 'Item'), P('Value', 'Nilai')],
        rows: [[P('Population', 'Penduduk'), P('2.5 million', '2,5 juta')], [P('Households', 'Rumah tangga'), P('625,000', '625.000')], [P('Motorbikes per household', 'Motor per rumah tangga'), P('1.6', '1,6')],
          [P('Electric share of motorbikes, today', 'Porsi motor listrik, saat ini'), '2%'], [P('Electric share of motorbikes, 2028', 'Porsi motor listrik, 2028'), '10%'],
          [P('Battery swaps per e-motorbike per week', 'Tukar baterai per motor listrik per minggu'), '3'], [P('Capacity of one swap station per week', 'Kapasitas satu stasiun per minggu'), P('300 swaps', '300 tukar')],
          [P('Station cost (equipment + batteries)', 'Biaya stasiun (peralatan + baterai)'), P('Rp 150 million', 'Rp 150 juta')], [P('Margin per swap', 'Marjin per tukar'), P('Rp 5,000', 'Rp 5.000')]],
        note: P('Fictional city and client. Figures for the case only.', 'Kota dan klien fiktif. Angka hanya untuk kasus ini.') },
      entry2: { title: P('Electric share of motorbikes by rider segment, 2025', 'Porsi motor listrik menurut segmen pengendara, 2025'), kind: 'bars', unit: '%',
        cats: [P('Ride-hailing drivers', 'Pengemudi ojek daring'), P('Delivery couriers', 'Kurir pengantaran'), P('Private commuters', 'Komuter pribadi')],
        series: [{ name: P('Electric share', 'Porsi listrik'), values: [18, 12, 1] }],
        note: P('Fictional survey data.', 'Data survei fiktif.') },

      /* case: operations */
      ops1: { title: P('Outpatient journey at peak (9–11 am)', 'Perjalanan pasien rawat jalan saat puncak (09.00–11.00)'), kind: 'table',
        head: [P('Step', 'Tahap'), P('Avg. wait (min)', 'Rata-rata tunggu (menit)'), P('Service time (min)', 'Waktu layanan (menit)'), P('Staff on duty', 'Staf bertugas')],
        rows: [[P('Registration', 'Pendaftaran'), '6', '3', '4'], [P('Triage', 'Triase'), '9', '3', '3'], [P('Doctor consultation', 'Konsultasi dokter'), '25', '12', '12'], [P('Pharmacy', 'Farmasi'), '48', '3', '2'], [P('Payment', 'Pembayaran'), '7', '2', '2']],
        note: P('Peak arrivals: 60 patients per hour. Fictional hospital.', 'Kedatangan puncak: 60 pasien per jam. Rumah sakit fiktif.') }
    },

    /* ═════════════════════════════ CASES ═════════════════════════════ */
    cases: {
      profit: {
        name: P('Profitability · coffee chain', 'Profitabilitas · jaringan kedai kopi'),
        client: P('Arunika Coffee (fictional), 120 outlets in Java', 'Arunika Coffee (fiktif), 120 gerai di Jawa'),
        brief: P('Our client, Arunika Coffee, runs 120 coffee outlets across Java. Revenue grew from Rp 400 billion in 2023 to Rp 480 billion in 2025, yet operating profit fell from Rp 60 billion to Rp 36 billion. The CEO wants to know why, and what to do about it.', 'Klien kita, Arunika Coffee, mengelola 120 gerai kopi di Jawa. Pendapatan naik dari Rp 400 miliar pada 2023 menjadi Rp 480 miliar pada 2025, tetapi laba operasional turun dari Rp 60 miliar menjadi Rp 36 miliar. CEO ingin tahu penyebabnya, dan apa yang harus dilakukan.'),
        facts: [
          { n: P('Objective', 'Tujuan'), re: 'objective|goal|target|aim|success|tujuan|sasaran|target', key: true, fact: P('The CEO wants operating profit back to Rp 60 billion within two years, without closing outlets.', 'CEO ingin laba operasional kembali ke Rp 60 miliar dalam dua tahun, tanpa menutup gerai.') },
          { n: P('Business model', 'Model bisnis'), re: 'channel|how .*sell|delivery|dine|online|app|kanal|pesan.?antar|aplikasi|daring', key: true, fact: P('Customers buy in-store (dine-in or take-away) or through delivery apps such as food-delivery platforms.', 'Pelanggan membeli di gerai (makan di tempat atau bawa pulang) atau lewat aplikasi pesan-antar.') },
          { n: P('Competition', 'Persaingan'), re: 'compet|rival|market|industry|pesaing|kompetitor|pasar|industri', fact: P('Two national chains have expanded in the same cities and run heavy discounts on delivery apps.', 'Dua jaringan nasional berekspansi di kota yang sama dan memberi diskon besar di aplikasi pesan-antar.') },
          { n: P('Prices', 'Harga'), re: 'price|pricing|menu|harga', fact: P('Menu prices have not changed since 2023, and are the same in-store and on the apps.', 'Harga menu tidak berubah sejak 2023, dan sama di gerai maupun di aplikasi.') },
          { n: P('Outlets', 'Gerai'), re: 'outlet|store|location|new|footprint|gerai|toko|lokasi|baru', fact: P('The outlet count has stayed at 120; no openings or closures since 2023.', 'Jumlah gerai tetap 120; tidak ada pembukaan atau penutupan sejak 2023.') }
        ],
        steps: [
          { step: 'clarify', dim: 'framing',
            q: P('Take a moment. What would you like to clarify before you start?', 'Silakan ambil waktu sejenak. Apa yang ingin kamu klarifikasi sebelum mulai?'),
            tests: P('Clarifying the objective and the business before solving.', 'Mengklarifikasi tujuan dan bisnisnya sebelum menyelesaikan.'),
            coach: P('Ask about the objective, the timeframe, how they sell, and anything that changed. Two or three questions are enough.', 'Tanyakan tujuan, kerangka waktu, cara mereka menjual, dan apa pun yang berubah. Dua atau tiga pertanyaan cukup.') },
          { step: 'structure', dim: 'framing',
            q: P('How would you structure your approach to this problem?', 'Bagaimana kamu menstrukturkan pendekatan untuk masalah ini?'),
            tests: P('A profit tree that matches the facts.', 'Pohon laba yang sesuai dengan faktanya.'),
            coach: P('Profit = revenue − costs. Revenue by channel (price × volume); costs split into the lines that could have moved.', 'Laba = pendapatan − biaya. Pendapatan per kanal (harga × volume); biaya dipecah menjadi pos yang mungkin bergerak.'),
            look: [lk('Revenue vs costs', 'Pendapatan vs biaya', 'revenue|cost|pendapatan|biaya'), lk('Price × volume', 'Harga × volume', 'price|volume|cups|transactions|harga|volume|gelas|transaksi'), lk('Channel mix (dine-in vs delivery)', 'Bauran kanal (di tempat vs pesan-antar)', 'channel|delivery|dine|app|kanal|pesan.?antar|di tempat|aplikasi'), lk('Cost lines that could move', 'Pos biaya yang bisa bergerak', 'commission|rent|staff|cogs|ingredient|promotion|komisi|sewa|karyawan|hpp|bahan|promosi'), lk('A hypothesis', 'Hipotesis', 'hypothes|i suspect|likely|my guess|hipotesis|dugaan|kemungkinan')] },
          { step: 'quant', dim: 'quant', exhibit: 'profit1',
            q: P('Here is the P&L. What was the operating margin in 2025, in percent?', 'Ini laporan laba ruginya. Berapa marjin operasional pada 2025, dalam persen?'),
            tests: P('Reading an exhibit and a clean calculation.', 'Membaca eksibit dan perhitungan yang rapi.'),
            coach: P('Operating profit ÷ revenue. Compare with 2023 too.', 'Laba operasional ÷ pendapatan. Bandingkan juga dengan 2023.'),
            num: { v: 7.5, tol: 0.2, unit: '%' },
            solution: P('2025: 36 ÷ 480 = 7.5%. For comparison, 2023: 60 ÷ 400 = 15% — the margin halved.', '2025: 36 ÷ 480 = 7,5%. Sebagai pembanding, 2023: 60 ÷ 400 = 15% — marjinnya terpangkas separuh.') },
          { step: 'insight', dim: 'insight', exhibit: 'profit1',
            q: P('What is driving the decline? Use the numbers in the exhibit.', 'Apa yang mendorong penurunannya? Gunakan angka di eksibit.'),
            tests: P('Turning the exhibit into a cause.', 'Mengubah eksibit menjadi penyebab.'),
            coach: P('Find the lines that grew faster than revenue. Revenue +20%; which costs grew far more?', 'Cari pos yang tumbuh lebih cepat dari pendapatan. Pendapatan +20%; biaya mana yang tumbuh jauh lebih cepat?'),
            look: [lk('Delivery revenue grew while dine-in fell', 'Pendapatan pesan-antar naik saat di tempat turun', 'delivery|app|dine|shift|mix|pesan.?antar|aplikasi|di tempat|bergeser|bauran'), lk('Commission rose from 16 to 50', 'Komisi naik dari 16 ke 50', 'commission|komisi|50|34'), lk('Promotions rose from 40 to 60', 'Promosi naik dari 40 ke 60', 'promo|marketing|discount|diskon|pemasaran|60'), lk('Commission rate rose from 20% to 25%', 'Tarif komisi naik dari 20% ke 25%', '20%|25%|rate|tarif'), lk('So what: the growth is low-margin', 'Artinya: pertumbuhannya bermarjin rendah', 'low.?margin|less profitable|eats|unprofitable|marjin rendah|kurang menguntungkan|menggerus')],
            solution: P('Revenue grew Rp 80 bn, but all of it came from delivery apps (80 → 200) while dine-in fell (320 → 280). Commission rose by Rp 34 bn (the rate went from 20% to 25% of delivery revenue) and promotions by Rp 20 bn. The growth is low-margin delivery replacing higher-margin dine-in.', 'Pendapatan naik Rp 80 miliar, tetapi seluruhnya berasal dari aplikasi pesan-antar (80 → 200) sementara makan di tempat turun (320 → 280). Komisi naik Rp 34 miliar (tarif dari 20% menjadi 25% dari pendapatan pesan-antar) dan promosi naik Rp 20 miliar. Pertumbuhannya adalah pesan-antar bermarjin rendah yang menggantikan makan di tempat yang bermarjin lebih tinggi.') },
          { step: 'quant', dim: 'quant', exhibit: 'profit1',
            q: P('If Arunika renegotiates the commission back to 20% of 2025 delivery revenue, how much operating profit does it recover, in Rp billion?', 'Jika Arunika menegosiasikan komisi kembali ke 20% dari pendapatan pesan-antar 2025, berapa laba operasional yang kembali, dalam miliar Rp?'),
            tests: P('A quick what-if from the exhibit.', 'Simulasi cepat dari eksibit.'),
            coach: P('Today’s commission rate is 50 ÷ 200. Compare with 20% of 200.', 'Tarif komisi saat ini adalah 50 ÷ 200. Bandingkan dengan 20% dari 200.'),
            num: { v: 10, tol: 0.5, unit: 'Rp bn' },
            solution: P('Current commission 50 ÷ 200 = 25%. At 20%: 0.20 × 200 = 40. Saving = 50 − 40 = Rp 10 bn — less than half of the Rp 24 bn gap, so commission alone does not fix it.', 'Komisi saat ini 50 ÷ 200 = 25%. Pada 20%: 0,20 × 200 = 40. Penghematan = 50 − 40 = Rp 10 miliar — kurang dari separuh selisih Rp 24 miliar, jadi komisi saja tidak cukup.') },
          { step: 'brainstorm', dim: 'creativity', exhibit: 'profit2',
            q: P('A delivery cup contributes Rp 5,500 against Rp 14,000 in-store. Brainstorm ways to restore profit.', 'Satu gelas pesan-antar berkontribusi Rp 5.500 dibanding Rp 14.000 di gerai. Ajukan ide-ide untuk memulihkan laba.'),
            tests: P('Breadth, organised into buckets.', 'Keluasan ide, tertata dalam kelompok.'),
            coach: P('Group ideas: delivery economics, bringing customers back in-store, costs. Aim for six or more.', 'Kelompokkan ide: ekonomi pesan-antar, membawa pelanggan kembali ke gerai, biaya. Targetkan enam ide atau lebih.'),
            look: [lk('Price delivery menus separately', 'Harga terpisah untuk menu pesan-antar', 'delivery price|price .*app|app price|separate price|mark.?up|harga .*aplikasi|harga pesan.?antar|naikkan harga'), lk('Renegotiate or diversify platforms', 'Negosiasi ulang atau diversifikasi platform', 'renegotiat|negotiat|platform|exclusiv|negosiasi|platform|eksklusif'), lk('Own ordering / loyalty channel', 'Kanal pemesanan / loyalitas sendiri', 'own app|loyalty|membership|pick.?up|website|whatsapp|aplikasi sendiri|loyalitas|member|ambil sendiri'), lk('Cut or target promotions', 'Kurangi atau sasar promosi', 'promo|discount|voucher|diskon'), lk('Bring traffic back in-store', 'Kembalikan kunjungan ke gerai', 'in.?store|dine|experience|events|bundle|di gerai|di tempat|pengalaman|acara'), lk('Rent, staff and procurement costs', 'Biaya sewa, karyawan, dan pengadaan', 'rent|staff|schedul|procure|beans|supplier|sewa|karyawan|jadwal|pengadaan|pemasok')] },
          { step: 'synthesis', dim: 'synthesis',
            q: P('The CEO walks in. Give me your recommendation in one minute.', 'CEO masuk ke ruangan. Sampaikan rekomendasimu dalam satu menit.'),
            tests: P('Answer-first synthesis backed by numbers.', 'Sintesis yang diawali jawaban dan didukung angka.'),
            coach: P('Recommendation in the first sentence, three reasons with numbers, one risk, one next step.', 'Rekomendasi di kalimat pertama, tiga alasan dengan angka, satu risiko, satu langkah berikutnya.'),
            look: [LK.answerFirst, lk('The cause in numbers', 'Penyebabnya dalam angka', 'delivery|commission|promo|pesan.?antar|komisi|promosi'), LK.numbers, LK.risks, LK.nextSteps],
            pushback: P('The head of marketing says cutting promotions will hand our customers to the competitors. How do you respond?', 'Kepala pemasaran berkata memangkas promosi akan menyerahkan pelanggan kita ke pesaing. Bagaimana tanggapanmu?') }
        ],
        plan: { quick: [0, 1, 2, 6], standard: [0, 1, 2, 3, 5, 6], full: [0, 1, 2, 3, 4, 5, 6] }
      },

      entry: {
        name: P('Market entry & sizing · battery swap', 'Masuk pasar & estimasi · tukar baterai'),
        client: P('VoltRide (fictional), an electric-motorbike battery-swap start-up', 'VoltRide (fiktif), start-up tukar baterai motor listrik'),
        brief: P('Our client, VoltRide, runs battery-swap stations for electric motorbikes in Jakarta. They are considering entering a city of 2.5 million people in Java by 2028. Should they, and how big should the network be?', 'Klien kita, VoltRide, mengoperasikan stasiun tukar baterai motor listrik di Jakarta. Mereka mempertimbangkan masuk ke sebuah kota berpenduduk 2,5 juta jiwa di Jawa pada 2028. Haruskah mereka masuk, dan seberapa besar jaringannya?'),
        facts: [
          { n: P('Objective', 'Tujuan'), re: 'objective|goal|target|success|return|payback|tujuan|sasaran|target|balik modal', key: true, fact: P('VoltRide wants a 30% share of battery swaps in the city by 2028, and stations that pay back within three years.', 'VoltRide menargetkan 30% pangsa tukar baterai di kota itu pada 2028, dan stasiun yang balik modal dalam tiga tahun.') },
          { n: P('How the business works', 'Cara bisnisnya berjalan'), re: 'how|model|revenue|charge|price|cara|model|pendapatan|tarif|harga', key: true, fact: P('Riders pay per swap; VoltRide earns a margin of Rp 5,000 per swap after electricity and battery wear.', 'Pengendara membayar per tukar; VoltRide mendapat marjin Rp 5.000 per tukar setelah listrik dan keausan baterai.') },
          { n: P('Competition', 'Persaingan'), re: 'compet|rival|other players|pesaing|kompetitor|pemain lain', fact: P('One competitor has 20 stations in the city today; motorbike makers also sell home chargers.', 'Satu pesaing memiliki 20 stasiun di kota itu saat ini; produsen motor juga menjual pengisi daya rumahan.') },
          { n: P('Regulation', 'Regulasi'), re: 'regulat|government|subsid|permit|regulasi|pemerintah|subsidi|izin', fact: P('A national incentive lowers the price of electric motorbikes; no special permit is needed for stations.', 'Insentif nasional menurunkan harga motor listrik; tidak perlu izin khusus untuk stasiun.') }
        ],
        steps: [
          { step: 'clarify', dim: 'framing',
            q: P('What would you like to clarify before we size this?', 'Apa yang ingin kamu klarifikasi sebelum kita menghitung ukurannya?'),
            tests: P('Clarifying objective and economics.', 'Mengklarifikasi tujuan dan ekonominya.'),
            coach: P('Ask what success looks like and how the client makes money.', 'Tanyakan seperti apa keberhasilan dan bagaimana klien menghasilkan uang.') },
          { step: 'structure', dim: 'framing',
            q: P('How would you structure the decision to enter?', 'Bagaimana kamu menstrukturkan keputusan untuk masuk?'),
            tests: P('A market-entry frame with economics.', 'Kerangka masuk pasar dengan ekonominya.'),
            coach: P('Market size and growth, competition, the client’s economics (cost per station, payback), and how to enter.', 'Ukuran dan pertumbuhan pasar, persaingan, ekonomi klien (biaya per stasiun, balik modal), dan cara masuk.'),
            look: [lk('Market size and growth', 'Ukuran dan pertumbuhan pasar', 'market size|demand|how many|growth|ukuran pasar|permintaan|berapa banyak|pertumbuhan'), lk('Competition', 'Persaingan', 'compet|pesaing|kompetitor'), lk('Unit economics / payback', 'Ekonomi unit / balik modal', 'econom|cost|payback|margin|profit|ekonomi|biaya|balik modal|marjin|laba'), lk('Entry mode and partners', 'Cara masuk dan mitra', 'partner|fleet|entry|how to enter|pilot|mitra|armada|cara masuk'), lk('Risks', 'Risiko', 'risk|regulat|risiko|regulasi')] },
          { step: 'quant', dim: 'quant', exhibit: 'entry1',
            q: P('Using the exhibit, how many electric motorbikes will the city have in 2028?', 'Menggunakan eksibit, berapa jumlah motor listrik di kota itu pada 2028?'),
            tests: P('A sizing chain from an exhibit.', 'Rantai estimasi dari eksibit.'),
            coach: P('Households × motorbikes per household × electric share.', 'Rumah tangga × motor per rumah tangga × porsi listrik.'),
            num: { v: 100000, tol: 500, unit: 'e-motorbikes' },
            solution: P('625,000 households × 1.6 = 1,000,000 motorbikes. × 10% electric = 100,000 e-motorbikes in 2028.', '625.000 rumah tangga × 1,6 = 1.000.000 motor. × 10% listrik = 100.000 motor listrik pada 2028.') },
          { step: 'quant', dim: 'quant', exhibit: 'entry1',
            q: P('How many stations does VoltRide need to serve 30% of all swaps in 2028?', 'Berapa stasiun yang dibutuhkan VoltRide untuk melayani 30% dari semua penukaran pada 2028?'),
            tests: P('Converting demand into capacity.', 'Mengubah permintaan menjadi kapasitas.'),
            coach: P('Weekly swaps × 30% ÷ station capacity per week.', 'Penukaran per minggu × 30% ÷ kapasitas stasiun per minggu.'),
            num: { v: 300, tol: 3, unit: 'stations' },
            solution: P('100,000 × 3 swaps = 300,000 swaps a week. 30% = 90,000. ÷ 300 per station = 300 stations.', '100.000 × 3 tukar = 300.000 tukar per minggu. 30% = 90.000. ÷ 300 per stasiun = 300 stasiun.') },
          { step: 'quant', dim: 'quant', exhibit: 'entry1',
            q: P('At full utilisation, what is the payback period of one station, in years?', 'Pada utilisasi penuh, berapa periode balik modal satu stasiun, dalam tahun?'),
            tests: P('Payback maths.', 'Perhitungan balik modal.'),
            coach: P('Annual margin per station = swaps per week × margin × 52. Then cost ÷ annual margin.', 'Marjin tahunan per stasiun = tukar per minggu × marjin × 52. Lalu biaya ÷ marjin tahunan.'),
            num: { v: 1.92, tol: 0.05, unit: 'years' },
            solution: P('300 swaps × Rp 5,000 = Rp 1.5 m a week × 52 = Rp 78 m a year. Rp 150 m ÷ Rp 78 m ≈ 1.9 years — inside the three-year target, but only at full utilisation.', '300 tukar × Rp 5.000 = Rp 1,5 juta per minggu × 52 = Rp 78 juta per tahun. Rp 150 juta ÷ Rp 78 juta ≈ 1,9 tahun — di dalam target tiga tahun, tetapi hanya pada utilisasi penuh.') },
          { step: 'insight', dim: 'insight', exhibit: 'entry2',
            q: P('This exhibit shows electric share by rider segment today. What does it tell you about how to enter?', 'Eksibit ini menunjukkan porsi motor listrik per segmen pengendara saat ini. Apa artinya bagi cara masuk pasar?'),
            tests: P('Segment insight into an entry strategy.', 'Wawasan segmen menjadi strategi masuk.'),
            coach: P('Which segment adopts first, why (they ride the most), and what that means for location and partners.', 'Segmen mana yang mengadopsi lebih dulu, mengapa (mereka paling banyak berkendara), dan artinya bagi lokasi dan mitra.'),
            look: [lk('Drivers and couriers adopt first', 'Pengemudi dan kurir mengadopsi lebih dulu', 'driver|courier|ride.?hailing|ojek|kurir|pengemudi'), lk('They ride the most / swap most often', 'Mereka paling sering berkendara / menukar', 'ride more|distance|kilomet|usage|frequen|sering|jarak|pemakaian'), lk('Partner with fleets or platforms', 'Bermitra dengan armada atau platform', 'partner|fleet|platform|b2b|mitra|armada'), lk('Place stations where they ride', 'Letakkan stasiun di jalur mereka', 'location|hub|route|near|lokasi|rute|dekat'), lk('Private commuters come later', 'Komuter pribadi menyusul', 'commuter|private|later|komuter|pribadi|nanti')],
            solution: P('Ride-hailing drivers (18%) and couriers (12%) already adopt electric bikes far faster than private commuters (1%), and they ride the most. Enter through fleet and platform partnerships, with stations on their routes and hubs; private commuters follow later.', 'Pengemudi ojek daring (18%) dan kurir (12%) sudah mengadopsi motor listrik jauh lebih cepat daripada komuter pribadi (1%), dan merekalah yang paling banyak berkendara. Masuk lewat kemitraan armada dan platform, dengan stasiun di rute dan pangkalan mereka; komuter pribadi menyusul kemudian.') },
          { step: 'synthesis', dim: 'synthesis',
            q: P('The founders want your recommendation now. Should VoltRide enter, and how?', 'Para pendiri menginginkan rekomendasimu sekarang. Haruskah VoltRide masuk, dan bagaimana caranya?'),
            tests: P('A go / no-go with conditions.', 'Keputusan masuk / tidak dengan syaratnya.'),
            coach: P('Yes or no first, the sizing and payback numbers, how to enter, one risk (utilisation), one next step (a pilot).', 'Ya atau tidak dulu, angka ukuran dan balik modal, cara masuk, satu risiko (utilisasi), satu langkah berikutnya (uji coba).'),
            look: [LK.answerFirst, lk('Sizing numbers', 'Angka estimasi', '100,000|100\\.000|300|stations|stasiun'), lk('Payback', 'Balik modal', 'payback|1\\.9|1,9|two years|dua tahun|balik modal'), lk('Utilisation risk', 'Risiko utilisasi', 'utilis|utiliz|ramp|demand|utilisasi|permintaan'), LK.nextSteps],
            pushback: P('The CFO points out the payback assumes every station is full from day one. Does your recommendation survive at 60% utilisation?', 'CFO menunjukkan bahwa balik modal itu mengasumsikan setiap stasiun penuh sejak hari pertama. Apakah rekomendasimu bertahan pada utilisasi 60%?') }
        ],
        plan: { quick: [0, 1, 2, 6], standard: [0, 1, 2, 3, 5, 6], full: [0, 1, 2, 3, 4, 5, 6] }
      },

      ops: {
        name: P('Operations · hospital waiting times', 'Operasional · waktu tunggu rumah sakit'),
        client: P('Rumah Sakit Cempaka (fictional), a private hospital in Bandung', 'Rumah Sakit Cempaka (fiktif), rumah sakit swasta di Bandung'),
        brief: P('Our client, a private hospital in Bandung, is losing outpatients to a competitor. Patients complain that a visit takes most of the morning. The director asks us to cut total waiting time and win the patients back.', 'Klien kita, sebuah rumah sakit swasta di Bandung, kehilangan pasien rawat jalan ke pesaing. Pasien mengeluh satu kunjungan menghabiskan hampir sepanjang pagi. Direktur meminta kita memangkas total waktu tunggu dan merebut kembali pasiennya.'),
        facts: [
          { n: P('Objective', 'Tujuan'), re: 'objective|goal|target|how much|tujuan|sasaran|target|berapa', key: true, fact: P('The director wants total waiting time at peak under 60 minutes within six months.', 'Direktur ingin total waktu tunggu saat puncak di bawah 60 menit dalam enam bulan.') },
          { n: P('Patient journey', 'Alur pasien'), re: 'journey|step|process|flow|alur|tahap|proses', key: true, fact: P('Every outpatient goes through registration, triage, a doctor, the pharmacy and payment, in that order.', 'Setiap pasien rawat jalan melalui pendaftaran, triase, dokter, farmasi, dan pembayaran, secara berurutan.') },
          { n: P('Peak hours', 'Jam puncak'), re: 'peak|busy|time of day|when|puncak|ramai|jam', fact: P('Most patients arrive between 9 and 11 am — about 60 patients per hour.', 'Sebagian besar pasien datang pukul 09.00–11.00 — sekitar 60 pasien per jam.') },
          { n: P('Budget', 'Anggaran'), re: 'budget|cost|invest|money|anggaran|biaya|investasi|dana', fact: P('The hospital can hire a few staff or invest in simple systems, but not build new space.', 'Rumah sakit bisa merekrut beberapa staf atau berinvestasi pada sistem sederhana, tetapi tidak membangun ruang baru.') }
        ],
        steps: [
          { step: 'clarify', dim: 'framing',
            q: P('What would you like to clarify first?', 'Apa yang ingin kamu klarifikasi lebih dulu?'),
            tests: P('Objective, process and constraints.', 'Tujuan, proses, dan batasan.'),
            coach: P('Ask for the target, the steps a patient goes through, when it is busy, and the constraints.', 'Tanyakan targetnya, tahap yang dilalui pasien, kapan ramai, dan batasannya.') },
          { step: 'structure', dim: 'framing',
            q: P('How would you structure the problem?', 'Bagaimana kamu menstrukturkan masalahnya?'),
            tests: P('A process frame: demand, capacity, bottleneck.', 'Kerangka proses: permintaan, kapasitas, titik sempit.'),
            coach: P('Map the journey step by step; for each step compare demand with capacity; find the bottleneck; then fixes.', 'Petakan alurnya tahap demi tahap; di setiap tahap bandingkan permintaan dengan kapasitas; temukan titik sempitnya; lalu perbaikannya.'),
            look: [lk('Map the journey by step', 'Petakan alur per tahap', 'step|journey|process|stage|tahap|alur|proses'), lk('Demand / arrivals', 'Permintaan / kedatangan', 'demand|arrival|patients per|peak|permintaan|kedatangan|pasien per|puncak'), lk('Capacity per step', 'Kapasitas per tahap', 'capacity|staff|throughput|kapasitas|staf'), lk('Find the bottleneck', 'Temukan titik sempit', 'bottleneck|constraint|slowest|titik sempit|kendala|paling lambat'), lk('Patient experience beyond time', 'Pengalaman pasien di luar waktu', 'experience|satisfaction|communicat|pengalaman|kepuasan|komunikasi')] },
          { step: 'quant', dim: 'quant', exhibit: 'ops1',
            q: P('From the exhibit: what share of total waiting time happens at the pharmacy, in percent?', 'Dari eksibit: berapa porsi total waktu tunggu yang terjadi di farmasi, dalam persen?'),
            tests: P('Totals and shares from an exhibit.', 'Total dan porsi dari eksibit.'),
            coach: P('Add all the waits, then pharmacy ÷ total.', 'Jumlahkan semua waktu tunggu, lalu farmasi ÷ total.'),
            num: { v: 50.5, tol: 0.6, unit: '%' },
            solution: P('Total wait = 6 + 9 + 25 + 48 + 7 = 95 minutes. Pharmacy = 48 ÷ 95 ≈ 50.5% — half of all waiting.', 'Total tunggu = 6 + 9 + 25 + 48 + 7 = 95 menit. Farmasi = 48 ÷ 95 ≈ 50,5% — separuh dari seluruh waktu tunggu.') },
          { step: 'insight', dim: 'insight', exhibit: 'ops1',
            q: P('Compare capacity with demand at each step. Where is the bottleneck, and why?', 'Bandingkan kapasitas dengan permintaan di tiap tahap. Di mana titik sempitnya, dan mengapa?'),
            tests: P('Capacity reasoning.', 'Penalaran kapasitas.'),
            coach: P('Capacity per hour = staff × 60 ÷ service time. Compare each with 60 arrivals per hour.', 'Kapasitas per jam = staf × 60 ÷ waktu layanan. Bandingkan masing-masing dengan 60 kedatangan per jam.'),
            look: [lk('Pharmacy is the bottleneck', 'Farmasi adalah titik sempitnya', 'pharmac|farmasi'), lk('Pharmacy capacity is 40 per hour', 'Kapasitas farmasi 40 per jam', '40'), lk('Demand is 60 per hour', 'Permintaan 60 per jam', '60'), lk('Other steps meet demand', 'Tahap lain memenuhi permintaan', 'other steps|enough|meet|match|tahap lain|cukup|memenuhi'), lk('Doctor wait is about scheduling', 'Tunggu dokter soal penjadwalan', 'schedul|appointment|variab|jadwal|janji temu|variasi')],
            solution: P('Capacity per hour: registration 80, triage 60, doctors 60, pharmacy 40, payment 60. Only the pharmacy (2 × 60 ÷ 3 = 40) is below 60 arrivals, so the queue builds there all morning. The doctor wait comes from arrival peaks, not capacity.', 'Kapasitas per jam: pendaftaran 80, triase 60, dokter 60, farmasi 40, pembayaran 60. Hanya farmasi (2 × 60 ÷ 3 = 40) yang di bawah 60 kedatangan, sehingga antrean menumpuk di sana sepanjang pagi. Tunggu dokter berasal dari lonjakan kedatangan, bukan kapasitas.') },
          { step: 'quant', dim: 'quant', exhibit: 'ops1',
            q: P('How many pharmacists are needed at peak so the pharmacy keeps up with 60 patients per hour?', 'Berapa apoteker yang dibutuhkan saat puncak agar farmasi mampu melayani 60 pasien per jam?'),
            tests: P('Capacity sizing.', 'Penentuan kapasitas.'),
            coach: P('One pharmacist serves 60 ÷ 3 patients an hour.', 'Satu apoteker melayani 60 ÷ 3 pasien per jam.'),
            num: { v: 3, tol: 0, unit: 'pharmacists' },
            solution: P('One pharmacist serves 60 ÷ 3 = 20 patients an hour; 60 ÷ 20 = 3 pharmacists at peak (one more than today).', 'Satu apoteker melayani 60 ÷ 3 = 20 pasien per jam; 60 ÷ 20 = 3 apoteker saat puncak (satu lebih banyak dari sekarang).') },
          { step: 'brainstorm', dim: 'creativity',
            q: P('Beyond adding a pharmacist, how else could the hospital cut waiting time?', 'Selain menambah apoteker, bagaimana lagi rumah sakit bisa memangkas waktu tunggu?'),
            tests: P('Organised breadth.', 'Keluasan ide yang tertata.'),
            coach: P('Group ideas: shift demand, speed up steps, run steps in parallel, change the experience of waiting.', 'Kelompokkan ide: geser permintaan, percepat tahap, jalankan tahap paralel, ubah pengalaman menunggu.'),
            look: [lk('Send prescriptions ahead (e-prescription)', 'Resep dikirim lebih dulu (e-resep)', 'e.?prescri|electronic|send ahead|in advance|e.?resep|elektronik|lebih dulu'), lk('Pre-pack common medicines', 'Kemas obat umum lebih dulu', 'pre.?pack|prepar|common medic|kemas|siapkan|obat umum'), lk('Deliver medicines home', 'Antar obat ke rumah', 'deliver|home|courier|antar|rumah|kurir'), lk('Appointments to spread arrivals', 'Janji temu untuk meratakan kedatangan', 'appointment|booking|slot|spread|janji temu|reservasi|ratakan'), lk('Digital queue / notifications', 'Antrean digital / notifikasi', 'queue|number|notif|app|sms|whatsapp|antrean|nomor'), lk('Pay earlier or at the pharmacy', 'Bayar lebih awal atau di farmasi', 'pay|cashier|payment|combine|bayar|kasir|pembayaran|gabung')] },
          { step: 'synthesis', dim: 'synthesis',
            q: P('Give the director your recommendation in one minute.', 'Sampaikan rekomendasimu kepada direktur dalam satu menit.'),
            tests: P('Answer first, with numbers and a plan.', 'Jawaban dulu, dengan angka dan rencana.'),
            coach: P('The bottleneck and its share of the wait, the two or three fixes, the expected effect, one risk, a pilot.', 'Titik sempit dan porsinya dalam waktu tunggu, dua atau tiga perbaikan, efek yang diharapkan, satu risiko, uji coba.'),
            look: [LK.answerFirst, lk('The pharmacy bottleneck in numbers', 'Titik sempit farmasi dalam angka', 'pharmac|farmasi|48|50|40'), lk('Two or three fixes', 'Dua atau tiga perbaikan', 'pharmacist|e.?prescri|appointment|queue|apoteker|e.?resep|janji temu|antrean'), LK.risks, LK.nextSteps],
            pushback: P('The director says hiring another pharmacist costs too much. What do you do first instead?', 'Direktur berkata menambah apoteker terlalu mahal. Apa yang kamu lakukan lebih dulu sebagai gantinya?') }
        ],
        plan: { quick: [0, 1, 2, 6], standard: [0, 1, 2, 3, 5, 6], full: [0, 1, 2, 3, 4, 5, 6] }
      }
    }
  };
})();
