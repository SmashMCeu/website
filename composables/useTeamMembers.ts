
export const useTeamMembers = () => {

    async function getAllTeamMembersWithMCIdentity(): Promise<TeamMemberWithMCIdentity[]> {
        const { data, error } = await useFetch("/api/team/team")
        if (data?.value == null) {
            return [];
        }
        return data.value;
    }

    return { getAllTeamMembersWithMCIdentity }
}
