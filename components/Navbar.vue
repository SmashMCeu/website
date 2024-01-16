<template>
    <div class="
        fixed left-0 right-0 top-0
        px-20 py-4
        flex justify-between items-center
        bg-transparentBackground backdrop-blur-md
        z-50">

        
        <a href="/" class="cursor-pointer hover:child:animate-spin">
            <img src="/images/SmashMCLogo.svg" class="h-12">
        </a>
        
        
        <div class="flex gap-12 text-textColorLight text-lg hover:child:text-white child:transition-colors">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/maps">Maps</NuxtLink>
            <NuxtLink to="/characters">Characters</NuxtLink>
        </div>

        <a href="https://shop.smashmc.eu" target="_blank">
            <div class="flex items-center justify-center px-6 py-2 rounded outline outline-1 hover:bg-transparentBackgroundLight transition-all outline-primary text-primary">
                <span class="i-solar-shop-bold mr-2 mt-[1px] size-6"></span>
                <p class="font-semibold text-lg">Shop</p>
            </div>
        </a>
        


    </div>
</template>