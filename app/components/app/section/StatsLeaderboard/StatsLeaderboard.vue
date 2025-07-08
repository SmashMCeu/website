<template>
    <AppSection
        pretitle="The best players"
        title="Top 100 Leaderboard"
    >
        <div class="flex flex-col gap-4 items-center">
            <AppPlayerStatsMonthlyAlltimeToggle v-model:model-value="state" />

            <Suspense>
                <AppSectionStatsLeaderboardTable :state="state" />

                <template #fallback>
                    <div class="flex items-center justify-center h-96">
                        <p>Loading...</p>
                    </div>
                </template>
            </Suspense>
        </div>
    </AppSection>
</template>

<script lang="ts" setup>
const state = ref<"monthly" | "alltime">("monthly")
</script>
