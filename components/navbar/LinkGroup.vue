<template>
    <div class="flex gap-12 text-gray-300 text-lg hover:child:text-primary-200 child:transition-colors ml-12">
        <NuxtLink to="/">{{ $t("navbar.links.home") }}</NuxtLink>
        <NuxtLink to="/maps">{{ $t("navbar.links.maps") }}</NuxtLink>
        <NuxtLink to="/characters">{{ $t("navbar.links.characters") }}</NuxtLink>
        <NuxtLink to="/guides">{{ $t("navbar.links.guides") }}</NuxtLink>
        <NuxtLink to="/rules">{{ $t("navbar.links.rules") }}</NuxtLink>
    </div>
</template>