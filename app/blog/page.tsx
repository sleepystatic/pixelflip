import type { Metadata } from 'next'
import Link from 'next/link'
import { PixelBox } from '@/components/PixelBox'
import { getSiteUrl } from '@/lib/site'
import { getAllPosts, formatPostDate } from '@/lib/posts'
import { PAGE_BACKDROP } from '@/lib/backgrounds'

export const metadata: Metadata = {
  title: 'Blog — PixelFlip',
  description:
    'Guides on finding underpriced marketplace listings, comparing Craigslist, OfferUp, Mercari and Facebook Marketplace, and reselling for profit.',
  alternates: { canonical: `${getSiteUrl()}/blog` },
  openGraph: {
    title: 'Blog — PixelFlip',
    description:
      'Guides on finding underpriced marketplace listings and reselling for profit.',
    url: `${getSiteUrl()}/blog`,
    type: 'website',
  },
}

export default function BlogIndexPage() {
  const allPosts = getAllPosts()

  // See the note in app/services/page.tsx — standalone routes need their own
  // background or the heading lands white-on-white.
  return (
    <div className="min-h-screen px-4 py-16" style={{ background: PAGE_BACKDROP.blog }}>
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 font-mono text-sm font-bold text-white">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>

        <h1
          className="text-center font-mono text-4xl font-bold md:text-5xl"
          style={{ color: '#2D3748', textShadow: '4px 4px 0 rgba(118,75,162,0.3)' }}
        >
          Blog
        </h1>
        <p className="mx-auto mt-5 mb-12 max-w-2xl text-center font-mono text-base leading-relaxed text-gray-100">
          How to find deals before everyone else — marketplace by marketplace.
        </p>

        {allPosts.length === 0 ? (
          <PixelBox color="#2D3748" className="p-8 text-center">
            <p className="font-mono text-sm text-gray-600">
              No posts yet. Check back soon.
            </p>
          </PixelBox>
        ) : (
          <div className="space-y-6">
            {allPosts.map((post) => (
              <PixelBox key={post.slug} color="#2D3748" className="p-6">
                <article>
                  <h2 className="font-mono text-xl font-bold text-brand-dark md:text-2xl">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand-primary">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 font-mono text-xs text-gray-500">
                    <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                    {' · '}
                    {post.readingMinutes} min read
                  </p>
                  <p className="mt-3 font-mono text-sm leading-relaxed text-gray-600">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block font-mono text-sm font-bold text-brand-primary hover:underline"
                  >
                    Read more →
                  </Link>
                </article>
              </PixelBox>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
