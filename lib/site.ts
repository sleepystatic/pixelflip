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
