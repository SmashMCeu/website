<template>
    <div class="rounded-lg bg-accent w-60 h-80 flex items-center justify-center">
        <p>{{ category.name }}</p>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    category: ShopCategory
}>()
</script>
