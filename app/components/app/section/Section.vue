<template>
    <section class="flex flex-col gap-8">
        <div
            class="flex flex-col"
            :class="{
                'items-start text-left': align === 'left',
                'items-center text-center': align === 'center',
                'items-end text-right': align === 'right',
            }"
        >
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
withDefaults(defineProps<{
    pretitle?: string
    title: string
    align?: "left" | "center" | "right"
}>(), {
    align: "center",
})
</script>
