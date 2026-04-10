'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'pixelflip_cookie_consent'

export type CookieConsentValue = 'all' | 'essential' | 'denied'

export function readCookieConsent(): CookieConsentValue | null {
  if (typeof window === 'undefined') return null
  const v = window.localStorage.getItem(STORAGE_KEY)
  if (v === 'all' || v === 'essential' || v === 'denied') return v
  return null
}

export function setCookieConsent(value: CookieConsentValue) {
  window.localStorage.setItem(STORAGE_KEY, value)
  window.dispatchEvent(new Event('pixelflip-cookie-consent'))
}

/**
 * Banner: Accept all / Essential only / Deny non-essential.
 * - "all" — you may load analytics/marketing later when wired.
 * - "essential" | "denied" — only necessary cookies (consent storage, session).
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  const sync = useCallback(() => {
    setVisible(readCookieConsent() === null)
  }, [])

  useEffect(() => {
    sync()
    window.addEventListener('pixelflip-cookie-consent', sync)
    return () => window.removeEventListener('pixelflip-cookie-consent', sync)
  }, [sync])

  const choose = (value: CookieConsentValue) => {
    setCookieConsent(value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] border-t-4 border-brand-dark bg-white px-4 py-4 shadow-[0_-4px_0_0_#2D3748]"
      role="dialog"
      aria-label="Cookie preferences"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-sm text-brand-dark md:max-w-xl">
          We use essential cookies to run this site and remember your choice.
          Optional cookies help us improve the product. See our{' '}
          <Link href="/cookies" className="font-bold text-brand-primary underline">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="border-2 border-brand-dark bg-white px-4 py-2 font-mono text-sm font-bold text-brand-dark hover:bg-gray-50"
          >
            Deny
          </button>
          <button
            type="button"
            onClick={() => choose('essential')}
            className="border-2 border-brand-dark bg-gray-100 px-4 py-2 font-mono text-sm font-bold text-brand-dark hover:bg-gray-200"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => choose('all')}
            className="border-2 border-brand-dark bg-brand-primary px-4 py-2 font-mono text-sm font-bold text-white hover:opacity-90"
          >
            Allow all
          </button>
        </div>
      </div>
    </div>
  )
}
