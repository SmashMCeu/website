<template>
    <div class="text-lg py-40 px-20 font-bold">
        <MarkdownRenderer :id='guideId' @loadingerror="(id) => loadingError(id)" />
    </div>
</template>

<script setup lang="ts">
    const guideId: string = useRoute().params.id as string;
   
    const guide = await useGithubContent().getGuideById(guideId);
    const guideName = guide === undefined ? "Guide not found" : guide.name;

    useHead({
        title: "SmashMC | " + guideName,
    });


    
    
    const loadingError = (id: string) => {
        throw createError({
            fatal: true,
            statusCode: 404,
            statusMessage: "Can't find guide with ID: " + id,
            message: "There is no guide with this ID! Maybe the guide has moved to another page...\n"
        });
    }
    

</script>