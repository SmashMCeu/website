<template>
    <CharactersCharacterInfo :character="char">
        <div :class="{'border-2 border-primary': char.isPro}" class="w-full h-full bg-backgroundColorLight hover:scale-105 transition-transform rounded-lg p-4 flex flex-col items-center justify-between gap-4">
            <div class="flex flex-col items-center w-full h-full justify-end">
                <p v-if="char.isPro" class="w-fit px-[6px] py-[1px] text-sm text-primary rounded-lg font-semibold">PRO</p>
                <p class="text-base sm:text-lg md:text-xl font-semibold w-full truncate">{{ char.name }}</p>
            </div>
            <SkinRenderer2d :skin-url="useSmashCharacters().getCharacterImgUrl(char, char.preview)" />
        </div>
    </CharactersCharacterInfo>
</template>
<script lang="ts" setup>
    
    defineProps<{
        char: SmashCharacter
    }>();

</script>