<script setup lang="ts">
    import type { ModelRef } from 'vue';


    const isOpen: ModelRef<boolean> = defineModel<boolean>({default: false});

</script>
<template>
    <UButton variant="outline" @click="isOpen = !isOpen" :icon="isOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" size="xl" square class="child:size-8 text-xl p-2"/>
</template>