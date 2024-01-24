// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "vue3-carousel-nuxt", "@nuxt/content"],

  ssr: false,

  css: ["assets/main.css"],
  
  router: {
    options: {
      linkActiveClass: "text-white"
    }
  }
})