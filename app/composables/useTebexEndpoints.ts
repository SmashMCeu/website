import type { ShopBasket } from "~~/shared/types/ShopBasket"
import type { ShopCategory } from "~~/shared/types/ShopCategory"

export default function () {
    async function createBasket(username?: string): Promise<ShopBasket | null> {
        try {
            return await useShopAPI<ShopBasket>("accounts", "/baskets", {
                method: "POST",
                body: {
                    username,
                },
            })
        } catch (error) {
            console.error("Failed to create basket:", error)
            return null
        }
    }

    async function fetchBasket(basketId: string): Promise<ShopBasket | null> {
        try {
            return await useShopAPI<ShopBasket>("accounts", `/baskets/${basketId}`)
        } catch (error) {
            console.error("Failed to fetch basket:", error)
            return null
        }
    }

    async function addPackageToBasket(basketId: string, packageId: string, quantity: number, variables?: Record<string, string>, targetUsername?: string): Promise<ShopBasket | null> {
        try {
            return await useShopAPI<ShopBasket>("baskets", `/${basketId}/packages`, {
                method: "POST",
                body: {
                    package_id: packageId,
                    quantity,
                    variable_data: variables,
                    target_username: targetUsername,
                },
            })
        } catch (error) {
            console.error("Failed to add package to basket:", error)
            return null
        }
    }

    async function removePackageFromBasket(basketId: string, packageId: string): Promise<ShopBasket | null> {
        try {
            return await useShopAPI<ShopBasket>("baskets", `/${basketId}/packages/remove`, {
                method: "POST",
                body: {
                    package_id: packageId,
                },
            })
        } catch (error) {
            console.error("Failed to remove package from basket:", error)
            return null
        }
    }

    async function getCategories(includePackages: boolean = true): Promise<ShopCategory[] | null> {
        try {
            const response = await useShopAPI<{ data: ShopCategory[] }>("accounts", `/categories${includePackages ? "?includePackages=1" : ""}`)
            return response.data
        } catch (error) {
            console.error("Failed to fetch categories:", error)
            return null
        }
    }

    return {
        createBasket,
        fetchBasket,
        addPackageToBasket,
        removePackageFromBasket,
        getCategories,
    }
}
