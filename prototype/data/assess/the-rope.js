/* Assessment bank for the-rope.
   Module-keyed multiple-choice questions with answer keys and worked
   explanations, plus optional written reflection prompts. Consumed by
   js/lms-assign.js; scores are computed locally in the browser. */
window.MT_ASSESS = window.MT_ASSESS || {};
window.MT_ASSESS['the-rope'] = {
 "1": {
  "minutes": 12,
  "blueprint": [
   {
    "lesson": "1.1",
    "h": {
     "en": "What an Interview Is Actually For",
     "id": "Untuk Apa Sebenarnya Wawancara Itu"
    },
    "sub": {
     "en": "One decision, three questions; why interviewers probe; two directions; four interviewer styles.",
     "id": "Satu keputusan, tiga pertanyaan; mengapa pewawancara menggali; dua arah; empat gaya pewawancara."
    }
   },
   {
    "lesson": "1.2",
    "h": {
     "en": "How Answers Are Scored",
     "id": "Bagaimana Jawaban Dinilai"
    },
    "sub": {
     "en": "Anchored scales, the five features, we → I → we, the debrief, red flags.",
     "id": "Skala berjangkar, lima ciri, kami → saya → kami, rapat evaluasi, tanda bahaya."
    }
   },
   {
    "lesson": "1.3",
    "h": {
     "en": "The Seven Question Types",
     "id": "Tujuh Tipe Pertanyaan"
    },
    "sub": {
     "en": "Types and answer shapes, hidden concerns, stress protocol, “I don’t know”.",
     "id": "Tipe dan bentuk jawaban, kekhawatiran tersembunyi, protokol tekanan, “saya tidak tahu”."
    }
   },
   {
    "lesson": "1.4",
    "h": {
     "en": "Indonesian Selection Processes",
     "id": "Proses Seleksi di Indonesia"
    },
    "sub": {
     "en": "Five tracks, stage owners, formats, reading the invitation, the format map.",
     "id": "Lima jalur, pemilik tahap, format, membaca undangan, peta format."
    }
   }
  ],
  "mcq": [
   {
    "type": "know",
    "lesson": "1.1",
    "q": {
     "en": "The three things every interviewer is trying to decide are…",
     "id": "Tiga hal yang ingin diputuskan setiap pewawancara adalah…"
    },
    "opts": [
     {
      "en": "Confidence, appearance, punctuality",
      "id": "Kepercayaan diri, penampilan, ketepatan waktu"
     },
     {
      "en": "Can you do it, will you do it, will you fit",
      "id": "Bisakah kamu, maukah kamu, cocokkah kamu"
     },
     {
      "en": "IPK, English, references",
      "id": "IPK, bahasa Inggris, referensi"
     },
     {
      "en": "Salary, start date, placement",
      "id": "Gaji, tanggal mulai, penempatan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Every question maps to at least one of the three; the hire decision sits where they overlap (Kador).",
     "id": "Setiap pertanyaan memetakan ke setidaknya satu dari ketiganya; keputusan merekrut berada di irisannya (Kador)."
    }
   },
   {
    "type": "scen",
    "lesson": "1.1",
    "q": {
     "en": "An interviewer has talked about the company for twenty of thirty minutes. The best move is…",
     "id": "Pewawancara sudah bicara tentang perusahaan selama dua puluh dari tiga puluh menit. Langkah terbaiknya…"
    },
    "opts": [
     {
      "en": "Wait — they will ask when ready",
      "id": "Tunggu — mereka akan bertanya saat siap"
     },
     {
      "en": "Listen, ask one relevant question, then bridge to your most relevant evidence",
      "id": "Dengarkan, ajukan satu pertanyaan relevan, lalu jembatani ke bukti paling relevanmu"
     },
     {
      "en": "Interrupt with your strongest story",
      "id": "Sela dengan cerita terkuatmu"
     },
     {
      "en": "Ask how much time is left",
      "id": "Tanyakan berapa waktu tersisa"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The talker still has to leave the room with evidence to justify a yes (Pellett).",
     "id": "Si banyak bicara tetap harus pulang dengan bukti untuk membenarkan “ya” (Pellett)."
    }
   },
   {
    "type": "scen",
    "lesson": "1.2",
    "q": {
     "en": "A candidate answers “Tell me about a time you solved a problem” with a real internship example in which every action is “kami”, and no result. On a 1–4 anchor this is…",
     "id": "Kandidat menjawab “Ceritakan saat Anda memecahkan masalah” dengan contoh magang nyata di mana setiap tindakan adalah “kami”, dan tanpa hasil. Pada jangkar 1–4 ini…"
    },
    "opts": [
     {
      "en": "A 4 — it was real",
      "id": "Nilai 4 — itu nyata"
     },
     {
      "en": "A 2 — real, but own actions unclear and result missing",
      "id": "Nilai 2 — nyata, tetapi tindakan sendiri tidak jelas dan hasil hilang"
     },
     {
      "en": "A 1 — hypothetical",
      "id": "Nilai 1 — hipotetis"
     },
     {
      "en": "A 3 — specific enough",
      "id": "Nilai 3 — cukup spesifik"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Truth alone earns a 2; ownership and a result are what the anchor asks for next.",
     "id": "Kebenaran saja mendapat 2; kepemilikan dan hasil adalah yang diminta jangkar berikutnya."
    }
   },
   {
    "type": "know",
    "lesson": "1.2",
    "q": {
     "en": "Which of these overrides a strong technical score?",
     "id": "Mana yang menggugurkan skor teknis yang kuat?"
    },
    "opts": [
     {
      "en": "A nervous first minute",
      "id": "Menit pertama yang gugup"
     },
     {
      "en": "Numbers that differ between the HR and user rounds",
      "id": "Angka yang berbeda antara ronde HR dan user"
     },
     {
      "en": "A short answer to a closing question",
      "id": "Jawaban singkat untuk pertanyaan penutup"
     },
     {
      "en": "Asking about the team’s size",
      "id": "Bertanya tentang ukuran tim"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Inconsistency across rounds is raised at the debrief and weakens trust in all your evidence.",
     "id": "Ketidakkonsistenan lintas ronde diangkat di rapat evaluasi dan melemahkan kepercayaan pada semua buktimu."
    }
   },
   {
    "type": "scen",
    "lesson": "1.3",
    "q": {
     "en": "“Kenapa ingin bekerja di sini?” The hidden concern and the shape of a good answer are…",
     "id": "“Kenapa ingin bekerja di sini?” Kekhawatiran tersembunyi dan bentuk jawaban yang baik adalah…"
    },
    "opts": [
     {
      "en": "Will you stay — a five-year plan",
      "id": "Apakah kamu bertahan — rencana lima tahun"
     },
     {
      "en": "Is this a random application — specific research plus fit to your experience (REC)",
      "id": "Apakah ini lamaran acak — riset spesifik plus kecocokan dengan pengalamanmu (REC)"
     },
     {
      "en": "Can you do it — a STAR story",
      "id": "Bisakah kamu — cerita STAR"
     },
     {
      "en": "Are you honest — a weakness",
      "id": "Apakah kamu jujur — kelemahan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "A motivational question: one researched fact, one experience, one contribution — never a STAR story that skips why this company.",
     "id": "Pertanyaan motivasional: satu fakta riset, satu pengalaman, satu kontribusi — bukan cerita STAR yang melewati mengapa perusahaan ini."
    }
   },
   {
    "type": "scen",
    "lesson": "1.3",
    "q": {
     "en": "The user asks how a bank’s net interest margin works, and you have never calculated one. You…",
     "id": "User bertanya cara kerja net interest margin bank, dan kamu belum pernah menghitungnya. Kamu…"
    },
    "opts": [
     {
      "en": "Give a confident guess",
      "id": "Beri tebakan percaya diri"
     },
     {
      "en": "Say what you know, reason aloud toward it, and say how you would find out",
      "id": "Katakan yang kamu tahu, bernalar dengan suara ke arahnya, dan katakan cara kamu mencari tahu"
     },
     {
      "en": "Say “I don’t know” and stop",
      "id": "Katakan “saya tidak tahu” dan berhenti"
     },
     {
      "en": "Change the subject to your thesis",
      "id": "Alihkan ke skripsimu"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Bluffing is the worst option; honest reasoning at the edge of knowledge scores on limits handled.",
     "id": "Menggertak pilihan terburuk; bernalar jujur di batas pengetahuan dinilai pada batas yang ditangani."
    }
   },
   {
    "type": "know",
    "lesson": "1.4",
    "q": {
     "en": "In a bank ODP process, the round that usually decides is…",
     "id": "Dalam proses ODP bank, ronde yang biasanya menentukan adalah…"
    },
    "opts": [
     {
      "en": "The online test",
      "id": "Tes daring"
     },
     {
      "en": "The user interview with the branch manager",
      "id": "Wawancara user dengan kepala cabang"
     },
     {
      "en": "The medical check-up",
      "id": "Pemeriksaan kesehatan"
     },
     {
      "en": "The HR phone screen",
      "id": "Seleksi telepon HR"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The user tests capability for the actual work and probes deepest; the screen tests eligibility.",
     "id": "User menguji kemampuan untuk pekerjaan sebenarnya dan menggali paling dalam; seleksi awal menguji kelayakan."
    }
   },
   {
    "type": "scen",
    "lesson": "1.4",
    "q": {
     "en": "An invitation says: “5 questions, 90 seconds each, 30 seconds preparation, one retake, due Friday.” You prepare…",
     "id": "Undangan berbunyi: “5 pertanyaan, 90 detik masing-masing, persiapan 30 detik, satu pengulangan, jatuh tempo Jumat.” Kamu menyiapkan…"
    },
    "opts": [
     {
      "en": "A conversation with follow-up questions",
      "id": "Percakapan dengan pertanyaan lanjutan"
     },
     {
      "en": "Structured 90-second answers under a timer, plus camera and sound",
      "id": "Jawaban 90 detik terstruktur di bawah pengatur waktu, plus kamera dan suara"
     },
     {
      "en": "A group-discussion role",
      "id": "Peran diskusi kelompok"
     },
     {
      "en": "A salary range",
      "id": "Rentang gaji"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "It is a one-way video: no interviewer, the timer is the interviewer; rehearse with the same timings.",
     "id": "Ini video satu arah: tanpa pewawancara, pengatur waktu adalah pewawancaranya; latih dengan waktu yang sama."
    }
   }
  ],
  "reflect": {
   "prompt": {
    "en": "At least 100 words. Two questions. First: what uncertainty will your top employer have about you specifically — name it from your own profile, and say what evidence you have or do not yet have. Second: which interview format on your format map are you least prepared for, and what is the first thing you will do about it this week?",
    "id": "Minimal 100 kata. Dua pertanyaan. Pertama: ketidakpastian apa yang akan dimiliki perusahaan sasaran teratasmu tentang dirimu secara spesifik — sebutkan dari profilmu sendiri, dan katakan bukti apa yang kamu punya atau belum punya. Kedua: format wawancara mana di peta formatmu yang paling tidak kamu siapkan, dan apa hal pertama yang akan kamu lakukan minggu ini?"
   },
   "guide": [
    {
     "en": "Draw the uncertainty from a line in your CV, not from a generic list.",
     "id": "Ambil ketidakpastiannya dari satu baris di CV-mu, bukan dari daftar generik."
    },
    {
     "en": "Name the format (one-way video, LGD, phone screen, panel…) and the module that trains it.",
     "id": "Sebutkan formatnya (video satu arah, LGD, seleksi telepon, panel…) dan modul yang melatihnya."
    },
    {
     "en": "The first action should fit in two hours.",
     "id": "Tindakan pertama harus muat dalam dua jam."
    }
   ],
   "min": 100
  }
 },
 "2": {
  "mcq": [
   {
    "type": "know",
    "q": {
     "en": "A story library beats improvising because:",
     "id": "Perpustakaan cerita mengalahkan improvisasi karena:"
    },
    "opts": [
     {
      "en": "Memorised scripts sound more professional",
      "id": "Naskah hafalan terdengar lebih profesional"
     },
     {
      "en": "Under pressure your repertoire shrinks to what you rehearsed — prepared stories flex to fit many questions",
      "id": "Di bawah tekanan, yang tersisa hanya apa yang sudah kamu latih — cerita yang sudah disiapkan bisa dilenturkan untuk banyak pertanyaan"
     },
     {
      "en": "Interviewers share question lists",
      "id": "Para pewawancara saling berbagi daftar pertanyaan"
     },
     {
      "en": "It eliminates all nervousness",
      "id": "Ia menghilangkan semua rasa gugup"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Thirty structured stories cover hundreds of behavioural questions. The library is retrieval infrastructure, not a script.",
     "id": "Tiga puluh cerita yang terstruktur mencakup ratusan pertanyaan perilaku. Perpustakaan ini adalah sistem untuk mengingat, bukan naskah."
    }
   },
   {
    "type": "scen",
    "q": {
     "en": "Your draft story says 'we shipped the project'. The fix before it enters the library:",
     "id": "Draf ceritamu berbunyi 'kami merilis proyeknya'. Yang harus dibenahi sebelum masuk ke perpustakaan:"
    },
    "opts": [
     {
      "en": "Change every 'we' to 'I'",
      "id": "Ganti semua 'kami' menjadi 'saya'"
     },
     {
      "en": "Keep the team context and make your specific contribution unmistakable — what did YOU decide, build, persuade?",
      "id": "Pertahankan konteks timnya, tapi buat kontribusi spesifikmu tidak bisa disalahartikan — apa yang KAMU putuskan, bangun, yakinkan?"
     },
     {
      "en": "Add more technical detail",
      "id": "Tambahkan lebih banyak detail teknis"
     },
     {
      "en": "Shorten it to two sentences",
      "id": "Pendekkan menjadi dua kalimat"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "'We' hiding 'I' is a top follow-up trigger. Teams are real; interviewers still need your ownable slice with its own verbs and numbers.",
     "id": "'Kami' yang menyembunyikan 'saya' adalah pemicu utama pertanyaan lanjutan. Tim itu nyata; tapi pewawancara tetap butuh bagian yang menjadi milikmu, dengan kata kerja dan angkanya sendiri."
    }
   },
   {
    "type": "know",
    "q": {
     "en": "Numbers belong in stories because:",
     "id": "Angka penting dalam sebuah cerita karena:"
    },
    "opts": [
     {
      "en": "They impress mathematically-minded interviewers",
      "id": "Mengesankan pewawancara yang suka matematika"
     },
     {
      "en": "They make claims checkable and memorable — and their absence is a standard follow-up trigger",
      "id": "Angka membuat klaim bisa diperiksa dan mudah diingat — dan ketiadaannya adalah pemicu standar untuk pertanyaan lanjutan"
     },
     {
      "en": "They lengthen answers usefully",
      "id": "Angka memperpanjang jawaban secara berguna"
     },
     {
      "en": "Rubrics award points per digit",
      "id": "Rubrik memberi poin untuk setiap digit"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "'Cut errors from thirty per event to under five' survives probing; 'significantly improved quality' invites it.",
     "id": "'Memangkas kesalahan dari tiga puluh per acara menjadi di bawah lima' tahan digali; 'meningkatkan kualitas secara signifikan' justru mengundang penggalian."
    }
   },
   {
    "type": "scen",
    "q": {
     "en": "A story ends at the result with no learning. Why does the L matter to assessors?",
     "id": "Sebuah cerita berhenti di hasil, tanpa pelajaran. Mengapa L penting bagi asesor?"
    },
    "opts": [
     {
      "en": "It shows humility, which is polite",
      "id": "Ia menunjukkan kerendahan hati, dan itu sopan"
     },
     {
      "en": "It evidences the meta-skill they are actually hiring: someone who converts experience into upgraded behaviour",
      "id": "Ia membuktikan meta-keterampilan yang sebenarnya mereka cari: orang yang mengubah pengalaman menjadi perilaku yang lebih baik"
     },
     {
      "en": "It pads shorter stories",
      "id": "Ia menambal cerita yang terlalu pendek"
     },
     {
      "en": "Rubrics require five parts",
      "id": "Rubrik mewajibkan lima bagian"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Companies hire for the next problem, not the last one. The learning line predicts how you will handle what they cannot foresee.",
     "id": "Perusahaan merekrut untuk masalah berikutnya, bukan masalah yang lalu. Baris pelajaran meramalkan cara kamu menangani hal-hal yang tidak bisa mereka duga."
    }
   }
  ],
  "reflect": {
   "prompt": {
    "en": "Take your strongest CV line and write its full STAR-L: two lines of context, the challenge, your specific actions with at least one number, the verified result, and what permanently changed in how you work.",
    "id": "Ambil baris CV terkuatmu dan tulis STAR-L lengkapnya: dua baris konteks, tantangannya, tindakan spesifikmu dengan minimal satu angka, hasil yang bisa diverifikasi, dan apa yang berubah secara permanen dalam caramu bekerja."
   },
   "min": 25
  }
 },
 "3": {
  "mcq": [
   {
    "type": "know",
    "q": {
     "en": "Interview rubrics score answers against:",
     "id": "Rubrik wawancara menilai jawaban berdasarkan:"
    },
    "opts": [
     {
      "en": "The interviewer's personal taste",
      "id": "Selera pribadi pewawancara"
     },
     {
      "en": "Defined competencies with behavioural anchors per level",
      "id": "Kompetensi yang sudah ditetapkan, dengan contoh perilaku yang jelas untuk setiap level"
     },
     {
      "en": "Overall impression at the end",
      "id": "Kesan keseluruhan di akhir"
     },
     {
      "en": "Speed and confidence of delivery",
      "id": "Kecepatan dan kepercayaan diri saat menyampaikan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Decode the framework and you know what evidence each question hunts — the JD's competency words are the rubric's table of contents.",
     "id": "Pecahkan kerangkanya, dan kamu tahu bukti apa yang diburu setiap pertanyaan — kata-kata kompetensi di deskripsi lowongan adalah daftar isi rubriknya."
    }
   },
   {
    "type": "scen",
    "q": {
     "en": "'Tell me about a time you failed' is hunting for:",
     "id": "'Ceritakan saat kamu pernah gagal' sedang mencari:"
    },
    "opts": [
     {
      "en": "Disqualifying weaknesses",
      "id": "Kelemahan yang bisa menggugurkanmu"
     },
     {
      "en": "Ownership, recovery behaviour, and what changed after — the learning loop under pressure",
      "id": "Rasa memiliki, cara bangkit, dan apa yang berubah setelahnya — putaran belajar di bawah tekanan"
     },
     {
      "en": "Your honesty about disasters",
      "id": "Kejujuranmu tentang bencana"
     },
     {
      "en": "Whether you avoid risky projects",
      "id": "Apakah kamu menghindari proyek berisiko"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "A real failure, owned without blame, with a recovery and a changed behaviour, scores higher than 'my weakness is perfectionism'.",
     "id": "Kegagalan sungguhan, diakui tanpa menyalahkan siapa pun, dengan cara bangkit dan perilaku yang berubah, mendapat skor lebih tinggi daripada 'kelemahan saya adalah perfeksionis'."
    }
   },
   {
    "type": "know",
    "q": {
     "en": "Reading a JD before an interview, the competency signals live in:",
     "id": "Saat membaca deskripsi lowongan sebelum wawancara, sinyal kompetensinya ada di:"
    },
    "opts": [
     {
      "en": "The salary band",
      "id": "Rentang gajinya"
     },
     {
      "en": "Repeated words, first-listed requirements, and the verbs describing the role's work",
      "id": "Kata-kata yang berulang, persyaratan yang disebut paling awal, dan kata kerja yang menggambarkan pekerjaannya"
     },
     {
      "en": "The company boilerplate",
      "id": "Teks standar tentang perusahaan"
     },
     {
      "en": "The benefits section",
      "id": "Bagian tunjangan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The JD is the interview's syllabus: every heavy requirement will hunt for evidence, so each one gets a mapped story before you walk in.",
     "id": "Deskripsi lowongan adalah silabus wawancaranya: setiap persyaratan yang berbobot akan mencari bukti, jadi masing-masing harus sudah punya cerita yang dipetakan sebelum kamu masuk ruangan."
    }
   },
   {
    "type": "scen",
    "q": {
     "en": "The interviewer looks unconvinced by your answer. The trained response:",
     "id": "Pewawancara terlihat belum yakin dengan jawabanmu. Respons yang terlatih:"
    },
    "opts": [
     {
      "en": "Repeat the answer more confidently",
      "id": "Ulangi jawabannya dengan lebih percaya diri"
     },
     {
      "en": "Offer the check: 'does that address what you were looking for, or should I go deeper on a specific part?'",
      "id": "Tawarkan pengecekan: 'apakah itu sudah menjawab yang Bapak/Ibu cari, atau ada bagian tertentu yang perlu saya perdalam?'"
     },
     {
      "en": "Move on quickly to hide the wobble",
      "id": "Cepat pindah ke topik lain untuk menutupi kegoyahan"
     },
     {
      "en": "Ask what answer they wanted",
      "id": "Tanyakan jawaban seperti apa yang mereka inginkan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The landing check converts a silent miss into a second chance — and reads as exactly the communication habit the rubric scores.",
     "id": "Pengecekan di akhir jawaban mengubah kegagalan yang tak terucap menjadi kesempatan kedua — dan terbaca persis sebagai kebiasaan komunikasi yang dinilai rubrik."
    }
   }
  ],
  "reflect": null
 },
 "4": {
  "mcq": [
   {
    "type": "know",
    "q": {
     "en": "The HR interview primarily evaluates:",
     "id": "Wawancara HR terutama mengevaluasi:"
    },
    "opts": [
     {
      "en": "Technical depth",
      "id": "Kedalaman teknis"
     },
     {
      "en": "Motivation, fit, self-awareness, salary alignment and red flags",
      "id": "Motivasi, kecocokan, kesadaran diri, keselarasan ekspektasi gaji, dan tanda bahaya"
     },
     {
      "en": "Problem-solving under time",
      "id": "Pemecahan masalah dalam waktu terbatas"
     },
     {
      "en": "Presentation skills",
      "id": "Keterampilan presentasi"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "HR is the gatekeeper round: informed interest in this company, a coherent story, and nothing that endangers the culture or the band.",
     "id": "HR adalah ronde penjaga gerbang: minat yang berdasar terhadap perusahaan ini, cerita yang runtut, dan tidak ada hal yang membahayakan budaya atau rentang gaji."
    }
   },
   {
    "type": "scen",
    "q": {
     "en": "'Why do you want to work here?' — the answer that scores:",
     "id": "'Mengapa kamu ingin bekerja di sini?' — jawaban yang mendapat nilai:"
    },
    "opts": [
     {
      "en": "'Your company is famous and stable'",
      "id": "'Perusahaan Bapak/Ibu terkenal dan stabil'"
     },
     {
      "en": "A specific, verified fact about their work connected to your evidenced direction",
      "id": "Satu fakta spesifik dan terverifikasi tentang pekerjaan mereka, yang terhubung dengan arah kariermu yang punya bukti"
     },
     {
      "en": "'The salary and benefits are attractive'",
      "id": "'Gaji dan tunjangannya menarik'"
     },
     {
      "en": "'My friends recommend the culture'",
      "id": "'Teman-teman saya merekomendasikan budayanya'"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Generic praise reads as mass production. 'Your supplier-audit programme is where my thesis work points' proves research and genuine intent in one sentence.",
     "id": "Pujian generik terbaca seperti produksi massal. 'Program audit pemasok Bapak/Ibu adalah arah yang dituju skripsi saya' membuktikan riset dan niat yang tulus dalam satu kalimat."
    }
   },
   {
    "type": "know",
    "q": {
     "en": "In technical rounds, when you do not know the answer:",
     "id": "Di ronde teknis, ketika kamu tidak tahu jawabannya:"
    },
    "opts": [
     {
      "en": "Bluff confidently — doubt is fatal",
      "id": "Gertak dengan percaya diri — ragu itu fatal"
     },
     {
      "en": "Say what you do know, reason aloud toward the boundary, and name what you would look up",
      "id": "Katakan apa yang kamu tahu, bernalar dengan suara lantang sampai ke batas pengetahuanmu, dan sebutkan apa yang akan kamu cari tahu"
     },
     {
      "en": "Apologise and ask for a different question",
      "id": "Minta maaf dan minta pertanyaan lain"
     },
     {
      "en": "Stay silent until inspiration comes",
      "id": "Diam sampai ilham datang"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Technical interviewers probe exactly where bluffs live. Calibrated honesty plus visible reasoning scores; confident fiction ends candidacies.",
     "id": "Pewawancara teknis menggali persis di tempat gertakan bersembunyi. Kejujuran yang terukur plus penalaran yang terlihat mendapat nilai; fiksi yang percaya diri mengakhiri pencalonanmu."
    }
   },
   {
    "type": "scen",
    "q": {
     "en": "The final-round director asks about your five-year picture. They are actually testing:",
     "id": "Direktur di ronde final bertanya tentang gambaranmu lima tahun ke depan. Yang sebenarnya diuji:"
    },
    "opts": [
     {
      "en": "Whether your plan matches their org chart",
      "id": "Apakah rencanamu cocok dengan bagan organisasi mereka"
     },
     {
      "en": "Whether you think in trajectories at all, and whether this role plausibly serves yours",
      "id": "Apakah kamu berpikir dalam kerangka lintasan karier, dan apakah peran ini masuk akal sebagai bagian dari lintasanmu"
     },
     {
      "en": "Your loyalty for the full five years",
      "id": "Kesetiaanmu selama lima tahun penuh"
     },
     {
      "en": "Ambition levels against other candidates",
      "id": "Tingkat ambisimu dibanding kandidat lain"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Directors buy judgment. An authored direction with this role as a deliberate way-station beats both 'your seat, eventually' flattery and 'wherever life takes me'.",
     "id": "Direktur membeli pertimbangan. Arah yang kamu tulis sendiri, dengan peran ini sebagai persinggahan yang disengaja, mengalahkan rayuan 'kelak duduk di kursi Bapak/Ibu' maupun 'ke mana pun hidup membawa saya'."
    }
   }
  ],
  "reflect": null
 },
 "5": {
  "mcq": [
   {
    "type": "know",
    "q": {
     "en": "Case interviews at their core test:",
     "id": "Pada intinya, wawancara kasus menguji:"
    },
    "opts": [
     {
      "en": "Business trivia knowledge",
      "id": "Pengetahuan trivia bisnis"
     },
     {
      "en": "Structured thinking aloud on a problem you cannot have prepared",
      "id": "Berpikir terstruktur dengan suara lantang tentang masalah yang mustahil kamu persiapkan sebelumnya"
     },
     {
      "en": "Mental arithmetic speed",
      "id": "Kecepatan berhitung di kepala"
     },
     {
      "en": "Consulting jargon fluency",
      "id": "Kefasihan memakai jargon konsultan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Structure, numeracy, judgment, communication — the same four dimensions, and every minute offers recovery through a caught error corrected cleanly.",
     "id": "Struktur, kemampuan berhitung, pertimbangan, komunikasi — empat dimensi yang sama, dan setiap menit memberi kesempatan pulih lewat kesalahan yang kamu tangkap sendiri dan koreksi dengan rapi."
    }
   },
   {
    "type": "scen",
    "q": {
     "en": "The guided-tour narration pattern is:",
     "id": "Pola narasi 'pemandu wisata' adalah:"
    },
    "opts": [
     {
      "en": "Continuous talking so silence never falls",
      "id": "Bicara terus-menerus supaya tidak pernah ada keheningan"
     },
     {
      "en": "Announce where you are going, work, report what you found — the interviewer always knows where you are",
      "id": "Umumkan ke mana kamu akan pergi, kerjakan, laporkan apa yang kamu temukan — pewawancara selalu tahu posisimu"
     },
     {
      "en": "Whispering calculations to yourself",
      "id": "Berbisik menghitung untuk diri sendiri"
     },
     {
      "en": "Asking permission before every step",
      "id": "Minta izin sebelum setiap langkah"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Silence reads as absence, babble as chaos. Announce, work, report — and buy thinking time explicitly when you need it.",
     "id": "Keheningan terbaca sebagai kehilangan arah, ocehan terbaca sebagai kekacauan. Umumkan, kerjakan, laporkan — dan minta waktu berpikir secara eksplisit saat kamu membutuhkannya."
    }
   },
   {
    "type": "know",
    "q": {
     "en": "The four-sentence case close is:",
     "id": "Penutup kasus empat kalimat terdiri dari:"
    },
    "opts": [
     {
      "en": "Summary, thanks, availability, question",
      "id": "Rangkuman, terima kasih, ketersediaan, pertanyaan"
     },
     {
      "en": "Recommendation, two reasons, main risk, first step",
      "id": "Rekomendasi, dua alasan, risiko utama, langkah pertama"
     },
     {
      "en": "Problem, analysis, options, request for feedback",
      "id": "Masalah, analisis, pilihan, permintaan masukan"
     },
     {
      "en": "Context, complication, question, answer",
      "id": "Konteks, komplikasi, pertanyaan, jawaban"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Answer-first even at the end: the recommendation leads, the reasoning follows, the risk shows judgment, the first step shows practicality.",
     "id": "Jawaban lebih dulu, bahkan di penutup: rekomendasi memimpin, alasan mengikuti, risiko menunjukkan pertimbangan, langkah pertama menunjukkan kepraktisan."
    }
   },
   {
    "type": "scen",
    "q": {
     "en": "Your sizing produced 6 million yearly motorcycle sales for a 280-million-person country. Before moving on you:",
     "id": "Penaksiranmu menghasilkan 6 juta penjualan sepeda motor per tahun untuk negara berpenduduk 280 juta. Sebelum lanjut, kamu:"
    },
    "opts": [
     {
      "en": "State it and continue — an answer is an answer",
      "id": "Sebutkan dan lanjutkan — jawaban tetaplah jawaban"
     },
     {
      "en": "Sanity-check aloud: roughly one per 40 people per year — plausible against replacement cycles",
      "id": "Uji kewajarannya dengan suara lantang: kira-kira satu motor per 40 orang per tahun — masuk akal kalau dibandingkan dengan siklus penggantian"
     },
     {
      "en": "Redo the computation to be safe",
      "id": "Ulangi perhitungannya supaya aman"
     },
     {
      "en": "Ask the interviewer if it is correct",
      "id": "Tanya pewawancara apakah jawabannya benar"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The audit trail is the score: round numbers, spoken assumptions, a written running product, and a final sanity anchor.",
     "id": "Jejak auditnya adalah nilainya: angka yang dibulatkan, asumsi yang diucapkan, hasil perkalian yang ditulis di setiap langkah, dan satu uji kewajaran di akhir."
    }
   }
  ],
  "reflect": null
 },
 "6": {
  "mcq": [
   {
    "type": "know",
    "q": {
     "en": "Skeptical-interviewer pressure ('we tried that, it failed') primarily tests:",
     "id": "Tekanan dari pewawancara yang skeptis ('kami pernah mencobanya, gagal') terutama menguji:"
    },
    "opts": [
     {
      "en": "Whether your idea was actually wrong",
      "id": "Apakah idemu memang salah"
     },
     {
      "en": "Composure and updating: pause, ground in data, concede precisely or hold precisely",
      "id": "Ketenangan dan kemampuan memperbarui pendapat: jeda, berpijak pada data, mengakui dengan tepat atau bertahan dengan tepat"
     },
     {
      "en": "Your tolerance for rudeness",
      "id": "Toleransimu terhadap sikap kasar"
     },
     {
      "en": "Loyalty to your first answer",
      "id": "Kesetiaan pada jawaban pertamamu"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Instant capitulation fails, heat fails, bluffing fails. One grounded revision or one respectful hold — both score.",
     "id": "Langsung menyerah gagal, terpancing emosi gagal, menggertak gagal. Satu revisi yang berdasar, atau satu pembelaan yang hormat — keduanya mendapat nilai."
    }
   },
   {
    "type": "scen",
    "q": {
     "en": "Asked a question clearly designed to fluster ('convince me in ten seconds'), you:",
     "id": "Ditanya dengan pertanyaan yang jelas dirancang untuk mengguncang ('yakinkan saya dalam sepuluh detik'), kamu:"
    },
    "opts": [
     {
      "en": "Protest that the format is unfair",
      "id": "Protes bahwa formatnya tidak adil"
     },
     {
      "en": "Play it straight: one breath, your strongest evidenced sentence, stop",
      "id": "Jalani apa adanya: satu tarikan napas, kalimat berbukti terkuatmu, lalu berhenti"
     },
     {
      "en": "Fill all ten seconds with rapid speech",
      "id": "Isi sepuluh detik penuh dengan bicara secepat mungkin"
     },
     {
      "en": "Laugh it off and wait for a real question",
      "id": "Tertawakan saja dan tunggu pertanyaan yang sungguhan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Stress formats measure the machine under load. The prepared 30-second version, compressed once more, is exactly what the moment exists to find.",
     "id": "Format bertekanan mengukur cara mesinmu bekerja di bawah beban. Versi 30 detik yang sudah kamu siapkan, dipadatkan sekali lagi, adalah persis yang ingin ditemukan momen itu."
    }
   },
   {
    "type": "know",
    "q": {
     "en": "Your questions at the end of an interview are scored as:",
     "id": "Pertanyaan-pertanyaanmu di akhir wawancara dinilai sebagai:"
    },
    "opts": [
     {
      "en": "Politeness formalities",
      "id": "Formalitas kesopanan"
     },
     {
      "en": "Evidence of judgment and genuine interest — prepared, specific, and impossible to answer from the website",
      "id": "Bukti pertimbangan dan minat yang tulus — disiapkan, spesifik, dan tidak mungkin dijawab hanya dari situs web"
     },
     {
      "en": "A chance to negotiate early",
      "id": "Kesempatan bernegosiasi lebih awal"
     },
     {
      "en": "Filler while they complete notes",
      "id": "Pengisi waktu selagi mereka melengkapi catatan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "'What would the first two deliverables be?' and 'what happened to the last person in this seat?' read the role while scoring you as someone who evaluates deliberately.",
     "id": "'Apa dua hasil kerja pertama yang diharapkan?' dan 'apa yang terjadi pada orang terakhir di posisi ini?' membaca perannya, sekaligus menandaimu sebagai orang yang mengevaluasi dengan sadar."
    }
   },
   {
    "type": "scen",
    "q": {
     "en": "Five minutes before a video interview, your preparation includes:",
     "id": "Lima menit sebelum wawancara video, persiapanmu mencakup:"
    },
    "opts": [
     {
      "en": "Rereading all thirty stories",
      "id": "Membaca ulang ketiga puluh cerita"
     },
     {
      "en": "Tech check, water, the JD and your three load-bearing numbers visible, notifications silenced",
      "id": "Cek perangkat, air minum, deskripsi lowongan dan tiga angka andalanmu terlihat, notifikasi disenyapkan"
     },
     {
      "en": "Coffee and high-energy music",
      "id": "Kopi dan musik berenergi tinggi"
     },
     {
      "en": "A final practice run of answers",
      "id": "Latihan terakhir untuk semua jawaban"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The last minutes protect the machine, not upgrade it — the same rule as test day. Warm, present, technically clean.",
     "id": "Menit-menit terakhir gunanya melindungi mesin, bukan meningkatkannya — aturan yang sama dengan hari tes. Hangat, hadir sepenuhnya, dan bersih secara teknis."
    }
   }
  ],
  "reflect": null
 },
 "7": {
  "mcq": [
   {
    "type": "know",
    "q": {
     "en": "The deliberate-practice loop the simulator implements is:",
     "id": "Putaran latihan terarah yang dijalankan simulator adalah:"
    },
    "opts": [
     {
      "en": "Watch → memorise → repeat",
      "id": "Tonton → hafalkan → ulangi"
     },
     {
      "en": "Prepare → Practice → Review → Improve, with the weakest dimension configuring the next session",
      "id": "Prepare → Practice → Review → Improve, dengan dimensi terlemah menentukan sesi berikutnya"
     },
     {
      "en": "Test → grade → rank",
      "id": "Tes → nilai → peringkat"
     },
     {
      "en": "Record → upload → share",
      "id": "Rekam → unggah → bagikan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Practice without review is repetition; review without the next session is theory. The loop closes when the debrief changes the next attempt.",
     "id": "Latihan tanpa tinjauan hanyalah pengulangan; tinjauan tanpa sesi berikutnya hanyalah teori. Putarannya baru tertutup ketika debrief mengubah percobaan berikutnya."
    }
   },
   {
    "type": "scen",
    "q": {
     "en": "Your debrief shows strong content but rambling delivery (wpm high, structure markers missing). The next session should:",
     "id": "Debrief-mu menunjukkan isi yang kuat tapi penyampaian yang melantur (kata per menit tinggi, penanda struktur tidak ada). Sesi berikutnya sebaiknya:"
    },
    "opts": [
     {
      "en": "Add harder questions",
      "id": "Menambah pertanyaan yang lebih sulit"
     },
     {
      "en": "Drill the same questions with a structure emphasis — signposted answers, capped length",
      "id": "Melatih pertanyaan yang sama dengan penekanan pada struktur — jawaban dengan penanda arah yang jelas, panjangnya dibatasi"
     },
     {
      "en": "Switch to typing answers",
      "id": "Beralih ke jawaban yang diketik"
     },
     {
      "en": "Take a week off to reset",
      "id": "Libur seminggu untuk menyegarkan diri"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Improve means targeting the weakest dimension, not accumulating volume. Same material, one emphasis, measurable delta.",
     "id": "Improve berarti membidik dimensi yang paling lemah, bukan menumpuk volume. Materi yang sama, satu penekanan, selisih yang terukur."
    }
   },
   {
    "type": "know",
    "q": {
     "en": "Why does The Rope refuse to fake body-language scores from your camera?",
     "id": "Mengapa The Rope menolak memalsukan skor bahasa tubuh dari kameramu?"
    },
    "opts": [
     {
      "en": "Cameras are too low-resolution",
      "id": "Resolusi kamera terlalu rendah"
     },
     {
      "en": "Honest instrumentation: pixel-based emotion claims are pseudo-science, so presence is self-reviewed against a guided checklist instead",
      "id": "Instrumen yang jujur: klaim membaca emosi dari piksel adalah pseudo-sains, jadi kehadiranmu ditinjau sendiri lewat daftar periksa terpandu"
     },
     {
      "en": "Privacy law forbids all video analysis",
      "id": "Hukum privasi melarang semua analisis video"
     },
     {
      "en": "It would slow the simulator down",
      "id": "Itu akan memperlambat simulator"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Replaying your own recording against a guided self-review is also better pedagogy — you build the evaluator you will need for life.",
     "id": "Memutar ulang rekamanmu sendiri dengan panduan tinjauan diri juga secara pedagogis lebih baik — kamu membangun penilai internal yang akan kamu butuhkan seumur hidup."
    }
   },
   {
    "type": "scen",
    "q": {
     "en": "A tool promises live whispered answers during real interviews. The Rope's position:",
     "id": "Sebuah alat menjanjikan bisikan jawaban secara langsung selama wawancara sungguhan. Sikap The Rope:"
    },
    "opts": [
     {
      "en": "Useful if undetectable",
      "id": "Berguna, asal tidak terdeteksi"
     },
     {
      "en": "Refused: it corrupts the evaluation, violates policies, builds dependence, and prepares you for nothing",
      "id": "Ditolak: ia merusak evaluasi, melanggar kebijakan, membangun ketergantungan, dan tidak menyiapkanmu untuk apa pun"
     },
     {
      "en": "Acceptable for very hard interviews",
      "id": "Bisa diterima untuk wawancara yang sangat sulit"
     },
     {
      "en": "Fine if disclosed afterwards",
      "id": "Boleh, asal diungkapkan setelahnya"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The simulator prepares you before the interview; concealed assistance during it makes the employer's decision measure the tool, not the person.",
     "id": "Simulator menyiapkanmu sebelum wawancara; bantuan tersembunyi di tengah wawancara membuat keputusan pemberi kerja mengukur alatnya, bukan orangnya."
    }
   }
  ],
  "reflect": null
 },
 "8": {
  "mcq": [
   {
    "type": "know",
    "q": {
     "en": "An offer's negotiable bundle includes:",
     "id": "Paket tawaran yang bisa dinegosiasikan mencakup:"
    },
    "opts": [
     {
      "en": "Base salary only",
      "id": "Gaji pokok saja"
     },
     {
      "en": "Base, start date, review timing, allowances, development budget, scope — the whole package",
      "id": "Gaji pokok, tanggal mulai, waktu tinjauan gaji, tunjangan, anggaran pengembangan, lingkup kerja — seluruh paketnya"
     },
     {
      "en": "Nothing at entry level",
      "id": "Tidak ada yang bisa dinegosiasikan di level pemula"
     },
     {
      "en": "Title and reporting line only",
      "id": "Jabatan dan garis pelaporan saja"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "When the base is capped, early review dates, development budgets and scope commitments often are not — negotiate the bundle, not one number.",
     "id": "Ketika gaji pokok sudah mentok, tanggal tinjauan yang lebih awal, anggaran pengembangan, dan komitmen lingkup kerja sering kali belum — negosiasikan paketnya, bukan satu angka."
    }
   },
   {
    "type": "scen",
    "q": {
     "en": "Asked for your expected salary before any offer, the prepared move is:",
     "id": "Ditanya ekspektasi gaji sebelum ada tawaran, langkah yang sudah disiapkan adalah:"
    },
    "opts": [
     {
      "en": "Name your minimum to seem reasonable",
      "id": "Sebutkan angka minimummu supaya terlihat masuk akal"
     },
     {
      "en": "Give a researched range anchored to the market for the role, and ask about their band",
      "id": "Berikan rentang hasil riset yang berpijak pada pasar untuk peran itu, lalu tanyakan rentang gaji mereka"
     },
     {
      "en": "Refuse to discuss money before an offer",
      "id": "Menolak membahas uang sebelum ada tawaran"
     },
     {
      "en": "Say 'whatever is standard'",
      "id": "Bilang 'berapa pun yang standar'"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "A researched range signals preparation without anchoring you low. The market does not know or care what you currently earn.",
     "id": "Rentang hasil riset menunjukkan persiapan tanpa mengunci dirimu di angka rendah. Pasar tidak tahu dan tidak peduli berapa gajimu sekarang."
    }
   },
   {
    "type": "know",
    "q": {
     "en": "Accepting intending to renege if something better lands is wrong because:",
     "id": "Menerima tawaran sambil berniat mundur kalau ada yang lebih baik itu keliru karena:"
    },
    "opts": [
     {
      "en": "It is technically breach of contract everywhere",
      "id": "Itu secara teknis pelanggaran kontrak di mana pun"
     },
     {
      "en": "It trades one-time convenience for network damage at the most formative moment — and the honest alternatives usually work",
      "id": "Itu menukar kemudahan sesaat dengan kerusakan jaringan di momen yang paling menentukan — padahal alternatif yang jujur biasanya berhasil"
     },
     {
      "en": "Companies always find out immediately",
      "id": "Perusahaan selalu langsung tahu"
     },
     {
      "en": "It is not wrong — business is business",
      "id": "Tidak keliru — bisnis tetap bisnis"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Recruiters move between companies and remember. Extension requests and acceleration asks are routine and professional; games are rarely necessary and never free.",
     "id": "Perekrut berpindah-pindah perusahaan dan punya ingatan panjang. Meminta perpanjangan waktu dan meminta percepatan proses itu lazim dan profesional; bermain-main jarang perlu, dan tidak pernah gratis."
    }
   },
   {
    "type": "scen",
    "q": {
     "en": "The offer arrives below your researched range with 'this is standard for fresh graduates'. You:",
     "id": "Tawaran datang di bawah rentang hasil risetmu, dengan alasan 'ini standar untuk lulusan baru'. Kamu:"
    },
    "opts": [
     {
      "en": "Accept — arguing looks entitled",
      "id": "Terima — membantah terlihat tidak tahu diri"
     },
     {
      "en": "Counter once, calmly, with the specific market anchor and your strongest evidence line, then decide on the full bundle",
      "id": "Ajukan penawaran balik satu kali, dengan tenang, memakai acuan pasar yang spesifik dan bukti terkuatmu, lalu putuskan berdasarkan paket keseluruhan"
     },
     {
      "en": "Decline immediately on principle",
      "id": "Langsung tolak demi prinsip"
     },
     {
      "en": "Ask for time and ghost them",
      "id": "Minta waktu, lalu menghilang"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "One professional counter with evidence is expected and respected; offers are ranges wearing a number. Then the two lenses decide on the bundle, not pride.",
     "id": "Satu penawaran balik yang profesional dan berbukti itu diharapkan dan dihormati; tawaran adalah sebuah rentang yang tampil sebagai satu angka. Setelah itu, dua lensa yang memutuskan berdasarkan paketnya — bukan gengsi."
    }
   }
  ],
  "reflect": null
 },
 "9": {
  "mcq": [
   {
    "type": "know",
    "q": {
     "en": "The first 90 days' primary job is:",
     "id": "Tugas utama di 90 hari pertama adalah:"
    },
    "opts": [
     {
      "en": "Impressing with long hours",
      "id": "Membuat kesan lewat jam kerja yang panjang"
     },
     {
      "en": "Learning the terrain, building trust through small reliable deliveries, and confirming the role's fit",
      "id": "Mempelajari medan, membangun kepercayaan lewat hasil kerja kecil yang andal, dan memastikan perannya memang cocok"
     },
     {
      "en": "Proposing major changes early",
      "id": "Mengusulkan perubahan besar sejak awal"
     },
     {
      "en": "Befriending senior leadership",
      "id": "Berteman dengan pimpinan senior"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Probation is mutual evaluation. Small finished deliveries, visible learning, and the midpoint feedback ask beat any heroic gesture.",
     "id": "Masa percobaan adalah evaluasi dua arah. Hasil kerja kecil yang tuntas, proses belajar yang terlihat, dan permintaan masukan di pertengahan mengalahkan aksi heroik apa pun."
    }
   },
   {
    "type": "scen",
    "q": {
     "en": "Week 6 of probation, you ask your manager: 'what would make the second half more valuable?' because:",
     "id": "Di minggu ke-6 masa percobaan, kamu bertanya kepada manajermu: 'apa yang akan membuat paruh kedua ini lebih bernilai?' karena:"
    },
    "opts": [
     {
      "en": "It fills the one-on-one agenda",
      "id": "Itu mengisi agenda sesi one-on-one"
     },
     {
      "en": "Mid-course feedback acted on observably is rarer and more impressive than getting everything right first time",
      "id": "Masukan di tengah jalan yang terlihat ditindaklanjuti lebih langka dan lebih mengesankan daripada langsung benar sejak awal"
     },
     {
      "en": "HR requires a midpoint review",
      "id": "HR mewajibkan tinjauan pertengahan"
     },
     {
      "en": "It signals anxiety about passing",
      "id": "Itu menunjukkan kecemasan soal lulus atau tidak"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The question converts probation from silent judgment into a coached loop — and marks you as the colleague on whom feedback is not wasted.",
     "id": "Pertanyaan itu mengubah masa percobaan dari penilaian diam-diam menjadi proses yang dibimbing — dan menandaimu sebagai kolega yang masukannya tidak pernah sia-sia."
    }
   },
   {
    "type": "know",
    "q": {
     "en": "The peer-practice protocol for interview skills:",
     "id": "Protokol latihan bersama rekan untuk keterampilan wawancara:"
    },
    "opts": [
     {
      "en": "Practice alone until perfect, then test live",
      "id": "Berlatih sendiri sampai sempurna, lalu uji di wawancara sungguhan"
     },
     {
      "en": "Rotating roles with a scripted case and a scoresheet — the giver learns as much as the performer",
      "id": "Bergantian peran dengan kasus yang sudah disiapkan dan lembar penilaian — yang menilai belajar sama banyaknya dengan yang tampil"
     },
     {
      "en": "Watching recordings of experts",
      "id": "Menonton rekaman para ahli"
     },
     {
      "en": "Competitive mock rankings",
      "id": "Peringkat kompetitif hasil simulasi"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Human practice adds the social pressure no simulator fully replicates — honestly, with consent, through Basecamp and study partners.",
     "id": "Latihan dengan manusia menambahkan tekanan sosial yang tidak sepenuhnya bisa ditiru simulator — dengan jujur, atas persetujuan, lewat Basecamp dan teman belajar."
    }
   },
   {
    "type": "scen",
    "q": {
     "en": "Probation review reveals a real skills gap in the role you fought to win. The Rope's closing frame says:",
     "id": "Tinjauan masa percobaan mengungkap celah keterampilan yang nyata di peran yang kamu perjuangkan. Bingkai penutup The Rope mengatakan:"
    },
    "opts": [
     {
      "en": "Hide it and compensate with hours",
      "id": "Sembunyikan dan tutupi dengan jam kerja"
     },
     {
      "en": "Name it to your manager with your closing plan — the recovery loop, applied to employment",
      "id": "Sampaikan kepada manajermu beserta rencana menutupnya — putaran pemulihan, diterapkan di dunia kerja"
     },
     {
      "en": "Start jobseeking before it is noticed",
      "id": "Mulai cari kerja sebelum ketahuan"
     },
     {
      "en": "Blame the onboarding process",
      "id": "Salahkan proses onboarding-nya"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Name → Normalise → Extract → Next step never expires: managers invest in people who surface gaps with plans attached.",
     "id": "Sebut → Normalkan → Petik pelajaran → Langkah berikutnya tidak pernah kedaluwarsa: manajer berinvestasi pada orang yang mengangkat celahnya sendiri lengkap dengan rencana."
    }
   }
  ],
  "reflect": {
   "prompt": {
    "en": "Write the opening 60 seconds you would give in your next real interview: who you are, the one thing to remember, and the evidence line that survives three whys. Then read it aloud once.",
    "id": "Tulis 60 detik pembuka yang akan kamu sampaikan di wawancara sungguhan berikutnya: siapa kamu, satu hal yang harus mereka ingat, dan baris bukti yang tahan tiga kali ditanya 'mengapa'. Lalu bacakan dengan suara lantang satu kali."
   },
   "min": 25
  }
 }
};
