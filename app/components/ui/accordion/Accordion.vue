<template>
    <AccordionRoot
        data-slot="accordion"
        v-bind="forwarded"
        :class="cn('flex flex-col gap-2', props.class)"
    >
        <slot />
    </AccordionRoot>
</template>

<script setup lang="ts">
import {
    AccordionRoot,
    useForwardPropsEmits,
} from "reka-ui"
import type { AccordionRootEmits, AccordionRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<AccordionRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<AccordionRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
