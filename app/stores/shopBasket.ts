import { useStorage } from "@vueuse/core"
import useTebexEndpoints from "~/composables/useTebexEndpoints"
import { skipHydrate } from "pinia"
import type { ShopBasket, ShopBasketAction } from "~~/shared/types/ShopBasket"
import type { ShopPackage, ShopPackageInBasket, ShopPackageVariableData } from "~~/shared/types/ShopPackage"

export const useShopBasket = defineStore("shopBasket", () => {
    const basket = ref<ShopBasket | null>(null)
    const basketId = ref<string | null>(null)

    const hasBasket = computed(() => basket.value && !basket.value.complete)

    const packages = computed(() => {
        const packages = basket.value?.packages || []
        return new Map(packages.map((p: ShopPackageInBasket) => [p.id, p]))
    })

    const pendingPackages = reactive<Set<ShopPackage["id"]>>(new Set())
    const pendingPackageActions = useStorage<ShopBasketAction[]>("shop-pending-package-actions", [])

    async function createBasket(username: string): Promise<void> {
        basket.value = await useTebexEndpoints().createBasket(username)
        console.log(basket.value)

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

    async function addPendingAction(action: ShopBasketAction) {
        pendingPackageActions.value.push(action)
    }

    function clearPendingPackageActions() {
        pendingPackageActions.value = []
    }

    async function flushPendingPackages() {
        for (const action of pendingPackageActions.value) {
            if (action.type === "add") {
                await addPackageToBasket(action.packageId, action.quantity)
            } else if (action.type === "gift" && action.targetUsername) {
                await giftPackage(action.packageId, action.quantity, action.targetUsername)
            }
        }

        clearPendingPackageActions()
    }

    watch(
        () => useShopAccount().isAuthenticated,
        async (isAuthenticated, prevValue) => {
            if (isAuthenticated && !prevValue) {
                flushPendingPackages()
            }
        },
    )

    async function addPackageToBasket(packageId: number, quantity = 1, variables?: ShopPackageVariableData): Promise<void> {
        if (!useShopAccount().isAuthenticated || !basket.value) {
            addPendingAction({
                type: "add",
                packageId,
                quantity,
            })
            return
        }

        pendingPackages.add(packageId)
        const newBasket = await useTebexEndpoints().addPackageToBasket(
            basket.value.ident,
            packageId.toString(),
            quantity,
            variables,
        )
        pendingPackages.delete(packageId)

        if (newBasket) {
            basket.value = newBasket
            useToast().success("Successfully added item to basket")
        } else {
            useToast().error("Failed to add package to basket")
        }
    }

    async function removePackageFromBasket(packageId: number): Promise<void> {
        if (!basket.value) return

        pendingPackages.add(packageId)
        const newBasket = await useTebexEndpoints().removePackageFromBasket(
            basket.value.ident,
            packageId.toString(),
        )
        pendingPackages.delete(packageId)

        if (newBasket) {
            basket.value = newBasket
            useToast().success("Successfully removed item from basket")
        } else {
            useToast().error("Failed to remove package from basket")
        }
    }

    async function giftPackage(packageId: number, quantity = 1, targetUsername: string, variables?: ShopPackageVariableData): Promise<void> {
        if (!useShopAccount().isAuthenticated || !basket.value) {
            addPendingAction({
                type: "gift",
                packageId,
                quantity,
                targetUsername,
            })
            return
        }

        pendingPackages.add(packageId)
        const newBasket = await useTebexEndpoints().addPackageToBasket(
            basket.value.ident,
            packageId.toString(),
            quantity,
            variables,
            targetUsername,
        )
        pendingPackages.delete(packageId)

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
        pendingPackages: skipHydrate(pendingPackages),
        packages,
        createBasket,
        destroyBasket,
        fetchBasket,
        addPackageToBasket,
        removePackageFromBasket,
        giftPackage,
        clearPendingPackageActions,
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useShopBasket, import.meta.hot))
}
