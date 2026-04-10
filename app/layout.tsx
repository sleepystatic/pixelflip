import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'
import { getDashboardSignupUrl } from '@/lib/site'

export const metadata: Metadata = {
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
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-y-3 gap-x-4">
            {/* Logo + Brand */}
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

            {/* Navigation Links */}
            <div className="hidden md:flex gap-8">
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
            </div>

            {/* CTAs */}
            <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
              <a
                href={dashboardSignup}
                className="font-mono font-bold px-4 py-2 bg-white text-brand-primary border-2 border-brand-dark hover:bg-gray-50 transition whitespace-nowrap text-sm sm:px-5"
                style={{
                  boxShadow: '0 0 0 2px #2D3748, 0 3px 0 0 #2D3748'
                }}
              >
                Pre-beta signup
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
