<template>
    <SelectRoot v-model="sort" @update:model-value="emit('update', sort)">
    <SelectTrigger class="flex items-center gap-2 justify-between rounded-lg px-[15px] leading-none bg-backgroundColorLight hover:bg-backgroundColorLight/75 transition-colors">
        <SelectValue class="text-nowrap select-none cursor-pointer flex items-center gap-3 py-4 relative hover:bg-backgroundColorLight/75 transition-colors rounded" />
        <Icon size="16" name="solar:alt-arrow-down-bold" class="text-textColor/50 mt-1"/>
    </SelectTrigger>

    <SelectPortal>
        <SelectContent
            class="bg-backgroundColorLight rounded-md z-[100]"
            :side-offset="5"
            position="popper"
        >
            <SelectScrollUpButton class="flex items-center justify-center h-[25px] bg-backgroundColorLight/50 text-textColor/75">
                <Icon size="16" name="solar:alt-arrow-up-bold" />
            </SelectScrollUpButton>

            <SelectViewport class="p-2 shadow-2xl">
                <SelectGroup>
                    <SelectItem
                        v-for="(option, index) in options"
                        :key="index"
                        :value="option"
                        class="select-none cursor-pointer flex gap-2 py-2 relative hover:bg-backgroundColor/50 transition-colors rounded"
                    >
                        <SelectItemIndicator class="absolute mt-[2px]">
                            <Icon name="solar:alt-arrow-right-bold" size="16" class="text-textColor/50 mt-1" />
                        </SelectItemIndicator>
                        <SelectItemText class="ml-6 mr-4 items-center flex-grow">
                            <p>{{ orderToString(option) }}</p>
                        </SelectItemText>
                    </SelectItem>
                </SelectGroup>
            </SelectViewport>

            <SelectScrollDownButton class="flex items-center justify-center h-[25px] bg-backgroundColorLight/50 text-textColor/75">
                <Icon size="16" name="solar:alt-arrow-down-bold" />
            </SelectScrollDownButton>
        </SelectContent>
    </SelectPortal>
</SelectRoot>
</template>
<script lang="ts" setup>

    const options: ItemsSearchSettings["order"][] = ["name-asc", "name-desc", "rarity-asc", "rarity-desc"];
    const sort = ref<ItemsSearchSettings["order"]>("name-asc");

    function orderToString(order: ItemsSearchSettings["order"]) {
        switch (order) {
            case "name-asc":
                return "Name (A-Z)";
            case "name-desc":
                return "Name (Z-A)";
            case "rarity-asc":
                return "Rarity (Common - Epic)";
            case "rarity-desc":
                return "Rarity (Epic - Common)";
        }
    }

    const emit = defineEmits<{
        (e: 'update', sort: ItemsSearchSettings["order"]): void;
    }>();

</script>