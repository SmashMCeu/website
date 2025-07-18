import PocketBase from "pocketbase";

export const useSmashMaps = () => {

    async function getAllMaps(): Promise<SmashMap[]> {
        const { data, error } = await useFetch("/api/maps/maps")
        if (data?.value == null) {
            return [];
        }
        return data.value;
    }

    return { getAllMaps };
}
