<template>
    <div>
        <img :src="`https://vzge.me/full/300/${playerUUID}`" :alt="`Player UUID: ${playerUUID}`">
    </div>
</template>

<script lang="ts" setup>

    defineProps<{
        playerUUID: string
    }>();
    
</script>