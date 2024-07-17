<template>
    <div>

        <UAccordion
            closeOthers
            color="primary"
            variant="outline"
            size="xl"
            :items="props.items"
            :ui='{
                item: { base: "ml-4" }
            }'>

            <template #item="{ item }">
                <div v-html="item.description" class="markdownRender markdownRender-invert"></div>
            </template>

        </UAccordion>


    </div>
</template>
<script setup lang="ts">

    const props = defineProps({
        items: Array
    });


</script>