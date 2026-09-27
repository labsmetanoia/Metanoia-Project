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
  "minutes": 12,
  "blueprint": [
   {
    "lesson": "2.1",
    "h": {
     "en": "Mining Your Stories",
     "id": "Menggali Cerita"
    },
    "sub": {
     "en": "Five prompts, the filter, the Core 10 coverage grid, the four kinds that fail.",
     "id": "Lima pemicu, saringan, kisi cakupan Core 10, empat jenis yang gagal."
    }
   },
   {
    "lesson": "2.2",
    "h": {
     "en": "STAR+L",
     "id": "STAR+L"
    },
    "sub": {
     "en": "Obstacle, reasoning in the Action, results without invented numbers, the learning, timing.",
     "id": "Hambatan, alasan di Aksi, hasil tanpa angka karangan, pembelajaran, waktu."
    }
   },
   {
    "lesson": "2.3",
    "h": {
     "en": "Depth — Surviving the Probes",
     "id": "Kedalaman — Bertahan dari Galian"
    },
    "sub": {
     "en": "Six probe families, depth cards, failure and integrity stories, the consistency rule.",
     "id": "Enam keluarga galian, kartu kedalaman, cerita kegagalan dan integritas, aturan konsistensi."
    }
   },
   {
    "lesson": "2.4",
    "h": {
     "en": "Flexing One Story",
     "id": "Satu Cerita, Banyak Sudut"
    },
    "sub": {
     "en": "Three lengths, leading with the angle asked, both languages, the used-with log.",
     "id": "Tiga panjang, membuka dengan sudut yang ditanyakan, dua bahasa, catatan pemakaian."
    }
   }
  ],
  "mcq": [
   {
    "type": "know",
    "lesson": "2.1",
    "q": {
     "en": "A fresh graduate’s mining sheet has 27 candidates. The Core 10 is chosen so that…",
     "id": "Lembar penggalian lulusan baru punya 27 kandidat. Core 10 dipilih agar…"
    },
    "opts": [
     {
      "en": "The ten most impressive are kept",
      "id": "Sepuluh yang paling mengesankan dipertahankan"
     },
     {
      "en": "Every coverage slot has a story and no single setting supplies more than four",
      "id": "Setiap slot cakupan punya cerita dan tidak ada satu latar menyumbang lebih dari empat"
     },
     {
      "en": "All ten come from paid work",
      "id": "Semua sepuluh dari pekerjaan berbayar"
     },
     {
      "en": "Each story covers exactly one slot",
      "id": "Tiap cerita mencakup tepat satu slot"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Coverage first, then range; a story usually serves two or three slots, which is why ten answer forty questions.",
     "id": "Cakupan dulu, lalu rentang; satu cerita biasanya melayani dua atau tiga slot, itulah sebabnya sepuluh menjawab empat puluh pertanyaan."
    }
   },
   {
    "type": "scen",
    "lesson": "2.1",
    "q": {
     "en": "“Was treasurer of HIMA for a year and managed Rp 120 juta.” As a story candidate this…",
     "id": "“Menjadi bendahara HIMA selama setahun dan mengelola Rp 120 juta.” Sebagai kandidat cerita ini…"
    },
    "opts": [
     {
      "en": "Passes — it has a number",
      "id": "Lolos — ada angkanya"
     },
     {
      "en": "Fails the filter — a title and a period, no situation, no action, no result; the story is underneath it",
      "id": "Gagal saringan — jabatan dan periode, tanpa situasi, tindakan, hasil; ceritanya ada di bawahnya"
     },
     {
      "en": "Fails — HIMA is not real experience",
      "id": "Gagal — HIMA bukan pengalaman nyata"
     },
     {
      "en": "Passes — it covers the leadership slot",
      "id": "Lolos — mencakup slot kepemimpinan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Titles and periods are the most common false candidates; dig under them for the audit, the receipts refusal, the midterm week.",
     "id": "Jabatan dan periode adalah kandidat palsu paling umum; gali di bawahnya untuk audit, penolakan kuitansi, minggu UTS."
    }
   },
   {
    "type": "know",
    "lesson": "2.2",
    "q": {
     "en": "In a 90-second STAR+L answer, the Action should take about…",
     "id": "Dalam jawaban STAR+L 90 detik, Aksi seharusnya memakan sekitar…"
    },
    "opts": [
     {
      "en": "10% — keep it brief",
      "id": "10% — singkat saja"
     },
     {
      "en": "45% — nearly half, step by step with reasons",
      "id": "45% — hampir separuh, langkah demi langkah dengan alasan"
     },
     {
      "en": "75% — everything else is filler",
      "id": "75% — sisanya pengisi"
     },
     {
      "en": "25% — equal to the Situation",
      "id": "25% — sama dengan Situasi"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Action carries the score; Situation, Task and Obstacle are about ten percent each, Result and Learning share the rest.",
     "id": "Aksi memikul skornya; Situasi, Tugas, dan Hambatan sekitar sepuluh persen masing-masing, Hasil dan Pembelajaran berbagi sisanya."
    }
   },
   {
    "type": "scen",
    "lesson": "2.2",
    "q": {
     "en": "A candidate ends a story with “Saya belajar pentingnya komunikasi.” The Learning is…",
     "id": "Kandidat mengakhiri cerita dengan “Saya belajar pentingnya komunikasi.” Pembelajarannya…"
    },
    "opts": [
     {
      "en": "Acceptable — it is reflective",
      "id": "Boleh — reflektif"
     },
     {
      "en": "A platitude — it should name a specific behaviour change and where it was applied since",
      "id": "Basa-basi — seharusnya menyebut perubahan perilaku spesifik dan di mana diterapkan sejak itu"
     },
     {
      "en": "Too long",
      "id": "Terlalu panjang"
     },
     {
      "en": "Fine if said in English",
      "id": "Boleh jika dalam bahasa Inggris"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "“I now call rather than message when someone goes quiet, and did so with…” is a learning; a value word is not.",
     "id": "“Sekarang saya menelepon alih-alih mengirim pesan saat seseorang diam, dan melakukannya dengan…” adalah pembelajaran; kata nilai bukan."
    }
   },
   {
    "type": "know",
    "lesson": "2.3",
    "q": {
     "en": "“Tools apa yang dipakai?”, “berapa lama?” and “siapa yang mengerjakan bagian datanya?” all belong to the probe family…",
     "id": "“Tools apa yang dipakai?”, “berapa lama?”, dan “siapa yang mengerjakan bagian datanya?” semuanya termasuk keluarga galian…"
    },
    "opts": [
     {
      "en": "Transfer",
      "id": "Transfer"
     },
     {
      "en": "Detail",
      "id": "Detail"
     },
     {
      "en": "Counterfactual",
      "id": "Kontrafaktual"
     },
     {
      "en": "Difficulty",
      "id": "Kesulitan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Knowing the family lets you prepare the fact before you know the wording — the depth card holds one prepared fact per family.",
     "id": "Mengetahui keluarganya membuatmu bisa menyiapkan faktanya sebelum tahu kata-katanya — kartu kedalaman menyimpan satu fakta per keluarga."
    }
   },
   {
    "type": "scen",
    "lesson": "2.3",
    "q": {
     "en": "In the HR round a candidate said the sponsorship gap closed in “sixteen days”; in the user round she says “about three weeks”. At the debrief this…",
     "id": "Di ronde HR kandidat berkata kekurangan sponsorship ditutup dalam “enam belas hari”; di ronde user ia berkata “sekitar tiga minggu”. Di rapat evaluasi ini…"
    },
    "opts": [
     {
      "en": "Goes unnoticed — the rounds are separate",
      "id": "Tidak disadari — rondenya terpisah"
     },
     {
      "en": "Is raised as an inconsistency and weakens trust in all her evidence — the depth card should have fixed the number or marked it “approx.”",
      "id": "Diangkat sebagai ketidakkonsistenan dan melemahkan kepercayaan pada semua buktinya — kartu kedalaman seharusnya menetapkan angkanya atau menandainya “kira-kira”"
     },
     {
      "en": "Helps — it shows flexibility",
      "id": "Membantu — menunjukkan fleksibilitas"
     },
     {
      "en": "Is fine because both are roughly right",
      "id": "Tidak apa karena keduanya kira-kira benar"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Interviewers meet afterwards; the consistency rule is to use the same facts in every round, with the honest hedge planned on the card.",
     "id": "Pewawancara bertemu setelahnya; aturan konsistensi adalah memakai fakta yang sama di setiap ronde, dengan pagar jujur direncanakan di kartu."
    }
   },
   {
    "type": "scen",
    "lesson": "2.4",
    "q": {
     "en": "The same sponsorship story is asked as “ceritakan saat Anda meyakinkan orang yang lebih senior”. The strong opening is…",
     "id": "Cerita sponsorship yang sama ditanyakan sebagai “ceritakan saat Anda meyakinkan orang yang lebih senior”. Pembuka yang kuat adalah…"
    },
    "opts": [
     {
      "en": "The full story from the beginning, as always",
      "id": "Cerita penuh dari awal, seperti biasa"
     },
     {
      "en": "The persuasion part first — the chair, the conversion data, the cheaper package — then the rest as context",
      "id": "Bagian persuasinya dulu — ketua, data konversi, paket lebih murah — lalu sisanya sebagai konteks"
     },
     {
      "en": "A different story — one story cannot answer two questions",
      "id": "Cerita berbeda — satu cerita tidak bisa menjawab dua pertanyaan"
     },
     {
      "en": "The result first, to impress",
      "id": "Hasilnya dulu, agar mengesankan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Lead with the angle asked; the same facts, a different first sentence.",
     "id": "Buka dengan sudut yang ditanyakan; fakta yang sama, kalimat pertama berbeda."
    }
   },
   {
    "type": "know",
    "lesson": "2.4",
    "q": {
     "en": "The three lengths of a prepared story are…",
     "id": "Tiga panjang cerita yang disiapkan adalah…"
    },
    "opts": [
     {
      "en": "30 s, 5 min, 15 min",
      "id": "30 dtk, 5 mnt, 15 mnt"
     },
     {
      "en": "A 20-second headline, a 60–90-second standard answer, a 3-minute deep version for probing",
      "id": "Headline 20 detik, jawaban standar 60–90 detik, versi dalam 3 menit untuk galian"
     },
     {
      "en": "Short, medium, long — decided on the day",
      "id": "Pendek, sedang, panjang — diputuskan saat itu"
     },
     {
      "en": "One length; interviewers stop you if needed",
      "id": "Satu panjang; pewawancara menghentikanmu jika perlu"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The headline answers a one-way video or a quick “contohnya?”; the full answer is the default; the deep version is what the probes unpack.",
     "id": "Headline menjawab video satu arah atau “contohnya?” singkat; jawaban penuh adalah bawaan; versi dalam adalah yang dibongkar galian."
    }
   }
  ],
  "reflect": {
   "prompt": {
    "en": "At least 100 words. Which of your Core 10 stories are you least confident defending under probing — and which probe family (ownership, reasoning, detail, difficulty, counterfactual, transfer) would expose it? Name the fact you need to recover to answer that probe, where you will recover it from (a message thread, a report, a person), and what you will write as “approx.” if you cannot.",
    "id": "Minimal 100 kata. Cerita Core 10 mana yang paling tidak yakin kamu pertahankan saat digali — dan keluarga galian mana (kepemilikan, alasan, detail, kesulitan, kontrafaktual, transfer) yang akan membongkarnya? Sebutkan fakta yang perlu kamu pulihkan untuk menjawab galian itu, dari mana kamu memulihkannya (utas pesan, laporan, seseorang), dan apa yang akan kamu tulis sebagai “kira-kira” jika tidak bisa."
   },
   "guide": [
    {
     "en": "Name the story by its Kit title and the slot it fills.",
     "id": "Sebutkan cerita dengan judul Perangkat dan slot yang diisinya."
    },
    {
     "en": "Name the family, not just “they might ask details”.",
     "id": "Sebutkan keluarganya, bukan hanya “mereka mungkin bertanya detail”."
    },
    {
     "en": "The recovery should be an action you can take this week.",
     "id": "Pemulihan harus tindakan yang bisa kamu lakukan minggu ini."
    }
   ],
   "min": 100
  }
 },
 "3": {
  "minutes": 10,
  "blueprint": [
   {
    "lesson": "3.1",
    "h": {
     "en": "Reading a Job Description as a Scoresheet",
     "id": "Membaca Deskripsi Pekerjaan sebagai Lembar Penilaian"
    },
    "sub": {
     "en": "Four layers, verbs to competencies, weighting, values into probes, the evidence table.",
     "id": "Empat lapis, kata kerja ke kompetensi, pembobotan, nilai menjadi galian, tabel bukti."
    }
   },
   {
    "lesson": "3.2",
    "h": {
     "en": "Researching the Organisation in 90 Minutes",
     "id": "Meriset Organisasi dalam 90 Menit"
    },
    "sub": {
     "en": "Six blocks, six outputs, answers not recitals, Indonesian sources.",
     "id": "Enam blok, enam keluaran, jawaban bukan pembacaan, sumber Indonesia."
    }
   },
   {
    "lesson": "3.3",
    "h": {
     "en": "Predict and Map — The Hypothesis Hour",
     "id": "Prediksi dan Petakan — Jam Hipotesis"
    },
    "sub": {
     "en": "The predicted set, primary and backup, minable and real gaps, the matrix, the checklist.",
     "id": "Set prediksi, utama dan cadangan, celah yang bisa digali dan nyata, matriks, daftar periksa."
    }
   }
  ],
  "mcq": [
   {
    "type": "scen",
    "lesson": "3.1",
    "q": {
     "en": "A posting reads: “Melakukan rekonsiliasi harian (1) · Menangani keluhan nasabah (2) · Bersedia ditempatkan di seluruh Indonesia (3) · Teliti dan berintegritas (4)”. Which line is an eligibility screen?",
     "id": "Lowongan berbunyi: “Melakukan rekonsiliasi harian (1) · Menangani keluhan nasabah (2) · Bersedia ditempatkan di seluruh Indonesia (3) · Teliti dan berintegritas (4)”. Baris mana yang saringan kelayakan?"
    },
    "opts": [
     {
      "en": "1",
      "id": "1"
     },
     {
      "en": "2",
      "id": "2"
     },
     {
      "en": "3 — answered with a true sentence, not a story",
      "id": "3 — dijawab dengan kalimat jujur, bukan cerita"
     },
     {
      "en": "4",
      "id": "4"
     }
    ],
    "correct": 2,
    "expl": {
     "en": "“Bersedia …” lines are pass/fail; the others are can-do, service and values competencies that predict story questions.",
     "id": "Baris “Bersedia …” adalah lulus/gagal; yang lain kompetensi bisa, layanan, dan nilai yang memprediksi pertanyaan cerita."
    }
   },
   {
    "type": "know",
    "lesson": "3.1",
    "q": {
     "en": "The strongest cue that a competency carries the largest weight on the scorecard is…",
     "id": "Petunjuk terkuat bahwa sebuah kompetensi memikul bobot terbesar di lembar penilaian adalah…"
    },
    "opts": [
     {
      "en": "It has the longest bullet",
      "id": "Butirnya paling panjang"
     },
     {
      "en": "It is repeated across layers — responsibilities, requirements and company language",
      "id": "Diulang lintas lapis — tanggung jawab, persyaratan, dan bahasa perusahaan"
     },
     {
      "en": "It is listed last",
      "id": "Disebut terakhir"
     },
     {
      "en": "It is in English",
      "id": "Dalam bahasa Inggris"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Position, repetition and “wajib” are the weighting cues; three appearances make a core theme.",
     "id": "Posisi, pengulangan, dan “wajib” adalah petunjuk pembobotan; tiga kemunculan membentuk tema inti."
    }
   },
   {
    "type": "scen",
    "lesson": "3.2",
    "q": {
     "en": "HR asks “apa yang Anda ketahui tentang kami?” The strong answer…",
     "id": "HR bertanya “apa yang Anda ketahui tentang kami?” Jawaban yang kuat…"
    },
    "opts": [
     {
      "en": "Recites the founding year, the number of branches and the awards",
      "id": "Membacakan tahun berdiri, jumlah cabang, dan penghargaan"
     },
     {
      "en": "Spends one researched fact — a priority from the report — connected to a reason the candidate chose them",
      "id": "Membelanjakan satu fakta riset — prioritas dari laporan — terhubung dengan alasan kandidat memilih mereka"
     },
     {
      "en": "Quotes an employee review",
      "id": "Mengutip ulasan karyawan"
     },
     {
      "en": "Says “I read your website”",
      "id": "Berkata “saya membaca situs Anda”"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The hidden concern is whether the application is random; an anchor answers it, a recital does not.",
     "id": "Kekhawatiran tersembunyinya apakah lamaran acak; jangkar menjawabnya, pembacaan tidak."
    }
   },
   {
    "type": "know",
    "lesson": "3.2",
    "q": {
     "en": "For a startup with no annual report, block 2 of the research sprint uses…",
     "id": "Untuk startup tanpa laporan tahunan, blok 2 sprint riset memakai…"
    },
    "opts": [
     {
      "en": "Nothing — skip it",
      "id": "Tidak ada — lewati"
     },
     {
      "en": "Founder posts, funding and launch announcements, and the product itself",
      "id": "Unggahan pendiri, pengumuman pendanaan dan peluncuran, dan produk itu sendiri"
     },
     {
      "en": "The competitor’s annual report",
      "id": "Laporan tahunan pesaing"
     },
     {
      "en": "Employee reviews",
      "id": "Ulasan karyawan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The equivalents of a report at a startup are the founders’ public statements and the product.",
     "id": "Padanan laporan di startup adalah pernyataan publik pendiri dan produknya."
    }
   },
   {
    "type": "scen",
    "lesson": "3.3",
    "q": {
     "en": "The mapping shows “people management” as a predicted question with no story. Nadia has led a six-person volunteer team but never managed staff. The gap is…",
     "id": "Pemetaan menunjukkan “manajemen orang” sebagai pertanyaan prediksi tanpa cerita. Nadia pernah memimpin tim relawan enam orang tetapi tidak pernah mengelola staf. Celahnya…"
    },
    "opts": [
     {
      "en": "Minable — frame the volunteer team as management",
      "id": "Bisa digali — bingkai tim relawan sebagai manajemen"
     },
     {
      "en": "Real — answer with limit, adjacent evidence (the volunteer team), a plan and a motive",
      "id": "Nyata — jawab dengan batas, bukti berdekatan (tim relawan), rencana, dan motif"
     },
     {
      "en": "Not a gap — say yes",
      "id": "Bukan celah — jawab ya"
     },
     {
      "en": "A reason to withdraw",
      "id": "Alasan mengundurkan diri"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "She does not yet have the competency; the owned-gap answer uses the adjacent evidence honestly and turns the gap into motive.",
     "id": "Ia belum punya kompetensinya; jawaban celah yang diakui memakai bukti berdekatan dengan jujur dan mengubah celah menjadi motif."
    }
   },
   {
    "type": "know",
    "lesson": "3.3",
    "q": {
     "en": "In the story × competency matrix, a row with three or more marks is…",
     "id": "Dalam matriks cerita × kompetensi, baris dengan tiga tanda atau lebih adalah…"
    },
    "opts": [
     {
      "en": "Over-used — delete it",
      "id": "Terlalu sering dipakai — hapus"
     },
     {
      "en": "A workhorse — rehearse it at all three lengths because it will be used more than once",
      "id": "Andalan — latih di ketiga panjang karena akan dipakai lebih dari sekali"
     },
     {
      "en": "A gap",
      "id": "Celah"
     },
     {
      "en": "An eligibility item",
      "id": "Butir kelayakan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Workhorses are polished first; a row over four marks is asked to do too much and one column moves to the backup.",
     "id": "Andalan dipoles lebih dulu; baris di atas empat tanda diminta terlalu banyak dan satu kolom pindah ke cadangan."
    }
   }
  ],
  "reflect": {
   "prompt": {
    "en": "At least 100 words. For your top target: which scorecard line did you weight highest, and which two cues (position, repetition, marking, the founder’s or company’s own words) made you weight it that way? Then name the predicted question you are least ready for, say whether its gap is minable or real, and write the first sentence of the answer you will give.",
    "id": "Minimal 100 kata. Untuk sasaran teratasmu: baris lembar penilaian mana yang kamu bobot tertinggi, dan dua petunjuk mana (posisi, pengulangan, penandaan, kata-kata pendiri atau perusahaan sendiri) yang membuatmu membobotnya begitu? Lalu sebutkan pertanyaan prediksi yang paling tidak siap kamu jawab, katakan apakah celahnya bisa digali atau nyata, dan tulis kalimat pertama jawaban yang akan kamu berikan."
   },
   "guide": [
    {
     "en": "Quote the posting’s own words for the cues.",
     "id": "Kutip kata-kata lowongan sendiri untuk petunjuknya."
    },
    {
     "en": "A minable gap names what you will dig for; a real gap starts with the limit.",
     "id": "Celah yang bisa digali menyebut apa yang akan kamu gali; celah nyata dimulai dengan batasnya."
    },
    {
     "en": "The first sentence should be one you could say on Tuesday without notes.",
     "id": "Kalimat pertama harus yang bisa kamu ucapkan hari Selasa tanpa catatan."
    }
   ],
   "min": 100
  }
 },
 "4": {
  "minutes": 10,
  "blueprint": [
   {
    "lesson": "4.1",
    "h": {
     "en": "Your Five-Point Core Message",
     "id": "Lima Poin Pesan Utamamu"
    },
    "sub": {
     "en": "Choosing five with evidence, the bridge, the final check.",
     "id": "Memilih lima dengan bukti, jembatan, pemeriksaan akhir."
    }
   },
   {
    "lesson": "4.2",
    "h": {
     "en": "The 60-Second Opening",
     "id": "Pembuka 60 Detik"
    },
    "sub": {
     "en": "Present → Proof → Future, what to leave out, adapting by audience, sounding natural.",
     "id": "Sekarang → Bukti → Masa Depan, apa yang ditinggalkan, menyesuaikan per audiens, terdengar alami."
    }
   },
   {
    "lesson": "4.3",
    "h": {
     "en": "“Why Us? Why This Role? Why You?”",
     "id": "“Kenapa Kami? Kenapa Posisi Ini? Kenapa Anda?”"
    },
    "sub": {
     "en": "REC, three versions, honest motives, the competitor probe.",
     "id": "REC, tiga versi, motif jujur, galian pesaing."
    }
   },
   {
    "lesson": "4.4",
    "h": {
     "en": "Strengths and the Real Weakness",
     "id": "Kekuatan dan Kelemahan Jujur"
    },
    "sub": {
     "en": "Claim + evidence + relevance; Name → Evidence → System → Progress → Edge; choosing; the sceptic’s probe.",
     "id": "Klaim + bukti + relevansi; Nama → Bukti → Sistem → Kemajuan → Tepi; memilih; galian skeptis."
    }
   }
  ],
  "mcq": [
   {
    "type": "know",
    "lesson": "4.1",
    "q": {
     "en": "A strong core-message point is…",
     "id": "Poin pesan utama yang kuat adalah…"
    },
    "opts": [
     {
      "en": "“Saya pekerja keras”",
      "id": "“Saya pekerja keras”"
     },
     {
      "en": "“Terbiasa akurat dengan volume tinggi — rekonsiliasi laporan harian tiga cabang saat magang”",
      "id": "“Terbiasa akurat dengan volume tinggi — rekonsiliasi laporan harian tiga cabang saat magang”"
     },
     {
      "en": "“Saya lulusan universitas negeri”",
      "id": "“Saya lulusan universitas negeri”"
     },
     {
      "en": "“Saya suka belajar”",
      "id": "“Saya suka belajar”"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Relevant to the role, backed by a Core 10 story, and not something every candidate claims.",
     "id": "Relevan dengan peran, didukung cerita Core 10, dan bukan sesuatu yang diklaim setiap kandidat."
    }
   },
   {
    "type": "scen",
    "lesson": "4.1",
    "q": {
     "en": "Twenty-five minutes in, three of your five points have been delivered and the interviewer glances at the clock. The right move is…",
     "id": "Dua puluh lima menit berlalu, tiga dari lima poinmu sudah tersampaikan dan pewawancara melirik jam. Langkah yang tepat adalah…"
    },
    "opts": [
     {
      "en": "Bridge to both missing points in the next answer",
      "id": "Jembatani ke kedua poin yang hilang di jawaban berikutnya"
     },
     {
      "en": "Run the final check, and carry only the missing point that sits on a top-three scorecard line into the close",
      "id": "Jalankan pemeriksaan akhir, dan bawa hanya poin hilang yang berada di baris tiga teratas lembar penilaian ke penutup"
     },
     {
      "en": "Say nothing — three is enough",
      "id": "Diam saja — tiga sudah cukup"
     },
     {
      "en": "Restate all five quickly",
      "id": "Nyatakan ulang kelimanya dengan cepat"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The close carries one key point; a close that carries two is a second interview.",
     "id": "Penutup membawa satu poin kunci; penutup yang membawa dua adalah wawancara kedua."
    }
   },
   {
    "type": "know",
    "lesson": "4.2",
    "q": {
     "en": "In the sixty-second opening, the Proof move should…",
     "id": "Dalam pembuka enam puluh detik, gerakan Bukti sebaiknya…"
    },
    "opts": [
     {
      "en": "Be one sentence",
      "id": "Satu kalimat"
     },
     {
      "en": "Take about thirty-five seconds with two headlines, each carrying a number",
      "id": "Memakan sekitar tiga puluh lima detik dengan dua headline, masing-masing membawa angka"
     },
     {
      "en": "List every organisation you joined",
      "id": "Mendaftar setiap organisasi yang kamu ikuti"
     },
     {
      "en": "Come after the hobbies",
      "id": "Datang setelah hobi"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Proof is more than half the sixty seconds; the two headlines are two of your five points.",
     "id": "Bukti lebih dari separuh enam puluh detik; dua headline adalah dua dari lima poinmu."
    }
   },
   {
    "type": "scen",
    "lesson": "4.2",
    "q": {
     "en": "Five practice takes of your opening are word-for-word identical. This means…",
     "id": "Lima rekaman latihan pembukamu identik kata demi kata. Ini berarti…"
    },
    "opts": [
     {
      "en": "You are ready",
      "id": "Kamu sudah siap"
     },
     {
      "en": "You memorised sentences, not structure and facts — the delivery will sound recited",
      "id": "Kamu menghafal kalimat, bukan struktur dan fakta — penyampaiannya akan terdengar hafalan"
     },
     {
      "en": "The opening is too short",
      "id": "Pembukanya terlalu pendek"
     },
     {
      "en": "Nothing — consistency is good",
      "id": "Tidak apa — konsistensi itu baik"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Keep the numbers identical and let the words vary; identical takes are the warning sign.",
     "id": "Jaga angkanya identik dan biarkan kata-katanya bervariasi; rekaman identik adalah tanda peringatan."
    }
   },
   {
    "type": "scen",
    "lesson": "4.3",
    "q": {
     "en": "“Kenapa kami?” — which answer passes REC?",
     "id": "“Kenapa kami?” — jawaban mana yang lolos REC?"
    },
    "opts": [
     {
      "en": "“Perusahaan besar, terkenal, lingkungan kerjanya bagus, dan saya ingin berkembang.”",
      "id": "“Perusahaan besar, terkenal, lingkungan kerjanya bagus, dan saya ingin berkembang.”"
     },
     {
      "en": "“Di laporan tahunan, fokus tahun ini perluasan kredit UMKM di luar Jawa — dan bagian magang yang paling saya nikmati adalah rekonsiliasi harian, pekerjaan yang ODP jalur operasi lakukan di cabang daerah. Yang bisa saya bawa: kebiasaan menutup selisih hari itu juga; yang ingin saya pelajari: sisi kreditnya.”",
      "id": "“Di laporan tahunan, fokus tahun ini perluasan kredit UMKM di luar Jawa — dan bagian magang yang paling saya nikmati adalah rekonsiliasi harian, pekerjaan yang ODP jalur operasi lakukan di cabang daerah. Yang bisa saya bawa: kebiasaan menutup selisih hari itu juga; yang ingin saya pelajari: sisi kreditnya.”"
     },
     {
      "en": "“Karena stabil dan dekat rumah.”",
      "id": "“Karena stabil dan dekat rumah.”"
     },
     {
      "en": "“Saya sangat passionate tentang perbankan.”",
      "id": "“Saya sangat passionate tentang perbankan.”"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "A verifiable fact not true of the competitor, a link to her history, a contribution and a thing to learn.",
     "id": "Fakta dapat diverifikasi yang tidak berlaku untuk pesaing, tautan ke riwayatnya, kontribusi, dan hal untuk dipelajari."
    }
   },
   {
    "type": "scen",
    "lesson": "4.4",
    "q": {
     "en": "“Kelemahan saya perfeksionis.” The interviewer’s likely next line, and why:",
     "id": "“Kelemahan saya perfeksionis.” Kalimat pewawancara berikutnya yang mungkin, dan mengapa:"
    },
    "opts": [
     {
      "en": "“Bagus, lanjut.” — it is a strength in disguise",
      "id": "“Bagus, lanjut.” — itu kekuatan yang disamarkan"
     },
     {
      "en": "“Itu kedengarannya bukan kelemahan yang serius.” — a cliché is scored as evasion and probed at once",
      "id": "“Itu kedengarannya bukan kelemahan yang serius.” — klise dinilai sebagai mengelak dan segera digali"
     },
     {
      "en": "“Contohnya?” — they believe it",
      "id": "“Contohnya?” — mereka mempercayainya"
     },
     {
      "en": "Nothing — they move on",
      "id": "Tidak ada — mereka lanjut"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Fake weaknesses draw the sceptic’s probe immediately; a real one with a System does not.",
     "id": "Kelemahan palsu segera memancing galian skeptis; yang nyata dengan Sistem tidak."
    }
   }
  ],
  "reflect": {
   "prompt": {
    "en": "At least 100 words. Write your five points for your top target as claims with evidence, and mark which two go into your opening. Then name your real weakness in one unsoftened sentence and write the System — the rule with a trigger — you actually follow. Finally: which of the five points do your stories never seem to reach, and what will you do about it in the next interview?",
    "id": "Minimal 100 kata. Tulis lima poinmu untuk sasaran teratasmu sebagai klaim dengan bukti, dan tandai dua mana yang masuk pembukamu. Lalu sebutkan kelemahan nyatamu dalam satu kalimat tanpa pelunak dan tulis Sistem — aturan dengan pemicu — yang benar-benar kamu ikuti. Terakhir: poin mana dari lima yang tampaknya tak pernah dicapai ceritamu, dan apa yang akan kamu lakukan tentangnya di wawancara berikutnya?"
   },
   "guide": [
    {
     "en": "Each point needs a Core 10 story number beside it.",
     "id": "Tiap poin butuh nomor cerita Core 10 di sampingnya."
    },
    {
     "en": "The weakness must pass the cliché list and stay off the scorecard’s top three lines.",
     "id": "Kelemahan harus lolos daftar klise dan tidak berada di tiga baris teratas lembar penilaian."
    },
    {
     "en": "“Do about it” means a bridge, a story swap, or the close — name which.",
     "id": "“Lakukan tentangnya” berarti jembatan, tukar cerita, atau penutup — sebutkan yang mana."
    }
   ],
   "min": 100
  }
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
