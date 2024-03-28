<template>
    <div @click="scrollTo(props.target)" class="inline-block cursor-pointer text-primary-300">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">

    const props = defineProps({
        target: {
            required: true,
            type: String,
        },
    });

    const scrollTo = (id: string) => {
        const target = document.getElementById(id);
        if (target) {
            setTimeout(() => {
                target.style.scrollMarginTop = "8rem";
                target.scrollIntoView({ behavior: "smooth" });
            }, 100)
        }
    }

</script>