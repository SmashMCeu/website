<template>
    <UiNavigationMenuItem>
        <UiNavigationMenuTrigger>
            <Icon name="lucide:circle-help" />
            Help
        </UiNavigationMenuTrigger>
        <UiNavigationMenuContent>
            <ul class="flex flex-col gap-2">
                <AppNavigationNavBarItemHelpQaA />
                <AppNavigationNavBarItemHelpGuides />
                <AppNavigationNavBarItemHelpTeam />

                <UiButton
                    size="sm"
                    variant="outline"
                    class="mt-2"
                >
                    Join our Discord
                </UiButton>
            </ul>
        </UiNavigationMenuContent>
    </UiNavigationMenuItem>
</template>
