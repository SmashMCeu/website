<template>
    <div class="relative flex items-center justify-center group select-none">
        <img loading="lazy" class="bg-backgroundColorLight w-full aspect-video group-hover:brightness-[35%] group-hover:scale-105 transition-all rounded-xl" :src="map.map"/>
        <div class="group-hover:scale-150 group-hover:opacity-100 opacity-0 transition-all absolute text-center">
            <p class="text-textColorLight text-xl font-bold" @click.alt="copyId">{{ map.name }}</p>
            <p class="text-textColor text-sm font-semibold" v-if="map.builtBy">von {{ map.builtBy }}</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
    
    const props = defineProps<{
        map: SmashMap
    }>();

    function copyId() {
        navigator.clipboard.writeText(props.map.id);
        alert("Copied map id: " + props.map.id);
    }

</script>
