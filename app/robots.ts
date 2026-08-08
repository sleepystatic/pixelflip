import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site'

/**
 * Served at /robots.txt. /api is disallowed because those routes are for the
 * site's own forms — there is nothing there for a crawler to index, and the
 * waitlist endpoint should not appear in anyone's crawl logs.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/api/' }],
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  }
}
