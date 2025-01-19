<template>
    <DropdownMenuRoot>

        <DropdownMenuTrigger
            class="flex items-center cursor-pointer bg-backgroundColorLight hover:bg-backgroundColorLight/75 aspect-square p-4 rounded-lg"
            aria-label="Settings"
        >
            <Icon name="solar:tuning-2-outline" size="24" />
        </DropdownMenuTrigger>

        <DropdownMenuPortal>
            <DropdownMenuContent
                class="outline-none bg-backgroundColorLight rounded-md p-4 shadow-xl"
                :side-offset="5"
            >
                <!-- Dropdown Item with Switch -->
                <DropdownMenuItem @select="e => e.preventDefault()" class="flex items-center justify-between w-full">
                    <div class="flex gap-2 items-center">
                        <SwitchRoot
                            id="hide-advanced"
                            v-model:checked="includeAdvanced"
                            @update:checked="e => emit('updateIncludeAdvanced', e)"
                            class="cursor-pointer w-[42px] h-[25px] flex bg-backgroundColor/50 shadow-sm rounded-full relative data-[state=checked]:bg-primary"
                        >
                            <SwitchThumb
                                class="block w-[21px] h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-300 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
                            />
                        </SwitchRoot>
                        <label for="hide-advanced" class="text-white text-[15px] leading-none pr-[15px] select-none">
                            Include advanced items
                        </label>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenuPortal>

    </DropdownMenuRoot>
</template>
<script lang="ts" setup>
    
    const includeAdvanced = ref<boolean>(true);

    const emit = defineEmits<{
        (e: 'updateIncludeAdvanced', includeAdvanced: boolean): void;
    }>();

</script>