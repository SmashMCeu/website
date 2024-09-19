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

  app: {
    head: {
      htmlAttrs: {
        lang: "de"
      }
    }
  },

  runtimeConfig: {
    statsApiBaseUrl: process.env.STATS_API_BASE_URL || "http://localhost:25003",
    
    public: {
      pocketbase: {
        apiBaseUrl: "https://pocket.smashmc.eu",
        collections: {
            guides: "guides",
            activeGuides: "active_guides",
            qna: "q_and_a",
            rules: "rules",
            characters: "characters",
            character_previews: "character_previews",
            maps: "maps",
            skins: "skins"
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
