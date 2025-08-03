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
    },

    colorMode: {
        classSuffix: "",
    },

    i18n: {
        baseUrl: "https://smashmc.eu",
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
    },

    eslint: {
        config: {
            stylistic: true,
        },
    },

    compatibilityDate: "2025-05-15",
})
