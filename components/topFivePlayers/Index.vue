<template>
   <div class="flex justify-center flex-shrink bg-backgroundColorLight px-8 py-4 rounded-lg">
        <div class="flex flex-col items-center gap-4" v-for="(player, index) of topFivePlayers" :key="player.uuid">
            <p class="text-xl font-semibold text-nowrap">{{ index + 1 }}. {{ player.name }}</p>
            <LazySkinRenderer :skin-image="player.texture" :is-slim="player.slimSkin" static :userRotate="false" />            
        </div>
    </div> 
</template>
<script lang="ts" setup>

const loading = ref(true)

    const limit: number = 5;
    const topFivePlayers: Ref<BasicMinecraftUser[]> = ref<BasicMinecraftUser[]>([]);

    const { data: response   } = await useFetch<TopStatsList>(`/api/stats/top?limit=${limit}`);
    
    if (response.value) {
        let promise = Promise.all(
            response.value.result.map(async (uuid, index) => 
                await useBasicMinecraftUser().uuidToBasicUser(uuid)
            )
        )
        topFivePlayers.value = await promise

    }
        


</script>