<script lang="ts" setup>


    const searchCharacter = useRoute().params.character;

</script>


<template>

    
    <Suspense>

        
        <div class="h-screen flex items-center justify-center">
            <!--@vue-ignore-->
            <SmashCharacterInfoCard :search-character="searchCharacter"/>
        </div>

        <template #fallback>
                
            <div class="h-screen w-screen flex items-center justify-center">
                <p class="text-white text-4xl">Loading...</p>
            </div>

        </template>

    </Suspense>


</template>