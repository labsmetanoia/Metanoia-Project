/**
 * The Rope — LMS CONTENT REGISTRY
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
    "id": "Sebelum melatih satu jawaban pun, pahami dulu orang yang duduk di seberang meja. Modul ini membedah cara pewawancara benar-benar menilai, apa yang ingin dimunculkan masing-masing dari empat format wawancara, cara membaca ruangan selagi kamu masih ada di dalamnya, dan satu pergeseran pola pikir yang mengubah segalanya: wawancara bukan interogasi — melainkan evaluasi atas kecocokan, kemampuan, pertimbangan, komunikasi, dan potensi."
   },
   "outcome": {
    "en": "By the end of this module you can name what any given interviewer is actually evaluating, adjust your behaviour to the format you are in, and walk into the room in conversation mode instead of defence mode.",
    "id": "Di akhir modul ini, kamu bisa menyebutkan apa yang sebenarnya dinilai oleh pewawancara mana pun, menyesuaikan perilakumu dengan format yang sedang kamu hadapi, dan memasuki ruangan dalam mode percakapan, bukan mode bertahan."
   },
   "lessons": [
    {
     "n": "1.1",
     "title": {
      "en": "How Interviewers Make Decisions",
      "id": "Cara Pewawancara Mengambil Keputusan"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Interviewers are not neutral measuring instruments. They form early impressions, then spend the rest of the hour confirming or correcting them; they take notes that become the only record of you in the hiring meeting; and they get tired. Knowing this does not make interviews unfair — it makes them navigable.",
      "id": "Pewawancara bukan alat ukur yang netral. Mereka membentuk kesan dalam beberapa menit pertama, lalu menghabiskan sisa waktu untuk mengonfirmasi atau mengoreksinya; mereka menulis catatan yang menjadi satu-satunya rekam jejakmu di rapat rekrutmen; dan mereka bisa lelah. Mengetahui semua ini tidak membuat wawancara jadi tidak adil — justru membuatnya bisa kamu navigasi."
     },
     "objectives": [
      {
       "en": "Explain how early impressions and confirmation shape an interviewer's hour.",
       "id": "Menjelaskan bagaimana kesan awal dan proses konfirmasi membentuk satu jam yang dimiliki pewawancara."
      },
      {
       "en": "Describe what happens to your answers after the interview ends.",
       "id": "Menjelaskan apa yang terjadi pada jawaban-jawabanmu setelah wawancara selesai."
      },
      {
       "en": "Adjust the shape of your answers so the interviewer's notes work for you.",
       "id": "Menyesuaikan bentuk jawabanmu supaya catatan pewawancara bekerja untukmu."
      }
     ],
     "takeaways": [
      {
       "en": "The first minutes set a hypothesis; every answer after either confirms or corrects it — so put evidence early.",
       "id": "Menit-menit pertama membentuk sebuah hipotesis; setiap jawaban setelahnya mengonfirmasi atau mengoreksinya — jadi taruh buktimu di awal."
      },
      {
       "en": "You are hired in a meeting you never attend, based on notes you helped write.",
       "id": "Kamu direkrut dalam rapat yang tidak pernah kamu hadiri, berdasarkan catatan yang ikut kamu tulis."
      },
      {
       "en": "Structure is a gift to a tired interviewer — and tired interviewers reward gifts.",
       "id": "Struktur adalah hadiah bagi pewawancara yang lelah — dan pewawancara yang lelah membalas hadiah."
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
        "id": "Karena hipotesis awal pewawancara mewarnai semua yang datang sesudahnya"
       },
       {
        "en": "Because interviews are always decided in the first sixty seconds",
        "id": "Karena wawancara selalu diputuskan dalam enam puluh detik pertama"
       },
       {
        "en": "Because long answers are automatically disqualified",
        "id": "Karena jawaban yang panjang otomatis gugur"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — early impressions are not final verdicts, but they set the frame your later answers are read through.",
       "id": "Benar — kesan awal bukan vonis akhir, tetapi ia menjadi bingkai yang dipakai untuk membaca jawaban-jawabanmu berikutnya."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The hypothesis hour",
        "id": "Satu jam untuk menguji hipotesis"
       },
       "body": {
        "en": "Within minutes, an interviewer forms a working hypothesis about you — prepared or winging it, structured or scattered, senior or junior for the level. The rest of the hour is spent testing that hypothesis. This is not laziness; it is how humans process people. Your job is to give the strongest true evidence early, so the hypothesis being tested is a favourable one.",
        "id": "Dalam hitungan menit, pewawancara membentuk hipotesis kerja tentang dirimu — siap atau asal datang, terstruktur atau berantakan, sudah pas atau belum pas untuk levelnya. Sisa waktunya dipakai untuk menguji hipotesis itu. Ini bukan kemalasan; begitulah cara manusia memproses orang lain. Tugasmu adalah memberikan bukti terkuat yang benar sejak awal, supaya hipotesis yang diuji adalah hipotesis yang menguntungkanmu."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Your interview is a document",
        "id": "Wawancaramu adalah sebuah dokumen"
       },
       "body": {
        "en": "The decision usually happens days later, in a debrief you never see, argued from notes. What survives into those notes? Specifics: numbers, names of projects, clear sequences of action. What dies: vague competence, mood, charm that never became a quotable sentence. Speak in lines that are easy to write down, and you are effectively drafting your own hiring packet.",
        "id": "Keputusan biasanya diambil beberapa hari kemudian, dalam debrief yang tidak pernah kamu saksikan, dan diperdebatkan berdasarkan catatan. Apa yang bertahan di catatan itu? Hal-hal yang spesifik: angka, nama proyek, urutan tindakan yang jelas. Apa yang hilang: kompetensi yang samar, suasana, pesona yang tidak pernah menjadi kalimat yang bisa dikutip. Bicaralah dalam kalimat yang mudah dicatat, dan sesungguhnya kamu sedang menyusun berkas rekrutmenmu sendiri."
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
        "id": "Pewawancara menemui banyak kandidat, sering berturut-turut. Perhatian di sore hari menipis, dan jawaban-jawaban mulai melebur satu sama lain. Kamu tidak bisa memilih jadwalmu; yang bisa kamu atur adalah daya bedamu. Satu cerita yang dituturkan dengan tepat dan mengandung angka bertahan melawan kelelahan jauh lebih baik daripada dua puluh pernyataan umum yang sekadar cukup. Rancang jawabanmu supaya diingat: klaim lebih sedikit, bukti lebih keras."
       },
       "icon": "target"
      },
      {
       "h": {
        "en": "Fairness, honestly",
        "id": "Soal keadilan, sejujurnya"
       },
       "body": {
        "en": "Good companies fight these biases with scorecards and structured questions; imperfect ones do not. Either way, your strategy is identical: early evidence, quotable specifics, calm structure. You are not gaming the system — you are communicating in the format human decision-making actually uses.",
        "id": "Perusahaan yang baik melawan bias-bias ini dengan scorecard dan pertanyaan terstruktur; perusahaan yang belum rapi tidak. Apa pun keadaannya, strategimu sama persis: bukti sejak awal, hal spesifik yang bisa dikutip, struktur yang tenang. Kamu tidak sedang mengakali sistem — kamu sedang berkomunikasi dalam format yang memang dipakai manusia untuk mengambil keputusan."
       },
       "icon": "chat"
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "How the decision actually happens",
       "id": "Bagaimana keputusan sebenarnya diambil"
      },
      "items": [
       {
        "h": {
         "en": "Hypothesis",
         "id": "Hipotesis"
        },
        "sub": {
         "en": "First minutes: a working read of you forms",
         "id": "Menit-menit pertama: bacaan awal tentangmu terbentuk"
        }
       },
       {
        "h": {
         "en": "Testing",
         "id": "Pengujian"
        },
        "sub": {
         "en": "The hour: every answer confirms or corrects it",
         "id": "Sepanjang sesi: setiap jawaban mengonfirmasi atau mengoreksinya"
        }
       },
       {
        "h": {
         "en": "Notes",
         "id": "Catatan"
        },
        "sub": {
         "en": "What survives: specifics, numbers, quotable lines",
         "id": "Yang bertahan: hal spesifik, angka, kalimat yang bisa dikutip"
        }
       },
       {
        "h": {
         "en": "Debrief",
         "id": "Debrief"
        },
        "sub": {
         "en": "Days later, without you — argued from those notes",
         "id": "Beberapa hari kemudian, tanpa kehadiranmu — diperdebatkan dari catatan itu"
        }
       }
      ],
      "note": {
       "en": "You cannot attend the debrief — but every specific, numbered sentence you speak attends it for you.",
       "id": "Kamu tidak bisa menghadiri debrief — tetapi setiap kalimat spesifik dan berangka yang kamu ucapkan hadir di sana mewakilimu."
      },
      "exhibit": {
       "en": "Exhibit 1: How the decision actually happens",
       "id": "Peraga 1: Bagaimana keputusan sebenarnya diambil"
      },
      "longdesc": {
       "en": "Diagram of How the decision actually happens. It presents, in order: Hypothesis — First minutes: a working read of you forms; Testing — The hour: every answer confirms or corrects it; Notes — What survives: specifics, numbers, quotable lines; Debrief — Days later, without you — argued from those notes.",
       "id": "Diagram tentang bagaimana keputusan sebenarnya diambil. Menyajikan, secara berurutan: Hipotesis — menit-menit pertama: bacaan awal tentangmu terbentuk; Pengujian — sepanjang sesi: setiap jawaban mengonfirmasi atau mengoreksinya; Catatan — yang bertahan: hal spesifik, angka, kalimat yang bisa dikutip; Debrief — beberapa hari kemudian, tanpa kehadiranmu, diperdebatkan dari catatan itu."
      }
     },
     "checks": [
      {
       "q": {
        "en": "Your interview 'record' in the hiring meeting is:",
        "id": "‘Rekaman’ wawancaramu di rapat rekrutmen adalah:"
       },
       "options": [
        {
         "en": "The interviewer's notes — so speak in lines that are easy to write down",
         "id": "Catatan pewawancara — jadi bicaralah dalam kalimat yang mudah dicatat"
        },
        {
         "en": "A full transcript of everything you said",
         "id": "Transkrip lengkap semua yang kamu ucapkan"
        },
        {
         "en": "The interviewer's overall feeling about you",
         "id": "Kesan umum pewawancara tentang dirimu"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — no transcript exists. The notes are the record, and you co-write them with every quotable specific.",
        "id": "Benar — tidak ada transkrip. Catatan itulah rekamannya, dan kamu ikut menulisnya lewat setiap hal spesifik yang layak dikutip."
       }
      }
     ],
     "scenario": {
      "icon": "eye",
      "img": "../../assets/bg/journey-start.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat dalam Sorotan"
      },
      "body": [
       {
        "en": "Raka, a fresh industrial-engineering graduate, is four minutes into his first screening call with a fintech recruiter. He notices she typed nothing while he described his thesis — but wrote three quick lines the moment he said “our bazaar stall broke even in three days because I renegotiated the supplier price.” The same thing happens later when he quotes a number from his internship.",
        "id": "Raka, lulusan baru teknik industri, sudah empat menit menjalani panggilan penyaringan pertamanya dengan seorang perekrut fintech. Ia memperhatikan si perekrut tidak mengetik apa pun saat ia menjelaskan skripsinya — tetapi langsung menulis tiga baris cepat begitu ia berkata, “lapak bazar kami balik modal dalam tiga hari karena saya menegosiasikan ulang harga dari pemasok.” Hal yang sama terjadi lagi ketika ia mengutip sebuah angka dari pengalaman magangnya."
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
        "id": "Bacaan kerja awal pewawancara tentang dirimu, yang kemudian dikonfirmasi atau dikoreksi oleh jawaban-jawaban berikutnya."
       }
      },
      {
       "term": {
        "en": "debrief",
        "id": "debrief"
       },
       "def": {
        "en": "The meeting after the interview loop where interviewers pool notes and argue the hire decision — without you in the room.",
        "id": "Rapat setelah seluruh rangkaian wawancara, tempat para pewawancara menggabungkan catatan dan memperdebatkan keputusan rekrutmen — tanpa kamu di ruangan."
       }
      },
      {
       "term": {
        "en": "scorecard",
        "id": "scorecard"
       },
       "def": {
        "en": "A structured rubric interviewers fill per competency, usually on an anchored 1–5 scale.",
        "id": "Rubrik terstruktur yang diisi pewawancara untuk setiap kompetensi, biasanya dengan skala 1–5 yang punya deskripsi jelas di tiap angkanya."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ]
    },
    {
     "n": "1.2",
     "title": {
      "en": "The Four Interview Formats Decoded",
      "id": "Membedah Empat Format Wawancara"
     },
     "kind": "reading",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "HR screen, technical round, user interview, final round — four rooms, four different tests. Candidates fail not because they are weak, but because they give a technical performance in an HR room or a rapport performance in a technical one. This lesson decodes what each format is designed to surface, and how your preparation should differ.",
      "id": "Penyaringan HR, ronde teknis, wawancara user, ronde final — empat ruangan, empat ujian yang berbeda. Kandidat gagal bukan karena lemah, tetapi karena menampilkan performa teknis di ruang HR, atau performa keakraban di ruang teknis. Pelajaran ini membedah apa yang ingin dimunculkan tiap format, dan bagaimana persiapanmu seharusnya berbeda untuk masing-masing."
     },
     "objectives": [
      {
       "en": "Name the primary question each of the four formats is trying to answer.",
       "id": "Menyebutkan pertanyaan utama yang ingin dijawab oleh masing-masing dari empat format."
      },
      {
       "en": "Identify the failure mode candidates most often bring to each room.",
       "id": "Mengenali kesalahan yang paling sering dibawa kandidat ke tiap ruangan."
      },
      {
       "en": "Adapt one story of yours to be told differently in two different formats.",
       "id": "Mengadaptasi satu ceritamu supaya bisa dituturkan secara berbeda di dua format yang berbeda."
      }
     ],
     "takeaways": [
      {
       "en": "HR screens for risk and motivation; technical rounds test thinking; user rounds test partnership; finals test judgment and trajectory.",
       "id": "HR menyaring risiko dan motivasi; ronde teknis menguji cara berpikir; ronde user menguji kemitraan; ronde final menguji pertimbangan dan lintasan karier."
      },
      {
       "en": "The same story changes altitude between rooms — detail for peers, decisions for executives.",
       "id": "Cerita yang sama berganti ketinggian dari satu ruangan ke ruangan lain — detail untuk calon rekan, keputusan untuk eksekutif."
      },
      {
       "en": "Ask who you are meeting before every round; the name of the room tells you the test.",
       "id": "Tanyakan siapa yang akan kamu temui sebelum setiap ronde; nama ruangannya memberitahumu apa ujiannya."
      }
     ],
     "check": {
      "q": {
       "en": "A peer/user interviewer most wants to know:",
       "id": "Pewawancara dari calon rekan setim (user) paling ingin tahu:"
      },
      "options": [
       {
        "en": "Whether your salary expectation fits the budget",
        "id": "Apakah ekspektasi gajimu sesuai anggaran"
       },
       {
        "en": "Whether they would want to work beside you on a hard week",
        "id": "Apakah mereka mau bekerja di sampingmu pada minggu yang berat"
       },
       {
        "en": "Whether you know the company's founding year",
        "id": "Apakah kamu tahu tahun berdirinya perusahaan"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — user rounds are partnership tests: load-sharing, communication, and how you behave when things break.",
       "id": "Benar — ronde user adalah ujian kemitraan: berbagi beban, komunikasi, dan caramu bersikap saat keadaan memburuk."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The HR screen — a risk filter with a friendly face",
        "id": "Penyaringan HR — penyaring risiko berwajah ramah"
       },
       "body": {
        "en": "HR rarely has the power to hire you, but always has the power to end your candidacy. The screen tests motivation, salary fit, timeline, communication baseline, and red flags. The friendliness misleads candidates into rambling. Treat it as a precision round: clear positioning, clean reasons for moving, a researched salary range, zero bitterness about the past.",
        "id": "HR jarang punya wewenang untuk merekrutmu, tetapi selalu punya wewenang untuk menghentikan pencalonanmu. Penyaringan ini menguji motivasi, kecocokan gaji, lini waktu, kemampuan komunikasi dasar, dan tanda bahaya. Suasananya yang ramah menjebak kandidat untuk melantur. Perlakukan sebagai ronde presisi: positioning yang jelas, alasan pindah yang bersih, rentang gaji yang sudah diriset, dan nol kepahitan tentang masa lalu."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "The technical round — a thinking test wearing a knowledge costume",
        "id": "Ronde teknis — ujian berpikir yang menyamar sebagai ujian pengetahuan"
       },
       "body": {
        "en": "Technical interviewers care less about the right answer than about watching you reach for one: how you clarify, structure, verify, and admit the edge of your knowledge. A wrong answer reached by visible method scores above a right answer produced silently. Think out loud — the thinking is the deliverable.",
        "id": "Pewawancara teknis tidak terlalu peduli pada jawaban yang benar; yang mereka amati adalah caramu berusaha mencapainya: bagaimana kamu mengklarifikasi, menyusun struktur, memverifikasi, dan mengakui batas pengetahuanmu. Jawaban yang keliru tetapi dicapai dengan metode yang terlihat dinilai lebih tinggi daripada jawaban benar yang lahir dalam diam. Berpikirlah dengan suara keras — proses berpikir itulah hasil yang mereka nilai."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "The user round — would we survive a bad week together?",
        "id": "Ronde user — sanggupkah kita melewati minggu yang buruk bersama?"
       },
       "body": {
        "en": "Future teammates are imagining Tuesday, not your CV: deadlines slipping, a defect at 5 pm, a disagreement about approach. They probe collaboration, ego under friction, and whether helping you will be pleasant or exhausting. Bring stories of working with people, not only of personal wins — and interview them back about the team's reality.",
        "id": "Calon rekan setim membayangkan hari Selasa, bukan CV-mu: tenggat yang molor, bug yang muncul pukul 5 sore, perbedaan pendapat soal pendekatan. Mereka menguji kolaborasi, ego saat bergesekan, dan apakah membantumu akan terasa menyenangkan atau melelahkan. Bawalah cerita tentang bekerja bersama orang lain, bukan hanya tentang kemenangan pribadi — dan wawancarai mereka balik tentang realitas timnya."
       },
       "icon": "target"
      },
      {
       "h": {
        "en": "The final round — judgment, trajectory, and the economics of you",
        "id": "Ronde final — pertimbangan, lintasan, dan nilai ekonomis dirimu"
       },
       "body": {
        "en": "Executives ask themselves three things: does this person's judgment hold at altitude, will they grow past this role, and is the total package worth it. Answer in headlines first, detail on request. Connect your work to business outcomes — revenue, cost, risk — and let your questions show you think about the company, not just the job.",
        "id": "Eksekutif bertanya pada diri sendiri tentang tiga hal: apakah pertimbangan orang ini tetap tajam di level yang lebih tinggi, apakah ia akan tumbuh melampaui peran ini, dan apakah keseluruhan paketnya sepadan. Jawablah dengan intinya lebih dulu, detail bila diminta. Kaitkan pekerjaanmu dengan hasil bisnis — pendapatan, biaya, risiko — dan biarkan pertanyaan-pertanyaanmu menunjukkan bahwa kamu memikirkan perusahaannya, bukan sekadar pekerjaannya."
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
         "id": "Penyaring risiko: motivasi, uang, lini waktu, tanda bahaya"
        }
       },
       {
        "h": {
         "en": "Technical",
         "id": "Teknis"
        },
        "sub": {
         "en": "Thinking test: method aloud beats silent correctness",
         "id": "Ujian berpikir: metode yang diucapkan mengalahkan jawaban benar dalam diam"
        }
       },
       {
        "h": {
         "en": "User / peer",
         "id": "User / rekan setim"
        },
        "sub": {
         "en": "Partnership test: would we survive a bad week together?",
         "id": "Ujian kemitraan: sanggupkah kita melewati minggu yang buruk bersama?"
        }
       },
       {
        "h": {
         "en": "Final",
         "id": "Final"
        },
        "sub": {
         "en": "Judgment & trajectory: headlines first, years ahead",
         "id": "Pertimbangan & lintasan: intinya dulu, berpikir bertahun-tahun ke depan"
        }
       }
      ],
      "note": {
       "en": "Same candidate, same stories — different slice per room. Ask who you are meeting; the room names the test.",
       "id": "Kandidat yang sama, cerita yang sama — irisan yang berbeda untuk tiap ruangan. Tanyakan siapa yang akan kamu temui; nama ruangannya menyebutkan ujiannya."
      },
      "exhibit": {
       "en": "Exhibit 2: Four rooms, four tests",
       "id": "Peraga 2: Empat ruangan, empat ujian"
      },
      "longdesc": {
       "en": "Diagram of Four rooms, four tests. It presents, in order: HR screen — Risk filter: motivation, money, timeline, red flags; Technical — Thinking test: method aloud beats silent correctness; User / peer — Partnership test: would we survive a bad week together?; Final — Judgment & trajectory: headlines first, years ahead.",
       "id": "Diagram tentang empat ruangan, empat ujian. Menyajikan, secara berurutan: Penyaringan HR — penyaring risiko: motivasi, uang, lini waktu, tanda bahaya; Teknis — ujian berpikir: metode yang diucapkan mengalahkan jawaban benar dalam diam; User / rekan setim — ujian kemitraan: sanggupkah kita melewati minggu yang buruk bersama?; Final — pertimbangan & lintasan: intinya dulu, berpikir bertahun-tahun ke depan."
      }
     },
     "tryit": {
      "qid": "hr01",
      "label": {
       "en": "Practice the opener every room shares",
       "id": "Latih pembuka yang dipakai di semua ruangan"
      },
      "desc": {
       "en": "“Tell me about yourself” starts all four formats. Drill it once now — the simulator will time you and read your structure.",
       "id": "“Ceritakan tentang diri Anda” membuka keempat format. Latih satu kali sekarang — simulator akan menghitung waktumu dan membaca strukturmu."
      }
     }
    },
    {
     "n": "1.3",
     "title": {
      "en": "Reading the Room in Real Time",
      "id": "Membaca Ruangan Saat Itu Juga"
     },
     "kind": "interactive",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The room talks back while you are speaking — note-taking bursts, follow-up depth, glances at the clock, silence. Most candidates are too busy performing to listen. This lesson trains the three live signals worth reading and the adjustment each one calls for.",
      "id": "Ruangan itu ikut bicara selagi kamu berbicara — catatan yang tiba-tiba ditulis, dalamnya pertanyaan lanjutan, lirikan ke jam, keheningan. Kebanyakan kandidat terlalu sibuk tampil sampai lupa mendengarkan. Pelajaran ini melatih tiga sinyal langsung yang paling layak dibaca, dan penyesuaian yang diminta oleh masing-masing."
     },
     "objectives": [
      {
       "en": "Recognise the three highest-value live signals an interviewer gives off.",
       "id": "Mengenali tiga sinyal langsung paling berharga yang dipancarkan pewawancara."
      },
      {
       "en": "Make one mid-answer adjustment without losing your thread.",
       "id": "Melakukan satu penyesuaian di tengah jawaban tanpa kehilangan benang merah."
      },
      {
       "en": "Resist the reflex to fill silence with weaker material.",
       "id": "Menahan refleks mengisi keheningan dengan materi yang lebih lemah."
      }
     ],
     "takeaways": [
      {
       "en": "Note-taking bursts mark quotable moments — give one more sentence of that, then land.",
       "id": "Catatan yang tiba-tiba ditulis menandai momen yang layak dikutip — tambahkan satu kalimat lagi tentang itu, lalu tutup."
      },
      {
       "en": "Deep follow-ups are a good sign: the interviewer is buying, not doubting.",
       "id": "Pertanyaan lanjutan yang mendalam adalah pertanda baik: pewawancara sedang membeli, bukan meragukan."
      },
      {
       "en": "Silence after your answer is thinking time — theirs. Do not buy it back with rambling.",
       "id": "Keheningan setelah jawabanmu adalah waktu berpikir — milik mereka. Jangan membelinya kembali dengan melantur."
      }
     ],
     "check": {
      "q": {
       "en": "The interviewer glances at the time in the middle of your story. Best response:",
       "id": "Pewawancara melirik jam di tengah ceritamu. Respons terbaik:"
      },
      "options": [
       {
        "en": "Speed up your speaking pace and keep all the detail",
        "id": "Mempercepat tempo bicara dan mempertahankan semua detail"
       },
       {
        "en": "Stop and ask if they are bored",
        "id": "Berhenti dan bertanya apakah mereka bosan"
       },
       {
        "en": "Compress: jump to your action and the result in two sentences",
        "id": "Memadatkan: langsung lompat ke tindakan dan hasilnya dalam dua kalimat"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — the glance says the ration of attention is closing. Land the plane: action, result, stop.",
       "id": "Benar — lirikan itu berarti jatah perhatian hampir habis. Daratkan pesawatnya: tindakan, hasil, berhenti."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Why performers go deaf",
        "id": "Mengapa orang yang sedang tampil menjadi tuli"
       },
       "body": {
        "en": "Under pressure, attention narrows to your own script, and the interviewer becomes scenery. But interviews are conversations, and conversations reward listeners. Keeping ten percent of your attention on the room costs a little polish and buys real-time steering — worth the trade every time.",
        "id": "Di bawah tekanan, perhatian menyempit ke naskahmu sendiri, dan pewawancara berubah menjadi latar belakang. Padahal wawancara adalah percakapan, dan percakapan memberi imbalan kepada yang mendengarkan. Menyisihkan sepuluh persen perhatian untuk ruangan mengorbankan sedikit kemulusan, tetapi memberimu kemudi secara langsung — pertukaran yang selalu sepadan."
       }
      },
      {
       "h": {
        "en": "The three signals",
        "id": "Tiga sinyalnya"
       },
       "body": {
        "en": "One: writing bursts — they just heard something useful; give that thread one more concrete sentence. Two: follow-up depth — probing deeper means interest, so stay and go deeper honestly. Three: time behaviour — clock glances and posture shifts mean compress now, land on the result. Everything else (folded arms, neutral faces) is noise; interviewers are often just tired.",
        "id": "Satu: catatan yang tiba-tiba ditulis — mereka baru saja mendengar sesuatu yang berguna; beri benang itu satu kalimat konkret lagi. Dua: dalamnya pertanyaan lanjutan — menggali lebih dalam berarti tertarik, jadi bertahanlah di situ dan masuk lebih dalam dengan jujur. Tiga: perilaku terhadap waktu — lirikan ke jam dan perubahan posisi duduk berarti padatkan sekarang, dan daratkan pada hasilnya. Selebihnya (tangan terlipat, wajah datar) hanyalah derau; pewawancara sering kali sekadar lelah."
       }
      },
      {
       "h": {
        "en": "Silence is not an emergency",
        "id": "Keheningan bukan keadaan darurat"
       },
       "body": {
        "en": "After you land an answer, interviewers often pause to write or think. Candidates panic and reopen the answer, usually with weaker material — diluting what was strong. Finish, breathe, hold eye contact, wait. If the silence stretches, a simple “happy to go deeper on any part of that” beats a second, worse version of the same story.",
        "id": "Setelah kamu menutup sebuah jawaban, pewawancara sering diam untuk menulis atau berpikir. Kandidat panik lalu membuka lagi jawabannya, biasanya dengan materi yang lebih lemah — dan mengencerkan apa yang tadinya kuat. Selesaikan, tarik napas, jaga kontak mata, tunggu. Kalau keheningannya memanjang, kalimat sederhana seperti “saya senang kalau diminta memperdalam bagian mana pun” jauh lebih baik daripada versi kedua yang lebih buruk dari cerita yang sama."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 · The clock glance",
        "id": "Latihan 1 · Lirikan ke jam"
       },
       "body": {
        "en": "You are ninety seconds into a story about a campus project. The interviewer looks at their watch, then back at you. Say out loud the two sentences you would use to land the answer immediately.",
        "id": "Kamu sudah sembilan puluh detik bercerita tentang sebuah proyek kampus. Pewawancara melihat jam tangannya, lalu kembali menatapmu. Ucapkan dengan suara keras dua kalimat yang akan kamu pakai untuk segera menutup jawabanmu."
       },
       "debrief": {
        "en": "Model landing: “The short version of the rest: I rebuilt the schedule around the two critical tasks, and we delivered nine days early.” Action plus result, nothing else. The setup you were still narrating is gone — and nobody misses it.",
        "id": "Contoh penutup: “Singkatnya, sisanya begini: saya susun ulang jadwal di sekitar dua tugas paling kritis, dan kami selesai sembilan hari lebih awal.” Tindakan plus hasil, tidak ada yang lain. Latar yang tadi masih kamu ceritakan hilang begitu saja — dan tidak ada yang merasa kehilangan."
       }
      },
      {
       "h": {
        "en": "Drill 2 · The deep follow-up",
        "id": "Latihan 2 · Pertanyaan lanjutan yang mendalam"
       },
       "body": {
        "en": "You mention that you “negotiated with the vendor”. The interviewer leans in: “Walk me through that negotiation — what exactly did you offer?” What do you do with your prepared next point?",
        "id": "Kamu menyebut bahwa kamu “bernegosiasi dengan vendor”. Pewawancara mencondongkan badan: “Coba jelaskan negosiasinya — apa persisnya yang Anda tawarkan?” Apa yang kamu lakukan dengan poin berikutnya yang sudah kamu siapkan?"
       },
       "debrief": {
        "en": "Drop it. Follow the interviewer's interest — this is buying behaviour. Give the real mechanics: the constraint, your offer, their counter, the close. Depth on demand converts interest into conviction; returning to your script converts it into disappointment.",
        "id": "Tinggalkan. Ikuti minat pewawancara — ini perilaku orang yang sedang membeli. Berikan mekanismenya yang sesungguhnya: kendalanya, tawaranmu, tawaran balik mereka, cara menutupnya. Kedalaman yang diberikan saat diminta mengubah minat menjadi keyakinan; kembali ke naskah mengubahnya menjadi kekecewaan."
       }
      },
      {
       "h": {
        "en": "Drill 3 · The silence",
        "id": "Latihan 3 · Keheningan"
       },
       "body": {
        "en": "You finish a strong answer about a failure and its lesson. The interviewer writes for six full seconds. Your chest tightens. What do you do — and what do you absolutely not do?",
        "id": "Kamu baru saja menutup jawaban yang kuat tentang sebuah kegagalan dan pelajarannya. Pewawancara menulis selama enam detik penuh. Dadamu terasa sesak. Apa yang kamu lakukan — dan apa yang sama sekali tidak boleh kamu lakukan?"
       },
       "debrief": {
        "en": "Do: nothing. Sit in it; they are capturing your answer, which is exactly what you want. Do not: reopen with “...so yeah, basically what happened was...” — the classic dilution. Silence you can hold reads as confidence you did not have to claim.",
        "id": "Yang kamu lakukan: tidak ada. Diam saja; mereka sedang merekam jawabanmu, dan itu persis yang kamu inginkan. Yang tidak boleh: membuka lagi dengan “...jadi ya, intinya tadi itu...” — pengenceran yang klasik. Keheningan yang sanggup kamu tahan terbaca sebagai percaya diri yang tidak perlu kamu klaim."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "The clock glance — two endings",
        "id": "Lirikan ke jam — dua cara mengakhiri"
       },
       "q": {
        "en": "(mid-story, the interviewer checks the time)",
        "id": "(di tengah cerita, pewawancara melihat jam)"
       },
       "weak": {
        "en": "…so after that meeting there was another meeting, and I also want to mention the context of the budget, which started back in January when…",
        "id": "…jadi setelah rapat itu ada rapat lagi, dan saya juga ingin menyebutkan konteks anggarannya, yang sebenarnya bermula sejak Januari ketika…"
       },
       "strong": {
        "en": "The short version of the rest: I froze the scope, renegotiated the deadline with the client, and we shipped nine days early.",
        "id": "Singkatnya, sisanya begini: saya bekukan cakupannya, negosiasikan ulang tenggatnya dengan klien, dan kami rilis sembilan hari lebih awal."
       },
       "why": {
        "en": "The glance says attention is closing. The strong version lands action plus result in one breath — and the interviewer writes it down.",
        "id": "Lirikan itu berarti perhatian hampir habis. Versi yang kuat mendaratkan tindakan plus hasil dalam satu tarikan napas — dan pewawancara mencatatnya."
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
        "id": "Pertanyaan penggali setelah jawabanmu — tempat klaim yang dibesar-besarkan runtuh, dan kedalaman yang jujur mendapat nilai."
       }
      }
     ]
    },
    {
     "n": "1.4",
     "title": {
      "en": "The Interview Performance Mindset",
      "id": "Pola Pikir Tampil di Wawancara"
     },
     "kind": "reading",
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The room is only as dangerous as your framing of it. This lesson replaces the interrogation frame with the evaluation frame, converts anxiety into usable arousal, and legitimises thinking time — the three mindset moves that make every technique in this course usable under pressure.",
      "id": "Ruangan itu hanya seberbahaya cara kamu membingkainya. Pelajaran ini mengganti bingkai interogasi dengan bingkai evaluasi, mengubah kecemasan menjadi energi yang bisa dipakai, dan mengesahkan waktu berpikir — tiga pergeseran pola pikir yang membuat semua teknik di kursus ini bisa dipakai di bawah tekanan."
     },
     "objectives": [
      {
       "en": "Reframe the interview as a two-way evaluation you are also conducting.",
       "id": "Membingkai ulang wawancara sebagai evaluasi dua arah yang juga sedang kamu lakukan."
      },
      {
       "en": "Use arousal-reappraisal to convert nerves into performance energy.",
       "id": "Memaknai ulang gejolak tubuh untuk mengubah gugup menjadi energi tampil."
      },
      {
       "en": "Buy thinking time out loud without losing credibility.",
       "id": "Meminta waktu berpikir secara terbuka tanpa kehilangan kredibilitas."
      }
     ],
     "takeaways": [
      {
       "en": "An interview is an evaluation of fit, capability, judgment, communication and potential — and you are evaluating them back.",
       "id": "Wawancara adalah evaluasi atas kecocokan, kemampuan, pertimbangan, komunikasi, dan potensi — dan kamu juga sedang mengevaluasi mereka."
      },
      {
       "en": "A racing heart is oxygen for performance if you name it excitement instead of fear.",
       "id": "Jantung yang berdebar adalah oksigen untuk tampil, kalau kamu menamainya semangat, bukan takut."
      },
      {
       "en": "“Good question — let me think for a moment” is a senior move, not a confession.",
       "id": "“Pertanyaan yang bagus — izinkan saya berpikir sejenak” adalah langkah orang senior, bukan pengakuan kelemahan."
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
        "id": "Wawancara sebagai evaluasi dua arah, gugup sebagai energi, waktu berpikir sebagai hal yang sah"
       },
       {
        "en": "Interview as a battle you must dominate from the first minute",
        "id": "Wawancara sebagai pertarungan yang harus kamu kuasai sejak menit pertama"
       },
       {
        "en": "Interview as a formality once your CV is strong enough",
        "id": "Wawancara sebagai formalitas kalau CV-mu sudah cukup kuat"
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
        "id": "Interogasi punya tersangka; evaluasi punya dua pihak yang sama-sama memeriksa kecocokan. Kamu sedang memutuskan apakah tim ini layak mendapatkan tahun-tahunmu berikutnya, sebagaimana mereka sedang memutuskan tentang dirimu. Kesetaraan itu bukan kesombongan — itu ketepatan, dan ia mengubah sikap tubuhmu, pertanyaan-pertanyaanmu, dan cara sebuah penolakan terasa. Sebuah “tidak” menjadi informasi tentang kecocokan, bukan vonis atas nilai dirimu."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Your body is not betraying you",
        "id": "Tubuhmu tidak sedang mengkhianatimu"
       },
       "body": {
        "en": "A raised pulse, quick breath, sharpened senses — the body's performance state and its fear state are physiologically near-identical. What differs is the label. Telling yourself “I am excited” before high-pressure tasks measurably improves performance versus forcing calm. Use the energy: it is there to make you faster, not to expose you.",
        "id": "Denyut nadi naik, napas memburu, indra menajam — kondisi tubuh saat siap tampil dan saat takut nyaris identik secara fisiologis. Yang berbeda hanya labelnya. Mengatakan pada diri sendiri “saya bersemangat” sebelum tugas bertekanan tinggi terbukti meningkatkan performa dibandingkan memaksakan diri untuk tenang. Pakailah energinya: ia ada untuk membuatmu lebih cepat, bukan untuk membongkarmu."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "Thinking time is allowed",
        "id": "Waktu berpikir itu boleh"
       },
       "body": {
        "en": "Rushing into an answer you have not chosen is how rambling starts. Senior people pause; they say “let me think about that for a second”, take a breath, choose a structure, then speak. Interviewers read the pause as deliberation. Practise the sentence until it feels like yours — it is the cheapest upgrade in this entire course.",
        "id": "Terburu-buru masuk ke jawaban yang belum kamu pilih adalah awal dari melantur. Orang-orang senior berhenti sejenak; mereka berkata “izinkan saya memikirkannya sebentar”, menarik napas, memilih struktur, baru bicara. Pewawancara membaca jeda itu sebagai pertimbangan. Latih kalimat itu sampai terasa seperti milikmu sendiri — inilah peningkatan termurah di seluruh kursus ini."
       },
       "icon": "target"
      }
     ],
     "listen": [
      {
       "label": {
        "en": "Buying thinking time, said like a senior",
        "id": "Meminta waktu berpikir, dengan gaya orang senior"
       },
       "text": {
        "en": "That's a good question — let me think about it for a moment. … Okay. I'd look at it from two angles.",
        "id": "Itu pertanyaan yang bagus — izinkan saya memikirkannya sejenak. … Baik. Saya akan melihatnya dari dua sisi."
       }
      },
      {
       "label": {
        "en": "The arousal reframe, before you walk in",
        "id": "Memaknai ulang gejolak, sebelum kamu masuk"
       },
       "text": {
        "en": "My heart is racing because I am ready for this. This is excitement. It is here to make me faster.",
        "id": "Jantungku berdebar karena aku siap menghadapi ini. Ini semangat. Ia ada untuk membuatku lebih cepat."
       }
      }
     ],
     "tryit": {
      "qid": "hr14",
      "label": {
       "en": "Test the mindset under a real question",
       "id": "Uji pola pikirnya dengan pertanyaan sungguhan"
      },
      "desc": {
       "en": "Answer “what motivates you” using the pause, the reframe, and conversation mode.",
       "id": "Jawab “apa yang memotivasi Anda” dengan memakai jeda, pemaknaan ulang, dan mode percakapan."
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
         "id": "Beri label gejolak itu sebagai semangat — fisiologinya identik; yang berbeda hanya cerita yang kamu tuturkan pada dirimu sendiri."
        }
       },
       {
        "h": {
         "en": "Answering instantly to look sharp",
         "id": "Menjawab seketika supaya terlihat tajam"
        },
        "fix": {
         "en": "Buy thinking time out loud: “good question — give me a moment.” Deliberation reads as seniority.",
         "id": "Minta waktu berpikir secara terbuka: “pertanyaan bagus — sebentar, saya pikirkan dulu.” Pertimbangan terbaca sebagai kematangan."
        }
       },
       {
        "h": {
         "en": "Walking in as the interrogated",
         "id": "Masuk sebagai pihak yang diinterogasi"
        },
        "fix": {
         "en": "Walk in as an evaluator too: you are deciding whether this team deserves your next years.",
         "id": "Masuklah juga sebagai penilai: kamu sedang memutuskan apakah tim ini layak mendapatkan tahun-tahunmu berikutnya."
        }
       }
      ]
     }
    }
   ],
   "hero": "../../assets/bg/rope.jpg",
   "heroPos": "center 30%"
  },
  {
   "num": 2,
   "title": {
    "en": "Build Your Story Library",
    "id": "Bangun Perpustakaan Ceritamu"
   },
   "overview": {
    "en": "Strong candidates do not improvise; they retrieve. This module builds your retrieval system: the STAR-L narrative spine, the ten competency categories interviews actually probe, a mining method that finds stories in ordinary experience, and calibration — the craft of telling one story at different altitudes for different rooms.",
    "id": "Kandidat yang kuat tidak berimprovisasi; mereka mengambil dari simpanan. Modul ini membangun sistem simpananmu: tulang punggung narasi STAR-L, sepuluh kategori kompetensi yang benar-benar digali dalam wawancara, metode menambang cerita dari pengalaman sehari-hari, dan kalibrasi — keahlian menuturkan satu cerita pada ketinggian yang berbeda untuk ruangan yang berbeda."
   },
   "outcome": {
    "en": "By the end of this module you own a tagged library of real stories with evidence and learnings, retrievable under pressure and adaptable to any interview format and seniority level.",
    "id": "Di akhir modul ini, kamu memiliki perpustakaan cerita nyata yang sudah diberi label, lengkap dengan bukti dan pembelajarannya, yang bisa dipanggil di bawah tekanan dan disesuaikan dengan format serta level wawancara apa pun."
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
      "id": "Konteks → Tantangan → Tindakan → Hasil → Pembelajaran. STAR-L adalah STAR ditambah bagian yang paling diingat pewawancara: apa yang berubah dalam dirimu. Pelajaran ini mengajarkan tulang punggungnya, proporsinya, dan peringatan anti-rumus — kerangka ini adalah perancah untuk kebenaran, bukan naskah untuk dihafal."
     },
     "objectives": [
      {
       "en": "Structure any experience as Context → Challenge → Action → Result → Learning.",
       "id": "Menyusun pengalaman apa pun menjadi Konteks → Tantangan → Tindakan → Hasil → Pembelajaran."
      },
      {
       "en": "Apply the proportions: one sentence of setup, the bulk on action, a measured result.",
       "id": "Menerapkan proporsinya: satu kalimat latar, porsi terbesar untuk tindakan, hasil yang terukur."
      },
      {
       "en": "Avoid the robotic-STAR failure mode that makes rehearsed candidates forgettable.",
       "id": "Menghindari jebakan STAR yang kaku, yang membuat kandidat hafalan mudah dilupakan."
      }
     ],
     "takeaways": [
      {
       "en": "Setup is one sentence; the action is the story; the result is a number; the learning is the gift.",
       "id": "Latar cukup satu kalimat; tindakan adalah ceritanya; hasil adalah sebuah angka; pembelajaran adalah hadiahnya."
      },
      {
       "en": "STAR-L organises truth — it never replaces it. If the structure shows, soften it.",
       "id": "STAR-L merapikan kebenaran — tidak pernah menggantikannya. Kalau strukturnya sampai terlihat, lunakkan."
      },
      {
       "en": "The learning line is what separates a good answer from a memorable one.",
       "id": "Kalimat pembelajaran adalah pembeda antara jawaban yang baik dan jawaban yang diingat."
      }
     ],
     "check": {
      "q": {
       "en": "Where should most of your speaking time go in a STAR-L answer?",
       "id": "Ke mana sebagian besar waktu bicaramu seharusnya pergi dalam jawaban STAR-L?"
      },
      "options": [
       {
        "en": "The result, repeated in several different ways",
        "id": "Ke hasilnya, diulang dengan beberapa cara yang berbeda"
       },
       {
        "en": "The actions you personally took",
        "id": "Ke tindakan yang kamu ambil sendiri"
       },
       {
        "en": "The context, so the interviewer fully understands the situation",
        "id": "Ke konteksnya, supaya pewawancara benar-benar paham situasinya"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — context in one line, then spend the answer on what you did. Actions carry the evidence.",
       "id": "Benar — konteks cukup satu kalimat, lalu habiskan jawabanmu untuk apa yang kamu lakukan. Tindakanlah yang membawa bukti."
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
        "id": "Konteks: di mana dan kapan, satu kalimat. Tantangan: apa yang membuatnya sulit, satu kalimat. Tindakan: apa yang benar-benar kamu — “saya”, bukan “kami” — lakukan, secara berurutan; ini porsi terbesar jawaban. Hasil: apa yang berubah, dengan angka di mana pun angka itu jujur. Pembelajaran: prinsip satu baris yang kamu bawa ke depan. Enam puluh sampai seratus lima puluh kata sudah cukup; dua menit adalah batas atasnya."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Why the L matters",
        "id": "Mengapa huruf L itu penting"
       },
       "body": {
        "en": "Result proves competence; learning proves growth. Interviewers hiring for potential — which is every interviewer hiring below executive level — weigh the learning line heavily. It shows a mind that converts experience into principle. Without it, even a great story is a closed file; with it, the story predicts your future behaviour.",
        "id": "Hasil membuktikan kompetensi; pembelajaran membuktikan pertumbuhan. Pewawancara yang merekrut berdasarkan potensi — dan itu berarti semua pewawancara di bawah level eksekutif — memberi bobot besar pada kalimat pembelajaran. Kalimat itu menunjukkan pikiran yang mampu mengubah pengalaman menjadi prinsip. Tanpanya, cerita yang hebat pun hanya berkas yang sudah ditutup; dengannya, cerita itu meramalkan perilakumu di masa depan."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "The anti-formula warning",
        "id": "Peringatan anti-rumus"
       },
       "body": {
        "en": "Interviewers hear STAR performed robotically many times a week: “The Situation was… The Task was…”. Never announce the labels. Let the structure live underneath natural speech — a story told by a person, organised by a framework the listener never sees. If you sound like a template, the content stops being believed.",
        "id": "Pewawancara mendengar STAR dibawakan seperti robot berkali-kali dalam seminggu: “Situasinya adalah… Tugasnya adalah…”. Jangan pernah mengumumkan labelnya. Biarkan strukturnya hidup di bawah tutur yang alami — sebuah cerita yang dituturkan seorang manusia, dirapikan oleh kerangka yang tidak pernah terlihat oleh pendengarnya. Kalau kamu terdengar seperti templat, isinya berhenti dipercaya."
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
         "id": "1 baris — prinsip yang kamu simpan"
        }
       }
      ],
      "note": {
       "en": "60–150 words covers it. If the labels show, soften them — the framework organises truth, it never performs it.",
       "id": "60–150 kata sudah cukup. Kalau labelnya sampai terlihat, lunakkan — kerangka ini merapikan kebenaran, bukan mempertontonkannya."
      },
      "exhibit": {
       "en": "Exhibit 3: STAR-L — the narrative spine and its proportions",
       "id": "Peraga 3: STAR-L — tulang punggung narasi dan proporsinya"
      },
      "longdesc": {
       "en": "Diagram of STAR-L — the narrative spine and its proportions. It presents, in order: Context — 1 sentence — where and when; Challenge — 1 sentence — what made it hard; Action — The bulk — what YOU did, in sequence; Result — 1–2 sentences — with a number; Learning — 1 line — the principle you keep.",
       "id": "Diagram STAR-L — tulang punggung narasi dan proporsinya. Menyajikan, secara berurutan: Konteks — 1 kalimat, di mana dan kapan; Tantangan — 1 kalimat, apa yang membuatnya sulit; Tindakan — porsi terbesar, apa yang KAMU lakukan, berurutan; Hasil — 1–2 kalimat, dengan angka; Pembelajaran — 1 baris, prinsip yang kamu simpan."
      }
     },
     "compare": [
      {
       "tag": {
        "en": "“What achievement are you most proud of?”",
        "id": "“Pencapaian apa yang paling Anda banggakan?”"
       },
       "weak": {
        "en": "I'm most proud of my final-year project. It was really challenging and we worked very hard as a team, and in the end it went well and the lecturers liked it.",
        "id": "Saya paling bangga dengan proyek tugas akhir saya. Proyeknya sangat menantang dan kami bekerja sangat keras sebagai tim, dan pada akhirnya berjalan baik dan para dosen menyukainya."
       },
       "strong": {
        "en": "In my final year, our team's research app had zero users two months before the deadline. I took over user recruitment, partnered with three student communities, and ran weekly feedback cycles. We ended with 400 active users, and the project scored highest in our cohort. I learned that distribution is a feature — I now plan it from day one.",
        "id": "Di tahun terakhir kuliah, aplikasi riset tim kami masih nol pengguna dua bulan sebelum tenggat. Saya mengambil alih perekrutan pengguna, menggandeng tiga komunitas mahasiswa, dan menjalankan siklus umpan balik mingguan. Kami menutup proyek dengan 400 pengguna aktif, dan mendapat nilai tertinggi di angkatan. Saya belajar bahwa distribusi adalah bagian dari produk — sekarang saya merencanakannya sejak hari pertama."
       },
       "why": {
        "en": "Same project, different machinery: one sentence of setup, first-person actions, a number, a learning. Nothing is invented — it is organised.",
        "id": "Proyek yang sama, mesin yang berbeda: satu kalimat latar, tindakan dengan subjek “saya”, satu angka, satu pembelajaran. Tidak ada yang dikarang — semuanya hanya dirapikan."
       }
      }
     ],
     "tryit": {
      "qid": "bh21",
      "label": {
       "en": "Tell your proudest story, timed",
       "id": "Ceritakan pencapaian kebanggaanmu, dengan pewaktu"
      },
      "desc": {
       "en": "Run this exact question in the simulator — it will read your STAR beats and your landing.",
       "id": "Jalankan pertanyaan yang persis sama ini di simulator — ia akan membaca ketukan STAR-mu dan cara kamu menutup."
      }
     },
     "scenario": {
      "icon": "book",
      "img": "../../assets/bg/fg-stage-ascent.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat dalam Sorotan"
      },
      "body": [
       {
        "en": "Sari has run operations for a family restaurant for two years and swears she “has no interview stories — it's just daily work.” Then a mentor asks: “Tell me about the worst Saturday.” Out comes a fully-formed story — a double-booked event, a supplier failure at noon, a decision to move the whole party forward an hour, and a customer who still writes to her. It was never a lack of stories. It was a lack of mining.",
        "id": "Sari sudah dua tahun mengelola operasional restoran keluarga dan bersikeras ia “tidak punya cerita untuk wawancara — semuanya cuma kerja harian.” Lalu seorang mentor bertanya: “Ceritakan hari Sabtu terburukmu.” Keluarlah sebuah cerita yang utuh — acara yang jadwalnya bentrok, pemasok yang gagal kirim tepat tengah hari, keputusan memajukan seluruh acara satu jam, dan seorang pelanggan yang sampai sekarang masih mengiriminya pesan. Masalahnya bukan pernah kekurangan cerita. Yang kurang adalah menambangnya."
       },
       {
        "en": "This module gives you the mining protocol Sari used — and the STAR-L spine that turns what you find into answers interviewers write down.",
        "id": "Modul ini memberimu protokol penambangan yang dipakai Sari — dan tulang punggung STAR-L yang mengubah apa yang kamu temukan menjadi jawaban yang dicatat pewawancara."
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
        "id": "Konteks → Tantangan → Tindakan → Hasil → Pembelajaran: tulang punggung narasi untuk jawaban pertanyaan perilaku."
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
         "id": "Biarkan STAR-L hidup di bawah tutur yang alami — pendengar seharusnya merasakan strukturnya, tidak pernah melihat labelnya."
        }
       },
       {
        "h": {
         "en": "Spending a minute on context",
         "id": "Menghabiskan satu menit untuk konteks"
        },
        "fix": {
         "en": "One sentence of setup. If your first action verb hasn't arrived by second twenty, restart.",
         "id": "Latar cukup satu kalimat. Kalau kata kerja tindakan pertamamu belum muncul di detik kedua puluh, mulai ulang."
        }
       },
       {
        "h": {
         "en": "Ending on the result and trailing off",
         "id": "Berhenti di hasil, lalu suaranya menghilang"
        },
        "fix": {
         "en": "Land the learning line — it is the sentence interviewers quote when they argue for you.",
         "id": "Daratkan kalimat pembelajarannya — itulah kalimat yang dikutip pewawancara saat mereka membelamu di debrief."
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
      "id": "Ribuan pertanyaan perilaku bisa diringkas menjadi kira-kira sepuluh kompetensi. Kuasai sepuluh itu, dan tidak ada lagi pertanyaan yang benar-benar baru — semuanya hanya salah satu ceritamu yang sudah berlabel, mengenakan kata-kata yang berbeda. Pelajaran ini menamai setiap kategori, bentuk pertanyaan khasnya, dan apa yang wajib ada dalam jawaban yang kuat."
     },
     "objectives": [
      {
       "en": "Name the ten competency categories behind most behavioral questions.",
       "id": "Menyebutkan sepuluh kategori kompetensi di balik sebagian besar pertanyaan perilaku."
      },
      {
       "en": "Recognise which competency a question is probing regardless of its wording.",
       "id": "Mengenali kompetensi mana yang sedang digali sebuah pertanyaan, apa pun susunan katanya."
      },
      {
       "en": "Tag your own stories by the competencies they evidence.",
       "id": "Memberi label pada cerita-ceritamu sendiri berdasarkan kompetensi yang dibuktikannya."
      }
     ],
     "takeaways": [
      {
       "en": "Every behavioral question is a competency probe wearing costume; identify the competency and retrieval becomes instant.",
       "id": "Setiap pertanyaan perilaku adalah uji kompetensi yang memakai kostum; kenali kompetensinya, dan memanggil cerita yang tepat menjadi seketika."
      },
      {
       "en": "One strong story usually evidences two or three competencies — tag it for all of them.",
       "id": "Satu cerita yang kuat biasanya membuktikan dua atau tiga kompetensi — beri label untuk semuanya."
      },
      {
       "en": "Coverage beats volume: eight stories covering ten categories outperform thirty untagged anecdotes.",
       "id": "Cakupan mengalahkan jumlah: delapan cerita yang menutup sepuluh kategori mengungguli tiga puluh anekdot tanpa label."
      }
     ],
     "check": {
      "q": {
       "en": "“Tell me about a time you had to deliver bad news” is primarily probing:",
       "id": "“Ceritakan saat Anda harus menyampaikan kabar buruk” terutama menggali:"
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
        "id": "Komunikasi dan keberanian dalam situasi yang tidak nyaman"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — the costume is “bad news”; the competency is candid communication when it costs something.",
       "id": "Benar — kostumnya “kabar buruk”; kompetensinya adalah komunikasi yang jujur ketika kejujuran itu ada harganya."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The ten",
        "id": "Sepuluh kategorinya"
       },
       "body": {
        "en": "1 Leadership & influence. 2 Ownership & initiative. 3 Conflict & difficult people. 4 Resilience & failure. 5 Communication & persuasion. 6 Prioritisation under pressure. 7 Learning agility. 8 Judgment & decision-making. 9 Collaboration across differences. 10 Integrity & courage. Nearly every “tell me about a time…” lives in one of these rooms.",
        "id": "1 Kepemimpinan & pengaruh. 2 Rasa memiliki & inisiatif. 3 Konflik & orang yang sulit. 4 Ketangguhan & kegagalan. 5 Komunikasi & persuasi. 6 Menentukan prioritas di bawah tekanan. 7 Kelincahan belajar. 8 Pertimbangan & pengambilan keputusan. 9 Kolaborasi lintas perbedaan. 10 Integritas & keberanian. Hampir setiap “ceritakan saat Anda…” tinggal di salah satu ruangan ini."
       }
      },
      {
       "h": {
        "en": "Hearing through the costume",
        "id": "Mendengar menembus kostumnya"
       },
       "body": {
        "en": "“Describe a time you exceeded expectations” is ownership. “Have you worked with someone difficult?” is conflict. “What would you do with two deadlines?” is prioritisation, even in hypothetical clothes. Train the reflex: on hearing any question, silently name the category first. The half-second of classification buys you the right story instead of the nearest one.",
        "id": "“Ceritakan saat Anda melampaui ekspektasi” adalah rasa memiliki. “Pernah bekerja dengan orang yang sulit?” adalah konflik. “Apa yang Anda lakukan kalau ada dua tenggat bersamaan?” adalah prioritas, meskipun berpakaian hipotetis. Latih refleksnya: begitu mendengar pertanyaan apa pun, sebut dulu kategorinya dalam hati. Setengah detik untuk mengklasifikasi itu memberimu cerita yang tepat, bukan cerita yang kebetulan paling dekat."
       }
      },
      {
       "h": {
        "en": "Tagging your library",
        "id": "Memberi label pada perpustakaanmu"
       },
       "body": {
        "en": "Take each story you own and ask: which of the ten does this actually evidence? A product launch story might carry ownership, prioritisation and communication at once. Write the tags down. In the interview, retrieval works backward: category → tagged story → STAR-L. That pipeline, practised, is what composure under fire is made of.",
        "id": "Ambil setiap cerita yang kamu miliki dan tanyakan: yang mana dari sepuluh kategori itu yang benar-benar dibuktikannya? Cerita peluncuran produk bisa memuat rasa memiliki, prioritas, dan komunikasi sekaligus. Tuliskan labelnya. Dalam wawancara, proses memanggilnya berjalan mundur: kategori → cerita berlabel → STAR-L. Alur itulah, kalau sudah dilatih, yang menjadi bahan baku ketenangan di bawah tekanan."
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
         "id": "Rasa memiliki & inisiatif"
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
         "id": "Prioritas"
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
       "id": "Begitu mendengar pertanyaan perilaku apa pun, sebut dulu ruangannya dalam hati — lalu panggil cerita berlabel yang tinggal di sana."
      },
      "exhibit": {
       "en": "Exhibit 4: The ten competency rooms",
       "id": "Peraga 4: Sepuluh ruang kompetensi"
      },
      "longdesc": {
       "en": "Diagram of The ten competency rooms. It presents, in order: Leadership & influence; Ownership & initiative; Conflict; Resilience & failure; Communication; Prioritisation; Learning agility; Judgment; Collaboration; Integrity & courage.",
       "id": "Diagram sepuluh ruang kompetensi. Menyajikan, secara berurutan: Kepemimpinan & pengaruh; Rasa memiliki & inisiatif; Konflik; Ketangguhan & kegagalan; Komunikasi; Prioritas; Kelincahan belajar; Pertimbangan; Kolaborasi; Integritas & keberanian."
      }
     },
     "checks": [
      {
       "q": {
        "en": "“Describe a time you had too much to do and too little time” lives in which room?",
        "id": "“Ceritakan saat pekerjaan Anda terlalu banyak dan waktunya terlalu sedikit” tinggal di ruang mana?"
       },
       "options": [
        {
         "en": "Prioritisation under pressure",
         "id": "Menentukan prioritas di bawah tekanan"
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
        "id": "Benar — pertanyaan tentang beban berlebih menggali aturan pengurutanmu dan apa yang sengaja kamu lepaskan, bukan daya tahanmu."
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
        "id": "Konteks → Tantangan → Tindakan → Hasil → Pembelajaran: tulang punggung narasi untuk jawaban pertanyaan perilaku."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      },
      {
       "term": {
        "en": "influence",
        "id": "pengaruh"
       },
       "def": {
        "en": "Moving people and decisions without formal authority — evidence of leadership before the title arrives.",
        "id": "Menggerakkan orang dan keputusan tanpa wewenang formal — bukti kepemimpinan sebelum jabatannya datang."
       }
      }
     ]
    },
    {
     "n": "2.3",
     "title": {
      "en": "Story Mining from Everyday Experience",
      "id": "Menambang Cerita dari Pengalaman Sehari-hari"
     },
     "kind": "interactive",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "“I don't have stories” is almost never true — it is a retrieval failure, not an experience failure. Campus projects, part-time shifts, family logistics, community work: anywhere there was tension and a decision, there is a story. This lesson is the mining protocol.",
      "id": "“Saya tidak punya cerita” hampir tidak pernah benar — itu kegagalan mengingat, bukan kekurangan pengalaman. Proyek kampus, kerja paruh waktu, urusan keluarga, kegiatan komunitas: di mana pun ada ketegangan dan sebuah keputusan, di situ ada cerita. Pelajaran ini adalah protokol untuk menambangnya."
     },
     "objectives": [
      {
       "en": "Generate a raw list of tension moments from ordinary life and work.",
       "id": "Menyusun daftar mentah momen-momen menegangkan dari kehidupan dan pekerjaan sehari-hari."
      },
      {
       "en": "Filter the list into stories with decisions, results and learnings.",
       "id": "Menyaring daftar itu menjadi cerita yang punya keputusan, hasil, dan pembelajaran."
      },
      {
       "en": "Build the eight-story core library that covers all ten competencies.",
       "id": "Membangun perpustakaan inti berisi delapan cerita yang menutup semua sepuluh kompetensi."
      }
     ],
     "takeaways": [
      {
       "en": "Stories hide where there was tension plus a decision — dig at those coordinates.",
       "id": "Cerita bersembunyi di titik pertemuan ketegangan dan keputusan — galilah di koordinat itu."
      },
      {
       "en": "Small and true beats big and vague: a well-run bazaar stall can out-interview an inflated internship.",
       "id": "Kecil tapi nyata mengalahkan besar tapi samar: lapak bazar yang dikelola dengan baik bisa menang wawancara melawan magang yang dibesar-besarkan."
      },
      {
       "en": "Eight polished, tagged stories are a complete arsenal for almost any interview.",
       "id": "Delapan cerita yang sudah dipoles dan diberi label adalah persenjataan lengkap untuk hampir semua wawancara."
      }
     ],
     "check": {
      "q": {
       "en": "The best signal that an experience contains an interview story is:",
       "id": "Sinyal terbaik bahwa sebuah pengalaman mengandung cerita untuk wawancara adalah:"
      },
      "options": [
       {
        "en": "There was tension, and you made a decision inside it",
        "id": "Ada ketegangan, dan kamu mengambil keputusan di dalamnya"
       },
       {
        "en": "It happened at a famous company",
        "id": "Terjadi di perusahaan yang terkenal"
       },
       {
        "en": "It lasted longer than six months",
        "id": "Berlangsung lebih dari enam bulan"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — prestige and duration are irrelevant; tension plus decision plus consequence is the anatomy of a story.",
       "id": "Benar — prestise dan durasi tidak relevan; ketegangan plus keputusan plus akibat adalah anatomi sebuah cerita."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Where stories actually live",
        "id": "Di mana cerita sebenarnya tinggal"
       },
       "body": {
        "en": "Group assignments where someone vanished. The event that nearly fell apart. The shift where two customers needed you at once. Teaching a sibling. Organising a family move. None of these sound like “leadership experience” — all of them can be, if there was a moment you saw the problem, chose an action, and something changed because of you.",
        "id": "Tugas kelompok yang salah satu anggotanya menghilang. Acara yang nyaris berantakan. Sif kerja saat dua pelanggan membutuhkanmu di saat yang sama. Mengajari adik. Mengatur kepindahan keluarga. Tidak satu pun terdengar seperti “pengalaman kepemimpinan” — tetapi semuanya bisa menjadi itu, kalau ada satu momen ketika kamu melihat masalahnya, memilih sebuah tindakan, dan sesuatu berubah karena dirimu."
       }
      },
      {
       "h": {
        "en": "The mining protocol",
        "id": "Protokol penambangan"
       },
       "body": {
        "en": "Step one: list twenty moments of tension from the last three years — one line each, no filtering. Step two: for each, ask “did I decide something?” Cut those where you only witnessed. Step three: ask “what changed, and can I say it concretely?” Keep the survivors. Step four: tag each with its competencies and write the STAR-L skeleton. Most people end with eight to twelve — a full library.",
        "id": "Langkah satu: tulis dua puluh momen menegangkan dari tiga tahun terakhir — satu baris untuk tiap momen, tanpa disaring. Langkah dua: untuk masing-masing, tanyakan “apakah saya memutuskan sesuatu?” Coret yang di dalamnya kamu hanya menonton. Langkah tiga: tanyakan “apa yang berubah, dan bisakah saya menyebutnya secara konkret?” Simpan yang lolos. Langkah empat: beri label kompetensinya dan tulis kerangka STAR-L-nya. Kebanyakan orang berakhir dengan delapan sampai dua belas cerita — sebuah perpustakaan yang lengkap."
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
        "id": "Pasang pewaktu sepuluh menit. Tulis dua puluh momen menegangkan, masing-masing satu baris, dari kuliah, kerja, organisasi, keluarga, komunitas. Jangan menilai, jangan menyaring — jumlah dulu."
       },
       "debrief": {
        "en": "If you stalled before twenty, widen the definition of tension: any moment you felt your pulse — a deadline, a disagreement, a thing about to fail — qualifies. The list is ore, not jewellery. Nobody sees it but you.",
        "id": "Kalau macet sebelum sampai dua puluh, perluas definisi ketegangan: momen apa pun ketika denyut nadimu terasa naik — tenggat, perbedaan pendapat, sesuatu yang nyaris gagal — memenuhi syarat. Daftar ini bijih, bukan perhiasan. Tidak ada yang melihatnya selain kamu."
       }
      },
      {
       "h": {
        "en": "Step 2 · The decision filter",
        "id": "Langkah 2 · Saringan keputusan"
       },
       "body": {
        "en": "Cross out every line where you only observed the tension. Keep lines where you chose something: spoke up, reorganised, took over, let go, asked for help.",
        "id": "Coret setiap baris yang di dalamnya kamu hanya mengamati ketegangan. Simpan baris yang di dalamnya kamu memilih sesuatu: bersuara, menata ulang, mengambil alih, melepaskan, meminta bantuan."
       },
       "debrief": {
        "en": "A story needs an agent. “Our team almost missed the deadline” is scenery until it becomes “so I froze the scope and renegotiated the deliverable”. If a crossed-out moment still stings, look again — passivity you regret can become an honest failure story with a real learning.",
        "id": "Cerita butuh pelaku. “Tim kami nyaris melewatkan tenggat” hanyalah latar, sampai menjadi “jadi saya bekukan cakupannya dan negosiasikan ulang hasil yang harus diserahkan”. Kalau momen yang sudah dicoret masih terasa menyengat, lihat lagi — kepasifan yang kamu sesali bisa menjadi cerita kegagalan yang jujur, dengan pembelajaran yang nyata."
       }
      },
      {
       "h": {
        "en": "Step 3 · Result and tag",
        "id": "Langkah 3 · Hasil dan label"
       },
       "body": {
        "en": "For each survivor, write what changed — with a number if truthful (time saved, people served, score, revenue, errors avoided) — then tag one to three of the ten competencies.",
        "id": "Untuk setiap cerita yang lolos, tulis apa yang berubah — dengan angka kalau memang jujur (waktu yang dihemat, orang yang dilayani, skor, pendapatan, kesalahan yang terhindar) — lalu beri label satu sampai tiga dari sepuluh kompetensi."
       },
       "debrief": {
        "en": "No number? Approximate honestly (“about a third faster”) or use a concrete non-number (“the client renewed”). Check coverage across your tags: gaps in conflict, failure or integrity are the ones interviews find. Mine specifically for those.",
        "id": "Tidak ada angka? Perkirakan dengan jujur (“kira-kira sepertiga lebih cepat”) atau pakai hal konkret yang bukan angka (“klien memperpanjang kontrak”). Periksa cakupan label-labelmu: celah di konflik, kegagalan, atau integritas adalah celah yang paling sering ditemukan wawancara. Tambang secara khusus untuk itu."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "“I have no leadership experience” — mined",
        "id": "“Saya tidak punya pengalaman memimpin” — setelah ditambang"
       },
       "weak": {
        "en": "Honestly, I haven't had a chance to lead anything yet — I've mostly just been a member in my organisations.",
        "id": "Jujur saja, saya belum pernah punya kesempatan memimpin apa pun — di organisasi saya kebanyakan hanya jadi anggota."
       },
       "strong": {
        "en": "My clearest leadership moment wasn't a title. Our bazaar stall was losing money on day one, and the committee had gone quiet. I called the six of us together that evening, we cut the menu from twelve items to four, and I took over supplier calls myself. We closed the three days at a profit — small, but ours. Leading, I learned, starts with calling the meeting nobody else wants to call.",
        "id": "Momen memimpin saya yang paling jelas bukan datang dari jabatan. Lapak bazar kami sudah rugi di hari pertama, dan panitia mendadak diam semua. Malam itu saya kumpulkan kami berenam, kami pangkas menu dari dua belas jadi empat, dan saya ambil alih sendiri urusan telepon ke pemasok. Tiga hari itu kami tutup dengan untung — kecil, tapi milik kami. Saya belajar bahwa memimpin dimulai dari mengadakan rapat yang tidak ingin diadakan siapa pun."
       },
       "why": {
        "en": "The experience existed all along — mining found it. Tension plus decision plus consequence, told with ownership; no title required.",
        "id": "Pengalamannya sudah ada sejak dulu — penambanganlah yang menemukannya. Ketegangan plus keputusan plus akibat, dituturkan dengan rasa memiliki; tidak butuh jabatan."
       }
      }
     ],
     "tryit": {
      "qid": "bh08",
      "label": {
       "en": "Drill an ownership story from ordinary life",
       "id": "Latih cerita rasa memiliki dari kehidupan sehari-hari"
      },
      "desc": {
       "en": "“Beyond your job description” — answer it with something mined, not something grand.",
       "id": "“Melampaui deskripsi pekerjaan Anda” — jawab dengan sesuatu yang kamu tambang, bukan sesuatu yang megah."
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
        "id": "Konteks → Tantangan → Tindakan → Hasil → Pembelajaran: tulang punggung narasi untuk jawaban pertanyaan perilaku."
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
         "id": "Tambang dari kampus, keluarga, komunitas, dan kerja paruh waktu: ketegangan plus keputusan plus akibat adalah cerita, di mana pun tempatnya."
        }
       },
       {
        "h": {
         "en": "Inflating small stories into epics",
         "id": "Membesar-besarkan cerita kecil menjadi epik"
        },
        "fix": {
         "en": "Small and true beats big and vague — one follow-up question destroys inflation.",
         "id": "Kecil tapi nyata mengalahkan besar tapi samar — satu pertanyaan lanjutan cukup untuk meruntuhkan yang dibesar-besarkan."
        }
       }
      ]
     }
    },
    {
     "n": "2.4",
     "title": {
      "en": "Calibrating Stories to Interview Type and Seniority",
      "id": "Mengalibrasi Cerita untuk Jenis Wawancara dan Level Senioritas"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "One story, many altitudes. The same project is told as execution detail to a peer, as decision-making to a manager, and as business impact to an executive. Calibration — not new stories — is how a small library covers every room you will enter.",
      "id": "Satu cerita, banyak ketinggian. Proyek yang sama dituturkan sebagai detail eksekusi kepada calon rekan, sebagai pengambilan keputusan kepada manajer, dan sebagai dampak bisnis kepada eksekutif. Kalibrasi — bukan cerita baru — adalah cara perpustakaan yang kecil bisa menjangkau setiap ruangan yang akan kamu masuki."
     },
     "objectives": [
      {
       "en": "Retell one story at three altitudes: execution, decision, impact.",
       "id": "Menuturkan ulang satu cerita pada tiga ketinggian: eksekusi, keputusan, dampak."
      },
      {
       "en": "Match story emphasis to HR, technical, user and final formats.",
       "id": "Menyesuaikan penekanan cerita dengan format HR, teknis, user, dan final."
      },
      {
       "en": "Adjust ownership language up and down seniority honestly.",
       "id": "Menyesuaikan bahasa rasa memiliki ke atas dan ke bawah sesuai level, dengan jujur."
      }
     ],
     "takeaways": [
      {
       "en": "Peers want your hands, managers want your choices, executives want the consequences.",
       "id": "Calon rekan ingin melihat tanganmu, manajer ingin melihat pilihanmu, eksekutif ingin melihat akibatnya."
      },
      {
       "en": "Calibration changes emphasis, never facts — inflation is discovered in follow-ups.",
       "id": "Kalibrasi mengubah penekanan, tidak pernah mengubah fakta — yang dibesar-besarkan akan ketahuan di pertanyaan lanjutan."
      },
      {
       "en": "Prepare the three altitudes of your two best stories before any onsite loop.",
       "id": "Siapkan tiga ketinggian dari dua cerita terbaikmu sebelum rangkaian wawancara tatap muka mana pun."
      }
     ],
     "check": {
      "q": {
       "en": "Telling a story to an executive, you should lead with:",
       "id": "Saat bercerita kepada seorang eksekutif, sebaiknya kamu membuka dengan:"
      },
      "options": [
       {
        "en": "The tools and techniques you used",
        "id": "Alat dan teknik yang kamu pakai"
       },
       {
        "en": "The outcome and its business consequence, then decisions on request",
        "id": "Hasilnya beserta akibat bisnisnya, lalu keputusannya kalau diminta"
       },
       {
        "en": "Every step of the process in chronological order",
        "id": "Setiap langkah prosesnya, secara kronologis"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — executives buy consequences first. The chronology exists if they ask; most will not.",
       "id": "Benar — eksekutif membeli akibatnya lebih dulu. Kronologinya tersedia kalau mereka minta; kebanyakan tidak akan meminta."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Three altitudes of one story",
        "id": "Tiga ketinggian dari satu cerita"
       },
       "body": {
        "en": "Execution altitude: the concrete how — tools, sequences, obstacles, hours. Decision altitude: the forks — options you saw, why you chose, what you traded. Impact altitude: what it meant — money, time, risk, people. All three are the same true story. Practising the shifts takes minutes and multiplies your library by three.",
        "id": "Ketinggian eksekusi: cara konkretnya — alat, urutan, hambatan, jam kerja. Ketinggian keputusan: persimpangannya — pilihan yang kamu lihat, alasan memilih, apa yang kamu korbankan. Ketinggian dampak: apa artinya — uang, waktu, risiko, orang. Ketiganya adalah cerita benar yang sama. Melatih perpindahan di antara ketiganya hanya butuh beberapa menit, dan melipatgandakan perpustakaanmu tiga kali."
       }
      },
      {
       "h": {
        "en": "Calibrating to format",
        "id": "Mengalibrasi ke format"
       },
       "body": {
        "en": "HR hears the same story as motivation and reliability evidence. Technical rooms want the method inside it. User rooms want the collaboration scenes — who you worked with and how it felt to be beside you. Finals want the judgment and the arc. Before each round, ask: which slice of my story does this room buy?",
        "id": "HR mendengar cerita yang sama sebagai bukti motivasi dan keandalan. Ruang teknis ingin melihat metode di dalamnya. Ruang user ingin adegan kolaborasinya — dengan siapa kamu bekerja, dan bagaimana rasanya berada di sampingmu. Ronde final ingin melihat pertimbangan dan alur perjalanannya. Sebelum setiap ronde, tanyakan: irisan mana dari ceritaku yang dibeli ruangan ini?"
       }
      },
      {
       "h": {
        "en": "Seniority honesty",
        "id": "Jujur soal level"
       },
       "body": {
        "en": "Entry-level candidates over-claim (“I led the entire project”) and get dismantled by one follow-up. Senior candidates under-slice (“the team delivered”) and vanish from their own story. Calibrate ownership to the truth: name exactly what was yours, credit the rest cleanly. Precision about your own boundary is itself a senior signal.",
        "id": "Kandidat pemula terlalu banyak mengklaim (“saya memimpin seluruh proyek”) dan dibongkar habis oleh satu pertanyaan lanjutan. Kandidat senior mengiris terlalu tipis (“tim yang menyelesaikannya”) dan lenyap dari ceritanya sendiri. Kalibrasikan rasa memiliki pada kebenaran: sebut persis bagian mana yang milikmu, dan beri kredit untuk sisanya dengan bersih. Ketepatan tentang batas dirimu sendiri justru merupakan sinyal senioritas."
       }
      }
     ],
     "diagram": {
      "type": "ladder",
      "title": {
       "en": "One story, three altitudes",
       "id": "Satu cerita, tiga ketinggian"
      },
      "items": [
       {
        "h": {
         "en": "Execution",
         "id": "Eksekusi"
        },
        "sub": {
         "en": "Tools, sequence, obstacles — for peers",
         "id": "Alat, urutan, hambatan — untuk calon rekan"
        }
       },
       {
        "h": {
         "en": "Decision",
         "id": "Keputusan"
        },
        "sub": {
         "en": "Options, criteria, trade-offs — for managers",
         "id": "Pilihan, kriteria, trade-off — untuk manajer"
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
       "id": "Melatih perpindahannya hanya butuh beberapa menit dan melipatgandakan perpustakaanmu tiga kali. Kalibrasi mengubah penekanan — tidak pernah mengubah fakta."
      },
      "exhibit": {
       "en": "Exhibit 5: One story, three altitudes",
       "id": "Peraga 5: Satu cerita, tiga ketinggian"
      },
      "longdesc": {
       "en": "Diagram of One story, three altitudes. It presents, in order: Execution — Tools, sequence, obstacles — for peers; Decision — Options, criteria, trade-offs — for managers; Impact — Money, time, risk, people — for executives.",
       "id": "Diagram satu cerita, tiga ketinggian. Menyajikan, secara berurutan: Eksekusi — alat, urutan, hambatan, untuk calon rekan; Keputusan — pilihan, kriteria, trade-off, untuk manajer; Dampak — uang, waktu, risiko, orang, untuk eksekutif."
      }
     },
     "tryit": {
      "qid": "bh04",
      "label": {
       "en": "Tell one story at manager altitude",
       "id": "Tuturkan satu cerita di ketinggian manajer"
      },
      "desc": {
       "en": "Answer the impossible-deadline question leading with the trade-off you chose, not the hours you worked.",
       "id": "Jawab pertanyaan tentang tenggat yang mustahil dengan membuka pada trade-off yang kamu pilih, bukan jam kerja yang kamu habiskan."
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
        "id": "Pertanyaan penggali setelah jawabanmu — tempat klaim yang dibesar-besarkan runtuh, dan kedalaman yang jujur mendapat nilai."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/bg/ch1-realization.jpg",
   "heroPos": "center 30%"
  },
  {
   "num": 3,
   "title": {
    "en": "Competency Framework Intelligence",
    "id": "Membaca Kerangka Kompetensi"
   },
   "overview": {
    "en": "Interviews are scored, not felt. Behind most professional interviews sits a rubric: competencies, anchors, evidence standards. This module teaches you to see the scoring machinery — how interviewers grade, how companies publish their values as testable behaviours, how job descriptions encode the rubric, and how to map your story library onto the exact framework you will face.",
    "id": "Wawancara itu dinilai, bukan dirasakan. Di balik sebagian besar wawancara profesional ada sebuah rubrik: kompetensi, deskripsi skor, standar bukti. Modul ini mengajarimu melihat mesin penilaiannya — cara pewawancara memberi skor, cara perusahaan menerbitkan nilai-nilainya sebagai perilaku yang bisa diuji, cara deskripsi lowongan menyimpan rubrik itu, dan cara memetakan perpustakaan ceritamu ke kerangka persis yang akan kamu hadapi."
   },
   "outcome": {
    "en": "By the end of this module you can reconstruct the likely scorecard for any role from public materials, and enter the interview knowing which of your stories answers which rubric line.",
    "id": "Di akhir modul ini, kamu bisa menyusun ulang scorecard yang kemungkinan dipakai untuk posisi apa pun dari materi yang tersedia publik, dan memasuki wawancara sambil tahu cerita mana yang menjawab baris rubrik yang mana."
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
      "id": "Wawancara terstruktur menilai tiap kompetensi pada skala dengan deskripsi yang jelas di tiap angkanya, menuntut bukti alih-alih kesan, dan menggabungkan skornya dalam debrief. Wawancara yang tidak terstruktur meniru hal yang sama dengan cara yang lebih buruk. Apa pun bentuknya, memahami cara penilaiannya mengubah caramu menjawab: kamu sedang mengisi rubrik, satu kompetensi pada satu waktu."
     },
     "objectives": [
      {
       "en": "Describe anchored scoring and what separates a 3 from a 5.",
       "id": "Menjelaskan penilaian berskala dan apa yang membedakan skor 3 dari skor 5."
      },
      {
       "en": "Explain why interviewers push for specifics — and feed them willingly.",
       "id": "Menjelaskan mengapa pewawancara mendesak hal yang spesifik — dan memberikannya dengan sukarela."
      },
      {
       "en": "Answer so that your best lines survive into the debrief notes.",
       "id": "Menjawab sedemikian rupa sehingga kalimat-kalimat terbaikmu bertahan sampai ke catatan debrief."
      }
     ],
     "takeaways": [
      {
       "en": "A 3 shows competence; a 5 shows competence plus scale, initiative or learning — aim your evidence there.",
       "id": "Skor 3 menunjukkan kompeten; skor 5 menunjukkan kompeten plus skala, inisiatif, atau pembelajaran — arahkan buktimu ke sana."
      },
      {
       "en": "“Give me a specific example” is the rubric talking. Specifics are the currency.",
       "id": "“Coba beri contoh yang spesifik” adalah rubrik yang sedang bicara. Hal spesifik adalah mata uangnya."
      },
      {
       "en": "Your interview outcome is the sum of quotable evidence, not the average of vibes.",
       "id": "Hasil wawancaramu adalah jumlah bukti yang bisa dikutip, bukan rata-rata dari kesan."
      }
     ],
     "check": {
      "q": {
       "en": "Interviewers keep asking for specific examples because:",
       "id": "Pewawancara terus meminta contoh yang spesifik karena:"
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
        "id": "Rubrik menuntut bukti, dan hanya hal spesifik yang dihitung sebagai bukti"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — a claim without an example cannot be scored. The push for specifics is the system working.",
       "id": "Benar — klaim tanpa contoh tidak bisa diberi skor. Desakan untuk hal spesifik adalah tanda sistemnya sedang bekerja."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Anchors: what a 5 actually requires",
        "id": "Deskripsi skor: apa yang sebenarnya dituntut angka 5"
       },
       "body": {
        "en": "A typical anchored scale reads: 1 — no evidence; 3 — clear example of the competency executed well; 5 — the example plus something beyond: unusual scale, self-started initiative, or a visible learning applied later. Most candidates aim at 3 without knowing it. Once you know the 5-anchor exists, you can build answers that reach for it honestly.",
        "id": "Skala penilaian yang lazim berbunyi: 1 — tidak ada bukti; 3 — satu contoh jelas kompetensi itu dijalankan dengan baik; 5 — contoh itu plus sesuatu yang lebih: skala yang tidak biasa, inisiatif yang dimulai sendiri, atau pembelajaran yang terlihat diterapkan di kemudian hari. Kebanyakan kandidat membidik angka 3 tanpa menyadarinya. Begitu tahu deskripsi untuk angka 5 itu ada, kamu bisa membangun jawaban yang menggapainya dengan jujur."
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
        "id": "Setelah seluruh rangkaian selesai, para pewawancara bertemu dan berdebat berdasarkan catatan. Kandidat yang kuat punya pembela yang membawa kutipan: “Dia bilang memangkas masa onboarding dari enam minggu jadi dua — begini caranya.” Beri setiap pewawancara setidaknya satu kalimat yang layak diperjuangkan: konkret, berangka, dan bisa diulang di rapat yang tidak kamu hadiri untuk membantu."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "Unstructured rooms still keep score",
        "id": "Ruangan yang tidak terstruktur pun tetap menghitung skor"
       },
       "body": {
        "en": "Some interviews feel like chats — no scorecard visible. The scoring still happens, just informally and after the fact, from memory. This makes structure and memorability more important for you, not less: in an unstructured room, whatever the interviewer can recall an hour later IS your score.",
        "id": "Sebagian wawancara terasa seperti obrolan — tidak ada scorecard yang terlihat. Penilaiannya tetap terjadi, hanya secara informal dan belakangan, dari ingatan. Ini membuat struktur dan daya ingat justru makin penting bagimu, bukan berkurang: di ruangan yang tidak terstruktur, apa pun yang masih bisa diingat pewawancara satu jam kemudian, ITULAH skormu."
       },
       "icon": "target"
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The anchored scale — what separates 3 from 5",
       "id": "Skala penilaian — apa yang membedakan 3 dari 5"
      },
      "items": [
       {
        "h": {
         "en": "1 · No evidence",
         "id": "1 · Tidak ada bukti"
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
         "id": "Satu contoh yang jelas, dijalankan dengan baik"
        }
       },
       {
        "h": {
         "en": "5 · Exceptional",
         "id": "5 · Istimewa"
        },
        "sub": {
         "en": "The example PLUS scale, initiative, or a learning applied later",
         "id": "Contoh itu PLUS skala, inisiatif, atau pembelajaran yang diterapkan kemudian"
        }
       }
      ],
      "note": {
       "en": "Most candidates aim at 3 without knowing it. Knowing the 5-anchor exists lets you reach for it honestly.",
       "id": "Kebanyakan kandidat membidik angka 3 tanpa menyadarinya. Mengetahui bahwa deskripsi untuk angka 5 itu ada membuatmu bisa menggapainya dengan jujur."
      },
      "exhibit": {
       "en": "Exhibit 6: The anchored scale — what separates 3 from 5",
       "id": "Peraga 6: Skala penilaian — apa yang membedakan 3 dari 5"
      },
      "longdesc": {
       "en": "Diagram of The anchored scale — what separates 3 from 5. It presents, in order: 1 · No evidence — Claims without an example; 3 · Competent — One clear example, executed well; 5 · Exceptional — The example PLUS scale, initiative, or a learning applied later.",
       "id": "Diagram skala penilaian — apa yang membedakan 3 dari 5. Menyajikan, secara berurutan: 1 · Tidak ada bukti — klaim tanpa contoh; 3 · Kompeten — satu contoh yang jelas, dijalankan dengan baik; 5 · Istimewa — contoh itu PLUS skala, inisiatif, atau pembelajaran yang diterapkan kemudian."
      }
     },
     "checks": [
      {
       "q": {
        "en": "To move an answer from a 3 to a 5, add:",
        "id": "Untuk menaikkan sebuah jawaban dari 3 ke 5, tambahkan:"
       },
       "options": [
        {
         "en": "Scale, self-started initiative, or a visible later application of the learning",
         "id": "Skala, inisiatif yang dimulai sendiri, atau penerapan nyata dari pembelajarannya di kemudian hari"
        },
        {
         "en": "More adjectives about how hard it was",
         "id": "Lebih banyak kata sifat tentang betapa sulitnya"
        },
        {
         "en": "A longer description of the context",
         "id": "Penjelasan konteks yang lebih panjang"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — the 5-anchor asks for something beyond competent execution: reach, ownership, or growth made visible.",
        "id": "Benar — deskripsi untuk angka 5 meminta sesuatu di atas eksekusi yang kompeten: jangkauan, rasa memiliki, atau pertumbuhan yang terlihat."
       }
      }
     ],
     "scenario": {
      "icon": "target",
      "img": "../../assets/bg/stage-exploration.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat dalam Sorotan"
      },
      "body": [
       {
        "en": "Dimas prints the product-analyst JD he wants and reads it twice with a highlighter. “Stakeholder” appears four times. “SQL” appears once, in the last bullet. His friend spent the week grinding SQL exercises; Dimas spends it polishing two stakeholder stories with numbers. In the interview, four of seven questions are about working across teams. Same JD — two very different preparations, because only one of them decoded it.",
        "id": "Dimas mencetak deskripsi lowongan product analyst yang ia incar dan membacanya dua kali sambil memegang stabilo. Kata “stakeholder” muncul empat kali. “SQL” muncul sekali, di butir terakhir. Temannya menghabiskan satu minggu menggarap latihan SQL; Dimas memakainya untuk memoles dua cerita tentang pemangku kepentingan, lengkap dengan angka. Di wawancara, empat dari tujuh pertanyaan ternyata tentang bekerja lintas tim. Deskripsi lowongan yang sama — dua persiapan yang sangat berbeda, karena hanya satu orang yang membacanya sebagai kode."
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
        "id": "Rapat setelah seluruh rangkaian wawancara, tempat para pewawancara menggabungkan catatan dan memperdebatkan keputusan rekrutmen — tanpa kamu di ruangan."
       }
      },
      {
       "term": {
        "en": "scorecard",
        "id": "scorecard"
       },
       "def": {
        "en": "A structured rubric interviewers fill per competency, usually on an anchored 1–5 scale.",
        "id": "Rubrik terstruktur yang diisi pewawancara untuk setiap kompetensi, biasanya dengan skala 1–5 yang punya deskripsi jelas di tiap angkanya."
       }
      },
      {
       "term": {
        "en": "competency",
        "id": "kompetensi"
       },
       "def": {
        "en": "A capability a role requires — leadership, prioritisation, judgment — that interviews probe with behavioral evidence.",
        "id": "Kemampuan yang dituntut sebuah posisi — kepemimpinan, menentukan prioritas, pertimbangan — yang digali wawancara lewat bukti perilaku."
       }
      },
      {
       "term": {
        "en": "rubric",
        "id": "rubrik"
       },
       "def": {
        "en": "The written standard an answer is scored against — criteria plus what each level of quality looks like.",
        "id": "Standar tertulis yang dipakai untuk menilai sebuah jawaban — kriterianya, plus seperti apa wujud setiap tingkat kualitas."
       }
      }
     ]
    },
    {
     "n": "3.2",
     "title": {
      "en": "Reading Company-Specific Frameworks",
      "id": "Membaca Kerangka Khas Perusahaan"
     },
     "kind": "slides",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Many companies publish their values, principles or competency language publicly. Those pages are not wall decoration — they are the interview rubric in plain sight. This deck teaches you to find them, translate value-words into testable behaviours, and prepare stories that speak the company's own language.",
      "id": "Banyak perusahaan menerbitkan nilai, prinsip, atau bahasa kompetensinya secara terbuka. Halaman-halaman itu bukan hiasan dinding — itulah rubrik wawancara yang terpampang di depan mata. Dek ini mengajarimu cara menemukannya, menerjemahkan kata-kata nilai menjadi perilaku yang bisa diuji, dan menyiapkan cerita yang berbicara dalam bahasa perusahaan itu sendiri."
     },
     "objectives": [
      {
       "en": "Locate a company's published values or principles in minutes.",
       "id": "Menemukan nilai atau prinsip yang diterbitkan sebuah perusahaan dalam hitungan menit."
      },
      {
       "en": "Translate a value-word into the behaviour an interviewer would probe.",
       "id": "Menerjemahkan sebuah kata nilai menjadi perilaku yang akan digali pewawancara."
      },
      {
       "en": "Select stories that evidence the company's specific language.",
       "id": "Memilih cerita yang membuktikan bahasa khas perusahaan itu."
      }
     ],
     "takeaways": [
      {
       "en": "Published values are the rubric in public; read them the week before, not the night before.",
       "id": "Nilai yang diterbitkan adalah rubrik yang dipajang di ruang publik; baca seminggu sebelumnya, bukan semalam sebelumnya."
      },
      {
       "en": "Translate every value-word into a question: “when did I actually behave like that?”",
       "id": "Terjemahkan setiap kata nilai menjadi pertanyaan: “kapan saya benar-benar pernah berperilaku seperti itu?”"
      },
      {
       "en": "Speak your story in their vocabulary once — naturally — and the mapping does itself.",
       "id": "Ucapkan ceritamu dalam kosakata mereka satu kali saja — secara alami — dan pemetaannya terjadi dengan sendirinya."
      }
     ],
     "check": {
      "q": {
       "en": "A company lists “bias for action” among its principles. Your preparation move:",
       "id": "Sebuah perusahaan mencantumkan “bias for action” di antara prinsip-prinsipnya. Langkah persiapanmu:"
      },
      "options": [
       {
        "en": "Ready a story where you moved before certainty and it was the right call",
        "id": "Siapkan cerita ketika kamu bergerak sebelum ada kepastian, dan itu ternyata keputusan yang tepat"
       },
       {
        "en": "Memorise the principle's exact wording to recite in the interview",
        "id": "Hafalkan kata-kata persis prinsip itu untuk dibacakan saat wawancara"
       },
       {
        "en": "Assume it is marketing language with no interview relevance",
        "id": "Anggap itu bahasa pemasaran yang tidak ada hubungannya dengan wawancara"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — the principle predicts the probe. Evidence beats recitation.",
       "id": "Benar — prinsip itu meramalkan pertanyaannya. Bukti mengalahkan hafalan."
      }
     },
     "slides": [
      {
       "h": {
        "en": "The rubric hides in public",
        "id": "Rubriknya bersembunyi di tempat terbuka"
       },
       "points": [
        {
         "en": "Careers pages, annual reports, founder letters and published principles carry the competency language interviews use.",
         "id": "Halaman karier, laporan tahunan, surat dari pendiri, dan prinsip yang diterbitkan memuat bahasa kompetensi yang dipakai dalam wawancara."
        },
        {
         "en": "If a company repeats a word — ownership, rigour, speed, service — expect a question shaped like it.",
         "id": "Kalau sebuah perusahaan mengulang satu kata — rasa memiliki, ketelitian, kecepatan, pelayanan — bersiaplah untuk pertanyaan yang berbentuk seperti kata itu."
        }
       ]
      },
      {
       "h": {
        "en": "Value-word → behaviour → probe",
        "id": "Kata nilai → perilaku → pertanyaan"
       },
       "points": [
        {
         "en": "“Customer obsession” becomes: tell me about a time you sacrificed convenience for a user.",
         "id": "“Customer obsession” menjadi: ceritakan saat Anda mengorbankan kenyamanan demi pengguna."
        },
        {
         "en": "“Integrity” becomes: describe a moment honesty cost you something.",
         "id": "“Integritas” menjadi: ceritakan momen ketika kejujuran membuat Anda kehilangan sesuatu."
        },
        {
         "en": "Run the translation for every listed value — you have just predicted half the interview.",
         "id": "Jalankan penerjemahan ini untuk setiap nilai yang tercantum — dan kamu baru saja meramalkan separuh isi wawancaranya."
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
         "id": "Untuk setiap nilai, pilih satu cerita berlabel yang paling kuat membuktikannya."
        },
        {
         "en": "Use their word once in the telling — naturally, not as flattery.",
         "id": "Pakai kata mereka satu kali dalam penuturanmu — secara alami, bukan untuk menjilat."
        },
        {
         "en": "Where you have no story for a value, mine for one now — that gap is where the interview will hurt.",
         "id": "Kalau tidak ada cerita untuk salah satu nilai, tambang sekarang juga — di celah itulah wawancara akan terasa sakit."
        }
       ]
      },
      {
       "h": {
        "en": "When nothing is published",
        "id": "Ketika tidak ada yang diterbitkan"
       },
       "points": [
        {
         "en": "Read several of the company's job ads — repeated requirements across roles are de facto values.",
         "id": "Baca beberapa iklan lowongan perusahaan itu — persyaratan yang berulang di berbagai posisi adalah nilai perusahaan secara de facto."
        },
        {
         "en": "Ask people who interviewed there; the Metanoia community and mentors exist for exactly this.",
         "id": "Tanyai orang yang pernah diwawancarai di sana; komunitas dan mentor Metanoia ada persis untuk hal ini."
        },
        {
         "en": "Default to the ten universal competencies — they underlie every private rubric too.",
         "id": "Kembali ke sepuluh kompetensi universal — itu juga fondasi dari setiap rubrik yang tidak dipublikasikan."
        }
       ]
      }
     ],
     "tryit": {
      "qid": "hr03",
      "label": {
       "en": "Use their language on “why us”",
       "id": "Pakai bahasa mereka untuk menjawab “mengapa kami”"
      },
      "desc": {
       "en": "Answer “why this company” naming one true, specific thing — the simulator checks for research signals.",
       "id": "Jawab “mengapa perusahaan ini” dengan menyebut satu hal yang benar dan spesifik — simulator akan memeriksa tanda-tanda bahwa kamu sudah riset."
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
        "id": "Kemampuan yang dituntut sebuah posisi — kepemimpinan, menentukan prioritas, pertimbangan — yang digali wawancara lewat bukti perilaku."
       }
      },
      {
       "term": {
        "en": "rubric",
        "id": "rubrik"
       },
       "def": {
        "en": "The written standard an answer is scored against — criteria plus what each level of quality looks like.",
        "id": "Standar tertulis yang dipakai untuk menilai sebuah jawaban — kriterianya, plus seperti apa wujud setiap tingkat kualitas."
       }
      }
     ]
    },
    {
     "n": "3.3",
     "title": {
      "en": "Decoding Job Descriptions into Competency Maps",
      "id": "Mengurai Deskripsi Lowongan menjadi Peta Kompetensi"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "A job description is a leaked exam paper. Its repeated words, its first three bullets, its 'musts' versus 'nices' — all encode what the interview will probe. This lesson teaches the decoding method and the evidence table that turns any JD into your preparation plan.",
      "id": "Deskripsi lowongan adalah bocoran soal ujian. Kata-kata yang berulang, tiga butir pertamanya, syarat “wajib” versus “nilai tambah” — semuanya menyimpan kode tentang apa yang akan digali wawancara. Pelajaran ini mengajarkan metode menguraikannya, dan tabel bukti yang mengubah deskripsi lowongan apa pun menjadi rencana persiapanmu."
     },
     "objectives": [
      {
       "en": "Extract the three requirements a JD actually cares about.",
       "id": "Mengambil tiga persyaratan yang benar-benar dipentingkan sebuah deskripsi lowongan."
      },
      {
       "en": "Predict interview questions from requirement lines.",
       "id": "Meramalkan pertanyaan wawancara dari baris-baris persyaratan."
      },
      {
       "en": "Build a requirement → evidence table before any interview.",
       "id": "Menyusun tabel persyaratan → bukti sebelum wawancara mana pun."
      }
     ],
     "takeaways": [
      {
       "en": "Repetition is emphasis: any word appearing three times in a JD will appear in the interview.",
       "id": "Pengulangan adalah penekanan: kata apa pun yang muncul tiga kali di deskripsi lowongan akan muncul di wawancara."
      },
      {
       "en": "The first three bullets are the job; the rest is the wishlist.",
       "id": "Tiga butir pertama adalah pekerjaannya; sisanya daftar keinginan."
      },
      {
       "en": "A completed evidence table converts interview anxiety into a checklist.",
       "id": "Tabel bukti yang sudah terisi mengubah kecemasan menghadapi wawancara menjadi daftar periksa."
      }
     ],
     "check": {
      "q": {
       "en": "A JD lists “stakeholder management” in its first bullet and twice more below. You should:",
       "id": "Sebuah deskripsi lowongan mencantumkan “stakeholder management” di butir pertama, dan dua kali lagi di bawahnya. Kamu sebaiknya:"
      },
      "options": [
       {
        "en": "Plan to ask the interviewer what they mean by it",
        "id": "Berencana menanyakan maksudnya kepada pewawancara"
       },
       {
        "en": "Prepare your strongest stakeholder story with a measurable outcome",
        "id": "Menyiapkan cerita terkuatmu tentang pemangku kepentingan, dengan hasil yang terukur"
       },
       {
        "en": "Ignore it — it appears in every JD",
        "id": "Mengabaikannya — itu muncul di semua deskripsi lowongan"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — first position plus repetition marks the core competency. It will be probed; arrive with evidence.",
       "id": "Benar — posisi pertama plus pengulangan menandai kompetensi inti. Itu pasti digali; datanglah dengan bukti."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Anatomy of a JD",
        "id": "Anatomi sebuah deskripsi lowongan"
       },
       "body": {
        "en": "Title and level set the altitude of expected answers. The opening paragraph names the team's mission — echo it in your “why this role”. Responsibilities describe the actual Tuesday; requirements describe the filter. Watch the verbs: “own” signals autonomy tests, “support” signals collaboration tests, “drive” signals influence-without-authority tests.",
        "id": "Judul dan level menentukan ketinggian jawaban yang diharapkan. Paragraf pembuka menyebutkan misi tim — gaungkan itu dalam jawaban “mengapa posisi ini”-mu. Bagian tanggung jawab menggambarkan hari Selasa yang sebenarnya; bagian persyaratan menggambarkan saringannya. Perhatikan kata kerjanya: “memiliki” menandakan uji kemandirian, “mendukung” menandakan uji kolaborasi, “mendorong” menandakan uji kemampuan memengaruhi tanpa wewenang."
       }
      },
      {
       "h": {
        "en": "The decoding method",
        "id": "Metode menguraikannya"
       },
       "body": {
        "en": "Pass one: highlight every skill or behaviour word. Pass two: count repetitions — three appearances make a core theme. Pass three: separate musts from nices, and note which musts you can evidence strongly, weakly, or not at all. The weak cells are your preparation priorities and your likely difficult questions.",
        "id": "Putaran pertama: tandai setiap kata yang menyebut keterampilan atau perilaku. Putaran kedua: hitung pengulangannya — muncul tiga kali berarti tema inti. Putaran ketiga: pisahkan yang wajib dari yang nilai tambah, dan catat syarat wajib mana yang bisa kamu buktikan dengan kuat, lemah, atau sama sekali belum bisa. Sel-sel yang lemah adalah prioritas persiapanmu, sekaligus calon pertanyaan sulitmu."
       }
      },
      {
       "h": {
        "en": "The evidence table",
        "id": "Tabel bukti"
       },
       "body": {
        "en": "Three columns: requirement, my evidence, the number in it. Fill it for the top five requirements. Where a cell is empty, decide honestly: is there a story you have not mined, or is this a real gap you should acknowledge with a ramp-up plan? Interviewers respect a named gap with a plan far more than a bluffed strength.",
        "id": "Tiga kolom: persyaratan, bukti saya, angka di dalamnya. Isi untuk lima persyaratan teratas. Kalau ada sel yang kosong, putuskan dengan jujur: adakah cerita yang belum kamu tambang, atau ini celah nyata yang sebaiknya kamu akui disertai rencana untuk mengejarnya? Pewawancara jauh lebih menghargai celah yang diakui beserta rencananya daripada kekuatan yang digertakkan."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The JD decode, in four passes",
       "id": "Mengurai deskripsi lowongan, dalam empat putaran"
      },
      "items": [
       {
        "h": {
         "en": "Highlight",
         "id": "Tandai"
        },
        "sub": {
         "en": "Every skill and behaviour word",
         "id": "Setiap kata keterampilan dan perilaku"
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
         "id": "Persyaratan → bukti saya → angka di dalamnya"
        }
       }
      ],
      "note": {
       "en": "The weak cells of the table are your preparation priorities — and your likely difficult questions.",
       "id": "Sel-sel yang lemah di tabel itu adalah prioritas persiapanmu — sekaligus calon pertanyaan sulitmu."
      },
      "exhibit": {
       "en": "Exhibit 7: The JD decode, in four passes",
       "id": "Peraga 7: Mengurai deskripsi lowongan, dalam empat putaran"
      },
      "longdesc": {
       "en": "Diagram of The JD decode, in four passes. It presents, in order: Highlight — Every skill and behaviour word; Count — Three appearances = a core theme; Split — Musts vs nice-to-haves; Table — Requirement → my evidence → the number in it.",
       "id": "Diagram mengurai deskripsi lowongan dalam empat putaran. Menyajikan, secara berurutan: Tandai — setiap kata keterampilan dan perilaku; Hitung — muncul tiga kali = tema inti; Pisahkan — wajib vs nilai tambah; Tabel — persyaratan → bukti saya → angka di dalamnya."
      }
     },
     "tryit": {
      "qid": "hr04",
      "label": {
       "en": "Answer “why this role” from the decode",
       "id": "Jawab “mengapa posisi ini” dari hasil uraianmu"
      },
      "desc": {
       "en": "Quote the JD back in your own words and map two demands to two proofs.",
       "id": "Ulangi isi deskripsi lowongan dengan bahasamu sendiri, dan pasangkan dua tuntutannya dengan dua bukti milikmu."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Preparing for every listed requirement equally",
         "id": "Menyiapkan semua persyaratan dengan bobot yang sama"
        },
        "fix": {
         "en": "Weight by repetition and position: three mentions or first-three-bullets = the interview's core.",
         "id": "Beri bobot berdasarkan pengulangan dan posisi: disebut tiga kali, atau ada di tiga butir pertama = inti wawancaranya."
        }
       },
       {
        "h": {
         "en": "Ignoring the JD's own vocabulary",
         "id": "Mengabaikan kosakata deskripsi lowongan itu sendiri"
        },
        "fix": {
         "en": "Echo their words once, naturally — the interviewer wrote that JD and hears the match.",
         "id": "Gaungkan kata-kata mereka satu kali, secara alami — pewawancara itulah yang menulis deskripsi lowongannya, dan ia mendengar kecocokannya."
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
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      },
      {
       "term": {
        "en": "influence",
        "id": "pengaruh"
       },
       "def": {
        "en": "Moving people and decisions without formal authority — evidence of leadership before the title arrives.",
        "id": "Menggerakkan orang dan keputusan tanpa wewenang formal — bukti kepemimpinan sebelum jabatannya datang."
       }
      }
     ]
    },
    {
     "n": "3.4",
     "title": {
      "en": "Matching Your Story Library to the Target Framework",
      "id": "Mencocokkan Perpustakaan Cerita dengan Kerangka yang Dituju"
     },
     "kind": "interactive",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The final assembly step: your tagged stories on one axis, the target role's competencies on the other. The matrix shows instantly which stories to polish, which competencies are uncovered, and which single story is your workhorse. Twenty minutes of matrix beats two hours of unfocused rehearsal.",
      "id": "Langkah perakitan terakhir: cerita-ceritamu yang sudah berlabel di satu sumbu, kompetensi posisi yang dituju di sumbu lainnya. Matriksnya seketika memperlihatkan cerita mana yang perlu dipoles, kompetensi mana yang belum tertutup, dan satu cerita mana yang menjadi andalanmu. Dua puluh menit menyusun matriks mengalahkan dua jam latihan tanpa fokus."
     },
     "objectives": [
      {
       "en": "Build the story × competency matrix for a real target role.",
       "id": "Menyusun matriks cerita × kompetensi untuk posisi sungguhan yang kamu tuju."
      },
      {
       "en": "Identify coverage gaps and workhorse stories.",
       "id": "Mengenali celah cakupan dan cerita-cerita andalan."
      },
      {
       "en": "Plan the final polish order before an interview loop.",
       "id": "Merencanakan urutan pemolesan akhir sebelum rangkaian wawancara."
      }
     ],
     "takeaways": [
      {
       "en": "The matrix turns preparation from a mood into a checklist.",
       "id": "Matriks mengubah persiapan dari sekadar suasana hati menjadi daftar periksa."
      },
      {
       "en": "A workhorse story covering three competencies deserves triple polish.",
       "id": "Cerita andalan yang menutup tiga kompetensi layak dipoles tiga kali lebih keras."
      },
      {
       "en": "An uncovered competency is a predictable ambush — mine or plan for it now.",
       "id": "Kompetensi yang belum tertutup adalah penyergapan yang bisa diramalkan — tambang, atau siapkan rencananya sekarang."
      }
     ],
     "check": {
      "q": {
       "en": "Your matrix shows one competency with no story. Best move:",
       "id": "Matriksmu menunjukkan satu kompetensi tanpa cerita. Langkah terbaik:"
      },
      "options": [
       {
        "en": "Hope the interview skips that competency",
        "id": "Berharap wawancaranya melewatkan kompetensi itu"
       },
       {
        "en": "Reuse any strong story and claim it fits",
        "id": "Memakai ulang cerita kuat mana pun dan mengklaimnya cocok"
       },
       {
        "en": "Mine deliberately for a story there, or prepare an honest gap acknowledgment",
        "id": "Menambang cerita secara khusus untuk itu, atau menyiapkan pengakuan celah yang jujur"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — hope is not preparation, and forced fits collapse under follow-ups. Mine or acknowledge.",
       "id": "Benar — berharap bukan persiapan, dan kecocokan yang dipaksakan runtuh oleh pertanyaan lanjutan. Tambang, atau akui."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Building the matrix",
        "id": "Menyusun matriksnya"
       },
       "body": {
        "en": "Rows: your eight to twelve stories. Columns: the role's five to seven competencies, from the JD decode and any published framework. Mark each cell where a story genuinely evidences a competency. Ten honest minutes. The picture that emerges — clusters, gaps, one column empty — is your entire preparation agenda.",
        "id": "Baris: delapan sampai dua belas ceritamu. Kolom: lima sampai tujuh kompetensi posisi itu, dari uraian deskripsi lowongan dan kerangka yang diterbitkan, kalau ada. Tandai setiap sel tempat sebuah cerita benar-benar membuktikan sebuah kompetensi. Sepuluh menit yang jujur. Gambaran yang muncul — kelompok-kelompok, celah, satu kolom yang kosong — adalah seluruh agenda persiapanmu."
       }
      },
      {
       "h": {
        "en": "Reading the picture",
        "id": "Membaca gambarannya"
       },
       "body": {
        "en": "A story with three or more marks is a workhorse: rehearse it at all three altitudes. A competency column with two-plus stories lets you vary answers across a long loop without repeating. An empty column is tomorrow's ambush. And a story with zero marks may simply not belong in this interview — retire it without guilt.",
        "id": "Cerita dengan tiga tanda atau lebih adalah andalan: latih pada ketiga ketinggian. Kolom kompetensi dengan dua cerita atau lebih membuatmu bisa memvariasikan jawaban sepanjang rangkaian yang panjang tanpa mengulang. Kolom yang kosong adalah penyergapan esok hari. Dan cerita tanpa satu pun tanda mungkin memang tidak cocok untuk wawancara ini — pensiunkan tanpa rasa bersalah."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Step 1 · Draw it for a real role",
        "id": "Langkah 1 · Gambar untuk posisi sungguhan"
       },
       "body": {
        "en": "Pick a role you actually want. Decode its JD into five to seven competencies, list your stories, and mark the matrix — paper or spreadsheet, ten minutes, no perfectionism.",
        "id": "Pilih posisi yang benar-benar kamu inginkan. Uraikan deskripsi lowongannya menjadi lima sampai tujuh kompetensi, daftar ceritamu, dan tandai matriksnya — di kertas atau spreadsheet, sepuluh menit, tanpa perfeksionisme."
       },
       "debrief": {
        "en": "Common surprise: your proudest story evidences fewer target competencies than a humbler one. The matrix judges fit, not prestige — trust it. The humble story with three marks is the one to polish tonight.",
        "id": "Kejutan yang lazim: cerita yang paling kamu banggakan ternyata membuktikan lebih sedikit kompetensi target daripada cerita yang lebih sederhana. Matriks menilai kecocokan, bukan gengsi — percayalah padanya. Cerita sederhana dengan tiga tanda itulah yang harus dipoles malam ini."
       }
      },
      {
       "h": {
        "en": "Step 2 · Attack the gaps",
        "id": "Langkah 2 · Serang celahnya"
       },
       "body": {
        "en": "For each empty column, run the mining protocol from lesson 2.3 aimed specifically at that competency. If nothing surfaces, draft the honest acknowledgment: the gap, why it exists, your ramp-up plan.",
        "id": "Untuk setiap kolom yang kosong, jalankan protokol penambangan dari pelajaran 2.3 yang dibidikkan khusus ke kompetensi itu. Kalau tetap tidak ada yang muncul, susun pengakuan yang jujur: celahnya, mengapa celah itu ada, dan rencanamu untuk mengejarnya."
       },
       "debrief": {
        "en": "An honest gap statement sounds like: “Direct people management I haven't done yet — I've led through influence in two projects, and management is exactly the growth this role offers.” Ownership of the gap plus adjacent evidence plus motive. That answer scores; a bluff does not.",
        "id": "Pengakuan celah yang jujur berbunyi seperti ini: “Mengelola orang secara langsung memang belum pernah saya lakukan — di dua proyek saya memimpin lewat pengaruh, dan pengalaman manajerial adalah persis pertumbuhan yang ditawarkan posisi ini.” Mengakui celah, plus bukti yang berdekatan, plus motivasi. Jawaban seperti itu dapat nilai; gertakan tidak."
       }
      },
      {
       "h": {
        "en": "Step 3 · Set the polish order",
        "id": "Langkah 3 · Tetapkan urutan pemolesan"
       },
       "body": {
        "en": "Rank: workhorse stories first, then stories covering rare competencies, then the rest. Rehearse aloud in that order — the simulator in Module 7 runs exactly these priorities with you.",
        "id": "Urutkan: cerita andalan lebih dulu, lalu cerita yang menutup kompetensi langka, lalu sisanya. Latih dengan suara keras dalam urutan itu — simulator di Modul 7 menjalankan prioritas yang persis sama bersamamu."
       },
       "debrief": {
        "en": "Polish means: spoken aloud three times, timed under two minutes, one number verified, learning line sharpened. Four passes per story. With the matrix set, Module 7's simulation stops being scary and becomes a test drive of a machine you built.",
        "id": "Memoles artinya: diucapkan dengan suara keras tiga kali, diukur di bawah dua menit, satu angka diverifikasi, kalimat pembelajaran dipertajam. Empat putaran per cerita. Dengan matriks yang sudah siap, simulasi di Modul 7 berhenti menakutkan dan berubah menjadi uji jalan atas mesin yang kamu bangun sendiri."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "An empty matrix column — bluffed vs owned",
        "id": "Kolom matriks yang kosong — digertak vs diakui"
       },
       "q": {
        "en": "“This role needs direct people management. Have you done it?”",
        "id": "“Posisi ini butuh pengalaman mengelola orang secara langsung. Sudah pernah?”"
       },
       "weak": {
        "en": "Yes, definitely — I basically managed people in most of my projects, like coordinating and things like that.",
        "id": "Ya, tentu — saya pada dasarnya mengelola orang di hampir semua proyek saya, misalnya koordinasi dan hal-hal semacam itu."
       },
       "strong": {
        "en": "Direct people management I haven't done yet — I want to be straightforward about that. What I have done is lead through influence: in two projects I set the plan, ran the reviews, and coached one junior member weekly. Management is exactly the growth this role offers, and it's why I want it.",
        "id": "Mengelola orang secara langsung memang belum pernah — saya ingin jujur soal itu. Yang sudah saya lakukan adalah memimpin lewat pengaruh: di dua proyek, saya yang menyusun rencananya, memimpin review-nya, dan membimbing satu anggota junior setiap minggu. Pengalaman manajerial adalah persis pertumbuhan yang ditawarkan posisi ini, dan itulah alasan saya menginginkannya."
       },
       "why": {
        "en": "The bluff dies at the first follow-up. The owned gap earns trust, shows adjacent evidence, and turns the weakness into motive.",
        "id": "Gertakan mati di pertanyaan lanjutan pertama. Celah yang diakui menuai kepercayaan, memperlihatkan bukti yang berdekatan, dan mengubah kelemahan menjadi motivasi."
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
       "id": "“Apa yang Anda tawarkan sebagai pengganti pengalaman formal?” — satu kalimat yang tenang, lalu bukti."
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
        "id": "Kemampuan yang dituntut sebuah posisi — kepemimpinan, menentukan prioritas, pertimbangan — yang digali wawancara lewat bukti perilaku."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-02-screening.jpg",
   "heroPos": "center 30%"
  },
  {
   "num": 4,
   "title": {
    "en": "The HR Interview",
    "id": "Wawancara HR"
   },
   "overview": {
    "en": "The friendliest room with the highest elimination rate. This module covers the HR interviewer's real mandate, the positioning statement that answers half their questions in advance, the answer systems for the high-frequency questions — including the difficult cases: gaps, pivots, layoffs, and every version of “why you” — and the close and follow-up protocol.",
    "id": "Ruangan paling ramah dengan tingkat eliminasi tertinggi. Modul ini membahas mandat pewawancara HR yang sebenarnya, positioning statement yang menjawab separuh pertanyaan mereka sejak awal, sistem jawaban untuk pertanyaan-pertanyaan yang paling sering muncul — termasuk kasus-kasus sulit: jeda karier, banting setir, PHK, dan semua versi dari “mengapa Anda” — serta protokol untuk menutup wawancara dan menindaklanjutinya."
   },
   "outcome": {
    "en": "By the end of this module you can pass any HR screen with a clear positioning, calm answers to the loaded questions, honest reframes for your difficult case, and a professional close that keeps momentum.",
    "id": "Di akhir modul ini, kamu bisa melewati penyaringan HR mana pun dengan positioning yang jelas, jawaban yang tenang untuk pertanyaan-pertanyaan bermuatan, pembingkaian ulang yang jujur untuk kasus sulitmu, dan penutup profesional yang menjaga momentum."
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
      "id": "Penyaringan HR ada untuk menjawab lima pertanyaan: apakah orang ini termotivasi untuk posisi ini, masuk anggaran, tersedia sesuai jadwal kami, mampu berkomunikasi pada standar profesional, dan bebas dari risiko yang sebenarnya bisa dihindari? Semua yang ditanyakan dalam penyaringan melayani salah satu dari lima itu. Begitu kamu melihat mandatnya, wawancaranya menjadi mudah dibaca."
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
       "id": "Menghindari kesalahan klasik di tahap penyaringan: melantur, kepahitan, angka gaji yang asal sebut."
      }
     ],
     "takeaways": [
      {
       "en": "HR cannot usually hire you, but can always end you — treat the screen as a precision round.",
       "id": "HR biasanya tidak bisa merekrutmu, tetapi selalu bisa menghentikanmu — perlakukan penyaringan sebagai ronde presisi."
      },
      {
       "en": "Friendliness is a technique, not a verdict; match its warmth and keep your discipline.",
       "id": "Keramahan adalah teknik, bukan vonis; balas kehangatannya, dan jaga disiplinmu."
      },
      {
       "en": "Every screen question maps to motivation, money, timing, communication or risk.",
       "id": "Setiap pertanyaan penyaringan bermuara pada motivasi, uang, waktu, komunikasi, atau risiko."
      }
     ],
     "check": {
      "q": {
       "en": "“Why are you leaving your current job?” serves which part of the HR mandate?",
       "id": "“Mengapa Anda ingin meninggalkan pekerjaan Anda sekarang?” melayani bagian mandat HR yang mana?"
      },
      "options": [
       {
        "en": "Risk — checking for bitterness, conflict patterns, and unrealistic expectations",
        "id": "Risiko — memeriksa kepahitan, pola konflik, dan ekspektasi yang tidak realistis"
       },
       {
        "en": "Budget — estimating your salary expectations",
        "id": "Anggaran — memperkirakan ekspektasi gajimu"
       },
       {
        "en": "Timeline — determining your start date",
        "id": "Waktu — menentukan tanggal mulaimu"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — the question hunts risk signals. A forward-facing answer clears it; litigating the past confirms it.",
       "id": "Benar — pertanyaan itu memburu sinyal risiko. Jawaban yang menghadap ke depan meloloskanmu; mengadili masa lalu justru mengonfirmasi risikonya."
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
        "id": "Motivasi: kamu menginginkan posisi ini, atau posisi apa saja? Uang: apakah rentang gajimu masuk dalam kisaran mereka? Waktu: masa pemberitahuan pengunduran diri, tanggal mulai, proses lamaran lain yang sedang berjalan. Komunikasi: bisakah kamu menjelaskan dirimu dengan jelas pada pertemuan pertama? Risiko: jeda karier tanpa penjelasan, kepahitan, ketidaksesuaian dengan CV. Nilai dirimu pada lima hal itu sebelum perekrut yang melakukannya."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "The friendliness trap",
        "id": "Jebakan keramahan"
       },
       "body": {
        "en": "Recruiters are professionally warm, and warmth loosens tongues. Candidates confess doubts, criticise old employers, or negotiate against themselves — in the first fifteen minutes. Be warm back, and treat every sentence as on the record, because it is. The screen is a filter wearing a smile.",
        "id": "Perekrut bersikap hangat secara profesional, dan kehangatan melonggarkan lidah. Kandidat mengakui keraguan, mengkritik tempat kerja lama, atau menawar merugikan diri sendiri — semuanya dalam lima belas menit pertama. Balas kehangatannya, dan perlakukan setiap kalimat sebagai catatan resmi, karena memang begitu adanya. Penyaringan adalah saringan yang mengenakan senyum."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "What passes the screen",
        "id": "Apa yang lolos penyaringan"
       },
       "body": {
        "en": "A clean screen performance is unspectacular by design: specific motivation for this company, a researched salary range delivered without flinching, honest timeline, one or two crisp proof stories, zero negativity. You are not trying to win the job here — you are trying not to lose it. Save the fireworks for rooms that can hire you.",
        "id": "Penampilan yang bersih di penyaringan memang sengaja tidak spektakuler: motivasi yang spesifik untuk perusahaan ini, rentang gaji hasil riset yang disampaikan tanpa ragu, jadwal yang jujur, satu atau dua cerita bukti yang ringkas, dan nol nada negatif. Di sini kamu tidak sedang berusaha memenangkan pekerjaan — kamu sedang berusaha untuk tidak kehilangannya. Simpan kembang apinya untuk ruangan yang bisa merekrutmu."
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
         "id": "Posisi ini, atau posisi apa saja?"
        }
       },
       {
        "h": {
         "en": "Money",
         "id": "Uang"
        },
        "sub": {
         "en": "Does your range fit the band?",
         "id": "Apakah rentangmu masuk kisaran mereka?"
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
         "id": "Jelas pada pertemuan pertama?"
        }
       },
       {
        "h": {
         "en": "Risk",
         "id": "Risiko"
        },
        "sub": {
         "en": "Gaps, bitterness, inconsistencies",
         "id": "Jeda karier, kepahitan, ketidaksesuaian"
        }
       }
      ],
      "note": {
       "en": "Every screen question maps to one of the five. Score yourself before the recruiter does.",
       "id": "Setiap pertanyaan penyaringan bermuara ke salah satu dari lima itu. Nilai dirimu sendiri sebelum perekrut yang melakukannya."
      },
      "exhibit": {
       "en": "Exhibit 8: The five questions every screen serves",
       "id": "Peraga 8: Lima pertanyaan yang dilayani setiap penyaringan"
      },
      "longdesc": {
       "en": "Diagram of The five questions every screen serves. It presents, in order: Motivation — This role, or any role?; Money — Does your range fit the band?; Timing — Notice period, start date, other processes; Communication — Clear on a first meeting?; Risk — Gaps, bitterness, inconsistencies.",
       "id": "Diagram lima pertanyaan yang dilayani setiap penyaringan. Menyajikan, secara berurutan: Motivasi — posisi ini, atau posisi apa saja?; Uang — apakah rentangmu masuk kisaran mereka?; Waktu — masa pemberitahuan, tanggal mulai, proses lain; Komunikasi — jelas pada pertemuan pertama?; Risiko — jeda karier, kepahitan, ketidaksesuaian."
      }
     },
     "checks": [
      {
       "q": {
        "en": "The recruiter chats warmly about your old employer's problems. You should:",
        "id": "Perekrut mengobrol hangat tentang masalah-masalah di tempat kerjamu yang lama. Kamu sebaiknya:"
       },
       "options": [
        {
         "en": "Stay warm and stay forward-facing — every sentence is on the record",
         "id": "Tetap hangat dan tetap menghadap ke depan — setiap kalimat adalah catatan resmi"
        },
        {
         "en": "Relax and share the real gossip — rapport helps your case",
         "id": "Santai dan bagikan gosip yang sebenarnya — keakraban membantu posisimu"
        },
        {
         "en": "Refuse to discuss your old employer at all",
         "id": "Menolak sama sekali membahas tempat kerja lama"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — warmth is a technique. Match it, and keep your discipline: the screen is a filter wearing a smile.",
        "id": "Benar — kehangatan adalah teknik. Balaslah, dan jaga disiplinmu: penyaringan adalah saringan yang mengenakan senyum."
       }
      }
     ],
     "scenario": {
      "icon": "chat",
      "img": "../../assets/bg/mentoring-session.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat dalam Sorotan"
      },
      "body": [
       {
        "en": "Maya's screening call is going wonderfully — the recruiter laughs at her jokes, the conversation drifts to weekend plans. Relaxed, Maya mentions she is “honestly just desperate to leave” her current team, and that her salary hope is “whatever, negotiable, really.” The call ends warmly. The process ends silently. Maya never learns which two sentences did it — but after this module, you will recognise both.",
        "id": "Panggilan penyaringan Maya berjalan sangat menyenangkan — perekrutnya tertawa mendengar candaannya, obrolan melebar ke rencana akhir pekan. Karena merasa santai, Maya menyebut bahwa ia “jujur, sudah tidak tahan ingin keluar” dari timnya sekarang, dan harapan gajinya “berapa saja, bisa nego, sungguh.” Panggilan berakhir dengan hangat. Prosesnya berakhir dalam sunyi. Maya tidak pernah tahu dua kalimat mana yang menjadi penyebabnya — tetapi setelah modul ini, kamu akan mengenali keduanya."
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
        "id": "Waktu yang ditetapkan kontrak antara pengunduran diri dan hari terakhir bekerja — hormati; cara kamu pamit adalah bagian dari reputasimu."
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
      "id": "“Ceritakan tentang diri Anda” membuka sebagian besar wawancara, dan sebagian besar kandidat menceritakan ulang CV-nya secara kronologis — satu-satunya struktur yang dijamin terlupakan. Positioning statement mengganti kronologi dengan sebuah argumen: posisi saat ini, bukti, alasan ke sini. Sembilan puluh detik, tiga langkah, dibangun sekali dan disesuaikan untuk tiap perusahaan."
     },
     "objectives": [
      {
       "en": "Build your present → proof → why-here statement.",
       "id": "Membangun pernyataan posisi saat ini → bukti → alasan ke sini milikmu."
      },
      {
       "en": "Compress it into a 30-second version for unexpected moments.",
       "id": "Memadatkannya menjadi versi 30 detik untuk momen-momen tak terduga."
      },
      {
       "en": "Tailor the why-here per company without rebuilding the whole statement.",
       "id": "Menyesuaikan bagian “alasan ke sini” untuk tiap perusahaan tanpa membangun ulang seluruh pernyataan."
      }
     ],
     "takeaways": [
      {
       "en": "Position first: who you are professionally in one sentence, not your life story.",
       "id": "Posisi lebih dulu: siapa kamu secara profesional dalam satu kalimat, bukan riwayat hidupmu."
      },
      {
       "en": "Proof next: two examples with numbers that make the position undeniable.",
       "id": "Bukti berikutnya: dua contoh dengan angka yang membuat posisi itu tidak terbantahkan."
      },
      {
       "en": "Why-here last: the specific bridge between your direction and this company.",
       "id": "Alasan ke sini di akhir: jembatan yang spesifik antara arahmu dan perusahaan ini."
      }
     ],
     "check": {
      "q": {
       "en": "The biggest failure mode in “tell me about yourself” is:",
       "id": "Kegagalan terbesar dalam menjawab “ceritakan tentang diri Anda” adalah:"
      },
      "options": [
       {
        "en": "Mentioning numbers too early",
        "id": "Menyebut angka terlalu dini"
       },
       {
        "en": "Chronological CV retelling with no argument",
        "id": "Menceritakan ulang CV secara kronologis tanpa argumen"
       },
       {
        "en": "Speaking for ninety seconds",
        "id": "Berbicara selama sembilan puluh detik"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — chronology lists facts; positioning makes a case. Interviewers remember cases.",
       "id": "Benar — kronologi hanya mendaftar fakta; positioning membangun argumen. Pewawancara mengingat argumen."
      }
     },
     "sections": [
      {
       "h": {
        "en": "Move one — present",
        "id": "Langkah satu — posisi saat ini"
       },
       "body": {
        "en": "One sentence that frames you professionally: “I'm a data analyst who turns messy operational data into decisions retail teams actually use.” Identity plus flavour plus value, no adjectives about your personality. This sentence is the thesis; everything after supports it. Write ten versions, keep the one that sounds like you on a good day.",
        "id": "Satu kalimat yang membingkaimu secara profesional: “Saya analis data yang mengubah data operasional yang berantakan menjadi keputusan yang benar-benar dipakai tim ritel.” Identitas plus ciri khas plus nilai, tanpa kata sifat tentang kepribadianmu. Kalimat ini adalah tesisnya; semua yang datang sesudahnya mendukungnya. Tulis sepuluh versi, simpan yang paling terdengar seperti dirimu di hari yang baik."
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
        "id": "Dua contoh, masing-masing sepanjang satu tarikan napas, masing-masing dengan angka: “Tahun lalu saya mengotomatiskan laporan stok mingguan — hemat empat jam per cabang per minggu. Sebelumnya, saya memimpin tim kampus sampai ke final nasional.” Bukti mengubah tesis dari klaim menjadi fakta. Pilih contoh yang mengarah ke posisi yang kamu tuju, bukan dua trofi terbesarmu."
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
        "id": "Tutup lingkarannya ke ruangan mereka: “Itulah sebabnya posisi ini menarik bagi saya — Anda sedang mengembangkan persis jenis persoalan data operasional yang ingin saya tekuni dalam beberapa tahun ke depan.” Spesifik untuk perusahaan itu, satu kalimat, menghadap ke depan. Hanya bagian ini yang kamu bangun ulang untuk tiap wawancara; sisanya ikut ke mana pun kamu pergi."
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
        "id": "Di lift, di kolom obrolan webinar, di perkenalan yang tak terduga: tesis plus satu bukti plus satu kalimat tentang minatmu. Latih kedua versi dengan suara keras sampai perpindahan di antara keduanya terasa seperti memutar kenop, bukan berganti pidato. Ketika adrenalin datang, yang keluar adalah versi yang lebih sering kamu latih — jadi latih versi panjangnya minimal tiga kali dengan suara keras."
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
         "id": "Posisi saat ini"
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
       "id": "Total sembilan puluh detik. Hanya langkah terakhir yang dibangun ulang untuk tiap perusahaan — sisanya ikut ke mana pun kamu pergi."
      },
      "exhibit": {
       "en": "Exhibit 9: The positioning statement — three moves",
       "id": "Peraga 9: Positioning statement — tiga langkah"
      },
      "longdesc": {
       "en": "Diagram of The positioning statement — three moves. It presents, in order: Present — Who you are professionally, one sentence; Proof — Two examples with numbers; Why here — The bridge to this company, one sentence.",
       "id": "Diagram positioning statement — tiga langkah. Menyajikan, secara berurutan: Posisi saat ini — siapa kamu secara profesional, satu kalimat; Bukti — dua contoh dengan angka; Alasan ke sini — jembatan ke perusahaan ini, satu kalimat."
      }
     },
     "compare": [
      {
       "tag": {
        "en": "“Tell me about yourself” — chronology vs argument",
        "id": "“Ceritakan tentang diri Anda” — kronologi vs argumen"
       },
       "weak": {
        "en": "So I graduated in 2023 from industrial engineering, then I joined a company as an admin staff, then I moved to another company, and now I'm looking for new opportunities in data.",
        "id": "Jadi saya lulus tahun 2023 dari teknik industri, lalu saya bergabung ke sebuah perusahaan sebagai staf admin, lalu pindah ke perusahaan lain, dan sekarang saya sedang mencari peluang baru di bidang data."
       },
       "strong": {
        "en": "I'm a data analyst who turns messy operational data into decisions retail teams actually use. Last year I automated a weekly stock report that saved each branch four hours a week; before that I led a campus team to a national final. That's why this role caught me — you're scaling exactly this kind of operations problem.",
        "id": "Saya analis data yang mengubah data operasional yang berantakan menjadi keputusan yang benar-benar dipakai tim ritel. Tahun lalu saya mengotomatiskan laporan stok mingguan yang menghemat empat jam per cabang setiap minggu; sebelumnya, saya memimpin tim kampus sampai ke final nasional. Itulah sebabnya posisi ini menarik bagi saya — Anda sedang mengembangkan persis jenis persoalan operasional seperti ini."
       },
       "why": {
        "en": "The weak version lists facts in order; the strong one makes a case: identity, two numbered proofs, and a bridge to their room.",
        "id": "Versi yang lemah mendaftar fakta secara berurutan; versi yang kuat membangun argumen: identitas, dua bukti berangka, dan jembatan ke ruangan mereka."
       }
      }
     ],
     "listen": [
      {
       "label": {
        "en": "A full 90-second positioning, spoken",
        "id": "Positioning 90 detik yang utuh, diucapkan"
       },
       "text": {
        "en": "I'm a data analyst who turns messy operational data into decisions retail teams actually use. Two quick proofs. Last year I automated our weekly stock report — four hours saved per branch, every week, across nine branches. And at university I led a five-person team to a national data competition final, on a dataset none of us had touched before. Which is exactly why this role drew me: you're scaling the same kind of operations problem, and I want to spend the next years on it.",
        "id": "Saya analis data yang mengubah data operasional yang berantakan menjadi keputusan yang benar-benar dipakai tim ritel. Dua bukti singkat. Tahun lalu saya mengotomatiskan laporan stok mingguan kami — hemat empat jam per cabang, setiap minggu, di sembilan cabang. Dan di kampus, saya memimpin tim lima orang sampai ke final kompetisi data nasional, dengan dataset yang belum pernah kami sentuh sebelumnya. Itulah persis alasan posisi ini menarik saya: Anda sedang mengembangkan jenis persoalan operasional yang sama, dan saya ingin menekuninya dalam beberapa tahun ke depan."
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
       "id": "Ucapkan positioning-mu ke simulator — nyalakan kamera kalau berani. Bandingkan transkripmu dengan contoh di atas."
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
         "id": "Menceritakan ulang CV secara berurutan"
        },
        "fix": {
         "en": "Make an argument instead: identity, two numbered proofs, bridge to this company.",
         "id": "Bangun argumen sebagai gantinya: identitas, dua bukti berangka, jembatan ke perusahaan ini."
        }
       },
       {
        "h": {
         "en": "Starting the story at birth",
         "id": "Memulai cerita dari lahir"
        },
        "fix": {
         "en": "Start at the present. History earns a sentence only when it explains the present.",
         "id": "Mulai dari masa kini. Masa lalu hanya berhak mendapat satu kalimat, itu pun kalau menjelaskan masa kini."
        }
       },
       {
        "h": {
         "en": "Same speech for every company",
         "id": "Pidato yang sama untuk semua perusahaan"
        },
        "fix": {
         "en": "Rebuild only the why-here line per company — thirty seconds of tailoring, visible difference.",
         "id": "Bangun ulang hanya kalimat “alasan ke sini” untuk tiap perusahaan — tiga puluh detik penyesuaian, perbedaannya terasa."
        }
       }
      ]
     }
    },
    {
     "n": "4.3",
     "title": {
      "en": "High-Frequency HR Questions and the Answer System",
      "id": "Pertanyaan HR yang Paling Sering Muncul dan Sistem Jawabannya"
     },
     "kind": "interactive",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Why us. Why leave. Greatest strength, greatest weakness. Five years. Salary. The difficult cases — gaps, pivots, layoffs. These questions are predictable, which makes them buildable: each has an answer system, not a script. This lesson installs the systems and drills the two most feared.",
      "id": "Mengapa kami. Mengapa pindah. Kekuatan terbesar, kelemahan terbesar. Lima tahun lagi. Gaji. Kasus-kasus sulit — jeda karier, banting setir, PHK. Pertanyaan-pertanyaan ini bisa diprediksi, dan karena itu bisa disiapkan: masing-masing punya sistem jawaban, bukan naskah. Pelajaran ini memasang sistem-sistem itu dan melatih dua pertanyaan yang paling ditakuti."
     },
     "objectives": [
      {
       "en": "Apply the answer system for each high-frequency HR question.",
       "id": "Menerapkan sistem jawaban untuk setiap pertanyaan HR yang sering muncul."
      },
      {
       "en": "Deliver a real weakness with its management plan convincingly.",
       "id": "Menyampaikan kelemahan yang sungguhan beserta cara mengelolanya, secara meyakinkan."
      },
      {
       "en": "Reframe your difficult case — gap, pivot, layoff — with calm honesty.",
       "id": "Membingkai ulang kasus sulitmu — jeda karier, banting setir, PHK — dengan kejujuran yang tenang."
      }
     ],
     "takeaways": [
      {
       "en": "Systems, not scripts: know the moves of each answer and improvise the words.",
       "id": "Sistem, bukan naskah: kuasai langkah-langkah setiap jawaban, dan improvisasikan kata-katanya."
      },
      {
       "en": "The weakness question is a trust test — a disguised strength fails it instantly.",
       "id": "Pertanyaan tentang kelemahan adalah ujian kepercayaan — kekuatan yang disamarkan langsung gagal."
      },
      {
       "en": "Difficult cases are answered in one calm sentence plus a redirect to evidence.",
       "id": "Kasus sulit dijawab dengan satu kalimat yang tenang, lalu dialihkan ke bukti."
      }
     ],
     "check": {
      "q": {
       "en": "A strong answer to “what is your greatest weakness?” contains:",
       "id": "Jawaban yang kuat untuk “apa kelemahan terbesar Anda?” berisi:"
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
        "id": "Kelemahan yang sungguhan, satu akibat yang jujur, dan sistem yang kini mengendalikannya"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — honesty plus management. The interviewer is testing self-awareness, and self-awareness has receipts.",
       "id": "Benar — kejujuran plus pengelolaan. Pewawancara sedang menguji kesadaran diri, dan kesadaran diri punya bukti."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The systems at a glance",
        "id": "Sistem-sistemnya, sekilas"
       },
       "body": {
        "en": "Why us: something true and specific about them, bridged to your direction. Why leave: face forward, never litigate. Strength: one claim, one story, one number. Weakness: real, costed once, managed by a system. Five years: a capability, not a title. Salary: a researched range plus what it depends on. Every system is two or three moves — learn the moves.",
        "id": "Mengapa kami: sesuatu yang benar dan spesifik tentang mereka, dijembatani ke arah kariermu. Mengapa pindah: menghadap ke depan, jangan pernah mengadili masa lalu. Kekuatan: satu klaim, satu cerita, satu angka. Kelemahan: yang sungguhan, akibatnya disebut satu kali, dikendalikan oleh sebuah sistem. Lima tahun lagi: sebuah kemampuan, bukan jabatan. Gaji: rentang hasil riset plus apa yang memengaruhinya. Setiap sistem hanya dua atau tiga langkah — kuasai langkah-langkahnya."
       }
      },
      {
       "h": {
        "en": "The difficult cases, honestly",
        "id": "Kasus-kasus sulit, dengan jujur"
       },
       "body": {
        "en": "Gap, pivot, layoff, low grades, job-hopping: the pattern is identical. One calm sentence naming the fact, zero apology spiral, then a redirect to what you built or learned, landing on the present. The interviewer's fear is evasion and decay; your calm brevity answers both. Full preparation paths for sixteen difficult cases live in the simulator's setup — select yours and drill it.",
        "id": "Jeda karier, banting setir, PHK, nilai rendah, terlalu sering pindah kerja: polanya sama persis. Satu kalimat tenang yang menyebutkan faktanya, tanpa pusaran permintaan maaf, lalu alihkan ke apa yang kamu bangun atau pelajari, dan daratkan di masa kini. Yang ditakutkan pewawancara adalah pengelakan dan kemunduran; keringkasanmu yang tenang menjawab keduanya. Jalur persiapan lengkap untuk enam belas kasus sulit tersedia di pengaturan simulator — pilih milikmu, lalu latih."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 · Your weakness, for real",
        "id": "Latihan 1 · Kelemahanmu, yang sungguhan"
       },
       "body": {
        "en": "Write your actual weakness — the one a former teammate would name. Then write one sentence about a time it cost you, and two sentences on the system you now use against it. Say all four sentences aloud.",
        "id": "Tulis kelemahanmu yang sebenarnya — yang akan disebut oleh mantan rekan setimmu. Lalu tulis satu kalimat tentang saat kelemahan itu merugikanmu, dan dua kalimat tentang sistem yang sekarang kamu pakai untuk mengatasinya. Ucapkan keempat kalimat itu dengan suara keras."
       },
       "debrief": {
        "en": "Test it: would the interviewer learn something true about working with you? “Perfectionism” fails that test; “I default to doing instead of delegating — I now write a handover list at the start of each project” passes. The system is the answer; the weakness is just its address.",
        "id": "Ujilah: apakah pewawancara jadi tahu sesuatu yang benar tentang rasanya bekerja bersamamu? “Perfeksionis” gagal dalam ujian itu; “Saya cenderung mengerjakan sendiri alih-alih mendelegasikan — sekarang saya menulis daftar pembagian tugas di awal setiap proyek” lulus. Sistemnya adalah jawabannya; kelemahan hanyalah alamatnya."
       }
      },
      {
       "h": {
        "en": "Drill 2 · Your difficult case in one breath",
        "id": "Latihan 2 · Kasus sulitmu dalam satu tarikan napas"
       },
       "body": {
        "en": "Identify your difficult case. Draft the one calm sentence that names it, and the redirect sentence that moves to evidence. Time yourself: both sentences inside twenty seconds.",
        "id": "Kenali kasus sulitmu. Susun satu kalimat tenang yang menyebutkannya, dan satu kalimat pengalih yang bergerak ke bukti. Ukur waktunya: kedua kalimat selesai dalam dua puluh detik."
       },
       "debrief": {
        "en": "Example, gap: “I took eight months out to care for my father; during it I kept my skills alive with two freelance dashboards — happy to show them.” Fact, no apology, evidence, forward. Twenty seconds ends the danger; three minutes of explaining creates it.",
        "id": "Contoh untuk jeda karier: “Saya berhenti delapan bulan untuk merawat ayah; selama itu saya menjaga keterampilan tetap hidup lewat dua proyek dashboard lepas — dengan senang hati saya tunjukkan.” Fakta, tanpa permintaan maaf, bukti, maju. Dua puluh detik mengakhiri bahayanya; tiga menit penjelasan justru menciptakannya."
       }
      },
      {
       "h": {
        "en": "Drill 3 · The salary range without flinching",
        "id": "Latihan 3 · Rentang gaji tanpa ragu"
       },
       "body": {
        "en": "Using module 8's research method (or your current best data), write your range for the target role and the sentence that delivers it. Practise saying it aloud until the number stops feeling like a confession.",
        "id": "Dengan metode riset dari Modul 8 (atau data terbaik yang kamu punya sekarang), tulis rentang gajimu untuk posisi yang dituju, dan kalimat untuk menyampaikannya. Latih mengucapkannya dengan suara keras sampai angka itu tidak lagi terasa seperti pengakuan dosa."
       },
       "debrief": {
        "en": "Delivery pattern: “Based on market data for this role and level, I'm looking at X to Y, depending on the total package.” Anchored, ranged, conditional. Hesitation before a number reads as an invitation to discount it — rehearse until the hesitation is gone.",
        "id": "Pola penyampaian: “Berdasarkan data pasar untuk posisi dan level ini, saya mengincar X sampai Y, tergantung paket keseluruhannya.” Berpatokan pada data, berupa rentang, bersyarat. Keraguan sebelum menyebut angka terbaca sebagai undangan untuk menawarnya turun — latih sampai keraguan itu hilang."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "The weakness question",
        "id": "Pertanyaan tentang kelemahan"
       },
       "q": {
        "en": "“What is your greatest weakness?”",
        "id": "“Apa kelemahan terbesar Anda?”"
       },
       "weak": {
        "en": "I'd say I'm a perfectionist — I just care too much about quality, and sometimes I work too hard.",
        "id": "Saya rasa saya perfeksionis — saya terlalu peduli pada kualitas, dan kadang bekerja terlalu keras."
       },
       "strong": {
        "en": "I default to doing instead of delegating. It cost me once: on a campus event I kept three tasks I should have handed over, and two were late. Since then I write a handover list at the start of every project — who takes what, by when. My last two projects shipped on time because of it.",
        "id": "Saya cenderung mengerjakan sendiri alih-alih mendelegasikan. Itu pernah merugikan saya: di sebuah acara kampus, saya memegang tiga tugas yang seharusnya saya serahkan, dan dua di antaranya terlambat. Sejak itu saya menulis daftar pembagian tugas di awal setiap proyek — siapa memegang apa, sampai kapan. Dua proyek terakhir saya selesai tepat waktu karena itu."
       },
       "why": {
        "en": "The disguised strength fails the trust test instantly. Real weakness + one honest cost + a working system = self-awareness with receipts.",
        "id": "Kekuatan yang disamarkan langsung gagal dalam ujian kepercayaan. Kelemahan sungguhan + satu akibat yang jujur + sistem yang berjalan = kesadaran diri yang ada buktinya."
       }
      },
      {
       "tag": {
        "en": "Why are you leaving?",
        "id": "Mengapa Anda ingin pindah?"
       },
       "weak": {
        "en": "Honestly my manager plays favourites and the company is a mess — there's no appreciation for people who actually work.",
        "id": "Jujur saja, atasan saya pilih kasih dan perusahaannya kacau — tidak ada penghargaan untuk orang yang benar-benar bekerja."
       },
       "strong": {
        "en": "I've grown a lot there — I built their reporting from scratch. What I can't get there is scale: the data problems I want next are the kind this team works on daily. I'm moving toward that, not away from anything.",
        "id": "Saya banyak bertumbuh di sana — saya membangun sistem pelaporan mereka dari nol. Yang tidak bisa saya dapatkan di sana adalah skala: persoalan data yang ingin saya tangani berikutnya adalah jenis yang dikerjakan tim ini setiap hari. Saya bergerak menuju sesuatu, bukan menjauh dari sesuatu."
       },
       "why": {
        "en": "Bitterness confirms the risk the question hunts. Facing forward — credit to the past, pull toward the future — clears it.",
        "id": "Kepahitan mengonfirmasi risiko yang diburu pertanyaan itu. Menghadap ke depan — menghargai masa lalu, tertarik ke masa depan — meloloskanmu."
       }
      }
     ],
     "listen": [
      {
       "label": {
        "en": "A difficult case in one breath — the gap",
        "id": "Kasus sulit dalam satu tarikan napas — jeda karier"
       },
       "text": {
        "en": "I took eight months out to care for my father. During that time I kept my skills alive with two freelance dashboard projects — I'm happy to show them. I'm back at full capacity, and honestly, hungrier than before.",
        "id": "Saya berhenti delapan bulan untuk merawat ayah saya. Selama itu, saya menjaga keterampilan tetap hidup lewat dua proyek dashboard lepas — dengan senang hati saya tunjukkan. Saya kembali dengan kapasitas penuh, dan jujur, lebih lapar daripada sebelumnya."
       }
      }
     ],
     "tryit": {
      "qid": "hr08",
      "label": {
       "en": "Your weakness, for real, on the clock",
       "id": "Kelemahanmu, yang sungguhan, dengan waktu berjalan"
      },
      "desc": {
       "en": "The simulator reads whether your answer carries a cost and a system — or just adjectives.",
       "id": "Simulator membaca apakah jawabanmu memuat akibat dan sistem — atau hanya kata sifat."
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
         "id": "“Saya bekerja terlalu keras” langsung gagal dalam ujian kepercayaan. Kelemahan sungguhan, satu akibat yang jujur, sistem yang berjalan."
        }
       },
       {
        "h": {
         "en": "Litigating your old employer",
         "id": "Mengadili tempat kerja lama"
        },
        "fix": {
         "en": "Face forward: what you are moving toward. Bitterness confirms the exact risk being probed.",
         "id": "Menghadap ke depan: apa yang kamu tuju. Kepahitan justru mengonfirmasi persis risiko yang sedang diperiksa."
        }
       },
       {
        "h": {
         "en": "Flinching before the salary number",
         "id": "Ragu sebelum menyebut angka gaji"
        },
        "fix": {
         "en": "A researched range, stated in one calm sentence, with what it depends on. Rehearse until boring.",
         "id": "Rentang hasil riset, disampaikan dalam satu kalimat tenang, beserta apa yang memengaruhinya. Latih sampai terasa membosankan."
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
      "id": "Wawancara diingat dari cara berakhirnya. Lima menit terakhir — pertanyaanmu, penutupmu, dan tindak lanjut yang tiba keesokan harinya — adalah poin termurah di papan skor. Pelajaran ini membahas rangkaian pertanyaan penutup, ucapan terima kasih yang menambah sinyal alih-alih sanjungan, dan etika menunggu."
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
       "id": "Menghadapi keheningan setelah wawancara tanpa merusak posisimu."
      }
     ],
     "takeaways": [
      {
       "en": "Your questions are scored too: ask about the work and the standard, never the perks first.",
       "id": "Pertanyaanmu juga dinilai: tanyakan tentang pekerjaan dan standarnya, jangan pernah tentang fasilitas lebih dulu."
      },
      {
       "en": "A good follow-up adds one thing: a sharpened answer, a relevant link, a concrete next step.",
       "id": "Tindak lanjut yang baik menambahkan satu hal: jawaban yang dipertajam, tautan yang relevan, atau langkah berikutnya yang konkret."
      },
      {
       "en": "One polite nudge after the stated timeline passes — then let your other processes carry your leverage.",
       "id": "Satu pengingat sopan setelah tenggat yang dijanjikan lewat — setelah itu, biarkan proses-proses lamaranmu yang lain memikul daya tawarmu."
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
        "id": "Berterima kasih, menambahkan satu detail konkret yang memperkuat, dan mengonfirmasi langkah berikutnya"
       },
       {
        "en": "Repeats your entire positioning statement in writing",
        "id": "Mengulang seluruh positioning statement-mu dalam bentuk tertulis"
       },
       {
        "en": "Asks whether you got the job",
        "id": "Menanyakan apakah kamu diterima"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — short, additive, forward-looking. It is your last quotable line in their notes.",
       "id": "Benar — singkat, menambah nilai, menghadap ke depan. Itulah kalimat terakhirmu yang bisa dikutip di catatan mereka."
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
        "id": "Ketika mereka mempersilakanmu bertanya, tiga jenis pertanyaan ini bekerja di semua ruangan: pertanyaan standar (“seperti apa kinerja yang unggul di posisi ini setelah enam bulan?”), pertanyaan realitas (“apa bagian tersulit dari pekerjaan ini yang tidak tertulis di deskripsinya?”), dan pertanyaan pertumbuhan (“bagaimana orang-orang sebelumnya bertumbuh dari posisi ini?”). Dua atau tiga pertanyaan, diajukan dengan rasa ingin tahu yang tulus — lalu penutup yang bersih: apresiasi, satu kalimat antusiasme, langkah berikutnya."
       }
      },
      {
       "h": {
        "en": "The follow-up that adds",
        "id": "Tindak lanjut yang menambah nilai"
       },
       "body": {
        "en": "Within twenty-four hours, four sentences: thanks with one specific reference to the conversation; one addition — a sharper version of an answer you fumbled, or a link to work you mentioned; enthusiasm in one line; confirmation of the next step. That is signal. Long letters, flattery, or essays re-arguing your case are noise that ages badly.",
        "id": "Dalam dua puluh empat jam, empat kalimat: terima kasih dengan satu rujukan spesifik ke percakapan tadi; satu tambahan — versi yang lebih tajam dari jawaban yang tadi tersendat, atau tautan ke karya yang kamu sebut; antusiasme dalam satu kalimat; konfirmasi langkah berikutnya. Itulah sinyal. Surat yang panjang, sanjungan, atau esai yang mengulang argumenmu adalah derau yang cepat basi."
       }
      },
      {
       "h": {
        "en": "The etiquette of waiting",
        "id": "Etika menunggu"
       },
       "body": {
        "en": "Ask for the timeline in the room, then respect it. If it passes, one polite nudge referencing the stated date. After that, silence from you — continued chasing converts interest into pity. Keep other processes moving; nothing improves your patience, your posture, and your eventual negotiation like a live alternative.",
        "id": "Tanyakan jadwalnya saat masih di ruangan, lalu hormati. Kalau lewat, satu pengingat sopan yang merujuk ke tanggal yang mereka janjikan. Setelah itu, diam dari pihakmu — mengejar terus-menerus mengubah minat menjadi rasa kasihan. Jaga proses lamaran lain tetap berjalan; tidak ada yang lebih memperbaiki kesabaranmu, sikapmu, dan negosiasimu nanti selain alternatif yang masih hidup."
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
        "id": "Ibu Sari yang terhormat, terima kasih banyak atas kesempatan luar biasa untuk wawancara di perusahaan Ibu yang hebat. Saya selalu bermimpi bekerja di tempat seperti ini. Saya sangat sangat berharap mendapat kabar baik. Saya akan menunggu balasan Ibu setiap hari. Sekali lagi terima kasih banyak."
       },
       "strong": {
        "en": "Dear Ms. Sari — thank you for this morning's conversation, especially your point about the Q4 reporting bottleneck. One addition: the automation I mentioned is documented here [link] — the version relevant to your stack. I'm genuinely enthusiastic about the role, and I look forward to the next step you mentioned for next week. Best regards.",
        "id": "Ibu Sari — terima kasih atas percakapan tadi pagi, khususnya poin Ibu tentang hambatan pelaporan di kuartal 4. Satu tambahan: otomasi yang saya sebutkan terdokumentasi di sini [tautan] — versi yang relevan dengan sistem Ibu. Saya sungguh antusias dengan posisi ini, dan menantikan langkah berikutnya yang Ibu sebutkan untuk minggu depan. Salam hormat."
       },
       "why": {
        "en": "Four sentences: specific thanks, one strengthening addition, one line of enthusiasm, next step. Signal — not flattery, not begging.",
        "id": "Empat kalimat: terima kasih yang spesifik, satu tambahan yang memperkuat, satu kalimat antusiasme, langkah berikutnya. Sinyal — bukan sanjungan, bukan memohon."
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
       "id": "“Ada pertanyaan untuk kami?” — bawa tiga jenisnya: standar, realitas, dan pertumbuhan."
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
        "id": "Percakapan setelah tawaran tertulis dan sebelum kamu menerimanya, ketika syarat-syarat masih bisa bergerak — hal yang wajar, kalau dilakukan secara profesional."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-05-hr-interview.jpg",
   "heroPos": "60% 32%"
  },
  {
   "num": 5,
   "title": {
    "en": "The Technical &amp; User Interview",
    "id": "Wawancara Teknis &amp; User"
   },
   "overview": {
    "en": "The middle rounds test how you think and how you work beside others. This module reframes technical questions as thinking tests, installs the graceful “I don't know” protocol, decodes the peer interview's real question — would we survive a bad week together? — and builds your function-specific deep-dive preparation.",
    "id": "Ronde-ronde tengah menguji cara berpikirmu dan caramu bekerja di samping orang lain. Modul ini membingkai ulang pertanyaan teknis sebagai ujian berpikir, memasang protokol “saya tidak tahu” yang anggun, membedah pertanyaan sebenarnya di balik wawancara dengan calon rekan setim — sanggupkah kita melewati minggu yang buruk bersama? — dan membangun persiapan pendalaman yang khusus untuk fungsi kerjamu."
   },
   "outcome": {
    "en": "By the end of this module you can think aloud through unfamiliar problems, handle the edge of your knowledge with credibility, and turn peer interviews into allies who argue for you in the debrief.",
    "id": "Di akhir modul ini, kamu bisa berpikir dengan suara keras menembus masalah yang asing, menghadapi batas pengetahuanmu dengan kredibilitas, dan mengubah pewawancara dari calon rekan setim menjadi sekutu yang membelamu di debrief."
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
      "id": "Pewawancara sudah tahu jawabannya; yang tidak bisa mereka lihat adalah metodemu. Klarifikasi, susun struktur, selesaikan dengan suara keras, verifikasi — putaran empat ketukan yang membuat jawaban keliru sekalipun tetap dapat nilai. Pelajaran ini memasang putaran itu, beserta kebiasaan menarasikan penalaranmu tanpa menarasikan kepanikanmu."
     },
     "objectives": [
      {
       "en": "Apply the clarify → structure → solve → verify loop to any technical question.",
       "id": "Menerapkan putaran klarifikasi → struktur → selesaikan → verifikasi pada pertanyaan teknis apa pun."
      },
      {
       "en": "Narrate reasoning aloud in a way interviewers can score.",
       "id": "Menarasikan penalaran dengan suara keras, dengan cara yang bisa dinilai pewawancara."
      },
      {
       "en": "Recover from a wrong path visibly and gracefully.",
       "id": "Pulih dari jalur yang keliru secara terlihat dan anggun."
      }
     ],
     "takeaways": [
      {
       "en": "Clarifying first is not weakness — it is the most senior move in the room.",
       "id": "Mengklarifikasi lebih dulu bukan kelemahan — itu langkah paling senior di ruangan."
      },
      {
       "en": "A wrong answer with visible method outscores a right answer produced in silence.",
       "id": "Jawaban keliru dengan metode yang terlihat mengungguli jawaban benar yang lahir dalam diam."
      },
      {
       "en": "Verification aloud — “let me sanity-check that” — is the loop most candidates skip.",
       "id": "Verifikasi dengan suara keras — “saya cek dulu masuk akal atau tidak” — adalah ketukan yang paling sering dilewati kandidat."
      }
     ],
     "check": {
      "q": {
       "en": "You realise mid-answer that your approach is wrong. Best move:",
       "id": "Di tengah jawaban, kamu sadar pendekatanmu keliru. Langkah terbaik:"
      },
      "options": [
       {
        "en": "Go quiet and think until you are certain",
        "id": "Diam dan berpikir sampai benar-benar yakin"
       },
       {
        "en": "Say so, name why, and restart on the better path",
        "id": "Katakan, sebutkan alasannya, dan mulai ulang di jalur yang lebih baik"
       },
       {
        "en": "Push through to the end so you look decisive",
        "id": "Terus sampai selesai supaya terlihat tegas"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — “actually, this breaks on X; let me restart from the constraint” is a senior behaviour, scored as such.",
       "id": "Benar — “sebentar, ini tidak berlaku untuk X; saya mulai ulang dari kendalanya” adalah perilaku senior, dan dinilai sebagai perilaku senior."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The four beats",
        "id": "Empat ketukannya"
       },
       "body": {
        "en": "Clarify: restate the problem and surface assumptions — scope, constraints, success criteria. Structure: announce your plan before executing it. Solve: work the plan aloud, flagging forks and choices. Verify: check the result against a quick independent estimate or an edge case. The beats take discipline precisely when adrenaline says rush — which is why they are practised, not remembered.",
        "id": "Klarifikasi: nyatakan ulang masalahnya dan angkat asumsinya — cakupan, kendala, kriteria keberhasilan. Struktur: umumkan rencanamu sebelum menjalankannya. Selesaikan: kerjakan rencana itu dengan suara keras, tandai persimpangan dan pilihannya. Verifikasi: periksa hasilnya terhadap taksiran cepat yang independen atau sebuah kasus tepi. Ketukan-ketukan ini menuntut disiplin justru ketika adrenalin menyuruhmu buru-buru — itulah sebabnya ia dilatih, bukan sekadar diingat."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Narrating without spiralling",
        "id": "Bernarasi tanpa berputar-putar"
       },
       "body": {
        "en": "Think-aloud is not stream-of-consciousness. Narrate decisions and reasons — “I'll segment by channel first because the drop could be concentrated” — not doubts and apologies. If you need silent seconds, buy them explicitly: “give me ten seconds to structure this.” Silence you announced reads as control; silence that just happens reads as freezing.",
        "id": "Berpikir dengan suara keras bukan berarti arus kesadaran. Narasikan keputusan dan alasannya — “saya pisahkan per kanal dulu, karena penurunannya mungkin terkonsentrasi di satu tempat” — bukan keraguan dan permintaan maaf. Kalau butuh beberapa detik untuk diam, minta secara terbuka: “beri saya sepuluh detik untuk menyusun ini.” Keheningan yang kamu umumkan terbaca sebagai kendali; keheningan yang terjadi begitu saja terbaca sebagai membeku."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "What is actually being scored",
        "id": "Apa yang sebenarnya dinilai"
       },
       "body": {
        "en": "Method, decomposition, judgment at forks, honesty about assumptions, and recovery from error. Speed matters far less than candidates believe; direction changes matter far less than how they are handled. The interviewer is simulating working with you on a hard problem — make the simulation pleasant and rigorous at once.",
        "id": "Metode, cara memecah masalah, pertimbangan di persimpangan, kejujuran tentang asumsi, dan pemulihan dari kesalahan. Kecepatan jauh kurang penting daripada yang diyakini kandidat; perubahan arah jauh kurang penting daripada cara menanganinya. Pewawancara sedang menyimulasikan bekerja bersamamu pada masalah yang sulit — buat simulasi itu menyenangkan sekaligus teliti."
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
         "id": "Nyatakan ulang, angkat asumsi, tentukan ukuran berhasil"
        }
       },
       {
        "h": {
         "en": "Structure",
         "id": "Susun struktur"
        },
        "sub": {
         "en": "Announce the plan before executing",
         "id": "Umumkan rencana sebelum menjalankannya"
        }
       },
       {
        "h": {
         "en": "Solve aloud",
         "id": "Selesaikan dengan suara keras"
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
         "id": "Uji kewajaran terhadap taksiran atau kasus tepi"
        }
       }
      ],
      "note": {
       "en": "A wrong answer reached by visible method outscores a right answer produced in silence.",
       "id": "Jawaban keliru yang dicapai dengan metode yang terlihat mengungguli jawaban benar yang lahir dalam diam."
      },
      "exhibit": {
       "en": "Exhibit 10: The four-beat loop for any technical question",
       "id": "Peraga 10: Putaran empat ketukan untuk pertanyaan teknis apa pun"
      },
      "longdesc": {
       "en": "Diagram of The four-beat loop for any technical question. It presents, in order: Clarify — Restate, surface assumptions, define success; Structure — Announce the plan before executing; Solve aloud — Narrate decisions and forks, not doubts; Verify — Sanity-check against an estimate or edge case.",
       "id": "Diagram putaran empat ketukan untuk pertanyaan teknis apa pun. Menyajikan, secara berurutan: Klarifikasi — nyatakan ulang, angkat asumsi, tentukan ukuran berhasil; Susun struktur — umumkan rencana sebelum menjalankannya; Selesaikan dengan suara keras — narasikan keputusan dan persimpangan, bukan keraguan; Verifikasi — uji kewajaran terhadap taksiran atau kasus tepi."
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
       "id": "“Apa yang Anda lakukan sebelum mulai menyelesaikan?” — ajak simulator menyusuri contoh sungguhan, ketukan satu dan dua."
      }
     },
     "scenario": {
      "icon": "gear",
      "img": "../../assets/bg/stage-execution.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat dalam Sorotan"
      },
      "body": [
       {
        "en": "Bayu freezes at the whiteboard. The system-design question has seven parts and he knows maybe four. The candidate before him answered fast and confidently — and wrongly, twice, without noticing. Bayu does something different: “Let me make sure I understand the constraints first.” He asks three questions, states two assumptions out loud, and solves the four parts he knows while naming the edge of the rest. He gets the offer. The fast candidate does not.",
        "id": "Bayu membeku di depan papan tulis. Soal desain sistemnya punya tujuh bagian, dan ia menguasai mungkin empat. Kandidat sebelumnya menjawab dengan cepat dan percaya diri — dan keliru, dua kali, tanpa menyadarinya. Bayu melakukan hal yang berbeda: “Izinkan saya memastikan dulu kendalanya.” Ia mengajukan tiga pertanyaan, menyebut dua asumsi dengan suara keras, dan menyelesaikan empat bagian yang ia kuasai sambil menyebutkan batas dari sisanya. Ia mendapat tawaran. Kandidat yang cepat tadi tidak."
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Diving in before clarifying",
         "id": "Langsung terjun sebelum mengklarifikasi"
        },
        "fix": {
         "en": "Restate the problem and surface assumptions first — clarifying is the most senior move in the room.",
         "id": "Nyatakan ulang masalahnya dan angkat asumsinya lebih dulu — mengklarifikasi adalah langkah paling senior di ruangan."
        }
       },
       {
        "h": {
         "en": "Thinking in silence",
         "id": "Berpikir dalam diam"
        },
        "fix": {
         "en": "Announce silence when you need it: “ten seconds to structure this.” Unannounced silence reads as freezing.",
         "id": "Umumkan keheningan saat kamu membutuhkannya: “sepuluh detik untuk menyusun ini.” Keheningan tanpa pengumuman terbaca sebagai membeku."
        }
       },
       {
        "h": {
         "en": "Defending a path you know is wrong",
         "id": "Mempertahankan jalur yang kamu tahu keliru"
        },
        "fix": {
         "en": "Say it, name why, restart: visible recovery from error scores higher than stubborn consistency.",
         "id": "Katakan, sebutkan alasannya, mulai ulang: pemulihan dari kesalahan yang terlihat dinilai lebih tinggi daripada konsistensi yang keras kepala."
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
      "id": "Setiap wawancara pada akhirnya sampai di batas pengetahuanmu — memang dirancang begitu. Apa yang terjadi berikutnya memisahkan para kandidat: gertakan runtuh oleh satu pertanyaan lanjutan, diam terbaca sebagai membeku, tetapi protokol “saya tidak tahu” — sebutkan, batasi, rencanakan — mengubah batas itu menjadi bukti kejujuran profesional."
     },
     "objectives": [
      {
       "en": "Execute the name → bound → plan protocol at the edge of your knowledge.",
       "id": "Menjalankan protokol sebutkan → batasi → rencanakan di batas pengetahuanmu."
      },
      {
       "en": "Distinguish partial knowledge from no knowledge, honestly.",
       "id": "Membedakan pengetahuan yang sebagian dari yang sama sekali tidak ada, dengan jujur."
      },
      {
       "en": "Avoid the bluff — and recognise why interviewers always catch it.",
       "id": "Menghindari gertakan — dan memahami mengapa pewawancara selalu menangkapnya."
      }
     ],
     "takeaways": [
      {
       "en": "“I don't know, and here is how I'd find out” is a scoring answer, not a forfeit.",
       "id": "“Saya tidak tahu, dan begini cara saya akan mencari tahu” adalah jawaban yang dapat nilai, bukan menyerah."
      },
      {
       "en": "Bound the unknown: say what you do know that borders it.",
       "id": "Batasi yang tidak kamu ketahui: sebutkan apa yang kamu ketahui di sekitarnya."
      },
      {
       "en": "Interviewers probe depth until they find the edge — reaching it is the plan, not the failure.",
       "id": "Pewawancara menggali sampai menemukan batasmu — sampai di sana adalah bagian dari rencana, bukan kegagalan."
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
        "id": "Mengarang definisi dari namanya, lalu berharap"
       },
       {
        "en": "Redirect to a topic you know better without acknowledging",
        "id": "Mengalihkan ke topik yang lebih kamu kuasai tanpa mengakuinya"
       },
       {
        "en": "Say you have not used it, state the adjacent thing you know, and describe how you would ramp up",
        "id": "Mengatakan belum pernah memakainya, menyebutkan hal terdekat yang kamu kuasai, dan menjelaskan cara kamu akan mengejarnya"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — the protocol in action. One follow-up destroys the improvised definition; nothing destroys honest bounding.",
       "id": "Benar — itulah protokolnya dalam praktik. Satu pertanyaan lanjutan menghancurkan definisi yang dikarang; tidak ada yang bisa menghancurkan pembatasan yang jujur."
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
        "id": "Pewawancara bertanya tentang X karena mereka menguasai X. Jawaban karanganmu sedang dibandingkan dengan pengetahuan yang sesungguhnya, saat itu juga, dan pertanyaan lanjutannya — selalu ada pertanyaan lanjutan — dibidikkan tepat ke titik lemahnya. Satu gertakan yang tertangkap menodai semua jawaban jujur sebelumnya. Matematika kredibilitas itu kejam: jangan pernah menghabiskannya untuk gertakan."
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
        "id": "Sebutkan: “Saya belum pernah menangani itu secara langsung.” Batasi: “Yang saya kuasai adalah konsep yang bersebelahan — begini kaitannya, sejauh pemahaman saya.” Rencanakan: “Supaya cepat produktif, saya akan mulai dari dokumentasinya, membangun kasus uji kecil, dan bertanya kepada pemiliknya di sini tentang konvensi yang berlaku.” Lima belas detik, sepenuhnya jujur, dan itu memperagakan persis bagaimana kamu akan menghadapi hal yang tidak kamu ketahui saat bekerja — dan itulah pertanyaan yang sebenarnya."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "Partial knowledge, stated precisely",
        "id": "Pengetahuan yang sebagian, dinyatakan dengan tepat"
       },
       "body": {
        "en": "Most edges are partial: you read about it, used it once, know its cousin. Say exactly that — “I've used it in one project, not at scale” — and let the interviewer calibrate the follow-up. Precision about your own boundary is a competence signal in itself; seniors do it instinctively, and interviewers recognise the dialect.",
        "id": "Kebanyakan batas itu bersifat sebagian: kamu pernah membacanya, pernah memakainya sekali, mengenal kerabatnya. Katakan persis itu — “pernah saya pakai di satu proyek, belum dalam skala besar” — dan biarkan pewawancara mengalibrasi pertanyaan lanjutannya. Ketepatan tentang batas dirimu sendiri adalah sinyal kompetensi tersendiri; para senior melakukannya secara naluriah, dan pewawancara mengenali dialek itu."
       },
       "icon": "target"
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The IDK protocol",
       "id": "Protokol “saya tidak tahu”"
      },
      "items": [
       {
        "h": {
         "en": "Name it",
         "id": "Sebutkan"
        },
        "sub": {
         "en": "“I haven't worked with that directly”",
         "id": "“Saya belum pernah menangani itu secara langsung”"
        }
       },
       {
        "h": {
         "en": "Bound it",
         "id": "Batasi"
        },
        "sub": {
         "en": "State the neighbouring thing you do know",
         "id": "Sebutkan hal bersebelahan yang kamu kuasai"
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
       "id": "Lima belas detik, sepenuhnya jujur — dan itu memperagakan persis bagaimana kamu akan menghadapi hal yang tidak kamu ketahui saat bekerja."
      },
      "exhibit": {
       "en": "Exhibit 11: The IDK protocol",
       "id": "Peraga 11: Protokol “saya tidak tahu”"
      },
      "longdesc": {
       "en": "Diagram of The IDK protocol. It presents, in order: Name it — “I haven't worked with that directly”; Bound it — State the neighbouring thing you do know; Plan it — Docs → small test → ask the owner.",
       "id": "Diagram protokol “saya tidak tahu”. Menyajikan, secara berurutan: Sebutkan — “Saya belum pernah menangani itu secara langsung”; Batasi — sebutkan hal bersebelahan yang kamu kuasai; Rencanakan — dokumentasi → uji kecil → tanya pemiliknya."
      }
     },
     "listen": [
      {
       "label": {
        "en": "The protocol, spoken end to end",
        "id": "Protokolnya, diucapkan dari awal sampai akhir"
       },
       "text": {
        "en": "I haven't used that framework directly. What I do know well is its predecessor — as I understand it, the main difference is the rendering model. To get productive I'd start with the migration guide, build one small component as a test, and ask whoever owns the codebase here about local conventions. I'd expect to be useful within days, not weeks.",
        "id": "Saya belum pernah memakai framework itu secara langsung. Yang saya kuasai dengan baik adalah pendahulunya — sejauh pemahaman saya, perbedaan utamanya ada di model rendering. Supaya cepat produktif, saya akan mulai dari panduan migrasinya, membangun satu komponen kecil sebagai uji coba, dan bertanya kepada pemilik kode di sini tentang konvensi yang berlaku. Perkiraan saya, saya sudah bisa berkontribusi dalam hitungan hari, bukan minggu."
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
       "id": "Latih momen yang kamu takuti — batas pengetahuanmu, dihadapi dengan sebuah rencana."
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
         "id": "Pewawancara tahu jawaban yang sebenarnya; pertanyaan lanjutannya membidik persis titik lemahmu. Jangan pernah menggertak."
        }
       },
       {
        "h": {
         "en": "A bare “I don't know”",
         "id": "“Saya tidak tahu” yang berdiri sendiri"
        },
        "fix": {
         "en": "Attach the plan: what you'd check, who you'd ask, when you'd come back. IDK plus plan scores.",
         "id": "Sertakan rencananya: apa yang akan kamu periksa, siapa yang akan kamu tanya, kapan kamu kembali dengan jawaban. “Saya tidak tahu” plus rencana itu dapat nilai."
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
        "id": "Pertanyaan penggali setelah jawabanmu — tempat klaim yang dibesar-besarkan runtuh, dan kedalaman yang jujur mendapat nilai."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ]
    },
    {
     "n": "5.3",
     "title": {
      "en": "The User/Peer Interview Dynamic",
      "id": "Dinamika Wawancara dengan Calon Rekan Setim"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Peers are not testing whether you are impressive; they are testing whether Tuesday with you will be bearable. Load-sharing, communication under friction, ego when challenged, help given and asked for — this lesson decodes the partnership test and how to interview your future teammates back.",
      "id": "Calon rekan setim tidak menguji apakah kamu mengesankan; mereka menguji apakah hari Selasa bersamamu akan tertahankan. Berbagi beban, komunikasi saat bergesekan, ego ketika ditantang, bantuan yang diberikan dan diminta — pelajaran ini membedah ujian kemitraan itu, dan cara mewawancarai balik calon rekan setimmu."
     },
     "objectives": [
      {
       "en": "Answer peer questions with collaboration scenes, not solo trophies.",
       "id": "Menjawab pertanyaan calon rekan setim dengan adegan kolaborasi, bukan trofi pribadi."
      },
      {
       "en": "Show healthy help-seeking and help-giving behaviour.",
       "id": "Menunjukkan perilaku yang sehat dalam meminta dan memberi bantuan."
      },
      {
       "en": "Ask peers the questions that reveal the team's real weather.",
       "id": "Mengajukan pertanyaan kepada calon rekan yang mengungkap cuaca sebenarnya di tim itu."
      }
     ],
     "takeaways": [
      {
       "en": "Peers imagine working beside you on a bad week — give them scenes of exactly that.",
       "id": "Calon rekan setim membayangkan bekerja di sampingmu pada minggu yang buruk — beri mereka adegan persis seperti itu."
      },
      {
       "en": "Asking for help early is a strength signal in peer rooms, not a confession.",
       "id": "Meminta bantuan sejak awal adalah sinyal kekuatan di ruang calon rekan, bukan pengakuan kelemahan."
      },
      {
       "en": "Their answers to your questions tell you the team's truth — listen as hard as you speak.",
       "id": "Jawaban mereka atas pertanyaanmu menceritakan kebenaran tentang tim itu — dengarkan sekeras kamu berbicara."
      }
     ],
     "check": {
      "q": {
       "en": "In a peer interview, the strongest story choice is:",
       "id": "Dalam wawancara dengan calon rekan setim, pilihan cerita yang paling kuat adalah:"
      },
      "options": [
       {
        "en": "A collaboration under pressure where you shared load and credit",
        "id": "Kolaborasi di bawah tekanan, ketika kamu berbagi beban dan berbagi kredit"
       },
       {
        "en": "Your biggest individual achievement",
        "id": "Pencapaian pribadi terbesarmu"
       },
       {
        "en": "A story where you outperformed a weak teammate",
        "id": "Cerita ketika kamu mengungguli rekan setim yang lemah"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — the room is a partnership test. Outshining teammates is the exact wrong evidence here.",
       "id": "Benar — ruangan ini adalah ujian kemitraan. Mengungguli rekan setim justru bukti yang paling keliru di sini."
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
        "id": "Di balik setiap pertanyaan dari calon rekan setim ada satu bayangan: tenggat yang molor, sistem yang rusak, perbedaan pendapat pukul 5 sore — dengan kamu di ruangan itu. Apakah kamu akan berkomunikasi, atau menghilang? Berbagi beban, atau menjaga wilayah? Tetap ingin tahu, atau menjadi defensif? Pilih cerita yang memperlihatkanmu persis di momen-momen seperti itu, bersikap seperti orang yang layak berada di tali yang sama."
       }
      },
      {
       "h": {
        "en": "Help as a signal",
        "id": "Bantuan sebagai sinyal"
       },
       "body": {
        "en": "Peers fear two extremes: the hero who never asks and melts down at scale, and the passenger who asks before trying. The healthy middle has a protocol: try, timebox, then ask precisely — “I've tried A and B, I'm stuck on C, can you look?” Tell one story of asking exactly like that, and one of being the person others asked. Both directions matter.",
        "id": "Calon rekan setim takut pada dua ekstrem: si pahlawan yang tidak pernah bertanya lalu tumbang saat beban membesar, dan si penumpang yang bertanya sebelum mencoba. Jalan tengah yang sehat punya protokol: coba dulu, batasi waktunya, lalu bertanya dengan tepat — “Saya sudah mencoba A dan B, macet di C, bisa tolong lihat?” Ceritakan satu kisah ketika kamu bertanya persis seperti itu, dan satu kisah ketika kamu menjadi orang yang ditanya. Kedua arah itu sama pentingnya."
       }
      },
      {
       "h": {
        "en": "Interviewing them back",
        "id": "Mewawancarai mereka balik"
       },
       "body": {
        "en": "Peers answer more honestly than managers. Ask: what does a normal week actually look like? What breaks first when things get busy? What would you change about how the team works? Their hesitations are data. A peer round where you learned nothing about the team was a wasted intelligence opportunity, whatever the verdict.",
        "id": "Calon rekan setim menjawab lebih jujur daripada manajer. Tanyakan: seperti apa minggu yang normal sebenarnya? Apa yang paling dulu jebol saat sedang sibuk? Apa yang ingin kamu ubah dari cara tim ini bekerja? Keraguan mereka saat menjawab adalah data. Ronde dengan calon rekan yang tidak memberimu pengetahuan baru tentang tim adalah kesempatan intelijen yang terbuang, apa pun hasil akhirnya."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "The peer room hears differently",
        "id": "Ruang calon rekan mendengar dengan cara yang berbeda"
       },
       "q": {
        "en": "“Tell me about working with someone difficult.”",
        "id": "“Ceritakan pengalaman Anda bekerja dengan orang yang sulit.”"
       },
       "weak": {
        "en": "One teammate was really slow and honestly not very skilled, so I ended up doing most of the work myself and we delivered thanks to that.",
        "id": "Ada satu rekan yang sangat lambat dan, jujur saja, kurang terampil, jadi akhirnya saya mengerjakan sebagian besar sendiri, dan kami selesai berkat itu."
       },
       "strong": {
        "en": "A designer and I kept missing each other — my specs were too abstract for him, his mockups too final for me. I asked for thirty minutes and we found a working agreement: rough sketches before any polish, and my feedback within a day. The next two features shipped without a single redo. I'd rather fix the interface between people than route around a person.",
        "id": "Saya dan seorang desainer terus tidak nyambung — spesifikasi saya terlalu abstrak baginya, mockup-nya terlalu final bagi saya. Saya minta waktu tiga puluh menit, dan kami menemukan kesepakatan kerja: sketsa kasar dulu sebelum dipoles, dan umpan balik dari saya dalam sehari. Dua fitur berikutnya rilis tanpa satu pun pengerjaan ulang. Saya lebih memilih memperbaiki cara kerja antara dua orang daripada menghindari seseorang."
       },
       "why": {
        "en": "The weak answer outshines a teammate — the exact wrong evidence in a partnership test. The strong one fixes the collaboration and shares the win.",
        "id": "Jawaban yang lemah mengungguli rekan setim — bukti yang paling keliru dalam ujian kemitraan. Jawaban yang kuat memperbaiki kolaborasinya dan berbagi kemenangan."
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
       "id": "“Bekerja dengan orang yang sangat berbeda dari Anda” — jadikan kesepakatan kerjanya sebagai pahlawan, bukan dirimu."
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
      "id": "Setiap fungsi punya bentuk pendalamannya sendiri: engineer mempertahankan pilihan arsitektur, analis mempertahankan definisi metrik, pemasar mempertahankan keputusan kanal, orang operasional mempertahankan trade-off proses. Pelajaran ini mengajarimu meramalkan lima pendalaman yang paling mungkin untuk fungsimu dan membangun bukti untuk masing-masing — dengan peta karier sebagai panduanmu."
     },
     "objectives": [
      {
       "en": "Identify the deep-dive shape of your target function.",
       "id": "Mengenali bentuk pendalaman untuk fungsi yang kamu tuju."
      },
      {
       "en": "Predict five likely deep-dive questions for your role.",
       "id": "Meramalkan lima pertanyaan pendalaman yang paling mungkin untuk posisimu."
      },
      {
       "en": "Prepare a defended decision — options, choice, trade-off — for each.",
       "id": "Menyiapkan satu keputusan yang bisa dipertahankan — pilihan, keputusan, trade-off — untuk masing-masing."
      }
     ],
     "takeaways": [
      {
       "en": "Deep-dives probe decisions you claim as yours: be ready to defend the fork, not just describe the road.",
       "id": "Pendalaman menggali keputusan yang kamu klaim sebagai milikmu: siaplah mempertahankan persimpangannya, bukan sekadar menggambarkan jalannya."
      },
      {
       "en": "“Why not the alternative?” is the real question inside every deep-dive.",
       "id": "“Mengapa bukan alternatifnya?” adalah pertanyaan sebenarnya di dalam setiap pendalaman."
      },
      {
       "en": "The Range's career directions list each role's core skills — use them as your prediction engine.",
       "id": "Arah karier di The Range mencantumkan keterampilan inti setiap posisi — pakai itu sebagai mesin prediksimu."
      }
     ],
     "check": {
      "q": {
       "en": "A deep-dive interviewer asks “why did you choose that approach?” They are really testing:",
       "id": "Pewawancara pendalaman bertanya, “mengapa Anda memilih pendekatan itu?” Yang sebenarnya mereka uji:"
      },
      "options": [
       {
        "en": "Whether you can recall the project timeline",
        "id": "Apakah kamu ingat lini waktu proyeknya"
       },
       {
        "en": "Whether you saw alternatives and chose with reasons",
        "id": "Apakah kamu melihat alternatifnya dan memilih dengan alasan"
       },
       {
        "en": "Whether your approach matches their favourite",
        "id": "Apakah pendekatanmu sama dengan favorit mereka"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — judgment lives at the forks. Options seen, criteria used, trade-off accepted: that is the deep-dive answer shape.",
       "id": "Benar — pertimbangan hidup di persimpangan. Pilihan yang terlihat, kriteria yang dipakai, trade-off yang diterima: itulah bentuk jawaban pendalaman."
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
        "id": "Pendalaman berangkat dari CV atau jawabanmu sendiri: “Anda tadi menyebut X — coba perdalam.” Lalu ia turun: mengapa dengan cara ini, mengapa bukan cara itu, apa yang rusak, apa yang akan kamu ubah sekarang. Penurunan itu berhenti di batasmu — memang dirancang begitu. Karena itu persiapannya bersifat vertikal, bukan horizontal: untuk dua atau tiga proyek unggulanmu, siaplah turun empat tingkat dengan detail yang jujur."
       }
      },
      {
       "h": {
        "en": "Prediction from the career graph",
        "id": "Meramalkan dari peta karier"
       },
       "body": {
        "en": "Open your target direction in The Range (inside The Map). Its core skills are the deep-dive menu: each skill generates a “defend a decision involving this” question. Product roles get prioritisation and metric-choice dives; engineering gets architecture and debugging dives; sales gets pipeline and objection dives. Write your five, then attach a real defended decision to each.",
        "id": "Buka arah karier yang kamu tuju di The Range (di dalam The Map). Keterampilan intinya adalah menu pendalaman: setiap keterampilan melahirkan satu pertanyaan “pertahankan sebuah keputusan yang melibatkan ini”. Posisi produk mendapat pendalaman tentang prioritas dan pemilihan metrik; engineering mendapat arsitektur dan debugging; sales mendapat pipeline dan penanganan keberatan. Tulis lima milikmu, lalu lekatkan satu keputusan sungguhan yang bisa dipertahankan pada masing-masing."
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
        "id": "Dari keterampilan inti posisi yang kamu tuju, susun lima pertanyaan pendalaman yang akan kamu ajukan kepada kandidat untuk posisi itu. Rumuskan seperti seorang pewawancara."
       },
       "debrief": {
        "en": "If your five feel generic, they are horizontal. Verticalise: attach each to a specific artefact a candidate would own — a dashboard, a campaign, a pipeline, a system. “Defend your metric definitions on a dashboard you built” is a real deep-dive; “tell me about analytics” is not.",
        "id": "Kalau lima pertanyaanmu terasa generik, berarti masih horizontal. Buat vertikal: lekatkan masing-masing pada artefak spesifik yang dimiliki seorang kandidat — sebuah dashboard, kampanye, pipeline, sistem. “Pertahankan definisi metrik di dashboard yang Anda bangun” adalah pendalaman yang sungguhan; “ceritakan tentang analitik” bukan."
       }
      },
      {
       "h": {
        "en": "Step 2 · Attach defended decisions",
        "id": "Langkah 2 · Lekatkan keputusan yang bisa dipertahankan"
       },
       "body": {
        "en": "For each question, pick a real decision from your work: the options you saw, the criteria you used, the trade-off you accepted, what happened. One paragraph each, spoken aloud once.",
        "id": "Untuk setiap pertanyaan, pilih satu keputusan sungguhan dari pekerjaanmu: pilihan yang kamu lihat, kriteria yang kamu pakai, trade-off yang kamu terima, dan apa yang terjadi kemudian. Satu paragraf untuk masing-masing, diucapkan dengan suara keras satu kali."
       },
       "debrief": {
        "en": "The defended-decision pattern: “I had A and B. A was faster, B was safer. Given the launch date, I chose A and mitigated the risk by X. It held, though today I'd add Y.” Options, criteria, mitigation, honesty about hindsight — four sentences that survive any depth of follow-up.",
        "id": "Pola keputusan yang bisa dipertahankan: “Ada pilihan A dan B. A lebih cepat, B lebih aman. Mengingat tanggal rilisnya, saya memilih A dan meredam risikonya dengan X. Pilihan itu bertahan, meskipun kalau sekarang saya akan menambahkan Y.” Pilihan, kriteria, mitigasi, kejujuran saat menengok ke belakang — empat kalimat yang tahan pertanyaan lanjutan sedalam apa pun."
       }
      },
      {
       "h": {
        "en": "Step 3 · Find your edge on purpose",
        "id": "Langkah 3 · Temukan batasmu dengan sengaja"
       },
       "body": {
        "en": "For each flagship project, descend your own knowledge four levels until you hit the point where you would say “I don't know”. Write the honest IDK sentence for that point, using the 5.2 protocol.",
        "id": "Untuk setiap proyek unggulan, turuni pengetahuanmu sendiri empat tingkat sampai ke titik ketika kamu akan berkata “saya tidak tahu”. Tulis kalimat “saya tidak tahu” yang jujur untuk titik itu, dengan protokol dari 5.2."
       },
       "debrief": {
        "en": "Knowing where your edge is before the interviewer finds it removes the fear of the descent. The edge sentence — “below that, I'd be guessing; here's how I'd find out” — is prepared honesty, and prepared honesty is unshakeable.",
        "id": "Mengetahui di mana batasmu sebelum pewawancara menemukannya menghapus rasa takut terhadap penurunan itu. Kalimat batasnya — “di bawah itu saya hanya akan menebak; begini cara saya mencari tahu” — adalah kejujuran yang disiapkan, dan kejujuran yang disiapkan tidak tergoyahkan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A deep-dive descends until it finds:",
        "id": "Sebuah pendalaman turun terus sampai menemukan:"
       },
       "options": [
        {
         "en": "The edge of your knowledge — by design; how you handle it is the score",
         "id": "Batas pengetahuanmu — memang dirancang begitu; cara kamu menghadapinya itulah nilaimu"
        },
        {
         "en": "A fact you cannot possibly know, to embarrass you",
         "id": "Fakta yang mustahil kamu ketahui, untuk mempermalukanmu"
        },
        {
         "en": "The complete history of your project",
         "id": "Riwayat lengkap proyekmu"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — reaching the edge is the plan, not the failure. Prepared honesty at the edge is unshakeable.",
        "id": "Benar — sampai di batas adalah bagian dari rencana, bukan kegagalan. Kejujuran yang disiapkan di batas itu tidak tergoyahkan."
       }
      }
     ],
     "tryit": {
      "qid": "tc07",
      "label": {
       "en": "The unfamiliar-system drill",
       "id": "Latihan sistem yang asing"
      },
      "desc": {
       "en": "Describe your first hour on a system you've never touched — orient, reproduce, bisect.",
       "id": "Gambarkan satu jam pertamamu di sistem yang belum pernah kamu sentuh — orientasi, reproduksi, persempit masalahnya."
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
        "id": "Pertukaran yang disengaja — menerima kerugian di satu dimensi demi keuntungan di dimensi lain; pewawancara menguji apakah trade-off milikmu diambil secara sadar."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-04-casestudy.jpg",
   "heroPos": "56% 22%"
  },
  {
   "num": 6,
   "title": {
    "en": "The Final &amp; Leadership Interview",
    "id": "Wawancara Final &amp; Kepemimpinan"
   },
   "overview": {
    "en": "The last room thinks in years, not tasks. Executives test judgment at altitude, trajectory, and whether the economics of hiring you make sense. This module covers executive psychology, strategic framing, surviving the deliberate stress-test, and the closing questions that mark you as someone who thinks about the business.",
    "id": "Ruangan terakhir berpikir dalam hitungan tahun, bukan tugas. Eksekutif menguji pertimbangan di level yang lebih tinggi, lintasan kariermu, dan apakah hitung-hitungan merekrutmu masuk akal. Modul ini membahas psikologi eksekutif, pembingkaian strategis, cara bertahan dari uji tekanan yang disengaja, dan pertanyaan penutup yang menandaimu sebagai orang yang memikirkan bisnisnya."
   },
   "outcome": {
    "en": "By the end of this module you can hold a conversation about your work in business terms, keep composure under deliberate scepticism, and close final rounds with questions that leave a senior impression.",
    "id": "Di akhir modul ini, kamu bisa membicarakan pekerjaanmu dalam bahasa bisnis, menjaga ketenangan di bawah skeptisisme yang disengaja, dan menutup ronde final dengan pertanyaan-pertanyaan yang meninggalkan kesan senior."
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
      "id": "Eksekutif mewawancarai dengan cara yang berbeda: rentang perhatian lebih pendek, tingkat abstraksi lebih tinggi, keputusan lebih cepat. Mereka menyimak pertimbangan, hitung-hitungan kepemilikan — apakah orang ini sepadan dengan total biayanya? — dan lintasan. Pelajaran ini mengajarkan pola jawaban yang mendahulukan intinya, dan bahasa rasa memiliki yang dihargai di ruangan terakhir."
     },
     "objectives": [
      {
       "en": "Answer headline-first, expanding only on request.",
       "id": "Menjawab dengan intinya lebih dulu, memperluas hanya bila diminta."
      },
      {
       "en": "Frame your work in terms of business consequences.",
       "id": "Membingkai pekerjaanmu dalam bahasa akibat bisnis."
      },
      {
       "en": "Show trajectory: where you are going, not only where you have been.",
       "id": "Menunjukkan lintasan: ke mana kamu menuju, bukan hanya dari mana kamu datang."
      }
     ],
     "takeaways": [
      {
       "en": "Executives buy headlines: outcome first, mechanics on request.",
       "id": "Eksekutif membeli intinya: hasil dulu, mekanismenya kalau diminta."
      },
      {
       "en": "Translate everything into revenue, cost, risk or capability — the four executive currencies.",
       "id": "Terjemahkan semuanya menjadi pendapatan, biaya, risiko, atau kemampuan — empat mata uang eksekutif."
      },
      {
       "en": "Trajectory talk is not ambition theatre; it is evidence you will still be valuable in year three.",
       "id": "Bicara soal lintasan bukan teater ambisi; itu bukti bahwa kamu masih akan bernilai di tahun ketiga."
      }
     ],
     "check": {
      "q": {
       "en": "An executive asks about your biggest project. Your first sentence should be:",
       "id": "Seorang eksekutif bertanya tentang proyek terbesarmu. Kalimat pertamamu sebaiknya:"
      },
      "options": [
       {
        "en": "The full context so they understand the situation",
        "id": "Konteks lengkap supaya mereka paham situasinya"
       },
       {
        "en": "The team structure and your reporting line",
        "id": "Struktur tim dan kepada siapa kamu melapor"
       },
       {
        "en": "The outcome and what it meant for the business",
        "id": "Hasilnya, dan apa artinya bagi bisnis"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — “we cut fulfilment cost 18% in six months; happy to unpack how” is the executive dialect. Detail follows demand.",
       "id": "Benar — “kami memangkas biaya fulfilment 18% dalam enam bulan; dengan senang hati saya uraikan caranya” adalah dialek eksekutif. Detail mengikuti permintaan."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The attention economics of the last room",
        "id": "Ekonomi perhatian di ruangan terakhir"
       },
       "body": {
        "en": "A final-round executive may give you thirty minutes between two other meetings that matter more to their day. Long wind-ups lose them in the first minute. Headline first — result, scale, consequence — then let their questions choose the depth. Paradoxically, saying less earns the invitation to say more.",
        "id": "Eksekutif di ronde final mungkin memberimu tiga puluh menit di antara dua rapat lain yang lebih penting bagi hari mereka. Pembukaan yang panjang membuatmu kehilangan mereka di menit pertama. Inti dulu — hasil, skala, akibat — lalu biarkan pertanyaan mereka yang menentukan kedalamannya. Paradoksnya, bicara lebih sedikit justru membuka undangan untuk bicara lebih banyak."
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
        "id": "Pendapatan yang dihasilkan atau dijaga. Biaya yang dihilangkan. Risiko yang dikurangi. Kemampuan yang dibangun. Setiap proyek yang pernah kamu kerjakan bisa ditukarkan ke setidaknya satu di antaranya. Sebelum ronde final, terjemahkan tiga cerita terbaikmu ke mata uang mereka: “dashboard itu” menjadi “visibilitas yang memangkas kerugian akibat stok kosong”; “migrasi itu” menjadi “menghilangkan satu-satunya titik kegagalan kami”. Kebenaran yang sama, dalam denominasi eksekutif."
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
        "id": "Eksekutif merekrut juga untuk posisi setelah posisi ini. Tunjukkan arah: kemampuan yang sengaja sedang kamu bangun, dan bagaimana posisi ini memperkuatnya. Bukan ambisi jabatan — melainkan busur kemampuan. “Saya sedang membangun otot untuk memimpin lewat orang lain; cakupan lintas tim di posisi ini persis tempat latihannya” memberi tahu mereka bahwa dirimu di tahun ketiga layak ditunggu."
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
         "id": "Dihilangkan atau dihindari"
        }
       },
       {
        "h": {
         "en": "Risk",
         "id": "Risiko"
        },
        "sub": {
         "en": "Reduced or contained",
         "id": "Dikurangi atau dikendalikan"
        }
       },
       {
        "h": {
         "en": "Capability",
         "id": "Kemampuan"
        },
        "sub": {
         "en": "Built and kept",
         "id": "Dibangun dan dipertahankan"
        }
       }
      ],
      "note": {
       "en": "Every project you have done cashes into at least one. Translate your three best stories before the final round.",
       "id": "Setiap proyek yang pernah kamu kerjakan bisa ditukarkan ke setidaknya satu di antaranya. Terjemahkan tiga cerita terbaikmu sebelum ronde final."
      },
      "exhibit": {
       "en": "Exhibit 12: The four executive currencies",
       "id": "Peraga 12: Empat mata uang eksekutif"
      },
      "longdesc": {
       "en": "Diagram of The four executive currencies. It presents, in order: Revenue — Made or protected; Cost — Removed or avoided; Risk — Reduced or contained; Capability — Built and kept.",
       "id": "Diagram empat mata uang eksekutif. Menyajikan, secara berurutan: Pendapatan — dihasilkan atau dijaga; Biaya — dihilangkan atau dihindari; Risiko — dikurangi atau dikendalikan; Kemampuan — dibangun dan dipertahankan."
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
        "id": "“Ceritakan proyek terbesar Anda.” (ronde final)"
       },
       "weak": {
        "en": "It started in March when we got the requirements, then we set up the database, then we built the API, then the frontend, then we tested it, and then we launched in October after some delays.",
        "id": "Proyeknya dimulai bulan Maret waktu kami menerima kebutuhannya, lalu kami menyiapkan database, lalu membangun API, lalu frontend, lalu kami uji, dan akhirnya rilis bulan Oktober setelah beberapa kali tertunda."
       },
       "strong": {
        "en": "We cut order-processing cost by 18% in six months — that project. The two decisions that mattered: killing a legacy integration everyone was afraid to touch, and phasing the rollout by region so risk stayed contained. Happy to go into either.",
        "id": "Kami memangkas biaya pemrosesan pesanan 18% dalam enam bulan — itu proyeknya. Dua keputusan yang menentukan: mematikan integrasi lama yang semua orang takut menyentuhnya, dan merilis bertahap per wilayah supaya risikonya tetap terkendali. Dengan senang hati saya perdalam salah satunya."
       },
       "why": {
        "en": "Executives buy consequences first. The strong version leads with the number, offers the decisions, and hands them control of the depth.",
        "id": "Eksekutif membeli akibatnya lebih dulu. Versi yang kuat membuka dengan angka, menawarkan keputusan-keputusannya, dan menyerahkan kendali atas kedalaman kepada mereka."
       }
      }
     ],
     "tryit": {
      "qid": "cl06",
      "label": {
       "en": "Compress your case to two sentences",
       "id": "Padatkan argumenmu menjadi dua kalimat"
      },
      "desc": {
       "en": "The executive summary of you — need-match plus expected result. Then stop.",
       "id": "Ringkasan eksekutif tentang dirimu — kecocokan dengan kebutuhan mereka plus hasil yang bisa diharapkan. Lalu berhenti."
      }
     },
     "scenario": {
      "icon": "flag",
      "img": "../../assets/bg/for-enterprise-image.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat dalam Sorotan"
      },
      "body": [
       {
        "en": "Rani's final round is with a country manager who gives her twenty-five minutes between board meetings. Her prepared chronology of the warehouse project would take six. Instead she opens: “We cut fulfilment cost eighteen percent in six months — and the two decisions that mattered were killing a legacy integration and phasing rollout by region. Where would you like me to go deeper?” The executive picks one, they spend twenty minutes in real conversation, and Rani leaves having been interviewed like a peer.",
        "id": "Ronde final Rani adalah dengan seorang country manager yang memberinya dua puluh lima menit di sela rapat direksi. Kronologi proyek gudang yang sudah ia siapkan butuh enam menit. Alih-alih itu, ia membuka: “Kami memangkas biaya fulfilment delapan belas persen dalam enam bulan — dan dua keputusan yang menentukan adalah mematikan integrasi lama dan merilis bertahap per wilayah. Bagian mana yang ingin Bapak perdalam?” Sang eksekutif memilih satu, mereka menghabiskan dua puluh menit dalam percakapan yang sungguhan, dan Rani pulang setelah diwawancarai layaknya rekan sejawat."
       }
      ]
     }
    },
    {
     "n": "6.2",
     "title": {
      "en": "Strategic-Level Questions and Framing",
      "id": "Pertanyaan Level Strategis dan Cara Membingkainya"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "“Where should we take this product?” “What would you change about our business?” Strategic questions in finals are not requests for a consulting deck — they test whether you can reason about the company from the outside with humility and structure. This lesson gives the framing pattern.",
      "id": "“Ke mana produk ini sebaiknya kita bawa?” “Apa yang akan Anda ubah dari bisnis kami?” Pertanyaan strategis di ronde final bukan permintaan untuk membuat dek konsultan — pertanyaan itu menguji apakah kamu bisa bernalar tentang perusahaan dari luar, dengan rendah hati dan terstruktur. Pelajaran ini memberimu pola pembingkaiannya."
     },
     "objectives": [
      {
       "en": "Structure a strategic answer: observation → options → recommendation → humility.",
       "id": "Menyusun jawaban strategis: observasi → pilihan → rekomendasi → kerendahan hati."
      },
      {
       "en": "Ground strategy answers in public, verifiable observations.",
       "id": "Mendasarkan jawaban strategis pada observasi publik yang bisa diverifikasi."
      },
      {
       "en": "Disagree with a company decision respectfully when invited to.",
       "id": "Menyatakan ketidaksetujuan terhadap keputusan perusahaan dengan hormat, ketika memang diundang untuk itu."
      }
     ],
     "takeaways": [
      {
       "en": "Observation first: earn the right to an opinion by showing you did the reading.",
       "id": "Observasi dulu: dapatkan hak untuk beropini dengan menunjukkan bahwa kamu sudah membaca."
      },
      {
       "en": "Offer options before a recommendation — strategy is choosing, and choosing needs choices.",
       "id": "Tawarkan pilihan sebelum rekomendasi — strategi adalah memilih, dan memilih butuh pilihan."
      },
      {
       "en": "End with calibrated humility: “from the outside” is a phrase that buys credibility, not weakness.",
       "id": "Tutup dengan kerendahan hati yang terukur: “dari luar” adalah frasa yang membeli kredibilitas, bukan kelemahan."
      }
     ],
     "check": {
      "q": {
       "en": "Asked “what would you change about our product?”, you should open with:",
       "id": "Ditanya “apa yang akan Anda ubah dari produk kami?”, kamu sebaiknya membuka dengan:"
      },
      "options": [
       {
        "en": "A specific observation from actually using or studying the product",
        "id": "Observasi spesifik dari benar-benar memakai atau mempelajari produknya"
       },
       {
        "en": "A disclaimer that you cannot possibly know",
        "id": "Penafian bahwa kamu tidak mungkin tahu"
       },
       {
        "en": "Your boldest idea, delivered with total confidence",
        "id": "Ide paling beranimu, disampaikan dengan keyakinan penuh"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — evidence of homework earns the opinion. Boldness without observation is noise; disclaimers without content are worse.",
       "id": "Benar — bukti bahwa kamu sudah riset membeli hak untuk beropini. Keberanian tanpa observasi adalah derau; penafian tanpa isi lebih buruk lagi."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The framing pattern",
        "id": "Pola pembingkaiannya"
       },
       "body": {
        "en": "Observation: “Using the product, I noticed onboarding takes four screens before value appears.” Options: “You could shorten it, delay account creation, or show value first.” Recommendation with reasons: “I'd test value-first — competitors converted me that way.” Humility: “though you'll have data I can't see from outside.” Four beats, two minutes, senior sound.",
        "id": "Observasi: “Waktu memakai produknya, saya perhatikan onboarding butuh empat layar sebelum nilainya muncul.” Pilihan: “Bisa dipersingkat, pembuatan akun ditunda, atau nilainya ditunjukkan lebih dulu.” Rekomendasi dengan alasan: “Saya akan menguji opsi nilai-lebih-dulu — pesaing berhasil meyakinkan saya dengan cara itu.” Kerendahan hati: “meskipun Anda pasti punya data yang tidak terlihat dari luar.” Empat ketukan, dua menit, terdengar senior."
       }
      },
      {
       "h": {
        "en": "Doing the reading",
        "id": "Mengerjakan PR-nya"
       },
       "body": {
        "en": "Strategic credibility is bought before the interview: use the product, read the annual report or public interviews, know the two or three visible strategic bets. You need one genuine observation per bet — not a full analysis. The candidate who says “I noticed you launched X; my read is you're playing for Y” has already separated from the field.",
        "id": "Kredibilitas strategis dibeli sebelum wawancara: pakai produknya, baca laporan tahunan atau wawancara publik mereka, kenali dua atau tiga taruhan strategis yang terlihat. Kamu butuh satu observasi yang tulus untuk setiap taruhan — bukan analisis lengkap. Kandidat yang berkata “saya lihat Anda meluncurkan X; bacaan saya, Anda sedang bermain untuk Y” sudah memisahkan diri dari kerumunan."
       }
      },
      {
       "h": {
        "en": "Disagreeing when invited",
        "id": "Tidak setuju, ketika diundang"
       },
       "body": {
        "en": "Sometimes the executive states a position and watches: will you fold, flatter, or think? Disagree the professional way — acknowledge the reasoning, add the consideration you would weigh, propose how to test the difference. You are demonstrating what disagreeing with you in a meeting will feel like. Make it feel like progress.",
        "id": "Kadang eksekutif menyatakan sebuah posisi, lalu mengamati: apakah kamu akan mengalah, menjilat, atau berpikir? Sampaikan ketidaksetujuan dengan cara yang profesional — akui penalarannya, tambahkan pertimbangan yang akan kamu timbang, usulkan cara menguji perbedaannya. Kamu sedang memperagakan seperti apa rasanya berbeda pendapat denganmu di dalam rapat. Buat rasanya seperti kemajuan."
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
         "id": "Hal yang benar yang kamu perhatikan — bukti kamu sudah riset"
        }
       },
       {
        "h": {
         "en": "Options",
         "id": "Pilihan"
        },
        "sub": {
         "en": "Two or three real paths",
         "id": "Dua atau tiga jalur yang nyata"
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
         "id": "“…meskipun Anda punya data yang tidak terlihat dari luar”"
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
       "id": "Diagram jawaban strategis, dibingkai. Menyajikan, secara berurutan: Observasi — hal yang benar yang kamu perhatikan, bukti kamu sudah riset; Pilihan — dua atau tiga jalur yang nyata; Rekomendasi — satu pilihan, dengan alasan; Kerendahan hati — “…meskipun Anda punya data yang tidak terlihat dari luar”."
      }
     },
     "tryit": {
      "qid": "cs03",
      "label": {
       "en": "Frame a market-entry answer",
       "id": "Bingkai jawaban tentang masuk pasar"
      },
      "desc": {
       "en": "Structure the launch decision out loud — criteria before answer.",
       "id": "Susun keputusan peluncurannya dengan suara keras — kriteria dulu, baru jawaban."
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
        "id": "Minggu-minggu pertama yang terstruktur di posisi baru — mempelajari sistem, orang-orang, dan proses yang sesungguhnya."
       }
      }
     ]
    },
    {
     "n": "6.3",
     "title": {
      "en": "Handling Stress-Test and Skeptical Interviewers",
      "id": "Menghadapi Uji Tekanan dan Pewawancara yang Skeptis"
     },
     "kind": "interactive",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Some finals include deliberate pressure: interrupted answers, challenged claims, “I'm not convinced.” The test is not the content — it is your composure and your relationship to pushback. This lesson installs the curious-not-defensive response and drills the three most common stress moves.",
      "id": "Sebagian ronde final memuat tekanan yang disengaja: jawaban dipotong, klaim ditantang, “saya belum yakin.” Yang diuji bukan isinya — melainkan ketenanganmu dan caramu berhubungan dengan tekanan balik. Pelajaran ini memasang respons “ingin tahu, bukan defensif” dan melatih tiga gerakan tekanan yang paling umum."
     },
     "objectives": [
      {
       "en": "Recognise deliberate stress-testing versus genuine disagreement.",
       "id": "Membedakan uji tekanan yang disengaja dari ketidaksetujuan yang sungguhan."
      },
      {
       "en": "Respond to challenges with curiosity instead of defence or collapse.",
       "id": "Merespons tantangan dengan rasa ingin tahu, bukan dengan pembelaan diri atau menyerah."
      },
      {
       "en": "Hold a position under pressure while staying genuinely open.",
       "id": "Mempertahankan posisi di bawah tekanan sambil tetap terbuka dengan tulus."
      }
     ],
     "takeaways": [
      {
       "en": "The stress-test scores your composure, not your comeback.",
       "id": "Uji tekanan menilai ketenanganmu, bukan balasan tajammu."
      },
      {
       "en": "Curiosity is the counter: “what makes you read it differently?” disarms almost everything.",
       "id": "Rasa ingin tahu adalah penawarnya: “apa yang membuat Anda membacanya berbeda?” melucuti hampir segalanya."
      },
      {
       "en": "Neither instant fold nor blind digging-in — update with reasons or hold with reasons.",
       "id": "Bukan langsung mengalah, bukan pula ngotot membabi buta — perbarui pendapatmu dengan alasan, atau pertahankan dengan alasan."
      }
     ],
     "check": {
      "q": {
       "en": "The interviewer says flatly: “I don't think that project was as impressive as you're presenting it.” Best response:",
       "id": "Pewawancara berkata datar: “Menurut saya proyek itu tidak sehebat yang Anda gambarkan.” Respons terbaik:"
      },
      "options": [
       {
        "en": "Restate the achievement more forcefully",
        "id": "Menyatakan ulang pencapaiannya dengan lebih keras"
       },
       {
        "en": "Stay level: ask what specifically reads as weak, then address exactly that with facts",
        "id": "Tetap tenang: tanyakan bagian mana persisnya yang terbaca lemah, lalu jawab persis itu dengan fakta"
       },
       {
        "en": "Concede immediately to avoid conflict",
        "id": "Langsung mengalah demi menghindari konflik"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — composure plus curiosity plus targeted evidence. Folding fails the test; volume fails it differently.",
       "id": "Benar — ketenangan plus rasa ingin tahu plus bukti yang tepat sasaran. Mengalah gagal dalam ujian ini; menaikkan volume gagal dengan cara yang lain."
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
        "id": "Posisi yang berhadapan dengan klien, dewan direksi, atau krisis membutuhkan orang yang tetap berfungsi saat ditantang. Uji tekanan yang disengaja adalah simulasi murah dari situasi itu. Mengenalinya sebagai simulasi sudah separuh kemenangan: tantangannya hanya properti panggung, fisiologimulah ujiannya. Perlambat bicaramu sepuluh persen, dan ruangan akan membaca ketenangan."
       }
      },
      {
       "h": {
        "en": "The curious counter",
        "id": "Penawar bernama rasa ingin tahu"
       },
       "body": {
        "en": "Defence escalates; collapse disqualifies; curiosity converts. “Interesting — which part reads as overstated to you?” does three things: buys composure time, extracts the real objection, and models how you handle challenge at work. Then answer the specific objection with specific evidence, and check: “does that address it?”",
        "id": "Membela diri memanaskan suasana; menyerah menggugurkanmu; rasa ingin tahu membalikkan keadaan. “Menarik — bagian mana yang menurut Anda terasa berlebihan?” melakukan tiga hal sekaligus: membeli waktu untuk menenangkan diri, mengeluarkan keberatan yang sebenarnya, dan memperagakan cara kamu menghadapi tantangan di tempat kerja. Lalu jawab keberatan spesifik itu dengan bukti spesifik, dan pastikan: “apakah itu sudah menjawabnya?”"
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 · The interruption",
        "id": "Latihan 1 · Dipotong di tengah jalan"
       },
       "body": {
        "en": "Mid-story, the interviewer cuts in: “Skip to the end — what was the result?” Practise the pivot sentence you would use, out loud.",
        "id": "Di tengah cerita, pewawancara memotong: “Langsung ke akhirnya saja — apa hasilnya?” Latih kalimat peralihan yang akan kamu pakai, dengan suara keras."
       },
       "debrief": {
        "en": "Right move: give the result instantly, cleanly, without visible offence — “Result: 30% faster onboarding. The two decisions that got us there, if useful: …” Interruptions test flexibility; treat them as navigation, not disrespect.",
        "id": "Langkah yang tepat: berikan hasilnya seketika, bersih, tanpa terlihat tersinggung — “Hasilnya: onboarding 30% lebih cepat. Dua keputusan yang membawa kami ke sana, kalau berguna: …” Interupsi menguji kelenturan; perlakukan sebagai navigasi, bukan penghinaan."
       }
      },
      {
       "h": {
        "en": "Drill 2 · The challenged claim",
        "id": "Latihan 2 · Klaim yang ditantang"
       },
       "body": {
        "en": "“Anyone could have done that project.” Draft your level response using the curious counter, then the evidence.",
        "id": "“Siapa pun bisa mengerjakan proyek itu.” Susun respons tenangmu dengan penawar rasa ingin tahu, lalu buktinya."
       },
       "debrief": {
        "en": "Model: “Fair challenge. The part that wasn't obvious: three teams had tried and stalled on the data access problem. What unlocked it was the agreement I negotiated with legal — that piece was mine.” Specific non-obviousness, owned quietly. No heat required.",
        "id": "Contoh: “Tantangan yang wajar. Bagian yang tidak terlihat dari luar: tiga tim sudah mencoba dan macet di masalah akses data. Yang membukanya adalah kesepakatan yang saya negosiasikan dengan tim legal — bagian itu milik saya.” Hal yang tidak jelas dari luar, disebut secara spesifik, diakui dengan tenang. Tidak perlu memanas."
       }
      },
      {
       "h": {
        "en": "Drill 3 · The flat “not convinced”",
        "id": "Latihan 3 · “Belum yakin” yang datar"
       },
       "body": {
        "en": "You finish your positioning and the interviewer says only: “I'm not convinced you're ready for this level.” Write your first two sentences.",
        "id": "Kamu baru menutup positioning-mu, dan pewawancara hanya berkata: “Saya belum yakin Anda siap untuk level ini.” Tulis dua kalimat pertamamu."
       },
       "debrief": {
        "en": "Two-sentence shape: “That's a fair thing to test — which dimension concerns you most?” then meet the named dimension with your strongest specific evidence. If they refuse to name one, offer your own honest read of your readiness edge and your plan for it. Composure, specificity, no begging.",
        "id": "Bentuk dua kalimatnya: “Itu wajar untuk diuji — dimensi mana yang paling Anda khawatirkan?” lalu jawab dimensi yang disebut dengan bukti spesifik terkuatmu. Kalau mereka menolak menyebutkan satu pun, tawarkan bacaan jujurmu sendiri tentang batas kesiapanmu dan rencanamu untuk mengejarnya. Tenang, spesifik, tanpa memohon."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "“I'm not convinced.” — fold vs curiosity",
        "id": "“Saya belum yakin.” — mengalah vs ingin tahu"
       },
       "weak": {
        "en": "Oh… okay, yes, you're probably right, maybe it wasn't that impressive. I just meant it was important to me personally.",
        "id": "Oh… baik, ya, Bapak mungkin benar, mungkin memang tidak sehebat itu. Maksud saya, proyek itu penting bagi saya pribadi."
       },
       "strong": {
        "en": "Fair challenge — which part reads as overstated to you? … The piece that wasn't visible from outside: three teams had tried and stalled on data access. What unlocked it was the agreement I negotiated with legal. That part was mine. Does that address it?",
        "id": "Tantangan yang wajar — bagian mana yang menurut Bapak berlebihan? … Bagian yang tidak terlihat dari luar: tiga tim sudah mencoba dan macet di akses data. Yang membukanya adalah kesepakatan yang saya negosiasikan dengan tim legal. Bagian itu milik saya. Apakah itu sudah menjawabnya?"
       },
       "why": {
        "en": "Folding fails the composure test; volume fails it differently. Curiosity extracts the objection, then meets it with specific, quiet evidence.",
        "id": "Mengalah gagal dalam ujian ketenangan; menaikkan volume gagal dengan cara yang lain. Rasa ingin tahu mengeluarkan keberatannya, lalu menjawabnya dengan bukti spesifik yang disampaikan dengan tenang."
       }
      }
     ],
     "listen": [
      {
       "label": {
        "en": "The curious counter, in a level voice",
        "id": "Penawar rasa ingin tahu, dengan nada suara yang tenang"
       },
       "text": {
        "en": "That's interesting — which part reads as overstated to you? I'd rather address the exact concern than repeat myself.",
        "id": "Menarik — bagian mana yang menurut Anda berlebihan? Saya lebih suka menjawab kekhawatiran yang persis daripada mengulang-ulang."
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
       "id": "“Anda punya satu menit. Yakinkan saya.” — perlambat, daratkan tiga ketukan, berhenti lebih awal."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Folding at the first pushback",
         "id": "Mengalah pada tekanan pertama"
        },
        "fix": {
         "en": "Stay level and get curious: “which part reads as overstated to you?” — then answer that, specifically.",
         "id": "Tetap tenang dan jadilah ingin tahu: “bagian mana yang menurut Anda berlebihan?” — lalu jawab persis itu, secara spesifik."
        }
       },
       {
        "h": {
         "en": "Raising your volume with your defence",
         "id": "Menaikkan volume bersama pembelaan diri"
        },
        "fix": {
         "en": "Slow your speech ten percent instead. The challenge is a prop; your physiology is the exam.",
         "id": "Justru perlambat bicaramu sepuluh persen. Tantangannya hanya properti panggung; fisiologimulah ujiannya."
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
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ]
    },
    {
     "n": "6.4",
     "title": {
      "en": "The Power of Asking Great Questions",
      "id": "Kekuatan Mengajukan Pertanyaan yang Hebat"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "At senior rounds, your questions carry as much signal as your answers. A question portfolio — standard-of-excellence, reality-check, growth, and strategy questions, matched to the stage — closes every interview with the impression of someone who thinks in systems and chooses employers deliberately.",
      "id": "Di ronde senior, pertanyaanmu membawa sinyal sebesar jawabanmu. Sebuah portofolio pertanyaan — tentang standar keunggulan, cek realitas, pertumbuhan, dan strategi, disesuaikan dengan tahapnya — menutup setiap wawancara dengan kesan seseorang yang berpikir dalam sistem dan memilih tempat bekerja dengan sengaja."
     },
     "objectives": [
      {
       "en": "Build a question portfolio across the four archetypes.",
       "id": "Membangun portofolio pertanyaan dari empat jenis."
      },
      {
       "en": "Match question depth to the interviewer's seniority.",
       "id": "Menyesuaikan kedalaman pertanyaan dengan level pewawancara."
      },
      {
       "en": "Use their answers as real data for your own decision.",
       "id": "Memakai jawaban mereka sebagai data sungguhan untuk keputusanmu sendiri."
      }
     ],
     "takeaways": [
      {
       "en": "Questions are scored: they reveal what you think about when no one assigns you a task.",
       "id": "Pertanyaan itu dinilai: ia mengungkap apa yang kamu pikirkan ketika tidak ada yang memberimu tugas."
      },
      {
       "en": "Ask executives about direction and standards; ask peers about Tuesdays.",
       "id": "Tanyakan arah dan standar kepada eksekutif; tanyakan hari Selasa kepada calon rekan setim."
      },
      {
       "en": "Their hesitations answering are data about the company — collect it.",
       "id": "Keraguan mereka saat menjawab adalah data tentang perusahaan — kumpulkan."
      }
     ],
     "check": {
      "q": {
       "en": "The strongest final-round question of these is:",
       "id": "Pertanyaan ronde final yang paling kuat di antara ini adalah:"
      },
      "options": [
       {
        "en": "“How many vacation days do I get?”",
        "id": "“Berapa hari cuti yang saya dapat?”"
       },
       {
        "en": "“Can you describe the company culture?”",
        "id": "“Bisa ceritakan budaya perusahaannya?”"
       },
       {
        "en": "“What has to be true in a year for this hire to have been a great decision?”",
        "id": "“Apa yang harus terjadi dalam setahun supaya perekrutan ini terbukti sebagai keputusan yang hebat?”"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — it makes the executive define success concretely, shows outcome thinking, and gives you the real job description.",
       "id": "Benar — pertanyaan itu membuat eksekutif mendefinisikan sukses secara konkret, memperlihatkan cara berpikir yang berorientasi hasil, dan memberimu deskripsi pekerjaan yang sebenarnya."
      }
     },
     "sections": [
      {
       "h": {
        "en": "The four archetypes",
        "id": "Empat jenisnya"
       },
       "body": {
        "en": "Standard: “what separates good from great in this role?” Reality: “what is the hardest part nobody writes in the JD?” Growth: “how have people grown out of this role?” Strategy, for finals: “what has to be true in a year for this hire to be a great decision?” Two per interview, chosen for the room. Logistics questions go to the recruiter, never to the executive.",
        "id": "Standar: “apa yang membedakan yang baik dari yang hebat di posisi ini?” Realitas: “apa bagian tersulit yang tidak pernah ditulis di deskripsi lowongan?” Pertumbuhan: “bagaimana orang-orang sebelumnya bertumbuh dari posisi ini?” Strategi, untuk ronde final: “apa yang harus terjadi dalam setahun supaya perekrutan ini menjadi keputusan yang hebat?” Dua pertanyaan per wawancara, dipilih sesuai ruangannya. Pertanyaan logistik ditujukan ke perekrut, jangan pernah ke eksekutif."
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
        "id": "Pertanyaan yang hebat sia-sia di tangan kandidat yang tidak mendengarkan. Kalau “seperti apa sukses itu” dijawab dengan kabur, posisinya belum terdefinisi — perhitungkan risiko itu. Kalau “bagian tersulit” dijawab dengan “tidak ada, sih” yang mencurigakan, tambahkan skeptisisme. Kamu sedang menjalankan evaluasimu sendiri; jawaban mereka, dan seberapa nyaman mereka menjawab, adalah rubrikmu."
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
         "id": "Apa yang membedakan yang baik dari yang hebat di sini?"
        }
       },
       {
        "h": {
         "en": "Reality",
         "id": "Realitas"
        },
        "sub": {
         "en": "The hardest part the JD doesn't say?",
         "id": "Bagian tersulit yang tidak ditulis di deskripsi lowongan?"
        }
       },
       {
        "h": {
         "en": "Growth",
         "id": "Pertumbuhan"
        },
        "sub": {
         "en": "How have people grown out of this role?",
         "id": "Bagaimana orang-orang bertumbuh dari posisi ini?"
        }
       },
       {
        "h": {
         "en": "Strategy",
         "id": "Strategi"
        },
        "sub": {
         "en": "What must be true in a year for this hire to be great?",
         "id": "Apa yang harus terjadi dalam setahun supaya perekrutan ini hebat?"
        }
       }
      ],
      "note": {
       "en": "Two per interview, chosen for the room. Logistics questions go to the recruiter — never to the executive.",
       "id": "Dua per wawancara, dipilih sesuai ruangannya. Pertanyaan logistik ditujukan ke perekrut — jangan pernah ke eksekutif."
      },
      "exhibit": {
       "en": "Exhibit 14: The question portfolio",
       "id": "Peraga 14: Portofolio pertanyaan"
      },
      "longdesc": {
       "en": "Diagram of The question portfolio. It presents, in order: Standard — What separates good from great here?; Reality — The hardest part the JD doesn't say?; Growth — How have people grown out of this role?; Strategy — What must be true in a year for this hire to be great?.",
       "id": "Diagram portofolio pertanyaan. Menyajikan, secara berurutan: Standar — apa yang membedakan yang baik dari yang hebat di sini?; Realitas — bagian tersulit yang tidak ditulis di deskripsi lowongan?; Pertumbuhan — bagaimana orang-orang bertumbuh dari posisi ini?; Strategi — apa yang harus terjadi dalam setahun supaya perekrutan ini hebat?"
      }
     },
     "tryit": {
      "qid": "cl05",
      "label": {
       "en": "Ask for what you need — well",
       "id": "Minta apa yang kamu butuhkan — dengan cara yang baik"
      },
      "desc": {
       "en": "“What would you need from us in your first month?” — real asks, not “nothing”.",
       "id": "“Apa yang Anda butuhkan dari kami di bulan pertama?” — permintaan yang sungguhan, bukan “tidak ada”."
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
        "id": "Standar tertulis yang dipakai untuk menilai sebuah jawaban — kriterianya, plus seperti apa wujud setiap tingkat kualitas."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-06-final-interview.jpg",
   "heroPos": "center 30%"
  },
  {
   "num": 7,
   "title": {
    "en": "Live Interview Simulation",
    "id": "Simulasi Wawancara Langsung"
   },
   "overview": {
    "en": "Everything before this was the strategy; this is the gym. Module 7 is the application layer of The Rope: the solo drill protocol, the AI Interview Simulator — a realistic interviewer that asks, listens, follows up and debriefs you on your device — the peer mock framework, and the 10-day sprint plan. Confidence is not assumed here. It is built through practice.",
    "id": "Semua yang sebelum ini adalah strateginya; inilah tempat latihannya. Modul 7 adalah lapisan penerapan The Rope: protokol latihan mandiri, Simulator Wawancara AI — pewawancara realistis yang bertanya, mendengarkan, mengajukan pertanyaan lanjutan, dan memberimu debrief di perangkatmu sendiri — kerangka mock interview bersama teman, dan rencana sprint 10 hari. Percaya diri tidak dianggap sudah ada di sini. Ia dibangun lewat latihan."
   },
   "outcome": {
    "en": "By the end of this module you have completed real simulated interviews with objective debriefs, know your measured weaknesses, and own a repeatable practice loop: prepare, perform, review, repeat.",
    "id": "Di akhir modul ini, kamu sudah menyelesaikan wawancara simulasi yang sungguhan dengan debrief yang objektif, mengetahui kelemahanmu yang terukur, dan memiliki putaran latihan yang bisa diulang: persiapan, tampil, tinjau, ulangi."
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
      "id": "Pelatih wawancara termurah adalah rekamanmu sendiri. Latihan mandiri: satu pertanyaan, batas dua menit, direkam; lalu tinjau transkripnya dengan rubrik yang sama seperti yang dipakai simulator — struktur, bukti, penyampaian; lalu dua percobaan lagi. Tiga siklus mengubah jawaban yang goyah menjadi jawaban yang mendarat."
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
       "id": "Melacak perbedaan yang terukur antara satu percobaan dan percobaan berikutnya."
      }
     ],
     "takeaways": [
      {
       "en": "The recording never flatters — which is exactly why it works.",
       "id": "Rekaman tidak pernah menyanjung — justru karena itulah ia bekerja."
      },
      {
       "en": "Review with the rubric, not with your mood: words, STAR beats, numbers, fillers.",
       "id": "Tinjau dengan rubrik, bukan dengan suasana hati: jumlah kata, ketukan STAR, angka, kata pengisi."
      },
      {
       "en": "Three attempts per question is the deliberate-practice dose — more repeats the mistake, fewer skips the gain.",
       "id": "Tiga percobaan per pertanyaan adalah dosis latihan yang terarah — lebih dari itu mengulang kesalahan, kurang dari itu melewatkan kemajuannya."
      }
     ],
     "check": {
      "q": {
       "en": "The core of the solo drill is:",
       "id": "Inti dari latihan mandiri adalah:"
      },
      "options": [
       {
        "en": "Recording an answer, reviewing it objectively, and retrying immediately",
        "id": "Merekam jawaban, meninjaunya secara objektif, dan langsung mencoba lagi"
       },
       {
        "en": "Reading model answers until they feel familiar",
        "id": "Membaca contoh jawaban sampai terasa akrab"
       },
       {
        "en": "Practising in front of a mirror for confidence",
        "id": "Berlatih di depan cermin supaya percaya diri"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — the loop is record, review with a rubric, retry. Objective feedback plus immediate repetition is what builds fluency.",
       "id": "Benar — putarannya adalah rekam, tinjau dengan rubrik, ulangi. Umpan balik yang objektif plus pengulangan segera itulah yang membangun kelancaran."
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
        "id": "Cermin memperlihatkanmu sedang tampil; rekaman memperlihatkanmu sebagaimana pewawancara mengalamimu. Jaraknya selalu merendahkan hati: kata pengisi yang tidak pernah kamu sadari, cerita yang butuh sembilan puluh detik untuk sampai ke intinya, penutup yang menghilang begitu saja. Semua itu bisa diperbaiki dalam hitungan menit — tetapi hanya setelah terlihat. Latihan ini ada untuk membuatmu melihat."
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
        "id": "Struktur: apakah konteksnya hanya satu kalimat? Apakah kata kerja tindakan pertama datang lebih awal? Apakah jawabannya mendarat pada hasil? Bukti: adakah angka, nama, artefak yang konkret? Penyampaian: hitung kata pengisinya, periksa panjangnya — enam puluh sampai dua ratus kata. Beri nilai dengan jujur, pilih satu celah terbesar, dan perbaiki hanya itu di percobaan berikutnya. Satu perbaikan per siklus; begitulah perbedaannya tetap terlihat."
       },
       "icon": "book"
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Cycle 1 · Baseline",
        "id": "Siklus 1 · Titik awal"
       },
       "body": {
        "en": "Pick one question you fear from the bank. Record your answer — phone voice memo or the simulator — with a hard two-minute cap. Do not restart, whatever happens.",
        "id": "Pilih satu pertanyaan dari bank yang paling kamu takuti. Rekam jawabanmu — memo suara di ponsel atau simulator — dengan batas keras dua menit. Jangan mengulang dari awal, apa pun yang terjadi."
       },
       "debrief": {
        "en": "The ugly first take is the point: it is your honest baseline, and every improvement is measured against it. Professionals keep bad first takes; amateurs delete them and lose the evidence of growth.",
        "id": "Rekaman pertama yang buruk justru intinya: itulah titik awalmu yang jujur, dan setiap perbaikan diukur terhadapnya. Profesional menyimpan rekaman pertama yang jelek; amatir menghapusnya dan kehilangan bukti pertumbuhan."
       }
      },
      {
       "h": {
        "en": "Cycle 2 · One fix",
        "id": "Siklus 2 · Satu perbaikan"
       },
       "body": {
        "en": "Review with the rubric. Name the one biggest gap out loud — “my action came too late” — and re-record fixing only that.",
        "id": "Tinjau dengan rubrik. Sebutkan satu celah terbesar dengan suara keras — “tindakan saya datang terlalu lambat” — lalu rekam ulang dengan memperbaiki hanya itu."
       },
       "debrief": {
        "en": "Single-focus retries improve faster than fix-everything retries, which usually degrade under cognitive load. If the fix held, cycle 3 targets the next gap; if it did not, cycle 3 repeats this one. Patience here is speed later.",
        "id": "Pengulangan dengan satu fokus membaik lebih cepat daripada pengulangan yang memperbaiki semuanya sekaligus, yang biasanya justru memburuk karena beban pikiran. Kalau perbaikannya bertahan, siklus 3 membidik celah berikutnya; kalau tidak, siklus 3 mengulang yang ini. Sabar di sini berarti cepat nantinya."
       }
      },
      {
       "h": {
        "en": "Cycle 3 · Pressure",
        "id": "Siklus 3 · Tekanan"
       },
       "body": {
        "en": "Third take: add pressure. Stand up, add a timer you can see, or have someone watch. Same question, same fix, harder conditions.",
        "id": "Rekaman ketiga: tambahkan tekanan. Berdiri, pasang pewaktu yang bisa kamu lihat, atau minta seseorang menonton. Pertanyaan yang sama, perbaikan yang sama, kondisi yang lebih berat."
       },
       "debrief": {
        "en": "Skills that only work in comfort are not yet skills. If the answer held its structure under mild pressure, it is ready for the simulator's live mode — and after that, for the room. Log your three attempts; the visible delta is your confidence, earned.",
        "id": "Keterampilan yang hanya bekerja dalam keadaan nyaman belum bisa disebut keterampilan. Kalau jawabanmu tetap mempertahankan strukturnya di bawah tekanan ringan, ia siap untuk mode langsung di simulator — dan setelah itu, untuk ruangan yang sesungguhnya. Catat ketiga percobaanmu; perbedaan yang terlihat adalah kepercayaan dirimu, yang kamu peroleh dengan usaha."
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
         "id": "Rubrik, bukan suasana hati: STAR, angka, kata pengisi, panjang"
        }
       },
       {
        "h": {
         "en": "Retry",
         "id": "Ulangi"
        },
        "sub": {
         "en": "One fix per cycle — then add pressure",
         "id": "Satu perbaikan per siklus — lalu tambahkan tekanan"
        }
       }
      ],
      "note": {
       "en": "Three cycles per question is the deliberate-practice dose. The visible delta is your confidence, earned.",
       "id": "Tiga siklus per pertanyaan adalah dosis latihan yang terarah. Perbedaan yang terlihat adalah kepercayaan dirimu, yang kamu peroleh dengan usaha."
      },
      "exhibit": {
       "en": "Exhibit 15: The solo drill cycle",
       "id": "Peraga 15: Siklus latihan mandiri"
      },
      "longdesc": {
       "en": "Diagram of The solo drill cycle. It presents, in order: Record — One question, two-minute cap, no restarts; Review — Rubric, not mood: STAR, numbers, fillers, length; Retry — One fix per cycle — then add pressure.",
       "id": "Diagram siklus latihan mandiri. Menyajikan, secara berurutan: Rekam — satu pertanyaan, batas dua menit, tanpa mengulang; Tinjau — rubrik, bukan suasana hati: STAR, angka, kata pengisi, panjang; Ulangi — satu perbaikan per siklus, lalu tambahkan tekanan."
      }
     },
     "tryit": {
      "qid": "bh03",
      "label": {
       "en": "Run cycle one on the failure question",
       "id": "Jalankan siklus satu untuk pertanyaan tentang kegagalan"
      },
      "desc": {
       "en": "Record your failure story now — baseline first, polish after.",
       "id": "Rekam cerita kegagalanmu sekarang — titik awal dulu, poles kemudian."
      }
     },
     "scenario": {
      "icon": "target",
      "img": "../../assets/bg/rope-team.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat dalam Sorotan"
      },
      "body": [
       {
        "en": "Tono has read every lesson twice. He can recite STAR-L in his sleep. Then he records himself answering one question — and hears eleven “ums,” a ninety-second wind-up before his first action verb, and an ending that just… stops. Reading about interviewing and performing an interview, it turns out, are different sports. This module is the gym where the second one is trained.",
        "id": "Tono sudah membaca setiap pelajaran dua kali. Ia bisa melafalkan STAR-L sambil tidur. Lalu ia merekam dirinya menjawab satu pertanyaan — dan mendengar sebelas “emm”, pengantar sembilan puluh detik sebelum kata kerja tindakan pertamanya muncul, dan penutup yang… berhenti begitu saja. Membaca tentang wawancara dan benar-benar tampil di wawancara, ternyata, adalah dua cabang olahraga yang berbeda. Modul ini adalah tempat latihan untuk cabang yang kedua."
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
        "id": "Standar tertulis yang dipakai untuk menilai sebuah jawaban — kriterianya, plus seperti apa wujud setiap tingkat kualitas."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ]
    },
    {
     "n": "7.2",
     "title": {
      "en": "AI-Powered Mock Interview Practice",
      "id": "Latihan Mock Interview Berbasis AI"
     },
     "kind": "interactive",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The AI Interview Simulator is the centrepiece of Module 7: configure one job and one goal, then face an interviewer that asks from a live question bank, listens to what you actually said, follows up on the weaknesses in your answer, and debriefs you across content, structure and communication — entirely on your device. This lesson explains the system, then hands you to it.",
      "id": "Simulator Wawancara AI adalah pusat dari Modul 7: tentukan satu pekerjaan dan satu tujuan, lalu hadapi pewawancara yang bertanya dari bank pertanyaan yang hidup, mendengarkan apa yang benar-benar kamu ucapkan, mengejar kelemahan dalam jawabanmu, dan memberimu debrief tentang isi, struktur, dan komunikasi — sepenuhnya di perangkatmu. Pelajaran ini menjelaskan sistemnya, lalu mengantarmu kepadanya."
     },
     "objectives": [
      {
       "en": "Configure a personalised simulation: role, industry, stage, difficulty, JD and CV.",
       "id": "Mengatur simulasi yang personal: posisi, industri, tahap, tingkat kesulitan, deskripsi lowongan, dan CV."
      },
      {
       "en": "Complete a full session in practice mode, then in live mode.",
       "id": "Menyelesaikan satu sesi penuh dalam mode latihan, lalu dalam mode langsung."
      },
      {
       "en": "Read the debrief and convert it into your next session's focus.",
       "id": "Membaca debrief-nya dan mengubahnya menjadi fokus sesi berikutnya."
      }
     ],
     "takeaways": [
      {
       "en": "The simulator adapts to your actual answers: too short, no metric, we-not-I — each triggers its own follow-up.",
       "id": "Simulator menyesuaikan diri dengan jawabanmu yang sebenarnya: terlalu singkat, tanpa angka, “kami” bukan “saya” — masing-masing memicu pertanyaan lanjutannya sendiri."
      },
      {
       "en": "Upload your CV and the simulator probes your own claims — the exact thing real interviewers do.",
       "id": "Unggah CV-mu, dan simulator akan menguji klaimmu sendiri — persis seperti yang dilakukan pewawancara sungguhan."
      },
      {
       "en": "Everything runs on your device; voice and video never leave your browser.",
       "id": "Semuanya berjalan di perangkatmu; suara dan video tidak pernah meninggalkan browser-mu."
      }
     ],
     "check": {
      "q": {
       "en": "The simulator's debrief is honest because:",
       "id": "Debrief dari simulator ini jujur karena:"
      },
      "options": [
       {
        "en": "It compares you against other users' answers",
        "id": "Ia membandingkanmu dengan jawaban pengguna lain"
       },
       {
        "en": "It is a transparent rule-based reading of your transcript, computed on your device",
        "id": "Ia membaca transkripmu dengan aturan yang transparan, dan dihitung di perangkatmu"
       },
       {
        "en": "It always gives an encouraging score",
        "id": "Ia selalu memberi skor yang menyemangati"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — the rubric is visible and deterministic: STAR beats, numbers, fillers, length, pace. No black box, no invented body-language scores.",
       "id": "Benar — rubriknya terlihat dan pasti: ketukan STAR, angka, kata pengisi, panjang, tempo. Tidak ada kotak hitam, tidak ada skor bahasa tubuh yang dikarang."
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
        "id": "Simulasi tanpa target tidak mengukur apa-apa. Pengaturannya menanyakan posisi, industri, level, tahap, tingkat kesulitan, dan durasi — plus deskripsi lowongan dan CV-mu kalau ada. Persyaratan yang tertulis di deskripsi lowongan menjadi pertanyaan; klaim di CV-mu menjadi bahan penggalian. Wawancara yang mengikuti adalah tentang pencalonanmu, bukan naskah generik."
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
        "id": "Mode latihan menampilkan catatan arahan sebelum setiap jawaban — perancah selagi kamu memasang teknik-tekniknya. Mode langsung tidak menampilkannya: hanya pertanyaan, pertanyaan lanjutan, pewaktu, dan kalau mau, kameramu sendiri. Jalankan mode latihan sampai arahannya tidak lagi mengejutkanmu, lalu pindah ke mode langsung. Perpindahan itulah momen ketika teknik menjadi kebiasaan."
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
        "id": "Setelah setiap sesi: skor per dimensi, kekuatan dan kelemahan per pertanyaan beserta perubahan konkretnya, pola yang berulang, perbandingan antarpercobaan, dan — kalau kameramu menyala — rekamanmu sendiri untuk meninjau kehadiranmu dengan jujur. Panel penutupnya menyebutkan dimensi terlemahmu dan mengatur sesi berikutnya untuk melatihnya. Penutupan putaran itulah yang membedakan sistem latihan dari mainan."
       },
       "icon": "target"
      }
     ],
     "tool": {
      "id": "simulator",
      "mode": "home",
      "title": {
       "en": "Launch the AI Interview Simulator",
       "id": "Jalankan Simulator Wawancara AI"
      },
      "body": {
       "en": "Your question bank, your role, your CV, your debrief — the full prepare → perform → review → repeat loop starts here.",
       "id": "Bank pertanyaanmu, posisimu, CV-mu, debrief-mu — putaran lengkap persiapan → tampil → tinjau → ulangi dimulai di sini."
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
         "id": "Satu pekerjaan, satu tujuan, deskripsi lowongan + CV sudah dimuat"
        }
       },
       {
        "h": {
         "en": "Perform",
         "id": "Tampil"
        },
        "sub": {
         "en": "Video, voice or text — under realistic pressure",
         "id": "Video, suara, atau teks — di bawah tekanan yang realistis"
        }
       },
       {
        "h": {
         "en": "Review",
         "id": "Tinjau"
        },
        "sub": {
         "en": "Transparent debrief on your own transcript",
         "id": "Debrief yang transparan atas transkripmu sendiri"
        }
       },
       {
        "h": {
         "en": "Improve",
         "id": "Perbaiki"
        },
        "sub": {
         "en": "Weakness → targeted lessons and drills",
         "id": "Kelemahan → pelajaran dan latihan yang tepat sasaran"
        }
       },
       {
        "h": {
         "en": "Repeat",
         "id": "Ulangi"
        },
        "sub": {
         "en": "Progressively harder rounds",
         "id": "Ronde yang makin lama makin sulit"
        }
       }
      ],
      "note": {
       "en": "A mock interview is an event. This is a training system — the difference is the loop.",
       "id": "Mock interview adalah sebuah peristiwa. Ini adalah sistem latihan — bedanya ada pada putarannya."
      },
      "exhibit": {
       "en": "Exhibit 16: The loop this module installs",
       "id": "Peraga 16: Putaran yang dipasang modul ini"
      },
      "longdesc": {
       "en": "Diagram of The loop this module installs. It presents, in order: Prepare — One job, one goal, JD + CV loaded; Perform — Video, voice or text — under realistic pressure; Review — Transparent debrief on your own transcript; Improve — Weakness → targeted lessons and drills; Repeat — Progressively harder rounds.",
       "id": "Diagram putaran yang dipasang modul ini. Menyajikan, secara berurutan: Persiapan — satu pekerjaan, satu tujuan, deskripsi lowongan + CV sudah dimuat; Tampil — video, suara, atau teks, di bawah tekanan yang realistis; Tinjau — debrief yang transparan atas transkripmu sendiri; Perbaiki — kelemahan → pelajaran dan latihan yang tepat sasaran; Ulangi — ronde yang makin lama makin sulit."
      }
     },
     "checks": [
      {
       "q": {
        "en": "What turns a practice session into deliberate practice?",
        "id": "Apa yang mengubah sesi latihan biasa menjadi latihan yang terarah?"
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
         "id": "Merekam dengan kualitas video yang lebih tinggi"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — repetition alone plateaus. Feedback that redirects the next repetition is what compounds.",
        "id": "Benar — pengulangan saja akan mentok. Umpan balik yang mengarahkan ulang pengulangan berikutnya itulah yang menumpuk menjadi kemajuan."
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
        "id": "Pertanyaan penggali setelah jawabanmu — tempat klaim yang dibesar-besarkan runtuh, dan kedalaman yang jujur mendapat nilai."
       }
      }
     ]
    },
    {
     "n": "7.3",
     "title": {
      "en": "The Peer Mock Interview Framework",
      "id": "Kerangka Mock Interview Bersama Teman"
     },
     "kind": "interactive",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The simulator measures; a human adds what machines honestly cannot — the social pressure of real eyes. The peer mock framework structures a practice interview between two people: roles, a question script, an observer rubric, and an evidence-based debrief. Basecamp exists for exactly this exchange.",
      "id": "Simulator mengukur; manusia menambahkan apa yang sejujurnya tidak bisa diberikan mesin — tekanan sosial dari tatapan mata sungguhan. Kerangka mock bersama teman menyusun wawancara latihan antara dua orang: peran, naskah pertanyaan, rubrik pengamat, dan debrief berbasis bukti. Basecamp ada persis untuk pertukaran seperti ini."
     },
     "objectives": [
      {
       "en": "Run a structured peer mock as interviewer and as candidate.",
       "id": "Menjalankan mock interview terstruktur bersama teman, sebagai pewawancara maupun sebagai kandidat."
      },
      {
       "en": "Use the observer rubric to give evidence-based feedback.",
       "id": "Memakai rubrik pengamat untuk memberi umpan balik berbasis bukti."
      },
      {
       "en": "Debrief without flattery and without cruelty.",
       "id": "Melakukan debrief tanpa sanjungan dan tanpa kekejaman."
      }
     ],
     "takeaways": [
      {
       "en": "Playing the interviewer teaches you more than playing the candidate — you feel what scores.",
       "id": "Berperan sebagai pewawancara mengajarimu lebih banyak daripada berperan sebagai kandidat — kamu merasakan sendiri apa yang layak dinilai."
      },
      {
       "en": "Feedback must quote: “at minute two you said X” beats “you were a bit unclear”.",
       "id": "Umpan balik harus mengutip: “di menit kedua kamu bilang X” mengalahkan “kamu agak kurang jelas”."
      },
      {
       "en": "Swap roles every session; the rope holds because both ends practise.",
       "id": "Bertukar peran di setiap sesi; tali bertahan karena kedua ujungnya berlatih."
      }
     ],
     "check": {
      "q": {
       "en": "Useful peer feedback sounds like:",
       "id": "Umpan balik dari teman yang berguna berbunyi seperti:"
      },
      "options": [
       {
        "en": "“That was great, you're definitely ready.”",
        "id": "“Tadi bagus banget, kamu pasti sudah siap.”"
       },
       {
        "en": "“You need more confidence.”",
        "id": "“Kamu perlu lebih percaya diri.”"
       },
       {
        "en": "“Your answer ran 3 minutes and the result only arrived in the last sentence — try leading with it.”",
        "id": "“Jawabanmu 3 menit, dan hasilnya baru muncul di kalimat terakhir — coba buka dengan hasilnya.”"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — quoted evidence plus a concrete change. Encouragement without evidence and adjectives without examples both change nothing.",
       "id": "Benar — bukti yang dikutip plus satu perubahan konkret. Semangat tanpa bukti dan kata sifat tanpa contoh sama-sama tidak mengubah apa pun."
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
        "id": "Dua orang, empat puluh lima menit: lima menit untuk mengatur (posisi, tahap, enam pertanyaan dari bank), dua puluh menit wawancara, sepuluh menit debrief, lalu bertukar peran kalau waktunya masih cukup. Pewawancara berpegang pada naskah plus pertanyaan lanjutan yang alami; rubrik pengamat — struktur, bukti, penyampaian, kehadiran — diisi selama wawancara berlangsung, bukan setelahnya, lengkap dengan kutipan dan penanda waktu."
       }
      },
      {
       "h": {
        "en": "Debrief discipline",
        "id": "Disiplin debrief"
       },
       "body": {
        "en": "Format: two strengths with quotes, two weaknesses with quotes, one change to try immediately — then a five-minute retry of the weakest answer. Skip the compliment sandwich; respectful directness with evidence is kinder than comfortable vagueness, because it is the only kind that changes the next interview.",
        "id": "Formatnya: dua kekuatan dengan kutipan, dua kelemahan dengan kutipan, satu perubahan untuk langsung dicoba — lalu lima menit mengulang jawaban yang paling lemah. Lewati “roti lapis” pujian; keterusterangan yang hormat dan berbukti lebih baik daripada kekaburan yang nyaman, karena hanya itu yang mengubah wawancara berikutnya."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Step 1 · Configure together",
        "id": "Langkah 1 · Atur bersama"
       },
       "body": {
        "en": "Agree the candidate's real target role and stage. Pull six questions from the simulator's bank for that configuration — include one difficult-case question the candidate actually fears.",
        "id": "Sepakati posisi dan tahap wawancara yang benar-benar sedang dituju kandidat. Ambil enam pertanyaan dari bank simulator untuk konfigurasi itu — sertakan satu pertanyaan kasus sulit yang benar-benar ditakuti kandidat."
       },
       "debrief": {
        "en": "Practising the feared question with a friendly human first is graduated exposure — the healthy kind. By the third repetition the fear is a procedure. That is the entire psychology of this module in one step.",
        "id": "Melatih pertanyaan yang ditakuti bersama manusia yang ramah lebih dulu adalah paparan bertahap — jenis yang sehat. Pada pengulangan ketiga, ketakutan itu sudah menjadi prosedur. Itulah seluruh psikologi modul ini, dalam satu langkah."
       }
      },
      {
       "h": {
        "en": "Step 2 · Hold the frame",
        "id": "Langkah 2 · Jaga bingkainya"
       },
       "body": {
        "en": "Interviewer: stay in character for the full twenty minutes — no coaching mid-interview, no breaking to chat. Follow up when answers are vague, exactly as the simulator does.",
        "id": "Pewawancara: tetap dalam peran selama dua puluh menit penuh — tidak ada arahan di tengah wawancara, tidak ada jeda untuk mengobrol. Ajukan pertanyaan lanjutan ketika jawabannya kabur, persis seperti yang dilakukan simulator."
       },
       "debrief": {
        "en": "The value of a peer mock is proportional to how seriously the frame is held. Every break in character releases the pressure that the candidate came to practise under. Kindness here means staying in role.",
        "id": "Nilai mock bersama teman sebanding dengan seberapa serius bingkainya dijaga. Setiap kali keluar dari peran, tekanan yang justru ingin dilatih kandidat ikut lepas. Berbaik hati di sini berarti tetap dalam peran."
       }
      },
      {
       "h": {
        "en": "Step 3 · Evidence debrief + retry",
        "id": "Langkah 3 · Debrief berbukti + ulangi"
       },
       "body": {
        "en": "Deliver the debrief in the strict format: 2 strengths, 2 weaknesses, 1 change — all with quotes. Then re-run the weakest question immediately.",
        "id": "Sampaikan debrief dalam format yang ketat: 2 kekuatan, 2 kelemahan, 1 perubahan — semuanya dengan kutipan. Lalu langsung ulangi pertanyaan yang paling lemah."
       },
       "debrief": {
        "en": "The immediate retry is where the session pays out: the feedback is still warm, the stakes are still low, and the improvement is instantly visible to both of you. End every peer mock with a retry — never with only talk.",
        "id": "Pengulangan segera adalah saat sesi ini membuahkan hasil: umpan baliknya masih hangat, taruhannya masih rendah, dan perbaikannya langsung terlihat oleh kalian berdua. Akhiri setiap mock bersama teman dengan pengulangan — jangan pernah hanya dengan obrolan."
       }
      }
     ],
     "diagram": {
      "type": "timeline",
      "title": {
       "en": "The 45-minute peer mock",
       "id": "Mock interview 45 menit bersama teman"
      },
      "items": [
       {
        "h": {
         "en": "0–5 min",
         "id": "Menit 0–5"
        },
        "sub": {
         "en": "Configure: role, stage, six bank questions",
         "id": "Atur: posisi, tahap, enam pertanyaan dari bank"
        }
       },
       {
        "h": {
         "en": "5–25 min",
         "id": "Menit 5–25"
        },
        "sub": {
         "en": "Interview — frame held, no coaching",
         "id": "Wawancara — bingkai dijaga, tanpa arahan"
        }
       },
       {
        "h": {
         "en": "25–35 min",
         "id": "Menit 25–35"
        },
        "sub": {
         "en": "Debrief: 2 strengths, 2 weaknesses, 1 change — with quotes",
         "id": "Debrief: 2 kekuatan, 2 kelemahan, 1 perubahan — dengan kutipan"
        }
       },
       {
        "h": {
         "en": "35–40 min",
         "id": "Menit 35–40"
        },
        "sub": {
         "en": "Immediate retry of the weakest answer",
         "id": "Langsung ulangi jawaban yang paling lemah"
        }
       },
       {
        "h": {
         "en": "40–45 min",
         "id": "Menit 40–45"
        },
        "sub": {
         "en": "Swap roles or book the next session",
         "id": "Bertukar peran, atau jadwalkan sesi berikutnya"
        }
       }
      ],
      "note": {
       "en": "End every peer mock with a retry — never with only talk.",
       "id": "Akhiri setiap mock bersama teman dengan pengulangan — jangan pernah hanya dengan obrolan."
      },
      "exhibit": {
       "en": "Exhibit 17: The 45-minute peer mock",
       "id": "Peraga 17: Mock interview 45 menit bersama teman"
      },
      "longdesc": {
       "en": "Diagram of The 45-minute peer mock. It presents, in order: 0–5 min — Configure: role, stage, six bank questions; 5–25 min — Interview — frame held, no coaching; 25–35 min — Debrief: 2 strengths, 2 weaknesses, 1 change — with quotes; 35–40 min — Immediate retry of the weakest answer; 40–45 min — Swap roles or book the next session.",
       "id": "Diagram mock interview 45 menit bersama teman. Menyajikan, secara berurutan: menit 0–5 — atur: posisi, tahap, enam pertanyaan dari bank; menit 5–25 — wawancara, bingkai dijaga, tanpa arahan; menit 25–35 — debrief: 2 kekuatan, 2 kelemahan, 1 perubahan, dengan kutipan; menit 35–40 — langsung ulangi jawaban yang paling lemah; menit 40–45 — bertukar peran, atau jadwalkan sesi berikutnya."
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
         "id": "Kamu merasakan dari dalam apa yang layak dinilai — jawaban yang kabur jadi terdengar"
        },
        {
         "en": "It doesn't — only answering practice helps",
         "id": "Tidak memperbaiki — hanya latihan menjawab yang membantu"
        },
        {
         "en": "Because you memorise more questions",
         "id": "Karena kamu menghafal lebih banyak pertanyaan"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — an hour in the interviewer's chair recalibrates your ear. You stop tolerating your own vague answers.",
        "id": "Benar — satu jam di kursi pewawancara mengalibrasi ulang telingamu. Kamu berhenti menoleransi jawaban kaburmu sendiri."
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
        "id": "Rapat setelah seluruh rangkaian wawancara, tempat para pewawancara menggabungkan catatan dan memperdebatkan keputusan rekrutmen — tanpa kamu di ruangan."
       }
      },
      {
       "term": {
        "en": "rubric",
        "id": "rubrik"
       },
       "def": {
        "en": "The written standard an answer is scored against — criteria plus what each level of quality looks like.",
        "id": "Standar tertulis yang dipakai untuk menilai sebuah jawaban — kriterianya, plus seperti apa wujud setiap tingkat kualitas."
       }
      },
      {
       "term": {
        "en": "follow-up",
        "id": "pertanyaan lanjutan"
       },
       "def": {
        "en": "The probing question after your answer — where inflated claims collapse and honest depth scores.",
        "id": "Pertanyaan penggali setelah jawabanmu — tempat klaim yang dibesar-besarkan runtuh, dan kedalaman yang jujur mendapat nilai."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ]
    },
    {
     "n": "7.4",
     "title": {
      "en": "The 10-Day Pre-Interview Sprint Plan",
      "id": "Rencana Sprint 10 Hari Menjelang Wawancara"
     },
     "kind": "reading",
     "dur": {
      "en": "10 min",
      "id": "10 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "An interview date concentrates the mind. This is the ten-day protocol from invitation to interview morning — research, story calibration, simulations, difficult-case drilling, logistics, and the final checklist. And if you have days, not weeks: the fast-track version lives one click away in the simulator.",
      "id": "Tanggal wawancara memusatkan pikiran. Inilah protokol sepuluh hari dari undangan sampai pagi hari wawancara — riset, kalibrasi cerita, simulasi, latihan kasus sulit, logistik, dan daftar periksa terakhir. Dan kalau waktumu hitungan hari, bukan minggu: versi jalur cepatnya tersedia satu klik saja di dalam simulator."
     },
     "objectives": [
      {
       "en": "Run the 10-day sprint structure for a real interview.",
       "id": "Menjalankan struktur sprint 10 hari untuk wawancara sungguhan."
      },
      {
       "en": "Allocate simulation sessions across the sprint deliberately.",
       "id": "Mengalokasikan sesi simulasi di sepanjang sprint dengan sengaja."
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
       "id": "24 jam terakhir untuk logistik dan tidur, bukan untuk materi baru."
      },
      {
       "en": "Hours, not days? Use the simulator's Fast-Track — priorities, JD analysis, and one sprint session.",
       "id": "Waktumu hitungan jam, bukan hari? Pakai Jalur Cepat di simulator — prioritas, analisis deskripsi lowongan, dan satu sesi sprint."
      }
     ],
     "check": {
      "q": {
       "en": "The night before the interview you should:",
       "id": "Malam sebelum wawancara, kamu sebaiknya:"
      },
      "options": [
       {
        "en": "Confirm logistics, re-read your positioning once, and sleep",
        "id": "Memastikan logistik, membaca ulang positioning-mu satu kali, lalu tidur"
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
       "id": "Benar — performa bertumpu pada istirahat. Materi baru dalam 24 jam terakhir menambah kecemasan, bukan kemampuan."
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
        "id": "Uraikan deskripsi lowongan menjadi peta kompetensinya (pelajaran 3.3). Baca kerangka nilai yang diterbitkan perusahaan, produknya, dan langkah-langkah terbarunya. Susun tabel persyaratan → bukti. Atur simulator dengan posisi, tahap, deskripsi lowongan, dan CV-mu — jalankan satu sesi mode latihan sebagai titik awal, dan catat dimensi yang paling lemah."
       }
      },
      {
       "h": {
        "en": "Days 7–4 · Answers",
        "id": "Hari 7–4 · Jawaban"
       },
       "body": {
        "en": "Polish the story matrix for this role: workhorse stories at three altitudes, your difficult case in one calm breath, the positioning statement tailored. One simulator session daily, alternating focus on your measured weaknesses. Day 5: a peer mock if you can get one — Basecamp is where you find the peer.",
        "id": "Poles matriks cerita untuk posisi ini: cerita andalan pada tiga ketinggian, kasus sulitmu dalam satu tarikan napas yang tenang, positioning statement yang sudah disesuaikan. Satu sesi simulator setiap hari, bergantian fokus pada kelemahan-kelemahanmu yang terukur. Hari ke-5: mock interview bersama teman kalau bisa — Basecamp adalah tempat menemukan temannya."
       }
      },
      {
       "h": {
        "en": "Days 3–1 · Performance",
        "id": "Hari 3–1 · Performa"
       },
       "body": {
        "en": "Switch to live mode with camera on. Full-length sessions at the real stage and difficulty. Review recordings for presence honestly. Day 1: logistics — route or link tested, outfit ready, questions-to-ask written, positioning read aloud once. Then stop. Sleep is preparation; anxiety rehearsal is not.",
        "id": "Beralih ke mode langsung dengan kamera menyala. Sesi berdurasi penuh, pada tahap dan tingkat kesulitan yang sebenarnya. Tinjau rekamanmu untuk menilai kehadiran dengan jujur. H-1: logistik — rute atau tautan sudah diuji, pakaian siap, daftar pertanyaan sudah ditulis, positioning dibaca dengan suara keras satu kali. Lalu berhenti. Tidur adalah persiapan; melatih kecemasan bukan."
       }
      },
      {
       "h": {
        "en": "Interview morning",
        "id": "Pagi hari wawancara"
       },
       "body": {
        "en": "Eat. Arrive or log in ten minutes early. Read your one-line positioning and your three questions — nothing else. Two slow breaths before the door. You have practised more than nearly every other candidate walking in today; walk in like it.",
        "id": "Sarapan. Tiba atau masuk sepuluh menit lebih awal. Baca positioning satu kalimatmu dan tiga pertanyaanmu — tidak ada yang lain. Dua tarikan napas pelan sebelum pintu. Kamu sudah berlatih lebih banyak daripada hampir semua kandidat lain yang masuk hari ini; masuklah dengan sikap seperti itu."
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
         "id": "Intelijen: uraikan deskripsi lowongan, kerangka nilai, tabel bukti, sesi titik awal"
        }
       },
       {
        "h": {
         "en": "Days 7–4",
         "id": "Hari 7–4"
        },
        "sub": {
         "en": "Answers: story matrix, difficult case, one session daily",
         "id": "Jawaban: matriks cerita, kasus sulit, satu sesi setiap hari"
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
         "id": "Pagi hari-H"
        },
        "sub": {
         "en": "Eat, arrive early, one read of your positioning, two slow breaths",
         "id": "Sarapan, datang lebih awal, baca positioning satu kali, dua tarikan napas pelan"
        }
       }
      ],
      "note": {
       "en": "Hours, not days? The simulator's Fast-Track compresses this into one evening.",
       "id": "Waktumu hitungan jam, bukan hari? Jalur Cepat di simulator memadatkan semua ini menjadi satu malam."
      },
      "exhibit": {
       "en": "Exhibit 18: Ten days, three phases",
       "id": "Peraga 18: Sepuluh hari, tiga fase"
      },
      "longdesc": {
       "en": "Diagram of Ten days, three phases. It presents, in order: Days 10–8 — Intelligence: JD decode, frameworks, evidence table, baseline session; Days 7–4 — Answers: story matrix, difficult case, one session daily; Days 3–1 — Performance: live mode, camera on, then logistics and sleep; Morning — Eat, arrive early, one read of your positioning, two slow breaths.",
       "id": "Diagram sepuluh hari, tiga fase. Menyajikan, secara berurutan: Hari 10–8 — intelijen: uraikan deskripsi lowongan, kerangka nilai, tabel bukti, sesi titik awal; Hari 7–4 — jawaban: matriks cerita, kasus sulit, satu sesi setiap hari; Hari 3–1 — performa: mode langsung, kamera menyala, lalu logistik dan tidur; Pagi hari-H — sarapan, datang lebih awal, baca positioning satu kali, dua tarikan napas pelan."
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
       "id": "“Mengapa kami harus merekrut Anda?” — penutup tiga kalimat, dilatih sampai terasa membosankan."
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
        "id": "Kemampuan yang dituntut sebuah posisi — kepemimpinan, menentukan prioritas, pertimbangan — yang digali wawancara lewat bukti perilaku."
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
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Cramming new material the night before",
         "id": "Melahap materi baru pada malam sebelumnya"
        },
        "fix": {
         "en": "The last 24 hours are for logistics and sleep. New material adds anxiety, not capability.",
         "id": "24 jam terakhir untuk logistik dan tidur. Materi baru menambah kecemasan, bukan kemampuan."
        }
       },
       {
        "h": {
         "en": "Practising silently by re-reading",
         "id": "Berlatih dalam diam dengan membaca ulang"
        },
        "fix": {
         "en": "One 4-question simulation with a debrief beats four more hours of reading — run it.",
         "id": "Satu simulasi 4 pertanyaan dengan debrief mengalahkan empat jam tambahan membaca — jalankan."
        }
       }
      ]
     }
    }
   ],
   "hero": "../../assets/m/02-prep.jpg",
   "heroPos": "center 40%"
  },
  {
   "num": 8,
   "title": {
    "en": "Offer Evaluation &amp; Negotiation",
    "id": "Evaluasi Tawaran &amp; Negosiasi"
   },
   "overview": {
    "en": "The climb is not over at “we'd like to make you an offer”. This module covers the anatomy of total compensation, the research method that turns a guess into a range, the negotiation conversation itself — timing, anchoring, and non-salary levers — and the red flags to catch in an offer letter before you sign it.",
    "id": "Pendakian belum selesai pada kalimat “kami ingin memberi Anda tawaran”. Modul ini membahas anatomi kompensasi total, metode riset yang mengubah tebakan menjadi rentang, percakapan negosiasinya sendiri — waktu, patokan, dan tuas-tuas di luar gaji — serta tanda bahaya yang harus kamu tangkap di surat tawaran sebelum menandatanganinya."
   },
   "outcome": {
    "en": "By the end of this module you can evaluate an offer on total value, negotiate it professionally with researched anchors, and sign only what is actually written down.",
    "id": "Di akhir modul ini, kamu bisa mengevaluasi sebuah tawaran berdasarkan nilai totalnya, menegosiasikannya secara profesional dengan patokan hasil riset, dan menandatangani hanya apa yang benar-benar tertulis."
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
      "id": "Gaji pokok hanyalah satu baris dari persamaan yang lebih panjang: bonus dan realisasinya yang sebenarnya, tunjangan, asuransi, iuran pensiun, cuti, anggaran belajar, peralatan — dan baris-baris yang tidak terlihat: jabatan, ruang lingkup, kualitas atasan, laju pertumbuhan. Dua tawaran dengan gaji pokok yang sama bisa berbeda nilai nyata sampai seperempatnya."
     },
     "objectives": [
      {
       "en": "Itemise an offer into its full compensation components.",
       "id": "Merinci sebuah tawaran menjadi komponen kompensasinya yang lengkap."
      },
      {
       "en": "Ask the questions that reveal a bonus's real value.",
       "id": "Mengajukan pertanyaan yang mengungkap nilai bonus yang sebenarnya."
      },
      {
       "en": "Weigh invisible compensation: scope, growth, manager, learning.",
       "id": "Menimbang kompensasi yang tidak terlihat: ruang lingkup, pertumbuhan, atasan, kesempatan belajar."
      }
     ],
     "takeaways": [
      {
       "en": "Compare offers on total annual value, not base salary.",
       "id": "Bandingkan tawaran berdasarkan nilai total per tahun, bukan gaji pokok."
      },
      {
       "en": "A “performance bonus” is worth its typical attainment, not its maximum — ask for the typical.",
       "id": "“Bonus kinerja” nilainya sebesar yang lazim benar-benar diterima, bukan maksimumnya — tanyakan angka yang lazim itu."
      },
      {
       "en": "Early career, growth rate often outvalues salary delta; price it deliberately.",
       "id": "Di awal karier, laju pertumbuhan sering lebih bernilai daripada selisih gaji; beri harga dengan sengaja."
      }
     ],
     "check": {
      "q": {
       "en": "An offer includes “up to 4 months bonus”. The right question is:",
       "id": "Sebuah tawaran mencantumkan “bonus hingga 4 bulan gaji”. Pertanyaan yang tepat:"
      },
      "options": [
       {
        "en": "Nothing — bonus terms are impolite to question",
        "id": "Tidak ada — menanyakan ketentuan bonus itu tidak sopan"
       },
       {
        "en": "“What did the typical person at this level actually receive last year?”",
        "id": "“Berapa yang benar-benar diterima orang di level ini pada umumnya tahun lalu?”"
       },
       {
        "en": "“Can you guarantee the maximum in writing?”",
        "id": "“Bisakah angka maksimumnya dijamin secara tertulis?”"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — “up to” is marketing; typical attainment is data. The question is normal and professionals ask it.",
       "id": "Benar — “hingga” adalah bahasa pemasaran; realisasi yang lazim adalah data. Pertanyaan itu wajar, dan para profesional menanyakannya."
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
        "id": "Daftar setiap komponen dengan angka tahunan: gaji pokok × 12 (atau × 13 kalau ada THR), bonus yang realistis, tunjangan transportasi dan makan, premi asuransi yang dibayar perusahaan, iuran pensiun, hari cuti berbayar dengan nilai hariannya, anggaran belajar, kebijakan perangkat kerja. Spreadsheet-nya hanya butuh dua puluh menit, dan sering kali membalikkan tawaran mana yang sebenarnya “lebih tinggi”."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "The invisible lines",
        "id": "Baris-baris yang tidak terlihat"
       },
       "body": {
        "en": "Scope: will you own something, or assist someone who does? Growth rate: what did the last person in this seat learn per year? Manager: a great one compounds your value for a decade. Brand and network: doors this name opens later. None of these appear in the letter; all of them appear in your career. Score them one to five, deliberately, next to the money.",
        "id": "Ruang lingkup: apakah kamu akan memegang sesuatu, atau membantu orang yang memegangnya? Laju pertumbuhan: apa yang dipelajari orang sebelumnya di kursi ini setiap tahun? Atasan: atasan yang hebat melipatgandakan nilaimu selama satu dekade. Nama besar dan jejaring: pintu-pintu yang dibukakan nama ini di kemudian hari. Tidak satu pun dari ini muncul di surat tawaran; semuanya muncul di kariermu. Beri skor satu sampai lima, dengan sengaja, di samping angka uangnya."
       },
       "icon": "book"
      }
     ],
     "diagram": {
      "type": "ring",
      "title": {
       "en": "Total compensation — the whole equation",
       "id": "Kompensasi total — persamaan yang utuh"
      },
      "items": [
       {
        "h": {
         "en": "Base salary",
         "id": "Gaji pokok"
        },
        "sub": {
         "en": "×12 or ×13 with the holiday allowance",
         "id": "×12, atau ×13 dengan THR"
        }
       },
       {
        "h": {
         "en": "Bonus",
         "id": "Bonus"
        },
        "sub": {
         "en": "Worth its TYPICAL attainment, not its maximum",
         "id": "Nilainya sebesar realisasi yang LAZIM, bukan maksimumnya"
        }
       },
       {
        "h": {
         "en": "Allowances & insurance",
         "id": "Tunjangan & asuransi"
        },
        "sub": {
         "en": "Transport, meals, premiums, retirement",
         "id": "Transportasi, makan, premi, pensiun"
        }
       },
       {
        "h": {
         "en": "Leave & learning",
         "id": "Cuti & belajar"
        },
        "sub": {
         "en": "Paid days, budget, equipment",
         "id": "Hari cuti berbayar, anggaran, peralatan"
        }
       },
       {
        "h": {
         "en": "Invisible lines",
         "id": "Baris yang tidak terlihat"
        },
        "sub": {
         "en": "Scope, growth rate, manager, network",
         "id": "Ruang lingkup, laju pertumbuhan, atasan, jejaring"
        }
       }
      ],
      "note": {
       "en": "Two offers with the same base can differ by a quarter of real value. Build the twenty-minute spreadsheet.",
       "id": "Dua tawaran dengan gaji pokok yang sama bisa berbeda nilai nyata sampai seperempatnya. Buat spreadsheet dua puluh menit itu."
      },
      "exhibit": {
       "en": "Exhibit 19: Total compensation — the whole equation",
       "id": "Peraga 19: Kompensasi total — persamaan yang utuh"
      },
      "longdesc": {
       "en": "Diagram of Total compensation — the whole equation. It presents, in order: Base salary — ×12 or ×13 with the holiday allowance; Bonus — Worth its TYPICAL attainment, not its maximum; Allowances & insurance — Transport, meals, premiums, retirement; Leave & learning — Paid days, budget, equipment; Invisible lines — Scope, growth rate, manager, network.",
       "id": "Diagram kompensasi total — persamaan yang utuh. Menyajikan, secara berurutan: Gaji pokok — ×12, atau ×13 dengan THR; Bonus — nilainya sebesar realisasi yang LAZIM, bukan maksimumnya; Tunjangan & asuransi — transportasi, makan, premi, pensiun; Cuti & belajar — hari cuti berbayar, anggaran, peralatan; Baris yang tidak terlihat — ruang lingkup, laju pertumbuhan, atasan, jejaring."
      }
     },
     "checks": [
      {
       "q": {
        "en": "Early in your career, the component that most often outvalues a salary delta is:",
        "id": "Di awal karier, komponen yang paling sering melampaui nilai selisih gaji adalah:"
       },
       "options": [
        {
         "en": "Growth rate — what the seat teaches per year",
         "id": "Laju pertumbuhan — apa yang diajarkan kursi itu setiap tahun"
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
        "id": "Benar — kemampuan bertumbuh berlipat selama puluhan tahun; selisih gaji yang kecil tidak. Beri harga pada pertumbuhan dengan sengaja."
       }
      }
     ],
     "scenario": {
      "icon": "book",
      "img": "../../assets/bg/stage-activation.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat dalam Sorotan"
      },
      "body": [
       {
        "en": "Lia holds two offers. Company A: base salary 8% higher. Company B: a thirteenth-month allowance, full family insurance, a named learning budget, and a manager whose last three analysts were promoted within two years. Her friends say “take A, it pays more.” Her spreadsheet — twenty minutes of honest arithmetic — says B is worth more this year, and far more in three. This module builds that spreadsheet with you.",
        "id": "Lia memegang dua tawaran. Perusahaan A: gaji pokok 8% lebih tinggi. Perusahaan B: THR, asuransi keluarga penuh, anggaran belajar yang jelas, dan seorang atasan yang tiga analis terakhirnya dipromosikan dalam dua tahun. Teman-temannya bilang, “ambil A, gajinya lebih besar.” Spreadsheet-nya — dua puluh menit hitungan yang jujur — mengatakan B lebih bernilai tahun ini, dan jauh lebih bernilai dalam tiga tahun. Modul ini menyusun spreadsheet itu bersamamu."
       }
      ]
     }
    },
    {
     "n": "8.2",
     "title": {
      "en": "Market Rate Research Methodology",
      "id": "Metode Riset Harga Pasar"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "“What are your salary expectations?” is only frightening without data. The research method triangulates three sources — published salary guides, job ads that state ranges, and real conversations with people near the role — into a defensible range you can say out loud without flinching.",
      "id": "“Berapa ekspektasi gaji Anda?” hanya menakutkan kalau kamu tidak punya data. Metode risetnya menyilangkan tiga sumber — panduan gaji yang diterbitkan, iklan lowongan yang mencantumkan rentang, dan percakapan sungguhan dengan orang-orang di sekitar posisi itu — menjadi rentang yang bisa dipertahankan dan kamu ucapkan tanpa ragu."
     },
     "objectives": [
      {
       "en": "Triangulate a salary range from three independent source types.",
       "id": "Menyilangkan rentang gaji dari tiga jenis sumber yang saling independen."
      },
      {
       "en": "Adjust for company stage, industry and your leverage honestly.",
       "id": "Menyesuaikannya dengan tahap perusahaan, industri, dan daya tawarmu secara jujur."
      },
      {
       "en": "Deliver the range with its reasoning in one practised sentence.",
       "id": "Menyampaikan rentang itu beserta alasannya dalam satu kalimat yang sudah dilatih."
      }
     ],
     "takeaways": [
      {
       "en": "One source is a guess; three sources agreeing is a range you can defend.",
       "id": "Satu sumber adalah tebakan; tiga sumber yang sepakat adalah rentang yang bisa kamu pertahankan."
      },
      {
       "en": "People share salary information more readily than folklore claims — ask for ranges, not numbers.",
       "id": "Orang lebih terbuka berbagi informasi gaji daripada yang dikira — mintalah rentang, bukan angka pribadi."
      },
      {
       "en": "State the range with its basis: “based on market data for this role and level…”",
       "id": "Sampaikan rentang beserta dasarnya: “berdasarkan data pasar untuk posisi dan level ini…”"
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
        "id": "Gaji sekarang ditambah persentase tetap"
       },
       {
        "en": "Three independent sources that roughly agree",
        "id": "Tiga sumber independen yang kurang lebih sepakat"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — triangulation. A single data point, especially your own history, anchors you to noise.",
       "id": "Benar — menyilangkan sumber. Satu titik data, apalagi riwayat gajimu sendiri, hanya menambatkanmu pada derau."
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
        "id": "Panduan gaji terbitan firma rekrutmen memberi kisaran lebar berdasarkan posisi, level, dan kota. Iklan lowongan yang mencantumkan rentang memberi gambaran pasar yang hidup — kumpulkan lima untuk posisi yang kamu tuju. Percakapan memberi kebenaran di balik keduanya: tanyai orang yang selangkah di depanmu, “untuk seseorang di level saya di perusahaan seperti ini, rentang berapa yang realistis?” Rentang, bukan angka pribadi — pertanyaan seperti itu dijawab orang."
       }
      },
      {
       "h": {
        "en": "Adjustments and honesty",
        "id": "Penyesuaian dan kejujuran"
       },
       "body": {
        "en": "Adjust for stage: startups pay differently from multinationals, and partly in learning and scope. Adjust for your leverage: competing offers move you up the band; urgency moves you down it. Then commit to a range whose bottom you would genuinely accept — a range you would refuse is a bluff, and module 5 already covered how bluffs end.",
        "id": "Sesuaikan dengan tahap perusahaan: startup membayar berbeda dari perusahaan multinasional, sebagian dalam bentuk kesempatan belajar dan ruang lingkup. Sesuaikan dengan daya tawarmu: tawaran dari perusahaan lain menaikkanmu di dalam kisaran; keterdesakan menurunkanmu. Lalu tetapkan rentang yang batas bawahnya benar-benar akan kamu terima — rentang yang akan kamu tolak sendiri adalah gertakan, dan Modul 5 sudah membahas bagaimana gertakan berakhir."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "Triangulating your range",
       "id": "Menyilangkan sumber untuk rentangmu"
      },
      "items": [
       {
        "h": {
         "en": "Salary guides",
         "id": "Panduan gaji"
        },
        "sub": {
         "en": "The wide band by role, level, city",
         "id": "Kisaran lebar berdasarkan posisi, level, kota"
        }
       },
       {
        "h": {
         "en": "Job ads with ranges",
         "id": "Iklan lowongan dengan rentang"
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
         "id": "Batas bawah yang benar-benar akan kamu terima"
        }
       }
      ],
      "note": {
       "en": "One source is a guess; three agreeing is a range you can say out loud without flinching.",
       "id": "Satu sumber adalah tebakan; tiga yang sepakat adalah rentang yang bisa kamu ucapkan tanpa ragu."
      },
      "exhibit": {
       "en": "Exhibit 20: Triangulating your range",
       "id": "Peraga 20: Menyilangkan sumber untuk rentangmu"
      },
      "longdesc": {
       "en": "Diagram of Triangulating your range. It presents, in order: Salary guides — The wide band by role, level, city; Job ads with ranges — The live market — collect five; Conversations — Ask for ranges, not personal numbers; Your range — Bottom you would genuinely accept.",
       "id": "Diagram menyilangkan sumber untuk rentangmu. Menyajikan, secara berurutan: Panduan gaji — kisaran lebar berdasarkan posisi, level, kota; Iklan lowongan dengan rentang — pasar yang hidup, kumpulkan lima; Percakapan — minta rentang, bukan angka pribadi; Rentangmu — batas bawah yang benar-benar akan kamu terima."
      }
     },
     "tryit": {
      "qid": "hr06",
      "label": {
       "en": "Deliver your range without flinching",
       "id": "Sampaikan rentangmu tanpa ragu"
      },
      "desc": {
       "en": "“What are your salary expectations?” — anchored, ranged, conditional.",
       "id": "“Berapa ekspektasi gaji Anda?” — berpatokan pada data, berupa rentang, bersyarat."
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
      "id": "Negosiasi adalah satu percakapan, biasanya kurang dari lima belas menit, yang bisa bernilai berbulan-bulan gaji — dan kebanyakan kandidat melewatkannya karena takut tawarannya lenyap. Itu hampir tidak pernah terjadi. Pelajaran ini memberimu waktunya, kerangka naskahnya, dan tuas-tuas di luar gaji, lalu melatih tiga momen yang paling sering membuat orang tergagap."
     },
     "objectives": [
      {
       "en": "Time the negotiation correctly: after the offer, before acceptance.",
       "id": "Menempatkan negosiasi pada waktu yang tepat: setelah tawaran, sebelum menerima."
      },
      {
       "en": "Run the appreciation → enthusiasm → ask → silence sequence.",
       "id": "Menjalankan urutan apresiasi → antusiasme → permintaan → diam."
      },
      {
       "en": "Deploy non-salary levers when the base is fixed.",
       "id": "Memakai tuas-tuas di luar gaji ketika gaji pokoknya tidak bisa bergerak."
      }
     ],
     "takeaways": [
      {
       "en": "Companies expect negotiation; a professional ask has never reasonably cancelled an offer.",
       "id": "Perusahaan memang mengharapkan negosiasi; permintaan yang profesional tidak pernah secara wajar membatalkan sebuah tawaran."
      },
      {
       "en": "Ask once, clearly, with your researched basis — then stop talking.",
       "id": "Minta sekali, dengan jelas, dengan dasar risetmu — lalu berhenti bicara."
      },
      {
       "en": "Start date, sign-on, learning budget, review timing, title: levers that move when salary cannot.",
       "id": "Tanggal mulai, bonus penandatanganan, anggaran belajar, waktu peninjauan gaji, jabatan: tuas-tuas yang bisa bergerak ketika gaji tidak bisa."
      }
     ],
     "check": {
      "q": {
       "en": "You receive an offer at the bottom of your researched range. Your move:",
       "id": "Kamu menerima tawaran di batas bawah rentang hasil risetmu. Langkahmu:"
      },
      "options": [
       {
        "en": "Thank them warmly, restate enthusiasm, present your range with its basis, ask, then be silent",
        "id": "Berterima kasih dengan hangat, tegaskan antusiasme, sampaikan rentangmu beserta dasarnya, minta, lalu diam"
       },
       {
        "en": "Accept immediately before they change their mind",
        "id": "Langsung terima sebelum mereka berubah pikiran"
       },
       {
        "en": "Decline to signal your market value",
        "id": "Tolak untuk menunjukkan nilai pasarmu"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — the four-beat script. The silence after the ask is where the movement happens; do not fill it.",
       "id": "Benar — naskah empat ketukan. Diam setelah permintaan adalah saat pergerakan terjadi; jangan mengisinya."
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
        "id": "Negosiasikan setelah tawaran tertulis ada dan sebelum kamu menerimanya — jangan pernah selama wawancara, jangan pernah setelah tanda tangan. Untuk percakapannya sendiri, telepon lebih baik daripada email; email dipakai untuk mengonfirmasi apa yang sudah disepakati. Kalau dimintai angka di awal proses, sampaikan rentang hasil risetmu dan lanjutkan; percakapan yang sesungguhnya terjadi ketika mereka sudah memilihmu."
       }
      },
      {
       "h": {
        "en": "The script skeleton",
        "id": "Kerangka naskahnya"
       },
       "body": {
        "en": "Appreciation: thank them, specifically. Enthusiasm: you want this role — say it, because it makes the ask collaborative, not adversarial. The ask: “based on my research for this role and level — X to Y — is there room to move the base toward Z?” Silence: the hardest beat. They speak next, whatever the pause costs you in heartbeats.",
        "id": "Apresiasi: ucapkan terima kasih, secara spesifik. Antusiasme: kamu menginginkan posisi ini — katakan, karena itu membuat permintaanmu terasa kolaboratif, bukan berhadap-hadapan. Permintaan: “berdasarkan riset saya untuk posisi dan level ini — X sampai Y — apakah ada ruang untuk menggerakkan gaji pokok mendekati Z?” Diam: ketukan yang paling sulit. Merekalah yang bicara berikutnya, berapa pun detak jantung yang harus kamu bayar untuk jeda itu."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 · Say the ask aloud",
        "id": "Latihan 1 · Ucapkan permintaannya dengan suara keras"
       },
       "body": {
        "en": "Write your ask sentence with your real range and basis, and say it aloud five times, ending in silence each time.",
        "id": "Tulis kalimat permintaanmu dengan rentang dan dasar yang sebenarnya, lalu ucapkan dengan suara keras lima kali, setiap kali diakhiri dengan diam."
       },
       "debrief": {
        "en": "The fifth repetition should sound boring — that is the target. Boring means the adrenaline has left the sentence, and what remains is a professional stating market data. That tone is what moves offers.",
        "id": "Pengulangan kelima seharusnya terdengar membosankan — itulah targetnya. Membosankan berarti adrenalin sudah meninggalkan kalimat itu, dan yang tersisa adalah seorang profesional yang menyampaikan data pasar. Nada seperti itulah yang menggerakkan tawaran."
       }
      },
      {
       "h": {
        "en": "Drill 2 · The “budget is fixed” pivot",
        "id": "Latihan 2 · Beralih saat “anggarannya sudah tetap”"
       },
       "body": {
        "en": "They respond: “the base is fixed for this level.” Draft your next sentence using two non-salary levers.",
        "id": "Mereka menjawab: “gaji pokok untuk level ini sudah tetap.” Susun kalimat berikutmu dengan memakai dua tuas di luar gaji."
       },
       "debrief": {
        "en": "Model: “Understood. Could we then look at a sign-on to bridge the gap, and a written six-month review with a defined raise path?” Fixed bases are often true; fixed everything rarely is. The pivot keeps the collaboration alive and regularly recovers most of the gap.",
        "id": "Contoh: “Saya mengerti. Kalau begitu, bisakah kita melihat bonus penandatanganan untuk menjembatani selisihnya, dan peninjauan enam bulan yang tertulis dengan jalur kenaikan yang jelas?” Gaji pokok yang tetap sering kali memang benar; semuanya tetap jarang benar. Peralihan ini menjaga kolaborasi tetap hidup, dan sering kali memulihkan sebagian besar selisihnya."
       }
      },
      {
       "h": {
        "en": "Drill 3 · Two offers, one conversation",
        "id": "Latihan 3 · Dua tawaran, satu percakapan"
       },
       "body": {
        "en": "You hold a competing offer. Draft the sentence that uses it honestly — no bluffing, no ultimatum.",
        "id": "Kamu memegang tawaran dari perusahaan lain. Susun kalimat yang memakainya dengan jujur — tanpa gertakan, tanpa ultimatum."
       },
       "debrief": {
        "en": "Model: “I want to be transparent: I have another offer at X. This role is my first choice — if you can approach that number, I'm ready to accept.” Truthful leverage plus a clear preference plus a commitment. Never invent an offer; module 4's rule about reference checks has a sibling here — verification happens.",
        "id": "Contoh: “Saya ingin transparan: saya memegang tawaran lain sebesar X. Posisi ini adalah pilihan pertama saya — kalau angkanya bisa didekati, saya siap menerima.” Daya tawar yang jujur plus preferensi yang jelas plus komitmen. Jangan pernah mengarang tawaran; aturan dari Modul 4 tentang pemeriksaan referensi punya saudara kembar di sini — verifikasi itu benar-benar terjadi."
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
        "id": "Sebenarnya saya agak berharap mungkin bisa sedikit lebih, kalau memungkinkan? Tapi tidak apa-apa kalau tidak bisa, saya mengerti, tawarannya sudah bagus kok…"
       },
       "strong": {
        "en": "Thank you — I'm genuinely excited about this role. Based on my research for this position and level, the market sits at X to Y. Is there room to move the base toward Z?",
        "id": "Terima kasih — saya sungguh antusias dengan posisi ini. Berdasarkan riset saya untuk posisi dan level ini, pasarnya berada di X sampai Y. Apakah ada ruang untuk menggerakkan gaji pokok mendekati Z?"
       },
       "why": {
        "en": "The weak ask negotiates against itself before they answer. The strong one: appreciation, enthusiasm, researched anchor, one clear ask — then silence.",
        "id": "Permintaan yang lemah menawar merugikan diri sendiri sebelum mereka sempat menjawab. Yang kuat: apresiasi, antusiasme, patokan hasil riset, satu permintaan yang jelas — lalu diam."
       }
      }
     ],
     "listen": [
      {
       "label": {
        "en": "The ask, in the tone that moves offers",
        "id": "Permintaan itu, dengan nada yang menggerakkan tawaran"
       },
       "text": {
        "en": "Thank you for the offer — I'm genuinely excited about this role and this team. Based on my research for this position and level, the market sits between the numbers I shared. Is there room to move the base toward the top of that range?",
        "id": "Terima kasih atas tawarannya — saya sungguh antusias dengan posisi dan tim ini. Berdasarkan riset saya untuk posisi dan level ini, pasarnya berada di antara angka yang saya sampaikan. Apakah ada ruang untuk menggerakkan gaji pokok mendekati batas atas rentang itu?"
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
       "id": "“Mengapa Anda layak digaji jauh di atas gaji Anda sekarang?” — beri harga pada posisinya, bukan pada riwayatmu."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Negotiating against yourself in the ask",
         "id": "Menawar merugikan diri sendiri di dalam permintaan"
        },
        "fix": {
         "en": "No “but it's okay if not…” — appreciation, enthusiasm, researched range, one ask, then silence.",
         "id": "Jangan ada “tapi tidak apa-apa kalau tidak bisa…” — apresiasi, antusiasme, rentang hasil riset, satu permintaan, lalu diam."
        }
       },
       {
        "h": {
         "en": "Inventing a competing offer",
         "id": "Mengarang tawaran dari perusahaan lain"
        },
        "fix": {
         "en": "Verification exists. Use leverage only when it is real, and pair it with a clear preference.",
         "id": "Verifikasi itu benar-benar terjadi. Pakai daya tawar hanya kalau memang nyata, dan sandingkan dengan preferensi yang jelas."
        }
       },
       {
        "h": {
         "en": "Accepting on the call out of relief",
         "id": "Menerima saat itu juga karena lega"
        },
        "fix": {
         "en": "Thank them, ask for the letter, take a day. Nothing legitimate evaporates overnight.",
         "id": "Ucapkan terima kasih, minta suratnya, ambil waktu sehari. Tidak ada tawaran yang sah yang lenyap dalam semalam."
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
        "id": "Percakapan setelah tawaran tertulis dan sebelum kamu menerimanya, ketika syarat-syarat masih bisa bergerak — hal yang wajar, kalau dilakukan secara profesional."
       }
      }
     ]
    },
    {
     "n": "8.4",
     "title": {
      "en": "Offer Letter Red Flags and Verbal vs Written Commitments",
      "id": "Tanda Bahaya di Surat Tawaran, dan Janji Lisan vs Tertulis"
     },
     "kind": "visual",
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The letter is the deal; everything else is conversation. This visual walk covers the four zones to inspect before signing: compensation exactness, probation terms, scope and title precision, and the penalty clauses — plus the golden rule that verbal promises must become written ones before they count.",
      "id": "Suratnya adalah kesepakatannya; selebihnya hanya percakapan. Telusuran visual ini mencakup empat zona yang harus diperiksa sebelum tanda tangan: ketepatan kompensasi, ketentuan masa percobaan, ketepatan ruang lingkup dan jabatan, serta klausul penalti — plus aturan emasnya: janji lisan harus menjadi tertulis dulu sebelum bisa dihitung."
     },
     "objectives": [
      {
       "en": "Inspect the four risk zones of any offer letter.",
       "id": "Memeriksa empat zona risiko di surat tawaran mana pun."
      },
      {
       "en": "Convert verbal promises into written terms before signing.",
       "id": "Mengubah janji lisan menjadi ketentuan tertulis sebelum tanda tangan."
      },
      {
       "en": "Ask clarifying questions about unclear clauses without awkwardness.",
       "id": "Menanyakan klausul yang tidak jelas tanpa merasa canggung."
      }
     ],
     "takeaways": [
      {
       "en": "If it matters and it is not written, it does not exist yet — ask for the sentence.",
       "id": "Kalau penting dan belum tertulis, berarti belum ada — minta kalimatnya."
      },
      {
       "en": "Probation terms deserve the same reading as salary: length, criteria, and what happens after.",
       "id": "Ketentuan masa percobaan layak dibaca seteliti gaji: durasinya, kriterianya, dan apa yang terjadi setelahnya."
      },
      {
       "en": "Questions about the letter are normal diligence; discomfort with them is itself a signal.",
       "id": "Bertanya tentang isi surat adalah kehati-hatian yang normal; kalau mereka tidak nyaman ditanya, itu sendiri sebuah sinyal."
      }
     ],
     "check": {
      "q": {
       "en": "The hiring manager verbally promised a salary review after six months. It is not in the letter. You should:",
       "id": "Manajer perekrut berjanji secara lisan akan ada peninjauan gaji setelah enam bulan. Itu tidak ada di surat. Kamu sebaiknya:"
      },
      "options": [
       {
        "en": "Sign now and raise it again in month six",
        "id": "Tanda tangan sekarang, lalu ungkit lagi di bulan keenam"
       },
       {
        "en": "Ask for it to be added in writing before you sign",
        "id": "Minta agar itu ditambahkan secara tertulis sebelum kamu tanda tangan"
       },
       {
        "en": "Trust it — they seemed sincere",
        "id": "Percaya saja — mereka tampak tulus"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — sincerity is not the issue; memory and turnover are. Managers change; letters remain. One polite sentence gets it written.",
       "id": "Benar — masalahnya bukan ketulusan; masalahnya adalah ingatan dan pergantian orang. Manajer berganti; surat tetap ada. Satu kalimat yang sopan cukup untuk membuatnya tertulis."
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
        "id": "Nominal gaji pokok dan mata uangnya, baris-baris tunjangan, rumus bonus beserta syaratnya, jadwal pembayaran. “Bonus yang kompetitif” bukan angka; minta rumusnya, atau realisasi yang lazim, secara tertulis."
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
        "id": "Durasi, kriteria evaluasi, gaji selama masa percobaan, masa pemberitahuan di dalamnya, dan apa yang berubah setelah diangkat. Kriteria masa percobaan yang kabur adalah sengketa awal karier yang paling umum — tanyakan bagaimana keberhasilan akan diukur, dan simpan jawabannya."
       }
      },
      {
       "x": 30,
       "y": 68,
       "h": {
        "en": "Scope, title and location",
        "id": "Ruang lingkup, jabatan, dan lokasi"
       },
       "body": {
        "en": "Does the title match what was discussed? Is the reporting line named? Work location and any relocation or travel expectations written? A letter that says “and other duties as assigned” is normal; a letter vaguer than the interviews were is not.",
        "id": "Apakah jabatannya sesuai dengan yang dibicarakan? Apakah kepada siapa kamu melapor disebutkan? Apakah lokasi kerja dan ekspektasi relokasi atau perjalanan dinas tertulis? Kalimat “dan tugas-tugas lain yang ditetapkan” itu normal; surat yang lebih kabur daripada wawancaranya tidak."
       }
      },
      {
       "x": 76,
       "y": 74,
       "h": {
        "en": "Penalty and exit clauses",
        "id": "Klausul penalti dan pengunduran diri"
       },
       "body": {
        "en": "Training-cost clawbacks, minimum service periods with penalties, sweeping non-competes, IP claims over personal projects. These exist in some markets — read them before signing, ask for limits where they are broad, and know what you are agreeing to walk away from.",
        "id": "Kewajiban mengembalikan biaya pelatihan, masa kerja minimum dengan penalti, larangan bekerja di pesaing yang terlalu luas, klaim kekayaan intelektual atas proyek pribadimu. Klausul seperti ini ada di sebagian pasar kerja — baca sebelum tanda tangan, minta batasan kalau cakupannya terlalu luas, dan pahami apa yang kamu relakan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A clause says training costs are repayable if you leave within two years. You should:",
        "id": "Sebuah klausul menyebut biaya pelatihan harus dikembalikan kalau kamu keluar dalam dua tahun. Kamu sebaiknya:"
       },
       "options": [
        {
         "en": "Read it fully, ask for its limits, and decide knowingly before signing",
         "id": "Membacanya sampai tuntas, menanyakan batasannya, dan memutuskan dengan sadar sebelum tanda tangan"
        },
        {
         "en": "Ignore it — those clauses are never enforced",
         "id": "Mengabaikannya — klausul seperti itu tidak pernah ditegakkan"
        },
        {
         "en": "Refuse the offer immediately",
         "id": "Langsung menolak tawarannya"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — such clauses exist and can be real. Knowing what you sign is the whole discipline of this lesson.",
        "id": "Benar — klausul seperti itu memang ada dan bisa berlaku sungguhan. Tahu persis apa yang kamu tanda tangani adalah inti disiplin pelajaran ini."
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
        "id": "Periode evaluasi di awal pekerjaan baru, dengan ketentuannya sendiri untuk peninjauan, pemberitahuan, dan pengangkatan."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-08-offer.jpg",
   "heroPos": "center 30%"
  },
  {
   "num": 9,
   "title": {
    "en": "Probation Success: The First 90 Days",
    "id": "Sukses di Masa Percobaan: 90 Hari Pertama"
   },
   "overview": {
    "en": "The interview never fully ends — probation is the interview you conduct from the inside. This module converts the offer into a confirmed role: the 30/60/90 learning plan, the stakeholder map that tells you where trust flows, the first visible contribution chosen deliberately, and the probation review conversation run by you rather than at you.",
    "id": "Wawancara tidak pernah benar-benar berakhir — masa percobaan adalah wawancara yang kamu jalani dari dalam. Modul ini mengubah tawaran menjadi posisi yang dikukuhkan: rencana belajar 30/60/90, peta pemangku kepentingan yang menunjukkan ke mana kepercayaan mengalir, kontribusi pertama yang terlihat dan dipilih dengan sengaja, serta percakapan peninjauan masa percobaan yang kamu kemudikan sendiri, bukan sekadar kamu alami."
   },
   "outcome": {
    "en": "By the end of this module you can enter a new role with a deliberate 90-day plan, build the relationships that carry your work, deliver an early win that earns trust, and walk into the probation review with the evidence already assembled.",
    "id": "Di akhir modul ini, kamu bisa memasuki posisi baru dengan rencana 90 hari yang disengaja, membangun hubungan yang menopang pekerjaanmu, menghadirkan kemenangan awal yang menumbuhkan kepercayaan, dan masuk ke peninjauan masa percobaan dengan bukti yang sudah terkumpul."
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
      "id": "Karyawan baru gagal karena bergerak tanpa arah: langsung sibuk, tetapi tidak pernah bernilai. Busur 30/60/90 — dengarkan dan petakan, berkontribusi secara terlihat, pegang satu jalur — mengurutkan energimu sehingga pada hari kesembilan puluh, pertanyaan “apakah merekrutnya keputusan yang tepat?” terjawab dengan sendirinya."
     },
     "objectives": [
      {
       "en": "Structure your first ninety days as learn → contribute → own.",
       "id": "Menyusun sembilan puluh hari pertamamu sebagai belajar → berkontribusi → memegang."
      },
      {
       "en": "Set expectations with your manager in week one.",
       "id": "Menyelaraskan ekspektasi dengan atasanmu di minggu pertama."
      },
      {
       "en": "Keep an evidence log from day one.",
       "id": "Mencatat bukti sejak hari pertama."
      }
     ],
     "takeaways": [
      {
       "en": "Days 1–30: listen, map, learn the real process — resist premature fixes.",
       "id": "Hari 1–30: dengarkan, petakan, pelajari proses yang sebenarnya — tahan godaan untuk memperbaiki terlalu dini."
      },
      {
       "en": "Days 31–60: deliver the first visible contribution, chosen with your manager.",
       "id": "Hari 31–60: hadirkan kontribusi pertama yang terlihat, dipilih bersama atasanmu."
      },
      {
       "en": "Days 61–90: own a lane end-to-end and start the review conversation early.",
       "id": "Hari 61–90: pegang satu jalur dari awal sampai akhir, dan mulai percakapan peninjauan lebih awal."
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
        "id": "Menyelaraskan ekspektasi dengan atasanmu: seperti apa sukses di hari ke-90?"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — you cannot hit an undefined target. Ask it explicitly, write the answer down, and revisit it monthly.",
       "id": "Benar — kamu tidak bisa mengenai sasaran yang belum ditentukan. Tanyakan secara eksplisit, tulis jawabannya, dan tinjau ulang setiap bulan."
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
        "id": "Temui semua orang yang bersinggungan dengan posisimu; ajukan tiga pertanyaan yang sama kepada masing-masing: apa yang dikerjakan tim ini dengan baik, apa yang paling sering bermasalah, apa yang sebaiknya sama sekali tidak saya ubah? Pelajari proses yang sebenarnya, yang di mana pun di dunia ini selalu berbeda dari yang terdokumentasi. Tulis apa saja yang mengejutkanmu — pada hari keenam puluh kamu sudah tidak akan menyadarinya lagi, dan di daftar itulah kontribusi masa depanmu bersembunyi."
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
        "id": "Pilih satu hasil kerja yang terlihat, bisa dirampungkan dalam sebulan, dan benar-benar berguna — idealnya dari daftar kejutanmu, dan sudah divalidasi bersama atasan. Selesaikan sampai tuntas: dirilis, didokumentasikan, dikomunikasikan. Satu hal yang selesai mengalahkan lima hal yang baru dimulai, dengan selisih yang mengejutkan setiap karyawan baru yang mengujinya."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "Days 61–90 · Owning a lane",
        "id": "Hari 61–90 · Memegang satu jalur"
       },
       "body": {
        "en": "Take end-to-end responsibility for one recurring area — a report, a process, a client, a component. Ownership means people stop checking: it arrives correct, on time, without reminders. That reliability, demonstrated on even a small lane, is the strongest possible probation evidence, because it predicts everything else.",
        "id": "Ambil tanggung jawab dari awal sampai akhir atas satu area yang berulang — sebuah laporan, proses, klien, atau komponen. Memegang berarti orang berhenti memeriksa: hasilnya datang benar, tepat waktu, tanpa perlu diingatkan. Keandalan seperti itu, bahkan pada jalur yang kecil, adalah bukti masa percobaan yang paling kuat, karena ia meramalkan segala hal lainnya."
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
         "id": "Dengarkan, petakan, pelajari proses yang sebenarnya — catat setiap kejutan"
        }
       },
       {
        "h": {
         "en": "Days 31–60",
         "id": "Hari 31–60"
        },
        "sub": {
         "en": "First visible contribution — shipped, documented, communicated",
         "id": "Kontribusi pertama yang terlihat — dirilis, didokumentasikan, dikomunikasikan"
        }
       },
       {
        "h": {
         "en": "Days 61–90",
         "id": "Hari 61–90"
        },
        "sub": {
         "en": "Own a lane end-to-end; start the review conversation early",
         "id": "Pegang satu jalur dari awal sampai akhir; mulai percakapan peninjauan lebih awal"
        }
       }
      ],
      "note": {
       "en": "Ask in week one: what does success at day ninety look like? Write the answer down.",
       "id": "Tanyakan di minggu pertama: seperti apa sukses di hari kesembilan puluh? Tulis jawabannya."
      },
      "exhibit": {
       "en": "Exhibit 21: The 30/60/90 arc",
       "id": "Peraga 21: Busur 30/60/90"
      },
      "longdesc": {
       "en": "Diagram of The 30/60/90 arc. It presents, in order: Days 1–30 — Listen, map, learn the real process — log every surprise; Days 31–60 — First visible contribution — shipped, documented, communicated; Days 61–90 — Own a lane end-to-end; start the review conversation early.",
       "id": "Diagram busur 30/60/90. Menyajikan, secara berurutan: Hari 1–30 — dengarkan, petakan, pelajari proses yang sebenarnya, catat setiap kejutan; Hari 31–60 — kontribusi pertama yang terlihat: dirilis, didokumentasikan, dikomunikasikan; Hari 61–90 — pegang satu jalur dari awal sampai akhir; mulai percakapan peninjauan lebih awal."
      }
     },
     "tryit": {
      "qid": "st01",
      "label": {
       "en": "Say your 90-day plan aloud",
       "id": "Ucapkan rencana 90 harimu dengan suara keras"
      },
      "desc": {
       "en": "The simulator's first-90-days question — three phases, with examples.",
       "id": "Pertanyaan tentang 90 hari pertama di simulator — tiga fase, dengan contoh."
      }
     },
     "scenario": {
      "icon": "flag",
      "img": "../../assets/bg/stage-foundation.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat dalam Sorotan"
      },
      "body": [
       {
        "en": "Agus starts Monday. By Wednesday he has proposed reorganising the team's reporting, corrected his manager in a meeting, and skipped two coffee invitations to “focus.” He is working harder than anyone — and by day thirty, quietly, nobody brings him anything anymore. His colleague Ratih started the same week: she spent it asking questions, mapping who depends on whom, and fixing one small broken thing somebody complained about. Guess whose probation review writes itself.",
        "id": "Agus mulai bekerja hari Senin. Hari Rabu ia sudah mengusulkan penataan ulang sistem pelaporan tim, mengoreksi atasannya di tengah rapat, dan menolak dua ajakan ngopi demi “fokus.” Ia bekerja lebih keras daripada siapa pun — dan pada hari ketiga puluh, diam-diam, tidak ada lagi yang membawa pekerjaan kepadanya. Rekannya, Ratih, mulai di minggu yang sama: ia menghabiskannya dengan bertanya, memetakan siapa bergantung pada siapa, dan memperbaiki satu hal kecil yang rusak dan dikeluhkan orang. Tebak peninjauan masa percobaan siapa yang menulis dirinya sendiri."
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
        "id": "Periode evaluasi di awal pekerjaan baru, dengan ketentuannya sendiri untuk peninjauan, pemberitahuan, dan pengangkatan."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
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
         "id": "Dengarkan dan petakan dulu — daftar kejutanmu dari bulan pertama adalah tempat kontribusi yang baik bersembunyi."
        }
       },
       {
        "h": {
         "en": "Being busy instead of visible",
         "id": "Sibuk, tetapi tidak terlihat"
        },
        "fix": {
         "en": "One finished, communicated deliverable beats five started ones — every time.",
         "id": "Satu hasil kerja yang tuntas dan dikomunikasikan mengalahkan lima yang baru dimulai — setiap saat."
        }
       }
      ]
     }
    },
    {
     "n": "9.2",
     "title": {
      "en": "Stakeholder Mapping and Relationship Building",
      "id": "Memetakan Pemangku Kepentingan dan Membangun Hubungan"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Work travels on relationships; org charts only approximate them. The stakeholder map plots who your role depends on and who depends on you, where trust already flows, and which two relationships will decide your probation. Build those first, deliberately, before you need them.",
      "id": "Pekerjaan berjalan di atas hubungan; bagan organisasi hanya perkiraan kasarnya. Peta pemangku kepentingan menggambarkan pada siapa posisimu bergantung dan siapa yang bergantung padamu, ke mana kepercayaan sudah mengalir, dan dua hubungan mana yang akan menentukan masa percobaanmu. Bangun keduanya lebih dulu, dengan sengaja, sebelum kamu membutuhkannya."
     },
     "objectives": [
      {
       "en": "Draw the dependency map of your new role.",
       "id": "Menggambar peta ketergantungan dari posisi barumu."
      },
      {
       "en": "Identify the two probation-deciding relationships.",
       "id": "Mengenali dua hubungan yang menentukan masa percobaan."
      },
      {
       "en": "Build trust through small kept promises at speed.",
       "id": "Membangun kepercayaan lewat janji-janji kecil yang ditepati dengan cepat."
      }
     ],
     "takeaways": [
      {
       "en": "Map dependencies both directions: inputs you need, outputs others wait for.",
       "id": "Petakan ketergantungan dua arah: masukan yang kamu butuhkan, dan hasil yang ditunggu orang lain darimu."
      },
      {
       "en": "Trust is built in small denominations: kept promises, early warnings, credit given.",
       "id": "Kepercayaan dibangun dalam pecahan kecil: janji yang ditepati, peringatan dini, kredit yang diberikan."
      },
      {
       "en": "Your manager and one influential peer decide most probations — invest accordingly.",
       "id": "Atasanmu dan satu rekan yang berpengaruh memutuskan sebagian besar masa percobaan — berinvestasilah sesuai itu."
      }
     ],
     "check": {
      "q": {
       "en": "The fastest trust-builder in a new role is:",
       "id": "Cara tercepat membangun kepercayaan di posisi baru adalah:"
      },
      "options": [
       {
        "en": "Small promises kept visibly and consistently",
        "id": "Janji-janji kecil yang ditepati secara terlihat dan konsisten"
       },
       {
        "en": "An impressive presentation about your background",
        "id": "Presentasi yang mengesankan tentang latar belakangmu"
       },
       {
        "en": "Working later than everyone else",
        "id": "Pulang lebih larut daripada semua orang"
       }
      ],
      "correct": 0,
      "why": {
       "en": "Correct — reliability compounds. “They said Thursday and it came Thursday” repeated five times is a reputation.",
       "id": "Benar — keandalan itu berlipat. “Katanya Kamis, dan datangnya memang Kamis” yang terjadi lima kali berturut-turut adalah reputasi."
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
        "id": "Tiga kolom: orang yang hasil kerjanya kamu butuhkan, orang yang membutuhkan hasil kerjamu, dan orang yang memengaruhi cara pekerjaanmu dinilai. Tambahkan dua catatan untuk tiap orang: apa yang paling mereka pedulikan, dan tingkat kepercayaan saat ini. Kolom ketiga — para pemberi pengaruh — adalah yang paling sering dilupakan karyawan baru, dan yang diam-diam dimintai pendapat saat peninjauan masa percobaan."
       }
      },
      {
       "h": {
        "en": "The two that decide",
        "id": "Dua orang yang menentukan"
       },
       "body": {
        "en": "Your manager's confirmation instinct forms early, from small evidence: responsiveness, quality of questions, kept commitments. The influential peer — the one whose opinion others borrow — forms the team's verdict. Identify both in week one. Serve the manager's stated priorities; make the peer's life concretely easier once. Those two investments outperform every other relationship strategy.",
        "id": "Naluri atasanmu untuk mengukuhkanmu terbentuk sejak awal, dari bukti-bukti kecil: ketanggapan, mutu pertanyaanmu, komitmen yang ditepati. Rekan yang berpengaruh — orang yang pendapatnya dipinjam orang lain — membentuk vonis tim. Kenali keduanya di minggu pertama. Layani prioritas yang disebutkan atasanmu; permudah hidup rekan itu secara konkret, satu kali. Dua investasi itu mengungguli semua strategi hubungan yang lain."
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
         "id": "Hasil kerja siapa yang menjadi bahan pekerjaanmu?"
        }
       },
       {
        "h": {
         "en": "They need you",
         "id": "Mereka membutuhkanmu"
        },
        "sub": {
         "en": "Who waits on what you produce?",
         "id": "Siapa yang menunggu hasil kerjamu?"
        }
       },
       {
        "h": {
         "en": "They influence",
         "id": "Mereka memengaruhi"
        },
        "sub": {
         "en": "Whose opinion shapes how you are judged?",
         "id": "Pendapat siapa yang membentuk penilaian atas dirimu?"
        }
       }
      ],
      "note": {
       "en": "The third column is the one new hires forget — and the one probation reviews quietly poll.",
       "id": "Kolom ketiga adalah yang paling sering dilupakan karyawan baru — dan yang diam-diam dimintai pendapat saat peninjauan masa percobaan."
      },
      "exhibit": {
       "en": "Exhibit 22: The stakeholder map — three columns",
       "id": "Peraga 22: Peta pemangku kepentingan — tiga kolom"
      },
      "longdesc": {
       "en": "Diagram of The stakeholder map — three columns. It presents, in order: You need them — Whose output feeds your work?; They need you — Who waits on what you produce?; They influence — Whose opinion shapes how you are judged?.",
       "id": "Diagram peta pemangku kepentingan — tiga kolom. Menyajikan, secara berurutan: Kamu membutuhkan mereka — hasil kerja siapa yang menjadi bahan pekerjaanmu?; Mereka membutuhkanmu — siapa yang menunggu hasil kerjamu?; Mereka memengaruhi — pendapat siapa yang membentuk penilaian atas dirimu?"
      }
     },
     "checks": [
      {
       "q": {
        "en": "Trust in a new role is built fastest by:",
        "id": "Kepercayaan di posisi baru paling cepat dibangun dengan:"
       },
       "options": [
        {
         "en": "Small promises kept visibly, plus early warnings when things slip",
         "id": "Janji-janji kecil yang ditepati secara terlihat, plus peringatan dini ketika ada yang meleset"
        },
        {
         "en": "An impressive introduction presentation",
         "id": "Presentasi perkenalan yang mengesankan"
        },
        {
         "en": "Agreeing with everyone for the first month",
         "id": "Menyetujui semua orang selama bulan pertama"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — reliability compounds, and honest early warnings buy more trust than silent hoping.",
        "id": "Benar — keandalan itu berlipat, dan peringatan dini yang jujur membeli lebih banyak kepercayaan daripada berharap dalam diam."
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
        "id": "Periode evaluasi di awal pekerjaan baru, dengan ketentuannya sendiri untuk peninjauan, pemberitahuan, dan pengangkatan."
       }
      },
      {
       "term": {
        "en": "stakeholder",
        "id": "pemangku kepentingan"
       },
       "def": {
        "en": "Anyone whose input your work needs or whose outcomes depend on it — clients, other teams, leadership.",
        "id": "Siapa pun yang masukannya dibutuhkan pekerjaanmu, atau yang hasilnya bergantung pada pekerjaanmu — klien, tim lain, pimpinan."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      },
      {
       "term": {
        "en": "influence",
        "id": "pengaruh"
       },
       "def": {
        "en": "Moving people and decisions without formal authority — evidence of leadership before the title arrives.",
        "id": "Menggerakkan orang dan keputusan tanpa wewenang formal — bukti kepemimpinan sebelum jabatannya datang."
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
      "id": "Di suatu titik dalam enam puluh hari pertamamu, ada satu hasil kerja yang mengubahmu dari “si orang baru” menjadi “orang yang mengerjakan X”. Memilihnya dengan baik — terlihat, bisa dirampungkan, berguna, berisiko rendah — dan menyelesaikannya sampai tuntas adalah keputusan dengan daya ungkit tertinggi selama masa percobaanmu."
     },
     "objectives": [
      {
       "en": "Select a first contribution using the four criteria.",
       "id": "Memilih kontribusi pertama dengan empat kriteria."
      },
      {
       "en": "Scope it to finish inside a month.",
       "id": "Membatasi cakupannya supaya selesai dalam sebulan."
      },
      {
       "en": "Communicate completion so the contribution is actually visible.",
       "id": "Mengomunikasikan penyelesaiannya supaya kontribusi itu benar-benar terlihat."
      }
     ],
     "takeaways": [
      {
       "en": "Visible, finishable, useful, low-risk — all four, or choose again.",
       "id": "Terlihat, bisa dirampungkan, berguna, berisiko rendah — harus keempatnya, atau pilih yang lain."
      },
      {
       "en": "Finished means shipped, documented and communicated — not merely done.",
       "id": "Selesai berarti dirilis, didokumentasikan, dan dikomunikasikan — bukan sekadar rampung dikerjakan."
      },
      {
       "en": "Quiet competence is invisible competence; share completion without theatre.",
       "id": "Kompetensi yang diam adalah kompetensi yang tidak terlihat; kabarkan penyelesaiannya, tanpa drama."
      }
     ],
     "check": {
      "q": {
       "en": "The best first-contribution candidate among these is:",
       "id": "Kandidat kontribusi pertama yang paling baik di antara ini adalah:"
      },
      "options": [
       {
        "en": "A six-month research project with executive visibility",
        "id": "Proyek riset enam bulan yang dilihat para eksekutif"
       },
       {
        "en": "A recurring report everyone dreads, automated and documented in three weeks",
        "id": "Laporan berulang yang dibenci semua orang, diotomatiskan dan didokumentasikan dalam tiga minggu"
       },
       {
        "en": "A proposal to reorganise the team's entire workflow",
        "id": "Proposal untuk menata ulang seluruh alur kerja tim"
       }
      ],
      "correct": 1,
      "why": {
       "en": "Correct — visible, finishable, useful, low-risk. The reorganisation fails the risk test; the research fails the finishable test.",
       "id": "Benar — terlihat, bisa dirampungkan, berguna, berisiko rendah. Penataan ulang gagal di uji risiko; proyek riset gagal di uji rampung."
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
        "id": "Terlihat: orang di luar mejamu akan menyadarinya. Bisa dirampungkan: selesai dalam sebulan, dengan akses yang sudah kamu miliki. Berguna: hari Selasa seseorang benar-benar membaik. Berisiko rendah: kalau salah, tidak ada hal penting yang rusak. Kandidat yang gagal di salah satu kriteria saja melahirkan kesalahan klasik karyawan baru — proposal raksasa, beres-beres yang tidak terlihat, refactor yang berisiko."
       }
      },
      {
       "h": {
        "en": "Finishing completely",
        "id": "Menyelesaikan sampai tuntas"
       },
       "body": {
        "en": "Shipped: it works where people use it, not on your machine. Documented: the next person can run it without you. Communicated: a short note to the affected people — what changed, what it saves, where the documentation lives — plus one line in the team update. That last mile of communication is where “done” becomes “visible”, and most new hires skip it out of modesty. Do not.",
        "id": "Dirilis: bekerja di tempat orang memakainya, bukan hanya di komputermu. Didokumentasikan: orang berikutnya bisa menjalankannya tanpa kamu. Dikomunikasikan: satu pesan singkat kepada orang-orang yang terdampak — apa yang berubah, apa yang dihemat, di mana dokumentasinya — plus satu baris di laporan rutin tim. Langkah terakhir berupa komunikasi itulah yang mengubah “selesai” menjadi “terlihat”, dan kebanyakan karyawan baru melewatkannya karena merasa tidak enak. Jangan."
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
         "id": "Orang di luar mejamu akan menyadarinya"
        }
       },
       {
        "h": {
         "en": "Finishable",
         "id": "Bisa dirampungkan"
        },
        "sub": {
         "en": "Done inside a month, with access you have",
         "id": "Selesai dalam sebulan, dengan akses yang sudah ada"
        }
       },
       {
        "h": {
         "en": "Useful",
         "id": "Berguna"
        },
        "sub": {
         "en": "Someone's Tuesday genuinely improves",
         "id": "Hari Selasa seseorang benar-benar membaik"
        }
       },
       {
        "h": {
         "en": "Low-risk",
         "id": "Berisiko rendah"
        },
        "sub": {
         "en": "If it fails, nothing important breaks",
         "id": "Kalau gagal, tidak ada hal penting yang rusak"
        }
       }
      ],
      "note": {
       "en": "All four, or choose again. The famous new-hire mistakes each fail exactly one of these.",
       "id": "Harus keempatnya, atau pilih yang lain. Kesalahan klasik karyawan baru masing-masing gagal tepat di salah satu kriteria ini."
      },
      "exhibit": {
       "en": "Exhibit 23: Choosing the first contribution",
       "id": "Peraga 23: Memilih kontribusi pertama"
      },
      "longdesc": {
       "en": "Diagram of Choosing the first contribution. It presents, in order: Visible — People beyond your desk will notice; Finishable — Done inside a month, with access you have; Useful — Someone's Tuesday genuinely improves; Low-risk — If it fails, nothing important breaks.",
       "id": "Diagram memilih kontribusi pertama. Menyajikan, secara berurutan: Terlihat — orang di luar mejamu akan menyadarinya; Bisa dirampungkan — selesai dalam sebulan, dengan akses yang sudah ada; Berguna — hari Selasa seseorang benar-benar membaik; Berisiko rendah — kalau gagal, tidak ada hal penting yang rusak."
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
         "id": "Dirilis di tempat orang memakainya, didokumentasikan untuk orang berikutnya, dan dikomunikasikan"
        },
        {
         "en": "Working on your own machine",
         "id": "Berjalan di komputermu sendiri"
        },
        {
         "en": "Announced in a meeting before it is built",
         "id": "Diumumkan di rapat sebelum dibangun"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — the last mile of documentation and communication is where “done” becomes “visible”. Do not skip it out of modesty.",
        "id": "Benar — langkah terakhir berupa dokumentasi dan komunikasi itulah yang mengubah “selesai” menjadi “terlihat”. Jangan melewatkannya karena merasa tidak enak."
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
        "id": "Periode evaluasi di awal pekerjaan baru, dengan ketentuannya sendiri untuk peninjauan, pemberitahuan, dan pengangkatan."
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
      "id": "Dikukuhkan atau diperpanjang sering kali sudah diputuskan sebelum rapatnya — dari bukti yang kamu kumpulkan, atau tidak kamu kumpulkan. Pelajaran ini membahas catatan bukti, penilaian diri yang membingkai percakapan, cara menyikapi umpan balik perbaikan di dalam ruangan, dan cara memakai peninjauan itu untuk menyiapkan enam bulan berikutnya."
     },
     "objectives": [
      {
       "en": "Maintain an evidence log across probation.",
       "id": "Menjaga catatan bukti sepanjang masa percobaan."
      },
      {
       "en": "Open the review with a structured self-assessment.",
       "id": "Membuka peninjauan dengan penilaian diri yang terstruktur."
      },
      {
       "en": "Receive improvement feedback as fuel, visibly.",
       "id": "Menerima umpan balik perbaikan sebagai bahan bakar, secara terlihat."
      }
     ],
     "takeaways": [
      {
       "en": "Log wins weekly: deliverable, effect, who benefited. Memory fails; logs do not.",
       "id": "Catat capaian setiap minggu: hasil kerjanya, dampaknya, siapa yang terbantu. Ingatan bisa gagal; catatan tidak."
      },
      {
       "en": "Lead the review with your own honest assessment — framing beats reacting.",
       "id": "Pimpin peninjauan dengan penilaian jujurmu sendiri — membingkai lebih baik daripada bereaksi."
      },
      {
       "en": "How you receive criticism in this meeting is itself probation evidence.",
       "id": "Cara kamu menerima kritik di rapat ini adalah bukti masa percobaan tersendiri."
      }
     ],
     "check": {
      "q": {
       "en": "The strongest way to open your probation review:",
       "id": "Cara terkuat membuka peninjauan masa percobaanmu:"
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
        "id": "Penilaian diri yang singkat: apa yang sudah saya capai, apa yang saya pelajari, dan apa fokus saya berikutnya"
       }
      ],
      "correct": 2,
      "why": {
       "en": "Correct — delivered, learned, next. It frames the conversation around evidence and growth, and managers remember who framed well.",
       "id": "Benar — capaian, pembelajaran, fokus berikutnya. Itu membingkai percakapan di sekitar bukti dan pertumbuhan, dan manajer ingat siapa yang membingkainya dengan baik."
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
        "id": "Sepuluh menit setiap Jumat: apa yang dirilis, apa yang berubah karenanya, siapa yang menyadarinya. Pada hari peninjauan, kamu memegang daftar kontribusi bertanggal lengkap dengan dampaknya — persis bahan yang menjadi dasar diskusi pengukuhan. Bawa tiga yang terkuat sebagai pembuka; simpan sisanya untuk menjawab pertanyaan. Tidak ada yang sombong dari ini; ini kebiasaan profesional untuk membuat pekerjaanmu mudah dibaca."
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
        "id": "Buka dengan penilaian diri tiga bagian. Ketika umpan balik perbaikan datang — pasti datang, dan itu normal — buat catatan secara terlihat, ajukan satu pertanyaan untuk memperjelas, dan jawab dengan rencana, bukan pembelaan: “masuk akal; begini cara saya menanganinya kuartal ini.” Lalu tutup dengan menghadap ke depan: pastikan ekspektasi untuk enam bulan berikutnya, dan satu kemampuan yang ingin kamu tumbuhkan. Kamu pulang setelah mengubah sebuah evaluasi menjadi rapat perencanaan — dan itulah persis yang dilakukan karyawan yang dikukuhkan."
       },
       "icon": "book"
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "Running your own probation review",
       "id": "Mengemudikan sendiri peninjauan masa percobaanmu"
      },
      "items": [
       {
        "h": {
         "en": "Evidence log",
         "id": "Catatan bukti"
        },
        "sub": {
         "en": "Ten minutes every Friday: shipped, changed, noticed",
         "id": "Sepuluh menit setiap Jumat: dirilis, berubah, disadari"
        }
       },
       {
        "h": {
         "en": "Self-review",
         "id": "Penilaian diri"
        },
        "sub": {
         "en": "Open with: delivered, learned, next focus",
         "id": "Buka dengan: capaian, pembelajaran, fokus berikutnya"
        }
       },
       {
        "h": {
         "en": "Feedback → plan",
         "id": "Umpan balik → rencana"
        },
        "sub": {
         "en": "Notes taken visibly; answer with a plan, not a defence",
         "id": "Mencatat secara terlihat; menjawab dengan rencana, bukan pembelaan"
        }
       },
       {
        "h": {
         "en": "Forward close",
         "id": "Penutup yang menghadap ke depan"
        },
        "sub": {
         "en": "Confirm the next six months and one capability to grow",
         "id": "Pastikan enam bulan berikutnya, dan satu kemampuan untuk ditumbuhkan"
        }
       }
      ],
      "note": {
       "en": "You leave having turned an evaluation into a planning meeting — which is what confirmed employees do.",
       "id": "Kamu pulang setelah mengubah sebuah evaluasi menjadi rapat perencanaan — itulah yang dilakukan karyawan yang dikukuhkan."
      },
      "exhibit": {
       "en": "Exhibit 24: Running your own probation review",
       "id": "Peraga 24: Mengemudikan sendiri peninjauan masa percobaanmu"
      },
      "longdesc": {
       "en": "Diagram of Running your own probation review. It presents, in order: Evidence log — Ten minutes every Friday: shipped, changed, noticed; Self-review — Open with: delivered, learned, next focus; Feedback → plan — Notes taken visibly; answer with a plan, not a defence; Forward close — Confirm the next six months and one capability to grow.",
       "id": "Diagram mengemudikan sendiri peninjauan masa percobaanmu. Menyajikan, secara berurutan: Catatan bukti — sepuluh menit setiap Jumat: dirilis, berubah, disadari; Penilaian diri — buka dengan: capaian, pembelajaran, fokus berikutnya; Umpan balik → rencana — mencatat secara terlihat; menjawab dengan rencana, bukan pembelaan; Penutup yang menghadap ke depan — pastikan enam bulan berikutnya, dan satu kemampuan untuk ditumbuhkan."
      }
     },
     "tryit": {
      "qid": "cl04",
      "label": {
       "en": "Practice the outside view",
       "id": "Latih sudut pandang dari luar"
      },
      "desc": {
       "en": "“How would your last manager describe you?” — quote something real, praise and growth note both.",
       "id": "“Bagaimana atasan terakhir Anda akan menggambarkan Anda?” — kutip sesuatu yang nyata, pujian dan catatan pengembangan sekaligus."
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
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/bg/stage-execution.jpg",
   "heroPos": "center 40%"
  }
 ]
};
