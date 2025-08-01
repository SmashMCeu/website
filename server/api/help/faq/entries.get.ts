export default defineCachedEventHandler(async () => {
    try {
        const faqEntries = await usePocketbase()
            .collection(useRuntimeConfig().pocketbase.collections.faq)
            .getFullList<FAQEntry>({ sort: "position" })

        return faqEntries
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch the FAQ entries",
            cause: error,
        })
    }
}, {
    maxAge: 0, // TODO: Make this higher in production
})
