<template>
    <div class="
        fixed left-0 right-0 top-0
        lg:px-20 px-10 py-5
        flex justify-between items-center
        bg-navbarBackground backdrop-blur-md
        z-50"
        
        :class='{ "flex-col gap-10 pb-10": currentScreenWidth <= maxMobileWidth && isMobileMenuOpen }'>

        <div class="flex items-center gap-3" :class='{ "w-full": currentScreenWidth <= maxMobileWidth }'>
            <a href="/" class="cursor-pointer hover:child:animate-spin">
                <img src="/images/SmashLogo.svg" class="h-12">
            </a>
            <p class="text-2xl font-black" v-if="currentScreenWidth <= maxMobileWidth && currentScreenWidth > 400">{{ $t("navbar.ipText") }}</p>
            
        
            <NavbarMenuBurger v-model="isMobileMenuOpen" v-if="currentScreenWidth <= maxMobileWidth" class="ml-auto"/>
        </div>
        
        
    
        <NavbarLinkGroup v-if="isMobileMenuOpen || currentScreenWidth > maxMobileWidth" :class='{ "flex-col items-center gap-4": currentScreenWidth <= maxMobileWidth }'/>

        <UButton v-if="isMobileMenuOpen || currentScreenWidth > maxMobileWidth" to="https://shop.smashmc.eu" target="_blank" icon="i-heroicons-building-storefront" variant="outline" size="xl" class="gap-3 px-4">            
            {{ $t("navbar.shop") }}
        </UButton>
        


    </div>
</template>



<script setup lang="ts">

    const maxMobileWidth: Ref<number> = ref(767); // 768px => tailwind md:...
    const currentScreenWidth: Ref<number> = ref(0);
    const isMobileMenuOpen: Ref<boolean> = ref(false);

    onMounted(() => {
        currentScreenWidth.value = window.innerWidth;
        window.onresize = () => {
            if (currentScreenWidth.value > maxMobileWidth.value && isMobileMenuOpen.value) {
                isMobileMenuOpen.value = false;
            }
            currentScreenWidth.value = window.innerWidth;
        }
    });

    watch(
        () => useRoute().fullPath,
        () => isMobileMenuOpen.value = false
    );

</script>
