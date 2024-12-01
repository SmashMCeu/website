<template>
    <UtilPopup :title="props.item.name">
        <template #trigger>
            <div class="flex flex-col items-center justify-between gap-4 bg-backgroundColorLight hover:scale-105 transition-transform rounded-lg px-4 py-4 h-full">
                <p class="font-bold my-auto">{{ item.name }}</p>
                <img class="px-2 w-full" :src="useSmashItems().getItemImageUrl(item)" loading="lazy">
            </div>
        </template>
        <template #title>
            <div>
                <p>{{ item.name }}</p>
                <div class="flex gap-2 mt-1">
                    <ItemsRarity :rarity="item.rarity"/>
                    <ItemsAdvancedBadge v-if="item.is_advanced" />
                </div>
            </div>
        </template>
        <template #content>
            <div class="mt-5 w-full h-fit pr-10 flex flex-row gap-8">
                <div class="bg-backgroundColor/50 rounded-2xl p-4 flex-shrink-0">
                    <img class="w-full h-32" :src="useSmashItems().getItemImageUrl(item)">
                </div>
                <div>
                    <p class="text-textColorLight font-semibold">Beschreibung:</p>
                    <p class="text-textColor">{{ item.description }}</p>
                </div>
            </div>
        </template>
    </UtilPopup>
</template>
<script lang="ts" setup>

    const props = defineProps<{
        item: SmashItem;
    }>();
    
</script>