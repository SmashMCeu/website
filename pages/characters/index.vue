<script lang="ts" setup>
    import type CharacterSearchFilter from '@/types/CharacterSearchFilter';

    const searchInput = ref("");

    const onlyFreeChars = ref(false);
    const sortBy: Ref<"name" | "difficulty"> = ref("name");

    
    const getSearchFilterUpdate = (): CharacterSearchFilter => {
        return {
            name: searchInput.value,
            onlyFree: onlyFreeChars.value,
            sortBy: sortBy.value,
        }
    }

    const searchFilter: Ref<CharacterSearchFilter> = ref(getSearchFilterUpdate());

    const onInputChange = () => {
        searchFilter.value = getSearchFilterUpdate();
    }

</script>

<template>
    <div>

        <div class="w-screen h-screen bg-[url('/images/headers/HomeImage.png')] bg-cover 
                flex flex-col justify-center">
            <div data-aos="fade-right" class="flex flex-col ml-40 max-w-[40rem] z-[1] mt-20">
            <p class="font-black text-white tracking-tight text-6xl">Characters</p>
            <p class="font-semibold text-textColorLight ml-2 mt-2 text-2xl tracking-tight leading-7">SmashMC offers unique games you can play with your friends. Take a look at our Games or just join the minecraft server and experience it yourself!</p>
            </div>
            <div class="absolute w-full h-full bg-gradient-to-r from-20% from-transparentBackground to-60%"></div>
        </div>

        <Suspense>
            <div data-aos="fade-up" class="pt-32 px-32">
                <div class="max-w-[80rem]" >
                    <div class="col-start-1 col-span-4 flex flex-col justify-center">
                        <span class="i-mdi-magnify text-gray-500 size-8 absolute mt-1 ml-3"></span>
                        <input @input="onInputChange" type="text" class="w-full h-12 pl-12 text-gray-400 placeholder:text-gray-500" placeholder="Mario" v-model="searchInput">
                    </div>
                    <div class="flex flex-row mt-4 relative h-12 gap-8">
                        <div class="flex flex-row items-center ml-2">
                            <input @change="onInputChange" type="checkbox" class="!size-5" v-model="onlyFreeChars">
                            <p class="text-gray-400 ml-3">Show only free Characters</p>
                        </div>
                        <div class="flex flex-row items-center h-full">
                            <p class="absolute ml-4 text-gray-400 pointer-events-none">Sort by:</p>
                            <select @change="onInputChange" class="h-full pl-20 pr-2 font-semibold" v-model="sortBy">
                                <option value="name">Name</option>
                                <option value="difficulty">Difficulty</option>
                            </select>
                        </div>
                    </div>
                    
                </div>



                <SmashCharacterGrid class="pt-20 pb-20" :filter="searchFilter"/>
                

                
                
                
            </div>

            <template #fallback>
                
                <div class="h-screen w-screen flex items-center justify-center">
                    <p class="text-white text-4xl">Loading...</p>
                </div>

            </template>
        </Suspense>

    </div>
</template>