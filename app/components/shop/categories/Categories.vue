<template>
    <div class="grid items-center gap-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <ShopCategoriesItem
            v-for="category in shopCategories"
            :key="category.id"
            :category="category"
        />
        <p>
            {{ packages }}
        </p>
    </div>
</template>

<script lang="ts" setup>
const { categories, packages } = storeToRefs(useShopProducts())
const shopCategories = computed(() => {
    return categories.value.filter(category => category.parent === null)
})
</script>
