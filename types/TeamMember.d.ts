interface TeamMember {
    id: string;
    minecraftUuid: string;
    joinedAt: string;
    isAdmin: boolean;
    discordTag: string;
    domains: TeamDomain[];
    created: string;
    updated: string;
    collectionId: string;
    collectionName: string;

    expand?: {
        domains: TeamDomain[];
    }
}