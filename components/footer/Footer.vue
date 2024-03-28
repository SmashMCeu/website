<template>

    <div class="w-screen bg-darkBackground flex flex-wrap md:justify-between justify-center gap-20 py-20 px-40 text-textColorLight">
        
        <div class="flex flex-col gap-5">
            <div class="flex gap-3">
                <img src="/images/SmashLogo.svg" class="w-10 hover:animate-spin">
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
                    <NuxtLink to="/tos">Terms of Service</NuxtLink>
                    <NuxtLink to="/privacypolicy">Privacy Policy</NuxtLink>
                    <a href="https://clickspeeder.com/cookie-clicker/">Cookies</a>
                </div>
            </div>
            <div>
                <p class="font-bold text-lg mb-2">Nützliche Links</p>
                <div class="child:flex child:items-center child:gap-1 hover:child:text-white child:mt-1">
                    <a href="">Build and submit own maps</a>
                    <a href="">Report a Bug</a>
                    <a href="">Quickstart Guide</a>
                </div>
            </div>
        </div>
    

    </div>

</template>