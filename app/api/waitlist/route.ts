import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' }, 
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ 
        email: email.toLowerCase().trim()
      }])
      .select();

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'already_exists' },
          { status: 409 }
        );
      }
      console.error('Supabase error:', error);
      throw error;
    }

    console.log(`Added to waitlist: ${email}`);
    return NextResponse.json({ success: true }, { status: 200 });
    
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Server error' }, 
      { status: 500 }
    );
  }
}

// There is deliberately no GET handler.
//
// This route used to export every signup email to anyone who requested the URL.
// Gating it behind a shared secret would still mean shipping a public endpoint
// that returns PII, with a token living in a header someone can copy — all to
// duplicate something the Supabase dashboard already does behind real auth.
// To read or export the list, use the Supabase table editor, or run
// `node scripts/export-emails.js` locally, which uses the service key from the
// environment and never exposes a route.
//
// Removing GET does not affect the client above: POST owns the same connection.