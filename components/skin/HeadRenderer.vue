<template>
    <div class="relative w-[8px] aspect-square scale-[250%]">
        
        <div :style="{ backgroundImage: `url(${skinUrl})` }"
            class="minecraftHead baseLayer w-[8px] aspect-square absolute">
        </div>
        <div :style="{ backgroundImage: `url(${skinUrl})` }"
            class="minecraftHead secondLayer w-[8px] aspect-square absolute">
        </div>

    </div>
</template>
<style scoped>

    .minecraftHead {
        background-size: 64px;
        image-rendering: pixelated;
        background-repeat: no-repeat;
    }
    .baseLayer {
        background-position: -8px -8px;
    }
    .secondLayer {
        background-position: -40px -8px;
    }

</style>
<script lang="ts" setup>
    
    defineProps<{
        skinUrl: string
    }>();

</script>