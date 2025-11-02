import { skipHydrate } from "pinia"
import type { ShopCategory } from "~~/shared/types/ShopCategory"
import type { ShopPackage } from "~~/shared/types/ShopPackage"

export const useShopProducts = defineStore("shopProducts", () => {
    const categories = ref<ShopCategory[]>([])
    const packages = computed<ShopPackage[]>(() => {
        return categories.value.flatMap((category) => {
            return category.packages
        })
    })

    async function fetchCategories(): Promise<void> {
        const categoriesData = await useTebexEndpoints().getCategories()
        if (categoriesData) {
            categories.value = categoriesData
        } else {
            categories.value = []
            console.warn("No categories found")
        }
    }

    fetchCategories()
    return {
        categories: skipHydrate(categories),
        packages: skipHydrate(packages),
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useShopProducts, import.meta.hot))
}
