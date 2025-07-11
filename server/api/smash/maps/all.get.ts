import * as z from "zod"

const queryParamsSchema = z.object({
    page: z.coerce.number().int().min(0).default(0),
})

export default defineCachedEventHandler(async (event) => {
    const req = await getValidatedQuery(event, queryParamsSchema.safeParse)

    if (!req.success || !req.data) {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid page index parameter",
        })
    }

    const pageIndex = req.data.page
    const pageSize = 20 // Max. 50 // TODO: Make this higher in production

    try {
        const maps: SmashMapsReqWrapper = await $fetch<SmashMapsReqWrapper>(`https://api.smashmc.eu/sekai-data/play?pageIndex=${pageIndex}&pageSize=${pageSize}&type=smash&tags=approved`)

        return maps
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch maps",
            cause: error,
        })
    }
}, {
    maxAge: 0, // TODO: Make this higher in production
})
