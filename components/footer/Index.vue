<template>
    <div class="w-full bg-backgroundColorLight lg:px-32 px-12 py-10 flex lg:flex-row flex-col lg:gap-0 gap-10 lg:items-center justify-between">
        
        <div>
            <div class="flex gap-3">
                <img class="w-10 hover:animate-spin" src="/img/logo.svg" alt="logo">
                <div>
                    <p class="text-textColorLight font-black text-2xl">SMASHMC.EU</p>
                    <p class="text-textColor/75 leading-3">© 2017 - 2024</p>
                </div>
            </div>
            <p class="max-w-[25rem] mt-4">We are not affiliated with Mojang or Microsoft</p>
            <FooterSocialIcons class="mt-6"/>
        </div>
        
        <div class="flex md:gap-10 gap-4 md:flex-row flex-col *:flex *:flex-col">
            <div>
                <p class="text-textColorLight font-bold text-lg">Nützliche Links</p>
                <NuxtLink to="/guides/map_guide" class="text-textColor">Wie baut man eine Map</NuxtLink>
                <NuxtLink to="/guides/entertainer_anforderungen" class="text-textColor">Bewerbung als Entertainer</NuxtLink>
                <NuxtLink to="/guides/partner_anforderungen" class="text-textColor">Bewerbung als Partner</NuxtLink>
            </div>
            <div>
                <p class="text-textColorLight font-bold text-lg">Rechtliches</p>
                <NuxtLink to="/imprint" class="text-textColor">Impressum & Datenschutz</NuxtLink>
            </div>
        </div>

    </div>
</template>