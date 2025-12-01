const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

// Go up one level from scripts/ to project root
const dbPath = path.join(__dirname, '..', 'waitlist.db');
console.log('📁 Looking for database at:', dbPath);

// Check if file exists
if (!fs.existsSync(dbPath)) {
    console.error('❌ Database file not found at:', dbPath);
    console.log('Current directory:', __dirname);
    process.exit(1);
}

const db = new Database(dbPath);

// Get all emails
const emails = db.prepare('SELECT email, created_at FROM waitlist ORDER BY created_at DESC').all();

// Create CSV
const csv = 'Email,Joined At\n' + emails.map(e => `${e.email},${e.created_at}`).join('\n');

// Save to file
fs.writeFileSync('waitlist-export.csv', csv);

console.log(`✅ Exported ${emails.length} emails to waitlist-export.csv`);

db.close();