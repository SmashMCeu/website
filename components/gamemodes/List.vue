<template>
    <div class="
        mt-20 max-w-[100rem]
        grid gap-8 grid-cols-1 lg:grid-cols-2">

        
        <GamemodesMode icon-file-name="Smash.jpg" :border="true">
            <p class="text-lg sm:text-xl lg:text-lg font-semibold text-textColorLight">Smash</p>
            <p class="text-xs sm:text-base lg:text-sm text-textColor">Molecraft ist so nen Modus, wo so Kisten sind, die man looten kann. Wenn man jemanden beim Buddeln findet, versucht man ihn zu töten :D</p>
        </GamemodesMode>

        <GamemodesMode icon-file-name="Molecraft.jpg">
            <p class="text-lg sm:text-xl lg:text-lg font-semibold text-textColorLight">Molecraft</p>
            <p class="text-xs sm:text-base lg:text-sm text-textColor">Molecraft ist so nen Modus, wo so Kisten sind, die man looten kann. Wenn man jemanden beim Buddeln findet, versucht man ihn zu töten :D</p>
        </GamemodesMode>


        <GamemodesMode icon-file-name="Gungame.jpg">
            <p class="text-lg sm:text-xl lg:text-lg font-semibold text-textColorLight">Smash Gungame</p>
            <p class="text-xs sm:text-base lg:text-sm text-textColor">Wie Smash, aber unendlich Leben. Der erste mit 7 Kills gewinnt.<br>Kill = neuer Character</p>
        </GamemodesMode>

        <GamemodesMode icon-file-name="Molecraft.jpg">
            <p class="text-lg sm:text-xl lg:text-lg font-semibold text-textColorLight">Smash Teams</p>
            <p class="text-xs sm:text-base lg:text-sm text-textColor">Wie Smash, aber in 2er Teams (2v2v2v2)</p>
        </GamemodesMode>
        

    </div>
</template>