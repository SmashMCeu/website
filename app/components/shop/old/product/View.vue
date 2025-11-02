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
                        :variants="product.variants"
                    />
                    <UiButton @click="addToCart">
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
const props = defineProps<{
    productName: string
}>()

const products = useShopStore().products
const product = products.find(p => p.name.toLowerCase().replace(/ /g, "") === props.productName.toLowerCase().replace(/ /g, ""))

if (!product) {
    throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
    })
}

const queryParamVariant = useRoute().query.variant as string | undefined

const hasVariants = computed(() => {
    return product.variants.length > 0
})

const defaultVariant = computed(() => {
    return product.package ? product.package : product.variants[0]
})
const currentVariant = ref<TebexPackage | undefined>(
    hasVariants.value
        ? product.variants.find(v => v.name.toLowerCase().replace(/ /g, "") === queryParamVariant?.toLowerCase().replace(/ /g, "")) || defaultVariant.value
        : defaultVariant.value,
)

function addToCart() {
    if (!currentVariant.value) return

    useShopStore().addToCart({
        id: currentVariant.value.id.toString(),
        quantity: 1,
    })

    const localePath = useLocalePath()
    useToast().success(`Added ${currentVariant.value.name} to cart!`, {
        action: {
            label: "Checkout",
            onClick: () => {
                navigateTo(localePath("/shop/checkout"))
            },
        },
    })
}

watch(currentVariant, (newVariant) => {
    if (
        newVariant
        && defaultVariant.value
        && newVariant.name !== defaultVariant.value.name
    ) {
        useRouter().replace({
            query: { ...useRoute().query, variant: newVariant.name.toLowerCase().replace(/ /g, "") },
        })
    } else {
        useRouter().replace({
            query: { ...useRoute().query, variant: undefined },
        })
    }
}, { immediate: true })
</script>
