<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2 lg:gap-8">
        
        <NuxtLink v-for="guide of topGuides" :to="'guides/' + guide.id">
            <div class="flex flex-col items-center justify-center transition-all rounded-lg md:aspect-video py-8 md:py-0 child:hover:text-nuxtuiGray-100 bg-nuxtuiGray-900 hover:brightness-[115%] hover:border border-primary">
                <p class="text-nuxtuiGray-300 transition-all text-center text-base lg:text-lg font-semibold">{{ guide.name }}</p>
                <p class="!text-nuxtuiGray-500">(click to read)</p>
            </div>
        </NuxtLink>
        
        
    </div>
</template>
<script setup lang="ts">

    import type GuideInfo from '@/types/GuideInfo';

    const props = defineProps({
        topGuides: Object as PropType<GuideInfo[]>
    });

    // @ts-ignore
    props.topGuides?.push(props.topGuides.at(1));
    // @ts-ignore
    props.topGuides?.push(props.topGuides.at(0));


</script>