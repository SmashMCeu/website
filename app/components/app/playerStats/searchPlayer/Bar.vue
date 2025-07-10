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

const inputValue = ref("")

const validInput = computed(() => {
    return uuidOrUsernameSchema.safeParse(inputValue.value).success
})

function lookupStats() {
    if (validInput.value) {
        emit("search", inputValue.value)
    }
}
</script>
