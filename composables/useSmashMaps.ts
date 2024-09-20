import type PocketBase from "pocketbase";

export const useSmashMaps = () => {

    // vs doesn't always import the type correctly...
    const pb: PocketBase = useNuxtApp().$pocketbase as PocketBase;
    
    const mapsCollection = useRuntimeConfig().public.pocketbase.collections.maps;


    async function getAllMaps(): Promise<SmashMap[]> {
        try {
            return await pb.collection(mapsCollection).getFullList<SmashMap>({ sort: "name" });
        } catch (error) {
            createError({
                statusCode: 500,
                message: "Failed to fetch maps",
            });
            showError({
                statusCode: 500,
                message: "Failed to fetch maps",
            });
            return [];
        }
    }

    function getMapImageUrl(map: SmashMap): string {
        return pb.files.getUrl({
            collectionId: map.collectionId,
            id: map.id
        }, map.map);
    }



    return { getAllMaps, getMapImageUrl };

}
