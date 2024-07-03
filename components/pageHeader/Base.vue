<template>
    <div>
        <div class="w-screen h-screen bg-cover relative
                    flex flex-col justify-center" :style='{ backgroundImage: "url(\"/images/headers/" + props.backgroundImage + "\")" }'>
            <div class="flex flex-col ml-10 md:ml-40 max-w-[80%] md:max-w-[40rem] z-[1] mt-20">
                <slot></slot>
            </div>
            <div class="absolute w-screen h-screen bg-gradient-to-r from-100% md:from-20% md:from-gray-950/80 from-gray-950/75"></div>
        </div>
    </div>
</template>
<script setup lang="ts">

    const props = defineProps({
        backgroundImage: {
            default: "DefaultHeader.jpg",
            type: String,
        }
    })

</script>