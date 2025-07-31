<template>
    <div class="bg-accent relative rounded-lg overflow-hidden select-none hover:scale-105 transition-transform duration-200 cursor-pointer">
        <img
            :src="map.image || fallbackImageUrl"
            alt="Map Thumbnail"
            class="w-full"
        >
        <div class="absolute inset-0 flex items-end justify-center bg-gradient-to-b from-50% from-transparent to-black/75 p-2">
            <div class="flex items-center gap-2 text-white">
                <p class="text-xl font-semibold">
                    {{ map.name }}
                </p>
                <Icon
                    name="lucide:arrow-right"
                    :size="18"
                    class="mt-1"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    map: SmashMap
}>()

const fallbackImageUrl = "https://pocket.smashmc.eu/api/files/m3jdcbgppibfsan/UNKNOWN-MAP-IMG/unknown_52crufWpsk.webp"
</script>
