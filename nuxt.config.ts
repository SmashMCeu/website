import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: [
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxt/image",
        "@nuxtjs/i18n",
        "@nuxtjs/seo",
        "@nuxtjs/html-validator",
        "@nuxtjs/color-mode",
        "@vueuse/nuxt",
        "shadcn-nuxt",
        "vue-sonner/nuxt",
        "@nuxt/scripts",
        "@pinia/nuxt",
    ],

    runtimeConfig: {
        pocketbase: {
            baseUrl: "https://pocket.smashmc.eu",
            collections: {
                mapImages: "map_images",
                teamMembers: "team_members",
                faq: "faq",
                rules: "rules",
            },
        },
        public: {
            tebex: {
                apiBaseUrl: "https://headless.tebex.io",
                token: "<NUXT_PUBLIC_TEBEX_TOKEN>", // Use .env file to set this value (NUXT_PUBLIC_TEBEX_TOKEN)
            },
        },

    },

    colorMode: {
        classSuffix: "",
    },

    i18n: {
        // baseUrl: "https://smashmc.eu",
        baseUrl: "http://private.knoter.eu:3000",
        defaultLocale: "en",
        locales: [
            {
                code: "en",
                language: "en-US",
                name: "English",
                file: "en.json",
            },
            {
                code: "de",
                language: "de-DE",
                name: "Deutsch",
                file: "de.json",
            },
        ],
        strategy: "prefix_except_default",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_redirected",
            redirectOn: "root",
        },
    },

    css: ["~/assets/css/main.css"],

    vite: {
        plugins: [
            tailwindcss(), // TODO: Use vite plugin until NuxtTailwind module v7 (currently only pre-release) includes TailwindCSS v4
        ],
        server: {
            allowedHosts: ["private.knoter.eu"],
        },
    },

    eslint: {
        config: {
            stylistic: true,
        },
    },

    compatibilityDate: "2025-05-15",
})
