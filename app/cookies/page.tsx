import Link from 'next/link'

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 font-mono text-sm font-bold text-brand-primary">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>
        <h1 className="mb-8 font-mono text-5xl font-bold text-brand-dark">
          Cookie Policy
        </h1>

        <div className="prose prose-lg font-mono">
          <p className="mb-4 text-gray-600">Last updated: April 6, 2026</p>

          <h2 className="mb-4 mt-8 text-2xl font-bold">What Are Cookies?</h2>
          <p>
            Cookies are small files stored on your device. We also use similar
            technologies such as local storage when they help us deliver core
            functionality.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold">Your Choices (Banner)</h2>
          <p>
            When you first visit, you can choose{' '}
            <span className="font-bold">Allow all</span>,{' '}
            <span className="font-bold">Essential only</span>, or{' '}
            <span className="font-bold">Deny</span> non-essential cookies.
            Essential cookies include storing this choice and anything required
            for security and core navigation.
          </p>
          <p>
            If you select Essential only or Deny, we will not rely on optional
            analytics or marketing cookies until you change your mind (you can
            clear site data or we can add a “manage preferences” link later).
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold">Categories</h2>

          <h3 className="mb-3 mt-6 text-xl font-semibold">Strictly necessary</h3>
          <p>Required to operate the site (for example cookie consent storage).</p>

          <h3 className="mb-3 mt-6 text-xl font-semibold">Functional / analytics (optional)</h3>
          <p>
            If enabled, may include first-party analytics to understand
            traffic—wire them only after “Allow all” in your implementation.
            Update this section when you add a specific vendor.
          </p>

          <h3 className="mb-3 mt-6 text-xl font-semibold">Marketing (optional)</h3>
          <p>
            Not used on this marketing site unless you add pixels later. If you
            do, list them here and tie loader scripts to consent.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold">Third Parties</h2>
          <p>Depending on your stack, you might integrate:</p>
          <ul className="ml-8 list-disc">
            <li>Hosting / edge (for example Vercel)</li>
            <li>Payments (for example Stripe, on the dashboard—not necessarily this site)</li>
            <li>Email provider (for example Mailgun for contact form delivery)</li>
          </ul>

          <h2 className="mb-4 mt-8 text-2xl font-bold">Contact</h2>
          <p>
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
