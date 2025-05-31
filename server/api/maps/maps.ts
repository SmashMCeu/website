import { RuntimeConfig } from "nuxt/schema";
import pb from "../../utils/pocketbase";

export default defineEventHandler(async (event): Promise<Array<SmashMap>> => {
    const config: RuntimeConfig = useRuntimeConfig(event);
    try {
        // TODO: Not all maps are displayed when there are more the 50 maps in the map pool
        const resp: PlayResponse = await $fetch(
            `${config.sekaiDataBaseUrl}/play?type=smash&pageSize=50&sort=POPULARITY`
        );

        const mapsImagesCollection = useRuntimeConfig().public.pocketbase.collections.map_images;

        const images = await pb.collection(mapsImagesCollection).getFullList<MapImage>();

        const result = resp
            .maps
            .map((m) => {
                const map = images.find((i) => i.sekai_id == m.id);
                if (map == null) {
                    return {
                        name: m.name,
                        builtBy: m.owner,
                        map: "https://pocket.smashmc.eu/api/files/5ks36qdysvzyhpz/k8v22d8tiwjp9la/k8v22d8tiwjp9la_gAv6VPxypp.webp",
                        created: m.dateCreated,
                        updated: m.dateUpdated,
                        timesPlayed: m.timesPlayed,
                    };
                }
                const mapUrl = pb.files.getURL({ collectionId: map.collectionId, id: map.id }, map.image);
                return {
                    name: m.name,
                    builtBy: m.owner,
                    map: mapUrl,
                    created: m.dateCreated,
                    updated: m.dateUpdated,
                    timesPlayed: m.timesPlayed,
                };
            })
            .filter((i) => i !== null);

        console.log(result);

        return result;
    } catch (error) {
        console.log(error);
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch data",
        });
    }

});


interface PlayResponse {
    maps: Array<SekaiDataMapModel>, page: number
}

interface SekaiDataMapModel {
    id: string;
    name: string;
    // uuid
    owner: string
    dateCreated: string;
    dateUpdated: string;
    timesPlayed: number;
}
