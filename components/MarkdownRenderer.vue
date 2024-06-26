<template>

    <div :id="props.id" class="markdownRender markdownRender-invert" v-html="$mdRenderer.render(markdown)"></div>

</template>
<script setup lang="ts">
    import type GuideInfo from '~/types/GuideInfo';
    import type GuidesConfig from '~/types/GuidesConfig';


    const props = defineProps({
        id: {
            type: String,
            required: true
        },
        local: {
            type: Boolean,
            default: false,
        }
    });
    const emit = defineEmits(["loadingerror"]);


    const markdown = ref("# loading...");

    onMounted(async () => {
        
        
        if (!props.local) {

            const guide: GuideInfo | undefined = await useGithubContent().getGuideById(props.id);
            
            if (guide === undefined) {
                markdown.value = "No guide with id: " + props.id + " found! Please report this!";
                emit("loadingerror", props.id); 
            }
            else markdown.value = await useGithubContent().getGuideMarkdown(guide.path);


        } else {
            const { data } = await useFetch("localMarkdown/" + props.id + ".md");
            markdown.value = data.value as string;
        }    
        

    });


</script>