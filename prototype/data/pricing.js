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

/**
 * BETA PRICING — while Metanoia is in beta, every displayed price is
 * IDR 0 / USD 0. Flip `active` to false at commercial launch and the
 * pricing page falls back to the PLANS / PRODUCTS amounts above.
 * The pricing page reads this file's mirror config (window.MT_PRICING)
 * embedded in pricing.html — keep the two in sync when editing.
 */
export const BETA_PRICING = {
  active: true,
  label:    { en: 'Beta introductory price', id: 'Harga perkenalan beta' },
  note:     { en: 'Free during beta. Standard pricing applies at commercial launch — beta members are told before anything changes.',
              id: 'Gratis selama beta. Harga standar berlaku saat rilis komersial — anggota beta diberi tahu sebelum ada perubahan.' }
};

/** Individual products — purchasable one by one, not only as bundles. */
export const PRODUCTS = [
  { pillar: 'map',     slug: 'the-map',     accent: '#7EB3F5', state: 'EARLY_ACCESS',
    price: { monthly: { amount: 59000, currency: 'IDR' } } },
  { pillar: 'pack',    slug: 'the-pack',    accent: '#4ECDC4', state: 'EARLY_ACCESS',
    price: { monthly: { amount: 59000, currency: 'IDR' } } },
  { pillar: 'rope',    slug: 'the-rope',    accent: '#E8C766', state: 'EARLY_ACCESS',
    price: { monthly: { amount: 69000, currency: 'IDR' } } },
  { pillar: 'route',   slug: 'the-route',   accent: '#6EE7B7', state: 'EARLY_ACCESS',
    price: { monthly: { amount: 69000, currency: 'IDR' } } },
  { pillar: 'compass', slug: 'the-compass', accent: '#E8C766', state: 'BETA',
    price: { monthly: { amount: 39000, currency: 'IDR' } } }
];
