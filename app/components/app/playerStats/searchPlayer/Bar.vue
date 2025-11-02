<template>
    <div class="relative w-full max-w-md flex items-center gap-4">
        <UiInput
            v-model="inputValue"
            type="text"
            placeholder="Username or UUID..."
            class="pl-9"
            :class="{
                'border-destructive': !validInput && inputValue.length > 0,
            }"
            @keyup.enter="lookupStats"
        />
        <UiButton @click="lookupStats">
            <Icon name="lucide:search" />
            Lookup
        </UiButton>
        <div class="absolute start-0 inset-y-0 flex items-center justify-center px-3 text-muted-foreground">
            <Icon name="lucide:search" />
        </div>
    </div>
</template>

<script setup lang="ts">
import * as z from "zod"

const emit = defineEmits<{
    (e: "search", payload: string): void
}>()

const uuidOrUsernameSchema = z.union([
    z.uuid(),
    z.string().regex(/^[a-zA-Z0-9_]{3,16}$/),
])

const queryParamSchema = z.object({
    player: uuidOrUsernameSchema.optional(),
})
const query = queryParamSchema.safeParse(useRoute().query)
if (!query.success) {
    throw createError({
        statusCode: 400,
        statusMessage: "Invalid query parameter. Must be a valid UUID or username.",
    })
}
const inputValue = ref(query.data.player || "")

const validInput = computed(() => {
    return uuidOrUsernameSchema.safeParse(inputValue.value).success
})

// Update query parameter when input changes
const debouncedUpdate = useDebounceFn((newValue: string) => {
    const router = useRouter()
    const route = useRoute()

    if (newValue) {
        router.push({
            query: { ...route.query, player: newValue },
        })
    } else {
        // TODO: fix lint
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { player, ...restQuery } = route.query
        router.push({
            query: restQuery,
        })
    }
}, 500)

watch(inputValue, debouncedUpdate)

function lookupStats() {
    if (validInput.value) {
        emit("search", inputValue.value)
    }
}

onMounted(() => {
    lookupStats()
})
</script>
