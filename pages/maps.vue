<template>
    <div class="grid grid-cols-3 gap-6">
        <div v-for="map of maps" class="relative flex items-center justify-center group">
            <img class="group-hover:brightness-50 group-hover:scale-105 transition-all rounded-xl" :src="useSmashMaps().getSmashMapImage(map.image)" :alt="map.image">
            <p class="group-hover:scale-150 group-hover:opacity-100 opacity-0 transition-all absolute text-textColorLight text-lg font-semibold">{{ map.name }}</p>
        </div>
    </div>
</template>
<script lang="ts" setup>

    const maps: Ref<SmashMap[]> = ref(await useSmashMaps().getSmashMaps());

</script>