<template>

    <div :id="props.file" class="markdownRender markdownRender-invert" v-html="$mdRenderer.render(markdown)"></div>

</template>
<script setup lang="ts">

    const props = defineProps({
        file: {
            type: String,
            required: true
        }
    });

    const markdown = ref("# loading...");
    useGithubContent().getGuideByName(props.file).then(m => markdown.value = m);


</script>