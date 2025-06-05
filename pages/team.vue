<template>
    <div class="flex flex-col items-center *:w-[80%] sm:*:w-fit ">
        
        <div class="grid 2xl:grid-cols-2 sm:items-start items-center gap-4">
            <div v-for="admin of admins" :key="admin.member.minecraftUuid" class="w-full">
                <TeamCard :teamMember="admin" />
            </div>
        </div>

        <div class="grid 2xl:grid-cols-2 sm:items-start items-center gap-4 mt-12">
            <div v-for="staff of staff" :key="staff.member.minecraftUuid" class="w-full">
                <TeamCard :teamMember="staff" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    
    const team = ref(await useTeamMembers().getAllTeamMembersWithMCIdentity());
    const admins = computed(() => [...team.value.filter(m => m.member.isAdmin)].sort(sortFunction));
    const staff = computed(() => [...team.value.filter(m => !m.member.isAdmin)].sort(sortFunction));


    function sortFunction(a: TeamMemberWithMCIdentity, b: TeamMemberWithMCIdentity): number {
        const dateA = new Date(a.member.joinedAt);
        const dateB = new Date(b.member.joinedAt);

        if (dateA > dateB) {
            return 1;
        } else if (dateA < dateB) {
            return -1;
        }

        return a.name.localeCompare(b.name);
    }

    useSeoMeta({
        title: "SmashMC | Team",
        ogTitle: "SmashMC | Team",
        description: "Meet the team behind SmashMC. Here you can find a list of all our staff members and administrators.",
        ogDescription: "Meet the team behind SmashMC. Here you can find a list of all our staff members and administrators.",
        ogType: "website",
    });

</script>
