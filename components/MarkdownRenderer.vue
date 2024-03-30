<template>

    <div :id="props.file" class="markdownRender markdownRender-invert" v-html="$mdRenderer.render(markdown)"></div>

</template>
<script setup lang="ts">

    const props = defineProps({
        file: {
            type: String,
            required: true
        },
        local: {
            type: Boolean,
            default: false,
        }
    });

    const markdown = ref("# loading...");
    if (!props.local) useGithubContent().getGuideByName(props.file).then(m => markdown.value = m);
    else {
        const { data } = await useFetch("localMarkdown/" + props.file + ".md");
        markdown.value = data.value as string;
    }


</script>