<template>
    <div class="py-40 md:py-44  px-8 sm:px-20 md:px-40 ">
        <p class="text-4xl font-bold">{{ $t("rules.title") }}</p>
        <div class="markdownRender markdownRender-invert mt-20" v-html="$mdRenderer.render(rulesMarkdown)"></div>
    </div>
</template>

<script setup lang="ts">

    useHead({
        title: "SmashMC | Rules"
    });

    const rulesMarkdown: string = await useGithubContent().getRules(useI18n().locale.value);

</script>