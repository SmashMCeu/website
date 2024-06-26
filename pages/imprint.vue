<template>

    <div class="p-10 md:p-20">

        <MarkdownRenderer id="imprint" class="mt-20" :local="true" />

    </div>

</template>
<script setup lang="ts">

    useHead({
        title: "SmashMC | Imprint",
    });

</script>