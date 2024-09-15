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
<script setup lang="ts">

    useSeoMeta({
        title: "SmashMC | Explore our Maps",
        ogTitle: "SmashMC | Explore our Maps",
        description: "Explore the different maps available on SmashMC. We offer a variety of maps for you to play on, each with its own unique style and gameplay.",
        ogDescription: "Explore the different maps available on SmashMC. We offer a variety of maps for you to play on, each with its own unique style and gameplay.",
        ogType: "website",
        twitterCard: "summary_large_image",
        ogImage: "https://beta.smashmc.eu/img/ogImage.webp",
    });

</script>