<template>
    <div class="flex flex-col gap-1">
        <ShopSidebarNavigationLink to="">
            <Icon name="lucide:layout-list" />
            Products
        </ShopSidebarNavigationLink>
        <ShopSidebarNavigationLink
            to="checkout"
            class="relative"
        >
            <Icon name="lucide:shopping-cart" />
            Checkout
            <span
                v-if="count > 0"
                class="absolute right-1 top-2 bg-red-400 size-4 rounded-full text-xs text-white font-semibold flex items-center justify-center"
            >
                {{ count }}
            </span>
        </ShopSidebarNavigationLink>
    </div>
</template>

<script setup lang="ts">
const cartItemsCount = computed(() => useShopStore().cartItems)
const count = computed(() => cartItemsCount.value.reduce((total, item) => total + item.quantity, 0))
</script>
