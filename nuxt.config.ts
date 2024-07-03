// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "nuxt-aos", "@nuxtjs/i18n"],

  devtools: true,

  ssr: false,
  
  tailwindcss: {
    viewer: false,
  },
  ui: {
    icons: ["mdi", "simple-icons"]
  },
  i18n: {
    lazy: true,
    langDir: "lang",
    locales: [
      { code: "de", file: "de.json" },
      { code: "en", file: "en.json" }
    ],
    defaultLocale: "de",
  }

})