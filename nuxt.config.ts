// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  tailwindcss: { viewer: false },
  
  modules: [
    '@nuxtjs/tailwindcss',
    'radix-vue/nuxt',
    '@nuxt/icon',
    '@nuxtjs/mdc',
    '@nuxt/image'
  ],

  runtimeConfig: {
    public: {
      pocketbase: {
        apiBaseUrl: "https://pocket.smashmc.eu",
        collections: {
            guides: "guides",
            activeGuides: "active_guides",
            qna: "q_and_a",
            rules: "rules",
            characters: "characters",
            maps: "maps",
        },
        rules: {
            databaseEntryId: "active_rules_de"
        }
      }
    }
  },

  nitro: {
    compressPublicAssets: true,
    minify: true,
  },

  mdc: {
    headings: {
      anchorLinks: false,
    }
  }
})
