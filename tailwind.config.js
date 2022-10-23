/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  theme: {

    screens: {
      xs: '400px',
      mxs: {'max': '400px'},
      sm: '600px',
      md: '800px',
      lg: '1280px',
      xl: '1920px',
    },

    extend: {

      colors: {
        blue: {
          default: '#027fc1'
        },
        gray: {
          default: '#5C5C5C'
        }
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],

}
