module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.{ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tundora: "#484848",
      },
      fontFamily: {
        airbnbCereal: ["Airbnb Cereal", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
