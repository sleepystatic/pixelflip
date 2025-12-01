export default function AboutPage() {
    return (
        <div className="min-h-screen px4 py-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold font-mono mb-8 text-brand-dark">
                    About PixelFlip
                </h1>
                
                <div className="space-y-6 text-lg font-mono text-gray-700">
                    <p>
                        PixelFlip is an automated marketplace scanning tool designed for resellers and collecctors who want to find deals before anyone else.
                    </p>

                    <p>
                        Our platform monitors Craigslist, OfferUp, Mercari, and other marketplaces 24/7, alerting you the moment items matching your criteria appear
                    </p>

                    <h2 className="text-3xl font-bold mt-8 mb-4 text-brand-primary">
                        How It Works
                    </h2>
                    
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Set your search criteria and price thresholds</li>
                        <li>Our scrapers monitor marketplaces every few minutes</li>
                        <li>Get instant alerts when deals match your filters</li>
                        <li>Act fast and secure profitable items</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}