'use client';

import React, { useState } from 'react';
import { PixelBox } from './PixelBox';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does PixelFlip find deals?',
      answer: 'PixelFlip continuously scans multiple marketplace platforms (Craigslist, OfferUp, Mercari, etc.) 24/7. When a listing matches your search terms and is below your target price, you receive an instant notification.',
    },
    {
      question: 'What marketplaces do you support?',
      answer: 'Every plan scans Craigslist, OfferUp and Mercari. Facebook Marketplace is included with Pro. We\'re constantly adding new platforms based on user feedback.',
    },
    {
      question: 'How fast are the notifications?',
      answer: 'Notification speed depends on your plan. Basic scans every 10 minutes and Pro every 5 minutes. All notifications are sent as soon as a scan completes.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you\'ll be charged the prorated difference. When downgrading, the change takes effect at your next billing cycle.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes! We offer a 30-day money-back guarantee, no questions asked. If you\'re not finding deals or PixelFlip isn\'t working for you, just reach out and we\'ll process a full refund.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use industry-standard encryption and never store payment information (handled by Stripe). Your search terms and notifications are private and never shared with third parties.',
    },
    {
      question: 'Can I use PixelFlip for items other than consoles?',
      answer: 'Yes! While we started with gaming consoles, PixelFlip works for any items you want to monitor - electronics, furniture, collectibles, tools, and more.',
    },
    {
      question: 'What if I need help?',
      answer: 'All plans include email support at support@pixelflip.app. Pro gets priority support with faster response times.',
    },
  ];

  // Transparent so the page's backdrop shows through — this component is only
  // used on /faq, which now owns the background.
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold font-mono text-center mb-4"
          style={{ color: '#2D3748', textShadow: '4px 4px 0 rgba(118,75,162,0.3)' }}
        >
          FAQ
        </h2>
        <p className="text-center text-gray-100 font-mono mb-16">
          Got questions? We&apos;ve got answers.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <PixelBox key={index} color="#764ba2" className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-bold font-mono text-brand-dark">
                  {faq.question}
                </h3>
                <span className="text-2xl font-bold text-brand-primary flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="font-mono text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </PixelBox>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12">
          <p className="font-mono text-gray-100 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="font-mono font-bold text-white hover:underline"
          >
            Contact form
          </a>
        </div>
      </div>
    </section>
  );
};