
<template>
    <div class="w-screen h-screen bg-[url('/images/headers/HomeImage.png')] bg-cover 
                flex flex-col justify-center">
        <div class="absolute w-full h-full bg-gradient-to-r from-20% from-transparentBackground to-60%"></div>
    </div>


    
        
    
        
        
        
    <div class="px-32 flex flex-col items-center mt-36">
        <div class="w-full">
            <p class="subtitle text-2xl">Favourites</p>
            <p class="title">Our most played maps</p>
        </div>

        <div class="flex flex-wrap gap-5 mt-20">
            <div v-for="map in useSmashMaps().getAllWithName()" :style="{ backgroundImage: `url('${map.imagePath}')` }" class="mapCard cursor-pointer rounded-lg w-96 aspect-video flex items-center justify-center relative">
                <p class="font-bold text-4xl text-white z-10 opacity-0 transition-all">{{ map.name }}</p>
                <div class="absolute top-0 left-0 bottom-0 right-0 backdrop-blur-[4px] rounded-lg opacity-0 transition-opacity"></div>
            </div>
        </div>

        <p class="subtitle text-2xl mt-20">Be Creative</p>
        <p class="title">Here is a guide on how to submit your own map</p>

        <!-- TODO: Put the guide here -->


    </div>

    

    <div class="mt-32"></div>

</template>
<style>

    .mapCard:hover > div {
        opacity: 1 !important;
    }
    .mapCard:hover > p {
        opacity: 0.75 !important;
    }



</style>