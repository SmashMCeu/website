<template>
    <div class="bg-accent/75 rounded-2xl flex flex-col sm:flex-row sm:justify-between justify-center gap-3 sm:gap-8 overflow-hidden relative w-full">
        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 py-3 sm:p-2">
            <McSkinRender2dHead
                :skin-url="useMcIdentity().getTexture(member.identity).textures.SKIN?.url"
                class="flex-shrink-0 w-28 h-28 rounded-lg overflow-hidden"
            />
            <div class="flex flex-col items-center sm:items-start">
                <div class="flex items-center gap-2">
                    <p class="text-xl text-center font-bold">
                        {{ member.identity.name }}
                    </p>
                </div>
                <p class="text-sm text-muted-foreground text-center font-medium">
                    Joined on <NuxtTime
                        :datetime="joinDate"
                        :locale="bcp47Locale"
                    />
                </p>
                <div class="mt-3 flex flex-wrap sm:justify-start justify-center max-w-[15rem] sm:max-w-[20rem] px-2 sm:px-0 gap-1">
                    <AppTeamDomainBadge
                        v-for="domain in domains"
                        :key="domain.id"
                        :domain="domain"
                    />
                </div>
            </div>
        </div>
        <div
            class="self-end backdrop-brightness-150 rounded-t-xl sm:rounded-tl-2xl sm:rounded-tr-none py-[6px] sm:py-1 px-6 w-full sm:w-fit
                    flex items-center justify-center gap-4"
        >
            <div class="flex flex-col items-center">
                <p class="font-bold text-xl">
                    {{ inTeamSinceYears }}
                </p>
                <p class="font-medium text-sm -mt-1">
                    Years
                </p>
            </div>
            <div class="flex flex-col items-center">
                <p class="font-bold text-xl">
                    {{ inTeamSinceMonths }}
                </p>
                <p class="font-medium text-sm -mt-1">
                    Months
                </p>
            </div>
            <div class="flex flex-col items-center">
                <p class="font-bold text-xl">
                    {{ inTeamSinceDays }}
                </p>
                <p class="font-medium text-sm -mt-1">
                    Days
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    member: TeamMemberWithIdentity
}>()

const domains = computed(() => {
    const domainsArr = props.member.member.expand?.domains
    return domainsArr ? [...domainsArr].sort((a, b) => a.position - b.position) : []
})

const bcp47Locale = computed(() => {
    const { locale, locales } = useI18n()
    const currentLocale = locales.value.find(l => l.code === locale.value)
    return currentLocale?.language || locale.value
})

const joinDate = new Date(props.member.member.joinedAt)

const inTeamSinceYears = computed(() => {
    const now = new Date()
    let years = now.getFullYear() - joinDate.getFullYear()
    if (now < new Date(now.getFullYear(), joinDate.getMonth(), joinDate.getDate())) years--
    return years
})

const inTeamSinceMonths = computed(() => {
    const now = new Date()
    let months = now.getMonth() - joinDate.getMonth()
    if (now.getDate() < joinDate.getDate()) months--
    return months < 0 ? months + 12 : months
})

const inTeamSinceDays = computed(() => {
    const now = new Date()
    let days = now.getDate() - joinDate.getDate()
    if (days < 0) days += new Date(now.getFullYear(), now.getMonth(), 0).getDate()
    return days
})
</script>
