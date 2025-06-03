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
    "nuxt-aos",
    "@nuxtjs/i18n"
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
          items: "items",
          skins: "skins",
          gamemodes: "gamemodes",
          teamMembers: "team_members"
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
  },

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      { code: 'de', name: "Deutsch", file: "de.json" },
      { code: 'en', name: "English", file: "en.json" }
    ],
    bundle: {
      optimizeTranslationDirective: false,
    },
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: 'root' // recommended
    }
  },
  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
    }
  }
})
