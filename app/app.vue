<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator
            color="var(--color-primary)"
        />

        <ToasterRoot />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>
useLocaleHead()
useHead({
    titleTemplate: t => t ? `${t} - SmashMC.eu` : "SmashMC.eu - The Ultimate Minecraft Network!",
})
useSchemaOrg([
    defineOrganization({
        name: "SmashMC",
        logo: "/img/logo.png",
        url: "https://smashmc.eu",
    }),
])
</script>
