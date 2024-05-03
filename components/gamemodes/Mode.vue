<template>
    <div>

        <div class="flex bg-darkBackground rounded-lg overflow-hidden items-center" :class='{ "border-primary border shadow-sm shadow-primary-600": props.border }'>
            <img :src='"./images/gamemodes/" + $props.iconFileName' class="size-28 sm:size-32 md:size-40 ">

            <div class="px-4 sm:px-10 md:px-12">
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