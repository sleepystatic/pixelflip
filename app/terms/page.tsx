import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 font-mono text-sm font-bold text-brand-primary">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>
        <h1 className="mb-8 font-mono text-5xl font-bold text-brand-dark">
          Terms of Service
        </h1>

        <div className="prose prose-lg font-mono">
          <p className="mb-4 text-gray-600">Effective: April 6, 2026</p>

          <h2 className="mb-4 mt-8 text-2xl font-bold">1. Acceptance of Terms</h2>
          <p>
            By accessing PixelFlip, you agree to these terms. If you do not agree,
            do not use the service.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold">2. Beta &amp; Pre-Beta</h2>
          <p>
            PixelFlip may be offered in pre-beta or beta form. During these
            periods the service may change frequently, include bugs, or have
            incomplete features. Listing data comes from third parties; we do not
            guarantee accuracy, availability, or timing.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold">3. Paid Access</h2>
          <p>
            PixelFlip is a paid subscription product. There is no free plan at
            this time unless we explicitly offer one in writing. Pricing, plan
            limits, and taxes may change; grandfathered pricing for early
            adopters applies only as described at signup and in your billing
            portal communications.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold">4. User Responsibilities</h2>
          <p>You agree that you will:</p>
          <ul className="ml-8 list-disc">
            <li>Keep your account credentials secure.</li>
            <li>Verify listings and sellers before money changes hands.</li>
            <li>Comply with each marketplace&apos;s rules and applicable law.</li>
            <li>Not misuse the service to harass, overload, or circumvent protections.</li>
          </ul>

          <h2 className="mb-4 mt-8 text-2xl font-bold">5. Subscription &amp; Billing</h2>
          <p>
            Subscriptions renew until canceled. Cancellation stops future
            charges subject to your payment provider&apos;s timing. Refunds, if
            any, are handled according to the policy shown at checkout or as
            required by law.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold">6. Limitation of Liability</h2>
          <p>
            PixelFlip is provided “as is.” To the maximum extent permitted by
            law, we disclaim implied warranties and are not liable for lost
            profits, missed deals, or indirect damages arising from use of the
            service.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold">7. Contact</h2>
          <p>
            Questions:{' '}
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
