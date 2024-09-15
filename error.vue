<template>
    <Navbar />
    <div class="min-h-screen w-screen flex flex-col items-center justify-center">
        <div class="flex flex-col items-center">
            <p class="text-textColorLight md:text-8xl sm:text-7xl text-4xl font-black">{{ error?.statusCode }}</p>
            <p class="md:text-3xl text-xl font-semibold text-center">{{ error?.message }}</p>
        </div>
        <button @click="handleError" class="mt-6 px-4 py-2 text-primary flex gap-2 border-2 border-primary rounded-lg
                                            hover:bg-primary hover:text-backgroundColor hover:scale-110 transition-all">
            <Icon class="mt-[1px]" size="20" name="solar:home-outline"/>
            <p>Go Home</p>
        </button>
    </div>
    <Footer />
</template>
<script lang="ts" setup>
    import type { NuxtError } from '#app'

    const props = defineProps({
        error: Object as () => NuxtError
    })

    const handleError = () => clearError({ redirect: '/' })
</script>