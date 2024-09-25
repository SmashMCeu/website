<template>
    <div class="relative">
        <div class="w-screen sm:h-screen sm:py-0 py-20 relative flex items-center justify-center">
            <img src="/img/herosection/background.webp" alt="" class="brightness-50 -z-10 w-full h-full fixed object-cover pointer-events-none select-none">
            
            <div class="flex items-center sm:mt-0 mt-10">
                <div data-aos="fade-right" class="md:w-[50%] max-w-[100rem] mx-10 md:mx-20">
                    <p class="text-4xl sm:text-5xl font-black text-textColorLight">SMASHMC.EU</p>
                    <p class="mt-2 text-lg sm:text-xl font-semibold text-textColor">{{ $t('hero_description') }}</p>
                    <div class="mt-8 flex flex-wrap gap-4">
                        <SocialCardMinecraft />
                        <SocialCardDiscord />
                    </div>
                </div>
                <div data-aos="fade-left" class="hidden md:block size-64 -mt-20">
                    <img src="/img/herosection/skinRender.webp" alt="">
                </div>
            </div>
        </div>
        <svg class="absolute origin-bottom scale-y-50 bottom-[-1px] fill-backgroundColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,160L26.7,160C53.3,160,107,160,160,181.3C213.3,203,267,245,320,245.3C373.3,245,427,203,480,202.7C533.3,203,587,245,640,234.7C693.3,224,747,160,800,154.7C853.3,149,907,203,960,208C1013.3,213,1067,171,1120,160C1173.3,149,1227,171,1280,186.7C1333.3,203,1387,213,1413,218.7L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
    </div>
</template>