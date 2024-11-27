<template>
    <div>
        <Suspense>
            <template #default>
                <ItemsGrid />
            </template>
            <template #fallback>
                <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    <div v-for="n of 20" class="bg-backgroundColorLight rounded-lg animate-pulse lg:h-[19rem] sm:h-[17rem] h-[14rem]"></div>
                </div>
            </template>
        </Suspense>
    </div>
</template>
<script setup lang="ts">

    useSeoMeta({
        title: "SmashMC | Smash Items",
        ogTitle: "SmashMC | Smash Items",
        description: "Take a look at the different items available on SmashMC. We offer a variety of items for you to use, each with its own unique abilities and effects.",
        ogDescription: "Take a look at the different items available on SmashMC. We offer a variety of items for you to use, each with its own unique abilities and effects.",
        ogType: "website",
        twitterCard: "summary_large_image",
        ogImage: "https://smashmc.eu/img/ogImage.webp",
    });

</script>