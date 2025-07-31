export default function () {
    async function getAll(pageIndex: MaybeRefOrGetter<number>): Promise<SmashMapsReqWrapper> {
        try {
            const maps = await $fetch<SmashMapsReqWrapper>("/api/smash/maps/all", {
                query: {
                    page: (toValue(pageIndex) || 0) - 1, // API uses 0-based index
                },
            })
            return maps
        } catch (error) {
            throw createError({
                statusCode: 500,
                statusMessage: "Failed to fetch maps",
                cause: error,
            })
        }
    }

    return {
        getAll,
    }
}
