<template>
    <PageHeaderBase>
        <div class="-mt-10 md:mt-0 flex flex-col items-center md:items-start">
            <p class="font-black text-white tracking-tight text-4xl md:text-6xl text-center md:text-start">{{ $t("home.header.title") }}</p>
            <p class="font-semibold text-textColorLight md:ml-2 mt-2 text-lg md:text-2xl tracking-tight leading-5 md:leading-7 text-center md:text-start">
                {{ $t("home.header.description") }}
            </p>
            <div class="mt-4 w-fit flex flex-col sm:flex-row gap-4 items-center">
                <CardsMinecraftServerIp />
                <CardsDiscord />
            </div>
        </div>
    </PageHeaderBase>
</template>