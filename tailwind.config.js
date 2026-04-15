/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dentalBlue: '#E8F5FF',
        dentalSky: '#B7E3FF',
        dentalDark: '#0F172A',
      },
      boxShadow: {
        dental: '0 10px 30px rgba(15, 23, 42, 0.15)',
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite',
        fadeSlide: 'fadeSlide 0.9s ease forwards',
        pulseSoft: 'pulseSoft 2.5s ease-in-out infinite',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeSlide: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '.9' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
