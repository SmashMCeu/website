declare module 'nuxt/schema' {

    interface RuntimeConfig { }

    interface PublicRuntimeConfig {
        pocketbase: {
            baseUrl: string
            collections: {
                guides: string
                activeGuides: string
                faq: string,
                rules: string,
                characters: string,
                character_previews: string,
                maps: string,
                map_images: string,
                items: string,
                skins: string,
                gamemodes: string,
                teamMembers: string
            }
        }
    }
}
