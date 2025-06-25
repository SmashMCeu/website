<template>
    <canvas ref="canvasRef" />
</template>

<script lang="ts" setup>
// Inspired by https://github.com/so1ve/vue-skinview3d
// Tweaked and improved for SmashMC

import type { PlayerAnimation, CapeLoadOptions, SkinLoadOptions } from "skinview3d"
import { SkinViewer } from "skinview3d"

const props = withDefaults(
    defineProps<{
        width?: number
        height?: number

        skinUrl?: string
        skinLoadOptions?: SkinLoadOptions

        capeUrl?: string
        capeLoadOptions?: CapeLoadOptions

        pauseRender?: boolean

        globalLight?: number
        cameraLight?: number

        fov?: number
        zoom?: number

        autoRotate?: boolean
        autoRotateSpeed?: number

        allowZoom?: boolean
        allowRotate?: boolean
        allowPan?: boolean

        animation?: PlayerAnimation
    }>(),
    {
        pauseRender: false,
        globalLight: 3,
        cameraLight: 0.6,

        fov: 70,
        zoom: 0.9,

        autoRotate: false,
        autoRotateSpeed: 0.5,

        allowZoom: false,
        allowRotate: false,
        allowPan: false,
    },
)

const canvasRef = ref<HTMLCanvasElement>()
const skinViewer = shallowRef<SkinViewer | null>(null)

defineExpose({
    skinViewer,
})

onMounted(() => {
    skinViewer.value = new SkinViewer({
        canvas: canvasRef.value,
        width: props.width,
        height: props.height,
    })
})

onBeforeUnmount(() => {
    skinViewer.value?.dispose()
    skinViewer.value = null
})

watchPostEffect(() => {
    if (!skinViewer.value) return

    if (props.width && props.height) {
        skinViewer.value.setSize(props.width, props.height)
    }
})

watchPostEffect(() => {
    if (!skinViewer.value) return

    if (props.skinUrl) {
        skinViewer.value.loadSkin(props.skinUrl, props.skinLoadOptions)
    } else {
        skinViewer.value.resetSkin()
    }
})

watchPostEffect(() => {
    if (!skinViewer.value) return

    if (props.capeUrl) {
        skinViewer.value.loadCape(props.capeUrl, props.capeLoadOptions)
    } else {
        skinViewer.value.resetCape()
    }
})

watchPostEffect(() => {
    if (!skinViewer.value) return

    skinViewer.value.renderPaused = props.pauseRender
})

watchPostEffect(() => {
    if (!skinViewer.value) return

    skinViewer.value.globalLight.intensity = props.globalLight
})

watchPostEffect(() => {
    if (!skinViewer.value) return

    skinViewer.value.cameraLight.intensity = props.cameraLight
})

watchPostEffect(() => {
    if (!skinViewer.value) return

    skinViewer.value.camera.fov = props.fov
    skinViewer.value.camera.zoom = props.zoom
})

watchPostEffect(() => {
    if (!skinViewer.value) return

    skinViewer.value.autoRotate = props.autoRotate
    skinViewer.value.autoRotateSpeed = props.autoRotateSpeed
})

watchPostEffect(() => {
    if (!skinViewer.value) return

    skinViewer.value.controls.enableZoom = props.allowZoom
    skinViewer.value.controls.enableRotate = props.allowRotate
    skinViewer.value.controls.enablePan = props.allowPan
})

watchPostEffect(() => {
    if (!skinViewer.value) return

    if (props.animation) {
        skinViewer.value.animation = props.animation
    } else {
        skinViewer.value.animation = null
    }
})
</script>
