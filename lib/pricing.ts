/**
 * One source of truth for plan copy on the marketing site.
 *
 * The dashboard has its own copy of these numbers, fed from the backend's
 * PREBETA_ACTIVE / DISPLAY_PRICE_* env vars (app.py). This file is the landing
 * site's half — the two are deliberately separate deployments, so when prices
 * change they both have to be updated. Keep them in step.
 *
 * Feature lines are checked against real behaviour, not aspiration:
 *   interval floors  -> PLAN_INTERVAL_FLOOR_MINUTES (pro 5, basic 10)
 *   term caps        -> _plan_limits() (pro 10, basic 3)
 *   AI image filter  -> _plan_limits().ai_image_allowed (pro only)
 * If you loosen a limit in the backend, change it here too or the page lies.
 */

/** Flip to false when pre-beta ends; the struck-through prices become the real ones. */
export const PREBETA_ACTIVE = true

export interface Plan {
  name: string
  /** What they pay today. */
  price: string
  /** Shown with a line through it while PREBETA_ACTIVE. */
  standardPrice: string
  period: string
  blurb: string
  features: string[]
  color: string
  popular: boolean
}

export const plans: Plan[] = [
  {
    name: 'Basic',
    price: '$4.99',
    standardPrice: '$9.99',
    period: 'per month',
    blurb: 'Find what you’re looking for.',
    features: [
      'Scans every 10 minutes',
      'Craigslist, OfferUp and Mercari',
      'Up to 3 search terms',
      'Email and web push alerts',
      'Price limits and per-term exclusions',
    ],
    color: '#667eea',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$9.99',
    standardPrice: '$19.99',
    period: 'per month',
    blurb: 'For serious resellers.',
    features: [
      'Scans every 5 minutes — twice as fast as Basic',
      'Facebook Marketplace, the largest of the four',
      'Up to 10 search terms',
      'AI image filtering to cut false matches',
      'Priority email support',
      'Everything in Basic',
    ],
    color: '#764ba2',
    popular: true,
  },
]
