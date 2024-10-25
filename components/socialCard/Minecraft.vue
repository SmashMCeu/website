<template>
    <SocialCardBase @click="copyIp()" class="cursor-pointer">
        <template #icon>
            <svg class="text-[#52a535] w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m2 4v4h4v2H8v6h2v-2h4v2h2v-6h-2v-2h4V6h-4v4h-4V6z"/></svg>
        </template>
        <template #content>
            <p class="text-textColor">{{ subtitle }}</p>
            <p class="font-bold text-xl leading-3 text-textColorLight">{{ serverIp }}</p>
        </template>
    </SocialCardBase>
</template>
<script lang="ts" setup>

    const serverIp: string = "play.smashmc.eu";
    const defaultText: string = "click to copy";
    const copiedText: string = "copied";
    const subtitle: Ref<string> = ref(defaultText);
    const clickTextActive: Ref<boolean> = ref(false);

    const copyIp = () => {
        navigator.clipboard.writeText(serverIp);
        if (!clickTextActive.value) {
            clickTextActive.value = true;
            subtitle.value = copiedText
            setTimeout(() => {
                subtitle.value = defaultText;
                clickTextActive.value = false;
            }, 3000);
        };
        
    }
</script>