<template>
    <div class="bg-backgroundColorLight rounded-2xl flex justify-between gap-8 overflow-hidden relative w-full">
        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-2">
            <SkinHeadRenderer class="flex-shrink-0 w-28 h-28 rounded-lg overflow-hidden" :skin-url="minecraftUser.texture"/>
            <div class="flex flex-col items-center sm:items-start">
                <p class="text-xl text-textColorLight font-bold">{{ minecraftUser.name }}</p>
                <p class="text-sm text-textColor/75 font-medium">{{ $t("teamlist_joined_at") }} {{ useUtils().formatDateWithoutTime(joinDate) }}</p>
                <div class="mt-2 flex flex-wrap sm:justify-start justify-center max-w-[20rem] gap-1">
                    <div v-for="domain of domains" class="text-backgroundColorLight flex items-center justify-center py-[4px] px-[8px] gap-1 bg-green-400/90 rounded-md">
                        <Icon :name="domain.icon" :size="15"/>
                        <p class="text-sm -mt-[2px]">{{ domain.name }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="self-end backdrop-brightness-150 rounded-tl-2xl p-1 px-3
                    hidden sm:flex items-center justify-center gap-4">
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
        teamMember: TeamMember
    }>();

    const minecraftUser = await useBasicMinecraftUser().uuidToBasicUser(props.teamMember.minecraftUuid);
    const domains = computed(() => props.teamMember.expand?.domains.sort((a, b) => a.position - b.position));

    
    const joinDate = new Date(props.teamMember.joinedAt);

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