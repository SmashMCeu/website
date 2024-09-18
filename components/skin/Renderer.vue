<template>
    <div>
        <SkinView3d :width="200" :height="250" :skin-url="skinImage" :skin-options="{
            ears: false,
            model: props.isSlim ? 'slim' : 'default',
        }"
        :global-light="3"
        :animation="defaultAnimation"
        :enable-zoom="false"
        :auto-rotate="!props.pauseAnimation"
        :auto-rotate-speed="0.5"
        class="cursor-move"
        />
    </div>
</template>
<script lang="ts" setup>
    
    import { SkinView3d } from "vue-skinview3d";
    import { WalkingAnimation } from "vue-skinview3d/animations";

    const props = withDefaults(
        defineProps<{
            skinImage: string,
            isSlim?: boolean,
            pauseAnimation?: boolean
        }>(),
        {
            isSlim: false,
            pauseAnimation: false
        }
    );

    const defaultAnimation = (new WalkingAnimation());
    defaultAnimation.speed = 0.5;
    defaultAnimation.paused = props.pauseAnimation;

    watch(() => props.pauseAnimation, (newVal) => {
        defaultAnimation.paused = newVal;
    });


</script>