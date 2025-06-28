export default function () {
    async function getTopPlayers(monthly: boolean, limit: number): Promise<string[]> {
        if (limit <= 0 || limit > 100) {
            throw createError({
                statusCode: 400,
                statusMessage: "Limit must be between 1 and 100",
            })
        }

        try {
            return await $fetch("/api/smash/stats/top", {
                query: {
                    monthly,
                    limit,
                },
            })
        } catch (error) {
            throw createError({
                statusCode: 500,
                statusMessage: "Failed to fetch top players",
                cause: error,
            })
        }
    }

    async function getTopPlayersWithIdentities(monthly: boolean, limit: number): Promise<McIdentity[]> {
        const topPlayers = await getTopPlayers(monthly, limit)

        if (topPlayers.length === 0) {
            return []
        }

        const identities = await useMcIdentity().getByUuidsOrNames(topPlayers)

        if (identities.length === 0) {
            throw createError({
                statusCode: 404,
                statusMessage: "No identities found for the top players",
            })
        }

        identities.sort((a, b) => {
            const aIndex = topPlayers.indexOf(a.uuid)
            const bIndex = topPlayers.indexOf(b.uuid)
            return aIndex - bIndex
        })

        return identities
    }

    return {
        getTopPlayers,
        getTopPlayersWithIdentities,
    }
}
