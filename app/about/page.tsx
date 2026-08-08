import Link from 'next/link'
import { getDashboardSignupUrl } from '@/lib/site'
import { PAGE_BACKDROP } from '@/lib/backgrounds'

export default function AboutPage() {
  const dashboardSignup = getDashboardSignupUrl()

  return (
    <div className="min-h-screen px-4 py-20" style={{ background: PAGE_BACKDROP.about }}>
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 font-mono text-sm font-bold text-white">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>
        <h1
          className="mb-8 font-mono text-5xl font-bold"
          style={{ color: '#2D3748', textShadow: '4px 4px 0 rgba(118,75,162,0.3)' }}
        >
          About PixelFlip
        </h1>

        {/* Long-form prose sits on a white card rather than on the gradient:
            body text at this length needs a calm background, and it keeps
            every existing link and emphasis colour readable as-is. */}
        <div
          className="border-2 border-brand-dark bg-white p-6 md:p-10"
          style={{ boxShadow: '0 0 0 3px #2D3748, 6px 6px 0 0 rgba(0,0,0,0.3)' }}
        >
        <div className="space-y-6 text-lg font-mono text-gray-700">
          <p>
            PixelFlip helps resellers and collectors spot marketplace listings
            faster—before they disappear or get repriced. We focus on reliable
            scans, clear alerts, and a dashboard you can grow into.
          </p>

          <p>
            The product is still in active development: we&apos;re hardening
            scrapers, expanding coverage, and tightening quality before a broad
            launch. If you want the polished experience first, stay on the{' '}
            <Link href="/#waitlist" className="font-bold text-brand-primary hover:underline">
              waitlist
            </Link>
            .
          </p>

          <h2 className="mb-4 mt-10 font-mono text-3xl font-bold text-brand-primary">
            Pre-beta
          </h2>
          <p>
            Already comfortable with rough edges? Create an account in the app to
            join the pre-beta. It&apos;s a{' '}
            <span className="font-bold text-brand-dark">paid product</span>—there
            is no free plan today—but pre-beta pricing is{' '}
            <span className="font-bold text-brand-dark">half off and grandfathered</span>{' '}
            for early adopters who help stress-test the system: join now and you
            keep that rate after launch.
          </p>
          <p>
            <a
              href={dashboardSignup}
              className="font-bold text-brand-primary hover:underline"
            >
              Open dashboard signup →
            </a>
          </p>

          <h2 className="mb-4 mt-10 font-mono text-3xl font-bold text-brand-primary">
            How it works
          </h2>

          <ol className="list-inside list-decimal space-y-2">
            <li>Save what you are hunting for—terms, budgets, and filters.</li>
            <li>We scan supported marketplaces on a schedule that matches your plan.</li>
            <li>You get alerts and links so you can verify and act quickly.</li>
          </ol>

          <h2 className="mb-4 mt-10 font-mono text-3xl font-bold text-brand-primary">
            Contact
          </h2>
          <p>
            Questions about pre-beta access or partnerships?{' '}
            <Link href="/contact" className="font-bold text-brand-primary hover:underline">
              Contact us
            </Link>
            .
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}
