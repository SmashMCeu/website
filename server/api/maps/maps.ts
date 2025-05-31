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

        const out: Array<SmashMap> = [];

        for (const m of resp.maps) {
            const map = images.find((i) => i.sekai_id == m.id);
            let name = undefined;
            try {
                const identity: Array<Identity> = await $fetch(
                    `${config.identityBaseUrl}/minecraft/${m.owner}`
                );
                if (identity?.length) {
                    if (identity.length > 0) {
                        name = identity[0].name;
                    }
                }
            } catch (error) {
                console.log(`Identity check failed for user ${m.owner}`);
            }

            if (map == null) {
                out.push({
                    id: m.id,
                    name: m.name,
                    builtBy: name as string,
                    map: "https://pocket.smashmc.eu/api/files/5ks36qdysvzyhpz/k8v22d8tiwjp9la/k8v22d8tiwjp9la_gAv6VPxypp.webp",
                    created: m.dateCreated,
                    updated: m.dateUpdated,
                    timesPlayed: m.timesPlayed,
                });
            } else {
                const mapUrl = pb.files.getURL({ collectionId: map.collectionId, id: map.id }, map.image);
                out.push({
                    id: m.id,
                    name: m.name,
                    builtBy: name as string,
                    map: mapUrl,
                    created: m.dateCreated,
                    updated: m.dateUpdated,
                    timesPlayed: m.timesPlayed,
                });
            }
        }

        return out;
    } catch (error) {
        console.log(error);
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch data",
        });
    }

});

interface Identity {
    name: string
}

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
