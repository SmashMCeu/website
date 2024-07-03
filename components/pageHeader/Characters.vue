<template>
    <PageHeaderBase background-image="CharactersHeader.jpg">
        <p class="font-black text-white tracking-tight text-4xl md:text-6xl">{{ $t("characters.header.title") }}</p>
        <p class="font-semibold text-textColorLight md:ml-2 mt-2 text-lg md:text-2xl tracking-tight leading-5 md:leading-7">
            {{ $t("characters.header.description") }}
            <ScrollTo target="howToCreateACharacterSkin" class="underline">{{ $t("characters.header.guideLinkText") }}</ScrollTo>
        </p>
    </PageHeaderBase>
</template>