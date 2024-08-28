<template>
    <div>
        <UtilTitle subtitle="GUIDES" title="You have any questions? Here are the answers" />
        <div class="mt-10">
            <Suspense>
                <template #default>
                    <GuidesAllGuides />
                </template>
                <template #fallback>
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        <div class="aspect-video rounded-lg bg-backgroundColorLight animate-pulse" v-for="n in 10"></div>
                    </div>
                </template>
            </Suspense>
        </div>
    </div>
</template>
