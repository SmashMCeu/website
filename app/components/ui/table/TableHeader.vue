<template>
    <thead
        data-slot="table-header"
        :class="cn('[&_tr]:border-b bg-muted/75', props.class)"
    >
        <slot />
    </thead>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()
</script>
