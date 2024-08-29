<template>
    <div class="relative flex items-center justify-center group">
        <img class="bg-backgroundColorLight w-full aspect-video group-hover:brightness-50 group-hover:scale-105 transition-all rounded-xl" :src="useSmashMaps().getSmashMapImage(map.image)" :alt="map.image"/>
        <p class="group-hover:scale-150 group-hover:opacity-100 opacity-0 transition-all absolute text-textColorLight text-lg font-semibold">{{ map.name }}</p>
    </div>
</template>
<script lang="ts" setup>
    
    defineProps<{
        map: SmashMap
    }>();

</script>