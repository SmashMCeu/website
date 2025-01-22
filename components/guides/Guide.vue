<template>
    <div class="markdown" v-if="guide !== null">
        <p class="text-4xl text-textColorLight font-bold underline">{{ guide.title }}</p>
        <div v-if="guide.isMarkdown && markdown === null" class="mt-10">Loading...</div>
        <MDCRenderer v-else-if="guide.isMarkdown && markdown !== null" :data="markdown.data" :body="markdown.body"/>
        <div v-else v-html="guide.content" class="mt-10"></div>
        <p class="text-textColor/50">Letzte Änderung: {{ getLastModified() }}</p>
    </div>
    <div v-else class="px-6 py-10">
        <p class="text-xl">Loading ...</p>
    </div>
</template>
<script lang="ts" setup>
    import type { MDCParserResult } from '@nuxtjs/mdc';

    
    const props = defineProps<{
        guideUrlId: string
    }>();
    
    const guide: Ref<Guide | null> = ref(null);
    const markdown: Ref<MDCParserResult | null> = ref(null);

    onMounted(async () => {
        const res = await useSmashGuides().getGuideByUrlId(props.guideUrlId)

        if (res === null) {
            throw createError({
                statusCode: 404,
                message: "Guide not found"
            });
        } else {
            guide.value = res;
        }

        if (guide.value.isMarkdown) {
            markdown.value = await getMarkdown(guide.value.markdownContent);
        }
    });

    async function getMarkdown(content: string) {
        return await parseMarkdown(content as string);
    }

    function getLastModified(): string {
        if (guide.value === null) return "";
        return useUtils().formatDate(guide.value.updated);
    }

</script>