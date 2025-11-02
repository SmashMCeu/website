<template>
    <div class="space-y-12">
        <h1 class="text-3xl font-bold">
            Products
        </h1>
        <Suspense>
            <ShopCategoryList />

            <template #fallback>
                <div class="text-muted-foreground flex items-center gap-2">
                    <LoadingIndicator />
                    <p>Loading products...</p>
                </div>
            </template>
        </Suspense>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: "shop",
})

useSeoMeta({
    title: "Shop",
    description: "TODO: SPÄTER SCHREIBEN",
})
</script>
