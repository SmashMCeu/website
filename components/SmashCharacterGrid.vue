<script lang="ts" setup>

    import type CharactersSearchFilter from "@/types/CharacterSearchFilter";

    const props = defineProps({
        filter: {
            required: true,
            type: Object as PropType<CharactersSearchFilter>,
        }
    });

    const applyFilter = (filter: CharactersSearchFilter): Character[] => {
        let out = allCharacters;
        if (filter.name.replace(" ", "") != "") {
            out = out.filter(c => c.name.toLowerCase().trim().includes(filter.name.toLowerCase().trim()));
        }
        if (filter.onlyFree) {
            out = out.filter(c => !c.isPro);
        }
        if (filter.sortBy == "name") {
            out.sort();
        } else if (filter.sortBy == "difficulty") {
            out.sort((a, b) => {
                if (a.difficulty - b.difficulty != 0) return a.difficulty - b.difficulty;
                else return a.name.localeCompare(b.name);
            });
        }
        return out;
    }

    const allCharacters: Character[] = await useCharacters().getAll();
    const characters: Ref<Character[]> = useState(() => applyFilter(props.filter));

    

    watch(() => JSON.stringify(props.filter), () => {
        characters.value = applyFilter(props.filter);
    }, { deep: true });


</script>

<template>
    
    <div class="flex flex-wrap gap-28">
        <div v-for="character of characters">
            <SmashCharacterCard :data="character"/>
        </div>

    </div>

    
</template>