/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#4c1d95',
        dark: '#3f3f46',
        dark2: '#18181b',
      },

      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

