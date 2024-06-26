<template>
    <div>

        <PageHeaderCharacters />

        <div class="p-10 md:p-20">
            <CharactersSearchBar class="sm:px-10" v-model="searchFilter"/>
            
            <div class="mt-20">
                <Suspense>
                    <div class="grid gap-8
                                grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
                        <CharactersGrid :searchFilter="searchFilter"/>
                    </div>
                    
                    <template #fallback>
                        <div class="grid gap-8
                                    grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
                            <USkeleton v-for="n in 12"
                            class="p-10 h-72 bg-darkBackground rounded-lg" />
                        </div>
                    </template>
                </Suspense>
            </div>

            <MarkdownRenderer id="howToCreateACharacterSkin" class="mt-32" />

        </div>
    </div>
</template>
<script setup lang="ts">

    useHead({
        title: "SmashMC | Characters",
    });


    import type CharacterSearchFilter from "@/types/CharacterSearchFilter";

    const searchFilter: Ref<CharacterSearchFilter> = ref({
        nameInput: "",
        hideProChars: false,
        sortKey: 1,
    });

</script>
