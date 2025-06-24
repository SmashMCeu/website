<template>
    <section class="flex flex-col gap-8">
        <div class="flex flex-col items-center text-center">
            <p class="text-sm tracking-wider uppercase text-muted-foreground">
                {{ pretitle }}
            </p>
            <h2 class="text-4xl font-bold tracking-tight">
                {{ title }}
            </h2>
        </div>

        <slot />
    </section>
</template>

<script lang="ts" setup>
defineProps<{
    pretitle?: string
    title: string
}>()
</script>
