/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dentalBase: '#b3c3d0',
        dentalMist: '#f7fafc',
        dentalInk: '#1f2d3d',
        dentalAccent: '#7f99ad',
        dentalCloud: '#e7eef4',
      },
      boxShadow: {
        dental: '0 10px 30px rgba(51, 71, 91, 0.15)',
        soft: '0 12px 38px rgba(90, 111, 131, 0.18)',
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        pulseSoft: 'pulseSoft 2.8s ease-in-out infinite',
        shimmer: 'shimmer 7s linear infinite',
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
      },
    },
  },
  plugins: [],
};
