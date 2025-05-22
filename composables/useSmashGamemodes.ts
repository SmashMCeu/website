import PocketBase from "pocketbase";

export const useSmashGamemodes = () => {

    // vsc doesn't always import the type correctly...
    const pb: PocketBase = useNuxtApp().$pocketbase as PocketBase;
    
    const gamemodesCollection = useRuntimeConfig().public.pocketbase.collections.gamemodes;

    
    async function getGamemodeList(): Promise<Gamemode[]> {
        try {
            return await pb.collection(gamemodesCollection).getFullList<Gamemode>({ sort: "position" });
        } catch (error) {
            createError({
                statusCode: 500,
                message: "Failed to fetch gamemodes",
            });
            showError({
                statusCode: 500,
                message: "Failed to fetch gamemodes",
            });
            return [];
        }
    }

    function getGamemodeBackgroundUrl(gamemode: Gamemode): string {
        return pb.files.getURL({
            collectionId: gamemode.collectionId,
            id: gamemode.id
        }, gamemode.background);
    }

    function getGamemodeIconUrl(gamemode: Gamemode): string {
        return pb.files.getURL({
            collectionId: gamemode.collectionId,
            id: gamemode.id
        }, gamemode.icon);
    }


    return { getGamemodeList, getGamemodeBackgroundUrl, getGamemodeIconUrl };

}