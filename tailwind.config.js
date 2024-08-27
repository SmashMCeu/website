/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#41e38c",
        secondary: "#ba89e3",

        backgroundColor: "#09090d",
        backgroundColorLight: "#16171c",

        textColorLight: "#EDEDED",
        textColor: "#DCDCDC",
      },
      keyframes: {
        dialogOverlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        dialogContentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        dialogOverlayShow: 'dialogOverlayShow 150ms ease-out',
        dialogContentShow: 'dialogContentShow 150ms ease-out',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

