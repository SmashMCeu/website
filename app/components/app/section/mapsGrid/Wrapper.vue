<template>
    <div class="space-y-16 pb-16">
        <AppSectionMapsGridPage
            :maps="maps"
            class="transition-all duration-1000 blur-none"
            :class="{ 'blur-sm animate-pulse pointer-events-none!': pending }"
        />
        <AppSectionMapsGridPagination
            v-if="totalPages > 1"
            :items-per-page="1"
            :total="totalPages"
            @page-change="(page) => pageIndex = page"
        />
    </div>
</template>

<script lang="ts" setup>
const pageIndex = ref(1)

const { data, pending } = await useAsyncData(`maps-${pageIndex.value}`, async () => await useSmashMaps().getAll(pageIndex), {
    watch: [pageIndex],
})

const totalPages = computed(() => {
    return (data.value?.lastPage || 0) + 1
})
const maps = computed(() => {
    return data.value?.maps || []
})
</script>
