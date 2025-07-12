<template>
    <div class="flex flex-col gap-4 items-center px-8 mt-4">
        <img
            v-if="img"
            :src="img"
            alt="Map Thumbnail"
            class="w-full rounded-lg"
        >
        <div class="flex flex-wrap gap-8 py-4">
            <AppSectionMapsGridDialogKeyValue title="Created by">
                <AppSectionMapsGridDialogPlayer :uuid="map.owner" />
            </AppSectionMapsGridDialogKeyValue>
            <AppSectionMapsGridDialogKeyValue
                v-if="map.contributorCount > 1"
                title="Helpers"
            >
                <!-- TODO: show contributor names -> talk to Packsolite -->
                {{ map.contributorCount - 1 }}
            </AppSectionMapsGridDialogKeyValue>
            <AppSectionMapsGridDialogKeyValue title="Times played">
                {{ map.timesPlayed }}
            </AppSectionMapsGridDialogKeyValue>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    map: SmashMap
}>()

const { data: img } = await useAsyncData(`map-thumbnail-${props.map.id}`, async () => {
    return await useSmashMaps().getThumbnail(props.map.id)
}, { watch: [() => props.map.id] })
</script>
