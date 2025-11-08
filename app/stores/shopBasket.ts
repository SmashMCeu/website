import useTebexEndpoints from "~/composables/useTebexEndpoints"
import { skipHydrate } from "pinia"
import type { ShopBasket } from "~~/shared/types/ShopBasket"
import type { ShopPackageInBasket, ShopPackageVariableData } from "~~/shared/types/ShopPackage"

export const useShopBasket = defineStore("shopBasket", () => {
    const basket = ref<ShopBasket | null>(null)
    const basketId = ref<string | null>(null)

    const hasBasket = computed(() => basket.value && !basket.value.complete)

    const packages = computed(() => {
        const packages = basket.value?.packages || []
        return new Map(packages.map((p: ShopPackageInBasket) => [p.id, p]))
    })

    async function createBasket(username: string): Promise<void> {
        basket.value = await useTebexEndpoints().createBasket(username)
        basketId.value = basket.value ? basket.value.ident : null
    }

    function destroyBasket(): void {
        basket.value = null
        basketId.value = null
    }

    async function fetchBasket(): Promise<ShopBasket | null> {
        if (!basketId.value) {
            return null
        }

        basket.value = await useTebexEndpoints().fetchBasket(basketId.value)
        return basket.value
    }

    async function addPackageToBasket(packageId: number, quantity = 1, variables?: ShopPackageVariableData): Promise<void> {
        if (!useShopAccount().isAuthenticated || !basket.value) {
            return
        }

        const newBasket = await useTebexEndpoints().addPackageToBasket(
            basket.value.ident,
            packageId.toString(),
            quantity,
            variables,
        )

        if (newBasket) {
            basket.value = newBasket
            useToast().success("Successfully added item to basket")
        } else {
            useToast().error("Failed to add package to basket")
        }
    }

    async function removePackageFromBasket(packageId: number): Promise<void> {
        if (!basket.value) return

        const newBasket = await useTebexEndpoints().removePackageFromBasket(
            basket.value.ident,
            packageId.toString(),
        )

        if (newBasket) {
            basket.value = newBasket
            useToast().success("Successfully removed item from basket")
        } else {
            useToast().error("Failed to remove package from basket")
        }
    }

    async function giftPackage(packageId: number, quantity = 1, targetUsername: string, variables?: ShopPackageVariableData): Promise<void> {
        if (!useShopAccount().isAuthenticated || !basket.value) {
            return
        }

        const newBasket = await useTebexEndpoints().addPackageToBasket(
            basket.value.ident,
            packageId.toString(),
            quantity,
            variables,
            targetUsername,
        )

        if (newBasket) {
            basket.value = newBasket
            useToast().success(`Successfully added item as a gift for ${targetUsername}`)
        } else {
            useToast().error("Failed to gift package")
        }
    }

    return {
        basketId,
        basket: skipHydrate(basket),
        hasBasket: skipHydrate(hasBasket),
        packages,
        createBasket,
        destroyBasket,
        fetchBasket,
        addPackageToBasket,
        removePackageFromBasket,
        giftPackage,
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useShopBasket, import.meta.hot))
}
