interface SmashUserStats {
    playerId: string
    startDate: string
    endDate: string
    gameType: string
    stats: {
        wins?: SmashUserStatsIntCategory
        kills?: SmashUserStatsIntCategory
        items_used?: SmashUserStatsIntCategory
        damage_dealt?: SmashUserStatsIntCategory
        character?: SmashUserStatsStringCategory
        damage_received?: SmashUserStatsIntCategory
        character_wins?: SmashUserStatsStringCategory
        games?: SmashUserStatsIntCategory
        deaths?: SmashUserStatsIntCategory
    }
}

interface SmashUserStatsIntCategory {
    count: number
    sum: number
}

interface SmashUserStatsStringCategory {
    valueDistribution: Record<string, number>
}
