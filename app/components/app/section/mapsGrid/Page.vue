<template>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[100rem]">
        <AppSectionMapsGridMap
            v-for="map in maps"
            :key="map.id"
            :map="map"
        />
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    maps?: SmashMap[]
}>()
</script>
