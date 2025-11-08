<template>
    <NuxtLinkLocale
        :to="`/shop/${urlName(subCategory.parent?.name || '')}/${urlName(subCategory.name)}`"
        class="px-4 py-8 rounded-lg border flex flex-col gap-4 items-center hover:bg-accent/50 transition duration-200 hover:scale-105"
    >
        <img
            v-if="subCategory.image_url"
            :src="subCategory.image_url"
            :alt="`${subCategory.name} image as 3d text`"
            class="w-48"
        >
        <Icon
            v-else
            name="lucide:package"
            :size="48"
        />
        <h3 class="text-lg font-semibold">
            {{ subCategory.name }}
        </h3>
    </NuxtLinkLocale>
</template>

<script setup lang="ts">
import type { ShopCategory } from "~~/shared/types/ShopCategory"

const urlName = useShopProducts().getProductOrCategoryUrlName

const props = defineProps<{
    subCategory: ShopCategory
}>()

if (!props.subCategory.parent) {
    throw createError({
        statusCode: 500,
        statusMessage: "Sub-category must have a parent category",
        fatal: true,
    })
}
</script>
