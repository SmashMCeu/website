import * as z from "zod"

const routerParamsSchema = z.object({
    user: z.union([
        z.uuid(),
        z.string().regex(/^[a-zA-Z0-9_]{3,16}$/),
    ]),
})

export default defineCachedEventHandler(async (event) => {
    const req = await getValidatedRouterParams(event, routerParamsSchema.safeParse)

    if (!req.success || !req.data) {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid or missing parameters",
        })
    }

    const user = req.data.user

    try {
        const playtime: SmashUserPlaytime = await $fetch(`https://api.smashmc.eu/playtime/players/${user}`)

        if (!playtime) {
            throw createError({
                statusCode: 404,
                statusMessage: "User not found or no playtime available",
            })
        }

        return playtime
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch user playtime",
            cause: error,
        })
    }
}, {
    maxAge: 10, // TODO: Make this higher in production
})
