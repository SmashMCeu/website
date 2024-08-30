import PocketBase from "pocketbase";

export const useSmashRules = () => {

    // vs doesn't always import the type correctly...
    const pb: PocketBase = useNuxtApp().$pocketbase as PocketBase;

    const rulesCollection = useRuntimeConfig().public.pocketbase.collections.rules;
    const activeRulesId: string = useRuntimeConfig().public.pocketbase.rules.databaseEntryId;


    async function getCurrentlyActiveRules(): Promise<Rules> {
        return await pb.collection(rulesCollection).getOne<Rules>(activeRulesId);
    }

    return { getCurrentlyActiveRules }

}