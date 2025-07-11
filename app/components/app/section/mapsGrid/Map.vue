<template>
    <div class="bg-accent relative rounded-lg overflow-hidden select-none">
        <img
            :src="img"
            alt="Map Thumbnail"
            class="w-full"
        >
        <div class="absolute inset-0 flex items-end justify-center bg-gradient-to-b from-transparent to-black/65 p-4">
            <p class="text-xl font-semibold">
                {{ map.name }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    map: SmashMap
}>()

const img = await useSmashMaps().getThumbnail(props.map.id)
</script>
