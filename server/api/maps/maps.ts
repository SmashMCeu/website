import { fetchIdentities, Identity } from "~/server/utils/identity";
import pb from "../../utils/pocketbase";

export default defineEventHandler(async (event): Promise<Array<SmashMap>> => {
    try {
        // TODO: Not all maps are displayed when there are more the 50 maps in the map pool
        const resp: PlayResponse = await $fetch(
            `https://api.smashmc.eu/sekai-data/play?type=smash&pageSize=50&tags=approved&pageIndex=0`
        );

        const mapsImagesCollection = useRuntimeConfig(event).public.pocketbase.collections.map_images;
        const images = await pb.collection(mapsImagesCollection).getFullList<MapImage>();

        // Resolver owner names
        const out: Array<SmashMap> = [];
        const set: Set<string> = new Set();
        for (const i of resp.maps) {
            set.add(i.owner);
        }
        const identitys: Array<Identity> = await fetchIdentities(set);

        for (const m of resp.maps) {
            let name = "";
            const user = identitys.find(i => i.uuid === m.owner);
            if (user?.name) {
                name = user.name;
            }
            const imageMap = images.find((i) => i.sekai_id == m.id);
            let mapUrl = "https://pocket.smashmc.eu/api/files/m3jdcbgppibfsan/UNKNOWN-MAP-IMG/unknown_52crufWpsk.webp";
            if (imageMap !== undefined) {
                mapUrl = pb.files.getURL({ collectionId: imageMap.collectionId, id: imageMap.id }, imageMap.image);
            }
            out.push({
                id: m.id,
                name: m.name,
                builtBy: name,
                map: mapUrl,
                created: m.dateCreated,
                updated: m.dateUpdated,
                timesPlayed: m.timesPlayed,
            });
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


interface PlayResponse {
    maps: Array<SekaiDataMapModel>;
    page: number;
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

