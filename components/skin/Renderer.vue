<template>
    <div>
        <SkinView3d
:width="200" :height="250" :skin-url="skinImage" :skin-options="{
            ears: false,
            model: props.isSlim ? 'slim' : 'default',
        }"
        :global-light="3"
        :animation="playerAnimation"
        :enable-zoom="false"
        :auto-rotate="!props.pauseAnimation && !props.static"
        :auto-rotate-speed="0.5"
        :enable-rotate="userRotate"
        :class="{ 'cursor-move': userRotate }"
        />
    </div>
</template>
<script lang="ts" setup>
    
    import type { PlayerAnimation } from "skinview3d"
    import { SkinView3d } from "vue-skinview3d";
    import { WalkingAnimation } from "vue-skinview3d/animations";

    const props = withDefaults(
        defineProps<{
            skinImage: string,
            isSlim?: boolean,
            pauseAnimation?: boolean,
            static?: boolean,
            userRotate?: boolean,
        }>(),
        {
            isSlim: false,
            pauseAnimation: false,
            static: false,
            userRotate: true,
        }
    );


    const playerAnimation: Ref<PlayerAnimation | null> = ref(null);

    if (!props.static) {
        playerAnimation.value = new WalkingAnimation();
        playerAnimation.value.speed = 0.5;
        playerAnimation.value.paused = props.pauseAnimation;

        watch(() => props.pauseAnimation, (newVal) => {
            if (playerAnimation.value) playerAnimation.value.paused = newVal;
        });
    }
    

</script>