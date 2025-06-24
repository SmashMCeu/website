<template>
    <NuxtLink
        v-slot="{ isActive, href, navigate }"
        :to="to"
        custom
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
    </NuxtLink>
</template>

<script lang="ts" setup>
import type { NuxtLinkProps } from "#app"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

defineProps<{
    to: NuxtLinkProps["to"]
}>()
</script>
