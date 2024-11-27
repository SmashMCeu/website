<template>
    <span :class="rarityColor" class="rounded text-sm font-semibold px-3 py-1">{{ props.rarity.toUpperCase() }}</span>
</template>
<script lang="ts" setup>
    
    const props = defineProps<{
        rarity: "common" | "rare" | "epic"
    }>();

    const rarityColor = computed(() => {
        switch (props.rarity) {
            case "common":
                return "bg-green-500";
            case "rare":
                return "bg-blue-500";
            case "epic":
                return "bg-purple-500";
        }
    });

</script>