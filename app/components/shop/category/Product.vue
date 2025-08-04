<template>
    <NuxtLinkLocale
        :to="`/shop/${product.name.toLowerCase().replace(/ /g, '')}`"
        class="px-4 py-8 rounded-lg border flex flex-col gap-4 items-center hover:bg-accent/50 transition duration-200 hover:scale-105"
    >
        <img
            v-if="product.image"
            :src="product.image"
            :alt="`${product.name} image as 3d text`"
            class="w-48"
        >
        <Icon
            v-else
            name="lucide:package"
            :size="48"
        />
        <h3 class="text-lg font-semibold">
            {{ product.name }}
        </h3>
    </NuxtLinkLocale>
</template>

<script setup lang="ts">
defineProps<{
    product: ShopProduct
}>()
</script>
