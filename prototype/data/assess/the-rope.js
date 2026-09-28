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
  "minutes": 12,
  "blueprint": [
   {
    "lesson": "5.1",
    "h": {
     "en": "What HR Is Screening For",
     "id": "Apa yang Disaring oleh HR"
    },
    "sub": {
     "en": "The seven checks, the ten questions, eligibility decided in advance, answer length, consistency.",
     "id": "Tujuh pemeriksaan, sepuluh pertanyaan, kelayakan diputuskan lebih dulu, panjang jawaban, konsistensi."
    }
   },
   {
    "lesson": "5.2",
    "h": {
     "en": "Your Difficult Question",
     "id": "Pertanyaan Tersulitmu"
    },
    "sub": {
     "en": "Acknowledge → Account → Advance; the seven paths; what not to do; frame, never falsify.",
     "id": "Akui → Jelaskan → Maju; tujuh jalur; yang tidak boleh; bingkai, jangan pernah memalsukan."
    }
   },
   {
    "lesson": "5.3",
    "h": {
     "en": "Salary Expectations and Practical Terms",
     "id": "Ekspektasi Gaji dan Syarat Praktis"
    },
    "sub": {
     "en": "Sources and the floor, gross versus take-home, four answer shapes, anchoring, the practical five.",
     "id": "Sumber dan lantai, kotor versus bersih, empat bentuk jawaban, penjangkaran, lima praktis."
    }
   },
   {
    "lesson": "5.4",
    "h": {
     "en": "Personal, Sensitive and Inappropriate Questions",
     "id": "Pertanyaan Pribadi, Sensitif, dan Tidak Pantas"
    },
    "sub": {
     "en": "The hidden concern, three tiers, employer red flags, values in religious terms, meal interviews.",
     "id": "Kekhawatiran tersembunyi, tiga tingkat, tanda bahaya pemberi kerja, nilai dalam istilah agama, wawancara makan."
    }
   }
  ],
  "mcq": [
   {
    "type": "know",
    "lesson": "5.1",
    "q": {
     "en": "In a fifteen-minute phone screen, ten HR answers should total about…",
     "id": "Dalam seleksi telepon lima belas menit, sepuluh jawaban HR sebaiknya total sekitar…"
    },
    "opts": [
     {
      "en": "Twelve minutes — use the time",
      "id": "Dua belas menit — pakai waktunya"
     },
     {
      "en": "Eight minutes — sixty for the opening, thirty to forty-five for the middle, fifteen or less for eligibility and practical questions",
      "id": "Delapan menit — enam puluh untuk pembuka, tiga puluh hingga empat puluh lima untuk tengah, lima belas atau kurang untuk kelayakan dan praktis"
     },
     {
      "en": "Three minutes",
      "id": "Tiga menit"
     },
     {
      "en": "It does not matter",
      "id": "Tidak penting"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Length is scored under communication, and running long cuts the eligibility questions HR most needed.",
     "id": "Panjang dinilai di bawah komunikasi, dan kepanjangan memotong pertanyaan kelayakan yang paling dibutuhkan HR."
    }
   },
   {
    "type": "scen",
    "lesson": "5.1",
    "q": {
     "en": "“Bersedia ditempatkan di seluruh Indonesia?” and you have not discussed it at home. The honest move is…",
     "id": "“Bersedia ditempatkan di seluruh Indonesia?” dan kamu belum membicarakannya di rumah. Langkah jujurnya…"
    },
    "opts": [
     {
      "en": "Say yes and decide later",
      "id": "Mengiyakan dan memutuskan nanti"
     },
     {
      "en": "Say “tergantung”",
      "id": "Berkata “tergantung”"
     },
     {
      "en": "Decide before the interview — at home — and answer with the decision, condition included if any",
      "id": "Memutuskan sebelum wawancara — di rumah — dan menjawab dengan keputusan itu, syarat disertakan jika ada"
     },
     {
      "en": "Ask HR to skip the question",
      "id": "Meminta HR melewati pertanyaan"
     }
    ],
    "correct": 2,
    "expl": {
     "en": "A yes you withdraw damages you and may cost money under a bond; the decision is made before the call, not in it.",
     "id": "“Ya” yang kamu tarik merugikanmu dan bisa berbiaya di bawah ikatan dinas; keputusan dibuat sebelum panggilan, bukan di dalamnya."
    }
   },
   {
    "type": "know",
    "lesson": "5.2",
    "q": {
     "en": "In the three-part difficult-question answer, the longest part is…",
     "id": "Dalam jawaban pertanyaan sulit tiga bagian, bagian terpanjang adalah…"
    },
    "opts": [
     {
      "en": "Acknowledge",
      "id": "Akui"
     },
     {
      "en": "Account",
      "id": "Jelaskan"
     },
     {
      "en": "Advance — what you did about it and what is true now, at least half",
      "id": "Maju — apa yang kamu lakukan tentangnya dan apa yang benar sekarang, setidaknya separuh"
     },
     {
      "en": "All equal",
      "id": "Semua sama"
     }
    ],
    "correct": 2,
    "expl": {
     "en": "When Account grows the answer becomes an excuse; when Advance shrinks, a confession.",
     "id": "Saat Jelaskan membesar jawaban menjadi alasan; saat Maju menyusut, pengakuan dosa."
    }
   },
   {
    "type": "scen",
    "lesson": "5.2",
    "q": {
     "en": "Asked directly whether you were let go from an internship — and you were — the integrity line says…",
     "id": "Ditanya langsung apakah kamu diberhentikan dari magang — dan memang begitu — garis integritas berkata…"
    },
    "opts": [
     {
      "en": "Call it a mutual decision",
      "id": "Sebut keputusan bersama"
     },
     {
      "en": "Answer truthfully, frame with the owned reason, and move to what is true now",
      "id": "Jawab jujur, bingkai dengan alasan yang diakui, dan beralih ke apa yang benar sekarang"
     },
     {
      "en": "Say you left for a better opportunity",
      "id": "Katakan kamu pergi untuk kesempatan lebih baik"
     },
     {
      "en": "Change the subject",
      "id": "Alihkan topik"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Frame, never falsify; the reference call finds anything else and the loss is every other answer.",
     "id": "Bingkai, jangan pernah memalsukan; panggilan referensi menemukan yang lain dan kerugiannya setiap jawaban lain."
    }
   },
   {
    "type": "scen",
    "lesson": "5.3",
    "q": {
     "en": "You state “Rp 6,5–8 juta” and HR asks “kotor atau THP?”. You had not decided. The lesson is…",
     "id": "Kamu menyatakan “Rp 6,5–8 juta” dan HR bertanya “kotor atau THP?”. Kamu belum memutuskan. Pelajarannya…"
    },
    "opts": [
     {
      "en": "It does not matter",
      "id": "Tidak penting"
     },
     {
      "en": "State the range as gross monthly and say the word — a range given in one and heard in the other surfaces at the offer",
      "id": "Nyatakan rentang sebagai kotor bulanan dan ucapkan katanya — rentang yang diberikan dalam satu dan didengar dalam yang lain muncul saat tawaran"
     },
     {
      "en": "Always say take-home",
      "id": "Selalu sebut THP"
     },
     {
      "en": "Refuse to specify",
      "id": "Menolak menentukan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Sources quote gross; graduates think in take-home; the misunderstanding is expensive later.",
     "id": "Sumber mengutip kotor; lulusan berpikir dalam THP; kesalahpahamannya mahal nanti."
    }
   },
   {
    "type": "know",
    "lesson": "5.3",
    "q": {
     "en": "The anchoring effect is a reason to…",
     "id": "Efek penjangkaran adalah alasan untuk…"
    },
    "opts": [
     {
      "en": "Name a high number first",
      "id": "Menyebut angka tinggi lebih dulu"
     },
     {
      "en": "Research, so that the range you name is defensible — an inflated one costs credibility",
      "id": "Riset, agar rentang yang kamu sebut bisa dipertahankan — yang dilebihkan mengorbankan kredibilitas"
     },
     {
      "en": "Never name a number",
      "id": "Tidak pernah menyebut angka"
     },
     {
      "en": "Say “terserah”",
      "id": "Berkata “terserah”"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "“Terserah” hands the anchor to HR; a researched range anchors well; the magnitude is contested, the direction is not.",
     "id": "“Terserah” menyerahkan jangkar ke HR; rentang hasil riset menjangkar baik; besarannya diperdebatkan, arahnya tidak."
    }
   },
   {
    "type": "scen",
    "lesson": "5.4",
    "q": {
     "en": "“Rencana menikah kapan?” asked warmly in a screen. The balanced answer…",
     "id": "“Rencana menikah kapan?” ditanyakan hangat di seleksi awal. Jawaban seimbang…"
    },
    "opts": [
     {
      "en": "Explains the relationship and a possible wedding timing",
      "id": "Menjelaskan hubungan dan kemungkinan waktu pernikahan"
     },
     {
      "en": "Answers the hidden concern — commitment and mobility — in under fifteen seconds, at the tier you choose",
      "id": "Menjawab kekhawatiran tersembunyi — komitmen dan mobilitas — di bawah lima belas detik, pada tingkat yang kamu pilih"
     },
     {
      "en": "Refuses sharply",
      "id": "Menolak tajam"
     },
     {
      "en": "Asks why they want to know",
      "id": "Bertanya mengapa mereka ingin tahu"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Most personal questions are commitment questions; any of the three tiers keeps the room.",
     "id": "Kebanyakan pertanyaan pribadi adalah pertanyaan komitmen; tingkat mana pun dari tiga menjaga ruangan."
    }
   },
   {
    "type": "scen",
    "lesson": "5.4",
    "q": {
     "en": "An employer asks for your original diploma and a training fee before you start. This is…",
     "id": "Pemberi kerja meminta ijazah asli dan biaya pelatihan sebelum kamu mulai. Ini adalah…"
    },
    "opts": [
     {
      "en": "Normal — comply",
      "id": "Normal — patuhi"
     },
     {
      "en": "An employer red flag about documents and money — ask the basis and whether it is in writing, record it, verify before signing",
      "id": "Tanda bahaya pemberi kerja soal dokumen dan uang — tanyakan dasarnya dan apakah tertulis, catat, verifikasi sebelum menandatangani"
     },
     {
      "en": "A personal question — use Tier 3",
      "id": "Pertanyaan pribadi — pakai Tingkat 3"
     },
     {
      "en": "A reason to accept quickly",
      "id": "Alasan untuk menerima cepat"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Money, documents and pressure are information about the employer; the diploma’s legal status is a verify point, not an assumption.",
     "id": "Uang, dokumen, dan tekanan adalah informasi tentang pemberi kerja; status hukum ijazah adalah titik verifikasi, bukan asumsi."
    }
   }
  ],
  "reflect": {
   "prompt": {
    "en": "At least 100 words. Write the four eligibility sentences you would say for your top target — placement, bond, start date, salary range — and say which one you had not decided before this module and what you did to decide it. Then name your difficult question in one sentence and write your Acknowledge and the first sentence of your Advance.",
    "id": "Minimal 100 kata. Tulis empat kalimat kelayakan yang akan kamu ucapkan untuk sasaran teratasmu — penempatan, ikatan dinas, tanggal mulai, rentang gaji — dan katakan mana yang belum kamu putuskan sebelum modul ini dan apa yang kamu lakukan untuk memutuskannya. Lalu sebutkan pertanyaan tersulitmu dalam satu kalimat dan tulis Akui-mu dan kalimat pertama Maju-mu."
   },
   "guide": [
    {
     "en": "The salary sentence must say “kotor” and come from at least two sources.",
     "id": "Kalimat gaji harus menyebut “kotor” dan berasal dari setidaknya dua sumber."
    },
    {
     "en": "“What you did to decide” should name a conversation or a document, not a feeling.",
     "id": "“Apa yang kamu lakukan untuk memutuskan” harus menyebut pembicaraan atau dokumen, bukan perasaan."
    },
    {
     "en": "Acknowledge is the exact fact; the Advance sentence has a number.",
     "id": "Akui adalah fakta persis; kalimat Maju punya angka."
    }
   ],
   "min": 100
  }
 },
 "6": {
  "minutes": 12,
  "blueprint": [
   {
    "lesson": "6.1",
    "h": {
     "en": "The User Interview",
     "id": "Wawancara User"
    },
    "sub": {
     "en": "What the future manager fears, what changes versus HR, the four user question families, questions to ask the user.",
     "id": "Yang ditakuti calon atasan, apa yang berubah versus HR, empat keluarga pertanyaan user, pertanyaan untuk user."
    }
   },
   {
    "lesson": "6.2",
    "h": {
     "en": "Technical Questions and the “I Don’t Know” Protocol",
     "id": "Pertanyaan Teknis dan Protokol “Saya Tidak Tahu”"
    },
    "sub": {
     "en": "The technical five, explain like a colleague, the protocol, thesis questions, tests on the spot.",
     "id": "Teknis lima, jelaskan seperti rekan kerja, protokolnya, pertanyaan skripsi, tes di tempat."
    }
   },
   {
    "lesson": "6.3",
    "h": {
     "en": "Case Interviews — The Protocol",
     "id": "Wawancara Kasus — Protokolnya"
    },
    "sub": {
     "en": "What a case tests, the five steps, frameworks as scaffolds, communicating, Indonesian contexts.",
     "id": "Apa yang diuji kasus, lima langkah, kerangka sebagai penopang, berkomunikasi, konteks Indonesia."
    }
   },
   {
    "lesson": "6.4",
    "h": {
     "en": "Estimation, Numbers and Business Cases",
     "id": "Estimasi, Angka, dan Kasus Bisnis"
    },
    "sub": {
     "en": "Sizing top-down and bottom-up, break-even, reading exhibits, mental maths, anchor numbers.",
     "id": "Estimasi dari atas dan dari bawah, titik impas, membaca peraga, matematika mental, angka jangkar."
    }
   },
   {
    "lesson": "6.5",
    "h": {
     "en": "Take-Home Tasks and Presentations",
     "id": "Tugas Take-Home dan Presentasi"
    },
    "sub": {
     "en": "Reading the brief, time-boxing, answer first, the ten-minute rule, ethics and AI tools, the Q&A.",
     "id": "Membaca brief, batas waktu, jawaban dulu, aturan sepuluh menit, etika dan alat AI, tanya jawab."
    }
   }
  ],
  "mcq": [
   {
    "type": "scen",
    "lesson": "6.1",
    "q": {
     "en": "The user interviewer asks the same question a third time, more specifically. This most likely means…",
     "id": "Pewawancara user menanyakan pertanyaan yang sama untuk ketiga kalinya, lebih spesifik. Ini kemungkinan besar berarti…"
    },
    "opts": [
     {
      "en": "They did not hear you",
      "id": "Mereka tidak mendengarmu"
     },
     {
      "en": "Probing to three or four levels is normal in a user round — they want the tool-level detail your first two answers did not give",
      "id": "Menggali tiga atau empat tingkat normal di ronde user — mereka ingin detail tingkat alat yang tidak diberikan dua jawaban pertamamu"
     },
     {
      "en": "You have failed",
      "id": "Kamu sudah gagal"
     },
     {
      "en": "They are testing your patience",
      "id": "Mereka menguji kesabaranmu"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The user fears a hire who cannot do the tasks; the probe is how they check, and the answer is specifics, not repetition.",
     "id": "User takut merekrut orang yang tidak bisa mengerjakan tugasnya; galian adalah cara mereka memeriksa, dan jawabannya spesifik, bukan pengulangan."
    }
   },
   {
    "type": "know",
    "lesson": "6.2",
    "q": {
     "en": "The “I don’t know” protocol, in order, is…",
     "id": "Protokol “saya tidak tahu”, berurutan, adalah…"
    },
    "opts": [
     {
      "en": "Apologise → guess → move on",
      "id": "Minta maaf → tebak → lanjut"
     },
     {
      "en": "Say what you know → reason aloud → state what you would check and how → never bluff",
      "id": "Katakan yang kamu tahu → bernalar dengan suara → nyatakan apa yang akan kamu periksa dan caranya → jangan pernah menggertak"
     },
     {
      "en": "Change the subject to a strength",
      "id": "Alihkan ke kekuatan"
     },
     {
      "en": "Ask the interviewer for the answer",
      "id": "Minta jawaban dari pewawancara"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Interviewers probe for bluffing; a visible reasoning path with a named check scores where a bluff ends the round.",
     "id": "Pewawancara menggali gertakan; jalur penalaran yang terlihat dengan pemeriksaan bernama mendapat nilai di mana gertakan mengakhiri ronde."
    }
   },
   {
    "type": "know",
    "lesson": "6.3",
    "q": {
     "en": "In the five-step case protocol, the recommendation comes…",
     "id": "Dalam protokol kasus lima langkah, rekomendasi datang…"
    },
    "opts": [
     {
      "en": "Only if the interviewer asks",
      "id": "Hanya jika pewawancara bertanya"
     },
     {
      "en": "Before the analysis, as a guess",
      "id": "Sebelum analisis, sebagai tebakan"
     },
     {
      "en": "At step four — stated first, then the reasons — followed by the sanity check of risks and what to verify",
      "id": "Di langkah empat — dinyatakan dulu, lalu alasannya — diikuti uji kewajaran risiko dan apa yang diverifikasi"
     },
     {
      "en": "Never; cases have no right answer",
      "id": "Tidak pernah; kasus tidak punya jawaban benar"
     }
    ],
    "correct": 2,
    "expl": {
     "en": "Clarify → Structure → Analyse → Answer → Sanity-check; the answer is a recommendation first, reasons after.",
     "id": "Klarifikasi → Struktur → Analisis → Jawab → Uji kewajaran; jawabannya rekomendasi dulu, alasan setelahnya."
    }
   },
   {
    "type": "scen",
    "lesson": "6.3",
    "q": {
     "en": "“Penjualan produk kami turun 20% di Sulawesi. Kenapa?” Your first thirty seconds should be…",
     "id": "“Penjualan produk kami turun 20% di Sulawesi. Kenapa?” Tiga puluh detik pertamamu sebaiknya…"
    },
    "opts": [
     {
      "en": "“Mungkin karena pesaing, Pak.”",
      "id": "“Mungkin karena pesaing, Pak.”"
     },
     {
      "en": "A restatement and two or three clarifying questions — objective, scope, timing — before any structure",
      "id": "Pernyataan ulang dan dua atau tiga pertanyaan klarifikasi — tujuan, cakupan, waktu — sebelum struktur apa pun"
     },
     {
      "en": "A named framework recited in full",
      "id": "Kerangka bernama dibacakan penuh"
     },
     {
      "en": "A request for all the data",
      "id": "Permintaan semua data"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Jumping to an answer is the mistake the compare in Lesson 6.3 shows; clarify first, then structure aloud.",
     "id": "Melompat ke jawaban adalah kesalahan yang ditunjukkan perbandingan di Pelajaran 6.3; klarifikasi dulu, lalu struktur dengan suara."
    }
   },
   {
    "type": "calc",
    "lesson": "6.4",
    "q": {
     "en": "Fixed costs are Rp 30 million a month; a cup sells for Rp 20.000 with Rp 8.000 of ingredients. Break-even is about…",
     "id": "Biaya tetap Rp 30 juta sebulan; secangkir dijual Rp 20.000 dengan bahan Rp 8.000. Titik impasnya sekitar…"
    },
    "opts": [
     {
      "en": "1.500 cups a month",
      "id": "1.500 cangkir sebulan"
     },
     {
      "en": "2.500 cups a month — about 85 a day",
      "id": "2.500 cangkir sebulan — sekitar 85 sehari"
     },
     {
      "en": "3.750 cups a month",
      "id": "3.750 cangkir sebulan"
     },
     {
      "en": "It cannot be computed without revenue",
      "id": "Tidak bisa dihitung tanpa pendapatan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Fixed cost ÷ margin per unit: Rp 30 juta ÷ Rp 12.000 = 2.500. Dividing by price (1.500) is the common error.",
     "id": "Biaya tetap ÷ margin per unit: Rp 30 juta ÷ Rp 12.000 = 2.500. Membagi dengan harga (1.500) adalah kesalahan umum."
    }
   },
   {
    "type": "calc",
    "lesson": "6.4",
    "q": {
     "en": "A retail point sells one pallet every ten days and holds seven days of safety stock. Lead time rises from 6 to 13 days and dispatch moves from weekly to fortnightly. The days of exposure a point can face between ordering and delivery is now up to…",
     "id": "Titik ritel menjual satu palet setiap sepuluh hari dan memegang stok pengaman tujuh hari. Lead time naik dari 6 ke 13 hari dan pengiriman berubah dari mingguan ke dua mingguan. Hari paparan yang bisa dihadapi titik antara memesan dan pengiriman kini hingga…"
    },
    "opts": [
     {
      "en": "13 days — the lead time",
      "id": "13 hari — lead time-nya"
     },
     {
      "en": "About 27 days — 13 days of lead time plus up to 14 days waiting for the next dispatch, against 7 days of cover",
      "id": "Sekitar 27 hari — 13 hari lead time plus hingga 14 hari menunggu pengiriman berikutnya, terhadap 7 hari cakupan"
     },
     {
      "en": "7 days",
      "id": "7 hari"
     },
     {
      "en": "20 days",
      "id": "20 hari"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Lead time plus the order cycle; with seven days of cover, an empty shelf is arithmetic, not chance — safety stock must be re-set when lead time changes.",
     "id": "Lead time plus siklus pesanan; dengan cakupan tujuh hari, rak kosong adalah aritmetika, bukan kebetulan — stok pengaman harus diatur ulang saat lead time berubah."
    }
   },
   {
    "type": "scen",
    "lesson": "6.5",
    "q": {
     "en": "A take-home brief says “about four hours; five slides”. The deliverable that scores best…",
     "id": "Brief take-home berkata “sekitar empat jam; lima slide”. Hasil kerja yang dinilai paling baik…"
    },
    "opts": [
     {
      "en": "Fourteen slides after a weekend of work, recommendation at the end",
      "id": "Empat belas slide setelah akhir pekan kerja, rekomendasi di akhir"
     },
     {
      "en": "Five slides with the recommendation on page one, three reasons with numbers, an assumptions page with the hours and tools, and “with more time”",
      "id": "Lima slide dengan rekomendasi di halaman satu, tiga alasan dengan angka, halaman asumsi dengan jam dan alat, dan “dengan waktu lebih”"
     },
     {
      "en": "A one-line email answer",
      "id": "Jawaban email satu baris"
     },
     {
      "en": "A deck built by a friend who works in the field",
      "id": "Dek yang dibuat teman yang bekerja di bidang itu"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Format and length are instructions; page one carries the answer; the time-box and the tools go on the assumptions page.",
     "id": "Format dan panjang adalah instruksi; halaman satu memuat jawaban; batas waktu dan alat ditulis di halaman asumsi."
    }
   },
   {
    "type": "scen",
    "lesson": "6.5",
    "q": {
     "en": "In the Q&A the interviewer shows that your denominator was wrong. You…",
     "id": "Di tanya jawab pewawancara menunjukkan penyebutmu salah. Kamu…"
    },
    "opts": [
     {
      "en": "Defend the number",
      "id": "Mempertahankan angkanya"
     },
     {
      "en": "Agree in one sentence, give the corrected direction if you can, and carry on — how you take correction is what is scored",
      "id": "Setuju dalam satu kalimat, beri arah koreksinya jika bisa, dan lanjutkan — cara menerima koreksi itulah yang dinilai"
     },
     {
      "en": "Blame the data",
      "id": "Menyalahkan datanya"
     },
     {
      "en": "Withdraw the whole recommendation",
      "id": "Menarik seluruh rekomendasi"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The “corrected” test from Lesson 6.1 is run here; collapsing and arguing both fail it.",
     "id": "Ujian “dikoreksi” dari Pelajaran 6.1 dijalankan di sini; runtuh dan berdebat sama-sama gagal."
    }
   }
  ],
  "reflect": {
   "prompt": {
    "en": "At least 100 words. Name your technical five — the five topics from your field and the job description you can define, apply and state the limits of — and mark the one you are least ready to be probed on. Then write the first sentence you would say to a case prompt in your target’s industry (the restatement) and the three branches of your structure. Finish with the one number on your anchor card you have actually verified, and its date.",
    "id": "Minimal 100 kata. Sebutkan teknis lima-mu — lima topik dari bidangmu dan deskripsi pekerjaan yang bisa kamu definisikan, terapkan, dan nyatakan batasnya — dan tandai yang paling belum siap kamu gali. Lalu tulis kalimat pertama yang akan kamu ucapkan untuk soal kasus di industri sasaranmu (pernyataan ulang) dan tiga cabang strukturmu. Akhiri dengan satu angka di kartu jangkarmu yang benar-benar sudah kamu verifikasi, dan tanggalnya."
   },
   "guide": [
    {
     "en": "Each of the five should have a real example you have used, not a textbook one.",
     "id": "Masing-masing dari lima harus punya contoh nyata yang pernah kamu pakai, bukan dari buku teks."
    },
    {
     "en": "The restatement names a metric, a scope and a period; the branches are built for that question.",
     "id": "Pernyataan ulang menyebut metrik, cakupan, dan periode; cabangnya dibangun untuk pertanyaan itu."
    },
    {
     "en": "An anchor without a source and a date is not verified.",
     "id": "Jangkar tanpa sumber dan tanggal belum terverifikasi."
    }
   ],
   "min": 100
  }
 },
 "7": {
  "minutes": 10,
  "blueprint": [
   {
    "lesson": "7.1",
    "h": {
     "en": "How Group Discussions Are Scored",
     "id": "Bagaimana Diskusi Kelompok Dinilai"
    },
    "sub": {
     "en": "Formats, what assessors observe, the scorecard with anchors, the three myths, quality events not minutes.",
     "id": "Format, yang diamati asesor, kartu skor dengan jangkar, tiga mitos, peristiwa berkualitas bukan menit."
    }
   },
   {
    "lesson": "7.2",
    "h": {
     "en": "Contributing Well — Roles, Moves and Phrases",
     "id": "Berkontribusi dengan Baik — Peran, Langkah, dan Frasa"
    },
    "sub": {
     "en": "Six roles, the phrase bank, split-sheet notes, three interventions for quieter candidates, online and Indonesian dynamics.",
     "id": "Enam peran, bank frasa, catatan lembar terbagi, tiga intervensi untuk kandidat pendiam, dinamika daring dan Indonesia."
    }
   },
   {
    "lesson": "7.3",
    "h": {
     "en": "In-Tray, Role-Play and Presentation Exercises",
     "id": "Latihan In-Tray, Role-Play, dan Presentasi"
    },
    "sub": {
     "en": "The in-tray method, the role-play protocol, prep in thirds, the assessment-centre day and the wash-up.",
     "id": "Metode in-tray, protokol role-play, persiapan sepertiga, hari assessment center dan wash-up."
    }
   }
  ],
  "mcq": [
   {
    "type": "know",
    "lesson": "7.1",
    "q": {
     "en": "Assessors in a group discussion tally…",
     "id": "Asesor dalam diskusi kelompok menghitung…"
    },
    "opts": [
     {
      "en": "Minutes of airtime",
      "id": "Menit waktu bicara"
     },
     {
      "en": "Quality events against behavioural anchors — structure, builds by name, invitations, syntheses — and anti-behaviours",
      "id": "Peristiwa berkualitas terhadap jangkar perilaku — struktur, membangun dengan nama, undangan, sintesis — dan anti-perilaku"
     },
     {
      "en": "Who reached the right answer",
      "id": "Siapa yang mencapai jawaban benar"
     },
     {
      "en": "Who was chosen as leader",
      "id": "Siapa yang dipilih sebagai pemimpin"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The topic is a prop; eight strong seconds outscore eight minutes of filler.",
     "id": "Topiknya properti; delapan detik kuat mengalahkan delapan menit pengisi."
    }
   },
   {
    "type": "scen",
    "lesson": "7.1",
    "q": {
     "en": "A candidate stays silent for the whole discussion while thinking hard. On the scorecard they…",
     "id": "Seorang kandidat diam sepanjang diskusi sambil berpikir keras. Di kartu skor mereka…"
    },
    "opts": [
     {
      "en": "Score neutrally — no mistakes",
      "id": "Skor netral — tanpa kesalahan"
     },
     {
      "en": "Score 1 on every dimension — no evidence is a low score, not a safe one",
      "id": "Skor 1 di setiap dimensi — tanpa bukti adalah skor rendah, bukan aman"
     },
     {
      "en": "Score high on Composure",
      "id": "Skor tinggi di Ketenangan"
     },
     {
      "en": "Are scored at the wash-up from the interview",
      "id": "Dinilai di wash-up dari wawancara"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Silence is the least safe position in the room; plan the first contribution for minute two.",
     "id": "Diam adalah posisi paling tidak aman di ruangan; rencanakan kontribusi pertama untuk menit dua."
    }
   },
   {
    "type": "scen",
    "lesson": "7.2",
    "q": {
     "en": "Someone proposes cutting the marketing budget entirely. The turn that scores four tallies is…",
     "id": "Seseorang mengusulkan memangkas anggaran pemasaran seluruhnya. Giliran yang mendapat empat hitungan adalah…"
    },
    "opts": [
     {
      "en": "“Itu nggak masuk akal — seperti yang saya bilang tadi…”",
      "id": "“Itu nggak masuk akal — seperti yang saya bilang tadi…”"
     },
     {
      "en": "Credit the idea, bring a number from the brief, offer a testable middle as a question, and hand the floor onward by name",
      "id": "Hargai gagasannya, bawa angka dari brief, tawarkan jalan tengah yang bisa diuji sebagai pertanyaan, dan serahkan lantai dengan nama"
     },
     {
      "en": "Stay silent to avoid conflict",
      "id": "Diam untuk menghindari konflik"
     },
     {
      "en": "Call a vote",
      "id": "Ajak voting"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Contribution, Composure, Influence and Collaboration in one turn, with zero heat.",
     "id": "Kontribusi, Ketenangan, Pengaruh, dan Kolaborasi dalam satu giliran, tanpa panas."
    }
   },
   {
    "type": "know",
    "lesson": "7.2",
    "q": {
     "en": "The split sheet’s third column — open decisions — exists so that…",
     "id": "Kolom ketiga lembar terbagi — keputusan terbuka — ada agar…"
    },
    "opts": [
     {
      "en": "You can record who interrupted",
      "id": "Kamu bisa mencatat siapa yang menyela"
     },
     {
      "en": "The summary at minus five minutes can be read from it: agreed, open, condition",
      "id": "Rangkuman di lima menit terakhir bisa dibaca darinya: disepakati, terbuka, syarat"
     },
     {
      "en": "You can vote",
      "id": "Kamu bisa memilih"
     },
     {
      "en": "Assessors can check your notes",
      "id": "Asesor bisa memeriksa catatanmu"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The summary is the highest-scoring twenty seconds in the format and is impossible from memory.",
     "id": "Rangkuman adalah dua puluh detik paling bernilai dalam format ini dan mustahil dari ingatan."
    }
   },
   {
    "type": "scen",
    "lesson": "7.3",
    "q": {
     "en": "Twelve in-tray items, thirty minutes, and item one is an urgent request from your boss. You…",
     "id": "Dua belas butir in-tray, tiga puluh menit, dan butir satu adalah permintaan mendesak dari atasanmu. Kamu…"
    },
    "opts": [
     {
      "en": "Answer it in full first",
      "id": "Menjawabnya secara penuh lebih dulu"
     },
     {
      "en": "Skim all twelve first with a one-line note each, then classify and find the linked items — the boss’s request may contradict a policy memo further down",
      "id": "Memindai kedua belasnya dulu dengan catatan satu baris masing-masing, lalu klasifikasi dan temukan butir terkait — permintaan atasan mungkin bertentangan dengan memo kebijakan di bawah"
     },
     {
      "en": "Delegate everything",
      "id": "Mendelegasikan semuanya"
     },
     {
      "en": "Sort by sender",
      "id": "Mengurutkan per pengirim"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The items are designed to interact; the planted links carry most of the score.",
     "id": "Butir-butirnya dirancang saling berinteraksi; kaitan yang ditanam membawa sebagian besar skor."
    }
   },
   {
    "type": "scen",
    "lesson": "7.3",
    "q": {
     "en": "In a role-play the actor playing an upset customer raises their voice. The scored response is…",
     "id": "Dalam role-play aktor yang memerankan pelanggan kesal meninggikan suara. Respons yang dinilai adalah…"
    },
    "opts": [
     {
      "en": "Explaining the system update that caused it",
      "id": "Menjelaskan pembaruan sistem yang menyebabkannya"
     },
     {
      "en": "A level voice, listening to the end, a question about what matters most to them, and an agreement with a time and a named contact",
      "id": "Suara datar, mendengar sampai selesai, pertanyaan tentang apa yang paling penting bagi mereka, dan kesepakatan dengan waktu dan kontak bernama"
     },
     {
      "en": "Stepping out of role to discuss the exercise",
      "id": "Keluar dari peran untuk membahas latihan"
     },
     {
      "en": "Promising a full refund immediately",
      "id": "Menjanjikan pengembalian dana penuh segera"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The escalation is scripted to test composure and listening; the workable agreement is the outcome.",
     "id": "Eskalasi bernaskah untuk menguji ketenangan dan mendengarkan; kesepakatan yang bisa dijalankan adalah hasilnya."
    }
   }
  ],
  "reflect": {
   "prompt": {
    "en": "At least 100 words. Name the one or two roles you will own in a group discussion and why they fit how you think, and write your first intervention word for word in Indonesian. Then name the anti-behaviour you are most likely to produce under pressure — interrupting, repeating, hedging, going silent, going off on a tangent — and the phrase from the bank that replaces it. Finish with the two questions you will ask the recruiter about the assessment-centre day.",
    "id": "Minimal 100 kata. Sebutkan satu atau dua peran yang akan kamu miliki dalam diskusi kelompok dan mengapa cocok dengan cara berpikirmu, dan tulis intervensi pertamamu kata demi kata dalam bahasa Indonesia. Lalu sebutkan anti-perilaku yang paling mungkin kamu hasilkan di bawah tekanan — menyela, mengulang, kata pengaman, diam, melantur — dan frasa dari bank yang menggantikannya. Akhiri dengan dua pertanyaan yang akan kamu ajukan ke rekruter tentang hari assessment center."
   },
   "guide": [
    {
     "en": "At least one of the two roles should be a landing role — Timekeeper or Summariser.",
     "id": "Setidaknya satu dari dua peran harus peran mendaratkan — Penjaga waktu atau Perangkum."
    },
    {
     "en": "The first intervention is offered as a question and names a criterion or a time split.",
     "id": "Intervensi pertama ditawarkan sebagai pertanyaan dan menyebut kriteria atau pembagian waktu."
    },
    {
     "en": "The replacement phrase names a person or a number.",
     "id": "Frasa pengganti menyebut orang atau angka."
    }
   ],
   "min": 100
  }
 },
 "8": {
  "minutes": 10,
  "blueprint": [
   {
    "lesson": "8.1",
    "h": {
     "en": "Panels and Senior Interviewers",
     "id": "Panel dan Pewawancara Senior"
    },
    "sub": {
     "en": "Panel roles, eye contact and names, the senior time horizon and brevity, conflicting signals, values panels.",
     "id": "Peran panel, kontak mata dan nama, horizon waktu senior dan keringkasan, sinyal bertentangan, panel nilai."
    }
   },
   {
    "lesson": "8.2",
    "h": {
     "en": "Values, Potential and “Big Picture” Questions",
     "id": "Pertanyaan Nilai, Potensi, dan “Gambaran Besar”"
    },
    "sub": {
     "en": "One story per value, the capability arc, the framing pattern, industry and leadership questions, the curious counter.",
     "id": "Satu cerita per nilai, lengkung kemampuan, pola pembingkaian, pertanyaan industri dan kepemimpinan, tanya balik penasaran."
    }
   },
   {
    "lesson": "8.3",
    "h": {
     "en": "Questions to Ask — The Stage Ladder",
     "id": "Pertanyaan untuk Diajukan — Tangga Tahap"
    },
    "sub": {
     "en": "Why questions are scored, the ladder by stage, the objection question, don’t ask, three to five prepared and two asked.",
     "id": "Mengapa pertanyaan dinilai, tangga per tahap, pertanyaan keberatan, jangan tanyakan, tiga hingga lima disiapkan dan dua diajukan."
    }
   },
   {
    "lesson": "8.4",
    "h": {
     "en": "The Close and After the Interview",
     "id": "Penutup dan Setelah Wawancara"
    },
    "sub": {
     "en": "The respectful close, the one-hour debrief, the thank-you within a day, follow-up timing, handling rejection.",
     "id": "Penutup yang hormat, debrief satu jam, terima kasih dalam sehari, waktu tindak lanjut, menangani penolakan."
    }
   }
  ],
  "mcq": [
   {
    "type": "know",
    "lesson": "8.1",
    "q": {
     "en": "A senior interviewer with thirty minutes rewards answers that are…",
     "id": "Pewawancara senior dengan tiga puluh menit menghargai jawaban yang…"
    },
    "opts": [
     {
      "en": "Two to three minutes with full context",
      "id": "Dua hingga tiga menit dengan konteks penuh"
     },
     {
      "en": "Forty to sixty seconds, headline first, with a value or a direction — depth offered, not forced",
      "id": "Empat puluh hingga enam puluh detik, headline dulu, dengan nilai atau arah — kedalaman ditawarkan, bukan dipaksakan"
     },
     {
      "en": "As short as one sentence",
      "id": "Sesingkat satu kalimat"
     },
     {
      "en": "Delivered only to the chair",
      "id": "Disampaikan hanya ke ketua"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Seniors think in years and buy consequences first; saying less earns the invitation to say more.",
     "id": "Senior berpikir dalam tahun dan membeli konsekuensi dulu; berkata lebih sedikit mengundang untuk berkata lebih banyak."
    }
   },
   {
    "type": "scen",
    "lesson": "8.1",
    "q": {
     "en": "The chair asks; the technical lead, the HR partner and a silent observer listen. Your eyes go…",
     "id": "Ketua bertanya; pimpinan teknis, mitra HR, dan pengamat diam mendengar. Matamu pergi…"
    },
    "opts": [
     {
      "en": "To the chair only",
      "id": "Hanya ke ketua"
     },
     {
      "en": "To the asker first, a phrase to each of the others including the observer, and back to the asker at the end",
      "id": "Ke penanya dulu, satu frasa ke tiap yang lain termasuk pengamat, dan kembali ke penanya di akhir"
     },
     {
      "en": "Around the room continuously",
      "id": "Berkeliling ruangan terus-menerus"
     },
     {
      "en": "To your notes",
      "id": "Ke catatanmu"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Every seat is scoring; the observer scores exactly this.",
     "id": "Setiap kursi menilai; pengamat menilai persis ini."
    }
   },
   {
    "type": "scen",
    "lesson": "8.2",
    "q": {
     "en": "“Apa yang akan Anda ubah dari bank kami?” The answer that scores is…",
     "id": "“Apa yang akan Anda ubah dari bank kami?” Jawaban yang dapat nilai adalah…"
    },
    "opts": [
     {
      "en": "A verdict on their digital strategy from a headline",
      "id": "Vonis atas strategi digital mereka dari tajuk berita"
     },
     {
      "en": "One observation from your own use, options, a small recommendation with a reason, and a humility close",
      "id": "Satu pengamatan dari pemakaianmu sendiri, opsi, rekomendasi kecil dengan alasan, dan penutup rendah hati"
     },
     {
      "en": "“Tidak ada”",
      "id": "“Tidak ada”"
     },
     {
      "en": "A reallocation of their budget",
      "id": "Pemindahan anggaran mereka"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Respectful, researched, humble — the framing pattern; never a person or a branch by name.",
     "id": "Hormat, hasil riset, rendah hati — pola pembingkaian; jangan pernah orang atau cabang dengan nama."
    }
   },
   {
    "type": "scen",
    "lesson": "8.3",
    "q": {
     "en": "The user has already described the first ninety days. When asked “ada pertanyaan?”, you…",
     "id": "User sudah menggambarkan sembilan puluh hari pertama. Saat ditanya “ada pertanyaan?”, kamu…"
    },
    "opts": [
     {
      "en": "Ask about the first ninety days anyway",
      "id": "Tetap bertanya tentang sembilan puluh hari pertama"
     },
     {
      "en": "Cross it off and ask a survivor, adapted — “tadi Bapak menjelaskan … — yang ingin saya tanyakan, bagaimana kinerja di tahap itu diukur?”",
      "id": "Mencoretnya dan mengajukan yang bertahan, disesuaikan — “tadi Bapak menjelaskan … — yang ingin saya tanyakan, bagaimana kinerja di tahap itu diukur?”"
     },
     {
      "en": "Ask about leave",
      "id": "Bertanya tentang cuti"
     },
     {
      "en": "Say everything is clear",
      "id": "Berkata semuanya sudah jelas"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "An answered question is scored as not listening; no questions is scored as no interest.",
     "id": "Pertanyaan yang sudah dijawab dinilai sebagai tidak mendengar; tanpa pertanyaan dinilai sebagai tanpa minat."
    }
   },
   {
    "type": "know",
    "lesson": "8.4",
    "q": {
     "en": "The respectful close, in order, is…",
     "id": "Penutup yang hormat, berurutan, adalah…"
    },
    "opts": [
     {
      "en": "Ask if you passed → thank → leave",
      "id": "Tanya apakah lolos → terima kasih → pergi"
     },
     {
      "en": "Specific thanks → one sentence of fit → clear interest → the next step, under ninety seconds",
      "id": "Terima kasih spesifik → satu kalimat kecocokan → minat yang jelas → langkah berikutnya, di bawah sembilan puluh detik"
     },
     {
      "en": "A second summary of your CV",
      "id": "Rangkuman kedua CV-mu"
     },
     {
      "en": "A promise to follow up until answered",
      "id": "Janji menindaklanjuti sampai dijawab"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The Indonesian register adapts, not copies, “closing the deal”; pushing loses composure in the last minute.",
     "id": "Register Indonesia mengadaptasi, bukan menyalin, “menutup transaksi”; mendesak kehilangan ketenangan di menit terakhir."
    }
   },
   {
    "type": "scen",
    "lesson": "8.4",
    "q": {
     "en": "A rejection email arrives. You…",
     "id": "Email penolakan datang. Kamu…"
    },
    "opts": [
     {
      "en": "Explain why the decision is wrong",
      "id": "Menjelaskan mengapa keputusannya salah"
     },
     {
      "en": "Reply within a day with thanks and one request for feedback, log the lessons from your debrief, and update the stories that were probed past their depth",
      "id": "Membalas dalam sehari dengan terima kasih dan satu permintaan umpan balik, mencatat pelajaran dari debrief-mu, dan memperbarui cerita yang digali melewati kedalamannya"
     },
     {
      "en": "Send a second feedback request a week later",
      "id": "Mengirim permintaan umpan balik kedua seminggu kemudian"
     },
     {
      "en": "Do nothing",
      "id": "Tidak melakukan apa-apa"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Ask once; treat the rejection as a data point about a round; keep the relationship for the next intake.",
     "id": "Minta sekali; perlakukan penolakan sebagai titik data tentang sebuah ronde; jaga hubungan untuk angkatan berikutnya."
    }
   }
  ],
  "reflect": {
   "prompt": {
    "en": "At least 100 words. For your top target’s final round, name the three seats you expect and the concern each will bring to your file, and write the one story you would give the most sceptical of them at panel length — headline, decision, the value in the last line. Then write your four-beat close word for word in Indonesian.",
    "id": "Minimal 100 kata. Untuk ronde final sasaran teratasmu, sebutkan tiga kursi yang kamu perkirakan dan kekhawatiran yang dibawa masing-masing ke berkasmu, dan tulis satu cerita yang akan kamu berikan kepada yang paling skeptis dari mereka pada panjang panel — headline, keputusan, nilai di baris terakhir. Lalu tulis penutup empat bagianmu kata demi kata dalam bahasa Indonesia."
   },
   "guide": [
    {
     "en": "A concern is a fear about the future, not a fact about the CV.",
     "id": "Kekhawatiran adalah ketakutan tentang masa depan, bukan fakta tentang CV."
    },
    {
     "en": "The story has a number in the first ten seconds and the value in the last line.",
     "id": "Cerita punya angka di sepuluh detik pertama dan nilai di baris terakhir."
    },
    {
     "en": "The close does not ask whether you passed.",
     "id": "Penutup tidak bertanya apakah kamu lolos."
    }
   ],
   "min": 100
  }
 },
 "9": {
  "minutes": 10,
  "blueprint": [
   {
    "lesson": "9.1",
    "h": {
     "en": "Deliberate Practice",
     "id": "Latihan yang Disengaja"
    },
    "sub": {
     "en": "The practice loop, spaced rehearsal, the realism ladder, what to memorise and what not.",
     "id": "Lingkar latihan, latihan berjarak, tangga realisme, apa yang dihafal dan apa yang tidak."
    }
   },
   {
    "lesson": "9.2",
    "h": {
     "en": "Reading Your Feedback",
     "id": "Membaca Umpan Balikmu"
    },
    "sub": {
     "en": "What the simulator measures, the debrief in order, one fix at a time, trends, when the tool is wrong.",
     "id": "Apa yang diukur simulator, debrief berurutan, satu perbaikan pada satu waktu, tren, saat alat salah."
    }
   },
   {
    "lesson": "9.3",
    "h": {
     "en": "Practising with People",
     "id": "Berlatih Bersama Orang Lain"
    },
    "sub": {
     "en": "Partner practice, the peer scorecard, giving feedback, mentors, group practice.",
     "id": "Latihan pasangan, kartu skor sebaya, memberi umpan balik, mentor, latihan kelompok."
    }
   },
   {
    "lesson": "9.4",
    "h": {
     "en": "Delivery",
     "id": "Penyampaian"
    },
    "sub": {
     "en": "Voice, presence and the self-review, video set-up, nerves with evidence, accessibility.",
     "id": "Suara, kehadiran dan tinjauan diri, pengaturan video, gugup dengan bukti, aksesibilitas."
    }
   },
   {
    "lesson": "9.5",
    "h": {
     "en": "The 10-Day Sprint",
     "id": "Sprint 10 Hari"
    },
    "sub": {
     "en": "The sprint plan, the day-before checklist, the day itself, the fast-track.",
     "id": "Rencana sprint, daftar periksa sehari sebelumnya, harinya sendiri, jalur cepat."
    }
   }
  ],
  "mcq": [
   {
    "type": "know",
    "lesson": "9.1",
    "q": {
     "en": "The practice loop is…",
     "id": "Lingkar latihan adalah…"
    },
    "opts": [
     {
      "en": "Read the answer aloud until it is smooth",
      "id": "Baca jawaban dengan suara sampai mulus"
     },
     {
      "en": "One target → one question set → answer aloud, timed → feedback → one change → the same question again → move on",
      "id": "Satu target → satu set pertanyaan → jawab dengan suara, berwaktu → umpan balik → satu perubahan → pertanyaan yang sama lagi → lanjut"
     },
     {
      "en": "Twenty questions in one sitting",
      "id": "Dua puluh pertanyaan dalam satu duduk"
     },
     {
      "en": "Memorise a model answer",
      "id": "Hafal jawaban model"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Three to five focused repetitions with one change each beat twenty unfocused ones.",
     "id": "Tiga hingga lima pengulangan terfokus dengan satu perubahan masing-masing mengalahkan dua puluh yang tak terfokus."
    }
   },
   {
    "type": "scen",
    "lesson": "9.2",
    "q": {
     "en": "Your debrief shows a low content score on a values answer that, correctly, had no number. You…",
     "id": "Debrief-mu menunjukkan skor isi rendah pada jawaban nilai yang, dengan benar, tanpa angka. Kamu…"
    },
    "opts": [
     {
      "en": "Add a number next time",
      "id": "Tambah angka lain kali"
     },
     {
      "en": "Name the rule that fired, log “disagree” with the reason, and exclude it from your trend — rarely, and only with a reason",
      "id": "Sebutkan aturan yang berlaku, catat “tidak setuju” dengan alasan, dan keluarkan dari trenmu — jarang, dan hanya dengan alasan"
     },
     {
      "en": "Ignore all content scores",
      "id": "Abaikan semua skor isi"
     },
     {
      "en": "Chase the overall number",
      "id": "Kejar angka keseluruhan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Rule-based analysis misreads predictably; scores are practice signals, not verdicts.",
     "id": "Analisis berbasis aturan salah baca dengan cara yang bisa diprediksi; skor adalah sinyal latihan, bukan vonis."
    }
   },
   {
    "type": "scen",
    "lesson": "9.3",
    "q": {
     "en": "You are the observer in a partner round. During the round you…",
     "id": "Kamu pengamat dalam ronde pasangan. Selama ronde kamu…"
    },
    "opts": [
     {
      "en": "Listen, then score from memory afterwards",
      "id": "Mendengar, lalu menilai dari ingatan setelahnya"
     },
     {
      "en": "Fill every row of the scorecard as it happens, with quotes and timestamps, scoring the transcript rather than the friend",
      "id": "Mengisi setiap baris kartu skor saat terjadi, dengan kutipan dan waktu, menilai transkrip bukan teman"
     },
     {
      "en": "Coach the candidate between questions",
      "id": "Melatih kandidat di antara pertanyaan"
     },
     {
      "en": "Score only the overall impression",
      "id": "Menilai hanya kesan keseluruhan"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Evidence written during the round is what makes the feedback actionable.",
     "id": "Bukti yang ditulis selama ronde adalah yang membuat umpan balik dapat ditindaklanjuti."
    }
   },
   {
    "type": "know",
    "lesson": "9.4",
    "q": {
     "en": "Which of these does the simulator score?",
     "id": "Mana dari ini yang dinilai simulator?"
    },
    "opts": [
     {
      "en": "Your posture and facial expression",
      "id": "Postur dan ekspresi wajahmu"
     },
     {
      "en": "Pace, fillers and pauses from the audio — presence is a self-review against a checklist and is never scored",
      "id": "Kecepatan, kata pengisi, dan jeda dari audio — kehadiran adalah tinjauan diri terhadap daftar periksa dan tak pernah dinilai"
     },
     {
      "en": "Your outfit",
      "id": "Pakaianmu"
     },
     {
      "en": "Whether you will be hired",
      "id": "Apakah kamu akan direkrut"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The tool measures what audio can carry; the rest is yours to review in small doses.",
     "id": "Alat mengukur yang bisa dibawa audio; sisanya milikmu untuk ditinjau dalam dosis kecil."
    }
   },
   {
    "type": "scen",
    "lesson": "9.4",
    "q": {
     "en": "Your pace is 180 words a minute with nine fillers. The one fix is…",
     "id": "Kecepatanmu 180 kata per menit dengan sembilan kata pengisi. Satu perbaikannya…"
    },
    "opts": [
     {
      "en": "“Slow down and stop saying eee”",
      "id": "“Pelan-pelan dan berhenti bilang eee”"
     },
     {
      "en": "A pause before the number, the decision and the result",
      "id": "Jeda sebelum angka, keputusan, dan hasil"
     },
     {
      "en": "Power posing before the interview",
      "id": "Power posing sebelum wawancara"
     },
     {
      "en": "Talking less",
      "id": "Bicara lebih sedikit"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "A silent pause does the filler’s job and slows the pace; monitoring fillers while talking increases them.",
     "id": "Jeda hening melakukan tugas kata pengisi dan memperlambat kecepatan; mengawasi kata pengisi sambil bicara menambahnya."
    }
   },
   {
    "type": "scen",
    "lesson": "9.5",
    "q": {
     "en": "It is the day before the interview. The right evening is…",
     "id": "Ini sehari sebelum wawancara. Malam yang tepat adalah…"
    },
    "opts": [
     {
      "en": "Three simulator sessions to peak",
      "id": "Tiga sesi simulator untuk memuncak"
     },
     {
      "en": "The checklist by 18.00 — copies not originals, the one page, three questions — three stories aloud once, and sleep",
      "id": "Daftar periksa sebelum 18.00 — salinan bukan dokumen asli, satu halaman, tiga pertanyaan — tiga cerita dengan suara sekali, dan tidur"
     },
     {
      "en": "Writing new answers",
      "id": "Menulis jawaban baru"
     },
     {
      "en": "Re-reading every Depth Card",
      "id": "Membaca ulang setiap Kartu Kedalaman"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Sleep is preparation; the night-before session is the one the sprint forbids.",
     "id": "Tidur adalah persiapan; sesi malam sebelumnya adalah yang dilarang sprint."
    }
   }
  ],
  "reflect": {
   "prompt": {
    "en": "At least 100 words. Name the one delivery or content habit you have been working on in the simulator, quote the evidence sentence from a debrief that showed it, and describe the fix in one sentence you could hear in your next transcript. Then say which level of the realism ladder you are at, what would move you up, and who you will ask for a mock interview and when.",
    "id": "Minimal 100 kata. Sebutkan satu kebiasaan penyampaian atau isi yang sedang kamu kerjakan di simulator, kutip kalimat bukti dari debrief yang menunjukkannya, dan gambarkan perbaikannya dalam satu kalimat yang bisa kamu dengar di transkrip berikutnya. Lalu katakan di tingkat tangga realisme mana kamu berada, apa yang akan menaikkanmu, dan siapa yang akan kamu minta untuk wawancara tiruan dan kapan."
   },
   "guide": [
    {
     "en": "The evidence sentence is quoted from a real debrief, with the question and a timestamp or word position.",
     "id": "Kalimat bukti dikutip dari debrief nyata, dengan pertanyaan dan waktu atau posisi kata."
    },
    {
     "en": "The fix is a habit, not a wish: “‘karena’ before the first action”, not “more reasoning”.",
     "id": "Perbaikannya kebiasaan, bukan harapan: “‘karena’ sebelum tindakan pertama”, bukan “lebih banyak alasan”."
    },
    {
     "en": "The mock has a name and a date.",
     "id": "Tiruan punya nama dan tanggal."
    }
   ],
   "min": 100
  }
 },
 "10": {
  "minutes": 12,
  "blueprint": [
   {
    "lesson": "10.1",
    "h": {
     "en": "Reading an Offer",
     "id": "Membaca Surat Penawaran"
    },
    "sub": {
     "en": "Components, gross and take-home, annual value, non-money factors, verbal vs written.",
     "id": "Komponen, kotor dan take-home, nilai tahunan, faktor non-uang, lisan vs tertulis."
    }
   },
   {
    "lesson": "10.2",
    "h": {
     "en": "Contracts",
     "id": "Kontrak"
    },
    "sub": {
     "en": "PKWT and PKWTT, probation, service bonds, other clauses, red flags, asking for time.",
     "id": "PKWT dan PKWTT, masa percobaan, ikatan dinas, klausul lain, tanda bahaya, meminta waktu."
    }
   },
   {
    "lesson": "10.3",
    "h": {
     "en": "To Negotiate or Not",
     "id": "Negosiasi — Perlu atau Tidak"
    },
    "sub": {
     "en": "Three pay styles, the prep sheet, six steps, competing offers, register, what never to do.",
     "id": "Tiga gaya gaji, lembar persiapan, enam langkah, tawaran lain, register, yang tidak boleh dilakukan."
    }
   },
   {
    "lesson": "10.4",
    "h": {
     "en": "Deciding, Accepting, Declining",
     "id": "Memutuskan, Menerima, Menolak"
    },
    "sub": {
     "en": "The decision matrix and sensitivity, acceptance, decline, extensions, reneging.",
     "id": "Matriks keputusan dan sensitivitas, penerimaan, penolakan, perpanjangan, pembatalan."
    }
   }
  ],
  "mcq": [
   {
    "type": "know",
    "lesson": "10.1",
    "q": {
     "en": "Take-home pay (THP) is…",
     "id": "Take-home pay (THP) adalah…"
    },
    "opts": [
     {
      "en": "The headline figure on page one",
      "id": "Angka utama di halaman satu"
     },
     {
      "en": "Gross minus employee BPJS contributions, PPh 21 and other deductions",
      "id": "Kotor dikurangi iuran BPJS karyawan, PPh 21, dan potongan lain"
     },
     {
      "en": "Base salary plus THR",
      "id": "Gaji pokok plus THR"
     },
     {
      "en": "Gross plus the employer’s BPJS contribution",
      "id": "Kotor plus iuran BPJS pemberi kerja"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Always clarify gross or take-home, and compare offers on the same basis; deduction rates are to be verified.",
     "id": "Selalu klarifikasi kotor atau take-home, dan bandingkan tawaran dengan dasar sama; tarif potongan untuk diverifikasi."
    }
   },
   {
    "type": "calc",
    "lesson": "10.1",
    "q": {
     "en": "An offer pays Rp 6 juta fixed a month, THR of one month, a bonus that has averaged one month (count half, conservatively) and a housing allowance of Rp 1 juta a month. Its conservative annual value, in Rp juta, is…",
     "id": "Sebuah tawaran membayar Rp 6 juta tetap per bulan, THR satu bulan, bonus yang rata-rata satu bulan (hitung setengah, secara konservatif), dan tunjangan perumahan Rp 1 juta per bulan. Nilai tahunan konservatifnya, dalam Rp juta, adalah…"
    },
    "opts": [
     {
      "en": "72",
      "id": "72"
     },
     {
      "en": "84",
      "id": "84"
     },
     {
      "en": "93",
      "id": "93"
     },
     {
      "en": "102",
      "id": "102"
     }
    ],
    "correct": 2,
    "expl": {
     "en": "12 × 6 = 72, + THR 6 = 78, + bonus 3 = 81, + housing 12 × 1 = 93.",
     "id": "12 × 6 = 72, + THR 6 = 78, + bonus 3 = 81, + perumahan 12 × 1 = 93."
    }
   },
   {
    "type": "scen",
    "lesson": "10.2",
    "q": {
     "en": "A twelve-month PKWT says “tiga bulan pertama merupakan masa percobaan”. You…",
     "id": "PKWT dua belas bulan menyatakan “tiga bulan pertama merupakan masa percobaan”. Kamu…"
    },
    "opts": [
     {
      "en": "Sign — it is standard",
      "id": "Menandatangani — itu standar"
     },
     {
      "en": "Ask politely, in writing, the basis for probation in a fixed-term contract",
      "id": "Bertanya dengan sopan, tertulis, dasar masa percobaan dalam kontrak waktu tertentu"
     },
     {
      "en": "Refuse the offer",
      "id": "Menolak tawaran"
     },
     {
      "en": "Argue the law with the recruiter",
      "id": "Berdebat hukum dengan rekruter"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Under current rules probation belongs to PKWTT only, three months at most (verify); ask, don’t litigate.",
     "id": "Di bawah aturan terkini percobaan hanya milik PKWTT, paling lama tiga bulan (verifikasi); tanyakan, jangan menggugat."
    }
   },
   {
    "type": "calc",
    "lesson": "10.2",
    "q": {
     "en": "A bond of Rp 36 juta over 24 months decreases by Rp 1,5 juta for each month served. Leaving after 16 months, you would repay…",
     "id": "Ikatan dinas Rp 36 juta selama 24 bulan berkurang Rp 1,5 juta untuk setiap bulan dijalani. Keluar setelah 16 bulan, kamu membayar kembali…"
    },
    "opts": [
     {
      "en": "Rp 0",
      "id": "Rp 0"
     },
     {
      "en": "Rp 12 juta",
      "id": "Rp 12 juta"
     },
     {
      "en": "Rp 24 juta",
      "id": "Rp 24 juta"
     },
     {
      "en": "Rp 36 juta",
      "id": "Rp 36 juta"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "36 − (16 × 1,5) = 36 − 24 = 12. A flat bond would still be 36 — which is why “does it decrease?” is asked before signing.",
     "id": "36 − (16 × 1,5) = 36 − 24 = 12. Ikatan datar tetap 36 — itulah mengapa “apakah menurun?” ditanyakan sebelum menandatangani."
    }
   },
   {
    "type": "scen",
    "lesson": "10.3",
    "q": {
     "en": "A bank’s ODP letter says the package is the same for every member of the intake. Your best move is…",
     "id": "Surat ODP sebuah bank menyatakan paketnya sama untuk seluruh peserta angkatan. Langkah terbaikmu adalah…"
    },
    "opts": [
     {
      "en": "Ask for a higher base with market data",
      "id": "Meminta pokok lebih tinggi dengan data pasar"
     },
     {
      "en": "Make no pay request and clarify placement, start date, relocation or bond terms",
      "id": "Tidak meminta soal gaji dan mengklarifikasi penempatan, tanggal mulai, relokasi, atau syarat ikatan dinas"
     },
     {
      "en": "Mention a competing offer to force a change",
      "id": "Menyebut tawaran lain untuk memaksa perubahan"
     },
     {
      "en": "Accept without reading the rest",
      "id": "Menerima tanpa membaca sisanya"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Fixed pay has little or no room; the useful conversation is clarification.",
     "id": "Gaji tetap punya sedikit atau tanpa ruang; percakapan yang berguna adalah klarifikasi."
    }
   },
   {
    "type": "know",
    "lesson": "10.3",
    "q": {
     "en": "Which negotiation move is never acceptable?",
     "id": "Langkah negosiasi mana yang tidak pernah bisa diterima?"
    },
    "opts": [
     {
      "en": "Mentioning a real written offer, without threat",
      "id": "Menyebut tawaran tertulis nyata, tanpa ancaman"
     },
     {
      "en": "Asking for a six-month review in writing when the base is fixed",
      "id": "Meminta evaluasi enam bulan tertulis saat pokok tetap"
     },
     {
      "en": "Inventing or inflating a competing offer",
      "id": "Mengarang atau menggelembungkan tawaran lain"
     },
     {
      "en": "Pausing after the ask",
      "id": "Berhenti setelah meminta"
     }
    ],
    "correct": 2,
    "expl": {
     "en": "Invented offers can be checked, and the employer may simply say “take it”.",
     "id": "Tawaran karangan bisa diperiksa, dan pemberi kerja mungkin sekadar berkata “ambil saja”."
    }
   },
   {
    "type": "scen",
    "lesson": "10.4",
    "q": {
     "en": "Your matrix gives Offer A 405 and Offer B 395; pay is weighted 20, and a Rp 500 ribu change moves pay by one point. The decision is…",
     "id": "Matriksmu memberi Tawaran A 405 dan Tawaran B 395; gaji berbobot 20, dan perubahan Rp 500 ribu menggeser gaji satu poin. Keputusannya…"
    },
    "opts": [
     {
      "en": "Robust — A wins clearly",
      "id": "Kokoh — A menang jelas"
     },
     {
      "en": "Effectively tied — decide on your top-weighted criterion or ask the question that would break it",
      "id": "Praktis seri — putuskan pada kriteria berbobot tertinggi atau ajukan pertanyaan yang memecahkannya"
     },
     {
      "en": "B, because pay matters most",
      "id": "B, karena gaji paling penting"
     },
     {
      "en": "Impossible to make",
      "id": "Mustahil dibuat"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "A gap of 10 is smaller than one pay point (20), so a small change would flip it.",
     "id": "Selisih 10 lebih kecil dari satu poin gaji (20), jadi perubahan kecil akan membaliknya."
    }
   },
   {
    "type": "know",
    "lesson": "10.4",
    "q": {
     "en": "You accepted Offer B this morning. To Offer A’s recruiter you…",
     "id": "Kamu menerima Tawaran B pagi ini. Kepada rekruter Tawaran A kamu…"
    },
    "opts": [
     {
      "en": "Wait a week in case B falls through",
      "id": "Menunggu seminggu kalau-kalau B batal"
     },
     {
      "en": "Decline today, gratefully and briefly, without comparing the offers",
      "id": "Menolak hari ini, dengan terima kasih dan singkat, tanpa membandingkan tawaran"
     },
     {
      "en": "Explain in detail why B is better",
      "id": "Menjelaskan rinci mengapa B lebih baik"
     },
     {
      "en": "Say nothing",
      "id": "Tidak mengatakan apa pun"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "A prompt decline returns their second candidate and keeps a door open with people you may meet again.",
     "id": "Penolakan cepat mengembalikan kandidat kedua mereka dan menjaga pintu terbuka dengan orang yang mungkin kamu temui lagi."
    }
   }
  ],
  "reflect": {
   "prompt": {
    "en": "At least 100 words. Decode one offer you hold or expect: its components, whether your figure is gross or take-home, and its annual value on a conservative basis. Name the contract type and one clause you would ask about, with the question in Indonesian. Then name the employer’s pay style, and write your one request with its reason and your alternative — or, if the pay is fixed, the clarification you would ask instead.",
    "id": "Minimal 100 kata. Urai satu tawaran yang kamu pegang atau harapkan: komponennya, apakah angkamu kotor atau take-home, dan nilai tahunannya dengan dasar konservatif. Sebutkan jenis kontrak dan satu klausul yang akan kamu tanyakan, dengan pertanyaannya dalam bahasa Indonesia. Lalu sebutkan gaya gaji pemberi kerja, dan tulis satu permintaanmu dengan alasan dan alternatifmu — atau, jika gajinya tetap, klarifikasi yang akan kamu tanyakan sebagai gantinya."
   },
   "guide": [
    {
     "en": "The annual value shows its arithmetic, and any bonus is counted by history, not by “up to”.",
     "id": "Nilai tahunan menunjukkan aritmetikanya, dan bonus apa pun dihitung menurut riwayat, bukan “hingga”."
    },
    {
     "en": "The clause question asks; it does not argue the law. Regulated terms are marked to verify.",
     "id": "Pertanyaan klausul bertanya; ia tidak berdebat hukum. Syarat yang diatur ditandai untuk diverifikasi."
    },
    {
     "en": "One request, one reason, one alternative — or a clarification for fixed pay.",
     "id": "Satu permintaan, satu alasan, satu alternatif — atau klarifikasi untuk gaji tetap."
    }
   ],
   "min": 100
  }
 },
 "11": {
  "minutes": 8,
  "blueprint": [
   {
    "lesson": "11.1",
    "h": {
     "en": "What Probation Evaluates",
     "id": "Apa yang Dievaluasi Masa Percobaan"
    },
    "sub": {
     "en": "The rules, the five things managers evaluate, the unwritten criteria, rotation forms.",
     "id": "Aturannya, lima hal yang dievaluasi manajer, kriteria tak tertulis, formulir rotasi."
    }
   },
   {
    "lesson": "11.2",
    "h": {
     "en": "Your 30/60/90 Plan",
     "id": "Rencana 30/60/90-mu"
    },
    "sub": {
     "en": "The success-criteria conversation, learn–contribute–deliver, the first contribution, a checkable plan.",
     "id": "Percakapan kriteria keberhasilan, belajar–berkontribusi–menghasilkan, kontribusi pertama, rencana yang bisa diperiksa."
    }
   },
   {
    "lesson": "11.3",
    "h": {
     "en": "Relationships, Feedback, Mistakes",
     "id": "Hubungan, Umpan Balik, Kesalahan"
    },
    "sub": {
     "en": "The stakeholder map, workplace norms, specific feedback, report-own-fix-prevent, gratifikasi.",
     "id": "Peta pemangku kepentingan, norma tempat kerja, umpan balik spesifik, laporkan-akui-perbaiki-cegah, gratifikasi."
    }
   },
   {
    "lesson": "11.4",
    "h": {
     "en": "Evidence Log and the First Review",
     "id": "Log Bukti dan Evaluasi Pertama"
    },
    "sub": {
     "en": "The weekly log, the self-review, the room, the early conversation, the Story Bank loop.",
     "id": "Log mingguan, tinjauan diri, ruangan, percakapan dini, putaran Bank Cerita."
    }
   }
  ],
  "mcq": [
   {
    "type": "know",
    "lesson": "11.1",
    "q": {
     "en": "Probation mostly evaluates…",
     "id": "Masa percobaan terutama mengevaluasi…"
    },
    "opts": [
     {
      "en": "How much you produce in three months",
      "id": "Berapa banyak yang kamu hasilkan dalam tiga bulan"
     },
     {
      "en": "Reliability, learning speed, attitude, relationships and quality — from small, early evidence",
      "id": "Keandalan, kecepatan belajar, sikap, hubungan, dan kualitas — dari bukti kecil dan awal"
     },
     {
      "en": "Big ideas in the first month",
      "id": "Gagasan besar di bulan pertama"
     },
     {
      "en": "Hours worked",
      "id": "Jam kerja"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "A manager is forming a prediction about year two; a new hire’s output is small by design.",
     "id": "Manajer membentuk prediksi tentang tahun kedua; hasil karyawan baru memang kecil."
    }
   },
   {
    "type": "scen",
    "lesson": "11.2",
    "q": {
     "en": "In week one your supervisor says “bantu-bantu tim dulu, ya”. You…",
     "id": "Di minggu pertama supervisormu berkata “bantu-bantu tim dulu, ya”. Kamu…"
    },
    "opts": [
     {
      "en": "Help and wait to be told more",
      "id": "Membantu dan menunggu diberi tahu lebih"
     },
     {
      "en": "Ask for fifteen minutes: “Apa yang menurut Ibu menandakan saya berhasil di tiga bulan pertama?” — and send a summary the same day",
      "id": "Meminta lima belas menit: “Apa yang menurut Ibu menandakan saya berhasil di tiga bulan pertama?” — dan mengirim rangkuman hari itu juga"
     },
     {
      "en": "Propose an improvement to show initiative",
      "id": "Mengusulkan perbaikan untuk menunjukkan inisiatif"
     },
     {
      "en": "Ask HR instead",
      "id": "Bertanya ke HR saja"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "The answer becomes the top line of your plan and the measure at your review.",
     "id": "Jawabannya menjadi baris atas rencanamu dan ukuran saat evaluasi."
    }
   },
   {
    "type": "scen",
    "lesson": "11.2",
    "q": {
     "en": "Which first contribution passes all four criteria?",
     "id": "Kontribusi pertama mana yang lolos keempat kriteria?"
    },
    "opts": [
     {
      "en": "Redesigning the whole filing system",
      "id": "Merancang ulang seluruh sistem pengarsipan"
     },
     {
      "en": "Quietly reformatting last year’s archive",
      "id": "Diam-diam memformat ulang arsip tahun lalu"
     },
     {
      "en": "Updating an out-of-date checklist new staff use every month, validated with the senior who owns it",
      "id": "Memperbarui daftar periksa usang yang dipakai staf baru tiap bulan, divalidasi dengan senior pemiliknya"
     },
     {
      "en": "Changing a live process on your own",
      "id": "Mengubah proses aktif sendirian"
     }
    ],
    "correct": 2,
    "expl": {
     "en": "Visible, finishable, useful and low-risk — and validated before it is changed.",
     "id": "Terlihat, bisa diselesaikan, berguna, dan berisiko rendah — dan divalidasi sebelum diubah."
    }
   },
   {
    "type": "scen",
    "lesson": "11.3",
    "q": {
     "en": "You find your own mistake before it reaches the weekly recap. You say first…",
     "id": "Kamu menemukan kesalahanmu sendiri sebelum sampai ke rekap mingguan. Yang kamu ucapkan pertama…"
    },
    "opts": [
     {
      "en": "“Ada sedikit masalah, tapi sudah hampir beres.”",
      "id": "“Ada sedikit masalah, tapi sudah hampir beres.”"
     },
     {
      "en": "“Sistemnya memang membingungkan…”",
      "id": "“Sistemnya memang membingungkan…”"
     },
     {
      "en": "“Bu, mohon waktunya lima menit. Saya salah memasukkan…” — then the fix with a time and the prevention",
      "id": "“Bu, mohon waktunya lima menit. Saya salah memasukkan…” — lalu perbaikan dengan waktu dan pencegahannya"
     },
     {
      "en": "Nothing — fix it quietly",
      "id": "Tidak ada — perbaiki diam-diam"
     }
    ],
    "correct": 2,
    "expl": {
     "en": "Report early, own it in one sentence, fix it, prevent it — no minimising, no “tapi”.",
     "id": "Laporkan dini, akui dalam satu kalimat, perbaiki, cegah — tanpa mengecilkan, tanpa “tapi”."
    }
   },
   {
    "type": "know",
    "lesson": "11.3",
    "q": {
     "en": "A customer leaves a parcel for you after a loan disbursement. The right move is…",
     "id": "Nasabah meninggalkan parsel untukmu setelah pencairan kredit. Langkah yang tepat adalah…"
    },
    "opts": [
     {
      "en": "Keep it; it is small",
      "id": "Menyimpannya; itu kecil"
     },
     {
      "en": "Put it in the pantry for everyone",
      "id": "Menaruhnya di pantry untuk semua"
     },
     {
      "en": "Decline politely, or report it the same day and follow your employer’s gratifikasi policy",
      "id": "Menolak dengan sopan, atau melaporkannya hari itu juga dan mengikuti kebijakan gratifikasi pemberi kerjamu"
     },
     {
      "en": "Return it without telling anyone",
      "id": "Mengembalikannya tanpa memberi tahu siapa pun"
     }
    ],
    "correct": 2,
    "expl": {
     "en": "A gift connected to a transaction is exactly what the rules and codes of conduct address (verify your sector and policy).",
     "id": "Hadiah terkait transaksi persis yang diatur aturan dan kode etik (verifikasi sektor dan kebijakanmu)."
    }
   },
   {
    "type": "know",
    "lesson": "11.4",
    "q": {
     "en": "The purpose of the weekly evidence log is…",
     "id": "Tujuan log bukti mingguan adalah…"
    },
    "opts": [
     {
      "en": "To record how hard you worked",
      "id": "Mencatat seberapa keras kamu bekerja"
     },
     {
      "en": "Dated results, feedback and learning for your review — and future Story Bank stories",
      "id": "Hasil, umpan balik, dan pembelajaran bertanggal untuk evaluasimu — dan cerita Bank Cerita masa depan"
     },
     {
      "en": "To report colleagues’ mistakes",
      "id": "Melaporkan kesalahan rekan"
     },
     {
      "en": "Only the weeks that went well",
      "id": "Hanya minggu yang berjalan baik"
     }
    ],
    "correct": 1,
    "expl": {
     "en": "Ten minutes every Friday; results not effort; the bad weeks included.",
     "id": "Sepuluh menit setiap Jumat; hasil bukan usaha; minggu buruk disertakan."
    }
   }
  ],
  "reflect": {
   "prompt": {
    "en": "At least 100 words. Write the success-criteria line for a role you hold or expect, in your manager’s words or as you imagine them. Name the first contribution you would propose and show that it passes the four criteria. Then write, in Indonesian, the four-step report of a real mistake you have made, and the log entry it becomes — task, result, feedback, learning.",
    "id": "Minimal 100 kata. Tulis baris kriteria keberhasilan untuk peran yang kamu pegang atau harapkan, dalam kata manajermu atau sebagaimana kamu bayangkan. Sebutkan kontribusi pertama yang akan kamu usulkan dan tunjukkan bahwa ia lolos empat kriteria. Lalu tulis, dalam bahasa Indonesia, laporan empat langkah atas kesalahan nyata yang pernah kamu buat, dan entri log yang dihasilkannya — tugas, hasil, umpan balik, pembelajaran."
   },
   "guide": [
    {
     "en": "The success line is specific enough to check at month three.",
     "id": "Baris keberhasilan cukup spesifik untuk diperiksa di bulan ketiga."
    },
    {
     "en": "The mistake report has no “sedikit” and no “tapi”, and ends on prevention.",
     "id": "Laporan kesalahan tanpa “sedikit” dan tanpa “tapi”, dan berakhir pada pencegahan."
    },
    {
     "en": "The log entry names a result, not effort.",
     "id": "Entri log menyebut hasil, bukan usaha."
    }
   ],
   "min": 100
  }
 }
};
