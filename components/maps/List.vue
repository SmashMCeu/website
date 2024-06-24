<template>
    
    <div v-for="map of maps" :style="{ backgroundImage: `url('${map.image}')` }" 
        class="mapCard cursor-pointer rounded-lg flex items-center justify-center relative bg-center bg-cover aspect-video"
        data-aos="zoom-in" data-aos-duration="250">

        <p class="font-bold text-3xl text-center text-white z-10 opacity-0 transition-all">{{ map.name }}</p>
        <div class="absolute top-0 left-0 bottom-0 right-0 backdrop-blur-[4px] rounded-lg opacity-0 transition-opacity"></div>

    </div>
    
</template>
<script setup lang="ts">

    const maps = ref(await useGithubContent().getAllMaps());
    

</script>
<style>

    .mapCard:hover > div {
        opacity: 1 !important;
    }
    .mapCard:hover > p {
        opacity: 0.75 !important;
    }


</style>