<script setup lang="ts">
const props = defineProps<{
    to: string,
}>()

</script>

<template>
    <NuxtLink :to="to" class="text-textColor/80 transition hover:text-textColor/60"><slot /></NuxtLink>
</template>
