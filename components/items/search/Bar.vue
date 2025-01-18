<template>
    <div class="flex gap-4">
        
        <input @input="update()" v-model="searchSettings.name" type="text" placeholder="Search items..." class="flex-grow px-4 py-2 bg-backgroundColorLight rounded-lg focus:ring-2 focus:ring-primary">

        <ItemsSearchSort @update="sort => setSort(sort)" />
        <ItemsSearchSettings />

    </div>
</template>
<script lang="ts" setup>
    
    const searchSettings = ref<ItemsSearchSettings>({
        name: "",
        order: "name-asc",
        includeAdvanced: true,
    });

    const emit = defineEmits<{
        (e: 'update', searchSettings: ItemsSearchSettings): void;
    }>();

    function setSort(sort: ItemsSearchSettings["order"]) {
        searchSettings.value.order = sort;
        update();
    }

    function update() {
        emit('update', searchSettings.value);
    }

</script>