<template>
    <UiNavigationMenuItem>
        <UiNavigationMenuTrigger>
            <Icon name="lucide:crown" />
            Stats
        </UiNavigationMenuTrigger>
        <UiNavigationMenuContent>
            <ul class="flex flex-col gap-2">
                <AppNavigationNavBarItemStatsLeaderboard />
                <AppNavigationNavBarItemStatsSearch />
            </ul>
        </UiNavigationMenuContent>
    </UiNavigationMenuItem>
</template>
