<template>
    <PageHeaderBase background-image="CharactersHeader.jpg">
        <p class="font-black text-white tracking-tight text-4xl md:text-6xl">{{ $t("characters.header.title") }}</p>
        <p class="font-semibold text-textColorLight md:ml-2 mt-2 text-lg md:text-2xl tracking-tight leading-5 md:leading-7">
            {{ $t("characters.header.description") }}
            <NuxtLink to="guides/howToCreateACharacterSkin" class="underline text-primary-300">{{ $t("characters.header.guideLinkText") }}</NuxtLink>
        </p>
    </PageHeaderBase>
</template>