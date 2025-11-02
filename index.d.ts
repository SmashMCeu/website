declare module "nuxt/schema" {

    interface RuntimeConfig {
        pocketbase: {
            baseUrl: string
            collections: {
                mapImages: string
                teamMembers: string
                faq: string
                rules: string
            }
        }
        tebex: {
            projectId: string
            privateKey: string
        }
    }

    interface PublicRuntimeConfig {
        tebex: {
            apiBaseUrl: string
            token: string
        }
    }
}

export { }
