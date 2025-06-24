<template>
    <UiNavigationMenuItem>
        <UiNavigationMenuTrigger>
            <Icon name="lucide:crown" />
            Stats
        </UiNavigationMenuTrigger>
        <UiNavigationMenuContent>
            <ul class="flex flex-col gap-2">
                <NavigationNavBarItemStatsLeaderboard />
                <NavigationNavBarItemStatsSearch />
            </ul>
        </UiNavigationMenuContent>
    </UiNavigationMenuItem>
</template>
