export default function () {
    async function getTopPlayers(monthly: boolean, limit: number): Promise<string[]> {
        if (limit <= 0 || limit > 100) {
            throw createError({
                statusCode: 400,
                statusMessage: "Limit must be between 1 and 100",
            })
        }

        try {
            return await $fetch("/api/smash/stats/ranking/top", {
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

    async function getPlayerStats(uuid: string, start: string | undefined, end: string | undefined): Promise<SmashUserStats> {
        if (!uuid) {
            throw createError({
                statusCode: 400,
                statusMessage: "UUID is required",
            })
        }

        try {
            return await $fetch(`/api/smash/stats/user/${uuid}`, {
                query: {
                    start,
                    end,
                },
            })
        } catch (error) {
            throw createError({
                statusCode: 500,
                statusMessage: "Failed to fetch player stats",
                cause: error,
            })
        }
    }

    async function getPlayerAlltimeStats(uuid: string): Promise<SmashUserStats> {
        return await getPlayerStats(uuid, "1970-01-01", toDateString(new Date()))
    }

    async function getPlayerMonthlyStats(uuid: string): Promise<SmashUserStats> {
        const start = new Date()
        start.setMonth(start.getMonth() - 1)
        return await getPlayerStats(uuid, toDateString(start), toDateString(new Date()))
    }

    function toDateString(date: Date): string | undefined {
        if (!date) return undefined
        return date.toISOString().split("T")[0] // Format as YYYY-MM-DD
    }

    return {
        getTopPlayers,
        getTopPlayersWithIdentities,
        getPlayerStats,
        getPlayerAlltimeStats,
        getPlayerMonthlyStats,
    }
}
