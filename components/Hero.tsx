'use client';

import React from 'react';
import { ScreenshotShowcase } from './ScreenshotShowcase';
import { getDashboardSignupUrl } from '../lib/site';

/**
 * Speed is the pitch. Every marketplace tool can find a deal eventually; the
 * reason to pay is being first, so the headline says exactly that and the
 * dashboard shot does the rest of the selling.
 *
 * The logo lives in the navbar — repeating it here just pushed the actual
 * claim below the fold.
 */
export const Hero: React.FC = () => {
  const signup = getDashboardSignupUrl();

  return (
    <section
      id="top"
      className="relative px-4 pt-16 pb-24 sm:pt-24 scroll-mt-24 overflow-hidden"
    >
      {/* faint pixel grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, #764ba2 0px, #764ba2 2px, transparent 2px, transparent 20px),
              repeating-linear-gradient(90deg, #764ba2 0px, #764ba2 2px, transparent 2px, transparent 20px)
            `,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <span
          className="inline-block mb-6 px-3 py-1 font-mono text-xs font-bold"
          style={{ background: '#2D3748', color: '#F7FAFC', border: '2px solid #1A202C' }}
        >
          NOW IN BETA
        </span>

        <h1
          className="font-mono font-bold leading-[1.05] text-4xl sm:text-6xl md:text-7xl"
          style={{ color: '#2D3748', textShadow: '4px 4px 0 rgba(118,75,162,0.3)' }}
        >
          Find deals
          <br />
          before anyone else.
        </h1>

        {/* Both claims here are Pro-tier: the 5-minute floor and Facebook
            itself (gated on plan_tier == 'pro'). Basic scans every 10 across
            the other three. */}
        <p className="mx-auto mt-6 max-w-xl font-mono text-lg md:text-xl text-gray-100">
          PixelFlip watches Craigslist, OfferUp, Mercari and{' '}
          <span className="font-bold text-white">Facebook</span> as often as every{' '}
          <span className="font-bold text-white">5 minutes</span> and alerts you the
          moment something matches.
        </p>
        <p className="mx-auto mt-3 max-w-xl font-mono text-xs text-gray-200">
          Facebook Marketplace and 5-minute scans are Pro features. Basic scans
          the other three every 10 minutes.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={signup}
            className="inline-block border-2 border-brand-dark bg-brand-primary px-8 py-4 font-mono text-lg font-bold text-white hover:opacity-90"
            style={{ boxShadow: '0 0 0 3px #2D3748, 0 5px 0 0 #2D3748' }}
          >
            Sign up
          </a>
          <a
            href="#how"
            className="font-mono text-sm font-bold text-gray-100 underline underline-offset-4"
          >
            See how it works
          </a>
        </div>
      </div>

      {/* The product, immediately. */}
      <ScreenshotShowcase
        desktop="/shots/dashboard-desktop.png"
        mobile="/shots/dashboard-mobile.png"
        tilt={-2.5}
        priority
        className="mx-auto max-w-5xl mt-16 sm:mt-20"
      />
    </section>
  );
};
