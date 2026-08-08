import Link from 'next/link'
import { PixelBox } from '@/components/PixelBox'
import { getDashboardSignupUrl } from '@/lib/site'
import { plans, PREBETA_ACTIVE } from '@/lib/pricing'
import { PAGE_BACKDROP } from '@/lib/backgrounds'

export default function PricingPage() {
  const signup = getDashboardSignupUrl()

  return (
    <div className="min-h-screen px-4 py-16" style={{ background: PAGE_BACKDROP.pricing }}>
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 font-mono text-sm font-bold text-white">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>

        <h1
          className="mb-4 text-center font-mono text-4xl font-bold md:text-5xl"
          style={{ color: '#2D3748', textShadow: '4px 4px 0 rgba(118,75,162,0.3)' }}
        >
          Pricing
        </h1>

        {PREBETA_ACTIVE && (
          <div className="mb-10 text-center">
            <p className="font-mono text-sm font-bold text-white">
              Pre-beta pricing — half off until pre-beta ends.
            </p>
            <p className="mt-1 font-mono text-sm text-gray-100">
              Join now and you keep this rate after launch, for as long as your
              subscription stays active.
            </p>
          </div>
        )}

        {/* Two plans, so cap the grid at two columns and centre it rather than
            leaving a dead third column on desktop. */}
        <div className="mx-auto mb-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div key={plan.name} className="relative">
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 transform">
                  <div
                    className="px-4 py-1 text-xs font-bold font-mono text-white"
                    style={{
                      background: '#764ba2',
                      boxShadow: '0 0 0 3px #2D3748',
                    }}
                  >
                    MOST POPULAR
                  </div>
                </div>
              )}
              <PixelBox
                color={plan.color}
                className={`flex h-full flex-col p-8 ${plan.popular ? 'md:scale-105' : ''}`}
              >
                <h2 className="mb-2 font-mono text-2xl font-bold text-brand-dark">
                  {plan.name}
                </h2>
                <p className="mb-4 font-mono text-sm text-gray-600">{plan.blurb}</p>
                <div className="mb-6 flex flex-wrap items-baseline gap-x-2">
                  {PREBETA_ACTIVE && (
                    <span className="font-mono text-xl font-bold text-gray-400 line-through">
                      {plan.standardPrice}
                    </span>
                  )}
                  <span
                    className="font-mono text-4xl font-bold"
                    style={{ color: plan.color }}
                  >
                    {PREBETA_ACTIVE ? plan.price : plan.standardPrice}
                  </span>
                  <span className="font-mono text-gray-600">{plan.period}</span>
                </div>
                <ul className="mb-8 flex-grow space-y-3 font-mono text-sm text-gray-700">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="font-bold text-brand-primary">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={signup}
                  className="block border-2 border-brand-dark bg-white py-3 text-center font-mono text-sm font-bold text-brand-dark hover:bg-gray-50"
                  style={{
                    boxShadow: '0 0 0 3px #2D3748, 0 4px 0 0 #2D3748',
                  }}
                >
                  Sign up
                </a>
              </PixelBox>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 font-mono text-sm text-gray-100">
            After you create an account, non-subscribers see a pay gate in the
            dashboard until an active subscription is on file.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/faq"
              className="font-mono text-sm font-bold text-white hover:underline"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="font-mono text-sm font-bold text-white hover:underline"
            >
              Contact sales / support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
