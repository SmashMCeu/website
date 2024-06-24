<template>
    <div>
        <PageHeaderHome />

        <div class="p-10 md:p-20 flex flex-col gap-32 items-center">
            <div class="flex flex-col lg:flex-row gap-4 sm:gap-10 lg:gap-20 lg:max-w-[80rem] items-center md:items-start">
                <div class="aspect-video bg-darkBackground w-full lg:w-[50%]" data-aos="fade-right">

                    <iframe class="w-full h-full" src="https://www.youtube.com/embed/Jd9zRqLfHm0?si=DIMkEvLKTHFEU5JG" title="Server intro video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </div>
                <div class="flex-1" data-aos="fade-left">
                    <p class="text-lg md:text-xl lg:text-2xl tracking-tight text-primary-300">What is SmashMC?</p>
                    <p class="text-2xl md:text-3xl lg:text-4xl font-bold">We are just better than Gomme</p>
                    <p class="text-textColorLight mt-2">
                        So schön kleiner Text bli bla Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, perferendis perspiciatis voluptatum non quas dolorum tempore rem eaque dolor laboriosam praesentium optio temporibus minima animi repudiandae architecto asperiores ab qui!
                    </p>
                </div>
            </div>



            <div class="w-full flex flex-col items-center" data-aos="fade-up">
                <div class="flex flex-col items-center">
                    <p class="text-xl tracking-tight text-primary-300">Maps</p>
                    <p class="text-2xl md:text-3xl font-bold text-center">Take a look at our maps</p>
                </div>
                <MapsCarousel class="mt-5 md:mt-10 max-w-[55rem]"/>
                <UButton variant="outline" icon="i-heroicons-chevron-right" trailing size="lg" class="mt-8" to="maps">All Maps</UButton>
            </div>
            


            <div class="w-full flex flex-col items-center" data-aos="zoom-in-up">
                <div class="flex flex-col items-center">
                    <p class="text-xl tracking-tight text-primary-300">Characters</p>
                    <p class="text-2xl md:text-3xl font-bold text-center">Some Characters you can play</p>
                </div>
                <SkinsPreviewGroup />
                <UButton variant="outline" icon="i-heroicons-chevron-right" trailing size="lg" class="mt-8" to="characters">All Characters</UButton>
            </div>


            <div class="w-full flex flex-col items-center" data-aos="zoom-in">
                <div class="flex flex-col items-center">
                    <p class="text-xl tracking-tight text-primary-300">Gamemodes</p>
                    <p class="text-2xl md:text-3xl font-bold text-center">We also have some other gamemodes for you</p>
                </div>
                <GamemodesList />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">


</script>