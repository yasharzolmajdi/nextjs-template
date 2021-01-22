module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.{ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      airbnbCereal: ["Airbnb Cereal", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
