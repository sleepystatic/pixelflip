/**
 * Page backdrops for standalone routes.
 *
 * Only the homepage puts a gradient on its own <main>; every other route
 * renders onto a bare white <body>, which left dark-on-white pages looking
 * unfinished and light-on-white headings invisible outright.
 *
 * All variants use the same two brand stops and differ only in angle and
 * order. That reads as one family seen from different angles rather than five
 * unrelated pages — enough variation to avoid feeling copy-pasted, not so much
 * that the site stops looking like itself.
 *
 * Content that sits directly on a backdrop needs light text (text-gray-100 or
 * white); anything inside a PixelBox is on white and keeps its dark text.
 */
export const PAGE_BACKDROP = {
  /** Established on the first two pages — treat as the reference. */
  services: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  blog: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  /** Reversed, so the plan cards sit against the lighter end. */
  pricing: 'linear-gradient(160deg, #764ba2 0%, #667eea 100%)',
  /** Steeper and cooler; the accordion is a long scroll, so it stays calm. */
  faq: 'linear-gradient(205deg, #5a67d8 0%, #764ba2 100%)',
  /** Deepest variant — About is prose, and the card carries the reading. */
  about: 'linear-gradient(115deg, #667eea 0%, #6b4b9a 100%)',
  contact: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
} as const

/**
 * The faint pixel grid from the homepage hero. Render it in an absolutely
 * positioned, pointer-events-none layer at low opacity so it textures the
 * backdrop without interfering with anything on top of it.
 */
export const PIXEL_GRID = `
  repeating-linear-gradient(0deg, #764ba2 0px, #764ba2 2px, transparent 2px, transparent 20px),
  repeating-linear-gradient(90deg, #764ba2 0px, #764ba2 2px, transparent 2px, transparent 20px)
`
