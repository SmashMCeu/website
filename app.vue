<template>
  <div class="bg-backgroundColor min-h-screen overflow-x-hidden">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>


<style>
  :root { 
    touch-action: pan-x pan-y;
  }
</style>

<!-- GAY CODE -->
<script setup>
const colorMode = useColorMode();

onMounted(async () => {
  await nextTick();
  colorMode.preference = "dark";
});
</script>
