<template>

    <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full md:basis-1/2' }"
        class="rounded-lg overflow-hidden"
        indicators
    >

        <img :src="item.image" class="w-full" draggable="false">

    </UCarousel>


</template>

<script setup lang="ts">

    const items = ref(await useGithubContent().getAllMaps());
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
