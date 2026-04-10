import Link from 'next/link'
import { FAQ } from '@/components/FAQ'

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 pt-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 font-mono text-sm font-bold text-brand-primary">
            <Link href="/" className="hover:underline">
              ← Home
            </Link>
          </p>
        </div>
      </div>
      <FAQ />
      <div className="px-4 pb-16 text-center">
        <Link
          href="/contact"
          className="font-mono text-sm font-bold text-brand-primary hover:underline"
        >
          Still stuck? Contact us →
        </Link>
      </div>
    </div>
  )
}
