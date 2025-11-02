<template>
    <div class="px-16">
        <div class="pt-28 flex">
            <NavigationNavBar />
            <div class="flex flex-col gap-8 w-full">
                <ShopNavigationBar />

                <div class="mt-28 px-10 min-h-screen">
                    <slot />
                </div>
                <Footer />
            </div>
        </div>
    </div>
</template>
