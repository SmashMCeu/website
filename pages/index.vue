<template>
    <div class="flex flex-col gap-24 pt-20">

        <div class="w-full flex flex-col items-center">
            <UtilTitle subtitle="SMASH" :title="$t('top_5_title')" />
            <Suspense>
                <template #default>
                    <TopFivePlayers />
                </template>
                <template #fallback>
                    <p class="text-xl">Loading...</p>
                </template>
            </Suspense>
        </div>
        
        
        <div>
            <UtilTitle subtitle="MINISPIELE" :title="$t('gamemodes_title')" />
            <Suspense>
                <template #default>
                    <Gamemodes />
                </template>
                <template #fallback>
                    <p class="text-xl">Loading...</p>
                </template>
            </Suspense>
        </div>


        <div class="mt-40"></div>
    </div>
</template>
<script setup lang=ts>

    definePageMeta({
        layout: "index-page",
    });

    useSeoMeta({
        title: "SmashMC | The Ultimate Smash Network!",
        ogTitle: "SmashMC | The Ultimate Smash Network!",
        description: "SmashMC is a unique Minecraft network with exciting mini-games. Our unique Smash mode is offering the best gameplay experience around. You can also explore different styles of Smash, such as GunGame and Teams, adding new twists to the game!",
        ogDescription: "SmashMC is a unique Minecraft network with exciting mini-games. Our unique Smash mode is offering the best gameplay experience around. You can also explore different styles of Smash, such as GunGame and Teams, adding new twists to the game!",
        ogType: "website",
        twitterCard: "summary_large_image",
        ogImage: "https://beta.smashmc.eu/img/ogImage.webp",
    });

</script>