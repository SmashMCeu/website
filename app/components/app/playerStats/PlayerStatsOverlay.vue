<template>
    <UiDialog>
        <UiDialogTrigger as-child>
            <slot />
        </UiDialogTrigger>
        <UiDialogContent class="grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]">
            <UiDialogHeader class="p-6 pb-0">
                <UiDialogTitle class="flex items-center justify-center gap-2">
                    <Icon
                        name="lucide:bar-chart-2"
                        :size="20"
                    />
                    Stats - {{ playerIdentity.name }}
                </UiDialogTitle>
                <UiDialogDescription>
                    View the stats of {{ playerIdentity.name }} in detail. <br>
                </UiDialogDescription>
            </UiDialogHeader>
            <div class="grid gap-4 py-4 overflow-y-auto px-6">
                <div class="flex flex-col h-[300dvh]">
                    <p>Haha loil some text ger here</p>

                    <div class="flex flex-col gap-8">
                        <div
                            v-for="(catStats, catKey) in stats?.stats"
                            :key="catKey"
                            as-child
                        >
                            <AppPlayerStatsIntCard
                                :category-key="catKey"
                                :stats-category="catStats"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </UiDialogContent>
    </UiDialog>
</template>

<script lang="ts" setup>
const props = defineProps<{
    playerIdentity: McIdentity
}>()

const { data: stats } = await useAsyncData(() => {
    return useSmashStats().getPlayerAlltimeStats(props.playerIdentity.uuid)
})
</script>
