import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { Features } from '../components/Features';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import './globals.css';

export const metadata = {
  title: 'PixelFlip - Find Deals Before Anyone Else',
  description: 'Automated marketplace scanning for resellers and collectors. Never miss a deal again.',
  keywords: 'marketplace, deals, reselling, craigslist, offerup, mercari, price alerts',
};

export default function Home() {
  return (
    <main className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    }}>
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQ />
    </main>
  );
}