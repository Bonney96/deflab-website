/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./themes/hugoblox-kit/layouts/**/*.html",
    "./themes/hugoblox-kit/modules/blox/layouts/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'washu-red': '#A51417',
        'washu-dark-gray': '#252525',
      },
      fontFamily: {
        'serif': ['"Libre Baskerville"', 'Georgia', 'serif'],
        'sans': ['"Source Sans Pro"', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
