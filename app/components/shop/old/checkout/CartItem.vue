<template>
    <div class="w-fit">
        <div class="border overflow-hidden rounded-xl flex pr-20 w-fit">
            <div class="bg-accent flex items-center justify-center p-4 shrink-0">
                <img
                    v-if="image"
                    :src="image"
                    alt="Product Image"
                    class="h-20 object-contain"
                >
            </div>

            <div class="px-4 py-2 flex flex-col justify-center min-w-0">
                <h2 class="text-xl font-semibold">
                    {{ variant?.name || product?.name || "Unknown Product" }}
                </h2>
                <p class="text-muted-foreground">
                    Quantity: {{ item.quantity }}
                </p>
                <p class="text-muted-foreground">
                    Total:
                    {{ ((variant?.total_price || product?.package?.total_price || 0) * item.quantity).toFixed(2) }} €
                </p>
                <div
                    class="text-muted-foreground flex items-center gap-1 mt-2 cursor-pointer hover:text-destructive-foreground shrink-0"
                    @click="removeFromCart"
                >
                    <Icon
                        name="lucide:trash-2"
                        class="shrink-0"
                        size="1rem"
                    />
                    <p class="shrink-0 whitespace-nowrap">
                        Remove from cart
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    item: ShopCartItem
}>()

const product = useShopStore().products.find(p => p.variants.map(v => v.id.toString()).includes(props.item.id) || (p.package && p.package.id.toString() === props.item.id))
const variant = product?.variants.find(v => v.id.toString() === props.item.id)
const image = variant?.image || product?.image || null

function removeFromCart() {
    useShopStore().removeFromCart(props.item.id)

    useToast().success("Item removed from cart")
}
</script>
