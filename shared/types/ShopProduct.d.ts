export interface ShopProduct {
    name: string
    image: string | null
    package?: TebexPackage
    variants: TebexPackage[]
}
