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
                        <div class="h-24 rounded-lg bg-backgroundColorLight animate-pulse"/>
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
                            <div v-for="n in 10" class="aspect-video rounded-lg bg-backgroundColorLight animate-pulse"/>
                        </div>
                    </template>
                </Suspense>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

    useSeoMeta({
        title: "SmashMC | Q&A and Guides", 
        ogTitle: "SmashMC | Q&A and Guides",
        description: "Any questions? Here are the answers. Take a look at useful guides on SmashMC.",
        ogDescription: "Any questions? Here are the answers. Take a look at useful guides on SmashMC.",
        ogType: "website",
        twitterCard: "summary_large_image",
        ogImage: "https://smashmc.eu/img/ogImage.png",
    });

</script>
