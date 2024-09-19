<template>
    <img :src="`https://vzge.me/full/300/${playerUUID}`" :alt="`Player UUID: ${playerUUID}`">
</template>

<script lang="ts" setup>
    import type {UUID} from "~/server/models/UUID";

    defineProps<{
      playerUUID: UUID
    }>();
</script>