import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { FeaturesTeaser } from '../components/FeaturesTeaser';
import { PricingTeaser } from '../components/PricingTeaser';

export default function Home() {
  return (
    <main className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    }}>
      {/* Main content */}
      <Hero />
      <HowItWorks />
      <FeaturesTeaser />
      <PricingTeaser />
    </main>
  );
}