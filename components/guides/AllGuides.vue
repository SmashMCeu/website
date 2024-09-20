<template>
    <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <NuxtLink v-for="guide of guides" :to="'/guides/' + guide.url_id">
            <div class="bg-backgroundColorLight h-full hover:scale-[103%] transition-transform p-4 cursor-pointer rounded-lg flex flex-col items-center">
                <div :style="{ backgroundImage: `url('${useSmashGuides().getGuidesEntryThumbnailUrl(guide)}')` }" class="bg-cover bg-center rounded-lg w-full h-[13rem]"/>
                <div class="px-4 py-3 w-full">
                    <p class="text-textColorLight md:text-2xl text-xl font-bold">{{ guide.title }}</p>
                    <p class="text-textColor line-clamp-3 md:text-base text-sm break-before-auto">{{ guide.description }}</p>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>
<script lang="ts" setup>

    const guides: Ref<GuidesEntry[]> = ref(await useSmashGuides().getGuidesList());
    
</script>