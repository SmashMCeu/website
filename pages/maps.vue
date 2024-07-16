<template>
    <div>

        <PageHeaderMaps />

        
        <div class="p-10 md:p-20">
            <Suspense>
                <div class="grid gap-8
                            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <MapsList />
                </div>
                
                <template #fallback>
                    <div class="grid gap-8
                                grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        <USkeleton v-for="n in 12"
                        class="aspect-video rounded-lg" />
                    </div>
                </template>
            </Suspense>
        </div>     
    

    </div>
</template>
<script setup lang="ts">

    useHead({
        title: "SmashMC | Maps",
    });

</script>