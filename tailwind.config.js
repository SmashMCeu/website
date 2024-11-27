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

        proCharacter: "#00bcbf",
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
        dialogOverlayHide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        dialogContentHide: {
          from: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
          to: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.96)' },
        },
        
        accordionSlideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        accordionSlideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        dialogOverlayShow: 'dialogOverlayShow 200ms ease-out',
        dialogContentShow: 'dialogContentShow 200ms ease-out',
        dialogOverlayHide: 'dialogOverlayHide 200ms ease-in',
        dialogContentHide: 'dialogContentHide 200ms ease-in',

        accordionSlideDown: 'accordionSlideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        accordionSlideUp: 'accordionSlideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

