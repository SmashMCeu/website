<script lang="ts" setup>

    const characters: Ref<Character[]> = useState(() => []);

    onBeforeMount(async () => {

        characters.value = await useCharacters().getAll();

    });

</script>

<template>
    <div class="flex flex-wrap gap-28 pt-32">

        <div v-for="character of characters">
            <SmashCharacterCard :data="character"/>
        </div>

    </div>
</template>