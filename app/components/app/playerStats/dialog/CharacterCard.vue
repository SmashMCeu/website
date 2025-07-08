<template>
    <div class="px-4 py-2 flex items-center gap-4">
        <div class="rounded bg-muted/50 border p-2 flex">
            <slot />
        </div>
        <div>
            <p class="text-sm whitespace-nowrap text-muted-foreground leading-3">
                {{ name }}:
            </p>
            <p class="text-lg font-semibold">
                <span v-if="charName && count">
                    {{ charName }} ({{ count }})
                </span>
                <span v-else>
                    ?
                </span>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    name: string
    charName?: string
    count?: number
}>()
</script>
