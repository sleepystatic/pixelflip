import React from 'react';
import { PixelBox } from './PixelBox';

export const Features: React.FC = () => {
  const features = [
    {
      title: 'Multi-Platform Scanning',
      description: 'Monitor Craigslist, OfferUp, Mercari, Facebook Marketplace, and more from one dashboard.',
      icon: '🌐',
    },
    {
      title: 'Smart Price Alerts',
      description: 'Set custom price thresholds for each item. Get notified only when deals meet your criteria.',
      icon: '💰',
    },
    {
      title: 'Real-Time Notifications',
      description: 'Instant email alerts the moment a matching deal appears. Beat the competition every time.',
      icon: '🔔',
    },
    {
      title: 'AI-Powered Filtering',
      description: 'Advanced algorithms filter out games, accessories, and non-matching items automatically.',
      icon: '🤖',
    },
    {
      title: 'Location-Based Search',
      description: 'Find deals within your local area. Set custom radius from 5 to 100 miles.',
      icon: '📍',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Track your matches, view trends, and optimize your search terms for better results.',
      icon: '📊',
    },
  ];

  return (
    <section className="py-20 px-4" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-center mb-4 text-white">
          FEATURES
        </h2>
        <p className="text-center text-white font-mono mb-16 max-w-2xl mx-auto opacity-90">
          Everything you need to dominate the marketplace
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <PixelBox key={index} color="#2D3748" className="p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold font-mono text-brand-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-mono text-sm leading-relaxed">
                {feature.description}
              </p>
            </PixelBox>
          ))}
        </div>
      </div>
    </section>
  );
};