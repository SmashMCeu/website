import type { ShopCategory } from "~~/shared/types/ShopCategory"
import type { ShopPackage } from "~~/shared/types/ShopPackage"

interface ShopState {
    isLoading: boolean
    error: string | null
    lastUpdate: Date | null
}

export const useShopProducts = defineStore("shopProducts", () => {
    const categories = ref<ShopCategory[]>([])
    const state = ref<ShopState>({
        isLoading: false,
        error: null,
        lastUpdate: null,
    })

    const packages = computed<ShopPackage[]>(() => {
        return categories.value.flatMap((category) => {
            return category.packages
        })
    })

    async function loadProducts(force: boolean = false): Promise<void> {
        if (categories.value.length > 0 && !force) {
            return
        }

        try {
            state.value.isLoading = true
            state.value.error = null

            const categoriesData = await useTebexEndpoints().getCategories()

            if (categoriesData) {
                categories.value = categoriesData
                state.value.lastUpdate = new Date()
            } else {
                categories.value = []
                throw new Error("No categories found")
            }
        } catch (error) {
            state.value.error = error instanceof Error ? error.message : "Failed to load shop products"
            console.error("Failed to load shop products:", error)
            categories.value = []
        } finally {
            state.value.isLoading = false
        }
    }

    function getProductOrCategoryUrlName(name: string): string {
        return name.toLowerCase().trim().replace(/ /g, "")
    }

    function findCategoryByUrlName(urlName: string): ShopCategory | undefined {
        return categories.value.find((cat) => {
            return getProductOrCategoryUrlName(cat.name) === getProductOrCategoryUrlName(urlName)
        })
    }

    function getSubCategories(parentCategoryId: number): ShopCategory[] {
        return categories.value.filter(cat => cat.parent?.id === parentCategoryId)
    }

    function getProductByUrlName(urlName: string): ShopPackage[] | undefined {
        return categories.value.find((cat) => {
            return getProductOrCategoryUrlName(cat.name) === getProductOrCategoryUrlName(urlName)
        })?.packages
    }

    return {
        // State
        categories,
        packages,
        state: readonly(state),

        // Actions
        loadProducts,
        getProductOrCategoryUrlName,
        findCategoryByUrlName,
        getSubCategories,
        getProductByUrlName,
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useShopProducts, import.meta.hot))
}
