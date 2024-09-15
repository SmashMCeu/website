<template>
    <div class="relative flex items-center justify-center group select-none">
        <img loading="lazy" class="bg-backgroundColorLight w-full aspect-video group-hover:brightness-[35%] group-hover:scale-105 transition-all rounded-xl" :src="useSmashMaps().getMapImageUrl(map)"/>
        <div class="group-hover:scale-150 group-hover:opacity-100 opacity-0 transition-all absolute text-center">
            <p class="text-textColorLight text-xl font-bold">{{ map.name }}</p>
            <p class="text-textColor text-sm font-semibold">von {{ map.builtBy }}</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
    
    defineProps<{
        map: SmashMap
    }>();

</script>