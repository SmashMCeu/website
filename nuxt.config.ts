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
    '@nuxt/image',
    '@vueuse/nuxt',
    "nuxt-aos"
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: "de"
      }
    }
  },

  runtimeConfig: {
    statsApiBaseUrl: "",
    
    public: {
      pocketbase: {
        apiBaseUrl: "https://pocket.smashmc.eu",
        collections: {
            guides: "guides",
            activeGuides: "active_guides",
            faq: "faq",
            rules: "rules",
            characters: "characters",
            character_previews: "character_previews",
            maps: "maps",
            skins: "skins",
            gamemodes: "gamemodes",
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
  },
  aos: {
    once: true,
  }
})