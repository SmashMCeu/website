import PocketBase from "pocketbase";

export const useSmashItems = () => {

    // vsc doesn't always import the type correctly...
    const pb: PocketBase = useNuxtApp().$pocketbase as PocketBase;
    
    const itemsCollection = useRuntimeConfig().public.pocketbase.collections.items;


    async function getAllItems(): Promise<SmashItem[]> {
        try {
            return await pb.collection(itemsCollection).getFullList<SmashItem>({ sort: "name" });
        } catch (error) {
            createError({
                statusCode: 500,
                message: "Failed to fetch items",
            });
            showError({
                statusCode: 500,
                message: "Failed to fetch items",
            });
            return [];
        }
    }

    function getItemImageUrl(item: SmashItem): string {
        return pb.files.getUrl({
            collectionId: item.collectionId,
            id: item.id
        }, item.image);
    }



    return { getAllItems, getItemImageUrl };

}