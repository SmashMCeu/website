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
    return useShop().getCategories()
}, {
    getCachedData(key, nuxtApp) {
        const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
        if (!data) {
            return
        }

        const expirationDate = new Date(data.fetchedAt)
        expirationDate.setTime(expirationDate.getTime() + 10 * 60 * 1000) // 10 minutes
        const isExpired = expirationDate < new Date()
        if (isExpired) {
            return
        }

        return data
    },
})

if (categories.value && !error.value) {
    useShopStore().categories = categories.value
}
</script>
