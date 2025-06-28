<template>
    <div class="space-y-16">
        <p>{{ $t("welcome") }}</p>

        <UiButton @click="onBtnClick">
            <Icon name="lucide:box" />
            Click Me
        </UiButton>

        <AppSectionTopFivePlayers />
    </div>
</template>

<script lang="ts" setup>
function onBtnClick() {
    useToast().success("Button clicked!", {
        description: "You clicked the button successfully.",
        duration: 3000,
    })
}

defineOgImageComponent("Main")
useSeoMeta({
    title: "",
    description: "SmashMC is a unique Minecraft network with exciting mini-games. Our unique Smash mode is offering the best gameplay experience around. You can also explore different styles of Smash, such as GunGame and Teams, adding new twists to the game!",
})
</script>
