<template>
    <div>

        <div class="relative flex bg-darkBackground rounded-lg overflow-hidden items-center" :class='{ "colored-border": props.border }'>
            <img :src='"./images/gamemodes/" + $props.iconFileName' class="size-full hidden sm:block sm:size-32 md:size-40 rounded">

            <div class="p-4 sm:py-0 sm:px-10 md:px-12">
                <slot></slot>
            </div>
        </div>

        

    </div>
</template>

<script lang="ts" setup>

    const props = defineProps({
        iconFileName: {
            required: true,
            type: String,
        },
        border: {
            required: false,
            default: false,
            type: Boolean,
        }
    });

</script>
<style scoped>

    .colored-border {
        
        animation: borderAnimation 10s infinite;

    }

    @keyframes borderAnimation {
        0% {
            -webkit-box-shadow: 0px 0px 10px 0px rgba(255,0,255,1);
            -moz-box-shadow: 0px 0px 10px 0px rgba(255,0,255,1);
            box-shadow: 0px 0px 10px 0px rgba(255,0,255,1);
        }
        25% {
            -webkit-box-shadow: 0px 0px 10px 0px rgb(0, 195, 255);
            -moz-box-shadow: 0px 0px 10px 0px rgb(0, 195, 255);
            box-shadow: 0px 0px 10px 0px rgb(0, 195, 255);
        }
        50% {
            -webkit-box-shadow: 0px 0px 10px 0px rgb(0, 255, 55);
            -moz-box-shadow: 0px 0px 10px 0px rgb(0, 255, 55);
            box-shadow: 0px 0px 10px 0px rgb(0, 255, 55);
        }
        75% {
            -webkit-box-shadow: 0px 0px 10px 0px rgb(0, 195, 255);
            -moz-box-shadow: 0px 0px 10px 0px rgb(0, 195, 255);
            box-shadow: 0px 0px 10px 0px rgb(0, 195, 255);
        }
        100% {
            -webkit-box-shadow: 0px 0px 10px 0px rgba(255,0,255,1);
            -moz-box-shadow: 0px 0px 10px 0px rgba(255,0,255,1);
            box-shadow: 0px 0px 10px 0px rgba(255,0,255,1);
        }
    }

    

</style>