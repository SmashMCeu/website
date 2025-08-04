export const useShopStore = defineStore("shop", () => {
    const categories = ref<ShopCategory[]>([])
    const products = computed<ShopProduct[]>(() => {
        return categories.value.flatMap(category => category.products)
    })

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

    return {
        categories,
        products,
        backgroundFetchData,
    }
})
