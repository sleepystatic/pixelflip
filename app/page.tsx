import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { FeaturesTeaser } from '../components/FeaturesTeaser';
import { PricingTeaser } from '../components/PricingTeaser';
import { ScreenshotShowcase } from '../components/ScreenshotShowcase';
import { Waitlist } from '../components/Waitlist';

/**
 * Section order is driven by the background rhythm as much as the narrative:
 * the page alternates purple / white the whole way down, so no two adjacent
 * sections share a background. Pricing sits above "What PixelFlip does" for
 * that reason — and putting the offer before the feature detail is the right
 * order for a landing page anyway.
 *
 *   Hero (purple) → How it works (white) → Listings (purple)
 *   → Pricing (white) → Features (purple) → Waitlist (white) → Footer
 *
 * Waitlist is last so the page closes on the ask, and it is the anchor every
 * `/#waitlist` link in the nav and the about page points at.
 */
export default function Home() {
  return (
    <main className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    }}>
      <Hero />

      <HowItWorks />

      {/* Listings — the payoff shot, with the claim beside it rather than a
          bare image floating in space. */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.35fr_1fr]">
          <ScreenshotShowcase
            desktop="/shots/listings-desktop.png"
            mobile="/shots/listings-mobile.png"
            tilt={2}
            phoneRight={false}
          />

          <div className="text-center lg:text-left">
            <h2 className="font-mono text-3xl font-bold text-white md:text-4xl">
              Every find, in one place
            </h2>
            <p className="mt-4 font-mono text-lg leading-relaxed text-gray-100">
              View your found listings anywhere, the moment they&apos;re posted.
            </p>
            <ul className="mt-6 space-y-3 font-mono text-sm text-gray-200">
              <li className="flex items-start justify-center gap-2 lg:justify-start">
                <span className="text-white">▸</span>
                Photo, price and distance at a glance
              </li>
              <li className="flex items-start justify-center gap-2 lg:justify-start">
                <span className="text-white">▸</span>
                Live &ldquo;found 2m ago&rdquo; timestamps
              </li>
              <li className="flex items-start justify-center gap-2 lg:justify-start">
                <span className="text-white">▸</span>
                Filter by marketplace, price or keyword
              </li>
            </ul>
          </div>
        </div>
      </section>

      <PricingTeaser />

      <FeaturesTeaser />

      <Waitlist />
    </main>
  );
}
