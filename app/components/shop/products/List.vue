<template>
    <div v-if="category">
        <div class="flex gap-10">
            <ShopProductsItem
                v-for="product in subCategories"
                :key="product.id"
                :sub-category="product"
            />
        </div>
    </div>
    <div
        v-else
        class="grow p-4 flex items-center justify-center max-h-96"
    >
        <div class="text-muted-foreground flex flex-col items-center gap-2">
            <Icon
                name="lucide:alert-triangle"
                :size="32"
            />
            <h1 class="text-lg font-semibold text-center">
                Product not found
            </h1>
            <p class="mt-2 text-center max-w-64">
                Take a look at all products currently available in our shop.
            </p>
            <UiButton as-child>
                <NuxtLinkLocale to="/shop">
                    <Icon name="lucide:shopping-cart" />
                    Explore Products
                </NuxtLinkLocale>
            </UiButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    categoryUrlName: string
}>()

const shopStore = useShopProducts()

// Load products if needed
await shopStore.loadProducts()

const category = computed(() => shopStore.findCategoryByUrlName(props.categoryUrlName))

const subCategories = computed(() => {
    if (!category.value) return []
    return shopStore.getSubCategories(category.value.id)
})
</script>
