<template>
    <AppSection
        pretitle="The Best of the Best"
        title="Top 5 Players"
    >
        <div class="flex flex-col gap-16 items-center">
            <AppSectionTopFivePlayersMonthlyAlltimeToggle v-model:model-value="state" />

            <div class="space-y-8">
                <div class="flex gap-4 items-end">
                    <AppSectionTopFivePlayersPlayerPodium
                        v-for="i in 3"
                        :key="i"
                        :place="i == 1 ? 2 : i == 2 ? 1 : 3"
                        :player-uuid="`player-${i}`"
                    />
                </div>

                <UiTable>
                    <UiTableBody>
                        <UiTableRow>
                            <UiTableCell class="font-semibold w-2!">
                                4.
                            </UiTableCell>
                            <UiTableCell>
                                PlayerNumber4
                            </UiTableCell>
                        </UiTableRow>
                        <UiTableRow>
                            <UiTableCell class="font-semibold w-2!">
                                5.
                            </UiTableCell>
                            <UiTableCell>
                                PlayerNumber5
                            </UiTableCell>
                        </UiTableRow>
                    </UiTableBody>
                </UiTable>

                <p class="text-muted-foreground text-sm text-center">
                    The Top 5 Players of the month get the PRO RANK for FREE!
                </p>
            </div>

            <div>
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
    </AppSection>
</template>

<script lang="ts" setup>
const state: Ref<"monthly" | "alltime"> = ref("monthly")
</script>
