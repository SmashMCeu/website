<template>
    <div>

        <MDCRenderer v-if="md" :data="md.data" :body="md.body" />
        <h1 v-else>Loading...</h1>

    </div>
</template>
<script lang="ts" setup>
    definePageMeta({
        layout: "markdown",
    });


    import type { MDCParserResult } from '@nuxtjs/mdc';


    const md: Ref<MDCParserResult | null> = ref(null);

    onBeforeMount(async () => {
        const rawContent = await $fetch('/md/imprint.md');        
        md.value = await parseMarkdown(rawContent as string);
    });

</script>