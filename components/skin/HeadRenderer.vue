<template>
    <div class="relative aspect-square">
        
        <div :style="baseLayerStyle"
            class="minecraftHead aspect-square absolute">
        </div>
        <div :style="secondLayerStyle"
            class="minecraftHead aspect-square absolute">
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
    

</style>
<script lang="ts" setup>
    
    const props = defineProps<{
        skinUrl: string
    }>();

    async function checkSlimSkin() {
        const img = new Image();
        img.src = props.skinUrl;
        await img.decode();
        
        isSlimSkin.value = img.height === 32;
    }

    const isSlimSkin = ref(false);
    onMounted(() => checkSlimSkin());

    
    const baseLayerStyle = computed(() => {
        return {
            backgroundImage: `url(${props.skinUrl})`,
            backgroundPosition: isSlimSkin.value ? 'calc(8/56 * 100%) calc(8/24 * 100%)' : 'calc(8/56 * 100%) calc(8/56 * 100%)',
        }
    });
    const secondLayerStyle = computed(() => {
        return {
            backgroundImage: `url(${props.skinUrl})`,
            backgroundPosition: isSlimSkin.value ? 'calc(40/56 * 100%) calc(8/24 * 100%)' : 'calc(40/56 * 100%) calc(8/56 * 100%)',
        }
    });



</script>