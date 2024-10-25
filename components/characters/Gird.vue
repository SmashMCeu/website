<template>
    <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        
        <CharactersGridItem v-for="char of characters" :char="char"/>
        
    </div>
</template>
<script lang="ts" setup>
    
    const characters: Ref<SmashCharacter[]> = ref(await useSmashCharacters().getAllCharacters(true));

</script>