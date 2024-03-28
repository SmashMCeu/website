<template>

    <div class="p-[2px] pt-[2.5px] pr-[2.5px] rainbowGradientButton rounded-lg" @click="copyIp()">
        <div class="bg-headerCardsBackground/75 backdrop-blur-md w-[14rem] h-[4rem] rounded-lg
                    flex items-center justify-center gap-2 cursor-pointer text-white">

            <UIcon name="i-mdi-minecraft" class="size-10 mt-[1px]"/>
            <div class="flex flex-col justify-center mt-[-7px]">
                <p class="text-textColorLight font-semibold text-sm">{{ subtitle }}</p>
                <p class=" font-black text-xl leading-3">SMASHMC.EU</p>
            </div>

        </div>
    </div>

</template>
<script lang="ts" setup>

    const defaultText: string = "CLICK TO COPY";
    const copiedText: string = "COPIED";
    const subtitle: Ref<string> = ref(defaultText);

    const copyIp = () => {
        navigator.clipboard.writeText("smashmc.eu");
        subtitle.value = copiedText;
        setTimeout(() => subtitle.value = defaultText, 3000);
    }
</script>