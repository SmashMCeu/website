<template>
    <div>
        <MDCRenderer v-if="md" :data="md.data" :body="md.body" />
        <h1 v-else>Loading...</h1>
    </div>
</template>
<script lang="ts" setup>
    import type { MDCParserResult } from '@nuxtjs/mdc';


    // Local markdown can cause errors! I don't know why, but it does sometimes.
    const props = withDefaults(
            defineProps<{
            path: string,
            local?: boolean
        }>(),
        {
            local: false
        }
    )

    const md: Ref<MDCParserResult | null> = ref(null);

    async function setMarkdown(content: string) {
        md.value = await parseMarkdown(content as string);
    }

    onBeforeMount(async () => {
        if (props.local) {
            const { data: localMarkdownString } = await useAsyncData<string>("getLocalMarkdown", () => $fetch("/md/" + props.path));
            setMarkdown(localMarkdownString.value || "# Error while loading!");
        } else {
            const rawContent: Response = await fetch(props.path);
            if (rawContent.ok) setMarkdown(await rawContent.text());
            else throw createError({
                statusCode: rawContent.status,
                message: rawContent.statusText
            });
        }      
    });


</script>