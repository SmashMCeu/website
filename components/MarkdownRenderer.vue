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

            const guidesConfig: GuidesConfig = await useGithubContent().getGuidesJson();
            const matchingGuides: GuideInfo[] = guidesConfig.guides.filter(e => e.id == props.id);
            
            if (matchingGuides.length == 0) {
                markdown.value = "No guide with id: " + props.id + " found! Please report this!";
                emit("loadingerror", props.id); 
            }
            else markdown.value = await useGithubContent().getGuideMarkdown(matchingGuides.at(0)?.path || "WrongID");


        } else {
            const { data } = await useFetch("localMarkdown/" + props.id + ".md");
            markdown.value = data.value as string;
        }    
        

    });


</script>