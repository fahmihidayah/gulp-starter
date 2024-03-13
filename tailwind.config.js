/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      height: {
        '0.1': '0.5px',
      },
      fontSize : {
        sm : '0.8rem',
      },
      screens: {
        'xs': '320px'
      },
      colors : {
      }
    },
  },
  plugins: [],
}

