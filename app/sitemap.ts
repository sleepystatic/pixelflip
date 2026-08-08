import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site'
import { getAllPosts } from '@/lib/posts'

/**
 * Served at /sitemap.xml. Blog posts are appended from the same source the
 * pages render from, so publishing a post cannot silently miss the sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const now = new Date()

  const staticRoutes: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/pricing', priority: 0.9 },
    { path: '/features', priority: 0.8 },
    { path: '/blog', priority: 0.8 },
    { path: '/faq', priority: 0.6 },
    { path: '/about', priority: 0.5 },
    { path: '/contact', priority: 0.5 },
    { path: '/privacy', priority: 0.3 },
    { path: '/terms', priority: 0.3 },
    { path: '/cookies', priority: 0.3 },
  ]

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority,
    })),
    ...getAllPosts().map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T00:00:00Z`),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ]
}
