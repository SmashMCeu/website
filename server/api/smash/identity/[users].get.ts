import { z } from "zod"

const routerParamsSchema = z.object({
    users: z.string().transform(val => val.split(",")).pipe(
        z.array(z.union([
            z.string().uuid(),
            z.string().regex(/^[a-zA-Z0-9_]{3,16}$/),
        ])),
    ),
})

export default defineCachedEventHandler(async (event) => {
    const req = await getValidatedRouterParams(event, routerParamsSchema.safeParse)

    if (!req.success || !req.data || !req.data.users || req.data.users.length === 0) {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid or missing users parameter",
        })
    }

    const uuidsOrNamesString = req.data.users.join(",")

    try {
        const identity: McIdentity[] = await $fetch(`https://api.smashmc.eu/identity/minecraft/${uuidsOrNamesString}`)

        return identity
    } catch {
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch identity. Maybe the user does not exist or the API is down.",
        })
    }
}, {
    maxAge: 10, // TODO: Make this higher in production
})
