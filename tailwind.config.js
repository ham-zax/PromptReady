/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)'],
        display: ['var(--font-display)'],
        kicker: ['var(--font-kicker)'],
        mono: ['var(--font-mono)'],
      },
      animation: {
        shimmer: 'shimmer 4s linear infinite',
        grid: 'grid 15s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: '200% 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        grid: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '100%': {
            backgroundPosition: '100% 50%',
          },
        },
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      colors: {
        brand: {
          bg: 'rgb(var(--brand-bg) / <alpha-value>)',
          surface: 'rgb(var(--brand-surface) / <alpha-value>)',
          'surface-soft': 'rgb(var(--brand-surface-soft) / <alpha-value>)',
          ink: 'rgb(var(--brand-ink) / <alpha-value>)',
          muted: 'rgb(var(--brand-muted) / <alpha-value>)',
          border: 'rgb(var(--brand-border) / <alpha-value>)',
          accent: 'rgb(var(--brand-accent) / <alpha-value>)',
          'accent-hover': 'rgb(var(--brand-accent-hover) / <alpha-value>)',
          success: 'rgb(var(--brand-success) / <alpha-value>)',
        },
        background: 'rgb(var(--brand-bg) / <alpha-value>)',
        foreground: 'rgb(var(--brand-ink) / <alpha-value>)',
        card: {
          DEFAULT: 'rgb(var(--brand-surface) / <alpha-value>)',
          foreground: 'rgb(var(--brand-ink) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'rgb(var(--brand-surface) / <alpha-value>)',
          foreground: 'rgb(var(--brand-ink) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'rgb(var(--brand-ink) / <alpha-value>)',
          foreground: 'rgb(var(--brand-surface) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--brand-surface-soft) / <alpha-value>)',
          foreground: 'rgb(var(--brand-ink) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--brand-surface-soft) / <alpha-value>)',
          foreground: 'rgb(var(--brand-muted) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--brand-accent) / <alpha-value>)',
          foreground: 'rgb(var(--brand-surface) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'rgb(var(--brand-accent) / <alpha-value>)',
          foreground: 'rgb(var(--brand-surface) / <alpha-value>)',
        },
        border: 'rgb(var(--brand-border) / <alpha-value>)',
        input: 'rgb(var(--brand-border) / <alpha-value>)',
        ring: 'rgb(var(--brand-accent) / <alpha-value>)',
        chart: {
          1: 'rgb(var(--brand-accent) / <alpha-value>)',
          2: 'rgb(var(--brand-success) / <alpha-value>)',
          3: 'rgb(var(--brand-ink) / <alpha-value>)',
          4: 'rgb(var(--brand-muted) / <alpha-value>)',
          5: 'rgb(var(--brand-border) / <alpha-value>)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
