<template>
    <NuxtLinkLocale
        :to="`/shop/${urlName(category.name)}`"
        class="rounded-lg bg-accent/25 border w-60 h-80 flex items-center justify-center hover:scale-105 hover:bg-accent/50 transition duration-200"
    >
        <img
            v-if="category.image_url"
            :src="category.image_url"
            alt="Category image"
        >
        <p class="text-xl font-semibold">
            {{ category.name }}
        </p>
    </NuxtLinkLocale>
</template>

<script lang="ts" setup>
defineProps<{
    category: ShopCategory
}>()

const urlName = useShopProducts().getProductOrCategoryUrlName
</script>
