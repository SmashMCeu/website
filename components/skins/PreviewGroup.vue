<template>

    <div class="text-white flex gap-8 md:gap-14">
        <div v-for="(character, index) of characters">
            <SkinsRenderer :is-slim="character.isSlimSkin" :skin-image="character.skinImage" :style="{ opacity: calcSkinPreviewCharacterOpacity(index) }" class="scale-[0.7]" :spin="true"/>
        </div>
    </div>

</template>
<script setup lang="ts">

    const props = defineProps({
        count: {
            required: false,
            default: 5,
            type: Number,
        }
    })

    const characters = ref((await useGithubContent().getAllCharacters()).slice(0, props.count));

    const calcSkinPreviewCharacterOpacity = (index: number): number => {
        const middleIndex: number = (props.count - 1) / 2;
        const distanceToMiddle = Math.abs(index - middleIndex);

        return 0.75 - distanceToMiddle / props.count
    }

</script>