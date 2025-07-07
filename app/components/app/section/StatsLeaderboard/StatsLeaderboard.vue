<template>
    <AppSection
        pretitle="The best players"
        title="Top 100 Leaderboard"
    >
        <div class="flex flex-col gap-16 items-center">
            <Suspense>
                <AppSectionStatsLeaderboardTable />

                <template #fallback>
                    <div class="flex items-center justify-center h-96">
                        <p>Loading...</p>
                    </div>
                </template>
            </Suspense>
        </div>
    </AppSection>
</template>
