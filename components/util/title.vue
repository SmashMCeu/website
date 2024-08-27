<template>
    <div class="flex flex-col" :class="orientation == 'left' ? 'items-start' : (orientation == 'middle' ? 'items-center' : 'items-end')">
        <p class="text-primary font-bold tracking-wide">{{ subtitle }}</p>
        <p class="text-textColorLight text-3xl font-bold">{{ title }}</p>
    </div>
</template>
<script lang="ts" setup>

    defineProps({
        title: String,
        subtitle: String,
        orientation: {
            required: false,
            type: String as PropType<"left" | "middle" | "right">,
            default: "middle"
        }
    });

</script>