<template>
    <div class="bg-backgroundColorLight rounded-2xl flex flex-col sm:flex-row sm:justify-between justify-center gap-3 sm:gap-8 overflow-hidden relative w-full">
        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 py-3 sm:p-2">
            <SkinHeadRenderer class="flex-shrink-0 w-28 h-28 rounded-lg overflow-hidden" :skin-url="teamMember.mcIdentity.texture" />
            <div class="flex flex-col items-center sm:items-start">
                <div class="flex items-center gap-2">
                    <p class="text-xl text-center font-bold">{{ teamMember.mcIdentity.name }}</p>
                    <p class="px-2 py-[3px] rounded-md text-xs font-semibold border" :class="teamMember.member.isAdmin ? 'text-[#AA0000] border-[#AA0000]' : 'text-[#FF5555] border-[#FF5555]'">
                        {{ teamMember.member.isAdmin ? "Admin" : "Staff" }}
                    </p>
                </div>
                <p class="text-sm text-textColor/75 text-center font-medium">{{ $t("teamlist_joined_at") }} {{ useUtils().formatDateWithoutTime(joinDate) }}</p>
                <div class="mt-3 flex flex-wrap sm:justify-start justify-center max-w-[15rem] sm:max-w-[20rem] gap-1">
                    <TeamDomainTag v-for="domain of domains" :domain="domain" />
                </div>
            </div>
        </div>
        <div class="self-end backdrop-brightness-150 rounded-t-xl sm:rounded-tl-2xl sm:rounded-tr-none py-[6px] sm:py-1 px-6 w-full sm:w-fit
                    flex items-center justify-center gap-4">
            <div class="flex flex-col items-center">
                <p class="font-bold text-xl">{{ inTeamSinceYears }}</p>
                <p class="font-medium text-sm -mt-1">{{ $t("teamlist_inteam_since_years") }}</p>
            </div>
            <div class="flex flex-col items-center">
                <p class="font-bold text-xl">{{ inTeamSinceMonths }}</p>
                <p class="font-medium text-sm -mt-1">{{ $t("teamlist_inteam_since_months") }}</p>
            </div>
            <div class="flex flex-col items-center">
                <p class="font-bold text-xl">{{ inTeamSinceDays }}</p>
                <p class="font-medium text-sm -mt-1">{{ $t("teamlist_inteam_since_days") }}</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    
    const props = defineProps<{
        teamMember: TeamMemberWithMCIdentity
    }>();

    const domains = computed(() => props.teamMember.member.expand?.domains.sort((a, b) => a.position - b.position));

    
    const joinDate = new Date(props.teamMember.member.joinedAt);

    const inTeamSinceYears = computed(() => {
    const now = new Date();
    let years = now.getFullYear() - joinDate.getFullYear();
    if (now.getMonth() < joinDate.getMonth() || (now.getMonth() === joinDate.getMonth() && now.getDate() < joinDate.getDate())) {
        years--;
    }
    return years;
});

const inTeamSinceMonths = computed(() => {
    const now = new Date();
    let months = now.getMonth() - joinDate.getMonth();
    if (now.getDate() < joinDate.getDate()) {
        months--;
    }
    if (months < 0) {
        months += 12;
    }
    return months;
});

const inTeamSinceDays = computed(() => {
    const now = new Date();
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    let days = now.getDate() - joinDate.getDate();
    if (days < 0) {
        days += lastMonth.getDate();
    }
    return days;
});

</script>