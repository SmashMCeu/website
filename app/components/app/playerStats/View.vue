<template>
    <div class="flex justify-between gap-4 py-4 overflow-y-auto px-6">
        <div class="flex flex-col gap-4 grow items-center">
            <McSkinRender3d
                :skin-url="useMcIdentity().getTexture(playerIdentity).textures.SKIN?.url"
                :cape-url="useMcIdentity().getTexture(playerIdentity).textures.CAPE?.url"
                :width="125"
                :height="200"
                :auto-rotate="true"
                allow-pan
                allow-rotate
                allow-zoom
                class="bg-muted/50 rounded-lg border"
            />
            <AppPlayerStatsPlaytimeInfo :player-identity="playerIdentity" />
        </div>

        <div class="flex flex-col gap-8">
            <div class="grid grid-cols-2 gap-4">
                <AppPlayerStatsIntCard
                    name="Wins"
                    :stats="stats?.stats.wins.count"
                >
                    <Icon
                        name="lucide:crown"
                        :size="20"
                    />
                </AppPlayerStatsIntCard>
                <AppPlayerStatsIntCard
                    name="Losses"
                    :stats="stats == undefined ? undefined : stats.stats.games.count - stats.stats.wins.count"
                >
                    <Icon
                        name="lucide:frown"
                        :size="20"
                    />
                </AppPlayerStatsIntCard>
                <AppPlayerStatsIntCard
                    name="Kills"
                    :stats="stats?.stats.kills.count"
                >
                    <Icon
                        name="lucide:sword"
                        :size="20"
                    />
                </AppPlayerStatsIntCard>
                <AppPlayerStatsIntCard
                    name="Deaths"
                    :stats="stats?.stats.deaths.count"
                >
                    <Icon
                        name="lucide:skull"
                        :size="20"
                    />
                </AppPlayerStatsIntCard>
                <AppPlayerStatsIntCard
                    name="Damage Dealt"
                    :stats="stats?.stats.damage_dealt.count"
                >
                    <Icon
                        name="lucide:biceps-flexed"
                        :size="20"
                    />
                </AppPlayerStatsIntCard>
                <AppPlayerStatsIntCard
                    name="Damage Received"
                    :stats="stats?.stats.damage_received.count"
                >
                    <Icon
                        name="lucide:ambulance"
                        :size="20"
                    />
                </AppPlayerStatsIntCard>
                <AppPlayerStatsIntCard
                    name="Items Used"
                    :stats="stats?.stats.items_used.count"
                >
                    <Icon
                        name="lucide:pickaxe"
                        :size="20"
                    />
                </AppPlayerStatsIntCard>
            </div>
            <div class="grid grid-cols-1 gap-4">
                <AppPlayerStatsCharacterCard
                    name="Most Played Character"
                    :char-name="mostPlayedCharacter?.[0]"
                    :count="mostPlayedCharacter?.[1]"
                >
                    <Icon
                        name="lucide:person-standing"
                        :size="20"
                    />
                </AppPlayerStatsCharacterCard>
                <AppPlayerStatsCharacterCard
                    name="Most Wins with Character"
                    :char-name="mostWinsWithCharacter?.[0]"
                    :count="mostWinsWithCharacter?.[1]"
                >
                    <Icon
                        name="lucide:crown"
                        :size="20"
                    />
                </AppPlayerStatsCharacterCard>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    playerIdentity: McIdentity
}>()

const { data: stats } = await useAsyncData(async () => {
    return await useSmashStats().getPlayerAlltimeStats(props.playerIdentity.uuid)
})

const mostPlayedCharacter = computed(() => {
    if (!stats.value) return undefined
    const chars = stats.value.stats.character.valueDistribution
    return Object.entries(chars).reduce((a, b) => {
        return a[1] > b[1] ? a : b
    })
})

const mostWinsWithCharacter = computed(() => {
    if (!stats.value) return undefined
    const chars = stats.value.stats.character_wins.valueDistribution
    return Object.entries(chars).reduce((a, b) => {
        return a[1] > b[1] ? a : b
    })
})
</script>
