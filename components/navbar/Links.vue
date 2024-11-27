<template>
    <NuxtLink to="/">
        <Icon class="lg:inline hidden mt-[1px]" size="20" name="solar:home-outline"/>
        Home
    </NuxtLink>
    <NuxtLink to="/characters">
        <Icon class="lg:inline hidden mt-[2px]" size="20" name="solar:people-nearby-linear"/>
        {{ $t('characters') }}
    </NuxtLink>
    <NuxtLink to="/items">
        <Icon class="lg:inline hidden mt-[2px]" size="20" name="solar:people-nearby-linear"/>
        Items
    </NuxtLink>
    <NuxtLink to="/maps">
        <Icon class="lg:inline hidden mt-[3px]" size="20" name="solar:earth-outline"/>
        Maps
    </NuxtLink>
    <NuxtLink to="/faq">
        <Icon class="lg:inline hidden mt-[3px]" size="20" name="solar:document-add-outline"/>
        FAQ
    </NuxtLink>
    <NuxtLink to="/team">
        <Icon class="lg:inline hidden mt-[3px]" size="20" name="solar:users-group-rounded-outline"/>
        Team
    </NuxtLink>
    <NuxtLink to="/rules">
        <Icon class="lg:inline hidden mt-[3px]" size="20" name="solar:book-bookmark-minimalistic-outline"/>
        {{ $t('rules') }}
    </NuxtLink>
</template>