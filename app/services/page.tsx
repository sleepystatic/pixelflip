import type { Metadata } from 'next'
import Link from 'next/link'
import { PixelBox } from '@/components/PixelBox'
import { getDashboardSignupUrl, getSiteUrl } from '@/lib/site'
import { services } from '@/lib/services'
import { PAGE_BACKDROP } from '@/lib/backgrounds'

export const metadata: Metadata = {
  title: 'Services — PixelFlip',
  description:
    'Everything PixelFlip does: scans Facebook Marketplace, Craigslist, OfferUp and Mercari as often as every 5 minutes, filters by price, distance and excluded words, and alerts you by email and push.',
  alternates: { canonical: `${getSiteUrl()}/services` },
  openGraph: {
    title: 'Services — PixelFlip',
    description:
      'Every feature PixelFlip ships, and why each one matters when you are hunting marketplace deals.',
    url: `${getSiteUrl()}/services`,
    type: 'website',
  },
}

export default function ServicesPage() {
  const signup = getDashboardSignupUrl()

  // Standalone routes render straight onto a white <body> — only the homepage
  // carries the gradient, on its own <main>. Without this background the
  // light-on-light heading disappeared entirely.
  return (
    <div className="min-h-screen px-4 py-16" style={{ background: PAGE_BACKDROP.services }}>
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 font-mono text-sm font-bold text-white">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>

        {/* Dark heading with the purple drop-shadow, matching the homepage hero. */}
        <h1
          className="text-center font-mono text-4xl font-bold md:text-5xl"
          style={{ color: '#2D3748', textShadow: '4px 4px 0 rgba(118,75,162,0.3)' }}
        >
          What PixelFlip does
        </h1>
        <p className="mx-auto mt-5 mb-12 max-w-2xl text-center font-mono text-base leading-relaxed text-gray-100">
          Every one of these is live today — not a roadmap. PixelFlip is a deal
          scanner built around a single idea: the person who sees an underpriced
          listing first is the person who gets it.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <PixelBox key={service.title} color="#2D3748" className="flex h-full flex-col p-6">
              <div className="mb-2 flex items-start justify-between gap-3">
                <h2 className="font-mono text-lg font-bold text-brand-dark">
                  {service.title}
                </h2>
                {service.badge && (
                  <span
                    className="flex-shrink-0 px-2 py-0.5 font-mono text-[10px] font-bold text-white"
                    style={{ background: '#764ba2', boxShadow: '0 0 0 2px #2D3748' }}
                  >
                    {service.badge}
                  </span>
                )}
              </div>
              <p className="mb-3 font-mono text-sm font-bold text-brand-primary">
                {service.pitch}
              </p>
              <p className="font-mono text-sm leading-relaxed text-gray-600">
                {service.detail}
              </p>
            </PixelBox>
          ))}
        </div>

        <div className="mt-14 text-center">
          <h2 className="mb-3 font-mono text-2xl font-bold text-white md:text-3xl">
            Ready to stop refreshing by hand?
          </h2>
          <p className="mx-auto mb-7 max-w-xl font-mono text-sm text-gray-100">
            Pre-beta pricing is half off: Basic $4.99, Pro $9.99 a month.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={signup}
              className="inline-block border-2 border-brand-dark bg-white px-7 py-3 font-mono text-sm font-bold text-brand-primary hover:bg-gray-50"
              style={{ boxShadow: '0 0 0 3px #2D3748, 0 4px 0 0 #2D3748' }}
            >
              Sign up
            </a>
            <Link
              href="/pricing"
              className="inline-block border-2 border-white bg-transparent px-7 py-3 font-mono text-sm font-bold text-white hover:bg-white/10"
              style={{ boxShadow: '0 0 0 3px #2D3748, 0 4px 0 0 #2D3748' }}
            >
              Compare plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
