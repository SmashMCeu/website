<template>
    <div>

        <PageHeaderMaps />

        
        <div class="p-10 md:p-20">
            <Suspense>
                <div class="grid gap-8
                            grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <MapsList />
                </div>
                
                <template #fallback>
                    <div class="grid gap-8
                                grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <USkeleton v-for="n in 12"
                        class="aspect-video rounded-lg" />
                    </div>
                </template>
            </Suspense>


            <MarkdownRenderer file="howToBuildAMap" class="mt-40" />
        </div>     
    

    </div>
</template>