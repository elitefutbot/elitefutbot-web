/**
 * Single source of truth for the public prices shown on the site.
 *
 * Server pages (such as /fut-sniping-bot-free-trial) import from here instead
 * of src/lib/payments.ts, which pulls in browser-only auth code.
 *
 * The amount actually charged comes from the Stripe price IDs configured in the
 * backend (STRIPE_PRO_PRICE_ID / STRIPE_MOBILE_PRICE_ID). When you change the
 * price in Stripe, change it here too so the two always match.
 */
export const PRO_PRICE_EUR = 19.9;
export const MOBILE_PRICE_EUR = 10;
export const PRO_PRICE_LABEL = "€19.90/year";
export const MOBILE_PRICE_LABEL = "€10/year";
