const colors = require('tailwindcss/colors')
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      colors: {
        primary: {
          dark:  '#1d3461',
          darker: '#1F487E',
          DEFAULT: '#376996',
          lighter: '#6290C8',
          light: '#829CBC'
        },
        gray: colors.coolGray,
        white: colors.white
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }