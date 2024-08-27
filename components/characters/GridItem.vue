<template>
    <CharactersCharacterInfo :character="char">
        <div class="bg-backgroundColorLight rounded-lg center-content hover:scale-105 transition-transform cursor-pointer
                    lg:*:scale-[75%]               sm:*:scale-[65%]               *:scale-[50%] *:!m-0
                    lg:*:!h-[19rem] lg:*:!mt-3    sm:*:!h-[17rem] sm:*:!-mt-2    *:!h-[14rem] *:!-mt-6
                    ">
            <UtilSkinRenderer spin :is-slim="char.isSlimSkin" :skin-image="useSmashCharacters().getCharacterSkin(char.skinImage)" />
        </div>
    </CharactersCharacterInfo>
</template>
<script lang="ts" setup>
    
    defineProps({
        char: {
            required: true,
            type: Object as () => SmashCharacter
        }
    });

</script>