import { NextResponse } from 'next/server'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 5
const contactRateLimit = new Map<string, number[]>()

function getClientKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for') ?? ''
  const ip = forwarded.split(',')[0]?.trim() || 'unknown-ip'
  const ua = request.headers.get('user-agent') ?? 'unknown-ua'
  return `${ip}:${ua}`
}

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const windowStart = now - RATE_LIMIT_WINDOW_MS
  const previous = contactRateLimit.get(key) ?? []
  const recent = previous.filter((ts) => ts > windowStart)

  if (recent.length >= RATE_LIMIT_MAX) {
    contactRateLimit.set(key, recent)
    return true
  }

  recent.push(now)
  contactRateLimit.set(key, recent)
  return false
}

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string; website?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const message = String(body.message ?? '').trim()
  const website = String(body.website ?? '').trim()

  // Honeypot field for bots: real users never fill this.
  if (website) {
    return NextResponse.json({ ok: true })
  }

  if (isRateLimited(getClientKey(request))) {
    return NextResponse.json({ error: 'rate_limited' }, { status: 429 })
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 400 })
  }
  if (name.length > 120 || message.length > 4000) {
    return NextResponse.json({ error: 'payload_too_large' }, { status: 400 })
  }
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 })
  }

  const apiKey = process.env.MAILGUN_API_KEY
  const domain = process.env.MAILGUN_DOMAIN
  const from = process.env.MAILGUN_FROM
  const to = process.env.CONTACT_TO_EMAIL

  if (!apiKey || !domain || !from || !to) {
    return NextResponse.json(
      { error: 'mail_not_configured' },
      { status: 503 }
    )
  }

  const region = process.env.MAILGUN_REGION?.toLowerCase() === 'eu' ? 'eu' : 'us'
  const host =
    region === 'eu' ? 'api.eu.mailgun.net' : 'api.mailgun.net'

  const params = new URLSearchParams()
  params.set('from', from)
  params.set('to', to)
  params.set('subject', `[PixelFlip contact] ${name}`)
  params.set('text', `Name: ${name}\nEmail: ${email}\n\n${message}`)
  params.set('h:Reply-To', email)

  const auth = Buffer.from(`api:${apiKey}`).toString('base64')

  const mgRes = await fetch(`https://${host}/v3/${domain}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  })

  if (!mgRes.ok) {
    const errText = await mgRes.text().catch(() => '')
    console.error('Mailgun error', mgRes.status, errText)
    return NextResponse.json({ error: 'send_failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
