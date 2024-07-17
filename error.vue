<template>
    <Navbar/>
    <div class="h-[100vh] -pt-20 flex flex-col items-center justify-center">

        <p class="font-semibold text-primary text-3xl">{{ error?.statusCode }}</p>
        <p class="font-bold text-3xl md:text-5xl -mt-1 text-center">{{ error?.statusMessage }}</p>
        <p class="text-nuxtuiGray-400 text-lg mt-2 text-center" v-if='error?.message != "" && error?.statusMessage != error?.message'>{{ error?.message }}</p>

        <UButton
            class="mt-10"
            icon="i-mdi-home"
            size="lg"
            color="primary"
            variant="solid"
            label="Go back home"
            @click="handleError()"
            :trailing="false"
        />

    </div>
    <Footer/>
</template>
<script setup lang="ts">

    import type { NuxtError } from '#app';

    const props = defineProps({
        error: Object as () => NuxtError
    });

    const handleError = () => clearError({ redirect: '/' })


    // GAY CODE
    const colorMode = useColorMode();

    onMounted(async () => {
        await nextTick();
        colorMode.preference = "dark";
    });
</script>

