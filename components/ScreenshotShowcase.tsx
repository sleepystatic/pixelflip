'use client';

import React from 'react';

/**
 * The product shots.
 *
 * The dashboard is the strongest thing PixelFlip has — it looks like nothing
 * else in this category — so it carries the page instead of another column of
 * feature copy. Slight tilt + overlap reads as "real software" rather than a
 * flat mockup, and the phone shot in front proves it works on mobile without
 * needing a sentence to say so.
 *
 * Drop these files in /public (any that are missing simply don't render):
 *   dashboard-desktop.png   — full dashboard, wide
 *   dashboard-mobile.png    — dashboard on a phone
 *   listings-desktop.png    — the scraped-listings view, wide
 *   listings-mobile.png     — listings on a phone
 */

type Props = {
  desktop: string;
  mobile?: string;
  /** tilt in degrees; negative leans left */
  tilt?: number;
  /** flip which side the phone sits on */
  phoneRight?: boolean;
  className?: string;
  priority?: boolean;
};

export const ScreenshotShowcase: React.FC<Props> = ({
  desktop,
  mobile,
  tilt = -2.5,
  phoneRight = true,
  className = '',
  priority = false,
}) => {
  // Width is left to the caller: centred and capped on its own in the hero,
  // but filling its column when placed in a grid beside copy.
  return (
    <div className={`relative w-full ${className}`}>
      <div
        className="relative"
        style={{ transform: `perspective(1600px) rotateX(3deg) rotateZ(${tilt}deg)` }}
      >
        <img
          src={desktop}
          alt="PixelFlip dashboard"
          loading={priority ? 'eager' : 'lazy'}
          className="w-full block"
          style={{
            border: '3px solid #2D3748',
            boxShadow: '10px 12px 0 0 rgba(0,0,0,0.35)',
            imageRendering: 'auto',
          }}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />

        {mobile && (
          <img
            src={mobile}
            alt="PixelFlip on mobile"
            loading="lazy"
            className="absolute hidden sm:block w-[21%] max-w-[190px]"
            style={{
              [phoneRight ? 'right' : 'left']: '-3%',
              bottom: '-9%',
              border: '3px solid #2D3748',
              boxShadow: '8px 8px 0 0 rgba(0,0,0,0.4)',
              transform: `rotateZ(${-tilt * 1.8}deg)`,
            } as React.CSSProperties}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        )}
      </div>
    </div>
  );
};
