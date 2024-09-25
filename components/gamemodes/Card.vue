<template>
    <div data-aos="zoom-in" class="rounded-lg bg-backgroundColorLight w-96">
        <div class="relative rounded-lg overflow-hidden select-none pointer-events-none">
            <img :src="useSmashGamemodes().getGamemodeBackgroundUrl(gamemode)" class="rounded-t-lg brightness-50 blur-[1px]" />
            <img :src="useSmashGamemodes().getGamemodeIconUrl(gamemode)" class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-32"/>
        </div>
        <div class="px-6 py-4">
            <p class="text-textColorLight font-semibold text-2xl">{{ gamemode.name }}</p>
            <p class="text-textColor mt-2">{{ gamemode.description }}</p>
        </div>
    </div>
</template>
<script lang="ts" setup>

    defineProps<{
        gamemode: Gamemode;
    }>();

</script>