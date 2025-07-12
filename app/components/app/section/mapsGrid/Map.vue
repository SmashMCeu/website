<template>
    <div class="bg-accent relative rounded-lg overflow-hidden select-none hover:scale-105 transition-transform duration-200 cursor-pointer">
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

const { data: img } = await useAsyncData(`map-thumbnail-${props.map.id}`, async () => {
    return await useSmashMaps().getThumbnail(props.map.id)
}, { watch: [() => props.map.id] })
</script>
