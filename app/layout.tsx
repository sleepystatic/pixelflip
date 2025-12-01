import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'PixelFlip - Find Deals Before Anyone Else',
  description: 'Automated marketplace scanning for resellers and collectors. Never miss a deal again.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Bar */}
        <nav className="bg-white border-b-4 border-brand-dark py-4 px-6 sticky top-0 z-50" style={{
          boxShadow: '0 4px 0 0 #2D3748'
        }}>
          <div className="max-w-7xl mx-auto flex justify-between items-center">
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
              <a href="/#pricing" className="font-mono font-bold text-brand-dark hover:text-brand-primary transition">
                Pricing
              </a>
            </div>

            {/* CTA Button */}
            <a 
              href="/#waitlist"
              className="font-mono font-bold px-6 py-2 bg-brand-primary text-white hover:bg-purple-700 transition"
              style={{
                boxShadow: '0 0 0 3px #2D3748, 0 4px 0 0 #2D3748'
              }}
            >
              Join Waitlist
            </a>
          </div>
        </nav>

        {/* Page Content */}
        {children}

        {/* Footer on every page */}
        <Footer />
      </body>
    </html>
  )
}