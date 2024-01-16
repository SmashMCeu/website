/** @type {import('tailwindcss').Config} */

const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#70C1FB",
        backgroundColor: "#12151C",
        darkBackground: "#0E1015",
        transparentBackground: "#01010399",
        lessTransparentBackground: "#010103EE",
        transparentBackgroundLight: "#252533CC",
        textColorLight: "#D0D6E1",
        textColor: "#7E8289",
      }
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["mdi", "solar"]),
    }),
    function ({ addVariant }) {
      addVariant("child", "& > *"); // https://stackoverflow.com/questions/67119992/how-to-access-all-the-direct-children-of-a-div-in-tailwindcss
    },
  ],
}

