<template>
    <AppSection
        pretitle="What are you looking for?"
        title="Shop Categories"
    >
        <div class="mt-20 flex items-center justify-center">
            <ShopCategories />
        </div>
    </AppSection>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: "shop",
})
</script>
