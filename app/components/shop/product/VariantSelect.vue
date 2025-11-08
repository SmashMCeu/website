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
import type { ShopPackage } from "~~/shared/types/ShopPackage"

defineProps<{
    variants: ShopPackage[]
}>()

const selectedVariant = defineModel<ShopPackage>()
</script>
