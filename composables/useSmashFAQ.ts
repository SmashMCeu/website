import PocketBase from "pocketbase";

export const useSmashFAQ = () => {

    // vsc doesn't always import the type correctly...
    const pb: PocketBase = useNuxtApp().$pocketbase as PocketBase;
    
    const faqCollection = useRuntimeConfig().public.pocketbase.collections.faq;


    function getFullFAQ(): Promise<FAQ[]> {
        return pb.collection(faqCollection).getFullList({ sort: "position" });
    }


    return { getFullFAQ };

}