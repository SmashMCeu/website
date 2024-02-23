<script lang="ts" setup>


    const searchCharacter = useRoute().params.character;

</script>


<template>

    
    <Suspense>

        
        <div class="h-screen flex items-center justify-center">
            <div class="bg-darkBackground px-20 rounded-xl mt-10 relative">
                <div class="left-6 top-6 absolute">
                    <span @click="$router.back()" class="i-solar-square-arrow-left-outline size-8 text-textColor hover:text-textColorLight cursor-pointer transition-colors"></span>
                </div>
                <!--@vue-ignore-->
                <SmashCharacterInfoCard :search-character="searchCharacter"/>
            </div>
        </div>

        <template #fallback>
                
            <div class="h-screen w-screen flex items-center justify-center">
                <p class="text-white text-4xl">Loading...</p>
            </div>

        </template>

    </Suspense>


</template>