module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'nuevo': {
          100: '#1c1d26',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}
