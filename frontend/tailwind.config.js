const { colors } = require(`tailwindcss/defaultTheme`)

module.exports = {
  mode: "jit", // see https://tailwindcss.com/docs/just-in-time-mode
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      colors: {
        primary: "#EA3665",
        "primary-000": "#FFADC3",
        "primary-100": "#FE90AD",
        "primary-200": "#FB789A",
        "primary-300": "#FC668D",
        "primary-400": "#F4527D",
        "primary-500": "#F04672",
        //PRIMARY
        "primary-600": "#EA3665",
        "primary-700": "#D73861",
        "primary-800": "#C9345C",
        "primary-900": "#C22D55",
        secondary: "#200770",
        "secondary-000": "#5D39D1",
        "secondary-100": "#502CC1",
        "secondary-200": "#421EB2",
        "secondary-300": "#3816A5",
        "secondary-400": "#2D0D93",
        "secondary-500": "#260984",
        //SECONDARY
        "secondary-600": "#200770",
        "secondary-700": "#1D0E5A",
        "secondary-800": "#160750",
        "secondary-900": "#110442",
        tertiary: "#E8D266",
        "tertiary-000": "#FFFBE7",
        "tertiary-100": "#FFF7CF",
        "tertiary-200": "#FFF4BE",
        "tertiary-300": "#FCEDA3",
        "tertiary-400": "#F9E68A",
        "tertiary-500": "#F1DD79",
        //TERTIARY
        "tertiary-600": "#E8D266",
        "tertiary-700": "#E8CC45",
        "tertiary-800": "#E3C636",
        "tertiary-900": "#DDBC1A",
        grey: "#696969",
        "grey-000": "#FFFFFF",
        "grey-100": "#E9E9E9",
        "grey-200": "#E9E9E9",
        "grey-300": "#D1D1D1",
        "grey-400": "#B5B5B5",
        "grey-500": "#8D8D8D",
        //TERTIARY
        "grey-600": "#696969",
        "grey-700": "#515151",
        "grey-800": "#383838",
        "grey-900": "#171717",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
