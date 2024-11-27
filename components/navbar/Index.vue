<template>
    <div ref="mobileNavbarElement" class="fixed z-40 bg-backgroundColorLight w-full lg:px-16 md:px-8 px-4 py-4 transition-all">

        <div class="flex items-center justify-between">
            <div>
                <a href="/">
                    <img src="/img/logo.svg" alt="logo" class="h-10 hover:animate-spin">
                </a>
            </div>

            <div class="sm:flex hidden gap-4
                hover:*:bg-white/5 *:transition-colors md:*:py-3 *:py-2 md:*:px-4 *:px-3 *:rounded-lg *:flex *:items-center *:gap-2">
                <NavbarLinks />
            </div>
        
            <NavbarShopButton class="sm:flex hidden"/>



            <button title="menu" @click="mobileMenuOpen = !mobileMenuOpen" :class="{'hidden': !isMobile}" class="flex items-center justify-center text-primary">
                <Icon v-if="!mobileMenuOpen" name="solar:hamburger-menu-bold" size="45" />
                <Icon v-else name="solar:close-square-outline" size="45" />
            </button>
        </div>
        <div v-if="mobileMenuOpen" class="flex flex-col items-center gap-8 mt-4">
            <div class="flex flex-col gap-2 items-center hover:*:bg-white/5 *:transition-colors *:py-2 *:px-3 *:rounded-lg">
                <NavbarLinks />
            </div>
            <NavbarShopButton class="*:inline"/>
        </div>

    </div>
</template>
<script lang="ts" setup>

    const mobileNavbarElement = ref(null);
    const t = onClickOutside(mobileNavbarElement, () => {
        mobileMenuOpen.value = false;
    })

    const maxMobileWidth: number = 640; // tailwindcss sm breakpoint

    const isMobile: Ref<boolean> = ref(false);
    const mobileMenuOpen: Ref<boolean> = ref(false);

    const checkMobile = () => {
        if (window.innerWidth < maxMobileWidth) {
            isMobile.value = true;
        } else {
            isMobile.value = false;
            mobileMenuOpen.value = false;
        }
    }
    
    onMounted(() => {
        window.addEventListener("resize", checkMobile);
        checkMobile(); // initial check
    });

    // Auto close mobile menu on route change
    watch(
        () => useRoute().fullPath,
        () => mobileMenuOpen.value = false
    );


</script>
<style>
    .router-link-exact-active {
        @apply text-primary;
    }
</style>
