<template>

    <div v-for="(char, index) of filteredChars" class="overflow-hidden relative p-4 sm:p-10 bg-darkBackground rounded-lg flex flex-col items-center cursor-pointer"
        @click="openModalIndex = index">

        <!-- PRO BADGE -->
        <div v-if="char.isPro" class="bg-cyan-500 text-center absolute -rotate-45 top-0 left-0 right-0 translate-x-[-50%] translate-y-[50%] ml-8">
            <p class="lg:py-1 font-bold">Pro only</p>
        </div>

        <p :style='{ color: char.primaryColor }' class="text-2xl font-bold">{{ char.name }}</p>
        <SkinsRenderer :skin-image="char.skinImage" :spin="true" :is-slim="char.isSlimSkin" class="scale-[40%] -translate-y-5 sm:translate-y-0"/>

        <UModal :modelValue="openModalIndex == index" @close="openModalIndex = null" :ui='{ "container": "items-center" }'>
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex items-center justify-between">
                        <p class="text-base font-semibold leading-6" :style='{ color: char.primaryColor }'>
                            {{ char.name }} {{ char.isPro ? "(Pro Character)" : "" }}
                        </p>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="openModalIndex = null" />
                    </div>
                </template>
                <div class="flex gap-10">
                    <div class="max-w-[50%] mt-10 flex flex-col">
                        <p>{{ char.description }}</p>
                        <div class="mt-6 text-textColorLight">
                            <p>Cooldown:</p>
                            <div class="flex items-center gap-2" :style='{ color: char.primaryColor }'>
                                <UIcon name="i-heroicons-clock" class="size-5" />
                                <p class="-mt-[1px] text-lg">{{ char.cooldownTime }}</p>
                            </div>
                            
                        </div>
                        <div class="mt-2 text-textColorLight">
                            <p>Difficulty:</p>
                            <UIcon :name="n <= char.difficulty ? 'i-heroicons-star-solid' : 'i-heroicons-star'" v-for="n in 3" :style='{ color: char.primaryColor }' class="size-5"/>
                        </div>
                        
                    </div>
                    <SkinsRenderer :skin-image="char.skinImage" :spin="true" :is-slim="char.isSlimSkin" class="scale-[50%]" />
                </div>
            </UCard>
        </UModal>

    </div>

</template>
<script setup lang="ts">
    import type CharacterSearchFilter from "@/types/CharacterSearchFilter";
    import type SmashCharacter from "@/types/SmashCharacter";


    const openModalIndex: Ref<number | null> = ref(null);


    const props = defineProps({
        searchFilter: {
            required: true,
            type: Object as () => CharacterSearchFilter
        }
    });

    const applyFilter = (chars: Array<SmashCharacter>) => {
        
        let out = chars;
        if (props.searchFilter.nameInput.replace(" ", "") != "") {
            out = out.filter(c => c.name.toLowerCase().trim().includes(props.searchFilter.nameInput.toLowerCase().trim()));
        }
        if (props.searchFilter.hideProChars) {
            out = out.filter(c => !c.isPro);
        }
        if (props.searchFilter.sortKey == 1) {
            out.sort((a, b) => a.name.localeCompare(b.name));
        } else if (props.searchFilter.sortKey == 2 || props.searchFilter.sortKey == 3) {
            const flipSort = props.searchFilter.sortKey == 3 ? -1 : 1;
            out.sort((a, b) => {
                if (a.difficulty - b.difficulty != 0) return (a.difficulty - b.difficulty) * flipSort;
                else return a.name.localeCompare(b.name) * flipSort;
            });
        }
        return out;
        
    }


    const allCharacters: Ref<Array<SmashCharacter>> = ref(await useGithubContent().getAllCharacters());
    const filteredChars = ref(applyFilter(allCharacters.value));

    watch(
        () => props.searchFilter,
        () => {
            filteredChars.value = applyFilter(allCharacters.value);
        }
    );


    
    
    
</script>