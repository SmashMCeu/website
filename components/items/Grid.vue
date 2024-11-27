<template>
    <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">

        <ItemsGridItem v-for="item in items" :key="item.id" :item="item"/>
        
    </div>
</template>
<script lang="ts" setup>
    
    const items: Ref<SmashItem[]> = ref(await useSmashItems().getAllItems());

</script>