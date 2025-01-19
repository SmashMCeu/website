<template>
    <UtilPopup :title="item.name">
        <template #trigger>
            <div :class="{'border-cyan-500 border ': item.is_advanced}" class="flex flex-col items-center justify-between gap-4 bg-backgroundColorLight hover:scale-105 transition-transform rounded-lg px-4 py-4 h-full">
                <div class="flex flex-col items-center">
                    <p v-if="item.is_advanced" class="text-[13px] text-cyan-500 rounded-lg px-2 py-1">Erweitert</p>
                    <p class="font-bold text-sm md:text-base my-auto">{{ item.name }}</p>
                </div>
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
            <div class="mt-5 w-full pr-10 flex flex-col md:flex-row  gap-8">
                <div class="bg-backgroundColor/50 w-fit h-fit rounded-2xl p-2 md:p-4 flex-shrink-0">
                    <img class="w-32 aspect-square" :src="useSmashItems().getItemImageUrl(item)">
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