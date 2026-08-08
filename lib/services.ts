/**
 * What PixelFlip actually does, written to sell rather than to list.
 *
 * Every claim here is checked against shipped behaviour — this is the page a
 * prospect reads right before paying, so an aspirational line is a refund
 * request later. Sources, if you need to re-verify:
 *   intervals   -> PLAN_INTERVAL_FLOOR_MINUTES (app.py)
 *   term caps   -> _plan_limits()
 *   exclusions  -> user_exclusions.search_term (per-term, migration 008)
 *   delivery    -> PLATFORM_DELIVERY + buyer_include_local / _shipping
 *   dedup       -> listings_user_link_unique + title_fingerprint
 *   feedback    -> listings_feedback
 */

export interface Service {
  title: string
  /** The reason someone cares. One sentence, benefit first. */
  pitch: string
  /** What it concretely does, so the pitch is verifiable. */
  detail: string
  /** Set when the capability is Pro-only. */
  badge?: string
}

export const services: Service[] = [
  {
    title: 'Four marketplaces, one feed',
    pitch: 'Stop opening four apps and running the same search four times.',
    detail:
      'PixelFlip watches Craigslist, OfferUp and Mercari on your schedule and puts every match in one list — plus Facebook Marketplace on Pro. Turn any marketplace off if it is noise for what you hunt.',
    badge: 'FB = PRO',
  },
  {
    title: 'Scans as often as every 5 minutes',
    pitch: 'Underpriced listings are gone in minutes. Being first is the entire game.',
    detail:
      'Pro scans every 5 minutes, Basic every 10. You can choose a slower cadence if you want fewer interruptions — you simply cannot go faster than your plan allows.',
  },
  {
    title: 'Price bounds that can stay empty',
    pitch: 'Start hunting before you know what something is worth.',
    detail:
      'Minimum and maximum are both optional. A ceiling with no floor catches every bargain under your number; leaving both blank matches any price, so a new search still works while you learn the market.',
  },
  {
    title: 'Exclusions that do not bleed',
    pitch: 'Kill the junk results without breaking your other searches.',
    detail:
      'Excluded words attach to one search term, not your whole account. Block "case" and "broken" on a console search and your camera search never notices, so you can filter aggressively.',
  },
  {
    title: 'Only what you can actually collect',
    pitch: 'A great deal three states away is not a deal.',
    detail:
      'Set a radius from 5 to 100 miles and PixelFlip filters on real distance from your location, not on whichever region the marketplace guesses.',
  },
  {
    title: 'Local pickup, shipping, or both',
    pitch: 'Hunt the way you actually buy.',
    detail:
      'Choose pickup-only, shipped-only, or everything. Marketplaces that cannot serve your choice are skipped before they are scanned, so narrowing this makes every scan faster too.',
  },
  {
    title: 'AI image filtering',
    pitch: 'Fewer listings that matched your words but not your item.',
    detail:
      'PixelFlip checks the listing photo against what you asked for and drops the ones that clearly are not it — the accessory bundle that mentions the console, the empty box, the wrong model.',
    badge: 'PRO',
  },
  {
    title: 'You never see the same listing twice',
    pitch: 'An alert means something new. Always.',
    detail:
      'Every listing is fingerprinted by link and by title, so reposts and duplicates across marketplaces collapse into one. A quiet scan is a genuinely quiet market, not a broken scraper.',
  },
  {
    title: 'One email per scan, not per listing',
    pitch: 'Alerts you will still have switched on next week.',
    detail:
      'Matches are batched into a single digest with photos, prices and direct links. A busy scan that finds twelve items sends one email, not twelve.',
  },
  {
    title: 'Push straight to your phone',
    pitch: 'Know before you open your inbox.',
    detail:
      'Web push delivers to your phone or desktop the moment a scan finishes. Add PixelFlip to your home screen and it behaves like a native app notification.',
  },
  {
    title: 'A dashboard built for triage',
    pitch: 'Find the one worth driving for, fast.',
    detail:
      'Search your saved listings, filter by marketplace, and sort by newest or oldest. Every card shows when the seller posted it and when PixelFlip found it — the gap tells you how much competition you have.',
  },
  {
    title: 'Teach it what you do not want',
    pitch: 'It gets sharper the longer you use it.',
    detail:
      'Mark a listing sold or not-a-deal and PixelFlip stops surfacing it and anything with the same fingerprint, so a recurring bad match disappears for good.',
  },
]
