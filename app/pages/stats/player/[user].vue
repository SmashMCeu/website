<template>
    <div class="flex justify-center w-full">
        <Suspense>
            <AppPlayerStatsDialogView
                v-if="playerIdentity"
                :player-identity="playerIdentity"
            />
            <p
                v-else
                class="px-6 py-4 text-center text-muted-foreground"
            >
                Player not found. Please check the username or UUID.<br>
                Maybe the player has never played on SmashMC?
            </p>

            <template #fallback>
                <div class="px-6 py-4 flex justify-center">
                    <p class="text-muted-foreground">
                        Loading player stats...
                    </p>
                </div>
            </template>
        </Suspense>
    </div>
</template>

<script lang="ts" setup>
import * as z from "zod"

const paramSchema = z.object({
    user: z.union([
        z.uuid(),
        z.string().regex(/^[a-zA-Z0-9_]{3,16}$/),
    ]),
})

const user = paramSchema.safeParse(useRoute().params)

if (!user.success) {
    throw createError({
        statusCode: 400,
        statusMessage: "Invalid user parameter. Must be a valid UUID or username.",
    })
}

const uuidOrName = user.data.user

const { data: playerIdentity } = await useAsyncData(async () => {
    return await useMcIdentity().getByUuidOrName(uuidOrName)
})
</script>
