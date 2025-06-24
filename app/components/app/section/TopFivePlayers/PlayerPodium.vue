<template>
    <div class="flex flex-col items-center gap-2 w-32">
        <div>
            <div class="w-16 h-24 bg-gray-400" />
        </div>
        <div class="rounded-t-sm border border-b-0 bg-linear-to-b from-muted to-transparent w-full py-4 flex flex-col items-center justify-center text-muted-foreground">
            <span
                :style="{
                    height: podiumHeight,
                }"
                aria-hidden="true"
            >
                <Icon
                    v-if="place === 1"
                    name="lucide:crown"
                    :size="28"
                    class="text-yellow-300"
                />
            </span>
            <p
                class="text-2xl font-black"
                :class="podiumColor"
            >
                {{ place }}
            </p>
            <p class="text-foreground">
                Player Name
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from "vue"

const props = defineProps<{
    place: 1 | 2 | 3
    playerUuid: string
}>()

const podiumHeight: Ref<string> = computed(() => {
    return (3 - props.place) * 1.5 + "rem"
})

const podiumColor: Ref<HTMLAttributes["class"]> = computed(() => {
    return podiumColors[props.place]
})

const podiumColors: Record<1 | 2 | 3, HTMLAttributes["class"]> = {
    1: "text-yellow-300",
    2: "text-gray-300",
    3: "text-amber-700",
}
</script>
