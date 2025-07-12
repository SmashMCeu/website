<template>
    <UiDialog>
        <UiDialogTrigger>
            <slot />
        </UiDialogTrigger>

        <!-- TODO: describedby NOT WORING?! Still get warning -->
        <UiDialogContent
            aria-describedby="Map Details"
            class="grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]"
        >
            <UiDialogHeader class="p-6 pb-0">
                <UiDialogTitle
                    class="flex items-center justify-center gap-2"
                    @click.alt="copyMapId"
                >
                    <Icon
                        name="lucide:info"
                        :size="20"
                    />
                    {{ map.name }}
                </UiDialogTitle>
            </UiDialogHeader>
            <Suspense>
                <AppSectionMapsGridDialogView :map="map" />

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
const props = defineProps<{
    map: SmashMap
}>()

function copyMapId() {
    const mapId = props.map.id
    if (!mapId) return

    navigator.clipboard.writeText(mapId).then(() => {
        useToast().success("Map ID copied to clipboard")
    }).catch(() => {
        useToast().error("Failed to copy Map ID")
    })
}
</script>
