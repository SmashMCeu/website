<template>

    <div class="w-screen bg-darkBackground flex flex-wrap md:justify-between gap-20 py-20 px-10 md:px-40 text-textColorLight">
        
        <div class="flex flex-col gap-5">
            <div class="flex gap-3">
                <img src="/images/SmashLogo.svg" class="w-10 hover:animate-spin" @click="easterEggTriggerCount++">
                <div class="mt-[-2px]">
                    <p class="text-3xl font-black text-white">{{ $t("footer.ipText") }}</p>
                    <p class="leading-3">{{ $t("footer.copyright") }}</p>
                </div>
            </div>
            <div class="max-w-[25rem]">{{ $t("footer.serverDescription") }}</div>
            <FooterSocialMediaIcons/>
        </div>
        <div class="flex md:flex-row flex-col-reverse gap-10 md:mt-8">
            <div>
                <p class="font-bold text-lg mb-2">{{ $t("footer.legal.sectionTitle") }}</p>
                <div class="child:flex child:items-center child:gap-1 hover:child:text-white child:mt-1">
                    <NuxtLink to="/imprint">{{ $t("footer.legal.imprint") }}</NuxtLink>
                </div>
            </div>
            <div>
                <p class="font-bold text-lg mb-2">{{ $t("footer.usefulPages.sectionTitle") }}</p>
                <div class="child:flex child:items-center child:gap-1 hover:child:text-white child:mt-1">
                    <a href="/rules">{{ $t("footer.usefulPages.someOtherLinks") }}</a>
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