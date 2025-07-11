interface SmashMap {
    id: string
    name: string
    type: string | "smash" | "lobby"
    owner: string
    icon: {
        userSelected: boolean
        materialId: number
        materialData: number
    }
    dateCreated: string
    dateUpdated: string
    status: "VALID" | "INVALID"
    visibility: "PUBLIC" | "PRIVATE"
    timesPlayed: number
    approved: boolean
    contributorCount: number
}
