/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#764ba2',
          secondary: '#667eea',
          dark: '#2D3748',
          light: '#F7FAFC',
        }
      },
      fontFamily: {
        mono: ['monospace'],
      },
    },
  },
  plugins: [],
}