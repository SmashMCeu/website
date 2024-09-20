declare module 'nuxt/schema' {

    interface RuntimeConfig  {
        mongodb: {
            dbUri: string,
            dbName: string,
            username: string,
            password: string
            authSource: string
        }
    }

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
                skins: string,
            },
            rules: {
                databaseEntryId: string
            }
        }
    }
}

export {}