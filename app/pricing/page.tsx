import Link from 'next/link'
import { PixelBox } from '@/components/PixelBox'
import { getDashboardSignupUrl } from '@/lib/site'

const plans = [
  {
    name: 'Starter',
    price: '$9.99',
    period: 'per month',
    blurb: 'Placeholder — tune limits and price before launch.',
    features: [
      'Core marketplace scanning (pre-beta coverage)',
      'Email alerts',
      'A capped number of active watches',
      'Standard refresh interval (plan-dependent)',
    ],
    color: '#667eea',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29.99',
    period: 'per month',
    blurb: 'Placeholder — your main tier for serious flippers.',
    features: [
      'Higher watch and keyword limits',
      'Faster refresh vs Starter',
      'Priority email support',
      'Room for analytics / history as we ship them',
    ],
    color: '#764ba2',
    popular: true,
  },
  {
    name: 'Business',
    price: '$49.99',
    period: 'per month',
    blurb: 'Placeholder — teams and power sellers.',
    features: [
      'Highest limits on watches and throughput',
      'Fastest refresh tier',
      'Webhook / export goals on the roadmap',
      'Best-effort support during pre-beta',
    ],
    color: '#2D3748',
    popular: false,
  },
]

export default function PricingPage() {
  const signup = getDashboardSignupUrl()

  return (
    <div className="min-h-screen bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 font-mono text-sm font-bold text-brand-primary">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>

        <h1 className="mb-4 text-center font-mono text-4xl font-bold text-brand-dark md:text-5xl">
          Pricing
        </h1>
        <p className="mx-auto mb-4 max-w-2xl text-center font-mono text-gray-600">
          <span className="font-bold text-brand-primary">
            No free plan right now
          </span>
          — PixelFlip is paid software. Full launch stays waitlisted while we harden
          the scrapers; pre-beta signups lock in a{' '}
          <span className="font-bold text-brand-dark">grandfathered monthly price</span>.
        </p>
        <p className="mx-auto mb-12 max-w-2xl text-center font-mono text-sm text-gray-500">
          Figures below are placeholders. Replace with your real SKUs before you
          advertise publicly.
        </p>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
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
                    PRE-BETA POPULAR
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
                <div className="mb-6">
                  <span
                    className="font-mono text-4xl font-bold"
                    style={{ color: plan.color }}
                  >
                    {plan.price}
                  </span>
                  <span className="font-mono text-gray-600"> {plan.period}</span>
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
                  Create account — grandfathered pre-beta
                </a>
              </PixelBox>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 font-mono text-sm text-gray-600">
            After you create an account, non-subscribers see a pay gate in the
            dashboard until an active subscription is on file.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/faq"
              className="font-mono text-sm font-bold text-brand-primary hover:underline"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="font-mono text-sm font-bold text-brand-primary hover:underline"
            >
              Contact sales / support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
