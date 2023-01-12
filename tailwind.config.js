/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mb: '275px',
      },
      fontFamily: {
        kanit: ['kanit'],
      },
      maxWidth: {
        complete: '1400px',
      },
      colors: {
        yelloww: '#feeb1a',
        'blue-dark': '#024add',
        'blue-light': '#01a3f4',
        'dull-yellow': '#af8b1d',
        'b-from' : '#0a47b2',
        'b-via' : '#0a7abf',
        'b-to'  : '#0a4cb2'
      },
      clipPath: {
        'clip-path': 'polygon(0 0,100% 0,92% 100%,8% 100%)',
      },
    },
  },
  plugins: [],
}
