export default function () {
    async function getEntries(): Promise<FAQEntry[]> {
        try {
            return await $fetch("/api/help/faq/entries")
        } catch (error) {
            throw createError({
                statusCode: 500,
                statusMessage: "Failed to fetch FAQ entries",
                cause: error,
            })
        }
    }

    return {
        getEntries,
    }
}
