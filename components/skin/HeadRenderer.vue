<template>
    <div class="relative aspect-square">
        
        <div :style="{ backgroundImage: `url(${skinUrl})` }"
            class="minecraftHead baseLayer aspect-square absolute">
        </div>
        <div :style="{ backgroundImage: `url(${skinUrl})` }"
            class="minecraftHead secondLayer aspect-square absolute">
        </div>

    </div>
</template>
<style scoped>

    .minecraftHead {
        width: 100%;
        height: 100%;
        background-size: 800%;
        image-rendering: pixelated;
        background-repeat: no-repeat;
    }
    .baseLayer {
        background-position: calc(8/56 * 100%) calc(8/56 * 100%);
    }
    .secondLayer {
        background-position: calc(40/56 * 100%) calc(8/56 * 100%);
    }

</style>
<script lang="ts" setup>
    
    defineProps<{
        skinUrl: string
    }>();

</script>