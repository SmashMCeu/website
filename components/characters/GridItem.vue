<template>
    <CharactersCharacterInfo :character="char">
        <div class="bg-backgroundColorLight hover:scale-105 transition-transform rounded-lg w-full h-full p-4 flex flex-col items-center justify-between gap-4">
            <div class="flex flex-col items-center w-full h-full justify-end">
                <p v-if="char.isPro" class="w-fit px-[6px] py-[1px] text-sm text-primary border-2 border-primary rounded-lg font-semibold">PRO</p>
                <p class="text-base sm:text-lg md:text-xl font-semibold w-full truncate">{{ char.name }}</p>
            </div>
            <UtilSkinRenderer2d class="" :skin-url="useSmashCharacters().getCharacterImgUrl(char, char.preview)" />
        </div>
    </CharactersCharacterInfo>
</template>
<script lang="ts" setup>
    
    defineProps<{
        char: SmashCharacter
    }>();

</script>