<template>
    <div class="grid grid-cols-3 gap-6">
        <div v-for="map of maps" class="relative flex items-center justify-center">
            <img class="rounded-xl" :src="useSmashMaps().getSmashMapImage(map.image)" :alt="map.image">
            <p class="absolute bottom-2 text-black/75 text-lg font-semibold">{{ map.name }}</p>
        </div>
    </div>
</template>
<script lang="ts" setup>

    const maps: Ref<SmashMap[]> = ref(await useSmashMaps().getSmashMaps());

</script>