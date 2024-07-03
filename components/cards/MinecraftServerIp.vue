<template>

    <div class="p-[2px] pt-[2.5px] pr-[2.5px] rainbowGradientButton rounded-lg" @click="copyIp()">
        <div class="bg-headerCardsBackground/75 backdrop-blur-md w-[18rem] h-[4rem] rounded-lg
                    flex items-center justify-center gap-2 cursor-pointer text-white">

            <UIcon name="i-mdi-minecraft" class="size-10 mt-[1px]"/>
            <div class="flex flex-col justify-center mt-[-7px]">
                <p class="text-textColorLight font-semibold text-sm">{{ subtitle }}</p>
                <p class=" font-black text-xl leading-3">{{ $t("home.header.serverIp") }}</p>
            </div>

        </div>
    </div>

</template>
<script lang="ts" setup>

    const serverIp: string = useI18n().t("home.header.serverIp");
    const defaultText: string = useI18n().t("home.header.clickToCopy");
    const copiedText: string = useI18n().t("home.header.copiedText");
    const subtitle: Ref<string> = ref(defaultText);

    const copyIp = () => {
        navigator.clipboard.writeText(serverIp);
        subtitle.value = copiedText;
        setTimeout(() => subtitle.value = defaultText, 3000);
    }
</script>