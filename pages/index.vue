<template>
    <div class="flex flex-col gap-24">
    
        <div class="flex flex-col gap-2">
            <SocialCardPlayerCount />
            <SocialCardMinecraft />
            <SocialCardDiscord />
            
        </div>

        <TopFivePlayers />

        <UtilTitle subtitle="SUBTITLE" title="Title Lorem Ipsum dolor sit amet" />
        <UtilTitle subtitle="SubTitle222" title="222Title Lorem Ipsum dolor sit amet" orientation="left"/>
        <UtilTitle subtitle="SubTitle333" title="333Title Lorem Ipsum dolor sit amet" orientation="right"/>
    
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