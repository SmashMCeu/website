import PocketBase from "pocketbase";

export const useSmashGuides = () => {

    // vs doesn't always import the type correctly...
    const pb: PocketBase = useNuxtApp().$pocketbase as PocketBase;
    
    const activeGuidesCollection = "active_guides";

    
    async function getGuidesList(): Promise<GuidesEntry[]> {
        try {
            return await pb.collection(activeGuidesCollection).getFullList<GuidesEntry>({ sort: "title" });
        } catch (error) {
            createError({
                statusCode: 500,
                message: "Failed to fetch guides",
            });
            showError({
                statusCode: 500,
                message: "Failed to fetch guides",
            });
            return [];
        }
    }

    function getGuideThumbnailUrl(guide: GuidesEntry): string {
        return pb.files.getUrl({
            collectionId: guide.collectionId,
            id: guide.id
        }, guide.thumbnail);
    }


    return { getGuidesList, getGuideThumbnailUrl };

}