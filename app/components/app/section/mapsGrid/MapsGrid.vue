<template>
    <AppSection
        pretitle="Our Smash Maps - Sorted by times played"
        title="Explore all our unique Maps"
    >
        <div class="flex flex-col gap-8 items-center">
            <div class="flex items-center gap-4 px-8 py-4 bg-accent rounded-lg">
                <Icon
                    name="lucide:badge-info"
                    :size="25"
                />
                <p class="-mt-0.5">
                    With the <strong>PRO Rank</strong> you have following <strong>benefits</strong>:
                    <ul class="list-disc pl-4">
                        <li>Force maps in Smash rounds</li>
                        <li>Play with exclusive items</li>
                    </ul>
                </p>
            </div>

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
