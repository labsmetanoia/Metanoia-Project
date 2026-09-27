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
