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
            <p class="max-w-[25rem] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusantium necessitatibus, obcaecati ea sit</p>
            <FooterSocialIcons class="mt-2"/>
        </div>
        
        <div class="flex md:gap-10 gap-4 md:flex-row flex-col *:flex *:flex-col">
            <div>
                <p class="text-textColorLight font-bold text-lg">Nützliche Links</p>
                <NuxtLink to="/" class="text-textColor">Home</NuxtLink>
            </div>
            <div>
                <p class="text-textColorLight font-bold text-lg">Rechtliches</p>
                <NuxtLink to="/imprint" class="text-textColor">Impressum & Datenschutz</NuxtLink>
            </div>
        </div>

    </div>
</template>