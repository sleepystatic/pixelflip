/**
 * Blog posts, stored as typed data rather than MDX.
 *
 * Why not MDX: it needs a dependency, a loader config and a build step, and
 * these posts are prose with headings and lists. Structured blocks render
 * without dangerouslySetInnerHTML, so a post can never inject markup, and
 * adding one is editing this file — no layout work.
 *
 * To publish: append to `posts`. The slug becomes the URL, the sitemap picks
 * it up automatically, and the post page generates its own metadata and
 * Article schema. Keep `description` under ~155 characters — that is roughly
 * what a search result shows before truncating.
 */

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }

export interface Post {
  slug: string
  title: string
  /** Meta description and the excerpt on the index. */
  description: string
  /** ISO date; drives sort order and the Article schema. */
  date: string
  readingMinutes: number
  tags: string[]
  body: Block[]
}

export const posts: Post[] = [
  {
    slug: 'how-to-find-underpriced-facebook-marketplace-listings',
    title: 'How to Find Underpriced Listings on Facebook Marketplace',
    description:
      'Underpriced Marketplace listings sell in minutes. Here is how experienced resellers find them first, and what actually decides who gets the item.',
    date: '2026-08-01',
    readingMinutes: 6,
    tags: ['facebook marketplace', 'reselling', 'deal hunting'],
    body: [
      {
        type: 'p',
        text: 'Every underpriced listing on Facebook Marketplace has the same life cycle. It gets posted, it sits unnoticed for somewhere between four minutes and two hours, and then it is gone. The people who consistently get those items are not better negotiators and they do not have a secret category. They just see the listing sooner.',
      },
      { type: 'h2', text: 'Why the good listings disappear so fast' },
      {
        type: 'p',
        text: 'Sellers who price below market almost never do it strategically. They are moving house, clearing a garage, or listing something they inherited and do not recognise. Those sellers also tend to accept the first reasonable message rather than waiting for a bidding war, which is why response order matters more than offer size.',
      },
      {
        type: 'p',
        text: 'The practical consequence: a listing you find an hour after posting has usually already had five messages. Being first is not an advantage at the margin, it is most of the outcome.',
      },
      { type: 'h2', text: 'Search terms that surface mispriced items' },
      {
        type: 'ul',
        items: [
          'Search the model, not the category. "Marketplace" searches match titles, and a seller who does not know what they have will still type the model number off the label.',
          'Include common misspellings. Listings with typos get less traffic precisely because fewer searches reach them, which is exactly where the underpriced items sit.',
          'Search accessories and bundles separately. A "lot" or "bundle" listing frequently contains one item worth more than the whole asking price.',
          'Do not set a minimum price. A floor filters out the exact listings you are hunting for — the ones priced far below what the item is worth.',
        ],
      },
      { type: 'h2', text: 'Excluded words matter more than search terms' },
      {
        type: 'p',
        text: 'Most wasted time comes from listings that match your words but not your item: cases, empty boxes, broken units listed "for parts", and accessory bundles that mention the item in the description. A short exclusion list removes the overwhelming majority of them.',
      },
      {
        type: 'p',
        text: 'The catch is that exclusions are usually all-or-nothing. Blocking "case" helps a console search and quietly ruins a camera search. If your tooling only supports one global list, you end up filtering far less aggressively than you should.',
      },
      { type: 'h2', text: 'Checking manually does not scale' },
      {
        type: 'p',
        text: 'Refreshing four marketplaces every ten minutes works for about a week. Then you miss a morning, and the one listing you needed went in that window. The realistic options are to narrow your hunt until manual checking is feasible, or to automate the watching so you only spend attention on real matches.',
      },
      {
        type: 'p',
        text: 'PixelFlip does the second. It scans Facebook Marketplace, Craigslist, OfferUp and Mercari as often as every five minutes, applies your price bounds, distance and per-term exclusions, and emails or pushes you only when something new actually matches.',
      },
    ],
  },
  {
    slug: 'craigslist-vs-offerup-vs-mercari-for-resellers',
    title: 'Craigslist vs OfferUp vs Mercari: Where Resellers Actually Find Deals',
    description:
      'Each marketplace attracts a different seller, which changes what you find and what you pay. A practical comparison for resellers and collectors.',
    date: '2026-07-24',
    readingMinutes: 7,
    tags: ['craigslist', 'offerup', 'mercari', 'reselling'],
    body: [
      {
        type: 'p',
        text: 'Resellers argue about which marketplace is best, which is the wrong question. They attract different sellers, and the seller is what determines whether an item is underpriced. Knowing which platform produces which kind of mistake is worth more than picking a favourite.',
      },
      { type: 'h2', text: 'Craigslist: fewer buyers, older listings' },
      {
        type: 'p',
        text: 'Craigslist has lost most of its casual traffic, and that is exactly why it still works. Listings sit for days because far fewer people are looking, so the competition for any individual item is low. The sellers skew older and are more likely to price from what they paid years ago than from current market value.',
      },
      {
        type: 'p',
        text: 'The trade-off is discovery. Listings carry no reliable timestamp on the results page, so telling a fresh post from a three-week-old one usually means opening it. Expect more dead listings per hour of searching.',
      },
      { type: 'h2', text: 'OfferUp: local volume, aggressive buyers' },
      {
        type: 'p',
        text: 'OfferUp is where casual local sellers go now, which means volume — and competition. Good listings get messages within minutes, and the app pushes buyers toward instant offers, so hesitation costs you the item outright.',
      },
      {
        type: 'p',
        text: 'It rewards speed more than any other platform on this list. If you are only going to automate one marketplace, this is a strong candidate.',
      },
      { type: 'h2', text: 'Mercari: shipped items, national pricing' },
      {
        type: 'p',
        text: 'Mercari is shipping-first, so you are competing nationally rather than locally. That removes the regional pricing gaps that make local marketplaces profitable, but it opens a different angle: sellers who do not know a model number and list generically get almost no search traffic.',
      },
      {
        type: 'p',
        text: 'Shipping cost also compresses margin. A twenty dollar win locally is often a break-even after postage, so Mercari tends to suit higher-value or lighter items.',
      },
      { type: 'h2', text: 'Facebook Marketplace: the volume leader' },
      {
        type: 'p',
        text: 'Facebook has the most listings and the most buyers, and its search is the least precise of the four. That combination is frustrating manually and excellent when automated — the mispriced listings genuinely are there, buried under results that merely mention your keywords.',
      },
      { type: 'h2', text: 'The practical answer: watch all four' },
      {
        type: 'p',
        text: 'Any single platform gives you a partial view of what an item is worth and a fraction of the chances to buy it well. Watching all four is obviously correct and obviously impractical by hand, which is the whole reason automated scanning exists.',
      },
      {
        type: 'p',
        text: 'PixelFlip watches all four on one schedule and sends a single digest per scan, so covering every marketplace costs you the same attention as covering one.',
      },
    ],
  },
]

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function formatPostDate(iso: string): string {
  // Fixed to UTC so the server render and the client render agree; letting it
  // default to the runtime timezone produces a hydration mismatch warning.
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
