<template>
    <div class="px-4 py-2 flex flex-col gap-2 bg-accent/50 border border-card rounded-lg shadow-xs shadow-card">
        <p class="text-xl font-semibold capitalize">
            {{ categoryKey }}:
        </p>
        <p>{{ statsCategory.count }}</p>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    statsCategory: SmashUserStatsIntCategory
    categoryKey: string
}>()
</script>
