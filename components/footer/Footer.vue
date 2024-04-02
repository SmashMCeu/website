<template>

    <div class="w-screen bg-darkBackground flex flex-wrap md:justify-between justify-center gap-20 py-20 px-40 text-textColorLight">
        
        <div class="flex flex-col gap-5">
            <div class="flex gap-3">
                <img src="/images/SmashLogo.svg" class="w-10 hover:animate-spin" @click="easterEggTriggerCount++">
                <div class="mt-[-2px]">
                    <p class="text-3xl font-black text-white">SMASHMC.eu</p>
                    <p class="leading-3">© 2017 - 2024</p>
                </div>
            </div>
            <div class="max-w-[25rem]">SmashMC ist der tollste und aller beste Minecraft Server, den es auf der ganzen Welt überhaupt gibt. Wir sind halt einfach besser als alle andere und dieser Text hier sollte definitiv auf der echten Webseite später stehen :D</div>
            <FooterSocialMediaIcons/>
        </div>
        <div class="flex flex-row gap-10 mt-8 md:mlr-0 mr-20">
            <div>
                <p class="font-bold text-lg mb-2">Rechtliches</p>
                <div class="child:flex child:items-center child:gap-1 hover:child:text-white child:mt-1">
                    <NuxtLink to="/imprint">Imprint</NuxtLink>
                </div>
            </div>
            <div>
                <p class="font-bold text-lg mb-2">Nützliche Links</p>
                <div class="child:flex child:items-center child:gap-1 hover:child:text-white child:mt-1">
                    <a href="/maps#howToBuildAMap">Build and submit own maps</a>
                    <a href="/characters#howToCreateACharacterSkin">How to create skins for characters</a>
                    <a href="">Report a Bug</a>
                </div>
            </div>
        </div>
    

    </div>
    <div class="fixed z-50 left-0 right-0 top-0 bottom-0 bg-black/10" v-if="easterEggTriggerCount >= 25">
        <img src="/images/easterEggs/marioEasterEgg.gif" class="w-full h-full">
    </div>

</template>
<script setup lang="ts">

    const easterEggTriggerCount = ref(0);


</script>