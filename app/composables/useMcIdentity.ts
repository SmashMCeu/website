export default function () {
    /* NOTE: Use these composables inside useAsyncData to prevent SSR issues */

    async function getByUuidsOrNames(uuidsOrNames: string[]): Promise<McIdentity[]> {
        if (!uuidsOrNames) {
            throw new Error("Missing uuids or names parameter")
        }

        if (!Array.isArray(uuidsOrNames) || uuidsOrNames.length === 0) {
            throw new Error("uuidsOrNames must be a non-empty array")
        }

        try {
            uuidsOrNames = [...new Set(uuidsOrNames)].sort()

            return await $fetch("/api/smash/identity/" + uuidsOrNames.join(","))
        } catch (error) {
            throw createError({
                statusCode: 500,
                statusMessage: "Failed to fetch identities",
                cause: error,
            })
        }
    }

    async function getByUuidOrName(uuidOrName: string): Promise<McIdentity> {
        const identities = await getByUuidsOrNames([uuidOrName])

        if (identities.length === 0 || !identities[0]) {
            throw createError({
                statusCode: 404,
                statusMessage: `Identity with ${uuidOrName} not found`,
            })
        }

        return identities[0]
    }

    async function getByUuid(uuid: string): Promise<McIdentity> {
        return await getByUuidOrName(uuid)
    }

    async function getByName(name: string): Promise<McIdentity> {
        return await getByUuidOrName(name)
    }

    function getTexture(identity: McIdentity): McDecodedSkinTexture {
        if (!identity || !identity.texture || !identity.texture.value) {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid identity or missing texture",
            })
        }

        const textureUrl = atob(identity.texture.value)

        try {
            const decodedTexture: McDecodedSkinTexture = JSON.parse(textureUrl)

            return decodedTexture
        } catch {
            throw createError({
                statusCode: 500,
                statusMessage: "Failed to decode skin texture",
            })
        }
    }

    return {
        getByUuidsOrNames,
        getByUuidOrName,
        getByUuid,
        getByName,
        getTexture,
    }
}
