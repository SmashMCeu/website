<template>
    <UiButton as-child>
        <NuxtLinkLocale to="/shop/basket">
            <Icon
                name="lucide:shopping-basket"
                :size="18"
            />
            Basket {{ itemCount !== 0 ? `(${itemCount})` : "" }}
        </NuxtLinkLocale>
    </UiButton>
</template>

<script setup lang="ts">
const { packages } = storeToRefs(useShopBasket())
const itemCount = computed(() => {
    return packages.value.size
})
</script>
