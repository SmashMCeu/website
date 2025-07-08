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
            </UiDialogHeader>
            <Suspense>
                <AppPlayerStatsView :player-identity="playerIdentity" />

                <template #fallback>
                    <div class="px-6 py-4 flex justify-center">
                        <p class="text-muted-foreground">
                            Loading...
                        </p>
                    </div>
                </template>
            </Suspense>
        </UiDialogContent>
    </UiDialog>
</template>

<script lang="ts" setup>
defineProps<{
    playerIdentity: McIdentity
}>()
</script>
