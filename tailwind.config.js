/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dentalBase: '#12AD2B',
        dentalMint: '#e9f9ec',
        dentalInk: '#0f2f17',
        dentalAccent: '#0a7f1f',
        dentalCloud: '#d5f0db',
      },
      boxShadow: {
        dental: '0 10px 30px rgba(8, 94, 31, 0.14)',
        soft: '0 12px 38px rgba(9, 102, 35, 0.2)',
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        pulseSoft: 'pulseSoft 2.8s ease-in-out infinite',
        shimmer: 'shimmer 7s linear infinite',
        bob: 'bob 5s ease-in-out infinite',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '.9' },
          '50%': { transform: 'scale(1.06)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bob: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-8px,0)' },
        },
      },
    },
  },
  plugins: [],
};
