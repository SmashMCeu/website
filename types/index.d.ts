declare module 'nuxt/schema' {
    interface PublicRuntimeConfig {
        pocketbase: {
            baseUrl: string
            collections: {
                guides: string
                activeGuides: string
                qna: string,
                rules: string,
                characters: string,
                character_previews: string,
                maps: string,
                skins: string,
            },
            rules: {
                databaseEntryId: string
            }
        }
    }
}

export {}