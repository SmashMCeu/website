<script lang="ts" setup>


    const props = defineProps({

        data: {
            required: true,
            type: Object as () => Character,
        }

    });

    const getCharacterLink = () => {
        return `/characters/${props.data.name}`;
    }

</script>

<template>
    <a :href="getCharacterLink()">
        <div class="px-20 bg-darkBackground flex flex-col items-center relative overflow-hidden rounded-md cursor-pointer">
            

            <div v-if="props.data.isPro" class="absolute top-5 -left-10 -rotate-45 bg-[#2CE3E3] w-40 h-8 flex items-center justify-center">
                <p class="font-black text-[#055D5D]">PRO</p>
            </div>


            <p class="mt-10 text-2xl font-bold" :style="{ color: props.data.primaryColor }">{{ props.data.name }}</p>
            <SkinRenderer :is-slim="props.data.isSlimSkin" :skin-image="props.data.skinImage" class="scale-75 "/>

        </div>
    </a>

</template>