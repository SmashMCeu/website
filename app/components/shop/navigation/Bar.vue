<template>
    <div class="fixed z-30 left-16 right-16 bg-background/75 backdrop-blur-xl border p-4 rounded-lg flex items-center justify-between">
        <div class="flex items-center gap-6">
            <NuxtLinkLocale
                to="/shop"
                class="text-lg font-semibold"
            >
                SmashMC Shop
            </NuxtLinkLocale>

            <UiButton
                as-child
                variant="link"
            >
                <NuxtLinkLocale to="/shop">
                    <Icon name="lucide:shopping-cart" />
                    Our Products
                </NuxtLinkLocale>
            </UiButton>
        </div>

        <div class="flex gap-4">
            <ShopNavigationAccount />
            <ShopNavigationBasket />
        </div>
    </div>
</template>
