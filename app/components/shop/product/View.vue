<template>
    <div
        v-if="product"
        class="space-y-4"
    >
        <h1 class="text-2xl font-semibold ml-4">
            {{ currentVariant?.name }}
        </h1>
        <div class="flex h-full gap-8">
            <div class="flex flex-col gap-4">
                <div class="flex items-center justify-center bg-accent/50 rounded-lg aspect-square w-48">
                    <img
                        v-if="currentVariant?.image"
                        :src="currentVariant.image"
                        :alt="`${product.name} image as 3d text`"
                    >
                    <Icon
                        v-else
                        name="lucide:package"
                        :size="48"
                    />
                </div>
                <div class="*:w-full space-y-2">
                    <ShopProductVariantSelect
                        v-if="hasVariants"
                        v-model="currentVariant"
                        :variants="variants"
                    />
                    <div class="flex items-center justify-between rounded-md px-4">
                        <p class="text-muted-foreground text-sm">
                            Price:
                        </p>
                        <p>{{ currentVariant?.total_price }} €</p>
                    </div>
                    <UiButton
                        class="mt-4"
                        @click="addToCart"
                    >
                        <Icon name="lucide:shopping-cart" />
                        Add to cart
                    </UiButton>
                </div>
            </div>
            <div class="space-y-8">
                <div
                    v-dompurify-html="currentVariant?.description"
                    class="prose dark:prose-invert border p-4 rounded-lg"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ShopCategory } from "~~/shared/types/ShopCategory"
import type { ShopPackage } from "~~/shared/types/ShopPackage"

const props = defineProps<{
    product: ShopCategory
    variants: ShopPackage[]
}>()

const basket = useShopBasket()
const shopAccount = useShopAccount()

const { getProductOrCategoryUrlName } = useShopProducts()

const queryParamVariant = useRoute().query.variant as string | undefined

const hasVariants = computed(() => {
    return props.variants.length > 0
})

const defaultVariant = computed<ShopPackage | undefined>(() => {
    return props.variants.length > 0 ? props.variants[0] : props.product.packages[0]
})

const currentVariant = ref<ShopPackage | undefined>(props.variants.find(v => getProductOrCategoryUrlName(v.name) === queryParamVariant) || defaultVariant.value)

function addToCart() {
    if (!currentVariant.value) return
    if (!shopAccount.isAuthenticated) {
        useToast().error("You must be logged in to add products to your basket.")
        return
    }
    basket.addPackageToBasket(currentVariant.value.id)
}

watch(currentVariant, (newVariant) => {
    if (
        newVariant
        && defaultVariant.value
        && newVariant.name !== defaultVariant.value.name
    ) {
        useRouter().replace({
            query: { ...useRoute().query, variant: getProductOrCategoryUrlName(newVariant.name) },
        })
    } else {
        useRouter().replace({
            query: { ...useRoute().query, variant: undefined },
        })
    }
}, { immediate: true })
</script>
