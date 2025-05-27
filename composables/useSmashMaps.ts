import PocketBase from "pocketbase";

export const useSmashMaps = () => {
    async function getAllMaps(): Promise<SmashMap[]> {
    }

    function getMapImageUrl(map: SmashMap): string {
        return pb.files.getURL({
            collectionId: map.collectionId,
            id: map.id
        }, map.map);
    }

    return { getAllMaps, getMapImageUrl };
}
