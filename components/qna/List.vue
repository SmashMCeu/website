<template>
    <div>
        <AccordionRoot
            type="single"
            :collapsible="true"
        >
            <template v-for="item in accordionItems" :key="item.value" >
                <AccordionItem
                    class="mt-[3px] overflow-hidden first:mt-0 first:rounded-t-xl last:rounded-b-xl"
                    :value="item.value"
                >
                    <AccordionHeader class="flex">
                        <AccordionTrigger class="md:text-base text-sm text-start rounded data-[state=open]:text-primary text-textColorLight hover:bg-backgroundColorLight/75 transition-colors duration-300 flex flex-1 cursor-pointer items-center gap-2 bg-backgroundColorLight md:py-5 py-4 md:px-5 px-3 text-[15px] leading-none outline-none group">
                            <Icon
                                name="solar:alt-arrow-down-outline"
                                class="mt-[2px] size-5 text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                            />
                            <span>{{ item.title }}</span>
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent class="text-textColor bg-mauve2 data-[state=open]:animate-accordionSlideDown data-[state=closed]:animate-accordionSlideUp overflow-hidden text-[15px]">
                        <div class="md:px-5 px-2 md:py-4 py-2 markdown *:!m-0" v-html="item.content"></div>
                    </AccordionContent>
                </AccordionItem>
            </template>
        </AccordionRoot>
    </div>
</template>
<script lang="ts" setup>
    
    const data: Ref<QnA[]> = ref(await useSmashQnA().getFullQnA());
    const accordionItems = data.value.map((item, index) => {
        return {
            title: item.question,
            content: item.answer,
            value: `item-${index + 1}`
        }
    });

</script>