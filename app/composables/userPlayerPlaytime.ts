export default function () {
    async function getByUuidOrName(uuidOrName: string): Promise<SmashUserPlaytime> {
        try {
            return await $fetch(`/api/smash/stats/playtime/${uuidOrName}`)
        } catch (error) {
            throw createError({
                statusCode: 500,
                statusMessage: "Failed to fetch user playtime",
                cause: error,
            })
        }
    }

    async function getByUuid(uuid: string): Promise<SmashUserPlaytime> {
        return getByUuidOrName(uuid)
    }

    async function getByName(name: string): Promise<SmashUserPlaytime> {
        return getByUuidOrName(name)
    }

    return {
        getByUuidOrName,
        getByUuid,
        getByName,
    }
}
