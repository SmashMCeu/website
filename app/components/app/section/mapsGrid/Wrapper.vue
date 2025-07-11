<template>
    <div class="space-y-16">
        <AppSectionMapsGridPage :maps="maps" />
        <AppSectionMapsGridPagination
            :items-per-page="1"
            :total="totalPages"
            @page-change="(page) => pageIndex = page"
        />
    </div>
</template>

<script lang="ts" setup>
const pageIndex = ref(1)

const req = useAsyncData(`maps-${pageIndex.value}`, () => useSmashMaps().getAll(pageIndex), {
    watch: [pageIndex],
})

const totalPages = computed(() => {
    return (req.data.value?.lastPage || 1) + 1
})
const maps = computed(() => {
    return req.data.value?.maps || []
})
</script>
