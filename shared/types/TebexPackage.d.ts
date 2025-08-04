export interface TebexPackage {
    id: number
    name: string
    description: string
    image: string | null
    type: string
    category: {
        id: number
        name: string
    }
    base_price: number
    sales_tax: number
    total_price: number
    currency: string
    discount: number
    disable_quantity: boolean
    disable_gifting: boolean
    expiration_date: string | null
    created_at: string
    updated_at: string
}
