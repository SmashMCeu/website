import type { ShopPackageInBasket } from "./ShopPackage"

export interface ShopBasket {
    ident: string
    complete: boolean
    id: number
    email: string
    country: string
    ip: string
    username_id: string
    username: string
    cancel_url: string | null
    complete_url: string | null
    complete_auto_redirect: boolean
    base_price: number
    total_price: number
    currency: string
    packages: ShopPackageInBasket[]
    coupons: { code: string }[]
    giftcards: { card_number: string }[]
    creator_code: string | null
    links: { payment: string, checkout: string }[]
}

export interface ShopBasketAction {
    type: "add" | "gift"
    packageId: number
    quantity?: number
    targetUsername?: string
}
