<template>
    <DialogRoot @update:open="open => open && onMenuLoad()">
        <DialogTrigger>
            <slot />
        </DialogTrigger>
        <DialogPortal>
            <DialogOverlay class="data-[state=open]:animate-dialogOverlayShow bg-black/50 fixed grid items-center inset-0 z-30 overflow-y-auto">
                <DialogContent
                    @pointer-down-outside="(event) => {
                        const originalEvent = event.detail.originalEvent;
                        const target = originalEvent.target as HTMLElement;
                        if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
                            event.preventDefault();
                        }
                    }"
                    class="data-[state=open]:animate-dialogContentShow
                            rounded-lg bg-backgroundColorLight fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[100]
                            flex flex-col gap-6 mt-10 h-[80vh] md:h-[60vh] max-h-[85vh] w-[90vw] max-w-[45rem]">

                    <VisuallyHidden>
                        <DialogTitle>{{ character.name }}</DialogTitle>
                    </VisuallyHidden>
                    <div class="flex flex-col gap-4 h-full w-full p-4 pl-8">
                        <div class="flex justify-between">
                            <div class="flex items-center gap-2">
                                <p class="text-textColorLight text-xl font-bold">{{ character.name }}</p>
                                <p v-if="character.isPro" class="mt-1 px-[8px] pt-[2px] pb-[3px] text-sm text-primary border-2 border-primary rounded-lg font-semibold">PRO</p>
                                <p v-if="character.isBetaCharacter" class="mt-1 px-[8px] pt-[2px] pb-[3px] text-sm text-primary border-2 border-primary rounded-lg font-semibold">Beta</p>
                            </div>
                            <DialogClose aria-label="Close" class="text-textColor hover:text-primary transition-colors">
                                <Icon aria-hidden name="solar:close-square-outline" class="w-10 h-10"/>
                            </DialogClose>
                        </div>
                        <div class="overflow-y-scroll hide-scrollbar
                                    flex-grow flex sm:flex-row sm:flex-nowrap flex-wrap gap-8">
                            <div class="flex flex-col w-[15rem] max-w-[15rem]">
                                <div class="rounded-lg bg-backgroundColor/50 overflow-hidden p-4 relative">
                                    <SkinRenderer :skin-image="currentSkin.url" :is-slim="currentSkin.isSlim" :pause-animation="pauseAnimation" />
                                    <div @click="pauseAnimation = !pauseAnimation" class="absolute top-3 right-3 px-2 py-1 bg-backgroundColorLight hover:bg-backgroundColorLight/75 transition-colors rounded-md cursor-pointer">
                                        <Icon :name="pauseAnimation ? 'solar:play-bold' : 'solar:pause-bold'" class="text-textColor w-4 h-4"/>
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <CharactersSkinsDropdown @update:value="val => switchSkin(val)" :skins="characterSkins" />
                                </div>
                            </div> 
                            <div class="flex-grow">
                                <div class="sm:pb-4 pb-0 flex sm:flex-col flex-row flex-wrap">
                                    <div class="pb-4 pr-20 flex flex-col gap-2">
                                        <p class="text-textColorLight font-semibold">Schwierigkeit:</p>
                                        <p class="text-primary">
                                            <Icon v-for="i in 3" :key="i" :name="i - 1 <= ['easy', 'medium', 'hard'].indexOf(character.difficulty) ? 'solar:star-bold' : 'solar:star-outline'" :class="[['text-green-400', 'text-yellow-300', 'text-red-500'].at(['easy', 'medium', 'hard'].indexOf(character.difficulty))]" class="w-6 h-6"/>
                                        </p>
                                    </div>
                                    <div v-if="character.cooldown" class="pb-4 flex flex-col gap-2">
                                        <p class="text-textColorLight font-semibold">Cooldown:</p>
                                        <p class="text-primary flex"><Icon name="solar:alarm-outline" class="w-6 h-6"/><span class="ml-1 -mt-[1px]">{{ character.cooldown }}</span></p>
                                    </div>
                                </div>
                                <div class="pb-4">
                                    <p class="text-textColorLight font-semibold">Description:</p>
                                    <p class="text-textColor">{{ character.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </DialogContent>
            </DialogOverlay>
        </DialogPortal>
    </DialogRoot>
</template>
<script lang="ts" setup>

    function onMenuLoad() {
        pauseAnimation.value = false;
        switchSkin(characterSkins.value[0]);
    }
    
    const props = defineProps<{
        character: SmashCharacter
    }>();
    const pauseAnimation: Ref<boolean> = ref(false);

    const characterSkins: Ref<SmashCharacterSkin[]> = ref([
        {
            name: "Default",
            url: useSmashCharacters().getCharacterImgUrl(props.character, props.character.skin),
            isSlim: props.character.isSlimSkin
        },
        ...props.character.expand?.skins_via_character ?? []
    ]);

    const currentSkin: Ref<SmashCharacterSkin> = ref(characterSkins.value[0]);

    function switchSkin(skin: SmashCharacterSkin) {
        currentSkin.value = skin;
    }
    

    

</script>