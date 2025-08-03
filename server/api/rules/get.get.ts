export default defineCachedEventHandler(async () => {
    try {
        const { rules } = await usePocketbase()
            .collection(useRuntimeConfig().pocketbase.collections.rules)
            .getOne<{ rules: string }>("active_rules_en") // TODO: Make this dynamic based on locale and improve cms

        return rules
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch the SmashMC team members",
            cause: error,
        })
    }
}, {
    maxAge: 0, // TODO: Make this higher in production
})
