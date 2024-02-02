<script lang="ts" setup>

    const characters: Ref<Character[]> = useState(() => []);


    characters.value = await useCharacters().getAll();


</script>

<template>
    
    <div class="flex flex-wrap gap-28">

        <div v-for="character of characters">
            <SmashCharacterCard :data="character"/>
        </div>

    </div>

    
</template>