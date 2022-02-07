const colors = require("tailwindcss/colors");

module.exports = {
  prefix: "",
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      lime: colors.lime,
      gray: colors.gray,
      indigo: colors.indigo,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
