<template>
    <div class="markdown">
        <p class="text-4xl text-textColorLight font-bold underline">{{ record.title }}</p>
        <div v-html="record.content" class="mt-10"></div>
        <p class="text-textColor/50">Last updated: {{ new Date(record.updated).toLocaleString() }}</p>
    </div>
</template>
<script lang="ts" setup>
    
    const props = defineProps({
        guideUrlId: String
    });
    const pb = useNuxtApp().$pocketbase;

    const record: Guide = await pb.collection("guides").getFirstListItem(`url_id="${props.guideUrlId}"`);    

</script>