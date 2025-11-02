/*
export const useShopStore = defineStore("shop", () => {
    const categories = ref<ShopCategory[]>([])
    const products = computed<ShopProduct[]>(() => {
        return categories.value.flatMap(category => category.products)
    })
    const cartItems = ref<ShopCartItem[]>([])

    async function backgroundFetchData() {
        try {
            categories.value = await useShop().getCategories()
        } catch (error) {
            console.error("Failed to fetch shop categories:", error)
            throw createError({
                statusCode: 500,
                statusMessage: "Failed to fetch shop categories",
                cause: error,
            })
        }
    }

    function addToCart(item: ShopCartItem) {
        const existingItem = cartItems.value.find(
            cartItem => cartItem.id === item.id,
        )

        if (existingItem) {
            existingItem.quantity += item.quantity
        } else {
            cartItems.value.push(item)
        }
    }

    function removeFromCart(id: string) {
        cartItems.value = cartItems.value.filter(
            item => item.id !== id,
        )
    }

    return {
        categories,
        products,
        cartItems,
        backgroundFetchData,
        addToCart,
        removeFromCart,
    }
})
*/
