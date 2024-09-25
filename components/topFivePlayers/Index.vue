<template>
   <div class="flex flex-wrap justify-center gap-4">
        <div data-aos="fade-up" :data-aos-delay="50*index"  class="w-48 rounded-lg bg-backgroundColorLight py-4 flex flex-col items-center gap-4" v-for="(player, index) of topFivePlayers" :key="player.uuid">
            <p class="sm:text-xl text-base font-semibold text-nowrap">{{ index + 1 }}. {{ player.name }}</p>
            <!--<LazySkinRenderer :skin-image="player.texture" :is-slim="player.slimSkin" static :userRotate="false" />-->
            <SkinVZGERenderer2d :playerUUID="player.uuid" class="p-4"/>
        </div>
    </div> 
</template>
<script lang="ts" setup>

    const limit: number = 5;
    const topFivePlayers: Ref<BasicMinecraftUser[]> = ref<BasicMinecraftUser[]>([]);

    const { data: response } = await useFetch<TopStatsList>(`/api/stats/top?limit=${limit}`);
    
    if (response.value) {
        let promise = Promise.all(
            response.value.result.map(async (uuid, index) => 
                await useBasicMinecraftUser().uuidToBasicUser(uuid)
            )
        )
        topFivePlayers.value = await promise;
    }
        


</script>