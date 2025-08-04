export interface TebexCategory {
    id: number
    name: string
    slug: string | null
    parent: TebexCategory | null
    description: string
    packages: TebexPackage[] | null
    order: number
    display_type: "list" | "grid"
    image_url: string | null
}
