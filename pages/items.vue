<template>
    <div>
        <ItemsSearchBar @update="(searchSettings: ItemsSearchSettings) => updateItems(searchSettings)" class="mb-10" />
        <Suspense>
            <template #default>
                <ItemsGrid v-model="items"/>
            </template>
            <template #fallback>
                <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    <div v-for="n of 20" class="bg-backgroundColorLight rounded-lg animate-pulse lg:h-[19rem] sm:h-[17rem] h-[14rem]"></div>
                </div>
            </template>
        </Suspense>
    </div>
</template>
<script setup lang="ts">

    useSeoMeta({
        title: "SmashMC | Smash Items",
        ogTitle: "SmashMC | Smash Items",
        description: "Take a look at the different items available on SmashMC. We offer a variety of items for you to use, each with its own unique abilities and effects.",
        ogDescription: "Take a look at the different items available on SmashMC. We offer a variety of items for you to use, each with its own unique abilities and effects.",
        ogType: "website",
        twitterCard: "summary_large_image",
        ogImage: "https://smashmc.eu/img/ogImage.webp",
    });

    const allItems: Ref<SmashItem[]> = ref(await useSmashItems().getAllItems());
    const items = ref<SmashItem[]>(allItems.value);

    function rarityToInt(rarity: SmashItem["rarity"]) {
        switch (rarity) {
            case "common":
                return 0;
            case "rare":
                return 1;
            case "epic":
                return 2;
        }
    }

    function updateItems(searchSettings: ItemsSearchSettings) {
        if (searchSettings === undefined) return;

        items.value = allItems.value.filter(item => {
            if (searchSettings.name && !item.name.toLowerCase().includes(searchSettings.name.toLowerCase())) return false;
            if (!searchSettings.includeAdvanced && item.is_advanced) return false;
            return true;
        }).sort((a, b) => {
            switch (searchSettings.order) {
                case "name-asc":
                    return a.name.localeCompare(b.name);
                case "name-desc":
                    return b.name.localeCompare(a.name);
                case "rarity-asc":
                    return rarityToInt(a.rarity) - rarityToInt(b.rarity);
                case "rarity-desc":
                    return rarityToInt(b.rarity) - rarityToInt(a.rarity);
            }
        });
    }

</script>