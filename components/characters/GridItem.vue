<template>
    <CharactersCharacterInfo :character="char">
        <div class="bg-backgroundColorLight rounded-lg center-content hover:scale-105 transition-transform cursor-pointer
            p-4
            flex flex-col gap-2">
            <div class="flex flex-col items-center w-full">
                <p v-if="char.isPro" class="w-fit px-[8px] pt-[2px] pb-[3px] text-sm text-primary border-2 border-primary rounded-lg font-semibold">PRO</p>
                <p class="text-base sm:text-lg md:text-xl font-semibold truncate">{{ char.name }}</p>
            </div>
            <UtilSkinRenderer2d :skin-url="useSmashCharacters().getCharacterImgUrl(char, char.preview)" />
        </div>
    </CharactersCharacterInfo>
</template>
<script lang="ts" setup>
    
    defineProps<{
        char: SmashCharacter
    }>();

</script>