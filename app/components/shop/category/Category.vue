<template>
    <div class="space-y-4">
        <h2 class="text-xl font-bold">
            {{ category.name }}
        </h2>
        <div class="flex flex-wrap gap-4">
            <ShopCategoryProduct
                v-for="product in category.products"
                :key="product.name"
                :product="product"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    category: ShopCategory
}>()
</script>
