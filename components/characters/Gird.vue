<template>
    <div class="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        
        <CharactersGridItem v-for="char of characters" :char="char" />
        
    </div>
</template>
<script lang="ts" setup>
    
    const characters: Ref<Array<SmashCharacter>> = ref(await useSmashCharacters().getAllCharacters());

</script>