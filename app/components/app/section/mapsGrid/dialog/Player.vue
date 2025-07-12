<template>
    <div class="flex items-center gap-2 text-lg">
        <McSkinRender2dHead
            :skin-url="skinUrl"
            class="size-6 rounded"
        />
        <p
            v-if="identity"
            class="font-semibold"
        >
            {{ identity.name }}
        </p>
        <p v-else>
            Loading...
        </p>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    uuid: string
}>()

const { data: identity } = await useAsyncData(`player-identity-${props.uuid}`, async () => {
    return await useMcIdentity().getByUuid(props.uuid)
}, { watch: [() => props.uuid] })

const skinUrl = computed(() => {
    if (!identity.value) return undefined
    return useMcIdentity().getTexture(identity.value).textures.SKIN?.url
})
</script>
