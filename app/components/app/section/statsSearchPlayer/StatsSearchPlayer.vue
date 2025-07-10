<template>
    <AppSection
        pretitle="Lookup Stats"
        title="Check the Stats of your Friends:"
    >
        <div class="flex flex-col gap-16 items-center">
            <AppPlayerStatsSearchPlayerBar @search="(input) => uuidOrName = input" />

            <LazyAppPlayerStatsSearchPlayerWrapper
                v-show="uuidOrName.length > 0"
                :uuid-or-name="uuidOrName"
            />
        </div>
    </AppSection>
</template>

<script setup lang="ts">
const uuidOrName = ref("")
</script>
