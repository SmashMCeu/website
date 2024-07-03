<template>
    <div>
        <div class="flex flex-col lg:flex-row sm:items-center justify-between gap-5 lg:gap-20">

            <UInput v-on:change="updateSearchFilter()"
                size="lg"
                class="flex-1 max-w-96 w-full lg:w-fit"
                v-model="searchInput"
                :placeholder='$t("characters.search.searchBarPlaceholder")'
                icon="i-heroicons-magnifying-glass-20-solid"
                autocomplete="off"
                :ui="{ icon: { trailing: { pointer: '' } } }"
            >

                <template #trailing>
                <UButton
                    v-show="searchInput !== ''"
                    color="gray"
                    variant="link"
                    icon="i-heroicons-x-mark-20-solid"
                    :padded="false"
                    @click="searchInput = ''; updateSearchFilter()"
                />
                </template>
            </UInput>

            <div class="flex flex-col sm:flex-row gap-5 sm:gap-10 sm:items-center max-w-96 sm:max-w-full">
                <UCheckbox :label='$t("characters.search.showOnlyFree")' v-model="hideProCharacters" v-on:change="updateSearchFilter()"
                    :ui="{ base:'h-5 w-5' }"
                />

                <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                    <p class="text-textColorLight -mt-1">{{ $t("characters.search.sort.label") }}</p>
                    <USelect size="lg" v-model="sortBy" :options="sortOptions" name="test" v-on:change="updateSearchFilter()"/>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
    import type CharacterSearchFilter from "@/types/CharacterSearchFilter";
    import type { ModelRef } from "vue";


    const searchInput = ref("");
    const hideProCharacters = ref(false);


    const sortNameDisplay: string = useI18n().t("characters.search.sort.sortName");
    const sortEasyToHardDisplay: string = useI18n().t("characters.search.sort.sortEasyToHard");
    const sortHardToEasyDisplay: string = useI18n().t("characters.search.sort.sortHardToEasy");

    const sortValues: Map<string, 1 | 2 | 3> = new Map([
        [sortNameDisplay, 1],
        [sortEasyToHardDisplay, 2],
        [sortHardToEasyDisplay, 3]
    ]);


    const sortOptions = [sortNameDisplay, sortEasyToHardDisplay, sortHardToEasyDisplay];
    const sortBy = ref(sortOptions[0]);

    const searchFilter: ModelRef<CharacterSearchFilter> = defineModel({
        default: {
            nameInput: "",
            hideProChars: false,
            sortKey: 1,    
        } as CharacterSearchFilter
    });

    const updateSearchFilter = () => {
        // For enchanting the page:
        if (searchInput.value.toLowerCase() == "enchant") {
            useEnchantingTable().enchantThePage();
        }
        
        searchFilter.value = {
            nameInput: searchInput.value,
            hideProChars: hideProCharacters.value,
            sortKey: sortValues.get(sortBy.value) || 1,    
        }
    }
    
</script>