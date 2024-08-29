import PocketBase from "pocketbase";

export const useSmashQnA = () => {

    // vs doesn't always import the type correctly...
    const pb: PocketBase = useNuxtApp().$pocketbase as PocketBase;
    
    const qnaCollection = useRuntimeConfig().public.pocketbase.collections.qna;


    function getFullQnA(): Promise<QnA[]> {
        return pb.collection(qnaCollection).getFullList({ sort: "position" });
    }


    return { getFullQnA };

}