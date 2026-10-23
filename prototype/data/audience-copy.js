/**
 * AUDIENCE LAYER — PRESENTATION COPY PER CAREER STAGE
 * ---------------------------------------------------
 * The five pillars share one body of learning content (the registries under
 * data/lms are the single source of truth). What changes by audience is the
 * way a pillar introduces itself: the positioning line, the tagline, a short
 * briefing with three benefits and a call to action. js/audience-layer.js
 * reads this file and swaps only those presentation elements; modules,
 * lessons, tools and navigation are untouched.
 *
 * Audiences: student · fresh-graduate · early-professional · mature-professional
 * (the same keys the commercial model uses for editions). Copy is bilingual.
 *
 * Honesty rule: the Student & Fresh Graduate edition is the one open today;
 * the Early and Mature Professional editions are in development. The layer
 * says so on those pathways instead of implying a separate product exists.
 */
(function () {
  'use strict';

  var AUD = {
    'student':             { en: 'Student',             id: 'Mahasiswa',                  plural: { en: 'students', id: 'mahasiswa' }, open: true },
    'fresh-graduate':      { en: 'Fresh Graduate',      id: 'Fresh Graduate',             plural: { en: 'fresh graduates', id: 'fresh graduate' }, open: true },
    'early-professional':  { en: 'Early Professional',  id: 'Profesional Muda',           plural: { en: 'early professionals', id: 'profesional muda' }, open: false },
    'mature-professional': { en: 'Mature Professional', id: 'Profesional Berpengalaman',  plural: { en: 'mature professionals', id: 'profesional berpengalaman' }, open: false }
  };

  function T(en, id) { return { en: en, id: id }; }

  var P = {
    /* ── 01 · THE MAP ─────────────────────────────────────────────── */
    'the-map': {
      'student': {
        pos: T('Career Direction', 'Arah Karier'),
        tagline: T('Know yourself before you climb.', 'Kenali dirimu sebelum mendaki.'),
        head: T('Choose a direction before the degree chooses one for you', 'Pilih arah sebelum gelar yang memilihkannya untukmu'),
        lead: T('Most students pick a path by elimination in the final year. The Map gives you a structured self-discovery journey now: strengths with evidence, values in order, a purpose you can say out loud, and a first target role to test against the companies in The Range.', 'Kebanyakan mahasiswa memilih jalur dengan cara eliminasi di tahun terakhir. The Map memberimu perjalanan penemuan diri yang terstruktur sejak sekarang: kekuatan dengan bukti, nilai yang terurut, tujuan yang bisa kamu ucapkan, dan satu peran target pertama untuk diuji terhadap perusahaan di The Range.'),
        b: [T('Strengths and values diagnostic you can cite in interviews', 'Diagnostik kekuatan dan nilai yang bisa kamu kutip saat wawancara'), T('A first target role and three test companies in The Range', 'Satu peran target pertama dan tiga perusahaan uji di The Range'), T('Habits and study systems that carry into the first job', 'Kebiasaan dan sistem belajar yang terbawa ke pekerjaan pertama')],
        cta: T('Start with Module 1: self-awareness →', 'Mulai dari Modul 1: kesadaran diri →')
      },
      'fresh-graduate': {
        pos: T('Direction Edition', 'Edisi Arah'),
        tagline: T('Know where you’re going before you run.', 'Ketahui tujuanmu sebelum berlari.'),
        head: T('Turn who you are into a precise professional target', 'Ubah siapa dirimu menjadi target profesional yang presisi'),
        lead: T('You are about to send applications. The Map makes sure they point somewhere: a direction diagnostic, a target role definition, a fit score against real companies, and a shortlist of three to apply to first.', 'Kamu akan segera mengirim lamaran. The Map memastikan lamaran itu punya arah: diagnostik arah, definisi peran target, skor kecocokan terhadap perusahaan sungguhan, dan daftar pendek tiga perusahaan untuk dilamar lebih dulu.'),
        b: [T('Direction diagnostic and target role definition', 'Diagnostik arah dan definisi peran target'), T('Fit score against the companies in The Range', 'Skor kecocokan terhadap perusahaan di The Range'), T('A shortlist of three first applications, with reasons', 'Daftar pendek tiga lamaran pertama, beserta alasannya')],
        cta: T('Start the direction diagnostic →', 'Mulai diagnostik arah →')
      },
      'early-professional': {
        pos: T('Career Audit & Pivot', 'Audit & Pivot Karier'),
        tagline: T('Know where you actually are, and whether to stay.', 'Ketahui posisimu yang sebenarnya, dan apakah perlu bertahan.'),
        head: T('An honest position before the next move', 'Posisi yang jujur sebelum langkah berikutnya'),
        lead: T('Positive reviews and incremental raises can hide a stalled trajectory. The Map for early professionals audits where you stand against your target role, maps the gap, and decides stay-or-move on evidence rather than frustration.', 'Penilaian positif dan kenaikan gaji bertahap bisa menyembunyikan lintasan yang mandek. The Map untuk profesional muda mengaudit posisimu terhadap peran target, memetakan celahnya, dan memutuskan bertahan-atau-pindah berdasarkan bukti, bukan rasa frustrasi.'),
        b: [T('Readiness score across the five Compass Points', 'Skor kesiapan di lima Titik Kompas'), T('Gap analysis against the role you want next', 'Analisis celah terhadap peran yang kamu tuju berikutnya'), T('The Pivot Framework: stay or move, decided on evidence', 'Kerangka Pivot: bertahan atau pindah, diputuskan berdasarkan bukti')],
        cta: T('Begin the career audit →', 'Mulai audit karier →')
      },
      'mature-professional': {
        pos: T('Leadership Assessment & Gap Analysis', 'Asesmen Kepemimpinan & Analisis Celah'),
        tagline: T('Your leadership, measured against your next level.', 'Kepemimpinanmu, diukur terhadap level berikutnya.'),
        head: T('Measure the gap between where you operate and where you are heading', 'Ukur celah antara level kerjamu hari ini dan tujuanmu'),
        lead: T('A senior-calibrated reading of your leadership style, blind spots and career capital, and the specific gap between today’s level and the one you are targeting, whether that is a bigger remit, a board seat or a second chapter.', 'Pembacaan berkalibrasi senior atas gaya kepemimpinan, titik buta, dan modal kariermu, serta celah spesifik antara level hari ini dan level yang kamu bidik, entah itu cakupan yang lebih besar, kursi dewan, atau babak kedua.'),
        b: [T('Leadership style and blind-spot profile', 'Profil gaya kepemimpinan dan titik buta'), T('Career capital audit: the market value of your experience', 'Audit modal karier: nilai pasar pengalamanmu'), T('Sequenced development priorities for the next level', 'Prioritas pengembangan berurutan menuju level berikutnya')],
        cta: T('Start the leadership assessment →', 'Mulai asesmen kepemimpinan →')
      }
    },

    /* ── 02 · THE PACK ────────────────────────────────────────────── */
    'the-pack': {
      'student': {
        pos: T('The Application Toolkit', 'Perangkat Lamaran'),
        tagline: T('The complete toolkit for getting hired.', 'Perangkat lengkap untuk diterima kerja.'),
        head: T('Build the application before you need it', 'Bangun lamaranmu sebelum kamu membutuhkannya'),
        lead: T('Internships, exchange programmes and first jobs all pass the same paper gate. The Pack teaches how recruiters actually read, how to turn coursework, projects and organisation roles into evidence, and how to pass ATS screens and aptitude tests while you still have time to practise.', 'Magang, program pertukaran, dan pekerjaan pertama semuanya melewati gerbang kertas yang sama. The Pack mengajarkan cara perekrut sungguh membaca, cara mengubah tugas kuliah, proyek, dan peran organisasi menjadi bukti, serta cara lolos saringan ATS dan tes bakat selagi kamu masih punya waktu berlatih.'),
        b: [T('A CV built from academic and organisation evidence', 'CV yang dibangun dari bukti akademik dan organisasi'), T('ATS and administrative screening, decoded', 'Saringan ATS dan administrasi, dibedah'), T('Aptitude and psychometric practice in the Test Lab, from year one', 'Latihan tes bakat dan psikotes di Test Lab, sejak tahun pertama')],
        cta: T('Start with how hiring actually works →', 'Mulai dari cara kerja rekrutmen yang sebenarnya →')
      },
      'fresh-graduate': {
        pos: T('The Application Toolkit', 'Perangkat Lamaran'),
        tagline: T('The complete toolkit for getting hired.', 'Perangkat lengkap untuk diterima kerja.'),
        head: T('Reach the human conversation', 'Sampai ke percakapan antarmanusia'),
        lead: T('Everything an employer judges before you are in the room: targets without nepotism, a CV rebuilt from evidence, ATS and administrative screening, LinkedIn and cover letters, psychometric tests, AI used honestly and the professional follow-through. Nine modules, one goal: get past the paper gate.', 'Semua yang dinilai pemberi kerja sebelum kamu ada di ruangan: target tanpa nepotisme, CV yang dibangun ulang dari bukti, saringan ATS dan administrasi, LinkedIn dan surat lamaran, psikotes, AI yang dipakai dengan jujur, dan tindak lanjut profesional. Sembilan modul, satu tujuan: lolos gerbang kertas.'),
        b: [T('CV rebuilt from evidence, not a template', 'CV dibangun ulang dari bukti, bukan templat'), T('Recruitment-test practice (TPA, BUMN, SKD CPNS) in the Test Lab', 'Latihan tes rekrutmen (TPA, BUMN, SKD CPNS) di Test Lab'), T('Follow-through that keeps you in the process', 'Tindak lanjut yang menjagamu tetap dalam proses')],
        cta: T('Start Module 1 →', 'Mulai Modul 1 →')
      },
      'early-professional': {
        pos: T('Senior Positioning', 'Pemosisian Senior'),
        tagline: T('The written case that gets an experienced hire into the room.', 'Argumen tertulis yang membawa tenaga berpengalaman ke ruangan.'),
        head: T('Be read for the level you want next', 'Terbaca untuk level yang kamu tuju berikutnya'),
        lead: T('Your first CV was written to get any job. The next one has to prove outcomes, not titles: an executive summary that leads with results, LinkedIn as an application artefact, and a cross-sector strategy when you move industries.', 'CV pertamamu ditulis untuk mendapatkan pekerjaan apa pun. CV berikutnya harus membuktikan hasil, bukan jabatan: ringkasan eksekutif yang dibuka dengan capaian, LinkedIn sebagai artefak lamaran, dan strategi lintas sektor saat kamu berpindah industri.'),
        b: [T('CV and profile rewritten for experienced hires', 'CV dan profil ditulis ulang untuk tenaga berpengalaman'), T('Executive summary writing: outcomes, not titles', 'Penulisan ringkasan eksekutif: hasil, bukan jabatan'), T('Cross-sector application strategy', 'Strategi lamaran lintas sektor')],
        cta: T('Rebuild the CV from evidence →', 'Bangun ulang CV dari bukti →')
      },
      'mature-professional': {
        pos: T('Executive Presence Program', 'Program Kehadiran Eksekutif'),
        tagline: T('The difference between director and VP.', 'Perbedaan antara direktur dan VP.'),
        head: T('Position a career, not a job history', 'Posisikan sebuah karier, bukan riwayat pekerjaan'),
        lead: T('At senior levels the application is a narrative: what you have built, what you are known for, and why the next role is the logical chapter. The Pack’s modules on evidence, positioning and professional follow-through apply directly, read here through an executive lens.', 'Di level senior, lamaran adalah narasi: apa yang telah kamu bangun, apa yang membuatmu dikenal, dan mengapa peran berikutnya adalah babak yang logis. Modul The Pack tentang bukti, pemosisian, dan tindak lanjut profesional berlaku langsung, dibaca di sini lewat lensa eksekutif.'),
        b: [T('Executive narrative and personal positioning', 'Narasi eksekutif dan pemosisian pribadi'), T('Board-level communication frameworks', 'Kerangka komunikasi setingkat dewan'), T('Stakeholder and upward management in the written case', 'Pengelolaan pemangku kepentingan dan atasan dalam argumen tertulis')],
        cta: T('Start with the employer’s side of the table →', 'Mulai dari sisi pemberi kerja di meja →')
      }
    },

    /* ── 03 · THE ROPE ────────────────────────────────────────────── */
    'the-rope': {
      'student': {
        pos: T('Interview Foundations', 'Fondasi Wawancara'),
        tagline: T('In the crucial moment, the rope holds.', 'Di saat yang menentukan, tali itulah yang menahanmu.'),
        head: T('Learn to be interviewed before the first one counts', 'Belajar diwawancarai sebelum wawancara pertama yang menentukan'),
        lead: T('Scholarship panels, exchange selections and internship interviews are all rehearsable. The Rope gives you a story bank from student life, the structures interviewers listen for, and an AI Interview Specialist to practise with before a real person is deciding.', 'Panel beasiswa, seleksi pertukaran, dan wawancara magang semuanya bisa dilatih. The Rope memberimu bank cerita dari kehidupan kampus, struktur yang didengarkan pewawancara, dan Spesialis Wawancara AI untuk berlatih sebelum orang sungguhan yang memutuskan.'),
        b: [T('A story bank built from projects, organisations and coursework', 'Bank cerita dari proyek, organisasi, dan tugas kuliah'), T('Practice interviews with the AI Interview Specialist', 'Latihan wawancara bersama Spesialis Wawancara AI'), T('Group discussions and case interviews, explained from the assessor’s side', 'Diskusi kelompok dan wawancara kasus, dijelaskan dari sisi penilai')],
        cta: T('Start with interview foundations →', 'Mulai dari fondasi wawancara →')
      },
      'fresh-graduate': {
        pos: T('Interview Mastery', 'Penguasaan Wawancara'),
        tagline: T('Walk in prepared. Walk out with an offer.', 'Masuk dengan persiapan. Keluar dengan tawaran.'),
        head: T('Rehearsed answers free you to think', 'Jawaban yang terlatih membebaskanmu berpikir'),
        lead: T('The interview is where the application becomes a person. The Rope builds your answers from evidence, trains them under pressure with the AI Interview Specialist, and prepares you for group discussions, case interviews and the salary conversation.', 'Wawancara adalah saat lamaran menjadi seorang manusia. The Rope membangun jawabanmu dari bukti, melatihnya di bawah tekanan bersama Spesialis Wawancara AI, dan menyiapkanmu untuk diskusi kelompok, wawancara kasus, dan percakapan gaji.'),
        b: [T('Stories, bank-ready, in the structures interviewers use', 'Cerita siap pakai, dalam struktur yang dipakai pewawancara'), T('Pressure practice with recorded feedback', 'Latihan di bawah tekanan dengan umpan balik terekam'), T('FGD, LGD and case interviews from the assessor’s side', 'FGD, LGD, dan wawancara kasus dari sisi penilai')],
        cta: T('Start Module 1 →', 'Mulai Modul 1 →')
      },
      'early-professional': {
        pos: T('Interviews at the Next Level', 'Wawancara di Level Berikutnya'),
        tagline: T('Hold the room when a person, not a filter, is deciding.', 'Kuasai ruangan saat manusia, bukan filter, yang memutuskan.'),
        head: T('From answering questions to leading the conversation', 'Dari menjawab pertanyaan ke memimpin percakapan'),
        lead: T('Experienced-hire interviews test depth, judgement and presence: panel formats, stakeholder conversations, and presentations under questioning. The Rope’s modules apply here with the bar raised to the level you are interviewing for.', 'Wawancara tenaga berpengalaman menguji kedalaman, pertimbangan, dan kehadiran: format panel, percakapan dengan pemangku kepentingan, dan presentasi di bawah pertanyaan. Modul The Rope berlaku di sini dengan standar yang dinaikkan ke level yang kamu lamar.'),
        b: [T('Behavioural depth for experienced-hire interviews', 'Kedalaman perilaku untuk wawancara tenaga berpengalaman'), T('Panel interviews and stakeholder conversations', 'Wawancara panel dan percakapan dengan pemangku kepentingan'), T('Presentation and influence under questioning', 'Presentasi dan pengaruh di bawah pertanyaan')],
        cta: T('Start the interview programme →', 'Mulai program wawancara →')
      },
      'mature-professional': {
        pos: T('Strategic Repositioning', 'Reposisi Strategis'),
        tagline: T('Redeploy your platform, don’t rebuild it.', 'Kerahkan ulang platformmu, jangan bangun dari nol.'),
        head: T('Interview for the chapter, not the job', 'Wawancara untuk babak berikutnya, bukan sekadar pekerjaan'),
        lead: T('Senior conversations are about judgement, track record and fit with a board or leadership team. The Rope helps you construct the second-chapter narrative, rehearse it under questioning, and handle advisory, board and transition interviews with the same discipline.', 'Percakapan senior berkisar pada pertimbangan, rekam jejak, dan kecocokan dengan dewan atau tim kepemimpinan. The Rope membantumu menyusun narasi babak kedua, melatihnya di bawah pertanyaan, dan menghadapi wawancara penasihat, dewan, dan transisi dengan disiplin yang sama.'),
        b: [T('Second-chapter narrative construction', 'Penyusunan narasi babak kedua'), T('Advisory and board-role pathway conversations', 'Percakapan jalur peran penasihat dan dewan'), T('Industry and international transition interviews', 'Wawancara transisi industri dan internasional')],
        cta: T('Start the repositioning track →', 'Mulai jalur reposisi →')
      }
    },

    /* ── 04 · THE ROUTE ───────────────────────────────────────────── */
    'the-route': {
      'student': {
        pos: T('Career Architecture & What’s Next', 'Arsitektur Karier & Langkah Berikutnya'),
        tagline: T('The summit is a waypoint, not a destination.', 'Puncak hanyalah persinggahan, bukan tujuan akhir.'),
        head: T('Design the years after graduation now', 'Rancang tahun-tahun setelah lulus sejak sekarang'),
        lead: T('The Route is usually read after the first offer. Read early, it shows how first roles compound: which skills to build during the degree, how internships become a trajectory, and what the first ninety days of a job actually reward.', 'The Route biasanya dibaca setelah tawaran pertama. Dibaca lebih awal, ia menunjukkan cara peran pertama berlipat: keterampilan mana yang dibangun selama kuliah, bagaimana magang menjadi lintasan, dan apa yang sungguh dihargai di sembilan puluh hari pertama sebuah pekerjaan.'),
        b: [T('A first-role trajectory, planned during the degree', 'Lintasan peran pertama, direncanakan selama kuliah'), T('What the first ninety days reward, before you start them', 'Apa yang dihargai di sembilan puluh hari pertama, sebelum kamu memulainya'), T('Money basics for the first salary', 'Dasar keuangan untuk gaji pertama')],
        cta: T('Start Module 1 →', 'Mulai Modul 1 →')
      },
      'fresh-graduate': {
        pos: T('Career Architecture & What’s Next', 'Arsitektur Karier & Langkah Berikutnya'),
        tagline: T('Design the years after the offer. Don’t wait for them.', 'Rancang tahun-tahun setelah tawaran. Jangan menunggunya.'),
        head: T('The first job is a route, not a destination', 'Pekerjaan pertama adalah rute, bukan tujuan akhir'),
        lead: T('An offer is where The Route begins: the ninety-day plan, early promotions, the visibility system that makes good work seen, and the financial intelligence to turn a first salary into options.', 'Tawaran adalah titik awal The Route: rencana sembilan puluh hari, promosi awal, sistem visibilitas yang membuat kerja bagus terlihat, dan kecerdasan finansial untuk mengubah gaji pertama menjadi pilihan.'),
        b: [T('The ninety-day plan for the first role', 'Rencana sembilan puluh hari untuk peran pertama'), T('A visibility system so decision-makers see the work', 'Sistem visibilitas agar pengambil keputusan melihat kerjamu'), T('Salary, savings and the cost of each move', 'Gaji, tabungan, dan biaya setiap perpindahan')],
        cta: T('Start Module 1 →', 'Mulai Modul 1 →')
      },
      'early-professional': {
        pos: T('Career Acceleration & the Second Move', 'Akselerasi Karier & Langkah Kedua'),
        tagline: T('The path beyond the immediate goal, designed, not waited for.', 'Jalur di balik tujuan terdekat, dirancang, bukan ditunggu.'),
        head: T('Move on your timeline', 'Bergerak pada garis waktumu'),
        lead: T('Promotion, pivot or a move abroad, executed from evidence. The Route for early professionals covers trajectory design, the promotion game, mentors and sponsors, and the second move, with the financial intelligence each one requires.', 'Promosi, pivot, atau pindah ke luar negeri, dieksekusi dari bukti. The Route untuk profesional muda membahas rancangan lintasan, permainan promosi, mentor dan sponsor, serta langkah kedua, dengan kecerdasan finansial yang dibutuhkan masing-masing.'),
        b: [T('Trajectory design and promotion strategy', 'Rancangan lintasan dan strategi promosi'), T('Mentors, sponsors and the second move', 'Mentor, sponsor, dan langkah kedua'), T('Early-career financial intelligence', 'Kecerdasan finansial awal karier')],
        cta: T('Plan the second move →', 'Rencanakan langkah kedua →')
      },
      'mature-professional': {
        pos: T('Career Architecture & the Next Chapter', 'Arsitektur Karier & Babak Berikutnya'),
        tagline: T('The right move at the right moment.', 'Langkah yang tepat di saat yang tepat.'),
        head: T('Architecture for the mid-career decade', 'Arsitektur untuk dekade pertengahan karier'),
        lead: T('Assets, trajectory, gates and capital: the mid-career decade rewards design over drift. The Route covers the promotion game at senior levels, your inner circle of mentors and sponsors, and the second move, lateral, upward or out.', 'Aset, lintasan, gerbang, dan modal: dekade pertengahan karier menghargai rancangan, bukan hanyut. The Route membahas permainan promosi di level senior, lingkaran dalam mentor dan sponsormu, serta langkah kedua, lateral, ke atas, atau keluar.'),
        b: [T('Career architecture: assets, trajectory, gates, capital', 'Arsitektur karier: aset, lintasan, gerbang, modal'), T('Professional visibility at senior levels', 'Visibilitas profesional di level senior'), T('The second move: lateral, upward or out', 'Langkah kedua: lateral, ke atas, atau keluar')],
        cta: T('Start the next chapter →', 'Mulai babak berikutnya →')
      }
    },

    /* ── 05 · THE COMPASS ─────────────────────────────────────────── */
    'the-compass': {
      'student': {
        pos: T('Student Edition', 'Edisi Mahasiswa'),
        tagline: T('Track every step of your university journey.', 'Lacak setiap langkah perjalanan kuliahmu.'),
        head: T('A navigation system for the degree years', 'Sistem navigasi untuk tahun-tahun kuliah'),
        lead: T('The Compass reads your progress across all four pillars and turns it into a bearing: a readiness score, this week’s priority actions, and a four-year journey map from first semester to first offer.', 'The Compass membaca kemajuanmu di keempat pilar dan mengubahnya menjadi arah: skor kesiapan, tindakan prioritas minggu ini, dan peta perjalanan empat tahun dari semester pertama sampai tawaran pertama.'),
        b: [T('Readiness score across five Compass Points', 'Skor kesiapan di lima Titik Kompas'), T('Weekly priority actions sized for a student timetable', 'Tindakan prioritas mingguan yang pas dengan jadwal mahasiswa'), T('The four-year journey map', 'Peta perjalanan empat tahun')],
        cta: T('Open the Navigator →', 'Buka Navigator →')
      },
      'fresh-graduate': {
        pos: T('Graduate Edition', 'Edisi Lulusan'),
        tagline: T('Track every step from graduation to offer.', 'Lacak setiap langkah dari wisuda sampai tawaran.'),
        head: T('Navigate the ninety days to an offer', 'Navigasikan sembilan puluh hari menuju tawaran'),
        lead: T('Applications, interviews, follow-ups and learning, all in one bearing: the Compass tracks the pipeline, scores readiness, and tells you the one move that matters today.', 'Lamaran, wawancara, tindak lanjut, dan pembelajaran, semua dalam satu arah: Compass melacak alur lamaran, menilai kesiapan, dan memberitahumu satu langkah yang paling penting hari ini.'),
        b: [T('Course Pipeline: every application and its stage', 'Alur Lamaran: setiap lamaran dan tahapannya'), T('Readiness score and today’s move', 'Skor kesiapan dan langkah hari ini'), T('A development plan tied to the gaps the pillars find', 'Rencana pengembangan yang terikat pada celah yang ditemukan pilar')],
        cta: T('Open the Navigator →', 'Buka Navigator →')
      },
      'early-professional': {
        pos: T('Professional Edition', 'Edisi Profesional'),
        tagline: T('Track every milestone. Measure every move.', 'Lacak setiap tonggak. Ukur setiap langkah.'),
        head: T('Your personal career architecture dashboard', 'Dasbor arsitektur karier pribadimu'),
        lead: T('Readiness score, learning milestones, network growth, market positioning and a ninety-day action plan, tracked in one place while you decide whether to stay, move or pivot.', 'Skor kesiapan, tonggak pembelajaran, pertumbuhan jejaring, pemosisian pasar, dan rencana aksi sembilan puluh hari, dilacak di satu tempat selagi kamu memutuskan bertahan, pindah, atau pivot.'),
        b: [T('Readiness and market positioning in one bearing', 'Kesiapan dan pemosisian pasar dalam satu arah'), T('Network growth and visibility tracking', 'Pelacakan pertumbuhan jejaring dan visibilitas'), T('A ninety-day action plan that re-plots as you move', 'Rencana aksi sembilan puluh hari yang diplot ulang saat kamu bergerak')],
        cta: T('Open the Navigator →', 'Buka Navigator →')
      },
      'mature-professional': {
        pos: T('Senior Edition', 'Edisi Senior'),
        tagline: T('Your second chapter, tracked over five years.', 'Babak keduamu, dilacak selama lima tahun.'),
        head: T('A five-year bearing for the second chapter', 'Arah lima tahun untuk babak kedua'),
        lead: T('Calibrated for second-chapter planning: leadership development, repositioning milestones, network activation and the gates between you and the next level, measured over a five-year horizon.', 'Dikalibrasi untuk perencanaan babak kedua: pengembangan kepemimpinan, tonggak reposisi, aktivasi jejaring, dan gerbang antara dirimu dan level berikutnya, diukur dalam horizon lima tahun.'),
        b: [T('Leadership development milestones', 'Tonggak pengembangan kepemimpinan'), T('Repositioning and network activation tracking', 'Pelacakan reposisi dan aktivasi jejaring'), T('A five-year horizon with yearly gates', 'Horizon lima tahun dengan gerbang tahunan')],
        cta: T('Open the Navigator →', 'Buka Navigator →')
      }
    }
  };

  /* shared strings */
  var S = {
    forLabel: T('For {aud}', 'Untuk {aud}'),
    pathway: T('{aud} pathway', 'Jalur {aud}'),
    viewing: T('Reading this page as', 'Membaca halaman ini sebagai'),
    choose: T('Read this page for your stage', 'Baca halaman ini untuk tahapmu'),
    change: T('Change', 'Ubah'),
    openToday: T('Open today as the Student & Fresh Graduate edition; the {aud} edition is in development.', 'Dibuka hari ini sebagai edisi Mahasiswa & Fresh Graduate; edisi {aud} sedang dikembangkan.'),
    sameContent: T('Same modules, lessons and tools for every stage; only the briefing changes.', 'Modul, pelajaran, dan alat yang sama untuk setiap tahap; hanya pengantarnya yang berbeda.'),
    pricing: T('see pricing', 'lihat harga')
  };

  window.MT_AUDIENCE_COPY = { audiences: AUD, products: P, strings: S };
})();
