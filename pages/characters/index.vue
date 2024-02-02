<script lang="ts" setup>

    const onlyFreeChars = ref(false);

</script>

<template>
    <div>

        <div class="w-screen h-screen bg-[url('/images/headers/HomeImage.png')] bg-cover 
                flex flex-col justify-center">
            <div class="absolute w-full h-full bg-gradient-to-r from-20% from-transparentBackground to-60%"></div>
        </div>

        <Suspense>
            <div class="pt-32 px-32">
                <div class="grid grid-cols-4 grid-rows-2 gap-x-20 gap-y-5 max-w-[80rem]">
                    <div class="col-start-1 col-span-4 flex flex-col justify-center">
                        <span class="i-mdi-magnify text-gray-500 size-8 absolute mt-1 ml-3"></span>
                        <input type="text" class="w-full h-12 pl-12 text-gray-400 placeholder:text-gray-500" placeholder="Mario">
                    </div>
                    <div class="flex flex-row items-center ml-2">
                        <input type="checkbox" v-model="onlyFreeChars">
                        <p class="text-gray-400 ml-3">Show only free Characters</p>
                    </div>
                    <div class="flex flex-row items-center">
                        <p class="absolute ml-4 text-gray-400 pointer-events-none">Sort by:</p>
                        <select class="h-full pl-20 pr-2 font-semibold">
                            <option value="">Name</option>
                            <option value="">Difficulty</option>
                        </select>
                    </div>
                </div>



                <SmashCharacterGrid class="pt-20"/>

                
                
                
            </div>

            <template #fallback>
                
                <div class="h-screen w-screen flex items-center justify-center">
                    <p class="text-white text-4xl">Loading...</p>
                </div>

            </template>
        </Suspense>

    </div>
</template>