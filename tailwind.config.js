module.exports = {
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}', './slices/**/*.{html,js}'],
  theme: {
    fontFamily: {
      Poppins: ['Poppins, sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
    extend: {},
  },
  plugins: [],
};
