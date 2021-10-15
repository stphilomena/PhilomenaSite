module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '120': '30rem'
      },
      width: {
        '120': '30rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
