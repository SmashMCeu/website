<template>
    <UiNavigationMenuItem>
        <UiNavigationMenuTrigger>
            <Icon name="lucide:swords" />
            Smash
        </UiNavigationMenuTrigger>
        <UiNavigationMenuContent>
            <ul class="flex flex-col gap-2">
                <NavigationNavBarItemSmashCharacters />
                <NavigationNavBarItemSmashItems />
                <NavigationNavBarItemSmashMaps />
            </ul>
        </UiNavigationMenuContent>
    </UiNavigationMenuItem>
</template>
