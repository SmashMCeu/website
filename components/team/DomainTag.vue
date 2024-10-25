<template>
    <div class="flex items-center justify-center py-[4px] px-[8px] gap-1 rounded-md" :class="getTagStyle()">

        <Icon :name="domain.icon" :size="15"/>
        <p class="text-[12px] -mt-[2px]">{{ domain.name }}</p>



    </div>
</template>
<script lang="ts" setup>
    
    const props = defineProps<{
        domain: TeamDomain
    }>();


    // text-backgroundColorLight bg-primary/90

    const tagStyles: { [key in TeamDomain["display_style"]]: string } = {
        "outline": "text-primary/90 border border-primary/90",
        "solid": "text-backgroundColorLight bg-primary/90"
    }

    function getTagStyle() {
        return tagStyles[props.domain.display_style]
    }

</script>
<style scoped>

    /* Sparkle effect for a tag - not used currently */
    .sparkle {
        background-size: cover;
        background-position: center;
        background-image: url("https://media1.giphy.com/media/duH2tJcy9iGQbkAGa1/giphy.webp?cid=ecf05e47nf16v7e25ys9wevva1bzqd51dx5go0u4jq5y6aqr&ep=v1_gifs_related&rid=giphy.webp&ct=s");
    }

</style>