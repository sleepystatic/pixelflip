'use client';

import React, { useState, useEffect } from 'react';
import { PixelButton } from './PixelButton';
import { PixelBox } from './PixelBox';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [alreadyJoined, setAlreadyJoined] = useState(false);

  useEffect(() => {
    const hasJoined = localStorage.getItem('pixelflip_waitlist');
    if (hasJoined === 'true') {
      setAlreadyJoined(true);
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Call our API endpoint
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        //Success! Save to localStorage so we remember
        localStorage.setItem('pixelflip_waitlist', 'true');
        localStorage.setItem('pixelflip_email', email);
        setSubmitted(true);
        setEmail('');
      } else if (data.error === 'already_exists') {
        // Email already in database - that's okay
        localStorage.setItem('pixelflip_waitlist', 'true');
        setSubmitted(true);
        setAlreadyJoined(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, #764ba2 0px, #764ba2 2px, transparent 2px, transparent 20px),
            repeating-linear-gradient(90deg, #764ba2 0px, #764ba2 2px, transparent 2px, transparent 20px)
          `,
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src="/logo.gif"
            alt="PixelFlip Logo"
            width={150}
            height={150}
            style={{ imageRendering: 'pixelated' }}
            />
        </div>

        {/* Brand name */}
        <h1 className="text-6xl md:text-8xl font-bold font-mono mb-6" style={{
          color: '#2D3748',
          textShadow: '4px 4px 0 rgba(118, 75, 162, 0.3)',
        }}>
          PIXELFLIP
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-bold font-mono text-brand-primary mb-4">
          Find Deals Before Anyone Else
        </p>

        <p className="text-lg md:text-xl font-mono text-gray-300 mb-12 max-w-2xl mx-auto">
          Automated marketplace scanning for resellers and collectors. Never miss a deal again.
        </p>

        {/* Waitlist form */}
        <PixelBox className="max-w-md mx-auto p-8" color="#764ba2">
          {submitted ? (
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold font-mono text-brand-primary mb-2">
                {alreadyJoined ? "You're already on the list!" : "You're on the list!"}
              </h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-bold font-mono text-brand-dark mb-4">
                Join the Waitlist
              </h3>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full p-4 mb-4 font-mono font-bold text-brand-dark"
                style={{
                  background: '#F7FAFC',
                  border: 'none',
                  boxShadow: '0 0 0 3px #2D3748, inset 3px 3px 0 0 rgba(0,0,0,0.15)',
                }}
              />
              <PixelButton
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </PixelButton>
            </form>
          )}
        </PixelBox>

        {/* Social proof placeholder */}
        <p className="text-sm font-mono text-gray-300 mt-6">
          Join <span className="font-bold text-brand-primary">500+</span> resellers finding deals daily
        </p>
      </div>
    </section>
  );
};