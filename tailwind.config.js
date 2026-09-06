/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          slate: '#0E1726',
          slateLight: '#1A273D',
          navy: '#152238',
          charcoal: '#1A1615',
          muted: '#64748B',
          softText: '#475569',
        },
        cream: {
          50: '#FDFBF7',
          100: '#FAF8F5',
          200: '#F5F1E9',
          300: '#EBE5D8',
          400: '#DDD4C4',
          card: '#FFFFFF',
          cardMuted: '#FAF7F2',
          border: '#E8E2D6',
        },
        pink: {
          brand: '#ED1B77',
          brandHover: '#D8156B',
          light: '#FDF2F7',
          subtle: '#FCE7F1',
          glow: 'rgba(237, 27, 119, 0.35)',
        },
        soft: {
          blue: '#EBF3FF',
          lavender: '#EDE6FF',
          sand: '#F7F3ED',
          border: 'rgba(226, 232, 240, 0.8)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Cabinet Grotesk', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(26, 22, 21, 0.04), 0 1px 4px -1px rgba(26, 22, 21, 0.02)',
        'soft-md': '0 8px 24px -4px rgba(26, 22, 21, 0.06), 0 4px 12px -2px rgba(26, 22, 21, 0.03)',
        'soft-lg': '0 16px 36px -6px rgba(26, 22, 21, 0.08), 0 8px 18px -4px rgba(26, 22, 21, 0.04)',
        'soft-xl': '0 24px 48px -12px rgba(26, 22, 21, 0.12), 0 12px 24px -6px rgba(26, 22, 21, 0.06)',
        'pink-glow': '0 8px 28px -4px rgba(237, 27, 119, 0.40)',
        'pink-glow-lg': '0 16px 40px -6px rgba(237, 27, 119, 0.50)',
        'dark-card': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'float-subtle': 'float 4s ease-in-out 1s infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'laser-scan': 'laserScan 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        laserScan: {
          '0%': { top: '5%', opacity: '0.3' },
          '50%': { top: '90%', opacity: '1' },
          '100%': { top: '5%', opacity: '0.3' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
