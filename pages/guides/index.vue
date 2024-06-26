<template>
    <div class="text-lg py-40 sm:px-10 md:px-20 lg:w-[75vw] lg:max-w-[65rem]">

        <div class="flex flex-col items-center">
            <p class="text-xl tracking-tight text-primary-300">Most important</p>
            <p class="text-2xl md:text-3xl font-bold text-center">Here are some important guides</p>
        </div>
        <GuidesTopGuides :top-guides="topGuides" class="mt-10"/>

        <div class="flex flex-col items-center mt-24">
            <p class="text-xl tracking-tight text-primary-300">Wie? Wo? Was?</p>
            <p class="text-2xl md:text-3xl font-bold text-center">Hier findest du sicherlich eine Antwort</p>
        </div>
        <GuidesQnA :items="qnaItems" class="mt-10"/>
        
    </div>
</template>

<script setup lang="ts">

    useHead({
        title: "SmashMC | Guides",
    });


    import type GuideInfo from '~/types/GuideInfo';
    import type GuidesConfig from '~/types/GuidesConfig';


    const guidesConfig: GuidesConfig = await useGithubContent().getGuidesJson();
    const topGuideIds: string[] = await guidesConfig.topGuides;

    // Who needs error handling... xDDD (really bad code, but works for now)
    const topGuides: GuideInfo[] = topGuideIds.map(guideId => guidesConfig.guides.filter(g => g.id == guideId).at(0)) as GuideInfo[];
    
    const qnaItems = Object.entries(guidesConfig.QnA).map(qna => ({label: qna[0], content: qna[1]}));
    


</script>