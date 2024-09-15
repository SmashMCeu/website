<template>
    <div class="markdown">
        <p class="text-4xl text-textColorLight font-bold underline">{{ guide.title }}</p>
        <div v-html="guide.content" class="mt-10"></div>
        <p class="text-textColor/50">Last updated: {{ new Date(guide.updated).toLocaleString() }}</p>
    </div>
</template>
<script lang="ts" setup>
    
    const props = defineProps<{
        guideUrlId: string
    }>();
    
    const guide: Guide | null = await useSmashGuides().getGuideByUrlId(props.guideUrlId);
    if (guide === null) {
        throw createError({
            statusCode: 404,
            message: "Guide not found"
        });
    }

</script>