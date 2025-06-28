interface McDecodedSkinTexture {
    timestamp: number
    profileId: string
    profileName: string
    signatureRequired?: boolean
    textures: {
        SKIN?: {
            url: string
            metadata?: {
                model?: string
            }
        }
        CAPE?: {
            url: string
        }
    }
}
