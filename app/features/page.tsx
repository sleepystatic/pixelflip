import Link from 'next/link'
import { PixelBox } from '@/components/PixelBox'
import { getDashboardSignupUrl } from '@/lib/site'

/**
 * Shipped behaviour only. This page previously promised webhooks, export and
 * reporting, none of which exist — a prospect who pays for a listed feature and
 * cannot find it is a refund and a bad review, so nothing goes here until it
 * works. Roadmap items belong in a blog post, not on a features page.
 */
const featureGroups: { title: string; items: string[] }[] = [
  {
    title: 'Discovery & coverage',
    items: [
      'Scans Craigslist, OfferUp and Mercari — plus Facebook Marketplace on Pro — merging every match into one feed.',
      'Search terms with optional minimum and maximum price — leave either blank and that side is unbounded.',
      'Excluded words attach to a single search term, so filtering one search never touches another.',
      'Distance radius from 5 to 100 miles, measured from your location rather than the region a marketplace guesses from your connection.',
      'Choose local pickup, shipped items, or both. Marketplaces that cannot serve your choice are skipped before they are scanned.',
    ],
  },
  {
    title: 'Alerts',
    items: [
      'Email digests with photos, prices and direct links — one per scan, not one per listing.',
      'Web push to your phone or desktop the moment a scan finishes.',
      'Alerts only fire for listings you have never been shown, so a notification always means something genuinely new.',
      'Separate controls for listing alerts and product updates, plus one-click unsubscribe in every email.',
    ],
  },
  {
    title: 'Speed & accuracy',
    items: [
      'Scans as often as every 5 minutes on Pro and every 10 on Basic; choose a slower interval whenever you want fewer interruptions.',
      'Duplicate and repost detection by both link and title fingerprint, across all four marketplaces.',
      'AI image filtering on Pro drops listings whose photos clearly are not the item you asked for.',
      'Mark a listing sold or not-a-deal and it stops appearing, along with anything sharing its fingerprint.',
    ],
  },
  {
    title: 'Account & reliability',
    items: [
      'Dashboard with saved searches, a live scan console, and billing handled through Stripe.',
      'Filter saved listings by marketplace or keyword and sort by newest or oldest.',
      'Every listing shows both when the seller posted it and when PixelFlip found it — the gap tells you how much competition you have.',
      'Saved listings are kept for 7 days and then removed automatically.',
    ],
  },
  {
    title: 'Safety, compliance & trust',
    items: [
      'PixelFlip surfaces public listing data. You verify every deal before you buy.',
      'Payment details are handled entirely by Stripe and are never stored by PixelFlip.',
      'Your search terms and alerts are private and are not shared with third parties.',
    ],
  },
]

export default function FeaturesPage() {
  const signup = getDashboardSignupUrl()

  return (
    <div className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 font-mono text-sm font-bold text-brand-primary">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>
        <h1 className="mb-4 font-mono text-4xl font-bold text-brand-dark md:text-5xl">
          Features
        </h1>
        <p className="mb-10 font-mono text-gray-600">
          Everything below works today. We don&apos;t list features we haven&apos;t shipped.
        </p>

        <div className="space-y-10">
          {featureGroups.map((group) => (
            <PixelBox key={group.title} color="#764ba2" className="p-8">
              <h2 className="mb-4 font-mono text-xl font-bold text-brand-dark">
                {group.title}
              </h2>
              <ul className="space-y-3 font-mono text-sm text-gray-700">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="font-bold text-brand-primary">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </PixelBox>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 font-mono text-gray-600">
            Pre-beta pricing is half off: Basic $4.99, Pro $9.99 a month —
            grandfathered for as long as you stay subscribed.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-block border-2 border-brand-dark bg-white px-6 py-3 font-mono text-sm font-bold text-brand-dark hover:bg-gray-50"
              style={{
                boxShadow: '0 0 0 3px #2D3748, 0 4px 0 0 #2D3748',
              }}
            >
              View pricing
            </Link>
            <a
              href={signup}
              className="inline-block border-2 border-brand-dark bg-brand-primary px-6 py-3 font-mono text-sm font-bold text-white hover:opacity-90"
              style={{
                boxShadow: '0 0 0 3px #2D3748, 0 4px 0 0 #2D3748',
              }}
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
