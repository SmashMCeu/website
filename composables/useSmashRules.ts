import PocketBase from "pocketbase";

export const useSmashRules = () => {

    // vs doesn't always import the type correctly...
    const pb: PocketBase = useNuxtApp().$pocketbase as PocketBase;

    const rulesCollection = useRuntimeConfig().public.pocketbase.collections.rules;


    async function getCurrentlyActiveRules(lang: string): Promise<Rules> {
        try {
            return await pb.collection(rulesCollection).getOne<Rules>("active_rules_" + lang);
        } catch (error) {
            createError({
                statusCode: 500,
                message: "Failed to fetch rules!",
            });
            showError({
                statusCode: 500,
                message: "Failed to fetch rules!",
            });
            return {} as Rules;
        }
    }

    return { getCurrentlyActiveRules }

}