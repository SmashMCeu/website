<template>
    <div class="grid gap-4">
        <div v-for="entry of data">
            <SkinVZGERenderer2d :playerUUID="entry.uuid" />
        </div>
    </div>
</template>
<script lang="ts" setup>

    const { data } = await useFetch("/api/getTopFiveMonthly");

</script>