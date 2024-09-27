<template>
    <div class="markdown">
        <p class="text-4xl text-textColorLight font-bold underline">{{ guide.title }}</p>
        <div v-html="guide.content" class="mt-10"></div>
        <p class="text-textColor/50">Letzte Änderung: {{ getLastModified() }}</p>
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

    function getLastModified() {
        if (guide === null) return "";
        return new Date(guide.updated).toLocaleString(useI18n().locale.value, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        });
    }

</script>