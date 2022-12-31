/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
        'yelloww': '#feeb1a',
        'blue-dark': '#024add',
        'blue-light': '#01a3f4',
      },
    },
  },
  plugins: [],
}
