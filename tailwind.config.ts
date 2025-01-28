import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      text: 'rgba(var(--off-white), <alpha-value>)',
      'base-1': 'rgba(var(--midnight-teal), <alpha-value>)',
      'base-2': 'rgba(var(--deep-navy-black), <alpha-value>)',
      overlay: 'rgba(var(--soft-seafoam-teal), <alpha-value>)',
      accent: 'rgba(var(--sage-green), <alpha-value>)',
      'muted-gold': 'rgba(var(--muted-gold), <alpha-value>)',
      'anthracite-gray': 'rgba(var(--anthracite-gray), <alpha-value>)',
    },
    extend: {
      boxShadow: {
        DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      dropShadow: {
        DEFAULT: '0 4px 6px rgba(0, 0, 0, 1)',
      },
      zIndex: {
        401: '401',
      },
      fontFamily: {
        sans: ['var(--font-cormorant-garamond)'],
        go3v2: ['var(--font-go3v2)', 'sans-serif'],
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
        spin: 'spin 20s linear infinite',
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
