import Link from 'next/link'
import { PixelBox } from '@/components/PixelBox'
import { getDashboardSignupUrl } from '@/lib/site'

/** Directional list — refine before launch. */
const featureGroups: { title: string; items: string[] }[] = [
  {
    title: 'Discovery & coverage',
    items: [
      'Aggregate listings from multiple marketplaces into one prioritized feed.',
      'Configurable search terms, negative keywords, and price bands per watchlist.',
      'Location / radius awareness where the underlying marketplace exposes it.',
      'Deduplication and freshness hints so you see new or materially changed posts first.',
    ],
  },
  {
    title: 'Alerts & workflows',
    items: [
      'Email notifications when a listing crosses your filters.',
      'Batching options to avoid alert fatigue during busy periods (pre-beta / roadmap).',
      'Deep links straight to the original listing for quick action.',
      'Optional webhooks or push channels as the product matures.',
    ],
  },
  {
    title: 'Account & reliability',
    items: [
      'Dashboard for saved watches, billing, and plan limits.',
      'Structured logging and health visibility inside the app (improving during beta).',
      'Fair-use guardrails to keep scans sustainable as we scale.',
      'Export or reporting for serious resellers (timing varies by plan).',
    ],
  },
  {
    title: 'Safety, compliance & trust',
    items: [
      'We surface public listing data; you verify every deal before you buy.',
      'Rate limits and polite crawling practices to respect marketplaces.',
      'Clear data retention aligned with our privacy policy.',
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
          This is a working list of what PixelFlip is building toward. Some items
          ship only in pre-beta or later tiers—edit freely to match reality.
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
            Pre-beta users get a grandfathered rate at signup.
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
              Create account
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
