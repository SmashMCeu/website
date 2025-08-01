<template>
    <div>
        <div class="flex flex-col items-center gap-12">
            <div class="space-y-6">
                <p class="font-bold text-2xl">
                    Admins ({{ admins.length }}):
                </p>

                <div class="grid 2xl:grid-cols-2 sm:items-start items-center gap-4">
                    <AppTeamMemberCard
                        v-for="member in admins"
                        :key="member.identity.uuid"
                        :member="member"
                    />
                </div>
            </div>

            <div class="space-y-6">
                <p class="font-bold text-2xl">
                    Staff ({{ staff.length }}):
                </p>

                <div class="grid 2xl:grid-cols-2 sm:items-start items-center gap-4">
                    <AppTeamMemberCard
                        v-for="member in staff"
                        :key="member.identity.uuid"
                        :member="member"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AppTeamMemberCard } from "#components"

const { data: teamMembers } = await useAsyncData<TeamMemberWithIdentity[]>(async () => {
    return await useTeamMembers().getAllWithIdentities()
})

const sortedTeamMembers = computed(() => {
    if (!teamMembers.value) return []
    return [...teamMembers.value].sort(sortFunction)
})

const admins = computed(() => [...sortedTeamMembers.value].filter(member => member.member.isAdmin))
const staff = computed(() => [...sortedTeamMembers.value].filter(member => !member.member.isAdmin))

function sortFunction(a: TeamMemberWithIdentity, b: TeamMemberWithIdentity): number {
    const dateA = new Date(a.member.joinedAt)
    const dateB = new Date(b.member.joinedAt)

    return dateA.getTime() - dateB.getTime() || a.identity.name.localeCompare(b.identity.name)
}
</script>
