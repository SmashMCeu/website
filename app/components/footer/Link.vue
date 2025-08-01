<template>
    <NuxtLinkLocale
        :to="to"
        class="cursor-pointer left-right-hover-underline w-fit"
    >
        <slot />
    </NuxtLinkLocale>
</template>

<script lang="ts" setup>
defineProps<{
    to: string
}>()
</script>
