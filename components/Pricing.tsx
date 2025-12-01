import React from 'react';
import { PixelBox } from './PixelBox';
import { PixelButton } from './PixelButton';

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$9.99',
      yearlyPrice: '$100',
      yearlySavings: '$20',
      features: [
        'Up to 20 search terms',
        'Updates every 30 minutes',
        'Email notifications',
        'Multi-platform scanning',
        'Basic support',
      ],
      color: '#667eea',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$29.99',
      yearlyPrice: '$300',
      yearlySavings: '$60',
      features: [
        'Up to 100 search terms',
        'Updates every 10 minutes',
        'Email notifications',
        'Multi-platform scanning',
        'Priority support',
        'Advanced analytics',
      ],
      color: '#764ba2',
      popular: true,
    },
    {
      name: 'Business',
      price: '$49.99',
      yearlyPrice: '$500',
      yearlySavings: '$100',
      features: [
        'Unlimited search terms',
        'Updates every 5 minutes',
        'Email notifications',
        'Multi-platform scanning',
        'Priority support',
        'Advanced analytics',
        'Export to CSV',
        'Discord/Slack webhooks',
      ],
      color: '#2D3748',
      popular: false,
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-center mb-4 text-brand-dark">
          PRICING
        </h2>
        <p className="text-center text-gray-600 font-mono mb-4 max-w-2xl mx-auto">
          Choose the plan that fits your hustle
        </p>
        <p className="text-center text-brand-primary font-mono font-bold mb-16">
          💎 Save up to 17% with annual billing
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className="px-4 py-1 font-bold font-mono text-xs text-white"
                    style={{
                      background: '#764ba2',
                      boxShadow: '0 0 0 3px #2D3748',
                    }}
                  >
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <PixelBox
                color={plan.color}
                className={`p-8 h-full flex flex-col ${plan.popular ? 'transform scale-105' : ''}`}
              >
                {/* Plan name */}
                <h3 className="text-2xl font-bold font-mono text-brand-dark mb-2">
                  {plan.name}
                </h3>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold font-mono" style={{ color: plan.color }}>
                      {plan.price}
                    </span>
                    <span className="text-gray-600 font-mono">/month</span>
                  </div>
                  <div className="mt-2 text-sm font-mono text-gray-600">
                    or <span className="font-bold text-brand-primary">{plan.yearlyPrice}/year</span>
                    <br />
                    <span className="text-xs">(save {plan.yearlySavings})</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 font-mono text-sm text-gray-700">
                      <span className="text-brand-primary font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <PixelButton
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                  disabled
                >
                  Coming Soon
                </PixelButton>
              </PixelBox>
            </div>
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="text-center">
          <p className="font-mono text-gray-600 mb-2">
            🛡️ <span className="font-bold">30-Day Money Back Guarantee</span>
          </p>
          <p className="font-mono text-sm text-gray-500">
            Not finding deals? Get a full refund, no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};