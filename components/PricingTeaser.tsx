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
          Two plans: Basic at{' '}
          <span className="font-bold text-brand-primary">
            <span className="text-gray-400 line-through">$9.99</span> $4.99
          </span>{' '}
          and Pro at{' '}
          <span className="font-bold text-brand-primary">
            <span className="text-gray-400 line-through">$19.99</span> $9.99
          </span>{' '}
          a month. Join at the pre-beta price and it&apos;s{' '}
          <span className="font-bold text-brand-primary">grandfathered</span> — you
          keep that rate after launch.
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
            Sign up
          </a>
        </div>
      </div>
    </section>
  )
}
