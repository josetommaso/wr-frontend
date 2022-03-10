const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: "#41729F",
      secondary: "#5885AF",
      dark: "#274472",
      light: "#C3E0E5",
      darkerWhite: "#F5F0F6",
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    fontFamily: {
      base: ["Arvo", "serif"],
      secondary: ["PT Sans", "sans-serif]"],
    },
  },
  plugins: [],
};
