<template>
    <UiAccordion
        type="single"
        collapsible
        class="w-full max-w-4xl"
    >
        <UiAccordionItem
            v-for="item in accordionItems"
            :key="item.value"
            :value="item.value"
        >
            <UiAccordionTrigger>{{ item.title }}</UiAccordionTrigger>
            <UiAccordionContent>
                <div
                    v-dompurify-html="item.content"
                    class="md:px-5 px-2 md:py-4 py-2 *:!m-0 max-w-full prose dark:prose-invert prose-sm md:prose-base"
                />
            </UiAccordionContent>
        </UiAccordionItem>
    </UiAccordion>
</template>

<script setup lang="ts">
const { data: faqEntries } = await useAsyncData(async () => {
    return await useFAQ().getEntries()
})

const accordionItems = computed(() => {
    return (faqEntries.value ?? []).map(entry => ({
        title: entry.question,
        content: entry.answer,
        value: `item-${entry.id}`,
    }))
})
</script>
