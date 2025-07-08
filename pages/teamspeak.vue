<template>
    <div class="flex flex-col items-center">
        <h1 class="text-6xl font-bold mb-4">Teamspeak</h1>
        <p class="text-xl mb-2 font-semibold">Join our Teamspeak server to chat with other players!</p>
        <p class="mb-4 px-3 py-1 rounded-lg bg-primary/25">Server Address: <strong>smashmc.eu</strong></p>
        <button @click="openTeamspeak" class="border-2 border-primary text-primary rounded-lg md:px-4 px-2 py-2 
                                            flex items-center gap-2
                                            hover:bg-primary hover:text-backgroundColorLight transition-colors">
        
        <Icon name="solar:headphones-round-sound-outline" size="24"/>
        <p class="-mt-[1px]">Open Teamspeak</p>
        </button>
    </div>
</template>

<script setup lang="ts">

function openTeamspeak() {
    const teamspeakUrl = "ts3server://smashmc.eu";
    window.open(teamspeakUrl);
}

useSeoMeta({
    title: "SmashMC | Teamspeak",
    ogTitle: "SmashMC | Teamspeak",
    description: "Join our Teamspeak server to chat with other players!",
    ogDescription: "Join our Teamspeak server to chat with other players!",
    ogType: "website",
});

</script>
