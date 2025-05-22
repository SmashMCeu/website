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

    async function getAllTeamMembersWithMCIdentity(): Promise<TeamMemberWithMCIdentity[]> {
        try {
            const teamMembers = await getAllTeamMembers();

            return Promise.all(
                teamMembers.map(async (member) => ({
                    member,
                    mcIdentity: await useBasicMinecraftUser().uuidToBasicUser(member.minecraftUuid),
                }))
            );
        } catch (error) {
            createError({
                statusCode: 500,
                message: "Failed to fetch Team Members with MC Identity!",
            });
            showError({
                statusCode: 500,
                message: "Failed to fetch Team Members with MC Identity!",
            });
            return [] as TeamMemberWithMCIdentity[];
        }
    }

    return { getAllTeamMembers, getAllTeamMembersWithMCIdentity }

}