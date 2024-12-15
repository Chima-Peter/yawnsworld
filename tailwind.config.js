// tailwind.config.js
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '680px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '2560px',
      '4xl': '3840px'
    },
    extend: {
      fontFamily: {
        "main": ['Signika']
      }
    },
  },
  plugins: [],
}