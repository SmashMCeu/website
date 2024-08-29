<template>
    <div>
        <Suspense>
            <template #default>
                <CharactersGird />
            </template>
            <template #fallback>
                <div class="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <div v-for="n of 10" class="bg-backgroundColorLight rounded-lg animate-pulse lg:h-[19rem] sm:h-[17rem] h-[14rem]"></div>
                </div>
            </template>
        </Suspense>
    </div>
</template>
<script lang="ts" setup>
    
    
</script>