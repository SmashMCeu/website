<template>
    <div>
        <div class="w-screen lg:h-screen flex items-center justify-center relative">

            <div class="mt-20 w-full h-full lg:p-20 px-4 py-8 grid
                        lg:grid-cols-4 lg:grid-rows-2 lg:gap-4
                        md:grid-cols-2 md:grid-rows-3 md:gap-4
                        grid-cols-1 grid-rows-4 gap-4
                        *:bg-backgroundColorLight *:rounded-lg *:overflow-hidden">

                <div class="lg:col-span-2 lg:row-span-2
                            md:col-span-2 row-span-full
                            md:py-10 md:px-14 px-5 py-4">
                    
                    <p class="font-black md:text-5xl text-3xl text-textColorLight">SmashMC.eu</p>
                    <p class="mt-2">SmashMC ist ein sehr sehr sehr sehr toller Server :D Also join bitti bitti! Und nochmal: SmashMC ist ein sehr sehr sehr sehr toller Server :D Also join bitti bittiSmashMC ist ein sehr sehr sehr sehr toller Server :D A</p>
                    <div class="inline-flex flex-wrap gap-2 mt-10">
                        <SocialCardMinecraft />
                        <SocialCardDiscord />
                    </div>

                </div>

                <div class="lg:row-start-1 lg:col-start-3">
                    <img src="/img/herosection/img1.webp" class="object-cover w-full h-full transition-transform duration-300 hover:scale-110">
                </div>
                <div class="lg:row-start-1 lg:col-start-4">
                    <img src="/img/herosection/img2.webp" class="object-cover w-full h-full transition-transform duration-300 hover:scale-110">
                </div>
                <div class="lg:row-start-2 lg:col-start-3 
                            md:col-span-2 md:row-span-1">
                    <img src="/img/herosection/img3.webp" class="object-cover w-full h-full transition-transform duration-300 hover:scale-110">
                </div>
            </div>
        
        </div>
    </div>
</template>
<script lang="ts" setup>
    
</script>