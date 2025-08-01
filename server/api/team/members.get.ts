export default defineCachedEventHandler(async () => {
    try {
        const teamMembers = await usePocketbase()
            .collection(useRuntimeConfig().pocketbase.collections.teamMembers)
            .getFullList<TeamMember>({
                expand: "domains",
            })

        return teamMembers
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
