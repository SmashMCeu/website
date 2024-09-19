<template>
   <UtilTitle subtitle="SMASH" title="Monthly Top 5" />
   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div class="flex justify-center" v-for="uuid in response.result" :key="uuid">
            <SkinVZGERenderer2d :playerUUID="uuid" />
        </div>
    </div>
</template>
<script lang="ts" setup>

    import type {TopStatsList} from "~/server/models/TopStatsList";

    const limit: number = 5;
    const { data: response }: TopStatsList = await useFetch(`/api/stats/top?limit=${limit}`);

</script>