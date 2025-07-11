<template>
    <AppSection
        pretitle="Our Smash Maps"
        title="Explore all our unique Maps"
    >
        <div class="flex flex-col gap-4 items-center">
            <Suspense>
                <AppSectionMapsGridWrapper />

                <template #fallback>
                    <div class="flex items-center text-center justify-center">
                        <p>Loading maps...</p>
                    </div>
                </template>
            </Suspense>
        </div>
    </AppSection>
</template>
