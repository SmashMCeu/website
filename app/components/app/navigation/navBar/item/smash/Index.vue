<template>
    <UiNavigationMenuItem>
        <UiNavigationMenuTrigger>
            <Icon name="lucide:swords" />
            Smash
        </UiNavigationMenuTrigger>
        <UiNavigationMenuContent>
            <ul class="flex flex-col gap-2">
                <AppNavigationNavBarItemSmashCharacters />
                <AppNavigationNavBarItemSmashItems />
                <AppNavigationNavBarItemSmashMaps />
            </ul>
        </UiNavigationMenuContent>
    </UiNavigationMenuItem>
</template>
