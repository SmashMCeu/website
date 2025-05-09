<script lang="ts" setup>

    
    const props = defineProps<{
        skins: Array<SmashCharacterSkin>
    }>();
    const selected: Ref<string> = ref(props.skins[0].name);

    const emit = defineEmits<{
        (e: "update:value", value: SmashCharacterSkin): void;
    }>();

    function onUpdate(value: string) {
        const newSkin = props.skins.find(skin => skin.name === value);
        if (newSkin) emit("update:value", newSkin);
    }

    
</script>
<template>
    <SelectRoot v-model="selected" @update:model-value="val => onUpdate(val)">
        <SelectTrigger class="w-full flex items-center justify-between rounded-lg px-[15px] leading-none bg-backgroundColor/50 hover:bg-backgroundColor/75 transition-colors">
            <SelectValue class="select-none cursor-pointer flex items-center gap-3 py-3 relative hover:bg-backgroundColorLight/75 transition-colors rounded" />
            <Icon size="16" name="solar:alt-arrow-down-bold" class="text-textColor/50"/>
        </SelectTrigger>

        <SelectPortal>
            <SelectContent
                class="min-w-[160px] bg-backgroundColor rounded-md z-[100]"
                :side-offset="1"
            >
                <SelectScrollUpButton class="flex items-center justify-center h-[25px] bg-backgroundColor text-textColor/75">
                    <Icon size="16" name="solar:alt-arrow-up-bold" />
                </SelectScrollUpButton>

                <SelectViewport class="p-2">
                    <SelectGroup>
                        <SelectItem
                            v-for="(option, index) in skins"
                            :key="index"
                            :value="option.name"
                            class="select-none cursor-pointer flex gap-2 py-2 relative hover:bg-backgroundColorLight/75 transition-colors rounded"
                        >
                            <SelectItemIndicator class="absolute mt-[2px]">
                                <Icon name="solar:alt-arrow-right-bold" size="16" class="text-textColor/50" />
                            </SelectItemIndicator>
                            <SelectItemText class="ml-6 flex gap-3 items-center flex-grow">
                                <SkinHeadRenderer class="w-[24px] rounded-sm overflow-hidden" :skin-url="option.url" />
                                <p v-html="useMinecraftFormatting().formatText(option.name)"></p>
                            </SelectItemText>
                        </SelectItem>
                    </SelectGroup>
                </SelectViewport>

                <SelectScrollDownButton class="flex items-center justify-center h-[25px] bg-backgroundColor text-textColor/75">
                    <Icon size="16" name="solar:alt-arrow-down-bold" />
                </SelectScrollDownButton>
            </SelectContent>
        </SelectPortal>
    </SelectRoot>
</template>