import { z } from "zod"

const routerParamsSchema = z.object({
    user: z.string().uuid(),

    /* TODO: Currently, only UUIDs are supported.
    user: z.union([
        z.string().uuid(),
        z.string().regex(/^[a-zA-Z0-9_]{3,16}$/),
    ]),
    */
})

const queryParamsSchema = z.object({
    start: z.string().optional().default("1970-01-01"),
    end: z.string().optional().default(new Date().toISOString().split("T")[0]),
})

export default defineCachedEventHandler(async (event) => {
    const req = await getValidatedRouterParams(event, routerParamsSchema.safeParse)
    const query = await getValidatedQuery(event, queryParamsSchema.safeParse)

    if (!req.success || !req.data || !query.success || !query.data) {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid or missing parameters",
        })
    }

    const user = req.data.user

    try {
        const stats: SmashUserStats = await $fetch(`https://api.smashmc.eu/statistics/users/${user}`, {
            query: {
                start: query.data.start,
                end: query.data.end,
                type: "smash", // Assuming "smash" is the type for Smash stats
            },
        })

        if (!stats) {
            throw createError({
                statusCode: 404,
                statusMessage: "User not found or no stats available",
            })
        }

        return stats
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch user stats",
            cause: error,
        })
    }
}, {
    maxAge: 10, // TODO: Make this higher in production
})
