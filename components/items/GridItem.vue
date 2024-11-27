<template>
    <UtilPopup :title="props.item.name">
        <template #trigger>
            <div class="flex flex-col items-center justify-between gap-4 bg-backgroundColorLight hover:scale-105 transition-transform rounded-lg px-4 py-4 h-full">
                <p class="font-bold my-auto">{{ item.name }}</p>
                <img class="px-2 w-full" src="https://i.pinimg.com/originals/0f/ba/e4/0fbae4313773a7356ff77139c4240fd6.png">
            </div>
        </template>
        <template #title>
            <div class="flex items-center gap-2">
                <p>{{ item.name }}</p>
                <ItemsRarity :rarity="item.rarity"/>
            </div>
        </template>
        <template #content>
            <div>{{ item }}</div>
        </template>
    </UtilPopup>
</template>
<script lang="ts" setup>

    const props = defineProps<{
        item: SmashItem;
    }>();
    
</script>