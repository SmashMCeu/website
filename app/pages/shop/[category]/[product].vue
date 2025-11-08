<template>
    <div>
        <div class="flex items-center gap-8">
            <UiButton
                as-child
                variant="outline"
            >
                <NuxtLinkLocale :to="`/shop/${category}`">
                    <Icon name="lucide:chevron-left" />
                    Back to: {{ categoryData?.name || category }}
                </NuxtLinkLocale>
            </UiButton>
        </div>
        <div
            v-if="categoryData"
            class="mt-10"
        >
            <ShopProductView
                :product="categoryData"
                :variants="productVariants || []"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { category, product } = route.params

if (typeof category !== "string" || typeof product !== "string") {
    throw createError({
        statusCode: 400,
        statusMessage: "Invalid category or product parameter",
        fatal: true,
    })
}

const shop = useShopProducts()
const categoryData = shop.findCategoryByUrlName(category)
const productVariants = shop.getProductByUrlName(product)

definePageMeta({
    layout: "shop",
})
</script>
