// ⚠️  PRICE POINTS ARE PROVISIONAL — FOUNDER MUST CONFIRM BEFORE PUBLICATION.
//     Structure is the deliverable; the numbers are a business decision.
//     Anchors: Indonesian bootcamps run Rp 5–30M. Metanoia must sit far below,
//     and visibly above free, to signal seriousness without excluding the segment.

export const FREE_TIER = {
  id: 'basecamp',
  name:  { en: 'Basecamp', id: 'Basecamp' },
  price: { amount: 0, currency: 'IDR', period: null },
  tagline: { en: 'Free, always.', id: 'Gratis, selamanya.' },
  includes: [
    { en: 'Career Map assessment (full)',        id: 'Asesmen Career Map (lengkap)' },
    { en: 'Your readiness score & 5 dimensions', id: 'Skor kesiapan & 5 dimensi' },
    { en: 'The Gauntlet — full 8-gate guide',    id: 'The Gauntlet — panduan 8 gerbang lengkap' },
    { en: 'Your 90-day route outline',           id: 'Kerangka rute 90 hari' },
    { en: 'Community access',                    id: 'Akses komunitas' }
  ],
  cta: { en: 'Start free', id: 'Mulai gratis' }
};

export const PLANS = [
  {
    audience: 'student',
    id: 'student',
    name: { en: 'Student', id: 'Mahasiswa' },
    eligibility: { en: 'Requires active student verification', id: 'Perlu verifikasi status mahasiswa' },
    prices: {
      monthly:  { amount:  99000, currency: 'IDR' },
      semester: { amount: 449000, currency: 'IDR', months: 6, savePct: 24 },
      annual:   { amount: 799000, currency: 'IDR', months: 12, savePct: 33 }
    },
    recommended: 'semester',
    state: 'EARLY_ACCESS'
  },
  {
    audience: 'fresh-graduate',
    id: 'fresh-graduate',
    name: { en: 'Fresh Graduate', id: 'Fresh Graduate' },
    prices: {
      monthly: { amount: 149000, currency: 'IDR' },
      sprint:  { amount: 379000, currency: 'IDR', months: 3, savePct: 15,
                 label: { en: '90-Day Sprint', id: 'Sprint 90 Hari' } },
      annual:  { amount: 1190000, currency: 'IDR', months: 12, savePct: 33 }
    },
    recommended: 'sprint',
    state: 'EARLY_ACCESS'
  },
  {
    audience: 'early-professional',
    id: 'early-professional',
    name: { en: 'Early Professional', id: 'Profesional Muda' },
    prices: {
      monthly: { amount: 249000, currency: 'IDR' },
      annual:  { amount: 1990000, currency: 'IDR', months: 12, savePct: 33 }
    },
    recommended: 'annual',
    state: 'WAITLIST'      // page exists; product does not yet
  },
  {
    audience: 'mature-professional',
    id: 'mature-professional',
    name: { en: 'Mature Professional', id: 'Profesional Berpengalaman' },
    prices: {
      monthly: { amount: 449000, currency: 'IDR' },
      annual:  { amount: 3590000, currency: 'IDR', months: 12, savePct: 33 }
    },
    recommended: 'annual',
    state: 'WAITLIST'
  }
];

export const COMMITMENTS = {
  refund:  { en: '14-day refund, no questions asked.',
             id: 'Pengembalian dana 14 hari, tanpa pertanyaan.' },
  lockIn:  { en: 'Early access pricing is locked for as long as you stay subscribed.',
             id: 'Harga akses awal terkunci selama kamu berlangganan.' },
  noCard:  { en: 'No card required to start free.',
             id: 'Tidak perlu kartu untuk memulai gratis.' },
  cancel:  { en: 'Cancel anytime, in one click, from Settings.',
             id: 'Batalkan kapan saja, satu klik, dari Pengaturan.' }
};
