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

    async function getThumbnail(_mapId: MaybeRefOrGetter<string>): Promise<string> {
        // TODO: Fetch the thumbnail from pocketbase cms
        return Promise.resolve("https://pocket.smashmc.eu/api/files/m3jdcbgppibfsan/a1tytvbmp2hxda2/i30mf5t7wvh6jsb_ai7yn_ghq_op_4uhUiF4zhA.webp")
    }

    return {
        getAll,
        getThumbnail,
    }
}
