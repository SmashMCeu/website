<template>
    <div class="flex flex-col h-full gap-8">
        <div class="flex items-center gap-8">
            <UiButton
                as-child
                variant="outline"
            >
                <NuxtLinkLocale to="/shop">
                    <Icon name="lucide:chevron-left" />
                    Back
                </NuxtLinkLocale>
            </UiButton>
        </div>

        <ShopProductsList :category-url-name="category" />
    </div>
</template>

<script lang="ts" setup>
const { category } = useRoute().params

if (typeof category !== "string") {
    throw createError({
        statusCode: 400,
        statusMessage: "Invalid category parameter",
        fatal: true,
    })
}

definePageMeta({
    layout: "shop",
})
</script>
