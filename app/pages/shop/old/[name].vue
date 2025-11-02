<template>
    <div class="flex flex-col h-full gap-8">
        <div>
            <UiButton
                as-child
                variant="outline"
            >
                <NuxtLinkLocale to="/shop">
                    <Icon name="lucide:chevron-left" />
                    Back
                </NuxtLinkLocale>
            </UiButton>
        </div>

        <NuxtErrorBoundary>
            <ShopProductView :product-name="name" />

            <template #error>
                <div class="grow p-4 flex items-center justify-center max-h-96">
                    <div class="text-muted-foreground flex flex-col items-center gap-2">
                        <Icon
                            name="lucide:alert-triangle"
                            :size="32"
                        />
                        <h1 class="text-lg font-semibold">
                            Product not found
                        </h1>
                    </div>
                </div>
            </template>
        </NuxtErrorBoundary>
    </div>
</template>

<script lang="ts" setup>
const name = useRoute().params.name as string

if (useShopStore().products.length === 0) {
    await useShopStore().backgroundFetchData()
}

definePageMeta({
    layout: "shop",
})

useSeoMeta({ // TODO: maybe set this dynamically based on product data and if it exists
    title: "Shop Product - " + name,
    description: "TODO: SPÄTER SCHREIBEN",
})
</script>
