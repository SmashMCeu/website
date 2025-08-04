<template>
    <div class="flex justify-center w-full">
        <Suspense>
            <AppPlayerStatsDialogView
                v-if="playerIdentity"
                :player-identity="playerIdentity"
                :state="state"
            />
            <p
                v-else
                class="px-6 py-4 text-center text-muted-foreground"
            >
                Player not found. Please check the username or UUID.<br>
                Maybe the player has never played on SmashMC?
            </p>

            <template #fallback>
                <div class="px-6 py-4 flex items-center gap-2 justify-center text-muted-foreground">
                    <LoadingIndicator />
                    <p>Loading player stats...</p>
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

const queryParamSchema = z.object({
    type: z.enum(["monthly", "alltime"]).optional().default("alltime"),
})

const user = paramSchema.safeParse(useRoute().params)
const query = queryParamSchema.safeParse(useRoute().query)

if (!user.success || !query.success) {
    throw createError({
        statusCode: 400,
        statusMessage: "Invalid user or query parameter. User must be a valid UUID or username and query must be a valid type of 'monthly' or 'alltime'.",
    })
}

const uuidOrName = user.data.user
const state = query.data.type

const { data: playerIdentity } = await useAsyncData(async () => {
    return await useMcIdentity().getByUuidOrName(uuidOrName)
})

defineOgImageComponent("PlayerStats", {
    playerIdentity: playerIdentity.value,
    state: state,
})

useSeoMeta({
    title: "Player Stats - " + (playerIdentity.value?.name || "Unknown Player"),
    description: `View detailed statistics of player ${playerIdentity.value?.name || "Unknown Player"} on SmashMC.`,
})
</script>
