<template>
    <AppSection
        pretitle="Shopping Cart"
        title="Checkout"
        align="left"
    >
        <div class="flex flex-col gap-8">
            <ShopCheckoutCartItem
                v-for="item in cartItems"
                :key="item.packageId"
                :item="item"
            />
        </div>
        <div
            v-if="cartItems.length === 0"
        >
            <h2 class="mb-4 text-xl font-semibold text-muted-foreground">
                Your cart is empty.
            </h2>
            <NuxtLinkLocale
                class="flex "
                to="/shop"
            >
                <UiButton>
                    <Icon name="lucide:shopping-bag" />
                    Browse Products
                </UiButton>
            </NuxtLinkLocale>
        </div>
        <div v-else>
            <h3 class="font-semibold text-lg mb-4">
                Total: {{ totalPrice.toFixed(2) }} €
            </h3>
            <UiButton @click="handleCheckout">
                <Icon name="lucide:credit-card" />
                Proceed to Payment
            </UiButton>
        </div>
    </AppSection>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const { locale } = useI18n()

const shopStore = useShopStore()
const cartItems = computed(() => shopStore.cartItems)

const totalPrice = computed(() => {
    return cartItems.value.reduce((total, item) => {
        const product = shopStore.products.find(p => p.variants.map(v => v.id.toString()).includes(item.id) || (p.package && p.package.id.toString() === item.id))
        const variant = product?.variants.find(v => v.id.toString() === item.id)
        const itemPrice = (variant?.total_price || product?.package?.total_price || 0) * item.quantity
        return total + itemPrice
    }, 0)
})

useShop().Tebex.checkout.on("payment:complete", () => {
    useToast().success("Payment completed successfully!")
})

async function handleCheckout() {
    const { ident, username_id } = await prepareBasket()

    if (!ident || !username_id) {
        useToast().error("Failed to prepare for checkout. Please try again later.")
        return
    }

    await addProductsToBasket(ident)

    useShop().Tebex.checkout.init({
        ident: ident,
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

async function prepareBasket(): Promise<{ ident: string | undefined, username_id: string | undefined }> {
    const token = useRuntimeConfig().public.tebex.token
    const username = "ArtusDev" // TODO: Use actual username
    const response = await fetch(`https://headless.tebex.io/api/accounts/${token}/baskets?username=${username}`, {
        method: "POST",
    })

    if (!response.ok) {
        return {
            ident: undefined,
            username_id: undefined,
        }
    }

    const { data } = await response.json()
    return {
        ident: data.ident,
        username_id: data.username_id,
    }
}

async function addProductsToBasket(ident: string) {
    for (const item of cartItems.value) {
        await fetch(`https://headless.tebex.io/api/baskets/${ident}/packages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                package_id: item.id,
                quantity: item.quantity,
            }),
        })
    }
}
</script>
