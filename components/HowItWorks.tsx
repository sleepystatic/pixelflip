import React from 'react';
import { PixelBox } from './PixelBox';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Set Your Search',
      description: 'Define what you\'re looking for and your target price. Monitor unlimited items across multiple marketplaces.',
      icon: '🎯',
    },
    {
      number: '2',
      title: 'We Scan 24/7',
      description: 'Our system continuously monitors Craigslist, OfferUp, Mercari, and more. AI-powered filtering ensures quality results.',
      icon: '🔍',
    },
    {
      number: '3',
      title: 'Get Notified',
      description: 'Receive instant alerts when deals matching your criteria appear. Act fast before anyone else.',
      icon: '⚡',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-center mb-4 text-brand-dark">
          HOW IT WORKS
        </h2>
        <p className="text-center text-gray-600 font-mono mb-16 max-w-2xl mx-auto">
          Three simple steps to never miss a deal again
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <PixelBox key={index} color="#764ba2" className="p-8 text-center">
              {/* Step number */}
              <div className="relative mb-6">
                <div
                  className="w-20 h-20 mx-auto flex items-center justify-center text-4xl font-bold font-mono text-white"
                  style={{
                    background: '#764ba2',
                    boxShadow: '0 0 0 3px #2D3748',
                  }}
                >
                  {step.number}
                </div>
              </div>

              {/* Icon */}
              <div className="text-5xl mb-4">{step.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold font-mono text-brand-dark mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-mono text-sm leading-relaxed">
                {step.description}
              </p>
            </PixelBox>
          ))}
        </div>
      </div>
    </section>
  );
};