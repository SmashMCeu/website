<template>
    <div class="flex flex-wrap justify-center items-center gap-20 mb-10">
        <ShopCategoriesItem
            v-for="category in shopCategories"
            :key="category.id"
            :category="category"
        />
    </div>
</template>

<script lang="ts" setup>
const { categories } = storeToRefs(useShopProducts())

const shopCategories = computed(() => {
    return categories.value.filter(category => category.parent === null)
})
</script>
