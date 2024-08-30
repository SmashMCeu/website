<template>
    <div>

        <p v-html="rules" class="markdown"></p>

    </div>
</template>
<script lang="ts" setup>

    definePageMeta({
        layout: "markdown",
    });

    const { rules } = await useSmashRules().getCurrentlyActiveRules();
    
</script>