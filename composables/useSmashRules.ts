import PocketBase from "pocketbase";

export const useSmashRules = () => {

    // vs doesn't always import the type correctly...
    const pb: PocketBase = useNuxtApp().$pocketbase as PocketBase;

    const rulesCollection = useRuntimeConfig().public.pocketbase.collections.rules;
    const activeRulesId: string = useRuntimeConfig().public.pocketbase.rules.databaseEntryId;


    async function getCurrentlyActiveRules(): Promise<Rules> {
        try {
            return await pb.collection(rulesCollection).getOne<Rules>(activeRulesId);
        } catch (error) {
            createError({
                statusCode: 500,
                message: "Failed to fetch rules! Please contact the site administrator immediately!",
            });
            showError({
                statusCode: 500,
                message: "Failed to fetch rules! Please contact the site administrator immediately!",
            });
            return {} as Rules;
        }
    }

    return { getCurrentlyActiveRules }

}