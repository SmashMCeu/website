// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "nuxt-aos"],

  ssr: false,
  
  tailwindcss: {
    viewer: false,
  },
  ui: {
    icons: ["mdi", "simple-icons"]
  }

})
