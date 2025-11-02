export interface ShopPackage {
    id: number
    name: string
    base_price: number
    total_price: number
    currency: string
    discount: number
    sales_tax: number
    type: string
    description: string
    category: Pick<ShopCategory, "id" | "name">
    image: string
    created_at: string | null
    updated_at: string
    expiration_date: string | null
    disable_gifting: boolean
    disable_quantity: boolean
}

interface ShopPackageVariableOption {
    id: number
    name: string
    value: string
    price: number
    percentage: number
}

export interface ShopPackageVariable {
    id: number
    identifier: string
    description: string
    type:
      | "dropdown"
      | "alpha"
      | "numeric"
      | "alphanumeric"
      | "username"
      | "email"
      | "text"
    options?: ShopPackageVariableOption[]
}

export type ShopPackageVariableData = Record<ShopPackageVariable["identifier"], never>

export type ShopPackageOption = "1x" | "5x" | "10x"

interface InBasket {
    gift_username: string
    gift_username_id: string
    price: number
    quantity: number
}

export type ShopPackageInBasket = Pick<
    ShopPackage,
    "id" | "description" | "image" | "name"
> & {
    in_basket: InBasket
}

export type ShopMaybePackageWithVariables = ShopPackage & {
    variables?: ShopPackageVariable[]
}
