'use strict';
/* Test Lab · versioned format configuration.
   Every count, time, score rule and threshold the Lab shows comes from here, never from
   lesson prose. `verified_on` is the date the structure below was last checked against the
   named source; `verify` marks values that must be re-checked against the current
   announcement before each cycle (the Lab prints the source and the date next to them). */
module.exports = {
  version: '2026.10',
  verified_on: '2026-10-21',
  verified_by: 'Metanoia content team (desk check of the sources named below; not an official confirmation)',
  practice_label: { id: 'Soal latihan Metanoia. Bukan soal resmi atau bocoran ujian mana pun.', en: 'Metanoia practice item. Not an official item or a leak from any examination.' },
  format_notice: { id: 'Format, jumlah soal, waktu, skor dan ambang batas berubah tiap siklus. Selalu cek pengumuman resmi.', en: 'Format, item counts, timing, scoring and thresholds change every cycle. Always check the official announcement.' },
  skd: {
    name: 'SKD CPNS (Seleksi Kompetensi Dasar)',
    items: 110, minutes: 100,
    sections: { twk: { label: 'TWK · Tes Wawasan Kebangsaan', items: 30, points: 5, max: 150 }, tiu: { label: 'TIU · Tes Intelegensia Umum', items: 35, points: 5, max: 175 }, tkp: { label: 'TKP · Tes Karakteristik Pribadi', items: 45, points: [1, 5], max: 225 } },
    max_total: 550,
    scoring: { twk_tiu: 'Benar 5, salah atau kosong 0', tkp: 'Setiap opsi bernilai 1 sampai 5; kosong 0' },
    thresholds: {
      umum: { twk: 65, tiu: 80, tkp: 166 },
      cumlaude: { total: 311, tiu: 85 },
      disabilitas: { total: 286, tiu: 60 },
      putra_putri_papua: { total: 286, tiu: 60 },
      putra_putri_kalimantan: { total: 286, tiu: 60 }
    },
    weights: { skd: 40, skb: 60 },
    invite_multiple: 3,
    tiebreak: ['tkp', 'tiu', 'twk'],
    blueprint: {
      twk: { nasionalisme: 5, integritas: 5, bela_negara: 4, pancasila: 4, uud: 4, nkri: 2, bti: 2, bahasa: 4 },
      tiu: { analogi: 4, silogisme: 5, analitis: 4, berhitung: 5, deret: 5, perbandingan: 4, cerita: 3, figural: 5 },
      tkp: { pelayanan_publik: 9, jejaring_kerja: 7, sosial_budaya: 7, tik: 6, profesionalisme: 8, anti_radikalisme: 8 }
    },
    source: 'KepmenPAN-RB No. 321 Tahun 2024 (nilai ambang batas SKD CPNS siklus 2024) dan PermenPAN-RB No. 6 Tahun 2024 (kisi-kisi); format CAT BKN',
    verify: 'Jumlah soal, waktu, ambang batas per formasi, bobot SKD:SKB dan pengali undangan diperiksa ulang setiap siklus terhadap KepmenPAN-RB dan pengumuman BKN yang berlaku.',
    mock_notice: { id: 'Formulir latihan Metanoia dalam format mirip SKD; bukan tiruan tampilan atau merek lembaga mana pun.', en: 'A Metanoia practice form in an SKD-like format; not an imitation of any institution’s interface or brand.' }
  },
  bumn: {
    name: 'Rekrutmen Bersama BUMN (RBB) · TKD dan Tes AKHLAK',
    stages: ['Registrasi dan seleksi administrasi', 'TKD dan Tes AKHLAK (daring)', 'Tes Bahasa Inggris dan learning agility', 'Tes dan wawancara oleh BUMN tujuan', 'Pengumuman dan onboarding'],
    tkd: { items: 60, minutes: 45, scoring: 'Benar 1, salah 0, kosong 0 (format latihan Metanoia)', families: { verbal: 15, numerik: 15, penalaran: 15, figural: 15 } },
    akhlak: { items: 30, minutes: 25, scoring: 'Setiap opsi bernilai 1 sampai 5 (kunci penalaran Metanoia)', values: ['amanah', 'kompeten', 'harmonis', 'loyal', 'adaptif', 'kolaboratif'] },
    english: { items: 20, minutes: 20 },
    timed_set: { items: 40, minutes: 30 },
    source: 'Pengumuman FHCI untuk siklus RBB terakhir dan panduan nilai inti AKHLAK Kementerian BUMN (SE-7/MBU/07/2020)',
    verify: 'Tahapan, jumlah soal, waktu, penalti jawaban salah dan penyedia tes bahasa Inggris berbeda per siklus RBB; diperiksa ulang pada setiap pengumuman FHCI.',
    mock_notice: { id: 'Formulir latihan Metanoia dalam format mirip TKD; bukan tiruan tampilan atau merek lembaga mana pun.', en: 'A Metanoia practice form in a TKD-like format; not an imitation of any institution’s interface or brand.' },
    akhlak_disclaimer: { id: 'Kunci penalaran Metanoia. FHCI tidak menerbitkan kunci. Peringkat ini adalah penalaran tim kami berdasarkan panduan perilaku AKHLAK; peringkat penyedia lain dapat berbeda.', en: 'Metanoia reasoning key. FHCI publishes no key. This ranking is our team’s reasoning from the AKHLAK behaviour guide; other providers may rank differently.' }
  },
  tpa: {
    name: 'TPA-60 · Tes Potensi Akademik (format latihan Metanoia)',
    items: 60, minutes: 45,
    families: { verbal: 20, numerik: 20, penalaran: 12, figural: 8 },
    scoring: 'Benar 1, salah 0, kosong 0; skor skala 200 sampai 800 tidak ditiru, laporan Lab memakai persentase per keluarga',
    source: 'Format latihan Metanoia; bukan tiruan tes potensi lembaga mana pun',
    verify: 'Jumlah soal dan waktu tes potensi berbeda per penyelenggara (perusahaan, universitas, lembaga); cek undangan tes masing-masing.'
  },
  tkp_disclaimer: { id: 'Kunci penalaran Metanoia. BKN tidak menerbitkan kunci TKP. Peringkat ini adalah penalaran tim kami berdasarkan nilai dasar ASN dan kisi-kisi PermenPAN-RB; peringkat penyedia lain dapat berbeda.', en: 'Metanoia reasoning key. BKN publishes no TKP key. This ranking is our team’s reasoning from the ASN core values and the PermenPAN-RB blueprint; other providers may rank differently.' },
  review_panel: { id: 'Kesepakatan penelaah: belum ditinjau panel tiga penelaah (draf tim konten Metanoia).', en: 'Reviewer agreement: not yet reviewed by a three-reviewer panel (Metanoia content team draft).' },
  psikotes_notice: { id: 'Nama instrumen disebut untuk orientasi; kami tidak mereproduksi soal berhak cipta.', en: 'Instrument names are given for orientation only; we do not reproduce copyrighted items.' },
  kraepelin: { interval_s: 30, intervals: 20, digits_per_column: 60 },
  pacing: { cat_item_s: 72, skip_at_multiple: 1.5, estimate_blank_pts: 3 },
  weakness_bands: { red: 50, amber: 75 }
};
