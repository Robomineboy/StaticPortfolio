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
        primary: {
          DEFAULT: '#0a0e14',
          light: '#131920',
          lighter: '#1a2028',
        },
        accent: {
          teal: '#2dd4bf',
          green: '#34d399',
        },
        text: {
          primary: '#e5e7eb',
          secondary: '#9ca3af',
          dim: '#6b7280',
        },
        border: '#1f2937',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
