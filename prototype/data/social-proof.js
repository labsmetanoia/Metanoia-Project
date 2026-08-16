// /data/social-proof.js
// EMPTY BY DESIGN. Only verified entries may be added.
// Every testimonial requires: written consent, real name, real photo,
// verifiable outcome. No composites. No stock photography. No "Anonymous, 24".

export const TESTIMONIALS = [];   // ← intentionally empty
export const OUTCOMES     = [];   // ← intentionally empty
export const PARTNERS     = [];   // ← intentionally empty

export const METRICS = {
  // Only auto-computed values from the production database.
  // Never manually set. Rendered only above a minimum threshold.
  usersTotal:            null,
  assessmentsCompleted:  null,
  minimumDisplayThreshold: 100
};
