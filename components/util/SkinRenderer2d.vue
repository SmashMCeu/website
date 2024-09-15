<template>
    <div>
        <img :src="skinUrl" loading="lazy">
    </div>
</template>
<script lang="ts" setup>

    defineProps<{
        skinUrl: string,
    }>();

</script>