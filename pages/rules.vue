<template>
    <div>

        <p v-html="rules" class="markdown"></p>

    </div>
</template>
<script lang="ts" setup>

    definePageMeta({
        layout: "markdown",
    });


    useSeoMeta({
        title: "SmashMC | Rules",
        ogTitle: "SmashMC | Rules",
        description: "Please read the rules carefully. By playing on our network, you agree to follow these rules.",
        ogDescription: "Please read the rules of SmashMC carefully. By playing on our network, you agree to follow these rules.",
        ogType: "website",
    });


    const { rules } = await useSmashRules().getCurrentlyActiveRules();
    
</script>