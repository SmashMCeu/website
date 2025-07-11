<template>
    <div>
        <UiPagination
            v-slot="{ page }"
            :items-per-page="itemsPerPage"
            :total="total"
            show-edges
            :sibling-count="1"
            @update:page="(pageIndex) => emit('page-change', pageIndex)"
        >
            <UiPaginationContent v-slot="{ items }">
                <UiPaginationPrevious />

                <template
                    v-for="(item, index) in items"
                    :key="index"
                >
                    <UiPaginationItem
                        v-if="item.type === 'page'"
                        :value="item.value"
                        :is-active="item.value === page"
                    >
                        {{ item.value }}
                    </UiPaginationItem>

                    <UiPaginationEllipsis
                        v-if="item.type === 'ellipsis'"
                        :key="item.type"
                        :index="index"
                    />
                </template>

                <UiPaginationNext />
            </UiPaginationContent>
        </UiPagination>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    itemsPerPage: number
    total: number
}>()

const emit = defineEmits<{
    (e: "page-change", page: number): void
}>()
</script>
