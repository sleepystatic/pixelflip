import React from 'react'
import Link from 'next/link'
import { getDashboardSignupUrl } from '@/lib/site'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const dashboardSignup = getDashboardSignupUrl()

  return (
    <footer className="bg-brand-dark text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.gif"
                alt="PixelFlip Logo"
                width={80}
                height={80}
                style={{ imageRendering: 'pixelated' }}
              />
              <h3 className="text-xl font-bold font-mono">PixelFlip</h3>
            </div>
            <p className="font-mono text-sm text-gray-400">
              Find deals before anyone else.
            </p>
            <a
              href={dashboardSignup}
              className="mt-4 inline-block font-mono text-sm font-bold text-brand-primary hover:underline"
            >
              Pre-beta signup →
            </a>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold font-mono mb-4">Product</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <Link
                  href="/features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold font-mono mb-4">Company</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold font-mono mb-4">Legal</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-sm text-gray-400">
            © {currentYear} PixelFlip. All rights reserved.
          </p>

          <a
            href="mailto:support@pixelflip.com"
            className="font-mono text-sm font-bold text-gray-400 hover:text-white transition-colors"
          >
            support@pixelflip.com
          </a>
        </div>
      </div>
    </footer>
  )
}
