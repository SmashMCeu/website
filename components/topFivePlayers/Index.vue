<template>
   <div class="flex flex-wrap justify-center gap-4">
        <div data-aos="fade-up" :data-aos-delay="50*index"  class="w-full max-w-52 rounded-lg bg-backgroundColorLight py-4 flex flex-col items-center gap-4" v-for="(player, index) of topFivePlayers" :key="player.uuid">
            <p class="sm:text-lg text-base font-semibold text-nowrap">{{ index + 1 }}. {{ player.name }}</p>
            <!--<LazySkinRenderer :skin-image="player.texture" :is-slim="player.slimSkin" static :userRotate="false" />-->
            <SkinVZGERenderer2d :playerUUID="player.uuid" class="p-4"/>
        </div>
    </div> 
</template>
<script lang="ts" setup>
    import type { TopUser } from '~/types/TopUser';

    const topFivePlayers: Ref<TopUser[]> = ref<TopUser[]>([]);

    const { data: response } = await useFetch<Array<TopUser>>(`/api/stats/top`);
    
    if (response.value) {
        topFivePlayers.value = response.value;
    }
        
</script>
