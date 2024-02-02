<script lang="ts" setup>

    const props = defineProps({
        searchCharacter: {
            required: true,
            type: String
        }
    })
    const allCharacters = await useCharacters().getAll();

    let character: Character | undefined;

    for (const char of allCharacters) {
        if (char.name.toLowerCase() === props.searchCharacter.toLowerCase()) {
            character = char;
            break;
        }
    }
    if (!character) {
        await navigateTo("/characters");
    }

</script>


<template>

    
    <div class="pt-20 flex flex-row justify-center">

        <div class="grid grid-cols-3 gap-20 w-[40rem]">
            <div class="flex flex-col item-center">
                <p :style="{color: character?.primaryColor}" class="font-bold text-2xl text-center">{{ character?.name || 'Unknown Name' }}</p>
                <SkinRenderer class="pt-2 scale-90" :is-slim="character?.isSlimSkin" :skin-image="character?.skinImage || ''"/>
            </div>
            <div class="col-span-2 mt-20 text-gray-400 text-lg">
                <p>{{ character?.description }}</p>
                <p class="text-gray-300 mt-5">Difficulty:</p>
                <p class="font-bold" :style="{color: character?.primaryColor}">{{ character?.difficulty }}</p>
                <p class="text-gray-300">Cooldown:</p>
                <p class="font-bold" :style="{color: character?.primaryColor}">{{ character?.cooldownTime }}</p>
            </div>
        </div>
        

    </div>


</template>