import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

// Creates/opens a database file called waitlist.db
const dbPath = path.join(process.cwd(), 'waitlist.db');
const db = new Database(dbPath);

// Create the table (if it doesn't exist yet)
// Think of like : CREATE TABLE IF NOT EXIST in SQL
db.exec(`
    CREATE TABLE IF NOT EXISTS waitlist (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

// This handles POST requrest to /api/waitlist
export async function POST(request: Request) {
    try {
        // Get the email from the request body
        const { email } = await request.json();

        // Validate email
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Try to insert the email into database
        try {
            const stmt = db.prepare('INSERT INTO waitlist (email) VALUES (?)');
            stmt.run(email.toLowerCase().trim());

            console.log(`Added to waitlist: ${email}`);

            return NextResponse.json({success: true}, { status: 200 });
        } catch (error: any) {
            // If email already exists, return a special error
        if (error.message.includes('UNIQUE')) {
            return NextResponse.json(
                { error: 'already_exists' },
                { status: 409 }
            );
        }
            throw error;
        }
    } catch (error) {
        console.error('Waitlist error:', error);
        return NextResponse.json(
            { error: 'Server error' },
            { status: 500 }
        );
    }
}

// This handles GET requests to /api/waitlist
// You can visit this URL to see all emails
export async function GET() {
    try {
        const stmt = db.prepare('SELECT email, created_at FROM waitlist ORDER BY created_at DESC');
        const emails = stmt.all();

        return NextResponse.json({
            emails,
            count: emails.length
        });
    } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
        { error: 'Server error' },
        { status: 500 }
    );
    }
}