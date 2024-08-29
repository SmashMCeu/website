<template>
    <div class="flex flex-col gap-24">
        
        <img src="/img/header.png" alt="header" class="rounded-lg">

        <div class="flex flex-col gap-2">
            <SocialCardPlayerCount />
            <SocialCardMinecraft />
            <SocialCardDiscord />
            
        </div>

        <UtilTitle subtitle="SUBTITLE" title="Title Lorem Ipsum dolor sit amet" />
        <UtilTitle subtitle="SubTitle222" title="222Title Lorem Ipsum dolor sit amet" orientation="left"/>
        <UtilTitle subtitle="SubTitle333" title="333Title Lorem Ipsum dolor sit amet" orientation="right"/>
    
    </div>
</template>
<script lang="ts" setup>

    useSmashMaps().getSmashMaps();

</script>