<template>
    <div class="flex flex-col items-center gap-2 w-32">
        <div>
            <McSkinRender3d
                ref="skinViewer"
                :width="140"
                :height="200"
                :animation="animation"
                :auto-rotate="autoRotateSkin"
                :auto-rotate-speed="Math.PI"
                skin-url="http://textures.minecraft.net/texture/aceb62db810aa71befebb0b520261734a3a31028ac79139a999e75d99ba98ac3"
                cape-url="http://textures.minecraft.net/texture/afd553b39358a24edfe3b8a9a939fa5fa4faa4d9a9c3d6af8eafb377fa05c2bb"
                @click="triggerAnimation"
            />
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
import { CrouchAnimation, type PlayerAnimation } from "skinview3d"
import type { HTMLAttributes } from "vue"

const autoRotateSkin = ref(false)
const animation: Ref<PlayerAnimation | undefined> = ref(undefined)
const animTimeout: Ref<NodeJS.Timeout | undefined> = ref(undefined)

function triggerAnimation() {
    if (animTimeout.value) return

    const anim = new CrouchAnimation()
    anim.addHitAnimation()

    animation.value = anim
    autoRotateSkin.value = true

    animTimeout.value = setTimeout(() => {
        animation.value = undefined
        animTimeout.value = undefined
        autoRotateSkin.value = false
    }, 2000)
}

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
