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
const fallbackSkinUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAdVBMVEUAAAAAaGgAf38ApKQAr68AzMwDenoElZUFiIgKvLwkGAgmGgooKCgrHg0zJBE0JRI3Nzc6MYk/KhU/Pz9BNZtCHQpGOqVJJRBKSkpSPYlVVVVqQDB2SzN3QjWBUzmPXj6QWT+UYD6bY0mqclmzeV66hW3///9cmyCkAAAAAXRSTlMAQObYZgAAAvdJREFUWMPtlu1aozAQhWtBSdmSBYpVV4Vs0vX+L3HPmUmUdqsN/bsOSCc8zst8BGZWqyhNY3HaZoyyWiqN7XES8AK5BgBjHu5FxF3hAQLA3/WARoNwGsJygGUOm74fHVPopuWAXmKw06jHFTmwzGMzTg+QcVoQOyxrXnsICFgwHG4LaE1O9pu6trYmwfKoa91UPe/3WbHLDvKHP4fgf8q6Z0FJtvayB/QYz/ThcAgheLHSMCSQrA3UOF+Ht6fgn95C7Z3csrWAbE79be0hITw/wwNILf4jFUzHRUDd1M5P4283Pby+3kMZJ+9wk4AmBzA62JMw3j/co/4OC++4HX9AMt/KDtK2221a3wYgfLjtoqT7ZVkWCDWcBWy3bfsOgD0IZwFIk7vswWeADQE5HnwSQiEhnHgwDN2w3+87/AxQugqC56CsRal6gStMYVzgZw3h4gPQfQDwu6+MqcqyCoFX0WFZvtuX65ubNdQ5QAyHBDB3d6aACS/USSCrFPOiEgAW5wE47yDJiDrjhl6so9xA+HsEYBgkMGE0wtMJMBFQSfK8dzxEsDj2gCch+KPbBu4SEEMQh/im4kAN+NrMSplif8+BkcwVeKxJOpdiBYQAcM7KeAxg5g3dZvmgC6CIgCAAd+RBJ4ZDSsRQwcZUkrdKNKlfZcR/fd2PAY+Pab89ilRiVkkeKbSGvQkKCPrpmAHaHax+0XRHdafFgD8GZlQQEZS9ArwC/BzQtjsa7lrR2rilURZjNC9g4coCaA6dIFbf8l/KRoX7uiihfGfkW7LmhXmzZU/i52gRYN7uCXD+TFvP92BTnp0LFnhQuNzvoM4LQ+rWg84D2tqP5oKvAGKpc8Ne23kkzOeCrwBd7PcJUEVjQvI9IABamgeSpO9B+j78CziZF3Qe0HbCvnjZA+2xOrJAZy+Ko0HIKuVRCJA4EKTpICxIos4LLo0ksT1nbKK0EzQWl/q5zwSczgvJPiXhIuB0XkjzQErDZcDJvKAVZPp0Pjj9/7/jX3fLYvZOsQAAAABJRU5ErkJggg=="

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
