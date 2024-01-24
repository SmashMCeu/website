<script lang="ts" setup>

    // @ts-ignore
    const searchCharacter: string = useRoute().params.character;
    const allCharacters = await useCharacters().getAll();

    let character: Character | undefined;

    for (const char of allCharacters) {
        if (char.name.toLowerCase() === searchCharacter.toLowerCase()) {
            character = char;
            break;
        }
    }
    if (!character) {
        await navigateTo("/characters");
    }

</script>


<template>

    <div>

        <p class="text-3xl text-white font-bold pt-32">{{ character }}</p>

    </div>


</template>