<template>
    <div>
        
        <NuxtLink to="/faq" class="flex gap-2 w-fit items-center pl-4 pr-5 py-2 rounded-lg border-2 border-backgroundColorLight hover:bg-backgroundColorLight transition-colors">
            <Icon name="solar:alt-arrow-left-outline" class="mt-[3px]" />
            <p>Back</p>
        </NuxtLink>
        
        <div class="mt-4 md:px-10 px-4 rounded-xl border-2 border-backgroundColorLight ">
            <Suspense>
                <template #default>
                    <GuidesGuide :guide-url-id="guide_url_id"/>
                </template>
                <template #fallback>
                    <p class="py-4 text-xl">Loading ...</p>
                </template>
            </Suspense>
        </div>
    </div>
</template>
<script lang="ts" setup>
    
    const guide_url_id: string = useRoute().params.guideURL as string;

</script>