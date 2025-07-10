<template>
    <div class="flex flex-col items-center gap-8">
        <div
            v-if="playerIdentity && !pending"
            class="flex items-center gap-4"
        >
            <h2 class="text-2xl">
                Stats of
                <strong>{{ playerIdentity.name }}</strong>
            </h2>

            <UiButton
                variant="outline"
                @click="shareLink"
            >
                <Icon name="lucide:link" />
                Copy Stats Link
            </UiButton>
        </div>

        <div class="border px-2 py-8 rounded-lg">
            <AppPlayerStatsDialogView
                v-if="playerIdentity && !pending"
                :player-identity="playerIdentity"
            />
            <div
                v-else
                class="text-muted-foreground w-md flex flex-col items-center text-center"
            >
                <p
                    v-if="pending"
                    class="flex items-center gap-2"
                >
                    <Icon
                        name="lucide:loader"
                        class="animate-spin mt-0.5"
                    />
                    Loading player stats...
                </p>
                <div
                    v-else-if="error"
                    class="flex flex-col items-center gap-2"
                >
                    <p class="flex items-center gap-2 text-lg">
                        <Icon name="lucide:alert-triangle" />
                        Player not found!
                    </p>
                    <p class="text-sm text-muted-foreground/75">
                        Double check the name or UUID you entered.<br>
                        (Maybe he has never played on SmashMC?)
                    </p>
                </div>
            </div>
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

if (error.value && props.uuidOrName.length > 0) {
    useToast().error("Failed to load player stats.")
}

function shareLink() {
    const url = new URL(window.location.href)
    url.pathname = `/stats/player/${props.uuidOrName}`
    navigator.clipboard.writeText(url.toString())
    useToast().success(`Copied link to ${props.uuidOrName}'s stats!`)
}
</script>
