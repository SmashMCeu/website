<template>
    <div class="flex flex-col gap-4 items-center">
        <div
            v-if="playerIdentity && !pending && !error"
            class="border rounded-lg flex items-center gap-4 overflow-hidden"
        >
            <McSkinRender2dHead
                class="rounded h-full aspect-square grow"
                :skin-url="useMcIdentity().getTexture(playerIdentity).textures.SKIN?.url"
            />
            <div class="flex flex-col gap-1 pr-8 py-2 text-nowrap">
                <p class="text-lg font-semibold">
                    {{ playerIdentity.name }}
                </p>
                <NuxtLinkLocale
                    :to="`/stats/player/${playerIdentity.name}`"
                    class="text-sm text-muted-foreground hover:underline flex items-center gap-1"
                >
                    Click to view stats
                    <Icon
                        name="lucide:external-link"
                        size="14"
                    />
                </NuxtLinkLocale>
            </div>
        </div>
        <div
            v-else-if="pending"
            class="flex items-center gap-2 text-muted-foreground"
        >
            <LoadingIndicator />
            <p>Loading player stats...</p>
        </div>
        <div
            v-else-if="error"
            class="border px-12 py-8 rounded-lg flex flex-col items-center gap-4 text-center text-muted-foreground"
        >
            <Icon
                name="lucide:alert-triangle"
                size="24"
            />
            <p>Could not load player stats for "{{ props.uuidOrName }}"</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    uuidOrName: string
}>()

const { data: playerIdentity, pending, error } = useAsyncData(async () => {
    return await useMcIdentity().getByUuidOrName(props.uuidOrName)
}, { watch: [() => props.uuidOrName], immediate: false })
</script>
