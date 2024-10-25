<template>
    <div class="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        <MapsGridItem v-for="map of maps" :map="map" />
    </div>
</template>
<script lang="ts" setup>

    const maps: Ref<SmashMap[]> = ref(await useSmashMaps().getAllMaps());

</script>