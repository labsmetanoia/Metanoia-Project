/**
 * ANALYTICS CONFIGURATION
 * -----------------------
 * js/mt-events.js reads this file. Leave `ga4` empty until the real GA4
 * Measurement ID exists (Google Analytics → Admin → Data streams); the loader
 * refuses placeholders and loads nothing. First-party events go to
 * /api/events whenever the API is reachable, independently of GA4.
 *
 * Consent: GA4 loads only when the visitor has not enabled Do-Not-Track and
 * has not declined analytics (localStorage mt-consent-analytics = "0").
 */
window.MT_ANALYTICS = {
  ga4: '',                 /* e.g. 'G-ABC123XYZ' */
  firstParty: true         /* send product events to /api/events when available */
};
