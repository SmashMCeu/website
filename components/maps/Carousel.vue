<template>

    <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full basis-1/4 md:basis-1/2 child:rounded-lg', container: 'gap-5' }"
        class="overflow-hidden"
    >

        <img :src="item.image" class="w-full" draggable="false">

    </UCarousel>


</template>

<script setup lang="ts">

    const items = ref(await useGithubContent().getAllMaps());
    items.value = items.value.concat(items.value);
    const carouselRef = ref()

    onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }

        carouselRef.value.next()
    }, 3000)
    })
</script>
