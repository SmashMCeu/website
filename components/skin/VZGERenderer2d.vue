<template>
    <div>
        <img :src="`https://vzge.me/full/300/${playerUUID}`" :alt="`Player UUID: ${playerUUID}`">
    </div>
</template>

<script lang="ts" setup>
    import type { UUID } from '~/types/UUID';

    defineProps<{
        playerUUID: UUID
    }>();
    
</script>