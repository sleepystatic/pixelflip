'use client';

import React, { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'duplicate' | 'error';

/**
 * The target of every `/#waitlist` link in the site.
 *
 * The nav button, the mobile nav button and the about page all pointed at this
 * anchor while no element carried the id, so all three silently scrolled
 * nowhere. POST /api/waitlist was live the whole time with nothing calling it.
 *
 * Sits last so the page closes on the ask, and white because FeaturesTeaser
 * above it is purple — see the alternation note in app/page.tsx.
 */
export function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        // 409 means they already signed up — that is a success from the
        // visitor's point of view, not something to make them retry.
        const body = await res.json().catch(() => ({}));
        setStatus(res.status === 409 || body.error === 'already_exists' ? 'duplicate' : 'error');
      }
    } catch {
      setStatus('error');
    }
  };

  const message = {
    idle: '',
    submitting: '',
    success: "You're on the list. We'll email you when the full launch opens.",
    duplicate: "You're already on the list — nothing else to do.",
    error: 'Something went wrong. Try again, or email support@pixelflip.app.',
  }[status];

  const done = status === 'success' || status === 'duplicate';

  return (
    <section id="waitlist" className="scroll-mt-24 bg-white px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 font-mono text-3xl font-bold text-brand-dark md:text-4xl">
          Join the waitlist
        </h2>
        <p className="mb-8 font-mono text-gray-600">
          We&apos;re in pre-beta and onboarding slowly. Leave your email and
          we&apos;ll tell you the moment the full launch opens — no other mail.
        </p>

        {done ? (
          <p
            role="status"
            className="mx-auto max-w-md border-2 border-brand-dark bg-brand-light px-5 py-4 font-mono text-sm font-bold text-brand-dark"
            style={{ boxShadow: '0 0 0 3px #2D3748, 0 4px 0 0 #2D3748' }}
          >
            {message}
          </p>
        ) : (
          <form onSubmit={submit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="waitlist-email" className="sr-only">
              Email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              disabled={status === 'submitting'}
              className="min-w-0 flex-1 border-2 border-brand-dark px-4 py-3 font-mono text-sm text-brand-dark outline-none focus:ring-2 focus:ring-brand-primary disabled:opacity-60"
              style={{ boxShadow: '0 0 0 3px #2D3748' }}
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="border-2 border-brand-dark bg-brand-primary px-6 py-3 font-mono text-sm font-bold text-white hover:opacity-90 disabled:opacity-60"
              style={{ boxShadow: '0 0 0 3px #2D3748, 0 4px 0 0 #2D3748' }}
            >
              {status === 'submitting' ? 'Joining…' : 'Join waitlist'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p role="alert" className="mt-4 font-mono text-sm font-bold text-red-700">
            {message}
          </p>
        )}

        <p className="mt-6 font-mono text-xs text-gray-500">
          Already want in? Pre-beta accounts are open now at half price — and
          that rate is grandfathered for as long as you stay subscribed.
        </p>
      </div>
    </section>
  );
}
