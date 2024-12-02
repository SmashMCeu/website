<template>
    <UtilPopup :title="character.name" v-on:menu-open="() => onMenuLoad()">
        <template #trigger>
            <slot />
        </template>
        <template #title>
            <p>{{ character.name }}</p>
            <p v-if="character.isPro" class="mt-1 px-[8px] pt-[2px] pb-[3px] text-sm text-primary border-2 border-primary rounded-lg font-semibold">PRO</p>
            <p v-if="character.isBetaCharacter" class="mt-1 px-[8px] pt-[2px] pb-[3px] text-sm text-primary border-2 border-primary rounded-lg font-semibold">Beta</p>
        </template>
        <template #content>
            <div class="flex flex-col w-[15rem] max-w-[15rem]">
                <div class="rounded-lg bg-backgroundColor/50 overflow-hidden p-4 relative">
                    <SkinRenderer :skin-image="currentSkin.url" :is-slim="currentSkin.isSlim" :pause-animation="pauseAnimation" />
                    <div @click="pauseAnimation = !pauseAnimation" class="absolute top-3 right-3 px-2 py-1 bg-backgroundColorLight hover:bg-backgroundColorLight/75 transition-colors rounded-md cursor-pointer">
                        <Icon size="16" :name="pauseAnimation ? 'solar:play-bold' : 'solar:pause-bold'" class="text-textColor"/>
                    </div>
                </div>
                <div class="mt-2">
                    <CharactersSkinsDropdown @update:value="val => switchSkin(val)" :skins="characterSkins" />
                </div>
            </div> 
            <div class="flex-grow">
                <div class="sm:pb-4 pb-0 flex sm:flex-col flex-row flex-wrap">
                    <div class="pb-4 pr-20 flex flex-col gap-2">
                        <p class="text-textColorLight font-semibold">{{ $t('character_difficulty') }}:</p>
                        <p class="text-primary">
                            <Icon v-for="i in 3" :key="i" :name="i - 1 <= ['easy', 'medium', 'hard'].indexOf(character.difficulty) ? 'solar:star-bold' : 'solar:star-outline'" :class="[['text-green-400', 'text-yellow-300', 'text-red-500'].at(['easy', 'medium', 'hard'].indexOf(character.difficulty))]" size="24"/>
                        </p>
                    </div>
                    <div v-if="character.cooldown" class="pb-4 flex flex-col gap-2">
                        <p class="text-textColorLight font-semibold">{{ $t('character_cooldown') }}:</p>
                        <p class="text-primary flex"><Icon name="solar:alarm-outline" size="24"/><span class="ml-1 -mt-[1px]">{{ character.cooldown }}</span></p>
                    </div>
                </div>
                <div class="pb-4">
                    <p class="text-textColorLight font-semibold">{{ $t('character_description') }}:</p>
                    <p class="text-textColor">{{ character.description }}</p>
                </div>
            </div>
        </template>
    </UtilPopup>
</template>
<script lang="ts" setup>

    
    const props = defineProps<{
        character: SmashCharacter
    }>();


    const characterSkins: Ref<SmashCharacterSkin[]> = ref(getSkins());
    const currentSkin: Ref<SmashCharacterSkin> = ref(characterSkins.value[0]);
    const pauseAnimation: Ref<boolean> = ref(false);
    

    function onMenuLoad() {
        pauseAnimation.value = false;
        switchSkin(characterSkins.value[0]);
    }

    function getSkins(): SmashCharacterSkin[] {
        return [
            {
                name: "Default",
                url: useSmashCharacters().getCharacterImgUrl(props.character, props.character.skin),
                isSlim: props.character.isSlimSkin
            },
            ...props.character.expand?.skins_via_character ?? []
        ]
    }
    
    function switchSkin(skin: SmashCharacterSkin) {
        currentSkin.value = skin;
    }
    

    

</script>