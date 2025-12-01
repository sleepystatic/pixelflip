export default function PrivacyPage() {
  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold font-mono mb-8 text-brand-dark">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg font-mono">
          <p className="text-gray-600 mb-4">Last updated: November 28, 2025</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
          <p>
            When you sign up for PixelFlip, we collect your email address and 
            any search preferences you configure in your account.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
          <p>
            We use your information to provide our marketplace scanning service 
            and send you alerts about deals matching your criteria.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information 
            from unauthorized access or disclosure.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
          <p>
            For questions about this privacy policy, contact us at: 
            privacy@pixelflip.com
          </p>
        </div>
      </div>
    </div>
  );
}