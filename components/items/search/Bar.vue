<template>
    <div class="flex gap-4 md:flex-nowrap flex-wrap">
        
        <input @input="update()" v-model="searchSettings.name" type="text" placeholder="Search items..." class="md:flex-grow w-full px-4 py-2 md:h-auto h-14 bg-backgroundColorLight rounded-lg focus:ring-2 focus:ring-primary">

        <ItemsSearchSort @update="sort => setSort(sort)" />
        <ItemsSearchSettings @update-include-advanced="state => setHideAdvanced(state)" />

    </div>
</template>
<script lang="ts" setup>
    
    const searchSettings = ref<ItemsSearchSettings>({
        name: "",
        order: "name-asc",
        includeAdvanced: true,
    });

    onMounted(() => {
        emit('update', searchSettings.value);
    });

    const emit = defineEmits<{
        (e: 'update', searchSettings: ItemsSearchSettings): void;
    }>();

    function setSort(sort: ItemsSearchSettings["order"]) {
        searchSettings.value.order = sort;
        update();
    }

    function setHideAdvanced(includeAdvanced: boolean) {
        searchSettings.value.includeAdvanced = includeAdvanced;
        update();
    }

    function update() {
        emit('update', searchSettings.value);
    }

</script>