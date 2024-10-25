<template>
    <SocialCardBase>
        <template #icon>
            <svg class="text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17 20q-.425 0-.712-.288T16 19v-5q0-.425.288-.712T17 13h2q.425 0 .713.288T20 14v5q0 .425-.288.713T19 20zm-6 0q-.425 0-.712-.288T10 19V5q0-.425.288-.712T11 4h2q.425 0 .713.288T14 5v14q0 .425-.288.713T13 20zm-6 0q-.425 0-.712-.288T4 19v-9q0-.425.288-.712T5 9h2q.425 0 .713.288T8 10v9q0 .425-.288.713T7 20z"/></svg>  
        </template>
        <template #content>
            <p class="text-textColor">Players:</p>
            <p class="font-bold text-xl leading-3 text-textColorLight">{{ onlinePlayers }} online</p>
        </template>
    </SocialCardBase>
</template>
<script lang="ts" setup>

    const onlinePlayers: Ref<number> = ref(0);

    
    async function getPlayerCount(): Promise<number> {
        return await useMinecraftServerStatus().getPlayerCount();
    }

    function updatePlayerCount() {
        getPlayerCount().then((count) => {
            onlinePlayers.value = count;
        });
    }

    onMounted(() => {
        updatePlayerCount();
        setInterval(updatePlayerCount, 10 * 1000);
    });

</script>