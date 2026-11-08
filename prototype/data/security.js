/**
 * SECURITY CONFIGURATION
 * ----------------------
 * Cloudflare Turnstile (bot protection on the forms that write to the API:
 * mentor application, enterprise inquiry, newsletter, waitlist, registration).
 *
 * `siteKey` is the public half of the widget "metanoia-forms" (Cloudflare →
 * Turnstile), invisible mode, hostnames metanoialabs.net and
 * www.metanoialabs.net. The secret half lives only in the Pages project as the
 * TURNSTILE_SECRET_KEY secret; server/lib/http.js verifyTurnstile() checks every
 * token against it. With the key empty, js/mt-turnstile.js sends no token and
 * the API skips the check only when its secret is unset too.
 */
window.MT_TURNSTILE = {
  siteKey: '0x4AAAAAAF4ezl7xUxxO9fvX'
};
