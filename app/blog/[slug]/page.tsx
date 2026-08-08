import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getSiteUrl, getDashboardSignupUrl } from '@/lib/site'
import { getAllPosts, getPost, formatPostDate, type Block } from '@/lib/posts'
import { PAGE_BACKDROP } from '@/lib/backgrounds'

interface Props {
  params: { slug: string }
}

/** Prerender every post at build time so each one is a static, crawlable file. */
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug)
  if (!post) return { title: 'Not found — PixelFlip' }

  const url = `${getSiteUrl()}/blog/${post.slug}`
  return {
    title: `${post.title} — PixelFlip`,
    description: post.description,
    keywords: post.tags,
    // Without an explicit canonical, Google picks its own preferred URL and
    // any tracking-parameter variant can outrank the clean one.
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

function renderBlock(block: Block, i: number) {
  if (block.type === 'h2') {
    return (
      <h2 key={i} className="mb-3 mt-9 font-mono text-2xl font-bold text-brand-primary">
        {block.text}
      </h2>
    )
  }
  if (block.type === 'ul') {
    return (
      <ul key={i} className="mb-5 space-y-2 font-mono text-base leading-relaxed text-gray-700">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="font-bold text-brand-primary">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <p key={i} className="mb-5 font-mono text-base leading-relaxed text-gray-700">
      {block.text}
    </p>
  )
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const url = `${getSiteUrl()}/blog/${post.slug}`

  // Article schema is what makes a result eligible for the richer search
  // presentation (headline, date, publisher) rather than a bare blue link.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(', '),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: 'PixelFlip', url: getSiteUrl() },
    publisher: { '@type': 'Organization', name: 'PixelFlip', url: getSiteUrl() },
  }

  return (
    <div className="min-h-screen px-4 py-16" style={{ background: PAGE_BACKDROP.blog }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl">
        <p className="mb-4 font-mono text-sm font-bold text-white">
          <Link href="/blog" className="hover:underline">
            ← All posts
          </Link>
        </p>

        <article className="border-2 border-brand-dark bg-white p-6 md:p-10"
                 style={{ boxShadow: '0 0 0 3px #2D3748, 6px 6px 0 0 rgba(0,0,0,0.3)' }}>
          <h1 className="font-mono text-3xl font-bold leading-tight text-brand-dark md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 font-mono text-xs text-gray-500">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            {' · '}
            {post.readingMinutes} min read
          </p>

          <div className="mt-8">{post.body.map(renderBlock)}</div>

          <div className="mt-10 border-t-2 border-gray-200 pt-7">
            <p className="mb-4 font-mono text-sm text-gray-600">
              PixelFlip scans Facebook Marketplace, Craigslist, OfferUp and
              Mercari as often as every 5 minutes and alerts you the moment
              something matches.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={getDashboardSignupUrl()}
                className="inline-block border-2 border-brand-dark bg-brand-primary px-6 py-3 text-center font-mono text-sm font-bold text-white hover:opacity-90"
                style={{ boxShadow: '0 0 0 3px #2D3748, 0 4px 0 0 #2D3748' }}
              >
                Sign up
              </a>
              <Link
                href="/services"
                className="inline-block border-2 border-brand-dark bg-white px-6 py-3 text-center font-mono text-sm font-bold text-brand-dark hover:bg-gray-50"
                style={{ boxShadow: '0 0 0 3px #2D3748, 0 4px 0 0 #2D3748' }}
              >
                See what it does
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
