/**
 * Full URL to your dashboard sign-up / create-account flow (pre-beta).
 * Set in .env.local as NEXT_PUBLIC_DASHBOARD_SIGNUP_URL
 */
export function getDashboardSignupUrl(): string {
  const url = process.env.NEXT_PUBLIC_DASHBOARD_SIGNUP_URL?.trim()
  if (url) return url
  return '#'
}

export function isDashboardSignupConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_DASHBOARD_SIGNUP_URL?.trim())
}

/**
 * Absolute origin of the marketing site.
 *
 * Canonical URLs, OpenGraph tags and sitemap entries all have to be absolute —
 * a relative canonical is ignored, and Google treats a missing one as licence
 * to pick its own. Set NEXT_PUBLIC_SITE_URL in Vercel; the fallback is the
 * production domain so a forgotten env var degrades to correct rather than to
 * localhost leaking into published metadata.
 */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (url && !/localhost|127\.0\.0\.1/.test(url)) return url.replace(/\/$/, '')
  return 'https://pixelflip.app'
}
