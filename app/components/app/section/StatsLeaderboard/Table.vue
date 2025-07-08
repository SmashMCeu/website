<template>
    <div>
        <UiTable>
            <UiTableHeader>
                <UiTableRow>
                    <UiTableHead>
                        #
                    </UiTableHead>
                    <UiTableHead>Player</UiTableHead>
                    <UiTableHead />
                </UiTableRow>
            </UiTableHeader>
            <UiTableBody>
                <UiTableRow
                    v-for="player in top100Players"
                    :key="player.place"
                >
                    <UiTableCell class="font-semibold">
                        {{ player.place }}.
                    </UiTableCell>
                    <UiTableCell>
                        <div class="flex items-center gap-2 min-w-48">
                            <McSkinRender2dHead
                                class="size-5"
                                :skin-url="useMcIdentity().getTexture(player.identity).textures.SKIN?.url"
                            />
                            <p>{{ player.identity.name }}</p>
                        </div>
                    </UiTableCell>
                    <UiTableCell>
                        <AppPlayerStatsDialogOverlay :player-identity="player.identity">
                            <UiButton
                                variant="outline"
                                size="sm"
                            >
                                <Icon name="lucide:bar-chart-2" />
                                Show Stats
                            </UiButton>
                        </AppPlayerStatsDialogOverlay>
                    </UiTableCell>
                </UiTableRow>
            </UiTableBody>
        </UiTable>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    state: "monthly" | "alltime"
}>()

const { data: top100Players } = await useAsyncData(async () => {
    const identities = await useSmashStats().getTopPlayersWithIdentities(props.state == "monthly", 100)
    return identities.map((identity, index) => ({
        place: index + 1,
        identity,
    }))
}, { watch: [() => props.state] })
</script>
