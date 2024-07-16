<template>
    <div class="
        mt-20 max-w-[100rem]
        grid gap-8 grid-cols-1 lg:grid-cols-2">

        
        <GamemodesMode icon-file-name="Smash.jpg" :border="true" data-aos="zoom-in-right">
            <p class="text-lg sm:text-xl lg:text-lg font-semibold text-textColorLight">{{ $t("home.gamemodes.smash.title") }}</p>
            <p class="text-xs sm:text-base lg:text-sm text-textColor">{{ $t("home.gamemodes.smash.description") }}</p>
        </GamemodesMode>

        <GamemodesMode icon-file-name="Molecraft.jpg" data-aos="zoom-in-left">
            <p class="text-lg sm:text-xl lg:text-lg font-semibold text-textColorLight">{{ $t("home.gamemodes.molecraft.title") }}</p>
            <p class="text-xs sm:text-base lg:text-sm text-textColor">{{ $t("home.gamemodes.molecraft.description") }}</p>
        </GamemodesMode>


        <GamemodesMode icon-file-name="Gungame.jpg" data-aos="zoom-in-right">
            <p class="text-lg sm:text-xl lg:text-lg font-semibold text-textColorLight">{{ $t("home.gamemodes.smashGungame.title") }}</p>
            <p class="text-xs sm:text-base lg:text-sm text-textColor">{{ $t("home.gamemodes.smashGungame.description") }}</p>
        </GamemodesMode>

        <GamemodesMode icon-file-name="SmashTeams.jpg" data-aos="zoom-in-left">
            <p class="text-lg sm:text-xl lg:text-lg font-semibold text-textColorLight">{{ $t("home.gamemodes.smashTeams.title") }}</p>
            <p class="text-xs sm:text-base lg:text-sm text-textColor">{{ $t("home.gamemodes.smashTeams.description") }}</p>
        </GamemodesMode>
        

    </div>
</template>