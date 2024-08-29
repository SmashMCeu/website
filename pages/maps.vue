<template>
    <div>
        <Suspense>
            <template #default>
                <MapsGrid />
            </template>
            <template #fallback>
                <div class="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    <div v-for="n of 10" class="bg-backgroundColorLight rounded-lg animate-pulse aspect-video"></div>
                </div>
            </template>
        </Suspense>
    </div>
</template>