<template>
    <div class="px-16">
        <div class="min-h-screen py-36 flex">
            <NavigationNavBar />
            <div class="flex gap-16 w-full">
                <ShopSidebar />

                <div class="px-10 grow">
                    <slot />
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
