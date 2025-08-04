<template>
    <div class="h-full w-full border-solid bg-red-300 border-blue-500 border-[12px]">
        <p>Playtime: {{ playtime }}</p>
        <p>Stats: {{ stats }}</p>
        <p>State: {{ state }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    playerIdentity: McIdentity
    stats: SmashUserStats
    playtime: SmashUserPlaytime
    state: "monthly" | "alltime"
}>()
</script>
