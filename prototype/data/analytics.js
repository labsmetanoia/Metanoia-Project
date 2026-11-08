/**
 * ANALYTICS CONFIGURATION
 * -----------------------
 * js/mt-events.js reads this file (js/mob-footer.js loads both on every page
 * once the page is idle).
 *
 * `cfToken`: the Cloudflare Web Analytics site token (Analytics & Logs → Web
 * Analytics → Add a site → metanoialabs.net → the 32-character token in the
 * snippet). Cookieless page analytics, served by Cloudflare, no cost. The
 * loader refuses anything that is not a 32-hex token and loads nothing.
 *
 * First-party product events go to /api/events whenever the API is reachable,
 * independently of the token.
 *
 * Consent: nothing loads or is sent when the visitor has enabled Do-Not-Track
 * or declined analytics (localStorage mt-consent-analytics = "0").
 */
window.MT_ANALYTICS = {
  cfToken: '',             /* e.g. '0123456789abcdef0123456789abcdef' */
  firstParty: true         /* send product events to /api/events when available */
};
