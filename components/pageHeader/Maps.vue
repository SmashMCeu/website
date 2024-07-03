<template>
    <PageHeaderBase background-image="MapsHeader.jpg">
        <p class="font-black text-white tracking-tight text-4xl md:text-6xl">{{ $t("maps.header.title") }}</p>
        <p class="font-semibold text-textColorLight md:ml-2 mt-2 text-lg md:text-2xl tracking-tight leading-5 md:leading-7">
            {{ $t("maps.header.description") }}
            <ScrollTo target="howToBuildAMap" class="underline">{{ $t("maps.header.guideLinkText") }}</ScrollTo>
        </p>
    </PageHeaderBase>
</template>