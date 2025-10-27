<template>
    <div class="flex flex-col items-center">
        <AppSection
            pretitle="TEAMSPEAK"
            title="Our Teamspeak Server"
            class="flex items-center"
        >
            <p class="px-4 py-2 text-lg rounded-lg bg-muted/50 text-center">
                Server Address: <strong>smashmc.eu</strong>
            </p>
            <UiSeparator text="or just" />
            <UiButton
                variant="secondary"
                size="lg"
                @click="openTeamspeak"
            >
                <Icon
                    name="lucide:headphones"
                    size="24"
                />
                <p class="-mt-[1px]">
                    Open Teamspeak
                </p>
            </UiButton>
        </AppSection>
    </div>
</template>

<script setup lang="ts">
function openTeamspeak() {
    const teamspeakUrl = "ts3server://smashmc.eu"
    window.open(teamspeakUrl)
}

useSeoMeta({
    title: "SmashMC | Teamspeak",
    ogTitle: "SmashMC | Teamspeak",
    description: "Join our Teamspeak server to chat with other players!",
    ogDescription: "Join our Teamspeak server to chat with other players!",
    ogType: "website",
})
</script>
