<template>
    <UiSelect v-model="selectedVariant">
        <UiSelectTrigger>
            <UiSelectValue />
        </UiSelectTrigger>
        <UiSelectContent>
            <UiSelectItem
                v-for="variant in variants"
                :key="variant.id"
                :value="variant"
            >
                {{ variant.name }}
            </UiSelectItem>
        </UiSelectContent>
    </UiSelect>
</template>

<script setup lang="ts">
defineProps<{
    variants: TebexPackage[]
}>()

const selectedVariant = defineModel<TebexPackage>()
</script>
