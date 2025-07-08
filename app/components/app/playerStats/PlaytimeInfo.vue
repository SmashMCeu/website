<template>
    <div class="flex flex-col gap-2">
        <div class="space-y-1">
            <p class="text-sm text-muted-foreground">
                Playtime:
            </p>
            <div class="rounded-lg bg-muted/50 border px-4 py-2 flex items-center gap-4">
                <Icon name="lucide:clock" />
                <p>{{ hoursPlayed }}h</p>
            </div>
        </div>
        <div class="space-y-1">
            <p class="text-sm text-muted-foreground">
                Last online:
            </p>
            <div class="rounded-lg bg-muted/50 border px-4 py-2 flex items-center gap-4">
                <Icon name="lucide:calendar-clock" />
                <NuxtTime
                    v-if="playtime?.lastSeen"
                    class="text-sm"
                    :datetime="new Date(playtime?.lastSeen)"
                    relative
                />
                <p v-else>
                    Unknown
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    playerIdentity: McIdentity
}>()

const { data: playtime } = await useAsyncData(async () => {
    return await userPlayerPlaytime().getByUuid(props.playerIdentity.uuid)
})

const hoursPlayed = computed(() => {
    if (!playtime.value) return 0
    return Math.floor(playtime.value.playtime / (1000 * 60 * 60))
})
</script>
