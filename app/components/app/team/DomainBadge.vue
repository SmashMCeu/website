<template>
    <UiBadge
        :variant="domain.display_style == 'outline' ? 'outline' : 'default'"
        class="flex items-center gap-2 text-sm"
        :style="{
            color: props.domain.color,
            borderColor: props.domain.color,
        }"
    >
        <Icon :name="domain.icon" />
        {{ domain.name }}
    </UiBadge>
</template>

<script setup lang="ts">
const props = defineProps<{
    domain: TeamMemberDomain
}>()
</script>
