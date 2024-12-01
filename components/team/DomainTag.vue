<template>
    <div :class="tagClass" :style="tagStyle" class="flex items-center justify-center py-[4px] px-[8px] gap-1 rounded-md">

        <Icon :name="domain.icon" :size="15"/>
        <p class="text-[12px] -mt-[2px]">{{ domain.name }}</p>

    </div>
</template>
<script lang="ts" setup>
    import type { StyleValue } from 'vue';

    
    const props = defineProps<{
        domain: TeamDomain
    }>();

    const tagClass = computed(() => {
        const styles = {
            "outline": `border`,
            "solid": `text-backgroundColorLight`
        };
        return styles[props.domain.display_style];
    });

    const tagStyle = computed((): StyleValue => {
        const color = props.domain.color;
        switch (props.domain.display_style) {
            case "outline":
                return {
                    color: color,
                    borderColor: color
                }
            case "solid":
                return {
                    backgroundColor: color,
                }
        }
    });



</script>
<style scoped>

    /* Sparkle effect for a tag - not used currently */
    .sparkle {
        background-size: cover;
        background-position: center;
        background-image: url("https://media1.giphy.com/media/duH2tJcy9iGQbkAGa1/giphy.webp?cid=ecf05e47nf16v7e25ys9wevva1bzqd51dx5go0u4jq5y6aqr&ep=v1_gifs_related&rid=giphy.webp&ct=s");
    }

</style>