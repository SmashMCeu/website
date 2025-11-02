<template>
    <UiButton
        as-child
        variant="ghost"
        class="px-6 py-5"
    >
        <NuxtLinkLocale
            :to="`/shop/${to}`"
            class="flex items-center justify-start gap-2 text-base!"
            active-class="underline"
        >
            <slot />
        </NuxtLinkLocale>
    </UiButton>
</template>

<script setup lang="ts">
defineProps<{
    to: string
}>()
</script>
