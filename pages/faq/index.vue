<template>
    <div class="flex flex-col items-center gap-24 *:max-w-[75rem] *:w-full">
        
        <div>
            <UtilTitle subtitle="FAQ" title="Du hast Fragen? Hier sind die Antworten!" />
            <div class="mt-10">
                <Suspense>
                    <template #default>
                        <FaqList />
                    </template>
                    <template #fallback>
                        <div class="h-24 rounded-lg bg-backgroundColorLight animate-pulse"></div>
                    </template>
                </Suspense>
            </div>
        </div>

        <div>
            <UtilTitle subtitle="GUIDES" title="Ein paar nützliche Guides" />
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
<script setup lang="ts">

    useSeoMeta({
        title: "SmashMC | FAQ und Guides", 
        ogTitle: "SmashMC | FAQ und Guides",
        description: "Irgendwelche Fragen? Hier findest du eine Antwort. Take a look at useful guides on SmashMC.",
        ogDescription: "Any questions? Here are the answers. Take a look at useful guides on SmashMC.",
        ogType: "website",
        twitterCard: "summary_large_image",
        ogImage: "https://smashmc.eu/img/ogImage.png",
    });

</script>
