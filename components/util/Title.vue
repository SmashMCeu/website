<template>
    <div class="pb-12 flex flex-col" :class="orientation == 'left' ? 'items-start' : (orientation == 'middle' ? 'items-center' : 'items-end')">
        <p class="text-primary font-bold tracking-wide">{{ subtitle }}</p>
        <p class="text-textColorLight text-3xl font-bold"
            :class="orientation == 'left' ? 'text-start' : (orientation == 'middle' ? 'text-center' : 'text-end')">
            {{ title }}
        </p>
    </div>
</template>
<script lang="ts" setup>

    withDefaults(
        defineProps<{
            title: string,
            subtitle: string,
            orientation?: "left" | "middle" | "right"
        }>(),
        {
            orientation: "middle"
        }
    )

</script>