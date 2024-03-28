// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "vue3-carousel-nuxt"],

  ssr: false,

  css: ["assets/main.css"],
  
  router: {
    options: {
      linkActiveClass: "text-white"
    }
  }
})
