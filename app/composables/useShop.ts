import Tebex from "@tebexio/tebex.js"

export default function () {
    function getBaseUrl() {
        const baseUrl = useRuntimeConfig().public.tebex.apiBaseUrl
        const token = useRuntimeConfig().public.tebex.token
        return `${baseUrl}/api/accounts/${token}`
    }

    async function getCategories(): Promise<ShopCategory[]> {
        try {
            const response = await $fetch<{ data: TebexCategory[] }>(`${getBaseUrl()}/categories?includePackages=1`)

            const categories: ShopCategory[] = response.data
                .filter(cat => !cat.parent)
                .map((cat) => {
                    const products: ShopProduct[] = []

                    if (cat.packages) {
                        for (const packageItem of cat.packages) {
                            products.push({
                                image: packageItem.image,
                                name: packageItem.name,
                                package: packageItem,
                                variants: [],
                            })
                        }
                    }

                    response.data.filter(subCat => subCat.parent?.id === cat.id).forEach((subCat) => {
                        products.push({
                            image: subCat.image_url,
                            name: subCat.name,
                            package: undefined,
                            variants: subCat.packages ? subCat.packages : [],
                        })
                    })

                    return {
                        name: cat.name,
                        products: products,
                    }
                })

            return categories
        } catch (error) {
            throw createError({
                statusCode: 500,
                statusMessage: "Failed to fetch categories",
                cause: error,
            })
        }
    }

    return {
        Tebex,
        getCategories,
    }
}
