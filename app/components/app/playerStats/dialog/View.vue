<template>
    <div class="flex flex-col gap-4 items-center">
        <AppPlayerStatsMonthlyAlltimeToggle v-model:model-value="state" />

        <div class="flex flex-col sm:flex-row justify-between sm:gap-4 gap-16 py-4 overflow-y-auto px-6">
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
                <AppPlayerStatsDialogPlaytimeInfo :player-identity="playerIdentity" />
            </div>

            <div class="flex flex-col gap-8 items-center sm:items-start">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <AppPlayerStatsDialogIntCard
                        name="Wins"
                        :stats="stats?.stats.wins == undefined ? 0 : stats.stats.wins.sum"
                    >
                        <Icon
                            name="lucide:crown"
                            :size="20"
                        />
                    </AppPlayerStatsDialogIntCard>
                    <AppPlayerStatsDialogIntCard
                        name="Losses"
                        :stats="(stats?.stats.games == undefined ? 0 : stats.stats.games.sum) - (stats?.stats.wins == undefined ? 0 : stats.stats.wins.sum)"
                    >
                        <Icon
                            name="lucide:frown"
                            :size="20"
                        />
                    </AppPlayerStatsDialogIntCard>
                    <AppPlayerStatsDialogIntCard
                        name="Kills"
                        :stats="stats?.stats.kills == undefined ? 0 : stats.stats.kills.sum"
                    >
                        <Icon
                            name="lucide:sword"
                            :size="20"
                        />
                    </AppPlayerStatsDialogIntCard>
                    <AppPlayerStatsDialogIntCard
                        name="Deaths"
                        :stats="stats?.stats.deaths == undefined ? 0 : stats.stats.deaths.sum"
                    >
                        <Icon
                            name="lucide:skull"
                            :size="20"
                        />
                    </AppPlayerStatsDialogIntCard>
                    <AppPlayerStatsDialogIntCard
                        name="Damage Dealt"
                        :stats="stats?.stats.damage_dealt == undefined ? 0 : stats.stats.damage_dealt.sum"
                    >
                        <Icon
                            name="lucide:biceps-flexed"
                            :size="20"
                        />
                    </AppPlayerStatsDialogIntCard>
                    <AppPlayerStatsDialogIntCard
                        name="Damage Received"
                        :stats="stats?.stats.damage_received == undefined ? 0 : stats.stats.damage_received.sum"
                    >
                        <Icon
                            name="lucide:ambulance"
                            :size="20"
                        />
                    </AppPlayerStatsDialogIntCard>
                    <AppPlayerStatsDialogIntCard
                        name="Items Used"
                        :stats="stats?.stats.items_used == undefined ? 0 : stats.stats.items_used.sum"
                    >
                        <Icon
                            name="lucide:pickaxe"
                            :size="20"
                        />
                    </AppPlayerStatsDialogIntCard>
                </div>
                <div class="grid grid-cols-1 gap-4">
                    <AppPlayerStatsDialogCharacterCard
                        name="Most Played Character"
                        :char-name="mostPlayedCharacter?.[0]"
                        :sum="mostPlayedCharacter?.[1]"
                    >
                        <Icon
                            name="lucide:person-standing"
                            :size="20"
                        />
                    </AppPlayerStatsDialogCharacterCard>
                    <AppPlayerStatsDialogCharacterCard
                        name="Most Wins with Character"
                        :char-name="mostWinsWithCharacter?.[0]"
                        :sum="mostWinsWithCharacter?.[1]"
                    >
                        <Icon
                            name="lucide:crown"
                            :size="20"
                        />
                    </AppPlayerStatsDialogCharacterCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    playerIdentity: McIdentity
}>()

const state = ref<"monthly" | "alltime">("alltime")

const { data: stats } = await useAsyncData(async () => {
    if (state.value === "monthly") {
        return useSmashStats().getPlayerMonthlyStats(props.playerIdentity.uuid)
    } else {
        return useSmashStats().getPlayerAlltimeStats(props.playerIdentity.uuid)
    }
}, { watch: [() => state.value, () => props.playerIdentity.uuid] })

const mostPlayedCharacter = computed(() => {
    if (!stats.value || !stats.value.stats.character) return undefined
    const chars = stats.value.stats.character.valueDistribution
    return Object.entries(chars).reduce((a, b) => {
        return a[1] > b[1] ? a : b
    })
})

const mostWinsWithCharacter = computed(() => {
    if (!stats.value || !stats.value.stats.character_wins) return undefined
    const chars = stats.value.stats.character_wins.valueDistribution
    return Object.entries(chars).reduce((a, b) => {
        return a[1] > b[1] ? a : b
    })
})
</script>
