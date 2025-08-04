<template>
    <NuxtLinkLocale
        :to="`/shop/${to}`"
        class="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:underline transition duration-200"
        active-class="text-primary"
    >
        <slot />
    </NuxtLinkLocale>
</template>

<script setup lang="ts">
defineProps<{
    to: string
}>()
</script>
