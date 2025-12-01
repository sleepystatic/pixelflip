'use client';

import { useState } from 'react';
import { PixelButton } from '@/components/PixelButton';
import { PixelBox } from '@/components/PixelBox';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Send to your email or API
    console.log('Contact form:', formData);
    
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-2xl mx-auto">
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
                We'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono font-bold text-brand-dark mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full p-4 font-mono font-bold text-brand-dark"
                  style={{
                    background: '#F7FAFC',
                    border: 'none',
                    boxShadow: '0 0 0 3px #2D3748, inset 3px 3px 0 0 rgba(0,0,0,0.15)',
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
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full p-4 font-mono font-bold text-brand-dark"
                  style={{
                    background: '#F7FAFC',
                    border: 'none',
                    boxShadow: '0 0 0 3px #2D3748, inset 3px 3px 0 0 rgba(0,0,0,0.15)',
                  }}
                />
              </div>

              <div>
                <label className="block font-mono font-bold text-brand-dark mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={6}
                  className="w-full p-4 font-mono font-bold text-brand-dark"
                  style={{
                    background: '#F7FAFC',
                    border: 'none',
                    boxShadow: '0 0 0 3px #2D3748, inset 3px 3px 0 0 rgba(0,0,0,0.15)',
                  }}
                />
              </div>

              <PixelButton variant="primary" size="lg" className="w-full">
                Send Message
              </PixelButton>
            </form>
          )}
        </PixelBox>
      </div>
    </div>
  );
}