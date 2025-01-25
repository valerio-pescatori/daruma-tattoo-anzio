import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'base-black': 'rgba(var(--base-black), <alpha-value>)',
      'base-white': 'rgba(var(--base-white), <alpha-value>)',
      background: 'rgba(var(--background), <alpha-value>)',
      foreground: 'rgba(var(--foreground), <alpha-value>)',
      accent: 'rgba(var(--accent), <alpha-value>)',
      'border-light': 'rgba(var(--border-light), <alpha-value>)',
      'border-dark': 'rgba(var(--border-dark), <alpha-value>)',
    },
    extend: {
      boxShadow: {
        DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      zIndex: {
        401: '401',
      },
      fontFamily: {
        sans: ['var(--font-cormorant-garamond)'],
        go3v2: ['go3v2', 'sans-serif'],
      },
      keyframes: {
        'fade-out': {
          to: {
            opacity: '0',
            scale: '200%',
          },
        },
        'fade-in': {
          to: {
            opacity: '1',
            transform: 'translate(0px)',
          },
        },
      },
      animation: {
        spin: 'spin 5s linear infinite',
        'fade-in': 'fade-in .75s linear forwards',
        'fade-out': 'fade-out .75s linear forwards',
      },
      gridTemplateColumns: {
        layout: '200px 1fr 200px',
      },
      gridTemplateRows: {
        0: '0fr',
      },
    },
  },
  plugins: [],
} satisfies Config;
