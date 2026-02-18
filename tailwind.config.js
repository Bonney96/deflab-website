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
        'washu-red': '#BA0C2F',
        'washu-dark-gray': '#252525',
      },
      fontFamily: {
        'serif': ['"IvyPresto Headline"', 'Georgia', 'serif'],
        'sans': ['"IvyStyle Sans"', 'Calibri', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
