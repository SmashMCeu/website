export default function () {
    async function getAll(): Promise<TeamMember[]> {
        try {
            return await $fetch("/api/team/members")
        } catch (error) {
            throw createError({
                statusCode: 500,
                statusMessage: "Failed to fetch team members",
                cause: error,
            })
        }
    }

    async function getAllWithIdentities(): Promise<TeamMemberWithIdentity[]> {
        try {
            const members = await getAll()
            const identities = await useMcIdentity().getByUuidsOrNames(members.map(member => member.minecraftUuid))

            const result: TeamMemberWithIdentity[] = []

            for (const member of members) {
                const identity = identities.find(id => id.uuid === member.minecraftUuid)
                if (identity) {
                    result.push({ member, identity })
                }
            }

            return result
        } catch (error) {
            throw createError({
                statusCode: 500,
                statusMessage: "Failed to fetch team members with identities",
                cause: error,
            })
        }
    }

    return {
        getAll,
        getAllWithIdentities,
    }
}
