<template>
    <Toaster
        :theme="toastTheme"
        position="bottom-right"
        rich-colors
        class="pointer-events-auto"
        :toast-options="{
            actionButtonStyle: {
                backgroundColor: 'transparent',
                border: '1px solid currentColor',
                color: 'inherit',
            },
        }"
    />
</template>

<script lang="ts" setup>
import type { ToasterProps } from "vue-sonner"
import "vue-sonner/style.css"

const toastTheme = computed<ToasterProps["theme"]>(() => {
    const colorMode = useColorMode()
    const themes: ToasterProps["theme"][] = ["light", "dark", "system"]
    return themes.includes(colorMode.value as ToasterProps["theme"])
        ? colorMode.value as ToasterProps["theme"]
        : "system"
})
</script>
