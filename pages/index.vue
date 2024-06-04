<script lang="ts" setup>

    const characters: Ref<Character[]> = useState(() => []);

    onBeforeMount(async () => {

        characters.value = await useCharacters().getPreviewChracters();

    });

    const calcSkinPreviewCharacterOpacity = (index: number): number => {

        const middleIndex: number = 2;
        const distanceToMiddle = Math.abs(index - middleIndex)

        return 0.8 - distanceToMiddle / 5
    }


    const getCarouselMaps = () => {
        return useSmashMaps().getAll();
    };

    const carouselMaps: string[] = getCarouselMaps();



</script>


<template>
    <div class="w-screen h-screen bg-[url('/images/headers/HomeImage.png')] bg-cover 
                flex flex-col justify-center">
        <div data-aos="fade-right" class="flex flex-col ml-40 max-w-[40rem] z-[1] mt-20">
            <p class="font-black text-white tracking-tight text-6xl">We are SmashMC</p>
            <p class="font-semibold text-textColorLight ml-2 mt-2 text-2xl tracking-tight leading-7">SmashMC offers unique games you can play with your friends. Take a look at our Games or just join the minecraft server and experience it yourself!</p>
            <div class="inline-flex gap-8 mt-10 items-center">
                <ServerIpCard />
                <DiscordCard />
            </div>
        </div>
        <div class="absolute w-full h-full bg-gradient-to-r from-20% from-transparentBackground to-60%"></div>
    </div>
    

    <div data-aos="fade-up" class="flex items-start justify-evenly gap-10 px-40 py-20">

        <div class="bg-darkBackground aspect-video w-96 rounded-lg flex-grow"></div>
        <div class="max-w-[40%] mt-5">
            <p class="subtitle">Who are we?</p>
            <p class="title font-semibold">Heading Text dies das Annanaaaas</p>
            <p class="text-lg text-textColor mt-2">Dies das Annaaannaaas. Mario mit seiner STAMPFATACKE ist zu OP, also auch einfach mal Mario nehmen anstatt zu cheaten ihr schlechte Menschen. Aber sonst ist SmashMC ein wirklich sehr toller Server also joint jetzt.</p>
        </div>

    </div>


    <div data-aos="fade-up" class="flex flex-col items-center">


        <p class="subtitle">Characters</p>
        <p class="title">The most loved characters</p>
        

        <div class="text-white flex gap-14">
            <div v-for="(character, index) of characters">
                <SkinRenderer :is-slim="character.isSlimSkin" :skin-image="character.skinImage" :style="{ opacity: calcSkinPreviewCharacterOpacity(index) }" class="scale-[0.7]"/>
            </div>
        </div>

        <NuxtLink to="/characters" class="outline outline-1 outline-textColor text-textColor hover:outline-primary hover:text-primary transition-all rounded-lg flex items-center justify-center px-5 py-2">
            <p>All Characters</p>
            <span class="i-solar-arrow-right-outline mt-1 ml-2 size-5"></span>
        </NuxtLink>

    </div>

    <div data-aos="fade-up" class="flex flex-col items-center mt-32">

        <p class="subtitle">Maps</p>
        <p class="title">Take a look at our Smash maps</p>

        <div>
            <carousel :items-to-show="3" :wrapAround="true" :autoplay="3000" :transition="1000" :pauseAutoplayOnHover="true" 
                class="w-[60rem] mt-10">

                <slide v-for="imagePath in carouselMaps" :key="imagePath" class="w-80 aspect-video">

                    <img :src="imagePath" class="object-cover rounded-lg">
                
                </slide>

                <template>
                    <navigation />
                </template>
            </carousel>
        </div>

        <NuxtLink to="/maps" class="mt-6 outline outline-1 outline-textColor text-textColor hover:outline-primary hover:text-primary transition-all rounded-lg flex items-center justify-center px-5 py-2">
            <p>See more</p>
            <span class="i-solar-arrow-right-outline mt-1 ml-2 size-5"></span>
        </NuxtLink>


        <div class="mt-32"></div>

    </div>
    
</template>
<style scoped>

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.5;
  transform: rotateY(-40deg) scale(0.7);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.8);
  filter: brightness(0.6);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-20deg) scale(0.8);
  filter: brightness(0.6);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(20deg) scale(0.8);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
  z-index: 2;
}

</style>