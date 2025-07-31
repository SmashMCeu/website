declare module "nuxt/schema" {

    interface RuntimeConfig {
        pocketbase: {
            baseUrl: string
            collections: {
                map_images: string
            }
        }
    }
}

export { }
