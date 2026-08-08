/**
 * Export the waitlist to CSV.
 *
 * Signups live in Supabase (see app/api/waitlist/route.ts) — this script used to
 * read a local waitlist.db that no longer receives anything, so it silently
 * exported a stale file. It now reads the same table the route writes to.
 *
 * Runs locally only. It uses the service key, which must never reach the
 * browser, which is also why there is no GET handler on the waitlist route.
 *
 *   node scripts/export-emails.js
 */
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Node does not read .env.local the way Next does, and pulling in dotenv just
// for this would add a dependency to the deployed project.
function loadEnvLocal() {
  const envPath = path.join(__dirname, '..', '.env.local');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (!match) continue;
    const value = (match[2] || '').trim().replace(/^["']|["']$/g, '');
    if (!(match[1] in process.env)) process.env[match[1]] = value;
  }
}

async function main() {
  loadEnvLocal();

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !key) {
    console.error('❌ NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_KEY must be set in .env.local');
    process.exit(1);
  }

  const supabase = createClient(url, key);
  const { data, error } = await supabase
    .from('waitlist')
    .select('email, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('❌ Supabase error:', error.message);
    process.exit(1);
  }

  // Quote every field: an email cannot contain a comma, but created_at
  // formatting is Postgres's call and not worth trusting.
  const rows = (data || []).map((r) => `"${r.email}","${r.created_at}"`);
  const outPath = path.join(process.cwd(), 'waitlist-export.csv');
  fs.writeFileSync(outPath, ['"Email","Joined At"', ...rows].join('\n') + '\n');

  console.log(`✅ Exported ${rows.length} emails to ${outPath}`);
}

main().catch((err) => {
  console.error('❌ Export failed:', err);
  process.exit(1);
});
