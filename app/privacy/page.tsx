import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 font-mono text-sm font-bold text-brand-primary">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>
        <h1 className="mb-8 font-mono text-5xl font-bold text-brand-dark">
          Privacy Policy
        </h1>

        <div className="prose prose-lg font-mono">
          <p className="mb-4 text-gray-600">Last updated: April 6, 2026</p>

          <h2 className="mb-4 mt-8 text-2xl font-bold">Information We Collect</h2>
          <p>
            When you join the waitlist or create a PixelFlip account, we collect
            identifiers such as your email address. As you use the service, we
            store the preferences you configure (for example saved searches,
            price thresholds, and notification settings).
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold">How We Use Your Information</h2>
          <p>
            We use this information to operate the scanning and alerting service,
            communicate with you about your account or billing, and improve
            reliability and product quality.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold">Cookies &amp; Similar Tech</h2>
          <p>
            We use cookies and local storage where needed to run the site (for
            example remembering your cookie preference). See our{' '}
            <Link href="/cookies" className="font-bold text-brand-primary underline">
              Cookie Policy
            </Link>{' '}
            for categories and choices.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold">Data Security</h2>
          <p>
            We apply reasonable administrative and technical safeguards
            appropriate to the service. Payment card data is handled by our
            payment processor—not stored on PixelFlip servers.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold">Contact</h2>
          <p>
            Questions about privacy:{' '}
            <a
              href="mailto:support@pixelflip.com"
              className="font-bold text-brand-primary underline"
            >
              support@pixelflip.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
