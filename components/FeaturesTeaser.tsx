import Link from 'next/link'
import { PixelBox } from './PixelBox'

const highlights = [
  {
    title: 'Multi-marketplace monitoring',
    description: 'Scan many listing sources from one place (exact platforms evolve during pre-beta).',
  },
  {
    title: 'Alerts when it matters',
    description: 'Email, SMS, and in-app notifications when new listings match your saved searches and budgets.',
  },
  {
    title: 'Built for speed',
    description: 'Tuned so you can react before listings get sniped, buried, or repriced.',
  },
]

export function FeaturesTeaser() {
  return (
    <section
      className="px-4 py-16"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center font-mono text-3xl font-bold text-white md:text-4xl">
          What PixelFlip does
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center font-mono text-sm text-white/90">
          Details below are directional. We&apos;re still shaping the full launch
          list.
        </p>
        <div className="mb-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <PixelBox key={item.title} color="#2D3748" className="p-6">
              <h3 className="mb-2 font-mono text-base font-bold text-brand-dark">
                {item.title}
              </h3>
              <p className="font-mono text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </PixelBox>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/features"
            className="inline-block border-2 border-white bg-white px-6 py-3 font-mono text-sm font-bold text-brand-primary hover:bg-gray-100"
            style={{
              boxShadow: '0 0 0 3px #2D3748, 0 4px 0 0 #2D3748',
            }}
          >
            View full feature list →
          </Link>
        </div>
      </div>
    </section>
  )
}
