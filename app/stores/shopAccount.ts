import { skipHydrate } from "pinia"
import { useStorage } from "@vueuse/core"
import type { ShopUser } from "~~/shared/types/ShopUser"

export const useShopAccount = defineStore("shopAccount", () => {
    const basket = useShopBasket()
    const auth = useStorage<ShopUser | null>("shop-auth", null)
    const isAuthenticated = computed(() => !!auth.value?.username)

    async function login(username: string): Promise<ShopUser | null> {
        if (!username || username.trim() === "") {
            throw new Error("Username is required")
        }

        await basket.createBasket(username)
        const userBasket = basket.basket

        if (userBasket) {
            auth.value = {
                username,
                userId: userBasket.username_id,
            }
            useToast().success("Successfully logged in")
        } else {
            useToast().error("Failed to login")
        }

        return auth.value
    }

    async function logout() {
        auth.value = null
        try {
            await useShopBasket().destroyBasket()
            useToast().info("Successfully logged out")
        } catch (_) {
            useToast().error("Failed to logout properly")
        }
    }

    return {
        user: skipHydrate(auth),
        isAuthenticated,
        login,
        logout,
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useShopAccount, import.meta.hot))
}
