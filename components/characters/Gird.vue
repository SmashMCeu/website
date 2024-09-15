<template>
    <div class="grid container xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        
        <CharactersGridItem v-for="char of characters" :char="char"/>
        
    </div>
</template>
<script lang="ts" setup>
    
    const characters: Ref<SmashCharacter[]> = ref(await useSmashCharacters().getAllCharacters(true));

</script>