module.exports = {
  prefix: "",
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        "-100": "-1",
      },
      fontFamily: {
        "reem-kufi": ["Reem Kufi", "sans-serif"],
        "special-elite": ["Special Elite", "cursive"],
        "reenie-beanie": ["Reenie Beanie", "cursive"],
      },
      colors: {
        "legio-gold": {
          DEFAULT: "#946C00",
          50: "#FFCF4D",
          100: "#FFC938",
          200: "#FFBE0F",
          300: "#E6A800",
          400: "#BD8A00",
          500: "#946C00",
          600: "#5C4300",
          700: "#241A00",
          800: "#000000",
          900: "#000000",
        },
        "legio-green": {
          DEFAULT: "#393A2C",
          50: "#9C9E7F",
          100: "#939574",
          200: "#7D8061",
          300: "#67684F",
          400: "#50513E",
          500: "#393A2C",
          600: "#1A1A14",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
