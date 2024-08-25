<template>
    <div>
        <p class="text-4xl text-primary">Hello!</p>
        <SwitchRoot v-model:checked="switchState" class="w-[42px] h-[25px] flex bg-black/50 shadow-sm rounded-full relative data-[state=checked]:bg-black">
            <SwitchThumb class="block w-[21px] h-[21px] my-auto bg-primary shadow-sm rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"/>
        </SwitchRoot>
    </div>
</template>
<script setup lang="ts">

    const switchState = ref(false)

</script>