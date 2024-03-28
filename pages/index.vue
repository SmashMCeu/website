<template>
    <div>
        <PageHeaderHome />

        <div class="p-10 md:p-20">

            <div class="w-full flex flex-col items-center">
                <div class="flex flex-col items-center">
                    <p class="text-xl tracking-tight text-primary-300">Maps</p>
                    <p class="text-2xl md:text-3xl font-bold text-center">Take a look at our maps</p>
                </div>
                <MapsCarousel class="mt-5 md:mt-10 max-w-[55rem]"/>
                <UButton variant="outline" icon="i-heroicons-chevron-right" trailing size="lg" class="mt-8" to="maps">All Maps</UButton>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

    

</script>