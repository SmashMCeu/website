<template>
    <nav class="z-40 fixed left-0 right-0 top-0 flex items-center justify-between px-8 py-4 border-b bg-background shadow-xs">
        <div class="flex-1 flex items-center">
            <img
                src="/favicon.svg"
                alt="Logo"
                class="size-10 hover:animate-smash-logo"
            >
        </div>
        <div class="flex-none flex justify-center">
            <UiNavigationMenu
                as="div"
                :viewport="false"
            >
                <UiNavigationMenuList class="gap-4">
                    <NavigationNavBarItemHome />
                    <NavigationNavBarItemSmash />
                    <NavigationNavBarItemStats />
                    <NavigationNavBarItemHelp />
                    <NavigationNavBarItemRules />
                </UiNavigationMenuList>
            </UiNavigationMenu>
        </div>
        <div class="flex-1 flex gap-4 justify-end items-center pl-8">
            <ColorSchemeSwitchButton />
            <LanguageSwitchButton />
            <NavigationNavBarItemShop />
        </div>
    </nav>
</template>
