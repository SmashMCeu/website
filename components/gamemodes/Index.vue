<template>
    <div class="flex flex-wrap justify-center gap-4">
        <GamemodesCard v-for="gamemode of gamemodes" :gamemode="gamemode" />
    </div>
</template>
<script lang="ts" setup>

    const gamemodes: Ref<Gamemode[]> = ref(await useSmashGamemodes().getGamemodeList());

</script>