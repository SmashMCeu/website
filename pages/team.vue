<template>
    <div class="flex flex-col items-center sm:items-start">
        <UtilTitle title="Admins:" subtitle="" orientation="left"/>
        <div class="flex flex-col sm:items-start items-center gap-4">
            <div v-for="admin of admins" class="w-full">
                <TeamCard :teamMember="admin" />
            </div>
        </div>

        <UtilTitle title="Team:" subtitle="" orientation="left" class="mt-24"/>
        <div class="flex flex-col sm:items-start items-center gap-4">
            <div v-for="staff of staff" class="w-full">
                <TeamCard :teamMember="staff" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    
    const team = ref(await useTeamMembers().getAllTeamMembers());
    const admins = computed(() => team.value.filter(member => member.isAdmin));
    const staff = computed(() => team.value.filter(member => !member.isAdmin));

</script>