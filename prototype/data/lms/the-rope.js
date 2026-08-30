/**
 * The Rope (Project Nexus) — LMS CONTENT REGISTRY
 * ----------------------------------------------------------------
 * This file is the CONTENT LAYER. The player (js/lms-player.js) renders
 * whatever is declared here — edit this file only, no UI changes needed.
 *  - kind: reading | interactive | slides | visual
 *  - interactive lessons carry steps[] with per-step debrief text
 *  - lesson 7.2 declares tool:{id:'simulator'} — the player renders a
 *    launch panel and products/the-rope/js/rope-sim.js answers the event
 *  - all lessons carry real content; placeholder:false throughout
 */
window.MT_LMS = window.MT_LMS || {};
window.MT_LMS['the-rope'] = {
 "product": {
  "en": "The Rope",
  "id": "The Rope"
 },
 "codename": "Project Nexus",
 "media": {
  "video": "../../assets/04-basecamp.mp4",
  "poster": "../../assets/bg/hero.jpg",
  "art": "../../assets/product-art/the-rope.svg",
  "visual": "../../assets/system-the-rope.png",
  "captions": {
   "en": "../../assets/lms/captions-en.vtt",
   "id": "../../assets/lms/captions-id.vtt"
  }
 },
 "modules": [
  {
   "num": 1,
   "title": {
    "en": "Inside the Room",
    "id": "Di Dalam Ruangan"
   },
   "overview": {
    "en": "Before you rehearse a single answer, understand the person across the table. This module decodes how interviewers actually judge, what each of the four formats is designed to surface, how to read the room while you are still in it, and the mindset shift that changes everything: an interview is not an interrogation — it is an evaluation of fit, capability, judgment, communication and potential.",
    "id": "Sebelum melatih satu jawaban pun, pahami orang di seberang meja. Modul ini membedah cara pewawancara benar-benar menilai, apa yang dirancang untuk dimunculkan tiap format, cara membaca ruangan selagi kamu masih di dalamnya, dan pergeseran pola pikir yang mengubah segalanya: wawancara bukan interogasi — melainkan evaluasi kecocokan, kapabilitas, pertimbangan, komunikasi, dan potensi."
   },
   "outcome": {
    "en": "By the end of this module you can name what any given interviewer is actually evaluating, adjust your behaviour to the format you are in, and walk into the room in conversation mode instead of defence mode.",
    "id": "Di akhir modul ini kamu bisa menyebutkan apa yang sebenarnya dievaluasi pewawancara mana pun, menyesuaikan perilakumu dengan formatnya, dan memasuki ruangan dalam mode percakapan, bukan mode bertahan."
   },
   "lessons": [
    {
     "n": "1.1",
     "title": {
      "en": "How Interviewers Make Decisions",
      "id": "Cara Pewawancara Membuat Keputusan"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Interviewers are not neutral measuring instruments. They form early impressions, then spend the rest of the hour confirming or correcting them; they take notes that become the only record of you in the hiring meeting; and they get tired. Knowing this does not make interviews unfair — it makes them navigable.",
      "id": "Pewawancara bukan alat ukur yang netral. Mereka membentuk kesan awal, lalu menghabiskan sisa jam untuk mengonfirmasi atau mengoreksinya; mereka menulis catatan yang menjadi satu-satunya rekam dirimu di rapat rekrutmen; dan mereka bisa lelah. Mengetahui ini tidak membuat wawancara curang — melainkan bisa dinavigasi."
     },
     "objectives": [
      {
       "en": "Explain how early impressions and confirmation shape an interviewer's hour.",
       "id": "Menjelaskan bagaimana kesan awal dan konfirmasi membentuk satu jam milik pewawancara."
      },
      {
       "en": "Describe what happens to your answers after the interview ends.",
       "id": "Menjelaskan apa yang terjadi pada jawabanmu setelah wawancara usai."
      },
      {
       "en": "Adjust the shape of your answers so the interviewer's notes work for you.",
       "id": "Menyesuaikan bentuk jawabanmu agar catatan pewawancara bekerja untukmu."
      }
     ],
     "takeaways": [
      {
       "en": "The first minutes set a hypothesis; every answer after either confirms or corrects it — so put evidence early.",
       "id": "Menit-menit pertama membentuk hipotesis; setiap jawaban setelahnya mengonfirmasi atau mengoreksinya — maka taruh bukti di awal."
      },
      {
       "en": "You are hired in a meeting you never attend, based on notes you helped write.",
       "id": "Kamu direkrut dalam rapat yang tidak pernah kamu hadiri, berdasarkan catatan yang ikut kamu tulis."
      },
      {
       "en": "Structure is a gift to a tired interviewer — and tired interviewers reward gifts.",
       "id": "Struktur adalah hadiah bagi pewawancara yang lelah — dan pewawancara lelah menghargai hadiah."
      }
     ],
     "check": {
      "q": {
       "en": "Why does putting evidence early in an answer matter?",
       "id": "Mengapa menaruh bukti di awal jawaban itu penting?"
      },
      "options": [
       {
        "en": "Because the interviewer's early hypothesis colours everything that follows",
        "id": "Karena hipotesis awal pewawancara mewarnai semua yang menyusul"
       },
       {
        "en": "Because interviews are always decided in the first sixty seconds",
        "id": "Karena wawancara selalu diputuskan dalam enam puluh detik pertama"
       },
       {
        "en": "Because long answers are automatically disqualified",
        "id": "Karena jawaban panjang otomatis gugur"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — early impressions are not final verdicts, but they set the frame your later answers are read through.",
       "id": "Benar — kesan awal bukan vonis akhir, tetapi ia membingkai cara jawaban berikutnya dibaca."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The hypothesis hour",
        "id": "Satu jam hipotesis"
       },
       "body": {
        "en": "Within minutes, an interviewer forms a working hypothesis about you — prepared or winging it, structured or scattered, senior or junior for the level. The rest of the hour is spent testing that hypothesis. This is not laziness; it is how humans process people. Your job is to give the strongest true evidence early, so the hypothesis being tested is a favourable one.",
        "id": "Dalam hitungan menit, pewawancara membentuk hipotesis kerja tentangmu — siap atau asal datang, terstruktur atau berantakan, pas atau belum pas untuk levelnya. Sisa jamnya dipakai menguji hipotesis itu. Ini bukan kemalasan; begitulah manusia memproses orang. Tugasmu memberi bukti benar yang terkuat sejak awal, agar hipotesis yang diuji adalah yang menguntungkanmu."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Your interview is a document",
        "id": "Wawancaramu adalah dokumen"
       },
       "body": {
        "en": "The decision usually happens days later, in a debrief you never see, argued from notes. What survives into those notes? Specifics: numbers, names of projects, clear sequences of action. What dies: vague competence, mood, charm that never became a quotable sentence. Speak in lines that are easy to write down, and you are effectively drafting your own hiring packet.",
        "id": "Keputusan biasanya terjadi beberapa hari kemudian, dalam debrief yang tidak pernah kamu lihat, diperdebatkan dari catatan. Apa yang bertahan di catatan itu? Hal spesifik: angka, nama proyek, urutan tindakan yang jelas. Yang mati: kompetensi samar, suasana, pesona yang tak pernah menjadi kalimat yang bisa dikutip. Bicaralah dalam kalimat yang mudah dicatat, dan kamu sedang menyusun berkas rekrutmenmu sendiri."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "Fatigue, order and the fifth candidate",
        "id": "Kelelahan, urutan, dan kandidat kelima"
       },
       "body": {
        "en": "Interviewers see many candidates, often back to back. Late-day attention is thinner, and answers blur together. You cannot control your slot; you can control distinctiveness. One precisely told story with a number in it survives fatigue better than twenty adequate generalities. Design for memorability: fewer claims, harder evidence.",
        "id": "Pewawancara menemui banyak kandidat, sering berturut-turut. Perhatian di sore hari menipis, dan jawaban-jawaban saling melebur. Kamu tidak bisa mengatur jadwalmu; kamu bisa mengatur daya beda. Satu kisah yang dituturkan presisi dengan angka di dalamnya bertahan melawan kelelahan lebih baik daripada dua puluh generalisasi yang sekadar cukup. Rancang untuk diingat: klaim lebih sedikit, bukti lebih keras."
       },
       "icon": "target"
      },
      {
       "h": {
        "en": "Fairness, honestly",
        "id": "Soal keadilan, secara jujur"
       },
       "body": {
        "en": "Good companies fight these biases with scorecards and structured questions; imperfect ones do not. Either way, your strategy is identical: early evidence, quotable specifics, calm structure. You are not gaming the system — you are communicating in the format human decision-making actually uses.",
        "id": "Perusahaan yang baik melawan bias ini dengan scorecard dan pertanyaan terstruktur; yang belum rapi tidak. Apa pun itu, strategimu sama: bukti sejak awal, hal spesifik yang bisa dikutip, struktur yang tenang. Kamu tidak sedang mengakali sistem — kamu berkomunikasi dalam format yang memang dipakai pengambilan keputusan manusia."
       },
       "icon": "chat"
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "How the decision actually happens",
       "id": "Bagaimana keputusan sebenarnya terjadi"
      },
      "items": [
       {
        "h": {
         "en": "Hypothesis",
         "id": "Hipotesis"
        },
        "sub": {
         "en": "First minutes: a working read of you forms",
         "id": "Menit pertama: bacaan awal tentangmu terbentuk"
        }
       },
       {
        "h": {
         "en": "Testing",
         "id": "Pengujian"
        },
        "sub": {
         "en": "The hour: every answer confirms or corrects it",
         "id": "Satu jam: tiap jawaban mengonfirmasi atau mengoreksi"
        }
       },
       {
        "h": {
         "en": "Notes",
         "id": "Catatan"
        },
        "sub": {
         "en": "What survives: specifics, numbers, quotable lines",
         "id": "Yang bertahan: hal spesifik, angka, kalimat layak kutip"
        }
       },
       {
        "h": {
         "en": "Debrief",
         "id": "Debrief"
        },
        "sub": {
         "en": "Days later, without you — argued from those notes",
         "id": "Beberapa hari kemudian, tanpamu — diperdebatkan dari catatan itu"
        }
       }
      ],
      "note": {
       "en": "You cannot attend the debrief — but every specific, numbered sentence you speak attends it for you.",
       "id": "Kamu tidak bisa menghadiri debrief — tetapi setiap kalimat spesifik dan berangka yang kamu ucapkan hadir mewakilimu."
      },
      "exhibit": {
       "en": "Exhibit 1: How the decision actually happens",
       "id": "Peraga 1: Bagaimana keputusan sebenarnya terjadi"
      },
      "longdesc": {
       "en": "Diagram of How the decision actually happens. It presents, in order: Hypothesis — First minutes: a working read of you forms; Testing — The hour: every answer confirms or corrects it; Notes — What survives: specifics, numbers, quotable lines; Debrief — Days later, without you — argued from those notes.",
       "id": "Diagram Bagaimana keputusan sebenarnya terjadi. Menyajikan, berurutan: Hipotesis — Menit pertama: bacaan awal tentangmu terbentuk; Pengujian — Satu jam: tiap jawaban mengonfirmasi atau mengoreksi; Catatan — Yang bertahan: hal spesifik, angka, kalimat layak kutip; Debrief — Beberapa hari kemudian, tanpamu — diperdebatkan dari catatan itu."
      }
     },
     "checks": [
      {
       "q": {
        "en": "Your interview 'record' in the hiring meeting is:",
        "id": "'Rekaman' wawancaramu di rapat rekrutmen adalah:"
       },
       "options": [
        {
         "en": "The interviewer's notes — so speak in lines that are easy to write down",
         "id": "Catatan pewawancara — maka bicaralah dalam kalimat yang mudah dicatat"
        },
        {
         "en": "A full transcript of everything you said",
         "id": "Transkrip lengkap semua ucapanmu"
        },
        {
         "en": "The interviewer's overall feeling about you",
         "id": "Perasaan umum pewawancara tentangmu"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — no transcript exists. The notes are the record, and you co-write them with every quotable specific.",
        "id": "Benar — tidak ada transkrip. Catatan itulah rekamannya, dan kamu ikut menulisnya lewat tiap hal spesifik yang layak dikutip."
       }
      }
     ],
     "scenario": {
      "icon": "eye",
      "img": "../../assets/bg/journey-start.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat Dalam Sorotan"
      },
      "body": [
       {
        "en": "Raka, a fresh industrial-engineering graduate, is four minutes into his first screening call with a fintech recruiter. He notices she typed nothing while he described his thesis — but wrote three quick lines the moment he said “our bazaar stall broke even in three days because I renegotiated the supplier price.” The same thing happens later when he quotes a number from his internship.",
        "id": "Raka, lulusan baru teknik industri, sudah empat menit dalam panggilan penyaringan pertamanya dengan rekruter fintech. Ia menyadari sang rekruter tidak mengetik apa pun saat ia menjelaskan skripsinya — tetapi menulis tiga baris cepat begitu ia berkata “lapak bazar kami balik modal dalam tiga hari karena saya negosiasi ulang harga pemasok.” Hal yang sama terulang saat ia mengutip angka dari magangnya."
       },
       {
        "en": "Throughout this module, watch the interview through the interviewer's side of the table, the way Raka is learning to: what gets written down decides what gets argued for in the debrief.",
        "id": "Sepanjang modul ini, amati wawancara dari sisi meja pewawancara, seperti yang sedang dipelajari Raka: apa yang dicatat menentukan apa yang diperjuangkan di debrief."
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "hypothesis",
        "id": "hipotesis"
       },
       "def": {
        "en": "The interviewer's early working read of you, which later answers confirm or correct.",
        "id": "Bacaan kerja awal pewawancara tentangmu, yang dikonfirmasi atau dikoreksi jawaban-jawaban berikutnya."
       }
      },
      {
       "term": {
        "en": "debrief",
        "id": "debrief"
       },
       "def": {
        "en": "The meeting after the interview loop where interviewers pool notes and argue the hire decision — without you in the room.",
        "id": "Rapat setelah rangkaian wawancara tempat para pewawancara menggabungkan catatan dan memperdebatkan keputusan rekrut — tanpa kehadiranmu."
       }
      },
      {
       "term": {
        "en": "scorecard",
        "id": "scorecard"
       },
       "def": {
        "en": "A structured rubric interviewers fill per competency, usually on an anchored 1–5 scale.",
        "id": "Rubrik terstruktur yang diisi pewawancara per kompetensi, biasanya pada skala berjangkar 1–5."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Kekonkretan yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai rubrik."
       }
      }
     ]
    },
    {
     "n": "1.2",
     "title": {
      "en": "The Four Interview Formats Decoded",
      "id": "Empat Format Wawancara Dibedah"
     },
     "kind": "reading",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "HR screen, technical round, user interview, final round — four rooms, four different tests. Candidates fail not because they are weak, but because they give a technical performance in an HR room or a rapport performance in a technical one. This lesson decodes what each format is designed to surface, and how your preparation should differ.",
      "id": "Penyaringan HR, babak teknis, wawancara user, babak final — empat ruangan, empat ujian berbeda. Kandidat gagal bukan karena lemah, tetapi karena menampilkan performa teknis di ruang HR atau performa keakraban di ruang teknis. Pelajaran ini membedah apa yang dirancang untuk dimunculkan tiap format, dan bagaimana persiapanmu seharusnya berbeda."
     },
     "objectives": [
      {
       "en": "Name the primary question each of the four formats is trying to answer.",
       "id": "Menyebutkan pertanyaan utama yang ingin dijawab masing-masing dari empat format."
      },
      {
       "en": "Identify the failure mode candidates most often bring to each room.",
       "id": "Mengidentifikasi mode kegagalan yang paling sering dibawa kandidat ke tiap ruangan."
      },
      {
       "en": "Adapt one story of yours to be told differently in two different formats.",
       "id": "Mengadaptasi satu kisahmu agar dituturkan berbeda dalam dua format berbeda."
      }
     ],
     "takeaways": [
      {
       "en": "HR screens for risk and motivation; technical rounds test thinking; user rounds test partnership; finals test judgment and trajectory.",
       "id": "HR menyaring risiko dan motivasi; babak teknis menguji cara berpikir; babak user menguji kemitraan; final menguji pertimbangan dan lintasan."
      },
      {
       "en": "The same story changes altitude between rooms — detail for peers, decisions for executives.",
       "id": "Kisah yang sama berubah ketinggian antar ruangan — detail untuk rekan, keputusan untuk eksekutif."
      },
      {
       "en": "Ask who you are meeting before every round; the name of the room tells you the test.",
       "id": "Tanyakan siapa yang akan kamu temui sebelum tiap babak; nama ruangan memberitahumu ujiannya."
      }
     ],
     "check": {
      "q": {
       "en": "A peer/user interviewer most wants to know:",
       "id": "Pewawancara user/rekan paling ingin tahu:"
      },
      "options": [
       {
        "en": "Whether your salary expectation fits the budget",
        "id": "Apakah ekspektasi gajimu sesuai anggaran"
       },
       {
        "en": "Whether they would want to work beside you on a hard week",
        "id": "Apakah mereka mau bekerja di sampingmu di minggu yang berat"
       },
       {
        "en": "Whether you know the company's founding year",
        "id": "Apakah kamu tahu tahun berdirinya perusahaan"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — user rounds are partnership tests: load-sharing, communication, and how you behave when things break.",
       "id": "Benar — babak user adalah ujian kemitraan: berbagi beban, komunikasi, dan perilakumu saat keadaan memburuk."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The HR screen — a risk filter with a friendly face",
        "id": "Penyaringan HR — filter risiko berwajah ramah"
       },
       "body": {
        "en": "HR rarely has the power to hire you, but always has the power to end your candidacy. The screen tests motivation, salary fit, timeline, communication baseline, and red flags. The friendliness misleads candidates into rambling. Treat it as a precision round: clear positioning, clean reasons for moving, a researched salary range, zero bitterness about the past.",
        "id": "HR jarang berwenang merekrutmu, tetapi selalu berwenang mengakhiri pencalonanmu. Penyaringan menguji motivasi, kecocokan gaji, linimasa, komunikasi dasar, dan tanda bahaya. Keramahannya menjebak kandidat untuk melantur. Perlakukan sebagai babak presisi: positioning jernih, alasan pindah yang bersih, rentang gaji hasil riset, nol kepahitan tentang masa lalu."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "The technical round — a thinking test wearing a knowledge costume",
        "id": "Babak teknis — ujian berpikir berkostum pengetahuan"
       },
       "body": {
        "en": "Technical interviewers care less about the right answer than about watching you reach for one: how you clarify, structure, verify, and admit the edge of your knowledge. A wrong answer reached by visible method scores above a right answer produced silently. Think out loud — the thinking is the deliverable.",
        "id": "Pewawancara teknis tidak terlalu peduli jawaban benar dibanding menyaksikanmu menggapainya: caramu mengklarifikasi, menstrukturkan, memverifikasi, dan mengakui batas pengetahuanmu. Jawaban keliru yang dicapai dengan metode yang terlihat bernilai di atas jawaban benar yang lahir dalam diam. Berpikirlah bersuara — proses berpikir itulah hasil kerjanya."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "The user round — would we survive a bad week together?",
        "id": "Babak user — sanggupkah kita melewati minggu buruk bersama?"
       },
       "body": {
        "en": "Future teammates are imagining Tuesday, not your CV: deadlines slipping, a defect at 5 pm, a disagreement about approach. They probe collaboration, ego under friction, and whether helping you will be pleasant or exhausting. Bring stories of working with people, not only of personal wins — and interview them back about the team's reality.",
        "id": "Calon rekan kerja membayangkan hari Selasa, bukan CV-mu: tenggat molor, cacat produk jam 5 sore, beda pendapat soal pendekatan. Mereka menguji kolaborasi, ego saat bergesekan, dan apakah membantumu akan menyenangkan atau melelahkan. Bawa kisah bekerja bersama orang, bukan hanya kemenangan pribadi — dan wawancarai balik mereka tentang realitas timnya."
       },
       "icon": "target"
      },
      {
       "h": {
        "en": "The final round — judgment, trajectory, and the economics of you",
        "id": "Babak final — pertimbangan, lintasan, dan nilai ekonomis dirimu"
       },
       "body": {
        "en": "Executives ask themselves three things: does this person's judgment hold at altitude, will they grow past this role, and is the total package worth it. Answer in headlines first, detail on request. Connect your work to business outcomes — revenue, cost, risk — and let your questions show you think about the company, not just the job.",
        "id": "Eksekutif menanyakan tiga hal pada diri mereka: apakah pertimbangan orang ini bertahan di ketinggian, akankah ia tumbuh melampaui peran ini, dan apakah paket totalnya sepadan. Jawab dengan garis besar dulu, detail bila diminta. Kaitkan kerjamu ke hasil bisnis — pendapatan, biaya, risiko — dan biarkan pertanyaanmu menunjukkan kamu memikirkan perusahaannya, bukan sekadar pekerjaannya."
       },
       "icon": "chat"
      }
     ],
     "diagram": {
      "type": "quad",
      "title": {
       "en": "Four rooms, four tests",
       "id": "Empat ruangan, empat ujian"
      },
      "items": [
       {
        "h": {
         "en": "HR screen",
         "id": "Penyaringan HR"
        },
        "sub": {
         "en": "Risk filter: motivation, money, timeline, red flags",
         "id": "Filter risiko: motivasi, uang, linimasa, tanda bahaya"
        }
       },
       {
        "h": {
         "en": "Technical",
         "id": "Teknis"
        },
        "sub": {
         "en": "Thinking test: method aloud beats silent correctness",
         "id": "Ujian berpikir: metode bersuara mengalahkan benar dalam diam"
        }
       },
       {
        "h": {
         "en": "User / peer",
         "id": "User / rekan"
        },
        "sub": {
         "en": "Partnership test: would we survive a bad week together?",
         "id": "Ujian kemitraan: sanggupkah melewati minggu buruk bersama?"
        }
       },
       {
        "h": {
         "en": "Final",
         "id": "Final"
        },
        "sub": {
         "en": "Judgment & trajectory: headlines first, years ahead",
         "id": "Pertimbangan & lintasan: garis besar dulu, berpikir bertahun ke depan"
        }
       }
      ],
      "note": {
       "en": "Same candidate, same stories — different slice per room. Ask who you are meeting; the room names the test.",
       "id": "Kandidat sama, kisah sama — irisan berbeda per ruangan. Tanyakan siapa yang akan kamu temui; ruangannya menamai ujiannya."
      },
      "exhibit": {
       "en": "Exhibit 2: Four rooms, four tests",
       "id": "Peraga 2: Empat ruangan, empat ujian"
      },
      "longdesc": {
       "en": "Diagram of Four rooms, four tests. It presents, in order: HR screen — Risk filter: motivation, money, timeline, red flags; Technical — Thinking test: method aloud beats silent correctness; User / peer — Partnership test: would we survive a bad week together?; Final — Judgment & trajectory: headlines first, years ahead.",
       "id": "Diagram Empat ruangan, empat ujian. Menyajikan, berurutan: Penyaringan HR — Filter risiko: motivasi, uang, linimasa, tanda bahaya; Teknis — Ujian berpikir: metode bersuara mengalahkan benar dalam diam; User / rekan — Ujian kemitraan: sanggupkah melewati minggu buruk bersama?; Final — Pertimbangan & lintasan: garis besar dulu, berpikir bertahun ke depan."
      }
     },
     "tryit": {
      "qid": "hr01",
      "label": {
       "en": "Practice the opener every room shares",
       "id": "Latih pembuka yang dimiliki semua ruangan"
      },
      "desc": {
       "en": "“Tell me about yourself” starts all four formats. Drill it once now — the simulator will time you and read your structure.",
       "id": "“Ceritakan tentang dirimu” membuka keempat format. Latih sekali sekarang — simulator akan mengukur waktumu dan membaca strukturmu."
      }
     }
    },
    {
     "n": "1.3",
     "title": {
      "en": "Reading the Room in Real Time",
      "id": "Membaca Ruangan Secara Real-Time"
     },
     "kind": "interactive",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The room talks back while you are speaking — note-taking bursts, follow-up depth, glances at the clock, silence. Most candidates are too busy performing to listen. This lesson trains the three live signals worth reading and the adjustment each one calls for.",
      "id": "Ruangan itu berbicara balik selagi kamu bicara — catatan yang tiba-tiba ditulis, kedalaman pertanyaan lanjutan, lirikan ke jam, keheningan. Kebanyakan kandidat terlalu sibuk tampil untuk mendengarkan. Pelajaran ini melatih tiga sinyal langsung yang layak dibaca dan penyesuaian yang diminta masing-masing."
     },
     "objectives": [
      {
       "en": "Recognise the three highest-value live signals an interviewer gives off.",
       "id": "Mengenali tiga sinyal langsung bernilai tertinggi dari pewawancara."
      },
      {
       "en": "Make one mid-answer adjustment without losing your thread.",
       "id": "Melakukan satu penyesuaian di tengah jawaban tanpa kehilangan alur."
      },
      {
       "en": "Resist the reflex to fill silence with weaker material.",
       "id": "Menahan refleks mengisi keheningan dengan materi yang lebih lemah."
      }
     ],
     "takeaways": [
      {
       "en": "Note-taking bursts mark quotable moments — give one more sentence of that, then land.",
       "id": "Catatan yang mendadak ditulis menandai momen layak kutip — beri satu kalimat lagi tentang itu, lalu mendarat."
      },
      {
       "en": "Deep follow-ups are a good sign: the interviewer is buying, not doubting.",
       "id": "Pertanyaan lanjutan yang dalam adalah pertanda baik: pewawancara sedang membeli, bukan meragukan."
      },
      {
       "en": "Silence after your answer is thinking time — theirs. Do not buy it back with rambling.",
       "id": "Keheningan setelah jawabanmu adalah waktu berpikir — milik mereka. Jangan membelinya kembali dengan melantur."
      }
     ],
     "check": {
      "q": {
       "en": "The interviewer glances at the time in the middle of your story. Best response:",
       "id": "Pewawancara melirik jam di tengah kisahmu. Respons terbaik:"
      },
      "options": [
       {
        "en": "Speed up your speaking pace and keep all the detail",
        "id": "Percepat tempo bicara dan pertahankan semua detail"
       },
       {
        "en": "Stop and ask if they are bored",
        "id": "Berhenti dan bertanya apakah mereka bosan"
       },
       {
        "en": "Compress: jump to your action and the result in two sentences",
        "id": "Padatkan: lompat ke tindakan dan hasil dalam dua kalimat"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — the glance says the ration of attention is closing. Land the plane: action, result, stop.",
       "id": "Benar — lirikan itu berarti jatah perhatian menipis. Daratkan pesawat: tindakan, hasil, berhenti."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Why performers go deaf",
        "id": "Mengapa yang sedang tampil menjadi tuli"
       },
       "body": {
        "en": "Under pressure, attention narrows to your own script, and the interviewer becomes scenery. But interviews are conversations, and conversations reward listeners. Keeping ten percent of your attention on the room costs a little polish and buys real-time steering — worth the trade every time.",
        "id": "Di bawah tekanan, perhatian menyempit ke naskahmu sendiri, dan pewawancara menjadi pemandangan latar. Padahal wawancara adalah percakapan, dan percakapan mengganjar pendengar. Menyisakan sepuluh persen perhatian untuk ruangan mengorbankan sedikit kemulusan dan membeli kemudi real-time — selalu sepadan."
       }
      },
      {
       "h": {
        "en": "The three signals",
        "id": "Tiga sinyal"
       },
       "body": {
        "en": "One: writing bursts — they just heard something useful; give that thread one more concrete sentence. Two: follow-up depth — probing deeper means interest, so stay and go deeper honestly. Three: time behaviour — clock glances and posture shifts mean compress now, land on the result. Everything else (folded arms, neutral faces) is noise; interviewers are often just tired.",
        "id": "Satu: catatan mendadak — mereka baru mendengar sesuatu yang berguna; beri utas itu satu kalimat konkret lagi. Dua: kedalaman pertanyaan lanjutan — menggali lebih dalam berarti tertarik, jadi bertahanlah dan masuk lebih dalam dengan jujur. Tiga: perilaku waktu — lirikan jam dan perubahan postur berarti padatkan sekarang, mendarat di hasil. Selebihnya (tangan terlipat, wajah datar) adalah derau; pewawancara sering sekadar lelah."
       }
      },
      {
       "h": {
        "en": "Silence is not an emergency",
        "id": "Keheningan bukan keadaan darurat"
       },
       "body": {
        "en": "After you land an answer, interviewers often pause to write or think. Candidates panic and reopen the answer, usually with weaker material — diluting what was strong. Finish, breathe, hold eye contact, wait. If the silence stretches, a simple “happy to go deeper on any part of that” beats a second, worse version of the same story.",
        "id": "Setelah jawabanmu mendarat, pewawancara sering diam untuk menulis atau berpikir. Kandidat panik dan membuka kembali jawaban, biasanya dengan materi lebih lemah — mengencerkan yang tadinya kuat. Selesaikan, tarik napas, jaga kontak mata, tunggu. Jika hening memanjang, ucapan sederhana “dengan senang hati saya perdalam bagian mana pun” mengalahkan versi kedua yang lebih buruk dari kisah yang sama."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 · The clock glance",
        "id": "Latihan 1 · Lirikan jam"
       },
       "body": {
        "en": "You are ninety seconds into a story about a campus project. The interviewer looks at their watch, then back at you. Say out loud the two sentences you would use to land the answer immediately.",
        "id": "Kamu sudah sembilan puluh detik menceritakan proyek kampus. Pewawancara melirik jamnya, lalu kembali menatapmu. Ucapkan dua kalimat yang akan kamu pakai untuk segera mendaratkan jawaban."
       },
       "debrief": {
        "en": "Model landing: “The short version of the rest: I rebuilt the schedule around the two critical tasks, and we delivered nine days early.” Action plus result, nothing else. The setup you were still narrating is gone — and nobody misses it.",
        "id": "Contoh pendaratan: “Singkatnya: saya susun ulang jadwal di sekitar dua tugas kritis, dan kami selesai sembilan hari lebih awal.” Tindakan plus hasil, tanpa yang lain. Latar yang masih kamu ceritakan tadi hilang — dan tidak ada yang merindukannya."
       }
      },
      {
       "h": {
        "en": "Drill 2 · The deep follow-up",
        "id": "Latihan 2 · Pertanyaan lanjutan yang dalam"
       },
       "body": {
        "en": "You mention that you “negotiated with the vendor”. The interviewer leans in: “Walk me through that negotiation — what exactly did you offer?” What do you do with your prepared next point?",
        "id": "Kamu menyebut “bernegosiasi dengan vendor”. Pewawancara mencondongkan badan: “Jelaskan negosiasinya — apa persisnya yang kamu tawarkan?” Apa yang kamu lakukan dengan poin siapanmu berikutnya?"
       },
       "debrief": {
        "en": "Drop it. Follow the interviewer's interest — this is buying behaviour. Give the real mechanics: the constraint, your offer, their counter, the close. Depth on demand converts interest into conviction; returning to your script converts it into disappointment.",
        "id": "Buang. Ikuti minat pewawancara — ini perilaku membeli. Berikan mekanisme nyatanya: kendala, tawaranmu, tawaran balik mereka, penutupnya. Kedalaman saat diminta mengubah minat menjadi keyakinan; kembali ke naskah mengubahnya menjadi kekecewaan."
       }
      },
      {
       "h": {
        "en": "Drill 3 · The silence",
        "id": "Latihan 3 · Keheningan"
       },
       "body": {
        "en": "You finish a strong answer about a failure and its lesson. The interviewer writes for six full seconds. Your chest tightens. What do you do — and what do you absolutely not do?",
        "id": "Kamu menutup jawaban kuat tentang kegagalan dan pelajarannya. Pewawancara menulis selama enam detik penuh. Dadamu menegang. Apa yang kamu lakukan — dan apa yang sama sekali tidak boleh?"
       },
       "debrief": {
        "en": "Do: nothing. Sit in it; they are capturing your answer, which is exactly what you want. Do not: reopen with “...so yeah, basically what happened was...” — the classic dilution. Silence you can hold reads as confidence you did not have to claim.",
        "id": "Lakukan: tidak ada. Diamlah; mereka sedang merekam jawabanmu, persis yang kamu inginkan. Jangan: membuka lagi dengan “...jadi ya, intinya tadi...” — pengenceran klasik. Keheningan yang sanggup kamu tahan terbaca sebagai percaya diri yang tak perlu kamu klaim."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "The clock glance — two endings",
        "id": "Lirikan jam — dua akhir"
       },
       "q": {
        "en": "(mid-story, the interviewer checks the time)",
        "id": "(di tengah kisah, pewawancara melirik jam)"
       },
       "weak": {
        "en": "…so after that meeting there was another meeting, and I also want to mention the context of the budget, which started back in January when…",
        "id": "…jadi setelah rapat itu ada rapat lagi, dan saya juga mau menyebut konteks anggarannya, yang bermula sejak Januari ketika…"
       },
       "strong": {
        "en": "The short version of the rest: I froze the scope, renegotiated the deadline with the client, and we shipped nine days early.",
        "id": "Singkatnya: saya bekukan lingkupnya, negosiasikan ulang tenggat dengan klien, dan kami rilis sembilan hari lebih awal."
       },
       "why": {
        "en": "The glance says attention is closing. The strong version lands action plus result in one breath — and the interviewer writes it down.",
        "id": "Lirikan itu berarti perhatian menipis. Versi kuat mendaratkan tindakan plus hasil dalam satu napas — dan pewawancara mencatatnya."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "follow-up",
        "id": "pertanyaan lanjutan"
       },
       "def": {
        "en": "The probing question after your answer — where inflated claims collapse and honest depth scores.",
        "id": "Pertanyaan pengejar setelah jawabanmu — tempat klaim gelembung runtuh dan kedalaman jujur bernilai."
       }
      }
     ]
    },
    {
     "n": "1.4",
     "title": {
      "en": "The Interview Performance Mindset",
      "id": "Pola Pikir Performa Wawancara"
     },
     "kind": "reading",
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The room is only as dangerous as your framing of it. This lesson replaces the interrogation frame with the evaluation frame, converts anxiety into usable arousal, and legitimises thinking time — the three mindset moves that make every technique in this course usable under pressure.",
      "id": "Ruangan hanya seberbahaya caramu membingkainya. Pelajaran ini mengganti bingkai interogasi dengan bingkai evaluasi, mengubah kecemasan menjadi energi yang bisa dipakai, dan mengesahkan waktu berpikir — tiga langkah pola pikir yang membuat semua teknik di kursus ini dapat dipakai di bawah tekanan."
     },
     "objectives": [
      {
       "en": "Reframe the interview as a two-way evaluation you are also conducting.",
       "id": "Membingkai ulang wawancara sebagai evaluasi dua arah yang juga kamu lakukan."
      },
      {
       "en": "Use arousal-reappraisal to convert nerves into performance energy.",
       "id": "Menggunakan penafsiran ulang gejolak untuk mengubah gugup menjadi energi performa."
      },
      {
       "en": "Buy thinking time out loud without losing credibility.",
       "id": "Membeli waktu berpikir secara terbuka tanpa kehilangan kredibilitas."
      }
     ],
     "takeaways": [
      {
       "en": "An interview is an evaluation of fit, capability, judgment, communication and potential — and you are evaluating them back.",
       "id": "Wawancara adalah evaluasi kecocokan, kapabilitas, pertimbangan, komunikasi, dan potensi — dan kamu mengevaluasi mereka balik."
      },
      {
       "en": "A racing heart is oxygen for performance if you name it excitement instead of fear.",
       "id": "Jantung berdebar adalah oksigen performa jika kamu menamainya semangat, bukan takut."
      },
      {
       "en": "“Good question — let me think for a moment” is a senior move, not a confession.",
       "id": "“Pertanyaan bagus — izinkan saya berpikir sejenak” adalah langkah senior, bukan pengakuan lemah."
      }
     ],
     "check": {
      "q": {
       "en": "Which reframe does this lesson teach?",
       "id": "Pembingkaian ulang mana yang diajarkan pelajaran ini?"
      },
      "options": [
       {
        "en": "Interview as mutual evaluation, nerves as energy, thinking time as legitimate",
        "id": "Wawancara sebagai evaluasi timbal balik, gugup sebagai energi, waktu berpikir sebagai hal sah"
       },
       {
        "en": "Interview as a battle you must dominate from the first minute",
        "id": "Wawancara sebagai pertarungan yang harus kamu kuasai sejak menit pertama"
       },
       {
        "en": "Interview as a formality once your CV is strong enough",
        "id": "Wawancara sebagai formalitas bila CV-mu sudah cukup kuat"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — evaluation, not interrogation; energy, not threat; deliberation, not deficiency.",
       "id": "Benar — evaluasi, bukan interogasi; energi, bukan ancaman; pertimbangan, bukan kekurangan."
      }
     },
     "sections": [
      {
       "h": {
        "en": "From interrogation to evaluation",
        "id": "Dari interogasi ke evaluasi"
       },
       "body": {
        "en": "An interrogation has a suspect; an evaluation has two parties checking fit. You are deciding whether this team deserves your next years, just as they are deciding about you. That symmetry is not arrogance — it is accuracy, and it changes your posture, your questions, and how rejection lands. A no becomes information about fit, not a verdict on worth.",
        "id": "Interogasi punya tersangka; evaluasi punya dua pihak yang memeriksa kecocokan. Kamu sedang memutuskan apakah tim ini layak menerima tahun-tahunmu berikutnya, sebagaimana mereka memutuskan tentangmu. Simetri itu bukan arogansi — melainkan akurasi, dan ia mengubah sikap tubuhmu, pertanyaanmu, dan cara penolakan mendarat. Sebuah 'tidak' menjadi informasi kecocokan, bukan vonis atas harga diri."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Your body is not betraying you",
        "id": "Tubuhmu tidak mengkhianatimu"
       },
       "body": {
        "en": "A raised pulse, quick breath, sharpened senses — the body's performance state and its fear state are physiologically near-identical. What differs is the label. Telling yourself “I am excited” before high-pressure tasks measurably improves performance versus forcing calm. Use the energy: it is there to make you faster, not to expose you.",
        "id": "Denyut naik, napas cepat, indra menajam — kondisi performa dan kondisi takut pada tubuh nyaris identik secara fisiologis. Yang berbeda adalah labelnya. Mengatakan “saya bersemangat” sebelum tugas bertekanan tinggi terbukti memperbaiki performa dibanding memaksakan tenang. Pakailah energinya: ia hadir untuk mempercepatmu, bukan membongkarmu."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "Thinking time is allowed",
        "id": "Waktu berpikir itu diperbolehkan"
       },
       "body": {
        "en": "Rushing into an answer you have not chosen is how rambling starts. Senior people pause; they say “let me think about that for a second”, take a breath, choose a structure, then speak. Interviewers read the pause as deliberation. Practise the sentence until it feels like yours — it is the cheapest upgrade in this entire course.",
        "id": "Terburu-buru menjawab sebelum memilih jawaban adalah awal dari melantur. Orang-orang senior berhenti sejenak; mereka berkata “izinkan saya berpikir sebentar”, menarik napas, memilih struktur, lalu bicara. Pewawancara membaca jeda itu sebagai pertimbangan. Latih kalimat itu sampai terasa milikmu — inilah peningkatan termurah di seluruh kursus ini."
       },
       "icon": "target"
      }
     ],
     "listen": [
      {
       "label": {
        "en": "Buying thinking time, said like a senior",
        "id": "Membeli waktu berpikir, seperti seorang senior"
       },
       "text": {
        "en": "That's a good question — let me think about it for a moment. … Okay. I'd look at it from two angles.",
        "id": "Pertanyaan yang bagus — izinkan saya berpikir sejenak. … Baik. Saya akan melihatnya dari dua sisi."
       }
      },
      {
       "label": {
        "en": "The arousal reframe, before you walk in",
        "id": "Penafsiran ulang gejolak, sebelum masuk ruangan"
       },
       "text": {
        "en": "My heart is racing because I am ready for this. This is excitement. It is here to make me faster.",
        "id": "Jantungku berdebar karena aku siap. Ini semangat. Ia hadir untuk membuatku lebih cepat."
       }
      }
     ],
     "tryit": {
      "qid": "hr14",
      "label": {
       "en": "Test the mindset under a real question",
       "id": "Uji pola pikirnya pada pertanyaan nyata"
      },
      "desc": {
       "en": "Answer “what motivates you” using the pause, the reframe, and conversation mode.",
       "id": "Jawab “apa yang memotivasimu” dengan jeda, penafsiran ulang, dan mode percakapan."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Treating nerves as proof something is wrong",
         "id": "Menganggap gugup sebagai bukti ada yang salah"
        },
        "fix": {
         "en": "Label the arousal as excitement — the physiology is identical; only the story you tell yourself differs.",
         "id": "Beri label gejolak itu sebagai semangat — fisiologinya identik; hanya cerita yang kamu tuturkan pada dirimu yang berbeda."
        }
       },
       {
        "h": {
         "en": "Answering instantly to look sharp",
         "id": "Menjawab seketika agar tampak tajam"
        },
        "fix": {
         "en": "Buy thinking time out loud: “good question — give me a moment.” Deliberation reads as seniority.",
         "id": "Beli waktu berpikir secara terbuka: “pertanyaan bagus — sebentar saya pikirkan.” Pertimbangan terbaca sebagai kematangan."
        }
       },
       {
        "h": {
         "en": "Walking in as the interrogated",
         "id": "Masuk sebagai pihak yang diinterogasi"
        },
        "fix": {
         "en": "Walk in as an evaluator too: you are deciding whether this team deserves your next years.",
         "id": "Masuklah juga sebagai penilai: kamu sedang memutuskan apakah tim ini layak menerima tahun-tahunmu."
        }
       }
      ]
     }
    }
   ]
  },
  {
   "num": 2,
   "title": {
    "en": "Build Your Story Library",
    "id": "Bangun Perpustakaan Kisah"
   },
   "overview": {
    "en": "Strong candidates do not improvise; they retrieve. This module builds your retrieval system: the STAR-L narrative spine, the ten competency categories interviews actually probe, a mining method that finds stories in ordinary experience, and calibration — the craft of telling one story at different altitudes for different rooms.",
    "id": "Kandidat kuat tidak berimprovisasi; mereka memanggil ulang. Modul ini membangun sistem pemanggilanmu: tulang punggung narasi STAR-L, sepuluh kategori kompetensi yang benar-benar diuji wawancara, metode penambangan yang menemukan kisah dalam pengalaman biasa, dan kalibrasi — keterampilan menuturkan satu kisah pada ketinggian berbeda untuk ruangan berbeda."
   },
   "outcome": {
    "en": "By the end of this module you own a tagged library of real stories with evidence and learnings, retrievable under pressure and adaptable to any interview format and seniority level.",
    "id": "Di akhir modul ini kamu memiliki perpustakaan kisah nyata yang tertanda, dengan bukti dan pembelajaran, dapat dipanggil di bawah tekanan dan diadaptasi ke format serta level wawancara mana pun."
   },
   "lessons": [
    {
     "n": "2.1",
     "title": {
      "en": "The STAR-L Framework",
      "id": "Kerangka STAR-L"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Context → Challenge → Action → Result → Learning. STAR-L is STAR with the piece interviewers remember most: what changed in you. This lesson teaches the spine, its proportions, and the anti-formula warning — the framework is scaffolding for truth, not a script for reciting.",
      "id": "Konteks → Tantangan → Tindakan → Hasil → Pembelajaran. STAR-L adalah STAR dengan bagian yang paling diingat pewawancara: apa yang berubah dalam dirimu. Pelajaran ini mengajarkan tulang punggungnya, proporsinya, dan peringatan anti-formula — kerangka adalah perancah untuk kebenaran, bukan naskah hafalan."
     },
     "objectives": [
      {
       "en": "Structure any experience as Context → Challenge → Action → Result → Learning.",
       "id": "Menstrukturkan pengalaman apa pun sebagai Konteks → Tantangan → Tindakan → Hasil → Pembelajaran."
      },
      {
       "en": "Apply the proportions: one sentence of setup, the bulk on action, a measured result.",
       "id": "Menerapkan proporsi: satu kalimat latar, porsi terbesar pada tindakan, hasil terukur."
      },
      {
       "en": "Avoid the robotic-STAR failure mode that makes rehearsed candidates forgettable.",
       "id": "Menghindari mode gagal STAR-robotik yang membuat kandidat hafalan mudah dilupakan."
      }
     ],
     "takeaways": [
      {
       "en": "Setup is one sentence; the action is the story; the result is a number; the learning is the gift.",
       "id": "Latar itu satu kalimat; tindakan adalah kisahnya; hasil adalah angka; pembelajaran adalah hadiahnya."
      },
      {
       "en": "STAR-L organises truth — it never replaces it. If the structure shows, soften it.",
       "id": "STAR-L merapikan kebenaran — tidak pernah menggantikannya. Jika strukturnya terlihat, lenturkan."
      },
      {
       "en": "The learning line is what separates a good answer from a memorable one.",
       "id": "Kalimat pembelajaran adalah pembeda antara jawaban baik dan jawaban yang diingat."
      }
     ],
     "check": {
      "q": {
       "en": "Where should most of your speaking time go in a STAR-L answer?",
       "id": "Ke mana sebagian besar waktu bicaramu dalam jawaban STAR-L?"
      },
      "options": [
       {
        "en": "The result, repeated in several different ways",
        "id": "Hasil, diulang dengan beberapa cara berbeda"
       },
       {
        "en": "The actions you personally took",
        "id": "Tindakan yang kamu ambil secara pribadi"
       },
       {
        "en": "The context, so the interviewer fully understands the situation",
        "id": "Konteks, agar pewawancara paham situasinya sepenuhnya"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — context in one line, then spend the answer on what you did. Actions carry the evidence.",
       "id": "Benar — konteks satu kalimat, lalu habiskan jawaban pada apa yang kamu lakukan. Tindakanlah pembawa bukti."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The spine",
        "id": "Tulang punggungnya"
       },
       "body": {
        "en": "Context: where and when, one sentence. Challenge: what made it hard, one sentence. Action: what you — first person singular — actually did, in sequence, most of the answer. Result: what changed, with a number wherever truthful. Learning: the one-line principle you carry forward. Sixty to a hundred and fifty words covers it; two minutes is the ceiling.",
        "id": "Konteks: di mana dan kapan, satu kalimat. Tantangan: apa yang membuatnya sulit, satu kalimat. Tindakan: apa yang kamu — orang pertama tunggal — benar-benar lakukan, berurutan, porsi terbesar jawaban. Hasil: apa yang berubah, dengan angka bila memang benar. Pembelajaran: prinsip satu baris yang kamu bawa. Enam puluh sampai seratus lima puluh kata cukup; dua menit adalah plafonnya."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Why the L matters",
        "id": "Mengapa L penting"
       },
       "body": {
        "en": "Result proves competence; learning proves growth. Interviewers hiring for potential — which is every interviewer hiring below executive level — weigh the learning line heavily. It shows a mind that converts experience into principle. Without it, even a great story is a closed file; with it, the story predicts your future behaviour.",
        "id": "Hasil membuktikan kompetensi; pembelajaran membuktikan pertumbuhan. Pewawancara yang merekrut potensi — artinya semua pewawancara di bawah level eksekutif — menimbang kalimat pembelajaran dengan berat. Ia menunjukkan pikiran yang mengubah pengalaman menjadi prinsip. Tanpanya, kisah hebat pun berkas tertutup; dengannya, kisah itu meramalkan perilakumu ke depan."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "The anti-formula warning",
        "id": "Peringatan anti-formula"
       },
       "body": {
        "en": "Interviewers hear STAR performed robotically many times a week: “The Situation was… The Task was…”. Never announce the labels. Let the structure live underneath natural speech — a story told by a person, organised by a framework the listener never sees. If you sound like a template, the content stops being believed.",
        "id": "Pewawancara mendengar STAR dibawakan seperti robot berkali-kali sepekan: “Situasinya adalah… Tugasnya adalah…”. Jangan pernah mengumumkan labelnya. Biarkan struktur hidup di bawah tutur alami — kisah yang dituturkan manusia, dirapikan kerangka yang tak pernah terlihat pendengar. Jika kamu terdengar seperti templat, isinya berhenti dipercaya."
       },
       "icon": "target"
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "STAR-L — the narrative spine and its proportions",
       "id": "STAR-L — tulang punggung narasi dan proporsinya"
      },
      "items": [
       {
        "h": {
         "en": "Context",
         "id": "Konteks"
        },
        "sub": {
         "en": "1 sentence — where and when",
         "id": "1 kalimat — di mana dan kapan"
        }
       },
       {
        "h": {
         "en": "Challenge",
         "id": "Tantangan"
        },
        "sub": {
         "en": "1 sentence — what made it hard",
         "id": "1 kalimat — apa yang membuatnya sulit"
        }
       },
       {
        "h": {
         "en": "Action",
         "id": "Tindakan"
        },
        "sub": {
         "en": "The bulk — what YOU did, in sequence",
         "id": "Porsi terbesar — apa yang KAMU lakukan, berurutan"
        }
       },
       {
        "h": {
         "en": "Result",
         "id": "Hasil"
        },
        "sub": {
         "en": "1–2 sentences — with a number",
         "id": "1–2 kalimat — dengan angka"
        }
       },
       {
        "h": {
         "en": "Learning",
         "id": "Pembelajaran"
        },
        "sub": {
         "en": "1 line — the principle you keep",
         "id": "1 baris — prinsip yang kamu bawa"
        }
       }
      ],
      "note": {
       "en": "60–150 words covers it. If the labels show, soften them — the framework organises truth, it never performs it.",
       "id": "60–150 kata sudah cukup. Jika labelnya terlihat, lenturkan — kerangka merapikan kebenaran, bukan mempertontonkannya."
      },
      "exhibit": {
       "en": "Exhibit 3: STAR-L — the narrative spine and its proportions",
       "id": "Peraga 3: STAR-L — tulang punggung narasi dan proporsinya"
      },
      "longdesc": {
       "en": "Diagram of STAR-L — the narrative spine and its proportions. It presents, in order: Context — 1 sentence — where and when; Challenge — 1 sentence — what made it hard; Action — The bulk — what YOU did, in sequence; Result — 1–2 sentences — with a number; Learning — 1 line — the principle you keep.",
       "id": "Diagram STAR-L — tulang punggung narasi dan proporsinya. Menyajikan, berurutan: Konteks — 1 kalimat — di mana dan kapan; Tantangan — 1 kalimat — apa yang membuatnya sulit; Tindakan — Porsi terbesar — apa yang KAMU lakukan, berurutan; Hasil — 1–2 kalimat — dengan angka; Pembelajaran — 1 baris — prinsip yang kamu bawa."
      }
     },
     "compare": [
      {
       "tag": {
        "en": "“What achievement are you most proud of?”",
        "id": "“Pencapaian apa yang paling kamu banggakan?”"
       },
       "weak": {
        "en": "I'm most proud of my final-year project. It was really challenging and we worked very hard as a team, and in the end it went well and the lecturers liked it.",
        "id": "Saya paling bangga dengan proyek tugas akhir. Sangat menantang dan kami bekerja sangat keras sebagai tim, dan akhirnya berjalan baik dan para dosen menyukainya."
       },
       "strong": {
        "en": "In my final year, our team's research app had zero users two months before the deadline. I took over user recruitment, partnered with three student communities, and ran weekly feedback cycles. We ended with 400 active users, and the project scored highest in our cohort. I learned that distribution is a feature — I now plan it from day one.",
        "id": "Di tahun terakhir, aplikasi riset tim kami punya nol pengguna dua bulan sebelum tenggat. Saya ambil alih perekrutan pengguna, menggandeng tiga komunitas mahasiswa, dan menjalankan siklus umpan balik mingguan. Kami berakhir dengan 400 pengguna aktif, dan proyek meraih nilai tertinggi di angkatan. Saya belajar bahwa distribusi adalah fitur — kini saya merencanakannya sejak hari pertama."
       },
       "why": {
        "en": "Same project, different machinery: one sentence of setup, first-person actions, a number, a learning. Nothing is invented — it is organised.",
        "id": "Proyek sama, mesin berbeda: satu kalimat latar, tindakan orang pertama, satu angka, satu pembelajaran. Tidak ada yang dikarang — hanya dirapikan."
       }
      }
     ],
     "tryit": {
      "qid": "bh21",
      "label": {
       "en": "Tell your proudest story, timed",
       "id": "Ceritakan kisah kebanggaanmu, dengan waktu"
      },
      "desc": {
       "en": "Run this exact question in the simulator — it will read your STAR beats and your landing.",
       "id": "Jalankan pertanyaan persis ini di simulator — ia akan membaca ketukan STAR dan pendaratanmu."
      }
     },
     "scenario": {
      "icon": "book",
      "img": "../../assets/bg/fg-stage-ascent.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat Dalam Sorotan"
      },
      "body": [
       {
        "en": "Sari has run operations for a family restaurant for two years and swears she “has no interview stories — it's just daily work.” Then a mentor asks: “Tell me about the worst Saturday.” Out comes a fully-formed story — a double-booked event, a supplier failure at noon, a decision to move the whole party forward an hour, and a customer who still writes to her. It was never a lack of stories. It was a lack of mining.",
        "id": "Sari mengelola operasional restoran keluarga selama dua tahun dan bersumpah ia “tidak punya kisah wawancara — itu hanya kerja harian.” Lalu seorang mentor bertanya: “Ceritakan Sabtu terburukmu.” Keluarlah kisah yang utuh — acara yang jadwalnya bentrok, pemasok gagal di tengah hari, keputusan memajukan seluruh acara satu jam, dan pelanggan yang sampai kini masih menulis padanya. Masalahnya tak pernah kekurangan kisah. Yang kurang adalah penambangan."
       },
       {
        "en": "This module gives you the mining protocol Sari used — and the STAR-L spine that turns what you find into answers interviewers write down.",
        "id": "Modul ini memberimu protokol penambangan yang dipakai Sari — dan tulang punggung STAR-L yang mengubah temuanmu menjadi jawaban yang dicatat pewawancara."
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "STAR-L",
        "id": "STAR-L"
       },
       "def": {
        "en": "Context → Challenge → Action → Result → Learning: the narrative spine for behavioral answers.",
        "id": "Konteks → Tantangan → Tindakan → Hasil → Pembelajaran: tulang punggung narasi jawaban perilaku."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Announcing the framework: “The Situation was… the Task was…”",
         "id": "Mengumumkan kerangkanya: “Situasinya adalah… Tugasnya adalah…”"
        },
        "fix": {
         "en": "Let STAR-L live under natural speech — the listener should feel structure, never see labels.",
         "id": "Biarkan STAR-L hidup di bawah tutur alami — pendengar merasakan struktur, tak pernah melihat label."
        }
       },
       {
        "h": {
         "en": "Spending a minute on context",
         "id": "Menghabiskan satu menit untuk konteks"
        },
        "fix": {
         "en": "One sentence of setup. If your first action verb hasn't arrived by second twenty, restart.",
         "id": "Latar satu kalimat. Jika kata kerja tindakan pertamamu belum muncul di detik kedua puluh, ulang dari awal."
        }
       },
       {
        "h": {
         "en": "Ending on the result and trailing off",
         "id": "Berakhir di hasil lalu menguap"
        },
        "fix": {
         "en": "Land the learning line — it is the sentence interviewers quote when they argue for you.",
         "id": "Daratkan kalimat pembelajaran — itulah kalimat yang dikutip pewawancara saat membelamu."
        }
       }
      ]
     }
    },
    {
     "n": "2.2",
     "title": {
      "en": "The 10 Universal Competency Categories",
      "id": "10 Kategori Kompetensi Universal"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Thousands of behavioral questions reduce to roughly ten competencies. Learn the ten, and no question is truly new — it is one of your tagged stories wearing different words. This lesson names each category, its signature question shapes, and what a strong answer must contain.",
      "id": "Ribuan pertanyaan perilaku menyusut menjadi kira-kira sepuluh kompetensi. Kuasai sepuluhnya, dan tidak ada pertanyaan yang benar-benar baru — ia hanyalah kisahmu yang tertanda, mengenakan kata-kata berbeda. Pelajaran ini menamai tiap kategori, bentuk pertanyaan khasnya, dan isi wajib jawaban yang kuat."
     },
     "objectives": [
      {
       "en": "Name the ten competency categories behind most behavioral questions.",
       "id": "Menyebutkan sepuluh kategori kompetensi di balik sebagian besar pertanyaan perilaku."
      },
      {
       "en": "Recognise which competency a question is probing regardless of its wording.",
       "id": "Mengenali kompetensi yang sedang diuji sebuah pertanyaan, apa pun redaksinya."
      },
      {
       "en": "Tag your own stories by the competencies they evidence.",
       "id": "Menandai kisah-kisahmu sendiri berdasarkan kompetensi yang dibuktikannya."
      }
     ],
     "takeaways": [
      {
       "en": "Every behavioral question is a competency probe wearing costume; identify the competency and retrieval becomes instant.",
       "id": "Setiap pertanyaan perilaku adalah uji kompetensi berkostum; kenali kompetensinya dan pemanggilan kisah menjadi seketika."
      },
      {
       "en": "One strong story usually evidences two or three competencies — tag it for all of them.",
       "id": "Satu kisah kuat biasanya membuktikan dua atau tiga kompetensi — tandai untuk semuanya."
      },
      {
       "en": "Coverage beats volume: eight stories covering ten categories outperform thirty untagged anecdotes.",
       "id": "Cakupan mengalahkan volume: delapan kisah yang mencakup sepuluh kategori mengungguli tiga puluh anekdot tanpa tanda."
      }
     ],
     "check": {
      "q": {
       "en": "“Tell me about a time you had to deliver bad news” is primarily probing:",
       "id": "“Ceritakan saat kamu harus menyampaikan kabar buruk” terutama menguji:"
      },
      "options": [
       {
        "en": "Technical depth in your domain",
        "id": "Kedalaman teknis di bidangmu"
       },
       {
        "en": "Salary expectations",
        "id": "Ekspektasi gaji"
       },
       {
        "en": "Communication and courage under discomfort",
        "id": "Komunikasi dan keberanian dalam ketidaknyamanan"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — the costume is “bad news”; the competency is candid communication when it costs something.",
       "id": "Benar — kostumnya “kabar buruk”; kompetensinya adalah komunikasi jujur saat ada harganya."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The ten",
        "id": "Sepuluhnya"
       },
       "body": {
        "en": "1 Leadership & influence. 2 Ownership & initiative. 3 Conflict & difficult people. 4 Resilience & failure. 5 Communication & persuasion. 6 Prioritisation under pressure. 7 Learning agility. 8 Judgment & decision-making. 9 Collaboration across differences. 10 Integrity & courage. Nearly every “tell me about a time…” lives in one of these rooms.",
        "id": "1 Kepemimpinan & pengaruh. 2 Kepemilikan & inisiatif. 3 Konflik & orang sulit. 4 Ketangguhan & kegagalan. 5 Komunikasi & persuasi. 6 Prioritisasi di bawah tekanan. 7 Kelincahan belajar. 8 Pertimbangan & pengambilan keputusan. 9 Kolaborasi lintas perbedaan. 10 Integritas & keberanian. Hampir setiap “ceritakan saat kamu…” tinggal di salah satu ruangan ini."
       }
      },
      {
       "h": {
        "en": "Hearing through the costume",
        "id": "Mendengar menembus kostum"
       },
       "body": {
        "en": "“Describe a time you exceeded expectations” is ownership. “Have you worked with someone difficult?” is conflict. “What would you do with two deadlines?” is prioritisation, even in hypothetical clothes. Train the reflex: on hearing any question, silently name the category first. The half-second of classification buys you the right story instead of the nearest one.",
        "id": "“Ceritakan saat kamu melampaui ekspektasi” adalah kepemilikan. “Pernah bekerja dengan orang sulit?” adalah konflik. “Bagaimana dengan dua tenggat bersamaan?” adalah prioritisasi, meski berbaju hipotetis. Latih refleksnya: begitu mendengar pertanyaan, sebut dulu kategorinya dalam hati. Setengah detik klasifikasi itu membelikanmu kisah yang tepat, bukan yang terdekat."
       }
      },
      {
       "h": {
        "en": "Tagging your library",
        "id": "Menandai perpustakaanmu"
       },
       "body": {
        "en": "Take each story you own and ask: which of the ten does this actually evidence? A product launch story might carry ownership, prioritisation and communication at once. Write the tags down. In the interview, retrieval works backward: category → tagged story → STAR-L. That pipeline, practised, is what composure under fire is made of.",
        "id": "Ambil tiap kisahmu dan tanyakan: yang mana dari sepuluh itu yang benar-benar dibuktikannya? Kisah peluncuran produk bisa memuat kepemilikan, prioritisasi, dan komunikasi sekaligus. Tuliskan tandanya. Dalam wawancara, pemanggilan bekerja mundur: kategori → kisah bertanda → STAR-L. Alur itulah, bila dilatih, bahan baku ketenangan di bawah tembakan."
       }
      }
     ],
     "diagram": {
      "type": "ring",
      "title": {
       "en": "The ten competency rooms",
       "id": "Sepuluh ruang kompetensi"
      },
      "items": [
       {
        "h": {
         "en": "Leadership & influence",
         "id": "Kepemimpinan & pengaruh"
        }
       },
       {
        "h": {
         "en": "Ownership & initiative",
         "id": "Kepemilikan & inisiatif"
        }
       },
       {
        "h": {
         "en": "Conflict",
         "id": "Konflik"
        }
       },
       {
        "h": {
         "en": "Resilience & failure",
         "id": "Ketangguhan & kegagalan"
        }
       },
       {
        "h": {
         "en": "Communication",
         "id": "Komunikasi"
        }
       },
       {
        "h": {
         "en": "Prioritisation",
         "id": "Prioritisasi"
        }
       },
       {
        "h": {
         "en": "Learning agility",
         "id": "Kelincahan belajar"
        }
       },
       {
        "h": {
         "en": "Judgment",
         "id": "Pertimbangan"
        }
       },
       {
        "h": {
         "en": "Collaboration",
         "id": "Kolaborasi"
        }
       },
       {
        "h": {
         "en": "Integrity & courage",
         "id": "Integritas & keberanian"
        }
       }
      ],
      "note": {
       "en": "Hear any behavioral question, silently name its room first — then retrieve the tagged story that lives there.",
       "id": "Dengar pertanyaan perilaku apa pun, sebut dulu ruangannya dalam hati — lalu panggil kisah bertanda yang tinggal di sana."
      },
      "exhibit": {
       "en": "Exhibit 4: The ten competency rooms",
       "id": "Peraga 4: Sepuluh ruang kompetensi"
      },
      "longdesc": {
       "en": "Diagram of The ten competency rooms. It presents, in order: Leadership & influence; Ownership & initiative; Conflict; Resilience & failure; Communication; Prioritisation; Learning agility; Judgment; Collaboration; Integrity & courage.",
       "id": "Diagram Sepuluh ruang kompetensi. Menyajikan, berurutan: Kepemimpinan & pengaruh; Kepemilikan & inisiatif; Konflik; Ketangguhan & kegagalan; Komunikasi; Prioritisasi; Kelincahan belajar; Pertimbangan; Kolaborasi; Integritas & keberanian."
      }
     },
     "checks": [
      {
       "q": {
        "en": "“Describe a time you had too much to do and too little time” lives in which room?",
        "id": "“Ceritakan saat pekerjaanmu terlalu banyak dan waktumu terlalu sedikit” tinggal di ruang mana?"
       },
       "options": [
        {
         "en": "Prioritisation under pressure",
         "id": "Prioritisasi di bawah tekanan"
        },
        {
         "en": "Integrity & courage",
         "id": "Integritas & keberanian"
        },
        {
         "en": "Learning agility",
         "id": "Kelincahan belajar"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — overload questions probe your ranking rule and what you consciously dropped, not your stamina.",
        "id": "Benar — pertanyaan kelebihan beban menguji aturan pengurutanmu dan apa yang sengaja kamu lepas, bukan daya tahanmu."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "STAR-L",
        "id": "STAR-L"
       },
       "def": {
        "en": "Context → Challenge → Action → Result → Learning: the narrative spine for behavioral answers.",
        "id": "Konteks → Tantangan → Tindakan → Hasil → Pembelajaran: tulang punggung narasi jawaban perilaku."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Kekonkretan yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai rubrik."
       }
      },
      {
       "term": {
        "en": "influence",
        "id": "pengaruh"
       },
       "def": {
        "en": "Moving people and decisions without formal authority — evidence of leadership before the title arrives.",
        "id": "Menggerakkan orang dan keputusan tanpa otoritas formal — bukti kepemimpinan sebelum jabatannya datang."
       }
      }
     ]
    },
    {
     "n": "2.3",
     "title": {
      "en": "Story Mining from Everyday Experience",
      "id": "Menambang Kisah dari Pengalaman Sehari-hari"
     },
     "kind": "interactive",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "“I don't have stories” is almost never true — it is a retrieval failure, not an experience failure. Campus projects, part-time shifts, family logistics, community work: anywhere there was tension and a decision, there is a story. This lesson is the mining protocol.",
      "id": "“Saya tidak punya kisah” hampir tidak pernah benar — itu kegagalan pemanggilan, bukan kegagalan pengalaman. Proyek kampus, kerja paruh waktu, urusan keluarga, kerja komunitas: di mana pun ada ketegangan dan keputusan, di situ ada kisah. Pelajaran ini adalah protokol penambangannya."
     },
     "objectives": [
      {
       "en": "Generate a raw list of tension moments from ordinary life and work.",
       "id": "Menyusun daftar mentah momen ketegangan dari kehidupan dan kerja biasa."
      },
      {
       "en": "Filter the list into stories with decisions, results and learnings.",
       "id": "Menyaring daftar itu menjadi kisah dengan keputusan, hasil, dan pembelajaran."
      },
      {
       "en": "Build the eight-story core library that covers all ten competencies.",
       "id": "Membangun perpustakaan inti delapan kisah yang mencakup sepuluh kompetensi."
      }
     ],
     "takeaways": [
      {
       "en": "Stories hide where there was tension plus a decision — dig at those coordinates.",
       "id": "Kisah bersembunyi di titik ketegangan plus keputusan — galilah pada koordinat itu."
      },
      {
       "en": "Small and true beats big and vague: a well-run bazaar stall can out-interview an inflated internship.",
       "id": "Kecil dan benar mengalahkan besar dan samar: lapak bazar yang dikelola baik bisa mengalahkan magang yang digelembungkan."
      },
      {
       "en": "Eight polished, tagged stories are a complete arsenal for almost any interview.",
       "id": "Delapan kisah terpoles dan tertanda adalah persenjataan lengkap untuk hampir semua wawancara."
      }
     ],
     "check": {
      "q": {
       "en": "The best signal that an experience contains an interview story is:",
       "id": "Sinyal terbaik bahwa sebuah pengalaman mengandung kisah wawancara adalah:"
      },
      "options": [
       {
        "en": "There was tension, and you made a decision inside it",
        "id": "Ada ketegangan, dan kamu mengambil keputusan di dalamnya"
       },
       {
        "en": "It happened at a famous company",
        "id": "Terjadi di perusahaan terkenal"
       },
       {
        "en": "It lasted longer than six months",
        "id": "Berlangsung lebih dari enam bulan"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — prestige and duration are irrelevant; tension plus decision plus consequence is the anatomy of a story.",
       "id": "Benar — prestise dan durasi tidak relevan; ketegangan plus keputusan plus konsekuensi adalah anatomi sebuah kisah."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Where stories actually live",
        "id": "Tempat kisah sebenarnya tinggal"
       },
       "body": {
        "en": "Group assignments where someone vanished. The event that nearly fell apart. The shift where two customers needed you at once. Teaching a sibling. Organising a family move. None of these sound like “leadership experience” — all of them can be, if there was a moment you saw the problem, chose an action, and something changed because of you.",
        "id": "Tugas kelompok yang anggotanya menghilang. Acara yang nyaris bubar. Sif kerja saat dua pelanggan membutuhkanmu bersamaan. Mengajari adik. Mengatur kepindahan keluarga. Tak satu pun terdengar seperti “pengalaman kepemimpinan” — semuanya bisa menjadi itu, jika ada momen kamu melihat masalah, memilih tindakan, dan sesuatu berubah karenamu."
       }
      },
      {
       "h": {
        "en": "The mining protocol",
        "id": "Protokol penambangan"
       },
       "body": {
        "en": "Step one: list twenty moments of tension from the last three years — one line each, no filtering. Step two: for each, ask “did I decide something?” Cut those where you only witnessed. Step three: ask “what changed, and can I say it concretely?” Keep the survivors. Step four: tag each with its competencies and write the STAR-L skeleton. Most people end with eight to twelve — a full library.",
        "id": "Langkah satu: daftar dua puluh momen ketegangan dari tiga tahun terakhir — satu baris tiap momen, tanpa saring. Langkah dua: untuk masing-masing, tanya “apakah aku memutuskan sesuatu?” Coret yang kamu hanya menonton. Langkah tiga: tanya “apa yang berubah, dan bisakah kusebut konkret?” Simpan yang lolos. Langkah empat: tandai kompetensinya dan tulis kerangka STAR-L. Kebanyakan orang berakhir dengan delapan sampai dua belas — perpustakaan lengkap."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Step 1 · The raw dig",
        "id": "Langkah 1 · Galian mentah"
       },
       "body": {
        "en": "Set a timer for ten minutes. Write twenty one-line moments of tension from study, work, organisations, family, community. No judging, no filtering — volume first.",
        "id": "Pasang pewaktu sepuluh menit. Tulis dua puluh momen ketegangan satu-baris dari kuliah, kerja, organisasi, keluarga, komunitas. Tanpa menilai, tanpa menyaring — volume dulu."
       },
       "debrief": {
        "en": "If you stalled before twenty, widen the definition of tension: any moment you felt your pulse — a deadline, a disagreement, a thing about to fail — qualifies. The list is ore, not jewellery. Nobody sees it but you.",
        "id": "Jika macet sebelum dua puluh, perlebar definisi ketegangan: momen apa pun saat denyutmu terasa — tenggat, beda pendapat, sesuatu yang nyaris gagal — memenuhi syarat. Daftar ini bijih, bukan perhiasan. Tak ada yang melihatnya selain kamu."
       }
      },
      {
       "h": {
        "en": "Step 2 · The decision filter",
        "id": "Langkah 2 · Saringan keputusan"
       },
       "body": {
        "en": "Cross out every line where you only observed the tension. Keep lines where you chose something: spoke up, reorganised, took over, let go, asked for help.",
        "id": "Coret setiap baris di mana kamu hanya mengamati ketegangan. Simpan baris di mana kamu memilih sesuatu: bersuara, menata ulang, mengambil alih, melepaskan, meminta bantuan."
       },
       "debrief": {
        "en": "A story needs an agent. “Our team almost missed the deadline” is scenery until it becomes “so I froze the scope and renegotiated the deliverable”. If a crossed-out moment still stings, look again — passivity you regret can become an honest failure story with a real learning.",
        "id": "Kisah butuh pelaku. “Tim kami nyaris terlambat” hanyalah pemandangan sampai menjadi “maka saya bekukan lingkupnya dan negosiasi ulang hasilnya”. Jika momen yang tercoret masih menyengat, tengok lagi — kepasifan yang kamu sesali bisa menjadi kisah kegagalan jujur dengan pembelajaran nyata."
       }
      },
      {
       "h": {
        "en": "Step 3 · Result and tag",
        "id": "Langkah 3 · Hasil dan tanda"
       },
       "body": {
        "en": "For each survivor, write what changed — with a number if truthful (time saved, people served, score, revenue, errors avoided) — then tag one to three of the ten competencies.",
        "id": "Untuk tiap kisah yang lolos, tulis apa yang berubah — dengan angka bila benar (waktu terhemat, orang terlayani, skor, pendapatan, kesalahan terhindar) — lalu tandai satu sampai tiga dari sepuluh kompetensi."
       },
       "debrief": {
        "en": "No number? Approximate honestly (“about a third faster”) or use a concrete non-number (“the client renewed”). Check coverage across your tags: gaps in conflict, failure or integrity are the ones interviews find. Mine specifically for those.",
        "id": "Tidak ada angka? Perkirakan dengan jujur (“sekitar sepertiga lebih cepat”) atau pakai kekonkretan non-angka (“klien memperpanjang kontrak”). Periksa cakupan tandamu: celah di konflik, kegagalan, atau integritas adalah yang paling sering ditemukan wawancara. Tambang khusus untuk itu."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "“I have no leadership experience” — mined",
        "id": "“Saya tidak punya pengalaman memimpin” — hasil tambang"
       },
       "weak": {
        "en": "Honestly, I haven't had a chance to lead anything yet — I've mostly just been a member in my organisations.",
        "id": "Jujur, saya belum sempat memimpin apa pun — di organisasi saya kebanyakan hanya anggota."
       },
       "strong": {
        "en": "My clearest leadership moment wasn't a title. Our bazaar stall was losing money on day one, and the committee had gone quiet. I called the six of us together that evening, we cut the menu from twelve items to four, and I took over supplier calls myself. We closed the three days at a profit — small, but ours. Leading, I learned, starts with calling the meeting nobody else wants to call.",
        "id": "Momen memimpin saya yang paling jelas bukanlah jabatan. Lapak bazar kami merugi di hari pertama, dan panitia mendadak diam. Malam itu saya kumpulkan kami berenam, kami pangkas menu dari dua belas jadi empat, dan saya ambil alih telepon ke pemasok. Tiga hari itu kami tutup dengan laba — kecil, tapi milik kami. Memimpin, saya belajar, dimulai dari mengadakan rapat yang tidak ingin diadakan siapa pun."
       },
       "why": {
        "en": "The experience existed all along — mining found it. Tension plus decision plus consequence, told with ownership; no title required.",
        "id": "Pengalamannya ada sejak dulu — penambangan yang menemukannya. Ketegangan plus keputusan plus konsekuensi, dituturkan dengan kepemilikan; tanpa perlu jabatan."
       }
      }
     ],
     "tryit": {
      "qid": "bh08",
      "label": {
       "en": "Drill an ownership story from ordinary life",
       "id": "Latih kisah kepemilikan dari kehidupan biasa"
      },
      "desc": {
       "en": "“Beyond your job description” — answer it with something mined, not something grand.",
       "id": "“Melampaui deskripsi pekerjaan” — jawab dengan hasil tambangan, bukan yang megah."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "STAR-L",
        "id": "STAR-L"
       },
       "def": {
        "en": "Context → Challenge → Action → Result → Learning: the narrative spine for behavioral answers.",
        "id": "Konteks → Tantangan → Tindakan → Hasil → Pembelajaran: tulang punggung narasi jawaban perilaku."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Only counting formal jobs as experience",
         "id": "Hanya menghitung pekerjaan formal sebagai pengalaman"
        },
        "fix": {
         "en": "Mine campus, family, community and part-time life: tension plus decision plus consequence is a story anywhere.",
         "id": "Tambang kampus, keluarga, komunitas, dan kerja paruh waktu: ketegangan plus keputusan plus konsekuensi adalah kisah di mana pun."
        }
       },
       {
        "h": {
         "en": "Inflating small stories into epics",
         "id": "Menggelembungkan kisah kecil jadi epik"
        },
        "fix": {
         "en": "Small and true beats big and vague — one follow-up question destroys inflation.",
         "id": "Kecil dan benar mengalahkan besar dan samar — satu pertanyaan lanjutan menghancurkan gelembung."
        }
       }
      ]
     }
    },
    {
     "n": "2.4",
     "title": {
      "en": "Calibrating Stories to Interview Type and Seniority",
      "id": "Kalibrasi Kisah untuk Jenis Wawancara dan Senioritas"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "One story, many altitudes. The same project is told as execution detail to a peer, as decision-making to a manager, and as business impact to an executive. Calibration — not new stories — is how a small library covers every room you will enter.",
      "id": "Satu kisah, banyak ketinggian. Proyek yang sama dituturkan sebagai detail eksekusi kepada rekan, sebagai pengambilan keputusan kepada manajer, dan sebagai dampak bisnis kepada eksekutif. Kalibrasi — bukan kisah baru — adalah cara perpustakaan kecil mencakup semua ruangan yang akan kamu masuki."
     },
     "objectives": [
      {
       "en": "Retell one story at three altitudes: execution, decision, impact.",
       "id": "Menuturkan ulang satu kisah pada tiga ketinggian: eksekusi, keputusan, dampak."
      },
      {
       "en": "Match story emphasis to HR, technical, user and final formats.",
       "id": "Menyesuaikan penekanan kisah dengan format HR, teknis, user, dan final."
      },
      {
       "en": "Adjust ownership language up and down seniority honestly.",
       "id": "Menyesuaikan bahasa kepemilikan naik-turun senioritas secara jujur."
      }
     ],
     "takeaways": [
      {
       "en": "Peers want your hands, managers want your choices, executives want the consequences.",
       "id": "Rekan ingin tanganmu, manajer ingin pilihanmu, eksekutif ingin konsekuensinya."
      },
      {
       "en": "Calibration changes emphasis, never facts — inflation is discovered in follow-ups.",
       "id": "Kalibrasi mengubah penekanan, tidak pernah fakta — penggelembungan terbongkar di pertanyaan lanjutan."
      },
      {
       "en": "Prepare the three altitudes of your two best stories before any onsite loop.",
       "id": "Siapkan tiga ketinggian dari dua kisah terbaikmu sebelum rangkaian wawancara onsite mana pun."
      }
     ],
     "check": {
      "q": {
       "en": "Telling a story to an executive, you should lead with:",
       "id": "Menuturkan kisah kepada eksekutif, kamu sebaiknya membuka dengan:"
      },
      "options": [
       {
        "en": "The tools and techniques you used",
        "id": "Alat dan teknik yang kamu gunakan"
       },
       {
        "en": "The outcome and its business consequence, then decisions on request",
        "id": "Hasil beserta konsekuensi bisnisnya, lalu keputusan bila diminta"
       },
       {
        "en": "Every step of the process in chronological order",
        "id": "Setiap langkah proses secara kronologis"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — executives buy consequences first. The chronology exists if they ask; most will not.",
       "id": "Benar — eksekutif membeli konsekuensi lebih dulu. Kronologi tersedia jika diminta; kebanyakan tidak akan meminta."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Three altitudes of one story",
        "id": "Tiga ketinggian satu kisah"
       },
       "body": {
        "en": "Execution altitude: the concrete how — tools, sequences, obstacles, hours. Decision altitude: the forks — options you saw, why you chose, what you traded. Impact altitude: what it meant — money, time, risk, people. All three are the same true story. Practising the shifts takes minutes and multiplies your library by three.",
        "id": "Ketinggian eksekusi: cara konkret — alat, urutan, hambatan, jam kerja. Ketinggian keputusan: persimpangan — opsi yang kamu lihat, alasan memilih, apa yang dikorbankan. Ketinggian dampak: maknanya — uang, waktu, risiko, orang. Ketiganya kisah benar yang sama. Melatih perpindahannya butuh hitungan menit dan melipatgandakan perpustakaanmu tiga kali."
       }
      },
      {
       "h": {
        "en": "Calibrating to format",
        "id": "Kalibrasi ke format"
       },
       "body": {
        "en": "HR hears the same story as motivation and reliability evidence. Technical rooms want the method inside it. User rooms want the collaboration scenes — who you worked with and how it felt to be beside you. Finals want the judgment and the arc. Before each round, ask: which slice of my story does this room buy?",
        "id": "HR mendengar kisah yang sama sebagai bukti motivasi dan keandalan. Ruang teknis ingin metode di dalamnya. Ruang user ingin adegan kolaborasi — dengan siapa kamu bekerja dan bagaimana rasanya berada di sampingmu. Final ingin pertimbangan dan lintasannya. Sebelum tiap babak, tanya: irisan kisahku yang mana yang dibeli ruangan ini?"
       }
      },
      {
       "h": {
        "en": "Seniority honesty",
        "id": "Kejujuran senioritas"
       },
       "body": {
        "en": "Entry-level candidates over-claim (“I led the entire project”) and get dismantled by one follow-up. Senior candidates under-slice (“the team delivered”) and vanish from their own story. Calibrate ownership to the truth: name exactly what was yours, credit the rest cleanly. Precision about your own boundary is itself a senior signal.",
        "id": "Kandidat pemula menggelembungkan klaim (“saya memimpin seluruh proyek”) dan runtuh oleh satu pertanyaan lanjutan. Kandidat senior mengiris terlalu tipis (“tim yang mengerjakan”) dan lenyap dari kisahnya sendiri. Kalibrasikan kepemilikan pada kebenaran: sebut persis bagianmu, beri kredit sisanya dengan bersih. Presisi tentang batasmu sendiri justru sinyal senioritas."
       }
      }
     ],
     "diagram": {
      "type": "ladder",
      "title": {
       "en": "One story, three altitudes",
       "id": "Satu kisah, tiga ketinggian"
      },
      "items": [
       {
        "h": {
         "en": "Execution",
         "id": "Eksekusi"
        },
        "sub": {
         "en": "Tools, sequence, obstacles — for peers",
         "id": "Alat, urutan, hambatan — untuk rekan"
        }
       },
       {
        "h": {
         "en": "Decision",
         "id": "Keputusan"
        },
        "sub": {
         "en": "Options, criteria, trade-offs — for managers",
         "id": "Opsi, kriteria, trade-off — untuk manajer"
        }
       },
       {
        "h": {
         "en": "Impact",
         "id": "Dampak"
        },
        "sub": {
         "en": "Money, time, risk, people — for executives",
         "id": "Uang, waktu, risiko, orang — untuk eksekutif"
        }
       }
      ],
      "note": {
       "en": "Practising the shifts takes minutes and multiplies your library by three. Calibration changes emphasis — never facts.",
       "id": "Melatih perpindahannya butuh hitungan menit dan melipatgandakan perpustakaanmu tiga kali. Kalibrasi mengubah penekanan — tidak pernah fakta."
      },
      "exhibit": {
       "en": "Exhibit 5: One story, three altitudes",
       "id": "Peraga 5: Satu kisah, tiga ketinggian"
      },
      "longdesc": {
       "en": "Diagram of One story, three altitudes. It presents, in order: Execution — Tools, sequence, obstacles — for peers; Decision — Options, criteria, trade-offs — for managers; Impact — Money, time, risk, people — for executives.",
       "id": "Diagram Satu kisah, tiga ketinggian. Menyajikan, berurutan: Eksekusi — Alat, urutan, hambatan — untuk rekan; Keputusan — Opsi, kriteria, trade-off — untuk manajer; Dampak — Uang, waktu, risiko, orang — untuk eksekutif."
      }
     },
     "tryit": {
      "qid": "bh04",
      "label": {
       "en": "Tell one story at manager altitude",
       "id": "Tuturkan satu kisah di ketinggian manajer"
      },
      "desc": {
       "en": "Answer the impossible-deadline question leading with the trade-off you chose, not the hours you worked.",
       "id": "Jawab pertanyaan tenggat-mustahil dengan membuka pada trade-off yang kamu pilih, bukan jam kerja yang kamu habiskan."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "follow-up",
        "id": "pertanyaan lanjutan"
       },
       "def": {
        "en": "The probing question after your answer — where inflated claims collapse and honest depth scores.",
        "id": "Pertanyaan pengejar setelah jawabanmu — tempat klaim gelembung runtuh dan kedalaman jujur bernilai."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Kekonkretan yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai rubrik."
       }
      }
     ]
    }
   ]
  },
  {
   "num": 3,
   "title": {
    "en": "Competency Framework Intelligence",
    "id": "Kecerdasan Kerangka Kompetensi"
   },
   "overview": {
    "en": "Interviews are scored, not felt. Behind most professional interviews sits a rubric: competencies, anchors, evidence standards. This module teaches you to see the scoring machinery — how interviewers grade, how companies publish their values as testable behaviours, how job descriptions encode the rubric, and how to map your story library onto the exact framework you will face.",
    "id": "Wawancara itu dinilai, bukan dirasakan. Di balik kebanyakan wawancara profesional ada rubrik: kompetensi, jangkar penilaian, standar bukti. Modul ini mengajarkanmu melihat mesin penilaiannya — cara pewawancara memberi skor, cara perusahaan menerbitkan nilai-nilainya sebagai perilaku yang bisa diuji, cara deskripsi pekerjaan menyandikan rubrik, dan cara memetakan perpustakaan kisahmu ke kerangka persis yang akan kamu hadapi."
   },
   "outcome": {
    "en": "By the end of this module you can reconstruct the likely scorecard for any role from public materials, and enter the interview knowing which of your stories answers which rubric line.",
    "id": "Di akhir modul ini kamu bisa merekonstruksi scorecard yang mungkin dipakai untuk peran apa pun dari materi publik, dan memasuki wawancara sambil tahu kisah mana menjawab baris rubrik yang mana."
   },
   "lessons": [
    {
     "n": "3.1",
     "title": {
      "en": "How Interviewers Score You",
      "id": "Cara Pewawancara Memberi Skor"
     },
     "kind": "reading",
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Structured interviews grade each competency on anchored scales, demand evidence over impressions, and pool scores in a debrief. Unstructured ones approximate the same thing badly. Either way, understanding the scoring changes how you answer: you are feeding a rubric, one competency at a time.",
      "id": "Wawancara terstruktur menilai tiap kompetensi pada skala berjangkar, menuntut bukti alih-alih kesan, dan menggabungkan skor dalam debrief. Yang tidak terstruktur meniru hal yang sama dengan buruk. Apa pun itu, memahami penilaian mengubah caramu menjawab: kamu sedang mengisi rubrik, satu kompetensi pada satu waktu."
     },
     "objectives": [
      {
       "en": "Describe anchored scoring and what separates a 3 from a 5.",
       "id": "Menjelaskan penilaian berjangkar dan pembeda skor 3 dari 5."
      },
      {
       "en": "Explain why interviewers push for specifics — and feed them willingly.",
       "id": "Menjelaskan mengapa pewawancara mendesak hal spesifik — dan memberikannya dengan sukarela."
      },
      {
       "en": "Answer so that your best lines survive into the debrief notes.",
       "id": "Menjawab sedemikian rupa sehingga kalimat terbaikmu bertahan sampai catatan debrief."
      }
     ],
     "takeaways": [
      {
       "en": "A 3 shows competence; a 5 shows competence plus scale, initiative or learning — aim your evidence there.",
       "id": "Skor 3 menunjukkan kompeten; skor 5 menunjukkan kompeten plus skala, inisiatif, atau pembelajaran — arahkan buktimu ke sana."
      },
      {
       "en": "“Give me a specific example” is the rubric talking. Specifics are the currency.",
       "id": "“Beri contoh spesifik” adalah suara rubrik. Kekonkretan adalah mata uangnya."
      },
      {
       "en": "Your interview outcome is the sum of quotable evidence, not the average of vibes.",
       "id": "Hasil wawancaramu adalah jumlah bukti yang bisa dikutip, bukan rata-rata kesan."
      }
     ],
     "check": {
      "q": {
       "en": "Interviewers keep asking for specific examples because:",
       "id": "Pewawancara terus meminta contoh spesifik karena:"
      },
      "options": [
       {
        "en": "They doubt everything you say by default",
        "id": "Mereka meragukan semua ucapanmu sejak awal"
       },
       {
        "en": "They are trying to fill the time",
        "id": "Mereka sedang mengisi waktu"
       },
       {
        "en": "Rubrics require evidence, and only specifics count as evidence",
        "id": "Rubrik menuntut bukti, dan hanya hal spesifik yang terhitung bukti"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — a claim without an example cannot be scored. The push for specifics is the system working.",
       "id": "Benar — klaim tanpa contoh tidak bisa dinilai. Desakan akan hal spesifik adalah sistem yang sedang bekerja."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Anchors: what a 5 actually requires",
        "id": "Jangkar: apa yang sebenarnya dituntut skor 5"
       },
       "body": {
        "en": "A typical anchored scale reads: 1 — no evidence; 3 — clear example of the competency executed well; 5 — the example plus something beyond: unusual scale, self-started initiative, or a visible learning applied later. Most candidates aim at 3 without knowing it. Once you know the 5-anchor exists, you can build answers that reach for it honestly.",
        "id": "Skala berjangkar yang lazim berbunyi: 1 — tanpa bukti; 3 — contoh jelas kompetensi yang dijalankan baik; 5 — contoh itu plus sesuatu yang lebih: skala tak biasa, inisiatif yang dimulai sendiri, atau pembelajaran yang tampak diterapkan kemudian. Kebanyakan kandidat membidik 3 tanpa sadar. Begitu tahu jangkar 5 itu ada, kamu bisa membangun jawaban yang menggapainya dengan jujur."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "The debrief is the real interview",
        "id": "Debrief adalah wawancara yang sesungguhnya"
       },
       "body": {
        "en": "After the loop, interviewers meet and argue from notes. Strong hires have champions with quotes: “She said she cut onboarding from six weeks to two — here is how.” Give every interviewer at least one line worth championing: concrete, numbered, repeatable in a meeting where you are not present to help.",
        "id": "Setelah rangkaian usai, para pewawancara rapat dan berdebat dari catatan. Kandidat kuat punya pembela dengan kutipan: “Dia bilang memangkas onboarding dari enam minggu jadi dua — begini caranya.” Beri setiap pewawancara minimal satu kalimat yang layak dibela: konkret, berangka, dapat diulang dalam rapat yang tidak kamu hadiri untuk membantu."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "Unstructured rooms still keep score",
        "id": "Ruang tak terstruktur tetap menghitung"
       },
       "body": {
        "en": "Some interviews feel like chats — no scorecard visible. The scoring still happens, just informally and after the fact, from memory. This makes structure and memorability more important for you, not less: in an unstructured room, whatever the interviewer can recall an hour later IS your score.",
        "id": "Sebagian wawancara terasa seperti obrolan — tanpa scorecard terlihat. Penilaian tetap terjadi, hanya informal dan belakangan, dari ingatan. Ini membuat struktur dan daya ingat justru makin penting bagimu: di ruang tak terstruktur, apa pun yang bisa diingat pewawancara sejam kemudian ADALAH skormu."
       },
       "icon": "target"
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The anchored scale — what separates 3 from 5",
       "id": "Skala berjangkar — pembeda 3 dari 5"
      },
      "items": [
       {
        "h": {
         "en": "1 · No evidence",
         "id": "1 · Tanpa bukti"
        },
        "sub": {
         "en": "Claims without an example",
         "id": "Klaim tanpa contoh"
        }
       },
       {
        "h": {
         "en": "3 · Competent",
         "id": "3 · Kompeten"
        },
        "sub": {
         "en": "One clear example, executed well",
         "id": "Satu contoh jelas, dijalankan baik"
        }
       },
       {
        "h": {
         "en": "5 · Exceptional",
         "id": "5 · Istimewa"
        },
        "sub": {
         "en": "The example PLUS scale, initiative, or a learning applied later",
         "id": "Contoh itu PLUS skala, inisiatif, atau pembelajaran yang diterapkan"
        }
       }
      ],
      "note": {
       "en": "Most candidates aim at 3 without knowing it. Knowing the 5-anchor exists lets you reach for it honestly.",
       "id": "Kebanyakan kandidat membidik 3 tanpa sadar. Mengetahui jangkar 5 ada membuatmu bisa menggapainya dengan jujur."
      },
      "exhibit": {
       "en": "Exhibit 6: The anchored scale — what separates 3 from 5",
       "id": "Peraga 6: Skala berjangkar — pembeda 3 dari 5"
      },
      "longdesc": {
       "en": "Diagram of The anchored scale — what separates 3 from 5. It presents, in order: 1 · No evidence — Claims without an example; 3 · Competent — One clear example, executed well; 5 · Exceptional — The example PLUS scale, initiative, or a learning applied later.",
       "id": "Diagram Skala berjangkar — pembeda 3 dari 5. Menyajikan, berurutan: 1 · Tanpa bukti — Klaim tanpa contoh; 3 · Kompeten — Satu contoh jelas, dijalankan baik; 5 · Istimewa — Contoh itu PLUS skala, inisiatif, atau pembelajaran yang diterapkan."
      }
     },
     "checks": [
      {
       "q": {
        "en": "To move an answer from a 3 to a 5, add:",
        "id": "Untuk menaikkan jawaban dari 3 ke 5, tambahkan:"
       },
       "options": [
        {
         "en": "Scale, self-started initiative, or a visible later application of the learning",
         "id": "Skala, inisiatif mandiri, atau penerapan nyata pembelajarannya kemudian"
        },
        {
         "en": "More adjectives about how hard it was",
         "id": "Lebih banyak kata sifat tentang betapa sulitnya"
        },
        {
         "en": "A longer description of the context",
         "id": "Deskripsi konteks yang lebih panjang"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — the 5-anchor asks for something beyond competent execution: reach, ownership, or growth made visible.",
        "id": "Benar — jangkar 5 meminta sesuatu di atas eksekusi kompeten: jangkauan, kepemilikan, atau pertumbuhan yang terlihat."
       }
      }
     ],
     "scenario": {
      "icon": "target",
      "img": "../../assets/bg/stage-exploration.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat Dalam Sorotan"
      },
      "body": [
       {
        "en": "Dimas prints the product-analyst JD he wants and reads it twice with a highlighter. “Stakeholder” appears four times. “SQL” appears once, in the last bullet. His friend spent the week grinding SQL exercises; Dimas spends it polishing two stakeholder stories with numbers. In the interview, four of seven questions are about working across teams. Same JD — two very different preparations, because only one of them decoded it.",
        "id": "Dimas mencetak JD product analyst incarannya dan membacanya dua kali dengan stabilo. “Stakeholder” muncul empat kali. “SQL” muncul sekali, di butir terakhir. Temannya menghabiskan sepekan menggarap latihan SQL; Dimas memakainya memoles dua kisah pemangku kepentingan dengan angka. Dalam wawancara, empat dari tujuh pertanyaan tentang kerja lintas tim. JD yang sama — dua persiapan yang sangat berbeda, karena hanya satu yang menerjemahkannya."
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "debrief",
        "id": "debrief"
       },
       "def": {
        "en": "The meeting after the interview loop where interviewers pool notes and argue the hire decision — without you in the room.",
        "id": "Rapat setelah rangkaian wawancara tempat para pewawancara menggabungkan catatan dan memperdebatkan keputusan rekrut — tanpa kehadiranmu."
       }
      },
      {
       "term": {
        "en": "scorecard",
        "id": "scorecard"
       },
       "def": {
        "en": "A structured rubric interviewers fill per competency, usually on an anchored 1–5 scale.",
        "id": "Rubrik terstruktur yang diisi pewawancara per kompetensi, biasanya pada skala berjangkar 1–5."
       }
      },
      {
       "term": {
        "en": "competency",
        "id": "kompetensi"
       },
       "def": {
        "en": "A capability a role requires — leadership, prioritisation, judgment — that interviews probe with behavioral evidence.",
        "id": "Kapabilitas yang dituntut sebuah peran — kepemimpinan, prioritisasi, pertimbangan — yang diuji wawancara lewat bukti perilaku."
       }
      },
      {
       "term": {
        "en": "rubric",
        "id": "rubrik"
       },
       "def": {
        "en": "The written standard an answer is scored against — criteria plus what each level of quality looks like.",
        "id": "Standar tertulis tempat jawaban dinilai — kriteria plus wujud tiap tingkat kualitasnya."
       }
      }
     ]
    },
    {
     "n": "3.2",
     "title": {
      "en": "Reading Company-Specific Frameworks",
      "id": "Membaca Kerangka Spesifik Perusahaan"
     },
     "kind": "slides",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Many companies publish their values, principles or competency language publicly. Those pages are not wall decoration — they are the interview rubric in plain sight. This deck teaches you to find them, translate value-words into testable behaviours, and prepare stories that speak the company's own language.",
      "id": "Banyak perusahaan menerbitkan nilai, prinsip, atau bahasa kompetensinya secara publik. Halaman-halaman itu bukan hiasan dinding — itulah rubrik wawancara yang terpampang. Dek ini mengajarkan cara menemukannya, menerjemahkan kata-kata nilai menjadi perilaku yang bisa diuji, dan menyiapkan kisah yang berbicara dalam bahasa perusahaan itu sendiri."
     },
     "objectives": [
      {
       "en": "Locate a company's published values or principles in minutes.",
       "id": "Menemukan nilai atau prinsip terpublikasi sebuah perusahaan dalam hitungan menit."
      },
      {
       "en": "Translate a value-word into the behaviour an interviewer would probe.",
       "id": "Menerjemahkan kata nilai menjadi perilaku yang akan diuji pewawancara."
      },
      {
       "en": "Select stories that evidence the company's specific language.",
       "id": "Memilih kisah yang membuktikan bahasa spesifik perusahaan itu."
      }
     ],
     "takeaways": [
      {
       "en": "Published values are the rubric in public; read them the week before, not the night before.",
       "id": "Nilai terpublikasi adalah rubrik di ruang publik; baca sepekan sebelumnya, bukan semalam sebelumnya."
      },
      {
       "en": "Translate every value-word into a question: “when did I actually behave like that?”",
       "id": "Terjemahkan tiap kata nilai menjadi pertanyaan: “kapan aku benar-benar berperilaku seperti itu?”"
      },
      {
       "en": "Speak your story in their vocabulary once — naturally — and the mapping does itself.",
       "id": "Ucapkan kisahmu dalam kosakata mereka sekali saja — secara alami — dan pemetaannya terjadi sendiri."
      }
     ],
     "check": {
      "q": {
       "en": "A company lists “bias for action” among its principles. Your preparation move:",
       "id": "Perusahaan mencantumkan “bias for action” dalam prinsipnya. Langkah persiapanmu:"
      },
      "options": [
       {
        "en": "Ready a story where you moved before certainty and it was the right call",
        "id": "Siapkan kisah saat kamu bergerak sebelum kepastian dan itu keputusan tepat"
       },
       {
        "en": "Memorise the principle's exact wording to recite in the interview",
        "id": "Hafalkan redaksi persis prinsip itu untuk dibacakan saat wawancara"
       },
       {
        "en": "Assume it is marketing language with no interview relevance",
        "id": "Anggap itu bahasa pemasaran tanpa relevansi wawancara"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — the principle predicts the probe. Evidence beats recitation.",
       "id": "Benar — prinsip meramalkan pertanyaannya. Bukti mengalahkan hafalan."
      }
     },
     "slides": [
      {
       "h": {
        "en": "The rubric hides in public",
        "id": "Rubrik bersembunyi di ruang publik"
       },
       "points": [
        {
         "en": "Careers pages, annual reports, founder letters and published principles carry the competency language interviews use.",
         "id": "Halaman karier, laporan tahunan, surat pendiri, dan prinsip terpublikasi memuat bahasa kompetensi yang dipakai wawancara."
        },
        {
         "en": "If a company repeats a word — ownership, rigour, speed, service — expect a question shaped like it.",
         "id": "Jika perusahaan mengulang satu kata — kepemilikan, ketelitian, kecepatan, pelayanan — harapkan pertanyaan berbentuk kata itu."
        }
       ]
      },
      {
       "h": {
        "en": "Value-word → behaviour → probe",
        "id": "Kata nilai → perilaku → pertanyaan uji"
       },
       "points": [
        {
         "en": "“Customer obsession” becomes: tell me about a time you sacrificed convenience for a user.",
         "id": "“Customer obsession” menjadi: ceritakan saat kamu mengorbankan kenyamanan demi pengguna."
        },
        {
         "en": "“Integrity” becomes: describe a moment honesty cost you something.",
         "id": "“Integritas” menjadi: ceritakan momen kejujuran ada harganya bagimu."
        },
        {
         "en": "Run the translation for every listed value — you have just predicted half the interview.",
         "id": "Jalankan penerjemahan untuk tiap nilai yang tercantum — kamu baru saja meramalkan separuh isi wawancara."
        }
       ]
      },
      {
       "h": {
        "en": "Map your library onto their language",
        "id": "Petakan perpustakaanmu ke bahasa mereka"
       },
       "points": [
        {
         "en": "For each value, pick the one tagged story that evidences it best.",
         "id": "Untuk tiap nilai, pilih satu kisah bertanda yang paling membuktikannya."
        },
        {
         "en": "Use their word once in the telling — naturally, not as flattery.",
         "id": "Pakai kata mereka sekali dalam penuturan — alami, bukan menjilat."
        },
        {
         "en": "Where you have no story for a value, mine for one now — that gap is where the interview will hurt.",
         "id": "Bila tak ada kisah untuk satu nilai, tambang sekarang — celah itulah tempat wawancara akan menyakitkan."
        }
       ]
      },
      {
       "h": {
        "en": "When nothing is published",
        "id": "Saat tidak ada yang terpublikasi"
       },
       "points": [
        {
         "en": "Read several of the company's job ads — repeated requirements across roles are de facto values.",
         "id": "Baca beberapa iklan kerja perusahaan itu — persyaratan yang berulang lintas peran adalah nilai de facto."
        },
        {
         "en": "Ask people who interviewed there; the Metanoia community and mentors exist for exactly this.",
         "id": "Tanya orang yang pernah diwawancarai di sana; komunitas dan mentor Metanoia ada persis untuk ini."
        },
        {
         "en": "Default to the ten universal competencies — they underlie every private rubric too.",
         "id": "Kembali ke sepuluh kompetensi universal — itu juga fondasi setiap rubrik privat."
        }
       ]
      }
     ],
     "tryit": {
      "qid": "hr03",
      "label": {
       "en": "Use their language on “why us”",
       "id": "Pakai bahasa mereka pada “mengapa kami”"
      },
      "desc": {
       "en": "Answer “why this company” naming one true, specific thing — the simulator checks for research signals.",
       "id": "Jawab “mengapa perusahaan ini” dengan satu hal benar dan spesifik — simulator memeriksa sinyal riset."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "competency",
        "id": "kompetensi"
       },
       "def": {
        "en": "A capability a role requires — leadership, prioritisation, judgment — that interviews probe with behavioral evidence.",
        "id": "Kapabilitas yang dituntut sebuah peran — kepemimpinan, prioritisasi, pertimbangan — yang diuji wawancara lewat bukti perilaku."
       }
      },
      {
       "term": {
        "en": "rubric",
        "id": "rubrik"
       },
       "def": {
        "en": "The written standard an answer is scored against — criteria plus what each level of quality looks like.",
        "id": "Standar tertulis tempat jawaban dinilai — kriteria plus wujud tiap tingkat kualitasnya."
       }
      }
     ]
    },
    {
     "n": "3.3",
     "title": {
      "en": "Decoding Job Descriptions into Competency Maps",
      "id": "Menerjemahkan Deskripsi Pekerjaan menjadi Peta Kompetensi"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "A job description is a leaked exam paper. Its repeated words, its first three bullets, its 'musts' versus 'nices' — all encode what the interview will probe. This lesson teaches the decoding method and the evidence table that turns any JD into your preparation plan.",
      "id": "Deskripsi pekerjaan adalah bocoran soal ujian. Kata-kata yang berulang, tiga butir pertamanya, 'wajib' versus 'nilai tambah' — semuanya menyandikan apa yang akan diuji wawancara. Pelajaran ini mengajarkan metode penerjemahannya dan tabel bukti yang mengubah JD apa pun menjadi rencana persiapanmu."
     },
     "objectives": [
      {
       "en": "Extract the three requirements a JD actually cares about.",
       "id": "Mengekstrak tiga persyaratan yang benar-benar dipedulikan sebuah JD."
      },
      {
       "en": "Predict interview questions from requirement lines.",
       "id": "Meramalkan pertanyaan wawancara dari baris persyaratan."
      },
      {
       "en": "Build a requirement → evidence table before any interview.",
       "id": "Menyusun tabel persyaratan → bukti sebelum wawancara mana pun."
      }
     ],
     "takeaways": [
      {
       "en": "Repetition is emphasis: any word appearing three times in a JD will appear in the interview.",
       "id": "Pengulangan adalah penekanan: kata yang muncul tiga kali di JD akan muncul di wawancara."
      },
      {
       "en": "The first three bullets are the job; the rest is the wishlist.",
       "id": "Tiga butir pertama adalah pekerjaannya; sisanya daftar harapan."
      },
      {
       "en": "A completed evidence table converts interview anxiety into a checklist.",
       "id": "Tabel bukti yang rampung mengubah kecemasan wawancara menjadi daftar periksa."
      }
     ],
     "check": {
      "q": {
       "en": "A JD lists “stakeholder management” in its first bullet and twice more below. You should:",
       "id": "JD mencantumkan “manajemen pemangku kepentingan” di butir pertama dan dua kali lagi di bawah. Kamu sebaiknya:"
      },
      "options": [
       {
        "en": "Plan to ask the interviewer what they mean by it",
        "id": "Berencana menanyakan maksudnya kepada pewawancara"
       },
       {
        "en": "Prepare your strongest stakeholder story with a measurable outcome",
        "id": "Menyiapkan kisah pemangku kepentingan terkuatmu dengan hasil terukur"
       },
       {
        "en": "Ignore it — it appears in every JD",
        "id": "Mengabaikannya — itu muncul di semua JD"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — first position plus repetition marks the core competency. It will be probed; arrive with evidence.",
       "id": "Benar — posisi pertama plus pengulangan menandai kompetensi inti. Itu pasti diuji; datanglah dengan bukti."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Anatomy of a JD",
        "id": "Anatomi sebuah JD"
       },
       "body": {
        "en": "Title and level set the altitude of expected answers. The opening paragraph names the team's mission — echo it in your “why this role”. Responsibilities describe the actual Tuesday; requirements describe the filter. Watch the verbs: “own” signals autonomy tests, “support” signals collaboration tests, “drive” signals influence-without-authority tests.",
        "id": "Judul dan level menetapkan ketinggian jawaban yang diharapkan. Paragraf pembuka menyebut misi tim — gaungkan dalam “mengapa peran ini”-mu. Tanggung jawab menggambarkan hari Selasa yang sebenarnya; persyaratan menggambarkan saringannya. Perhatikan kata kerjanya: “memiliki” menandakan uji otonomi, “mendukung” uji kolaborasi, “mendorong” uji pengaruh tanpa otoritas."
       }
      },
      {
       "h": {
        "en": "The decoding method",
        "id": "Metode penerjemahan"
       },
       "body": {
        "en": "Pass one: highlight every skill or behaviour word. Pass two: count repetitions — three appearances make a core theme. Pass three: separate musts from nices, and note which musts you can evidence strongly, weakly, or not at all. The weak cells are your preparation priorities and your likely difficult questions.",
        "id": "Lintasan satu: tandai tiap kata keterampilan atau perilaku. Lintasan dua: hitung pengulangan — muncul tiga kali berarti tema inti. Lintasan tiga: pisahkan wajib dari nilai tambah, dan catat wajib mana yang bisa kamu buktikan kuat, lemah, atau belum bisa. Sel yang lemah adalah prioritas persiapanmu sekaligus calon pertanyaan sulitmu."
       }
      },
      {
       "h": {
        "en": "The evidence table",
        "id": "Tabel bukti"
       },
       "body": {
        "en": "Three columns: requirement, my evidence, the number in it. Fill it for the top five requirements. Where a cell is empty, decide honestly: is there a story you have not mined, or is this a real gap you should acknowledge with a ramp-up plan? Interviewers respect a named gap with a plan far more than a bluffed strength.",
        "id": "Tiga kolom: persyaratan, buktiku, angka di dalamnya. Isi untuk lima persyaratan teratas. Bila ada sel kosong, putuskan jujur: adakah kisah yang belum kamu tambang, atau ini celah nyata yang harus diakui dengan rencana pengejaran? Pewawancara jauh lebih menghormati celah yang diakui beserta rencananya daripada kekuatan hasil gertakan."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The JD decode, in four passes",
       "id": "Bedah JD, dalam empat lintasan"
      },
      "items": [
       {
        "h": {
         "en": "Highlight",
         "id": "Tandai"
        },
        "sub": {
         "en": "Every skill and behaviour word",
         "id": "Semua kata keterampilan dan perilaku"
        }
       },
       {
        "h": {
         "en": "Count",
         "id": "Hitung"
        },
        "sub": {
         "en": "Three appearances = a core theme",
         "id": "Muncul tiga kali = tema inti"
        }
       },
       {
        "h": {
         "en": "Split",
         "id": "Pisahkan"
        },
        "sub": {
         "en": "Musts vs nice-to-haves",
         "id": "Wajib vs nilai tambah"
        }
       },
       {
        "h": {
         "en": "Table",
         "id": "Tabel"
        },
        "sub": {
         "en": "Requirement → my evidence → the number in it",
         "id": "Persyaratan → buktiku → angka di dalamnya"
        }
       }
      ],
      "note": {
       "en": "The weak cells of the table are your preparation priorities — and your likely difficult questions.",
       "id": "Sel-sel lemah pada tabel adalah prioritas persiapanmu — sekaligus calon pertanyaan sulitmu."
      },
      "exhibit": {
       "en": "Exhibit 7: The JD decode, in four passes",
       "id": "Peraga 7: Bedah JD, dalam empat lintasan"
      },
      "longdesc": {
       "en": "Diagram of The JD decode, in four passes. It presents, in order: Highlight — Every skill and behaviour word; Count — Three appearances = a core theme; Split — Musts vs nice-to-haves; Table — Requirement → my evidence → the number in it.",
       "id": "Diagram Bedah JD, dalam empat lintasan. Menyajikan, berurutan: Tandai — Semua kata keterampilan dan perilaku; Hitung — Muncul tiga kali = tema inti; Pisahkan — Wajib vs nilai tambah; Tabel — Persyaratan → buktiku → angka di dalamnya."
      }
     },
     "tryit": {
      "qid": "hr04",
      "label": {
       "en": "Answer “why this role” from the decode",
       "id": "Jawab “mengapa peran ini” dari hasil bedah"
      },
      "desc": {
       "en": "Quote the JD back in your own words and map two demands to two proofs.",
       "id": "Ulangi JD dengan bahasamu sendiri dan cocokkan dua tuntutan dengan dua bukti."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Preparing for every listed requirement equally",
         "id": "Menyiapkan semua persyaratan dengan bobot sama"
        },
        "fix": {
         "en": "Weight by repetition and position: three mentions or first-three-bullets = the interview's core.",
         "id": "Bobotkan berdasar pengulangan dan posisi: disebut tiga kali atau di tiga butir pertama = inti wawancara."
        }
       },
       {
        "h": {
         "en": "Ignoring the JD's own vocabulary",
         "id": "Mengabaikan kosakata JD itu sendiri"
        },
        "fix": {
         "en": "Echo their words once, naturally — the interviewer wrote that JD and hears the match.",
         "id": "Gaungkan kata mereka sekali, secara alami — pewawancara itulah penulis JD-nya dan mendengar kecocokannya."
        }
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Kekonkretan yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai rubrik."
       }
      },
      {
       "term": {
        "en": "influence",
        "id": "pengaruh"
       },
       "def": {
        "en": "Moving people and decisions without formal authority — evidence of leadership before the title arrives.",
        "id": "Menggerakkan orang dan keputusan tanpa otoritas formal — bukti kepemimpinan sebelum jabatannya datang."
       }
      }
     ]
    },
    {
     "n": "3.4",
     "title": {
      "en": "Matching Your Story Library to the Target Framework",
      "id": "Mencocokkan Perpustakaan Kisah dengan Kerangka Target"
     },
     "kind": "interactive",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The final assembly step: your tagged stories on one axis, the target role's competencies on the other. The matrix shows instantly which stories to polish, which competencies are uncovered, and which single story is your workhorse. Twenty minutes of matrix beats two hours of unfocused rehearsal.",
      "id": "Langkah perakitan terakhir: kisah-kisah bertandamu di satu sumbu, kompetensi peran target di sumbu lainnya. Matriks itu seketika menunjukkan kisah mana yang harus dipoles, kompetensi mana yang belum tertutup, dan satu kisah mana yang menjadi kuda pekerjamu. Dua puluh menit menyusun matriks mengalahkan dua jam latihan tanpa fokus."
     },
     "objectives": [
      {
       "en": "Build the story × competency matrix for a real target role.",
       "id": "Menyusun matriks kisah × kompetensi untuk peran target nyata."
      },
      {
       "en": "Identify coverage gaps and workhorse stories.",
       "id": "Mengidentifikasi celah cakupan dan kisah andalan."
      },
      {
       "en": "Plan the final polish order before an interview loop.",
       "id": "Merencanakan urutan pemolesan akhir sebelum rangkaian wawancara."
      }
     ],
     "takeaways": [
      {
       "en": "The matrix turns preparation from a mood into a checklist.",
       "id": "Matriks mengubah persiapan dari suasana hati menjadi daftar periksa."
      },
      {
       "en": "A workhorse story covering three competencies deserves triple polish.",
       "id": "Kisah andalan yang mencakup tiga kompetensi layak dipoles tiga kali lipat."
      },
      {
       "en": "An uncovered competency is a predictable ambush — mine or plan for it now.",
       "id": "Kompetensi tanpa cakupan adalah penyergapan yang bisa diramal — tambang atau siapkan rencananya sekarang."
      }
     ],
     "check": {
      "q": {
       "en": "Your matrix shows one competency with no story. Best move:",
       "id": "Matriksmu menunjukkan satu kompetensi tanpa kisah. Langkah terbaik:"
      },
      "options": [
       {
        "en": "Hope the interview skips that competency",
        "id": "Berharap wawancara melewatkan kompetensi itu"
       },
       {
        "en": "Reuse any strong story and claim it fits",
        "id": "Memakai ulang kisah kuat mana pun dan mengklaimnya cocok"
       },
       {
        "en": "Mine deliberately for a story there, or prepare an honest gap acknowledgment",
        "id": "Menambang khusus kisah untuk itu, atau menyiapkan pengakuan celah yang jujur"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — hope is not preparation, and forced fits collapse under follow-ups. Mine or acknowledge.",
       "id": "Benar — harapan bukan persiapan, dan kecocokan yang dipaksakan runtuh oleh pertanyaan lanjutan. Tambang atau akui."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Building the matrix",
        "id": "Menyusun matriks"
       },
       "body": {
        "en": "Rows: your eight to twelve stories. Columns: the role's five to seven competencies, from the JD decode and any published framework. Mark each cell where a story genuinely evidences a competency. Ten honest minutes. The picture that emerges — clusters, gaps, one column empty — is your entire preparation agenda.",
        "id": "Baris: delapan sampai dua belas kisahmu. Kolom: lima sampai tujuh kompetensi peran itu, dari hasil bedah JD dan kerangka terpublikasi bila ada. Tandai tiap sel di mana sebuah kisah sungguh membuktikan satu kompetensi. Sepuluh menit yang jujur. Gambaran yang muncul — gerombolan, celah, satu kolom kosong — adalah seluruh agenda persiapanmu."
       }
      },
      {
       "h": {
        "en": "Reading the picture",
        "id": "Membaca gambarannya"
       },
       "body": {
        "en": "A story with three or more marks is a workhorse: rehearse it at all three altitudes. A competency column with two-plus stories lets you vary answers across a long loop without repeating. An empty column is tomorrow's ambush. And a story with zero marks may simply not belong in this interview — retire it without guilt.",
        "id": "Kisah dengan tiga tanda atau lebih adalah kuda pekerja: latih pada ketiga ketinggian. Kolom kompetensi dengan dua kisah atau lebih memungkinkanmu memvariasikan jawaban sepanjang rangkaian panjang tanpa mengulang. Kolom kosong adalah penyergapan esok hari. Dan kisah tanpa tanda mungkin memang tidak berjodoh dengan wawancara ini — pensiunkan tanpa rasa bersalah."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Step 1 · Draw it for a real role",
        "id": "Langkah 1 · Gambar untuk peran nyata"
       },
       "body": {
        "en": "Pick a role you actually want. Decode its JD into five to seven competencies, list your stories, and mark the matrix — paper or spreadsheet, ten minutes, no perfectionism.",
        "id": "Pilih peran yang benar-benar kamu incar. Terjemahkan JD-nya menjadi lima sampai tujuh kompetensi, daftar kisahmu, dan tandai matriksnya — kertas atau spreadsheet, sepuluh menit, tanpa perfeksionisme."
       },
       "debrief": {
        "en": "Common surprise: your proudest story evidences fewer target competencies than a humbler one. The matrix judges fit, not prestige — trust it. The humble story with three marks is the one to polish tonight.",
        "id": "Kejutan yang lazim: kisah paling membanggakanmu membuktikan lebih sedikit kompetensi target daripada kisah yang lebih sederhana. Matriks menilai kecocokan, bukan prestise — percayai. Kisah sederhana dengan tiga tanda itulah yang dipoles malam ini."
       }
      },
      {
       "h": {
        "en": "Step 2 · Attack the gaps",
        "id": "Langkah 2 · Serang celahnya"
       },
       "body": {
        "en": "For each empty column, run the mining protocol from lesson 2.3 aimed specifically at that competency. If nothing surfaces, draft the honest acknowledgment: the gap, why it exists, your ramp-up plan.",
        "id": "Untuk tiap kolom kosong, jalankan protokol penambangan dari pelajaran 2.3 yang dibidikkan khusus ke kompetensi itu. Jika tetap nihil, susun pengakuan jujur: celahnya, mengapa ada, rencana pengejaranmu."
       },
       "debrief": {
        "en": "An honest gap statement sounds like: “Direct people management I haven't done yet — I've led through influence in two projects, and management is exactly the growth this role offers.” Ownership of the gap plus adjacent evidence plus motive. That answer scores; a bluff does not.",
        "id": "Pengakuan celah yang jujur berbunyi: “Manajemen orang secara langsung memang belum — saya memimpin lewat pengaruh di dua proyek, dan manajemen adalah persis pertumbuhan yang ditawarkan peran ini.” Kepemilikan celah plus bukti terdekat plus motif. Jawaban itu mendapat nilai; gertakan tidak."
       }
      },
      {
       "h": {
        "en": "Step 3 · Set the polish order",
        "id": "Langkah 3 · Tetapkan urutan pemolesan"
       },
       "body": {
        "en": "Rank: workhorse stories first, then stories covering rare competencies, then the rest. Rehearse aloud in that order — the simulator in Module 7 runs exactly these priorities with you.",
        "id": "Urutkan: kisah andalan dulu, lalu kisah yang mencakup kompetensi langka, lalu sisanya. Latih bersuara dalam urutan itu — simulator di Modul 7 menjalankan prioritas persis ini bersamamu."
       },
       "debrief": {
        "en": "Polish means: spoken aloud three times, timed under two minutes, one number verified, learning line sharpened. Four passes per story. With the matrix set, Module 7's simulation stops being scary and becomes a test drive of a machine you built.",
        "id": "Poles artinya: diucapkan lantang tiga kali, diukur di bawah dua menit, satu angka diverifikasi, kalimat pembelajaran dipertajam. Empat lintasan per kisah. Dengan matriks siap, simulasi Modul 7 berhenti menakutkan dan menjadi uji jalan mesin buatanmu sendiri."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "An empty matrix column — bluffed vs owned",
        "id": "Kolom matriks kosong — digertak vs diakui"
       },
       "q": {
        "en": "“This role needs direct people management. Have you done it?”",
        "id": "“Peran ini butuh manajemen orang secara langsung. Pernah?”"
       },
       "weak": {
        "en": "Yes, definitely — I basically managed people in most of my projects, like coordinating and things like that.",
        "id": "Ya, tentu — saya pada dasarnya mengelola orang di sebagian besar proyek, seperti koordinasi dan semacamnya."
       },
       "strong": {
        "en": "Direct people management I haven't done yet — I want to be straightforward about that. What I have done is lead through influence: in two projects I set the plan, ran the reviews, and coached one junior member weekly. Management is exactly the growth this role offers, and it's why I want it.",
        "id": "Manajemen orang secara langsung memang belum — saya ingin jujur soal itu. Yang sudah saya lakukan adalah memimpin lewat pengaruh: di dua proyek saya menyusun rencana, memimpin review, dan membimbing satu anggota junior tiap minggu. Manajemen adalah persis pertumbuhan yang ditawarkan peran ini, dan itulah alasan saya menginginkannya."
       },
       "why": {
        "en": "The bluff dies at the first follow-up. The owned gap earns trust, shows adjacent evidence, and turns the weakness into motive.",
        "id": "Gertakan mati di pertanyaan lanjutan pertama. Celah yang diakui menuai kepercayaan, menunjukkan bukti terdekat, dan mengubah kelemahan menjadi motif."
       }
      }
     ],
     "tryit": {
      "qid": "dc06",
      "label": {
       "en": "Drill your own gap acknowledgment",
       "id": "Latih pengakuan celahmu sendiri"
      },
      "desc": {
       "en": "“What do you bring instead of formal experience?” — one calm sentence, then evidence.",
       "id": "“Apa yang kamu bawa sebagai ganti pengalaman formal?” — satu kalimat tenang, lalu bukti."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "competency",
        "id": "kompetensi"
       },
       "def": {
        "en": "A capability a role requires — leadership, prioritisation, judgment — that interviews probe with behavioral evidence.",
        "id": "Kapabilitas yang dituntut sebuah peran — kepemimpinan, prioritisasi, pertimbangan — yang diuji wawancara lewat bukti perilaku."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Kekonkretan yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai rubrik."
       }
      }
     ]
    }
   ]
  },
  {
   "num": 4,
   "title": {
    "en": "The HR Interview",
    "id": "Wawancara HR"
   },
   "overview": {
    "en": "The friendliest room with the highest elimination rate. This module covers the HR interviewer's real mandate, the positioning statement that answers half their questions in advance, the answer systems for the high-frequency questions — including the difficult cases: gaps, pivots, layoffs, and every version of “why you” — and the close and follow-up protocol.",
    "id": "Ruangan paling ramah dengan tingkat eliminasi tertinggi. Modul ini membahas mandat sebenarnya pewawancara HR, positioning statement yang menjawab separuh pertanyaan mereka di muka, sistem jawaban untuk pertanyaan frekuensi tinggi — termasuk kasus-kasus sulit: jeda karier, banting setir, PHK, dan semua versi “mengapa kamu” — serta protokol penutupan dan tindak lanjut."
   },
   "outcome": {
    "en": "By the end of this module you can pass any HR screen with a clear positioning, calm answers to the loaded questions, honest reframes for your difficult case, and a professional close that keeps momentum.",
    "id": "Di akhir modul ini kamu bisa melewati penyaringan HR mana pun dengan positioning yang jernih, jawaban tenang untuk pertanyaan bermuatan, pembingkaian jujur untuk kasus sulitmu, dan penutupan profesional yang menjaga momentum."
   },
   "lessons": [
    {
     "n": "4.1",
     "title": {
      "en": "The HR Interviewer's Mandate",
      "id": "Mandat Pewawancara HR"
     },
     "kind": "reading",
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "HR screens exist to answer five questions: is this person motivated for this role, within budget, available on our timeline, communicative at a professional baseline, and free of avoidable risk? Everything asked in the screen serves one of the five. Once you see the mandate, the interview becomes legible.",
      "id": "Penyaringan HR ada untuk menjawab lima pertanyaan: apakah orang ini termotivasi untuk peran ini, sesuai anggaran, tersedia pada linimasa kami, komunikatif pada standar profesional, dan bebas dari risiko yang bisa dihindari? Semua yang ditanyakan dalam penyaringan melayani salah satu dari lima itu. Begitu mandatnya terlihat, wawancara menjadi terbaca."
     },
     "objectives": [
      {
       "en": "Name the five questions every HR screen is built to answer.",
       "id": "Menyebutkan lima pertanyaan yang menjadi dasar setiap penyaringan HR."
      },
      {
       "en": "Map any screen question back to the mandate it serves.",
       "id": "Memetakan pertanyaan penyaringan apa pun kembali ke mandat yang dilayaninya."
      },
      {
       "en": "Avoid the classic screen-stage mistakes: rambling, bitterness, fake salary numbers.",
       "id": "Menghindari kesalahan klasik tahap penyaringan: melantur, kepahitan, angka gaji palsu."
      }
     ],
     "takeaways": [
      {
       "en": "HR cannot usually hire you, but can always end you — treat the screen as a precision round.",
       "id": "HR biasanya tidak bisa merekrutmu, tetapi selalu bisa mengakhirimu — perlakukan penyaringan sebagai babak presisi."
      },
      {
       "en": "Friendliness is a technique, not a verdict; match its warmth and keep your discipline.",
       "id": "Keramahan adalah teknik, bukan vonis; imbangi kehangatannya dan jaga disiplinmu."
      },
      {
       "en": "Every screen question maps to motivation, money, timing, communication or risk.",
       "id": "Setiap pertanyaan penyaringan bermuara pada motivasi, uang, waktu, komunikasi, atau risiko."
      }
     ],
     "check": {
      "q": {
       "en": "“Why are you leaving your current job?” serves which part of the HR mandate?",
       "id": "“Mengapa kamu meninggalkan pekerjaanmu sekarang?” melayani bagian mandat HR yang mana?"
      },
      "options": [
       {
        "en": "Risk — checking for bitterness, conflict patterns, and unrealistic expectations",
        "id": "Risiko — memeriksa kepahitan, pola konflik, dan ekspektasi tak realistis"
       },
       {
        "en": "Budget — estimating your salary expectations",
        "id": "Anggaran — memperkirakan ekspektasi gajimu"
       },
       {
        "en": "Timeline — determining your start date",
        "id": "Linimasa — menentukan tanggal mulaimu"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — the question hunts risk signals. A forward-facing answer clears it; litigating the past confirms it.",
       "id": "Benar — pertanyaan itu memburu sinyal risiko. Jawaban yang menghadap ke depan melewatinya; mengadili masa lalu justru mengonfirmasinya."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Five questions, one screen",
        "id": "Lima pertanyaan, satu penyaringan"
       },
       "body": {
        "en": "Motivation: do you want this role, or any role? Money: does your range fit the band? Timing: notice period, start date, competing processes. Communication: can you explain yourself clearly on a first meeting? Risk: gaps unexplained, bitterness, inconsistencies with the CV. Score yourself on the five before the recruiter does.",
        "id": "Motivasi: kamu menginginkan peran ini, atau peran apa saja? Uang: apakah rentangmu masuk pita gaji? Waktu: masa pemberitahuan, tanggal mulai, proses lain. Komunikasi: bisakah kamu menjelaskan dirimu dengan jernih pada pertemuan pertama? Risiko: jeda tanpa penjelasan, kepahitan, ketidaksesuaian dengan CV. Nilai dirimu pada lima hal itu sebelum rekruter melakukannya."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "The friendliness trap",
        "id": "Perangkap keramahan"
       },
       "body": {
        "en": "Recruiters are professionally warm, and warmth loosens tongues. Candidates confess doubts, criticise old employers, or negotiate against themselves — in the first fifteen minutes. Be warm back, and treat every sentence as on the record, because it is. The screen is a filter wearing a smile.",
        "id": "Rekruter hangat secara profesional, dan kehangatan melonggarkan lidah. Kandidat mengakui keraguan, mengkritik tempat lama, atau menegosiasikan kerugiannya sendiri — dalam lima belas menit pertama. Balaslah kehangatannya, dan perlakukan setiap kalimat sebagai catatan resmi, karena memang begitu. Penyaringan adalah filter yang mengenakan senyum."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "What passes the screen",
        "id": "Yang lolos penyaringan"
       },
       "body": {
        "en": "A clean screen performance is unspectacular by design: specific motivation for this company, a researched salary range delivered without flinching, honest timeline, one or two crisp proof stories, zero negativity. You are not trying to win the job here — you are trying not to lose it. Save the fireworks for rooms that can hire you.",
        "id": "Performa penyaringan yang bersih memang dirancang tak spektakuler: motivasi spesifik untuk perusahaan ini, rentang gaji hasil riset yang disampaikan tanpa gentar, linimasa jujur, satu-dua kisah bukti yang ringkas, nol negativitas. Kamu tidak sedang berusaha memenangkan pekerjaan di sini — kamu berusaha tidak kehilangannya. Simpan kembang api untuk ruangan yang bisa merekrutmu."
       },
       "icon": "target"
      }
     ],
     "diagram": {
      "type": "ring",
      "title": {
       "en": "The five questions every screen serves",
       "id": "Lima pertanyaan yang dilayani setiap penyaringan"
      },
      "items": [
       {
        "h": {
         "en": "Motivation",
         "id": "Motivasi"
        },
        "sub": {
         "en": "This role, or any role?",
         "id": "Peran ini, atau peran apa saja?"
        }
       },
       {
        "h": {
         "en": "Money",
         "id": "Uang"
        },
        "sub": {
         "en": "Does your range fit the band?",
         "id": "Apakah rentangmu masuk pita gaji?"
        }
       },
       {
        "h": {
         "en": "Timing",
         "id": "Waktu"
        },
        "sub": {
         "en": "Notice period, start date, other processes",
         "id": "Masa pemberitahuan, tanggal mulai, proses lain"
        }
       },
       {
        "h": {
         "en": "Communication",
         "id": "Komunikasi"
        },
        "sub": {
         "en": "Clear on a first meeting?",
         "id": "Jernih pada pertemuan pertama?"
        }
       },
       {
        "h": {
         "en": "Risk",
         "id": "Risiko"
        },
        "sub": {
         "en": "Gaps, bitterness, inconsistencies",
         "id": "Jeda, kepahitan, ketidaksesuaian"
        }
       }
      ],
      "note": {
       "en": "Every screen question maps to one of the five. Score yourself before the recruiter does.",
       "id": "Setiap pertanyaan penyaringan bermuara ke salah satu dari lima. Nilai dirimu sebelum rekruter melakukannya."
      },
      "exhibit": {
       "en": "Exhibit 8: The five questions every screen serves",
       "id": "Peraga 8: Lima pertanyaan yang dilayani setiap penyaringan"
      },
      "longdesc": {
       "en": "Diagram of The five questions every screen serves. It presents, in order: Motivation — This role, or any role?; Money — Does your range fit the band?; Timing — Notice period, start date, other processes; Communication — Clear on a first meeting?; Risk — Gaps, bitterness, inconsistencies.",
       "id": "Diagram Lima pertanyaan yang dilayani setiap penyaringan. Menyajikan, berurutan: Motivasi — Peran ini, atau peran apa saja?; Uang — Apakah rentangmu masuk pita gaji?; Waktu — Masa pemberitahuan, tanggal mulai, proses lain; Komunikasi — Jernih pada pertemuan pertama?; Risiko — Jeda, kepahitan, ketidaksesuaian."
      }
     },
     "checks": [
      {
       "q": {
        "en": "The recruiter chats warmly about your old employer's problems. You should:",
        "id": "Rekruter mengobrol hangat tentang masalah di tempat kerjamu yang lama. Kamu sebaiknya:"
       },
       "options": [
        {
         "en": "Stay warm and stay forward-facing — every sentence is on the record",
         "id": "Tetap hangat dan tetap menghadap ke depan — setiap kalimat adalah catatan resmi"
        },
        {
         "en": "Relax and share the real gossip — rapport helps your case",
         "id": "Santai dan bagikan gosip aslinya — keakraban membantu posisimu"
        },
        {
         "en": "Refuse to discuss your old employer at all",
         "id": "Menolak sama sekali membahas tempat lama"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — warmth is a technique. Match it, and keep your discipline: the screen is a filter wearing a smile.",
        "id": "Benar — kehangatan adalah teknik. Imbangi, dan jaga disiplinmu: penyaringan adalah filter yang mengenakan senyum."
       }
      }
     ],
     "scenario": {
      "icon": "chat",
      "img": "../../assets/bg/mentoring-session.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat Dalam Sorotan"
      },
      "body": [
       {
        "en": "Maya's screening call is going wonderfully — the recruiter laughs at her jokes, the conversation drifts to weekend plans. Relaxed, Maya mentions she is “honestly just desperate to leave” her current team, and that her salary hope is “whatever, negotiable, really.” The call ends warmly. The process ends silently. Maya never learns which two sentences did it — but after this module, you will recognise both.",
        "id": "Panggilan penyaringan Maya berjalan menyenangkan — rekruternya tertawa pada leluconnya, obrolan melantur ke rencana akhir pekan. Karena santai, Maya menyebut ia “jujur sudah tidak tahan ingin keluar” dari timnya, dan harapan gajinya “berapa saja, bisa nego, sungguh.” Panggilan berakhir hangat. Prosesnya berakhir sunyi. Maya tak pernah tahu dua kalimat mana penyebabnya — tetapi setelah modul ini, kamu akan mengenali keduanya."
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "notice period",
        "id": "masa pemberitahuan"
       },
       "def": {
        "en": "The contractual time between resigning and leaving — honour it; how you exit is part of your reputation.",
        "id": "Waktu kontraktual antara mengundurkan diri dan benar-benar pergi — hormati; cara pamitmu bagian dari reputasimu."
       }
      }
     ]
    },
    {
     "n": "4.2",
     "title": {
      "en": "The Positioning Statement System",
      "id": "Sistem Positioning Statement"
     },
     "kind": "reading",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "“Tell me about yourself” opens most interviews, and most candidates retell their CV chronologically — the one structure guaranteed to be forgettable. The positioning statement replaces chronology with an argument: present, proof, why-here. Ninety seconds, three moves, built once and tailored per company.",
      "id": "“Ceritakan tentang dirimu” membuka sebagian besar wawancara, dan sebagian besar kandidat menceritakan ulang CV secara kronologis — satu-satunya struktur yang dijamin terlupakan. Positioning statement mengganti kronologi dengan argumen: posisi, bukti, alasan-ke-sini. Sembilan puluh detik, tiga langkah, dibangun sekali dan disesuaikan per perusahaan."
     },
     "objectives": [
      {
       "en": "Build your present → proof → why-here statement.",
       "id": "Membangun pernyataan posisi → bukti → alasan-ke-sini milikmu."
      },
      {
       "en": "Compress it into a 30-second version for unexpected moments.",
       "id": "Memadatkannya menjadi versi 30 detik untuk momen tak terduga."
      },
      {
       "en": "Tailor the why-here per company without rebuilding the whole statement.",
       "id": "Menyesuaikan alasan-ke-sini per perusahaan tanpa membangun ulang seluruh pernyataan."
      }
     ],
     "takeaways": [
      {
       "en": "Position first: who you are professionally in one sentence, not your life story.",
       "id": "Posisi lebih dulu: siapa kamu secara profesional dalam satu kalimat, bukan riwayat hidup."
      },
      {
       "en": "Proof next: two examples with numbers that make the position undeniable.",
       "id": "Bukti berikutnya: dua contoh berangka yang membuat posisi itu tak terbantahkan."
      },
      {
       "en": "Why-here last: the specific bridge between your direction and this company.",
       "id": "Alasan-ke-sini terakhir: jembatan spesifik antara arahmu dan perusahaan ini."
      }
     ],
     "check": {
      "q": {
       "en": "The biggest failure mode in “tell me about yourself” is:",
       "id": "Mode gagal terbesar dalam “ceritakan tentang dirimu” adalah:"
      },
      "options": [
       {
        "en": "Mentioning numbers too early",
        "id": "Menyebut angka terlalu dini"
       },
       {
        "en": "Chronological CV retelling with no argument",
        "id": "Menceritakan ulang CV kronologis tanpa argumen"
       },
       {
        "en": "Speaking for ninety seconds",
        "id": "Berbicara selama sembilan puluh detik"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — chronology lists facts; positioning makes a case. Interviewers remember cases.",
       "id": "Benar — kronologi mendaftar fakta; positioning membangun argumen. Pewawancara mengingat argumen."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Move one — present",
        "id": "Langkah satu — posisi"
       },
       "body": {
        "en": "One sentence that frames you professionally: “I'm a data analyst who turns messy operational data into decisions retail teams actually use.” Identity plus flavour plus value, no adjectives about your personality. This sentence is the thesis; everything after supports it. Write ten versions, keep the one that sounds like you on a good day.",
        "id": "Satu kalimat yang membingkaimu secara profesional: “Saya analis data yang mengubah data operasional berantakan menjadi keputusan yang benar-benar dipakai tim ritel.” Identitas plus corak plus nilai, tanpa kata sifat tentang kepribadianmu. Kalimat ini adalah tesis; semua setelahnya mendukungnya. Tulis sepuluh versi, simpan yang terdengar seperti dirimu di hari terbaik."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Move two — proof",
        "id": "Langkah dua — bukti"
       },
       "body": {
        "en": "Two examples, each one breath long, each with a number: “Last year I automated the weekly stock report — four hours saved per branch per week. Before that I led our campus team to a national final.” Proof converts the thesis from claim to fact. Choose examples pointing toward the target role, not your two biggest trophies.",
        "id": "Dua contoh, masing-masing sepanjang satu tarikan napas, masing-masing dengan angka: “Tahun lalu saya otomatiskan laporan stok mingguan — empat jam terhemat per cabang per minggu. Sebelumnya saya memimpin tim kampus ke final nasional.” Bukti mengubah tesis dari klaim menjadi fakta. Pilih contoh yang mengarah ke peran target, bukan dua trofi terbesarmu."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "Move three — why here",
        "id": "Langkah tiga — alasan ke sini"
       },
       "body": {
        "en": "Close the loop into their room: “Which is why this role drew me — you're scaling exactly the kind of operations data problem I want to spend the next years on.” Specific to the company, one sentence, forward-facing. This is the only part you rebuild per interview; the rest travels with you.",
        "id": "Tutup lingkarannya ke ruangan mereka: “Karena itulah peran ini menarik saya — kalian sedang menskalakan persis jenis masalah data operasional yang ingin saya tekuni beberapa tahun ke depan.” Spesifik untuk perusahaan itu, satu kalimat, menghadap ke depan. Hanya bagian ini yang kamu bangun ulang tiap wawancara; sisanya ikut ke mana pun."
       },
       "icon": "target"
      },
      {
       "h": {
        "en": "The 30-second version",
        "id": "Versi 30 detik"
       },
       "body": {
        "en": "Elevators, webinar chats, unexpected introductions: thesis plus one proof plus one interest line. Practise both versions aloud until the transition between them is a dial, not a different speech. When adrenaline hits, you will speak whichever version you rehearsed more — so rehearse the long one at least three times aloud.",
        "id": "Lift, kolom obrolan webinar, perkenalan tak terduga: tesis plus satu bukti plus satu kalimat minat. Latih kedua versi bersuara sampai perpindahan keduanya terasa seperti kenop volume, bukan pidato berbeda. Saat adrenalin datang, yang keluar adalah versi yang lebih sering kamu latih — maka latih versi panjang minimal tiga kali bersuara."
       },
       "icon": "chat"
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The positioning statement — three moves",
       "id": "Positioning statement — tiga langkah"
      },
      "items": [
       {
        "h": {
         "en": "Present",
         "id": "Posisi"
        },
        "sub": {
         "en": "Who you are professionally, one sentence",
         "id": "Siapa kamu secara profesional, satu kalimat"
        }
       },
       {
        "h": {
         "en": "Proof",
         "id": "Bukti"
        },
        "sub": {
         "en": "Two examples with numbers",
         "id": "Dua contoh dengan angka"
        }
       },
       {
        "h": {
         "en": "Why here",
         "id": "Alasan ke sini"
        },
        "sub": {
         "en": "The bridge to this company, one sentence",
         "id": "Jembatan ke perusahaan ini, satu kalimat"
        }
       }
      ],
      "note": {
       "en": "Ninety seconds total. Only the last move is rebuilt per company — the rest travels with you.",
       "id": "Total sembilan puluh detik. Hanya langkah terakhir yang dibangun ulang per perusahaan — sisanya ikut ke mana pun."
      },
      "exhibit": {
       "en": "Exhibit 9: The positioning statement — three moves",
       "id": "Peraga 9: Positioning statement — tiga langkah"
      },
      "longdesc": {
       "en": "Diagram of The positioning statement — three moves. It presents, in order: Present — Who you are professionally, one sentence; Proof — Two examples with numbers; Why here — The bridge to this company, one sentence.",
       "id": "Diagram Positioning statement — tiga langkah. Menyajikan, berurutan: Posisi — Siapa kamu secara profesional, satu kalimat; Bukti — Dua contoh dengan angka; Alasan ke sini — Jembatan ke perusahaan ini, satu kalimat."
      }
     },
     "compare": [
      {
       "tag": {
        "en": "“Tell me about yourself” — chronology vs argument",
        "id": "“Ceritakan tentang dirimu” — kronologi vs argumen"
       },
       "weak": {
        "en": "So I graduated in 2023 from industrial engineering, then I joined a company as an admin staff, then I moved to another company, and now I'm looking for new opportunities in data.",
        "id": "Jadi saya lulus 2023 dari teknik industri, lalu bekerja sebagai staf admin, lalu pindah ke perusahaan lain, dan sekarang mencari peluang baru di bidang data."
       },
       "strong": {
        "en": "I'm a data analyst who turns messy operational data into decisions retail teams actually use. Last year I automated a weekly stock report that saved each branch four hours a week; before that I led a campus team to a national final. That's why this role caught me — you're scaling exactly this kind of operations problem.",
        "id": "Saya analis data yang mengubah data operasional berantakan menjadi keputusan yang benar-benar dipakai tim ritel. Tahun lalu saya otomatiskan laporan stok mingguan yang menghemat empat jam per cabang per minggu; sebelumnya saya memimpin tim kampus ke final nasional. Karena itulah peran ini menarik saya — kalian sedang menskalakan persis jenis masalah operasional ini."
       },
       "why": {
        "en": "The weak version lists facts in order; the strong one makes a case: identity, two numbered proofs, and a bridge to their room.",
        "id": "Versi lemah mendaftar fakta berurutan; versi kuat membangun argumen: identitas, dua bukti berangka, dan jembatan ke ruangan mereka."
       }
      }
     ],
     "listen": [
      {
       "label": {
        "en": "A full 90-second positioning, spoken",
        "id": "Positioning 90 detik utuh, diucapkan"
       },
       "text": {
        "en": "I'm a data analyst who turns messy operational data into decisions retail teams actually use. Two quick proofs. Last year I automated our weekly stock report — four hours saved per branch, every week, across nine branches. And at university I led a five-person team to a national data competition final, on a dataset none of us had touched before. Which is exactly why this role drew me: you're scaling the same kind of operations problem, and I want to spend the next years on it.",
        "id": "Saya analis data yang mengubah data operasional berantakan menjadi keputusan yang benar-benar dipakai tim ritel. Dua bukti singkat. Tahun lalu saya otomatiskan laporan stok mingguan — empat jam terhemat per cabang, setiap minggu, di sembilan cabang. Dan di kampus saya memimpin tim lima orang ke final kompetisi data nasional, dengan dataset yang belum pernah kami sentuh. Karena itulah peran ini menarik saya: kalian sedang menskalakan jenis masalah operasional yang sama, dan saya ingin menekuninya beberapa tahun ke depan."
       }
      }
     ],
     "tryit": {
      "qid": "hr01",
      "label": {
       "en": "Now record yours",
       "id": "Sekarang rekam milikmu"
      },
      "desc": {
       "en": "Say your positioning into the simulator — camera on if you dare. Compare your transcript to the model above.",
       "id": "Ucapkan positioning-mu ke simulator — nyalakan kamera jika berani. Bandingkan transkripmu dengan contoh di atas."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "positioning statement",
        "id": "positioning statement"
       },
       "def": {
        "en": "Your 90-second opening: who you are professionally, two numbered proofs, and why this company.",
        "id": "Pembuka 90 detikmu: siapa kamu secara profesional, dua bukti berangka, dan mengapa perusahaan ini."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Retelling the CV in order",
         "id": "Menceritakan ulang CV secara urut"
        },
        "fix": {
         "en": "Make an argument instead: identity, two numbered proofs, bridge to this company.",
         "id": "Bangun argumen: identitas, dua bukti berangka, jembatan ke perusahaan ini."
        }
       },
       {
        "h": {
         "en": "Starting the story at birth",
         "id": "Memulai kisah dari lahir"
        },
        "fix": {
         "en": "Start at the present. History earns a sentence only when it explains the present.",
         "id": "Mulai dari masa kini. Masa lalu berhak satu kalimat hanya bila menjelaskan masa kini."
        }
       },
       {
        "h": {
         "en": "Same speech for every company",
         "id": "Pidato yang sama untuk semua perusahaan"
        },
        "fix": {
         "en": "Rebuild only the why-here line per company — thirty seconds of tailoring, visible difference.",
         "id": "Bangun ulang hanya kalimat alasan-ke-sini per perusahaan — tiga puluh detik penyesuaian, perbedaannya terlihat."
        }
       }
      ]
     }
    },
    {
     "n": "4.3",
     "title": {
      "en": "High-Frequency HR Questions and the Answer System",
      "id": "Pertanyaan HR Frekuensi Tinggi dan Sistem Jawabannya"
     },
     "kind": "interactive",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Why us. Why leave. Greatest strength, greatest weakness. Five years. Salary. The difficult cases — gaps, pivots, layoffs. These questions are predictable, which makes them buildable: each has an answer system, not a script. This lesson installs the systems and drills the two most feared.",
      "id": "Mengapa kami. Mengapa pergi. Kekuatan terbesar, kelemahan terbesar. Lima tahun lagi. Gaji. Kasus-kasus sulit — jeda, banting setir, PHK. Pertanyaan-pertanyaan ini bisa diprediksi, artinya bisa dibangun: masing-masing punya sistem jawaban, bukan naskah. Pelajaran ini memasang sistemnya dan melatih dua yang paling ditakuti."
     },
     "objectives": [
      {
       "en": "Apply the answer system for each high-frequency HR question.",
       "id": "Menerapkan sistem jawaban untuk tiap pertanyaan HR frekuensi tinggi."
      },
      {
       "en": "Deliver a real weakness with its management plan convincingly.",
       "id": "Menyampaikan kelemahan nyata beserta rencana pengelolaannya secara meyakinkan."
      },
      {
       "en": "Reframe your difficult case — gap, pivot, layoff — with calm honesty.",
       "id": "Membingkai ulang kasus sulitmu — jeda, banting setir, PHK — dengan kejujuran yang tenang."
      }
     ],
     "takeaways": [
      {
       "en": "Systems, not scripts: know the moves of each answer and improvise the words.",
       "id": "Sistem, bukan naskah: kuasai langkah tiap jawaban dan improvisasikan kata-katanya."
      },
      {
       "en": "The weakness question is a trust test — a disguised strength fails it instantly.",
       "id": "Pertanyaan kelemahan adalah ujian kepercayaan — kekuatan yang disamarkan langsung gagal."
      },
      {
       "en": "Difficult cases are answered in one calm sentence plus a redirect to evidence.",
       "id": "Kasus sulit dijawab dengan satu kalimat tenang plus pengalihan ke bukti."
      }
     ],
     "check": {
      "q": {
       "en": "A strong answer to “what is your greatest weakness?” contains:",
       "id": "Jawaban kuat untuk “apa kelemahan terbesarmu?” memuat:"
      },
      "options": [
       {
        "en": "A strength disguised: “I work too hard”",
        "id": "Kekuatan yang disamarkan: “Saya bekerja terlalu keras”"
       },
       {
        "en": "A refusal: “I can't think of any”",
        "id": "Penolakan: “Saya tidak bisa memikirkan satu pun”"
       },
       {
        "en": "A real weakness, one honest cost, and the system now containing it",
        "id": "Kelemahan nyata, satu dampak jujur, dan sistem yang kini mengelolanya"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — honesty plus management. The interviewer is testing self-awareness, and self-awareness has receipts.",
       "id": "Benar — kejujuran plus pengelolaan. Pewawancara menguji kesadaran diri, dan kesadaran diri punya bukti."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The systems at a glance",
        "id": "Sistem-sistemnya sekilas"
       },
       "body": {
        "en": "Why us: something true and specific about them, bridged to your direction. Why leave: face forward, never litigate. Strength: one claim, one story, one number. Weakness: real, costed once, managed by a system. Five years: a capability, not a title. Salary: a researched range plus what it depends on. Every system is two or three moves — learn the moves.",
        "id": "Mengapa kami: sesuatu yang benar dan spesifik tentang mereka, dijembatani ke arahmu. Mengapa pergi: menghadap ke depan, jangan mengadili. Kekuatan: satu klaim, satu kisah, satu angka. Kelemahan: nyata, disebut dampaknya sekali, dikelola sistem. Lima tahun: kapabilitas, bukan jabatan. Gaji: rentang hasil riset plus faktor penentunya. Setiap sistem hanya dua-tiga langkah — kuasai langkahnya."
       }
      },
      {
       "h": {
        "en": "The difficult cases, honestly",
        "id": "Kasus-kasus sulit, dengan jujur"
       },
       "body": {
        "en": "Gap, pivot, layoff, low grades, job-hopping: the pattern is identical. One calm sentence naming the fact, zero apology spiral, then a redirect to what you built or learned, landing on the present. The interviewer's fear is evasion and decay; your calm brevity answers both. Full preparation paths for sixteen difficult cases live in the simulator's setup — select yours and drill it.",
        "id": "Jeda, banting setir, PHK, nilai rendah, sering pindah: polanya identik. Satu kalimat tenang menyebut faktanya, nol pusaran maaf, lalu pengalihan ke apa yang kamu bangun atau pelajari, mendarat di masa kini. Ketakutan pewawancara adalah kelit dan kemunduran; ketenangan singkatmu menjawab keduanya. Jalur persiapan lengkap enam belas kasus sulit tersedia di pengaturan simulator — pilih milikmu dan latih."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 · Your weakness, for real",
        "id": "Latihan 1 · Kelemahanmu, sungguhan"
       },
       "body": {
        "en": "Write your actual weakness — the one a former teammate would name. Then write one sentence about a time it cost you, and two sentences on the system you now use against it. Say all four sentences aloud.",
        "id": "Tulis kelemahan aslimu — yang akan disebut mantan rekan setimmu. Lalu tulis satu kalimat tentang saat ia merugikanmu, dan dua kalimat tentang sistem yang kini kamu pakai melawannya. Ucapkan keempat kalimat itu lantang."
       },
       "debrief": {
        "en": "Test it: would the interviewer learn something true about working with you? “Perfectionism” fails that test; “I default to doing instead of delegating — I now write a handover list at the start of each project” passes. The system is the answer; the weakness is just its address.",
        "id": "Ujilah: apakah pewawancara belajar sesuatu yang benar tentang bekerja denganmu? “Perfeksionisme” gagal dalam uji itu; “Saya cenderung mengerjakan sendiri alih-alih mendelegasikan — kini saya menulis daftar serah terima di awal tiap proyek” lulus. Sistemnya adalah jawabannya; kelemahan hanyalah alamatnya."
       }
      },
      {
       "h": {
        "en": "Drill 2 · Your difficult case in one breath",
        "id": "Latihan 2 · Kasus sulitmu dalam satu tarikan napas"
       },
       "body": {
        "en": "Identify your difficult case. Draft the one calm sentence that names it, and the redirect sentence that moves to evidence. Time yourself: both sentences inside twenty seconds.",
        "id": "Kenali kasus sulitmu. Susun satu kalimat tenang yang menyebutnya, dan kalimat pengalihan yang beralih ke bukti. Ukur waktunya: kedua kalimat dalam dua puluh detik."
       },
       "debrief": {
        "en": "Example, gap: “I took eight months out to care for my father; during it I kept my skills alive with two freelance dashboards — happy to show them.” Fact, no apology, evidence, forward. Twenty seconds ends the danger; three minutes of explaining creates it.",
        "id": "Contoh, jeda: “Saya rehat delapan bulan merawat ayah; selama itu keterampilan saya tetap hidup lewat dua proyek dashboard lepas — dengan senang hati saya tunjukkan.” Fakta, tanpa maaf, bukti, maju. Dua puluh detik mengakhiri bahayanya; tiga menit penjelasan justru menciptakannya."
       }
      },
      {
       "h": {
        "en": "Drill 3 · The salary range without flinching",
        "id": "Latihan 3 · Rentang gaji tanpa gentar"
       },
       "body": {
        "en": "Using module 8's research method (or your current best data), write your range for the target role and the sentence that delivers it. Practise saying it aloud until the number stops feeling like a confession.",
        "id": "Dengan metode riset modul 8 (atau data terbaikmu saat ini), tulis rentangmu untuk peran target dan kalimat penyampaiannya. Latih mengucapkannya sampai angka itu berhenti terasa seperti pengakuan dosa."
       },
       "debrief": {
        "en": "Delivery pattern: “Based on market data for this role and level, I'm looking at X to Y, depending on the total package.” Anchored, ranged, conditional. Hesitation before a number reads as an invitation to discount it — rehearse until the hesitation is gone.",
        "id": "Pola penyampaian: “Berdasarkan data pasar untuk peran dan level ini, saya mengincar X sampai Y, tergantung paket totalnya.” Berjangkar, berrentang, bersyarat. Keraguan sebelum angka terbaca sebagai undangan untuk memotongnya — latih sampai keraguan itu hilang."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "The weakness question",
        "id": "Pertanyaan kelemahan"
       },
       "q": {
        "en": "“What is your greatest weakness?”",
        "id": "“Apa kelemahan terbesarmu?”"
       },
       "weak": {
        "en": "I'd say I'm a perfectionist — I just care too much about quality, and sometimes I work too hard.",
        "id": "Saya rasa saya perfeksionis — terlalu peduli kualitas, dan kadang bekerja terlalu keras."
       },
       "strong": {
        "en": "I default to doing instead of delegating. It cost me once: on a campus event I kept three tasks I should have handed over, and two were late. Since then I write a handover list at the start of every project — who takes what, by when. My last two projects shipped on time because of it.",
        "id": "Saya cenderung mengerjakan sendiri alih-alih mendelegasikan. Pernah ada harganya: di sebuah acara kampus saya memegang tiga tugas yang seharusnya diserahkan, dan dua terlambat. Sejak itu saya menulis daftar serah terima di awal tiap proyek — siapa memegang apa, sampai kapan. Dua proyek terakhir saya selesai tepat waktu karenanya."
       },
       "why": {
        "en": "The disguised strength fails the trust test instantly. Real weakness + one honest cost + a working system = self-awareness with receipts.",
        "id": "Kekuatan yang disamarkan langsung gagal dalam ujian kepercayaan. Kelemahan nyata + satu dampak jujur + sistem yang berjalan = kesadaran diri dengan bukti."
       }
      },
      {
       "tag": {
        "en": "Why are you leaving?",
        "id": "Mengapa kamu pergi?"
       },
       "weak": {
        "en": "Honestly my manager plays favourites and the company is a mess — there's no appreciation for people who actually work.",
        "id": "Jujur atasan saya pilih kasih dan perusahaannya kacau — tidak ada penghargaan untuk orang yang benar-benar bekerja."
       },
       "strong": {
        "en": "I've grown a lot there — I built their reporting from scratch. What I can't get there is scale: the data problems I want next are the kind this team works on daily. I'm moving toward that, not away from anything.",
        "id": "Saya banyak bertumbuh di sana — saya membangun sistem pelaporannya dari nol. Yang tidak bisa saya dapatkan di sana adalah skala: masalah data yang saya inginkan berikutnya adalah jenis yang dikerjakan tim ini setiap hari. Saya bergerak menuju sesuatu, bukan menghindari sesuatu."
       },
       "why": {
        "en": "Bitterness confirms the risk the question hunts. Facing forward — credit to the past, pull toward the future — clears it.",
        "id": "Kepahitan mengonfirmasi risiko yang diburu pertanyaan itu. Menghadap ke depan — menghargai masa lalu, tertarik ke masa depan — melewatinya."
       }
      }
     ],
     "listen": [
      {
       "label": {
        "en": "A difficult case in one breath — the gap",
        "id": "Kasus sulit dalam satu napas — jeda karier"
       },
       "text": {
        "en": "I took eight months out to care for my father. During that time I kept my skills alive with two freelance dashboard projects — I'm happy to show them. I'm back at full capacity, and honestly, hungrier than before.",
        "id": "Saya rehat delapan bulan untuk merawat ayah saya. Selama itu keterampilan saya tetap hidup lewat dua proyek dashboard lepas — dengan senang hati saya tunjukkan. Saya kembali dengan kapasitas penuh, dan jujur, lebih lapar dari sebelumnya."
       }
      }
     ],
     "tryit": {
      "qid": "hr08",
      "label": {
       "en": "Your weakness, for real, on the clock",
       "id": "Kelemahanmu, sungguhan, dengan waktu berjalan"
      },
      "desc": {
       "en": "The simulator reads whether your answer carries a cost and a system — or just adjectives.",
       "id": "Simulator membaca apakah jawabanmu memuat dampak dan sistem — atau hanya kata sifat."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "The disguised-strength weakness",
         "id": "Kelemahan yang menyamar sebagai kekuatan"
        },
        "fix": {
         "en": "“I work too hard” fails the trust test instantly. Real weakness, one honest cost, working system.",
         "id": "“Saya bekerja terlalu keras” langsung gagal uji kepercayaan. Kelemahan nyata, satu dampak jujur, sistem yang berjalan."
        }
       },
       {
        "h": {
         "en": "Litigating your old employer",
         "id": "Mengadili tempat kerja lama"
        },
        "fix": {
         "en": "Face forward: what you are moving toward. Bitterness confirms the exact risk being probed.",
         "id": "Menghadap ke depan: apa yang kamu tuju. Kepahitan justru mengonfirmasi risiko yang sedang diuji."
        }
       },
       {
        "h": {
         "en": "Flinching before the salary number",
         "id": "Gentar sebelum menyebut angka gaji"
        },
        "fix": {
         "en": "A researched range, stated in one calm sentence, with what it depends on. Rehearse until boring.",
         "id": "Rentang hasil riset, diucapkan dalam satu kalimat tenang, beserta faktor penentunya. Latih sampai membosankan."
        }
       }
      ]
     }
    },
    {
     "n": "4.4",
     "title": {
      "en": "Closing the HR Interview and Follow-Up Protocol",
      "id": "Menutup Wawancara HR dan Protokol Tindak Lanjut"
     },
     "kind": "reading",
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Interviews are remembered by their endings. The last five minutes — your questions, your close, and the follow-up that lands the next day — are the cheapest points on the board. This lesson covers the closing question set, the thank-you note that adds signal instead of flattery, and the etiquette of waiting.",
      "id": "Wawancara diingat dari akhirnya. Lima menit terakhir — pertanyaanmu, penutupmu, dan tindak lanjut yang tiba keesokan harinya — adalah poin termurah di papan skor. Pelajaran ini membahas rangkaian pertanyaan penutup, ucapan terima kasih yang menambah sinyal alih-alih menjilat, dan etika menunggu."
     },
     "objectives": [
      {
       "en": "Ask closing questions that add signal about your judgment.",
       "id": "Mengajukan pertanyaan penutup yang menambah sinyal tentang pertimbanganmu."
      },
      {
       "en": "Write a follow-up note that strengthens your candidacy in four sentences.",
       "id": "Menulis pesan tindak lanjut yang memperkuat pencalonanmu dalam empat kalimat."
      },
      {
       "en": "Handle silence after the interview without damaging your position.",
       "id": "Menghadapi keheningan pasca wawancara tanpa merusak posisimu."
      }
     ],
     "takeaways": [
      {
       "en": "Your questions are scored too: ask about the work and the standard, never the perks first.",
       "id": "Pertanyaanmu juga dinilai: tanyakan pekerjaan dan standarnya, jangan pernah fasilitas lebih dulu."
      },
      {
       "en": "A good follow-up adds one thing: a sharpened answer, a relevant link, a concrete next step.",
       "id": "Tindak lanjut yang baik menambah satu hal: jawaban yang dipertajam, tautan relevan, langkah lanjut konkret."
      },
      {
       "en": "One polite nudge after the stated timeline passes — then let your other processes carry your leverage.",
       "id": "Satu pengingat sopan setelah linimasa yang dijanjikan lewat — lalu biarkan proses-proses lainmu memikul posisi tawarmu."
      }
     ],
     "check": {
      "q": {
       "en": "The best follow-up email after an HR screen:",
       "id": "Email tindak lanjut terbaik setelah penyaringan HR:"
      },
      "options": [
       {
        "en": "Thanks them, adds one concrete strengthening detail, and confirms next steps",
        "id": "Berterima kasih, menambah satu detail penguat konkret, dan mengonfirmasi langkah berikutnya"
       },
       {
        "en": "Repeats your entire positioning statement in writing",
        "id": "Mengulang seluruh positioning statement-mu secara tertulis"
       },
       {
        "en": "Asks whether you got the job",
        "id": "Menanyakan apakah kamu diterima"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — short, additive, forward-looking. It is your last quotable line in their notes.",
       "id": "Benar — singkat, menambah nilai, menghadap ke depan. Itulah kalimat terakhirmu yang bisa dikutip dalam catatan mereka."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The last five minutes",
        "id": "Lima menit terakhir"
       },
       "body": {
        "en": "When they ask for your questions, three archetypes work in every room: the standard question (“what does excellent look like in this role after six months?”), the reality question (“what is the hardest part of this job that the description doesn't say?”), and the growth question (“how have people grown out of this role before?”). Two or three, asked with genuine curiosity — then a clean close: appreciation, one line of enthusiasm, next steps.",
        "id": "Saat mereka meminta pertanyaanmu, tiga arketipe bekerja di semua ruangan: pertanyaan standar (“seperti apa ‘unggul’ pada peran ini setelah enam bulan?”), pertanyaan realitas (“apa bagian tersulit pekerjaan ini yang tidak tertulis di deskripsi?”), dan pertanyaan pertumbuhan (“bagaimana orang-orang sebelumnya bertumbuh dari peran ini?”). Dua atau tiga, ditanyakan dengan rasa ingin tahu tulus — lalu penutup bersih: apresiasi, satu kalimat antusiasme, langkah berikutnya."
       }
      },
      {
       "h": {
        "en": "The follow-up that adds",
        "id": "Tindak lanjut yang menambah"
       },
       "body": {
        "en": "Within twenty-four hours, four sentences: thanks with one specific reference to the conversation; one addition — a sharper version of an answer you fumbled, or a link to work you mentioned; enthusiasm in one line; confirmation of the next step. That is signal. Long letters, flattery, or essays re-arguing your case are noise that ages badly.",
        "id": "Dalam dua puluh empat jam, empat kalimat: terima kasih dengan satu rujukan spesifik ke percakapan; satu tambahan — versi lebih tajam dari jawaban yang tadi tersendat, atau tautan karya yang kamu sebut; antusiasme satu kalimat; konfirmasi langkah berikutnya. Itulah sinyal. Surat panjang, sanjungan, atau esai yang mengulang argumen adalah derau yang cepat basi."
       }
      },
      {
       "h": {
        "en": "The etiquette of waiting",
        "id": "Etika menunggu"
       },
       "body": {
        "en": "Ask for the timeline in the room, then respect it. If it passes, one polite nudge referencing the stated date. After that, silence from you — continued chasing converts interest into pity. Keep other processes moving; nothing improves your patience, your posture, and your eventual negotiation like a live alternative.",
        "id": "Tanyakan linimasa di dalam ruangan, lalu hormati. Jika terlewat, satu pengingat sopan yang merujuk tanggal yang dijanjikan. Setelah itu, hening darimu — pengejaran terus-menerus mengubah minat menjadi iba. Jaga proses lain tetap berjalan; tidak ada yang memperbaiki kesabaran, sikap, dan negosiasi akhirmu seperti alternatif yang masih hidup."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "The follow-up email",
        "id": "Email tindak lanjut"
       },
       "weak": {
        "en": "Dear Ms. Sari, thank you so much for the amazing opportunity to interview at your wonderful company. I have always dreamed of working somewhere like this. I really really hope to hear good news. I will wait every day for your reply. Thank you again and again.",
        "id": "Ibu Sari yang terhormat, terima kasih banyak atas kesempatan luar biasa untuk wawancara di perusahaan Anda yang hebat. Saya selalu bermimpi bekerja di tempat seperti ini. Saya sangat sangat berharap kabar baik. Saya akan menunggu balasan setiap hari. Terima kasih berulang kali."
       },
       "strong": {
        "en": "Dear Ms. Sari — thank you for this morning's conversation, especially your point about the Q4 reporting bottleneck. One addition: the automation I mentioned is documented here [link] — the version relevant to your stack. I'm genuinely enthusiastic about the role, and I look forward to the next step you mentioned for next week. Best regards.",
        "id": "Ibu Sari — terima kasih atas percakapan tadi pagi, khususnya poin Anda tentang hambatan pelaporan Q4. Satu tambahan: otomasi yang saya sebut terdokumentasi di sini [tautan] — versi yang relevan dengan sistem Anda. Saya sungguh antusias dengan peran ini, dan menantikan langkah berikutnya yang Anda sebut untuk pekan depan. Salam hormat."
       },
       "why": {
        "en": "Four sentences: specific thanks, one strengthening addition, one line of enthusiasm, next step. Signal — not flattery, not begging.",
        "id": "Empat kalimat: terima kasih spesifik, satu tambahan penguat, satu kalimat antusiasme, langkah berikutnya. Sinyal — bukan sanjungan, bukan memohon."
       }
      }
     ],
     "tryit": {
      "qid": "hr16",
      "label": {
       "en": "Drill your closing questions",
       "id": "Latih pertanyaan penutupmu"
      },
      "desc": {
       "en": "“What questions do you have for us?” — bring the standard, reality and growth archetypes.",
       "id": "“Apa pertanyaanmu untuk kami?” — bawa arketipe standar, realitas, dan pertumbuhan."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "negotiation",
        "id": "negosiasi"
       },
       "def": {
        "en": "The conversation after a written offer and before acceptance where terms can move — expected, when done professionally.",
        "id": "Percakapan setelah penawaran tertulis dan sebelum penerimaan, saat ketentuan bisa bergerak — hal wajar bila dilakukan profesional."
       }
      }
     ]
    }
   ]
  },
  {
   "num": 5,
   "title": {
    "en": "The Technical &amp; User Interview",
    "id": "Wawancara Teknis &amp; User"
   },
   "overview": {
    "en": "The middle rounds test how you think and how you work beside others. This module reframes technical questions as thinking tests, installs the graceful “I don't know” protocol, decodes the peer interview's real question — would we survive a bad week together? — and builds your function-specific deep-dive preparation.",
    "id": "Babak-babak tengah menguji cara berpikirmu dan caramu bekerja di samping orang lain. Modul ini membingkai ulang pertanyaan teknis sebagai ujian berpikir, memasang protokol “saya tidak tahu” yang anggun, membedah pertanyaan sebenarnya wawancara rekan — sanggupkah kita melewati minggu buruk bersama? — dan membangun persiapan pendalaman spesifik fungsimu."
   },
   "outcome": {
    "en": "By the end of this module you can think aloud through unfamiliar problems, handle the edge of your knowledge with credibility, and turn peer interviews into allies who argue for you in the debrief.",
    "id": "Di akhir modul ini kamu bisa berpikir bersuara menembus masalah asing, menghadapi batas pengetahuanmu dengan kredibilitas, dan mengubah wawancara rekan menjadi sekutu yang membelamu di debrief."
   },
   "lessons": [
    {
     "n": "5.1",
     "title": {
      "en": "Technical Questions as Thinking Tests",
      "id": "Pertanyaan Teknis sebagai Ujian Berpikir"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The interviewer already knows the answer; what they cannot see is your method. Clarify, structure, solve aloud, verify — the four-beat loop that makes even a wrong answer score. This lesson installs the loop and the habit of narrating your reasoning without narrating your panic.",
      "id": "Pewawancara sudah tahu jawabannya; yang tidak bisa mereka lihat adalah metodemu. Klarifikasi, strukturkan, selesaikan bersuara, verifikasi — putaran empat ketukan yang membuat jawaban keliru pun tetap bernilai. Pelajaran ini memasang putarannya dan kebiasaan menarasikan penalaranmu tanpa menarasikan panikmu."
     },
     "objectives": [
      {
       "en": "Apply the clarify → structure → solve → verify loop to any technical question.",
       "id": "Menerapkan putaran klarifikasi → struktur → selesaikan → verifikasi pada pertanyaan teknis apa pun."
      },
      {
       "en": "Narrate reasoning aloud in a way interviewers can score.",
       "id": "Menarasikan penalaran bersuara dengan cara yang bisa dinilai pewawancara."
      },
      {
       "en": "Recover from a wrong path visibly and gracefully.",
       "id": "Pulih dari jalur keliru secara terlihat dan anggun."
      }
     ],
     "takeaways": [
      {
       "en": "Clarifying first is not weakness — it is the most senior move in the room.",
       "id": "Mengklarifikasi lebih dulu bukan kelemahan — itu langkah paling senior di ruangan."
      },
      {
       "en": "A wrong answer with visible method outscores a right answer produced in silence.",
       "id": "Jawaban keliru dengan metode terlihat mengungguli jawaban benar yang lahir dalam diam."
      },
      {
       "en": "Verification aloud — “let me sanity-check that” — is the loop most candidates skip.",
       "id": "Verifikasi bersuara — “saya cek kewajarannya dulu” — adalah ketukan yang paling sering dilewati kandidat."
      }
     ],
     "check": {
      "q": {
       "en": "You realise mid-answer that your approach is wrong. Best move:",
       "id": "Di tengah jawaban kamu sadar pendekatanmu keliru. Langkah terbaik:"
      },
      "options": [
       {
        "en": "Go quiet and think until you are certain",
        "id": "Diam dan berpikir sampai benar-benar yakin"
       },
       {
        "en": "Say so, name why, and restart on the better path",
        "id": "Katakan, sebut alasannya, dan mulai ulang di jalur yang lebih baik"
       },
       {
        "en": "Push through to the end so you look decisive",
        "id": "Terus sampai akhir agar terlihat tegas"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — “actually, this breaks on X; let me restart from the constraint” is a senior behaviour, scored as such.",
       "id": "Benar — “sebentar, ini gagal pada X; saya mulai ulang dari kendalanya” adalah perilaku senior, dan dinilai demikian."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The four beats",
        "id": "Empat ketukan"
       },
       "body": {
        "en": "Clarify: restate the problem and surface assumptions — scope, constraints, success criteria. Structure: announce your plan before executing it. Solve: work the plan aloud, flagging forks and choices. Verify: check the result against a quick independent estimate or an edge case. The beats take discipline precisely when adrenaline says rush — which is why they are practised, not remembered.",
        "id": "Klarifikasi: nyatakan ulang masalah dan angkat asumsi — lingkup, kendala, kriteria berhasil. Struktur: umumkan rencanamu sebelum mengeksekusinya. Selesaikan: kerjakan rencana bersuara, tandai persimpangan dan pilihan. Verifikasi: uji hasil terhadap estimasi independen cepat atau kasus tepi. Ketukan ini menuntut disiplin justru saat adrenalin menyuruh buru-buru — karena itu ia dilatih, bukan diingat."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Narrating without spiralling",
        "id": "Bernarasi tanpa berpusar"
       },
       "body": {
        "en": "Think-aloud is not stream-of-consciousness. Narrate decisions and reasons — “I'll segment by channel first because the drop could be concentrated” — not doubts and apologies. If you need silent seconds, buy them explicitly: “give me ten seconds to structure this.” Silence you announced reads as control; silence that just happens reads as freezing.",
        "id": "Berpikir bersuara bukan arus kesadaran. Narasikan keputusan dan alasan — “saya pilah per kanal dulu karena penurunannya mungkin terkonsentrasi” — bukan keraguan dan permintaan maaf. Jika butuh detik-detik hening, beli secara eksplisit: “beri saya sepuluh detik untuk menstrukturkan ini.” Hening yang kamu umumkan terbaca sebagai kendali; hening yang terjadi begitu saja terbaca sebagai membeku."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "What is actually being scored",
        "id": "Yang sebenarnya dinilai"
       },
       "body": {
        "en": "Method, decomposition, judgment at forks, honesty about assumptions, and recovery from error. Speed matters far less than candidates believe; direction changes matter far less than how they are handled. The interviewer is simulating working with you on a hard problem — make the simulation pleasant and rigorous at once.",
        "id": "Metode, penguraian, pertimbangan di persimpangan, kejujuran soal asumsi, dan pemulihan dari kesalahan. Kecepatan jauh kurang penting dari yang diyakini kandidat; perubahan arah jauh kurang penting daripada cara menanganinya. Pewawancara sedang menyimulasikan bekerja bersamamu pada masalah sulit — buat simulasi itu menyenangkan sekaligus teliti."
       },
       "icon": "target"
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The four-beat loop for any technical question",
       "id": "Putaran empat ketukan untuk pertanyaan teknis apa pun"
      },
      "items": [
       {
        "h": {
         "en": "Clarify",
         "id": "Klarifikasi"
        },
        "sub": {
         "en": "Restate, surface assumptions, define success",
         "id": "Nyatakan ulang, angkat asumsi, definisikan berhasil"
        }
       },
       {
        "h": {
         "en": "Structure",
         "id": "Strukturkan"
        },
        "sub": {
         "en": "Announce the plan before executing",
         "id": "Umumkan rencana sebelum eksekusi"
        }
       },
       {
        "h": {
         "en": "Solve aloud",
         "id": "Selesaikan bersuara"
        },
        "sub": {
         "en": "Narrate decisions and forks, not doubts",
         "id": "Narasikan keputusan dan persimpangan, bukan keraguan"
        }
       },
       {
        "h": {
         "en": "Verify",
         "id": "Verifikasi"
        },
        "sub": {
         "en": "Sanity-check against an estimate or edge case",
         "id": "Uji kewajaran terhadap estimasi atau kasus tepi"
        }
       }
      ],
      "note": {
       "en": "A wrong answer reached by visible method outscores a right answer produced in silence.",
       "id": "Jawaban keliru yang dicapai dengan metode terlihat mengungguli jawaban benar yang lahir dalam diam."
      },
      "exhibit": {
       "en": "Exhibit 10: The four-beat loop for any technical question",
       "id": "Peraga 10: Putaran empat ketukan untuk pertanyaan teknis apa pun"
      },
      "longdesc": {
       "en": "Diagram of The four-beat loop for any technical question. It presents, in order: Clarify — Restate, surface assumptions, define success; Structure — Announce the plan before executing; Solve aloud — Narrate decisions and forks, not doubts; Verify — Sanity-check against an estimate or edge case.",
       "id": "Diagram Putaran empat ketukan untuk pertanyaan teknis apa pun. Menyajikan, berurutan: Klarifikasi — Nyatakan ulang, angkat asumsi, definisikan berhasil; Strukturkan — Umumkan rencana sebelum eksekusi; Selesaikan bersuara — Narasikan keputusan dan persimpangan, bukan keraguan; Verifikasi — Uji kewajaran terhadap estimasi atau kasus tepi."
      }
     },
     "tryit": {
      "qid": "tc02",
      "label": {
       "en": "Show your first move",
       "id": "Tunjukkan langkah pertamamu"
      },
      "desc": {
       "en": "“What do you do before solving?” — walk the simulator through a real example, beats one and two.",
       "id": "“Apa yang kamu lakukan sebelum menyelesaikan?” — ajak simulator menyusuri contoh nyata, ketukan satu dan dua."
      }
     },
     "scenario": {
      "icon": "gear",
      "img": "../../assets/bg/stage-execution.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat Dalam Sorotan"
      },
      "body": [
       {
        "en": "Bayu freezes at the whiteboard. The system-design question has seven parts and he knows maybe four. The candidate before him answered fast and confidently — and wrongly, twice, without noticing. Bayu does something different: “Let me make sure I understand the constraints first.” He asks three questions, states two assumptions out loud, and solves the four parts he knows while naming the edge of the rest. He gets the offer. The fast candidate does not.",
        "id": "Bayu terpaku di papan tulis. Soal desain sistemnya punya tujuh bagian dan ia menguasai mungkin empat. Kandidat sebelumnya menjawab cepat dan percaya diri — dan keliru, dua kali, tanpa sadar. Bayu melakukan hal berbeda: “Izinkan saya pastikan dulu kendalanya.” Ia bertanya tiga hal, menyebut dua asumsi dengan lantang, dan menyelesaikan empat bagian yang ia kuasai sambil menamai batas sisanya. Ia mendapat tawaran. Kandidat yang cepat itu tidak."
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Diving in before clarifying",
         "id": "Menyelam sebelum mengklarifikasi"
        },
        "fix": {
         "en": "Restate the problem and surface assumptions first — clarifying is the most senior move in the room.",
         "id": "Nyatakan ulang masalah dan angkat asumsi lebih dulu — klarifikasi adalah langkah paling senior di ruangan."
        }
       },
       {
        "h": {
         "en": "Thinking in silence",
         "id": "Berpikir dalam diam"
        },
        "fix": {
         "en": "Announce silence when you need it: “ten seconds to structure this.” Unannounced silence reads as freezing.",
         "id": "Umumkan hening saat membutuhkannya: “sepuluh detik untuk menstrukturkan ini.” Hening tanpa pengumuman terbaca membeku."
        }
       },
       {
        "h": {
         "en": "Defending a path you know is wrong",
         "id": "Mempertahankan jalur yang kamu tahu keliru"
        },
        "fix": {
         "en": "Say it, name why, restart: visible recovery from error scores higher than stubborn consistency.",
         "id": "Katakan, sebut alasannya, mulai ulang: pemulihan kesalahan yang terlihat bernilai lebih tinggi daripada konsistensi keras kepala."
        }
       }
      ]
     }
    },
    {
     "n": "5.2",
     "title": {
      "en": "Handling &quot;I Don&#39;t Know&quot; Gracefully",
      "id": "Menghadapi &quot;Saya Tidak Tahu&quot; dengan Anggun"
     },
     "kind": "reading",
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Every interview eventually reaches the edge of your knowledge — by design. What happens next separates candidates: bluffing collapses under one follow-up, silence reads as freezing, but the IDK protocol — name it, bound it, plan it — converts the edge into evidence of professional honesty.",
      "id": "Setiap wawancara akhirnya mencapai batas pengetahuanmu — memang dirancang begitu. Yang terjadi berikutnya memisahkan kandidat: gertakan runtuh oleh satu pertanyaan lanjutan, diam terbaca membeku, tetapi protokol STT — sebut, batasi, rencanakan — mengubah batas itu menjadi bukti kejujuran profesional."
     },
     "objectives": [
      {
       "en": "Execute the name → bound → plan protocol at the edge of your knowledge.",
       "id": "Menjalankan protokol sebut → batasi → rencanakan di batas pengetahuanmu."
      },
      {
       "en": "Distinguish partial knowledge from no knowledge, honestly.",
       "id": "Membedakan pengetahuan parsial dari nol pengetahuan, dengan jujur."
      },
      {
       "en": "Avoid the bluff — and recognise why interviewers always catch it.",
       "id": "Menghindari gertakan — dan memahami mengapa pewawancara selalu menangkapnya."
      }
     ],
     "takeaways": [
      {
       "en": "“I don't know, and here is how I'd find out” is a scoring answer, not a forfeit.",
       "id": "“Saya tidak tahu, dan begini cara saya mencarinya” adalah jawaban bernilai, bukan menyerah."
      },
      {
       "en": "Bound the unknown: say what you do know that borders it.",
       "id": "Batasi yang tak diketahui: sebutkan apa yang kamu tahu di sekitarnya."
      },
      {
       "en": "Interviewers probe depth until they find the edge — reaching it is the plan, not the failure.",
       "id": "Pewawancara menggali sampai menemukan batas — mencapainya adalah rencananya, bukan kegagalannya."
      }
     ],
     "check": {
      "q": {
       "en": "Asked about a method you have never used, you should:",
       "id": "Ditanya tentang metode yang belum pernah kamu pakai, kamu sebaiknya:"
      },
      "options": [
       {
        "en": "Improvise a definition from the name and hope",
        "id": "Improvisasi definisi dari namanya dan berharap"
       },
       {
        "en": "Redirect to a topic you know better without acknowledging",
        "id": "Alihkan ke topik yang lebih kamu kuasai tanpa mengakui"
       },
       {
        "en": "Say you have not used it, state the adjacent thing you know, and describe how you would ramp up",
        "id": "Katakan belum pernah, sebutkan hal terdekat yang kamu kuasai, dan jelaskan cara mengejarnya"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — the protocol in action. One follow-up destroys the improvised definition; nothing destroys honest bounding.",
       "id": "Benar — protokolnya beraksi. Satu pertanyaan lanjutan menghancurkan definisi improvisasi; tidak ada yang menghancurkan pembatasan yang jujur."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Why bluffing always loses",
        "id": "Mengapa gertakan selalu kalah"
       },
       "body": {
        "en": "The interviewer asks about X because they know X. Your improvised answer is being compared against real knowledge in real time, and the follow-up — there is always a follow-up — is aimed at the exact soft spot. One bluff caught taints every honest answer before it. The mathematics of credibility are brutal: never spend it on a bluff.",
        "id": "Pewawancara bertanya tentang X karena mereka menguasai X. Jawaban improvisasimu sedang dibandingkan dengan pengetahuan sungguhan secara real-time, dan pertanyaan lanjutan — selalu ada — dibidikkan tepat ke titik lunaknya. Satu gertakan tertangkap menodai semua jawaban jujur sebelumnya. Matematika kredibilitas itu kejam: jangan pernah membelanjakannya untuk gertakan."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "The protocol",
        "id": "Protokolnya"
       },
       "body": {
        "en": "Name it: “I haven't worked with that directly.” Bound it: “What I do know is the neighbouring concept — here is how they relate as I understand it.” Plan it: “To get productive I'd start with the docs, build a small test case, and ask whoever owns it here for the local conventions.” Fifteen seconds, fully honest, and it demonstrates exactly how you will handle the unknown on the job — which is the real question.",
        "id": "Sebut: “Saya belum menangani itu langsung.” Batasi: “Yang saya kuasai adalah konsep tetangganya — begini keterkaitannya sejauh pemahaman saya.” Rencanakan: “Agar produktif saya akan mulai dari dokumentasi, membangun kasus uji kecil, dan bertanya pada pemiliknya di sini soal konvensi lokal.” Lima belas detik, sepenuhnya jujur, dan itu memperagakan persis caramu menghadapi hal tak dikenal dalam pekerjaan — yang memang pertanyaan sebenarnya."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "Partial knowledge, stated precisely",
        "id": "Pengetahuan parsial, dinyatakan presisi"
       },
       "body": {
        "en": "Most edges are partial: you read about it, used it once, know its cousin. Say exactly that — “I've used it in one project, not at scale” — and let the interviewer calibrate the follow-up. Precision about your own boundary is a competence signal in itself; seniors do it instinctively, and interviewers recognise the dialect.",
        "id": "Kebanyakan batas bersifat parsial: pernah membaca, pernah memakai sekali, kenal kerabatnya. Katakan persis itu — “pernah saya pakai di satu proyek, belum dalam skala besar” — dan biarkan pewawancara mengkalibrasi pertanyaan lanjutannya. Presisi tentang batas dirimu adalah sinyal kompetensi tersendiri; para senior melakukannya secara naluriah, dan pewawancara mengenali dialek itu."
       },
       "icon": "target"
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The IDK protocol",
       "id": "Protokol STT (saya tidak tahu)"
      },
      "items": [
       {
        "h": {
         "en": "Name it",
         "id": "Sebut"
        },
        "sub": {
         "en": "“I haven't worked with that directly”",
         "id": "“Saya belum menangani itu secara langsung”"
        }
       },
       {
        "h": {
         "en": "Bound it",
         "id": "Batasi"
        },
        "sub": {
         "en": "State the neighbouring thing you do know",
         "id": "Sebutkan hal terdekat yang kamu kuasai"
        }
       },
       {
        "h": {
         "en": "Plan it",
         "id": "Rencanakan"
        },
        "sub": {
         "en": "Docs → small test → ask the owner",
         "id": "Dokumentasi → uji kecil → tanya pemiliknya"
        }
       }
      ],
      "note": {
       "en": "Fifteen seconds, fully honest — and it demonstrates exactly how you will handle the unknown on the job.",
       "id": "Lima belas detik, sepenuhnya jujur — dan memperagakan persis caramu menghadapi hal tak dikenal dalam pekerjaan."
      },
      "exhibit": {
       "en": "Exhibit 11: The IDK protocol",
       "id": "Peraga 11: Protokol STT (saya tidak tahu)"
      },
      "longdesc": {
       "en": "Diagram of The IDK protocol. It presents, in order: Name it — “I haven't worked with that directly”; Bound it — State the neighbouring thing you do know; Plan it — Docs → small test → ask the owner.",
       "id": "Diagram Protokol STT (saya tidak tahu). Menyajikan, berurutan: Sebut — “Saya belum menangani itu secara langsung”; Batasi — Sebutkan hal terdekat yang kamu kuasai; Rencanakan — Dokumentasi → uji kecil → tanya pemiliknya."
      }
     },
     "listen": [
      {
       "label": {
        "en": "The protocol, spoken end to end",
        "id": "Protokolnya, diucapkan utuh"
       },
       "text": {
        "en": "I haven't used that framework directly. What I do know well is its predecessor — as I understand it, the main difference is the rendering model. To get productive I'd start with the migration guide, build one small component as a test, and ask whoever owns the codebase here about local conventions. I'd expect to be useful within days, not weeks.",
        "id": "Saya belum memakai framework itu secara langsung. Yang saya kuasai adalah pendahulunya — sejauh pemahaman saya, perbedaan utamanya pada model rendering. Agar produktif saya akan mulai dari panduan migrasi, membangun satu komponen kecil sebagai uji, dan bertanya pada pemilik kode di sini soal konvensi lokal. Perkiraan saya, saya sudah berguna dalam hitungan hari, bukan minggu."
       }
      }
     ],
     "tryit": {
      "qid": "tc03",
      "label": {
       "en": "Say “I don't know” under observation",
       "id": "Ucapkan “saya tidak tahu” sambil diamati"
      },
      "desc": {
       "en": "Practice the moment you fear — the edge of your knowledge, handled with a plan.",
       "id": "Latih momen yang kamu takuti — batas pengetahuanmu, dihadapi dengan rencana."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Improvising a definition from the term's name",
         "id": "Mengarang definisi dari nama istilahnya"
        },
        "fix": {
         "en": "The interviewer knows the real answer; the follow-up aims exactly at your soft spot. Never bluff.",
         "id": "Pewawancara tahu jawaban sebenarnya; pertanyaan lanjutan membidik persis titik lunakmu. Jangan pernah menggertak."
        }
       },
       {
        "h": {
         "en": "A bare “I don't know”",
         "id": "“Saya tidak tahu” yang telanjang"
        },
        "fix": {
         "en": "Attach the plan: what you'd check, who you'd ask, when you'd come back. IDK plus plan scores.",
         "id": "Sertakan rencananya: apa yang akan dicek, siapa yang ditanya, kapan kamu kembali. STT plus rencana itu bernilai."
        }
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "follow-up",
        "id": "pertanyaan lanjutan"
       },
       "def": {
        "en": "The probing question after your answer — where inflated claims collapse and honest depth scores.",
        "id": "Pertanyaan pengejar setelah jawabanmu — tempat klaim gelembung runtuh dan kedalaman jujur bernilai."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Kekonkretan yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai rubrik."
       }
      }
     ]
    },
    {
     "n": "5.3",
     "title": {
      "en": "The User/Peer Interview Dynamic",
      "id": "Dinamika Wawancara User/Rekan"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Peers are not testing whether you are impressive; they are testing whether Tuesday with you will be bearable. Load-sharing, communication under friction, ego when challenged, help given and asked for — this lesson decodes the partnership test and how to interview your future teammates back.",
      "id": "Rekan tidak menguji apakah kamu mengesankan; mereka menguji apakah hari Selasa bersamamu akan tertanggungkan. Berbagi beban, komunikasi saat bergesekan, ego ketika ditantang, bantuan yang diberi dan diminta — pelajaran ini membedah ujian kemitraan itu dan cara mewawancarai balik calon rekan setimmu."
     },
     "objectives": [
      {
       "en": "Answer peer questions with collaboration scenes, not solo trophies.",
       "id": "Menjawab pertanyaan rekan dengan adegan kolaborasi, bukan trofi solo."
      },
      {
       "en": "Show healthy help-seeking and help-giving behaviour.",
       "id": "Menunjukkan perilaku sehat dalam meminta dan memberi bantuan."
      },
      {
       "en": "Ask peers the questions that reveal the team's real weather.",
       "id": "Menanyakan hal-hal yang mengungkap cuaca sebenarnya tim kepada para rekan."
      }
     ],
     "takeaways": [
      {
       "en": "Peers imagine working beside you on a bad week — give them scenes of exactly that.",
       "id": "Rekan membayangkan bekerja di sampingmu pada minggu buruk — beri mereka adegan persis itu."
      },
      {
       "en": "Asking for help early is a strength signal in peer rooms, not a confession.",
       "id": "Meminta bantuan lebih awal adalah sinyal kekuatan di ruang rekan, bukan pengakuan lemah."
      },
      {
       "en": "Their answers to your questions tell you the team's truth — listen as hard as you speak.",
       "id": "Jawaban mereka atas pertanyaanmu memberitahumu kebenaran tim itu — dengarkan sekeras kamu bicara."
      }
     ],
     "check": {
      "q": {
       "en": "In a peer interview, the strongest story choice is:",
       "id": "Dalam wawancara rekan, pilihan kisah terkuat adalah:"
      },
      "options": [
       {
        "en": "A collaboration under pressure where you shared load and credit",
        "id": "Kolaborasi di bawah tekanan saat kamu berbagi beban dan kredit"
       },
       {
        "en": "Your biggest individual achievement",
        "id": "Pencapaian individual terbesarmu"
       },
       {
        "en": "A story where you outperformed a weak teammate",
        "id": "Kisah saat kamu mengungguli rekan yang lemah"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — the room is a partnership test. Outshining teammates is the exact wrong evidence here.",
       "id": "Benar — ruangan ini ujian kemitraan. Mengungguli rekan justru bukti yang paling keliru di sini."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The Tuesday question",
        "id": "Pertanyaan hari Selasa"
       },
       "body": {
        "en": "Behind every peer question sits one image: a slipping deadline, a broken build, a disagreement at 5 pm — with you in the room. Will you communicate or go dark? Share load or guard territory? Stay curious or get defensive? Choose stories that show you in exactly those moments, behaving like someone worth having on the rope.",
        "id": "Di balik tiap pertanyaan rekan ada satu bayangan: tenggat molor, sistem rusak, beda pendapat jam 5 sore — denganmu di ruangan itu. Kamu akan berkomunikasi atau menghilang? Berbagi beban atau menjaga wilayah? Tetap ingin tahu atau defensif? Pilih kisah yang menunjukkanmu persis di momen-momen itu, berperilaku seperti orang yang layak berada di tali yang sama."
       }
      },
      {
       "h": {
        "en": "Help as a signal",
        "id": "Bantuan sebagai sinyal"
       },
       "body": {
        "en": "Peers fear two extremes: the hero who never asks and melts down at scale, and the passenger who asks before trying. The healthy middle has a protocol: try, timebox, then ask precisely — “I've tried A and B, I'm stuck on C, can you look?” Tell one story of asking exactly like that, and one of being the person others asked. Both directions matter.",
        "id": "Rekan takut pada dua ekstrem: sang pahlawan yang tak pernah bertanya lalu tumbang saat skala membesar, dan sang penumpang yang bertanya sebelum mencoba. Jalan tengah yang sehat punya protokol: coba, batasi waktu, lalu bertanya presisi — “Saya sudah coba A dan B, macet di C, bisa tolong lihat?” Ceritakan satu kisah bertanya persis seperti itu, dan satu kisah menjadi orang yang ditanya. Dua arah itu sama penting."
       }
      },
      {
       "h": {
        "en": "Interviewing them back",
        "id": "Mewawancarai mereka balik"
       },
       "body": {
        "en": "Peers answer more honestly than managers. Ask: what does a normal week actually look like? What breaks first when things get busy? What would you change about how the team works? Their hesitations are data. A peer round where you learned nothing about the team was a wasted intelligence opportunity, whatever the verdict.",
        "id": "Rekan menjawab lebih jujur daripada manajer. Tanyakan: seperti apa minggu normal sebenarnya? Apa yang pertama jebol saat sibuk? Apa yang ingin kamu ubah dari cara tim bekerja? Keraguan mereka adalah data. Babak rekan tanpa pengetahuan baru tentang tim adalah peluang intelijen yang terbuang, apa pun hasilnya."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "The peer room hears differently",
        "id": "Ruang rekan mendengar dengan cara berbeda"
       },
       "q": {
        "en": "“Tell me about working with someone difficult.”",
        "id": "“Ceritakan bekerja dengan orang yang sulit.”"
       },
       "weak": {
        "en": "One teammate was really slow and honestly not very skilled, so I ended up doing most of the work myself and we delivered thanks to that.",
        "id": "Satu rekan sangat lambat dan jujur kurang terampil, jadi akhirnya saya kerjakan sebagian besar sendiri dan kami selesai berkat itu."
       },
       "strong": {
        "en": "A designer and I kept missing each other — my specs were too abstract for him, his mockups too final for me. I asked for thirty minutes and we found a working agreement: rough sketches before any polish, and my feedback within a day. The next two features shipped without a single redo. I'd rather fix the interface between people than route around a person.",
        "id": "Saya dan seorang desainer terus tidak nyambung — spesifikasi saya terlalu abstrak baginya, mockup-nya terlalu final bagi saya. Saya minta tiga puluh menit dan kami menemukan kesepakatan kerja: sketsa kasar sebelum dipoles, dan umpan balik saya dalam sehari. Dua fitur berikutnya rilis tanpa satu pun pengerjaan ulang. Saya lebih memilih memperbaiki antarmuka antar orang daripada memutari seseorang."
       },
       "why": {
        "en": "The weak answer outshines a teammate — the exact wrong evidence in a partnership test. The strong one fixes the collaboration and shares the win.",
        "id": "Jawaban lemah mengungguli rekan — bukti yang paling keliru dalam ujian kemitraan. Jawaban kuat memperbaiki kolaborasinya dan berbagi kemenangan."
       }
      }
     ],
     "tryit": {
      "qid": "bh14",
      "label": {
       "en": "Drill the partnership answer",
       "id": "Latih jawaban kemitraan"
      },
      "desc": {
       "en": "“Working with someone very different” — make the working agreement the hero, not yourself.",
       "id": "“Bekerja dengan orang yang sangat berbeda” — jadikan kesepakatan kerja sebagai pahlawannya, bukan dirimu."
      }
     }
    },
    {
     "n": "5.4",
     "title": {
      "en": "Technical Deep-Dive Questions by Function",
      "id": "Pertanyaan Pendalaman Teknis per Fungsi"
     },
     "kind": "interactive",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Every function has its deep-dive shape: engineers defend architecture choices, analysts defend metric definitions, marketers defend channel decisions, operators defend process trade-offs. This lesson teaches you to predict your function's five likely deep-dives and build evidence for each — with the career graph as your map.",
      "id": "Setiap fungsi punya bentuk pendalamannya: engineer mempertahankan pilihan arsitektur, analis mempertahankan definisi metrik, pemasar mempertahankan keputusan kanal, operator mempertahankan trade-off proses. Pelajaran ini mengajarkanmu meramalkan lima pendalaman fungsimu dan membangun bukti untuk masing-masing — dengan peta karier sebagai petamu."
     },
     "objectives": [
      {
       "en": "Identify the deep-dive shape of your target function.",
       "id": "Mengenali bentuk pendalaman fungsi targetmu."
      },
      {
       "en": "Predict five likely deep-dive questions for your role.",
       "id": "Meramalkan lima kemungkinan pertanyaan pendalaman untuk peranmu."
      },
      {
       "en": "Prepare a defended decision — options, choice, trade-off — for each.",
       "id": "Menyiapkan keputusan yang dipertahankan — opsi, pilihan, trade-off — untuk masing-masing."
      }
     ],
     "takeaways": [
      {
       "en": "Deep-dives probe decisions you claim as yours: be ready to defend the fork, not just describe the road.",
       "id": "Pendalaman menggali keputusan yang kamu klaim milikmu: siaplah mempertahankan persimpangannya, bukan sekadar menggambarkan jalannya."
      },
      {
       "en": "“Why not the alternative?” is the real question inside every deep-dive.",
       "id": "“Mengapa bukan alternatifnya?” adalah pertanyaan sebenarnya dalam setiap pendalaman."
      },
      {
       "en": "The Range's career directions list each role's core skills — use them as your prediction engine.",
       "id": "Arah karier di The Range mencantumkan keterampilan inti tiap peran — gunakan sebagai mesin prediksimu."
      }
     ],
     "check": {
      "q": {
       "en": "A deep-dive interviewer asks “why did you choose that approach?” They are really testing:",
       "id": "Pewawancara pendalaman bertanya “mengapa memilih pendekatan itu?” Yang sebenarnya diuji:"
      },
      "options": [
       {
        "en": "Whether you can recall the project timeline",
        "id": "Apakah kamu ingat linimasa proyeknya"
       },
       {
        "en": "Whether you saw alternatives and chose with reasons",
        "id": "Apakah kamu melihat alternatif dan memilih dengan alasan"
       },
       {
        "en": "Whether your approach matches their favourite",
        "id": "Apakah pendekatanmu sama dengan favorit mereka"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — judgment lives at the forks. Options seen, criteria used, trade-off accepted: that is the deep-dive answer shape.",
       "id": "Benar — pertimbangan hidup di persimpangan. Opsi yang terlihat, kriteria yang dipakai, trade-off yang diterima: itulah bentuk jawaban pendalaman."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The shape of a deep-dive",
        "id": "Bentuk sebuah pendalaman"
       },
       "body": {
        "en": "It starts from your own CV or answer: “you mentioned X — go deeper.” Then it descends: why this way, why not that way, what broke, what would you change now. The descent stops at your edge — by design. Preparation is therefore vertical, not horizontal: for your two or three flagship projects, be ready to go four levels down with honest detail.",
        "id": "Ia berangkat dari CV atau jawabanmu sendiri: “kamu menyebut X — perdalam.” Lalu menurun: mengapa begini, mengapa bukan begitu, apa yang rusak, apa yang akan kamu ubah sekarang. Penurunan berhenti di batasmu — memang dirancang begitu. Maka persiapan bersifat vertikal, bukan horizontal: untuk dua-tiga proyek unggulanmu, siaplah turun empat tingkat dengan detail jujur."
       }
      },
      {
       "h": {
        "en": "Prediction from the career graph",
        "id": "Prediksi dari peta karier"
       },
       "body": {
        "en": "Open your target direction in The Range (inside The Map). Its core skills are the deep-dive menu: each skill generates a “defend a decision involving this” question. Product roles get prioritisation and metric-choice dives; engineering gets architecture and debugging dives; sales gets pipeline and objection dives. Write your five, then attach a real defended decision to each.",
        "id": "Buka arah tujuanmu di The Range (dalam The Map). Keterampilan intinya adalah menu pendalaman: tiap keterampilan melahirkan pertanyaan “pertahankan sebuah keputusan yang melibatkan ini”. Peran produk mendapat pendalaman prioritisasi dan pemilihan metrik; engineering mendapat arsitektur dan debugging; sales mendapat pipeline dan penanganan keberatan. Tulis lima milikmu, lalu lekatkan satu keputusan nyata yang bisa dipertahankan pada masing-masing."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Step 1 · Write your five",
        "id": "Langkah 1 · Tulis lima milikmu"
       },
       "body": {
        "en": "From your target role's core skills, draft the five deep-dive questions you would ask a candidate for this role. Phrase them as an interviewer would.",
        "id": "Dari keterampilan inti peran targetmu, susun lima pertanyaan pendalaman yang akan kamu tanyakan kepada kandidat peran ini. Rumuskan seperti pewawancara."
       },
       "debrief": {
        "en": "If your five feel generic, they are horizontal. Verticalise: attach each to a specific artefact a candidate would own — a dashboard, a campaign, a pipeline, a system. “Defend your metric definitions on a dashboard you built” is a real deep-dive; “tell me about analytics” is not.",
        "id": "Jika lima milikmu terasa generik, berarti masih horizontal. Vertikalkan: lekatkan masing-masing pada artefak spesifik yang dimiliki kandidat — dashboard, kampanye, pipeline, sistem. “Pertahankan definisi metrik pada dashboard buatanmu” adalah pendalaman sungguhan; “ceritakan soal analitik” bukan."
       }
      },
      {
       "h": {
        "en": "Step 2 · Attach defended decisions",
        "id": "Langkah 2 · Lekatkan keputusan yang dipertahankan"
       },
       "body": {
        "en": "For each question, pick a real decision from your work: the options you saw, the criteria you used, the trade-off you accepted, what happened. One paragraph each, spoken aloud once.",
        "id": "Untuk tiap pertanyaan, pilih keputusan nyata dari pekerjaanmu: opsi yang kamu lihat, kriteria yang dipakai, trade-off yang diterima, apa yang terjadi. Satu paragraf masing-masing, diucapkan lantang sekali."
       },
       "debrief": {
        "en": "The defended-decision pattern: “I had A and B. A was faster, B was safer. Given the launch date, I chose A and mitigated the risk by X. It held, though today I'd add Y.” Options, criteria, mitigation, honesty about hindsight — four sentences that survive any depth of follow-up.",
        "id": "Pola keputusan yang dipertahankan: “Ada A dan B. A lebih cepat, B lebih aman. Mengingat tanggal rilis, saya pilih A dan meredam risikonya dengan X. Bertahan, meski hari ini saya akan menambah Y.” Opsi, kriteria, mitigasi, kejujuran atas tinjauan ulang — empat kalimat yang tahan pendalaman sedalam apa pun."
       }
      },
      {
       "h": {
        "en": "Step 3 · Find your edge on purpose",
        "id": "Langkah 3 · Temukan batasmu dengan sengaja"
       },
       "body": {
        "en": "For each flagship project, descend your own knowledge four levels until you hit the point where you would say “I don't know”. Write the honest IDK sentence for that point, using the 5.2 protocol.",
        "id": "Untuk tiap proyek unggulan, turuni pengetahuanmu sendiri empat tingkat sampai titik kamu akan berkata “saya tidak tahu”. Tulis kalimat STT yang jujur untuk titik itu, memakai protokol 5.2."
       },
       "debrief": {
        "en": "Knowing where your edge is before the interviewer finds it removes the fear of the descent. The edge sentence — “below that, I'd be guessing; here's how I'd find out” — is prepared honesty, and prepared honesty is unshakeable.",
        "id": "Mengetahui letak batasmu sebelum pewawancara menemukannya menghapus rasa takut akan penurunan itu. Kalimat batas — “di bawah itu saya hanya menebak; begini cara saya mencarinya” — adalah kejujuran yang disiapkan, dan kejujuran yang disiapkan tak tergoyahkan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A deep-dive descends until it finds:",
        "id": "Pendalaman menurun sampai menemukan:"
       },
       "options": [
        {
         "en": "The edge of your knowledge — by design; how you handle it is the score",
         "id": "Batas pengetahuanmu — memang dirancang begitu; cara menghadapinya itulah nilaimu"
        },
        {
         "en": "A fact you cannot possibly know, to embarrass you",
         "id": "Fakta yang mustahil kamu tahu, untuk mempermalukanmu"
        },
        {
         "en": "The complete history of your project",
         "id": "Riwayat lengkap proyekmu"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — reaching the edge is the plan, not the failure. Prepared honesty at the edge is unshakeable.",
        "id": "Benar — mencapai batas adalah rencananya, bukan kegagalannya. Kejujuran yang disiapkan di batas itu tak tergoyahkan."
       }
      }
     ],
     "tryit": {
      "qid": "tc07",
      "label": {
       "en": "The unfamiliar-system drill",
       "id": "Latihan sistem asing"
      },
      "desc": {
       "en": "Describe your first hour on a system you've never touched — orient, reproduce, bisect.",
       "id": "Jelaskan satu jam pertamamu pada sistem yang belum pernah disentuh — orientasi, reproduksi, biseksi."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "trade-off",
        "id": "trade-off"
       },
       "def": {
        "en": "A deliberate exchange — accepting a cost on one dimension to gain on another; interviewers probe whether yours are conscious.",
        "id": "Pertukaran yang disengaja — menerima biaya di satu dimensi demi keuntungan di dimensi lain; pewawancara menguji apakah milikmu disadari."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Kekonkretan yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai rubrik."
       }
      }
     ]
    }
   ]
  },
  {
   "num": 6,
   "title": {
    "en": "The Final &amp; Leadership Interview",
    "id": "Wawancara Final &amp; Kepemimpinan"
   },
   "overview": {
    "en": "The last room thinks in years, not tasks. Executives test judgment at altitude, trajectory, and whether the economics of hiring you make sense. This module covers executive psychology, strategic framing, surviving the deliberate stress-test, and the closing questions that mark you as someone who thinks about the business.",
    "id": "Ruangan terakhir berpikir dalam tahun, bukan tugas. Eksekutif menguji pertimbangan di ketinggian, lintasan, dan apakah ekonomi merekrutmu masuk akal. Modul ini membahas psikologi eksekutif, pembingkaian strategis, bertahan dari uji tekanan yang disengaja, dan pertanyaan penutup yang menandaimu sebagai orang yang memikirkan bisnisnya."
   },
   "outcome": {
    "en": "By the end of this module you can hold a conversation about your work in business terms, keep composure under deliberate scepticism, and close final rounds with questions that leave a senior impression.",
    "id": "Di akhir modul ini kamu bisa membicarakan pekerjaanmu dalam bahasa bisnis, menjaga ketenangan di bawah skeptisisme yang disengaja, dan menutup babak final dengan pertanyaan yang meninggalkan kesan senior."
   },
   "lessons": [
    {
     "n": "6.1",
     "title": {
      "en": "Executive Interviewer Psychology",
      "id": "Psikologi Pewawancara Eksekutif"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Executives interview differently: shorter attention, higher abstraction, faster verdicts. They listen for judgment, ownership economics — is this person worth the total cost? — and trajectory. This lesson teaches the headline-first answer pattern and the ownership language the last room rewards.",
      "id": "Eksekutif mewawancara secara berbeda: perhatian lebih pendek, abstraksi lebih tinggi, vonis lebih cepat. Mereka menyimak pertimbangan, ekonomi kepemilikan — apakah orang ini sepadan dengan biaya totalnya? — dan lintasan. Pelajaran ini mengajarkan pola jawaban garis-besar-dulu dan bahasa kepemilikan yang diganjar ruangan terakhir."
     },
     "objectives": [
      {
       "en": "Answer headline-first, expanding only on request.",
       "id": "Menjawab garis besar dulu, memperluas hanya bila diminta."
      },
      {
       "en": "Frame your work in terms of business consequences.",
       "id": "Membingkai pekerjaanmu dalam konsekuensi bisnis."
      },
      {
       "en": "Show trajectory: where you are going, not only where you have been.",
       "id": "Menunjukkan lintasan: arahmu ke depan, bukan hanya jejakmu ke belakang."
      }
     ],
     "takeaways": [
      {
       "en": "Executives buy headlines: outcome first, mechanics on request.",
       "id": "Eksekutif membeli garis besar: hasil dulu, mekanisme bila diminta."
      },
      {
       "en": "Translate everything into revenue, cost, risk or capability — the four executive currencies.",
       "id": "Terjemahkan semuanya menjadi pendapatan, biaya, risiko, atau kapabilitas — empat mata uang eksekutif."
      },
      {
       "en": "Trajectory talk is not ambition theatre; it is evidence you will still be valuable in year three.",
       "id": "Bicara lintasan bukan teater ambisi; itu bukti kamu masih bernilai di tahun ketiga."
      }
     ],
     "check": {
      "q": {
       "en": "An executive asks about your biggest project. Your first sentence should be:",
       "id": "Eksekutif bertanya tentang proyek terbesarmu. Kalimat pertamamu sebaiknya:"
      },
      "options": [
       {
        "en": "The full context so they understand the situation",
        "id": "Konteks lengkap agar mereka paham situasinya"
       },
       {
        "en": "The team structure and your reporting line",
        "id": "Struktur tim dan garis pelaporanmu"
       },
       {
        "en": "The outcome and what it meant for the business",
        "id": "Hasilnya dan artinya bagi bisnis"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — “we cut fulfilment cost 18% in six months; happy to unpack how” is the executive dialect. Detail follows demand.",
       "id": "Benar — “kami memangkas biaya fulfilment 18% dalam enam bulan; dengan senang hati saya urai caranya” adalah dialek eksekutif. Detail mengikuti permintaan."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The attention economics of the last room",
        "id": "Ekonomi perhatian ruangan terakhir"
       },
       "body": {
        "en": "A final-round executive may give you thirty minutes between two other meetings that matter more to their day. Long wind-ups lose them in the first minute. Headline first — result, scale, consequence — then let their questions choose the depth. Paradoxically, saying less earns the invitation to say more.",
        "id": "Eksekutif babak final mungkin memberimu tiga puluh menit di antara dua rapat lain yang lebih penting bagi hari mereka. Awalan panjang kehilangan mereka di menit pertama. Garis besar dulu — hasil, skala, konsekuensi — lalu biarkan pertanyaan mereka memilih kedalaman. Paradoksnya, bicara lebih sedikit mengundang kesempatan bicara lebih banyak."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "The four currencies",
        "id": "Empat mata uang"
       },
       "body": {
        "en": "Revenue made or protected. Cost removed. Risk reduced. Capability built. Every project you have ever done cashes into at least one. Before the final round, translate your three best stories into their currency: “the dashboard” becomes “visibility that cut stockout losses”; “the migration” becomes “removed our single point of failure”. Same truth, executive denomination.",
        "id": "Pendapatan yang dihasilkan atau dijaga. Biaya yang dihapus. Risiko yang diturunkan. Kapabilitas yang dibangun. Setiap proyek yang pernah kamu kerjakan bisa diuangkan ke minimal satu di antaranya. Sebelum babak final, terjemahkan tiga kisah terbaikmu ke mata uang mereka: “dashboard itu” menjadi “visibilitas yang memangkas kerugian stok kosong”; “migrasi itu” menjadi “menghapus titik kegagalan tunggal kami”. Kebenaran yang sama, denominasi eksekutif."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "Trajectory: the year-three question",
        "id": "Lintasan: pertanyaan tahun ketiga"
       },
       "body": {
        "en": "Executives hire for the role after this one too. Show a direction: the capability you are deliberately building, and how this role compounds it. Not a title ambition — a capability arc. “I'm building the muscle of leading through others; this role's cross-team scope is exactly that gym” tells them year three of you is worth waiting for.",
        "id": "Eksekutif juga merekrut untuk peran setelah peran ini. Tunjukkan arah: kapabilitas yang sengaja kamu bangun, dan bagaimana peran ini melipatgandakannya. Bukan ambisi jabatan — busur kapabilitas. “Saya sedang membangun otot memimpin lewat orang lain; lingkup lintas tim peran ini persis gimnasiumnya” memberi tahu mereka bahwa dirimu di tahun ketiga layak dinanti."
       },
       "icon": "target"
      }
     ],
     "diagram": {
      "type": "quad",
      "title": {
       "en": "The four executive currencies",
       "id": "Empat mata uang eksekutif"
      },
      "items": [
       {
        "h": {
         "en": "Revenue",
         "id": "Pendapatan"
        },
        "sub": {
         "en": "Made or protected",
         "id": "Dihasilkan atau dijaga"
        }
       },
       {
        "h": {
         "en": "Cost",
         "id": "Biaya"
        },
        "sub": {
         "en": "Removed or avoided",
         "id": "Dihapus atau dihindari"
        }
       },
       {
        "h": {
         "en": "Risk",
         "id": "Risiko"
        },
        "sub": {
         "en": "Reduced or contained",
         "id": "Diturunkan atau dikendalikan"
        }
       },
       {
        "h": {
         "en": "Capability",
         "id": "Kapabilitas"
        },
        "sub": {
         "en": "Built and kept",
         "id": "Dibangun dan dipertahankan"
        }
       }
      ],
      "note": {
       "en": "Every project you have done cashes into at least one. Translate your three best stories before the final round.",
       "id": "Setiap proyekmu bisa diuangkan ke minimal satu di antaranya. Terjemahkan tiga kisah terbaikmu sebelum babak final."
      },
      "exhibit": {
       "en": "Exhibit 12: The four executive currencies",
       "id": "Peraga 12: Empat mata uang eksekutif"
      },
      "longdesc": {
       "en": "Diagram of The four executive currencies. It presents, in order: Revenue — Made or protected; Cost — Removed or avoided; Risk — Reduced or contained; Capability — Built and kept.",
       "id": "Diagram Empat mata uang eksekutif. Menyajikan, berurutan: Pendapatan — Dihasilkan atau dijaga; Biaya — Dihapus atau dihindari; Risiko — Diturunkan atau dikendalikan; Kapabilitas — Dibangun dan dipertahankan."
      }
     },
     "compare": [
      {
       "tag": {
        "en": "The same project, two altitudes",
        "id": "Proyek yang sama, dua ketinggian"
       },
       "q": {
        "en": "“Tell me about your biggest project.” (final round)",
        "id": "“Ceritakan proyek terbesarmu.” (babak final)"
       },
       "weak": {
        "en": "It started in March when we got the requirements, then we set up the database, then we built the API, then the frontend, then we tested it, and then we launched in October after some delays.",
        "id": "Dimulai Maret saat kami menerima kebutuhan, lalu kami siapkan database, lalu membangun API, lalu frontend, lalu pengujian, dan akhirnya rilis Oktober setelah beberapa penundaan."
       },
       "strong": {
        "en": "We cut order-processing cost by 18% in six months — that project. The two decisions that mattered: killing a legacy integration everyone was afraid to touch, and phasing the rollout by region so risk stayed contained. Happy to go into either.",
        "id": "Kami memangkas biaya pemrosesan pesanan 18% dalam enam bulan — proyek itu. Dua keputusan yang menentukan: mematikan integrasi lama yang semua orang takut sentuh, dan menahapkan peluncuran per wilayah agar risiko terkendali. Dengan senang hati saya perdalam keduanya."
       },
       "why": {
        "en": "Executives buy consequences first. The strong version leads with the number, offers the decisions, and hands them control of the depth.",
        "id": "Eksekutif membeli konsekuensi lebih dulu. Versi kuat membuka dengan angka, menawarkan keputusannya, dan menyerahkan kendali kedalaman kepada mereka."
       }
      }
     ],
     "tryit": {
      "qid": "cl06",
      "label": {
       "en": "Compress your case to two sentences",
       "id": "Padatkan argumenmu jadi dua kalimat"
      },
      "desc": {
       "en": "The executive summary of you — need-match plus expected result. Then stop.",
       "id": "Ringkasan eksekutif dirimu — kecocokan kebutuhan plus hasil yang bisa diharapkan. Lalu berhenti."
      }
     },
     "scenario": {
      "icon": "flag",
      "img": "../../assets/bg/for-enterprise-image.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat Dalam Sorotan"
      },
      "body": [
       {
        "en": "Rani's final round is with a country manager who gives her twenty-five minutes between board meetings. Her prepared chronology of the warehouse project would take six. Instead she opens: “We cut fulfilment cost eighteen percent in six months — and the two decisions that mattered were killing a legacy integration and phasing rollout by region. Where would you like me to go deeper?” The executive picks one, they spend twenty minutes in real conversation, and Rani leaves having been interviewed like a peer.",
        "id": "Babak final Rani bersama seorang country manager yang memberinya dua puluh lima menit di sela rapat direksi. Kronologi proyek gudang yang ia siapkan butuh enam menit. Alih-alih itu ia membuka: “Kami memangkas biaya fulfilment delapan belas persen dalam enam bulan — dan dua keputusan penentunya adalah mematikan integrasi lama dan menahapkan peluncuran per wilayah. Bagian mana yang ingin Anda perdalam?” Sang eksekutif memilih satu, mereka menghabiskan dua puluh menit dalam percakapan sungguhan, dan Rani pulang setelah diwawancarai layaknya rekan sejawat."
       }
      ]
     }
    },
    {
     "n": "6.2",
     "title": {
      "en": "Strategic-Level Questions and Framing",
      "id": "Pertanyaan Level Strategis dan Pembingkaiannya"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "“Where should we take this product?” “What would you change about our business?” Strategic questions in finals are not requests for a consulting deck — they test whether you can reason about the company from the outside with humility and structure. This lesson gives the framing pattern.",
      "id": "“Ke mana produk ini sebaiknya dibawa?” “Apa yang akan kamu ubah dari bisnis kami?” Pertanyaan strategis di babak final bukan permintaan dek konsultan — ia menguji apakah kamu bisa bernalar tentang perusahaan dari luar dengan rendah hati dan terstruktur. Pelajaran ini memberikan pola pembingkaiannya."
     },
     "objectives": [
      {
       "en": "Structure a strategic answer: observation → options → recommendation → humility.",
       "id": "Menstrukturkan jawaban strategis: observasi → opsi → rekomendasi → kerendahan hati."
      },
      {
       "en": "Ground strategy answers in public, verifiable observations.",
       "id": "Memijakkan jawaban strategis pada observasi publik yang dapat diverifikasi."
      },
      {
       "en": "Disagree with a company decision respectfully when invited to.",
       "id": "Tidak menyetujui keputusan perusahaan dengan hormat saat diundang melakukannya."
      }
     ],
     "takeaways": [
      {
       "en": "Observation first: earn the right to an opinion by showing you did the reading.",
       "id": "Observasi dulu: dapatkan hak beropini dengan menunjukkan kamu sudah membaca."
      },
      {
       "en": "Offer options before a recommendation — strategy is choosing, and choosing needs choices.",
       "id": "Tawarkan opsi sebelum rekomendasi — strategi adalah memilih, dan memilih butuh pilihan."
      },
      {
       "en": "End with calibrated humility: “from the outside” is a phrase that buys credibility, not weakness.",
       "id": "Akhiri dengan kerendahan hati terkalibrasi: “dari luar” adalah frasa yang membeli kredibilitas, bukan kelemahan."
      }
     ],
     "check": {
      "q": {
       "en": "Asked “what would you change about our product?”, you should open with:",
       "id": "Ditanya “apa yang akan kamu ubah dari produk kami?”, kamu sebaiknya membuka dengan:"
      },
      "options": [
       {
        "en": "A specific observation from actually using or studying the product",
        "id": "Observasi spesifik dari benar-benar memakai atau mempelajari produknya"
       },
       {
        "en": "A disclaimer that you cannot possibly know",
        "id": "Penafian bahwa kamu mustahil tahu"
       },
       {
        "en": "Your boldest idea, delivered with total confidence",
        "id": "Ide paling beranimu, disampaikan dengan keyakinan penuh"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — evidence of homework earns the opinion. Boldness without observation is noise; disclaimers without content are worse.",
       "id": "Benar — bukti riset membeli hak beropini. Keberanian tanpa observasi adalah derau; penafian tanpa isi lebih buruk lagi."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The framing pattern",
        "id": "Pola pembingkaian"
       },
       "body": {
        "en": "Observation: “Using the product, I noticed onboarding takes four screens before value appears.” Options: “You could shorten it, delay account creation, or show value first.” Recommendation with reasons: “I'd test value-first — competitors converted me that way.” Humility: “though you'll have data I can't see from outside.” Four beats, two minutes, senior sound.",
        "id": "Observasi: “Saat memakai produknya, saya melihat onboarding butuh empat layar sebelum nilai muncul.” Opsi: “Bisa dipersingkat, pembuatan akun ditunda, atau nilai ditunjukkan lebih dulu.” Rekomendasi beralasan: “Saya akan menguji nilai-lebih-dulu — pesaing meyakinkan saya dengan cara itu.” Kerendahan hati: “meski kalian punya data yang tak terlihat dari luar.” Empat ketukan, dua menit, terdengar senior."
       }
      },
      {
       "h": {
        "en": "Doing the reading",
        "id": "Melakukan pembacaan"
       },
       "body": {
        "en": "Strategic credibility is bought before the interview: use the product, read the annual report or public interviews, know the two or three visible strategic bets. You need one genuine observation per bet — not a full analysis. The candidate who says “I noticed you launched X; my read is you're playing for Y” has already separated from the field.",
        "id": "Kredibilitas strategis dibeli sebelum wawancara: pakai produknya, baca laporan tahunan atau wawancara publik, ketahui dua-tiga taruhan strategis yang terlihat. Kamu butuh satu observasi tulen per taruhan — bukan analisis penuh. Kandidat yang berkata “saya lihat kalian meluncurkan X; bacaan saya, kalian bermain untuk Y” sudah memisahkan diri dari kerumunan."
       }
      },
      {
       "h": {
        "en": "Disagreeing when invited",
        "id": "Berbeda pendapat saat diundang"
       },
       "body": {
        "en": "Sometimes the executive states a position and watches: will you fold, flatter, or think? Disagree the professional way — acknowledge the reasoning, add the consideration you would weigh, propose how to test the difference. You are demonstrating what disagreeing with you in a meeting will feel like. Make it feel like progress.",
        "id": "Kadang eksekutif menyatakan posisi lalu mengamati: kamu akan menyerah, menjilat, atau berpikir? Berbedalah secara profesional — akui penalarannya, tambahkan pertimbangan yang akan kamu timbang, usulkan cara menguji perbedaannya. Kamu sedang memperagakan seperti apa rasanya berbeda pendapat denganmu dalam rapat. Buat rasanya seperti kemajuan."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "Strategic answers, framed",
       "id": "Jawaban strategis, dibingkai"
      },
      "items": [
       {
        "h": {
         "en": "Observation",
         "id": "Observasi"
        },
        "sub": {
         "en": "Something true you noticed — proof of homework",
         "id": "Hal benar yang kamu amati — bukti riset"
        }
       },
       {
        "h": {
         "en": "Options",
         "id": "Opsi"
        },
        "sub": {
         "en": "Two or three real paths",
         "id": "Dua-tiga jalur nyata"
        }
       },
       {
        "h": {
         "en": "Recommendation",
         "id": "Rekomendasi"
        },
        "sub": {
         "en": "One choice, with reasons",
         "id": "Satu pilihan, dengan alasan"
        }
       },
       {
        "h": {
         "en": "Humility",
         "id": "Kerendahan hati"
        },
        "sub": {
         "en": "“…though you'll have data I can't see”",
         "id": "“…meski kalian punya data yang tak terlihat dari luar”"
        }
       }
      ],
      "note": {
       "en": "Four beats, two minutes, senior sound. Boldness without observation is noise.",
       "id": "Empat ketukan, dua menit, terdengar senior. Keberanian tanpa observasi hanyalah derau."
      },
      "exhibit": {
       "en": "Exhibit 13: Strategic answers, framed",
       "id": "Peraga 13: Jawaban strategis, dibingkai"
      },
      "longdesc": {
       "en": "Diagram of Strategic answers, framed. It presents, in order: Observation — Something true you noticed — proof of homework; Options — Two or three real paths; Recommendation — One choice, with reasons; Humility — “…though you'll have data I can't see”.",
       "id": "Diagram Jawaban strategis, dibingkai. Menyajikan, berurutan: Observasi — Hal benar yang kamu amati — bukti riset; Opsi — Dua-tiga jalur nyata; Rekomendasi — Satu pilihan, dengan alasan; Kerendahan hati — “…meski kalian punya data yang tak terlihat dari luar”."
      }
     },
     "tryit": {
      "qid": "cs03",
      "label": {
       "en": "Frame a market-entry answer",
       "id": "Bingkai jawaban masuk pasar"
      },
      "desc": {
       "en": "Structure the launch decision out loud — criteria before answer.",
       "id": "Strukturkan keputusan peluncuran secara lisan — kriteria sebelum jawaban."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "onboarding",
        "id": "onboarding"
       },
       "def": {
        "en": "The structured first weeks of a new role — learning systems, people and the real process.",
        "id": "Minggu-minggu pertama terstruktur sebuah peran baru — mempelajari sistem, orang, dan proses sebenarnya."
       }
      }
     ]
    },
    {
     "n": "6.3",
     "title": {
      "en": "Handling Stress-Test and Skeptical Interviewers",
      "id": "Menghadapi Uji Tekanan dan Pewawancara Skeptis"
     },
     "kind": "interactive",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Some finals include deliberate pressure: interrupted answers, challenged claims, “I'm not convinced.” The test is not the content — it is your composure and your relationship to pushback. This lesson installs the curious-not-defensive response and drills the three most common stress moves.",
      "id": "Sebagian babak final memuat tekanan yang disengaja: jawaban dipotong, klaim ditantang, “saya belum yakin.” Ujiannya bukan isi — melainkan ketenanganmu dan hubunganmu dengan tekanan balik. Pelajaran ini memasang respons ingin-tahu-bukan-defensif dan melatih tiga gerakan tekanan paling umum."
     },
     "objectives": [
      {
       "en": "Recognise deliberate stress-testing versus genuine disagreement.",
       "id": "Membedakan uji tekanan yang disengaja dari ketidaksetujuan tulen."
      },
      {
       "en": "Respond to challenges with curiosity instead of defence or collapse.",
       "id": "Merespons tantangan dengan rasa ingin tahu, bukan pembelaan atau keruntuhan."
      },
      {
       "en": "Hold a position under pressure while staying genuinely open.",
       "id": "Mempertahankan posisi di bawah tekanan sambil tetap terbuka sungguhan."
      }
     ],
     "takeaways": [
      {
       "en": "The stress-test scores your composure, not your comeback.",
       "id": "Uji tekanan menilai ketenanganmu, bukan balasan tajammu."
      },
      {
       "en": "Curiosity is the counter: “what makes you read it differently?” disarms almost everything.",
       "id": "Rasa ingin tahu adalah penawarnya: “apa yang membuat Anda membacanya berbeda?” melucuti hampir semuanya."
      },
      {
       "en": "Neither instant fold nor blind digging-in — update with reasons or hold with reasons.",
       "id": "Bukan langsung menyerah, bukan pula menggali parit membabi buta — perbarui dengan alasan atau pertahankan dengan alasan."
      }
     ],
     "check": {
      "q": {
       "en": "The interviewer says flatly: “I don't think that project was as impressive as you're presenting it.” Best response:",
       "id": "Pewawancara berkata datar: “Menurut saya proyek itu tidak seimpresif yang kamu sajikan.” Respons terbaik:"
      },
      "options": [
       {
        "en": "Restate the achievement more forcefully",
        "id": "Menyatakan ulang pencapaian dengan lebih keras"
       },
       {
        "en": "Stay level: ask what specifically reads as weak, then address exactly that with facts",
        "id": "Tetap tenang: tanyakan bagian mana yang terbaca lemah, lalu jawab persis itu dengan fakta"
       },
       {
        "en": "Concede immediately to avoid conflict",
        "id": "Langsung mengalah demi menghindari konflik"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — composure plus curiosity plus targeted evidence. Folding fails the test; volume fails it differently.",
       "id": "Benar — ketenangan plus rasa ingin tahu plus bukti tertarget. Menyerah gagal dalam ujian ini; menaikkan volume gagal dengan cara lain."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Why they do it",
        "id": "Mengapa mereka melakukannya"
       },
       "body": {
        "en": "Roles that face clients, boards or crises need people who stay operational under challenge. A deliberate stress-test is a cheap simulation of that. Recognising it as simulation is half the victory: the challenge is a prop, your physiology is the exam. Slow your speech ten percent and the room reads composure.",
        "id": "Peran yang menghadapi klien, dewan, atau krisis membutuhkan orang yang tetap berfungsi di bawah tantangan. Uji tekanan yang disengaja adalah simulasi murahnya. Mengenalinya sebagai simulasi adalah separuh kemenangan: tantangannya properti panggung, fisiologimu-lah ujiannya. Perlambat bicaramu sepuluh persen dan ruangan membaca ketenangan."
       }
      },
      {
       "h": {
        "en": "The curious counter",
        "id": "Penawar bernama ingin tahu"
       },
       "body": {
        "en": "Defence escalates; collapse disqualifies; curiosity converts. “Interesting — which part reads as overstated to you?” does three things: buys composure time, extracts the real objection, and models how you handle challenge at work. Then answer the specific objection with specific evidence, and check: “does that address it?”",
        "id": "Pembelaan memanaskan; keruntuhan menggugurkan; rasa ingin tahu mengubah keadaan. “Menarik — bagian mana yang menurut Anda berlebihan?” melakukan tiga hal: membeli waktu ketenangan, mengekstrak keberatan sebenarnya, dan memperagakan caramu menghadapi tantangan di tempat kerja. Lalu jawab keberatan spesifik itu dengan bukti spesifik, dan periksa: “apakah itu menjawabnya?”"
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 · The interruption",
        "id": "Latihan 1 · Interupsi"
       },
       "body": {
        "en": "Mid-story, the interviewer cuts in: “Skip to the end — what was the result?” Practise the pivot sentence you would use, out loud.",
        "id": "Di tengah kisah, pewawancara memotong: “Langsung ke akhir — apa hasilnya?” Latih kalimat pivot yang akan kamu pakai, bersuara."
       },
       "debrief": {
        "en": "Right move: give the result instantly, cleanly, without visible offence — “Result: 30% faster onboarding. The two decisions that got us there, if useful: …” Interruptions test flexibility; treat them as navigation, not disrespect.",
        "id": "Langkah tepat: berikan hasilnya seketika, bersih, tanpa tersinggung yang terlihat — “Hasilnya: onboarding 30% lebih cepat. Dua keputusan yang membawanya, bila berguna: …” Interupsi menguji kelenturan; perlakukan sebagai navigasi, bukan penghinaan."
       }
      },
      {
       "h": {
        "en": "Drill 2 · The challenged claim",
        "id": "Latihan 2 · Klaim yang ditantang"
       },
       "body": {
        "en": "“Anyone could have done that project.” Draft your level response using the curious counter, then the evidence.",
        "id": "“Siapa pun bisa mengerjakan proyek itu.” Susun respons tenangmu memakai penawar ingin tahu, lalu buktinya."
       },
       "debrief": {
        "en": "Model: “Fair challenge. The part that wasn't obvious: three teams had tried and stalled on the data access problem. What unlocked it was the agreement I negotiated with legal — that piece was mine.” Specific non-obviousness, owned quietly. No heat required.",
        "id": "Contoh: “Tantangan yang wajar. Bagian yang tidak jelas dari luar: tiga tim sudah mencoba dan macet di masalah akses data. Yang membukanya adalah kesepakatan yang saya negosiasikan dengan tim legal — bagian itu milik saya.” Ketidakjelasan yang spesifik, dimiliki dengan tenang. Tanpa perlu panas."
       }
      },
      {
       "h": {
        "en": "Drill 3 · The flat “not convinced”",
        "id": "Latihan 3 · “Belum yakin” yang datar"
       },
       "body": {
        "en": "You finish your positioning and the interviewer says only: “I'm not convinced you're ready for this level.” Write your first two sentences.",
        "id": "Kamu menutup positioning-mu dan pewawancara hanya berkata: “Saya belum yakin kamu siap untuk level ini.” Tulis dua kalimat pertamamu."
       },
       "debrief": {
        "en": "Two-sentence shape: “That's a fair thing to test — which dimension concerns you most?” then meet the named dimension with your strongest specific evidence. If they refuse to name one, offer your own honest read of your readiness edge and your plan for it. Composure, specificity, no begging.",
        "id": "Bentuk dua kalimat: “Wajar untuk diuji — dimensi mana yang paling mengkhawatirkan Anda?” lalu jawab dimensi yang disebut dengan bukti spesifik terkuatmu. Jika mereka menolak menyebut, tawarkan bacaan jujurmu sendiri tentang batas kesiapanmu dan rencanamu untuk itu. Ketenangan, kekonkretan, tanpa memohon."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "“I'm not convinced.” — fold vs curiosity",
        "id": "“Saya belum yakin.” — menyerah vs ingin tahu"
       },
       "weak": {
        "en": "Oh… okay, yes, you're probably right, maybe it wasn't that impressive. I just meant it was important to me personally.",
        "id": "Oh… baik, ya, Anda mungkin benar, mungkin memang tidak seimpresif itu. Maksud saya itu penting bagi saya pribadi."
       },
       "strong": {
        "en": "Fair challenge — which part reads as overstated to you? … The piece that wasn't visible from outside: three teams had tried and stalled on data access. What unlocked it was the agreement I negotiated with legal. That part was mine. Does that address it?",
        "id": "Tantangan yang wajar — bagian mana yang menurut Anda berlebihan? … Bagian yang tak terlihat dari luar: tiga tim sudah mencoba dan macet di akses data. Yang membukanya adalah kesepakatan yang saya negosiasikan dengan tim legal. Bagian itu milik saya. Apakah itu menjawabnya?"
       },
       "why": {
        "en": "Folding fails the composure test; volume fails it differently. Curiosity extracts the objection, then meets it with specific, quiet evidence.",
        "id": "Menyerah gagal dalam ujian ketenangan; menaikkan volume gagal dengan cara lain. Rasa ingin tahu mengekstrak keberatan, lalu menjawabnya dengan bukti spesifik yang tenang."
       }
      }
     ],
     "listen": [
      {
       "label": {
        "en": "The curious counter, in a level voice",
        "id": "Penawar ingin tahu, dengan suara datar"
       },
       "text": {
        "en": "That's interesting — which part reads as overstated to you? I'd rather address the exact concern than repeat myself.",
        "id": "Menarik — bagian mana yang menurut Anda berlebihan? Saya lebih suka menjawab kekhawatiran persisnya daripada mengulang-ulang."
       }
      }
     ],
     "tryit": {
      "qid": "dc16",
      "label": {
       "en": "Survive the sixty-second close",
       "id": "Bertahan di penutup enam puluh detik"
      },
      "desc": {
       "en": "“You have one minute. Convince me.” — slow down, land three beats, stop early.",
       "id": "“Kamu punya satu menit. Yakinkan saya.” — melambat, daratkan tiga ketukan, berhenti lebih awal."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Folding at the first pushback",
         "id": "Menyerah pada tekanan pertama"
        },
        "fix": {
         "en": "Stay level and get curious: “which part reads as overstated to you?” — then answer that, specifically.",
         "id": "Tetap tenang dan jadilah ingin tahu: “bagian mana yang menurut Anda berlebihan?” — lalu jawab persis itu."
        }
       },
       {
        "h": {
         "en": "Raising your volume with your defence",
         "id": "Menaikkan volume bersama pembelaan"
        },
        "fix": {
         "en": "Slow your speech ten percent instead. The challenge is a prop; your physiology is the exam.",
         "id": "Justru perlambat bicaramu sepuluh persen. Tantangannya properti panggung; fisiologimulah ujiannya."
        }
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Kekonkretan yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai rubrik."
       }
      }
     ]
    },
    {
     "n": "6.4",
     "title": {
      "en": "The Power of Asking Great Questions",
      "id": "Kekuatan Mengajukan Pertanyaan Hebat"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "At senior rounds, your questions carry as much signal as your answers. A question portfolio — standard-of-excellence, reality-check, growth, and strategy questions, matched to the stage — closes every interview with the impression of someone who thinks in systems and chooses employers deliberately.",
      "id": "Di babak senior, pertanyaanmu membawa sinyal sebesar jawabanmu. Portofolio pertanyaan — standar keunggulan, cek realitas, pertumbuhan, dan strategi, disesuaikan tahapnya — menutup setiap wawancara dengan kesan orang yang berpikir dalam sistem dan memilih pemberi kerja dengan sengaja."
     },
     "objectives": [
      {
       "en": "Build a question portfolio across the four archetypes.",
       "id": "Membangun portofolio pertanyaan lintas empat arketipe."
      },
      {
       "en": "Match question depth to the interviewer's seniority.",
       "id": "Menyesuaikan kedalaman pertanyaan dengan senioritas pewawancara."
      },
      {
       "en": "Use their answers as real data for your own decision.",
       "id": "Menggunakan jawaban mereka sebagai data nyata untuk keputusanmu sendiri."
      }
     ],
     "takeaways": [
      {
       "en": "Questions are scored: they reveal what you think about when no one assigns you a task.",
       "id": "Pertanyaan itu dinilai: ia mengungkap apa yang kamu pikirkan saat tak ada yang memberimu tugas."
      },
      {
       "en": "Ask executives about direction and standards; ask peers about Tuesdays.",
       "id": "Tanyakan arah dan standar kepada eksekutif; tanyakan hari Selasa kepada rekan."
      },
      {
       "en": "Their hesitations answering are data about the company — collect it.",
       "id": "Keraguan mereka menjawab adalah data tentang perusahaan — kumpulkan."
      }
     ],
     "check": {
      "q": {
       "en": "The strongest final-round question of these is:",
       "id": "Pertanyaan babak final terkuat di antara ini adalah:"
      },
      "options": [
       {
        "en": "“How many vacation days do I get?”",
        "id": "“Berapa hari cuti saya?”"
       },
       {
        "en": "“Can you describe the company culture?”",
        "id": "“Bisa jelaskan budaya perusahaannya?”"
       },
       {
        "en": "“What has to be true in a year for this hire to have been a great decision?”",
        "id": "“Apa yang harus terjadi dalam setahun agar perekrutan ini terbukti keputusan hebat?”"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — it makes the executive define success concretely, shows outcome thinking, and gives you the real job description.",
       "id": "Benar — ia membuat eksekutif mendefinisikan sukses secara konkret, menunjukkan pola pikir hasil, dan memberimu deskripsi pekerjaan yang sebenarnya."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The four archetypes",
        "id": "Empat arketipe"
       },
       "body": {
        "en": "Standard: “what separates good from great in this role?” Reality: “what is the hardest part nobody writes in the JD?” Growth: “how have people grown out of this role?” Strategy, for finals: “what has to be true in a year for this hire to be a great decision?” Two per interview, chosen for the room. Logistics questions go to the recruiter, never to the executive.",
        "id": "Standar: “apa pembeda baik dan hebat pada peran ini?” Realitas: “apa bagian tersulit yang tak pernah ditulis di JD?” Pertumbuhan: “bagaimana orang-orang bertumbuh dari peran ini?” Strategi, untuk final: “apa yang harus terjadi dalam setahun agar perekrutan ini keputusan hebat?” Dua per wawancara, dipilih sesuai ruangan. Pertanyaan logistik untuk rekruter, jangan pernah untuk eksekutif."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Listening to the answers",
        "id": "Mendengarkan jawabannya"
       },
       "body": {
        "en": "Great questions are wasted on candidates who do not listen. If “what does success look like” produces vagueness, the role is undefined — price that risk. If “hardest part” produces a suspicious “nothing really”, add scepticism. You are running your own evaluation; their answers, and their comfort answering, are your rubric.",
        "id": "Pertanyaan hebat sia-sia bagi kandidat yang tidak mendengarkan. Jika “seperti apa sukses” melahirkan kekaburan, perannya belum terdefinisi — perhitungkan risiko itu. Jika “bagian tersulit” melahirkan “tidak ada sih” yang mencurigakan, tambah skeptisisme. Kamu sedang menjalankan evaluasimu sendiri; jawaban mereka, dan kenyamanan mereka menjawab, adalah rubrikmu."
       },
       "icon": "book"
      }
     ],
     "diagram": {
      "type": "quad",
      "title": {
       "en": "The question portfolio",
       "id": "Portofolio pertanyaan"
      },
      "items": [
       {
        "h": {
         "en": "Standard",
         "id": "Standar"
        },
        "sub": {
         "en": "What separates good from great here?",
         "id": "Apa pembeda baik dan hebat di sini?"
        }
       },
       {
        "h": {
         "en": "Reality",
         "id": "Realitas"
        },
        "sub": {
         "en": "The hardest part the JD doesn't say?",
         "id": "Bagian tersulit yang tak ditulis JD?"
        }
       },
       {
        "h": {
         "en": "Growth",
         "id": "Pertumbuhan"
        },
        "sub": {
         "en": "How have people grown out of this role?",
         "id": "Bagaimana orang bertumbuh dari peran ini?"
        }
       },
       {
        "h": {
         "en": "Strategy",
         "id": "Strategi"
        },
        "sub": {
         "en": "What must be true in a year for this hire to be great?",
         "id": "Apa yang harus terjadi setahun agar perekrutan ini hebat?"
        }
       }
      ],
      "note": {
       "en": "Two per interview, chosen for the room. Logistics questions go to the recruiter — never to the executive.",
       "id": "Dua per wawancara, dipilih sesuai ruangan. Pertanyaan logistik untuk rekruter — jangan pernah untuk eksekutif."
      },
      "exhibit": {
       "en": "Exhibit 14: The question portfolio",
       "id": "Peraga 14: Portofolio pertanyaan"
      },
      "longdesc": {
       "en": "Diagram of The question portfolio. It presents, in order: Standard — What separates good from great here?; Reality — The hardest part the JD doesn't say?; Growth — How have people grown out of this role?; Strategy — What must be true in a year for this hire to be great?.",
       "id": "Diagram Portofolio pertanyaan. Menyajikan, berurutan: Standar — Apa pembeda baik dan hebat di sini?; Realitas — Bagian tersulit yang tak ditulis JD?; Pertumbuhan — Bagaimana orang bertumbuh dari peran ini?; Strategi — Apa yang harus terjadi setahun agar perekrutan ini hebat?."
      }
     },
     "tryit": {
      "qid": "cl05",
      "label": {
       "en": "Ask for what you need — well",
       "id": "Minta yang kamu butuhkan — dengan baik"
      },
      "desc": {
       "en": "“What would you need from us in your first month?” — real asks, not “nothing”.",
       "id": "“Apa yang kamu butuhkan dari kami di bulan pertama?” — permintaan nyata, bukan “tidak ada”."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "rubric",
        "id": "rubrik"
       },
       "def": {
        "en": "The written standard an answer is scored against — criteria plus what each level of quality looks like.",
        "id": "Standar tertulis tempat jawaban dinilai — kriteria plus wujud tiap tingkat kualitasnya."
       }
      }
     ]
    }
   ]
  },
  {
   "num": 7,
   "title": {
    "en": "Live Interview Simulation",
    "id": "Simulasi Wawancara Langsung"
   },
   "overview": {
    "en": "Everything before this was the strategy; this is the gym. Module 7 is the application layer of The Rope: the solo drill protocol, the AI Interview Simulator — a realistic interviewer that asks, listens, follows up and debriefs you on your device — the peer mock framework, and the 10-day sprint plan. Confidence is not assumed here. It is built through practice.",
    "id": "Semua sebelum ini adalah strateginya; inilah gimnasiumnya. Modul 7 adalah lapisan penerapan The Rope: protokol latihan mandiri, Simulator Wawancara AI — pewawancara realistis yang bertanya, mendengar, mengejar, dan mengevaluasimu di perangkatmu — kerangka mock interview rekan, dan rencana sprint 10 hari. Kepercayaan diri tidak diandaikan di sini. Ia dibangun lewat latihan."
   },
   "outcome": {
    "en": "By the end of this module you have completed real simulated interviews with objective debriefs, know your measured weaknesses, and own a repeatable practice loop: prepare, perform, review, repeat.",
    "id": "Di akhir modul ini kamu telah menyelesaikan wawancara tersimulasi sungguhan dengan debrief objektif, mengetahui kelemahan terukurmu, dan memiliki putaran latihan berulang: persiapan, tampil, tinjau, ulangi."
   },
   "lessons": [
    {
     "n": "7.1",
     "title": {
      "en": "The Solo Drill Protocol",
      "id": "Protokol Latihan Mandiri"
     },
     "kind": "interactive",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The cheapest interview coach is your own recording. The solo drill: one question, a two-minute cap, recorded; then a transcript review against the same rubric the simulator uses — structure, evidence, delivery; then two more attempts. Three cycles turn a shaky answer into a landed one.",
      "id": "Pelatih wawancara termurah adalah rekamanmu sendiri. Latihan mandiri: satu pertanyaan, batas dua menit, direkam; lalu tinjauan transkrip dengan rubrik yang sama dengan simulator — struktur, bukti, penyampaian; lalu dua percobaan lagi. Tiga siklus mengubah jawaban goyah menjadi jawaban yang mendarat."
     },
     "objectives": [
      {
       "en": "Run the record → review → retry cycle on one question.",
       "id": "Menjalankan siklus rekam → tinjau → ulangi pada satu pertanyaan."
      },
      {
       "en": "Review your own transcript against the three-dimension rubric.",
       "id": "Meninjau transkripmu sendiri dengan rubrik tiga dimensi."
      },
      {
       "en": "Track measurable deltas between attempts.",
       "id": "Melacak selisih terukur antar percobaan."
      }
     ],
     "takeaways": [
      {
       "en": "The recording never flatters — which is exactly why it works.",
       "id": "Rekaman tidak pernah menyanjung — justru karena itulah ia bekerja."
      },
      {
       "en": "Review with the rubric, not with your mood: words, STAR beats, numbers, fillers.",
       "id": "Tinjau dengan rubrik, bukan suasana hati: jumlah kata, ketukan STAR, angka, kata pengisi."
      },
      {
       "en": "Three attempts per question is the deliberate-practice dose — more repeats the mistake, fewer skips the gain.",
       "id": "Tiga percobaan per pertanyaan adalah dosis latihan terarah — lebih dari itu mengulang kesalahan, kurang dari itu melewatkan hasil."
      }
     ],
     "check": {
      "q": {
       "en": "The core of the solo drill is:",
       "id": "Inti latihan mandiri adalah:"
      },
      "options": [
       {
        "en": "Recording an answer, reviewing it objectively, and retrying immediately",
        "id": "Merekam jawaban, meninjaunya objektif, dan langsung mencoba lagi"
       },
       {
        "en": "Reading model answers until they feel familiar",
        "id": "Membaca contoh jawaban sampai terasa akrab"
       },
       {
        "en": "Practising in front of a mirror for confidence",
        "id": "Berlatih di depan cermin demi kepercayaan diri"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — the loop is record, review with a rubric, retry. Objective feedback plus immediate repetition is what builds fluency.",
       "id": "Benar — putarannya rekam, tinjau dengan rubrik, ulangi. Umpan balik objektif plus pengulangan segera itulah yang membangun kefasihan."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Why recordings beat mirrors",
        "id": "Mengapa rekaman mengalahkan cermin"
       },
       "body": {
        "en": "Mirrors show you performing; recordings show you as the interviewer experiences you. The gap is always humbling: fillers you never noticed, a story that takes ninety seconds to reach its point, an ending that trails off. Every one of those is fixable within minutes — but only after it is seen. The drill exists to make you see.",
        "id": "Cermin menunjukkanmu sedang tampil; rekaman menunjukkanmu sebagaimana dialami pewawancara. Kesenjangannya selalu merendahkan hati: kata pengisi yang tak pernah kamu sadari, kisah yang butuh sembilan puluh detik untuk sampai ke intinya, penutup yang menguap. Semua itu bisa diperbaiki dalam hitungan menit — tetapi hanya setelah terlihat. Latihan ini ada untuk membuatmu melihat."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "The rubric in your hands",
        "id": "Rubrik di tanganmu"
       },
       "body": {
        "en": "Structure: did the context take one sentence? Did the first action verb arrive early? Did it land on a result? Evidence: is there a number, a name, a concrete artefact? Delivery: count the fillers, check the length — sixty to two hundred words. Score honestly, pick the single biggest gap, and fix only that in the next attempt. One fix per cycle; that is how deltas stay visible.",
        "id": "Struktur: apakah konteks hanya satu kalimat? Apakah kata kerja tindakan pertama datang lebih awal? Apakah mendarat pada hasil? Bukti: adakah angka, nama, artefak konkret? Penyampaian: hitung kata pengisi, cek panjangnya — enam puluh sampai dua ratus kata. Nilai dengan jujur, pilih satu celah terbesar, dan perbaiki hanya itu pada percobaan berikutnya. Satu perbaikan per siklus; begitulah selisih tetap terlihat."
       },
       "icon": "book"
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Cycle 1 · Baseline",
        "id": "Siklus 1 · Garis dasar"
       },
       "body": {
        "en": "Pick one question you fear from the bank. Record your answer — phone voice memo or the simulator — with a hard two-minute cap. Do not restart, whatever happens.",
        "id": "Pilih satu pertanyaan dari bank yang kamu takuti. Rekam jawabanmu — memo suara ponsel atau simulator — dengan batas keras dua menit. Jangan mengulang, apa pun yang terjadi."
       },
       "debrief": {
        "en": "The ugly first take is the point: it is your honest baseline, and every improvement is measured against it. Professionals keep bad first takes; amateurs delete them and lose the evidence of growth.",
        "id": "Rekaman pertama yang buruk justru intinya: itulah garis dasar jujurmu, dan setiap perbaikan diukur terhadapnya. Profesional menyimpan rekaman pertama yang jelek; amatir menghapusnya dan kehilangan bukti pertumbuhan."
       }
      },
      {
       "h": {
        "en": "Cycle 2 · One fix",
        "id": "Siklus 2 · Satu perbaikan"
       },
       "body": {
        "en": "Review with the rubric. Name the one biggest gap out loud — “my action came too late” — and re-record fixing only that.",
        "id": "Tinjau dengan rubrik. Sebutkan lantang satu celah terbesar — “tindakanku datang terlambat” — dan rekam ulang dengan memperbaiki hanya itu."
       },
       "debrief": {
        "en": "Single-focus retries improve faster than fix-everything retries, which usually degrade under cognitive load. If the fix held, cycle 3 targets the next gap; if it did not, cycle 3 repeats this one. Patience here is speed later.",
        "id": "Pengulangan berfokus tunggal membaik lebih cepat daripada memperbaiki-semua, yang biasanya justru memburuk karena beban kognitif. Jika perbaikan bertahan, siklus 3 membidik celah berikutnya; jika tidak, siklus 3 mengulang yang ini. Sabar di sini berarti cepat nantinya."
       }
      },
      {
       "h": {
        "en": "Cycle 3 · Pressure",
        "id": "Siklus 3 · Tekanan"
       },
       "body": {
        "en": "Third take: add pressure. Stand up, add a timer you can see, or have someone watch. Same question, same fix, harder conditions.",
        "id": "Rekaman ketiga: tambah tekanan. Berdiri, pasang pewaktu yang terlihat, atau minta seseorang menonton. Pertanyaan sama, perbaikan sama, kondisi lebih berat."
       },
       "debrief": {
        "en": "Skills that only work in comfort are not yet skills. If the answer held its structure under mild pressure, it is ready for the simulator's live mode — and after that, for the room. Log your three attempts; the visible delta is your confidence, earned.",
        "id": "Keterampilan yang hanya bekerja dalam kenyamanan belum menjadi keterampilan. Jika jawaban mempertahankan strukturnya di bawah tekanan ringan, ia siap untuk mode langsung simulator — dan setelah itu, untuk ruangan sungguhan. Catat tiga percobaanmu; selisih yang terlihat adalah kepercayaan dirimu, yang diperoleh dengan kerja."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The solo drill cycle",
       "id": "Siklus latihan mandiri"
      },
      "items": [
       {
        "h": {
         "en": "Record",
         "id": "Rekam"
        },
        "sub": {
         "en": "One question, two-minute cap, no restarts",
         "id": "Satu pertanyaan, batas dua menit, tanpa mengulang"
        }
       },
       {
        "h": {
         "en": "Review",
         "id": "Tinjau"
        },
        "sub": {
         "en": "Rubric, not mood: STAR, numbers, fillers, length",
         "id": "Rubrik, bukan suasana hati: STAR, angka, pengisi, panjang"
        }
       },
       {
        "h": {
         "en": "Retry",
         "id": "Ulangi"
        },
        "sub": {
         "en": "One fix per cycle — then add pressure",
         "id": "Satu perbaikan per siklus — lalu tambah tekanan"
        }
       }
      ],
      "note": {
       "en": "Three cycles per question is the deliberate-practice dose. The visible delta is your confidence, earned.",
       "id": "Tiga siklus per pertanyaan adalah dosis latihan terarah. Selisih yang terlihat adalah kepercayaan dirimu, yang diperoleh."
      },
      "exhibit": {
       "en": "Exhibit 15: The solo drill cycle",
       "id": "Peraga 15: Siklus latihan mandiri"
      },
      "longdesc": {
       "en": "Diagram of The solo drill cycle. It presents, in order: Record — One question, two-minute cap, no restarts; Review — Rubric, not mood: STAR, numbers, fillers, length; Retry — One fix per cycle — then add pressure.",
       "id": "Diagram Siklus latihan mandiri. Menyajikan, berurutan: Rekam — Satu pertanyaan, batas dua menit, tanpa mengulang; Tinjau — Rubrik, bukan suasana hati: STAR, angka, pengisi, panjang; Ulangi — Satu perbaikan per siklus — lalu tambah tekanan."
      }
     },
     "tryit": {
      "qid": "bh03",
      "label": {
       "en": "Run cycle one on the failure question",
       "id": "Jalankan siklus satu pada pertanyaan kegagalan"
      },
      "desc": {
       "en": "Record your failure story now — baseline first, polish after.",
       "id": "Rekam kisah kegagalanmu sekarang — garis dasar dulu, poles kemudian."
      }
     },
     "scenario": {
      "icon": "target",
      "img": "../../assets/bg/rope-team.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat Dalam Sorotan"
      },
      "body": [
       {
        "en": "Tono has read every lesson twice. He can recite STAR-L in his sleep. Then he records himself answering one question — and hears eleven “ums,” a ninety-second wind-up before his first action verb, and an ending that just… stops. Reading about interviewing and performing an interview, it turns out, are different sports. This module is the gym where the second one is trained.",
        "id": "Tono sudah membaca semua pelajaran dua kali. Ia bisa melafalkan STAR-L sambil tidur. Lalu ia merekam dirinya menjawab satu pertanyaan — dan mendengar sebelas “emm,” pemanasan sembilan puluh detik sebelum kata kerja tindakan pertamanya, dan penutup yang… berhenti begitu saja. Membaca tentang wawancara dan menampilkan wawancara, ternyata, adalah dua cabang olahraga berbeda. Modul ini adalah gimnasium tempat cabang kedua dilatih."
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "rubric",
        "id": "rubrik"
       },
       "def": {
        "en": "The written standard an answer is scored against — criteria plus what each level of quality looks like.",
        "id": "Standar tertulis tempat jawaban dinilai — kriteria plus wujud tiap tingkat kualitasnya."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Kekonkretan yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai rubrik."
       }
      }
     ]
    },
    {
     "n": "7.2",
     "title": {
      "en": "AI-Powered Mock Interview Practice",
      "id": "Latihan Mock Interview Berbantuan AI"
     },
     "kind": "interactive",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The AI Interview Simulator is the centrepiece of Module 7: configure one job and one goal, then face an interviewer that asks from a live question bank, listens to what you actually said, follows up on the weaknesses in your answer, and debriefs you across content, structure and communication — entirely on your device. This lesson explains the system, then hands you to it.",
      "id": "Simulator Wawancara AI adalah pusat Modul 7: atur satu pekerjaan dan satu tujuan, lalu hadapi pewawancara yang bertanya dari bank pertanyaan hidup, mendengar jawabanmu yang sebenarnya, mengejar kelemahan dalam jawabanmu, dan mengevaluasimu pada isi, struktur, dan komunikasi — sepenuhnya di perangkatmu. Pelajaran ini menjelaskan sistemnya, lalu menyerahkanmu kepadanya."
     },
     "objectives": [
      {
       "en": "Configure a personalised simulation: role, industry, stage, difficulty, JD and CV.",
       "id": "Mengonfigurasi simulasi personal: peran, industri, tahap, kesulitan, JD, dan CV."
      },
      {
       "en": "Complete a full session in practice mode, then in live mode.",
       "id": "Menyelesaikan satu sesi penuh dalam mode latihan, lalu mode langsung."
      },
      {
       "en": "Read the debrief and convert it into your next session's focus.",
       "id": "Membaca debrief dan mengubahnya menjadi fokus sesi berikutnya."
      }
     ],
     "takeaways": [
      {
       "en": "The simulator adapts to your actual answers: too short, no metric, we-not-I — each triggers its own follow-up.",
       "id": "Simulator beradaptasi dengan jawaban aslimu: terlalu singkat, tanpa angka, kami-bukan-saya — masing-masing memicu pertanyaan lanjutannya sendiri."
      },
      {
       "en": "Upload your CV and the simulator probes your own claims — the exact thing real interviewers do.",
       "id": "Unggah CV-mu dan simulator menguji klaimmu sendiri — persis yang dilakukan pewawancara sungguhan."
      },
      {
       "en": "Everything runs on your device; voice and video never leave your browser.",
       "id": "Semua berjalan di perangkatmu; suara dan video tidak pernah meninggalkan perambanmu."
      }
     ],
     "check": {
      "q": {
       "en": "The simulator's debrief is honest because:",
       "id": "Debrief simulator ini jujur karena:"
      },
      "options": [
       {
        "en": "It compares you against other users' answers",
        "id": "Ia membandingkanmu dengan jawaban pengguna lain"
       },
       {
        "en": "It is a transparent rule-based reading of your transcript, computed on your device",
        "id": "Ia pembacaan transkripmu berbasis aturan yang transparan, dihitung di perangkatmu"
       },
       {
        "en": "It always gives an encouraging score",
        "id": "Ia selalu memberi skor yang menyemangati"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — the rubric is visible and deterministic: STAR beats, numbers, fillers, length, pace. No black box, no invented body-language scores.",
       "id": "Benar — rubriknya terlihat dan deterministik: ketukan STAR, angka, kata pengisi, panjang, tempo. Tanpa kotak hitam, tanpa skor bahasa tubuh karangan."
      }
     },
     "sections": [
      {
       "h": {
        "en": "One job, one goal",
        "id": "Satu pekerjaan, satu tujuan"
       },
       "body": {
        "en": "A simulation without a target measures nothing. Setup asks for the role, industry, seniority, stage, difficulty and length — plus the job description and your CV if you have them. The JD's stated requirements become questions; your CV's claims become probes. The interview that follows is about your candidacy, not a generic script.",
        "id": "Simulasi tanpa target tidak mengukur apa pun. Pengaturan menanyakan peran, industri, senioritas, tahap, kesulitan, dan durasi — plus deskripsi pekerjaan dan CV-mu bila ada. Persyaratan JD menjadi pertanyaan; klaim CV-mu menjadi ujian. Wawancara yang menyusul adalah tentang pencalonanmu, bukan naskah generik."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Practice mode, then live mode",
        "id": "Mode latihan, lalu mode langsung"
       },
       "body": {
        "en": "Practice mode shows coaching notes before each answer — scaffolding while you install the techniques. Live mode withholds them: questions, follow-ups, a timer, optionally your own camera. Run practice until the coaching stops surprising you, then move to live. The transition is the moment techniques become habits.",
        "id": "Mode latihan menampilkan catatan arahan sebelum tiap jawaban — perancah selagi kamu memasang teknik. Mode langsung menahannya: pertanyaan, pertanyaan lanjutan, pewaktu, dan opsional kameramu sendiri. Jalankan mode latihan sampai arahannya berhenti mengejutkanmu, lalu pindah ke langsung. Perpindahan itulah momen teknik menjadi kebiasaan."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "The debrief and the loop",
        "id": "Debrief dan putarannya"
       },
       "body": {
        "en": "After each session: dimension scores, question-by-question strengths, weaknesses and concrete changes, recurring patterns, attempt comparisons, and — if your camera was on — your recordings for honest self-review of presence. The final panel names your weakest dimension and configures the next session to train it. That closing of the loop is what separates a training system from a toy.",
        "id": "Setelah tiap sesi: skor dimensi, kekuatan per pertanyaan, kelemahan dan perubahan konkret, pola berulang, perbandingan percobaan, dan — bila kameramu menyala — rekamanmu untuk tinjauan kehadiran yang jujur. Panel penutup menyebut dimensi terlemahmu dan mengonfigurasi sesi berikutnya untuk melatihnya. Penutupan putaran itulah pembeda sistem latihan dari mainan."
       },
       "icon": "target"
      }
     ],
     "tool": {
      "id": "simulator",
      "mode": "home",
      "title": {
       "en": "Launch the AI Interview Simulator",
       "id": "Luncurkan Simulator Wawancara AI"
      },
      "body": {
       "en": "Your question bank, your role, your CV, your debrief — the full prepare → perform → review → repeat loop starts here.",
       "id": "Bank pertanyaanmu, peranmu, CV-mu, debrief-mu — putaran penuh persiapan → tampil → tinjau → ulangi dimulai di sini."
      },
      "cta": {
       "en": "Open the simulator →",
       "id": "Buka simulator →"
      }
     },
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The loop this module installs",
       "id": "Putaran yang dipasang modul ini"
      },
      "items": [
       {
        "h": {
         "en": "Prepare",
         "id": "Persiapan"
        },
        "sub": {
         "en": "One job, one goal, JD + CV loaded",
         "id": "Satu pekerjaan, satu tujuan, JD + CV termuat"
        }
       },
       {
        "h": {
         "en": "Perform",
         "id": "Tampil"
        },
        "sub": {
         "en": "Video, voice or text — under realistic pressure",
         "id": "Video, suara, atau teks — di bawah tekanan realistis"
        }
       },
       {
        "h": {
         "en": "Review",
         "id": "Tinjau"
        },
        "sub": {
         "en": "Transparent debrief on your own transcript",
         "id": "Debrief transparan atas transkripmu sendiri"
        }
       },
       {
        "h": {
         "en": "Improve",
         "id": "Perbaiki"
        },
        "sub": {
         "en": "Weakness → targeted lessons and drills",
         "id": "Kelemahan → pelajaran dan latihan tertarget"
        }
       },
       {
        "h": {
         "en": "Repeat",
         "id": "Ulangi"
        },
        "sub": {
         "en": "Progressively harder rounds",
         "id": "Putaran yang makin menantang"
        }
       }
      ],
      "note": {
       "en": "A mock interview is an event. This is a training system — the difference is the loop.",
       "id": "Mock interview adalah peristiwa. Ini sistem latihan — bedanya ada pada putarannya."
      },
      "exhibit": {
       "en": "Exhibit 16: The loop this module installs",
       "id": "Peraga 16: Putaran yang dipasang modul ini"
      },
      "longdesc": {
       "en": "Diagram of The loop this module installs. It presents, in order: Prepare — One job, one goal, JD + CV loaded; Perform — Video, voice or text — under realistic pressure; Review — Transparent debrief on your own transcript; Improve — Weakness → targeted lessons and drills; Repeat — Progressively harder rounds.",
       "id": "Diagram Putaran yang dipasang modul ini. Menyajikan, berurutan: Persiapan — Satu pekerjaan, satu tujuan, JD + CV termuat; Tampil — Video, suara, atau teks — di bawah tekanan realistis; Tinjau — Debrief transparan atas transkripmu sendiri; Perbaiki — Kelemahan → pelajaran dan latihan tertarget; Ulangi — Putaran yang makin menantang."
      }
     },
     "checks": [
      {
       "q": {
        "en": "What turns a practice session into deliberate practice?",
        "id": "Apa yang mengubah sesi latihan menjadi latihan terarah?"
       },
       "options": [
        {
         "en": "A feedback loop that changes what you practice next",
         "id": "Putaran umpan balik yang mengubah apa yang kamu latih berikutnya"
        },
        {
         "en": "Practising for more hours in a row",
         "id": "Berlatih lebih banyak jam berturut-turut"
        },
        {
         "en": "Recording in higher video quality",
         "id": "Merekam dengan kualitas video lebih tinggi"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — repetition alone plateaus. Feedback that redirects the next repetition is what compounds.",
        "id": "Benar — pengulangan semata akan mendatar. Umpan balik yang mengarahkan ulang pengulangan berikutnya itulah yang berbunga."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "follow-up",
        "id": "pertanyaan lanjutan"
       },
       "def": {
        "en": "The probing question after your answer — where inflated claims collapse and honest depth scores.",
        "id": "Pertanyaan pengejar setelah jawabanmu — tempat klaim gelembung runtuh dan kedalaman jujur bernilai."
       }
      }
     ]
    },
    {
     "n": "7.3",
     "title": {
      "en": "The Peer Mock Interview Framework",
      "id": "Kerangka Mock Interview Rekan"
     },
     "kind": "interactive",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The simulator measures; a human adds what machines honestly cannot — the social pressure of real eyes. The peer mock framework structures a practice interview between two people: roles, a question script, an observer rubric, and an evidence-based debrief. Basecamp exists for exactly this exchange.",
      "id": "Simulator mengukur; manusia menambahkan yang jujur saja tak bisa diberikan mesin — tekanan sosial dari tatapan sungguhan. Kerangka mock rekan menstrukturkan wawancara latihan antara dua orang: peran, naskah pertanyaan, rubrik pengamat, dan debrief berbasis bukti. Basecamp ada persis untuk pertukaran ini."
     },
     "objectives": [
      {
       "en": "Run a structured peer mock as interviewer and as candidate.",
       "id": "Menjalankan mock rekan terstruktur sebagai pewawancara dan sebagai kandidat."
      },
      {
       "en": "Use the observer rubric to give evidence-based feedback.",
       "id": "Memakai rubrik pengamat untuk memberi umpan balik berbasis bukti."
      },
      {
       "en": "Debrief without flattery and without cruelty.",
       "id": "Melakukan debrief tanpa basa-basi memuji dan tanpa kekejaman."
      }
     ],
     "takeaways": [
      {
       "en": "Playing the interviewer teaches you more than playing the candidate — you feel what scores.",
       "id": "Berperan sebagai pewawancara mengajarimu lebih banyak daripada menjadi kandidat — kamu merasakan apa yang layak dinilai."
      },
      {
       "en": "Feedback must quote: “at minute two you said X” beats “you were a bit unclear”.",
       "id": "Umpan balik harus mengutip: “di menit kedua kamu bilang X” mengalahkan “kamu agak kurang jelas”."
      },
      {
       "en": "Swap roles every session; the rope holds because both ends practise.",
       "id": "Bertukar peran tiap sesi; tali bertahan karena kedua ujungnya berlatih."
      }
     ],
     "check": {
      "q": {
       "en": "Useful peer feedback sounds like:",
       "id": "Umpan balik rekan yang berguna berbunyi:"
      },
      "options": [
       {
        "en": "“That was great, you're definitely ready.”",
        "id": "“Tadi bagus banget, kamu pasti siap.”"
       },
       {
        "en": "“You need more confidence.”",
        "id": "“Kamu butuh lebih percaya diri.”"
       },
       {
        "en": "“Your answer ran 3 minutes and the result only arrived in the last sentence — try leading with it.”",
        "id": "“Jawabanmu 3 menit dan hasilnya baru muncul di kalimat terakhir — coba buka dengannya.”"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — quoted evidence plus a concrete change. Encouragement without evidence and adjectives without examples both change nothing.",
       "id": "Benar — bukti terkutip plus perubahan konkret. Semangat tanpa bukti dan kata sifat tanpa contoh sama-sama tak mengubah apa pun."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The setup",
        "id": "Persiapannya"
       },
       "body": {
        "en": "Two people, forty-five minutes: five minutes to configure (role, stage, six questions from the bank), twenty for the interview, ten for debrief, then swap what you can fit. The interviewer sticks to the script plus natural follow-ups; the observer rubric — structure, evidence, delivery, presence — is filled during, not after, with quotes and timestamps.",
        "id": "Dua orang, empat puluh lima menit: lima menit konfigurasi (peran, tahap, enam pertanyaan dari bank), dua puluh untuk wawancara, sepuluh untuk debrief, lalu bertukar sesuai sisa waktu. Pewawancara berpegang pada naskah plus pertanyaan lanjutan alami; rubrik pengamat — struktur, bukti, penyampaian, kehadiran — diisi selama berlangsung, bukan setelahnya, dengan kutipan dan penanda waktu."
       }
      },
      {
       "h": {
        "en": "Debrief discipline",
        "id": "Disiplin debrief"
       },
       "body": {
        "en": "Format: two strengths with quotes, two weaknesses with quotes, one change to try immediately — then a five-minute retry of the weakest answer. Skip the compliment sandwich; respectful directness with evidence is kinder than comfortable vagueness, because it is the only kind that changes the next interview.",
        "id": "Formatnya: dua kekuatan dengan kutipan, dua kelemahan dengan kutipan, satu perubahan untuk segera dicoba — lalu pengulangan lima menit atas jawaban terlemah. Lewati roti lapis pujian; keterusterangan hormat dengan bukti lebih baik daripada kekaburan yang nyaman, karena hanya itu yang mengubah wawancara berikutnya."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Step 1 · Configure together",
        "id": "Langkah 1 · Konfigurasi bersama"
       },
       "body": {
        "en": "Agree the candidate's real target role and stage. Pull six questions from the simulator's bank for that configuration — include one difficult-case question the candidate actually fears.",
        "id": "Sepakati peran target dan tahap kandidat yang sebenarnya. Ambil enam pertanyaan dari bank simulator untuk konfigurasi itu — sertakan satu pertanyaan kasus sulit yang benar-benar ditakuti kandidat."
       },
       "debrief": {
        "en": "Practising the feared question with a friendly human first is graduated exposure — the healthy kind. By the third repetition the fear is a procedure. That is the entire psychology of this module in one step.",
        "id": "Melatih pertanyaan yang ditakuti bersama manusia yang ramah lebih dulu adalah paparan bertahap — jenis yang sehat. Pada pengulangan ketiga, ketakutan menjadi prosedur. Itulah seluruh psikologi modul ini dalam satu langkah."
       }
      },
      {
       "h": {
        "en": "Step 2 · Hold the frame",
        "id": "Langkah 2 · Jaga bingkainya"
       },
       "body": {
        "en": "Interviewer: stay in character for the full twenty minutes — no coaching mid-interview, no breaking to chat. Follow up when answers are vague, exactly as the simulator does.",
        "id": "Pewawancara: tetap dalam karakter selama dua puluh menit penuh — tanpa arahan di tengah wawancara, tanpa jeda mengobrol. Kejar saat jawaban kabur, persis seperti simulator."
       },
       "debrief": {
        "en": "The value of a peer mock is proportional to how seriously the frame is held. Every break in character releases the pressure that the candidate came to practise under. Kindness here means staying in role.",
        "id": "Nilai mock rekan sebanding dengan keseriusan menjaga bingkai. Setiap keluar dari karakter melepaskan tekanan yang justru ingin dilatih kandidat. Kebaikan di sini berarti bertahan dalam peran."
       }
      },
      {
       "h": {
        "en": "Step 3 · Evidence debrief + retry",
        "id": "Langkah 3 · Debrief bukti + pengulangan"
       },
       "body": {
        "en": "Deliver the debrief in the strict format: 2 strengths, 2 weaknesses, 1 change — all with quotes. Then re-run the weakest question immediately.",
        "id": "Sampaikan debrief dalam format ketat: 2 kekuatan, 2 kelemahan, 1 perubahan — semua dengan kutipan. Lalu langsung ulangi pertanyaan terlemah."
       },
       "debrief": {
        "en": "The immediate retry is where the session pays out: the feedback is still warm, the stakes are still low, and the improvement is instantly visible to both of you. End every peer mock with a retry — never with only talk.",
        "id": "Pengulangan segera adalah tempat sesi ini membayar: umpan balik masih hangat, taruhan masih rendah, dan perbaikannya langsung terlihat bagi kalian berdua. Akhiri tiap mock rekan dengan pengulangan — jangan pernah hanya dengan pembicaraan."
       }
      }
     ],
     "diagram": {
      "type": "timeline",
      "title": {
       "en": "The 45-minute peer mock",
       "id": "Mock rekan 45 menit"
      },
      "items": [
       {
        "h": {
         "en": "0–5 min",
         "id": "0–5 mnt"
        },
        "sub": {
         "en": "Configure: role, stage, six bank questions",
         "id": "Konfigurasi: peran, tahap, enam pertanyaan bank"
        }
       },
       {
        "h": {
         "en": "5–25 min",
         "id": "5–25 mnt"
        },
        "sub": {
         "en": "Interview — frame held, no coaching",
         "id": "Wawancara — bingkai dijaga, tanpa arahan"
        }
       },
       {
        "h": {
         "en": "25–35 min",
         "id": "25–35 mnt"
        },
        "sub": {
         "en": "Debrief: 2 strengths, 2 weaknesses, 1 change — with quotes",
         "id": "Debrief: 2 kekuatan, 2 kelemahan, 1 perubahan — dengan kutipan"
        }
       },
       {
        "h": {
         "en": "35–40 min",
         "id": "35–40 mnt"
        },
        "sub": {
         "en": "Immediate retry of the weakest answer",
         "id": "Pengulangan segera jawaban terlemah"
        }
       },
       {
        "h": {
         "en": "40–45 min",
         "id": "40–45 mnt"
        },
        "sub": {
         "en": "Swap roles or book the next session",
         "id": "Bertukar peran atau jadwalkan sesi berikutnya"
        }
       }
      ],
      "note": {
       "en": "End every peer mock with a retry — never with only talk.",
       "id": "Akhiri tiap mock rekan dengan pengulangan — jangan pernah hanya dengan pembicaraan."
      },
      "exhibit": {
       "en": "Exhibit 17: The 45-minute peer mock",
       "id": "Peraga 17: Mock rekan 45 menit"
      },
      "longdesc": {
       "en": "Diagram of The 45-minute peer mock. It presents, in order: 0–5 min — Configure: role, stage, six bank questions; 5–25 min — Interview — frame held, no coaching; 25–35 min — Debrief: 2 strengths, 2 weaknesses, 1 change — with quotes; 35–40 min — Immediate retry of the weakest answer; 40–45 min — Swap roles or book the next session.",
       "id": "Diagram Mock rekan 45 menit. Menyajikan, berurutan: 0–5 mnt — Konfigurasi: peran, tahap, enam pertanyaan bank; 5–25 mnt — Wawancara — bingkai dijaga, tanpa arahan; 25–35 mnt — Debrief: 2 kekuatan, 2 kelemahan, 1 perubahan — dengan kutipan; 35–40 mnt — Pengulangan segera jawaban terlemah; 40–45 mnt — Bertukar peran atau jadwalkan sesi berikutnya."
      }
     },
     "checks": [
      {
       "q": {
        "en": "Why does playing the interviewer improve your own answers?",
        "id": "Mengapa berperan sebagai pewawancara memperbaiki jawabanmu sendiri?"
       },
       "options": [
        {
         "en": "You feel from the inside what scores — vagueness becomes audible",
         "id": "Kamu merasakan dari dalam apa yang layak dinilai — kekaburan jadi terdengar"
        },
        {
         "en": "It doesn't — only answering practice helps",
         "id": "Tidak — hanya latihan menjawab yang membantu"
        },
        {
         "en": "Because you memorise more questions",
         "id": "Karena kamu menghafal lebih banyak pertanyaan"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — an hour in the interviewer's chair recalibrates your ear. You stop tolerating your own vague answers.",
        "id": "Benar — satu jam di kursi pewawancara mengkalibrasi ulang telingamu. Kamu berhenti menoleransi jawaban kaburmu sendiri."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "debrief",
        "id": "debrief"
       },
       "def": {
        "en": "The meeting after the interview loop where interviewers pool notes and argue the hire decision — without you in the room.",
        "id": "Rapat setelah rangkaian wawancara tempat para pewawancara menggabungkan catatan dan memperdebatkan keputusan rekrut — tanpa kehadiranmu."
       }
      },
      {
       "term": {
        "en": "rubric",
        "id": "rubrik"
       },
       "def": {
        "en": "The written standard an answer is scored against — criteria plus what each level of quality looks like.",
        "id": "Standar tertulis tempat jawaban dinilai — kriteria plus wujud tiap tingkat kualitasnya."
       }
      },
      {
       "term": {
        "en": "follow-up",
        "id": "pertanyaan lanjutan"
       },
       "def": {
        "en": "The probing question after your answer — where inflated claims collapse and honest depth scores.",
        "id": "Pertanyaan pengejar setelah jawabanmu — tempat klaim gelembung runtuh dan kedalaman jujur bernilai."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Kekonkretan yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai rubrik."
       }
      }
     ]
    },
    {
     "n": "7.4",
     "title": {
      "en": "The 10-Day Pre-Interview Sprint Plan",
      "id": "Rencana Sprint Pra-Wawancara 10 Hari"
     },
     "kind": "reading",
     "dur": {
      "en": "10 min",
      "id": "10 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "An interview date concentrates the mind. This is the ten-day protocol from invitation to interview morning — research, story calibration, simulations, difficult-case drilling, logistics, and the final checklist. And if you have days, not weeks: the fast-track version lives one click away in the simulator.",
      "id": "Tanggal wawancara memusatkan pikiran. Inilah protokol sepuluh hari dari undangan sampai pagi wawancara — riset, kalibrasi kisah, simulasi, latihan kasus sulit, logistik, dan daftar periksa akhir. Dan jika waktumu hitungan hari, bukan minggu: versi jalur cepat tersedia satu klik di dalam simulator."
     },
     "objectives": [
      {
       "en": "Run the 10-day sprint structure for a real interview.",
       "id": "Menjalankan struktur sprint 10 hari untuk wawancara nyata."
      },
      {
       "en": "Allocate simulation sessions across the sprint deliberately.",
       "id": "Mengalokasikan sesi simulasi sepanjang sprint secara sengaja."
      },
      {
       "en": "Execute the day-before and day-of checklists.",
       "id": "Menjalankan daftar periksa H-1 dan hari-H."
      }
     ],
     "takeaways": [
      {
       "en": "Days 10–8 build intelligence; days 7–4 build answers; days 3–1 build performance.",
       "id": "Hari 10–8 membangun intelijen; hari 7–4 membangun jawaban; hari 3–1 membangun performa."
      },
      {
       "en": "The last 24 hours are for logistics and sleep, not new material.",
       "id": "24 jam terakhir untuk logistik dan tidur, bukan materi baru."
      },
      {
       "en": "Hours, not days? Use the simulator's Fast-Track — priorities, JD analysis, and one sprint session.",
       "id": "Waktumu hitungan jam? Pakai Jalur Cepat simulator — prioritas, analisis JD, dan satu sesi sprint."
      }
     ],
     "check": {
      "q": {
       "en": "The night before the interview you should:",
       "id": "Malam sebelum wawancara kamu sebaiknya:"
      },
      "options": [
       {
        "en": "Confirm logistics, re-read your positioning once, and sleep",
        "id": "Memastikan logistik, membaca ulang positioning-mu sekali, dan tidur"
       },
       {
        "en": "Cram three new modules of material",
        "id": "Melahap tiga modul materi baru"
       },
       {
        "en": "Run simulations until midnight",
        "id": "Menjalankan simulasi sampai tengah malam"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — performance rides on rest. New material within 24 hours adds anxiety, not capability.",
       "id": "Benar — performa menumpang pada istirahat. Materi baru dalam 24 jam menambah cemas, bukan kemampuan."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Days 10–8 · Intelligence",
        "id": "Hari 10–8 · Intelijen"
       },
       "body": {
        "en": "Decode the JD into its competency map (lesson 3.3). Read the company's public frameworks, product and recent moves. Build the requirement → evidence table. Configure the simulator with the role, stage, JD and your CV — run one practice-mode session as a baseline and note the weakest dimension.",
        "id": "Bedah JD menjadi peta kompetensinya (pelajaran 3.3). Baca kerangka publik perusahaan, produknya, dan langkah terbarunya. Susun tabel persyaratan → bukti. Konfigurasi simulator dengan peran, tahap, JD, dan CV-mu — jalankan satu sesi mode latihan sebagai garis dasar dan catat dimensi terlemahnya."
       }
      },
      {
       "h": {
        "en": "Days 7–4 · Answers",
        "id": "Hari 7–4 · Jawaban"
       },
       "body": {
        "en": "Polish the story matrix for this role: workhorse stories at three altitudes, your difficult case in one calm breath, the positioning statement tailored. One simulator session daily, alternating focus on your measured weaknesses. Day 5: a peer mock if you can get one — Basecamp is where you find the peer.",
        "id": "Poles matriks kisah untuk peran ini: kisah andalan pada tiga ketinggian, kasus sulitmu dalam satu tarikan napas tenang, positioning statement yang disesuaikan. Satu sesi simulator per hari, bergantian fokus pada kelemahan terukurmu. Hari 5: mock rekan bila memungkinkan — Basecamp adalah tempat menemukan rekannya."
       }
      },
      {
       "h": {
        "en": "Days 3–1 · Performance",
        "id": "Hari 3–1 · Performa"
       },
       "body": {
        "en": "Switch to live mode with camera on. Full-length sessions at the real stage and difficulty. Review recordings for presence honestly. Day 1: logistics — route or link tested, outfit ready, questions-to-ask written, positioning read aloud once. Then stop. Sleep is preparation; anxiety rehearsal is not.",
        "id": "Beralih ke mode langsung dengan kamera menyala. Sesi durasi penuh pada tahap dan kesulitan sebenarnya. Tinjau rekaman untuk kehadiran secara jujur. H-1: logistik — rute atau tautan diuji, pakaian siap, daftar pertanyaanmu ditulis, positioning dibaca lantang sekali. Lalu berhenti. Tidur adalah persiapan; melatih kecemasan bukan."
       }
      },
      {
       "h": {
        "en": "Interview morning",
        "id": "Pagi hari wawancara"
       },
       "body": {
        "en": "Eat. Arrive or log in ten minutes early. Read your one-line positioning and your three questions — nothing else. Two slow breaths before the door. You have practised more than nearly every other candidate walking in today; walk in like it.",
        "id": "Makan. Tiba atau masuk sepuluh menit lebih awal. Baca positioning satu barismu dan tiga pertanyaanmu — tidak yang lain. Dua tarikan napas pelan sebelum pintu. Kamu telah berlatih lebih banyak dari hampir semua kandidat lain hari ini; masuklah dengan sikap seperti itu."
       }
      }
     ],
     "diagram": {
      "type": "timeline",
      "title": {
       "en": "Ten days, three phases",
       "id": "Sepuluh hari, tiga fase"
      },
      "items": [
       {
        "h": {
         "en": "Days 10–8",
         "id": "Hari 10–8"
        },
        "sub": {
         "en": "Intelligence: JD decode, frameworks, evidence table, baseline session",
         "id": "Intelijen: bedah JD, kerangka, tabel bukti, sesi garis dasar"
        }
       },
       {
        "h": {
         "en": "Days 7–4",
         "id": "Hari 7–4"
        },
        "sub": {
         "en": "Answers: story matrix, difficult case, one session daily",
         "id": "Jawaban: matriks kisah, kasus sulit, satu sesi per hari"
        }
       },
       {
        "h": {
         "en": "Days 3–1",
         "id": "Hari 3–1"
        },
        "sub": {
         "en": "Performance: live mode, camera on, then logistics and sleep",
         "id": "Performa: mode langsung, kamera menyala, lalu logistik dan tidur"
        }
       },
       {
        "h": {
         "en": "Morning",
         "id": "Pagi H"
        },
        "sub": {
         "en": "Eat, arrive early, one read of your positioning, two slow breaths",
         "id": "Makan, datang awal, baca positioning sekali, dua tarikan napas pelan"
        }
       }
      ],
      "note": {
       "en": "Hours, not days? The simulator's Fast-Track compresses this into one evening.",
       "id": "Waktumu jam, bukan hari? Jalur Cepat simulator memadatkannya menjadi satu malam."
      },
      "exhibit": {
       "en": "Exhibit 18: Ten days, three phases",
       "id": "Peraga 18: Sepuluh hari, tiga fase"
      },
      "longdesc": {
       "en": "Diagram of Ten days, three phases. It presents, in order: Days 10–8 — Intelligence: JD decode, frameworks, evidence table, baseline session; Days 7–4 — Answers: story matrix, difficult case, one session daily; Days 3–1 — Performance: live mode, camera on, then logistics and sleep; Morning — Eat, arrive early, one read of your positioning, two slow breaths.",
       "id": "Diagram Sepuluh hari, tiga fase. Menyajikan, berurutan: Hari 10–8 — Intelijen: bedah JD, kerangka, tabel bukti, sesi garis dasar; Hari 7–4 — Jawaban: matriks kisah, kasus sulit, satu sesi per hari; Hari 3–1 — Performa: mode langsung, kamera menyala, lalu logistik dan tidur; Pagi H — Makan, datang awal, baca positioning sekali, dua tarikan napas pelan."
      }
     },
     "tryit": {
      "qid": "hr10",
      "label": {
       "en": "The sprint's anchor question",
       "id": "Pertanyaan jangkar sprint ini"
      },
      "desc": {
       "en": "“Why should we hire you?” — the three-sentence close, rehearsed until boring.",
       "id": "“Mengapa kami harus merekrutmu?” — penutup tiga kalimat, dilatih sampai terasa membosankan."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "competency",
        "id": "kompetensi"
       },
       "def": {
        "en": "A capability a role requires — leadership, prioritisation, judgment — that interviews probe with behavioral evidence.",
        "id": "Kapabilitas yang dituntut sebuah peran — kepemimpinan, prioritisasi, pertimbangan — yang diuji wawancara lewat bukti perilaku."
       }
      },
      {
       "term": {
        "en": "positioning statement",
        "id": "positioning statement"
       },
       "def": {
        "en": "Your 90-second opening: who you are professionally, two numbered proofs, and why this company.",
        "id": "Pembuka 90 detikmu: siapa kamu secara profesional, dua bukti berangka, dan mengapa perusahaan ini."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Kekonkretan yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai rubrik."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Cramming new material the night before",
         "id": "Melahap materi baru semalam sebelumnya"
        },
        "fix": {
         "en": "The last 24 hours are for logistics and sleep. New material adds anxiety, not capability.",
         "id": "24 jam terakhir untuk logistik dan tidur. Materi baru menambah cemas, bukan kemampuan."
        }
       },
       {
        "h": {
         "en": "Practising silently by re-reading",
         "id": "Berlatih diam-diam dengan membaca ulang"
        },
        "fix": {
         "en": "One 4-question simulation with a debrief beats four more hours of reading — run it.",
         "id": "Satu simulasi 4 pertanyaan dengan debrief mengalahkan empat jam membaca lagi — jalankan."
        }
       }
      ]
     }
    }
   ]
  },
  {
   "num": 8,
   "title": {
    "en": "Offer Evaluation &amp; Negotiation",
    "id": "Evaluasi Penawaran &amp; Negosiasi"
   },
   "overview": {
    "en": "The climb is not over at “we'd like to make you an offer”. This module covers the anatomy of total compensation, the research method that turns a guess into a range, the negotiation conversation itself — timing, anchoring, and non-salary levers — and the red flags to catch in an offer letter before you sign it.",
    "id": "Pendakian belum usai pada “kami ingin memberimu penawaran”. Modul ini membahas anatomi kompensasi total, metode riset yang mengubah tebakan menjadi rentang, percakapan negosiasinya sendiri — waktu, jangkar, dan tuas non-gaji — serta tanda bahaya yang harus ditangkap di surat penawaran sebelum kamu tanda tangan."
   },
   "outcome": {
    "en": "By the end of this module you can evaluate an offer on total value, negotiate it professionally with researched anchors, and sign only what is actually written down.",
    "id": "Di akhir modul ini kamu bisa mengevaluasi penawaran berdasarkan nilai total, menegosiasikannya secara profesional dengan jangkar hasil riset, dan menandatangani hanya yang benar-benar tertulis."
   },
   "lessons": [
    {
     "n": "8.1",
     "title": {
      "en": "Total Compensation Anatomy",
      "id": "Anatomi Kompensasi Total"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Base salary is one line of a longer equation: bonus and its real attainment, allowances, insurance, retirement contributions, leave, learning budget, equipment — and the invisible lines: title, scope, manager quality, growth rate. Two offers with the same base can differ by a quarter of real value.",
      "id": "Gaji pokok hanyalah satu baris dari persamaan panjang: bonus dan tingkat pencapaian nyatanya, tunjangan, asuransi, iuran pensiun, cuti, anggaran belajar, peralatan — dan baris tak kasatmata: jabatan, lingkup, kualitas atasan, laju pertumbuhan. Dua penawaran bergaji pokok sama bisa berbeda nilai nyata hingga seperempatnya."
     },
     "objectives": [
      {
       "en": "Itemise an offer into its full compensation components.",
       "id": "Merinci penawaran menjadi komponen kompensasi lengkapnya."
      },
      {
       "en": "Ask the questions that reveal a bonus's real value.",
       "id": "Mengajukan pertanyaan yang mengungkap nilai nyata sebuah bonus."
      },
      {
       "en": "Weigh invisible compensation: scope, growth, manager, learning.",
       "id": "Menimbang kompensasi tak kasatmata: lingkup, pertumbuhan, atasan, pembelajaran."
      }
     ],
     "takeaways": [
      {
       "en": "Compare offers on total annual value, not base salary.",
       "id": "Bandingkan penawaran pada nilai tahunan total, bukan gaji pokok."
      },
      {
       "en": "A “performance bonus” is worth its typical attainment, not its maximum — ask for the typical.",
       "id": "“Bonus kinerja” bernilai pencapaian lazimnya, bukan maksimumnya — tanyakan yang lazim."
      },
      {
       "en": "Early career, growth rate often outvalues salary delta; price it deliberately.",
       "id": "Di awal karier, laju pertumbuhan sering lebih bernilai daripada selisih gaji; hargai dengan sengaja."
      }
     ],
     "check": {
      "q": {
       "en": "An offer includes “up to 4 months bonus”. The right question is:",
       "id": "Penawaran memuat “bonus hingga 4 bulan gaji”. Pertanyaan yang tepat:"
      },
      "options": [
       {
        "en": "Nothing — bonus terms are impolite to question",
        "id": "Tidak ada — menanyakan bonus itu tidak sopan"
       },
       {
        "en": "“What did the typical person at this level actually receive last year?”",
        "id": "“Berapa yang benar-benar diterima orang pada level ini tahun lalu?”"
       },
       {
        "en": "“Can you guarantee the maximum in writing?”",
        "id": "“Bisakah maksimumnya dijamin tertulis?”"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — “up to” is marketing; typical attainment is data. The question is normal and professionals ask it.",
       "id": "Benar — “hingga” adalah pemasaran; pencapaian lazim adalah data. Pertanyaan itu wajar dan para profesional menanyakannya."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The visible lines",
        "id": "Baris-baris yang terlihat"
       },
       "body": {
        "en": "List every component with an annual number: base × 12 (or 13 where a religious-holiday allowance applies), realistic bonus, transport and meal allowances, insurance premiums the company pays, retirement contributions, paid leave days at their daily value, learning budget, device policy. The spreadsheet takes twenty minutes and regularly reverses which offer is “higher”.",
        "id": "Daftar tiap komponen dengan angka tahunan: pokok × 12 (atau 13 bila ada THR), bonus realistis, tunjangan transpor dan makan, premi asuransi yang dibayar perusahaan, iuran pensiun, hari cuti berbayar dengan nilai hariannya, anggaran belajar, kebijakan perangkat. Lembar hitungnya butuh dua puluh menit dan sering membalikkan penawaran mana yang “lebih tinggi”."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "The invisible lines",
        "id": "Baris-baris tak kasatmata"
       },
       "body": {
        "en": "Scope: will you own something, or assist someone who does? Growth rate: what did the last person in this seat learn per year? Manager: a great one compounds your value for a decade. Brand and network: doors this name opens later. None of these appear in the letter; all of them appear in your career. Score them one to five, deliberately, next to the money.",
        "id": "Lingkup: kamu akan memiliki sesuatu, atau membantu orang yang memilikinya? Laju pertumbuhan: apa yang dipelajari penghuni kursi ini sebelumnya per tahun? Atasan: yang hebat melipatgandakan nilaimu selama satu dekade. Merek dan jejaring: pintu yang dibuka nama ini kelak. Tak satu pun muncul di surat; semuanya muncul di kariermu. Beri skor satu sampai lima, dengan sengaja, di samping uangnya."
       },
       "icon": "book"
      }
     ],
     "diagram": {
      "type": "ring",
      "title": {
       "en": "Total compensation — the whole equation",
       "id": "Kompensasi total — persamaan utuhnya"
      },
      "items": [
       {
        "h": {
         "en": "Base salary",
         "id": "Gaji pokok"
        },
        "sub": {
         "en": "×12 or ×13 with the holiday allowance",
         "id": "×12 atau ×13 dengan THR"
        }
       },
       {
        "h": {
         "en": "Bonus",
         "id": "Bonus"
        },
        "sub": {
         "en": "Worth its TYPICAL attainment, not its maximum",
         "id": "Bernilai pencapaian LAZIMNYA, bukan maksimumnya"
        }
       },
       {
        "h": {
         "en": "Allowances & insurance",
         "id": "Tunjangan & asuransi"
        },
        "sub": {
         "en": "Transport, meals, premiums, retirement",
         "id": "Transpor, makan, premi, pensiun"
        }
       },
       {
        "h": {
         "en": "Leave & learning",
         "id": "Cuti & belajar"
        },
        "sub": {
         "en": "Paid days, budget, equipment",
         "id": "Hari berbayar, anggaran, peralatan"
        }
       },
       {
        "h": {
         "en": "Invisible lines",
         "id": "Baris tak kasatmata"
        },
        "sub": {
         "en": "Scope, growth rate, manager, network",
         "id": "Lingkup, laju tumbuh, atasan, jejaring"
        }
       }
      ],
      "note": {
       "en": "Two offers with the same base can differ by a quarter of real value. Build the twenty-minute spreadsheet.",
       "id": "Dua penawaran bergaji pokok sama bisa berbeda nilai nyata hingga seperempat. Susun lembar hitung dua puluh menitnya."
      },
      "exhibit": {
       "en": "Exhibit 19: Total compensation — the whole equation",
       "id": "Peraga 19: Kompensasi total — persamaan utuhnya"
      },
      "longdesc": {
       "en": "Diagram of Total compensation — the whole equation. It presents, in order: Base salary — ×12 or ×13 with the holiday allowance; Bonus — Worth its TYPICAL attainment, not its maximum; Allowances & insurance — Transport, meals, premiums, retirement; Leave & learning — Paid days, budget, equipment; Invisible lines — Scope, growth rate, manager, network.",
       "id": "Diagram Kompensasi total — persamaan utuhnya. Menyajikan, berurutan: Gaji pokok — ×12 atau ×13 dengan THR; Bonus — Bernilai pencapaian LAZIMNYA, bukan maksimumnya; Tunjangan & asuransi — Transpor, makan, premi, pensiun; Cuti & belajar — Hari berbayar, anggaran, peralatan; Baris tak kasatmata — Lingkup, laju tumbuh, atasan, jejaring."
      }
     },
     "checks": [
      {
       "q": {
        "en": "Early in your career, the component that most often outvalues a salary delta is:",
        "id": "Di awal karier, komponen yang paling sering melampaui selisih gaji adalah:"
       },
       "options": [
        {
         "en": "Growth rate — what the seat teaches per year",
         "id": "Laju pertumbuhan — apa yang diajarkan kursi itu per tahun"
        },
        {
         "en": "The meal allowance",
         "id": "Tunjangan makan"
        },
        {
         "en": "The office location",
         "id": "Lokasi kantor"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — capability compounds for decades; a small salary delta does not. Price growth deliberately.",
        "id": "Benar — kapabilitas berbunga selama puluhan tahun; selisih gaji kecil tidak. Hargai pertumbuhan dengan sengaja."
       }
      }
     ],
     "scenario": {
      "icon": "book",
      "img": "../../assets/bg/stage-activation.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat Dalam Sorotan"
      },
      "body": [
       {
        "en": "Lia holds two offers. Company A: base salary 8% higher. Company B: a thirteenth-month allowance, full family insurance, a named learning budget, and a manager whose last three analysts were promoted within two years. Her friends say “take A, it pays more.” Her spreadsheet — twenty minutes of honest arithmetic — says B is worth more this year, and far more in three. This module builds that spreadsheet with you.",
        "id": "Lia memegang dua penawaran. Perusahaan A: gaji pokok 8% lebih tinggi. Perusahaan B: THR, asuransi keluarga penuh, anggaran belajar yang jelas, dan atasan yang tiga analis terakhirnya dipromosikan dalam dua tahun. Teman-temannya berkata “ambil A, gajinya lebih besar.” Lembar hitungnya — dua puluh menit aritmetika jujur — berkata B lebih bernilai tahun ini, dan jauh lebih bernilai dalam tiga tahun. Modul ini menyusun lembar hitung itu bersamamu."
       }
      ]
     }
    },
    {
     "n": "8.2",
     "title": {
      "en": "Market Rate Research Methodology",
      "id": "Metodologi Riset Harga Pasar"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "“What are your salary expectations?” is only frightening without data. The research method triangulates three sources — published salary guides, job ads that state ranges, and real conversations with people near the role — into a defensible range you can say out loud without flinching.",
      "id": "“Berapa ekspektasi gajimu?” hanya menakutkan tanpa data. Metode risetnya melakukan triangulasi tiga sumber — panduan gaji terpublikasi, iklan kerja yang mencantumkan rentang, dan percakapan nyata dengan orang di sekitar peran itu — menjadi rentang yang bisa dipertahankan dan kamu ucapkan tanpa gentar."
     },
     "objectives": [
      {
       "en": "Triangulate a salary range from three independent source types.",
       "id": "Melakukan triangulasi rentang gaji dari tiga jenis sumber independen."
      },
      {
       "en": "Adjust for company stage, industry and your leverage honestly.",
       "id": "Menyesuaikan dengan tahap perusahaan, industri, dan posisi tawarmu secara jujur."
      },
      {
       "en": "Deliver the range with its reasoning in one practised sentence.",
       "id": "Menyampaikan rentang beserta alasannya dalam satu kalimat terlatih."
      }
     ],
     "takeaways": [
      {
       "en": "One source is a guess; three sources agreeing is a range you can defend.",
       "id": "Satu sumber adalah tebakan; tiga sumber yang bersepakat adalah rentang yang bisa dipertahankan."
      },
      {
       "en": "People share salary information more readily than folklore claims — ask for ranges, not numbers.",
       "id": "Orang berbagi informasi gaji lebih mudah daripada kata mitos — mintalah rentang, bukan angka pribadi."
      },
      {
       "en": "State the range with its basis: “based on market data for this role and level…”",
       "id": "Sampaikan rentang beserta dasarnya: “berdasarkan data pasar untuk peran dan level ini…”"
      }
     ],
     "check": {
      "q": {
       "en": "The strongest basis for your stated range is:",
       "id": "Dasar terkuat untuk rentang yang kamu sebutkan adalah:"
      },
      "options": [
       {
        "en": "What your friend at a different company earns",
        "id": "Gaji temanmu di perusahaan yang berbeda"
       },
       {
        "en": "Your current salary plus a fixed percentage",
        "id": "Gaji sekarang plus persentase tetap"
       },
       {
        "en": "Three independent sources that roughly agree",
        "id": "Tiga sumber independen yang kurang lebih bersepakat"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — triangulation. A single data point, especially your own history, anchors you to noise.",
       "id": "Benar — triangulasi. Satu titik data, apalagi riwayatmu sendiri, menjangkarkanmu pada derau."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The three sources",
        "id": "Tiga sumbernya"
       },
       "body": {
        "en": "Published guides from recruitment firms give the wide band by role, level and city. Job advertisements that state ranges give the live market — collect five for your target role. Conversations give the truth behind both: ask people one step ahead of you, “for someone at my level in this kind of company, what range is realistic?” Ranges, not personal numbers — people answer that question.",
        "id": "Panduan terbitan firma rekrutmen memberi pita lebar per peran, level, dan kota. Iklan kerja yang mencantumkan rentang memberi pasar yang hidup — kumpulkan lima untuk peran targetmu. Percakapan memberi kebenaran di balik keduanya: tanya orang yang selangkah di depanmu, “untuk level saya di jenis perusahaan ini, rentang berapa yang realistis?” Rentang, bukan angka pribadi — pertanyaan itu dijawab orang."
       }
      },
      {
       "h": {
        "en": "Adjustments and honesty",
        "id": "Penyesuaian dan kejujuran"
       },
       "body": {
        "en": "Adjust for stage: startups pay differently from multinationals, and partly in learning and scope. Adjust for your leverage: competing offers move you up the band; urgency moves you down it. Then commit to a range whose bottom you would genuinely accept — a range you would refuse is a bluff, and module 5 already covered how bluffs end.",
        "id": "Sesuaikan dengan tahap: startup membayar berbeda dari multinasional, sebagian dalam bentuk pembelajaran dan lingkup. Sesuaikan dengan posisi tawarmu: penawaran pesaing menaikkanmu di dalam pita; keterdesakan menurunkanmu. Lalu tetapkan rentang yang batas bawahnya sungguh akan kamu terima — rentang yang akan kamu tolak adalah gertakan, dan modul 5 sudah membahas bagaimana gertakan berakhir."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "Triangulating your range",
       "id": "Triangulasi rentangmu"
      },
      "items": [
       {
        "h": {
         "en": "Salary guides",
         "id": "Panduan gaji"
        },
        "sub": {
         "en": "The wide band by role, level, city",
         "id": "Pita lebar per peran, level, kota"
        }
       },
       {
        "h": {
         "en": "Job ads with ranges",
         "id": "Iklan kerja berrentang"
        },
        "sub": {
         "en": "The live market — collect five",
         "id": "Pasar yang hidup — kumpulkan lima"
        }
       },
       {
        "h": {
         "en": "Conversations",
         "id": "Percakapan"
        },
        "sub": {
         "en": "Ask for ranges, not personal numbers",
         "id": "Minta rentang, bukan angka pribadi"
        }
       },
       {
        "h": {
         "en": "Your range",
         "id": "Rentangmu"
        },
        "sub": {
         "en": "Bottom you would genuinely accept",
         "id": "Batas bawah yang sungguh akan kamu terima"
        }
       }
      ],
      "note": {
       "en": "One source is a guess; three agreeing is a range you can say out loud without flinching.",
       "id": "Satu sumber adalah tebakan; tiga yang bersepakat adalah rentang yang bisa diucapkan tanpa gentar."
      },
      "exhibit": {
       "en": "Exhibit 20: Triangulating your range",
       "id": "Peraga 20: Triangulasi rentangmu"
      },
      "longdesc": {
       "en": "Diagram of Triangulating your range. It presents, in order: Salary guides — The wide band by role, level, city; Job ads with ranges — The live market — collect five; Conversations — Ask for ranges, not personal numbers; Your range — Bottom you would genuinely accept.",
       "id": "Diagram Triangulasi rentangmu. Menyajikan, berurutan: Panduan gaji — Pita lebar per peran, level, kota; Iklan kerja berrentang — Pasar yang hidup — kumpulkan lima; Percakapan — Minta rentang, bukan angka pribadi; Rentangmu — Batas bawah yang sungguh akan kamu terima."
      }
     },
     "tryit": {
      "qid": "hr06",
      "label": {
       "en": "Deliver your range without flinching",
       "id": "Sampaikan rentangmu tanpa gentar"
      },
      "desc": {
       "en": "“What are your salary expectations?” — anchored, ranged, conditional.",
       "id": "“Berapa ekspektasi gajimu?” — berjangkar, berrentang, bersyarat."
      }
     }
    },
    {
     "n": "8.3",
     "title": {
      "en": "The Negotiation Conversation Script",
      "id": "Naskah Percakapan Negosiasi"
     },
     "kind": "interactive",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Negotiation is one conversation, usually under fifteen minutes, that can be worth months of salary — and most candidates skip it out of fear the offer will vanish. It almost never does. This lesson gives the timing, the script skeleton, and the non-salary levers, then drills the three moments people fumble.",
      "id": "Negosiasi adalah satu percakapan, biasanya di bawah lima belas menit, yang bisa bernilai berbulan-bulan gaji — dan kebanyakan kandidat melewatkannya karena takut penawarannya lenyap. Itu hampir tidak pernah terjadi. Pelajaran ini memberikan waktunya, kerangka naskahnya, dan tuas non-gaji, lalu melatih tiga momen yang paling sering gagal."
     },
     "objectives": [
      {
       "en": "Time the negotiation correctly: after the offer, before acceptance.",
       "id": "Menepatkan waktu negosiasi: setelah penawaran, sebelum penerimaan."
      },
      {
       "en": "Run the appreciation → enthusiasm → ask → silence sequence.",
       "id": "Menjalankan urutan apresiasi → antusiasme → permintaan → hening."
      },
      {
       "en": "Deploy non-salary levers when the base is fixed.",
       "id": "Menggunakan tuas non-gaji saat gaji pokok tak bisa bergerak."
      }
     ],
     "takeaways": [
      {
       "en": "Companies expect negotiation; a professional ask has never reasonably cancelled an offer.",
       "id": "Perusahaan mengharapkan negosiasi; permintaan profesional tidak pernah secara wajar membatalkan penawaran."
      },
      {
       "en": "Ask once, clearly, with your researched basis — then stop talking.",
       "id": "Minta sekali, jelas, dengan dasar risetmu — lalu berhenti bicara."
      },
      {
       "en": "Start date, sign-on, learning budget, review timing, title: levers that move when salary cannot.",
       "id": "Tanggal mulai, bonus penandatanganan, anggaran belajar, waktu peninjauan, jabatan: tuas yang bergerak saat gaji tidak."
      }
     ],
     "check": {
      "q": {
       "en": "You receive an offer at the bottom of your researched range. Your move:",
       "id": "Kamu menerima penawaran di batas bawah rentang risetmu. Langkahmu:"
      },
      "options": [
       {
        "en": "Thank them warmly, restate enthusiasm, present your range with its basis, ask, then be silent",
        "id": "Berterima kasih hangat, tegaskan antusiasme, sampaikan rentang beserta dasarnya, minta, lalu diam"
       },
       {
        "en": "Accept immediately before they change their mind",
        "id": "Terima segera sebelum mereka berubah pikiran"
       },
       {
        "en": "Decline to signal your market value",
        "id": "Tolak untuk menunjukkan nilai pasarmu"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — the four-beat script. The silence after the ask is where the movement happens; do not fill it.",
       "id": "Benar — naskah empat ketukan. Keheningan setelah permintaan adalah tempat pergerakan terjadi; jangan mengisinya."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Timing and channel",
        "id": "Waktu dan salurannya"
       },
       "body": {
        "en": "Negotiate after a written offer exists and before you accept — never during interviews, never after signing. A call beats email for the conversation itself; email confirms what was agreed. If asked for your number early in the process, give the researched range and move on; the real conversation happens when they have already chosen you.",
        "id": "Negosiasikan setelah penawaran tertulis ada dan sebelum kamu menerima — jangan selama wawancara, jangan setelah tanda tangan. Telepon mengalahkan email untuk percakapannya; email mengonfirmasi kesepakatannya. Jika diminta angka di awal proses, beri rentang hasil riset dan lanjutkan; percakapan sebenarnya terjadi ketika mereka sudah memilihmu."
       }
      },
      {
       "h": {
        "en": "The script skeleton",
        "id": "Kerangka naskahnya"
       },
       "body": {
        "en": "Appreciation: thank them, specifically. Enthusiasm: you want this role — say it, because it makes the ask collaborative, not adversarial. The ask: “based on my research for this role and level — X to Y — is there room to move the base toward Z?” Silence: the hardest beat. They speak next, whatever the pause costs you in heartbeats.",
        "id": "Apresiasi: berterima kasihlah, spesifik. Antusiasme: kamu menginginkan peran ini — katakan, karena itu membuat permintaan bersifat kolaboratif, bukan berlawanan. Permintaan: “berdasarkan riset saya untuk peran dan level ini — X sampai Y — adakah ruang menggerakkan gaji pokok menuju Z?” Hening: ketukan tersulit. Mereka yang bicara berikutnya, berapa pun detak jantung yang harus kamu bayar untuk jeda itu."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 · Say the ask aloud",
        "id": "Latihan 1 · Ucapkan permintaannya"
       },
       "body": {
        "en": "Write your ask sentence with your real range and basis, and say it aloud five times, ending in silence each time.",
        "id": "Tulis kalimat permintaanmu dengan rentang dan dasar sungguhanmu, dan ucapkan lantang lima kali, diakhiri hening setiap kali."
       },
       "debrief": {
        "en": "The fifth repetition should sound boring — that is the target. Boring means the adrenaline has left the sentence, and what remains is a professional stating market data. That tone is what moves offers.",
        "id": "Pengulangan kelima seharusnya terdengar membosankan — itulah targetnya. Membosankan berarti adrenalin telah meninggalkan kalimat itu, dan yang tersisa adalah seorang profesional yang menyampaikan data pasar. Nada itulah yang menggerakkan penawaran."
       }
      },
      {
       "h": {
        "en": "Drill 2 · The “budget is fixed” pivot",
        "id": "Latihan 2 · Pivot “anggarannya sudah tetap”"
       },
       "body": {
        "en": "They respond: “the base is fixed for this level.” Draft your next sentence using two non-salary levers.",
        "id": "Mereka menjawab: “gaji pokok untuk level ini sudah tetap.” Susun kalimat berikutmu memakai dua tuas non-gaji."
       },
       "debrief": {
        "en": "Model: “Understood. Could we then look at a sign-on to bridge the gap, and a written six-month review with a defined raise path?” Fixed bases are often true; fixed everything rarely is. The pivot keeps the collaboration alive and regularly recovers most of the gap.",
        "id": "Contoh: “Dimengerti. Kalau begitu bisakah kita lihat bonus penandatanganan untuk menjembatani selisihnya, dan peninjauan enam bulan tertulis dengan jalur kenaikan yang jelas?” Gaji pokok yang tetap sering benar; semuanya tetap jarang benar. Pivot ini menjaga kolaborasi tetap hidup dan kerap memulihkan sebagian besar selisih."
       }
      },
      {
       "h": {
        "en": "Drill 3 · Two offers, one conversation",
        "id": "Latihan 3 · Dua penawaran, satu percakapan"
       },
       "body": {
        "en": "You hold a competing offer. Draft the sentence that uses it honestly — no bluffing, no ultimatum.",
        "id": "Kamu memegang penawaran pesaing. Susun kalimat yang memakainya dengan jujur — tanpa gertakan, tanpa ultimatum."
       },
       "debrief": {
        "en": "Model: “I want to be transparent: I have another offer at X. This role is my first choice — if you can approach that number, I'm ready to accept.” Truthful leverage plus a clear preference plus a commitment. Never invent an offer; module 4's rule about reference checks has a sibling here — verification happens.",
        "id": "Contoh: “Saya ingin transparan: saya memegang penawaran lain sebesar X. Peran ini pilihan pertama saya — jika angkanya bisa didekati, saya siap menerima.” Daya tawar jujur plus preferensi jelas plus komitmen. Jangan pernah mengarang penawaran; aturan modul 4 soal cek referensi punya saudara di sini — verifikasi itu nyata."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "The ask",
        "id": "Permintaannya"
       },
       "weak": {
        "en": "I was kind of hoping for maybe a bit more, if that's possible? But it's okay if not, I understand, the offer is already good…",
        "id": "Saya sebenarnya berharap mungkin sedikit lebih, kalau memungkinkan? Tapi tidak apa-apa kalau tidak bisa, saya mengerti, tawarannya sudah bagus…"
       },
       "strong": {
        "en": "Thank you — I'm genuinely excited about this role. Based on my research for this position and level, the market sits at X to Y. Is there room to move the base toward Z?",
        "id": "Terima kasih — saya sungguh antusias dengan peran ini. Berdasarkan riset saya untuk posisi dan level ini, pasarnya ada di X sampai Y. Adakah ruang menggerakkan gaji pokok menuju Z?"
       },
       "why": {
        "en": "The weak ask negotiates against itself before they answer. The strong one: appreciation, enthusiasm, researched anchor, one clear ask — then silence.",
        "id": "Permintaan lemah menegosiasikan kerugiannya sendiri sebelum dijawab. Yang kuat: apresiasi, antusiasme, jangkar hasil riset, satu permintaan jelas — lalu hening."
       }
      }
     ],
     "listen": [
      {
       "label": {
        "en": "The ask, in the tone that moves offers",
        "id": "Permintaan itu, dengan nada yang menggerakkan penawaran"
       },
       "text": {
        "en": "Thank you for the offer — I'm genuinely excited about this role and this team. Based on my research for this position and level, the market sits between the numbers I shared. Is there room to move the base toward the top of that range?",
        "id": "Terima kasih atas tawarannya — saya sungguh antusias dengan peran dan tim ini. Berdasarkan riset saya untuk posisi dan level ini, pasarnya berada di antara angka yang saya sampaikan. Adakah ruang menggerakkan gaji pokok menuju batas atas rentang itu?"
       }
      }
     ],
     "tryit": {
      "qid": "dc15",
      "label": {
       "en": "Defend the jump",
       "id": "Pertahankan lompatannya"
      },
      "desc": {
       "en": "“Why are you worth well above your current salary?” — price the role, not your history.",
       "id": "“Mengapa kamu layak jauh di atas gajimu sekarang?” — hargai perannya, bukan riwayatmu."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Negotiating against yourself in the ask",
         "id": "Menegosiasikan kerugianmu sendiri dalam permintaan"
        },
        "fix": {
         "en": "No “but it's okay if not…” — appreciation, enthusiasm, researched range, one ask, then silence.",
         "id": "Tanpa “tapi tidak apa-apa kalau tidak…” — apresiasi, antusiasme, rentang riset, satu permintaan, lalu hening."
        }
       },
       {
        "h": {
         "en": "Inventing a competing offer",
         "id": "Mengarang penawaran pesaing"
        },
        "fix": {
         "en": "Verification exists. Use leverage only when it is real, and pair it with a clear preference.",
         "id": "Verifikasi itu nyata. Pakai daya tawar hanya bila sungguh ada, dan sandingkan dengan preferensi yang jelas."
        }
       },
       {
        "h": {
         "en": "Accepting on the call out of relief",
         "id": "Menerima saat itu juga karena lega"
        },
        "fix": {
         "en": "Thank them, ask for the letter, take a day. Nothing legitimate evaporates overnight.",
         "id": "Berterima kasih, minta suratnya, ambil waktu sehari. Tak ada tawaran sah yang menguap semalam."
        }
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "negotiation",
        "id": "negosiasi"
       },
       "def": {
        "en": "The conversation after a written offer and before acceptance where terms can move — expected, when done professionally.",
        "id": "Percakapan setelah penawaran tertulis dan sebelum penerimaan, saat ketentuan bisa bergerak — hal wajar bila dilakukan profesional."
       }
      }
     ]
    },
    {
     "n": "8.4",
     "title": {
      "en": "Offer Letter Red Flags and Verbal vs Written Commitments",
      "id": "Tanda Bahaya Surat Penawaran dan Janji Lisan vs Tertulis"
     },
     "kind": "visual",
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The letter is the deal; everything else is conversation. This visual walk covers the four zones to inspect before signing: compensation exactness, probation terms, scope and title precision, and the penalty clauses — plus the golden rule that verbal promises must become written ones before they count.",
      "id": "Suratnya adalah kesepakatannya; selebihnya hanyalah percakapan. Telusuran visual ini mencakup empat zona yang harus diperiksa sebelum tanda tangan: ketepatan kompensasi, ketentuan masa percobaan, presisi lingkup dan jabatan, serta klausul penalti — plus aturan emas bahwa janji lisan harus menjadi tertulis sebelum dihitung."
     },
     "objectives": [
      {
       "en": "Inspect the four risk zones of any offer letter.",
       "id": "Memeriksa empat zona risiko surat penawaran mana pun."
      },
      {
       "en": "Convert verbal promises into written terms before signing.",
       "id": "Mengubah janji lisan menjadi ketentuan tertulis sebelum tanda tangan."
      },
      {
       "en": "Ask clarifying questions about unclear clauses without awkwardness.",
       "id": "Menanyakan klausul yang tidak jelas tanpa canggung."
      }
     ],
     "takeaways": [
      {
       "en": "If it matters and it is not written, it does not exist yet — ask for the sentence.",
       "id": "Jika penting dan belum tertulis, ia belum ada — mintalah kalimatnya."
      },
      {
       "en": "Probation terms deserve the same reading as salary: length, criteria, and what happens after.",
       "id": "Ketentuan masa percobaan layak dibaca seteliti gaji: durasi, kriteria, dan apa setelahnya."
      },
      {
       "en": "Questions about the letter are normal diligence; discomfort with them is itself a signal.",
       "id": "Pertanyaan tentang surat adalah kehati-hatian normal; ketidaknyamanan menghadapinya adalah sinyal tersendiri."
      }
     ],
     "check": {
      "q": {
       "en": "The hiring manager verbally promised a salary review after six months. It is not in the letter. You should:",
       "id": "Manajer perekrutan berjanji lisan ada peninjauan gaji setelah enam bulan. Itu tidak ada di surat. Kamu sebaiknya:"
      },
      "options": [
       {
        "en": "Sign now and raise it again in month six",
        "id": "Tanda tangan sekarang dan ungkit lagi di bulan keenam"
       },
       {
        "en": "Ask for it to be added in writing before you sign",
        "id": "Minta itu ditambahkan tertulis sebelum kamu tanda tangan"
       },
       {
        "en": "Trust it — they seemed sincere",
        "id": "Percaya saja — mereka tampak tulus"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — sincerity is not the issue; memory and turnover are. Managers change; letters remain. One polite sentence gets it written.",
       "id": "Benar — masalahnya bukan ketulusan; melainkan ingatan dan pergantian orang. Manajer berganti; surat bertahan. Satu kalimat sopan membuatnya tertulis."
      }
     },
     "hotspots": [
      {
       "x": 24,
       "y": 26,
       "h": {
        "en": "Compensation exactness",
        "id": "Ketepatan kompensasi"
       },
       "body": {
        "en": "Base amount and currency, allowance lines, bonus formula with its conditions, payment schedule. “Competitive bonus” is not a number; ask for the formula or the typical attainment in writing.",
        "id": "Nominal pokok dan mata uangnya, baris tunjangan, rumus bonus beserta syaratnya, jadwal pembayaran. “Bonus kompetitif” bukan angka; minta rumusnya atau pencapaian lazimnya secara tertulis."
       }
      },
      {
       "x": 72,
       "y": 30,
       "h": {
        "en": "Probation terms",
        "id": "Ketentuan masa percobaan"
       },
       "body": {
        "en": "Length, evaluation criteria, salary during probation, notice period within it, and what confirmation changes. Vague probation criteria are the most common early-career dispute — ask how success will be measured, and keep the answer.",
        "id": "Durasi, kriteria evaluasi, gaji selama percobaan, masa pemberitahuan di dalamnya, dan apa yang berubah setelah pengangkatan. Kriteria percobaan yang kabur adalah sengketa awal karier paling umum — tanyakan bagaimana sukses diukur, dan simpan jawabannya."
       }
      },
      {
       "x": 30,
       "y": 68,
       "h": {
        "en": "Scope, title and location",
        "id": "Lingkup, jabatan, dan lokasi"
       },
       "body": {
        "en": "Does the title match what was discussed? Is the reporting line named? Work location and any relocation or travel expectations written? A letter that says “and other duties as assigned” is normal; a letter vaguer than the interviews were is not.",
        "id": "Apakah jabatan sesuai yang dibicarakan? Apakah garis pelaporan disebut? Lokasi kerja dan ekspektasi relokasi atau perjalanan tertulis? Frasa “dan tugas lain yang ditetapkan” itu normal; surat yang lebih kabur daripada wawancaranya tidak."
       }
      },
      {
       "x": 76,
       "y": 74,
       "h": {
        "en": "Penalty and exit clauses",
        "id": "Klausul penalti dan keluar"
       },
       "body": {
        "en": "Training-cost clawbacks, minimum service periods with penalties, sweeping non-competes, IP claims over personal projects. These exist in some markets — read them before signing, ask for limits where they are broad, and know what you are agreeing to walk away from.",
        "id": "Pengembalian biaya pelatihan, masa kerja minimum berpenalti, larangan kerja di pesaing yang terlalu luas, klaim kekayaan intelektual atas proyek pribadi. Klausul semacam ini ada di sebagian pasar — baca sebelum tanda tangan, minta batasan bila terlalu luas, dan pahami apa yang kamu relakan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A clause says training costs are repayable if you leave within two years. You should:",
        "id": "Sebuah klausul menyebut biaya pelatihan harus dikembalikan jika keluar dalam dua tahun. Kamu sebaiknya:"
       },
       "options": [
        {
         "en": "Read it fully, ask for its limits, and decide knowingly before signing",
         "id": "Baca tuntas, tanyakan batasannya, dan putuskan secara sadar sebelum tanda tangan"
        },
        {
         "en": "Ignore it — those clauses are never enforced",
         "id": "Abaikan — klausul begitu tidak pernah ditegakkan"
        },
        {
         "en": "Refuse the offer immediately",
         "id": "Langsung tolak tawarannya"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — such clauses exist and can be real. Knowing what you sign is the whole discipline of this lesson.",
        "id": "Benar — klausul semacam itu ada dan bisa nyata. Tahu apa yang kamu tanda tangani adalah inti disiplin pelajaran ini."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "probation",
        "id": "masa percobaan"
       },
       "def": {
        "en": "The initial evaluation period of a new job, with its own terms for review, notice and confirmation.",
        "id": "Periode evaluasi awal pekerjaan baru, dengan ketentuan tersendiri untuk peninjauan, pemberitahuan, dan pengangkatan."
       }
      }
     ]
    }
   ]
  },
  {
   "num": 9,
   "title": {
    "en": "Probation Success: The First 90 Days",
    "id": "Sukses Masa Percobaan: 90 Hari Pertama"
   },
   "overview": {
    "en": "The interview never fully ends — probation is the interview you conduct from the inside. This module converts the offer into a confirmed role: the 30/60/90 learning plan, the stakeholder map that tells you where trust flows, the first visible contribution chosen deliberately, and the probation review conversation run by you rather than at you.",
    "id": "Wawancara tidak pernah benar-benar berakhir — masa percobaan adalah wawancara yang kamu jalani dari dalam. Modul ini mengubah penawaran menjadi peran tetap: rencana belajar 30/60/90, peta pemangku kepentingan yang menunjukkan ke mana kepercayaan mengalir, kontribusi pertama yang terlihat dan dipilih dengan sengaja, serta percakapan peninjauan percobaan yang kamu kemudikan alih-alih sekadar kamu alami."
   },
   "outcome": {
    "en": "By the end of this module you can enter a new role with a deliberate 90-day plan, build the relationships that carry your work, deliver an early win that earns trust, and walk into the probation review with the evidence already assembled.",
    "id": "Di akhir modul ini kamu bisa memasuki peran baru dengan rencana 90 hari yang sengaja, membangun relasi yang memikul pekerjaanmu, menghadirkan kemenangan awal yang menumbuhkan kepercayaan, dan memasuki peninjauan percobaan dengan bukti yang sudah terkumpul."
   },
   "lessons": [
    {
     "n": "9.1",
     "title": {
      "en": "The 30/60/90-Day Learning Plan",
      "id": "Rencana Belajar 30/60/90 Hari"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "New hires fail from motion without direction: busy immediately, valuable never. The 30/60/90 arc — listen and map, contribute visibly, own a lane — sequences your energy so that by day ninety the question “was hiring them right?” answers itself.",
      "id": "Karyawan baru gagal karena bergerak tanpa arah: sibuk seketika, bernilai tidak pernah. Busur 30/60/90 — dengarkan dan petakan, berkontribusi terlihat, miliki satu jalur — mengurutkan energimu sehingga pada hari kesembilan puluh pertanyaan “benarkah merekrutnya?” terjawab dengan sendirinya."
     },
     "objectives": [
      {
       "en": "Structure your first ninety days as learn → contribute → own.",
       "id": "Menstrukturkan sembilan puluh hari pertama sebagai belajar → berkontribusi → memiliki."
      },
      {
       "en": "Set expectations with your manager in week one.",
       "id": "Menyelaraskan ekspektasi dengan atasanmu di minggu pertama."
      },
      {
       "en": "Keep an evidence log from day one.",
       "id": "Menjaga catatan bukti sejak hari pertama."
      }
     ],
     "takeaways": [
      {
       "en": "Days 1–30: listen, map, learn the real process — resist premature fixes.",
       "id": "Hari 1–30: dengarkan, petakan, pelajari proses sebenarnya — tahan godaan memperbaiki terlalu dini."
      },
      {
       "en": "Days 31–60: deliver the first visible contribution, chosen with your manager.",
       "id": "Hari 31–60: hadirkan kontribusi pertama yang terlihat, dipilih bersama atasanmu."
      },
      {
       "en": "Days 61–90: own a lane end-to-end and start the review conversation early.",
       "id": "Hari 61–90: miliki satu jalur ujung-ke-ujung dan mulai percakapan peninjauan lebih awal."
      }
     ],
     "check": {
      "q": {
       "en": "In week one, your most important meeting is:",
       "id": "Di minggu pertama, rapat terpentingmu adalah:"
      },
      "options": [
       {
        "en": "Introducing your improvement ideas to the team",
        "id": "Memperkenalkan ide-ide perbaikanmu kepada tim"
       },
       {
        "en": "Negotiating your next salary review",
        "id": "Menegosiasikan peninjauan gaji berikutnya"
       },
       {
        "en": "Expectations with your manager: what does success at 90 days look like?",
        "id": "Penyelarasan ekspektasi dengan atasan: seperti apa sukses di hari ke-90?"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — you cannot hit an undefined target. Ask it explicitly, write the answer down, and revisit it monthly.",
       "id": "Benar — target yang tak terdefinisi mustahil dicapai. Tanyakan eksplisit, tuliskan jawabannya, dan tinjau tiap bulan."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Days 1–30 · The listening tour",
        "id": "Hari 1–30 · Tur mendengarkan"
       },
       "body": {
        "en": "Meet everyone your role touches; ask each the same three questions: what does this team do well, what breaks most often, what should I absolutely not change? Learn the real process, which differs from the documented one everywhere on earth. Write down what surprises you — by day sixty you will be blind to it, and that list is where your future contributions hide.",
        "id": "Temui semua orang yang bersinggungan dengan peranmu; ajukan tiga pertanyaan yang sama: apa yang dikerjakan tim ini dengan baik, apa yang paling sering rusak, apa yang sebaiknya sama sekali tidak kuubah? Pelajari proses sebenarnya, yang di mana pun di bumi berbeda dari yang terdokumentasi. Catat yang mengejutkanmu — pada hari keenam puluh kamu akan buta terhadapnya, dan daftar itulah tempat kontribusi masa depanmu bersembunyi."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Days 31–60 · First contribution",
        "id": "Hari 31–60 · Kontribusi pertama"
       },
       "body": {
        "en": "Choose one deliverable that is visible, finishable inside a month, and genuinely useful — ideally something from your surprise list, validated with your manager. Deliver it completely: shipped, documented, communicated. One finished thing beats five started things at a rate that surprises every new hire who tests it.",
        "id": "Pilih satu hasil kerja yang terlihat, dapat dirampungkan dalam sebulan, dan sungguh berguna — idealnya dari daftar kejutanmu, divalidasi bersama atasan. Selesaikan tuntas: dikirim, didokumentasikan, dikomunikasikan. Satu hal yang selesai mengalahkan lima hal yang dimulai, dengan selisih yang mengejutkan setiap karyawan baru yang mengujinya."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "Days 61–90 · Owning a lane",
        "id": "Hari 61–90 · Memiliki satu jalur"
       },
       "body": {
        "en": "Take end-to-end responsibility for one recurring area — a report, a process, a client, a component. Ownership means people stop checking: it arrives correct, on time, without reminders. That reliability, demonstrated on even a small lane, is the strongest possible probation evidence, because it predicts everything else.",
        "id": "Ambil tanggung jawab ujung-ke-ujung atas satu area berulang — laporan, proses, klien, komponen. Kepemilikan berarti orang berhenti memeriksa: ia tiba benar, tepat waktu, tanpa diingatkan. Keandalan itu, ditunjukkan bahkan pada jalur kecil, adalah bukti masa percobaan terkuat, karena ia meramalkan segala hal lainnya."
       },
       "icon": "target"
      }
     ],
     "diagram": {
      "type": "timeline",
      "title": {
       "en": "The 30/60/90 arc",
       "id": "Busur 30/60/90"
      },
      "items": [
       {
        "h": {
         "en": "Days 1–30",
         "id": "Hari 1–30"
        },
        "sub": {
         "en": "Listen, map, learn the real process — log every surprise",
         "id": "Dengarkan, petakan, pelajari proses nyata — catat tiap kejutan"
        }
       },
       {
        "h": {
         "en": "Days 31–60",
         "id": "Hari 31–60"
        },
        "sub": {
         "en": "First visible contribution — shipped, documented, communicated",
         "id": "Kontribusi pertama yang terlihat — terkirim, terdokumentasi, terkomunikasikan"
        }
       },
       {
        "h": {
         "en": "Days 61–90",
         "id": "Hari 61–90"
        },
        "sub": {
         "en": "Own a lane end-to-end; start the review conversation early",
         "id": "Miliki satu jalur ujung-ke-ujung; mulai percakapan peninjauan lebih awal"
        }
       }
      ],
      "note": {
       "en": "Ask in week one: what does success at day ninety look like? Write the answer down.",
       "id": "Tanyakan di minggu pertama: seperti apa sukses di hari kesembilan puluh? Tuliskan jawabannya."
      },
      "exhibit": {
       "en": "Exhibit 21: The 30/60/90 arc",
       "id": "Peraga 21: Busur 30/60/90"
      },
      "longdesc": {
       "en": "Diagram of The 30/60/90 arc. It presents, in order: Days 1–30 — Listen, map, learn the real process — log every surprise; Days 31–60 — First visible contribution — shipped, documented, communicated; Days 61–90 — Own a lane end-to-end; start the review conversation early.",
       "id": "Diagram Busur 30/60/90. Menyajikan, berurutan: Hari 1–30 — Dengarkan, petakan, pelajari proses nyata — catat tiap kejutan; Hari 31–60 — Kontribusi pertama yang terlihat — terkirim, terdokumentasi, terkomunikasikan; Hari 61–90 — Miliki satu jalur ujung-ke-ujung; mulai percakapan peninjauan lebih awal."
      }
     },
     "tryit": {
      "qid": "st01",
      "label": {
       "en": "Say your 90-day plan aloud",
       "id": "Ucapkan rencana 90 harimu"
      },
      "desc": {
       "en": "The simulator's first-90-days question — three phases, with examples.",
       "id": "Pertanyaan 90-hari-pertama di simulator — tiga fase, dengan contoh."
      }
     },
     "scenario": {
      "icon": "flag",
      "img": "../../assets/bg/stage-foundation.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat Dalam Sorotan"
      },
      "body": [
       {
        "en": "Agus starts Monday. By Wednesday he has proposed reorganising the team's reporting, corrected his manager in a meeting, and skipped two coffee invitations to “focus.” He is working harder than anyone — and by day thirty, quietly, nobody brings him anything anymore. His colleague Ratih started the same week: she spent it asking questions, mapping who depends on whom, and fixing one small broken thing somebody complained about. Guess whose probation review writes itself.",
        "id": "Agus mulai hari Senin. Pada Rabu ia sudah mengusulkan penataan ulang pelaporan tim, mengoreksi atasannya dalam rapat, dan melewatkan dua ajakan ngopi demi “fokus.” Ia bekerja paling keras di antara semua — dan pada hari ketiga puluh, diam-diam, tak ada lagi yang membawa apa pun kepadanya. Rekannya, Ratih, mulai di minggu yang sama: ia menghabiskannya dengan bertanya, memetakan siapa bergantung pada siapa, dan memperbaiki satu hal kecil rusak yang dikeluhkan orang. Tebak peninjauan percobaan siapa yang menulis dirinya sendiri."
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "probation",
        "id": "masa percobaan"
       },
       "def": {
        "en": "The initial evaluation period of a new job, with its own terms for review, notice and confirmation.",
        "id": "Periode evaluasi awal pekerjaan baru, dengan ketentuan tersendiri untuk peninjauan, pemberitahuan, dan pengangkatan."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Kekonkretan yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai rubrik."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Proposing big changes in week one",
         "id": "Mengusulkan perubahan besar di minggu pertama"
        },
        "fix": {
         "en": "Listen and map first — your surprise list from month one is where good contributions hide.",
         "id": "Dengarkan dan petakan dulu — daftar kejutanmu di bulan pertama adalah tempat kontribusi baik bersembunyi."
        }
       },
       {
        "h": {
         "en": "Being busy instead of visible",
         "id": "Sibuk alih-alih terlihat"
        },
        "fix": {
         "en": "One finished, communicated deliverable beats five started ones — every time.",
         "id": "Satu hasil kerja yang tuntas dan terkabarkan mengalahkan lima yang baru dimulai — selalu."
        }
       }
      ]
     }
    },
    {
     "n": "9.2",
     "title": {
      "en": "Stakeholder Mapping and Relationship Building",
      "id": "Pemetaan Pemangku Kepentingan dan Membangun Relasi"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Work travels on relationships; org charts only approximate them. The stakeholder map plots who your role depends on and who depends on you, where trust already flows, and which two relationships will decide your probation. Build those first, deliberately, before you need them.",
      "id": "Pekerjaan berjalan di atas relasi; bagan organisasi hanya perkiraannya. Peta pemangku kepentingan menggambarkan pada siapa peranmu bergantung dan siapa yang bergantung padamu, ke mana kepercayaan sudah mengalir, dan dua relasi mana yang akan menentukan masa percobaanmu. Bangun keduanya lebih dulu, dengan sengaja, sebelum kamu membutuhkannya."
     },
     "objectives": [
      {
       "en": "Draw the dependency map of your new role.",
       "id": "Menggambar peta ketergantungan peran barumu."
      },
      {
       "en": "Identify the two probation-deciding relationships.",
       "id": "Mengidentifikasi dua relasi penentu masa percobaan."
      },
      {
       "en": "Build trust through small kept promises at speed.",
       "id": "Membangun kepercayaan lewat janji-janji kecil yang ditepati dengan cepat."
      }
     ],
     "takeaways": [
      {
       "en": "Map dependencies both directions: inputs you need, outputs others wait for.",
       "id": "Petakan ketergantungan dua arah: masukan yang kamu butuhkan, keluaran yang ditunggu orang lain."
      },
      {
       "en": "Trust is built in small denominations: kept promises, early warnings, credit given.",
       "id": "Kepercayaan dibangun dalam pecahan kecil: janji ditepati, peringatan dini, kredit diberikan."
      },
      {
       "en": "Your manager and one influential peer decide most probations — invest accordingly.",
       "id": "Atasanmu dan satu rekan berpengaruh memutuskan sebagian besar masa percobaan — berinvestasilah sesuai itu."
      }
     ],
     "check": {
      "q": {
       "en": "The fastest trust-builder in a new role is:",
       "id": "Pembangun kepercayaan tercepat di peran baru adalah:"
      },
      "options": [
       {
        "en": "Small promises kept visibly and consistently",
        "id": "Janji-janji kecil yang ditepati secara terlihat dan konsisten"
       },
       {
        "en": "An impressive presentation about your background",
        "id": "Presentasi mengesankan tentang latar belakangmu"
       },
       {
        "en": "Working later than everyone else",
        "id": "Pulang lebih larut dari semua orang"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — reliability compounds. “They said Thursday and it came Thursday” repeated five times is a reputation.",
       "id": "Benar — keandalan itu berbunga. “Katanya Kamis dan datangnya Kamis” diulang lima kali adalah reputasi."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Drawing the map",
        "id": "Menggambar petanya"
       },
       "body": {
        "en": "Three columns: people whose output you need, people who need yours, people who influence how your work is judged. Add two annotations per person: what they care about most, and the current trust level. The third column — influencers — is the one new hires forget, and the one probation reviews quietly poll.",
        "id": "Tiga kolom: orang yang keluarannya kamu butuhkan, orang yang membutuhkan keluaranmu, orang yang memengaruhi cara kerjamu dinilai. Tambahkan dua catatan per orang: apa yang paling mereka pedulikan, dan tingkat kepercayaan saat ini. Kolom ketiga — para pemberi pengaruh — adalah yang dilupakan karyawan baru, dan yang diam-diam disurvei saat peninjauan percobaan."
       }
      },
      {
       "h": {
        "en": "The two that decide",
        "id": "Dua yang menentukan"
       },
       "body": {
        "en": "Your manager's confirmation instinct forms early, from small evidence: responsiveness, quality of questions, kept commitments. The influential peer — the one whose opinion others borrow — forms the team's verdict. Identify both in week one. Serve the manager's stated priorities; make the peer's life concretely easier once. Those two investments outperform every other relationship strategy.",
        "id": "Naluri pengukuhan atasanmu terbentuk sejak awal, dari bukti kecil: ketanggapan, mutu pertanyaan, komitmen yang ditepati. Rekan berpengaruh — yang opininya dipinjam orang lain — membentuk vonis tim. Kenali keduanya di minggu pertama. Layani prioritas yang dinyatakan atasan; ringankan hidup si rekan secara konkret satu kali. Dua investasi itu mengungguli semua strategi relasi lainnya."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The stakeholder map — three columns",
       "id": "Peta pemangku kepentingan — tiga kolom"
      },
      "items": [
       {
        "h": {
         "en": "You need them",
         "id": "Kamu membutuhkan mereka"
        },
        "sub": {
         "en": "Whose output feeds your work?",
         "id": "Keluaran siapa yang memberi makan kerjamu?"
        }
       },
       {
        "h": {
         "en": "They need you",
         "id": "Mereka membutuhkanmu"
        },
        "sub": {
         "en": "Who waits on what you produce?",
         "id": "Siapa menunggu hasil kerjamu?"
        }
       },
       {
        "h": {
         "en": "They influence",
         "id": "Mereka memengaruhi"
        },
        "sub": {
         "en": "Whose opinion shapes how you are judged?",
         "id": "Opini siapa yang membentuk penilaian atasmu?"
        }
       }
      ],
      "note": {
       "en": "The third column is the one new hires forget — and the one probation reviews quietly poll.",
       "id": "Kolom ketiga yang paling sering dilupakan karyawan baru — dan yang diam-diam disurvei peninjauan percobaan."
      },
      "exhibit": {
       "en": "Exhibit 22: The stakeholder map — three columns",
       "id": "Peraga 22: Peta pemangku kepentingan — tiga kolom"
      },
      "longdesc": {
       "en": "Diagram of The stakeholder map — three columns. It presents, in order: You need them — Whose output feeds your work?; They need you — Who waits on what you produce?; They influence — Whose opinion shapes how you are judged?.",
       "id": "Diagram Peta pemangku kepentingan — tiga kolom. Menyajikan, berurutan: Kamu membutuhkan mereka — Keluaran siapa yang memberi makan kerjamu?; Mereka membutuhkanmu — Siapa menunggu hasil kerjamu?; Mereka memengaruhi — Opini siapa yang membentuk penilaian atasmu?."
      }
     },
     "checks": [
      {
       "q": {
        "en": "Trust in a new role is built fastest by:",
        "id": "Kepercayaan di peran baru paling cepat dibangun oleh:"
       },
       "options": [
        {
         "en": "Small promises kept visibly, plus early warnings when things slip",
         "id": "Janji kecil yang ditepati secara terlihat, plus peringatan dini saat meleset"
        },
        {
         "en": "An impressive introduction presentation",
         "id": "Presentasi perkenalan yang mengesankan"
        },
        {
         "en": "Agreeing with everyone for the first month",
         "id": "Menyetujui semua orang selama sebulan pertama"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — reliability compounds, and honest early warnings buy more trust than silent hoping.",
        "id": "Benar — keandalan berbunga, dan peringatan dini yang jujur membeli lebih banyak kepercayaan daripada berharap dalam diam."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "probation",
        "id": "masa percobaan"
       },
       "def": {
        "en": "The initial evaluation period of a new job, with its own terms for review, notice and confirmation.",
        "id": "Periode evaluasi awal pekerjaan baru, dengan ketentuan tersendiri untuk peninjauan, pemberitahuan, dan pengangkatan."
       }
      },
      {
       "term": {
        "en": "stakeholder",
        "id": "pemangku kepentingan"
       },
       "def": {
        "en": "Anyone whose input your work needs or whose outcomes depend on it — clients, other teams, leadership.",
        "id": "Siapa pun yang masukannya dibutuhkan pekerjaanmu atau yang hasilnya bergantung padanya — klien, tim lain, pimpinan."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Kekonkretan yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai rubrik."
       }
      },
      {
       "term": {
        "en": "influence",
        "id": "pengaruh"
       },
       "def": {
        "en": "Moving people and decisions without formal authority — evidence of leadership before the title arrives.",
        "id": "Menggerakkan orang dan keputusan tanpa otoritas formal — bukti kepemimpinan sebelum jabatannya datang."
       }
      }
     ]
    },
    {
     "n": "9.3",
     "title": {
      "en": "Making Your First Visible Contribution",
      "id": "Menghadirkan Kontribusi Pertama yang Terlihat"
     },
     "kind": "reading",
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Somewhere in your first sixty days there is one deliverable that converts you from “the new person” into “the person who did X”. Choosing it well — visible, finishable, useful, low-risk — and finishing it completely is the highest-leverage decision of your probation.",
      "id": "Di suatu titik dalam enam puluh hari pertamamu ada satu hasil kerja yang mengubahmu dari “orang baru” menjadi “orang yang mengerjakan X”. Memilihnya dengan baik — terlihat, dapat dirampungkan, berguna, berisiko rendah — dan menyelesaikannya tuntas adalah keputusan berdaya ungkit tertinggi masa percobaanmu."
     },
     "objectives": [
      {
       "en": "Select a first contribution using the four criteria.",
       "id": "Memilih kontribusi pertama dengan empat kriteria."
      },
      {
       "en": "Scope it to finish inside a month.",
       "id": "Melingkupinya agar rampung dalam sebulan."
      },
      {
       "en": "Communicate completion so the contribution is actually visible.",
       "id": "Mengomunikasikan penyelesaian agar kontribusinya benar-benar terlihat."
      }
     ],
     "takeaways": [
      {
       "en": "Visible, finishable, useful, low-risk — all four, or choose again.",
       "id": "Terlihat, dapat dirampungkan, berguna, berisiko rendah — keempatnya, atau pilih ulang."
      },
      {
       "en": "Finished means shipped, documented and communicated — not merely done.",
       "id": "Selesai berarti terkirim, terdokumentasi, dan terkomunikasikan — bukan sekadar rampung."
      },
      {
       "en": "Quiet competence is invisible competence; share completion without theatre.",
       "id": "Kompetensi yang diam adalah kompetensi yang tak terlihat; kabarkan penyelesaian tanpa drama."
      }
     ],
     "check": {
      "q": {
       "en": "The best first-contribution candidate among these is:",
       "id": "Kandidat kontribusi pertama terbaik di antara ini:"
      },
      "options": [
       {
        "en": "A six-month research project with executive visibility",
        "id": "Proyek riset enam bulan dengan visibilitas eksekutif"
       },
       {
        "en": "A recurring report everyone dreads, automated and documented in three weeks",
        "id": "Laporan berulang yang semua orang benci, diotomatiskan dan didokumentasikan dalam tiga minggu"
       },
       {
        "en": "A proposal to reorganise the team's entire workflow",
        "id": "Proposal menata ulang seluruh alur kerja tim"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — visible, finishable, useful, low-risk. The reorganisation fails the risk test; the research fails the finishable test.",
       "id": "Benar — terlihat, dapat dirampungkan, berguna, berisiko rendah. Penataan ulang gagal uji risiko; risetnya gagal uji rampung."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The four criteria",
        "id": "Empat kriterianya"
       },
       "body": {
        "en": "Visible: people beyond your desk will notice. Finishable: done inside a month with the access you already have. Useful: someone's Tuesday genuinely improves. Low-risk: if it goes wrong, nothing breaks that matters. Candidates that fail any one criterion produce famous new-hire mistakes — the giant proposal, the invisible cleanup, the risky refactor.",
        "id": "Terlihat: orang di luar mejamu akan menyadarinya. Dapat dirampungkan: selesai dalam sebulan dengan akses yang sudah kamu punya. Berguna: hari Selasa seseorang sungguh membaik. Berisiko rendah: jika keliru, tidak ada hal penting yang rusak. Kandidat yang gagal satu saja kriteria melahirkan kesalahan klasik karyawan baru — proposal raksasa, beres-beres tak terlihat, refactor berisiko."
       }
      },
      {
       "h": {
        "en": "Finishing completely",
        "id": "Menyelesaikan tuntas"
       },
       "body": {
        "en": "Shipped: it works where people use it, not on your machine. Documented: the next person can run it without you. Communicated: a short note to the affected people — what changed, what it saves, where the documentation lives — plus one line in the team update. That last mile of communication is where “done” becomes “visible”, and most new hires skip it out of modesty. Do not.",
        "id": "Terkirim: bekerja di tempat orang memakainya, bukan di mesinmu. Terdokumentasi: orang berikutnya bisa menjalankannya tanpamu. Terkomunikasikan: catatan singkat kepada yang terdampak — apa yang berubah, apa yang dihemat, di mana dokumentasinya — plus satu baris di kabar tim. Mil terakhir komunikasi itulah tempat “selesai” menjadi “terlihat”, dan kebanyakan karyawan baru melewatkannya karena rendah hati. Jangan."
       }
      }
     ],
     "diagram": {
      "type": "quad",
      "title": {
       "en": "Choosing the first contribution",
       "id": "Memilih kontribusi pertama"
      },
      "items": [
       {
        "h": {
         "en": "Visible",
         "id": "Terlihat"
        },
        "sub": {
         "en": "People beyond your desk will notice",
         "id": "Orang di luar mejamu akan menyadari"
        }
       },
       {
        "h": {
         "en": "Finishable",
         "id": "Dapat dirampungkan"
        },
        "sub": {
         "en": "Done inside a month, with access you have",
         "id": "Selesai dalam sebulan, dengan akses yang ada"
        }
       },
       {
        "h": {
         "en": "Useful",
         "id": "Berguna"
        },
        "sub": {
         "en": "Someone's Tuesday genuinely improves",
         "id": "Hari Selasa seseorang sungguh membaik"
        }
       },
       {
        "h": {
         "en": "Low-risk",
         "id": "Berisiko rendah"
        },
        "sub": {
         "en": "If it fails, nothing important breaks",
         "id": "Jika gagal, tak ada hal penting yang rusak"
        }
       }
      ],
      "note": {
       "en": "All four, or choose again. The famous new-hire mistakes each fail exactly one of these.",
       "id": "Keempatnya, atau pilih ulang. Kesalahan klasik karyawan baru masing-masing gagal tepat di salah satunya."
      },
      "exhibit": {
       "en": "Exhibit 23: Choosing the first contribution",
       "id": "Peraga 23: Memilih kontribusi pertama"
      },
      "longdesc": {
       "en": "Diagram of Choosing the first contribution. It presents, in order: Visible — People beyond your desk will notice; Finishable — Done inside a month, with access you have; Useful — Someone's Tuesday genuinely improves; Low-risk — If it fails, nothing important breaks.",
       "id": "Diagram Memilih kontribusi pertama. Menyajikan, berurutan: Terlihat — Orang di luar mejamu akan menyadari; Dapat dirampungkan — Selesai dalam sebulan, dengan akses yang ada; Berguna — Hari Selasa seseorang sungguh membaik; Berisiko rendah — Jika gagal, tak ada hal penting yang rusak."
      }
     },
     "checks": [
      {
       "q": {
        "en": "“Finished” for your first contribution means:",
        "id": "“Selesai” untuk kontribusi pertamamu berarti:"
       },
       "options": [
        {
         "en": "Shipped where people use it, documented for the next person, and communicated",
         "id": "Terkirim di tempat orang memakainya, terdokumentasi untuk orang berikutnya, dan terkomunikasikan"
        },
        {
         "en": "Working on your own machine",
         "id": "Berjalan di mesinmu sendiri"
        },
        {
         "en": "Announced in a meeting before it is built",
         "id": "Diumumkan di rapat sebelum dibangun"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — the last mile of documentation and communication is where “done” becomes “visible”. Do not skip it out of modesty.",
        "id": "Benar — mil terakhir dokumentasi dan komunikasi adalah tempat “selesai” menjadi “terlihat”. Jangan lewatkan karena rendah hati."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "probation",
        "id": "masa percobaan"
       },
       "def": {
        "en": "The initial evaluation period of a new job, with its own terms for review, notice and confirmation.",
        "id": "Periode evaluasi awal pekerjaan baru, dengan ketentuan tersendiri untuk peninjauan, pemberitahuan, dan pengangkatan."
       }
      }
     ]
    },
    {
     "n": "9.4",
     "title": {
      "en": "The Probation Review Conversation",
      "id": "Percakapan Peninjauan Masa Percobaan"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Confirmed or extended is often decided before the meeting — from evidence you either assembled or did not. This lesson covers the evidence log, the self-review that frames the conversation, handling improvement feedback in the room, and using the review to set up your next six months.",
      "id": "Diangkat atau diperpanjang sering diputuskan sebelum rapatnya — dari bukti yang kamu kumpulkan atau tidak. Pelajaran ini membahas catatan bukti, tinjauan diri yang membingkai percakapan, menyikapi umpan balik perbaikan di ruangan, dan memakai peninjauan untuk menyiapkan enam bulan berikutnya."
     },
     "objectives": [
      {
       "en": "Maintain an evidence log across probation.",
       "id": "Menjaga catatan bukti sepanjang masa percobaan."
      },
      {
       "en": "Open the review with a structured self-assessment.",
       "id": "Membuka peninjauan dengan penilaian diri terstruktur."
      },
      {
       "en": "Receive improvement feedback as fuel, visibly.",
       "id": "Menerima umpan balik perbaikan sebagai bahan bakar, secara terlihat."
      }
     ],
     "takeaways": [
      {
       "en": "Log wins weekly: deliverable, effect, who benefited. Memory fails; logs do not.",
       "id": "Catat capaian mingguan: hasil kerja, dampak, siapa yang terbantu. Ingatan gagal; catatan tidak."
      },
      {
       "en": "Lead the review with your own honest assessment — framing beats reacting.",
       "id": "Pimpin peninjauan dengan penilaian jujurmu sendiri — membingkai mengalahkan bereaksi."
      },
      {
       "en": "How you receive criticism in this meeting is itself probation evidence.",
       "id": "Cara kamu menerima kritik dalam rapat ini adalah bukti masa percobaan tersendiri."
      }
     ],
     "check": {
      "q": {
       "en": "The strongest way to open your probation review:",
       "id": "Pembuka terkuat peninjauan masa percobaanmu:"
      },
      "options": [
       {
        "en": "Waiting silently for their verdict",
        "id": "Menunggu vonis mereka dalam diam"
       },
       {
        "en": "A list of obstacles that explain any shortfalls",
        "id": "Daftar hambatan yang menjelaskan setiap kekurangan"
       },
       {
        "en": "A brief self-review: delivered, learned, and what I'd focus on next",
        "id": "Tinjauan diri singkat: yang tercapai, yang dipelajari, dan fokus berikutnya"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — delivered, learned, next. It frames the conversation around evidence and growth, and managers remember who framed well.",
       "id": "Benar — tercapai, dipelajari, berikutnya. Ia membingkai percakapan pada bukti dan pertumbuhan, dan manajer mengingat siapa yang membingkai dengan baik."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The evidence log",
        "id": "Catatan bukti"
       },
       "body": {
        "en": "Ten minutes every Friday: what shipped, what it changed, who noticed. By review day you hold a dated list of contributions with effects — the exact material the confirmation discussion runs on. Bring the three strongest as your opening; hold the rest for questions. Nothing about this is boastful; it is the professional habit of making your work legible.",
        "id": "Sepuluh menit tiap Jumat: apa yang terkirim, apa yang berubah, siapa yang menyadarinya. Pada hari peninjauan kamu memegang daftar kontribusi bertanggal beserta dampaknya — persis bahan yang menjadi dasar diskusi pengangkatan. Bawa tiga terkuat sebagai pembuka; simpan sisanya untuk pertanyaan. Tak ada yang sombong dari ini; ini kebiasaan profesional membuat kerjamu terbaca."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "In the room",
        "id": "Di dalam ruangan"
       },
       "body": {
        "en": "Open with the three-part self-review. When improvement feedback comes — it will, and its presence is normal — take notes visibly, ask one clarifying question, and answer with a plan, not a defence: “fair; here is how I'll approach that this quarter.” Then close forward: confirm expectations for the next six months and the one capability you intend to grow. You leave having turned an evaluation into a planning meeting — which is exactly what confirmed employees do.",
        "id": "Buka dengan tinjauan diri tiga bagian. Saat umpan balik perbaikan datang — pasti datang, dan kehadirannya normal — mencatatlah secara terlihat, ajukan satu pertanyaan penjernih, dan jawab dengan rencana, bukan pembelaan: “masuk akal; begini pendekatan saya kuartal ini.” Lalu tutup menghadap depan: pastikan ekspektasi enam bulan berikutnya dan satu kapabilitas yang ingin kamu tumbuhkan. Kamu pulang setelah mengubah evaluasi menjadi rapat perencanaan — persis yang dilakukan karyawan yang diangkat."
       },
       "icon": "book"
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "Running your own probation review",
       "id": "Mengemudikan peninjauan percobaanmu sendiri"
      },
      "items": [
       {
        "h": {
         "en": "Evidence log",
         "id": "Catatan bukti"
        },
        "sub": {
         "en": "Ten minutes every Friday: shipped, changed, noticed",
         "id": "Sepuluh menit tiap Jumat: terkirim, berubah, disadari"
        }
       },
       {
        "h": {
         "en": "Self-review",
         "id": "Tinjauan diri"
        },
        "sub": {
         "en": "Open with: delivered, learned, next focus",
         "id": "Buka dengan: tercapai, dipelajari, fokus berikutnya"
        }
       },
       {
        "h": {
         "en": "Feedback → plan",
         "id": "Umpan balik → rencana"
        },
        "sub": {
         "en": "Notes taken visibly; answer with a plan, not a defence",
         "id": "Catat secara terlihat; jawab dengan rencana, bukan pembelaan"
        }
       },
       {
        "h": {
         "en": "Forward close",
         "id": "Penutup ke depan"
        },
        "sub": {
         "en": "Confirm the next six months and one capability to grow",
         "id": "Pastikan enam bulan berikutnya dan satu kapabilitas untuk tumbuh"
        }
       }
      ],
      "note": {
       "en": "You leave having turned an evaluation into a planning meeting — which is what confirmed employees do.",
       "id": "Kamu pulang setelah mengubah evaluasi menjadi rapat perencanaan — itulah yang dilakukan karyawan yang diangkat."
      },
      "exhibit": {
       "en": "Exhibit 24: Running your own probation review",
       "id": "Peraga 24: Mengemudikan peninjauan percobaanmu sendiri"
      },
      "longdesc": {
       "en": "Diagram of Running your own probation review. It presents, in order: Evidence log — Ten minutes every Friday: shipped, changed, noticed; Self-review — Open with: delivered, learned, next focus; Feedback → plan — Notes taken visibly; answer with a plan, not a defence; Forward close — Confirm the next six months and one capability to grow.",
       "id": "Diagram Mengemudikan peninjauan percobaanmu sendiri. Menyajikan, berurutan: Catatan bukti — Sepuluh menit tiap Jumat: terkirim, berubah, disadari; Tinjauan diri — Buka dengan: tercapai, dipelajari, fokus berikutnya; Umpan balik → rencana — Catat secara terlihat; jawab dengan rencana, bukan pembelaan; Penutup ke depan — Pastikan enam bulan berikutnya dan satu kapabilitas untuk tumbuh."
      }
     },
     "tryit": {
      "qid": "cl04",
      "label": {
       "en": "Practice the outside view",
       "id": "Latih sudut pandang luar"
      },
      "desc": {
       "en": "“How would your last manager describe you?” — quote something real, praise and growth note both.",
       "id": "“Bagaimana atasan terakhirmu menggambarkanmu?” — kutip yang nyata, pujian dan catatan pengembangan sekaligus."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Kekonkretan yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai rubrik."
       }
      }
     ]
    }
   ]
  }
 ]
};
