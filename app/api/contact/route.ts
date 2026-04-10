import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const message = String(body.message ?? '').trim()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 400 })
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
