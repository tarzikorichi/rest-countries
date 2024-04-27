/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./*.html",
  ],
  theme: {
    screens: {
      Mobile: '375px',
      Desktop: '1440px',
    },
    extend: {
      fontFamily: {
        nunito: 'Nunito Sans, sans-serif',
      }
    },
  },
  plugins: [],
}