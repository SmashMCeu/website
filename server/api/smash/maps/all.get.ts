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
        const mapsRes: SmashMapsReqWrapper = await $fetch<SmashMapsReqWrapper>(`https://api.smashmc.eu/sekai-data/play?pageIndex=${pageIndex}&pageSize=${pageSize}&type=smash&tags=approved`)
        const images = await usePocketbase()
            .collection(useRuntimeConfig().pocketbase.collections.map_images)
            .getFullList<MapImage>()

        const mapsWithImgRes: SmashMapsReqWrapper = {
            ...mapsRes,
            maps: mapsRes.maps.map((map: SmashMap) => {
                const pbImg = images.find(img => img.sekai_id === map.id)
                const imageUrl = pbImg ? usePocketbase().files.getURL({ id: pbImg.id, collectionId: pbImg.collectionId }, pbImg.image) : map.image

                return {
                    ...map,
                    image: imageUrl,
                }
            }),
        }

        return mapsWithImgRes // must include page infos like plain mapsRes
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

interface MapImage {
    id: string
    sekai_id: string
    collectionId: string
    image: string
}
