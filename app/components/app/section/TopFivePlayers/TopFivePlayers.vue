<template>
    <AppSection
        pretitle="The Best of the Best"
        title="Top 5 Players"
    >
        <div class="flex flex-col gap-16 items-center">
            <AppPlayerStatsMonthlyAlltimeToggle v-model:model-value="state" />

            <div class="space-y-8">
                <div class="flex gap-4 items-end">
                    <AppSectionTopFivePlayersPlayerPodium
                        v-for="player in topThreePodium"
                        :key="player.place"
                        :place="(player.place as 1 | 2 | 3)"
                        :player-identity="player.identity"
                    />
                </div>

                <UiTable>
                    <UiTableBody>
                        <UiTableRow
                            v-for="player in remainingPlayers"
                            :key="player.place"
                        >
                            <UiTableCell class="font-semibold w-2!">
                                {{ player.place }}.
                            </UiTableCell>
                            <UiTableCell class="flex items-center gap-2">
                                <McSkinRender2dHead
                                    class="size-5"
                                    :skin-url="useMcIdentity().getTexture(player.identity).textures.SKIN?.url"
                                />
                                <p>{{ player.identity.name }}</p>
                            </UiTableCell>
                        </UiTableRow>
                    </UiTableBody>
                </UiTable>

                <p class="text-muted-foreground text-sm text-center">
                    The Top 5 Players of the month get the PRO RANK for FREE!
                </p>

                <div class="flex justify-center">
                    <NuxtLink
                        as-child
                        to="/stats/leaderboard"
                    >
                        <UiButton
                            variant="secondary"
                            class="w-full max-w-xs"
                        >
                            <Icon
                                name="lucide:list-ordered"
                                :size="20"
                            />
                            View Leaderboard
                        </UiButton>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </AppSection>
</template>

<script lang="ts" setup>
// TODO: fallbvak skin url / texture for 2d and 3d renderers

const state = ref<"monthly" | "alltime">("monthly")

interface TopPlayer {
    place: 1 | 2 | 3 | 4 | 5
    identity: McIdentity
}

const podiumOrder = [2, 1, 3]

const { data: topFivePlayers } = useAsyncData<TopPlayer[]>(async () => {
    const identities: McIdentity[] = await useSmashStats().getTopPlayersWithIdentities(state.value == "monthly", 5)

    return identities.map((identity, index) => ({
        place: (index + 1) as 1 | 2 | 3 | 4 | 5,
        identity,
    }))
}, { watch: [state] })

const topThreePodium = computed(() => {
    if (!topFivePlayers.value) {
        return []
    }

    return topFivePlayers.value
        .filter(player => podiumOrder.includes(player.place))
        .sort((a, b) => podiumOrder.indexOf(a.place) - podiumOrder.indexOf(b.place))
})

const remainingPlayers = computed(() => {
    if (!topFivePlayers.value) {
        return []
    }

    return topFivePlayers.value.filter(player => !podiumOrder.includes(player.place))
})
</script>
