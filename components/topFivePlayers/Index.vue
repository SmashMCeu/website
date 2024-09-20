<template>
   <div class="flex w-fit justify-center bg-backgroundColorLight px-8 py-4 rounded-lg">
        <div v-for="(player, index) of topFivePlayers" :key="player.uuid" class="flex flex-col items-center gap-4">
            <p class="text-xl font-semibold text-nowrap">{{ index + 1 }}. {{ player.name }}</p>
            <SkinRenderer :skin-image="player.texture" :is-slim="player.slimSkin" static :user-rotate="false" />
        </div>
    </div>
</template>
<script lang="ts" setup>

    const limit: number = 5;
    const topFivePlayers: Ref<BasicMinecraftUser[]> = ref<BasicMinecraftUser[]>([]);

    const { data: response } = await useFetch<TopStatsList>(`/api/stats/top?limit=${limit}`);
    
    if (response.value) {
        topFivePlayers.value = await Promise.all(
            response.value.result.map(async (uuid, _index) => 
                await useBasicMinecraftUser().uuidToBasicUser(uuid)
            )
        );
    }
        


</script>
