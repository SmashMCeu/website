<template>
    <div>
        <div class="w-screen h-screen relative flex items-center justify-center">
            <img src="/img/herosection/background.webp" alt="" class="brightness-50 -z-10 w-full h-full absolute object-cover pointer-events-none select-none">
            
            <div class="flex items-center">
                <div class="md:w-[50%] max-w-[100rem] mx-10 md:mx-20">
                    <p class="text-4xl sm:text-5xl font-black text-textColorLight">SMASHMC.EU IST KRASS</p>
                    <p class="mt-2 text-lg sm:text-xl font-semibold text-textColor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae maxime, cupiditate illum ipsa nulla quos eligendi impedit dicta nostrum odio natus expedita nam consequatur fugit? Doloremque voluptas repudiandae soluta.</p>
                    <div class="mt-8 flex flex-wrap gap-4">
                        <SocialCardMinecraft />
                        <SocialCardDiscord />
                    </div>
                </div>
                <div class="hidden md:block size-64 -mt-20">
                    <img src="/img/herosection/skinRender.webp" alt="">
                </div>
            </div>
        </div>
    </div>
</template>