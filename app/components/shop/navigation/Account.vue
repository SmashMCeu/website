<template>
    <UiButton
        class="group justify-between"
        :class="{
            'min-w-[150px] hover:bg-red-400': isAuthenticated,
        }"
        @click="onClick"
        @mouseenter="isHovering = true"
        @mouseleave="isHovering = false"
    >
        <Icon
            v-if="!isAuthenticated"
            name="lucide:circle-user"
            :size="18"
        />
        <McSkinRender2dHead
            v-else
            class="size-6 rounded-sm -ml-2"
            :skin-url="skinUrl"
        />

        <span
            class="flex-1 text-center"
            :class="{
                underline: isHovering && isAuthenticated,
            }"
        >
            {{ isAuthenticated
                ? (isHovering ? "Logout" : user?.username || "Unknown")
                : "Login"
            }}
        </span>
        <Icon
            v-if="isAuthenticated"
            name="lucide:log-out"
            :size="14"
        />
    </UiButton>
</template>

<script setup lang="ts">
const { isAuthenticated, user } = storeToRefs(useShopAccount())
const isHovering = ref(false)
const skinUrl = ref<string | undefined>()

watch(
    () => user.value,
    async (newUser) => {
        if (newUser && newUser.username) {
            const identity = await useMcIdentity().getByName(newUser.username)
            skinUrl.value = useMcIdentity().getTexture(identity).textures.SKIN?.url
        } else {
            skinUrl.value = undefined
        }
    },
    { immediate: true },
)

function onClick() {
    if (isAuthenticated.value) {
        useShopAccount().logout()
        return
    }

    // TODO: Replace with proper login popup and validation
    const username = prompt("Enter your username to login:")
    if (username && username.trim() !== "") {
        useShopAccount().login(username.trim())
    }
}
</script>
