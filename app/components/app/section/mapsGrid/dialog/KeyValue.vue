<template>
    <div class="text-lg font-semibold">
        <p class="text-base text-muted-foreground">
            {{ title }}:
        </p>
        <slot />
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    title: string
}>()
</script>
