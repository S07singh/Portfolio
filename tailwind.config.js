/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F3EDE2',
        'cream-2': '#EAE2D3',
        paper: '#FBF8F2',
        ink: '#1A1814',
        'ink-soft': '#4D4840',
        muted: '#857E72',
        line: '#D8CDBA',
        accent: '#C4552D',
        'accent-dark': '#A2421F',
        sage: '#5E6B4F',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'spin-slow': 'spin 18s linear infinite',
        blink: 'blink 1.4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
      },
    },
  },
  plugins: [],
}
