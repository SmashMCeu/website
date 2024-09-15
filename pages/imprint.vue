<template>
    <div>

        <Markdown local path="imprint.md" />

    </div>
</template>
<script lang="ts" setup>

    definePageMeta({
        layout: "markdown",
    });

    useSeoMeta({
        title: "SmashMC | Imprint",
        ogTitle: "SmashMC | Imprint",
        description: "This is the imprint of SmashMC. Here you can find all the legal information about our network.",
        ogDescription: "This is the imprint of SmashMC. Here you can find all the legal information about our network.",
        ogType: "website",
    });
    
</script>