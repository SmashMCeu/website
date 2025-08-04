<template>
    <div>
        <p>Checkout</p>

        <div class="flex flex-col gap-16">
            <div
                v-for="category in categories"
                :key="category.id"
            >
                <h3 class="text-2xl font-bold">
                    {{ category.name }}
                </h3>
                <ul class="space-y-8">
                    <li
                        v-for="packageItem in category.packages"
                        :key="packageItem.id"
                        class="p-4 border rounded-lg"
                    >
                        <p class="text-lg font-semibold">
                            {{ packageItem.name }}
                        </p>
                        <div
                            v-dompurify-html="packageItem.description"
                            class="prose dark:prose-invert"
                        />
                    </li>
                </ul>
            </div>
        </div>

        <button @click="handleCheckout">
            Start Checkout
        </button>
    </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const { locale } = useI18n()
const categories: Ref<TebexCategory[]> = ref(await useShop().getCategories())

useShop().Tebex.checkout.on("payment:complete", () => {
    useToast().success("Payment completed successfully!") // TODO: change text
})

function handleCheckout() {
    useShop().Tebex.checkout.init({
        ident: "your-unique-identifier",
        locale: locale.value, // TODO: Test if this works
        theme: colorMode.value === "dark" ? "dark" : "light",
        colors: [
            {
                name: "primary",
                color: "#ff0000", // TODO: Use css primary color
            },
            {
                name: "secondary",
                color: "#00ff00", // TODO: Use css secondary color
            },
        ],
    })

    useShop().Tebex.checkout.launch()
}
</script>
