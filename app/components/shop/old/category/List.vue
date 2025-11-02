<template>
    <div class="space-y-24">
        <ShopCategory
            v-for="category in categories"
            :key="category.name"
            :category="category"
        />
    </div>
</template>

<script lang="ts" setup>
const { data: categories, error } = await useAsyncData("shop-categories", () => {
    if (useShopStore().categories.length > 0) {
        return Promise.resolve(useShopStore().categories)
    }
    return useShop().getCategories()
})

if (categories.value && !error.value) {
    useShopStore().categories = categories.value
}
</script>
