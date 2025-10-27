<template>
    <UiNavigationMenuItem>
        <UiNavigationMenuTrigger>
            <Icon name="lucide:circle-help" />
            Help
        </UiNavigationMenuTrigger>
        <UiNavigationMenuContent>
            <ul class="flex flex-col gap-2">
                <NavigationNavBarItemHelpFAQ />
                <NavigationNavBarItemHelpGuides />
                <NavigationNavBarItemHelpTeam />

                <UiButton
                    size="sm"
                    variant="outline"
                    class="mt-2"
                >
                    <Icon name="custom:discord" />
                    Join our Discord
                </UiButton>
                <UiButton
                    size="sm"
                    variant="outline"
                    class="mt-2"
                >
                    <Icon name="lucide:headphones" />
                    Join our Teamspeak
                </UiButton>
            </ul>
        </UiNavigationMenuContent>
    </UiNavigationMenuItem>
</template>
