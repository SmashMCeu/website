<template>
    <div class="flex flex-col items-center gap-24 *:max-w-[75rem] *:w-full">
        
        <div>
            <UtilTitle subtitle="Q&A" title="You have any questions? Here are the answers" />
            <div class="mt-10">
                <Suspense>
                    <template #default>
                        <QnaList />
                    </template>
                    <template #fallback>
                        <div class="h-24 rounded-lg bg-backgroundColorLight animate-pulse"></div>
                    </template>
                </Suspense>
            </div>
        </div>

        <div>
            <UtilTitle subtitle="GUIDES" title="Take a look at useful guides:" />
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
    </div>
</template>
