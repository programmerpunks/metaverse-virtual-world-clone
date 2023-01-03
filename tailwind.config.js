/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        mb: "275px",
      },
      fontFamily: {
        kanit: ['kanit'],
      },
      maxWidth: {
        'complete': '1400px',
      },
      colors: {
        'yelloww': '#FEEB1A',
        'blue-dark': '#024ADD',
        'blue-light': '#01A3F4',
        'dull-yellow': '#AF8B1D',
      },
    },
  },
  plugins: [],
}
