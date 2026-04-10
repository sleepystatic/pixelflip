'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PixelButton } from '@/components/PixelButton'
import { PixelBox } from '@/components/PixelBox'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        if (data.error === 'mail_not_configured') {
          setError(
            'Contact email is not configured on the server yet. Set Mailgun env vars (see .env.example) or email support@pixelflip.com.'
          )
        } else {
          setError('Could not send your message. Please try again or email us directly.')
        }
        return
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <p className="mb-4 font-mono text-sm font-bold text-brand-primary">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>
        <h1 className="text-5xl font-bold font-mono mb-8 text-brand-dark text-center">
          Contact Us
        </h1>

        <PixelBox className="p-8" color="#764ba2">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold font-mono text-brand-primary mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-600 font-mono">
                We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <p className="font-mono text-sm font-bold text-red-700 bg-red-50 p-4 border-2 border-red-200">
                  {error}
                </p>
              )}
              <div>
                <label className="block font-mono font-bold text-brand-dark mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full p-4 font-mono font-bold text-brand-dark"
                  style={{
                    background: '#F7FAFC',
                    border: 'none',
                    boxShadow:
                      '0 0 0 3px #2D3748, inset 3px 3px 0 0 rgba(0,0,0,0.15)',
                  }}
                />
              </div>

              <div>
                <label className="block font-mono font-bold text-brand-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full p-4 font-mono font-bold text-brand-dark"
                  style={{
                    background: '#F7FAFC',
                    border: 'none',
                    boxShadow:
                      '0 0 0 3px #2D3748, inset 3px 3px 0 0 rgba(0,0,0,0.15)',
                  }}
                />
              </div>

              <div>
                <label className="block font-mono font-bold text-brand-dark mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full p-4 font-mono font-bold text-brand-dark"
                  style={{
                    background: '#F7FAFC',
                    border: 'none',
                    boxShadow:
                      '0 0 0 3px #2D3748, inset 3px 3px 0 0 rgba(0,0,0,0.15)',
                  }}
                />
              </div>

              <PixelButton
                variant="primary"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </PixelButton>
            </form>
          )}
        </PixelBox>
      </div>
    </div>
  )
}
