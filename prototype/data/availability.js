/**
 * AVAILABILITY STATE SYSTEM — every product surface renders one of these.
 * A non-accessible state must never carry a purchase CTA; it must carry a
 * capture CTA (waitlist / notify / apply) instead.
 */
export const STATES = {
  LIVE_FREE:    { id: 'live-free',    label: { en: 'Free · Available now', id: 'Gratis · Tersedia sekarang' }, tone: 'success', purchasable: false, accessible: true },
  LIVE_PAID:    { id: 'live-paid',    label: { en: 'Available now',        id: 'Tersedia sekarang' },          tone: 'gold',    purchasable: true,  accessible: true },
  EARLY_ACCESS: { id: 'early-access', label: { en: 'Early access',         id: 'Akses awal' },                 tone: 'gold',    purchasable: true,  accessible: true },
  BETA:         { id: 'beta',         label: { en: 'In beta',              id: 'Versi beta' },                 tone: 'neutral', purchasable: false, accessible: true },
  WAITLIST:     { id: 'waitlist',     label: { en: 'Join the waitlist',    id: 'Gabung daftar tunggu' },       tone: 'neutral', purchasable: false, accessible: false },
  COMING:       { id: 'coming',       label: { en: 'Coming {date}',        id: 'Hadir {date}' },               tone: 'muted',   purchasable: false, accessible: false },
  APPLICATION:  { id: 'application',  label: { en: 'Application required', id: 'Perlu pendaftaran' },          tone: 'neutral', purchasable: false, accessible: false },
  ENTERPRISE:   { id: 'enterprise',   label: { en: 'Enterprise only',      id: 'Khusus perusahaan' },          tone: 'neutral', purchasable: false, accessible: false }
};

/** Current state per pillar per audience — honest as of 2026-08. */
export const PILLAR_STATES = {
  map:     { student: 'EARLY_ACCESS', 'fresh-graduate': 'EARLY_ACCESS', 'early-professional': 'WAITLIST', 'mature-professional': 'WAITLIST' },
  pack:    { student: 'EARLY_ACCESS', 'fresh-graduate': 'EARLY_ACCESS', 'early-professional': 'WAITLIST', 'mature-professional': 'WAITLIST' },
  rope:    { student: 'EARLY_ACCESS', 'fresh-graduate': 'EARLY_ACCESS', 'early-professional': 'WAITLIST', 'mature-professional': 'WAITLIST' },
  route:   { student: 'EARLY_ACCESS', 'fresh-graduate': 'EARLY_ACCESS', 'early-professional': 'WAITLIST', 'mature-professional': 'WAITLIST' },
  compass: { student: 'BETA',         'fresh-graduate': 'BETA',         'early-professional': 'WAITLIST', 'mature-professional': 'WAITLIST' }
};
