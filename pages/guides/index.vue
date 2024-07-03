<template>
    <div class="flex flex-col items-center">

        <div class="text-lg py-40 px-4 sm:px-10 md:px-20 lg:w-[75vw] lg:max-w-[65rem]">

            <div>
                <div class="flex flex-col items-center">
                    <p class="text-xl tracking-tight text-primary-300">{{ $t("guides.topGuides.sectionTitle") }}</p>
                    <p class="text-2xl md:text-3xl font-bold text-center">{{ $t("guides.topGuides.title") }}</p>
                </div>
                <GuidesTopGuides :top-guides="topGuides" class="mt-10"/>
            </div>

            <div>
                <div class="flex flex-col items-center mt-24">
                    <p class="text-xl tracking-tight text-primary-300">{{ $t("guides.QnA.sectionTitle") }}</p>
                    <p class="text-2xl md:text-3xl font-bold text-center">{{ $t("guides.QnA.title") }}</p>
                </div>
                <GuidesQnA :items="qnaItems" class="mt-10"/>
            </div>

         </div>

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
    
    const qnaItems = Object.entries(guidesConfig.QnA).map(qna => ({label: qna[0], description: qna[1]}));
    


</script>