<template>
    <NuxtLinkLocale
        v-slot="{ isActive, href, navigate }"
        :to="to"
        class="w-full justify-start"
    >
        <UiNavigationMenuLink
            :active="isActive"
            :href
            :class="navigationMenuTriggerStyle()"
            @click="navigate"
        >
            <slot />
        </UiNavigationMenuLink>
    </NuxtLinkLocale>
</template>

<script lang="ts" setup>
import type { NuxtLinkProps } from "#app"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

defineProps<{
    to: NuxtLinkProps["to"]
}>()
</script>
