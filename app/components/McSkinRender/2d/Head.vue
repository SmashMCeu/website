<template>
    <canvas
        ref="canvasRef"
        width="8"
        height="8"
        class="pixelated-img"
    />
</template>

<script setup lang="ts">
const props = defineProps<{
    skinUrl?: string
}>()

const canvasRef = ref<HTMLCanvasElement>()

// TODO: fallback skin URL
const fallbackSkinUrl = ""

const renderHead = async () => {
    if (!canvasRef.value) return

    const ctx = canvasRef.value.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, 8, 8)

    try {
        const img = new Image()
        img.crossOrigin = "anonymous"

        await new Promise<void>((resolve, reject) => {
            img.onload = () => resolve()
            img.onerror = () => reject(new Error("Failed to load skin texture"))
            img.src = props.skinUrl || fallbackSkinUrl
        })

        ctx.imageSmoothingEnabled = false

        // Draw base skin layer (face)
        // Face coordinates in skin texture: x=8, y=8, width=8, height=8
        ctx.drawImage(
            img,
            8, 8, 8, 8, // Source coordinates (face in skin texture)
            0, 0, 8, 8, // Destination coordinates (8x8 canvas)
        )

        // Draw overlay layer (hat/helmet)
        // Overlay coordinates in skin texture: x=40, y=8, width=8, height=8
        ctx.drawImage(
            img,
            40, 8, 8, 8, // Source coordinates (overlay in skin texture)
            0, 0, 8, 8, // Destination coordinates (8x8 canvas)
        )
    } catch {
        // Draw a fallback placeholder
        ctx.fillStyle = "#8B4513"
        ctx.fillRect(0, 0, 8, 8)

        ctx.fillStyle = "#FFFFFF"
        ctx.font = "1px monospace"
        ctx.textAlign = "center"
        ctx.fillText("?", 4, 5)
    }
}

// Watch for changes in skinUrl
watch(() => props.skinUrl, renderHead)

// Render when component is mounted
onMounted(() => {
    renderHead()
})
</script>

<style scoped>
.pixelated-img {
    image-rendering: -moz-crisp-edges;
    image-rendering: -webkit-crisp-edges;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
}
</style>
