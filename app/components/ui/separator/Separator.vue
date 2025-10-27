<template>
    <div class="relative w-full">
        <Separator
            data-slot="separator-root"
            v-bind="delegatedProps"
            :class="
                cn(
                    'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
                    props.class,
                )
            "
        />
        <p
            v-if="props.text && props.orientation === 'horizontal'"
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3 text-sm text-muted-foreground select-none"
        >
            {{ props.text }}
        </p>
    </div>
</template>

<script setup lang="ts">
import type { SeparatorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { Separator } from "reka-ui"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<SeparatorProps & {
    class?: HTMLAttributes["class"]
    text?: string
}>(), {
    orientation: "horizontal",
    decorative: true,
})

const delegatedProps = reactiveOmit(props, "class")
</script>
