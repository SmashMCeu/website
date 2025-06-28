import { z } from "zod"

const queryParamsSchema = z.object({
    // using z.coerce.boolean() => "false" = true so this workaround is needed!
    monthly: z.preprocess(val => val === "true", z.boolean()).default(false),
    limit: z.coerce.number().int().min(1).max(100),
})

export default defineCachedEventHandler(async (event) => {
    const req = await getValidatedQuery(event, queryParamsSchema.safeParse)

    if (!req.success || !req.data) {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid query parameters",
        })
    }

    const { monthly, limit } = req.data

    try {
        const topPlayers = await $fetch<{ result: string[] }>("https://api.smashmc.eu/statistics/users/top?type=smash", {
            query: {
                monthly,
                limit,
            },
        })

        return topPlayers.result
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch top players",
            cause: error,
        })
    }
}, {
    maxAge: 10, // TODO: Make this higher in production
})
