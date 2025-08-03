<template>
    <AppSection
        pretitle="Server Rules"
        title="Please read the rules carefully"
    >
        <div class="flex flex-col items-center">
            <div
                v-dompurify-html="rules"
                class="mt-8 prose dark:prose-invert max-w-full"
            />
        </div>
    </AppSection>
</template>

<script setup lang="ts">
const { data: rules } = await useAsyncData("rules", async () => {
    return await useRules().get()
})
</script>
