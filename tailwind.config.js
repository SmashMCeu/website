/** @type {import('tailwindcss').Config} */

// https://uicolors.app/create
const primary = {
  'DEFAULT': '#70C1FB',
  '50': '#f0f8ff',
  '100': '#e0effe',
  '200': '#bae0fd',
  '300': '#70c1fb',
  '400': '#39abf7',
  '500': '#0f91e8',
  '600': '#0372c6',
  '700': '#045aa0',
  '800': '#084d84',
  '900': '#0c416e',
  '950': '#082949',
}



export default {
  content: [],
  theme: {
    extend: {
      colors: {
        
        primary: primary,         
        nuxtuiPrimary: primary,

        activeLink: "#70c1fb",
        navbarBackground: "#01010399",




        // goal is to remove this shit...
        backgroundColor: "#12151C",
        darkBackground: "#0E1015",
        transparentBackground: "#01010399",
        lessTransparentBackground: "#010103EE",
        transparentBackgroundLight: "#252533CC",
        textColorLight: "#D0D6E1",
        textColor: "#7E8289",

      }
    },

    aspectRatio: { // added because of => https://github.com/nuxt/ui/issues/571
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9'
    },


  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'markdownRender',
    }),

    function ({ addVariant }) {
      addVariant("child", "& > *"); // https://stackoverflow.com/questions/67119992/how-to-access-all-the-direct-children-of-a-div-in-tailwindcss
    },
  ],
}

