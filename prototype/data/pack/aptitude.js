/**
 * THE PACK — SCREENING GYM DRILL BANK
 * -----------------------------------
 * Authored aptitude questions for the three trainable families:
 * numerical (num), verbal (verb — passage-based true/false/cannot-say),
 * logical (log — sequences and analogies, text-rendered).
 * Every question carries a worked explanation in both languages.
 * All counts shown in the UI are computed from this file at runtime.
 */
window.MT_PACK_APT = {
 "passages": {
  "p1": {
   "en": "PT Sinar Retail operates 24 stores. In 2025 its revenue grew 8% while the number of transactions fell 3%; the average basket value therefore rose. Twelve stores are located in malls and contributed 55% of total revenue. The company plans to open five new street-level stores in 2026 and has stated that it will not close any existing store before 2027.",
   "id": "PT Sinar Retail mengoperasikan 24 toko. Pada 2025, pendapatannya tumbuh 8% sementara jumlah transaksinya turun 3%; dengan demikian, nilai belanja rata-rata per transaksi naik. Dua belas toko berlokasi di mal dan menyumbang 55% dari total pendapatan. Perusahaan berencana membuka lima toko baru di tepi jalan pada 2026, dan menyatakan tidak akan menutup satu pun toko yang ada sebelum 2027."
  },
  "p2": {
   "en": "A ministry report on graduate employment found that 68% of respondents from vocational programmes were employed within six months of graduating, compared with 61% of university graduates. The report surveyed 12,000 graduates in five provinces. Its authors caution that the two groups entered different industries, and that the survey excluded graduates who continued to further study.",
   "id": "Sebuah laporan kementerian tentang penyerapan kerja lulusan menemukan bahwa 68% responden dari program vokasi sudah bekerja dalam enam bulan setelah lulus, dibandingkan 61% lulusan universitas. Laporan itu menyurvei 12.000 lulusan di lima provinsi. Para penulisnya mengingatkan bahwa kedua kelompok masuk ke industri yang berbeda, dan bahwa survei tidak mencakup lulusan yang melanjutkan studi."
  },
  "p3": {
   "en": "Arta Logistics introduced electric vans on two delivery routes in March. By June, fuel and energy cost per package on those routes had fallen 18%, while average delivery time was unchanged. The company's operations director said the fleet change 'paid for itself faster than projected', but the finance team noted that vehicle purchase costs are excluded from the per-package figure.",
   "id": "Arta Logistics mulai memakai van listrik di dua rute pengiriman pada bulan Maret. Hingga Juni, biaya bahan bakar dan energi per paket di kedua rute itu turun 18%, sementara waktu pengiriman rata-rata tidak berubah. Direktur operasional perusahaan menyebut pergantian armada ini 'balik modal lebih cepat dari proyeksi', tetapi tim keuangan mencatat bahwa biaya pembelian kendaraan tidak termasuk dalam angka per paket tersebut."
  },
  "p4": {
   "en": "A 2025 internal study at Kencana Digital tracked 400 employees split between a hybrid group (three office days a week) and a fully remote group for one year. Measured output per person was 4% higher in the remote group, but new hires in that group reported lower connectedness scores and took on average two weeks longer to reach full productivity. The study excluded managers and the customer-support division. The company subsequently kept both arrangements and made the hybrid track the default for first-year employees.",
   "id": "Sebuah studi internal tahun 2025 di Kencana Digital mengamati 400 karyawan selama satu tahun, dibagi menjadi kelompok hibrida (tiga hari di kantor per minggu) dan kelompok kerja jarak jauh penuh. Output terukur per orang 4% lebih tinggi di kelompok jarak jauh, tetapi karyawan baru di kelompok itu melaporkan skor keterhubungan yang lebih rendah dan rata-rata butuh dua minggu lebih lama untuk mencapai produktivitas penuh. Studi ini tidak mencakup manajer dan divisi layanan pelanggan. Perusahaan kemudian mempertahankan kedua skema dan menjadikan jalur hibrida sebagai pilihan bawaan bagi karyawan tahun pertama."
  },
  "p5": {
   "en": "The Lestari coffee cooperative in Central Java groups 340 smallholder farms. In 2025 it exported 60% of its harvest, up from 45% two years earlier, at prices on average 30% above the local market. Certification costs, which the cooperative pays on behalf of its members, rose 12% over the same period. Three neighbouring cooperatives have begun copying its export model, and the cooperative's chair says membership applications have more than doubled since 2023.",
   "id": "Koperasi kopi Lestari di Jawa Tengah menaungi 340 kebun petani kecil. Pada 2025, koperasi mengekspor 60% hasil panennya, naik dari 45% dua tahun sebelumnya, dengan harga rata-rata 30% di atas pasar lokal. Biaya sertifikasi, yang dibayar koperasi atas nama para anggotanya, naik 12% pada periode yang sama. Tiga koperasi tetangga mulai meniru model ekspornya, dan ketua koperasi menyebut permohonan keanggotaan naik lebih dari dua kali lipat sejak 2023."
  }
 },
 "questions": [
  {
   "id": "n1",
   "fam": "num",
   "q": {
    "en": "A price rises from Rp 80,000 to Rp 92,000. What is the percentage increase?",
    "id": "Harga naik dari Rp 80.000 ke Rp 92.000. Berapa persen kenaikannya?"
   },
   "opts": [
    {
     "en": "12%",
     "id": "12%"
    },
    {
     "en": "15%",
     "id": "15%"
    },
    {
     "en": "13%",
     "id": "13%"
    },
    {
     "en": "16%",
     "id": "16%"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Change ÷ original: 12,000 ÷ 80,000 = 0.15 = 15%. Dividing by the new value (92,000) gives ~13% — the classic trap.",
    "id": "Perubahan ÷ nilai awal: 12.000 ÷ 80.000 = 0,15 = 15%. Kalau dibagi dengan nilai baru (92.000), hasilnya ~13% — inilah jebakan klasiknya."
   }
  },
  {
   "id": "n2",
   "fam": "num",
   "q": {
    "en": "After a 20% discount, a jacket costs Rp 240,000. What was the original price?",
    "id": "Setelah diskon 20%, harga sebuah jaket menjadi Rp 240.000. Berapa harga awalnya?"
   },
   "opts": [
    {
     "en": "Rp 288,000",
     "id": "Rp 288.000"
    },
    {
     "en": "Rp 300,000",
     "id": "Rp 300.000"
    },
    {
     "en": "Rp 280,000",
     "id": "Rp 280.000"
    },
    {
     "en": "Rp 312,000",
     "id": "Rp 312.000"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Reverse percentage: 240,000 ÷ 0.80 = 300,000. Adding 20% to 240,000 (= 288,000) reverses the wrong operation.",
    "id": "Persentase terbalik: 240.000 ÷ 0,80 = 300.000. Menambahkan 20% ke 240.000 (= 288.000) justru membalik operasi yang salah."
   }
  },
  {
   "id": "n3",
   "fam": "num",
   "q": {
    "en": "Sales rise 10% in year one and fall 10% in year two. Net effect on sales?",
    "id": "Penjualan naik 10% di tahun pertama, lalu turun 10% di tahun kedua. Apa efek bersihnya?"
   },
   "opts": [
    {
     "en": "Unchanged",
     "id": "Tidak berubah"
    },
    {
     "en": "Down 1%",
     "id": "Turun 1%"
    },
    {
     "en": "Up 1%",
     "id": "Naik 1%"
    },
    {
     "en": "Down 2%",
     "id": "Turun 2%"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Compound: ×1.10 × 0.90 = ×0.99 — a 1% net decline. Sequential percentages multiply; they never simply cancel.",
    "id": "Hitung berlipat: ×1,10 × 0,90 = ×0,99 — turun bersih 1%. Persentase yang berurutan saling mengalikan; tidak pernah sekadar saling meniadakan."
   }
  },
  {
   "id": "n4",
   "fam": "num",
   "q": {
    "en": "A team of 5 processes 600 forms in 4 hours. At the same rate, how many forms do 8 people process in 3 hours?",
    "id": "Tim beranggotakan 5 orang memproses 600 formulir dalam 4 jam. Dengan kecepatan yang sama, berapa formulir yang diproses 8 orang dalam 3 jam?"
   },
   "opts": [
    {
     "en": "720",
     "id": "720"
    },
    {
     "en": "640",
     "id": "640"
    },
    {
     "en": "800",
     "id": "800"
    },
    {
     "en": "900",
     "id": "900"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Per person-hour: 600 ÷ (5×4) = 30 forms. Then 8 × 3 × 30 = 720. Reduce to the unit rate first; scale second.",
    "id": "Per orang per jam: 600 ÷ (5×4) = 30 formulir. Lalu 8 × 3 × 30 = 720. Turunkan dulu ke laju satuan, baru kalikan."
   }
  },
  {
   "id": "n5",
   "fam": "num",
   "q": {
    "en": "A company's costs are Rp 4.0bn against revenue of Rp 5.0bn. Revenue grows 10% while costs grow 5%. What is the new profit margin (profit ÷ revenue)?",
    "id": "Biaya sebuah perusahaan Rp 4,0 miliar dengan pendapatan Rp 5,0 miliar. Pendapatan tumbuh 10% sementara biaya tumbuh 5%. Berapa margin laba yang baru (laba ÷ pendapatan)?"
   },
   "opts": [
    {
     "en": "20.0%",
     "id": "20,0%"
    },
    {
     "en": "23.6%",
     "id": "23,6%"
    },
    {
     "en": "25.0%",
     "id": "25,0%"
    },
    {
     "en": "21.8%",
     "id": "21,8%"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "New revenue 5.5bn; new costs 4.2bn; profit 1.3bn. Margin = 1.3 ÷ 5.5 ≈ 23.6%. Compute both lines before the ratio.",
    "id": "Pendapatan baru 5,5 M; biaya baru 4,2 M; laba 1,3 M. Margin = 1,3 ÷ 5,5 ≈ 23,6%. Hitung kedua barisnya dulu, baru rasionya."
   }
  },
  {
   "id": "n6",
   "fam": "num",
   "q": {
    "en": "A report states production in thousands of units: Q1 = 12.4; Q2 = 15.5. How many more units were produced in Q2?",
    "id": "Sebuah laporan menyajikan produksi dalam ribuan unit: Q1 = 12,4; Q2 = 15,5. Berapa unit lebih banyak yang diproduksi di Q2?"
   },
   "opts": [
    {
     "en": "3,100",
     "id": "3.100"
    },
    {
     "en": "310",
     "id": "310"
    },
    {
     "en": "31,000",
     "id": "31.000"
    },
    {
     "en": "3.1",
     "id": "3,1"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "The table's unit is thousands: (15.5 − 12.4) = 3.1 thousand = 3,100 units. Reading units before arithmetic prevents the two wrong magnitudes.",
    "id": "Satuan tabelnya ribuan: (15,5 − 12,4) = 3,1 ribu = 3.100 unit. Membaca satuannya sebelum menghitung mencegah dua jawaban dengan orde besaran yang salah."
   }
  },
  {
   "id": "n7",
   "fam": "num",
   "q": {
    "en": "Store A sells 3 units for Rp 100,000; Store B sells 5 of the same units for Rp 160,000. Which per-unit price is lower, and by how much?",
    "id": "Toko A menjual 3 unit seharga Rp 100.000; Toko B menjual 5 unit barang yang sama seharga Rp 160.000. Harga per unit mana yang lebih murah, dan berapa selisihnya?"
   },
   "opts": [
    {
     "en": "B, by ~Rp 1,300",
     "id": "B, sekitar Rp 1.300"
    },
    {
     "en": "A, by ~Rp 1,300",
     "id": "A, sekitar Rp 1.300"
    },
    {
     "en": "B, by ~Rp 3,300",
     "id": "B, sekitar Rp 3.300"
    },
    {
     "en": "They are equal",
     "id": "Keduanya sama"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "A: 100,000 ÷ 3 ≈ 33,333. B: 160,000 ÷ 5 = 32,000. B is cheaper by ≈ 1,333. Scale both to a common base (per unit) before comparing.",
    "id": "A: 100.000 ÷ 3 ≈ 33.333. B: 160.000 ÷ 5 = 32.000. B lebih murah sekitar 1.333. Samakan dulu dasarnya (per unit) sebelum membandingkan."
   }
  },
  {
   "id": "n8",
   "fam": "num",
   "q": {
    "en": "A budget allocates 35% to salaries, 25% to rent, and the remaining Rp 48m to operations. What is the total budget?",
    "id": "Sebuah anggaran mengalokasikan 35% untuk gaji, 25% untuk sewa, dan sisanya, Rp 48 juta, untuk operasional. Berapa total anggarannya?"
   },
   "opts": [
    {
     "en": "Rp 120m",
     "id": "Rp 120 jt"
    },
    {
     "en": "Rp 96m",
     "id": "Rp 96 jt"
    },
    {
     "en": "Rp 134m",
     "id": "Rp 134 jt"
    },
    {
     "en": "Rp 160m",
     "id": "Rp 160 jt"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Operations = 100% − 35% − 25% = 40% of total. If 40% = 48m, total = 48 ÷ 0.40 = Rp 120m.",
    "id": "Operasional = 100% − 35% − 25% = 40% dari total. Kalau 40% = 48 juta, total = 48 ÷ 0,40 = Rp 120 juta."
   }
  },
  {
   "id": "n9",
   "fam": "num",
   "q": {
    "en": "Revenue per employee is Rp 800m at Company X (250 employees) and Rp 500m at Company Y (600 employees). What is the combined revenue?",
    "id": "Pendapatan per karyawan adalah Rp 800 juta di Perusahaan X (250 karyawan) dan Rp 500 juta di Perusahaan Y (600 karyawan). Berapa pendapatan gabungan keduanya?"
   },
   "opts": [
    {
     "en": "Rp 500bn",
     "id": "Rp 500 M"
    },
    {
     "en": "Rp 350bn",
     "id": "Rp 350 M"
    },
    {
     "en": "Rp 650bn",
     "id": "Rp 650 M"
    },
    {
     "en": "Rp 1.1tn",
     "id": "Rp 1,1 T"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "X: 250 × 800m = 200bn. Y: 600 × 500m = 300bn. Combined 500bn. Never average the per-employee figures — sizes differ.",
    "id": "X: 250 × 800 jt = 200 M. Y: 600 × 500 jt = 300 M. Gabungan 500 M. Jangan pernah merata-ratakan angka per karyawan — ukuran perusahaannya berbeda."
   }
  },
  {
   "id": "n10",
   "fam": "num",
   "q": {
    "en": "A subscription costs Rp 75,000/month, or Rp 750,000/year if paid annually. What percentage do you save by paying annually?",
    "id": "Sebuah langganan berharga Rp 75.000 per bulan, atau Rp 750.000 per tahun kalau dibayar sekaligus. Berapa persen penghematan kalau membayar tahunan?"
   },
   "opts": [
    {
     "en": "~17%",
     "id": "~17%"
    },
    {
     "en": "~10%",
     "id": "~10%"
    },
    {
     "en": "~20%",
     "id": "~20%"
    },
    {
     "en": "~12%",
     "id": "~12%"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Monthly for a year: 900,000. Saving 150,000 ÷ 900,000 ≈ 16.7%. The base is what you would otherwise pay.",
    "id": "Bayar bulanan selama setahun: 900.000. Hemat 150.000 ÷ 900.000 ≈ 16,7%. Dasarnya adalah jumlah yang seharusnya kamu bayar."
   }
  },
  {
   "id": "n11",
   "fam": "num",
   "q": {
    "en": "A chart shows market share: You 18%, rival A 24%, rival B 12%, others 46%. The total market is Rp 40bn. How much larger is A's revenue than yours?",
    "id": "Sebuah grafik menunjukkan pangsa pasar: Kamu 18%, pesaing A 24%, pesaing B 12%, lainnya 46%. Total pasar Rp 40 miliar. Berapa selisih pendapatan A dibanding pendapatanmu?"
   },
   "opts": [
    {
     "en": "Rp 2.4bn",
     "id": "Rp 2,4 M"
    },
    {
     "en": "Rp 6bn",
     "id": "Rp 6 M"
    },
    {
     "en": "Rp 1.6bn",
     "id": "Rp 1,6 M"
    },
    {
     "en": "Rp 9.6bn",
     "id": "Rp 9,6 M"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Share gap 24% − 18% = 6 points; 6% × 40bn = Rp 2.4bn. Convert point gaps through the total, not through your own revenue.",
    "id": "Selisih pangsa 24% − 18% = 6 poin; 6% × 40 M = Rp 2,4 M. Konversikan selisih poin lewat total pasar, bukan lewat pendapatanmu sendiri."
   }
  },
  {
   "id": "n12",
   "fam": "num",
   "q": {
    "en": "Headcount grew from 40 to 46 while output grew from 2,000 to 2,530 units. What happened to output per person?",
    "id": "Jumlah karyawan bertambah dari 40 menjadi 46, sementara output naik dari 2.000 menjadi 2.530 unit. Apa yang terjadi pada output per orang?"
   },
   "opts": [
    {
     "en": "Up 10%",
     "id": "Naik 10%"
    },
    {
     "en": "Down 5%",
     "id": "Turun 5%"
    },
    {
     "en": "Up 26.5%",
     "id": "Naik 26,5%"
    },
    {
     "en": "Unchanged",
     "id": "Tidak berubah"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Before: 50/person. After: 2,530 ÷ 46 = 55/person. 55 ÷ 50 = 1.10 — up 10%. Ratios of ratios need both numerators and denominators.",
    "id": "Sebelum: 50 per orang. Sesudah: 2.530 ÷ 46 = 55 per orang. 55 ÷ 50 = 1,10 — naik 10%. Rasio dari rasio membutuhkan pembilang dan penyebutnya sekaligus."
   }
  },
  {
   "id": "n13",
   "fam": "num",
   "q": {
    "en": "An invoice of Rp 12.5m is paid 40% upfront, and the remainder in two equal instalments. How large is each instalment?",
    "id": "Tagihan sebesar Rp 12,5 juta dibayar 40% di muka, dan sisanya dalam dua cicilan yang sama besar. Berapa besar tiap cicilan?"
   },
   "opts": [
    {
     "en": "Rp 3.75m",
     "id": "Rp 3,75 jt"
    },
    {
     "en": "Rp 2.5m",
     "id": "Rp 2,5 jt"
    },
    {
     "en": "Rp 5m",
     "id": "Rp 5 jt"
    },
    {
     "en": "Rp 6.25m",
     "id": "Rp 6,25 jt"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Remainder 60% × 12.5m = 7.5m; ÷ 2 = Rp 3.75m each.",
    "id": "Sisa 60% × 12,5 juta = 7,5 juta; ÷ 2 = Rp 3,75 juta per cicilan."
   }
  },
  {
   "id": "n14",
   "fam": "num",
   "q": {
    "en": "A car travels 240 km on 20 litres. Fuel costs Rp 13,000/litre. What is the fuel cost per 100 km?",
    "id": "Sebuah mobil menempuh 240 km dengan 20 liter bensin. Harga bensin Rp 13.000 per liter. Berapa biaya bensin per 100 km?"
   },
   "opts": [
    {
     "en": "~Rp 108,000",
     "id": "~Rp 108.000"
    },
    {
     "en": "~Rp 130,000",
     "id": "~Rp 130.000"
    },
    {
     "en": "~Rp 96,000",
     "id": "~Rp 96.000"
    },
    {
     "en": "~Rp 156,000",
     "id": "~Rp 156.000"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Consumption: 20 ÷ 240 × 100 = 8.33 l/100km. Cost: 8.33 × 13,000 ≈ Rp 108,000. Chain the unit conversions one step at a time.",
    "id": "Konsumsi: 20 ÷ 240 × 100 = 8,33 liter/100 km. Biaya: 8,33 × 13.000 ≈ Rp 108.000. Rangkai konversi satuannya satu langkah demi satu langkah."
   }
  },
  {
   "id": "n15",
   "fam": "num",
   "q": {
    "en": "Profit fell 35% to Rp 130m. What was profit before the fall (nearest million)?",
    "id": "Laba turun 35% menjadi Rp 130 juta. Berapa laba sebelum penurunan itu (dibulatkan ke juta terdekat)?"
   },
   "opts": [
    {
     "en": "Rp 200m",
     "id": "Rp 200 jt"
    },
    {
     "en": "Rp 176m",
     "id": "Rp 176 jt"
    },
    {
     "en": "Rp 186m",
     "id": "Rp 186 jt"
    },
    {
     "en": "Rp 165m",
     "id": "Rp 165 jt"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "130m is 65% of the original: 130 ÷ 0.65 = 200m. Adding 35% to 130 (176m) is the reverse-percentage trap again.",
    "id": "130 juta adalah 65% dari nilai awal: 130 ÷ 0,65 = 200 juta. Menambahkan 35% ke 130 (176 juta) adalah jebakan persentase terbalik, sekali lagi."
   }
  },
  {
   "id": "v1",
   "fam": "verb",
   "passage": "p1",
   "q": {
    "en": "Statement: The average transaction value at PT Sinar Retail increased in 2025.",
    "id": "Pernyataan: Nilai transaksi rata-rata di PT Sinar Retail meningkat pada 2025."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Stated directly: revenue up 8% on 3% fewer transactions, and the passage itself says the average basket value rose.",
    "id": "Dinyatakan langsung: pendapatan naik 8% dengan transaksi 3% lebih sedikit, dan bacaannya sendiri menyebut nilai belanja rata-rata naik."
   }
  },
  {
   "id": "v2",
   "fam": "verb",
   "passage": "p1",
   "q": {
    "en": "Statement: Mall stores are more profitable than street-level stores.",
    "id": "Pernyataan: Toko mal lebih menguntungkan daripada toko tepi jalan."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 2,
   "expl": {
    "en": "The passage gives mall stores' revenue share (55%), never profit. Revenue is not profit — cannot say. The trap for business-savvy readers.",
    "id": "Bacaan hanya memberi porsi pendapatan toko mal (55%), tidak pernah menyebut laba. Pendapatan bukan laba — tidak bisa disimpulkan. Inilah jebakan bagi pembaca yang paham bisnis."
   }
  },
  {
   "id": "v3",
   "fam": "verb",
   "passage": "p1",
   "q": {
    "en": "Statement: The company will operate at least 29 stores during 2026.",
    "id": "Pernyataan: Perusahaan akan mengoperasikan setidaknya 29 toko selama 2026."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "24 existing (none closed before 2027) + 5 planned = 29. This follows necessarily from two stated facts — necessary inference counts as True.",
    "id": "24 toko yang ada (tidak ada yang ditutup sebelum 2027) + 5 yang direncanakan = 29. Ini kesimpulan yang pasti mengikuti dari dua fakta yang tertulis — kesimpulan yang pasti dihitung sebagai Benar."
   }
  },
  {
   "id": "v4",
   "fam": "verb",
   "passage": "p1",
   "q": {
    "en": "Statement: More than half of the company's stores are in malls.",
    "id": "Pernyataan: Lebih dari separuh toko perusahaan berada di mal."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "12 of 24 is exactly half, not more than half. False — the passage contradicts the statement's 'more than'. Precision over impression.",
    "id": "12 dari 24 tepat separuh, bukan lebih dari separuh. Salah — bacaannya bertentangan dengan kata 'lebih dari' dalam pernyataan. Ketepatan mengalahkan kesan."
   }
  },
  {
   "id": "v5",
   "fam": "verb",
   "passage": "p2",
   "q": {
    "en": "Statement: Vocational graduates are better prepared for work than university graduates.",
    "id": "Pernyataan: Lulusan vokasi lebih siap kerja daripada lulusan universitas."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 2,
   "expl": {
    "en": "The passage reports employment rates, not preparedness, and itself cautions the groups entered different industries. The causal claim is not established.",
    "id": "Bacaan melaporkan tingkat bekerja, bukan kesiapan, dan penulisnya sendiri mengingatkan bahwa kedua kelompok masuk ke industri yang berbeda. Klaim sebab-akibatnya tidak terbukti."
   }
  },
  {
   "id": "v6",
   "fam": "verb",
   "passage": "p2",
   "q": {
    "en": "Statement: The survey covered graduates in five provinces.",
    "id": "Pernyataan: Survei mencakup lulusan di lima provinsi."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Stated verbatim: 12,000 graduates in five provinces. Direct statements are True — do not overthink the easy ones under time.",
    "id": "Tertulis persis seperti itu: 12.000 lulusan di lima provinsi. Pernyataan yang langsung adalah Benar — jangan memperumit soal yang mudah saat dikejar waktu."
   }
  },
  {
   "id": "v7",
   "fam": "verb",
   "passage": "p2",
   "q": {
    "en": "Statement: Including graduates who continued to further study would lower both employment percentages.",
    "id": "Pernyataan: Memasukkan lulusan yang melanjutkan studi akan menurunkan kedua persentase bekerja."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 2,
   "expl": {
    "en": "Plausible arithmetic speculation — but the passage says nothing about how such graduates would be counted. Not established by the text.",
    "id": "Spekulasi hitungan yang masuk akal — tapi bacaan tidak mengatakan apa pun tentang bagaimana lulusan tersebut akan dihitung. Tidak terbukti dari teksnya."
   }
  },
  {
   "id": "v8",
   "fam": "verb",
   "passage": "p2",
   "q": {
    "en": "Statement: Fewer than 60% of surveyed university graduates were employed within six months.",
    "id": "Pernyataan: Kurang dari 60% lulusan universitas tersurvei bekerja dalam enam bulan."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "The passage states 61% — which contradicts 'fewer than 60%'. False, by one point: quantifier questions are read with a ruler.",
    "id": "Bacaan menyebut 61% — yang bertentangan dengan 'kurang dari 60%'. Salah, meski hanya selisih satu poin: soal kata kuantitas dibaca dengan penggaris."
   }
  },
  {
   "id": "v9",
   "fam": "verb",
   "passage": "p3",
   "q": {
    "en": "Statement: The electric vans reduced Arta's fuel and energy cost per package on the two routes.",
    "id": "Pernyataan: Van listrik menurunkan biaya bahan bakar dan energi per paket Arta di dua rute itu."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Stated: per-package fuel and energy cost fell 18% on those routes after the introduction. (Strictly the timing is correlational, but the passage asserts the fall.)",
    "id": "Tertulis: biaya bahan bakar dan energi per paket turun 18% di rute-rute itu setelah van listrik dipakai. (Secara ketat, hubungannya baru korelasi, tetapi bacaan menegaskan penurunannya.)"
   }
  },
  {
   "id": "v10",
   "fam": "verb",
   "passage": "p3",
   "q": {
    "en": "Statement: The fleet change has already recovered its total cost, including vehicle purchases.",
    "id": "Pernyataan: Pergantian armada telah menutup seluruh biayanya, termasuk pembelian kendaraan."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 2,
   "expl": {
    "en": "The director's quote suggests it; the finance note reveals purchases are excluded from the cited figure. The full-cost claim is neither established nor contradicted.",
    "id": "Kutipan sang direktur mengisyaratkan begitu; catatan tim keuangan mengungkap bahwa biaya pembelian tidak termasuk dalam angka yang dikutip. Klaim biaya penuhnya tidak terbukti, tapi juga tidak dibantah."
   }
  },
  {
   "id": "v11",
   "fam": "verb",
   "passage": "p3",
   "q": {
    "en": "Statement: Delivery times worsened after the electric vans were introduced.",
    "id": "Pernyataan: Waktu kirim memburuk setelah van listrik diperkenalkan."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "The passage states average delivery time was unchanged — directly contradicting 'worsened'.",
    "id": "Bacaan menyatakan waktu pengiriman rata-rata tidak berubah — langsung bertentangan dengan 'memburuk'."
   }
  },
  {
   "id": "v12",
   "fam": "verb",
   "passage": "p3",
   "q": {
    "en": "Statement: Arta Logistics operates more than two delivery routes.",
    "id": "Pernyataan: Arta Logistics mengoperasikan lebih dari dua rute pengiriman."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 2,
   "expl": {
    "en": "Vans were introduced 'on two delivery routes' — which neither states nor implies how many routes exist in total. Cannot say.",
    "id": "Van dipakai 'di dua rute pengiriman' — yang tidak menyatakan maupun menyiratkan berapa jumlah rute seluruhnya. Tidak bisa disimpulkan."
   }
  },
  {
   "id": "l1",
   "fam": "log",
   "q": {
    "en": "Continue the series: 3, 6, 12, 24, …",
    "id": "Lanjutkan deret: 3, 6, 12, 24, …"
   },
   "opts": [
    {
     "en": "48",
     "id": "48"
    },
    {
     "en": "36",
     "id": "36"
    },
    {
     "en": "30",
     "id": "30"
    },
    {
     "en": "42",
     "id": "42"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Each term doubles: ×2 throughout, so 24 × 2 = 48. Test multiplication before addition when growth accelerates.",
    "id": "Setiap suku dikali dua: ×2 sepanjang deret, jadi 24 × 2 = 48. Saat pertumbuhannya makin cepat, uji perkalian sebelum penjumlahan."
   }
  },
  {
   "id": "l2",
   "fam": "log",
   "q": {
    "en": "Continue the series: 2, 3, 5, 8, 12, 17, …",
    "id": "Lanjutkan deret: 2, 3, 5, 8, 12, 17, …"
   },
   "opts": [
    {
     "en": "23",
     "id": "23"
    },
    {
     "en": "21",
     "id": "21"
    },
    {
     "en": "22",
     "id": "22"
    },
    {
     "en": "24",
     "id": "24"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Differences grow by one: +1, +2, +3, +4, +5 — next is +6, giving 23. When terms are irregular, difference the series first.",
    "id": "Selisihnya bertambah satu: +1, +2, +3, +4, +5 — berikutnya +6, hasilnya 23. Saat sukunya tidak beraturan, hitung dulu selisih antar-sukunya."
   }
  },
  {
   "id": "l3",
   "fam": "log",
   "q": {
    "en": "Continue: A, C, F, J, O, …",
    "id": "Lanjutkan: A, C, F, J, O, …"
   },
   "opts": [
    {
     "en": "U",
     "id": "U"
    },
    {
     "en": "T",
     "id": "T"
    },
    {
     "en": "S",
     "id": "S"
    },
    {
     "en": "V",
     "id": "V"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Skips grow: +2 (A→C), +3, +4, +5, then +6: O → U. Letter series are number series wearing an alphabet.",
    "id": "Lompatannya membesar: +2 (A→C), +3, +4, +5, lalu +6: O → U. Deret huruf hanyalah deret angka yang memakai baju alfabet."
   }
  },
  {
   "id": "l4",
   "fam": "log",
   "q": {
    "en": "Odd one out: 121, 144, 169, 189, 196",
    "id": "Mana yang berbeda: 121, 144, 169, 189, 196"
   },
   "opts": [
    {
     "en": "189",
     "id": "189"
    },
    {
     "en": "121",
     "id": "121"
    },
    {
     "en": "196",
     "id": "196"
    },
    {
     "en": "169",
     "id": "169"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "121, 144, 169, 196 are 11², 12², 13², 14². 189 = 27 × 7 — not a perfect square.",
    "id": "121, 144, 169, 196 adalah 11², 12², 13², 14². 189 = 27 × 7 — bukan kuadrat sempurna."
   }
  },
  {
   "id": "l5",
   "fam": "log",
   "q": {
    "en": "MAP is to NBQ as ROPE is to …",
    "id": "MAP berpasangan dengan NBQ, maka ROPE berpasangan dengan …"
   },
   "opts": [
    {
     "en": "SPQF",
     "id": "SPQF"
    },
    {
     "en": "SQPF",
     "id": "SQPF"
    },
    {
     "en": "QNOD",
     "id": "QNOD"
    },
    {
     "en": "SPQG",
     "id": "SPQG"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Each letter shifts +1: M→N, A→B, P→Q. Apply to ROPE: R→S, O→P, P→Q, E→F = SPQF.",
    "id": "Tiap huruf bergeser +1: M→N, A→B, P→Q. Terapkan ke ROPE: R→S, O→P, P→Q, E→F = SPQF."
   }
  },
  {
   "id": "l6",
   "fam": "log",
   "q": {
    "en": "All analysts in the team use spreadsheets. Rina is in the team and does not use spreadsheets. What follows?",
    "id": "Semua analis di tim memakai spreadsheet. Rina ada di tim dan tidak memakai spreadsheet. Apa kesimpulannya?"
   },
   "opts": [
    {
     "en": "Rina is not an analyst",
     "id": "Rina bukan analis"
    },
    {
     "en": "Rina is an analyst",
     "id": "Rina seorang analis"
    },
    {
     "en": "The team has no analysts",
     "id": "Tim itu tidak punya analis"
    },
    {
     "en": "Nothing follows",
     "id": "Tidak ada kesimpulan yang bisa ditarik"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "If every analyst uses spreadsheets, a team member who does not cannot be an analyst — the contrapositive, applied cleanly.",
    "id": "Kalau semua analis memakai spreadsheet, anggota tim yang tidak memakainya tidak mungkin seorang analis — kontraposisi, diterapkan dengan bersih."
   }
  },
  {
   "id": "l7",
   "fam": "log",
   "q": {
    "en": "Continue the pattern: ▲, ▲▲, ▲▲▲▲, ▲▲▲▲▲▲▲▲, …  How many triangles next?",
    "id": "Lanjutkan polanya: ▲, ▲▲, ▲▲▲▲, ▲▲▲▲▲▲▲▲, …  Berapa segitiga berikutnya?"
   },
   "opts": [
    {
     "en": "16",
     "id": "16"
    },
    {
     "en": "12",
     "id": "12"
    },
    {
     "en": "10",
     "id": "10"
    },
    {
     "en": "14",
     "id": "14"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Counts double: 1, 2, 4, 8 → 16. The count dimension (how many) is one of the five standard scan dimensions.",
    "id": "Jumlahnya berlipat dua: 1, 2, 4, 8 → 16. Dimensi jumlah (berapa banyak) adalah satu dari lima dimensi standar yang perlu kamu pindai."
   }
  },
  {
   "id": "l8",
   "fam": "log",
   "q": {
    "en": "Some designers are illustrators. All illustrators use tablets. Which statement must be true?",
    "id": "Sebagian desainer adalah ilustrator. Semua ilustrator memakai tablet. Pernyataan mana yang pasti benar?"
   },
   "opts": [
    {
     "en": "Some designers use tablets",
     "id": "Sebagian desainer memakai tablet"
    },
    {
     "en": "All designers use tablets",
     "id": "Semua desainer memakai tablet"
    },
    {
     "en": "Some tablet users are not illustrators",
     "id": "Sebagian pengguna tablet bukan ilustrator"
    },
    {
     "en": "All tablet users are illustrators",
     "id": "Semua pengguna tablet adalah ilustrator"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "The designers who are illustrators all use tablets — so some designers use tablets. The 'all designers' version overreaches the 'some'.",
    "id": "Para desainer yang juga ilustrator semuanya memakai tablet — jadi sebagian desainer memakai tablet. Versi 'semua desainer' melampaui apa yang dibolehkan kata 'sebagian'."
   }
  },
  {
   "id": "l9",
   "fam": "log",
   "q": {
    "en": "A meeting was planned to last 3 hours. It started 2 hours 40 minutes ago and ran one-third of its planned length before a break began. How long ago did the break begin?",
    "id": "Sebuah rapat direncanakan berlangsung 3 jam. Rapat dimulai 2 jam 40 menit yang lalu dan sudah berjalan sepertiga dari durasi rencananya ketika jeda dimulai. Berapa lama yang lalu jedanya dimulai?"
   },
   "opts": [
    {
     "en": "1 hour 40 minutes",
     "id": "1 jam 40 menit"
    },
    {
     "en": "2 hours",
     "id": "2 jam"
    },
    {
     "en": "1 hour",
     "id": "1 jam"
    },
    {
     "en": "40 minutes",
     "id": "40 menit"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "One-third of 3 hours = 60 minutes of meeting before the break; started 160 minutes ago, so the break began 160 − 60 = 100 minutes = 1h40m ago.",
    "id": "Sepertiga dari 3 jam = 60 menit rapat sebelum jeda; rapat dimulai 160 menit lalu, jadi jeda dimulai 160 − 60 = 100 menit = 1 jam 40 menit yang lalu."
   }
  },
  {
   "id": "l10",
   "fam": "log",
   "q": {
    "en": "Continue: 1, 1, 2, 3, 5, 8, 13, …",
    "id": "Lanjutkan: 1, 1, 2, 3, 5, 8, 13, …"
   },
   "opts": [
    {
     "en": "21",
     "id": "21"
    },
    {
     "en": "18",
     "id": "18"
    },
    {
     "en": "20",
     "id": "20"
    },
    {
     "en": "26",
     "id": "26"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Each term is the sum of the previous two: 8 + 13 = 21 (the Fibonacci rule).",
    "id": "Setiap suku adalah jumlah dua suku sebelumnya: 8 + 13 = 21 (aturan Fibonacci)."
   }
  },
  {
   "id": "l11",
   "fam": "log",
   "q": {
    "en": "In a 3×3 grid, the top row holds ○, ◐, ●. The middle row holds ◐, ●, ○. Following the same shift, what completes the bottom row after ●, ○ … ?",
    "id": "Dalam kisi 3×3, baris atas berisi ○, ◐, ●. Baris tengah berisi ◐, ●, ○. Dengan pergeseran yang sama, apa yang melengkapi baris bawah setelah ●, ○ … ?"
   },
   "opts": [
    {
     "en": "◐",
     "id": "◐"
    },
    {
     "en": "●",
     "id": "●"
    },
    {
     "en": "○",
     "id": "○"
    },
    {
     "en": "None — the pattern breaks",
     "id": "Tidak ada — polanya patah"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Each row shifts the trio one position left: ○◐● → ◐●○ → ●○◐. Matrix puzzles usually encode a rotation or shift per row.",
    "id": "Setiap baris menggeser ketiga simbol satu posisi ke kiri: ○◐● → ◐●○ → ●○◐. Teka-teki matriks biasanya menyembunyikan rotasi atau pergeseran per baris."
   }
  },
  {
   "id": "l12",
   "fam": "log",
   "q": {
    "en": "If BUDI = 2-21-4-9 (alphabet positions), what is SARI?",
    "id": "Jika BUDI = 2-21-4-9 (urutan huruf dalam alfabet), berapa SARI?"
   },
   "opts": [
    {
     "en": "19-1-18-9",
     "id": "19-1-18-9"
    },
    {
     "en": "18-1-19-9",
     "id": "18-1-19-9"
    },
    {
     "en": "19-1-17-9",
     "id": "19-1-17-9"
    },
    {
     "en": "20-1-18-9",
     "id": "20-1-18-9"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "S=19, A=1, R=18, I=9. Encoding puzzles are checked letter by letter — speed comes from knowing anchor positions (J=10, T=20).",
    "id": "S=19, A=1, R=18, I=9. Teka-teki kode diperiksa huruf demi huruf — kecepatan datang dari hafal posisi jangkar (J=10, T=20)."
   }
  },
  {
   "id": "n16",
   "fam": "num",
   "q": {
    "en": "Rp 360,000 is split between two people in the ratio 4 : 5. How much is the larger share?",
    "id": "Rp 360.000 dibagi untuk dua orang dengan perbandingan 4 : 5. Berapa bagian yang lebih besar?"
   },
   "opts": [
    {
     "en": "Rp 160,000",
     "id": "Rp 160.000"
    },
    {
     "en": "Rp 200,000",
     "id": "Rp 200.000"
    },
    {
     "en": "Rp 180,000",
     "id": "Rp 180.000"
    },
    {
     "en": "Rp 220,000",
     "id": "Rp 220.000"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "4 + 5 = 9 parts, so one part is 360,000 ÷ 9 = 40,000. The larger share is 5 × 40,000 = 200,000.",
    "id": "4 + 5 = 9 bagian, jadi satu bagian = 360.000 ÷ 9 = 40.000. Bagian yang lebih besar = 5 × 40.000 = 200.000."
   }
  },
  {
   "id": "n17",
   "fam": "num",
   "q": {
    "en": "Output of 2,000 units grows 10% per year for two years. Output after year two?",
    "id": "Output sebesar 2.000 unit tumbuh 10% per tahun selama dua tahun. Berapa output setelah tahun kedua?"
   },
   "opts": [
    {
     "en": "2,400",
     "id": "2.400"
    },
    {
     "en": "2,420",
     "id": "2.420"
    },
    {
     "en": "2,200",
     "id": "2.200"
    },
    {
     "en": "2,440",
     "id": "2.440"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Growth compounds: 2,000 × 1.1 × 1.1 = 2,420. Adding 10% twice to the base (2,400) misses growth on the growth.",
    "id": "Pertumbuhannya berlipat: 2.000 × 1,1 × 1,1 = 2.420. Menambahkan 10% dua kali dari angka dasar (2.400) melewatkan pertumbuhan di atas pertumbuhan."
   }
  },
  {
   "id": "n18",
   "fam": "num",
   "q": {
    "en": "Fixed costs are Rp 12m per month and each unit contributes Rp 40,000 after variable costs. Units needed to break even?",
    "id": "Biaya tetap Rp 12 juta per bulan, dan setiap unit menyumbang Rp 40.000 setelah dikurangi biaya variabel. Berapa unit yang dibutuhkan untuk mencapai titik impas?"
   },
   "opts": [
    {
     "en": "250",
     "id": "250"
    },
    {
     "en": "300",
     "id": "300"
    },
    {
     "en": "320",
     "id": "320"
    },
    {
     "en": "280",
     "id": "280"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Break-even = fixed costs ÷ contribution per unit: 12,000,000 ÷ 40,000 = 300 units.",
    "id": "Titik impas = biaya tetap ÷ kontribusi per unit: 12.000.000 ÷ 40.000 = 300 unit."
   }
  },
  {
   "id": "n19",
   "fam": "num",
   "q": {
    "en": "The mean of four test scores is 72. What must the fifth score be for a mean of 75 across five tests?",
    "id": "Rata-rata empat skor tes adalah 72. Berapa skor tes kelima supaya rata-rata lima tes menjadi 75?"
   },
   "opts": [
    {
     "en": "78",
     "id": "78"
    },
    {
     "en": "87",
     "id": "87"
    },
    {
     "en": "84",
     "id": "84"
    },
    {
     "en": "90",
     "id": "90"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Totals, not averages: needed 5 × 75 = 375; have 4 × 72 = 288; the fifth score is 375 − 288 = 87.",
    "id": "Pakai total, bukan rata-rata: dibutuhkan 5 × 75 = 375; sudah ada 4 × 72 = 288; skor kelima = 375 − 288 = 87."
   }
  },
  {
   "id": "n20",
   "fam": "num",
   "q": {
    "en": "An invoice of USD 250 is paid at Rp 15,800 per dollar. The rupiah amount?",
    "id": "Tagihan sebesar USD 250 dibayar dengan kurs Rp 15.800 per dolar. Berapa jumlahnya dalam rupiah?"
   },
   "opts": [
    {
     "en": "Rp 3,950,000",
     "id": "Rp 3.950.000"
    },
    {
     "en": "Rp 3,590,000",
     "id": "Rp 3.590.000"
    },
    {
     "en": "Rp 4,150,000",
     "id": "Rp 4.150.000"
    },
    {
     "en": "Rp 3,850,000",
     "id": "Rp 3.850.000"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "250 × 15,800 = 3,950,000. Multiply cleanly: 250 × 15,800 = 250 × 16,000 − 250 × 200.",
    "id": "250 × 15.800 = 3.950.000. Kalikan dengan rapi: 250 × 16.000 − 250 × 200."
   }
  },
  {
   "id": "n21",
   "fam": "num",
   "q": {
    "en": "Working alone, A finishes a task in 6 hours and B in 12 hours. Working together?",
    "id": "Bekerja sendiri, A menyelesaikan sebuah tugas dalam 6 jam dan B dalam 12 jam. Berapa lama kalau mereka bekerja bersama?"
   },
   "opts": [
    {
     "en": "9 hours",
     "id": "9 jam"
    },
    {
     "en": "4 hours",
     "id": "4 jam"
    },
    {
     "en": "5 hours",
     "id": "5 jam"
    },
    {
     "en": "3 hours",
     "id": "3 jam"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Add rates, not times: 1/6 + 1/12 = 1/4 of the task per hour, so 4 hours. Averaging the times (9) is the trap.",
    "id": "Jumlahkan lajunya, bukan waktunya: 1/6 + 1/12 = 1/4 tugas per jam, jadi 4 jam. Merata-ratakan waktunya (9 jam) adalah jebakannya."
   }
  },
  {
   "id": "n22",
   "fam": "num",
   "q": {
    "en": "An item costs Rp 150,000 to make and sells for Rp 195,000. What is the markup on cost?",
    "id": "Sebuah barang berbiaya produksi Rp 150.000 dan dijual Rp 195.000. Berapa markup terhadap biayanya?"
   },
   "opts": [
    {
     "en": "23%",
     "id": "23%"
    },
    {
     "en": "30%",
     "id": "30%"
    },
    {
     "en": "25%",
     "id": "25%"
    },
    {
     "en": "45%",
     "id": "45%"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Markup on cost = 45,000 ÷ 150,000 = 30%. Dividing by the selling price gives ~23% — that is margin, a different ratio.",
    "id": "Markup terhadap biaya = 45.000 ÷ 150.000 = 30%. Kalau dibagi dengan harga jual, hasilnya ~23% — itu margin, rasio yang berbeda."
   }
  },
  {
   "id": "n23",
   "fam": "num",
   "q": {
    "en": "A department of 120 staff is reduced by 15%. Headcount afterwards?",
    "id": "Sebuah departemen berisi 120 staf dikurangi 15%. Berapa jumlah stafnya setelah itu?"
   },
   "opts": [
    {
     "en": "105",
     "id": "105"
    },
    {
     "en": "102",
     "id": "102"
    },
    {
     "en": "108",
     "id": "108"
    },
    {
     "en": "100",
     "id": "100"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "120 × 0.85 = 102. Compute the remaining fraction directly instead of subtracting a separately-computed 15%.",
    "id": "120 × 0,85 = 102. Hitung langsung bagian yang tersisa, alih-alih menghitung 15% secara terpisah lalu menguranginya."
   }
  },
  {
   "id": "n24",
   "fam": "num",
   "q": {
    "en": "Rp 2.4m earns simple interest at 5% per year. Interest after 18 months?",
    "id": "Rp 2,4 juta ditabung dengan bunga sederhana 5% per tahun. Berapa bunganya setelah 18 bulan?"
   },
   "opts": [
    {
     "en": "Rp 120,000",
     "id": "Rp 120.000"
    },
    {
     "en": "Rp 180,000",
     "id": "Rp 180.000"
    },
    {
     "en": "Rp 150,000",
     "id": "Rp 150.000"
    },
    {
     "en": "Rp 240,000",
     "id": "Rp 240.000"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Simple interest scales with time: 2,400,000 × 0.05 × 1.5 = 180,000.",
    "id": "Bunga sederhana sebanding dengan waktu: 2.400.000 × 0,05 × 1,5 = 180.000."
   }
  },
  {
   "id": "n25",
   "fam": "num",
   "q": {
    "en": "Market share rises from 12% to 18%. The relative increase is …",
    "id": "Pangsa pasar naik dari 12% menjadi 18%. Kenaikan relatifnya adalah …"
   },
   "opts": [
    {
     "en": "6%",
     "id": "6%"
    },
    {
     "en": "50%",
     "id": "50%"
    },
    {
     "en": "18%",
     "id": "18%"
    },
    {
     "en": "33%",
     "id": "33%"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Relative change = 6 ÷ 12 = 50%. The 6-point rise is in percentage points — reports quote both, so name which one you mean.",
    "id": "Perubahan relatif = 6 ÷ 12 = 50%. Kenaikan 6 poin itu dalam poin persentase — laporan memakai keduanya, jadi sebutkan yang mana yang kamu maksud."
   }
  },
  {
   "id": "n26",
   "fam": "num",
   "q": {
    "en": "A grade weights an exam 60% (score 80) and coursework 40% (score 65). Final grade?",
    "id": "Nilai akhir dihitung dari ujian dengan bobot 60% (skor 80) dan tugas dengan bobot 40% (skor 65). Berapa nilai akhirnya?"
   },
   "opts": [
    {
     "en": "72.5",
     "id": "72,5"
    },
    {
     "en": "74",
     "id": "74"
    },
    {
     "en": "73",
     "id": "73"
    },
    {
     "en": "76",
     "id": "76"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Weighted sum: 0.6 × 80 + 0.4 × 65 = 48 + 26 = 74. The unweighted mean (72.5) ignores the weights.",
    "id": "Jumlah tertimbang: 0,6 × 80 + 0,4 × 65 = 48 + 26 = 74. Rata-rata biasa (72,5) mengabaikan bobotnya."
   }
  },
  {
   "id": "n27",
   "fam": "num",
   "q": {
    "en": "A courier scans 45 packages in 90 minutes. At the same rate, how many in an 8-hour shift?",
    "id": "Seorang kurir memindai 45 paket dalam 90 menit. Dengan kecepatan yang sama, berapa paket dalam satu sif 8 jam?"
   },
   "opts": [
    {
     "en": "225",
     "id": "225"
    },
    {
     "en": "240",
     "id": "240"
    },
    {
     "en": "270",
     "id": "270"
    },
    {
     "en": "210",
     "id": "210"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "45 per 1.5 hours = 30 per hour; 30 × 8 = 240. Convert to a unit rate first — mixed units breed errors.",
    "id": "45 per 1,5 jam = 30 per jam; 30 × 8 = 240. Ubah dulu ke laju per satuan — satuan yang campur aduk mengundang kesalahan."
   }
  },
  {
   "id": "n28",
   "fam": "num",
   "q": {
    "en": "A 20% discount is followed by a further 10% off the reduced price. Total discount?",
    "id": "Diskon 20% disusul diskon tambahan 10% dari harga yang sudah dipotong. Berapa total diskonnya?"
   },
   "opts": [
    {
     "en": "30%",
     "id": "30%"
    },
    {
     "en": "28%",
     "id": "28%"
    },
    {
     "en": "25%",
     "id": "25%"
    },
    {
     "en": "32%",
     "id": "32%"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Multiply the remainders: 0.8 × 0.9 = 0.72, so 28% off. Sequential discounts never simply add.",
    "id": "Kalikan bagian yang tersisa: 0,8 × 0,9 = 0,72, jadi diskon 28%. Diskon berurutan tidak pernah sekadar dijumlahkan."
   }
  },
  {
   "id": "n29",
   "fam": "num",
   "q": {
    "en": "Revenue of Rp 8.4bn across 70 employees. Revenue per employee?",
    "id": "Pendapatan Rp 8,4 miliar dihasilkan oleh 70 karyawan. Berapa pendapatan per karyawan?"
   },
   "opts": [
    {
     "en": "Rp 110m",
     "id": "Rp 110 jt"
    },
    {
     "en": "Rp 120m",
     "id": "Rp 120 jt"
    },
    {
     "en": "Rp 130m",
     "id": "Rp 130 jt"
    },
    {
     "en": "Rp 140m",
     "id": "Rp 140 jt"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "8,400 ÷ 70 = 120 (in millions). Strip the shared zeros before dividing: 8.4bn ÷ 70 = 84 ÷ 0.7 hundred-million.",
    "id": "8.400 ÷ 70 = 120 (dalam juta). Buang dulu nol-nol yang sama sebelum membagi."
   }
  },
  {
   "id": "n30",
   "fam": "num",
   "q": {
    "en": "A warehouse opens with 500 units, ships 380 and receives 220. Closing stock?",
    "id": "Sebuah gudang memulai hari dengan 500 unit, mengirim 380 unit, dan menerima 220 unit. Berapa stok akhirnya?"
   },
   "opts": [
    {
     "en": "300",
     "id": "300"
    },
    {
     "en": "340",
     "id": "340"
    },
    {
     "en": "360",
     "id": "360"
    },
    {
     "en": "320",
     "id": "320"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "500 − 380 + 220 = 340. Keep inflows and outflows on separate mental ledgers, then combine once.",
    "id": "500 − 380 + 220 = 340. Pisahkan arus masuk dan arus keluar di kepalamu, lalu gabungkan satu kali."
   }
  },
  {
   "id": "n31",
   "fam": "num",
   "q": {
    "en": "A levy of 5% applies only to income above Rp 4.5m. On income of Rp 6.0m, the levy is …",
    "id": "Pungutan 5% hanya dikenakan atas penghasilan di atas Rp 4,5 juta. Untuk penghasilan Rp 6,0 juta, pungutannya adalah …"
   },
   "opts": [
    {
     "en": "Rp 300,000",
     "id": "Rp 300.000"
    },
    {
     "en": "Rp 75,000",
     "id": "Rp 75.000"
    },
    {
     "en": "Rp 225,000",
     "id": "Rp 225.000"
    },
    {
     "en": "Rp 90,000",
     "id": "Rp 90.000"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Only the excess is taxed: (6,000,000 − 4,500,000) × 5% = 75,000. Applying 5% to the whole amount (300,000) misreads the threshold.",
    "id": "Hanya kelebihannya yang dikenai: (6.000.000 − 4.500.000) × 5% = 75.000. Menerapkan 5% pada seluruh jumlah (300.000) berarti salah membaca ambang batasnya."
   }
  },
  {
   "id": "n32",
   "fam": "num",
   "q": {
    "en": "Production rises from 240 to 300 units in four equal quarterly steps. Production after the third step?",
    "id": "Produksi naik dari 240 menjadi 300 unit dalam empat kenaikan kuartalan yang sama besar. Berapa produksi setelah kenaikan ketiga?"
   },
   "opts": [
    {
     "en": "280",
     "id": "280"
    },
    {
     "en": "285",
     "id": "285"
    },
    {
     "en": "275",
     "id": "275"
    },
    {
     "en": "290",
     "id": "290"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Total rise 60 over 4 steps = 15 per step; after three steps 240 + 45 = 285.",
    "id": "Total kenaikan 60 dalam 4 langkah = 15 per langkah; setelah tiga langkah, 240 + 45 = 285."
   }
  },
  {
   "id": "v13",
   "fam": "verb",
   "passage": "p4",
   "q": {
    "en": "Statement: In the study, remote employees produced more output per person than hybrid employees.",
    "id": "Pernyataan: Dalam studi itu, karyawan jarak jauh menghasilkan output per orang lebih tinggi daripada karyawan hibrida."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Stated directly: output per person was 4% higher in the remote group.",
    "id": "Dinyatakan langsung: output per orang 4% lebih tinggi di kelompok jarak jauh."
   }
  },
  {
   "id": "v14",
   "fam": "verb",
   "passage": "p4",
   "q": {
    "en": "Statement: The study shows that remote work raises managers' productivity.",
    "id": "Pernyataan: Studi itu menunjukkan bahwa kerja jarak jauh menaikkan produktivitas para manajer."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 2,
   "expl": {
    "en": "Managers were excluded from the study, so it can say nothing about them either way.",
    "id": "Manajer tidak termasuk dalam studi, jadi studi ini tidak bisa mengatakan apa pun tentang mereka, ke arah mana pun."
   }
  },
  {
   "id": "v15",
   "fam": "verb",
   "passage": "p4",
   "q": {
    "en": "Statement: New hires in the remote group reached full productivity faster than other new hires.",
    "id": "Pernyataan: Karyawan baru di kelompok jarak jauh mencapai produktivitas penuh lebih cepat daripada karyawan baru lain."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "The passage states the opposite — they took on average two weeks longer.",
    "id": "Bacaan menyatakan sebaliknya — mereka rata-rata butuh dua minggu lebih lama."
   }
  },
  {
   "id": "v16",
   "fam": "verb",
   "passage": "p4",
   "q": {
    "en": "Statement: The company ended fully remote work after the study.",
    "id": "Pernyataan: Perusahaan menghentikan skema kerja jarak jauh penuh setelah studi itu."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "False — it kept both arrangements; only the first-year default changed.",
    "id": "Salah — kedua skema dipertahankan; yang berubah hanya pilihan bawaan bagi karyawan tahun pertama."
   }
  },
  {
   "id": "v17",
   "fam": "verb",
   "passage": "p4",
   "q": {
    "en": "Statement: First-year employees now default to the hybrid track.",
    "id": "Pernyataan: Karyawan tahun pertama kini otomatis masuk jalur hibrida."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Stated in the final sentence: the hybrid track became the default for first-year employees.",
    "id": "Dinyatakan di kalimat terakhir: jalur hibrida menjadi pilihan bawaan bagi karyawan tahun pertama."
   }
  },
  {
   "id": "v18",
   "fam": "verb",
   "passage": "p4",
   "q": {
    "en": "Statement: Customer-support staff preferred hybrid work.",
    "id": "Pernyataan: Staf layanan pelanggan lebih menyukai kerja hibrida."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 2,
   "expl": {
    "en": "Customer support was excluded from the study; no preference data exists in the passage.",
    "id": "Divisi layanan pelanggan tidak termasuk dalam studi; tidak ada data preferensi apa pun di dalam bacaan."
   }
  },
  {
   "id": "v19",
   "fam": "verb",
   "passage": "p5",
   "q": {
    "en": "Statement: The cooperative exported more than half of its harvest in 2025.",
    "id": "Pernyataan: Koperasi mengekspor lebih dari setengah panennya pada 2025."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "60% is more than half — stated directly.",
    "id": "60% lebih dari setengah — dinyatakan secara langsung."
   }
  },
  {
   "id": "v20",
   "fam": "verb",
   "passage": "p5",
   "q": {
    "en": "Statement: Certification costs fell as the export share grew.",
    "id": "Pernyataan: Biaya sertifikasi turun seiring naiknya porsi ekspor."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "False — certification costs rose 12% over the same period.",
    "id": "Salah — biaya sertifikasi naik 12% pada periode yang sama."
   }
  },
  {
   "id": "v21",
   "fam": "verb",
   "passage": "p5",
   "q": {
    "en": "Statement: The cooperative has more than 300 member farms.",
    "id": "Pernyataan: Koperasi memiliki lebih dari 300 kebun anggota."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "340 member farms — stated in the first sentence.",
    "id": "340 kebun anggota — dinyatakan di kalimat pertama."
   }
  },
  {
   "id": "v22",
   "fam": "verb",
   "passage": "p5",
   "q": {
    "en": "Statement: The neighbouring cooperatives export at higher prices than Lestari.",
    "id": "Pernyataan: Koperasi-koperasi tetangga mengekspor dengan harga lebih tinggi daripada Lestari."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 2,
   "expl": {
    "en": "The passage gives no price data for the neighbouring cooperatives.",
    "id": "Bacaan tidak memberikan data harga apa pun untuk koperasi-koperasi tetangga."
   }
  },
  {
   "id": "v23",
   "fam": "verb",
   "passage": "p5",
   "q": {
    "en": "Statement: The export share rose by 15 percentage points over two years.",
    "id": "Pernyataan: Porsi ekspor naik 15 poin persentase dalam dua tahun."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "From 45% to 60% is a 15-point rise. Points, not percent — the relative rise would be ~33%.",
    "id": "Dari 45% menjadi 60% adalah kenaikan 15 poin. Poin, bukan persen — kenaikan relatifnya sekitar 33%."
   }
  },
  {
   "id": "v24",
   "fam": "verb",
   "passage": "p5",
   "q": {
    "en": "Statement: Most of the cooperative's member farms are large plantations.",
    "id": "Pernyataan: Sebagian besar kebun anggota koperasi adalah perkebunan besar."
   },
   "opts": [
    {
     "en": "True",
     "id": "Benar"
    },
    {
     "en": "False",
     "id": "Salah"
    },
    {
     "en": "Cannot say",
     "id": "Tidak bisa disimpulkan"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "False — the passage describes them as smallholder farms.",
    "id": "Salah — bacaan menyebutnya sebagai kebun petani kecil."
   }
  },
  {
   "id": "l13",
   "fam": "log",
   "q": {
    "en": "Continue the series: 5, 10, 8, 16, 14, 28, …",
    "id": "Lanjutkan deret: 5, 10, 8, 16, 14, 28, …"
   },
   "opts": [
    {
     "en": "26",
     "id": "26"
    },
    {
     "en": "56",
     "id": "56"
    },
    {
     "en": "24",
     "id": "24"
    },
    {
     "en": "30",
     "id": "30"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Alternating rule: ×2 then −2. After 28 comes 28 − 2 = 26. Two interleaved rules are the most common twist on doubling.",
    "id": "Aturannya berselang-seling: ×2 lalu −2. Setelah 28 datang 28 − 2 = 26. Dua aturan yang berjalin adalah variasi paling umum dari pola penggandaan."
   }
  },
  {
   "id": "l14",
   "fam": "log",
   "q": {
    "en": "Continue: B, E, H, K, …",
    "id": "Lanjutkan: B, E, H, K, …"
   },
   "opts": [
    {
     "en": "M",
     "id": "M"
    },
    {
     "en": "N",
     "id": "N"
    },
    {
     "en": "O",
     "id": "O"
    },
    {
     "en": "L",
     "id": "L"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Each letter jumps +3 positions: B(2), E(5), H(8), K(11), N(14).",
    "id": "Setiap huruf melompat +3 posisi: B(2), E(5), H(8), K(11), N(14)."
   }
  },
  {
   "id": "l15",
   "fam": "log",
   "q": {
    "en": "Thermometer is to temperature as barometer is to …",
    "id": "Termometer berpasangan dengan suhu, maka barometer berpasangan dengan …"
   },
   "opts": [
    {
     "en": "weather",
     "id": "cuaca"
    },
    {
     "en": "pressure",
     "id": "tekanan"
    },
    {
     "en": "altitude",
     "id": "ketinggian"
    },
    {
     "en": "humidity",
     "id": "kelembapan"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "The relation is instrument → the quantity it measures. A barometer measures pressure; weather is what you infer, not what it reads.",
    "id": "Hubungannya: alat → besaran yang diukurnya. Barometer mengukur tekanan; cuaca adalah kesimpulan yang ditarik dari bacaannya, bukan yang terbaca di alatnya."
   }
  },
  {
   "id": "l16",
   "fam": "log",
   "q": {
    "en": "Odd one out: kilogram, metre, litre, ruler",
    "id": "Mana yang berbeda: kilogram, meter, liter, penggaris"
   },
   "opts": [
    {
     "en": "kilogram",
     "id": "kilogram"
    },
    {
     "en": "metre",
     "id": "meter"
    },
    {
     "en": "litre",
     "id": "liter"
    },
    {
     "en": "ruler",
     "id": "penggaris"
    }
   ],
   "correct": 3,
   "expl": {
    "en": "Three are units of measurement; a ruler is an instrument. Classify by category, not by association.",
    "id": "Tiga di antaranya satuan ukur; penggaris adalah alat ukur. Kelompokkan berdasarkan kategori, bukan berdasarkan asosiasi."
   }
  },
  {
   "id": "l17",
   "fam": "log",
   "q": {
    "en": "Continue the series: 81, 27, 9, 3, …",
    "id": "Lanjutkan deret: 81, 27, 9, 3, …"
   },
   "opts": [
    {
     "en": "0",
     "id": "0"
    },
    {
     "en": "1",
     "id": "1"
    },
    {
     "en": "2",
     "id": "2"
    },
    {
     "en": "1.5",
     "id": "1,5"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Each term divides by 3: 3 ÷ 3 = 1. Decreasing geometric series pass through 1 before fractions.",
    "id": "Setiap suku dibagi 3: 3 ÷ 3 = 1. Deret geometri yang menurun melewati angka 1 sebelum masuk ke pecahan."
   }
  },
  {
   "id": "l18",
   "fam": "log",
   "q": {
    "en": "Author is to novel as composer is to …",
    "id": "Penulis berpasangan dengan novel, maka komponis berpasangan dengan …"
   },
   "opts": [
    {
     "en": "orchestra",
     "id": "orkestra"
    },
    {
     "en": "symphony",
     "id": "simfoni"
    },
    {
     "en": "piano",
     "id": "piano"
    },
    {
     "en": "concert",
     "id": "konser"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Creator → the work they create. A composer writes a symphony; the orchestra performs it and the concert presents it.",
    "id": "Pencipta → karya yang diciptakannya. Komponis menulis simfoni; orkestra yang memainkannya, dan konser yang menyajikannya."
   }
  },
  {
   "id": "l19",
   "fam": "log",
   "q": {
    "en": "In a code, DOG is written as EPH. How is CAT written?",
    "id": "Dalam sebuah kode, DOG ditulis sebagai EPH. Bagaimana CAT ditulis?"
   },
   "opts": [
    {
     "en": "DBU",
     "id": "DBU"
    },
    {
     "en": "BZS",
     "id": "BZS"
    },
    {
     "en": "DCV",
     "id": "DCV"
    },
    {
     "en": "CBU",
     "id": "CBU"
    }
   ],
   "correct": 0,
   "expl": {
    "en": "Each letter shifts forward one: D→E, O→P, G→H. So C→D, A→B, T→U: DBU.",
    "id": "Setiap huruf maju satu posisi: D→E, O→P, G→H. Maka C→D, A→B, T→U: DBU."
   }
  },
  {
   "id": "l20",
   "fam": "log",
   "q": {
    "en": "All auditors check records. Some auditors are engineers. Which must be true?",
    "id": "Semua auditor memeriksa catatan. Sebagian auditor adalah insinyur. Mana yang pasti benar?"
   },
   "opts": [
    {
     "en": "All engineers check records",
     "id": "Semua insinyur memeriksa catatan"
    },
    {
     "en": "Some engineers check records",
     "id": "Sebagian insinyur memeriksa catatan"
    },
    {
     "en": "No engineers check records",
     "id": "Tidak ada insinyur yang memeriksa catatan"
    },
    {
     "en": "Some engineers are not auditors",
     "id": "Sebagian insinyur bukan auditor"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "The engineer-auditors exist and, as auditors, check records — so some engineers check records. Nothing follows about all engineers.",
    "id": "Insinyur yang juga auditor itu ada, dan sebagai auditor mereka memeriksa catatan — jadi sebagian insinyur memeriksa catatan. Tidak ada kesimpulan yang bisa ditarik tentang semua insinyur."
   }
  },
  {
   "id": "l21",
   "fam": "log",
   "q": {
    "en": "You walk 3 km north, then 4 km east. Straight-line distance from the start?",
    "id": "Kamu berjalan 3 km ke utara, lalu 4 km ke timur. Berapa jarak garis lurus dari titik awal?"
   },
   "opts": [
    {
     "en": "7 km",
     "id": "7 km"
    },
    {
     "en": "5 km",
     "id": "5 km"
    },
    {
     "en": "6 km",
     "id": "6 km"
    },
    {
     "en": "4.5 km",
     "id": "4,5 km"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Right angle → Pythagoras: √(3² + 4²) = 5. The 3-4-5 triangle is worth memorising.",
    "id": "Sudut siku-siku → Pythagoras: √(3² + 4²) = 5. Segitiga 3-4-5 layak dihafal."
   }
  },
  {
   "id": "l22",
   "fam": "log",
   "q": {
    "en": "In a team of 30, 18 know Excel, 15 know SQL, and 8 know both. How many know neither?",
    "id": "Dalam tim beranggotakan 30 orang, 18 orang bisa Excel, 15 orang bisa SQL, dan 8 orang bisa keduanya. Berapa orang yang tidak bisa keduanya?"
   },
   "opts": [
    {
     "en": "3",
     "id": "3"
    },
    {
     "en": "5",
     "id": "5"
    },
    {
     "en": "7",
     "id": "7"
    },
    {
     "en": "0",
     "id": "0"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Either-or = 18 + 15 − 8 = 25 (the overlap was counted twice). Neither = 30 − 25 = 5.",
    "id": "Bisa salah satu = 18 + 15 − 8 = 25 (yang bisa keduanya terhitung dua kali). Tidak bisa keduanya = 30 − 25 = 5."
   }
  },
  {
   "id": "l23",
   "fam": "log",
   "q": {
    "en": "Continue: AZ, BY, CX, …",
    "id": "Lanjutkan: AZ, BY, CX, …"
   },
   "opts": [
    {
     "en": "DV",
     "id": "DV"
    },
    {
     "en": "DW",
     "id": "DW"
    },
    {
     "en": "EW",
     "id": "EW"
    },
    {
     "en": "DX",
     "id": "DX"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "First letters ascend (A, B, C, D); second letters descend from the end (Z, Y, X, W): DW.",
    "id": "Huruf pertama naik (A, B, C, D); huruf kedua turun dari belakang (Z, Y, X, W): DW."
   }
  },
  {
   "id": "l24",
   "fam": "log",
   "q": {
    "en": "Continue the series: 4, 9, 19, 39, …",
    "id": "Lanjutkan deret: 4, 9, 19, 39, …"
   },
   "opts": [
    {
     "en": "59",
     "id": "59"
    },
    {
     "en": "79",
     "id": "79"
    },
    {
     "en": "69",
     "id": "69"
    },
    {
     "en": "78",
     "id": "78"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Rule ×2 + 1: 4→9, 9→19, 19→39, 39→79. When gaps roughly double, test ×2 ± k.",
    "id": "Aturannya ×2 + 1: 4→9, 9→19, 19→39, 39→79. Saat selisihnya kira-kira berlipat dua, uji pola ×2 ± k."
   }
  },
  {
   "id": "l25",
   "fam": "log",
   "q": {
    "en": "Larva is to butterfly as bud is to …",
    "id": "Larva berpasangan dengan kupu-kupu, maka kuncup berpasangan dengan …"
   },
   "opts": [
    {
     "en": "leaf",
     "id": "daun"
    },
    {
     "en": "flower",
     "id": "bunga"
    },
    {
     "en": "root",
     "id": "akar"
    },
    {
     "en": "seed",
     "id": "biji"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Immature stage → mature form of the same organism. A bud opens into a flower.",
    "id": "Tahap muda → bentuk dewasa dari organisme yang sama. Kuncup mekar menjadi bunga."
   }
  },
  {
   "id": "l26",
   "fam": "log",
   "q": {
    "en": "Odd one out: 17, 23, 27, 31, 37",
    "id": "Mana yang berbeda: 17, 23, 27, 31, 37"
   },
   "opts": [
    {
     "en": "23",
     "id": "23"
    },
    {
     "en": "27",
     "id": "27"
    },
    {
     "en": "31",
     "id": "31"
    },
    {
     "en": "37",
     "id": "37"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "All the others are prime; 27 = 3³. With number sets, test divisibility before position patterns.",
    "id": "Yang lain bilangan prima; 27 = 3³. Untuk himpunan angka, uji keterbagian sebelum mencari pola posisi."
   }
  },
  {
   "id": "l27",
   "fam": "log",
   "q": {
    "en": "A clock shows 3:40. What is the smaller angle between the hands?",
    "id": "Jam menunjukkan pukul 3.40. Berapa sudut terkecil di antara kedua jarum jam?"
   },
   "opts": [
    {
     "en": "120°",
     "id": "120°"
    },
    {
     "en": "130°",
     "id": "130°"
    },
    {
     "en": "140°",
     "id": "140°"
    },
    {
     "en": "110°",
     "id": "110°"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Minute hand: 40 × 6° = 240°. Hour hand: 3 × 30° + 40/60 × 30° = 110°. Difference 130°. The hour hand moves too.",
    "id": "Jarum menit: 40 × 6° = 240°. Jarum jam: 3 × 30° + 40/60 × 30° = 110°. Selisihnya 130°. Ingat, jarum jam juga ikut bergerak."
   }
  },
  {
   "id": "l28",
   "fam": "log",
   "q": {
    "en": "Four runners: Puti finished before Rio but after Sari. Tomo finished last. Who was second?",
    "id": "Empat pelari: Puti finis sebelum Rio tetapi setelah Sari. Tomo finis terakhir. Siapa yang finis kedua?"
   },
   "opts": [
    {
     "en": "Sari",
     "id": "Sari"
    },
    {
     "en": "Puti",
     "id": "Puti"
    },
    {
     "en": "Rio",
     "id": "Rio"
    },
    {
     "en": "Tomo",
     "id": "Tomo"
    }
   ],
   "correct": 1,
   "expl": {
    "en": "Order: Sari, Puti, Rio, Tomo. Draw the line and place each constraint — never juggle order in your head.",
    "id": "Urutannya: Sari, Puti, Rio, Tomo. Gambar garisnya dan letakkan setiap syarat — jangan mengatur urutan di dalam kepala saja."
   }
  }
 ]
};
