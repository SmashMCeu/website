import PocketBase from "pocketbase";

export const useTeamMembers = () => {

    // vsc doesn't always import the type correctly...
    const pb: PocketBase = useNuxtApp().$pocketbase as PocketBase;

    const teamMembersCollection = useRuntimeConfig().public.pocketbase.collections.teamMembers;


    async function getAllTeamMembers(): Promise<TeamMember[]> {
        try {
            return await pb.collection(teamMembersCollection).getFullList<TeamMember>({
                expand: "domains",
            });
        } catch (error) {
            createError({
                statusCode: 500,
                message: "Failed to fetch Team Members!",
            });
            showError({
                statusCode: 500,
                message: "Failed to fetch Team Members!",
            });
            return {} as TeamMember[];
        }
    }

    return { getAllTeamMembers }

}