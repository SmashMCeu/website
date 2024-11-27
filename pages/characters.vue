<template>
    <div>
        <Suspense>
            <template #default>
                <CharactersGrid />
            </template>
            <template #fallback>
                <div class="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <div v-for="n of 10" class="bg-backgroundColorLight rounded-lg animate-pulse lg:h-[19rem] sm:h-[17rem] h-[14rem]"></div>
                </div>
            </template>
        </Suspense>
    </div>
</template>
<script lang="ts" setup>
    
    useSeoMeta({
        title: "SmashMC | Smash Characters",
        ogTitle: "SmashMC | Smash Characters",
        description: "Explore the different characters available on SmashMC. We offer a variety of characters for you to play as, each with its own unique style and gameplay.",
        ogDescription: "Explore the different characters available on SmashMC. We offer a variety of characters for you to play as, each with its own unique style and gameplay.",
        ogType: "website",
        twitterCard: "summary_large_image",
        ogImage: "https://smashmc.eu/img/ogImage.webp",
    });
    
</script>