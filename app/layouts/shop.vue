<template>
    <div class="px-16">
        <div class="pt-28 flex">
            <NavigationNavBar />
            <div class="flex flex-col gap-8 w-full">
                <ShopNavigationBar />

                <div class="mt-28 px-10 min-h-screen">
                    <div
                        v-if="state.isLoading && categories.length === 0"
                        class="flex flex-col items-center justify-center p-8 text-muted-foreground"
                    >
                        <LoadingIndicator />
                        <p class="text-center">
                            Loading products...
                        </p>
                    </div>
                    <div
                        v-else-if="state.error"
                        class="flex items-center justify-center p-8 text-destructive"
                    >
                        <Icon
                            name="lucide:alert-circle"
                            class="mr-2"
                        />
                        {{ state.error }}
                    </div>
                    <slot v-else />
                </div>
                <Footer />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { loadProducts, categories, state } = useShopProducts()

onMounted(async () => {
    await loadProducts()
})
</script>
