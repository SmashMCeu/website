<template>
    <div>
        <p>Error</p>
        <p>{{ error.message }}</p>
        <UiButton @click="handleError">
            Go to Home
        </UiButton>
    </div>
</template>

<script lang="ts" setup>
import type { NuxtError } from "#app"

useHead({
    titleTemplate: t => t ? `${t} - SmashMC.eu` : "Error - SmashMC.eu",
})

defineProps<{
    error: NuxtError
}>()

function handleError() {
    clearError({
        redirect: "/",
    })
}
</script>
