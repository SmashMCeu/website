<template>
    <div class="flex flex-col items-center w-40">
        <div>
            <McSkinRender3d
                ref="skinViewer"
                :width="140"
                :height="200"
                :animation="animation"
                :skin-url="skinUrl"
                :cape-url="capeUrl"
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
                {{ playerIdentity.name }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { CrouchAnimation, RunningAnimation } from "skinview3d"
import type { PlayerObject, PlayerAnimation } from "skinview3d"

import type { HTMLAttributes } from "vue"

const props = defineProps<{
    place: 1 | 2 | 3
    playerIdentity: McIdentity
}>()

const skinUrl = computed(() => {
    return useMcIdentity().getTexture(props.playerIdentity).textures.SKIN?.url
})

const capeUrl = computed(() => {
    return useMcIdentity().getTexture(props.playerIdentity).textures.CAPE?.url || undefined
})

let animationTime = 2000
const secretAnimationProbability = 0.1
const animation: Ref<PlayerAnimation | undefined> = ref(undefined)
const animTimeout: Ref<NodeJS.Timeout | undefined> = ref(undefined)

function triggerAnimation() {
    if (animTimeout.value) return

    if (Math.random() < secretAnimationProbability) {
        applySecretAnimation()
    } else {
        applyDefaultAnimation()
    }

    animTimeout.value = setTimeout(() => {
        animation.value = undefined
        animTimeout.value = undefined
    }, animationTime)
}

function applyDefaultAnimation() {
    const anim = new CrouchAnimation()
    anim.addHitAnimation()
    anim.addAnimation((player: PlayerObject, progress: number) => {
        player.rotation.y = progress * 2 * Math.PI * (1000 / animationTime)
    })

    animation.value = anim
    animationTime = 2000
}

function applySecretAnimation() {
    const anim = new RunningAnimation()
    anim.addAnimation((player: PlayerObject, progress: number) => {
        // player.rotation.y = progress * 2 * Math.PI * (1000 / animationTime)
        // flip upside down
        player.rotation.x = Math.PI * 2 * progress
    })
    anim.speed = 0.5

    animation.value = anim
    animationTime = 4000
}

watch(skinUrl, (newValue) => {
    if (newValue) {
        animation.value = undefined
        if (animTimeout.value) {
            clearTimeout(animTimeout.value)
            animTimeout.value = undefined
        }
    }
})

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
