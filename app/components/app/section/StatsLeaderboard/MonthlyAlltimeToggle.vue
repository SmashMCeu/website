<template>
    <UiTabs
        v-model:model-value="state"
        default-value="monthly"
    >
        <UiTabsList class="flex gap-4">
            <UiTabsTrigger value="monthly">
                Monthly
            </UiTabsTrigger>
            <UiTabsTrigger value="alltime">
                All Time
            </UiTabsTrigger>
        </UiTabsList>
    </UiTabs>
</template>

<script setup lang="ts">
const state = defineModel<"monthly" | "alltime">()
</script>
