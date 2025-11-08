<template>
    <div>
        <AppSection
            pretitle="Your Basket"
            title="Items in your basket"
        >
            <p>Items:</p>
            <ul class="list-disc list-inside">
                <li
                    v-for="item in items"
                    :key="item.id"
                >
                    {{ item.name }}
                </li>
            </ul>
        </AppSection>
    </div>
</template>

<script lang="ts" setup>
const { basket } = useShopBasket()
const items = computed(() => {
    return basket?.packages || []
})

definePageMeta({
    layout: "shop",
})
</script>
