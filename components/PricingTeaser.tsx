import Link from 'next/link'
import { getDashboardSignupUrl } from '@/lib/site'

export function PricingTeaser() {
  const signup = getDashboardSignupUrl()

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 font-mono text-3xl font-bold text-brand-dark md:text-4xl">
          Pre-beta &amp; pricing
        </h2>
        <p className="mb-6 font-mono text-gray-600">
          PixelFlip is a paid product—there&apos;s no free plan right now.
          Join the waitlist for the full launch, or start a pre-beta account
          for a <span className="font-bold text-brand-primary">grandfathered monthly rate</span>{' '}
          while we finish core reliability.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/pricing"
            className="inline-block border-2 border-brand-dark bg-brand-primary px-6 py-3 font-mono text-sm font-bold text-white hover:opacity-90"
            style={{
              boxShadow: '0 0 0 3px #2D3748, 0 4px 0 0 #2D3748',
            }}
          >
            Compare plans
          </Link>
          <a
            href={signup}
            className="inline-block border-2 border-brand-dark bg-white px-6 py-3 font-mono text-sm font-bold text-brand-dark hover:bg-gray-50"
            style={{
              boxShadow: '0 0 0 3px #2D3748, 0 4px 0 0 #2D3748',
            }}
          >
            Create pre-beta account
          </a>
        </div>
      </div>
    </section>
  )
}
