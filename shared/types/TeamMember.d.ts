export interface TeamMember {
    id: string
    minecraftUuid: string
    joinedAt: string
    isAdmin: boolean
    discordTag: string
    domains: TeamMemberDomain[]
    created: string
    updated: string
    collectionId: string
    collectionName: string

    expand?: {
        domains: TeamMemberDomain[]
    }
}
