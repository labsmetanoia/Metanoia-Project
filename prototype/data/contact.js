/**
 * CONTACT DELIVERY CONFIGURATION
 * ------------------------------
 * The Enterprise discovery-call form (pages/enterprise.html) POSTs JSON to
 * `enterpriseEndpoint`. Point it at a form service or a serverless function
 * that (1) persists every submission — name, company, work email, role,
 * cohort size, area of interest, message, timestamp, source page — and
 * (2) sends the auto-acknowledgement stating the published response
 * commitment (within two business days). Formspree and Basin both do this
 * out of the box: paste the form's endpoint URL below.
 *
 * `bookingUrl` is the self-scheduling alternative (Cal.com / Calendly). It is
 * shown only when set.
 *
 * Until an endpoint is configured the form says so plainly and offers the
 * pre-filled email as the visible fallback — it never pretends to send.
 */
window.MT_CONTACT = {
  enterpriseEndpoint: '',   /* e.g. 'https://formspree.io/f/xxxxxxxx' */
  bookingUrl: ''            /* e.g. 'https://cal.com/metanoia/discovery' */
};
