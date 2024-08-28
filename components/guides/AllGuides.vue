<template>
    <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <NuxtLink v-for="guide of guides.concat(guides.toReversed())" :to="'/guides/' + guide.url_id">
            <div class="bg-backgroundColorLight h-full hover:scale-[103%] transition-transform p-4 cursor-pointer rounded-lg flex flex-col items-center">
                <div :style="{ backgroundImage: `url('${getThumbnailImageUrl(guide)}')` }" class="bg-cover bg-center rounded-lg w-full h-[13rem]"></div>
                <div class="px-4 py-3 w-full">
                    <p class="text-textColorLight md:text-2xl text-xl font-semibold">{{ guide.title }}</p>
                    <p class="text-textColor line-clamp-3 md:text-base text-sm break-before-auto">{{ guide.description }}</p>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>
<script lang="ts" setup>

    const pb = useNuxtApp().$pocketbase;

    function getThumbnailImageUrl(guide: GuidesEntry): string {
        return pb.files.getUrl({
            collectionId: guide.collectionId,
            id: guide.id
        }, guide.thumbnail);
    }


    const guides: Ref<GuidesEntry[]> = ref([]);


    // Nuxt error handling...
    const { data, error } = await useAsyncData("guides", async () => {
        try {
            return await pb.collection("active_guides").getFullList<GuidesEntry>({ sort: "title" });
        } catch (e) {
            showError({
                statusCode: 500,
                message: "Failed to fetch guides",
            });
        }
    });

    if (error.value) {
        throw createError({
            statusCode: 500,
            message: "Failed to fetch guides",
        });
    } else if (data.value) {
        guides.value = data.value;
    }
    
</script>