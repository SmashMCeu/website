<template>
    <div>

        <UAccordion
            multiple
            color="primary"
            variant="soft"
            size="xl"
            :items="props.items"
            :ui='{
                item: { base: "ml-4" }
            }'
        />


    </div>
</template>
<script setup lang="ts">

    const props = defineProps({
        items: Array
    });


</script>