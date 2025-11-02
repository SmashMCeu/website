import type { ShopPackage } from "./ShopPackage"

export interface ShopCategory {
    id: number
    name: string
    slug: string | null
    description: string
    parent?: ShopCategory
    active_tier?: object
    tiered: boolean
    packages: ShopPackage[]
    order: number
    display_type: "list" | "grid"
    image_url: string | null
}

export interface ShopCategoryWithPackages extends ShopCategory {
    packages: ShopPackage[]
}
