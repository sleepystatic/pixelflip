import Link from 'next/link'
import { getDashboardSignupUrl } from '@/lib/site'

export default function AboutPage() {
  const dashboardSignup = getDashboardSignupUrl()

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 font-mono text-sm font-bold text-brand-primary">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>
        <h1 className="mb-8 font-mono text-5xl font-bold text-brand-dark">
          About PixelFlip
        </h1>

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
            is no free plan today—and we offer a{' '}
            <span className="font-bold text-brand-dark">
              grandfathered monthly price
            </span>{' '}
            for early adopters who help stress-test the system.
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
  )
}
