declare module "nuxt/schema" {

    interface RuntimeConfig {
        pocketbase: {
            baseUrl: string
            collections: {
                mapImages: string
                teamMembers: string
                faq: string
            }
        }
    }
}

export { }
