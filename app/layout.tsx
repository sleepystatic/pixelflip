import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'
import { getDashboardSignupUrl, getSiteUrl } from '@/lib/site'

export const metadata: Metadata = {
  // metadataBase resolves every relative canonical / OG url in child pages to
  // an absolute one. Without it Next emits a build warning and social cards
  // fall back to relative paths, which no crawler resolves.
  metadataBase: new URL(getSiteUrl()),
  title: 'PixelFlip - Find Deals Before Anyone Else',
  description: 'Automated marketplace scanning for resellers and collectors. Never miss a deal again.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dashboardSignup = getDashboardSignupUrl()

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {/* Navigation Bar */}
        <nav className="bg-white border-b-4 border-brand-dark py-2 px-6 sticky top-0 z-50" style={{
          boxShadow: '0 4px 0 0 #2D3748'
        }}>
          <div className="max-w-7xl mx-auto">
            {/* Mobile: button | centered brand | button */}
            <div className="grid grid-cols-3 items-center gap-2 md:hidden">
              <a
                href={dashboardSignup}
                className="justify-self-start font-mono font-bold px-3 py-2 bg-white text-brand-primary border-2 border-brand-dark hover:bg-gray-50 transition whitespace-nowrap text-xs"
                style={{
                  boxShadow: '0 0 0 2px #2D3748, 0 3px 0 0 #2D3748'
                }}
              >
                Sign up
              </a>
              <a href="/" className="flex items-center justify-center gap-2 hover:opacity-80 transition">
                <img
                  src="/logo.gif"
                  alt="PixelFlip"
                  width={32}
                  height={32}
                  style={{ imageRendering: 'pixelated' }}
                />
                <span className="font-bold text-base font-mono text-brand-primary">
                  PIXELFLIP
                </span>
              </a>
              <a
                href="/#waitlist"
                className="justify-self-end font-mono font-bold px-3 py-2 bg-brand-primary text-white hover:bg-purple-700 transition whitespace-nowrap text-xs"
                style={{
                  boxShadow: '0 0 0 3px #2D3748, 0 4px 0 0 #2D3748'
                }}
              >
                Waitlist
              </a>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex items-center justify-between gap-6">
              <a href="/" className="flex items-center gap-3 hover:opacity-80 transition">
                <img
                  src="/logo.gif"
                  alt="PixelFlip"
                  width={40}
                  height={40}
                  style={{ imageRendering: 'pixelated' }}
                />
                <span className="font-bold text-2xl font-mono text-brand-primary">
                  PIXELFLIP
                </span>
              </a>

              <div className="flex gap-8">
                <a href="/about" className="font-mono font-bold text-brand-dark hover:text-brand-primary transition">
                  About
                </a>
                <a href="/contact" className="font-mono font-bold text-brand-dark hover:text-brand-primary transition">
                  Contact
                </a>
                <a href="/pricing" className="font-mono font-bold text-brand-dark hover:text-brand-primary transition">
                  Pricing
                </a>
                <a href="/faq" className="font-mono font-bold text-brand-dark hover:text-brand-primary transition">
                  FAQ
                </a>
                <a href="/services" className="font-mono font-bold text-brand-dark hover:text-brand-primary transition">
                  Services
                </a>
                <a href="/blog" className="font-mono font-bold text-brand-dark hover:text-brand-primary transition">
                  Blog
                </a>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={dashboardSignup}
                  className="font-mono font-bold px-4 py-2 bg-white text-brand-primary border-2 border-brand-dark hover:bg-gray-50 transition whitespace-nowrap text-sm sm:px-5"
                  style={{
                    boxShadow: '0 0 0 2px #2D3748, 0 3px 0 0 #2D3748'
                  }}
                >
                  Sign up
                </a>
                <a
                  href="/#waitlist"
                  className="font-mono font-bold px-4 py-2 sm:px-6 bg-brand-primary text-white hover:bg-purple-700 transition whitespace-nowrap text-sm"
                  style={{
                    boxShadow: '0 0 0 3px #2D3748, 0 4px 0 0 #2D3748'
                  }}
                >
                  Join waitlist
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        {children}

        {/* Footer on every page */}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
